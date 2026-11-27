// Jeu de données de DÉMONSTRATION pour les émulateurs (tests et essai local du module devoir).
// Exercices volontairement génériques, écrits pour l'occasion : ce dépôt est public, la vraie
// banque (avec ses corrigés) reste dans le dépôt privé BTS FED et n'entre jamais ici.
const blocs = [
  { id: 'methode', label: 'Méthode ou formule', points: 40 },
  { id: 'calcul', label: 'Calcul', points: 30 },
  { id: 'resultat', label: 'Résultat', points: 20 },
  { id: 'unite', label: 'Unité', points: 10 }
];

function exercice(id, titre, enonce, parametres, donnee, etape) {
  return {
    id, titre, chapitre: '01', tags: ['démonstration'], difficulte: 1,
    enonce_modele: enonce, parametres, donnees_calculees: [donnee],
    blocs_reponse: blocs,
    corrige: { resultat: donnee.nom, unite: donnee.unite, etapes: [etape] },
    medias: []
  };
}

const EXERCICES = [
  exercice('demo-loi-ohm', 'Démo — Résistance d\'un radiateur',
    'Un radiateur électrique est alimenté sous une tension $U = {{U}}$ V.<br/><br/>Il est parcouru par un courant $I = {{I}}$ A.<br/><br/>Calculer sa <strong>résistance</strong> $R$.',
    [{ nom: 'U', min: 200, max: 240, pas: 10, unite: 'V', decimales: 0 }, { nom: 'I', min: 2, max: 8, pas: 0.5, unite: 'A' }],
    { nom: 'R', expression: 'U / I', unite: 'Ω', decimales: 1 },
    '$R = \\dfrac{U}{I} = \\dfrac{{{U}}}{{{I}}} = {{R}}\\ \\Omega$'),
  exercice('demo-puissance', 'Démo — Puissance d\'un moteur',
    'Un moteur est alimenté sous $U = {{U}}$ V et absorbe $I = {{I}}$ A.<br/><br/>Calculer la <strong>puissance électrique</strong> $P$ absorbée.',
    [{ nom: 'U', valeurs: [230, 400], unite: 'V' }, { nom: 'I', min: 3, max: 12, pas: 1, unite: 'A' }],
    { nom: 'P', expression: 'U * I', unite: 'W', decimales: 0 },
    '$P = U \\times I = {{U}} \\times {{I}} = {{P}}$ W'),
  exercice('demo-energie', 'Démo — Énergie consommée',
    'Un appareil de puissance $P = {{P}}$ kW fonctionne pendant $t = {{t}}$ h.<br/><br/>Calculer l\'<strong>énergie</strong> $E$ consommée.',
    [{ nom: 'P', min: 1, max: 6, pas: 0.5, unite: 'kW' }, { nom: 't', min: 2, max: 10, pas: 1, unite: 'h' }],
    { nom: 'E', expression: 'P * t', unite: 'kWh', decimales: 1 },
    '$E = P \\times t = {{P}} \\times {{t}} = {{E}}$ kWh'),
  exercice('demo-debit', 'Démo — Débit dans une conduite',
    'Une conduite de section $S = {{S}}$ m² est parcourue par de l\'eau à la vitesse $v = {{v}}$ m/s.<br/><br/>Calculer le <strong>débit volumique</strong> $q_v$.',
    [{ nom: 'S', min: 0.01, max: 0.05, pas: 0.01, unite: 'm²', decimales: 2 }, { nom: 'v', min: 0.5, max: 2.5, pas: 0.5, unite: 'm/s' }],
    { nom: 'qv', expression: 'S * v', unite: 'm³/s', decimales: 3 },
    '$q_v = S \\times v = {{S}} \\times {{v}} = {{qv}}$ m³/s'),
  exercice('demo-rendement', 'Démo — Rendement d\'une chaudière',
    'Une chaudière fournit une puissance utile $P_u = {{Pu}}$ kW pour une puissance absorbée $P_a = {{Pa}}$ kW.<br/><br/>Calculer son <strong>rendement</strong> $\\eta$ en pourcentage.',
    [{ nom: 'Pu', min: 18, max: 24, pas: 1, unite: 'kW' }, { nom: 'Pa', min: 25, max: 30, pas: 1, unite: 'kW' }],
    { nom: 'eta', expression: 'Pu / Pa * 100', unite: '%', decimales: 1 },
    '$\\eta = \\dfrac{P_u}{P_a} \\times 100 = \\dfrac{{{Pu}}}{{{Pa}}} \\times 100 = {{eta}}$ %'),
  exercice('demo-surface', 'Démo — Surface d\'un mur',
    'Un mur {{type_mur}} mesure $L = {{L}}$ m de long et $h = {{h}}$ m de haut.<br/><br/>Calculer sa <strong>surface</strong> $A$.',
    [{ nom: 'L', min: 4, max: 9, pas: 0.5, unite: 'm' }, // Ligne de catalogue : couvre le stockage Firestore des tableaux de tableaux (pourStockage).
      { nom: 'mur', colonnes: [{ nom: 'type_mur' }, { nom: 'h', unite: 'm' }], lignes: [['de refend', 2.5], ['de façade', 2.7], ['pignon', 3]] }],
    { nom: 'A', expression: 'L * h', unite: 'm²', decimales: 2 },
    '$A = L \\times h = {{L}} \\times {{h}} = {{A}}$ m²')
];

// Question rédigée et exercice mixte de démonstration (chapitre 02, pour ne pas se mêler aux six
// exercices chiffrés du chapitre 01 dont les tests comptent les tirages). Textes génériques.
const Moteur = require('../../js/devoir/devoirEngine.js');
const EXERCICES_REDIGES = [
  {
    id: 'demo-redige-isolation', type: 'redige', titre: 'Démo — Pourquoi calorifuger un tube', chapitre: '02', tags: ['démonstration', 'question rédigée'], difficulte: 2,
    enonce_modele: 'Un tube d\'eau chaude à {{T}} °C traverse un local non chauffé.<br/><br/>Expliquer pourquoi on le <strong>calorifuge</strong>, et ce qui limite l\'épaisseur d\'isolant utile.',
    parametres: [{ nom: 'T', valeurs: [60, 70, 80], unite: '°C' }],
    blocs_reponse: Moteur.blocsRedige(),
    corrige: {
      elements: [
        { id: 'pertes', label: 'Réduire les pertes thermiques', points: 60, attendu: 'L\'isolant augmente la résistance thermique entre l\'eau à {{T}} °C et l\'air du local : les pertes diminuent.' },
        { id: 'epaisseur', label: 'Épaisseur utile limitée', points: 40, attendu: 'Chaque centimètre supplémentaire rapporte moins que le précédent, pour un coût et un encombrement qui augmentent.' }
      ],
      reponse_modele: 'On calorifuge pour limiter les pertes de l\'eau à {{T}} °C ; au-delà d\'une certaine épaisseur, le gain ne paie plus le coût.'
    },
    medias: []
  },
  {
    id: 'demo-mixte-disjoncteur', type: 'mixte', titre: 'Démo — Intensité et choix du disjoncteur', chapitre: '02', tags: ['démonstration', 'exercice mixte'], difficulte: 2,
    enonce_modele: 'Un radiateur de puissance $P = {{P}}$ W est alimenté sous $U = 230$ V.<br/><br/>Calculer l\'<strong>intensité</strong> $I$ absorbée, puis conclure : un disjoncteur de {{cal}} A convient-il ?',
    parametres: [{ nom: 'P', min: 1000, max: 2000, pas: 250, unite: 'W', decimales: 0 }, { nom: 'cal', valeurs: [10, 16], unite: 'A' }],
    donnees_calculees: [{ nom: 'I', expression: 'P / 230', unite: 'A', decimales: 1 }],
    blocs_reponse: Moteur.blocsMixte(40),
    corrige: {
      resultat: 'I', unite: 'A',
      etapes: ['$I = \\dfrac{P}{U} = \\dfrac{{{P}}}{230} = {{I}}$ A'],
      elements: [{ id: 'conclusion', label: 'Comparaison au calibre', points: 40, attendu: 'L\'intensité de {{I}} A est inférieure au calibre de {{cal}} A : le disjoncteur convient.' }]
    },
    medias: []
  }
];

const NOMS = ['Alice M.', 'Bilal K.', 'Chloé D.', 'Dimitri P.', 'Emma L.', 'Farid B.', 'Gaëlle R.', 'Hugo T.', 'Inès S.', 'Jules V.', 'Kenza A.'];

const CLASSE = {
  id: 'classe-demo',
  nom: 'BTS FED 2e année (démo)',
  annee_scolaire: '2026-2027',
  etudiants: NOMS.map((nom, i) => ({ id: 'etu-' + String(i + 1).padStart(2, '0'), nom, mode_dys: false, actif: true }))
};

module.exports = { EXERCICES, EXERCICES_REDIGES, CLASSE };
