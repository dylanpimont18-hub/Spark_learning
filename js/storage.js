/* =========================================================
   Spark Learning – storage.js
   Centralise toute la logique localStorage
   ========================================================= */

const Storage = {
  /* ── Clés ── */
  KEYS: {
    PROGRESS:   'sparkProgress',
    THEME:      'sparkTheme',
    RECENT:     'sparkRecent',
    TRACKING:   'sparkTracking',
    STREAK:     'sparkStreak',
    FLASHCARDS: 'sparkFlashcards',
    MODULE_STATUS: 'sparkModuleStatus'
  },

  /* ── Helpers internes ── */
  _get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch { return fallback; }
  },
  _set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  /* ══════════════════════════════════════
     PROGRESS (existant, migré depuis state.js)
  ══════════════════════════════════════ */
  getProgress() { return this._get(this.KEYS.PROGRESS, {}); },

  saveProgress(moduleId, type, progressObj) {
    const p = progressObj || this.getProgress();
    if (!p[moduleId]) p[moduleId] = {};
    p[moduleId][type] = true;
    this._set(this.KEYS.PROGRESS, p);
    return p;
  },

  /* ══════════════════════════════════════
     THEME (existant, migré depuis app.js)
  ══════════════════════════════════════ */
  getTheme() { return localStorage.getItem(this.KEYS.THEME) || 'light'; },
  setTheme(theme) { localStorage.setItem(this.KEYS.THEME, theme); },

  /* ══════════════════════════════════════
     RECENT MODULES (existant, migré depuis state.js)
  ══════════════════════════════════════ */
  getRecent() { return this._get(this.KEYS.RECENT, []); },

  trackRecent(moduleId) {
    let recent = this.getRecent().filter(id => id !== moduleId);
    recent.unshift(moduleId);
    if (recent.length > 5) recent = recent.slice(0, 5);
    this._set(this.KEYS.RECENT, recent);
  },

  /* ══════════════════════════════════════
     TRACKING (NOUVEAU — tentatives, temps, scores)
  ══════════════════════════════════════ */
  getTracking(moduleId) {
    const all = this._get(this.KEYS.TRACKING, {});
    return moduleId ? (all[moduleId] || null) : all;
  },

  trackAttempt(moduleId, section, isCorrect, durationMs) {
    const all = this._get(this.KEYS.TRACKING, {});
    if (!all[moduleId]) all[moduleId] = {};
    if (!all[moduleId][section]) {
      all[moduleId][section] = { attempts: 0, correct: 0, totalTime: 0, bestScore: 0, lastAttempt: null };
    }
    const s = all[moduleId][section];
    s.attempts++;
    if (isCorrect) s.correct++;
    if (durationMs) s.totalTime += durationMs;
    s.lastAttempt = new Date().toISOString();
    this._set(this.KEYS.TRACKING, all);

    // Mettre à jour le streak
    this.updateStreak();
  },

  trackQuizScore(moduleId, score, total) {
    const all = this._get(this.KEYS.TRACKING, {});
    if (!all[moduleId]) all[moduleId] = {};
    if (!all[moduleId].quiz) {
      all[moduleId].quiz = { attempts: 0, correct: 0, totalTime: 0, bestScore: 0, lastAttempt: null };
    }
    all[moduleId].quiz.attempts++;
    all[moduleId].quiz.bestScore = Math.max(all[moduleId].quiz.bestScore, score);
    all[moduleId].quiz.lastAttempt = new Date().toISOString();
    this._set(this.KEYS.TRACKING, all);
    this.updateStreak();
  },

  trackEvaluationScore(moduleId, score, totalPoints) {
    const all = this._get(this.KEYS.TRACKING, {});
    if (!all[moduleId]) all[moduleId] = {};
    if (!all[moduleId].evaluation) {
      all[moduleId].evaluation = { attempts: 0, bestScore: 0, bestTotal: 0, lastAttempt: null };
    }
    const e = all[moduleId].evaluation;
    e.attempts++;
    if (score > e.bestScore) { e.bestScore = score; e.bestTotal = totalPoints; }
    e.lastAttempt = new Date().toISOString();
    this._set(this.KEYS.TRACKING, all);
    this.updateStreak();
  },

  /* ══════════════════════════════════════
     STREAKS (NOUVEAU)
  ══════════════════════════════════════ */
  getStreak() {
    return this._get(this.KEYS.STREAK, {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      dailyModules: []
    });
  },

  updateStreak() {
    const streak = this.getStreak();
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    if (streak.lastActiveDate === today) {
      // Déjà actif aujourd'hui, rien à faire
      return streak;
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    if (streak.lastActiveDate === yesterday) {
      // Jour consécutif
      streak.currentStreak++;
    } else if (streak.lastActiveDate !== today) {
      // Streak cassé (ou premier jour)
      streak.currentStreak = 1;
    }

    streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak);
    streak.lastActiveDate = today;
    streak.dailyModules = [];

    this._set(this.KEYS.STREAK, streak);

    // Vérifier les milestones
    this._checkStreakMilestone(streak.currentStreak);

    return streak;
  },

  _checkStreakMilestone(count) {
    const milestones = [3, 7, 14, 30, 50, 100];
    if (milestones.includes(count) && typeof showToast === 'function') {
      const messages = {
        3: 'Streak de 3 jours ! Continue comme \u00e7a !',
        7: 'Une semaine compl\u00e8te ! Tu es en feu !',
        14: '2 semaines de suite ! Impressionnant !',
        30: '30 jours ! Tu es inarr\u00eatable !',
        50: '50 jours ! L\u00e9gendaire !',
        100: '100 jours ! Champion absolu !'
      };
      setTimeout(() => showToast(messages[count], 'achievement'), 800);
    }
  },

  /* ══════════════════════════════════════
     FLASHCARDS STATE
  ══════════════════════════════════════ */
  getFlashcardState(moduleId) {
    const all = this._get(this.KEYS.FLASHCARDS, {});
    return all[moduleId] || { known: [] };
  },

  saveFlashcardKnown(moduleId, knownIndices) {
    const all = this._get(this.KEYS.FLASHCARDS, {});
    all[moduleId] = { known: knownIndices };
    this._set(this.KEYS.FLASHCARDS, all);
  },

  /* ══════════════════════════════════════
     MODULE STATUS (admin: verrouille / maintenance)
  ══════════════════════════════════════ */
  getModuleStatuses() {
    return this._get(this.KEYS.MODULE_STATUS, {});
  },

  getModuleStatus(moduleId) {
    const all = this.getModuleStatuses();
    return all[moduleId] || { locked: false, maintenance: false };
  },

  setModuleStatus(moduleId, patch) {
    const all = this.getModuleStatuses();
    const current = all[moduleId] || { locked: false, maintenance: false };
    const next = {
      locked: !!(patch && patch.locked),
      maintenance: !!(patch && patch.maintenance)
    };

    // locked et maintenance sont exclusifs
    if (next.locked) next.maintenance = false;
    if (next.maintenance) next.locked = false;

    all[moduleId] = { ...current, ...next };
    this._set(this.KEYS.MODULE_STATUS, all);
    return all[moduleId];
  },

  resetModuleStatus(moduleId) {
    const all = this.getModuleStatuses();
    delete all[moduleId];
    this._set(this.KEYS.MODULE_STATUS, all);
  },

  /* ══════════════════════════════════════
     EXERCICE STREAK (premier coup consécutifs)
  ══════════════════════════════════════ */
  getExerciceStreak() {
    return parseInt(localStorage.getItem('sparkExStreak') || '0');
  },

  updateExerciceStreak(firstTry) {
    let streak = this.getExerciceStreak();
    if (firstTry) {
      streak++;
      localStorage.setItem('sparkExStreak', String(streak));
      if (streak >= 3 && streak % 3 === 0 && typeof showToast === 'function') {
        showToast(`S\u00e9rie de ${streak} exercices r\u00e9ussis du 1er coup !`, 'achievement');
      }
    } else {
      streak = 0;
      localStorage.setItem('sparkExStreak', '0');
    }
    return streak;
  }
};
