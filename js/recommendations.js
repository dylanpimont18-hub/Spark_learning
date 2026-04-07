/* =========================================================
   Spark Learning – recommendations.js
   Recommandations adaptatives basées sur la progression
   ========================================================= */

// --- Intégration errorAnalysisEngine (analyse erreurs & recommandations) ---
import errorAnalysisEngine from './engines/errorAnalysisEngine.js';

// Exemple d'utilisation :
// Analyse l'historique utilisateur et recommande des modules prioritaires
function analyzeAndRecommendExample(userHistory, modules) {
  const difficulties = errorAnalysisEngine.analyze(userHistory);
  const recommandations = errorAnalysisEngine.recommend(difficulties, modules);
  console.log('Modules à retravailler en priorité :', recommandations);
  // À brancher sur l’UI de recommandations si besoin
}

/**
 * Retourne des recommandations pour un module donné.
 * Analyse les prérequis et la progression de l'élève.
 */
function getRecommendations(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return [];
  const recommendations = [];

  // 1. Vérifier les prérequis explicites
  if (mod.prerequisites && mod.prerequisites.length > 0) {
    mod.prerequisites.forEach(preId => {
      const preMod = getModule(preId);
      if (!preMod) return;
      const progress = getModuleProgress(preId);

      // Prérequis non complété
      if (progress.pct < 75) {
        recommendations.push({
          type: 'prerequisite',
          module: preMod,
          reason: 'Renforce tes bases sur \u00ab ' + preMod.title + ' \u00bb avant de continuer.'
        });
      }

      // Vérifier le tracking si disponible
      if (typeof Storage !== 'undefined' && Storage.getTracking) {
        const tracking = Storage.getTracking(preId);
        if (tracking && tracking.exercice) {
          const ratio = tracking.exercice.attempts > 0
            ? tracking.exercice.correct / tracking.exercice.attempts : 0;
          if (ratio < 0.5 && tracking.exercice.attempts >= 2) {
            // Déjà dans la liste ?
            if (!recommendations.find(r => r.module.id === preId)) {
              recommendations.push({
                type: 'prerequisite',
                module: preMod,
                reason: 'Tu as des difficult\u00e9s sur \u00ab ' + preMod.title + ' \u00bb. R\u00e9vise ce module pour progresser.'
              });
            }
          }
        }
      }
    });
  }

  // 2. Inférer le prérequis par ordre du programme (module précédent dans le même niveau/sujet)
  if (recommendations.length === 0) {
    const subject = mod.subject || 'maths';
    const levelMods = window.MODULES.filter(m =>
      m.level === mod.level && (m.subject || 'maths') === subject
    );
    const idx = levelMods.findIndex(m => m.id === mod.id);
    if (idx > 0) {
      const prevMod = levelMods[idx - 1];
      const prevProgress = getModuleProgress(prevMod.id);
      if (prevProgress.pct < 50) {
        recommendations.push({
          type: 'prerequisite',
          module: prevMod,
          reason: 'Le module pr\u00e9c\u00e9dent \u00ab ' + prevMod.title + ' \u00bb n\'est pas encore compl\u00e9t\u00e9.'
        });
      }
    }
  }

  // 3. Suggérer le module suivant
  const subject = mod.subject || 'maths';
  const levelMods = window.MODULES.filter(m =>
    m.level === mod.level && (m.subject || 'maths') === subject
  );
  const idx = levelMods.findIndex(m => m.id === mod.id);
  if (idx >= 0 && idx < levelMods.length - 1) {
    const nextMod = levelMods[idx + 1];
    recommendations.push({
      type: 'next',
      module: nextMod,
      reason: 'Module suivant dans le programme.'
    });
  }

  return recommendations;
}

/**
 * Génère le HTML d'un encart de recommandation.
 */
function renderRecommendationCards(moduleId) {
  const recs = getRecommendations(moduleId);
  if (recs.length === 0) return '';

  // Afficher max 2 recommandations
  const display = recs.slice(0, 2);

  return `
    <div class="recommendations-section" style="margin-top:var(--space-lg);">
      ${display.map(r => `
        <div class="recommendation-card" onclick="navigate('module', {moduleId: '${r.module.id}'})" tabindex="0" role="button" aria-label="${r.reason}">
          <div class="recommendation-icon">${r.type === 'prerequisite' ? '\u26A0\uFE0F' : '\u27A1\uFE0F'}</div>
          <div class="recommendation-text">
            <div class="recommendation-title">${r.module.icon} ${r.module.title}</div>
            <div class="recommendation-reason">${r.reason}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
