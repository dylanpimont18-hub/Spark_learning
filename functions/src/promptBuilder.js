var CONTENT_TYPE_LABELS = {
  cours: 'une fiche de cours (rappels de méthode, pas d\'exercices)',
  exercices: 'une série d\'exercices corrigés (pas de rappel de cours détaillé)',
  les_deux: 'un document combinant une fiche de cours ET une série d\'exercices corrigés'
};

function buildDraftingPrompt(params) {
  var figuresInstruction = params.figuresCount > 0
    ? 'Le document doit inclure exactement ' + params.figuresCount + ' figure(s) ou courbe(s), générée(s) avec l\'outil code execution (Python/matplotlib), et intégrée(s) au document LaTeX final via \\includegraphics.'
    : 'Aucune figure n\'est demandée pour ce document — n\'en génère aucune.';

  return [
    'Tu es un formateur particulier de ' + params.subject + ' qui prépare un document pédagogique pour un·e élève de niveau ' + params.level + '.',
    'Sujet de la séance : ' + params.topic + '.',
    params.difficultiesObserved
      ? 'Difficultés observées chez l\'élève à cibler en priorité : ' + params.difficultiesObserved + '.'
      : 'Aucune difficulté particulière n\'a été notée — traite le sujet de façon standard.',
    'Type de document demandé : ' + (CONTENT_TYPE_LABELS[params.contentType] || params.contentType) + '.',
    figuresInstruction,
    'Utilise l\'outil web search si besoin pour retrouver un schéma ou une référence pertinente existante.',
    'Rédige le document intégralement en LaTeX (pas de Markdown, pas de KaTeX). Utilise la virgule française pour les nombres décimaux (ex: 1,5 et jamais 1.5).',
    'Ton socratique, encourageant, jamais punitif — pas de mot "faux" ou "erreur" adressé à l\'élève.',
    'Produis un document LaTeX complet et compilable (préambule, packages nécessaires, \\begin{document}...\\end{document}).'
  ].join('\n');
}

function buildReviewPrompt(params) {
  var figuresBlock = (params.figureDescriptions || []).length
    ? 'Figures produites (à vérifier visuellement contre les images jointes) :\n- ' + params.figureDescriptions.join('\n- ')
    : 'Aucune figure produite pour ce document.';

  return [
    'Tu es un relecteur indépendant. Relis intégralement le document LaTeX suivant, rédigé par un autre agent pour un usage professionnel avec des élèves payants — aucune erreur n\'est tolérée.',
    'Vérifie : la cohérence mathématique (calculs, notations), l\'exactitude scientifique, l\'orthographe et la grammaire françaises, et la cohérence entre le texte et les figures.',
    figuresBlock,
    'Document à relire :',
    params.texSource,
    'Renvoie la version corrigée complète du document LaTeX (même si aucune correction n\'est nécessaire, renvoie-le identique). Ne renvoie que le code LaTeX, sans commentaire ni explication autour.'
  ].join('\n\n');
}

function buildFixCompilePrompt(params) {
  return [
    'La compilation LaTeX du document suivant a échoué. Corrige la ou les erreurs indiquées par le log de compilation, sans changer le contenu pédagogique.',
    'Document LaTeX :',
    params.texSource,
    'Log d\'erreur de compilation :',
    params.compileErrorLog,
    'Renvoie uniquement le document LaTeX corrigé, complet, sans commentaire ni explication autour.'
  ].join('\n\n');
}

module.exports = {
  buildDraftingPrompt: buildDraftingPrompt,
  buildReviewPrompt: buildReviewPrompt,
  buildFixCompilePrompt: buildFixCompilePrompt
};
