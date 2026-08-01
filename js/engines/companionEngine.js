/* =========================================================
   Spark Learning – engines/companionEngine.js
   Moteur Spark Companion : rattrapage, remédiation, CCF
   ========================================================= */

/**
 * Seuil au-delà duquel une section est considérée comme une lacune à retravailler
 * (voir detectLacunes ci-dessous pour le détail de la pondération).
 */
const LACUNE_SEVERITY_THRESHOLD = 0.35;
/** Au-delà de ce temps moyen par tentative d'exercice, on considère la résolution anormalement longue. */
const LACUNE_SLOW_ATTEMPT_MS = 60000;

/**
 * Détecte les lacunes d'un module à partir d'un score pondéré calculé sur les données
 * réelles de tracking (js/storage.js : Storage.getTracking), plutôt que sur un simple
 * booléen "section non complétée". Pondération : taux d'erreur 45 %, score faible 20 %,
 * usage d'indice 15 %, solution révélée 10 %, temps de résolution anormal 10 %.
 * Retourne un array d'objets { section, label, severity (0-1), reasons: string[] } —
 * une section jamais commencée obtient une sévérité maximale avec une raison dédiée.
 */
function detectLacunes(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return [];

  const progress = state.progress[moduleId] || {};
  const tracking = (typeof Storage !== 'undefined' && Storage.getTracking) ? Storage.getTracking(moduleId) : null;

  const sections = [
    { key: 'quiz', label: 'Quiz', total: mod.quiz ? mod.quiz.length : 0 },
    { key: 'exercice', label: 'Exercice', total: 1 },
    { key: 'probleme', label: 'Problème', total: 1 }
  ];

  const lacunes = [];
  sections.forEach(sec => {
    const done = !!progress[sec.key];
    const t = tracking && tracking[sec.key];

    if (!t) {
      // Jamais tenté : lacune maximale, mais uniquement si la section n'est pas déjà validée
      // par un autre biais (ex: probleme complété sans passer par Storage.trackAttempt).
      if (!done) {
        lacunes.push({ section: sec.key, label: sec.label, severity: 1, reasons: ['Pas encore commencé'] });
      }
      return;
    }

    const attempts = t.attempts || 0;
    const correct = t.correct || 0;
    const errorRate = attempts > 0 ? 1 - (correct / attempts) : 0;
    const bestScorePct = sec.key === 'quiz' && sec.total > 0
      ? (t.bestScore || 0) / sec.total
      : (attempts > 0 ? correct / attempts : (done ? 1 : 0));
    const lowScore = 1 - bestScorePct;
    const hintRatio = attempts > 0 ? Math.min(1, (t.hintCount || 0) / attempts) : 0;
    const solutionRatio = attempts > 0 ? Math.min(1, (t.solutionCount || 0) / attempts) : 0;
    const avgTime = attempts > 0 ? (t.totalTime || 0) / attempts : 0;
    const slow = avgTime > LACUNE_SLOW_ATTEMPT_MS ? 1 : 0;

    const severity = Math.min(1,
      errorRate * 0.45 + lowScore * 0.20 + hintRatio * 0.15 + solutionRatio * 0.10 + slow * 0.10
    );

    if (severity >= LACUNE_SEVERITY_THRESHOLD || !done) {
      const reasons = [];
      if (errorRate > 0.3) reasons.push(`${Math.round(errorRate * 100)}% d'erreurs`);
      if (t.hintCount) reasons.push(`indice utilisé ${t.hintCount} fois`);
      if (t.solutionCount) reasons.push('solution révélée');
      if (slow) reasons.push('temps de résolution élevé');
      if (!done && reasons.length === 0) reasons.push('pas encore validé');
      if (reasons.length === 0) reasons.push('à consolider');
      lacunes.push({ section: sec.key, label: sec.label, severity, reasons });
    }
  });

  return lacunes;
}

/**
 * Génère un exercice de remédiation dynamique
 * Utilise pick() pour varier les contextes textuels
 */
function generateRemedialExercise(moduleId, topic) {
  const mod = getModule(moduleId);
  if (!mod) return null;

  // Sélectionner un type d'exercice : quiz, exercice, ou problème
  const exerciseTypes = [];
  if (mod.quiz && mod.quiz.length > 0) exerciseTypes.push('quiz');
  if (mod.exercice) exerciseTypes.push('exercice');
  if (mod.probleme) exerciseTypes.push('probleme');

  if (exerciseTypes.length === 0) return null;

  const selected = pick(exerciseTypes);
  let exercise = null;

  if (selected === 'quiz' && mod.quiz.length > 0) {
    const q = pick(mod.quiz);
    exercise = {
      type: 'quiz',
      question: q.question,
      options: q.options,
      answer: q.answer,
      correction: q.correction,
      difficulty: 'medium'
    };
  } else if (selected === 'exercice' && mod.exercice && mod.exercice.generate) {
    exercise = {
      type: 'exercice',
      ...mod.exercice.generate(),
      difficulty: 'intermediate'
    };
  } else if (selected === 'probleme' && mod.probleme) {
    exercise = {
      type: 'probleme',
      title: mod.probleme.title || 'Problème',
      context: mod.probleme.context || 'Résolvez ce problème en détail.',
      difficulty: 'hard'
    };
  }

  return exercise;
}

/**
 * Valide une réponse d'exercice de remédiation
 * Retourne { isCorrect: bool, feedback: string, points: number }
 */
function validateRemedialAnswer(moduleId, exerciseType, answer, expectedAnswer) {
  const isCorrect = parseFloat(answer) === parseFloat(expectedAnswer);
  let points = 0;
  let feedback = '';

  if (isCorrect) {
    points = 10; // 10 points par réponse correcte en remédiation
    const feedbacks = [
      '✨ Excellent ! Vous maîtrisez ce concept.',
      '🎯 Bravo ! C\'est la bonne réponse.',
      '🌟 Parfait ! Au suivant !',
      '💪 Super travail !',
      '👏 Bien joué !'
    ];
    feedback = pick(feedbacks);
  } else {
    points = 0;
    const hints = [
      '💭 Pas tout à fait. Relisez la leçon et essayez again.',
      '🤔 Presque ! Vérifiez vos calculs.',
      '📖 Regardez l\'exemple dans le cours.',
      '🔄 Recommencez avec plus d\'attention.',
      '💡 Utilisez l\'indice fourni dans le module.'
    ];
    feedback = pick(hints);
  }

  return { isCorrect, feedback, points };
}

/**
 * Ajoute un badge de completion à companionState
 * Badge exemples: "Rattrapage Complet", "CCF Préparation", "Progression +50%"
 */
function addBadge(badgeId, label) {
  const exists = state.companionState.badges.find(b => b.id === badgeId);
  if (!exists) {
    state.companionState.badges.push({
      id: badgeId,
      label: label,
      earnedAt: new Date().toISOString()
    });
    if (typeof celebrate === 'function') celebrate('badge');
  }
  localStorage.setItem('sparkCompanionState', JSON.stringify(state.companionState));
}

/**
 * Complète un objectif CCF
 */
function completeObjective(objectiveId) {
  const obj = state.companionState.objectives.inProgress.find(o => o.id === objectiveId);
  if (obj) {
    state.companionState.objectives.inProgress = 
      state.companionState.objectives.inProgress.filter(o => o.id !== objectiveId);
    state.companionState.objectives.completed.push({
      ...obj,
      completedAt: new Date().toISOString()
    });
    localStorage.setItem('sparkCompanionState', JSON.stringify(state.companionState));
    return true;
  }
  return false;
}

/**
 * Ajoute de points de progression
 */
function addCompanionPoints(amount) {
  state.companionState.points = (state.companionState.points || 0) + amount;
  localStorage.setItem('sparkCompanionState', JSON.stringify(state.companionState));
  return state.companionState.points;
}

/**
 * Récupère les modules recommandés pour le rattrapage
 * Basé sur les lacunes détectées et la progression actuelle
 */
function getRemediationRecommendations(subject, level) {
  const candidates = window.MODULES.filter(m =>
    (m.subject || 'maths') === subject && m.level === level
  );

  return candidates
    .map(mod => {
      const lacunes = detectLacunes(mod.id);
      const progress = state.progress[mod.id] || {};
      const severity = lacunes.reduce((max, l) => Math.max(max, l.severity), 0);
      const weakest = lacunes.slice().sort((a, b) => b.severity - a.severity)[0] || null;
      return {
        moduleId: mod.id,
        title: mod.title,
        lacuneCount: lacunes.length,
        severity,
        reasons: weakest ? weakest.reasons : [],
        weakestSection: weakest ? weakest.section : null,
        isStarted: !!(progress.quiz || progress.exercice || progress.probleme)
      };
    })
    .filter(r => r.lacuneCount > 0)
    // Priorité : sévérité la plus forte d'abord, à sévérité égale on privilégie ce qui est déjà entamé
    .sort((a, b) => (b.severity - a.severity) || (a.isStarted === b.isStarted ? 0 : a.isStarted ? -1 : 1))
    .slice(0, 5); // Top 5 recommandations
}

/**
 * Initialise un contexte de remédiation pour un module
 */
function initRemediationContext(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return null;

  const lacunes = detectLacunes(moduleId);
  state.companionState.remediation = {
    moduleId: moduleId,
    lacunes: lacunes,
    attempts: {}
  };

  localStorage.setItem('sparkCompanionState', JSON.stringify(state.companionState));
  return {
    moduleTitle: mod.title,
    lacunes: lacunes,
    exerciseCount: (mod.quiz ? mod.quiz.length : 0) + (mod.exercice ? 1 : 0) + (mod.probleme ? 1 : 0)
  };
}

/**
 * Helper : force la sauvegarde de companionState (utile après chaque action)
 */
function saveCompanionState() {
  localStorage.setItem('sparkCompanionState', JSON.stringify(state.companionState));
}

/**
 * Helper : enregistre une tentative sur un exercice de remédiation
 */
function trackRemediationAttempt(exerciseKey, isCorrect) {
  if (!state.companionState.remediation.attempts[exerciseKey]) {
    state.companionState.remediation.attempts[exerciseKey] = {
      attempts: 0,
      correct: false
    };
  }
  state.companionState.remediation.attempts[exerciseKey].attempts++;
  if (isCorrect) {
    state.companionState.remediation.attempts[exerciseKey].correct = true;
  }
  saveCompanionState();
}

/**
 * Échelle de répétition espacée (en jours). Un échec ramène toujours à l'échelon 0 ;
 * une réussite fait avancer d'un cran, plafonné au dernier échelon.
 */
const SRS_LADDER_DAYS = [1, 3, 7, 16, 35];

/**
 * Planifie (ou replanifie) la prochaine révision d'un module en fonction du résultat
 * réel d'une tentative (quiz, exercice ou évaluation). Si le module était déjà en retard
 * de révision et que la réponse est correcte, ajoute un bonus de points Companion pour
 * relier explicitement la répétition espacée à la gamification existante.
 */
function scheduleReview(moduleId, isCorrect) {
  if (!state.companionState.srs) state.companionState.srs = {};
  const srs = state.companionState.srs;
  const prev = srs[moduleId];
  const wasDue = !!(prev && new Date(prev.dueAt).getTime() <= Date.now());

  const intervalIndex = isCorrect
    ? Math.min((prev ? prev.intervalIndex + 1 : 0), SRS_LADDER_DAYS.length - 1)
    : 0;
  const dueAt = new Date(Date.now() + SRS_LADDER_DAYS[intervalIndex] * 86400000).toISOString();

  srs[moduleId] = { intervalIndex, dueAt, lastResult: isCorrect ? 'correct' : 'wrong' };
  saveCompanionState();

  if (isCorrect && wasDue) {
    addCompanionPoints(15);
    if (typeof showToast === 'function') {
      showToast('Révision réussie ! +15 points 🔁', 'achievement');
    }
  }

  return srs[moduleId];
}

/**
 * Retourne les modules dont la révision est due aujourd'hui (ou en retard),
 * triés du plus en retard au moins en retard. Exclut les modules verrouillés
 * ou introuvables (module supprimé/renommé depuis la planification).
 */
function getDueReviews() {
  const srs = (state.companionState && state.companionState.srs) || {};
  const now = Date.now();

  return Object.keys(srs)
    .filter(moduleId => new Date(srs[moduleId].dueAt).getTime() <= now)
    .filter(moduleId => getModule(moduleId) && !isModuleUnavailable(moduleId))
    .map(moduleId => {
      const mod = getModule(moduleId);
      const overdueDays = Math.max(0, Math.floor((now - new Date(srs[moduleId].dueAt).getTime()) / 86400000));
      return { moduleId, title: mod.title, icon: mod.icon, overdueDays };
    })
    .sort((a, b) => b.overdueDays - a.overdueDays)
    .slice(0, 5);
}
