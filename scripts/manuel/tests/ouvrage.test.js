const test = require('node:test');
const assert = require('node:assert');
const O = require('../ouvrage.js');

/* `ouvrage.js` n'avait aucun test : une reference morte a une constante
   renommee n'a explose qu'apres huit minutes de build, une fois le livre
   entier compile. Ces tests rendent la meme faute detectable en deux
   secondes. Ils ne jugent pas l'esthetique, ils verifient que chaque
   fonction produit bien un document et que les regles de charte tiennent. */

function config(extra) {
  return Object.assign({
    titre: 'Mathématiques', sousTitre: 'Collège',
    collection: 'Collection Mathématiques',
    // `dossiers` porte les annees du cursus : depuis la couverture v3, c'est
    // lui qui determine la ou les teintes du plat. Un ouvrage sans dossiers
    // tomberait sur la famille par defaut.
    dossiers: ['6e', '5e', '4e', '3e'],
    niveaux: 'Sixième • Cinquième • Quatrième • Troisième',
    accroche: 'Tout le programme de la sixième à la troisième.',
    mention: 'Cours, méthodes, exercices et évaluations',
    annee: 2026, nbChapitres: 48, gouttiere: 15.9, pages: 433,
    // Pas d'`avantPropos` : depuis le 2026-09-12 le texte est celui
    // d'ouvrage.js et se decline par edition. Le poser ici l'ecraserait, et
    // les tests de registre ne verifieraient plus rien.
    professeur: false
  }, extra || {});
}

/* ---- Chaque fonction doit produire un document, pas lever ---- */

test('chaque fonction de maquette produit du LaTeX sans lever', () => {
  const c = config();
  const sorties = {
    preambule: O.preambule(c),
    couverture: O.couverture(c),
    liminaires: O.liminaires(c),
    ouverturePartie: O.ouverturePartie('Troisième', [{ numero: 1, titre: 'Thalès' }]),
    couvertureSeparee: O.couvertureSeparee(c),
    finOuvrage: O.finOuvrage([], c)
  };
  for (const [nom, s] of Object.entries(sorties)) {
    assert.ok(typeof s === 'string' && s.length > 50, nom + ' : sortie vide');
    // Une interpolation non resolue laisse la trace « ${...} » dans le .tex.
    assert.ok(!/\$\{/.test(s), nom + ' : interpolation non resolue');
    assert.ok(!/undefined|\[object Object\]/.test(s), nom + ' : valeur non definie injectee');
  }
});

test('la couverture imprimeur est un document complet et autonome', () => {
  const s = O.couvertureSeparee(config());
  assert.ok(s.includes('\\begin{document}'), 'pas de begin document');
  assert.ok(s.includes('\\end{document}'), 'pas de end document');
  // C'est la piece qui part chez l'imprimeur : sans la police ni les macros
  // du logo, elle compile en Computer Modern avec un plat muet.
  assert.ok(s.includes('\\usepackage{montserrat}'), 'police de la charte absente');
  assert.ok(s.includes('\\newcommand{\\sparkeclair}'), 'macros du logo absentes');
});

/* ---- La charte ---- */

test('aucune couleur inventee ne subsiste dans la palette', () => {
  for (const invente of ['C9A227', '18806F', 'B03A2E', '16202A', '5C6873', 'F7F5F0']) {
    assert.ok(!O.COULEURS_CHARTE.includes(invente),
      'couleur inventee encore declaree : #' + invente);
  }
});

test('la palette declare bien les variables de css/styles.css', () => {
  for (const charte of ['2C3E50', '48C9B0', 'F4D03F', 'E67E22', 'FF6B6B',
                        '212529', '6C757D', 'F8F9FA']) {
    assert.ok(O.COULEURS_CHARTE.includes(charte), 'couleur de charte absente : #' + charte);
  }
});

test('le preambule et la couverture imprimeur partagent LA meme palette', () => {
  // Deux listes de couleurs recopiees finissent toujours par diverger.
  assert.ok(O.preambule(config()).includes(O.COULEURS_CHARTE), 'preambule : palette absente');
  assert.ok(O.couvertureSeparee(config()).includes(O.COULEURS_CHARTE),
    'couverture imprimeur : palette absente');
});

test("l'accent ne porte jamais de texte dans le corps du livre", () => {
  // #F4D03F sur blanc donne 1,6:1. Pour du texte c'est orfonce, comme le site.
  const s = O.preambule(config());
  assert.ok(!/\\color\{jaune\}/.test(s), 'l\'accent est utilise en couleur de texte');
  assert.ok(s.includes('\\color{orfonce}'), 'orfonce n\'est utilise nulle part');
});

/* Isoler UNE declaration d'encadre. Une regex « du nom jusqu'a title= »
   echouerait : « coltitle= » contient litteralement « title= ». */
function encadre(preambule, nom) {
  const i = preambule.indexOf('\\newtcolorbox{' + nom + '}');
  assert.ok(i >= 0, nom + ' : encadre introuvable');
  const j = preambule.indexOf('\\newtcolorbox', i + 1);
  return preambule.slice(i, j > 0 ? j : i + 400).replace(/\s+/g, ' ');
}

test('les encadres sur fond clair forcent un titre en encre', () => {
  const s = O.preambule(config());
  // Le blanc par defaut de tcolorbox tombe sous 3:1 sur ces trois fonds.
  for (const boite of ['spdef', 'spretenir', 'sppiege', 'spmethode']) {
    assert.ok(encadre(s, boite).includes('coltitle=encre'),
      boite + ' : titre en blanc sur fond clair');
  }
  // Sur les fonds sombres, l'inverse.
  for (const boite of ['spexemple', 'spprof']) {
    assert.ok(encadre(s, boite).includes('coltitle=white'),
      boite + ' : titre sombre sur fond sombre');
  }
});

test('les encadres reprennent la semantique du site', () => {
  const s = O.preambule(config());
  // definitions --secondary (styles.css:1726), a retenir --accent (l. 2021),
  // piege --error (l. 2047). Le manuel les avait interverties.
  assert.ok(encadre(s, 'spdef').includes('colframe=turquoise'), 'definitions : pas en --secondary');
  assert.ok(encadre(s, 'spretenir').includes('colframe=jaune'), 'a retenir : pas en --accent');
  assert.ok(encadre(s, 'sppiege').includes('colframe=erreur'), 'piege : pas en --error');
});

test('toute couleur d accent de figure est declaree par la palette', () => {
  /* Ce test existe parce que le passage a la charte a supprime `olive` et
     `ambre` sans que svg2tikz cesse de les demander : lycee-si, bts-si et
     bts-fed n'auraient plus compile, et college-maths n'aurait rien montre
     puisqu'il n'utilise que l'accent des maths. */
  const { ACCENTS } = require('../svg2tikz.js');
  const noms = Object.keys(ACCENTS);
  assert.deepStrictEqual(noms.sort(), ['fed', 'maths', 'physique', 'si'],
    'une matiere a disparu de la table des accents');
  for (const [matiere, couleur] of Object.entries(ACCENTS)) {
    const declaree = O.COULEURS_CHARTE.includes('{' + couleur + '}');
    assert.ok(declaree, matiere + ' : la couleur ' + couleur + ' n\'est pas declaree');
  }
});

/* ---- Le plat 1 ---- */

test('la page de titre et la couverture imprimeur composent le meme plat', () => {
  // Les laisser diverger, c'est imprimer un livre dont la couverture ne dit
  // pas ce que dit sa page de titre.
  const c = config();
  for (const s of [O.couverture(c), O.couvertureSeparee(c)]) {
    assert.ok(s.includes('Mathématiques'), 'titre absent');
    assert.ok(s.includes('COLLECTION MATHÉMATIQUES'), 'libelle de collection absent');
    // Les quatre teintes du cycle college doivent etre sur les deux faces.
    for (const a of ['an6e', 'an5e', 'an4e', 'an3e']) {
      assert.ok(s.includes(a), 'teinte ' + a + ' absente');
    }
  }
});

/* ---- Le systeme « une couleur par annee » ---- */

test('un volume mono-niveau porte une seule teinte, un volume de cycle les porte toutes', () => {
  const solo = O.couverture(config({ sousTitre: 'Sixième', dossiers: ['6e'] }));
  assert.ok(solo.includes('an6e'), 'la teinte de l\'annee est absente');
  assert.ok(!solo.includes('\\fill[an3e]'), 'une teinte etrangere remplit le bandeau');

  const cycle = O.couverture(config());
  for (const a of ['an6e', 'an5e', 'an4e', 'an3e']) {
    assert.ok(cycle.includes('\\fill[' + a + ']'), 'bandeau : ' + a + ' manquant');
  }
});

test('le niveau d un volume de cycle ne revendique aucune annee', () => {
  // Aucune des quatre annees ne peut s'attribuer le mot « Collège » : le
  // niveau se compose en ardoise, ce sont le bandeau et les pastilles qui
  // portent la couleur.
  const cycle = O.couverture(config());
  assert.ok(/text=ardoise,font=\\sffamily\\bfseries\\fontsize\{25\}/.test(cycle),
    'le niveau de cycle n\'est pas en ardoise');
  const solo = O.couverture(config({ sousTitre: 'Sixième', dossiers: ['6e'] }));
  assert.ok(/text=an6e,font=\\sffamily\\bfseries\\fontsize\{25\}/.test(solo),
    'le niveau solo ne prend pas la teinte de son annee');
});

test('chaque cle de dossier connait son annee', () => {
  // Une cle absente de la table ferait tomber le plat sur une teinte de
  // secours sans rien signaler : c'est exactement le genre de derive qui ne
  // se voit qu'a l'impression.
  const B = require('../build.js');
  for (const [cle, conf] of Object.entries(B.OUVRAGES || {})) {
    const s = O.couverture(config(Object.assign({}, conf, { nbChapitres: 10 })));
    assert.ok(/\\fill\[an[a-z0-9]+\]/.test(s), cle + ' : aucun bandeau d\'annee');
  }
});

test('le motif recoit un nom de coordonnee, jamais une expression', () => {
  // TikZ : [shift={...}] exige un nom. Lui passer « ([yshift=2cm]pc) » fait
  // echouer la compilation sur « No shape named `([yshift=2' is known ».
  const s = O.couverture(config());
  assert.ok(s.includes('\\coordinate (psw)'), 'psw n\'est pas declaree');
  assert.ok(!/shift=\{\(\(/.test(s), 'une expression est passee au lieu d\'un nom');
  // Le motif de discipline est trace dans un repere local en millimetres :
  // sans cette declaration, toutes ses coordonnees valent des centimetres.
  assert.ok(s.includes('shift={(psw)},x=1mm,y=1mm'), 'repere local du motif absent');
});

test('aucune image n est attendue par la couverture', () => {
  // La couverture est dessinee en TikZ : plus de couverture.png a fournir.
  const s = O.couverture(config()) + O.couvertureSeparee(config());
  assert.ok(!/includegraphics/.test(s), 'la couverture reclame encore une image');
});

/* ---- Les regles de composition du titre ---- */

test('l echelle de pastilles montre tout le cursus, pas seulement les annees couvertes', () => {
  // C'est ce qui fait lire une serie comme une serie : sur le volume de
  // sixieme, l'eleve voit qu'il existe une cinquieme, une quatrieme et une
  // troisieme. La ligne de niveaux en texte de l'ancienne maquette, elle,
  // disparaissait sur tous les volumes mono-niveau.
  const solo = O.couverture(config({ sousTitre: 'Sixième', dossiers: ['6e'] }));
  for (const lab of ['6\\textsuperscript{e}', '5\\textsuperscript{e}',
    '4\\textsuperscript{e}', '3\\textsuperscript{e}']) {
    assert.ok(solo.includes(lab), 'pastille absente : ' + lab);
  }
  // L'annee couverte est pleine, les autres en contour gris.
  assert.ok(solo.includes('\\fill[an6e,rounded corners'), 'la pastille courante n\'est pas pleine');
  assert.ok(/draw\[gris!45,rounded corners/.test(solo), 'les autres pastilles ne sont pas en contour');
});

test('le cursus BTS distingue la remise a niveau du programme', () => {
  const prep = O.couverture(config({ sousTitre: 'Remise à niveau', dossiers: ['bts-prep'] }));
  assert.ok(prep.includes('PRÉPA'), 'pastille prepa absente');
  assert.ok(prep.includes('BTS'), 'pastille BTS absente');
  assert.ok(prep.includes('\\fill[anprepa,rounded corners'), 'prepa devrait etre pleine');
  assert.ok(!prep.includes('\\fill[anbts,rounded corners'), 'BTS ne devrait pas etre plein');
});

/* Trouve independamment le 2026-08-20 par quatre agents de relecture Phase 4
   differents (college-physique-3e, lycee-physique-tle, lycee-physique-2nde,
   lycee-physique-1re) : la page de copyright affirmait « de la sixieme a la
   troisieme » pour TOUT ouvrage, y compris Seconde/Premiere/Terminale/BTS —
   fige depuis l'epoque ou college-maths etait le seul ouvrage teste, jamais
   reconnecte au champ niveaux existant quand le pipeline s'est etendu au
   lycee/BTS. Contredisait la 4e de couverture du meme livre. */
test('la page de copyright annonce le vrai niveau de l ouvrage, pas toujours college', () => {
  const lycee = O.liminaires(config({ sousTitre: 'Première', niveaux: 'Première', nbChapitres: 11 }));
  assert.ok(!lycee.includes('sixième'), 'un ouvrage de Premiere ne doit pas revendiquer le college');
  assert.ok(!lycee.includes('troisième'), 'un ouvrage de Premiere ne doit pas revendiquer le college');
  assert.ok(lycee.includes('Première'), 'le vrai niveau doit apparaitre sur la page de copyright');

  const bts = O.liminaires(config({ sousTitre: 'BTS', niveaux: 'Programme BTS', nbChapitres: 10 }));
  assert.ok(!bts.includes('sixième'), 'un ouvrage BTS ne doit pas revendiquer le college');
  assert.ok(bts.includes('BTS'), 'le vrai niveau doit apparaitre sur la page de copyright');
});

test('un titre long est compose plus petit et jamais coupe', () => {
  const court = O.couverture(config({ titre: 'Mathématiques' }));
  const long = O.couverture(config({ titre: 'Fluides, Énergies, Domotique' }));
  assert.ok(court.includes('\\fontsize{30}{34}'), 'titre court : corps attendu 30');
  assert.ok(long.includes('\\fontsize{22}{26}'), 'titre long : corps attendu 22');
  assert.ok(long.includes('\\hyphenpenalty=10000'), 'la cesure n\'est pas interdite');
});

test('seule l edition du professeur porte son marqueur', () => {
  // Sans lui, les deux PDF sortiraient avec un plat identique. Depuis la v3
  // c'est un onglet plein en reserve blanche et non une ligne coloree :
  // l'orange #E67E22 sur le papier #F8F9FA ne donnait que 2,7:1, sous le
  // seuil AA meme pour du texte large, et un mot colore de 9 pt disparait a
  // la taille d'une vignette alors qu'un aplat reste identifiable.
  const eleve = O.couverture(config());
  const prof = O.couverture(config({ professeur: true }));
  assert.ok(!/ÉDITION DU PROFESSEUR/.test(eleve), 'marqueur sur l\'eleve');
  assert.ok(/ÉDITION DU PROFESSEUR/.test(prof), 'marqueur absent sur le professeur');
  assert.ok(/\\fill\[orange\][^;]*rectangle/.test(prof), 'l\'onglet n\'est pas un aplat plein');
  assert.ok(/text=white/.test(prof.slice(prof.indexOf('ÉDITION') - 200, prof.indexOf('ÉDITION'))),
    'le texte de l\'onglet n\'est pas en reserve blanche');
});

/* ---- Les calculs d'impression ---- */

test('la gouttiere suit les paliers d epaisseur', () => {
  assert.strictEqual(O.gouttierePourPages(150), 9.5);
  assert.strictEqual(O.gouttierePourPages(151), 12.7);
  assert.strictEqual(O.gouttierePourPages(433), 15.9);
  assert.strictEqual(O.gouttierePourPages(900), 22.2);
});

test('le dos est calcule sur la pagination', () => {
  assert.strictEqual(O.largeurDosMm(433), 25.8);
  // La feuille imprimeur mesure deux plats plus le dos.
  assert.ok(O.couvertureSeparee(config({ pages: 433 })).includes('paperwidth=365.8mm'));
});

test('le cursus des pastilles suit la matiere, pas seulement la famille', () => {
  // La physique-chimie ne commence qu'en quatrieme et n'a pas de remise a
  // niveau post-bac : « Physique-Chimie BTS » affichait une pastille PRÉPA en
  // contour, promettant un volume qui n'existe pas au catalogue.
  const B = require('../build.js');
  const conf = cle => Object.assign({}, B.OUVRAGES[cle], { mention: 'Cours', nbChapitres: 10 });
  const compter = s => (s.match(/rounded corners=1\.2mm/g) || []).length;

  assert.strictEqual(compter(O.couverture(conf('bts-physique'))), 1,
    'BTS physique : une seule pastille, sans PRÉPA');
  assert.ok(!O.couverture(conf('bts-physique')).includes('PRÉPA'),
    'PRÉPA ne doit pas apparaitre en physique-chimie');
  assert.strictEqual(compter(O.couverture(conf('college-physique-4e'))), 2,
    'college physique : quatrieme et troisieme, pas six pastilles');

  // Les mathematiques gardent leur cursus complet.
  assert.strictEqual(compter(O.couverture(conf('college-maths-6e'))), 4,
    'college maths : les quatre annees');
  assert.ok(O.couverture(conf('bts-maths')).includes('PRÉPA'),
    'PRÉPA doit rester en mathematiques');
});

/* ---- Le registre de l'edition professeur ----
   Relecture du 2026-09-12 : l'edition du professeur imprimait le texte de
   l'eleve — avant-propos, mode d'emploi, page de reponses, quatrieme de
   couverture — puis y collait un paragraphe professeur en appendice. Ces
   tests fixent la regle : rien de ce que le professeur lit ne le tutoie, et
   l'edition eleve garde exactement le sien. */

/* Le tutoiement, cherche sur les formes qui apparaissent reellement dans le
   texte editorial. Un simple /\btu\b/ attraperait « statut », « tuteur »,
   et surtout les commandes LaTeX. */
const TUTOIEMENT = [
  /\btu\b/i, /\bton\b/i, /\bta\b/i, /\btes\b/i, /\btoi\b/i,
  /\bvérifie\b/i, /\brelire\b.*\bton\b/i, /\bmémoriser\b.*\btu\b/i
];

/* Le texte editorial seul : ni commentaires LaTeX, ni commandes, ni
   coordonnees TikZ — « \textbf », « \item[Attention] » ou un nom de couleur
   ne sont pas du texte adresse au lecteur. */
function texteEditorial(latex) {
  return latex
    .split('\n').filter(l => !l.trim().startsWith('%')).join('\n')
    .replace(/\\[a-zA-Z@]+\s*(\[[^\]]*\])?(\{[^{}]*\})?/g, ' ')
    .replace(/\$[^$]*\$/g, ' ');
}

test("l'edition du professeur ne tutoie jamais son lecteur", () => {
  const prof = texteEditorial(O.liminaires(config({ professeur: true })) +
    O.finOuvrage([], config({ professeur: true })) +
    O.couvertureSeparee(config({ professeur: true })));
  for (const motif of TUTOIEMENT) {
    assert.ok(!motif.test(prof),
      'texte de l\'edition professeur : tutoiement « ' + motif + ' »');
  }
});

test("l'edition de l'eleve garde son tutoiement", () => {
  // La correction ne doit pas deteindre sur l'eleve : c'est SON registre, et
  // il a ete choisi. Un manuel de sixieme qui vouvoie n'est pas neutre.
  const eleve = texteEditorial(O.liminaires(config()) + O.finOuvrage([], config()));
  assert.ok(/\btu\b/i.test(eleve), "l'edition eleve ne tutoie plus");
});

test("l'avant-propos ne promet plus une question concrete en ouverture de chapitre", () => {
  /* Promesse non tenue, relevee le 2026-09-12 : sur les dix chapitres de
     sixieme, NEUF ouvrent leur « Decouvrir » sur une definition, et le
     chapitre 1 pose la notation litterale a/b des sa premiere phrase. La
     promesse figurait a la fois dans l'avant-propos et sur la quatrieme de
     couverture. A retablir quand les « Decouvrir » seront reecrits. */
  const tout = O.liminaires(config()) + O.liminaires(config({ professeur: true })) +
    O.finOuvrage([], config()) + O.couvertureSeparee(config());
  assert.ok(!/question concr[eè]te/i.test(tout),
    'la promesse « question concrète » est encore imprimee');
  assert.ok(!/avant d'introduire le moindre symbole/i.test(tout),
    'la promesse « avant le moindre symbole » est encore imprimee');
});

test("le mode d'emploi du professeur decrit l'usage en classe, celui de l'eleve son travail", () => {
  const prof = O.liminaires(config({ professeur: true }));
  const eleve = O.liminaires(config());
  // Ce que le professeur doit y trouver et l'eleve non : les contenus qui
  // n'existent que dans son edition, a leur place dans le deroule du
  // chapitre et non en post-scriptum.
  for (const attendu of ['Erreurs fréquentes et remédiation', 'Énoncés supplémentaires',
    'Objectifs du chapitre', 'progression annuelle', 'grille de suivi de classe']) {
    assert.ok(prof.includes(attendu), 'mode d\'emploi professeur : « ' + attendu + ' » absent');
  }
  assert.ok(!eleve.includes('Énoncés supplémentaires'),
    "l'edition eleve annonce une banque qu'elle ne contient pas");
  // Le paragraphe « Dans l'edition du professeur » etait un appendice colle
  // en fin de page apres un texte qui ne s'adressait pas a lui.
  assert.ok(!prof.includes("Dans l'édition du professeur."),
    'le paragraphe professeur est encore en appendice');
});

test('la page des reponses change de fonction en edition professeur', () => {
  /* Tous les exercices y sont deja corriges en place : reprendre les seuls
     resultats bruts occupait une page pour rien, avec en plus un texte qui
     tutoyait l'eleve. La page est conservee mais devient un recapitulatif
     pour corriger au tableau sans feuilleter. */
  const prof = O.finOuvrage([], config({ professeur: true }));
  const eleve = O.finOuvrage([], config());
  assert.ok(prof.includes('Récapitulatif des réponses'),
    'la page des reponses n\'a pas change de titre en edition professeur');
  assert.ok(/corriger au tableau/.test(prof), 'la page ne dit pas a quoi elle sert');
  assert.ok(eleve.includes('Réponses aux exercices'),
    "l'edition eleve a perdu sa page de reponses, qui est justement la ou elle sert");
  assert.ok(/Vérifie ton résultat/.test(eleve), "l'edition eleve a perdu son registre");
});

/* ---- Defaut 20 : distinguer les deux editions ---- */

test("l'edition du professeur porte son marqueur au-dela de la couverture", () => {
  /* Les deux PDF partagent titre et maquette : passe la couverture, plus
     aucun signe ne disait laquelle on avait sous les yeux — ni en feuilletant,
     ni sur une page imprimee seule, ni sur une photocopie. */
  const prof = O.preambule(config({ professeur: true }));
  const eleve = O.preambule(config());
  assert.ok(/fancyfoot\[LE,RO\]/.test(prof), 'aucun marqueur en pied de page');
  assert.ok(/Édition du professeur/.test(prof), 'le pied de page ne nomme pas l\'edition');
  assert.ok(!/Édition du professeur/.test(eleve), "l'edition eleve porte le marqueur du professeur");
  // Le folio central ne doit pas etre deplace par le marqueur.
  assert.ok(/fancyfoot\[C\]\{\\small\\color\{gris\}\\thepage\}/.test(prof),
    'le folio central a bouge');
});

test('la couverture imprimeur du professeur se distingue sur ses trois faces', () => {
  const prof = O.couvertureSeparee(config({ professeur: true }));
  const eleve = O.couvertureSeparee(config());
  // Plat 1 : l'onglet orange. Dos : la mention abregee. Plat 4 : l'argumentaire.
  assert.ok(/ÉDITION DU PROFESSEUR/.test(prof), 'plat 1 : onglet absent');
  assert.ok(/Éd\. professeur/.test(prof), 'dos : mention absente');
  assert.ok(/L'édition du professeur\./.test(prof), 'plat 4 : argumentaire absent');
  for (const marque of ['ÉDITION DU PROFESSEUR', 'Éd. professeur', "L'édition du professeur."]) {
    assert.ok(!eleve.includes(marque), 'edition eleve : « ' + marque + ' » ne devrait pas y etre');
  }
});

test("la quatrieme de couverture du professeur enonce ce que son edition contient en plus", () => {
  /* Elle etait strictement identique a celle de l'eleve : la page qui sert
     d'argumentaire dans tout livre ne mentionnait aucun des contenus
     exclusifs (releve commercial du 2026-09-12). */
  const prof = O.finOuvrage([], config({ professeur: true }));
  for (const contenu of ['progression annuelle', 'banque d\'énoncés supplémentaires',
    'erreurs fréquentes', 'compétence', 'grille', 'corrigés']) {
    assert.ok(new RegExp(contenu, 'i').test(prof),
      'quatrieme de couverture : « ' + contenu + ' » n\'est pas annonce');
  }
});

test("la quatrieme de couverture ne chiffre pas un differentiel qui bouge a chaque build", () => {
  /* Le nombre d'enonces de chaque edition est un parametre de build
     (`tirages`, EXERCICES_VISIBLES) : il a change deux fois le 2026-09-12.
     Un chiffre fige ici serait faux au prochain build, sur la page meme qui
     sert d'argument de vente. Les chiffres vivent sur la fiche produit, qui
     se recompte a chaque publication. */
  // L'argumentaire seul, borne au bloc que quatriemeDeCouverture() produit :
  // le reste de la page porte des chiffres legitimes (la pagination du dos,
  // « % Dos : 25,8 mm pour 433 pages »), qui ne sont pas de l'argumentaire.
  // La PROSE seule : les « \\[2mm] » d'interligne et les noms de couleur ne
  // sont pas de l'argumentaire, mais ils portent des chiffres.
  const bloc = texteEditorial(O.finOuvrage([], config({ professeur: true }))
    .split("L'édition du professeur.")[1].split('\\\\[9mm]')[0])
    .replace(/\\\\\[[\d.]+mm\]/g, ' ').replace(/\[[\d.]+mm\]/g, ' ');
  assert.ok(!/\d/.test(bloc),
    'un nombre en dur chiffre le differentiel sur la quatrieme de couverture : ' +
    (bloc.match(/.{0,40}\d.{0,40}/) || [''])[0]);
});

test("la quatrieme de couverture ne revendique aucune superiorite sur les editeurs", () => {
  /* Le livre du professeur est gratuit en numerique chez les cinq grands
     editeurs, sur adresse academique. Le positionnement retenu est l'ACCES,
     pas la superiorite : une revendication de ce genre serait fausse et se
     demonterait en une phrase devant un titulaire. */
  const prof = O.finOuvrage([], config({ professeur: true }));
  for (const interdit of [/meilleur/i, /incontournable/i, /révolutionnaire/i,
    /clé en main/i, /tout ce dont vous avez besoin/i, /le plus complet/i,
    /supérieur aux/i, /contrairement aux éditeurs/i]) {
    assert.ok(!interdit.test(prof), 'superlatif ou comparaison interdite : ' + interdit);
  }
  // Et elle dit a qui elle s'adresse : c'est le positionnement d'acces.
  assert.ok(/contractuels|instruction en famille/i.test(prof),
    'la cible « sans adresse académique » n\'est pas nommee');
});

test("l'argumentaire de quatrieme de couverture est ecrit une seule fois", () => {
  // Le colophon et le plat 4 de la couverture imprimeur le portent tous les
  // deux. Les laisser diverger, c'est vendre deux livres differents selon la
  // face qu'on regarde.
  const c = config({ professeur: true });
  const phrase = "Elle reprend l'intégralité du manuel de l'élève";
  assert.ok(O.finOuvrage([], c).includes(phrase), 'colophon : argumentaire absent');
  assert.ok(O.couvertureSeparee(c).includes(phrase), 'plat 4 : argumentaire absent');
});
