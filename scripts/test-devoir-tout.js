// Enchaîne les suites de tests du module devoir contre les émulateurs.
// À lancer par : node scripts/devoir-emulateurs.js test [regles|fonctions|e2e|tout]
const SUITES = {
  ia: './test-devoir-ia.js',
  regles: './test-devoir-regles.js',
  fonctions: './test-devoir-fonctions.js',
  e2e: './test-devoir-e2e.js'
};

(async () => {
  const demande = process.argv[2] || 'tout';
  const noms = demande === 'tout' ? Object.keys(SUITES) : [demande];
  let passes = 0;
  let echecs = 0;
  for (const nom of noms) {
    if (!SUITES[nom]) { console.error('Suite inconnue : ' + nom); process.exit(2); }
    console.log('\n══ ' + nom + ' ══');
    try {
      const r = await require(SUITES[nom]).lancer();
      passes += r.passes; echecs += r.echecs;
    } catch (e) {
      echecs++;
      console.error('  ÉCHEC  la suite « ' + nom + ' » s\'est interrompue\n        ' + (e && e.stack || e));
    }
  }
  console.log('\n' + passes + ' test(s) réussi(s), ' + echecs + ' échec(s).');
  process.exit(echecs ? 1 : 0);
})();
