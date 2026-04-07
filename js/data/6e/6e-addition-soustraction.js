/* =========================================================
   Spark Learning – data/6e/6e-addition-soustraction.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-addition-soustraction',
    level: 1, subject: 'maths',
    icon: '➕',
    title: 'Addition et soustraction',
    subtitle: 'Entiers et décimaux, calcul posé et mental',
    keywords: ['Addition', 'Soustraction', 'Retenue', 'Décimaux', 'Calcul posé'],
    physics: false,

    cours: {
      intro: 'Additionner et soustraire des décimaux repose sur une règle unique : <strong>aligner les virgules</strong>. Cela garantit que l\'on additionne des grandeurs de même rang.<br/><br/>' +
        'Si les nombres n\'ont pas le même nombre de décimales, on complète avec des zéros : $8{,}7$ devient $8{,}70$. On calcule ensuite colonne par colonne de droite à gauche.<br/><br/>' +
        'Pour l\'<strong>addition</strong>, une retenue se propage quand une somme dépasse $9$. Pour la <strong>soustraction</strong>, un emprunt se propage quand le chiffre du haut est plus petit.',
      definitions: [
        { term: 'Retenue', def: 'Quand la somme d\'une colonne dépasse $9$, on « retient » la dizaine pour la colonne suivante.' },
        { term: 'Emprunt', def: 'En soustraction, quand le chiffre du haut est plus petit, on emprunte $10$ à la colonne de gauche.' },
        { term: 'Commutativité', def: '$a + b = b + a$ : l\'ordre des termes n\'a pas d\'importance dans une addition.' },
        { term: 'Associativité', def: '$(a + b) + c = a + (b + c)$ : on peut regrouper les termes librement.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Aligner les virgules</strong> et compléter avec des zéros. <em>Exemple :</em> $12{,}4 + 3{,}75$ → écrire $12{,}40 + 3{,}75$.',
          '<strong>Opérer</strong> chiffre par chiffre de droite à gauche.',
          '<strong>Gérer retenues/emprunts</strong>. Vérifier : $(a - b) + b = a$.'
        ]
      },
      example: {
        statement: 'Calculer $15{,}2 - 6{,}75$.',
        steps: [
          'Écrire $15{,}20 - 6{,}75$ (aligner les virgules, compléter avec un zéro).',
          'Centièmes : $0 - 5$ → emprunt → $10 - 5 = 5$.',
          'Dixièmes : $2 - 1 - 7$ → emprunt → $12 - 1 - 7 = 4$.',
          'Unités : $5 - 1 - 6$ → emprunt → $15 - 1 - 6 = 8$.'
        ],
        answer: '$15{,}2 - 6{,}75 = 8{,}45$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Opération</th><th style="border:1px solid var(--border);padding:8px">Propriété</th><th style="border:1px solid var(--border);padding:8px">Formule</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Addition</td><td style="border:1px solid var(--border);padding:8px">Commutative + Associative</td><td style="border:1px solid var(--border);padding:8px">$a + b = b + a$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Soustraction</td><td style="border:1px solid var(--border);padding:8px">Non commutative</td><td style="border:1px solid var(--border);padding:8px">Vérif : $(a - b) + b = a$</td></tr></table>',
      formulas: [
        '$a + b = b + a$ (commutativité)',
        '$(a + b) + c = a + (b + c)$ (associativité)',
        'Vérification de la soustraction : $(a - b) + b = a$'
      ],
      recap: [
        'Toujours aligner les virgules avant de calculer.',
        'Compléter avec des zéros pour avoir le même nombre de décimales.',
        'L\'addition est commutative et associative, pas la soustraction.',
        'Vérifier une soustraction : $(a - b) + b = a$.'
      ],
      piege: 'Piège fréquent : ne pas aligner les virgules ! Pour calculer $12{,}4 + 3{,}75$, écrire $12{,}40$ (et non aligner le $3$ sous le $1$).'
    },

    quiz: [
      { q: 'Quel est le résultat de $8{,}7 + 3{,}45$ ?', options: ['$11{,}12$', '$12{,}15$', '$11{,}15$', '$12{,}12$'], answer: 1, correction: '$8{,}70 + 3{,}45 = 12{,}15$.' },
      { q: 'Un élève calcule $15{,}2 - 6{,}75$ et trouve $9{,}55$. Où est l\'erreur ?', options: ['Il n\'a pas aligné les virgules.', 'Il a oublié de compléter $15{,}2$ en $15{,}20$ avant de soustraire.', 'Il n\'y a pas d\'erreur.', 'Il a inversé.'], answer: 1, correction: 'La bonne méthode : $15{,}20 - 6{,}75 = 8{,}45$.' },
      { q: 'Marie a $20{,}00$ €. Elle achète un livre à $8{,}95$ € et un stylo à $3{,}50$ €. Combien lui reste-t-il ?', options: ['$7{,}55$ €', '$7{,}45$ €', '$8{,}55$ €', '$6{,}55$ €'], answer: 0, correction: '$8{,}95 + 3{,}50 = 12{,}45$ €. Reste : $20{,}00 - 12{,}45 = 7{,}55$ €.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { emoji: '🧮', intro: 'Calcule', suffix: '', unit: '' },
          { emoji: '🌡️', intro: 'Ce matin, la température était de', suffix: '°C. Elle a augmenté de', unit: '°C', twoPart: true },
          { emoji: '🛒', intro: 'Au supermarché, tu achètes un pack de yaourts à', suffix: '€ et un jus de fruits à', unit: '€', twoPart: true },
          { emoji: '🏗️', intro: 'Sur un chantier, une planche mesure', suffix: 'm. On en ajoute une deuxième de', unit: 'm', twoPart: true },
          { emoji: '🏖️', intro: 'Pour les vacances, le budget transport est de', suffix: '€ et le budget hébergement est de', unit: '€', twoPart: true },
          { emoji: '🏃', intro: 'Lors d\'une compétition, un athlète court', suffix: 'km le matin puis', unit: 'km', twoPart: true },
          { emoji: '⚗️', intro: 'En chimie, on mélange', suffix: 'g d\'un produit avec', unit: 'g', twoPart: true },
          { emoji: '🎵', intro: 'Un morceau de musique dure', suffix: 'min. On y ajoute un refrain de', unit: 'min', twoPart: true }
        ]);
        const a = randFloat(1, 20, 1);
        const b = randFloat(1, 10, 2);
        const sum = parseFloat((a + b).toFixed(2));
        const statement = scenario.twoPart
          ? `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.suffix} $${b}$ ${scenario.unit}. Quel est le total ?`
          : `${scenario.emoji} ${scenario.intro} $${a} + ${b}$.`;
        return {
          statement,
          answer: sum,
          tolerance: 0.01,
          unit: scenario.unit,
          hint: `Aligne les virgules : écris $${a}$ comme $${a.toFixed(2)}$, puis additionne colonne par colonne.`,
          solution: [
            `Aligner les virgules : $${a.toFixed(2)} + ${b.toFixed(2)}$`,
            `Additionner chiffre par chiffre de droite à gauche.`,
            `Résultat : $${sum}$${scenario.unit ? ' ' + scenario.unit : ''}`
          ]
        };
      }
    },

    probleme: {
      context: 'Un épicier reçoit une livraison : $12{,}5$ kg de tomates, $8{,}75$ kg de carottes et $5{,}4$ kg de courgettes. Il avait déjà $3{,}25$ kg de tomates en stock.',
      tasks: [
        'Calcule la masse totale livrée.',
        'Quelle est la masse totale de tomates disponibles après livraison ?',
        'Si une cliente achète $6{,}8$ kg de légumes, quelle masse reste-t-il ?'
      ],
      solutions: [
        'Masse livrée : $12{,}5 + 8{,}75 + 5{,}4 = 26{,}65$ kg.',
        'Tomates totales : $12{,}5 + 3{,}25 = 15{,}75$ kg.',
        'Reste : $26{,}65 - 6{,}8 = 19{,}85$ kg.'
      ],
      finalAnswer: 'Il reste $19{,}85$ kg de légumes en rayon.'
    },

    evaluation: {
      title: 'Évaluation — Addition et soustraction',
      duration: '15 min',
      questions: [
        { statement: 'Calcule $14{,}6 + 7{,}85$.', type: 'numeric', answer: 22.45, tolerance: 0.01, unit: '', points: 2, correction: '$14{,}60 + 7{,}85 = 22{,}45$.' },
        { statement: 'Calcule $20{,}03 - 8{,}7$.', type: 'numeric', answer: 11.33, tolerance: 0.01, unit: '', points: 2, correction: '$20{,}03 - 8{,}70 = 11{,}33$.' },
        { statement: 'Un élève calcule $6{,}5 + 3{,}28$ et trouve $9{,}33$. Où est l\'erreur ?', type: 'multiple-choice', options: ['Pas d\'erreur.', 'Il a mal aligné les virgules : résultat $= 9{,}78$.', 'Il a additionné $65 + 328$.', 'Il a oublié une retenue.'], answer: 1, points: 2, correction: '$6{,}50 + 3{,}28 = 9{,}78$.' },
        { statement: 'Léo a $50$ €. Il achète un jeu à $23{,}45$ € et un livre à $12{,}80$ €. Combien lui reste-t-il ?', type: 'numeric', answer: 13.75, tolerance: 0.01, unit: '€', points: 2, correction: '$23{,}45 + 12{,}80 = 36{,}25$ €. Reste : $13{,}75$ €.' },
        { statement: 'Quelle propriété permet d\'affirmer que $7{,}3 + 4{,}5 = 4{,}5 + 7{,}3$ ?', type: 'multiple-choice', options: ['L\'associativité', 'La commutativité', 'La distributivité', 'La transitivité'], answer: 1, points: 2, correction: 'Commutativité : $a + b = b + a$.' }
      ]
    }
  });
