// Moteur de variantes du module « devoir » (évaluation notée en classe).
// Logique pure, sans DOM : tourne dans le navigateur (panneau admin, prévisualisation) et sous
// Node (tests, puis Cloud Functions au MVP-2, où le tirage et le corrigé seront calculés côté
// serveur). Pas d'import/export ES (pas de bundler) : global `DevoirEngine` + module.exports.
//
// Format d'un exercice : docs/evaluation/CAHIER-DES-CHARGES.md §11, étendu (QUESTIONS.md Q2) avec
// deux types de paramètres en plus de la plage { nom, min, max, pas } :
//   - liste   : { nom, valeurs: [..], unite?, decimales? }
//   - ligne de catalogue : { nom, colonnes: [{ nom, unite?, decimales? }], lignes: [[..], ..] }
//     (une ligne tirée fixe toutes ses colonnes ensemble ; une colonne peut contenir du texte)
//
// Périmètre (décisions du 2026-11-26) : uniquement l'enseignement technique et professionnel du
// BTS FED, et plus précisément les chapitres que Dylan enseigne (dossier Desktop/cours/Dylan,
// numérotation qui fait foi). Chaque exercice porte un `chapitre` obligatoire parmi CHAPITRES ;
// savoir et notion du référentiel s'en déduisent. Ajouter ici un chapitre quand son fascicule
// rejoint cours/Dylan (11, 14, 17 à 21 sont encore « à migrer »).
var DevoirEngine = (function () {
  'use strict';

  var NOM_RE = /^[A-Za-z_][A-Za-z0-9_]*$/;
  var ID_RE = /^[a-z0-9][a-z0-9-]{2,79}$/;
  var PLACEHOLDER_RE = /\{\{\s*([A-Za-z_][A-Za-z0-9_]*)\s*\}\}/g;
  // Seules fonctions et constantes autorisées dans une expression : tout autre symbole doit être
  // une variable déclarée. Sans cette liste blanche, mathjs résoudrait silencieusement un nom
  // oublié comme une unité (« m » = mètre) ou appellerait une fonction arbitraire.
  var FONCTIONS = ['sqrt', 'cbrt', 'exp', 'log', 'log10', 'log2', 'abs', 'min', 'max', 'round',
    'floor', 'ceil', 'pow', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'atan2', 'mod'];
  var CONSTANTES = ['pi', 'e'];
  var NOEUDS_AUTORISES = ['ConstantNode', 'SymbolNode', 'OperatorNode', 'ParenthesisNode',
    'FunctionNode', 'ConditionalNode'];
  var TYPES_MEDIA = ['image', 'tableau', 'graphique'];
  var MAX_ENUMERATION = 5000;
  var CHAPITRES = [
    { id: '01', titre: 'Boîte à outils du technicien', savoir: 'remise à niveau', notion: 'chapitre-00' },
    { id: '02', titre: 'Thermique des tubes', savoir: 'S8-A', notion: 'A1-1' },
    { id: '03', titre: 'Hygrothermie', savoir: 'S8-A', notion: 'A1-2' },
    { id: '04', titre: 'Diagramme de l\'air humide', savoir: 'S8-A', notion: 'A4-1' },
    { id: '05', titre: 'Bilan thermique', savoir: 'S8-A', notion: 'A2-3' },
    { id: '06', titre: 'DJU et besoin en énergie utile', savoir: 'S8-A', notion: 'A2-4' },
    { id: '07', titre: 'Réglementation thermique RE2020', savoir: 'S5', notion: 'S5-1' },
    { id: '08', titre: 'Dynamique des fluides', savoir: 'S8-A', notion: 'A3' },
    { id: '09', titre: 'Combustion appliquée', savoir: 'S8-A', notion: 'A8' },
    { id: '10a', titre: 'Diagramme enthalpique (p-h)', savoir: 'S8-A', notion: 'A5-0' },
    { id: '10b', titre: 'Thermodynamique — Mollier, méthode', savoir: 'S8-A', notion: 'A5-1' },
    { id: '10c', titre: 'Thermodynamique — Mollier, R134a', savoir: 'S8-A', notion: 'A5-2' },
    { id: '12', titre: 'Acoustique appliquée', savoir: 'S8-A', notion: 'A7' },
    { id: '13', titre: 'Réglementation acoustique', savoir: 'S5', notion: 'S5-2' },
    { id: '15', titre: 'Émission chauffage', savoir: 'S8-B', notion: 'B1-2' },
    { id: '16', titre: 'Production chauffage', savoir: 'S8-B', notion: 'B1-1' }
  ];
  function chapitreDe(id) { return CHAPITRES.find(function (c) { return c.id === id; }) || null; }
  function libelleChapitre(id) {
    var c = chapitreDe(id);
    return c ? c.id + ' · ' + c.titre + ' (' + c.savoir + ', ' + c.notion + ')' : 'chapitre « ' + String(id) + ' » inconnu';
  }

  // ── Calculateur mathjs restreint (recommandation sécurité de mathjs) ──────────
  function creerCalculateur(math) {
    var m = math.create(math.all);
    var parse = m.parse;
    function interdit(nom) { return function () { throw new Error('Fonction désactivée : ' + nom); }; }
    m.import({
      'import': interdit('import'), createUnit: interdit('createUnit'), reviver: interdit('reviver'),
      evaluate: interdit('evaluate'), parse: interdit('parse'), simplify: interdit('simplify'),
      derivative: interdit('derivative'), resolve: interdit('resolve')
    }, { override: true });
    return { parse: parse };
  }

  // ── Utilitaires numériques ────────────────────────────────────────────────
  function nbDecimales(x) {
    var s = String(x);
    if (s.indexOf('e-') !== -1) return parseInt(s.split('e-')[1], 10);
    return (s.split('.')[1] || '').length;
  }

  function nettoyer(x, d) { return Number(x.toFixed(Math.min(d, 12))); }

  function grouperMilliers(entier, sep) {
    if (entier.length < 5) return entier;
    return entier.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }

  // Nombre à la française. enMaths : dans $…$ (KaTeX) → « {,} » et « \, » ; sinon « , » et
  // espace fine insécable. decimales absent → représentation la plus courte (6 décimales max).
  function formaterNombre(x, decimales, enMaths) {
    var s = (decimales === undefined || decimales === null)
      ? String(nettoyer(x, 6))
      : x.toFixed(decimales);
    var signe = '';
    // Hors maths : vrai signe moins (U+2212), pas le trait d'union ; KaTeX le fait de lui-même.
    if (s.charAt(0) === '-') { signe = enMaths ? '-' : '−'; s = s.slice(1); }
    if (/^0(\.0+)?$/.test(s)) signe = '';
    var parties = s.split('.');
    var entier = grouperMilliers(parties[0], enMaths ? '\\,' : ' ');
    var virgule = enMaths ? '{,}' : ',';
    return signe + entier + (parties[1] !== undefined ? virgule + parties[1] : '');
  }

  // Générateur pseudo-aléatoire à graine (mulberry32) — pour des tests reproductibles.
  function rngGraine(graine) {
    var a = graine >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function entierAleatoire(rng, n) { return Math.min(n - 1, Math.floor(rng() * n)); }

  // ── Paramètres ─────────────────────────────────────────────────────────────
  function typeParametre(p) {
    if (p && Array.isArray(p.lignes)) return 'ligne';
    if (p && Array.isArray(p.valeurs)) return 'liste';
    return 'plage';
  }

  function nbValeursPlage(p) { return Math.round((p.max - p.min) / p.pas) + 1; }

  function valeurPlage(p, k) {
    var d = Math.max(nbDecimales(p.min), nbDecimales(p.pas));
    return nettoyer(p.min + k * p.pas, d);
  }

  function nbValeurs(p) {
    var t = typeParametre(p);
    if (t === 'ligne') return p.lignes.length;
    if (t === 'liste') return p.valeurs.length;
    return nbValeursPlage(p);
  }

  // Applique le choix n° k du paramètre p dans l'objet valeurs.
  function appliquerChoix(p, k, valeurs) {
    var t = typeParametre(p);
    if (t === 'ligne') {
      p.colonnes.forEach(function (c, j) { valeurs[c.nom] = p.lignes[k][j]; });
    } else if (t === 'liste') {
      valeurs[p.nom] = p.valeurs[k];
    } else {
      valeurs[p.nom] = valeurPlage(p, k);
    }
  }

  function nombreVariantes(ex) {
    return (ex.parametres || []).reduce(function (acc, p) { return acc * nbValeurs(p); }, 1);
  }

  // Table nom → { decimales, numerique } de toutes les variables (paramètres, colonnes, données).
  function definitionsVariables(ex) {
    var defs = {};
    (ex.parametres || []).forEach(function (p) {
      if (typeParametre(p) === 'ligne') {
        (p.colonnes || []).forEach(function (c, j) {
          var numerique = (p.lignes || []).every(function (l) { return typeof l[j] === 'number'; });
          defs[c.nom] = { decimales: c.decimales, numerique: numerique, unite: c.unite };
        });
      } else if (typeParametre(p) === 'liste') {
        defs[p.nom] = {
          decimales: p.decimales, unite: p.unite,
          numerique: p.valeurs.every(function (v) { return typeof v === 'number'; })
        };
      } else {
        defs[p.nom] = { decimales: p.decimales, numerique: true, unite: p.unite };
      }
    });
    (ex.donnees_calculees || []).forEach(function (d) {
      defs[d.nom] = { decimales: d.decimales, numerique: true, unite: d.unite, calculee: true };
    });
    return defs;
  }

  // ── Expressions ─────────────────────────────────────────────────────────────
  // Renvoie la liste des problèmes d'une expression, compte tenu des variables numériques connues.
  function verifierExpression(calc, expr, connues) {
    var noeud;
    try { noeud = calc.parse(String(expr)); } catch (e) { return ['syntaxe invalide (' + e.message + ')']; }
    var problemes = [];
    noeud.traverse(function (n, chemin, parent) {
      if (NOEUDS_AUTORISES.indexOf(n.type) === -1) {
        problemes.push('construction non autorisée (' + n.type + ')');
      } else if (n.type === 'ConstantNode' && typeof n.value !== 'number') {
        problemes.push('seuls les nombres sont autorisés comme constantes');
      } else if (n.type === 'FunctionNode' && (!n.fn || n.fn.type !== 'SymbolNode')) {
        problemes.push('appel de fonction non autorisé');
      } else if (n.type === 'SymbolNode') {
        var estFonction = parent && parent.type === 'FunctionNode' && chemin === 'fn';
        if (estFonction) {
          if (FONCTIONS.indexOf(n.name) === -1) problemes.push('fonction non autorisée : ' + n.name);
        } else if (CONSTANTES.indexOf(n.name) === -1 && !connues[n.name]) {
          problemes.push('variable inconnue ou non numérique : ' + n.name);
        }
      }
    });
    return problemes;
  }

  function evaluer(calc, expr, scope) {
    var r = calc.parse(String(expr)).compile().evaluate(scope);
    if (typeof r !== 'number') throw new Error("le résultat n'est pas un nombre");
    return r;
  }

  // ── Rendu des gabarits ─────────────────────────────────────────────────────
  // Remplace {{nom}} par la valeur formatée selon le contexte : dans $…$ ou $$…$$ → notation
  // KaTeX ({,}) ; hors maths → virgule simple (sinon « {,} » s'afficherait tel quel).
  function rendreGabarit(gabarit, valeurs, defs) {
    var s = String(gabarit || '');
    var sortie = '';
    var enMaths = false;
    var i = 0;
    while (i < s.length) {
      var c = s.charAt(i);
      if (c === '\\' && s.charAt(i + 1) === '$') { sortie += '\\$'; i += 2; continue; }
      if (c === '$') {
        var double = s.charAt(i + 1) === '$';
        sortie += double ? '$$' : '$';
        i += double ? 2 : 1;
        enMaths = !enMaths;
        continue;
      }
      if (c === '{' && s.charAt(i + 1) === '{') {
        PLACEHOLDER_RE.lastIndex = i;
        var m = PLACEHOLDER_RE.exec(s);
        if (m && m.index === i) {
          sortie += valeurAffichee(m[1], valeurs, defs, enMaths);
          i += m[0].length;
          continue;
        }
      }
      sortie += c;
      i++;
    }
    return sortie;
  }

  function valeurAffichee(nom, valeurs, defs, enMaths) {
    var v = valeurs[nom];
    if (typeof v === 'number') return formaterNombre(v, defs[nom] ? defs[nom].decimales : undefined, enMaths);
    return v === undefined ? '{{' + nom + '}}' : String(v);
  }

  function placeholders(texte) {
    var noms = [];
    String(texte || '').replace(PLACEHOLDER_RE, function (_, nom) { noms.push(nom); return _; });
    return noms;
  }

  // ── Calcul d'une variante ──────────────────────────────────────────────────
  function calculerDonnees(ex, calc, valeurs) {
    var scope = {};
    Object.keys(valeurs).forEach(function (k) { if (typeof valeurs[k] === 'number') scope[k] = valeurs[k]; });
    var donnees = {};
    (ex.donnees_calculees || []).forEach(function (d) {
      var r = evaluer(calc, d.expression, scope);
      if (!isFinite(r)) throw new Error('la donnée ' + d.nom + " n'est pas un nombre fini");
      scope[d.nom] = r;
      donnees[d.nom] = r;
    });
    return donnees;
  }

  function construireVariante(ex, calc, valeurs) {
    var defs = definitionsVariables(ex);
    var donnees = calculerDonnees(ex, calc, valeurs);
    var tout = {};
    Object.keys(valeurs).forEach(function (k) { tout[k] = valeurs[k]; });
    Object.keys(donnees).forEach(function (k) { tout[k] = donnees[k]; });
    var corr = ex.corrige || {};
    var nomRes = corr.resultat;
    var valeurRes = tout[nomRes];
    return {
      valeurs: valeurs,
      donnees: donnees,
      enonce: rendreGabarit(ex.enonce_modele, tout, defs),
      corrige: {
        resultat: nomRes,
        valeur: valeurRes,
        valeur_affichee: typeof valeurRes === 'number'
          ? formaterNombre(valeurRes, defs[nomRes] ? defs[nomRes].decimales : undefined, false)
          : String(valeurRes),
        unite: corr.unite || (defs[nomRes] && defs[nomRes].unite) || '',
        etapes: (corr.etapes || []).map(function (e) { return rendreGabarit(e, tout, defs); })
      }
    };
  }

  function tirerValeurs(ex, rng) {
    var valeurs = {};
    (ex.parametres || []).forEach(function (p) { appliquerChoix(p, entierAleatoire(rng, nbValeurs(p)), valeurs); });
    return valeurs;
  }

  // Tire une variante. opts.rng : fonction [0,1) (Math.random par défaut ; crypto côté serveur).
  function instancier(ex, calc, opts) {
    var rng = (opts && opts.rng) || Math.random;
    return construireVariante(ex, calc, tirerValeurs(ex, rng));
  }

  // Jusqu'à n variantes aux valeurs toutes différentes (moins si l'exercice en offre moins).
  function variantesDistinctes(ex, calc, n, opts) {
    var rng = (opts && opts.rng) || Math.random;
    var possibles = nombreVariantes(ex);
    var cible = Math.min(n, possibles);
    var vues = {};
    var variantes = [];
    for (var essai = 0; variantes.length < cible && essai < n * 50; essai++) {
      var valeurs = tirerValeurs(ex, rng);
      var cle = JSON.stringify(valeurs);
      if (vues[cle]) continue;
      vues[cle] = true;
      variantes.push(construireVariante(ex, calc, valeurs));
    }
    return { variantes: variantes, possibles: possibles };
  }

  // Combinaisons à contrôler : toutes si l'exercice en a peu, sinon les extrêmes + un échantillon.
  function combinaisonsAControler(ex) {
    var params = ex.parametres || [];
    var tailles = params.map(nbValeurs);
    var combos = [];
    if (nombreVariantes(ex) <= MAX_ENUMERATION) {
      (function rec(i, choix) {
        if (i === params.length) { combos.push(choix.slice()); return; }
        for (var k = 0; k < tailles[i]; k++) { choix[i] = k; rec(i + 1, choix); }
      })(0, []);
    } else {
      combos.push(tailles.map(function () { return 0; }));
      combos.push(tailles.map(function (t) { return t - 1; }));
      var rng = rngGraine(1);
      for (var s = 0; s < 500; s++) combos.push(tailles.map(function (t) { return entierAleatoire(rng, t); }));
    }
    return combos.map(function (choix) {
      var valeurs = {};
      params.forEach(function (p, i) { appliquerChoix(p, choix[i], valeurs); });
      return valeurs;
    });
  }

  function decrireValeurs(valeurs) {
    return Object.keys(valeurs).map(function (k) { return k + ' = ' + valeurs[k]; }).join(', ');
  }

  // ex.origine = { source, exercice, valeurs: { nom: valeur d'origine }, resultat, tolerance? }
  // tolerance : écart relatif admis (1 % par défaut : le corrigé d'origine arrondit ses calculs
  // intermédiaires). Renvoie { erreurs, avertissements, obtenu }.
  function verifierOrigine(ex, calc) {
    var o = ex.origine;
    var res = { erreurs: [], avertissements: [], obtenu: null };
    if (!o || typeof o !== 'object' || !o.valeurs || typeof o.valeurs !== 'object') {
      res.erreurs.push('origine : objet { source, exercice, valeurs, resultat } attendu.');
      return res;
    }
    if (typeof o.resultat !== 'number' || !isFinite(o.resultat)) {
      res.erreurs.push('origine.resultat : résultat numérique du corrigé d\'origine attendu.');
      return res;
    }
    var defs = definitionsVariables(ex);
    var manquantes = Object.keys(defs).filter(function (k) { return !defs[k].calculee && o.valeurs[k] === undefined; });
    if (manquantes.length) {
      res.erreurs.push('origine.valeurs : il manque ' + manquantes.join(', ') + '.');
      return res;
    }
    (ex.parametres || []).forEach(function (p) {
      if (typeParametre(p) !== 'plage') return;
      var v = o.valeurs[p.nom];
      if (typeof v === 'number' && (v < p.min || v > p.max)) {
        res.avertissements.push('La valeur d\'origine ' + p.nom + ' = ' + v + ' sort de la plage tirée [' + p.min + ' ; ' + p.max + '].');
      }
    });
    var tout;
    try {
      tout = calculerDonnees(ex, calc, o.valeurs);
    } catch (e) {
      res.erreurs.push('Garde-fou : calcul impossible avec les valeurs d\'origine (' + e.message + ').');
      return res;
    }
    var nomRes = ex.corrige && ex.corrige.resultat;
    var obtenu = tout[nomRes] !== undefined ? tout[nomRes] : o.valeurs[nomRes];
    res.obtenu = obtenu;
    var tol = typeof o.tolerance === 'number' ? o.tolerance : 0.01;
    var ecart = Math.abs(obtenu - o.resultat) / Math.max(Math.abs(o.resultat), 1e-12);
    if (!(ecart <= tol)) {
      res.erreurs.push('Garde-fou : avec les valeurs d\'origine, la formule donne ' + nomRes + ' = ' + nettoyer(obtenu, 6) +
        ' alors que le corrigé d\'origine donne ' + o.resultat + ' (écart ' + (ecart * 100).toFixed(1) + ' %, toléré ' + (tol * 100) + ' %).');
    }
    return res;
  }

  // ── Validation ───────────────────────────────────────────────────────────────
  function valider(ex, calc) {
    var erreurs = [];
    var avert = [];
    if (!ex || typeof ex !== 'object' || Array.isArray(ex)) return { erreurs: ["L'exercice doit être un objet JSON."], avertissements: [] };

    if (typeof ex.id !== 'string' || !ID_RE.test(ex.id)) {
      erreurs.push('id : 3 à 80 caractères, minuscules, chiffres et tirets (ex. « bilan-thermique-salle »).');
    }
    if (typeof ex.titre !== 'string' || !ex.titre.trim()) erreurs.push('titre : obligatoire.');
    if (!chapitreDe(ex.chapitre)) {
      erreurs.push('chapitre : obligatoire, parmi ' + CHAPITRES.map(function (c) { return c.id; }).join(', ') +
        '. Les devoirs ne portent que sur les chapitres que vous enseignez (dossier cours/Dylan).');
    }
    if (ex.tags !== undefined && (!Array.isArray(ex.tags) || ex.tags.some(function (t) { return typeof t !== 'string'; }))) {
      erreurs.push('tags : liste de textes.');
    }
    if (ex.difficulte !== undefined && !(Number.isInteger(ex.difficulte) && ex.difficulte >= 1 && ex.difficulte <= 5)) {
      erreurs.push('difficulte : entier de 1 à 5.');
    }

    // Paramètres
    var noms = {};
    function declarer(nom, ou) {
      if (typeof nom !== 'string' || !NOM_RE.test(nom)) { erreurs.push(ou + ' : nom invalide « ' + nom + ' » (lettres, chiffres, _).'); return; }
      if (FONCTIONS.indexOf(nom) !== -1 || CONSTANTES.indexOf(nom) !== -1) { erreurs.push(ou + ' : « ' + nom + ' » est réservé (fonction ou constante).'); return; }
      if (noms[nom]) { erreurs.push(ou + ' : « ' + nom + ' » est déclaré deux fois.'); return; }
      noms[nom] = true;
    }
    if (!Array.isArray(ex.parametres)) {
      erreurs.push('parametres : liste obligatoire (éventuellement vide).');
    } else {
      ex.parametres.forEach(function (p, i) {
        var ou = 'parametres[' + i + ']';
        if (!p || typeof p !== 'object') { erreurs.push(ou + ' : objet attendu.'); return; }
        var t = typeParametre(p);
        if (t === 'ligne') {
          if (!Array.isArray(p.colonnes) || !p.colonnes.length) { erreurs.push(ou + ' : colonnes obligatoires.'); return; }
          p.colonnes.forEach(function (c) { declarer(c && c.nom, ou + '.colonnes'); });
          if (!p.lignes.length) erreurs.push(ou + ' : au moins une ligne.');
          p.lignes.forEach(function (l, j) {
            if (!Array.isArray(l) || l.length !== p.colonnes.length) erreurs.push(ou + '.lignes[' + j + '] : ' + p.colonnes.length + ' valeur(s) attendue(s).');
          });
        } else if (t === 'liste') {
          declarer(p.nom, ou);
          if (!p.valeurs.length) erreurs.push(ou + ' : au moins une valeur.');
          if (p.valeurs.some(function (v) { return typeof v !== 'number' && typeof v !== 'string'; })) erreurs.push(ou + ' : valeurs numériques ou textes uniquement.');
        } else {
          declarer(p.nom, ou);
          var ok = [p.min, p.max, p.pas].every(function (x) { return typeof x === 'number' && isFinite(x); });
          if (!ok) { erreurs.push(ou + ' : min, max et pas doivent être des nombres (ou utiliser « valeurs »).'); return; }
          if (p.pas <= 0) { erreurs.push(ou + ' : le pas doit être positif.'); return; }
          if (p.max < p.min) { erreurs.push(ou + ' : max inférieur à min.'); return; }
          var n = (p.max - p.min) / p.pas;
          if (Math.abs(n - Math.round(n)) > 1e-9) erreurs.push(ou + ' : (max − min) doit être un multiple du pas.');
          else if (n + 1 > 100000) erreurs.push(ou + ' : plus de 100 000 valeurs possibles, augmenter le pas.');
        }
        if (p.decimales !== undefined && !(Number.isInteger(p.decimales) && p.decimales >= 0 && p.decimales <= 10)) {
          erreurs.push(ou + ' : decimales entre 0 et 10.');
        }
      });
    }

    // Données calculées (dans l'ordre : une donnée peut utiliser les précédentes)
    var defs = erreurs.length ? null : definitionsVariables(ex);
    var numeriques = {};
    if (defs) Object.keys(defs).forEach(function (k) { if (defs[k].numerique && !defs[k].calculee) numeriques[k] = true; });
    if (ex.donnees_calculees !== undefined && !Array.isArray(ex.donnees_calculees)) {
      erreurs.push('donnees_calculees : liste attendue.');
    } else {
      (ex.donnees_calculees || []).forEach(function (d, i) {
        var ou = 'donnees_calculees[' + i + ']';
        if (!d || typeof d !== 'object') { erreurs.push(ou + ' : objet attendu.'); return; }
        declarer(d.nom, ou);
        if (typeof d.expression !== 'string' || !d.expression.trim()) { erreurs.push(ou + ' : expression obligatoire.'); return; }
        if (calc) {
          verifierExpression(calc, d.expression, numeriques).forEach(function (pb) { erreurs.push(ou + ' (' + d.nom + ') : ' + pb + '.'); });
        }
        numeriques[d.nom] = true;
      });
    }

    // Gabarits
    // Un caractère de contrôle trahit une barre oblique perdue à l'écriture du JSON : « \times »
    // ou « \text » devenus tabulation, « \frac » saut de page, « \nu » retour à la ligne…
    var CONTROLE_RE = /[\u0000-\u001f]/;
    [['enonce_modele', ex.enonce_modele]].concat(((ex.corrige && ex.corrige.etapes) || []).map(function (t, i) { return ['corrige.etapes[' + i + ']', t]; }))
      .forEach(function (paire) {
        if (typeof paire[1] === 'string' && CONTROLE_RE.test(paire[1])) {
          erreurs.push(paire[0] + ' : caractère de contrôle (tabulation, retour à la ligne…) : une commande LaTeX a sans doute perdu sa barre oblique (\\times, \\text, \\frac…).');
        }
      });
    var toutesVariables = defs ? defs : {};
    if (typeof ex.enonce_modele === 'string') {
      placeholders(ex.enonce_modele).forEach(function (nom) {
        if (!toutesVariables[nom]) erreurs.push('enonce_modele : {{' + nom + '}} ne correspond à aucune variable.');
      });
    }
    var corr = ex.corrige;
    if (!corr || typeof corr !== 'object') {
      erreurs.push('corrige : objet obligatoire ({ resultat, unite, etapes }).');
    } else {
      if (!toutesVariables[corr.resultat] || !toutesVariables[corr.resultat].numerique) {
        erreurs.push('corrige.resultat : « ' + corr.resultat + ' » doit être une variable numérique déclarée.');
      }
      if (corr.etapes !== undefined && !Array.isArray(corr.etapes)) erreurs.push('corrige.etapes : liste attendue.');
      (corr.etapes || []).forEach(function (e, i) {
        placeholders(e).forEach(function (nom) {
          if (!toutesVariables[nom]) erreurs.push('corrige.etapes[' + i + '] : {{' + nom + '}} ne correspond à aucune variable.');
        });
      });
    }

    // Blocs de réponse et barème
    if (!Array.isArray(ex.blocs_reponse) || !ex.blocs_reponse.length) {
      erreurs.push('blocs_reponse : au moins un bloc.');
    } else {
      var ids = {};
      var total = 0;
      ex.blocs_reponse.forEach(function (b, i) {
        var ou = 'blocs_reponse[' + i + ']';
        if (!b || typeof b.id !== 'string' || !NOM_RE.test(b.id)) erreurs.push(ou + ' : id invalide.');
        else if (ids[b.id]) erreurs.push(ou + ' : id « ' + b.id + ' » en double.');
        else ids[b.id] = true;
        if (!b || typeof b.label !== 'string' || !b.label.trim()) erreurs.push(ou + ' : label obligatoire.');
        if (!b || typeof b.points !== 'number' || b.points < 0) erreurs.push(ou + ' : points positifs ou nuls.');
        else total += b.points;
      });
      if (ex.blocs_reponse.length < 3 || ex.blocs_reponse.length > 4) avert.push('Le cahier des charges prévoit 3 à 4 blocs de réponse (ici ' + ex.blocs_reponse.length + ').');
      if (Math.abs(total - 100) > 1e-9) avert.push('Le barème totalise ' + total + ' points au lieu de 100.');
    }

    if (ex.medias !== undefined) {
      if (!Array.isArray(ex.medias)) erreurs.push('medias : liste attendue.');
      else ex.medias.forEach(function (m, i) {
        if (!m || TYPES_MEDIA.indexOf(m.type) === -1) erreurs.push('medias[' + i + '] : type parmi ' + TYPES_MEDIA.join(', ') + '.');
        if (!m || typeof m.ref !== 'string' || !m.ref) erreurs.push('medias[' + i + '] : ref obligatoire.');
      });
    }

    // Calcul effectif sur les combinaisons possibles (division par zéro, racine d'un négatif…)
    if (!erreurs.length && calc) {
      var combos = combinaisonsAControler(ex);
      for (var c = 0; c < combos.length; c++) {
        try {
          calculerDonnees(ex, calc, combos[c]);
        } catch (e) {
          erreurs.push('Calcul impossible pour ' + decrireValeurs(combos[c]) + ' : ' + e.message + '.');
          break;
        }
      }
      var possibles = nombreVariantes(ex);
      if (possibles < 6) avert.push('Seulement ' + possibles + ' variante(s) possible(s) : élargir les plages pour limiter les copies identiques.');
    }

    // Garde-fou d'import : avec les valeurs de l'énoncé d'origine, la formule paramétrée doit
    // retrouver le résultat du corrigé d'origine (détecte une formule mal transcrite).
    if (!erreurs.length && calc && ex.origine !== undefined) {
      var g = verifierOrigine(ex, calc);
      g.erreurs.forEach(function (m) { erreurs.push(m); });
      g.avertissements.forEach(function (m) { avert.push(m); });
    }

    return { erreurs: erreurs, avertissements: avert };
  }

  function blocsParDefaut() {
    return [
      { id: 'methode', label: 'Méthode ou formule', points: 40 },
      { id: 'calcul', label: 'Calcul', points: 30 },
      { id: 'resultat', label: 'Résultat', points: 20 },
      { id: 'unite', label: 'Unité', points: 10 }
    ];
  }

  // Exemple de départ : déperditions par transmission à travers une paroi (chapitre 05).
  // Valeurs d'énoncé dans des ordres de grandeur courants, pas des valeurs réglementaires.
  function nouvelExercice() {
    return {
      id: 'nouvel-exercice',
      titre: 'Déperditions par transmission d\'un mur',
      chapitre: '05',
      tags: ['bilan thermique', 'déperditions'],
      difficulte: 1,
      enonce_modele: 'Le mur extérieur d\'un bureau a une surface de {{A}} m² et un coefficient de transmission surfacique $U = {{U}}$ W/(m²·K).<br/><br/>' +
        'La température intérieure de consigne est de {{Ti}} °C et la température extérieure de base de {{Tb}} °C.<br/><br/>' +
        'Calculer les <strong>déperditions par transmission</strong> $\\Phi$ à travers ce mur.',
      parametres: [
        { nom: 'A', min: 20, max: 40, pas: 2, unite: 'm²', decimales: 0 },
        { nom: 'U', min: 0.2, max: 0.4, pas: 0.05, unite: 'W/(m²·K)', decimales: 2 },
        { nom: 'Ti', valeurs: [19, 20], unite: '°C' },
        { nom: 'Tb', min: -15, max: -5, pas: 1, unite: '°C' }
      ],
      donnees_calculees: [
        { nom: 'dT', expression: 'Ti - Tb', unite: 'K', decimales: 0 },
        { nom: 'Phi', expression: 'U * A * dT', unite: 'W', decimales: 0 }
      ],
      blocs_reponse: blocsParDefaut(),
      corrige: {
        resultat: 'Phi',
        unite: 'W',
        etapes: [
          'Écart de température : $\\Delta T = T_i - T_b = {{Ti}} - ({{Tb}}) = {{dT}}$ K',
          'Déperditions : $\\Phi = U \\times A \\times \\Delta T = {{U}} \\times {{A}} \\times {{dT}} = {{Phi}}$ W'
        ]
      },
      medias: []
    };
  }

  // ── Stockage Firestore ───────────────────────────────────────────────────────
  // Firestore refuse un tableau placé directement dans un tableau : les `lignes` d'un paramètre
  // « ligne de catalogue » ([[..], ..]) sont donc enregistrées sous la forme [{ v: [..] }, ..].
  // Toute écriture d'un exercice passe par pourStockage, toute lecture par depuisStockage
  // (qui accepte aussi un exercice déjà au format du moteur).
  function _convertirLignes(ex, convertir) {
    if (!ex || !Array.isArray(ex.parametres)) return ex;
    var copie = Object.assign({}, ex);
    copie.parametres = ex.parametres.map(function (p) {
      if (!p || !Array.isArray(p.lignes)) return p;
      return Object.assign({}, p, { lignes: p.lignes.map(convertir) });
    });
    return copie;
  }
  function pourStockage(ex) {
    return _convertirLignes(ex, function (l) { return Array.isArray(l) ? { v: l } : l; });
  }
  function depuisStockage(ex) {
    return _convertirLignes(ex, function (l) { return l && !Array.isArray(l) && Array.isArray(l.v) ? l.v : l; });
  }

  return {
    pourStockage: pourStockage,
    depuisStockage: depuisStockage,
    creerCalculateur: creerCalculateur,
    valider: valider,
    instancier: instancier,
    variantesDistinctes: variantesDistinctes,
    nombreVariantes: nombreVariantes,
    verifierOrigine: verifierOrigine,
    formaterNombre: formaterNombre,
    rendreGabarit: rendreGabarit,
    rngGraine: rngGraine,
    blocsParDefaut: blocsParDefaut,
    nouvelExercice: nouvelExercice,
    libelleChapitre: libelleChapitre,
    chapitreDe: chapitreDe,
    CHAPITRES: CHAPITRES,
    FONCTIONS: FONCTIONS
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = DevoirEngine;
