/* =========================================================
   Spark Learning – scripts/manuel/prof.js
   Couche professeur v2 : progression annuelle, erreurs frequentes,
   competences. Trois contenus qui n'existent pas sur le site (gratuit,
   pour l'eleve) et qui vivent donc dans une couche de donnees a part,
   js/data/prof/<dossier>/<module>.prof.js, jamais chargee par
   index.html : seul ce fichier la lit.

   Regle du pipeline : rien n'est invente hors des donnees. La
   progression est ORDONNEE (ordre du livre, prerequis et attendus ;
   prerequis ecrits dans les fiches) ; les erreurs et les competences sont
   ECRITES dans la fiche du module et validees contre le referentiel.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { versLatex: L } = require('./latex.js');
const { RACINE } = require('./extract.js');

/* Referentiels de competences officiels, par matiere. Une competence hors
   liste est refusee a la validation : la grille imprimee doit employer les
   mots du programme, pas des synonymes. */
const REFERENTIELS = {
  maths: {
    nom: 'Compétences mathématiques des programmes (cycles 3 et 4, lycée)',
    competences: ['chercher', 'modéliser', 'représenter', 'raisonner', 'calculer', 'communiquer']
  },
  physique: {
    nom: 'Compétences de la démarche scientifique',
    competences: ["s'approprier", 'analyser', 'réaliser', 'valider', 'communiquer']
  }
};

function referentielDe(collection) {
  return /physique/i.test(String(collection || '')) ? REFERENTIELS.physique : REFERENTIELS.maths;
}

const MAJ = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* --- Chargement et validation ----------------------------------------- */

function cheminFiche(moduleId, dossier) {
  return path.join(RACINE, 'js/data/prof', dossier, moduleId + '.prof.js');
}

/* Fiche professeur d'un module, ou null s'il n'en a pas encore. Meme
   mecanique que extract.js : un script global execute dans un bac a sable
   vm, sans navigateur. */
function chargerProf(moduleId, dossier) {
  const chemin = cheminFiche(moduleId, dossier);
  if (!fs.existsSync(chemin)) return null;
  const bac = { window: {}, console };
  vm.createContext(bac);
  vm.runInContext(fs.readFileSync(chemin, 'utf8'), bac, { filename: chemin });
  const fiche = bac.window.SPARK_PROF && bac.window.SPARK_PROF[moduleId];
  if (!fiche) throw new Error('Fiche professeur sans entrée « ' + moduleId + ' » : ' + chemin);
  return fiche;
}

/* Seuls les premiers tirages portent un numero « Exercice N.n » dans le
   livre ; les suivants forment la banque supplementaire, numerotee a part
   (« Supplément N.x », voir chapitre.js). Un renvoi de remediation qui vise un
   numero jamais imprime serait introuvable pour l'enseignant.

   Passe de 3 a 12 le 2026-09-12, en meme temps que chapitre.js
   (EXERCICES_VISIBLES) : l'edition eleve porte desormais 12 exercices, la
   banque du professeur les 6 derniers tirages. La valeur est REDITE ici plutot
   qu'importee de chapitre.js : c'est chapitre.js qui require() prof.js, jamais
   l'inverse, et le cycle casserait le chargement des deux. Un test
   (tests/prof.test.js) verifie que les deux constantes restent egales. */
const EXERCICES_NUMEROTES = 12;

/* Tout ce qui rendrait la fiche fausse ou incompilable. Liste vide = rien
   a reprocher. Chaque reproche nomme le module. */
function validerProf(fiche, mod, referentiel, exercices) {
  const pb = [];
  const id = mod.id;
  // Les exercices reellement tires pour CE livre, quand l'appelant les a
  // (build.js). Depuis que les generateurs tirent plusieurs taches distinctes
  // (2026-09-08), un renvoi « exercice n » peut viser un numero qui n'a pas
  // ete imprime, ou une tache sans rapport avec l'erreur a remedier.
  const tires = Array.isArray(exercices) ? exercices.length : null;
  const erreurs = Array.isArray(fiche.erreurs) ? fiche.erreurs : [];
  if (!erreurs.length) pb.push(id + ' : aucune erreur fréquente');
  erreurs.forEach((e, i) => {
    for (const cle of ['titre', 'eleve', 'cause', 'remede']) {
      if (!e || !String(e[cle] || '').trim()) pb.push(id + ' : erreur ' + (i + 1) + ' sans « ' + cle + ' »');
    }
    if (e && e.exercice) {
      const ex = e.exercice;
      if (!['exercice', 'supplement', 'evaluation', 'quiz'].includes(ex.type) ||
          !(Number.isInteger(ex.n) && ex.n > 0)) {
        pb.push(id + ' : erreur ' + (i + 1) + ' renvoie à un exercice mal décrit');
      } else if (ex.type === 'supplement' && tires !== null) {
        /* La banque supplementaire, c'est ce que le tirage laisse APRES les
           exercices numerotes du corps du chapitre. Elle est renumerotee a
           partir de 1 par chapitre.js, d'ou la plage 1..(tires - numerotes).
           Un module dont le generateur ne rend pas assez d'enonces distincts
           n'a tout simplement pas de banque : le renvoi est alors refuse, pas
           silencieusement imprime vers un supplement absent (2026-09-12). */
        const supplements = Math.max(0, tires - EXERCICES_NUMEROTES);
        if (!supplements) {
          pb.push(id + ' : erreur ' + (i + 1) + ' renvoie au supplément ' + ex.n +
            ", mais ce chapitre n'a aucune banque supplémentaire (" + tires +
            ' énoncé(s) tiré(s), tous numérotés dans le corps du chapitre)');
        } else if (ex.n > supplements) {
          pb.push(id + ' : erreur ' + (i + 1) + ' renvoie au supplément ' + ex.n +
            ', mais la banque de ce chapitre n\'en compte que ' + supplements);
        }
      } else if (ex.type === 'evaluation' && mod.evaluation &&
                 ex.n > mod.evaluation.questions.length) {
        pb.push(id + ' : erreur ' + (i + 1) + ' renvoie à la question ' + ex.n +
          " de l'évaluation, qui n'en a que " + mod.evaluation.questions.length);
      } else if (ex.type === 'quiz' && mod.quiz && ex.n > mod.quiz.length) {
        pb.push(id + ' : erreur ' + (i + 1) + ' renvoie à la question ' + ex.n +
          " du quiz, qui n'en a que " + mod.quiz.length);
      } else if (ex.type === 'exercice' && tires !== null && ex.n > Math.min(tires, EXERCICES_NUMEROTES)) {
        // Au-dela des exercices numerotes, les tirages partent dans la banque
        // supplementaire, sans numero : l'enseignant ne trouverait pas le
        // renvoi de remediation.
        pb.push(id + ' : erreur ' + (i + 1) + " renvoie à l'exercice " + ex.n +
          ', mais seuls les ' + Math.min(tires, EXERCICES_NUMEROTES) +
          ' premiers exercices portent un numéro dans le livre');
      }
    }
  });
  const comp = fiche.competences && fiche.competences.evaluation;
  if (mod.evaluation) {
    if (!Array.isArray(comp)) {
      pb.push(id + " : pas de compétence par question d'évaluation");
    } else {
      if (comp.length !== mod.evaluation.questions.length) {
        pb.push(id + ' : ' + comp.length + ' compétence(s) pour ' +
          mod.evaluation.questions.length + " question(s) d'évaluation");
      }
      comp.forEach((c, i) => {
        if (!referentiel.competences.includes(String(c).toLowerCase())) {
          pb.push(id + ' : question ' + (i + 1) + ' : compétence « ' + c +
            ' » absente du référentiel (' + referentiel.competences.join(', ') + ')');
        }
      });
    }
  }
  return pb;
}

/* CHANGEMENT DE REGLE DU 2026-09-12, structurant : la contrainte n'est plus
   « le prerequis doit preceder dans le LIVRE » mais « le prerequis doit
   preceder dans la PROGRESSION CONSEILLEE ».

   Pourquoi. L'ancienne regle confondait deux ordres qui n'ont pas la meme
   fonction. Le livre range ses chapitres par DOMAINE (« Nombres et calculs »
   ouvre l'ouvrage, « Espace et geometrie » le ferme) parce qu'on consulte un
   manuel par domaine ; une progression range les chapitres par DEPENDANCE
   parce qu'on enseigne dans l'ordre ou les notions se construisent. Les deux
   ordres different, et c'est normal — tous les guides pedagogiques les
   distinguent.

   En les confondant, l'ancienne regle rendait certains prerequis VRAIS
   INTERDITS D'ECRITURE. Le cas se lisait a livre ouvert sur la sixieme :
   « Volumes » est le chapitre 2 et multiplie trois dimensions, ce qui demande
   le chapitre 6 ; « Fractions » est le chapitre 1 et demande les decimaux du
   chapitre 4. Les deux fiches portaient leur prerequis EN COMMENTAIRE, faute
   de pouvoir le porter en donnee, et la fiche des volumes affirmait meme dans
   son commentaire un prerequis que sa liste vide contredisait. Sur les dix
   chapitres, cinq avaient `prerequis: []`, dont quatre a tort. La validation
   ne protegeait donc rien : elle produisait un tableau faux, ou quatre
   chapitres sur dix se declaraient sans appui.

   Ce que la nouvelle regle continue de garantir. L'essentiel, c'est-a-dire
   qu'on ne puisse pas s'appuyer sur ce qui n'a pas encore ete enseigne : un
   prerequis doit avoir un rang conseille STRICTEMENT INFERIEUR. Un cycle
   (A demande B qui demande A) reste donc impossible par construction, et un
   controle explicite le dit quand meme (voir plus bas) pour que le reproche
   nomme le cycle au lieu de se disperser en trois messages obscurs.

   Ce que la nouvelle regle exige en plus : que `rangConseille` soit ecrit
   partout ou un prerequis est declare, et que les rangs d'un meme niveau
   forment une permutation de 1..n. Sans cela, « rang conseille » ne
   designerait pas un ordre, et la colonne du tableau serait un decor.

   Compatibilite. Un ouvrage dont AUCUNE fiche ne porte `rangConseille`
   (les 19 autres ouvrages du catalogue, au 2026-09-12) retombe sur l'ordre du
   livre : le rang conseille vaut alors le rang dans le livre, et la regle
   redevient exactement l'ancienne. Rien a migrer pour eux.

   `items` porte `numero`, `dossier` et `prof`. Liste vide = rien a reprocher. */
function validerPrerequis(items) {
  const pb = [];
  const connus = new Map(items.map(it => [it.numero, it]));
  const rangs = rangsConseilles(items);

  /* Les rangs d'un niveau doivent former 1..n sans trou ni doublon. Un
     doublon rendrait l'ordre indeterminable ; un trou signalerait presque
     toujours une fiche oubliee lors d'un ajout de chapitre. Verifie par
     niveau, comme le tableau, qui est par niveau. */
  const parDossier = new Map();
  for (const it of items) {
    if (!parDossier.has(it.dossier)) parDossier.set(it.dossier, []);
    parDossier.get(it.dossier).push(it);
  }
  for (const [dossier, groupe] of parDossier) {
    const declares = groupe.filter(it => it.prof && it.prof.rangConseille != null);
    if (!declares.length) continue;  // ouvrage sans progression conseillee : rien a verifier
    if (declares.length !== groupe.length) {
      const manquants = groupe.filter(it => !declares.includes(it)).map(it => it.mod.id);
      pb.push(dossier + ' : « rangConseille » est écrit dans ' + declares.length +
        ' fiche(s) sur ' + groupe.length + ' ; il manque à ' + manquants.join(', ') +
        ' — un ordre conseillé partiel ne classe rien');
    }
    const vus = new Map();
    for (const it of declares) {
      const r = it.prof.rangConseille;
      if (!Number.isInteger(r) || r < 1 || r > groupe.length) {
        pb.push(it.mod.id + ' : « rangConseille » vaut ' + r + ' ; attendu un entier de 1 à ' + groupe.length);
      } else if (vus.has(r)) {
        pb.push(it.mod.id + ' : rang conseillé ' + r + ' déjà pris par ' + vus.get(r));
      } else {
        vus.set(r, it.mod.id);
      }
    }
  }

  for (const it of items) {
    const fiche = it.prof;
    if (!fiche || fiche.prerequis == null) continue;
    if (!Array.isArray(fiche.prerequis)) {
      pb.push(it.mod.id + ' : « prerequis » doit être une liste de numéros de chapitre');
      continue;
    }
    for (const n of fiche.prerequis) {
      if (!Number.isInteger(n) || n < 1) {
        pb.push(it.mod.id + ' : prérequis « ' + n + ' » n\'est pas un numéro de chapitre');
      } else if (!connus.has(n)) {
        pb.push(it.mod.id + ' : prérequis vers le chapitre ' + n + ', absent de cet ouvrage');
      } else if (n === it.numero) {
        pb.push(it.mod.id + ' : le chapitre ' + n + ' se cite lui-même en prérequis');
      } else if (connus.get(n).dossier !== it.dossier) {
        // Un renvoi d'un niveau a l'autre est licite (la 5e s'appuie sur la
        // 6e) mais la colonne « ch. N » serait ambigue dans un tableau par
        // niveau : on le dit plutot que de l'imprimer tel quel.
        pb.push(it.mod.id + ' : prérequis vers le chapitre ' + n + ' d\'un autre niveau (' +
          connus.get(n).dossier + ') ; le tableau de progression est par niveau');
      } else if (rangs.get(n) >= rangs.get(it.numero)) {
        /* LE reproche de fond, reformule. Le message nomme les DEUX ordres,
           parce que le lecteur du message a le livre sous les yeux et que le
           numero de chapitre seul lui ferait chercher une erreur inexistante
           (« mais le chapitre 4 est bien avant le 7 ! »). */
        pb.push(it.mod.id + ' : prérequis vers le chapitre ' + n + ' (rang conseillé ' +
          rangs.get(n) + '), qui ne précède pas le chapitre ' + it.numero +
          ' (rang conseillé ' + rangs.get(it.numero) +
          ') dans la progression conseillée');
      }
    }
  }

  /* Detection de cycle explicite. Elle est THEORIQUEMENT redondante avec le
     test de rang ci-dessus — un ordre total strict ne peut pas boucler — mais
     elle reste ici pour deux raisons. D'abord, elle survit a une future
     evolution qui relacherait la contrainte de rang. Ensuite et surtout, elle
     nomme le cycle en un seul reproche lisible (« A -> B -> A ») la ou le test
     de rang en produirait plusieurs, chacun exact et aucun eclairant.
     Parcours en profondeur, marquage tricolore classique. */
  const etat = new Map();   // undefined = jamais vu, 1 = en cours, 2 = fini
  const pile = [];
  const cycles = [];
  function descendre(numero) {
    if (etat.get(numero) === 2) return;
    if (etat.get(numero) === 1) {
      const debut = pile.indexOf(numero);
      cycles.push(pile.slice(debut).concat(numero));
      return;
    }
    etat.set(numero, 1);
    pile.push(numero);
    const it = connus.get(numero);
    const p = it && it.prof && Array.isArray(it.prof.prerequis) ? it.prof.prerequis : [];
    for (const n of p) if (connus.has(n) && n !== numero) descendre(n);
    pile.pop();
    etat.set(numero, 2);
  }
  for (const it of items) descendre(it.numero);
  for (const c of cycles) {
    pb.push('cycle de prérequis : ' + c.map(n => 'ch. ' + n).join(' → ') +
      ' — aucun de ces chapitres ne peut être enseigné en premier');
  }

  return pb;
}

/* Le rang conseille de chaque chapitre, par numero de chapitre.
   Une Map { numero -> rang }, ou le rang est celui ECRIT dans la fiche
   (`rangConseille`) et, a defaut, le rang dans le livre.

   Le repli sur l'ordre du livre n'est pas un pis-aller : c'est ce qui rend le
   changement de regle sans effet sur les 19 ouvrages qui n'ont pas encore de
   progression conseillee ecrite. Pour eux, « rang conseille » et « rang dans
   le livre » coincident, et la validation se comporte comme avant.
   Le rang du livre est compte PAR NIVEAU, comme la colonne « rang » du
   tableau : deux niveaux dans un meme ouvrage repartent chacun de 1. */
function rangsConseilles(items) {
  const rangs = new Map();
  const compteurs = new Map();
  for (const it of items) {
    const c = (compteurs.get(it.dossier) || 0) + 1;
    compteurs.set(it.dossier, c);
    const ecrit = it.prof && it.prof.rangConseille;
    rangs.set(it.numero, Number.isInteger(ecrit) ? ecrit : c);
  }
  return rangs;
}

/* --- Progression annuelle ------------------------------------------------ */

/* Met les chapitres d'un ouvrage en suite logique, par niveau.

   REFONTE DU 2026-09-12. Les lignes sortent desormais dans l'ordre de la
   PROGRESSION CONSEILLEE, pas dans l'ordre du livre, et chaque ligne porte
   les DEUX reperes : `numero` (le chapitre, pour retrouver une page) et
   `rang` (le rang conseille d'enseignement). C'est la correction de fond du
   defaut diagnostique : l'ancienne page n'etait pas une progression, c'etait
   la table des matieres avec des colonnes en plus — elle decrivait l'ordre du
   LIVRE, quand un enseignant qui ouvre une progression veut l'ordre
   d'ENSEIGNEMENT. Les deux ordres coexistent au lieu que l'un remplace
   l'autre : reordonner le livre aurait casse tous les renvois croises, et
   n'aurait de toute facon pas ete souhaitable (un manuel se consulte par
   domaine).

   Pas de calendrier, et pas davantage de volume horaire (decision du
   2026-09-12, apres un aller-retour) : ni semaines, ni seances, ni horaire
   hebdomadaire. Le decoupage depend de la classe, de l'horaire de
   l'etablissement et de l'annee. Ce que la progression donne, c'est un ORDRE
   et des DEPENDANCES, qui eux ne se periment pas.

   `items` = les chapitres dans l'ordre du livre ({mod, numero, dossier,
   prof}). Les prerequis et le rang conseille viennent de la fiche : ils sont
   ECRITS et valides, jamais devines. Pur : aucune lecture de fichier. */
function ordonner(items) {
  const parDossier = new Map();
  for (const it of items) {
    if (!parDossier.has(it.dossier)) parDossier.set(it.dossier, []);
    parDossier.get(it.dossier).push(it);
  }

  const titres = new Map(items.map(it => [it.numero, it.mod.title]));

  /* Le lien de prerequis, LU A L'ENVERS : quels chapitres s'appuient sur
     celui-ci. Ajoute le 2026-09-12 parce que la progression ne repondait qu'a
     une moitie de la question de l'enseignant. « S'appuie sur » dit ce qu'il
     faut avoir fait AVANT ; il lui manquait ce que le chapitre conditionne
     APRES — c'est-a-dire ce qu'il en coute de le sauter, de l'ecourter ou de
     le deplacer en fin d'annee, qui est exactement l'arbitrage qu'on fait en
     mars quand on a pris du retard.

     Rien n'est invente : c'est la relation deja ecrite dans les fiches, prise
     dans l'autre sens. Un chapitre sans successeur affiche un tiret comme un
     chapitre sans prerequis. La consequence est que la colonne est aussi vide
     que l'autre tant que les fiches ne declarent pas leurs prerequis — le
     signaler est le role de la legende, pas d'un lien fabrique. */
  const prepare = new Map();
  for (const it of items) {
    const p = it.prof && Array.isArray(it.prof.prerequis) ? it.prof.prerequis : [];
    for (const n of p) {
      if (!prepare.has(n)) prepare.set(n, []);
      prepare.get(n).push(it.numero);
    }
  }

  const rangs = rangsConseilles(items);

  const lignes = [];
  for (const [dossier, groupe] of parDossier) {
    /* TRI PAR RANG CONSEILLE (2026-09-12). Le tableau se lit de haut en bas
       comme l'annee se deroule ; c'est la seule lecture qui vaut d'un outil de
       pilotage. Le numero de chapitre reste sur la ligne, en repere de
       pagination — les deux colonnes cote a cote montrent d'un coup d'oeil
       les chapitres qu'on ne prendra pas dans l'ordre du livre.
       `slice()` d'abord : `sort` mute, et `items` appartient a l'appelant. */
    const ordonnes = groupe.slice().sort((a, b) => rangs.get(a.numero) - rangs.get(b.numero));
    for (const it of ordonnes) {
      const prof = it.prof || null;
      const prerequis = prof && Array.isArray(prof.prerequis) ? prof.prerequis : null;
      const suite = prepare.get(it.numero) || null;
      /* `decale` : ce chapitre s'appuie sur au moins un chapitre place PLUS
         LOIN dans le livre. C'est cela qu'il faut signaler, et c'est un
         arbitrage revu apres controle visuel sur PDF (2026-09-12).

         Le premier jet marquait tout chapitre dont le rang conseille differe
         du rang dans le livre. Rendu, il marquait LES DIX chapitres de
         sixieme, et le titre annoncait « dont 10 a deplacer » : un signal qui
         se declenche partout n'est plus un signal, et l'affirmation etait en
         plus trompeuse — la progression conseillee reordonne tout, mais la
         plupart de ces deplacements sont sans consequence (un chapitre qui
         passe du rang 5 au rang 6 ne pose aucun probleme).

         Ce que l'enseignant doit reperer, c'est la CONTRADICTION : le
         chapitre qu'il ne peut pas traiter a la place ou le livre le range,
         parce qu'il lui manquerait un prerequis. Sur la sixieme, ce sont
         exactement les quatre chapitres du diagnostic — Fractions (ch. 1,
         s'appuie sur 4 et 7), Volumes (ch. 2, sur 4, 6 et 10), Angles (ch. 3,
         sur 4 et 8) et Symetrie (ch. 9, sur 4 et 8). Les six autres suivent
         l'ordre du livre sans heurt.

         Calcule ici plutot que dans le rendu : c'est un fait sur la
         progression, pas une decision de mise en forme. Compare au rang DANS
         LE LIVRE (la position dans le groupe du niveau), et non au numero de
         chapitre, qui ne repart pas de 1 au second niveau d'un ouvrage
         multi-niveaux. */
      const rangLivre = groupe.indexOf(it) + 1;
      const rangsLivre = new Map(groupe.map((x, i) => [x.numero, i + 1]));
      const enAval = (prerequis || []).filter(n => rangsLivre.get(n) > rangLivre);
      lignes.push({
        dossier, numero: it.numero, rang: rangs.get(it.numero), rangLivre,
        decale: enAval.length > 0,
        titre: it.mod.title, sousTitre: it.mod.subtitle || '',
        // Les numeros tels quels : la mise en forme du renvoi appartient au
        // rendu, pas au calcul.
        prerequis: prerequis ? prerequis.map(n => ({ numero: n, titre: titres.get(n) || '' })) : null,
        prepare: suite ? suite.map(n => ({ numero: n, titre: titres.get(n) || '' })) : null,
        attendus: prof && Array.isArray(prof.attendus) ? prof.attendus : null,
        fiche: !!prof
      });
    }
  }
  return lignes;
}

/* Largeur utile d'une page TOURNEE, en centimetres.
   La page fait 170 x 244 mm ; en paysage, le texte s'etend sur la hauteur du
   papier moins les marges haute et basse de geometry (18 + 18 mm), soit
   244 - 36 = 208 mm. On garde 2 mm de securite : les p{} ne coupent pas ce
   qui depasse, et un tableau qui sort de 1 mm sort quand meme.
   Contre ~143 mm en portrait (170 - 12,7 de gouttiere - 14 de marge) : le
   paysage rend 63 mm, soit 45 % de largeur en plus. C'est ce qui rend
   possible un tableau de pilotage aere plutot qu'un tableau comprime. */
const LARGEUR_PAYSAGE_CM = 20.6;

/* Le chapitre « Progression annuelle » du front-matter.

   REFONTE COMPLETE DU 2026-09-12, sur un diagnostic en cinq points. Ce qui
   suit est la matiere du cahier des charges : chaque decision est ecrite ici,
   a l'endroit qu'elle concerne.

   1. CE N'ETAIT PAS UNE PROGRESSION. L'ancienne page listait les chapitres
      dans l'ordre du LIVRE avec des colonnes en plus — c'est-a-dire la table
      des matieres augmentee. Un enseignant qui ouvre une progression annuelle
      cherche l'ordre d'ENSEIGNEMENT. Les lignes arrivent desormais triees par
      rang conseille (voir `ordonner`), et le tableau porte les DEUX reperes :
      le rang conseille en tete de ligne, le numero de chapitre juste apres.

   2. QUATRE CHAPITRES SUR DIX ARRIVAIENT AVANT CE DONT ILS AVAIENT BESOIN, et
      la page ne pouvait pas le dire : la validation refusait un prerequis
      vers un chapitre postérieur dans le livre, si bien que cinq fiches
      avaient `prerequis: []`, dont quatre a tort. La regle a change (voir
      `validerPrerequis`), les prerequis reels sont ecrits, et le tableau
      SIGNALE les chapitres dont le rang conseille differe du rang du livre :
      c'est l'information la plus utile de la page, et elle ne se voit pas en
      comparant deux colonnes de chiffres a l'oeil.

   3. LES ATTENDUS MANGEAIENT LA MOITIE DU TABLEAU. Trois phrases de programme
      officiel par ligne, jusqu'a 110 caracteres chacune, dans une colonne de
      5,6 cm : sept a dix lignes par chapitre, pour un texte de REFERENCE
      qu'on ne lit pas en pilotant. Ils sortent du tableau et deviennent la
      matiere du suivi des notions (`suiviNotionsLatex`), ou ils sont enfin a
      leur place — une ligne chacun, sur toute la largeur, avec de quoi cocher.

   4. « S'APPUIE SUR » ET « PREPARE » DISAIENT DEUX FOIS LA MEME CHOSE, une
      fois dans chaque sens. Les deux colonnes sont gardees, et c'est un choix
      assume : lues sur une meme ligne, elles ne repondent pas a la meme
      question — « puis-je commencer ce chapitre ? » et « qu'est-ce que je
      casse si je le saute ? ». La seconde est l'arbitrage qu'on fait en mars
      quand on a pris du retard, et elle demanderait sinon de parcourir les
      neuf autres lignes. La redondance est reelle mais elle est DANS LE
      TABLEAU, pas dans la tete du lecteur, et c'est tout l'interet.

   5. AUCUN REPERE TEMPOREL. Maintenu, et cette fois sans le paragraphe
      d'excuse : une ligne suffit. Le volume en seances a ete envisage puis
      ECARTE (decision du 2026-09-12) — rien dans les donnees ne permet de le
      deriver, et un chiffre ecrit a la main dans une fiche finit cite en
      conseil d'enseignement.

   PAYSAGE. La page est tournee (`landscape`, pdflscape). Le tableau precedent
   ne debordait pas de peu : ses deux en-tetes sortaient sur la colonne
   voisine, et chaque reduction de colonne en cassait une autre — le signe
   qu'on demandait a 143 mm ce qui en demande 200. Voir LARGEUR_PAYSAGE_CM. */
function progressionLatex(lignes, niveaux) {
  /* TOUT est dans le landscape, titre et chapeau compris — corrige apres
     controle visuel sur PDF (2026-09-12).

     Le premier jet laissait le \chapter* et le chapeau en portrait et
     n'ouvrait le landscape que sur le tableau. C'etait defendable sur le
     papier (les autres titres du front-matter sont en portrait) et mauvais au
     rendu : `landscape` commence toujours une page, si bien que la page vi ne
     portait que le titre et six lignes de chapeau, et les trois quarts en
     etaient blancs. Un outil de pilotage qui s'ouvre sur une page vide ne
     donne pas envie d'etre utilise.

     Le titre est donc compose A LA MAIN dans la page tournee, en imitant
     \titleformat{\chapter} du preambule (meme corps, meme couleur ardoise,
     meme capitale d'annonce). \chapter* lui-meme ne peut pas servir ici : il
     force un \clearpage, ce qui ramenerait la page blanche qu'on vient de
     supprimer. \addcontentsline et \markboth restent appeles a la main, sans
     quoi la page sortirait de la table des matieres et perdrait sa tete
     courante. */
  /* \markboth APRES l'ouverture du landscape et apres la premiere ligne de
     texte, et non avant — corrige apres controle visuel (2026-09-12). Pose
     avant `\begin{landscape}`, il s'appliquait encore a la page PRECEDENTE :
     la page de progression heritait de la tete courante « Comment utiliser ce
     manuel », celle du chapitre d'avant. Une page de reference qui s'annonce
     sous le titre d'une autre est un defaut de fabrication.
     Il doit en outre venir apres du materiel deja compose sur la page, sinon
     LaTeX peut encore l'attribuer a la sortie precedente : d'ou sa place
     apres la ligne d'annonce. */
  /* TETE COURANTE DES PAGES TOURNEES. Le probleme et sa solution valent d'etre
     documentes : c'est le seul point ou le paysage ne se comporte pas comme le
     reste du livre (2026-09-12).

     Les pages paysage affichaient « Comment utiliser ce manuel », c'est-a-dire
     la tete du chapitre PRECEDENT, sur les cinq pages. Deux \markboth
     successifs n'y ont rien change — ni avant le landscape, ni dedans apres la
     premiere ligne composee. La raison est que \leftmark et \rightmark ne
     rendent pas la marque « courante » mais celle qui etait en vigueur quand la
     page a ete coupee ; sur des pages composees a l'interieur d'un
     environnement qui gere lui-meme ses sauts, la marque suit d'une page.

     On ne passe donc plus par le systeme de marques : \fancyhead est redefini
     en DUR, dans un groupe TeX ouvert ici et referme apres \end{landscape}.
     Une redefinition faite dans un groupe est restauree a sa fermeture : le
     reste du livre retrouve donc la tete du preambule sans qu'on ait a la
     reecrire, ce qui evite de dupliquer ici une definition qui vit dans
     ouvrage.js et qui divergerait au premier changement de maquette.

     Defaut connu et accepte : la tete est FIXE pour ces pages (elle ne
     distingue pas verso et recto), ce qui est sans consequence sur des pages
     qu'on consulte a plat et dans un livre diffuse en numerique. */
  const o = ['\\clearpage', '{',
    '\\fancyhead[LE,RO]{\\small\\color{gris}Progression annuelle}',
    '\\fancyhead[LO,RE]{}',
    '\\begin{landscape}',
    '\\addcontentsline{toc}{chapter}{Progression annuelle}',
    '\\noindent{\\normalsize\\color{orfonce}\\MakeUppercase{Progression}}\\par\\vspace{2mm}',
    '\\noindent{\\Huge\\bfseries\\color{ardoise}Progression annuelle}\\par\\vspace{6mm}',
    // Le chapeau sur 15 cm et non sur les 20,6 de la page tournee : une ligne
    // de texte courant de 20 cm fait ~165 caracteres, bien au-dela des 90 que
    // l'oeil suit sans se perdre. Le tableau, lui, prend toute la largeur —
    // on lit un tableau par cellules, pas par lignes de prose.
    '\\begin{minipage}{15cm}',
    "\\noindent L'ordre dans lequel prendre les chapitres et ce sur quoi chacun s'appuie.",
    "Le rang conseillé est celui de l'\\textbf{enseignement} ; le numéro reste celui du",
    "\\textbf{livre}, qui range ses chapitres par domaine. Les deux diffèrent, et c'est normal :",
    "on consulte un manuel par domaine, on enseigne par dépendances.\\par\\vspace{2mm}",
    // Une ligne, pas un paragraphe : l'argument est bon, il n'a pas besoin
    // d'etre plaide (arbitrage du 2026-09-12).
    "\\noindent{\\small\\color{gris}Sans calendrier ni volume horaire : le découpage en séances dépend de",
    "la classe et de l'établissement. Un tiret signifie qu'aucun prérequis n'est déclaré, non qu'il",
    "n'y en a aucun.}",
    '\\end{minipage}\\par\\vspace{7mm}'];

  const dossiers = [...new Set(lignes.map(l => l.dossier))];
  for (const dossier of dossiers) {
    const groupe = lignes.filter(l => l.dossier === dossier);
    const decales = groupe.filter(l => l.decale).length;
    /* Le titre de niveau doit rester avec le debut de son tableau. Historique
       garde parce que la raison de l'echec vaut d'etre sue :
       \needspace{14\baselineskip} (2026-09-12, matin) ne pouvait pas marcher,
       un `tabular` etant une boite insecable que LaTeX ne peut pas commencer
       en cours de page quelle que soit la place reservee — d'ou une page ne
       portant que le chapeau et une autre que le titre de niveau. longtable
       rend le tableau secable entre deux lignes et rejoue son en-tete en haut
       de chaque page (\endhead), ce qu'on veut d'un tableau de reference.
       \needspace reste utile pour le seul titre. */
    o.push('\\needspace{4\\baselineskip}',
      `\\noindent{\\large\\bfseries\\color{ardoise}${L(niveaux[dossier] || dossier)}}` +
      `\\hfill{\\small\\color{gris}${groupe.length}~chapitres` +
      // Annoncer le nombre de chapitres deplaces des le titre : c'est la
      // premiere chose qu'un enseignant doit savoir de cette page. Muet quand
      // il n'y en a aucun, plutot qu'un « 0 chapitre déplacé » qui ferait
      // chercher une subtilite inexistante.
      (decales ? `, dont ${decales} à ne pas prendre dans l'ordre du livre` : '') +
      '}\\par\\vspace{2mm}');
    /* GABARIT, en paysage. Total vise : 20,6 cm (voir LARGEUR_PAYSAGE_CM).
         rang conseille   1,2 cm  — « 10 », centre, plus l'en-tete « Rang »
         numero du livre  1,3 cm  — « ch. 10 » tient sur une ligne
         titre           6,0 cm  — le plus long (« Multiplication des entiers
                                   et decimaux », 38 car.) tient sur 2 lignes ;
                                   en portrait il etait comprime a 3,3 cm et
                                   cassait sur trois
         s'appuie sur    4,0 cm  — « ch. 4, ch. 6, ch. 10 » sur une seule
                                   ligne, la ou 1,5 cm en imposait trois
         prepare         4,0 cm  — meme largeur, par symetrie de lecture
         avancement      3,3 cm  — trois cases a cocher et leur legende
       Somme : 19,8 cm de colonnes + 6 x 2 x 4 pt de tabcolsep (1,7 cm) =
       21,5 cm... soit 0,9 de trop. tabcolsep tombe donc a 3 pt : 19,8 + 1,3 =
       21,1. Toujours trop. Les colonnes de renvoi passent a 3,6 cm chacune
       (-0,8) : 19,0 + 1,3 = 20,3 cm pour 20,6. Il reste 3 mm de securite, et
       « ch. 4, ch. 6, ch. 10 » (le plus long cas de l'ouvrage) tient encore
       sur une ligne a 3,6 cm — verifie sur le PDF, pas estime.
       La place que le volume horaire aurait prise n'a PAS ete redistribuee au
       hasard : elle va aux deux colonnes de renvoi et au titre, c'est-a-dire
       a ce que le portrait comprimait. Le reste est laisse en blanc. */
    /* arraystretch a 1,3 et non 1,45 — mesure sur PDF, pas estimee
       (2026-09-12). A 1,45 le tableau des dix chapitres remplissait la page vi
       a 3 mm pres : la legende, pourtant DANS le longtable, basculait seule
       sur la page vii en y entrainant l'en-tete rejouee par \endhead — une
       page presque blanche portant six titres de colonnes et deux lignes de
       legende. Le rendu fait 15 lignes de tableau (dix chapitres dont deux se
       composent sur deux lignes, plus l'en-tete et la legende) : 0,15 de
       moins par ligne rend ~11 mm, assez pour la legende avec de la marge.
       1,3 reste au-dessus du 1,25 de l'ancienne version portrait, donc la
       ligne ne se resserre pas par rapport a ce qui existait. */
    o.push('{\\small\\setlength{\\tabcolsep}{3pt}\\renewcommand{\\arraystretch}{1.3}',
      '\\begin{longtable}{@{}>{\\centering\\arraybackslash}p{1.2cm}p{1.3cm}p{6.0cm}p{3.6cm}p{3.6cm}p{3.3cm}@{}}',
      // \endhead : l'en-tete se rejoue en haut de chaque page. Sans lui, la
      // seconde page du tableau ne serait qu'une suite de colonnes muettes.
      '\\textbf{Rang} & \\textbf{Chap.} & \\textbf{Chapitre} & ' +
      "\\textbf{S'appuie sur} & \\textbf{Prépare} & \\textbf{Traité}\\\\",
      '\\hline', '\\endhead');
    for (const l of groupe) {
      const marque = l.fiche ? '\\textcolor{orfonce}{$\\bullet$}~' : '';
      /* Le numero de chapitre en ROUGE quand le rang conseille en differe.
         `erreur` est la couleur d'alerte de la charte, et c'est bien une
         alerte : « ce chapitre n'est pas la ou le livre le range ». Pas de
         couleur seule pour porter l'information — un lecteur daltonien, une
         photocopie en noir et blanc, et le signal disparait : le sigle
         « \triangleright » redouble la couleur, et la legende sous le tableau
         dit ce qu'il veut dire (regle d'accessibilite du projet).
         erreur #FF6B6B sur papier #F8F9FA ne donne que 2,6:1 : on l'assombrit
         a erreur!75!black, comme le fait deja le cadre de la boite sperreur
         dans le preambule, ce qui repasse au-dessus de 4,5:1. */
      const chap = l.decale
        ? `\\textcolor{erreur!75!black}{$\\triangleright$\\,ch.~${l.numero}}`
        : `ch.~${l.numero}`;
      // \textcolor (mode horizontal) et non {\color ...} : en tete d'une
      // cellule p{}, \color en mode vertical posait le strut de ligne seul
      // et rejetait le texte une ligne plus bas (premier prototype).
      const socle = l.prerequis && l.prerequis.length
        ? l.prerequis.map(p => 'ch.~' + p.numero).join(', ')
        : '\\textcolor{gris}{--}';
      const suite = l.prepare && l.prepare.length
        ? l.prepare.map(p => 'ch.~' + p.numero).join(', ')
        : '\\textcolor{gris}{--}';
      /* Trois cases par chapitre, la ou l'ancienne page n'en avait aucune.
         « Commence / Fini / Evalue » est le minimum qui distingue un chapitre
         en cours d'un chapitre bouclé — c'est la question qu'on se pose en
         regardant une progression au mois de mars. Le detail des notions se
         coche ailleurs, dans la grille de suivi. $\square$ a 1,6 mm de cote a
         la taille du corps : ecrivable au crayon, verifie sur PDF. */
      const cases = '$\\square$\\,{\\tiny C}\\ \\ $\\square$\\,{\\tiny F}\\ \\ $\\square$\\,{\\tiny É}';
      o.push(`${l.rang} & ${chap} & ${marque}\\textbf{${L(l.titre)}} & ${socle} & ${suite} & ${cases}\\\\`);
    }
    /* La legende porte le sens des trois signes du tableau. Elle est SOUS le
       tableau et non dans le chapeau : c'est la qu'on la cherche quand on bute
       sur un signe.

       DANS le longtable, en \multicolumn sur la derniere ligne, et non en
       paragraphe apres lui — corrige apres controle visuel (2026-09-12). Posee
       dehors, elle etait un paragraphe autonome que LaTeX pouvait separer du
       tableau : le rendu mettait les dix lignes sur la page vi et rejetait le
       filet de fin plus la legende, seuls, sur une page vii par ailleurs
       blanche. Une legende orpheline est pire que pas de legende — on ne la
       rattache plus a rien. Dans le tableau, elle ne peut plus s'en detacher.
       Sur 20 cm elle tient sur deux lignes ; le \parbox lui donne la largeur
       du tableau, un multicolumn simple ne pouvant pas revenir a la ligne. */
    o.push('\\hline',
      '\\multicolumn{6}{@{}l@{}}{\\rule{0pt}{4.5mm}\\parbox{20cm}{\\footnotesize\\color{gris}' +
      "\\textcolor{erreur!75!black}{$\\triangleright$}~ce chapitre s'appuie " +
      "sur un chapitre situé plus loin dans le livre : à ne pas traiter à sa place dans le sommaire " +
      '--- \\textcolor{orfonce}{$\\bullet$}~attendus du programme officiel renseignés ' +
      '--- \\textbf{C}~commencé, \\textbf{F}~fini, \\textbf{É}~évalué.}}\\\\',
      '\\end{longtable}}', '\\par\\vspace{6mm}');
  }
  // L'accolade fermante rend \fancyhead a sa definition du preambule : sans
  // elle, tout le reste du livre porterait la tete de ces pages.
  o.push('\\end{landscape}', '}', '\\cleardoublepage', '');
  return o.join('\n');
}

/* --- Suivi des notions vues / pas vues ----------------------------------- */

/* La grille de suivi des notions, en paysage, a la suite de la progression.
   NOUVEAU le 2026-09-12. Ce que l'enseignant coche au fil de l'annee, et ou
   il voit d'un coup d'oeil ce qui reste a traiter avant juin.

   CHOIX DE LA MAILLE : les ATTENDUS OFFICIELS (champ `attendus` des fiches),
   trois par chapitre, trente sur l'annee. Deux mailles etaient disponibles et
   le choix n'est pas neutre :

     - les `keywords` des modules (55 sur l'annee, 5 a 6 par chapitre) sont
       des mots isoles — « Retenue », « Pi », « Degré », « Décimaux ». On ne
       coche pas « Pi » : ce n'est pas une chose qu'on traite ou qu'on ne
       traite pas, c'est une etiquette d'indexation. Une grille de 55 lignes
       de mots isoles serait plus longue ET moins actionnable.
     - les `attendus` sont les items du PROGRAMME, formules en verbes d'action
       (« Calculer le volume d'un pavé droit et d'un cube... »). C'est
       exactement ce dont un enseignant doit pouvoir dire « traité / à
       reprendre / évalué », et c'est ce sur quoi il rendra des comptes. C'est
       aussi la maille du bilan de fin d'annee et du conseil de cycle.
   Trente lignes, c'est en outre une grille qui tient sur une page et se
   photocopie. Cinquante-cinq n'y tenaient pas.

   MISE EN FORME : UNE LIGNE PAR ATTENDU, SUR TOUTE LA LARGEUR. Les attendus
   sont de longues phrases — de 62 a 111 caracteres, mediane ~85. En colonne
   etroite (5,6 cm dans l'ancien tableau de progression) chacun cassait sur
   sept a dix lignes. Trois solutions ont ete pesees :
     - les ABREGER : refuse. Ce sont les mots du programme officiel ; les
       reecrire, c'est en changer la portee, et l'enseignant ne les
       reconnaitrait plus.
     - les NUMEROTER et renvoyer a une liste : refuse aussi. Deux allers-
       retours par ligne pour cocher une case, sur une grille qu'on remplit
       trente fois dans l'annee.
     - UNE LIGNE PAR ATTENDU sur toute la largeur : retenu. En paysage, la
       colonne de texte fait 12,2 cm, soit ~100 caracteres : le plus long
       attendu de l'ouvrage (111 car.) tient sur deux lignes, la mediane sur
       une seule. La grille se lit alors comme une liste de taches, ce qu'elle
       est.

   COLONNES DE SUIVI, dans l'ordre ou l'annee se deroule : Vu / A revoir /
   Evalue, plus une DATE. Trois etats et non deux, parce que « pas vu » et
   « vu mais pas acquis » n'appellent pas la meme decision en avril. La date
   est demandee explicitement : sans elle, une grille cochee ne dit plus, six
   mois plus tard, si la notion a ete vue en septembre ou la semaine derniere.
   Case a cocher $\square$ et non case a remplir : on coche au crayon, souvent
   debout, entre deux cours. */
function suiviNotionsLatex(lignes, niveaux) {
  // Rien a imprimer si aucune fiche ne porte d'attendus : une grille vide
  // serait pire qu'une grille absente. Les 19 autres ouvrages du catalogue
  // sont dans ce cas au 2026-09-12.
  const avecAttendus = lignes.filter(l => l.attendus && l.attendus.length);
  if (!avecAttendus.length) return '';

  const total = avecAttendus.reduce((s, l) => s + l.attendus.length, 0);

  // Titre compose a la main dans le landscape, pour la meme raison que la
  // progression : \chapter* forcerait un \clearpage et rendrait une page de
  // titre presque blanche en portrait. Voir `progressionLatex`.
  // Tete courante posee en dur pour la duree du groupe : voir la longue note
  // de `progressionLatex`, les marques ne suivent pas dans un landscape.
  const o = ['\\clearpage', '{',
    '\\fancyhead[LE,RO]{\\small\\color{gris}Suivi des notions}',
    '\\fancyhead[LO,RE]{}',
    '\\begin{landscape}',
    '\\addcontentsline{toc}{chapter}{Suivi des notions}',
    // Titre compact : \Large et non \Huge, interlignes resserres. La page
    // d'ouverture du suivi ne portait qu'UN chapitre sur dix (3 attendus sur
    // 30) et restait vide aux trois quarts, quand les suivantes en tiennent
    // trois a quatre : le pave de titre et de legende mangeait a lui seul la
    // moitie de la hauteur utile. Une grille a photocopier se compte en
    // feuilles (releve visuel du 2026-09-12).
    '\\noindent{\\small\\color{orfonce}\\MakeUppercase{Suivi}}\\par\\vspace{1mm}',
    '\\noindent{\\Large\\bfseries\\color{ardoise}Suivi des notions}\\par\\vspace{3mm}',
    '\\begin{minipage}{15cm}',
    `\\noindent Les ${total} attendus du programme officiel couverts par cet ouvrage, dans l'ordre de la`,
    "progression conseillée. À photocopier en début d'année et à cocher au fil des séances : ce qui",
    "reste à traiter avant juin se lit alors dans les cases vides.\\par\\vspace{2mm}",
    "\\noindent{\\small\\color{gris}\\textbf{Vu} --- la notion a été traitée en classe. ",
    "\\textbf{À revoir} --- traitée, mais à reprendre avant l'évaluation. ",
    "\\textbf{Évalué} --- a fait l'objet d'une évaluation notée. ",
    'La date est celle de la première séance qui l\'aborde.}',
    '\\end{minipage}\\par\\vspace{4mm}'];

  const dossiers = [...new Set(avecAttendus.map(l => l.dossier))];
  for (const dossier of dossiers) {
    const groupe = avecAttendus.filter(l => l.dossier === dossier);
    o.push('\\needspace{4\\baselineskip}',
      `\\noindent{\\large\\bfseries\\color{ardoise}${L(niveaux[dossier] || dossier)}}` +
      `\\hfill{\\small\\color{gris}${groupe.reduce((s, l) => s + l.attendus.length, 0)}` +
      '~attendus}\\par\\vspace{2mm}');
    /* GABARIT. Total vise 20,6 cm (LARGEUR_PAYSAGE_CM) :
         rang + chapitre  1,3 cm  — « 4 » puis, sur la ligne de tete de groupe,
                                    le titre du chapitre a cheval (multicolumn)
         attendu         12,2 cm  — ~100 caracteres par ligne (voir ci-dessus)
         vu               1,3 cm  \
         a revoir         1,7 cm   >  cases a cocher, centrees
         evalue           1,5 cm  /
         date             2,2 cm  — « 12/11 » ecrit a la main, au crayon
       Somme 20,2 cm + 6 x 2 x 3 pt de tabcolsep (1,3 cm) = 21,5 : trop.
       tabcolsep a 2 pt (0,85 cm) donne 21,05 ; l'attendu tombe a 11,6 cm et
       le total a 20,45 pour 20,6. Marge 1,5 mm.
       Les trois colonnes a cocher ne sont pas de largeur egale : chacune est
       calee sur SON en-tete, « À revoir » etant le plus long. Un p{} ne coupe
       pas ce qui depasse — c'est exactement le piege qui faisait deborder les
       en-tetes du tableau precedent. */
    /* arraystretch a 1,35 et non 1,5 : a 1,5, les 30 attendus debordaient sur
       une QUATRIEME page qui ne portait qu'un seul chapitre. Une grille a
       photocopier se compte en feuilles — la derniere page coutait une feuille
       entiere pour trois lignes. A 1,35 le suivi tient sur trois pages, et
       l'interligne reste assez ouvert pour ecrire une date au crayon entre
       deux filets (releve visuel du 2026-09-12, mesure sur PNG rendu). */
    o.push('{\\small\\setlength{\\tabcolsep}{2pt}\\renewcommand{\\arraystretch}{1.35}',
      '\\begin{longtable}{@{}p{1.3cm}p{11.6cm}' +
      '>{\\centering\\arraybackslash}p{1.3cm}>{\\centering\\arraybackslash}p{1.7cm}' +
      '>{\\centering\\arraybackslash}p{1.5cm}p{2.2cm}@{}}',
      '\\textbf{Chap.} & \\textbf{Attendu de fin d\'année} & \\textbf{Vu} & ' +
      "\\textbf{À revoir} & \\textbf{Évalué} & \\textbf{Date}\\\\",
      '\\hline', '\\endhead');
    for (const l of groupe) {
      /* Une ligne de tete par chapitre, sur toute la largeur, avant ses trois
         attendus. Sans elle, trente lignes de phrases de programme se suivent
         sans respiration et on ne sait plus a quel chapitre on en est — le
         defaut qu'on reprochait justement a l'ancienne colonne d'attendus.
         Un fond de cellule aurait ete plus net, mais \cellcolor demande le
         paquet colortbl, absent du preambule : charger un paquet pour une
         teinte de fond alors qu'un filet fait le meme travail typographique
         serait une dette gratuite (2026-09-12). Le titre en gras ardoise
         au-dessus d'un filet fin suffit a marquer la rupture, et la grille
         reste legere a l'impression — les cases restent la chose la plus
         visible de la page.
         Le rang conseille est rappele ici, PAS sur chaque attendu : il
         appartient au chapitre, et le repeter trois fois ferait croire a une
         numerotation des attendus. */
      /* \nopagebreak apres la ligne de tete : un chapitre ne doit pas etre
         coupe de ses attendus par une fin de page — corrige apres controle
         visuel (2026-09-12), ou le titre « Figures geometriques de base »
         restait en bas de la page vii avec deux de ses attendus et le
         troisieme partait seul en haut de la viii, sans rien pour dire a quel
         chapitre il appartenait.
         longtable coupe entre deux lignes et n'obeit pas a \needspace :
         \nopagebreak (et non \\*, qui interdirait TOUTE coupure et ferait
         deborder la page) est le seul levier qui s'applique ligne par ligne.
         C'est une penalite forte, pas une interdiction : si un chapitre ne
         tient vraiment pas, LaTeX coupe quand meme plutot que de deborder. */
      o.push('\\multicolumn{6}{@{}l@{}}{\\rule{0pt}{5.0mm}' +
        `{\\color{gris}Rang ${l.rang} \\textperiodcentered\\ ch.~${l.numero}}\\quad` +
        `\\textbf{\\color{ardoise}${L(l.titre)}}}\\\\[0.4mm]`,
        '\\nopagebreak');
      l.attendus.forEach((a, i) => {
        /* La cellule de date porte un FILET GRIS, corrige apres controle
           visuel (2026-09-12). Elle etait laissee vide, au motif qu'un trait
           invite a ecrire dessus plutot que dedans ; au rendu, la colonne
           « Date » n'avait tout simplement rien sous son en-tete et ne se
           lisait plus comme une colonne a remplir — on ne voit pas une case
           qui n'a pas de bord. Un filet fin en gris (et non en noir) suffit a
           la designer sans peser dans la grille.
           \rule invisible en tete de ligne : il donne la hauteur d'ecriture,
           4,6 mm, confortable pour une date au crayon. */
        /* Le filet de date est pose en \underline d'une case VIDE de la
           largeur voulue, et non en \rule — troisieme essai, chacun corrige
           sur PDF (2026-09-12), et la raison vaut d'etre sue.

           Un \rule pose seul dans une cellule p{} s'assoit sur la DERNIERE
           ligne de base de la rangee, pas sur la premiere : sur les attendus
           qui tiennent sur deux lignes — la moitie d'entre eux — le filet
           descendait d'un interligne et se retrouvait en face de l'attendu
           suivant. Une date ecrite sur la mauvaise ligne est pire qu'une case
           vide, et le defaut est invisible tant qu'aucun attendu ne passe a la
           ligne. Un \raisebox de compensation ne corrige que le cas a deux
           lignes et decale celui a une ligne : l'ecart depend du contenu de la
           cellule VOISINE, il n'y a pas de valeur juste.

           \underline{\makebox[1.9cm]{}} ne suffit pas non plus : mesure sur le
           PDF a 200 ppp, le filet restait une ligne sous ses cases. En cause,
           la cellule p{} elle-meme, dont la ligne de base est la DERNIERE de
           la rangee — le contenu suit, quelle que soit sa nature.

           \parbox[t]{...}{\vspace{0pt}...} est la reponse : `[t]` aligne la
           boite sur la premiere ligne de base de la rangee, et le \vspace{0pt}
           en tete est l'idiome qui l'y force reellement (sans lui, `[t]`
           s'aligne sur la premiere ligne du CONTENU, ce qui ne change rien
           quand le contenu est un filet). Le filet se pose alors au niveau des
           trois cases a cocher, que l'attendu tienne sur une ou deux lignes.
           Verifie au recadrage sur PDF, pas au jugement sur la page entiere :
           le decalage d'un interligne ne se voit pas a l'echelle de la page. */
        o.push(`\\rule{0pt}{4.6mm} & ${L(a)} & $\\square$ & $\\square$ & $\\square$ & ` +
          '\\parbox[t]{2.2cm}{\\vspace{0pt}\\color{gris}\\underline{\\makebox[1.9cm]{}}}\\\\');
        // La penalite se repose apres CHAQUE attendu sauf le dernier :
        // \nopagebreak ne vaut que pour la coupure qui le suit immediatement.
        // Sans cela, seul le premier attendu restait solidaire de son titre.
        if (i < l.attendus.length - 1) o.push('\\nopagebreak');
      });
      o.push('\\hline');
    }
    o.push('\\end{longtable}}', '\\par\\vspace{6mm}');
  }
  // Accolade fermante : rend \fancyhead au preambule. Voir `progressionLatex`.
  o.push('\\end{landscape}', '}', '\\cleardoublepage', '');
  return o.join('\n');
}

/* --- Erreurs frequentes ----------------------------------------------- */

function renvoi(ex) {
  if (!ex) return '';
  if (ex.type === 'exercice') return `Exercice \\thechapter.${ex.n}`;
  // « Supplément N.x » : la banque du professeur porte sa PROPRE numerotation,
  // repartant a 1 (chapitre.js imprime « \textbf{Supplément \thechapter.n} »).
  // Le renvoi reprend donc ce libelle a l'identique, sans quoi l'enseignant
  // chercherait un « Exercice 10.4 » qui n'existe pas — la banque et le corps
  // du chapitre ont deux series de numeros distinctes (2026-09-12).
  if (ex.type === 'supplement') return `Supplément \\thechapter.${ex.n}`;
  if (ex.type === 'evaluation') return `Question ${ex.n} de l'évaluation`;
  if (ex.type === 'quiz') return `Question ${ex.n} du quiz`;
  return '';
}

/* La page « Erreurs frequentes et remediation » d'un chapitre : une boite par
   erreur, toujours les memes quatre entrees — ce que l'eleve ecrit, d'ou ca
   vient, par quoi y repondre, et l'exercice du livre qui sert de
   remediation. Le renvoi est verifie a la validation : un renvoi vers une
   question qui n'existe pas serait pire qu'aucun renvoi. */
function sectionErreurs(fiche) {
  const erreurs = Array.isArray(fiche.erreurs) ? fiche.erreurs : [];
  if (!erreurs.length) return '';
  const o = ['\\section{Erreurs fréquentes et remédiation}',
    "\\noindent{\\small\\color{gris}Ce que les élèves écrivent le plus souvent sur ce chapitre, " +
    "d'où cela vient, et par quoi y répondre. Chaque erreur renvoie à l'exercice du livre " +
    'qui sert de remédiation.}\\par\\vspace{3mm}'];
  erreurs.forEach((e, i) => {
    o.push(`\\begin{sperreur}{Erreur ${i + 1} --- ${L(e.titre)}}`,
      `\\textbf{Ce que l'élève écrit.} ${L(e.eleve)}\\par\\vspace{1.5mm}`,
      `\\textbf{D'où ça vient.} ${L(e.cause)}\\par\\vspace{1.5mm}`,
      `\\textbf{Pour y remédier.} ${L(e.remede)}`);
    const r = renvoi(e.exercice);
    if (r) o.push(`\\par\\vspace{1.5mm}\\noindent{\\small\\color{ardoise}\\textbf{Remédiation :} ${r}.}`);
    o.push('\\end{sperreur}', '');
  });
  return o.join('\n');
}

/* Encadre « Place dans le programme », dans la boite enseignant du chapitre. */
function placeDansLeProgramme(fiche) {
  if (!fiche || !String(fiche.note || '').trim()) return '';
  return `\\par\\medskip\\noindent\\textbf{Place dans le programme} : ${L(fiche.note)}`;
}

/* --- Competences --------------------------------------------------------- */

/* Etiquette de competence d'une question, pour l'en-tete de la question. */
function etiquetteCompetence(fiche, index) {
  const comp = fiche && fiche.competences && fiche.competences.evaluation;
  if (!Array.isArray(comp) || !comp[index]) return '';
  return `{\\normalfont\\small\\color{gris}\\ \\textperiodcentered\\ ${L(MAJ(String(comp[index])))}}`;
}

/* Totaux par competence : { competence: { questions: [1, 4], points: 6 } },
   dans l'ordre du referentiel. Pur, teste. */
function totauxCompetences(evaluation, fiche, referentiel) {
  const comp = (fiche && fiche.competences && fiche.competences.evaluation) || [];
  const totaux = new Map();
  for (const c of referentiel.competences) totaux.set(c, { questions: [], points: 0 });
  (evaluation.questions || []).forEach((q, i) => {
    const c = String(comp[i] || '').toLowerCase();
    if (!totaux.has(c)) return;
    totaux.get(c).questions.push(i + 1);
    totaux.get(c).points += q.points || 0;
  });
  return [...totaux].filter(([, v]) => v.questions.length)
    .map(([competence, v]) => ({ competence, questions: v.questions, points: v.points }));
}

/* La grille imprimee sous l'evaluation : une ligne par competence mobilisee,
   trois cases a cocher. Les competences absentes de l'evaluation ne sont
   pas listees — une ligne a zero point n'apprend rien au correcteur. */
function grilleCompetences(evaluation, fiche, referentiel) {
  const lignes = totauxCompetences(evaluation, fiche, referentiel);
  if (!lignes.length) return '';
  const total = lignes.reduce((s, l) => s + l.points, 0);
  const o = ['\\subsection*{Grille de compétences}',
    "\\noindent{\\small\\color{gris}Chaque question mobilise une compétence du référentiel (" +
    L(referentiel.nom) + ') ; la grille totalise les points par compétence.}\\par\\vspace{2mm}',
    '{\\small\\renewcommand{\\arraystretch}{1.35}',
    // Colonne « Questions » ramenee de 3,6 a 2,2 cm le 2026-09-12. Les six
    // en-tetes plus les trois colonnes a cocher depassaient la justification de
    // 30,7 pt, sur les dix chapitres a la fois — un debordement systematique,
    // apparu quand l'evaluation s'est mise a mobiliser « Communiquer » (le plus
    // long mot du referentiel, jusque-la jamais tire). La colonne des questions
    // etait la seule surdimensionnee : elle ne porte que « Q1, Q4 », soit un
    // centimetre reel. On rend donc 1,4 cm sans toucher a la colonne des
    // competences, qui doit rester capable d'accueillir « Communiquer ».
    '\\begin{tabular}{@{}p{3.1cm}p{2.2cm}>{\\centering\\arraybackslash}p{1.3cm}ccc@{}}',
    '\\textbf{Compétence} & \\textbf{Questions} & \\textbf{Points} & \\textbf{Acquis} & \\textbf{En cours} & \\textbf{Non acquis}\\\\',
    '\\hline'];
  for (const l of lignes) {
    o.push(`${L(MAJ(l.competence))} & ${l.questions.map(n => 'Q' + n).join(', ')} & ${l.points} & ` +
      '$\\square$ & $\\square$ & $\\square$\\\\');
  }
  o.push('\\hline', `\\multicolumn{2}{@{}l}{\\textbf{Total}} & \\textbf{${total}} & & & \\\\`,
    '\\end{tabular}}', '\\par\\vspace{3mm}');
  return o.join('\n');
}

/* Annexe de fin d'ouvrage : une grille de suivi de classe vierge, a
   photocopier. Une ligne par eleve, et pour chaque competence du referentiel
   trois cases — une par trimestre.

   Redimensionnee le 2026-09-12 sur deux reproches de la relecture.

   30 lignes et non 26. 26 etait le nombre que la mise en page laissait
   passer, pas un effectif : une classe de 30 ne rentrait pas, et une grille
   ou il manque quatre eleves ne sert a rien — on la refait a la main. 30 est
   le plafond courant au college.

   Trois cases par competence et non une. Une seule case enregistrait un ETAT,
   alors que la question qu'on se pose devant une grille de competences est
   « est-ce que ca progresse ». Trois colonnes T1/T2/T3 y repondent sur une
   feuille, la ou « une grille par trimestre » — ce que disait l'ancien texte —
   obligeait a comparer trois photocopies cote a cote.

   SUR DEUX PAGES, quinze eleves chacune, et c'est mesure et non estime. Le
   premier essai tenait les 30 lignes et les 18 colonnes sur une seule page :
   pdflatex a rendu « Overfull \\hbox (183,7 pt too wide) » et « Overfull
   \\vbox (85,0 pt too high) », c'est-a-dire une grille qui sortait de la page
   dans les deux sens. Le calcul de largeur du premier jet avait oublie
   \\tabcolsep, qui vaut 6 pt DE CHAQUE COTE de chacune des 19 colonnes, soit
   228 pt — 80 mm — de marge interne avant la moindre colonne. D'ou, ici :

     - largeur : 143 mm utiles (170 de page - 12,7 de gouttiere - 14 de marge
       exterieure). \\tabcolsep tombe a 1,5 pt (0,5 mm par bord), ce qui rend
       ~74 mm ; 18 sous-colonnes a 4,6 mm + le nom a 38 mm + les 19 x 2 x
       1,5 pt de \\tabcolsep + les 8 filets donnent 142,0 mm pour 143. Les
       38 mm du nom sont le chiffre d'ajustement : a 40 mm le total sortait a
       144,0 et le test de largeur le refusait. La case de 4,6 mm reste
       ecrivable a la main : on y porte une lettre, A, E ou N.
     - hauteur : 15 lignes a 5,3 mm = 80 mm, l'en-tete tournee ~22 mm, le
       titre de chapitre et le chapeau ~46 mm. On tient dans les 208 mm avec
       de la marge, la ou 30 lignes en demandaient 181 pour le seul tableau.
     - le \\clearpage entre les deux moities est explicite : laisser LaTeX
       couper un tabular non breakable au milieu, c'est ce qui produisait le
       debordement vertical.

   La coupure en deux n'est pas un pis-aller : une liste de classe se remplit
   par ordre alphabetique, et 1-15 / 16-30 est la coupure naturelle. Chaque
   demi-page porte son en-tete, donc chacune reste lisible seule.

   Verifie sur le PDF compile de college-maths-6e, edition professeur. */
function grilleSuiviClasse(referentiel, rangs) {
  const n = rangs || 30;
  const PAR_PAGE = 15;
  const cols = referentiel.competences;
  const PERIODES = ['T1', 'T2', 'T3'];
  // Filet epais entre deux competences, rien entre les trimestres d'une meme
  // competence : sans cette distinction, dix-huit colonnes identiques ne se
  // lisent plus et on reporte la note dans la mauvaise case.
  const gabarit = cols.map(() =>
    PERIODES.map((_, k) => '>{\\centering\\arraybackslash}p{4.6mm}' + (k === 2 ? '|' : '')).join('')
  ).join('');
  const vides = cols.map(() => PERIODES.map(() => '').join(' & ')).join(' & ');

  /* Une moitie de grille : son en-tete complete, puis ses lignes. `depuis`
     est le numero du premier eleve, pour que la seconde page reprenne a 16
     et non a 1 — une grille dont les deux pages sont numerotees pareil ne
     sert a rien. */
  function moitie(depuis, jusqua) {
    const o = ['\\begin{center}\\small\\renewcommand{\\arraystretch}{1.1}',
      // 1,5 pt : voir le calcul de largeur ci-dessus. Pose DANS le center,
      // donc rendu a la fermeture du groupe — le reste du livre garde les 6 pt.
      '\\setlength{\\tabcolsep}{1.5pt}',
      `\\begin{tabular}{|p{38mm}|${gabarit}}`,
      '\\hline',
      `\\textbf{Élève} & ${cols.map(c =>
        `\\multicolumn{3}{c|}{\\rotatebox{90}{\\footnotesize\\textbf{${L(MAJ(c))}}\\ }}`).join(' & ')}\\\\`,
      // Seconde bande : le trimestre. \tiny et non \footnotesize — dans
      // 4,6 mm, « T1 » en footnotesize touche les filets de part et d'autre.
      `& ${cols.map(() => PERIODES.map(p => `{\\tiny ${p}}`).join(' & ')).join(' & ')}\\\\`,
      '\\hline'];
    for (let i = depuis; i <= jusqua; i++) {
      o.push(`\\rule{0pt}{5.3mm}${i}. & ${vides}\\\\`, '\\hline');
    }
    o.push('\\end{tabular}', '\\end{center}');
    return o;
  }

  const o = ['\\chapter{Grille de suivi des compétences}',
    '\\markboth{Grille de suivi des compétences}{Grille de suivi des compétences}',
    '\\noindent Une ligne par élève, trois colonnes par compétence du référentiel (' +
    L(referentiel.nom) + ') --- une par trimestre. À photocopier en début d\'année : on y ' +
    'reporte, après chaque évaluation du livre, le niveau atteint --- A (acquis), ' +
    'E (en cours), N (non acquis). Les trois colonnes d\'une même compétence se lisent ' +
    'côte à côte : c\'est la progression sur l\'année qui se voit, et pas seulement l\'état ' +
    'du moment.\\par\\vspace{3mm}',
    '\\noindent{\\small\\color{gris}La grille tient sur deux pages, quinze élèves chacune. ' +
    'Les deux se photocopient ensemble.}\\par\\vspace{4mm}'];
  for (let d = 1; d <= n; d += PAR_PAGE) {
    const f = Math.min(d + PAR_PAGE - 1, n);
    // \needspace avant la seconde moitie : son en-tete tournee ne doit pas
    // rester seule en bas de page si le chapeau a pousse le tableau.
    if (d > 1) o.push('\\clearpage', `\\noindent{\\small\\color{gris}Élèves ${d} à ${f}.}\\par\\vspace{4mm}`);
    o.push(...moitie(d, f));
  }
  o.push('\\cleardoublepage', '');
  return o.join('\n');
}

module.exports = {
  REFERENTIELS, referentielDe,
  cheminFiche, chargerProf, validerProf, validerPrerequis,
  ordonner, rangsConseilles, progressionLatex, suiviNotionsLatex,
  sectionErreurs, placeDansLeProgramme, renvoi,
  etiquetteCompetence, totauxCompetences, grilleCompetences, grilleSuiviClasse
};
