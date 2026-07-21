module.exports = {
  id: 'statistiques-probabilites',
  label: 'Statistiques - Probabilités',
  levels: {
    1: [
      {
        id: 'maths-statistiques-probabilites-1-a',
        question: 'Voici les notes obtenues par un élève : 10, 14, 12, 16.<br/><br/>Quelle est la moyenne de ces notes ?',
        options: ['$13$', '$12$', '$14$', '$52$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-1-b',
        question: 'Voici les températures relevées (en °C) pendant 5 jours : 18, 20, 19, 21, 17.<br/><br/>Quelle est la température moyenne sur ces 5 jours ?',
        options: ['$19\\text{ °C}$', '$18\\text{ °C}$', '$20\\text{ °C}$', '$95\\text{ °C}$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-1-c',
        question: 'Un magasin a vendu les quantités suivantes de stylos sur 6 jours : 5, 7, 6, 8, 9, 7.<br/><br/>Quelle est la quantité moyenne de stylos vendus par jour ?',
        options: ['$7$', '$6$', '$8$', '$42$'],
        correctIndex: 0
      }
    ],
    2: [
      {
        id: 'maths-statistiques-probabilites-2-a',
        question: 'Dans une classe de 25 élèves, 10 pratiquent le football.<br/><br/>Quelle est la fréquence des élèves pratiquant le football, exprimée en pourcentage ?',
        options: ['$40\\%$', '$4\\%$', '$60\\%$', '$25\\%$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-2-b',
        question: 'Voici les résultats d\'un contrôle : 3 élèves ont eu la note 8, 7 élèves ont eu la note 12, 5 élèves ont eu la note 15, et 2 élèves ont eu la note 18.<br/><br/>Quel est l\'effectif total de la classe ?',
        options: ['$17$', '$18$', '$15$', '$4$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-2-c',
        question: 'Sur 40 personnes interrogées, 16 préfèrent le cinéma.<br/><br/>Quelle fraction, sous forme irréductible, représente la fréquence des personnes préférant le cinéma ?',
        options: ['$\\dfrac{2}{5}$', '$\\dfrac{5}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{4}{10}$'],
        correctIndex: 0
      }
    ],
    3: [
      {
        id: 'maths-statistiques-probabilites-3-a',
        question: 'Voici une série de notes : 12, 7, 15, 9, 4.<br/><br/>Quelle est la médiane de cette série ?',
        options: ['$9$', '$15$', '$9{,}4$', '$11$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-3-b',
        question: 'Une série statistique a pour valeurs : 3, 8, 5, 14, 9, 6.<br/><br/>Quelle est l\'étendue de cette série ?',
        options: ['$11$', '$14$', '$7$', '$3$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-3-c',
        question: 'Voici les tailles (en cm) de 7 élèves : 150, 162, 158, 145, 170, 155, 160.<br/><br/>Quelle est la médiane de cette série ?',
        options: ['$158$', '$157{,}1$', '$160$', '$170$'],
        correctIndex: 0
      }
    ],
    4: [
      {
        id: 'maths-statistiques-probabilites-4-a',
        question: 'On lance un dé à 6 faces, équilibré.<br/><br/>Quelle est la probabilité d\'obtenir un nombre pair ?',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{6}$', '$\\dfrac{2}{3}$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-4-b',
        question: 'Une urne contient 5 boules rouges et 3 boules vertes, indiscernables au toucher. On tire une boule au hasard.<br/><br/>Quelle est la probabilité de tirer une boule verte ?',
        options: ['$\\dfrac{3}{8}$', '$\\dfrac{5}{8}$', '$\\dfrac{3}{5}$', '$\\dfrac{1}{2}$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-4-c',
        question: 'Un jeu comporte 4 issues possibles A, B, C et D. On sait que $P(A) = 0{,}2$, $P(B) = 0{,}3$ et $P(C) = 0{,}1$.<br/><br/>Quelle est la probabilité de l\'issue D ?',
        options: ['$0{,}4$', '$0{,}5$', '$0{,}6$', '$0{,}8$'],
        correctIndex: 0
      }
    ],
    5: [
      {
        id: 'maths-statistiques-probabilites-5-a',
        question: 'Voici une série de 12 valeurs, déjà triées par ordre croissant :<br/><br/>$$2\\,;\\,4\\,;\\,5\\,;\\,7\\,;\\,8\\,;\\,9\\,;\\,11\\,;\\,12\\,;\\,14\\,;\\,15\\,;\\,18\\,;\\,20$$<br/><br/>Quelle est la médiane de cette série ?',
        options: ['$10$', '$9$', '$11$', '$10{,}5$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-5-b',
        question: 'Voici une série de 10 valeurs triées par ordre croissant :<br/><br/>$$2\\,;\\,5\\,;\\,7\\,;\\,9\\,;\\,10\\,;\\,12\\,;\\,14\\,;\\,16\\,;\\,18\\,;\\,20$$<br/><br/>Le rang du premier quartile $Q_1$ s\'obtient en arrondissant $0{,}25 \\times N$ à l\'entier supérieur. Quelle est la valeur de $Q_1$ ?',
        options: ['$7$', '$5$', '$9$', '$10$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-5-c',
        question: 'On reprend la série précédente, pour laquelle $Q_1 = 7$ et $Q_3 = 16$.<br/><br/>Quel est l\'écart interquartile $Q_3 - Q_1$ de cette série ?',
        options: ['$9$', '$23$', '$16$', '$7$'],
        correctIndex: 0
      }
    ],
    6: [
      {
        id: 'maths-statistiques-probabilites-6-a',
        question: 'Dans un lycée, on interroge 200 élèves sur la pratique d\'un sport.<br/><br/>Parmi eux, 150 pratiquent un sport, dont 90 filles. Les 50 autres ne pratiquent aucun sport, dont 20 filles.<br/><br/>On choisit au hasard un élève parmi les 150 qui pratiquent un sport. Quelle est la probabilité que ce soit une fille ?',
        options: ['$0{,}6$', '$0{,}55$', '$0{,}45$', '$0{,}4$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-6-b',
        question: 'On donne $P(A) = 0{,}4$ et $P_A(B) = 0{,}5$ (probabilité de $B$ sachant $A$).<br/><br/>Quelle est la probabilité de l\'événement $A \\cap B$ ?',
        options: ['$0{,}2$', '$0{,}9$', '$0{,}5$', '$0{,}8$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-6-c',
        question: 'On donne $P(A) = 0{,}6$ et $P(A \\cap B) = 0{,}18$.<br/><br/>Quelle est la probabilité conditionnelle $P_A(B)$ ?',
        options: ['$0{,}3$', '$0{,}18$', '$0{,}108$', '$0{,}6$'],
        correctIndex: 0
      }
    ],
    7: [
      {
        id: 'maths-statistiques-probabilites-7-a',
        question: 'Une variable aléatoire $X$ suit la loi uniforme sur l\'intervalle $[0\\,;\\,10]$.<br/><br/>Quelle est la probabilité $P(3 \\leqslant X \\leqslant 7)$ ?',
        options: ['$0{,}4$', '$0{,}7$', '$0{,}3$', '$4$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-7-b',
        question: 'Une variable aléatoire $T$ suit une loi exponentielle de paramètre $\\lambda = 0{,}2$.<br/><br/>Quelle est l\'espérance $E(T)$ de cette variable ?',
        options: ['$5$', '$0{,}2$', '$25$', '$10$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-7-c',
        question: 'Une variable aléatoire $T$ suit une loi exponentielle de paramètre $\\lambda = 0{,}5$.<br/><br/>Quelle est la probabilité $P(T > 2)$, exprimée sous forme exacte ?',
        options: ['$e^{-1}$', '$1 - e^{-1}$', '$e^{-2}$', '$e^{1}$'],
        correctIndex: 0
      }
    ],
    8: [
      {
        id: 'maths-statistiques-probabilites-8-a',
        question: 'Une série statistique à deux variables présente un coefficient de corrélation linéaire $r = 0{,}98$.<br/><br/>Que peut-on en conclure ?',
        options: [
          'Il existe une forte corrélation linéaire positive entre les deux variables.',
          'Il existe une forte corrélation linéaire négative entre les deux variables.',
          'Il n\'existe aucune corrélation entre les deux variables.',
          'Les deux variables sont indépendantes.'
        ],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-8-b',
        question: 'Pour une série statistique à deux variables, on donne $V(x) = 4$ et $\\text{Cov}(x,y) = 10$.<br/><br/>Quel est le coefficient directeur $a$ de la droite de régression de $y$ en $x$ obtenue par la méthode des moindres carrés ?',
        options: ['$2{,}5$', '$0{,}4$', '$14$', '$40$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-8-c',
        question: 'La droite de régression de $y$ en $x$ passe par le point moyen $G(\\bar{x}\\,;\\,\\bar{y})$. On donne $\\bar{x} = 5$, $\\bar{y} = 20$ et un coefficient directeur $a = 3$.<br/><br/>Quelle est l\'ordonnée à l\'origine $b$ de la droite $y = ax + b$ ?',
        options: ['$5$', '$20$', '$15$', '$-5$'],
        correctIndex: 0
      }
    ],
    9: [
      {
        id: 'maths-statistiques-probabilites-9-a',
        question: 'Une variable aléatoire $X$ suit une loi normale $\\mathcal{N}(\\mu = 50\\,;\\,\\sigma = 4)$.<br/><br/>Quelle est la valeur centrée réduite (le score $Z$) correspondant à $X = 58$ ?',
        options: ['$2$', '$8$', '$0{,}5$', '$4$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-9-b',
        question: 'Une variable aléatoire $X$ suit une loi normale $\\mathcal{N}(\\mu\\,;\\,\\sigma)$.<br/><br/>D\'après la règle empirique dite « 68-95-99,7 », quelle est, environ, la probabilité que $X$ appartienne à l\'intervalle $[\\mu - 2\\sigma\\,;\\,\\mu + 2\\sigma]$ ?',
        options: ['$95\\%$', '$68\\%$', '$99{,}7\\%$', '$50\\%$'],
        correctIndex: 0
      },
      {
        id: 'maths-statistiques-probabilites-9-c',
        question: 'On donne $P(Z \\leqslant 1{,}96) = 0{,}975$, où $Z$ suit la loi normale centrée réduite $\\mathcal{N}(0\\,;\\,1)$.<br/><br/>Quelle est la valeur de $P(Z > 1{,}96)$ ?',
        options: ['$0{,}025$', '$0{,}975$', '$0{,}5$', '$1{,}96$'],
        correctIndex: 0
      }
    ]
  }
};
