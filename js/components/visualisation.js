// js/components/visualisation.js
// Composant pour visualisation interactive (maths)
// Rendu DOM à faire via js/render.js

export function renderGraph(containerId, data, options = {}) {
  // data : { type: 'line'|'points'|'bar', points: [{x, y}, ...] }
  // options : couleurs, axes, etc.
  const container = document.getElementById(containerId);
  if (!container) return;
  // Simple exemple : SVG inline
  const width = options.width || 300;
  const height = options.height || 200;
  let svg = `<svg width="${width}" height="${height}" style="background:var(--background)">`;
  if (data.type === 'line') {
    svg += '<polyline fill="none" stroke="var(--primary)" stroke-width="2" points="' +
      data.points.map(pt => `${pt.x},${height-pt.y}`).join(' ') + '" />';
  }
  // ...autres types à compléter
  svg += '</svg>';
  container.innerHTML = svg;
}
