/* =========================================================
   Spark Learning – components/celebration.js
   Célébrations contextuelles : confetti, flash, badge pulse
   ========================================================= */

function celebrate(type) {
  if (type === 'level-complete') _celebrateConfetti();
  else if (type === 'streak')    _celebrateFlash();
  else if (type === 'badge')     _celebrateBadge();
}

function _celebrateConfetti() {
  const container = document.createElement('div');
  container.className = 'celebration-confetti';
  document.body.appendChild(container);

  const colors = ['#2C3E50', '#48C9B0', '#F4D03F', '#2ECC71', '#FF6B6B'];
  for (let i = 0; i < 48; i++) {
    const p = document.createElement('span');
    p.className = 'confetti-particle';
    const x     = Math.random() * 100;
    const delay = Math.random() * 0.8;
    const size  = 6 + Math.random() * 8;
    const rot   = Math.random() * 360;
    p.style.cssText = `left:${x}vw;background:${colors[i % colors.length]};width:${size}px;height:${size}px;animation-delay:${delay}s;transform:rotate(${rot}deg)`;
    container.appendChild(p);
  }

  setTimeout(() => container.remove(), 2800);
}

function _celebrateFlash() {
  const el = document.createElement('div');
  el.className = 'celebration-flash';
  el.textContent = '🔥 Série parfaite !';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

function _celebrateBadge() {
  const el = document.createElement('div');
  el.className = 'celebration-badge';
  el.textContent = '🏅 Nouveau badge !';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}
