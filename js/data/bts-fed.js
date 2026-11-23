/* Généré par scripts/build-bts-fed.js — ne pas éditer à la main. */
var BTS_FED = {
  "projet": "L'Escale, du modèle au dimensionnement",
  "tds": [
    {
      "id": "td0",
      "num": 0,
      "titre": "Les gestes de base, clic par clic",
      "logiciel": "Revit 2026",
      "duree": "2 h",
      "niveauGcf": 2,
      "objectif": {
        "intro": "À la fin de ce TD, je saurai",
        "items": [
          "créer un projet Revit à partir du gabarit et l’enregistrer",
          "nommer les zones de l’interface, dont la barre des options",
          "créer et régler des niveaux et des axes",
          "tracer des murs, poser une porte et des fenêtres, créer un sol et un toit",
          "créer une pièce, une vue 3D, une coupe et des cotes"
        ]
      },
      "depart": "Aucun : on part du Gabarit de construction livré avec Revit 2026.",
      "enonce": {
        "url": "media/bts-fed/td/TD0-revit-gestes-de-base-etudiant.pdf?v=6266343482",
        "nom": "TD0-revit-gestes-de-base-etudiant.pdf",
        "taille": 1275857
      },
      "corrige": {
        "url": "media/bts-fed/td/TD0-revit-gestes-de-base-corrige.pdf?v=fd609f0741",
        "nom": "TD0-revit-gestes-de-base-corrige.pdf",
        "taille": 1279797
      },
      "maquette": null,
      "videos": [
        {
          "id": "TD0-decouvrir-escale",
          "titre": "Découvrir l'Escale — film de présentation",
          "duree": 369,
          "voix": true,
          "url": "media/bts-fed/videos/TD0-decouvrir-escale.mp4?v=29ea772054",
          "taille": 51599188,
          "retenir": [
            "L'Escale est une salle des fêtes fictive, ERP de type L, 4e catégorie, 205 personnes, 32 m × 16 m, de plain-pied (N00 = 110,15 NGF).",
            "Deux volumes : un volume bas (hall et annexes) et un volume haut (salle et scène) ; huit niveaux de 0 à 7,20 m.",
            "16 locaux, environ 480 m² ; 4 façades, 2 coupes, 3 vues 3D, 10 nomenclatures, 15 feuilles.",
            "Trois temps : modéliser (TD1 à TD3), coordonner (TD4 et TD5), dimensionner (TD6)."
          ],
          "pieges": [],
          "horsChamp": false
        }
      ]
    },
    {
      "id": "td1",
      "num": 1,
      "titre": "Prise en main : projet, niveaux et axes",
      "logiciel": "Revit 2026",
      "duree": "2 h",
      "niveauGcf": 3,
      "objectif": {
        "intro": "À la fin de ce TD, je saurai",
        "items": [
          "renseigner les informations du projet et régler les unités",
          "créer, renommer et caler les niveaux d’un cahier des charges",
          "renommer les vues sans renommer les niveaux",
          "tracer une grille d’axes avec l’outil Copier multiple et la coter",
          "placer les symboles d’élévation et naviguer en 3D"
        ]
      },
      "depart": "Aucun : nouveau projet à partir du Gabarit de construction (comme au TD 0).",
      "enonce": {
        "url": "media/bts-fed/td/TD1-revit-prise-en-main-etudiant.pdf?v=76ad0bfea1",
        "nom": "TD1-revit-prise-en-main-etudiant.pdf",
        "taille": 947750
      },
      "corrige": {
        "url": "media/bts-fed/td/TD1-revit-prise-en-main-corrige.pdf?v=34f022f39a",
        "nom": "TD1-revit-prise-en-main-corrige.pdf",
        "taille": 952695
      },
      "maquette": null,
      "videos": [
        {
          "id": "TD1-01-creer-et-parametrer-le-projet",
          "titre": "Créer et paramétrer le projet",
          "duree": 86,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-01-creer-et-parametrer-le-projet.mp4?v=201bd5558f",
          "taille": 3203858,
          "retenir": [
            "Fichier › Créer › Projet, avec le Gabarit de construction et l'option Projet.",
            "On enregistre tout de suite (Fichier › Enreg. sous › Projet), puis Ctrl + S après chaque étape.",
            "Gérer › Informations sur le projet : organisation, bâtiment, client, nom du projet, numéro ; elles alimentent les cartouches.",
            "Gérer › Unités : surfaces à 2 décimales et regroupement des chiffres à la française."
          ],
          "pieges": [
            "Cocher « Gabarit de projet » au lieu de « Projet » crée un gabarit.",
            "Les surfaces restent sans décimale si on oublie le format d'arrondi : les surfaces de locaux seront fausses à l'œil."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-02-preparer-les-niveaux",
          "titre": "Préparer les niveaux",
          "duree": 54,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-02-preparer-les-niveaux.mp4?v=d0490e78c0",
          "taille": 1961051,
          "retenir": [
            "Les niveaux se règlent en élévation : on ouvre Sud.",
            "On supprime les quatre niveaux de fondation avec une fenêtre de gauche à droite.",
            "Suppr : Revit prévient que les vues associées seront supprimées.",
            "Niveau 1 devient N00 ; Niveau 2 devient TOIT_ANNEXES, à 3550."
          ],
          "pieges": [
            "Une fenêtre tracée de droite à gauche sélectionne aussi N00.",
            "Dans l'avertissement, le bouton par défaut est Annuler : cliquer sur OK."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-03-creer-les-six-niveaux",
          "titre": "Créer les six niveaux",
          "duree": 119,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-03-creer-les-six-niveaux.mp4?v=5506eaabeb",
          "taille": 3705558,
          "retenir": [
            "Architecture › Référence › Niveau, dans l'élévation Sud, case « Créer une vue en plan » décochée.",
            "On trace large : un clic à gauche, un clic à droite.",
            "Revit nomme le niveau N01, N02… : on le renomme puis on tape sa cote exacte.",
            "Les étiquettes proches se chevauchent : c'est normal."
          ],
          "pieges": [
            "Un niveau tracé trop près d'un autre peut ne pas être créé.",
            "Si la case de la vue en plan est cochée, Revit crée des vues inutiles."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-04-renommer-les-vues",
          "titre": "Renommer les vues",
          "duree": 42,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-04-renommer-les-vues.mp4?v=2e9513271b",
          "taille": 1512337,
          "retenir": [
            "Dans l'arborescence : sélection, F2 (ou clic droit › Renommer).",
            "À la question de Revit : répondre Non, pour que le niveau garde son nom du cahier des charges.",
            "Les élévations deviennent Façade est, nord, ouest, sud."
          ],
          "pieges": [
            "Répondre Oui renomme aussi le niveau : Ctrl + Z."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-05-tracer-la-grille-daxes",
          "titre": "La grille d'axes",
          "duree": 66,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-05-tracer-la-grille-daxes.mp4?v=e905688f56",
          "taille": 1754703,
          "retenir": [
            "Quadrillage : un axe vertical, de bas en haut, bulle renommée A.",
            "Copier : Contraindre et Multiple ; on garde la souris loin à droite et on tape les distances : 4000, 3000, 5000 ×5.",
            "Revit nomme les copies B à H.",
            "Un axe horizontal, de droite à gauche : Revit l'appelle I, on le renomme 1, puis on copie 2500, 7500, 6000 : axes 2, 3, 4."
          ],
          "pieges": [
            "Pendant une copie multiple, la direction dépend de la position de la souris par rapport à la dernière copie : la garder du bon côté de toutes les copies.",
            "Si on supprime des axes, Revit continue la suite des lettres : renommer l'axe de départ pour repartir de A."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-06-coter-la-grille",
          "titre": "Coter la grille",
          "duree": 42,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-06-coter-la-grille.mp4?v=286977c62e",
          "taille": 1188712,
          "retenir": [
            "Annoter › Cote › Alignée : un clic par axe, puis un clic dans le vide pour poser la chaîne.",
            "Une cote totale A → H au-dessus, une chaîne et une cote totale 1 → 4 à gauche.",
            "Si une cote est fausse, on ne la retouche pas : on corrige l'axe par sa cote temporaire."
          ],
          "pieges": [
            "Cliquer sur les axes eux-mêmes, pas sur leurs bulles."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-07-symboles-delevation-et-3d",
          "titre": "Symboles d'élévation et navigation 3D",
          "duree": 51,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-07-symboles-delevation-et-3d.mp4?v=df79953080",
          "taille": 1872147,
          "retenir": [
            "Les symboles d'élévation du gabarit sont placés pour une petite maison : on les sort de la grille.",
            "Fenêtre de gauche à droite depuis le vide, puis glisser.",
            "Vue 3D : l'icône maison ; ViewCube : HAUT, puis clic droit › Aller au début.",
            "Maj + molette : orbite."
          ],
          "pieges": [
            "Si la fenêtre commence sur un axe, c'est l'axe qu'on déplace : Ctrl + Z."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-08-exercices-1-et-2",
          "titre": "Exercices 1 et 2",
          "duree": 48,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-08-exercices-1-et-2.mp4?v=34b851c0b1",
          "taille": 1810006,
          "retenir": [
            "Exercice 1 : niveau FOND_SEMELLES à -800, sans vue en plan ; altitude NGF : 110,15 − 0,80 = 109,35 ; profondeur sous le terrain naturel : 109,95 − 109,35 = 0,60 m, supérieure au hors-gel de 0,50 m.",
            "Exercice 2 : les cloisons ne sont pas sur les axes : on les repère par des plans de référence, calés par cote temporaire et nommés dans Propriétés (Nom, puis Appliquer).",
            "Axe le plus proche : X = 8 → C, 1 000 à l'est ; 10 → D, 2 000 à l'ouest ; 14 → D, 2 000 à l'est ; 20 → F, 2 000 à l'ouest.",
            "Un axe est un repère partagé de tout le projet ; un plan de référence est un repère de travail du modeleur."
          ],
          "pieges": [
            "Pour nommer un plan de référence : cliquer Appliquer après la saisie du nom."
          ],
          "horsChamp": false
        },
        {
          "id": "TD1-09-exercice-3-emprise",
          "titre": "Exercice 3 : l'emprise",
          "duree": 73,
          "voix": false,
          "url": "media/bts-fed/videos/TD1-09-exercice-3-emprise.mp4?v=80596c4dc0",
          "taille": 1739675,
          "retenir": [
            "32 × 16 = 512 m² entre axes.",
            "Au nu extérieur : (32 + 0,399) × (16 + 0,399) = 531,31 m².",
            "L'emprise au sol se mesure au nu extérieur : écart + 19,3 m² (+ 3,8 %) : la notice est à corriger et l'emprise autorisée par le PLU à vérifier."
          ],
          "pieges": [
            "Confondre surface entre axes et emprise au sol."
          ],
          "horsChamp": false
        }
      ]
    },
    {
      "id": "td2",
      "num": 2,
      "titre": "L'enveloppe : murs, sol et toitures-terrasses",
      "logiciel": "Revit 2026",
      "duree": "2 h",
      "niveauGcf": 3,
      "objectif": {
        "intro": "À la fin de ce TD, je saurai",
        "items": [
          "créer un type de mur composé (couches, fonction, matériau, épaisseur)",
          "tracer des murs sur les axes, avec un niveau de base et un niveau supérieur",
          "créer des cloisons de natures différentes (distributive, coupe-feu, acoustique)",
          "créer un plancher bas et des toitures-terrasses à partir d’un type composé",
          "calculer à la main la résistance thermique et le coefficient U d’une paroi, puis le comparer à Revit"
        ]
      },
      "depart": "TD2_depart.rvt (= corrigé du TD 1) ou votre fichier TD1_Escale_NOM.rvt.",
      "enonce": {
        "url": "media/bts-fed/td/TD2-revit-enveloppe-etudiant.pdf?v=46568ebea3",
        "nom": "TD2-revit-enveloppe-etudiant.pdf",
        "taille": 265783
      },
      "corrige": {
        "url": "media/bts-fed/td/TD2-revit-enveloppe-corrige.pdf?v=f076e9f343",
        "nom": "TD2-revit-enveloppe-corrige.pdf",
        "taille": 270902
      },
      "maquette": {
        "url": "media/bts-fed/depart/TD2_depart.rvt?v=f0a7bd2db1",
        "nom": "TD2_depart.rvt",
        "taille": 4104192
      },
      "videos": [
        {
          "id": "TD2-01-creer-le-mur-compose",
          "titre": "Créer le mur composé",
          "duree": 155,
          "voix": false,
          "url": "media/bts-fed/videos/TD2-01-creer-le-mur-compose.mp4?v=36ba4d9f8b",
          "taille": 10749818,
          "retenir": [
            "Un type de mur se crée en dupliquant un type existant (Générique - 200 mm), jamais en modifiant celui du gabarit.",
            "Dans « Modifier l'assemblage », la liste va de l'extérieur (en haut) à l'intérieur (en bas). Les deux lignes « Limite de la couche » encadrent le noyau.",
            "« Insérer » ajoute une couche au-dessus de la ligne sélectionnée ; pour passer sous le noyau, on utilise « Descendre ».",
            "Chaque couche : une fonction (Finition 1, Couche isolante/Lame d'air, Couche membrane, Structure, Finition 2), un matériau, une épaisseur.",
            "Un matériau neuf : on duplique un voisin et on saisit la conductivité λ dans l'onglet Thermique (0,045 pour l'ossature : λ équivalent qui tient compte des montants bois).",
            "Contrôle : épaisseur totale 399 mm ; avec les λ du tableau, Revit calcule R = 7,73 m²·K/W et U = 0,129 W/(m²·K), comme la maquette corrigée."
          ],
          "pieges": [
            "Dans la liste, l'extérieur est en haut : si on inverse, le bardage se retrouve à l'intérieur.",
            "Dans le navigateur de matériaux, cliquer d'abord dans la case de recherche avant de taper (sinon le texte part ailleurs) et taper le nom complet du matériau.",
            "Un matériau mal choisi change silencieusement R : toujours relire l'épaisseur totale et R en haut de la boîte (399 mm ; R = 7,7330 une fois les sept couches posées).",
            "La lame d'air (λ = 1,0) et le bardage (λ = 0,13) reçoivent une conductivité conventionnelle pour que Revit les compte dans R ; la méthode à la main de l'exercice 3 les ignore, d'où l'écart d'environ 2 %."
          ],
          "horsChamp": true
        },
        {
          "id": "TD2-02-tracer-les-deux-volumes",
          "titre": "Tracer les deux volumes",
          "duree": 58,
          "voix": false,
          "url": "media/bts-fed/videos/TD2-02-tracer-les-deux-volumes.mp4?v=1b9cda9cc0",
          "taille": 3278554,
          "retenir": [
            "Outil Mur, type MUR_EXT_01, ligne de justification : axe du mur. On clique sur les intersections d'axes, dans le sens horaire.",
            "Le niveau supérieur se choisit dans la barre d'options (Hauteur › niveau) ; le niveau de base dans les Propriétés (Contrainte inférieure).",
            "Volume haut (E2, E3) : jusqu'à ACRO_SALLE, 7,20 m. Volume bas (E1, E4, E5, E6) : jusqu'à ACRO_ANNEXES, 3,85 m. E7 et E8 : de TOIT_ANNEXES à ACRO_SALLE.",
            "Un seul appui sur Échap termine une chaîne de murs ; un second quitte l'outil."
          ],
          "pieges": [
            "Un clic hors des intersections : le mur n'est pas calé sur les axes (Revit affiche « Intersection » quand le point est bon).",
            "Après E7 et E8, Revit prévient qu'aucun élément créé n'est visible dans le plan RDC : normal, ces murs démarrent à 3,55 m.",
            "Deux appuis sur Échap quittent l'outil Mur : les clics suivants ne tracent plus rien."
          ],
          "horsChamp": false
        },
        {
          "id": "TD2-03-les-cloisons",
          "titre": "Les cloisons",
          "duree": 114,
          "voix": false,
          "url": "media/bts-fed/videos/TD2-03-les-cloisons.mp4?v=f95b1c6906",
          "taille": 6960639,
          "retenir": [
            "Un type de cloison se crée en dupliquant « Générique - 200 mm », comme MUR_EXT_01 : on règle les couches de l'extérieur vers l'intérieur.",
            "Dans la boîte d'assemblage, les épaisseurs se saisissent avec un POINT décimal (12.5), pas une virgule.",
            "CLO_01 : BA13 12,5 + ossature et laine 47 + BA13 12,5 = 72 mm. CLO_EI60 : 130 mm. CLO_ACOU : 160 mm.",
            "Hauteur d'une cloison : niveau supérieur « Sans contrainte » puis la valeur (3000 pour les distributives et coupe-feu, 3550 pour les séparatifs)."
          ],
          "pieges": [
            "Taper 12,5 avec une virgule dans la boîte d'assemblage : Revit répond « Veuillez entrer une valeur ou une formule commençant par = ».",
            "Dupliquer à partir du dernier type utilisé (MUR_EXT_01) au lieu de Générique - 200 mm : la cloison hérite de sa composition."
          ],
          "horsChamp": true
        },
        {
          "id": "TD2-04-le-plancher-bas",
          "titre": "Le plancher bas",
          "duree": 130,
          "voix": false,
          "url": "media/bts-fed/videos/TD2-04-le-plancher-bas.mp4?v=ac1fb4724e",
          "taille": 7775169,
          "retenir": [
            "Architecture › Sol, puis Modifier le type : on duplique « Générique 150 mm - Plein » et on le nomme PB_01.",
            "Du haut vers le bas : revêtement 20 (Finition 1), chape 60 (Substrat), dallage béton armé 160 (Structure, le noyau), PSE 160 (couche isolante), hérisson 200 (Finition 2) = 600 mm.",
            "Contour : outil Rectangle de A1 à H4, niveau N00, puis la coche verte. Surface : 512 m².",
            "Revit calcule R = 5,46 m²·K/W et U = 0,183 W/(m²·K) avec les λ du cahier des charges."
          ],
          "pieges": [
            "Un coin accroché à la face d'un mur au lieu de l'intersection d'axes donne 511,38 m² : taper SI (accrochage aux intersections) juste avant le clic.",
            "Les couches d'un sol se lisent de haut en bas : le haut du sol est en haut de la liste.",
            "Dans cette vidéo, les matériaux (revêtement, chape, béton, PSE, hérisson) ont été créés à l'avance avec leur conductivité."
          ],
          "horsChamp": false
        },
        {
          "id": "TD2-05-les-toitures-terrasses",
          "titre": "Les toitures-terrasses",
          "duree": 124,
          "voix": false,
          "url": "media/bts-fed/videos/TD2-05-les-toitures-terrasses.mp4?v=373a6c22a8",
          "taille": 7027519,
          "retenir": [
            "Architecture › Toit › Toit par tracé, case Inclinaison décochée : toiture plate.",
            "TT_SALLE se compose de bas en haut : CLT 100 (structure), pare-vapeur 4, laine de roche 300, étanchéité 8 = 412 mm. R = 8,51 m²·K/W.",
            "Niveau de base TOIT_SALLE, décalage −412 : l'épaisseur est comptée sous le niveau, le dessus de l'étanchéité est à 6,85 m.",
            "TT_ANNEXES (654 mm, base TOIT_ANNEXES, décalage −554) se fait de la même façon.",
            "Les murs montent plus haut que les toits : la différence est l'acrotère (350 mm pour la salle).",
            "Revit propose d'attacher les murs au toit : répondre Ne pas attacher."
          ],
          "pieges": [
            "Répondre « Attacher » à la question de Revit : les murs sont raccourcis au toit et l'acrotère disparaît.",
            "Choisir le niveau de base dans la liste à la souris : un clic tombe sur le mauvais niveau (TOIT_ANNEXES au lieu de TOIT_SALLE). Taper le nom au clavier, puis Entrée, est plus sûr.",
            "Un contour tracé à la main peut manquer l'intersection d'axes de quelques millimètres : vérifier la surface (250 m² pour TT_SALLE, 262 m² pour TT_ANNEXES)."
          ],
          "horsChamp": true
        },
        {
          "id": "TD2-06-exercices-1-et-2",
          "titre": "Exercices 1 et 2",
          "duree": 97,
          "voix": false,
          "url": "media/bts-fed/videos/TD2-06-exercices-1-et-2.mp4?v=d133f7d95e",
          "taille": 2651002,
          "retenir": [
            "CLO_EI60 : 4 plaques de 15 mm et une âme de 70 mm = 130 mm ; l'âme (fonction Structure) définit l'axe.",
            "CLO_ACOU : 4 × 12,5 + 2 × 48 = 146 mm ; 160 − 146 = 14 mm, le vide d'air de désolidarisation entre les deux ossatures.",
            "Deux ossatures séparées évitent le pont acoustique d'une ossature unique (objectif du cahier des charges : Rw + C = 55 dB).",
            "On contrôle toujours la largeur affichée du type dans Revit."
          ],
          "pieges": [
            "Oublier que les plaques sont doubles de chaque côté : compter 2 plaques au lieu de 4.",
            "Confondre la somme des couches connues (146) avec l'épaisseur totale (160)."
          ],
          "horsChamp": false
        },
        {
          "id": "TD2-07-exercice-3-calcul-de-r-et-u",
          "titre": "Exercice 3 : R et U",
          "duree": 106,
          "voix": false,
          "url": "media/bts-fed/videos/TD2-07-exercice-3-calcul-de-r-et-u.mp4?v=c2807368e0",
          "taille": 3854897,
          "retenir": [
            "R = somme de e / λ des couches situées avant la lame d'air ventilée ; ossature : λ équivalent 0,045 (montants bois compris).",
            "À la main : R = 0,100 + 1,184 + 4,889 + 1,364 = 7,54 m²·K/W ; U = 1 / 7,54 = 0,133 W/(m²·K).",
            "Revit : R = 7,73 et U = 0,129 : environ 2 % d'écart, car Revit compte aussi la lame d'air (0,027) et le bardage (0,169).",
            "Sans les montants (λ = 0,038) : R = 8,44 et U = 0,118, environ 11 % trop bas.",
            "Dans tous les cas U ≈ 0,13 < 0,16 : objectif atteint, marge d'environ 20 %."
          ],
          "pieges": [
            "Prendre λ = 0,038 pour toute l'ossature : on sous-estime U d'environ 11 %.",
            "Oublier de convertir l'épaisseur en mètres avant de diviser par λ."
          ],
          "horsChamp": false
        }
      ]
    },
    {
      "id": "td3",
      "num": 3,
      "titre": "Menuiseries, faux plafonds et locaux",
      "logiciel": "Revit 2026",
      "duree": "2 h",
      "niveauGcf": 3,
      "objectif": {
        "intro": "À la fin de ce TD, je saurai",
        "items": [
          "créer des types de portes et de fenêtres à partir de dimensions données",
          "poser les portes dans le bon sens d’ouverture et les fenêtres à la bonne hauteur d’allège",
          "créer des faux plafonds par zone, à la bonne hauteur",
          "créer, nommer et étiqueter les locaux, puis en tirer une nomenclature",
          "contrôler une capacité d’évacuation à partir d’une nomenclature de portes"
        ]
      },
      "depart": "TD3_depart.rvt (= corrigé du TD 2) ou votre fichier TD2_Escale_NOM.rvt.",
      "enonce": {
        "url": "media/bts-fed/td/TD3-revit-menuiseries-locaux-etudiant.pdf?v=9dcc098864",
        "nom": "TD3-revit-menuiseries-locaux-etudiant.pdf",
        "taille": 231801
      },
      "corrige": {
        "url": "media/bts-fed/td/TD3-revit-menuiseries-locaux-corrige.pdf?v=9816a9c942",
        "nom": "TD3-revit-menuiseries-locaux-corrige.pdf",
        "taille": 235248
      },
      "maquette": {
        "url": "media/bts-fed/depart/TD3_depart.rvt?v=9299543b7f",
        "nom": "TD3_depart.rvt",
        "taille": 4210688
      },
      "videos": [
        {
          "id": "TD3-01-types-de-portes",
          "titre": "Les types de portes",
          "duree": 47,
          "voix": false,
          "url": "media/bts-fed/videos/TD3-01-types-de-portes.mp4?v=0fcf34eaa5",
          "taille": 2910108,
          "retenir": [
            "La largeur nominale d'un bloc-porte vaut le passage libre (PL) + 0,10 m : PL 1,40 m donne un bloc de 1,50 m.",
            "La famille de porte du gabarit n'a qu'un vantail : on crée un type par largeur en dupliquant un type existant.",
            "Architecture › Porte, puis Modifier le type › Dupliquer ; on règle le champ Largeur (1500, 1700, 1000).",
            "La hauteur reste celle du type de base (2134 mm)."
          ],
          "pieges": [
            "Saisir la largeur nominale sans ajouter 0,10 m : le passage libre serait trop étroit pour les unités de passage.",
            "Oublier de cliquer sur Appliquer avant de dupliquer le type suivant : la largeur n'est pas enregistrée."
          ],
          "horsChamp": false
        },
        {
          "id": "TD3-02-poser-les-portes",
          "titre": "Poser les portes dans le bon sens",
          "duree": 34,
          "voix": false,
          "url": "media/bts-fed/videos/TD3-02-poser-les-portes.mp4?v=2a27c420e4",
          "taille": 1395833,
          "retenir": [
            "Outil Porte : on survole le mur du côté où la porte doit s'ouvrir, puis un clic ; Revit affiche des cotes temporaires pour la position.",
            "Le côté du mur survolé fixe le sens d'ouverture ; la barre d'espace inverse les paumelles (gauche/droite) avant de cliquer.",
            "P01, P04 et P05 s'ouvrent vers l'extérieur (survol par l'extérieur) ; P02 s'ouvre vers le sas ; P03 s'ouvre vers le hall, donc dans le sens de la sortie de la salle.",
            "La position se règle sur la cote temporaire du tableau (colonne « Position »)."
          ],
          "pieges": [
            "Une porte posée du mauvais côté s'ouvre dans le mauvais sens : la sélectionner et inverser avec les flèches de retournement.",
            "Les cloisons ne font que 72 ou 130 mm : à l'échelle 1:100 elles ne font que 2 pixels, survoler précisément ou zoomer avant de cliquer.",
            "Pour la porte P03 (X = 7 m), Revit peut choisir le mur extérieur E7 comme hôte au lieu de la cloison CLO_ACOU : vérifier dans les propriétés que l'hôte est bien la cloison."
          ],
          "horsChamp": true
        },
        {
          "id": "TD3-03-les-fenetres",
          "titre": "Créer et poser les fenêtres",
          "duree": 39,
          "voix": false,
          "url": "media/bts-fed/videos/TD3-03-les-fenetres.mp4?v=5942938847",
          "taille": 2039958,
          "retenir": [
            "Architecture › Fenêtre › Modifier le type : on duplique « Fixe » et on règle Hauteur et Largeur ; un type par fenêtre du cahier des charges.",
            "La hauteur de l'appui (allège) se règle dans les Propriétés, avant de poser : 0,50 m pour F01 à F03, 0,90 m pour F05.",
            "Hauteur sous linteau = allège + hauteur : F01 = 0,50 + 2,50 = 3,00 m ; F04 = 4,20 + 1,00 = 5,20 m.",
            "Le côté survolé du mur fixe l'orientation : on survole par l'extérieur ; une fenêtre posée à l'envers se retourne avec les flèches.",
            "Le bandeau F04 : un châssis puis l'outil Réseau (6 châssis de 3,00 m, de X = 9,50 à 24,50)."
          ],
          "pieges": [
            "Une fenêtre posée côté intérieur est à l'envers : inverser avec les flèches de retournement.",
            "Oublier de régler l'allège avant la pose : la fenêtre arrive à l'allège du type de base (0,915 m).",
            "Un message « Identifiant dupliquées » apparaît si plusieurs fenêtres portent la même marque (les six châssis F04) : sans gravité, cliquer OK."
          ],
          "horsChamp": true
        },
        {
          "id": "TD3-04-les-faux-plafonds",
          "titre": "Les faux plafonds",
          "duree": 32,
          "voix": false,
          "url": "media/bts-fed/videos/TD3-04-les-faux-plafonds.mp4?v=9580ca8d83",
          "taille": 1371464,
          "retenir": [
            "On travaille dans le plan de plafond N00 : Architecture › Plafond, puis Plafond automatique (un clic dans une zone fermée) ou Esquisse.",
            "Le décalage par rapport au niveau (« Hauteur depuis le niveau ») donne la sous-face du faux plafond : 2700 pour les annexes, 2950 pour le hall et le local CVC, 5500 pour la salle et la scène.",
            "Un type par famille de plafond : FP_MIN (20 mm), FP_BOIS (25), FP_SALLE (40), FP_HYD, FP_ALIM, PL_EI60 (coupe-feu).",
            "Conflit : le cahier des charges demande 3,00 m sous plafond au hall, mais la sous-face de la toiture des annexes est à 3,55 − 0,554 = 2,996 m : on ramène le plafond à 2,95 m."
          ],
          "pieges": [
            "Un faux plafond à 3,00 m dépasserait de 4 mm la sous-face de la toiture : Revit l'accepte, mais le plafond « perce » la toiture. Le local CVC à 3,20 m est impossible pour la même raison.",
            "Le plafond automatique suit les murs : si une ouverture (porte, retour de cloison) laisse deux locaux communiquer, le plafond couvre les deux (49,68 m² dans le hall au lieu de 43,5 m² car le vestiaire est ouvert). Il faut fermer les limites ou tracer le contour à la main."
          ],
          "horsChamp": true
        },
        {
          "id": "TD3-05-les-locaux",
          "titre": "Créer et nommer les locaux",
          "duree": 22,
          "voix": false,
          "url": "media/bts-fed/videos/TD3-05-les-locaux.mp4?v=063ee51047",
          "taille": 822262,
          "retenir": [
            "Architecture › Pièce : la barre d'options fixe la Limite supérieure (niveau) et le Décalage (hauteur du faux plafond du local).",
            "Un clic dans une zone fermée par des murs crée la pièce ; Revit l'étiquette à l'insertion. On saisit ensuite le numéro et le nom.",
            "Hauteurs des locaux : 2700 pour les annexes, 2950 pour le hall et le local CVC, 5500 pour la salle et la scène.",
            "Surface de la salle polyvalente R05 : 193,5 m² ; du hall R03 : 41,4 m² ; la somme des 16 locaux fait environ 481 m².",
            "Quand deux zones communiquent sans mur (comptoir du vestiaire, scène ouverte sur la salle), on ajoute un séparateur de pièces."
          ],
          "pieges": [
            "Une pièce « non entourée » reste sans surface : fermer les limites ou ajouter un séparateur de pièces.",
            "Saisir 5500 dans le décalage au lieu de la limite supérieure : le volume des pièces est faux. Régler les deux."
          ],
          "horsChamp": true
        },
        {
          "id": "TD3-06-nomenclature-des-locaux",
          "titre": "La nomenclature des locaux",
          "duree": 68,
          "voix": false,
          "url": "media/bts-fed/videos/TD3-06-nomenclature-des-locaux.mp4?v=1dc631c692",
          "taille": 3290404,
          "retenir": [
            "Vue › Nomenclatures › Nomenclature/Quantités ; catégorie Pièces ; nom NOM-01 Nomenclature des locaux.",
            "Champs : Numéro, Nom, Surface, Périmètre, Volume. Tri par Numéro. Totaux généraux activés et « Calculer les totaux » sur la surface.",
            "Total général : 16 locaux, 481 m².",
            "Si la nomenclature est vide : vérifier sa propriété Phase (Revit propose la dernière phase, Phase 3) et choisir Phase 1."
          ],
          "pieges": [
            "Nomenclature vide : la phase de la nomenclature (Phase 3 par défaut) n'est pas celle des pièces (Phase 1).",
            "Colonne Volume « Non calculée » : activer le calcul des volumes (Architecture › Pièce et surface › Calculs de surface et de volume).",
            "Une pièce non placée ou non entourée reste dans la liste avec une surface nulle : la supprimer ou fermer ses limites.",
            "Dans la boîte « Champs », la zone de recherche du nom du paramètre évite de chercher dans une longue liste."
          ],
          "horsChamp": false
        },
        {
          "id": "TD3-07-exercices",
          "titre": "Les exercices",
          "duree": 104,
          "voix": false,
          "url": "media/bts-fed/videos/TD3-07-exercices.mp4?v=814009df69",
          "taille": 2690781,
          "retenir": [
            "Densité de la salle : 193,5 / 205 = 0,94 m² par personne, soit 1,06 personne par m² ; avec la scène (222,0 m²) : 1,08 m² par personne.",
            "Portes de façade : 4 × 1,40 + 1,60 + 2 × 0,90 = 9,00 m de passage cumulé ; unités de passage : 2 + 2 + 2 + 1 = 7 UP.",
            "Règle simplifiée du sujet (pas la réglementation) : au moins deux sorties et 1 UP pour 100 personnes, arrondi au supérieur : 205 personnes donnent 3 UP.",
            "La salle a 4 sorties et 7 UP : conforme ; sans P04 et P05 il reste 3 UP et 2 sorties : juste conforme, sans marge."
          ],
          "pieges": [
            "Confondre largeur nominale et passage libre : les exercices utilisent le passage libre.",
            "Présenter la règle d'évacuation comme la réglementation : c'est une règle simplifiée du sujet, à remplacer par les textes en vigueur."
          ],
          "horsChamp": false
        }
      ]
    },
    {
      "id": "td4",
      "num": 4,
      "titre": "Le réseau aéraulique de la CTA_02",
      "logiciel": "Revit 2026",
      "duree": "2 h",
      "niveauGcf": 3,
      "objectif": {
        "intro": "À la fin de ce TD, je saurai",
        "items": [
          "transférer des normes de projet (types de conduits, systèmes) depuis un autre fichier",
          "charger des familles et poser une centrale et des bouches à des coordonnées données",
          "créer un système de reprise et le relier à la centrale",
          "tracer des gaines circulaires à la bonne altitude",
          "lire les débits et les vitesses et les comparer à la règle du projet (5 m/s au plus)"
        ]
      },
      "depart": "TD4_depart.rvt (= corrigé du TD 3), Normes_CVC.rvt et les trois familles TD_*.rfa (dossier ressources).",
      "enonce": {
        "url": "media/bts-fed/td/TD4-revit-reseau-aeraulique-etudiant.pdf?v=0519309e62",
        "nom": "TD4-revit-reseau-aeraulique-etudiant.pdf",
        "taille": 249185
      },
      "corrige": {
        "url": "media/bts-fed/td/TD4-revit-reseau-aeraulique-corrige.pdf?v=2fa8a9c9f6",
        "nom": "TD4-revit-reseau-aeraulique-corrige.pdf",
        "taille": 254954
      },
      "maquette": {
        "url": "media/bts-fed/depart/TD4_depart.rvt?v=350ec2bb8a",
        "nom": "TD4_depart.rvt",
        "taille": 5361664
      },
      "videos": [
        {
          "id": "TD4-01-normes-unites-vue-plenum",
          "titre": "Préparer le projet pour la CVC",
          "duree": 61,
          "voix": false,
          "url": "media/bts-fed/videos/TD4-01-normes-unites-vue-plenum.mp4?v=ca858f47b7",
          "taille": 4108926,
          "retenir": [
            "Normes_CVC.rvt est ouvert en même temps que notre projet ; dans notre projet : Gérer › Transférer les normes du projet › Copier depuis Normes_CVC.",
            "Les types de conduits, de raccords et de systèmes (Reprise, Soufflage…) arrivent dans le projet ; quand des types existent déjà, on garde les versions du projet.",
            "Unités CVC : Gérer › Unités, discipline CVC ; débit en m³/h sans décimale (sinon Revit affiche des L/s), vitesse en m/s.",
            "Vue de travail : dupliquer Plan RDC (clic droit › Dupliquer la vue › Dupliquer), la renommer « CVC - Plénum annexes » et régler sa plage de vue : coupe à 2840, haut à 3500, bas à 2000."
          ],
          "pieges": [
            "Revit affiche le débit en L/s par défaut : on croit lire 400 et c'est 111.",
            "Dans la boîte « Duplication des types », Revit propose parfois Remplacer ou Conserver existant : conserver l'existant pour ne pas modifier les types du projet.",
            "Le transfert des normes prend une à deux minutes ; la barre de progression en bas de la fenêtre indique l'avancement."
          ],
          "horsChamp": true
        },
        {
          "id": "TD4-02-la-cta-et-les-bouches",
          "titre": "La CTA et les cinq bouches",
          "duree": 37,
          "voix": false,
          "url": "media/bts-fed/videos/TD4-02-la-cta-et-les-bouches.mp4?v=514060f783",
          "taille": 1636557,
          "retenir": [
            "Insérer › Charger la famille : TD_CTA double flux, TD_Bouche extraction D125 et TD_Bouche soufflage D160.",
            "Systèmes › Équipement de génie climatique : on pose la CTA dans le local R17 ; position : centre X = 29,30 ; Y = 10,70. Les piquages sont à Z = 1,30 : soufflage X = 29,05 et reprise X = 29,55 (Y = 10,50), soit 0,50 m entre les axes.",
            "Systèmes › Bouche d'aération : type TD_Bouche extraction D125, élévation 2700, débit 90 / 105 / 30 / 100 / 75 m³/h, piquage orienté (est, sud ou nord).",
            "Somme des débits des cinq bouches : 400 m³/h."
          ],
          "pieges": [
            "La CTA doit être posée dans le bon local (R17) : sinon la nomenclature lui associe un mauvais local.",
            "L'outil Bouche d'aération reprend le dernier type utilisé : ici « TD_Bouche soufflage D160 » : vérifier le type dans le sélecteur avant de cliquer.",
            "Un clic à la souris ne tombe jamais à la coordonnée exacte : on corrige ensuite la position (cotes temporaires ou coordonnées)."
          ],
          "horsChamp": true
        },
        {
          "id": "TD4-03-le-systeme-de-reprise",
          "titre": "Le système de reprise",
          "duree": 34,
          "voix": false,
          "url": "media/bts-fed/videos/TD4-03-le-systeme-de-reprise.mp4?v=31b6110f62",
          "taille": 1176318,
          "retenir": [
            "On sélectionne les cinq bouches (clic puis Ctrl + clic), puis Créer des systèmes › Gaine.",
            "Dans la boîte : type de système Reprise, nom « CTA_02 - Reprise annexes », case « Ouvrir dans l'éditeur de système » cochée.",
            "Dans l'éditeur : Sélect. équipement, puis un clic sur la CTA ; Finir.",
            "Contrôle dans les Propriétés du système : nombre d'éléments 5, débit 400 m³/h."
          ],
          "pieges": [
            "La CTA doit être visible dans la vue pour être désignée : la plage de vue de « CVC - Plénum annexes » est réglée à bas = 0 (la CTA monte à 1,30 m, sous le plan de coupe à 2840).",
            "Dans la boîte « Créer un système de gaines », il faut vérifier le type de système (Reprise) avant de valider.",
            "On peut quitter l'éditeur sans équipement : le système existe mais n'est pas rattaché à la CTA ; l'onglet « Systèmes de gaines » permet de le faire ensuite."
          ],
          "horsChamp": false
        },
        {
          "id": "TD4-04-les-gaines",
          "titre": "Les gaines",
          "duree": 33,
          "voix": false,
          "url": "media/bts-fed/videos/TD4-04-les-gaines.mp4?v=9290401dc3",
          "taille": 1246293,
          "retenir": [
            "Systèmes › Gaine ; type Gaine circulaire › Té / Coude segmenté ; Diamètre 200 pour le tronc, 125 pour les antennes.",
            "Élévation centrale = 2840 : c'est l'axe de la gaine. Une gaine Ø200 occupe donc de 2740 à 2940, juste sous la sous-face de la toiture (2996).",
            "Le tracé : on part du piquage de reprise de la CTA (X = 29,55), on monte à 2840, on va jusqu'à Y = 11,60, puis vers l'ouest jusqu'à la bouche R10 (X = 1,68). Les antennes Ø125 relient R11, R12, R14 (par le sud) et R07 (par le nord).",
            "Revit crée les raccords (coudes, tés) tout seul ; le réseau est relié aux bouches et à la CTA : un seul système, 400 m³/h."
          ],
          "pieges": [
            "Un conduit posé à l'altitude par défaut (2743) heurte le faux plafond : régler l'élévation centrale à 2840 avant de tracer.",
            "Une antenne mal raccordée laisse un connecteur ouvert : vérifier que chaque bouche est reliée au tronc.",
            "Une vue 3D « 3D - Réseau CTA_02 » (sans toitures ni plafonds) a été créée pour contrôler le résultat."
          ],
          "horsChamp": true
        },
        {
          "id": "TD4-05-debits-et-vitesses",
          "titre": "Lire les débits et les vitesses",
          "duree": 41,
          "voix": false,
          "url": "media/bts-fed/videos/TD4-05-debits-et-vitesses.mp4?v=f384242540",
          "taille": 2277591,
          "retenir": [
            "On sélectionne un tronçon de gaine : la palette Propriétés donne Débit et Vitesse (groupe Génie climatique, en faisant défiler).",
            "Tronçon du tronc après l'antenne R07 : 325 m³/h ; Ø200 ; vitesse 2,87 m/s. Près de R10 (Ø125) : 90 m³/h ; 2,04 m/s. Le système entier : 400 m³/h ; 3,54 m/s dans la montée Ø200 de la CTA.",
            "Règle du projet : vitesse ≤ 5 m/s : toutes les gaines la respectent.",
            "L'avertissement « Aucune déperdition définie » sur les bouches est normal : les familles du TD n'ont pas de perte de charge. On contrôle les vitesses, pas les pressions."
          ],
          "pieges": [
            "Lire le débit sur un raccord (coude, té) au lieu de la gaine : sélectionner la gaine (cliquer au milieu d'un tronçon).",
            "Débit en L/s : c'est le réglage des unités CVC (étape 2).",
            "Le tronçon juste au départ de la CTA est très court (coude et té) : on lit le débit total (400 m³/h) dans les Propriétés du système."
          ],
          "horsChamp": false
        },
        {
          "id": "TD4-06-exercices-1-et-2",
          "titre": "Exercices 1 et 2",
          "duree": 80,
          "voix": false,
          "url": "media/bts-fed/videos/TD4-06-exercices-1-et-2.mp4?v=f690bb5480",
          "taille": 2205459,
          "retenir": [
            "Débit cumulé le long du tronc, de l'ouest vers l'est : 90, 195, 225, 325, 400 m³/h.",
            "Section minimale pour 5 m/s : S = Q / (3600 × 5) ; diamètre minimal : de 79,8 mm (90 m³/h) à 168,2 mm (400 m³/h).",
            "Vitesse à 400 m³/h : Ø160 → 5,53 m/s (trop) ; Ø200 → 3,54 m/s ; Ø250 → 2,26 m/s.",
            "On retient Ø200 : Ø160 dépasse 5 m/s et fait du bruit ; Ø250 est plus cher et ne passe pas dans un plénum de 30 cm.",
            "Pour 325 m³/h, Ø160 suffirait (4,49 m/s) : le corrigé garde Ø200 pour la simplicité."
          ],
          "pieges": [
            "Oublier de diviser par 3600 : le débit en m³/h doit être converti en m³/s.",
            "Confondre diamètre et rayon dans la section S = π D² / 4."
          ],
          "horsChamp": false
        },
        {
          "id": "TD4-07-exercice-3-taux-de-renouvellement",
          "titre": "Exercice 3",
          "duree": 54,
          "voix": false,
          "url": "media/bts-fed/videos/TD4-07-exercice-3-taux-de-renouvellement.mp4?v=3726240e7e",
          "taille": 1475829,
          "retenir": [
            "Taux de renouvellement horaire : n = Q / V (V = volume du local en m³), hauteur sous plafond 2,70 m.",
            "Volumes : R10 58,6 m³ ; R11 60,8 ; R12 14,9 ; R14 60,0 ; R07 24,2. Taux : 1,54 ; 1,73 ; 2,02 ; 1,67 ; 3,10 volumes par heure.",
            "La loge (R07) est la plus renouvelée : des artistes y séjournent ; le local ménage suit à cause de ses produits.",
            "La CTA_02 (600 m³/h) ne reprend que 400 m³/h dans les annexes : la différence est une marge de capacité ; le hall et la salle ont leur propre ventilation (hors périmètre)."
          ],
          "pieges": [
            "Utiliser la surface au lieu du volume : n = Q / V, pas Q / S.",
            "Oublier que la hauteur sous plafond est 2,70 m dans les annexes (et 5,50 m dans la salle)."
          ],
          "horsChamp": false
        }
      ]
    },
    {
      "id": "td5",
      "num": 5,
      "titre": "Documenter et coordonner : feuilles, interférences, IFC",
      "logiciel": "Revit 2026",
      "duree": "2 h",
      "niveauGcf": 3,
      "objectif": {
        "intro": "À la fin de ce TD, je saurai",
        "items": [
          "créer une coupe sur le plénum et la coter",
          "étiqueter des éléments et créer des nomenclatures (bouches, métré des gaines)",
          "mettre en page une feuille avec plusieurs vues et une nomenclature",
          "détecter des interférences entre le réseau et le bâtiment, et les classer",
          "exporter la feuille en PDF et le modèle en IFC4"
        ]
      },
      "depart": "TD5_depart.rvt (= corrigé du TD 4) ou votre fichier TD4_Escale_NOM.rvt.",
      "enonce": {
        "url": "media/bts-fed/td/TD5-revit-documenter-coordonner-etudiant.pdf?v=003c5e1057",
        "nom": "TD5-revit-documenter-coordonner-etudiant.pdf",
        "taille": 222757
      },
      "corrige": {
        "url": "media/bts-fed/td/TD5-revit-documenter-coordonner-corrige.pdf?v=a5d31e5d94",
        "nom": "TD5-revit-documenter-coordonner-corrige.pdf",
        "taille": 225683
      },
      "maquette": {
        "url": "media/bts-fed/depart/TD5_depart.rvt?v=31b030f235",
        "nom": "TD5_depart.rvt",
        "taille": 10219520
      },
      "videos": [
        {
          "id": "TD5-01-coupe-et-cote-du-plenum",
          "titre": "La coupe et la cote du plénum",
          "duree": 30,
          "voix": false,
          "url": "media/bts-fed/videos/TD5-01-coupe-et-cote-du-plenum.mp4?v=c855f7977e",
          "taille": 943063,
          "retenir": [
            "Vue › Coupe, dans la vue CVC - Plénum annexes : trait de coupe perpendiculaire au tronc, à X = 12 m, de Y = 8 à Y = 17, en regardant vers l'ouest.",
            "On nomme la coupe « Coupe CC - Plénum », échelle 1 : 20, niveau de détail Élevé, emprise limitée aux annexes.",
            "On voit de bas en haut : le sol, le faux plafond (2,70 m), la bouche, la gaine Ø200 dans le plénum, la sous-face de la toiture (3,55 − 0,554 = 2,996 m).",
            "Cote alignée entre la sous-face du faux plafond et celle de la toiture : plénum de 296 mm ; espace libre au-dessus de la gaine Ø200 : 56 mm."
          ],
          "pieges": [
            "Tracer la coupe de gauche à droite au lieu de bas en haut : on regarde dans l'autre sens.",
            "Dans la cote alignée, cliquer sur la face (arête) du faux plafond et non sur son plan médian : la valeur est fausse."
          ],
          "horsChamp": true
        },
        {
          "id": "TD5-02-etiquettes-et-nomenclatures",
          "titre": "Étiqueter et nomenclaturer le réseau",
          "duree": 30,
          "voix": false,
          "url": "media/bts-fed/videos/TD5-02-etiquettes-et-nomenclatures.mp4?v=0b3f87ca18",
          "taille": 1239623,
          "retenir": [
            "Annoter › Étiquette › Tout étiqueter : la boîte ne propose que les catégories dont une famille d'étiquette est chargée. Ici, aucune étiquette CVC n'est chargée : on annote avec des notes de texte (Annoter › Texte).",
            "Notes ajoutées : bouches (« R10 · 90 m³/h »), gaines (« Ø200 · 325 m³/h »), CTA (« CTA_02 · 600 m³/h »).",
            "Vue › Nomenclatures › Nomenclature/Quantités : NOM-11 (catégorie Terminaux d'air ; champs Repère, Local, Débit, Élévation ; total 400 m³/h) et Métré des gaines (catégorie Conduits ; champs Nom du système, Diamètre, Longueur ; total 28,78 m).",
            "Si la nomenclature est vide : régler sa propriété Phase sur Phase 1."
          ],
          "pieges": [
            "Chercher une étiquette CVC dans « Tout étiqueter » alors qu'aucune famille n'est chargée : la liste ne propose que portes, fenêtres, pièces… (Insérer › Charger la famille pour en ajouter).",
            "Métré par occurrence au lieu de par diamètre : décocher « Détailler chaque occurrence »."
          ],
          "horsChamp": true
        },
        {
          "id": "TD5-03-la-feuille-c-401",
          "titre": "La feuille C-401",
          "duree": 22,
          "voix": false,
          "url": "media/bts-fed/videos/TD5-03-la-feuille-c-401.mp4?v=f66de843e0",
          "taille": 906897,
          "retenir": [
            "Vue › Composition de feuille › Feuille : cartouche A1, numéro C-401, nom « Réseau CTA_02 — plénum des annexes ».",
            "On place sur la feuille, par glisser-déposer depuis l'arborescence : le plan CVC - Plénum annexes, la vue 3D - Réseau CTA_02, la coupe CC et la nomenclature NOM-11.",
            "Échelles lisibles : plan 1 : 100, 3D 1 : 150, coupe 1 : 20. À 1 : 50, le plan fait 64 cm de large : il ne tient pas avec la 3D sur une feuille A1.",
            "Le cartouche reprend les informations du projet renseignées au TD 1."
          ],
          "pieges": [
            "Une vue ne peut figurer que sur une seule feuille : pour la montrer ailleurs, il faut la dupliquer (Dupliquer avec détails).",
            "Une vue sans emprise définie envahit la feuille : activer « Recadrer la vue ».",
            "Le fichier du TD 1 n'avait pas de nom de projet renseigné dans les informations du projet : elles ont été complétées (L'Escale, ERP-L-2026-01, commune de Saint-Aubin-sur-Loire) pour que le cartouche soit lisible."
          ],
          "horsChamp": true
        },
        {
          "id": "TD5-04-gaine-detude-et-interferences",
          "titre": "Coordonner : les interférences",
          "duree": 33,
          "voix": false,
          "url": "media/bts-fed/videos/TD5-04-gaine-detude-et-interferences.mp4?v=96fb4f68aa",
          "taille": 1392863,
          "retenir": [
            "Le bureau d'études de la salle étudie un second réseau, CTA_01 : une gaine circulaire Ø200, axe à 2840, de X = 3,00 à X = 24,00 m, à Y = 13,50 m, système Soufflage.",
            "Elle traverse la bande nord d'ouest en est : elle croise les cloisons des annexes.",
            "Collaborer › Coordonner › Vérification des interférences › Exécuter : catégories Gaine (à gauche) et Murs (à droite), puis OK.",
            "Le rapport liste chaque couple d'éléments en conflit ; « Afficher » les montre dans la vue. La gaine d'étude CTA_01 percute 5 cloisons : à X = 4 (CLO_01) et à X = 8, 10, 14 et 20 (CLO_EI60). Le rapport contient aussi les traversées du tronc CTA_02."
          ],
          "pieges": [
            "Une gaine créée dans une vue ayant une autre phase (ici Phase 3) n'apparaît pas dans le plan de phase 1 : régler sa « Phase de création » sur Phase 1.",
            "Le rapport mélange tous les conduits : pour isoler la gaine d'étude, regarder les lignes qui mentionnent CTA_01 ou utiliser Afficher.",
            "Revit propose d'enregistrer le projet avant de lancer la vérification : enregistrer d'abord."
          ],
          "horsChamp": true
        },
        {
          "id": "TD5-05-export-pdf-et-ifc4",
          "titre": "Exporter en PDF et en IFC",
          "duree": 36,
          "voix": false,
          "url": "media/bts-fed/videos/TD5-05-export-pdf-et-ifc4.mp4?v=cd3d572201",
          "taille": 2139259,
          "retenir": [
            "PDF : Fichier › Exporter › PDF ; on choisit la feuille C-401 (Vues/feuilles sélectionnées), le papier A1 (ou A3 si on veut lire sur écran), le nom C-401 et un emplacement neutre.",
            "IFC : Fichier › Exporter › IFC. Revit propose IFC 2x3 - Vue de coordination 2.0 par défaut : on clique sur « Modifier la configuration » et on choisit une configuration IFC4, par exemple « IFC4 - Vue de référence [Service de bâtiment] » (exigence : échange de référence MEP). Le cahier des charges exige l'IFC4.",
            "Contrôle : le PDF s'ouvre et reste lisible ; le fichier .ifc est créé (quelques centaines de Ko à quelques Mo).",
            "L'IFC sert à la coordination avec les autres intervenants ; le PDF sert à lire la feuille."
          ],
          "pieges": [
            "Rester sur IFC 2x3 : le CDC demande l'IFC4.",
            "Oublier de sélectionner la feuille : par défaut, la boîte PDF exporte la fenêtre actuelle.",
            "Laisser l'emplacement sur Documents : toujours choisir un dossier neutre (la boîte affiche le chemin du compte)."
          ],
          "horsChamp": false
        },
        {
          "id": "TD5-06-exercices",
          "titre": "Les exercices",
          "duree": 109,
          "voix": false,
          "url": "media/bts-fed/videos/TD5-06-exercices.mp4?v=cc0a2684fd",
          "taille": 3006923,
          "retenir": [
            "Exercice 1 : le métré des gaines donne 21,72 m en Ø200 et 7,06 m en Ø125, soit 28,78 m.",
            "Exercice 2 : sur un A1 (841 × 594 mm), le plan 32 m × 16 m tient à 1 : 100 (320 × 160 mm) et même à 1 : 50 (640 × 320 mm) ; une vue ne figure que sur une seule feuille : on la duplique pour la placer ailleurs.",
            "Exercice 3 : la gaine d'étude CTA_01 percute cinq cloisons : une distributive (CLO_01 à X = 4 m) et quatre coupe-feu (CLO_EI60 à X = 8, 10, 14 et 20 m).",
            "Les interférences avec des cloisons coupe-feu sont plus graves : le passage doit conserver la résistance au feu (clapet ou calfeutrement). Solution : faire passer la gaine par le hall ou la scinder en antennes par local."
          ],
          "pieges": [
            "Croire qu'une vue peut figurer sur deux feuilles.",
            "Traiter toutes les interférences de la même façon : une cloison coupe-feu demande un dispositif de passage."
          ],
          "horsChamp": false
        }
      ]
    },
    {
      "id": "td6",
      "num": 6,
      "titre": "Dimensionner le chauffage de L'Escale sous ArchiWIZARD",
      "logiciel": "ArchiWIZARD",
      "duree": "3 h",
      "niveauGcf": 3,
      "objectif": {
        "intro": "À la fin de ce TD, je saurai",
        "items": [
          "exporter une maquette Revit en IFC et l’ouvrir dans un logiciel de calcul thermique",
          "contrôler un import : nombre de locaux, volumes, compositions de parois, menuiseries",
          "saisir les hypothèses d’un bilan EN 12831 : site, zones, consignes, locaux non chauffés, ventilation",
          "lire les déperditions par transmission (ΦT) et par renouvellement d’air (ΦV) d’une pièce et d’une zone",
          "vérifier un résultat du logiciel par un calcul à la main, puis en déduire la puissance à installer"
        ]
      },
      "depart": "TD6_depart.rvt (maquette préparée pour l’énergie, voir l’étape 1).",
      "enonce": {
        "url": "media/bts-fed/td/TD6-archiwizard-bilan-thermique-etudiant.pdf?v=4a107cca89",
        "nom": "TD6-archiwizard-bilan-thermique-etudiant.pdf",
        "taille": 311419
      },
      "corrige": {
        "url": "media/bts-fed/td/TD6-archiwizard-bilan-thermique-corrige.pdf?v=8345a1c9e2",
        "nom": "TD6-archiwizard-bilan-thermique-corrige.pdf",
        "taille": 323610
      },
      "maquette": {
        "url": "media/bts-fed/depart/TD6_depart.rvt?v=aa019b4a13",
        "nom": "TD6_depart.rvt",
        "taille": 15937536
      },
      "videos": [
        {
          "id": "TD6-01-preparer-et-exporter-l-ifc",
          "titre": "Préparer et exporter l'IFC",
          "duree": 62,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-01-preparer-et-exporter-l-ifc.mp4?v=166c692b95",
          "taille": 3249558,
          "retenir": [
            "La vue 3D « AW - Modèle énergétique » ne montre que ce qui compte pour la thermique : murs, sols, toitures, portes, fenêtres et pièces. Structure, mobilier, équipements et faux plafonds sont masqués.",
            "La nomenclature NOM-01 compte 14 pièces : le vestiaire R04 est réuni au hall R03, la scène R06 à la salle R05. ArchiWIZARD ne reconnaît une pièce que si son volume est fermé par des parois jusqu'au plafond.",
            "Export : Fichier › Exporter › IFC, version IFC 2x3 - Vue de coordination 2.0 (celle que lit ArchiWIZARD).",
            "Modifier la configuration › Contenu supplémentaire : cocher « Exporter uniquement les éléments visibles dans la vue » ET « Exporter les pièces, les zones et les espaces en vues 3D ».",
            "Contrôle : le fichier pèse environ 230 Ko et contient 14 IfcSpace."
          ],
          "pieges": [
            "Oublier la seconde case : l'IFC exporté depuis une vue 3D ne contient alors aucune pièce (0 IfcSpace, vérifié le 2026-11-23).",
            "Exporter depuis une autre vue : le mobilier et la structure partent dans l'IFC et alourdissent l'import.",
            "Choisir l'IFC4 du TD 5 : pour ArchiWIZARD, on reste en IFC 2x3, vue de coordination 2.0.",
            "Ne pas regrouper les pièces non fermées (comptoir bas, cloison arrêtée sous la toiture) : elles fusionnent dans ArchiWIZARD et l'une perd son nom."
          ],
          "horsChamp": false
        },
        {
          "id": "TD6-02-ouvrir-l-ifc-dans-archiwizard",
          "titre": "Ouvrir l'IFC dans ArchiWIZARD",
          "duree": 65,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-02-ouvrir-l-ifc-dans-archiwizard.mp4?v=75dff0c93f",
          "taille": 2484493,
          "retenir": [
            "On ouvre l'IFC par « Ouvrir un fichier » (barre verticale de gauche), filtre « fichiers IFC ». Le bouton Importer est indisponible en version Éducation.",
            "Boîte Import IFC : import natif, compositions de parois et noms de pièces sur Oui ; mobilier sur Non.",
            "Localisation : jeu France_RE2020, station THBC2020_NANCY_H1b (pas de station à Orléans) ; configuration : usage Bureaux Bois.",
            "Préparation : procédé Analyse géométrique ; IfcDoor classé en Remplissage opaque, sinon les portes sont comptées comme des murs.",
            "Contrôle : Modèle › Bâtiment › Etage 1 affiche 14 pièces. Volumes (EN 12831 › zone › Ventilation) : salle 1 408,5 m³ (Revit 1 428,9), hall 153,2 (148,4), R10 51,4 m³ (65,0) : les annexes nord sortent à 2,37 m de haut au lieu de 3,00."
          ],
          "pieges": [
            "Cliquer sur Importer : « Import indisponible » en Éducation.",
            "Laisser IfcDoor en paroi : les portes deviennent des murs isolés.",
            "Ne pas contrôler les volumes : l'écart des annexes nord (−21 %) passe inaperçu. Il ne touche que les infiltrations, car les débits sont saisis.",
            "L'avertissement « Voulez-vous sauvegarder ? » de l'étude précédente et les temps d'analyse sont coupés au montage."
          ],
          "horsChamp": false
        },
        {
          "id": "TD6-03-site-et-climat",
          "titre": "Le site",
          "duree": 20,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-03-site-et-climat.mp4?v=26f821e4cb",
          "taille": 572835,
          "retenir": [
            "EN 12831 (icône maison rouge) › Site. Par défaut, la station de Nancy donne θe = −15 °C et θm,e = 8 °C.",
            "On coche « Département » et on choisit 45 : θe = −7,0 °C, θm,e = 11,0 °C.",
            "Écart de température de base pour un local à 19 °C : ΔT = 19 − (−7) = 26 K."
          ],
          "pieges": [
            "Oublier la case Département : tout le bilan est fait à −15 °C, soit environ 30 % de puissance en trop.",
            "Confondre la station météo (calculs annuels) et la température de base du dimensionnement."
          ],
          "horsChamp": false
        },
        {
          "id": "TD6-04-zonage-et-consignes",
          "titre": "Zones et consignes",
          "duree": 109,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-04-zonage-et-consignes.mp4?v=b0bb096c82",
          "taille": 4087068,
          "retenir": [
            "Modèle › Définition des zones : bouton + pour créer Z1 Salle et scène, Z2 Accueil, Z3 Annexes, Z4 Locaux non chauffés (usage Bureaux).",
            "On choisit une zone dans la liste, puis on clique les pièces au pinceau sur le plan. Z1 = 1 pièce, Z2 = 3, Z3 = 6, Z4 = 4.",
            "On supprime la zone d'import « Bureaux », restée vide (bouton −).",
            "Modèle › Bâtiment, clic sur R12, R13, R15, R17 : case Espace tampon. ArchiWIZARD propose 0,30 vol/h et calcule b (0,83 pour R17).",
            "EN 12831 › zone › onglet Chauffage : consigne 19 °C pour Z1, Z2, Z3 (valeur par défaut de l'usage, à vérifier)."
          ],
          "pieges": [
            "Laisser un local non chauffé dans une zone chauffée : il est compté à 19 °C, la puissance est surestimée.",
            "Oublier de supprimer la zone d'import : une zone vide traîne dans les résultats."
          ],
          "horsChamp": false
        },
        {
          "id": "TD6-05-parois-menuiseries-ventilation",
          "titre": "Parois, portes, ventilation",
          "duree": 96,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-05-parois-menuiseries-ventilation.mp4?v=49c5c11f44",
          "taille": 3548462,
          "retenir": [
            "Configurateur des parois › Compositions › MUR_EXT_01 : R = 0,40 m²·K/W et Up = 1,757 juste après l'import. L'IFC transmet couches et épaisseurs, pas les λ : tous les matériaux arrivent à 1,000.",
            "Onglet Matériaux : clic sur un matériau, saisie de la Conductivité à droite (tableau de l'étape 8). Les champs sont modifiables d'emblée ; le cadenas, s'il est cliqué, les verrouille.",
            "Après correction : MUR_EXT_01 R = 7,73, Up indicatif = 0,127 (Rsi + Rse = 0,17 ajoutés) ; toitures 8,51 et 8,18 ; plancher 5,46.",
            "Configurateur des baies › Opaques › Sandwich isolant en aluminium (38 baies, les portes) : Up 0,700 → 1,5.",
            "EN 12831 › Z1 › Ventilation : T° de l'air soufflé = Valeur saisie à la zone, 13,8 °C (= −7 + 0,8 × 26) ; débits extraction et soufflage 3 690 m³/h.",
            "Z3 : même soufflage ; R10 90, R11 105, R14 100, R07 75 m³/h ; total 370 (R12, 30 m³/h, est en tampon)."
          ],
          "pieges": [
            "Garder les λ à 1,000 : un mur de 40 cm vaut alors R = 0,40, et tout le bilan est faux.",
            "Cliquer sur le cadenas quand les champs sont déjà actifs : on les verrouille.",
            "Croire que « Efficacité de l'échangeur 50 % » s'applique : elle est ignorée dès que la température soufflée est saisie."
          ],
          "horsChamp": true
        },
        {
          "id": "TD6-06-calcul-et-resultats",
          "titre": "Lire les résultats",
          "duree": 49,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-06-calcul-et-resultats.mp4?v=9a43004cbc",
          "taille": 2309825,
          "retenir": [
            "Ctrl+S, OK à l'avertissement de licence, OK pour écraser la variante : le calcul se met à jour.",
            "Résultats › EN 12831 › Bâtiment › Synthèse par pièce : Z1 ΦT 3 867, ΦV 10 520, ΦHL 14 387 W ; Z2 1 466 W ; Z3 3 916 W ; bâtiment 19 769 W.",
            "Dans la salle, 10 520 / 14 387 = 73 % des déperditions viennent de l'air : l'enveloppe est très isolée, l'air neuf (205 personnes) domine.",
            "Résultats › EN 12831 › Zones › Z3 › Etage 1 › Sanitaires femmes R10 : ΦHL 431 W (ΦT 190, ΦV 241). On déplie Ponts thermiques, Baies, Parois opaques (de bas en haut), puis Ctrl+A, Ctrl+C pour récupérer le tableau."
          ],
          "pieges": [
            "Cliquer les liens des tableaux : ils ne s'ouvrent pas, passer par l'arbre.",
            "Panneau trop étroit : la page remonte en haut à chaque clic ; l'élargir."
          ],
          "horsChamp": false
        },
        {
          "id": "TD6-07-controle-a-la-main",
          "titre": "Contrôler à la main",
          "duree": 56,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-07-controle-a-la-main.mp4?v=14c079fdc1",
          "taille": 1504223,
          "retenir": [
            "HT = Σ U × A des parois vers l'extérieur + sol : 2,63 + 2,05 + 1,34 + 1,30 = 7,32 W/K.",
            "ΦT = HT × ΔT = 7,32 × 26 = 190 W, comme le logiciel.",
            "ΦV = 0,34 × (q_inf × ΔT + q_air neuf × (θint − θsoufflage)) = 0,34 × (9,3 × 26 + 90 × 5,2) = 241 W.",
            "ΦHL = 190 + 241 = 431 W, soit 20 W/m²."
          ],
          "pieges": [
            "Compter les cloisons avec des locaux à la même température : aucun flux, H = 0.",
            "Utiliser 0,34 avec un débit en m³/s : la formule attend des m³/h."
          ],
          "horsChamp": false
        },
        {
          "id": "TD6-08-dimensionner-et-exercices",
          "titre": "Dimensionner, exercices",
          "duree": 72,
          "voix": false,
          "url": "media/bts-fed/videos/TD6-08-dimensionner-et-exercices.mp4?v=c1003076cb",
          "taille": 2093912,
          "retenir": [
            "Salle : 14,4 kW = transmission 3,9 + infiltrations 4,0 (0,34 × 452,1 × 26) + air neuf 6,5 (0,34 × 3 690 × 5,2).",
            "Avec une batterie chaude qui porte l'air à 19 °C : 6,5 kW dans la CTA, 7,9 kW aux émetteurs. Le total ne change pas.",
            "Relance : ajouter ΦRH = A × fRH (EN 12831) selon le réduit et le temps de relance, pas une marge au hasard.",
            "Exercice 1 : ΦV de R11 = 0,34 × (9,3 × 26 + 105 × 5,2) = 268 W, comme la synthèse.",
            "Exercice 2 : air neuf de la salle : 32 620 W à 0 %, 16 310 W à 50 %, 6 524 W à 80 %.",
            "Exercice 3 : en simple flux, 3 867 + 3 997 + 32 620 = 40,5 kW contre 14,4 : 26,1 kW de plus, avis défavorable."
          ],
          "pieges": [
            "Additionner la batterie de la CTA et ΦHL : on compte deux fois l'air neuf."
          ],
          "horsChamp": false
        }
      ]
    }
  ]
};
