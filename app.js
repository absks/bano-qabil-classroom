'use strict';
const {lessons, final, roadmap} = window.COURSE;
const main = document.querySelector('#main');
const nav = document.querySelector('#navigation');
const menu = document.querySelector('#menu');
const sidebar = document.querySelector('#sidebar');
const progress = document.querySelector('#progress');
const sections = [
  ['slides', 'Presentation'], ['lab', 'Practical lab'], ['quiz', 'Quiz'],
  ['teacher', 'Teacher notes'], ['refs', 'References'],
];
const lessonIcons = ['▦', '⌘', '◇', '↗', '⬡', '⌗', '✦', '◎'];
const short = ['Digital skills', 'Build with WordPress', 'Launch a store', 'Digital marketing', 'Cyber defense', 'Python & data', 'Generative AI', 'Agentic AI'];
const schedule = [
  ['00–08', 'Opening', 'Introduce the scenario and ask for one prediction before presenting the objectives.'],
  ['08–30', 'Explain and demonstrate', 'Use the five teaching slides. Pause after the example to check the learner’s reasoning.'],
  ['30–60', 'Practical lab', 'Model the first step, have pairs complete the remaining steps, then inspect the named deliverables.'],
  ['60–70', 'Knowledge check', 'Run the eight-question quiz and discuss the reasoning behind missed answers.'],
  ['70–75', 'Exit ticket', 'Ask each learner for one result they verified and one question they still have. Assign the extension.'],
];
const storeKey = 'bq-classroom-v1';
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
const url = (lesson, section = 'slides') => '#lecture/' + lesson + '/' + section;
const link = (href, label, className = '') => '<a class="' + className + '" href="' + href + '">' + esc(label) + '</a>';
const button = (action, label, className = '', disabled = false) => '<button type="button" class="' + className + '" data-action="' + action + '"' + (disabled ? ' disabled' : '') + '>' + esc(label) + '</button>';
const list = (values, tag = 'ul') => '<' + tag + '>' + values.map(value => '<li>' + esc(value) + '</li>').join('') + '</' + tag + '>';
const tag = text => '<span class="eyebrow">' + esc(text) + '</span>';

function getRoute() {
  const [page, rawId, tab, slide] = location.hash.slice(1).split('/');
  const lesson = lessons[Number(rawId)-1];
  if (page === 'lecture' && lesson) {
    return {page, lesson, section: sections.some(([key]) => key === tab) ? tab : 'slides', slide: Math.min(6, Math.max(0, (Number(slide) || 1)-1))};
  }
  return {page: ['roadmap','final','capstone'].includes(page) ? page : 'home'};
}
function navLink(href, label, glyph, active, status = '') {
  return '<a href="' + href + '"' + (active ? ' class="active" aria-current="page"' : '') + '><span class="nav-icon" aria-hidden="true">' + glyph + '</span><span>' + esc(label) + '</span>' + (status ? '<span class="nav-done" aria-label="Quiz passed">✓</span>' : '') + '</a>';
}
function updateNav() {
  nav.innerHTML = '<div class="nav-label">WORKSPACE</div>' +
    navLink('#home','Course overview','⌂',route.page === 'home') +
    navLink('#roadmap','Syllabus roadmap','≡',route.page === 'roadmap') +
    '<div class="nav-label lectures-label">LECTURES <span>08</span></div>' +
    lessons.map((lesson,i) => navLink(url(lesson.id),short[i],two(lesson.id),route.lesson?.id === lesson.id,saved[lesson.id]?.best >= 6 ? 'done' : '')).join('') +
    '<div class="nav-label lectures-label">ASSESSMENT</div>' +
    navLink('#final','Final test','✓',route.page === 'final') +
    navLink('#capstone','Capstone project','◇',route.page === 'capstone');
  const count = lessons.filter(l => saved[l.id]?.best >= 6).length;
  progress.innerHTML = '<div><strong>Your progress</strong><small>' + count + ' / 8 passed</small></div><progress max="8" value="' + count + '" aria-label="Lecture quizzes passed"></progress><small>Saved on this browser</small>';
}
function pageHeading(kicker, title, description) {
  return '<div class="page-heading">' + tag(kicker) + '<h1>' + esc(title) + '</h1><p>' + esc(description) + '</p></div>';
}
function home() {
  const next = lessons.find(l => !(saved[l.id]?.best >= 6));
  const primary = next ? link(url(next.id),next.id === 1 ? 'Start lecture 01  →' : 'Continue lecture ' + two(next.id) + '  →','btn primary') : link('#final','Take the final test  →','btn primary');
  const metrics = [['08','Guided lectures'],['56','Presentation slides'],['80','Assessment questions'],['06','Source outlines']];
  return '<section class="hero"><div class="hero-copy"><span class="hero-label"><i></i> BANO QABIL · BALAKOT</span><h1>Digital Skills<br><em>Classroom.</em></h1><p>Build a website, plan a campaign, protect your work, and explore AI through eight practical lectures.</p><div class="actions">' + primary + link('#roadmap','View syllabus roadmap','btn outline') + '</div></div>' +
    '<div class="hero-art" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="art-dot a"></div><div class="art-dot b"></div><div class="art-dot c"></div><div class="terminal"><div class="terminal-bar"><i></i><i></i><i></i><span>FIELD NOTES / 01</span></div><div class="terminal-body"><span class="terminal-label">THE CLASSROOM PATH</span><div><b>01</b> <span>Build & publish</span><i>↗</i></div><div><b>02</b> <span>Protect & measure</span><i>↗</i></div><div><b>03</b> <span>Prototype with AI</span><i>↗</i></div></div><div class="terminal-foot">▰ <span>LEARN BY DOING</span></div></div></div></section>' +
    '<section class="metrics" aria-label="Course at a glance">' + metrics.map(([value,label]) => '<div><strong>' + value + '</strong><span>' + label + '</span></div>').join('') + '</section>' +
    '<section class="catalog"><div class="section-heading"><div>' + tag('THE LEARNING PATH') + '<h2>Explore the lectures</h2></div><span>75 min per lecture · self-paced</span></div><div class="cards">' +
    lessons.map((lesson,i) => '<article class="lesson-card"><div class="card-top"><span class="tile tile-' + i + '" aria-hidden="true">' + lessonIcons[i] + '</span><span class="card-count">' + (saved[lesson.id]?.best >= 6 ? '✓ PASSED' : 'LECTURE ' + two(lesson.id)) + '</span></div><p class="card-track">' + esc(lesson.track) + '</p><h3>' + esc(lesson.title) + '</h3><p>' + esc(lesson.summary) + '</p><div class="card-actions">' + link(url(lesson.id),'Open lecture  →','card-link') + link(url(lesson.id,'teacher'),'Teacher notes','muted-link') + '</div></article>').join('') + '</div></section>' +
    '<section class="assessment-strip"><div>' + tag('AFTER LECTURE 08') + '<h2>Put it all together</h2><p>Take the 16-question final test and build a portfolio-ready course launch project.</p></div><div class="actions">' + link('#final','Take final test  →','btn primary') + link('#capstone','Open capstone','btn neutral') + '</div></section>';
}
function roadmapPage() {
  return pageHeading('CURRICULUM MAP','Six outlines, eight lectures','This classroom is an eight-lecture intensive adapted from six supplied 12-week outlines. The roadmap below shows where each original syllabus connects to the intensive.') +
    '<div class="roadmap-grid">' + roadmap.map(item => '<section class="panel"><h2>' + esc(item.title) + '</h2><div class="actions">' + item.lessons.map(id => link(url(id),'Open lecture ' + two(id),'btn neutral')).join('') + '</div><ol class="week-list">' + item.weeks.map((week,i) => '<li><span>W' + two(i+1) + '</span>' + esc(week) + '</li>').join('') + '</ol></section>').join('') + '</div>';
}
function slidesFor(lesson) {
  return [
    {title:lesson.title,points:lesson.objectives,cue:'Share the outcome and the four learning goals. Ask students what they already know about the scenario.'},
    ...lesson.slides,
    {...lesson.lab,points:lesson.lab.points.slice(0,3),cue:'Open the Practical lab tab for the complete exercise and submission criteria.'},
  ];
}
function slideContent(lesson,index) {
  const slide = slidesFor(lesson)[index];
  return '<div class="slide-inner ' + (index === 0 ? 'opening' : '') + '"><div class="slide-meta"><span>LECTURE ' + two(lesson.id) + ' / ' + esc(lesson.track.split(' · ')[0]) + '</span><span>' + two(index+1) + ' / 07</span></div><div class="slide-copy"><p class="slide-kicker">' + (index === 0 ? 'LEARNING OBJECTIVES' : index === 6 ? 'PRACTICE' : 'CONCEPT ' + two(index)) + '</p><h2 id="slide-heading">' + esc(slide.title) + '</h2>' + list(slide.points) +
    (slide.code?.length ? '<pre><code>' + esc(slide.code.join('\n')) + '</code></pre>' : '') +
    (slide.example ? '<div class="slide-example"><b>' + (index === 6 ? 'Scenario' : 'Worked example') + '</b><p>' + esc(slide.example) + '</p></div>' : '') + '</div></div>';
}
function slideControls(index, modal = false) {
  return '<div class="slide-controls">' + button('previous-slide','← Previous','btn neutral',index === 0) + '<span class="slide-count" aria-live="polite">Slide ' + (index+1) + ' of 7</span>' + button('next-slide','Next →','btn neutral',index === 6) + (modal ? button('close-deck','Exit','btn neutral') : button('open-deck','⛶ Present','btn dark')) + '</div>';
}
function slidesPanel(lesson) {
  return '<div class="slide-frame" id="slide-frame"><div id="inline-slide">' + slideContent(lesson,slideIndex) + '</div><div id="inline-controls">' + slideControls(slideIndex) + '</div></div><div class="slide-bottom"><details class="panel speaker"><summary>Speaker cue for this slide</summary><p id="speaker-cue">' + esc(slidesFor(lesson)[slideIndex].cue) + '</p></details><p class="keyboard">Use <kbd>←</kbd> <kbd>→</kbd> to navigate. <kbd>Esc</kbd> exits presentation mode.</p></div><dialog id="deck" aria-label="Presentation mode"><div id="deck-slide"></div><div id="deck-controls"></div></dialog>';
}
function demoFor(id) {
  if (id === 1) return '<section class="panel demo"><h3>Try the attendance threshold</h3><p>Adjust the cutoff and predict how many students will be on track.</p><label for="threshold">Minimum sessions <output id="threshold-value" for="threshold">8</output></label><input id="threshold" type="range" min="0" max="10" value="8"><p id="demo-result" role="status">3 on track · 1 follow-up</p></section>';
  if (id === 4) return '<section class="panel demo"><h3>Try the conversion calculator</h3><p>Change the numbers to compare results.</p><div class="form-row"><label>Verified inquiries<input id="inquiries" type="number" min="0" step="1" value="12"></label><label>Visits<input id="visits" type="number" min="1" step="1" value="300"></label></div><p id="demo-result" role="status">4% of visits</p></section>';
  if (id === 8) return '<section class="panel demo"><h3>Walk through the decision</h3><p>Switch scenarios and predict where the assistant should stop.</p><label>Choose a case<select id="agent-case"><option value="known">Known schedule question</option><option value="missing">Fee absent from sources</option><option value="conflict">Conflicting schedule entries</option><option value="approval">Draft proposed for sending</option></select></label><p id="demo-result" role="status">Look up → Verify source → Return a cited answer.</p></section>';
  return '';
}
function labPanel(lesson) {
  const lab = lesson.lab;
  return '<div class="reading-grid"><article class="panel">' + tag('30 MIN · CLASSROOM EXERCISE') + '<h2>' + esc(lab.title) + '</h2><p>' + esc(lab.example) + '</p><h3>Steps</h3>' + list(lab.points,'ol') + '<div class="callout"><strong>What to submit</strong><p>' + esc(lab.deliverable) + '</p></div></article>' + demoFor(lesson.id) + '</div>';
}
function teacherPanel(lesson) {
  const labels = ['Before class','Demonstration and troubleshooting','Discussion and checks','Marking guide','Extension and homework'];
  return '<div class="reading-grid"><article class="panel"><div class="section-heading"><div>' + tag('TRAINER GUIDE · 75 MIN') + '<h2>Preparation and delivery</h2></div>' + button('print','Print notes','btn neutral') + '</div><div class="teacher-notes">' +
    lesson.notes.map((note,i) => '<section><h3>' + labels[i] + '</h3><p>' + esc(note.replace(/^(Rubric \/10|Homework): /,'')) + (i === 3 ? ' · Total 10 points.' : '') + '</p></section>').join('') +
    '</div><h3>Slide-by-slide prompts</h3><ol class="cue-list">' + lesson.slides.map(slide => '<li><strong>' + esc(slide.title) + '</strong><p>' + esc(slide.cue) + '</p></li>').join('') + '</ol><div class="callout"><strong>Model deliverable</strong><p>' + esc(lesson.lab.deliverable) + '</p></div></article><div><aside class="panel"><h3>Class plan</h3><ol class="timeline">' + schedule.map(([time,title,desc]) => '<li><span>' + time + ' min</span><div><strong>' + title + '</strong><p>' + desc + '</p></div></li>').join('') + '</ol></aside><aside class="panel answer-key"><details><summary>Teacher answer key</summary><ol>' + lesson.quiz.map(q => '<li><strong>' + esc(q.choices[q.answer]) + '</strong><p>' + esc(q.explanation) + '</p></li>').join('') + '</ol></details></aside></div></div>';
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
function lecturePage(lesson,section) {
  const panel = {
    slides: () => slidesPanel(lesson), lab: () => labPanel(lesson), quiz: () => quizPanel(lesson.id,lesson.quiz,6),
    teacher: () => teacherPanel(lesson), refs: () => refsPanel(lesson),
  }[section]();
  return pageHeading('LECTURE ' + two(lesson.id) + ' / ' + lesson.track,lesson.title,lesson.summary) +
    '<nav class="lesson-tabs" aria-label="Lecture sections">' + sections.map(([key,label]) => '<a href="' + url(lesson.id,key) + '"' + (section === key ? ' aria-current="page"' : '') + '>' + label + '</a>').join('') + '</nav>' + panel +
    '<div class="lesson-next">' + (lesson.id > 1 ? link(url(lesson.id-1),'← Lecture ' + two(lesson.id-1),'btn neutral') : link('#home','← Course overview','btn neutral')) + (lesson.id < 8 ? link(url(lesson.id+1),'Lecture ' + two(lesson.id+1) + ' →','btn neutral') : link('#final','Final test →','btn primary')) + '</div>';
}
function capstonePage() {
  const deliverables = [
    ['01','Website','Build a small training center site on local or staging WordPress. Verify three visitor paths and include one mobile screenshot.'],
    ['02','Campaign','Write a one-week funnel-based campaign, a trackable inquiry event, and a sample conversion-rate report with fictional data.'],
    ['03','Operations','Create a one-page office reporting pack, list three defensive controls, and document an isolated restore check or tabletop recovery plan.'],
    ['04','AI prototype','Build a source-grounded FAQ or a read-only agent simulation. Provide five evaluation cases and explain the review path.'],
  ];
  return pageHeading('COURSE PROJECT','Launch a fictional training center','Bring the lecture work together in a small portfolio case study. Allow two to three hours after class or split the work across teams.') +
    '<div class="roadmap-grid">' + deliverables.map(([num,title,copy]) => '<article class="panel">' + tag('DELIVERABLE ' + num) + '<h2>' + title + '</h2><p>' + copy + '</p></article>').join('') + '</div><section class="panel capstone"><h2>Submission and marking</h2>' + list(['Submit the site screenshots, campaign brief, office report, recovery evidence, and AI test table in one folder. Use fictional data throughout.','Give a five-minute presentation. Explain one tradeoff, show one verified test, and identify one remaining improvement.','Mark out of 20. Award up to 5 each for website and verification, campaign evidence, operations and recovery, and AI evaluation.']) + '</section>';
}
function render({focus = false, resetScroll = false} = {}) {
  const labels = {home:'Course overview',roadmap:'Syllabus roadmap',final:'Final test',capstone:'Capstone project'};
  const label = route.lesson ? 'Lecture ' + two(route.lesson.id) + ' / ' + short[route.lesson.id-1] : labels[route.page];
  document.querySelector('#crumb').textContent = 'Classroom / ' + label;
  document.title = label + ' · Bano Qabil Classroom';
  main.innerHTML = route.lesson ? lecturePage(route.lesson,route.section) :
    route.page === 'roadmap' ? roadmapPage() : route.page === 'capstone' ? capstonePage() :
    route.page === 'final' ? pageHeading('CUMULATIVE ASSESSMENT','Final course test','Apply ideas from all eight lectures to 16 new scenarios and knowledge checks.') + quizPanel('final',final,12) : home();
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
  history.replaceState(null,'',url(route.lesson.id) + '/' + (index+1));
}
function quizContext() {
  return route.page === 'final' ? ['final',final,12] : [route.lesson.id,route.lesson.quiz,6];
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
