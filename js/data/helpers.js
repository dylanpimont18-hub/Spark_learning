/* =========================================================
   Spark Learning – data/helpers.js
   Utilitaires aléatoires + initialisation du tableau
   ========================================================= */

window.MODULES = [];

const rand      = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randFloat = (min, max, d = 1) => parseFloat((Math.random() * (max - min) + min).toFixed(d));
const pick      = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Formate un nombre pour un template LaTeX avec la virgule française (ex: fr(1.5) -> "1{,}5").
// Passer `decimals` pour arrondir avant conversion (ex: fr(x, 2) équivaut à x.toFixed(2) + virgule fr).
// À utiliser systématiquement dans exercice.generate() au lieu de .replace('.', '{,}') à la main
// (source d'un bug récurrent : notation anglaise oubliée ou accolade fermante manquante).
const fr = (value, decimals) => (decimals === undefined ? String(value) : value.toFixed(decimals)).replace('.', '{,}');
