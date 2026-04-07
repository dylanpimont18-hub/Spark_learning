/* =========================================================
   Spark Learning – engines/companionEngine.js
   Moteur Spark Companion : rattrapage, remédiation, CCF
   ========================================================= */

/**
 * Détecte les lacunes basées sur les scores des exercices/quiz
 * Retourne un array de tuples [topicId, failureCount]
 */
function detectLacunes(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return [];

  const lacunes = [];
  const progress = state.progress[moduleId] || {};

  // Détection basique : si quiz ou exercice non complétés, c'est une lacune
  if (!progress.quiz) {
    lacunes.push(['quiz', 1]);
  }
  if (!progress.exercice) {
    lacunes.push(['exercice', 1]);
  }
  if (!progress.probleme) {
    lacunes.push(['probleme', 1]);
  }

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

  // Trier par priorité de lacune
  return candidates
    .map(mod => {
      const lacunes = detectLacunes(mod.id);
      const progress = state.progress[mod.id] || {};
      return {
        moduleId: mod.id,
        title: mod.title,
        lacuneCount: lacunes.length,
        isStarted: progress.quiz || progress.exercice || progress.probleme
      };
    })
    .sort((a, b) => {
      // Priorité: lacunes importantes ET non commencé
      if (b.lacuneCount !== a.lacuneCount) return b.lacuneCount - a.lacuneCount;
      return a.isStarted ? 1 : -1;
    })
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
