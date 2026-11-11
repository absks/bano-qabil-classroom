from pathlib import Path
import json
from teaching import enrich

ROOT = Path(__file__).resolve().parent
COURSES = ('001', '005', '006', '007', '023', '024')

def fields(body, size):
    values = [value.strip() for value in body.split('|')]
    assert len(values) == size and all(values), body
    return values

def question(body, rotation):
    prompt, answer, other1, other2, other3, explanation = fields(body, 6)
    choices = [answer, other1, other2, other3]
    assert len(set(choices)) == 4, prompt
    rotation %= len(choices)
    choices = choices[rotation:] + choices[:rotation]
    return dict(prompt=prompt, choices=choices, answer=choices.index(answer), explanation=explanation)

references = {}
for line in (ROOT / 'references.txt').read_text(encoding='utf-8').splitlines():
    key, title, url, description = fields(line, 4)
    assert key not in references and url.startswith('https://'), line
    references[key] = [title, url, description]

def read_course(code, course_index):
    course = dict(id='bq' + code, code='BQ-' + code, lessons=[], final=[])
    lesson = None
    slide = None
    for line in (ROOT / ('bq' + code + '.txt')).read_text(encoding='utf-8').splitlines():
        if not line:
            continue
        body = line[2:]
        symbol = line[0]
        if symbol == '@':
            course['title'], course['summary'], course['outcome'], course['theme'] = fields(body, 4)
        elif symbol == '#':
            title, source, summary = fields(body, 3)
            lesson = dict(id=len(course['lessons']) + 1, title=title, source=source,
                          summary=summary, objectives=[], slides=[], quiz=[])
            course['lessons'].append(lesson)
        elif symbol == '+':
            lesson['objectives'].append(body)
        elif symbol == '>':
            title, concept, application, example = fields(body, 4)
            slide = dict(title=title, points=[concept, application], example=example, code=[])
            lesson['slides'].append(slide)
        elif symbol == ':':
            slide['code'].append(body)
        elif symbol == '$':
            title, scenario, deliverable = fields(body, 3)
            lesson['lab'] = dict(title=title, example=scenario, deliverable=deliverable, points=[])
        elif symbol == '-':
            lesson['lab']['points'].append(body)
        elif symbol == '%':
            lesson['notes'] = fields(body, 5)
        elif symbol == '&':
            lesson['softSkill'] = body
        elif symbol == '^':
            lesson['refs'] = [references[key.strip()] for key in body.split(',')]
        elif symbol == '?':
            lesson['quiz'].append(question(body, course_index + lesson['id'] + len(lesson['quiz'])))
        elif symbol == '!':
            course['final'].append(question(body, course_index + 2 + len(course['final'])))
        else:
            raise ValueError(line)
    return course

def validate(course):
    assert len(course['lessons']) == len(course['final']) == 8, course['code']
    source_weeks = []
    prompts = [q['prompt'] for q in course['final']]
    for lesson in course['lessons']:
        assert len(lesson['objectives']) == 3, lesson['title']
        assert len(lesson['slides']) == len(lesson['quiz']) == len(lesson['notes']) == 5, lesson['title']
        assert len(lesson['lab']['points']) == 4 and len(lesson['refs']) >= 2, lesson['title']
        limits = [int(n) for n in lesson['source'].split('–')]
        source_weeks.extend(range(limits[0], limits[-1] + 1))
        prompts.extend(q['prompt'] for q in lesson['quiz'])
    assert source_weeks == list(range(1, 13)), course['code']
    assert len(set(prompts)) == len(prompts), course['code']

for index, code in enumerate(COURSES):
    course = read_course(code, index)
    validate(course)
    enrich(course)
    data = json.dumps(course, ensure_ascii=False, separators=(',', ':'))
    (ROOT / ('bq' + code + '.js')).write_text('window.BQ_COURSES.push(' + data + ');\n', encoding='utf-8')
