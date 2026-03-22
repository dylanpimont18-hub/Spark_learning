/* =========================================================
   Spark Learning – data/helpers.js
   Utilitaires aléatoires + initialisation du tableau
   ========================================================= */

window.MODULES = [];

const rand      = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randFloat = (min, max, d = 1) => parseFloat((Math.random() * (max - min) + min).toFixed(d));
const pick      = (arr) => arr[Math.floor(Math.random() * arr.length)];
