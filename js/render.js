// js/render.js
// Fichier centralisé pour le rendu DOM (SPA)
// Ajout : intégration de la visualisation interactive

import { renderGraph } from './components/visualisation.js';

// Exemple d'utilisation : rendu d'un graphique dans un container
export function renderGraphExample() {
  // Container cible dans le DOM
  const containerId = 'graph-demo';
  // Données d'exemple
  const data = { type: 'line', points: [ {x:10, y:20}, {x:50, y:80}, {x:90, y:40} ] };
  const options = { width: 300, height: 200 };
  renderGraph(containerId, data, options);
}

// ...autres fonctions de rendu globales...

// --- Intégration personalisation.js (personnalisation expérience) ---
import { renderPersonalisationPanel } from './components/personalisation.js';

// Exemple d'utilisation : affichage du panneau de personnalisation
export function renderPersonalisationExample() {
  const containerId = 'personalisation-demo';
  const state = { detailLevel: 'detaille', reminders: true };
  renderPersonalisationPanel(containerId, state, (newPrefs) => {
    console.log('Préférences modifiées :', newPrefs);
    // Ici, mettre à jour l’état global si besoin
  });
}
