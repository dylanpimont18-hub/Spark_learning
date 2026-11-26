// Copie le moteur de variantes (source unique : js/devoir/devoirEngine.js, partagé avec le
// navigateur) dans functions/vendor/ avant la compilation : un déploiement de fonctions
// n'embarque que le dossier functions/. La copie n'est pas versionnée.
const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, '..', 'js', 'devoir', 'devoirEngine.js');
const cible = path.join(__dirname, 'vendor', 'devoirEngine.js');
fs.mkdirSync(path.dirname(cible), { recursive: true });
fs.copyFileSync(source, cible);
console.log('moteur copié → functions/vendor/devoirEngine.js');
