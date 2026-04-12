/* =========================================================
   Spark Learning – components/celebration.js
   Animations de célébration contextuelle
   ========================================================= */

var Celebration = (function () {

  var COLORS = [
    'var(--primary)',
    'var(--secondary)',
    'var(--accent)',
    'var(--success)',
    'var(--error)'
  ];

  /* ── API publique ── */
  function celebrate(type) {
    switch (type) {
      case 'level-complete': _confetti();              break;
      case 'streak':         _flashMessage('🔥 Série parfaite !'); break;
      case 'badge':          _badgePulse();             break;
    }
  }

  /* ── Confetti (level-complete) ── */
  function _confetti() {
    var container = document.createElement('div');
    container.className = 'celebration-confetti-container';
    document.body.appendChild(container);

    for (var i = 0; i < 52; i++) {
      var p = document.createElement('div');
      p.className = 'confetti-particle';
      p.style.left             = (Math.random() * 100) + 'vw';
      p.style.background       = COLORS[Math.floor(Math.random() * COLORS.length)];
      p.style.animationDelay    = (Math.random() * 0.7) + 's';
      p.style.animationDuration = (0.9 + Math.random() * 0.9) + 's';
      p.style.width             = (5 + Math.random() * 8) + 'px';
      p.style.height            = (5 + Math.random() * 8) + 'px';
      p.style.borderRadius      = Math.random() > 0.5 ? '50%' : '3px';
      p.style.transform         = 'rotate(' + (Math.random() * 360) + 'deg)';
      container.appendChild(p);
    }

    setTimeout(function () { container.remove(); }, 2400);
  }

  /* ── Flash message (streak) ── */
  function _flashMessage(text) {
    var el = document.createElement('div');
    el.className   = 'celebration-flash';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 1800);
  }

  /* ── Badge pulse (badge) ── */
  function _badgePulse() {
    var el = document.createElement('div');
    el.className = 'celebration-badge-pulse';
    el.innerHTML = '&#x1F3C6;';
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 1400);
  }

  return { celebrate: celebrate };
})();

/* Raccourci global */
function celebrate(type) { Celebration.celebrate(type); }
