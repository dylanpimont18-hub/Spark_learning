/* =========================================================
   Spark Learning – data/5e/5e-expressions-litterales.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-expressions-litterales',
    level: 1, subject: 'maths',
    icon: '🔤',
    title: 'Expressions littérales',
    subtitle: 'Calculer, réduire, substituer',
    keywords: ['Expression littérale', 'Variable', 'Substitution', 'Réduire', 'Termes semblables'],
    physics: false,

    cours: {
      intro: 'Jusqu\'ici, en arithmétique, tu calcules avec des <strong>nombres précis</strong> : « combien font $3 + 5$ ? ». Avec les expressions littérales, on franchit une étape fondamentale : on remplace « un nombre inconnu » par une <strong>lettre</strong> (souvent $x$, $a$, $n$…). C\'est le début de l\'<strong>algèbre</strong> !<br/><br/>' +
        'Imagine une formule de prix : « le prix est 5 € par kilo, plus 2 € de frais fixes ». En arithmétique, tu calculerais cas par cas ($5 \\times 1 + 2 = 7$, $5 \\times 2 + 2 = 12$…). Avec l\'algèbre, tu écris une seule formule : $P = 5x + 2$, et elle fonctionne <strong>pour toutes les valeurs</strong> de $x$ (le nombre de kilos). C\'est plus puissant, plus rapide, plus général.<br/><br/>' +
        '<strong>Termes semblables :</strong> on ne peut additionner que des termes avec la même variable au même degré — $3x$ et $5x$ sont semblables ($\\to 8x$), mais $3x$ et $5x^2$ ne le sont pas. De même, $2$ et $3x$ ne sont pas semblables. Pense à des unités : on n\'additionne pas des mètres et des mètres carrés !<br/><br/>' +
        'La <strong>substitution</strong> (remplacer la lettre par un nombre) permet de vérifier un résultat ou de calculer une formule physique comme $E_c = \\dfrac{1}{2}mv^2$ ou $U = RI$. C\'est un outil essentiel en sciences : on écrit la formule générale, puis on « injecte » les valeurs pour obtenir le résultat numérique.<br/><br/>' +
        'Pour vérifier qu\'une simplification est correcte, on peut substituer une valeur test : si $2 + 3x = 5x$ était vrai, alors pour $x = 2$ on aurait $2 + 6 = 10$, soit $8 = 10$, ce qui est faux. Cet outil de vérification te sera très utile tout au long du collège et au lycée.',
      definitions: [
        { term: 'Expression littérale', def: 'Expression contenant des lettres (variables) et des nombres liés par des opérations. Ex : $3x + 2y - 5$.' },
        { term: 'Termes semblables', def: 'Termes ayant exactement la même partie littérale (même variable, même exposant). $3x$ et $-5x$ sont semblables ; $3x$ et $3x^2$ ne le sont pas.' },
        { term: 'Substitution', def: 'Action de remplacer chaque lettre par une valeur numérique pour calculer le résultat.' },
        { term: 'Forme réduite', def: 'Expression dans laquelle tous les termes semblables ont été regroupés. Ex : $5a + 3b - 2a = 3a + 3b$.' }
      ],
      example: {
        statement: 'Réduire $7x - 3 + 2x + 5$, puis calculer pour $x = 4$.',
        steps: [
          'Regrouper les termes en $x$ : $7x + 2x = 9x$.',
          'Regrouper les constantes : $-3 + 5 = 2$.',
          'Forme réduite : $9x + 2$.',
          'Pour $x = 4$ : $9 \\times 4 + 2 = 36 + 2 = 38$.'
        ],
        answer: 'Forme réduite : $9x + 2$ ; pour $x = 4$ : $38$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Termes semblables — le regroupement',
        title: 'Regrouper $3x$ et $5x$ en un seul terme',
        description: 'Deux termes en $x$ peuvent se rassembler en un seul, comme deux paquets identiques qu\'on empile.<br/><br/>' +
          '<strong>$3x$</strong> et <strong>$5x$</strong> sont des termes semblables (même lettre $x$, même exposant) : on additionne simplement leurs coefficients pour obtenir <strong>$8x$</strong>.',
        svg: `
          <svg viewBox="0 0 600 380" role="img" aria-labelledby="5e-expr-regroupement-title 5e-expr-regroupement-desc">
            <title id="5e-expr-regroupement-title">Regroupement des termes semblables 3x et 5x</title>
            <desc id="5e-expr-regroupement-desc">Deux etiquettes encadrees, l'une marquee 3x et l'autre 5x, sont reliees par des courbes qui convergent vers une seule etiquette encadree en bas marquee 8x, illustrant que les deux termes en x se combinent en additionnant leurs coefficients 3 et 5 pour donner 8.</desc>

            <text class="axis-label" x="135" y="30" text-anchor="middle">Terme n°1</text>
            <rect class="frame-line" x="50" y="45" width="170" height="95" rx="14" fill="none"></rect>
            <circle class="plot-point" cx="90" cy="92" r="10"></circle>
            <text class="annotation-label" x="150" y="98" text-anchor="middle">3x</text>
            <text class="label-soft" x="135" y="122" text-anchor="middle">terme en x</text>

            <text class="axis-label" x="465" y="30" text-anchor="middle">Terme n°2</text>
            <rect class="frame-line" x="380" y="45" width="170" height="95" rx="14" fill="none"></rect>
            <circle class="plot-point" cx="420" cy="92" r="10"></circle>
            <text class="annotation-label" x="480" y="98" text-anchor="middle">5x</text>
            <text class="label-soft" x="465" y="122" text-anchor="middle">terme en x</text>

            <text class="axis-label" x="300" y="98" text-anchor="middle">+</text>

            <path class="graph-line" d="M135,140 Q135,200 300,235" fill="none"></path>
            <path class="graph-line" d="M465,140 Q465,200 300,235" fill="none"></path>
            <polygon class="plot-point" points="288,232 312,232 300,248"></polygon>
            <text class="label-soft" x="300" y="195" text-anchor="middle">on regroupe : 3 + 5 = 8</text>

            <text class="axis-label" x="300" y="243" text-anchor="middle">Après regroupement</text>
            <rect class="frame-line" x="200" y="252" width="200" height="110" rx="14" fill="none"></rect>
            <circle class="plot-point" cx="245" cy="300" r="13"></circle>
            <text class="annotation-label" x="340" y="306" text-anchor="middle">8x</text>
            <text class="label-soft" x="300" y="338" text-anchor="middle">forme réduite</text>
          </svg>
        `,
        notes: [
          '<strong>Étape 1 — Repérer les termes semblables :</strong> $3x$ et $5x$ ont tous les deux la lettre $x$ à l\'exposant $1$ : ils peuvent se regrouper.',
          '<strong>Étape 2 — Additionner les coefficients :</strong> on garde la lettre $x$ et on additionne seulement les nombres devant : $3 + 5 = 8$.',
          '<strong>Étape 3 — Écrire la forme réduite :</strong> $3x + 5x = 8x$. Un seul terme reste, plus simple à utiliser.'
        ],
        reading: 'Regrouper des termes semblables, c\'est <strong>additionner leurs coefficients</strong> en gardant la partie littérale inchangée : $3x + 5x = (3+5)x = 8x$.',
        caption: 'Les deux étiquettes $3x$ et $5x$ convergent vers une seule étiquette $8x$ : $3 + 5 = 8$.'
      },
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer la valeur</strong> : remplacer chaque lettre par sa valeur numérique, puis effectuer les calculs dans l\'ordre (priorités).',
          '<strong>Réduire</strong> : regrouper les termes semblables (même variable avec même exposant). Ex : $3x + 2x = 5x$.',
          '<strong>Attention aux signes</strong> : $-2x - 3x = -5x$ (les signes se combinent).'
        ]
      },
      formulas: [
        '$ax + bx = (a + b)x$ (factorisation par $x$)',
        '$a \\times b = ab$ (on peut omettre le signe $\\times$)',
        '$-a \\times (-b) = ab$ et $a \\times (-b) = -ab$',
        'Substitution : si $x = 3$, alors $2x + 1 = 2 \\times 3 + 1 = 7$'
      ],
      recap: [
        'Seuls les termes semblables (même variable, même degré) peuvent être additionnés.',
        '$2 + 3x \\neq 5x$ — une constante et un terme en $x$ ne se combinent pas.',
        'La substitution permet de vérifier une simplification.',
        'Les signes se combinent : $-2x - 3x = -5x$ (pas $-1x$).'
      ],
      piege: 'Piège : $2 + 3x \\neq 5x$. On ne peut pas additionner un terme constant ($2$) et un terme en $x$ ($3x$) — ce ne sont pas des termes semblables. $2 + 3x$ est déjà simplifié !'
    },

    quiz: [
      {
        q: 'Si $x = 4$, combien vaut $3x - 5$ ?',
        options: ['$7$', '$17$', '$8$', '$-2$'],
        answer: 0,
        correction: '$3x - 5 = 3 \\times 4 - 5 = 12 - 5 = 7$.'
      },
      {
        q: 'Quelle est la forme réduite de $5a + 3b - 2a + b$ ?',
        options: ['$3a + 4b$', '$7a + 4b$', '$3a + 2b$', '$6ab$'],
        answer: 0,
        correction: 'On regroupe les termes en $a$ : $5a - 2a = 3a$. Les termes en $b$ : $3b + b = 4b$. Résultat : $3a + 4b$.'
      },
      {
        q: 'Un élève simplifie $2 + 3x$ et trouve $5x$. Quelle est son erreur ?',
        options: [
          'Il a raison : $2 + 3 = 5$, donc $2 + 3x = 5x$.',
          '$2$ est une constante et $3x$ est un terme en $x$ — ce ne sont pas des termes semblables. $2 + 3x$ est déjà la forme la plus simple.',
          'L\'erreur est différente : il fallait écrire $2 \\times 3x = 6x$.',
          'Il fallait d\'abord substituer une valeur de $x$ avant de simplifier.'
        ],
        answer: 1,
        correction: 'On ne peut additionner que des termes semblables (même variable, même degré). $2$ est une constante (terme de degré 0) et $3x$ est de degré 1 — ils ne se combinent pas.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE LE 2026-09-13.

         Sept contextes, mais UNE seule tache : substituer une valeur dans
         $ax + b$ puis calculer. La banque du professeur imprimait donc 21
         enonces qui posent tous exactement la meme question. Le plafond par
         moule ne le voyait pas : il compte les TEXTES, et les sept habillages
         donnent sept textes differents.

         Trois taches ajoutees, choisies parmi ce que le chapitre enseigne et
         que rien n'entrainait :
           - reduire une expression (regrouper les termes semblables), qui est
             l'attendu principal du chapitre ;
           - tester si une valeur est solution d'une egalite, seule entree vers
             l'equation en cinquieme ;
           - produire une expression a partir d'un enonce (modeliser), la
             competence que l'evaluation declare et que la banque n'exercait
             nulle part.
         Mesure avant/apres : 1 tache pour 21 enonces -> 4 taches. */
      generate() {
        const tache = pick(['valeur', 'valeur', 'reduire', 'tester', 'modeliser']);

        /* TACHE 2 — reduire. Les coefficients restent petits et le resultat
           positif : le chapitre porte sur le regroupement, pas sur les
           relatifs, vus au chapitre 2. */
        if (tache === 'reduire') {
          const p = rand(2, 7), q = rand(2, 6), r = rand(1, 6), s = rand(1, 5);
          const lettre = pick(['x', 'a', 'n', 't']);
          const coefTotal = p + q, cstTotal = r + s;
          return {
            statement: `Réduis l'expression $${p}${lettre} + ${r} + ${q}${lettre} + ${s}$, c'est-à-dire écris-la avec le moins de termes possible.<br/><br/>Donne la valeur du <strong>coefficient devant $${lettre}$</strong> dans l'expression réduite.`,
            answer: coefTotal,
            tolerance: 0,
            unit: '',
            hint: `On ne peut regrouper que des termes <strong>semblables</strong> : les $${lettre}$ avec les $${lettre}$, les nombres seuls avec les nombres seuls.<br/><br/>Combien de $${lettre}$ y a-t-il en tout ?`,
            solution: [
              `On regroupe les termes semblables entre eux, sans jamais mélanger les lettres et les nombres.`,
              `Termes en $${lettre}$ : $${p}${lettre} + ${q}${lettre} = ${coefTotal}${lettre}$.`,
              `Nombres seuls : $${r} + ${s} = ${cstTotal}$.`,
              `L'expression réduite est $${coefTotal}${lettre} + ${cstTotal}$, et le coefficient devant $${lettre}$ vaut $${coefTotal}$.`
            ]
          };
        }

        /* TACHE 3 — tester une valeur. Reponse 1 ou 0 (vrai/faux), comme le
           fait deja le chapitre « triangles » pour l'inegalite triangulaire :
           c'est le format numerique du projet pour une question a decider. */
        if (tache === 'tester') {
          const coef = rand(2, 6), cst = rand(1, 9), val = rand(2, 7);
          const juste = pick([true, false]);
          const cible = coef * val + cst + (juste ? 0 : pick([1, 2, 3, -1, -2]));
          const lettre = pick(['x', 'y', 'n']);
          return {
            statement: `On considère l'égalité $${coef}${lettre} + ${cst} = ${cible}$.<br/><br/>La valeur $${lettre} = ${val}$ est-elle solution de cette égalité ? Réponds par $1$ pour oui, $0$ pour non.`,
            answer: coef * val + cst === cible ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Pour le savoir, il suffit de <strong>remplacer</strong> $${lettre}$ par $${val}$ dans le membre de gauche, puis de comparer au membre de droite.<br/><br/>Aucune méthode de résolution n'est nécessaire ici : on vérifie, on ne cherche pas.`,
            solution: [
              `Pour tester une valeur, on la remplace dans chaque membre et on compare les résultats.`,
              `Membre de gauche : $${coef} \\times ${val} + ${cst} = ${coef * val} + ${cst} = ${coef * val + cst}$.`,
              `Membre de droite : $${cible}$.`,
              coef * val + cst === cible
                ? `Les deux membres sont égaux : $${lettre} = ${val}$ est bien solution.`
                : `Les deux membres diffèrent ($${coef * val + cst}$ contre $${cible}$) : $${lettre} = ${val}$ n'est donc pas solution de cette égalité.`
            ]
          };
        }

        /* TACHE 4 — modeliser. L'eleve ecrit l'expression au lieu de la lire ;
           on lui demande le coefficient, seul nombre verifiable en reponse
           numerique. C'est la competence « modeliser », declaree par la fiche
           professeur et qu'aucun exercice ne travaillait. */
        if (tache === 'modeliser') {
          const prixUnite = rand(2, 9), fixe = rand(3, 20);
          const ctx = pick([
            { objet: 'une place de cinéma', unite: 'place', fixeNom: 'la carte d\'adhérent', lettre: 'p' },
            { objet: 'un carnet de tickets de bus', unite: 'carnet', fixeNom: 'l\'ouverture du compte', lettre: 'c' },
            { objet: 'une heure de location de kayak', unite: 'heure', fixeNom: 'le prêt du gilet', lettre: 'h' },
            { objet: 'un sachet de graines', unite: 'sachet', fixeNom: 'les frais d\'envoi', lettre: 'g' }
          ]);
          return {
            statement: `${ctx.objet.charAt(0).toUpperCase() + ctx.objet.slice(1)} coûte $${prixUnite}$ €, et ${ctx.fixeNom} coûte $${fixe}$ € une fois pour toutes.<br/><br/>On note $${ctx.lettre}$ le nombre de ${ctx.unite}s achetés et l'on veut écrire le prix total sous la forme $a${ctx.lettre} + b$.<br/><br/>Que vaut le coefficient $a$ ?`,
            answer: prixUnite,
            tolerance: 0,
            unit: '',
            hint: `Le coefficient $a$ est ce qui se paie <strong>à chaque fois</strong>, donc ce qui se multiplie par $${ctx.lettre}$.<br/><br/>Le terme $b$, lui, est ce qui ne se paie qu'une seule fois, quel que soit $${ctx.lettre}$.`,
            solution: [
              `Le coefficient est le prix qui se répète, la constante est ce qui ne se paie qu'une fois.`,
              `Chaque ${ctx.unite} coûte $${prixUnite}$ € : pour $${ctx.lettre}$ ${ctx.unite}s, cela fait $${prixUnite}${ctx.lettre}$ €.`,
              `${ctx.fixeNom.charAt(0).toUpperCase() + ctx.fixeNom.slice(1)} s'ajoute une seule fois : $+ ${fixe}$.`,
              `Le prix total s'écrit $${prixUnite}${ctx.lettre} + ${fixe}$, donc $a = ${prixUnite}$.`
            ]
          };
        }

        const coef = rand(2, 6);
        const cst = rand(1, 5);
        const val = rand(1, 8);
        const result = coef * val + cst;

        const ctx = pick([
          {
            letter: 'x',
            build: () => `Calcule la valeur de l'expression $${coef}x + ${cst}$ pour $x = ${val}$.`
          },
          {
            letter: 'x',
            build: () => `Un opérateur téléphonique facture $${coef}$ € la minute de communication, plus $${cst}$ € d'abonnement fixe.<br/>Le prix total est donné par l'expression $${coef}x + ${cst}$, où $x$ est le nombre de minutes.<br/>Calcule le <strong>prix total</strong> pour $x = ${val}$ minutes.`
          },
          {
            letter: 'x',
            build: () => `Un maraîcher vend ses tomates $${coef}$ € le kilo, avec $${cst}$ € de frais de livraison fixes.<br/>Le prix total est $${coef}x + ${cst}$, où $x$ représente le nombre de kilos.<br/>Calcule le <strong>prix total</strong> pour $x = ${val}$ kg.`
          },
          {
            letter: 't',
            build: () => `Un loueur de vélos facture $${coef}$ € par heure, plus $${cst}$ € de forfait fixe.<br/>Le prix total s'écrit $${coef}t + ${cst}$, où $t$ est la durée en heures.<br/>Calcule le <strong>prix total</strong> pour $t = ${val}$ heures.`
          },
          {
            letter: 'n',
            build: () => `Dans un jeu vidéo, chaque niveau réussi rapporte $${coef}$ points, et le joueur démarre avec un bonus de $${cst}$ points.<br/>Le score total est $${coef}n + ${cst}$, où $n$ est le nombre de niveaux réussis.<br/>Calcule le <strong>score total</strong> pour $n = ${val}$ niveaux.`
          },
          {
            letter: 'x',
            build: () => `Une facture d'eau comprend $${coef}$ € par m³ consommé, plus $${cst}$ € d'abonnement fixe.<br/>Le montant total est $${coef}x + ${cst}$, où $x$ est le nombre de m³ consommés.<br/>Calcule le <strong>montant total</strong> pour $x = ${val}$ m³.`
          },
          {
            letter: 'a',
            build: () => `Détermine la valeur de l'expression $${coef}a + ${cst}$ pour $a = ${val}$.`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: result,
          tolerance: 0,
          unit: '',
          hint: `Substitue $${ctx.letter}$ par $${val}$ : $${coef} \\times ${val} + ${cst}$.`,
          solution: [
            `On substitue la valeur à la lettre, puis on calcule.`,
            `On remplace $${ctx.letter}$ par $${val}$ :`,
            `$${coef} \\times ${val} + ${cst} = ${coef * val} + ${cst} = ${result}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un maraîcher vend des tomates $t$ € le kg et des salades $s$ € la pièce. Un client achète $3$ kg de tomates et $4$ salades.',
      tasks: [
        'Écrire une expression littérale du prix total payé par le client.',
        'Calculer le prix total si $t = 2{,}50$ € et $s = 0{,}80$ €.',
        'Un second client achète $5$ kg de tomates et $2$ salades. Écrire son prix total et le calculer avec les mêmes prix.'
      ],
      solutions: [
        'Prix total : $3t + 4s$.',
        '$3 \\times 2{,}50 + 4 \\times 0{,}80 = 7{,}50 + 3{,}20 = 10{,}70$ €.',
        'Second client : $5t + 2s = 5 \\times 2{,}50 + 2 \\times 0{,}80 = 12{,}50 + 1{,}60 = 14{,}10$ €.'
      ],
      finalAnswer: 'Le premier client paie $10{,}70$ €, le second $14{,}10$ €.'
    },

    evaluation: {
      title: 'Évaluation — Expressions littérales',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer la valeur de $4x - 3$ pour $x = 5$.',
          type: 'numeric',
          answer: 17,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$4x - 3 = 4 \\times 5 - 3 = 20 - 3 = 17$.'
        },
        {
          statement: 'Réduire l\'expression $7a - 2b + 3a + 5b$. L\'expression réduite a un coefficient devant $a$ de :',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On regroupe les termes semblables : $7a + 3a = 10a$ et $-2b + 5b = 3b$. L\'expression réduite est $10a + 3b$. Le coefficient devant $a$ est $10$.'
        },
        {
          statement: 'Laquelle de ces simplifications est correcte ?',
          type: 'multiple-choice',
          options: [
            '$3 + 5x = 8x$',
            '$3x + 5x = 8x$',
            '$3x \\times 5x = 15x$',
            '$3x + 5 = 8x$'
          ],
          answer: 1,
          points: 2,
          correction: 'Seuls les termes semblables peuvent s\'additionner. $3x + 5x = (3+5)x = 8x$ est correct.'
        },
        {
          statement: 'Calculer la valeur de $2x^2 + 3x - 1$ pour $x = 3$.',
          type: 'numeric',
          answer: 26,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$2 \\times 3^2 + 3 \\times 3 - 1 = 2 \\times 9 + 9 - 1 = 18 + 9 - 1 = 26$.'
        },
        /* QUESTION REECRITE LE 2026-09-13, pour deux raisons cumulees.

           1. PROGRAMME. Elle demandait la valeur de $5(x + 2) - 3x$, dont la
              lecture naturelle passe par la distributivite — au programme de
              QUATRIEME. Un eleve de cinquieme ne s'en sort qu'en substituant
              d'abord, ce que l'enonce n'indiquait pas : la question etait donc
              plus difficile qu'elle n'en avait l'air, et pour une raison hors
              programme.

           2. COMPETENCES. C'etait la TROISIEME substitution des cinq questions,
              alors que le premier attendu du chapitre — « produire une
              expression litterale » — n'etait evalue nulle part, et que la
              grille de suivi imprime une colonne « modeliser » qui serait
              restee vide toute l'annee.

           La question demande desormais d'ECRIRE l'expression qui traduit une
           situation, sans la calculer. Les quatre propositions sont les quatre
           lectures possibles de l'enonce, dont trois confondent ce qui est fixe
           et ce qui varie — l'erreur reelle des eleves sur ce type de tache. */
        {
          statement: 'Un abonnement de salle de sport coûte $20$ € à l\'inscription, puis $15$ € par mois. On note $m$ le nombre de mois. Quelle expression donne le montant total payé ?',
          type: 'multiple-choice',
          options: [
            '$20m + 15$',
            '$15m + 20$',
            '$35m$',
            '$20 + 15 + m$'
          ],
          answer: 1,
          points: 2,
          correction: 'Les $15$ € se répètent à chaque mois : ils se multiplient donc par $m$, ce qui donne $15m$. ' +
            'Les $20$ € d\'inscription ne sont payés qu\'une seule fois : ils s\'ajoutent sans être multipliés. ' +
            'L\'expression est donc $15m + 20$. ' +
            'La proposition 1 inverse les deux rôles (elle ferait payer $20$ € par mois). ' +
            'La proposition 3 additionne d\'abord $20$ et $15$, comme si l\'inscription se répétait elle aussi chaque mois. ' +
            'La proposition 4 ajoute le nombre de mois au lieu de le multiplier par le tarif mensuel. ' +
            'Contrôle : pour $m = 2$ mois, on doit payer $20 + 15 + 15 = 50$ €, et $15 \\times 2 + 20 = 50$ ✓'
        }
      ]
    }
  });
