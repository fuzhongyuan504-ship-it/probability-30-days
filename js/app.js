const ALL_LESSONS = [...WEEK1, ...WEEK2, ...WEEK3, ...WEEK4];

const state = {
  lang: localStorage.getItem('prob30_lang') || 'en',
  view: 'dashboard',
  day: 1,
};

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('prob30_progress')) || { completed: [], quiz: { correct: 0, total: 0 } };
  } catch (e) {
    return { completed: [], quiz: { correct: 0, total: 0 } };
  }
}
function saveProgress(p) {
  localStorage.setItem('prob30_progress', JSON.stringify(p));
}
function isDone(day) {
  return getProgress().completed.includes(day);
}
function toggleDone(day) {
  const p = getProgress();
  const idx = p.completed.indexOf(day);
  if (idx >= 0) p.completed.splice(idx, 1);
  else p.completed.push(day);
  saveProgress(p);
}
function recordQuiz(correct) {
  const p = getProgress();
  p.quiz.total += 1;
  if (correct) p.quiz.correct += 1;
  saveProgress(p);
}
function computeStreak() {
  const p = getProgress();
  const days = [...p.completed].sort((a, b) => a - b);
  if (!days.length) return 0;
  // streak counted as longest consecutive run ending at the highest completed day
  let streak = 1;
  for (let i = days.length - 1; i > 0; i--) {
    if (days[i] - days[i - 1] === 1) streak++;
    else break;
  }
  return streak;
}

function L(field) {
  return field[state.lang];
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('prob30_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  render();
}

function goTo(view, day) {
  state.view = view;
  if (day) state.day = day;
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  render();
}

const WEEK_RANGES = [[1, 7], [8, 14], [15, 21], [22, 30]];

function renderSidebar() {
  const nav = document.getElementById('lessonNav');
  const weekLabels = I18N[state.lang].weekLabels;
  let html = '';
  for (let w = 0; w < WEEK_RANGES.length; w++) {
    html += `<div class="nav-week-label">${weekLabels[w]}</div>`;
    for (let d = WEEK_RANGES[w][0]; d <= WEEK_RANGES[w][1]; d++) {
      const lesson = ALL_LESSONS.find(l => l.day === d);
      if (!lesson) continue;
      const active = state.view === 'lesson' && state.day === d;
      const done = isDone(d);
      html += `<button class="day-item ${active ? 'active' : ''} ${done ? 'done' : ''}" data-day="${d}">
        <span class="day-badge">${done ? '' : d}</span>
        <span>${t('day')} ${d} · ${L(lesson.title).slice(0, 22)}${L(lesson.title).length > 22 ? '…' : ''}</span>
      </button>`;
    }
  }
  nav.innerHTML = html;
  nav.querySelectorAll('.day-item').forEach(btn => {
    btn.addEventListener('click', () => goTo('lesson', parseInt(btn.dataset.day, 10)));
  });

  document.querySelector('.dashboard-link').classList.toggle('active', state.view === 'dashboard');
}

function renderDashboard() {
  const p = getProgress();
  const completedCount = p.completed.length;
  const remaining = 30 - completedCount;
  const streak = computeStreak();
  const acc = p.quiz.total ? Math.round((p.quiz.correct / p.quiz.total) * 100) : 0;
  const pct = Math.round((completedCount / 30) * 100);

  let dayGridHtml = '';
  ALL_LESSONS.forEach(lesson => {
    const done = isDone(lesson.day);
    dayGridHtml += `<button class="day-card ${done ? 'completed' : ''}" data-day="${lesson.day}">
      <div class="dc-top">
        <span class="dc-day">${t('day')} ${lesson.day}</span>
        ${done ? '<span class="dc-check">✓</span>' : ''}
      </div>
      <div class="dc-title">${L(lesson.title)}</div>
    </button>`;
  });

  const nextDay = completedCount < 30 ? (p.completed.length ? Math.max(...p.completed) + 1 : 1) : 30;
  const ctaLabel = completedCount === 0 ? t('startLearning') : (completedCount >= 30 ? t('startLearning') : t('continueLearning'));

  document.getElementById('content').innerHTML = `
    <div class="dash-hero">
      <h1>${t('dashTitle')}</h1>
      <p>${t('dashSubtitle')}</p>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div style="margin-top:10px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:13px; opacity:0.9;">${t('overallProgress')}: ${pct}% (${completedCount}/30)</span>
        <button class="nav-btn primary" id="ctaBtn" style="box-shadow:none;">${ctaLabel}</button>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-card"><div class="stat-num">${completedCount}</div><div class="stat-label">${t('statCompleted')}</div></div>
      <div class="stat-card"><div class="stat-num">${streak}</div><div class="stat-label">${t('statStreak')}</div></div>
      <div class="stat-card"><div class="stat-num">${acc}%</div><div class="stat-label">${t('statQuiz')}</div></div>
      <div class="stat-card"><div class="stat-num">${remaining}</div><div class="stat-label">${t('statRemaining')}</div></div>
    </div>

    ${completedCount >= 30 ? `<div class="takeaway-box">${t('completeAllDone')}</div>` : ''}

    <div class="section-title">${t('allLessons')}</div>
    <div class="day-grid">${dayGridHtml}</div>

    <div style="margin-top:30px; text-align:center;">
      <button class="nav-btn" id="resetBtn" style="border-color:var(--danger); color:var(--danger);">${t('resetProgress')}</button>
    </div>
  `;

  document.querySelectorAll('.day-card').forEach(btn => {
    btn.addEventListener('click', () => goTo('lesson', parseInt(btn.dataset.day, 10)));
  });
  document.getElementById('ctaBtn').addEventListener('click', () => goTo('lesson', nextDay));
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm(t('resetConfirm'))) {
      localStorage.removeItem('prob30_progress');
      render();
    }
  });
}

function renderExercise(ex, idx, day) {
  const qId = `ex-${day}-${idx}`;
  if (ex.type === 'mcq') {
    let optsHtml = '';
    ex.options.forEach((opt, oi) => {
      optsHtml += `<button class="opt-btn" data-opt="${oi}">${L(opt)}</button>`;
    });
    return `<div class="exercise" data-ex="${qId}">
      <div class="exercise-q"><span class="exercise-num">Q${idx + 1}.</span>${L(ex.question)}</div>
      <div class="opt-list">${optsHtml}</div>
      <div class="exercise-explain" id="explain-${qId}">${L(ex.explanation)}</div>
    </div>`;
  } else {
    return `<div class="exercise" data-ex="${qId}">
      <div class="exercise-q"><span class="exercise-num">Q${idx + 1}.</span>${L(ex.question)}</div>
      <div class="num-input-row">
        <input type="text" id="input-${qId}" placeholder="${t('yourAnswer')}">
        <button class="check-btn" data-answer="${String(ex.answer).toLowerCase()}" data-qid="${qId}">${t('checkAnswer')}</button>
      </div>
      <div class="exercise-result" id="result-${qId}"></div>
      <div class="exercise-explain" id="explain-${qId}">${L(ex.explanation)}</div>
    </div>`;
  }
}

function renderLesson() {
  const lesson = ALL_LESSONS.find(l => l.day === state.day);
  if (!lesson) { goTo('dashboard'); return; }
  const done = isDone(lesson.day);

  let exercisesHtml = '';
  lesson.exercises.forEach((ex, i) => { exercisesHtml += renderExercise(ex, i, lesson.day); });

  document.getElementById('content').innerHTML = `
    <div class="lesson-header">
      <div class="lesson-eyebrow">${t('day')} ${lesson.day} / 30</div>
      <div class="lesson-title">${L(lesson.title)}</div>
    </div>

    <div class="card">
      <h3>${t('keyIdea')}</h3>
      ${L(lesson.content)}
    </div>

    <div class="example-box">
      <h3>${t('realWorld')}</h3>
      ${L(lesson.example)}
    </div>

    <div class="takeaway-box">💡 ${L(lesson.takeaway)}</div>

    <div class="section-title">${t('exercises')}</div>
    ${exercisesHtml}

    <div class="complete-bar">
      <span>${done ? t('doneLabel') : ''}</span>
      <button class="mark-done-btn ${done ? 'is-done' : ''}" id="markDoneBtn">${done ? t('doneLabel') : t('markDone')}</button>
    </div>

    <div class="lesson-nav">
      <button class="nav-btn" id="prevBtn" ${lesson.day <= 1 ? 'disabled' : ''}>← ${t('prevDay')}</button>
      <button class="nav-btn" id="dashBtn">${t('backToDashboard')}</button>
      <button class="nav-btn primary" id="nextBtn" ${lesson.day >= 30 ? 'disabled' : ''}>${t('nextDay')} →</button>
    </div>
  `;

  document.getElementById('markDoneBtn').addEventListener('click', () => {
    toggleDone(lesson.day);
    renderLesson();
    renderSidebar();
  });
  document.getElementById('prevBtn').addEventListener('click', () => goTo('lesson', lesson.day - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo('lesson', lesson.day + 1));
  document.getElementById('dashBtn').addEventListener('click', () => goTo('dashboard'));

  lesson.exercises.forEach((ex, i) => {
    const qId = `ex-${lesson.day}-${i}`;
    const wrap = document.querySelector(`[data-ex="${qId}"]`);
    if (ex.type === 'mcq') {
      wrap.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (wrap.dataset.answered) return;
          wrap.dataset.answered = '1';
          const chosen = parseInt(btn.dataset.opt, 10);
          wrap.querySelectorAll('.opt-btn').forEach(b => b.classList.add('disabled'));
          if (chosen === ex.answer) {
            btn.classList.add('correct');
            recordQuiz(true);
          } else {
            btn.classList.add('wrong');
            wrap.querySelector(`.opt-btn[data-opt="${ex.answer}"]`).classList.add('correct');
            recordQuiz(false);
          }
          document.getElementById(`explain-${qId}`).classList.add('show');
        });
      });
    } else {
      const btn = wrap.querySelector('.check-btn');
      btn.addEventListener('click', () => {
        if (wrap.dataset.answered) return;
        const input = document.getElementById(`input-${qId}`);
        const userVal = input.value.trim().toLowerCase().replace(/\s+/g, '');
        const correctVal = btn.dataset.answer.replace(/\s+/g, '');
        const resultEl = document.getElementById(`result-${qId}`);
        const isCorrect = userVal === correctVal || (!isNaN(parseFloat(userVal)) && Math.abs(parseFloat(userVal) - parseFloat(correctVal)) < 0.01);
        wrap.dataset.answered = '1';
        input.disabled = true;
        btn.disabled = true;
        if (isCorrect) {
          resultEl.textContent = t('correct');
          resultEl.className = 'exercise-result correct';
          recordQuiz(true);
        } else {
          resultEl.textContent = t('incorrect');
          resultEl.className = 'exercise-result wrong';
          recordQuiz(false);
        }
        document.getElementById(`explain-${qId}`).classList.add('show');
      });
    }
  });
}

function render() {
  document.getElementById('brandTitleText');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  renderSidebar();
  if (state.view === 'dashboard') renderDashboard();
  else renderLesson();
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLang(state.lang === 'en' ? 'zh' : 'en');
});
document.querySelector('.dashboard-link').addEventListener('click', () => goTo('dashboard'));

document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
render();
