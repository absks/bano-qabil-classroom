'use strict';
const courses = window.BQ_COURSES;
const courseById = new Map(courses.map(course => [course.id,course]));
const weeklyPass = 4;
const finalPass = 6;
const main = document.querySelector('#main');
const nav = document.querySelector('#navigation');
const menu = document.querySelector('#menu');
const sidebar = document.querySelector('#sidebar');
const progress = document.querySelector('#progress');
const sections = [
  ['slides', 'Presentation'], ['lab', 'Practical lab'], ['quiz', 'Quiz'],
  ['teacher', 'Teacher guide'], ['refs', 'References'],
];
const courseIcons = {market:'↗',shield:'⬡',office:'▦',web:'⌘',agent:'◎',spark:'✦'};
const sidebarTitles = ['Digital Marketing','Cyber Security','Computer & IT','WordPress','Agentic AI','Generative AI'];
const legacy = [['bq006',4],['bq007',1],['bq007',6],['bq001',1],['bq005',1],['bq024',3],['bq024',5],['bq023',5]];
const schedule = [
  ['00–10','Opening','Introduce the scenario, explain the objectives, and ask learners to predict a result.'],
  ['10–40','Concepts and examples','Use the five teaching slides. Demonstrate the worked examples and ask a learner to explain one decision.'],
  ['40–75','Practical lab','Model the first step. Have pairs work through the remaining tasks and verify their submission against the criteria.'],
  ['75–85','Knowledge check','Run the five-question quiz and discuss the reasoning behind missed answers.'],
  ['85–90','Exit ticket','Ask each learner for one result they verified and one question they still have. Assign the extension.'],
];
const storeKey = 'bq-classroom-courses-v2';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(storeKey)) || {}; } catch {}
const attempts = new Map();
let route;
let slideIndex = 0;
let deckOpen = false;

function persist() {
  try { localStorage.setItem(storeKey, JSON.stringify(saved)); } catch {}
}
function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
}
const two = n => String(n).padStart(2,'0');
const courseUrl = (course, page = '') => '#course/' + course.id + (page ? '/' + page : '');
const url = (course, week, section = 'slides') => courseUrl(course,'week/' + week + '/' + section);
const quizKey = (course, week) => course.id + ':' + week;
const link = (href, label, className = '') => '<a class="' + className + '" href="' + href + '">' + esc(label) + '</a>';
const button = (action, label, className = '', disabled = false) => '<button type="button" class="' + className + '" data-action="' + action + '"' + (disabled ? ' disabled' : '') + '>' + esc(label) + '</button>';
const list = (values, tag = 'ul') => '<' + tag + '>' + values.map(value => '<li>' + esc(value) + '</li>').join('') + '</' + tag + '>';
const tag = text => '<span class="eyebrow">' + esc(text) + '</span>';

function weekRoute(course, week, tab, rawSlide) {
  const lesson = course.lessons[Number(week)-1];
  if (!lesson) return {page:'course',course};
  const section = sections.some(([key]) => key === tab) ? tab : 'slides';
  const slide = Math.min(6,Math.max(0,(Number.parseInt(rawSlide,10) || 1)-1));
  return {page:'week',course,lesson,section,slide};
}
function getRoute() {
  const [page, id, part, week, tab, slide] = location.hash.slice(1).split('/');
  const course = courseById.get(id);
  if (page === 'course' && course) {
    if (part === 'week') return weekRoute(course,week,tab,slide);
    return {page:['final','capstone'].includes(part) ? part : 'course',course};
  }
  const previous = legacy[Number(id)-1];
  if (page === 'lecture' && previous) return weekRoute(courseById.get(previous[0]),previous[1],part,week);
  return {page:page === 'roadmap' ? 'roadmap' : 'home'};
}
function navLink(href, label, glyph, active, status = '') {
  return '<a href="' + href + '"' + (active ? ' class="active" aria-current="page"' : '') + '><span class="nav-icon" aria-hidden="true">' + glyph + '</span><span>' + esc(label) + '</span>' + (status ? '<span class="nav-done" aria-label="Quiz passed">✓</span>' : '') + '</a>';
}
function updateNav() {
  const {course,lesson,page} = route;
  nav.innerHTML = navLink('#home','All courses','⌂',page === 'home') +
    navLink('#roadmap','Syllabus map','≡',page === 'roadmap') +
    '<div class="nav-label lectures-label">COURSES</div>' +
    courses.map((item,i) => navLink(courseUrl(item),sidebarTitles[i],courseIcons[item.theme],item === course && page === 'course')).join('') +
    (course ? '<div class="nav-label lectures-label">' + course.code + ' · WEEKS</div>' +
      course.lessons.map(item => navLink(url(course,item.id),item.title,two(item.id),item === lesson,saved[quizKey(course,item.id)]?.best >= weeklyPass ? 'done' : '')).join('') +
      '<div class="nav-label lectures-label">ASSESSMENT</div>' +
      navLink(courseUrl(course,'final'),'Final test','✓',page === 'final') +
      navLink(courseUrl(course,'capstone'),'Capstone project','◇',page === 'capstone') : '');
  if (!course) {
    progress.hidden = true;
    return;
  }
  const count = course.lessons.filter(item => saved[quizKey(course,item.id)]?.best >= weeklyPass).length;
  progress.hidden = false;
  progress.innerHTML = '<div><strong>Course progress</strong><small>' + count + ' / 8 passed</small></div><progress max="8" value="' + count + '" aria-label="Weekly quizzes passed"></progress><small>Saved on this browser</small>';
}
function pageHeading(kicker, title, description) {
  return '<div class="page-heading">' + tag(kicker) + '<h1>' + esc(title) + '</h1><p>' + esc(description) + '</p></div>';
}
function home() {
  return '<section class="hero course-hero"><div class="hero-copy"><h1>Digital Skills<br><em>Classroom</em></h1><p>Choose one of six Bano Qabil courses. Each has eight weekly presentations, practical labs, word-for-word teacher guides, and quizzes.</p><div class="actions">' + link('#roadmap','View syllabus map →','btn outline') + '</div></div>' +
    '<div class="hero-art" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="hero-icons">' + courses.map(item => '<span>' + courseIcons[item.theme] + '</span>').join('') + '</div></div></section>' +
    '<section class="catalog course-catalog"><div class="section-heading"><h2>Choose a course</h2></div><div class="cards">' +
    courses.map((course,i) => '<article class="lesson-card course-card"><div class="card-top"><span class="tile tile-' + i + '" aria-hidden="true">' + courseIcons[course.theme] + '</span><span class="card-count">' + course.code + '</span></div><h3>' + esc(course.title) + '</h3><p>' + esc(course.summary) + '</p><div class="card-actions">' + link(courseUrl(course),'Open course →','card-link') + '<span>8 weeks</span></div></article>').join('') + '</div></section>';
}
function coursePage(course) {
  const next = course.lessons.find(item => !(saved[quizKey(course,item.id)]?.best >= weeklyPass));
  const nextLink = next ? link(url(course,next.id),'Open week ' + two(next.id) + ' →','btn primary') : link(courseUrl(course,'final'),'Take final test →','btn primary');
  const best = saved[quizKey(course,'final')]?.best;
  return pageHeading(course.code + ' · EIGHT-WEEK COURSE',course.title,course.summary) +
    '<section class="panel course-intro"><div><h2>Course outcome</h2><p>' + esc(course.outcome) + '</p></div><div class="actions">' + nextLink + link('#roadmap','Syllabus map','btn neutral') + '</div></section>' +
    '<section class="catalog course-catalog"><div class="section-heading"><h2>Weekly sessions</h2><span>90-minute teaching plan for each week</span></div><div class="cards">' +
    course.lessons.map(lesson => '<article class="lesson-card"><div class="card-top"><span class="card-count">WEEK ' + two(lesson.id) + '</span>' + (saved[quizKey(course,lesson.id)]?.best >= weeklyPass ? '<span class="card-count">✓ QUIZ PASSED</span>' : '') + '</div><h3>' + esc(lesson.title) + '</h3><p>' + esc(lesson.summary) + '</p><div class="card-actions">' + link(url(course,lesson.id),'Open week ' + two(lesson.id) + ' →','card-link') + link(url(course,lesson.id,'teacher'),'Teacher notes','muted-link') + '</div></article>').join('') + '</div></section>' +
    '<section class="assessment-strip"><div><h2>Final test and capstone</h2><p>' + (best === undefined ? 'Apply what you learned in the eight-question final test and course project.' : 'Final test best score on this browser: ' + best + ' / 8.') + '</p></div><div class="actions">' + link(courseUrl(course,'final'),'Open final test →','btn primary') + link(courseUrl(course,'capstone'),'View capstone','btn neutral') + '</div></section>';
}
function sourceLabel(lesson) {
  return 'Outline week' + (lesson.source.includes('–') ? 's ' : ' ') + lesson.source;
}
function roadmapPage() {
  return pageHeading('SYLLABUS MAP','Original outline to weekly sessions','Each course follows its own 12-week source outline. Related topics are combined into eight teaching weeks in the original order.') +
    '<div class="roadmap-grid">' + courses.map(course => '<section class="panel"><h2>' + esc(course.title) + '</h2>' + link(courseUrl(course),'Open ' + course.code + ' →','btn neutral') +
      '<ol class="mapping-list">' + course.lessons.map(item => '<li><span>Week ' + two(item.id) + '</span><div>' + link(url(course,item.id),item.title) + '<small>' + esc(sourceLabel(item)) + '</small></div></li>').join('') + '</ol></section>').join('') + '</div>';
}
function slidesFor(lesson) {
  return [
    {title:lesson.title,points:lesson.objectives,cue:lesson.script[0].say.join('\n\n')},
    ...lesson.slides.map((slide,i) => ({...slide,cue:lesson.script[i+1].say.join('\n\n')})),
    {...lesson.lab,points:lesson.lab.points,cue:lesson.script[6].say.join('\n\n')},
  ];
}
function journey(lesson) {
  return '<div class="visual-journey" aria-label="Lesson idea in three parts">' + lesson.simple.flow.map((step,i) => '<div><span>' + two(i+1) + '</span><strong>' + esc(step) + '</strong></div>').join('') + '</div>';
}
function slideContent(lesson,index) {
  const slide = slidesFor(lesson)[index];
  const isOpening = index === 0;
  return '<div class="slide-inner visual-slide theme-' + route.course.theme + (isOpening ? ' opening' : '') + '"><div class="slide-meta"><span>' + esc(route.course.code) + ' / WEEK ' + two(lesson.id) + '</span><span>' + two(index+1) + ' / 07</span></div><div class="slide-copy"><p class="slide-kicker">' + (isOpening ? 'TODAY’S BIG IDEA' : index === 6 ? 'YOUR TURN · BUILD SOMETHING' : 'UNDERSTAND · TRY · EXPLAIN') + '</p><h2 id="slide-heading">' + esc(isOpening ? lesson.simple.idea : slide.title) + '</h2>' +
    (isOpening ? journey(lesson) + '<div class="goal-cards">' + slide.points.map((point,i) => '<div><span>' + ['Understand','Practise','Explain'][i] + '</span><p>' + esc(point) + '</p></div>').join('') + '</div>' : '<div class="concept-layout"><div class="concept-cards">' + slide.points.map((point,i) => '<article><span class="concept-number">' + two(i+1) + '</span><div><h3>' + (index === 6 ? 'Step ' + (i+1) : i === 0 ? 'The idea' : 'How to use it') + '</h3><p>' + esc(point) + '</p></div></article>').join('') + '</div><aside class="example-studio"><div class="mini-window"><i></i><i></i><i></i><span>CLASSROOM EXAMPLE</span></div><span class="example-glyph" aria-hidden="true">' + courseIcons[route.course.theme] + '</span><p>' + esc(slide.example || lesson.simple.analogy) + '</p>' + (slide.code?.length ? '<pre><code>' + esc(slide.code.join('\n')) + '</code></pre>' : '') + '<span class="example-prompt">Pause → Explain this to a partner</span></aside></div>') + '</div><div class="slide-track" aria-hidden="true">' + Array.from({length:7},(_,i) => '<i class="' + (i <= index ? 'filled' : '') + '"></i>').join('') + '</div></div>';
}
function slideControls(index, modal = false) {
  return '<div class="slide-controls">' + button('previous-slide','← Previous','btn neutral',index === 0) + '<span class="slide-count" aria-live="polite">Slide ' + (index+1) + ' of 7</span>' + button('next-slide','Next →','btn neutral',index === 6) + (modal ? button('close-deck','Exit','btn neutral') : button('open-deck','⛶ Present','btn dark')) + '</div>';
}
function slidesPanel(lesson) {
  return '<div class="slide-frame" id="slide-frame"><div id="inline-slide">' + slideContent(lesson,slideIndex) + '</div><div id="inline-controls">' + slideControls(slideIndex) + '</div></div><div class="slide-bottom"><details class="panel speaker"><summary>Read-aloud script for this slide</summary><p id="speaker-cue">' + esc(slidesFor(lesson)[slideIndex].cue) + '</p></details><p class="keyboard">Use <kbd>←</kbd> <kbd>→</kbd> to navigate. <kbd>Esc</kbd> exits presentation mode.</p></div><dialog id="deck" aria-label="Presentation mode"><div id="deck-slide"></div><div id="deck-controls"></div></dialog>';
}
function demoFor(course,week) {
  if (course.id === 'bq006' && week === 4) return '<section class="panel demo"><h3>Try the attendance threshold</h3><p>Adjust the cutoff and predict how many students will be on track.</p><label for="threshold">Minimum sessions <output id="threshold-value" for="threshold">8</output></label><input id="threshold" type="range" min="0" max="10" value="8"><p id="demo-result" role="status">3 on track · 1 follow-up</p></section>';
  if (course.id === 'bq001' && week === 1) return '<section class="panel demo"><h3>Try the conversion calculator</h3><p>Change the numbers to compare results.</p><div class="form-row"><label>Verified inquiries<input id="inquiries" type="number" min="0" step="1" value="12"></label><label>Visits<input id="visits" type="number" min="1" step="1" value="300"></label></div><p id="demo-result" role="status">4% of visits</p></section>';
  if (course.id === 'bq023' && week === 5) return '<section class="panel demo"><h3>Walk through the decision</h3><p>Switch scenarios and predict where the assistant should stop.</p><label>Choose a case<select id="agent-case"><option value="known">Known schedule question</option><option value="missing">Fee absent from sources</option><option value="conflict">Conflicting schedule entries</option><option value="approval">Draft proposed for sending</option></select></label><p id="demo-result" role="status">Look up → Verify source → Return a cited answer.</p></section>';
  return '';
}
function labPanel(lesson,course) {
  const lab = lesson.lab;
  return '<div class="reading-grid"><article class="panel">' + tag('35 MIN · CLASSROOM EXERCISE') + '<h2>' + esc(lab.title) + '</h2><p>' + esc(lab.example) + '</p><h3>Steps</h3>' + list(lab.points,'ol') + '<div class="callout"><strong>What to submit</strong><p>' + esc(lab.deliverable) + '</p></div></article>' + demoFor(course,lesson.id) + '</div>';
}
function teacherPanel(lesson) {
  const labels = ['Prepare before class','Demo setup and troubleshooting','Expected results','Marking guide · 10 points','Homework'];
  return '<section class="teacher-welcome"><div>' + tag('TEACHER STUDIO · WEEK ' + two(lesson.id)) + '<h2>Your word-for-word teaching guide</h2><p>Read the “Say this” paragraphs aloud or rehearse them before class. “Do this” tells you what to show. Each question includes a model answer.</p></div><div class="actions">' + button('download-notes','↓ Download guide','btn primary') + button('print','Print / Save PDF','btn neutral') + '</div></section><div class="teacher-layout"><article><section class="panel prep-panel"><h2>1. Get ready</h2><p class="guide-intro">Read the lesson once, try its lab yourself, and keep a sample result ready. The schedule below is a suggested 90-minute class; slow down when learners need more practice.</p>' + lesson.notes.map((n,i) => '<div><h3>' + labels[i] + '</h3><p>' + esc(n) + '</p></div>').join('') + '</section><section class="panel"><h2>2. Understand it in everyday words</h2><div class="big-idea">' + esc(lesson.simple.idea) + '</div><p>' + esc(lesson.simple.analogy) + '</p>' + journey(lesson) + '<div class="misconception"><b>Common mistake to correct</b><p>' + esc(lesson.simple.mistake) + '</p></div>' + (lesson.glossary.length ? '<h3>Words to explain before teaching</h3><dl class="word-guide">' + lesson.glossary.map(([term,meaning]) => '<div><dt>' + esc(term) + '</dt><dd>' + esc(meaning) + '</dd></div>').join('') + '</dl>' : '') + '</section><h2 class="script-heading">3. Teach it, step by step</h2><p>All spoken text is visible below. Use the contents panel to jump to a teaching stage.</p>' + lesson.script.map((part,i) => '<section class="panel script-section" id="script-' + i + '"><div class="script-meta"><span>' + esc(part.time) + '</span>' + (part.slide ? link(url(route.course,lesson.id,'slides') + '/' + part.slide,'Open slide ' + part.slide,'slide-jump') : '') + '</div><h2>' + esc(part.title) + '</h2><div class="say-label">SAY THIS</div><div class="spoken">' + part.say.map(para => '<p>' + esc(para) + '</p>').join('') + '</div><div class="teacher-action"><b>DO THIS</b><p>' + esc(part.do) + '</p></div><div class="check-understanding"><b>ASK THE CLASS</b><p>' + esc(part.ask) + '</p><details><summary>Model answer / what to listen for</summary><p>' + esc(part.answer) + '</p></details></div></section>').join('') + '<section class="panel"><h2>4. Discuss the quiz answers</h2>' + lesson.quiz.map((q,i) => '<div class="answer-explained"><h3>' + (i+1) + '. ' + esc(q.prompt) + '</h3><p><strong>Say: “' + esc(q.choices[q.answer].replace(/[.!?]+$/, '')) + '.”</strong></p><p>' + esc(q.explanation) + '</p></div>').join('') + '</section>' + (lesson.softSkill ? '<section class="panel"><h2>Extra soft-skills practice</h2><p>' + esc(lesson.softSkill) + '</p><p><strong>Say:</strong> “Now practise this skill with a partner. First take turns speaking, then give one helpful suggestion. Repeat the activity using the feedback.”</p><p>This is additional practice outside the 90-minute subject lesson.</p></section>' : '') + '</article><aside class="teacher-contents panel"><h3>Lesson contents</h3><p>90-minute teaching plan</p>' + lesson.script.map((part,i) => '<button class="contents-link" data-script="' + i + '"><span>' + esc(part.time) + '</span>' + esc(part.title) + '</button>').join('') + '<div class="callout"><b>Preparation tip</b><p>Rehearse the examples, not just the slide titles. Keep this guide on a second device while presenting.</p></div></aside></div>';
}
function notesText(lesson,course) {
  return course.title + ' — Week ' + lesson.id + '\n' + lesson.title + '\nWORD-FOR-WORD TEACHER GUIDE\n\n' + lesson.notes.map((n,i) => ['Before class','Demonstration','Expected result','Marking guide','Homework'][i]+': '+n).join('\n\n') + '\n\nBIG IDEA\n' + lesson.simple.idea + '\n' + lesson.simple.analogy + '\n\nCOMMON MISTAKE\n' + lesson.simple.mistake + '\n\nWORD GUIDE\n' + lesson.glossary.map(([k,v]) => k+': '+v).join('\n') + '\n\n' + lesson.script.map(part => part.time+' — '+part.title+'\n\nSAY THIS\n'+part.say.join('\n\n')+'\n\nDO THIS\n'+part.do+'\n\nASK\n'+part.ask+'\n\nMODEL ANSWER\n'+part.answer).join('\n\n--------------------\n\n') + '\n\nQUIZ ANSWERS\n' + lesson.quiz.map((q,i) => (i+1)+'. '+q.prompt+'\n'+q.choices[q.answer]+'\n'+q.explanation).join('\n\n') + (lesson.softSkill ? '\n\nEXTRA SOFT SKILLS\n'+lesson.softSkill : '') + '\n\nREFERENCES\n'+lesson.refs.map(([n,u,d])=>n+'\n'+u+'\n'+d).join('\n\n');
}
function refsPanel(lesson) {
  return '<section class="panel"><h2>Documentation and further reading</h2><p>Use these sources while working through the examples and practical lab.</p><div class="reference-list">' + lesson.refs.map(([name,href,note]) => '<article><a target="_blank" rel="noopener noreferrer" href="' + esc(href) + '">' + esc(name) + ' ↗</a><p>' + esc(note) + '</p><small>' + esc(new URL(href).hostname) + '</small></article>').join('') + '</div></section>';
}
function attemptFor(key) {
  if (!attempts.has(key)) attempts.set(key, {answers:{}, result:null});
  return attempts.get(key);
}
function quizPanel(key, questions, pass) {
  const attempt = attemptFor(key);
  const record = saved[key];
  if (attempt.result !== null) {
    const score = attempt.result;
    return '<section class="panel result" id="quiz-result" tabindex="-1"><div>' + tag(score >= pass ? 'PASS' : 'REVIEW AND RETRY') + '<h2>' + score + ' / ' + questions.length + ' correct</h2><p>Best on this browser: ' + record.best + ' / ' + questions.length + ' · Passing score: ' + pass + '</p></div>' + button('retry-quiz','Try again','btn primary') + '</section><div class="review-list">' +
      questions.map((q,i) => '<article class="panel review-item ' + (attempt.answers[i] === q.answer ? 'correct' : 'incorrect') + '"><h3>' + two(i+1) + ' · ' + esc(q.prompt) + '</h3><p><b>Your answer:</b> ' + esc(q.choices[attempt.answers[i]]) + '</p><p><b>Correct answer:</b> ' + esc(q.choices[q.answer]) + '</p><p>' + esc(q.explanation) + '</p></article>').join('') + '</div>';
  }
  return '<form id="quiz-form"><div class="panel quiz-intro"><div>' + tag('SELF-CHECK') + '<h2>' + questions.length + ' multiple-choice questions</h2><p>Choose one answer per question. Pass with ' + pass + ' correct. Review explanations after submitting.</p></div>' + (record ? '<strong>Best: ' + record.best + ' / ' + questions.length + '</strong>' : '') + '</div>' +
    questions.map((q,i) => '<fieldset class="panel question"><legend><span>' + two(i+1) + '</span> ' + esc(q.prompt) + '</legend><div class="choices">' + q.choices.map((choice,j) => '<label><input required type="radio" name="question-' + i + '" value="' + j + '"' + (attempt.answers[i] === j ? ' checked' : '') + '><span>' + esc(choice) + '</span></label>').join('') + '</div></fieldset>').join('') +
    '<div class="submit-bar"><span id="quiz-count" aria-live="polite">' + Object.keys(attempt.answers).length + ' / ' + questions.length + ' answered</span><button type="submit" class="btn primary">Submit answers →</button></div></form>';
}
function lecturePage(course,lesson,section) {
  const panel = {
    slides: () => slidesPanel(lesson), lab: () => labPanel(lesson,course),
    quiz: () => quizPanel(quizKey(course,lesson.id),lesson.quiz,weeklyPass),
    teacher: () => teacherPanel(lesson), refs: () => refsPanel(lesson),
  }[section]();
  return pageHeading(course.code + ' · WEEK ' + two(lesson.id) + ' · ' + sourceLabel(lesson),lesson.title,lesson.summary) +
    '<nav class="lesson-tabs" aria-label="Weekly session sections">' + sections.map(([key,label]) => '<a href="' + url(course,lesson.id,key) + '"' + (section === key ? ' aria-current="page"' : '') + '>' + label + '</a>').join('') + '</nav>' + panel +
    '<div class="lesson-next">' + (lesson.id > 1 ? link(url(course,lesson.id-1),'← Week ' + two(lesson.id-1),'btn neutral') : link(courseUrl(course),'← Course overview','btn neutral')) + (lesson.id < 8 ? link(url(course,lesson.id+1),'Week ' + two(lesson.id+1) + ' →','btn neutral') : link(courseUrl(course,'final'),'Final test →','btn primary')) + '</div>';
}
function capstonePage(course) {
  const lesson = course.lessons.at(-1);
  return pageHeading(course.code + ' · CAPSTONE',lesson.lab.title,lesson.lab.example) +
    '<div class="reading-grid"><section class="panel"><h2>Project steps</h2>' + list(lesson.lab.points,'ol') + '<div class="callout"><strong>What to submit</strong><p>' + esc(lesson.lab.deliverable) + '</p></div></section><aside class="panel"><h2>Marking guide</h2><p>' + esc(lesson.notes[3]) + ' · Total 10 points.</p><div class="actions">' + link(url(course,8,'teacher'),'Week 08 teacher notes','btn neutral') + link(courseUrl(course,'final'),'Open final test','btn primary') + '</div></aside></div>';
}
function render({focus = false, resetScroll = false} = {}) {
  const {page,course,lesson,section} = route;
  const labels = {home:'All courses',roadmap:'Syllabus map',final:'Final test',capstone:'Capstone project',course:course?.title};
  const label = lesson ? 'Week ' + two(lesson.id) + ' · ' + lesson.title : labels[page];
  document.querySelector('#crumb').textContent = (course && page !== 'course' ? course.code : 'Classroom') + ' / ' + label;
  document.title = label + ' · Bano Qabil Classroom';
  const pages = {
    home, roadmap:roadmapPage, course:() => coursePage(course),
    week:() => lecturePage(course,lesson,section), capstone:() => capstonePage(course),
    final:() => pageHeading(course.code + ' · FINAL ASSESSMENT','Final test: ' + course.title,'Answer eight new questions covering the eight weekly sessions in this course.') + quizPanel(quizKey(course,'final'),course.final,finalPass),
  };
  document.body.dataset.theme = course?.theme || 'home';
  main.innerHTML = pages[page]();
  updateNav();
  if (resetScroll) window.scrollTo(0,0);
  if (focus) main.focus({preventScroll:true});
}
function updateSlide(index) {
  if (index < 0 || index > 6 || !route.lesson || route.section !== 'slides') return;
  const action = document.activeElement?.dataset.action;
  slideIndex = index;
  const slide = slideContent(route.lesson,index);
  document.querySelector('#inline-slide').innerHTML = slide;
  document.querySelector('#inline-controls').innerHTML = slideControls(index);
  document.querySelector('#speaker-cue').textContent = slidesFor(route.lesson)[index].cue;
  if (deckOpen) {
    document.querySelector('#deck-slide').innerHTML = slide.replace('id="slide-heading"','id="deck-heading"');
    document.querySelector('#deck-controls').innerHTML = slideControls(index,true);
  }
  const scope = document.querySelector(deckOpen ? '#deck-controls' : '#inline-controls');
  if (action?.includes('slide')) {
    const control = scope.querySelector('[data-action="' + action + '"]:enabled') || scope.querySelector('button:enabled');
    control?.focus();
  }
  history.replaceState(null,'',url(route.course,route.lesson.id) + '/' + (index+1));
}
function quizContext() {
  return route.page === 'final'
    ? [quizKey(route.course,'final'),route.course.final]
    : [quizKey(route.course,route.lesson.id),route.lesson.quiz];
}
function navigate() {
  deckOpen = false;
  route = getRoute();
  slideIndex = route.slide || 0;
  toggleMenu(false);
  render({focus:true,resetScroll:true});
}
function toggleMenu(open) {
  sidebar.classList.toggle('open',open);
  menu.setAttribute('aria-expanded',String(open));
}
menu.addEventListener('click',() => toggleMenu(menu.getAttribute('aria-expanded') === 'false'));
window.addEventListener('hashchange',navigate);
document.querySelector('.skip').addEventListener('click',event => {
  event.preventDefault();
  main.focus();
});
main.addEventListener('click',event => {
  const jump = event.target.closest('[data-script]');
  if (jump) { document.getElementById('script-' + jump.dataset.script)?.scrollIntoView({behavior:'smooth',block:'start'}); return; }
  const trigger = event.target.closest('[data-action]');
  if (!trigger) return;
  const action = trigger.dataset.action;
  if (action === 'next-slide' || action === 'previous-slide') updateSlide(slideIndex + (action === 'next-slide' ? 1 : -1));
  if (action === 'open-deck') {
    const dialog = document.querySelector('#deck');
    deckOpen = true;
    updateSlide(slideIndex);
    dialog.addEventListener('close',() => {
      deckOpen = false;
      document.querySelector('#inline-controls [data-action="open-deck"]')?.focus();
    },{once:true});
    dialog.showModal();
    dialog.querySelector('[data-action="close-deck"]').focus();
  }
  if (action === 'close-deck') document.querySelector('#deck').close();
  if (action === 'print') window.print();
  if (action === 'download-notes') {
    const blob = new Blob([notesText(route.lesson,route.course)],{type:'text/plain;charset=utf-8'});
    const address = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = address; a.download = route.course.id + '-week-' + two(route.lesson.id) + '-teacher-guide.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(address),1000);
  }
  if (action === 'retry-quiz') {
    attempts.delete(quizContext()[0]);
    render({focus:true,resetScroll:true});
  }
});
document.addEventListener('keydown',event => {
  if (!route.lesson || route.section !== 'slides' || event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    updateSlide(slideIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
main.addEventListener('change',event => {
  if (!event.target.matches('#quiz-form input')) return;
  const [key,questions] = quizContext();
  const attempt = attemptFor(key);
  attempt.answers[Number(event.target.name.slice(9))] = Number(event.target.value);
  document.querySelector('#quiz-count').textContent = Object.keys(attempt.answers).length + ' / ' + questions.length + ' answered';
});
main.addEventListener('submit',event => {
  if (event.target.id !== 'quiz-form') return;
  event.preventDefault();
  const [key,questions] = quizContext();
  const form = new FormData(event.target);
  const attempt = attemptFor(key);
  attempt.answers = Object.fromEntries(questions.map((_,i) => [i,Number(form.get('question-' + i))]));
  attempt.result = questions.filter((q,i) => attempt.answers[i] === q.answer).length;
  saved[key] = {best:Math.max(saved[key]?.best || 0,attempt.result)};
  persist();
  render({resetScroll:true});
  document.querySelector('#quiz-result').focus({preventScroll:true});
});
main.addEventListener('input',event => {
  const result = document.querySelector('#demo-result');
  if (!result) return;
  if (event.target.id === 'threshold') {
    const value = Number(event.target.value);
    const count = [8,10,6,9].filter(n => n >= value).length;
    document.querySelector('#threshold-value').textContent = value;
    result.textContent = count + ' on track · ' + (4-count) + ' follow-up';
  }
  if (['inquiries','visits'].includes(event.target.id)) {
    const inquiries = document.querySelector('#inquiries').valueAsNumber;
    const visits = document.querySelector('#visits').valueAsNumber;
    result.textContent = Number.isInteger(inquiries) && Number.isInteger(visits) && visits > 0 && inquiries >= 0 && inquiries <= visits
      ? new Intl.NumberFormat('en',{style:'percent',maximumFractionDigits:2}).format(inquiries/visits) + ' of visits'
      : 'Enter whole numbers with 0 ≤ inquiries ≤ visits and at least 1 visit.';
  }
  if (event.target.id === 'agent-case') {
    result.textContent = {
      known:'Look up → Verify source → Return a cited answer.',
      missing:'Look up → Retry once → Stop and route for review.',
      conflict:'Look up → Flag conflicting sources → Ask the instructor to verify.',
      approval:'Draft → Show the proposed recipient → Wait for approval.',
    }[event.target.value];
  }
});
route = getRoute();
slideIndex = route.slide || 0;
render();
