// js/components/personalisation.js
// Composant pour la personnalisation de l'expérience utilisateur
// Rendu DOM à faire via js/render.js

export function renderPersonalisationPanel(containerId, state, onChange) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div style="padding:1em">
      <label><strong>Niveau de détail des explications :</strong></label><br/>
      <select id="detailLevel">
        <option value="resume" ${state.detailLevel==='resume'?'selected':''}>Résumé</option>
        <option value="detaille" ${state.detailLevel==='detaille'?'selected':''}>Détaillé</option>
        <option value="demo" ${state.detailLevel==='demo'?'selected':''}>Avec démonstration</option>
      </select><br/><br/>
      <label><input type="checkbox" id="reminders" ${state.reminders?'checked':''}/> Activer les rappels de notions</label>
    </div>
  `;
  container.querySelector('#detailLevel').onchange = e => onChange({detailLevel: e.target.value});
  container.querySelector('#reminders').onchange = e => onChange({reminders: e.target.checked});
}
