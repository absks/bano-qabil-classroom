from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent
SRC = ROOT

def quiz(line):
    prompt, *values = line.split('|')
    assert len(values) == 5, line
    [answer] = [i for i, choice in enumerate(values[:4]) if choice.startswith('*')]
    choices = [choice.removeprefix('*') for choice in values[:4]]
    assert len(set(choices)) == 4, line
    return {'prompt': prompt, 'choices': choices, 'answer': answer, 'explanation': values[4]}

lessons = []
for file in ('01-04.txt', '05-08.txt'):
    for line in (SRC / file).read_text().splitlines():
        if not line:
            continue
        symbol = line[0]
        body = line[2:]
        if symbol == '#':
            lesson = dict(id=len(lessons)+1, title=body, objectives=[], slides=[], notes=[], refs=[], quiz=[])
            lessons.append(lesson)
        elif symbol in '@=':
            lesson[{'@': 'track', '=': 'summary'}[symbol]] = body
        elif symbol == '+':
            lesson['objectives'].append(body)
        elif symbol == '>':
            slide = dict(title=body, points=[], code=[])
            lesson['slides'].append(slide)
        elif symbol == '$':
            slide = dict(title=body, points=[])
            lesson['lab'] = slide
        elif symbol == '-':
            slide['points'].append(body)
        elif symbol in '!~&':
            slide[{'!':'example','~':'cue','&':'deliverable'}[symbol]] = body
        elif symbol == ':':
            slide['code'].append(body)
        elif symbol == '%':
            lesson['notes'].append(body)
        elif symbol == '^':
            lesson['refs'].append([piece.strip() for piece in body.split('|')])
        elif symbol == '?':
            lesson['quiz'].append(quiz(body))
        else:
            raise ValueError(line)
final = [quiz(line[2:]) for line in (SRC / 'final.txt').read_text().splitlines()]
roadmap = []
for line in (SRC / 'roadmap.txt').read_text().splitlines():
    title, ids, topics = line.split('|')
    roadmap.append(dict(title=title, lessons=[int(i) for i in ids.split(',')], weeks=topics.split('; ')))
assert len(lessons) == 8 and len(final) == 16 and len(roadmap) == 6
for l in lessons:
    assert len(l['slides']) == 5 and len(l['quiz']) == 8 and len(l['notes']) == 5
    assert all(len(r) == 3 and r[1].startswith('https://') for r in l['refs'])
    assert len(l['lab']['points']) == 4
payload = dict(lessons=lessons, final=final, roadmap=roadmap)
(ROOT / 'course.js').write_text('window.COURSE = '+json.dumps(payload, ensure_ascii=False, indent=2)+';\n')
