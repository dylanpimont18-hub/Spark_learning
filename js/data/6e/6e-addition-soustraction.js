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
      /* « Decouvrir » reecrit le 2026-09-13. Le chapitre le plus ingrat du lot :
         la vraie question n'est pas « comment additionner » mais « pourquoi
         aligner les virgules et non les bords ». Entree retenue : un calcul de
         caisse ou le mauvais alignement donne 50 € au lieu de 16,25 € — un
         resultat visiblement absurde, et surtout REELLEMENT obtenu par la
         faute decrite (125 + 375), pas invente pour les besoins du recit.
         L'eleve constate l'erreur AVANT d'apprendre la regle, si bien que la
         regle arrive comme sa reparation et non comme une consigne. */
      intro: 'À la caisse, deux articles : $12{,}5$ € et $3{,}75$ €. Tu poses l\'addition en colonnes, comme avec les entiers, en alignant sagement les chiffres sur la droite.<br/><br/>' +
        'Le chiffre $5$ des dixièmes se retrouve alors sous le $5$ des centièmes : on additionne $125$ et $375$, et l’on annonce $50$ €. Or $12$ € plus $3$ €, cela fait forcément un peu plus de $15$ € — jamais $50$. Pourquoi la méthode qui marchait si bien avec les entiers se met-elle soudain à trahir ?<br/><br/>' +
        'Parce qu\'en alignant sur la droite, on a additionné des dixièmes avec des centièmes — des grandeurs qui ne sont pas du même rang, comme si l\'on ajoutait des euros à des centimes. Un chiffre ne vaut que par sa position, et l\'addition en colonnes suppose que chaque colonne parle de la même chose.<br/><br/>' +
        'D\'où la règle unique de ce chapitre : <strong>aligner les virgules</strong>, et non les bords. Les unités se retrouvent alors sous les unités, les dixièmes sous les dixièmes, et le calcul redevient fiable.<br/><br/>' +
        'Si les nombres n\'ont pas le même nombre de décimales, on complète avec des zéros : $8{,}7$ devient $8{,}70$. On calcule ensuite colonne par colonne, de droite à gauche. Pour l\'<strong>addition</strong>, une retenue se propage quand une somme dépasse $9$ ; pour la <strong>soustraction</strong>, un emprunt se propage quand le chiffre du haut est plus petit.',

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
      diagram: {
        theme: 'maths',
        kicker: 'Addition et soustraction',
        title: 'Poser une soustraction décimale avec retenues',
        description: 'Sur l\'exemple du cours $15{,}20 - 6{,}75$, les virgules sont alignées et chaque emprunt se lit colonne par colonne jusqu\'au résultat $8{,}45$.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="add-soustr-title add-soustr-desc">
            <title id="add-soustr-title">Soustraction posee de 15,20 par 6,75</title>
            <desc id="add-soustr-desc">Le schema montre la soustraction posee de 15,20 par 6,75 colonne par colonne, avec virgules alignees, emprunts successifs et resultat 8,45.</desc>
            <line class="guide-line" x1="170" y1="52" x2="170" y2="222"></line>
            <rect x="50" y="14" width="260" height="32" rx="12" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="64" y="35">Étape clé : aligner les virgules</text>
            <text class="tick-label" x="100" y="60">Diz.</text>
            <text class="tick-label" x="140" y="60">Unités</text>
            <text class="tick-label" x="188" y="60">Dix.</text>
            <text class="tick-label" x="220" y="60">Cent.</text>
            <text class="annotation-label" x="106" y="95">1</text>
            <text class="annotation-label" x="146" y="95">5</text>
            <text class="annotation-label" x="166" y="95">,</text>
            <text class="annotation-label" x="196" y="95">2</text>
            <text class="annotation-label" x="231" y="95">0</text>
            <text class="annotation-label" x="70" y="135">-</text>
            <text class="annotation-label" x="146" y="135">6</text>
            <text class="annotation-label" x="166" y="135">,</text>
            <text class="annotation-label" x="196" y="135">7</text>
            <text class="annotation-label" x="231" y="135">5</text>
            <line class="frame-line" x1="65" y1="150" x2="255" y2="150"></line>
            <text class="tick-label" x="126" y="172">14-6=8</text>
            <text class="tick-label" x="178" y="172">11-7=4</text>
            <text class="tick-label" x="216" y="172">10-5=5</text>
            <rect x="125" y="186" width="130" height="40" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
            <text class="annotation-label" x="146" y="212">8</text>
            <text class="annotation-label" x="166" y="212">,</text>
            <text class="annotation-label" x="196" y="212">4</text>
            <text class="annotation-label" x="231" y="212">5</text>
          </svg>
        `,
        notes: [
          'On complète $15{,}2$ en $15{,}20$ pour avoir autant de décimales que $6{,}75$, puis on aligne les virgules avant tout calcul.',
          'Centièmes : $0 - 5$ est impossible, on emprunte $1$ dixième : $10 - 5 = 5$.',
          'Dixièmes : après avoir prêté $1$, il reste $1$ dixième pour $7$ ; on emprunte à nouveau à la colonne des unités : $11 - 7 = 4$.',
          'Unités : après avoir prêté $1$, il reste $4$ unités pour $6$ ; on emprunte à la dizaine : $14 - 6 = 8$.'
        ],
        reading: 'Le résultat se lit directement sous la barre, colonne par colonne : unités, dixièmes puis centièmes, dans le même ordre que le calcul.',
        caption: 'Soustraction posée sur l\'exemple du cours : $15{,}20 - 6{,}75 = 8{,}45$.'
      },
      // Schemas secondaires (2026-09-12). La figure principale pose une
      // SOUSTRACTION deja bien alignee : elle montre le calcul, jamais la faute
      // qui le precede, ni pourquoi l'alignement est la bonne regle. Les trois
      // figures ci-dessous prennent le chapitre par ses trois manques — le
      // piege de l'alignement, que le bloc « piege » enonce sans le dessiner ;
      // la retenue de l'ADDITION, absente de la figure principale qui ne traite
      // que l'emprunt ; et la verification (a - b) + b = a, listee dans les
      // formules et jamais illustree.
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le piège de l’alignement',
          title: 'On aligne les virgules, pas les derniers chiffres',
          description: 'Pour poser $12{,}4 + 3{,}75$, la tentation est d\'aligner les nombres <strong>par la droite</strong>, comme pour des entiers. C\'est justement l\'erreur : ce qui doit se retrouver l\'un sous l\'autre, ce sont les <strong>chiffres de même rang</strong>.',
          svg: `
            <svg viewBox="0 0 400 250" role="img" aria-labelledby="add-alignement-title add-alignement-desc">
              <title id="add-alignement-title">Bonne et mauvaise pose de l'addition 12,4 plus 3,75</title>
              <desc id="add-alignement-desc">En haut figure la pose correcte de l'addition de 12,4 et 3,75 : les virgules sont l'une sous l'autre, on a complete 12,4 en 12,40 pour lui donner autant de decimales, et chaque colonne regroupe des chiffres de meme rang, ce qui donne le resultat 16,15. En dessous, en trait tirete et en teinte faible, figure la pose fausse ou les deux nombres ont ete cales par la droite : le 5 des centiemes se retrouve sous le 4 des dixiemes, les virgules ne sont plus alignees, et l'addition melange des rangs differents. La regle est rappelee : ce sont les rangs qui doivent se correspondre, pas les derniers chiffres ecrits.</desc>

              <!-- FIGURE PIEGE : la pose JUSTE en haut et en teinte d'accent, la
                   pose fausse en dessous, en tirets et en teinte faible. L'oeil
                   lit le haut d'abord, c'est la bonne forme qui doit rester en
                   memoire. Les deux poses partagent la MEME grille de colonnes
                   et les MEMES chiffres : seul leur calage change. -->

              <text class="tick-label" x="20" y="18">Rangs :</text>
              <text class="tick-label" x="150" y="18" text-anchor="middle">unités</text>
              <text class="tick-label" x="212" y="18" text-anchor="middle">dixièmes</text>
              <text class="tick-label" x="276" y="18" text-anchor="middle">centièmes</text>

              <rect x="16" y="26" width="368" height="104" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <text class="annotation-label" x="30" y="46">Pose juste : virgules alignées</text>

              <!-- La colonne des virgules est le seul repere vertical trace : il
                   est ce que la figure demontre, il doit traverser la pose. -->
              <line class="guide-line" x1="180" y1="54" x2="180" y2="120"></line>

              <text class="annotation-label" x="118" y="72">1</text>
              <text class="annotation-label" x="150" y="72">2</text>
              <text class="annotation-label" x="176" y="72">,</text>
              <text class="annotation-label" x="212" y="72">4</text>
              <text class="annotation-label" x="276" y="72">0</text>
              <text class="annotation-label" x="60" y="96">+</text>
              <text class="annotation-label" x="150" y="96">3</text>
              <text class="annotation-label" x="176" y="96">,</text>
              <text class="annotation-label" x="212" y="96">7</text>
              <text class="annotation-label" x="276" y="96">5</text>
              <line class="frame-line" x1="100" y1="104" x2="296" y2="104"></line>
              <text class="annotation-label" x="118" y="124">1</text>
              <text class="annotation-label" x="150" y="124">6</text>
              <text class="annotation-label" x="176" y="124">,</text>
              <text class="annotation-label" x="212" y="124">1</text>
              <text class="annotation-label" x="276" y="124">5</text>
              <text class="tick-label" x="312" y="76">on complète</text>
              <text class="tick-label" x="312" y="94">12,4 en 12,40</text>

              <rect x="16" y="146" width="368" height="94" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 5%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))" stroke-dasharray="6 4"></rect>
              <text class="label-soft" x="30" y="166">Pose fausse : nombres calés par la droite</text>

              <!-- 2026-09-12 : cette ligne etait posee en 150/182/208/244, si
                   bien que le 4 des dixiemes tombait a x = 244 alors que le 5
                   des centiemes de la ligne du bas est a x = 276. Les deux
                   nombres n'etaient donc PAS cales par la droite : la « pose
                   fausse » ne montrait pas l'erreur qu'elle est censee montrer,
                   et le desc comme la note 3 comme le commentaire affirmaient
                   tous les trois que « le 5 des centiemes se retrouve sous le 4
                   des dixiemes » — ce que la figure contredisait. Ligne
                   decalee de +32 unites (une colonne) pour que le dernier
                   chiffre ecrit de 12,4 tombe exactement sur le dernier chiffre
                   de 3,75, ce qu'est un calage par la droite. Les virgules
                   sont alors en escalier (240 contre 176), ce que le texte
                   annonce aussi. -->
              <text class="tick-label" x="182" y="196">1</text>
              <text class="tick-label" x="214" y="196">2</text>
              <text class="tick-label" x="240" y="196">,</text>
              <text class="tick-label" x="276" y="196">4</text>
              <text class="tick-label" x="60" y="220">+</text>
              <text class="tick-label" x="150" y="220">3</text>
              <text class="tick-label" x="176" y="220">,</text>
              <text class="tick-label" x="212" y="220">7</text>
              <text class="tick-label" x="276" y="220">5</text>
              <text class="tick-label" x="298" y="200">le 5 des cent.</text>
              <text class="tick-label" x="298" y="218">tombe sous le 4</text>
              <text class="tick-label" x="298" y="234">des dixièmes</text>
            </svg>
          `,
          notes: [
            'Aligner les virgules, c\'est mettre <strong>les unités sous les unités</strong>, les dixièmes sous les dixièmes, les centièmes sous les centièmes. La virgule n\'est qu\'un repère visible de ce rangement.',
            'Pour y arriver, on complète avec des zéros : $12{,}4$ s\'écrit $12{,}40$. Ce zéro ne change pas la valeur, il donne juste une place au rang des centièmes.',
            'La pose fausse cale les deux nombres par la droite, comme pour des entiers : le $5$ des centièmes se retrouve alors sous le $4$ des dixièmes, et l\'addition additionne des grandeurs qui ne sont pas comparables.',
            'Résultat correct : $12{,}40 + 3{,}75 = 16{,}15$.'
          ],
          reading: 'Regarde uniquement la colonne des virgules. En haut elle est parfaitement verticale : c\'est le signe que chaque colonne regroupe un seul rang. En bas elle est en escalier, et il suffit de ce décalage pour que tout le calcul soit faux, même si chaque addition de colonne est juste.',
          caption: 'La même addition posée deux fois : virgules alignées en haut, nombres calés par la droite en bas.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que veut dire « je retiens 1 »',
          title: 'Dix unités font une dizaine',
          description: 'La retenue n\'est pas un chiffre que l\'on déplace par convention : c\'est un <strong>échange</strong>. Dès qu\'une colonne réunit $10$ jetons, ces dix jetons se remplacent par <strong>un seul</strong> jeton de la colonne de gauche, qui vaut autant.',
          svg: `
            <svg viewBox="0 0 400 226" role="img" aria-labelledby="add-retenue-title add-retenue-desc">
              <title id="add-retenue-title">La retenue expliquee par le groupement de dix unites</title>
              <desc id="add-retenue-desc">On additionne 8 unites et 7 unites, ce qui fait 15 jetons dans la colonne des unites. Les jetons sont dessines et regroupes : dix d'entre eux sont entoures ensemble dans un cadre arrondi, et les cinq autres restent seuls a cote. Le paquet de dix est echange contre un unique jeton place dans la colonne des dizaines, qui devient la retenue. Il reste donc 5 unites ecrites au resultat et 1 dizaine reportee a gauche, ce qui donne quinze. La regle est rappelee sous la figure : on ecrit le chiffre des unites et on reporte la dizaine.</desc>

              <defs>
                <marker id="add-retenue-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Le paquet de dix est une FORME FERMEE, pas un simple
                   espacement : sans le cadre, l'oeil ne separe pas les dix jetons
                   groupes des cinq qui restent, et le groupement, qui est toute
                   la demonstration, ne se voit plus. -->

              <text class="tick-label" x="20" y="20">8 + 7 dans la colonne des unités : 15 jetons</text>

              <rect x="16" y="34" width="222" height="60" rx="14" fill="color-mix(in srgb, var(--diagram-accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 40%, var(--border))"></rect>
              <circle class="plot-point" cx="38" cy="52" r="6"></circle>
              <circle class="plot-point" cx="82" cy="52" r="6"></circle>
              <circle class="plot-point" cx="126" cy="52" r="6"></circle>
              <circle class="plot-point" cx="170" cy="52" r="6"></circle>
              <circle class="plot-point" cx="214" cy="52" r="6"></circle>
              <circle class="plot-point" cx="38" cy="78" r="6"></circle>
              <circle class="plot-point" cx="82" cy="78" r="6"></circle>
              <circle class="plot-point" cx="126" cy="78" r="6"></circle>
              <circle class="plot-point" cx="170" cy="78" r="6"></circle>
              <circle class="plot-point" cx="214" cy="78" r="6"></circle>
              <text class="annotation-label" x="127" y="112" text-anchor="middle">un paquet de 10</text>

              <!-- Les cinq restants gardent le meme jeton et la meme taille : ce
                   sont les memes objets, seule leur appartenance a un paquet
                   change. -->
              <circle class="plot-point" cx="270" cy="52" r="6"></circle>
              <circle class="plot-point" cx="300" cy="52" r="6"></circle>
              <circle class="plot-point" cx="330" cy="52" r="6"></circle>
              <circle class="plot-point" cx="285" cy="78" r="6"></circle>
              <circle class="plot-point" cx="315" cy="78" r="6"></circle>
              <text class="tick-label" x="300" y="112" text-anchor="middle">5 unités restantes</text>

              <line class="curve-main" x1="127" y1="126" x2="127" y2="158" marker-end="url(#add-retenue-pointe)"></line>
              <text class="tick-label" x="138" y="146">se remplace par</text>

              <rect x="16" y="166" width="368" height="52" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <circle class="plot-point" cx="42" cy="192" r="6"></circle>
              <text class="annotation-label" x="60" y="188">1 dizaine reportée à gauche</text>
              <text class="tick-label" x="60" y="208">et 5 unités écrites au résultat : 8 + 7 = 15</text>
            </svg>
          `,
          notes: [
            'Quand une colonne dépasse $9$, elle ne peut plus s\'écrire avec un seul chiffre : il faut échanger.',
            '$8 + 7 = 15$ jetons. On en groupe $10$, que l\'on remplace par $1$ jeton de la colonne voisine à gauche — celle des dizaines.',
            'Il reste $5$ jetons : c\'est le chiffre que l\'on écrit sous la barre. Le jeton échangé, lui, est la <strong>retenue</strong> que l\'on ajoute à la colonne suivante.',
            'Le même échange fonctionne à tous les rangs : $10$ centièmes s\'échangent contre $1$ dixième, $10$ dixièmes contre $1$ unité.'
          ],
          reading: 'Compte les jetons de la figure : il y en a bien $15$ avant l\'échange, et il y en a toujours $15$ après — un jeton de dizaine plus cinq jetons d\'unité. Rien n\'a été perdu ni créé : la retenue ne fait que réécrire la même quantité avec moins de jetons.',
          caption: 'La retenue de $8 + 7$ : dix unités groupées et échangées contre une dizaine, cinq unités restantes.'
        },
        {
          theme: 'maths',
          kicker: 'Vérifier sans refaire le calcul',
          title: 'Reculer puis avancer : $(a - b) + b = a$',
          description: 'Sur une droite graduée, additionner c\'est <strong>avancer</strong> et soustraire c\'est <strong>reculer</strong>. Un aller-retour de même longueur ramène donc forcément au point de départ : c\'est ce qui rend la vérification $(a - b) + b = a$ évidente.',
          svg: `
            <svg viewBox="8 8 376 164" role="img" aria-labelledby="add-droite-title add-droite-desc">
              <title id="add-droite-title">Soustraire puis rajouter sur une droite graduee</title>
              <desc id="add-droite-desc">Une droite graduee va de 8 a 16, avec une graduation par unite. On part du point 15,2. Une premiere fleche recule de 6,75 vers la gauche et arrive au point 8,45 : c'est la soustraction 15,2 moins 6,75. Une seconde fleche repart de 8,45 et avance de la meme longueur 6,75 vers la droite : elle revient exactement au point de depart 15,2. Comme les deux deplacements ont la meme longueur et des sens opposes, ils s'annulent. C'est ce qui justifie la verification d'une soustraction : la difference a laquelle on rajoute le nombre soustrait redonne toujours le nombre de depart.</desc>

              <defs>
                <marker id="add-droite-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Les deux deplacements sont poses de part et d'autre de l'axe,
                   pas l'un derriere l'autre : superposes, leurs deux pointes se
                   recouvriraient et l'aller-retour ne se lirait plus. -->

              <line class="axis" x1="20" y1="100" x2="384" y2="100" marker-end="url(#add-droite-pointe)"></line>
              <line class="grid-line" x1="34" y1="94" x2="34" y2="106"></line>
              <text class="tick-label" x="34" y="122" text-anchor="middle">8</text>
              <line class="grid-line" x1="76" y1="94" x2="76" y2="106"></line>
              <text class="tick-label" x="76" y="122" text-anchor="middle">9</text>
              <line class="grid-line" x1="118" y1="94" x2="118" y2="106"></line>
              <text class="tick-label" x="118" y="122" text-anchor="middle">10</text>
              <line class="grid-line" x1="160" y1="94" x2="160" y2="106"></line>
              <text class="tick-label" x="160" y="122" text-anchor="middle">11</text>
              <line class="grid-line" x1="202" y1="94" x2="202" y2="106"></line>
              <text class="tick-label" x="202" y="122" text-anchor="middle">12</text>
              <line class="grid-line" x1="244" y1="94" x2="244" y2="106"></line>
              <text class="tick-label" x="244" y="122" text-anchor="middle">13</text>
              <line class="grid-line" x1="286" y1="94" x2="286" y2="106"></line>
              <text class="tick-label" x="286" y="122" text-anchor="middle">14</text>
              <line class="grid-line" x1="328" y1="94" x2="328" y2="106"></line>
              <text class="tick-label" x="328" y="122" text-anchor="middle">15</text>
              <line class="grid-line" x1="370" y1="94" x2="370" y2="106"></line>
              <text class="tick-label" x="370" y="122" text-anchor="middle">16</text>

              <circle class="plot-point" cx="52.9" cy="100" r="4.5"></circle>
              <circle class="plot-point" cx="336.4" cy="100" r="4.5"></circle>

              <!-- Aller : on RECULE, la pointe va vers la gauche. -->
              <line class="curve-main" x1="336.4" y1="66" x2="52.9" y2="66" marker-end="url(#add-droite-pointe)"></line>
              <line class="guide-line" x1="336.4" y1="66" x2="336.4" y2="100"></line>
              <line class="guide-line" x1="52.9" y1="66" x2="52.9" y2="100"></line>
              <text class="annotation-label" x="194" y="56" text-anchor="middle">on recule de 6,75</text>
              <text class="annotation-label" x="336" y="34" text-anchor="middle">départ : 15,2</text>

              <!-- Retour : on AVANCE de la meme longueur, la pointe va vers la
                   droite. Meme classe de trait et meme longueur que l'aller :
                   seule la grandeur etudiee, le SENS, change. -->
              <line class="curve-main" x1="52.9" y1="150" x2="336.4" y2="150" marker-end="url(#add-droite-pointe)"></line>
              <line class="guide-line" x1="52.9" y1="100" x2="52.9" y2="150"></line>
              <line class="guide-line" x1="336.4" y1="100" x2="336.4" y2="150"></line>
              <text class="annotation-label" x="194" y="168" text-anchor="middle">on avance de 6,75 : retour au départ</text>
              <text class="annotation-label" x="53" y="144" text-anchor="middle">8,45</text>
            </svg>
          `,
          notes: [
            'Sur la droite graduée, $15{,}2 - 6{,}75$ se lit comme un recul de $6{,}75$ à partir de $15{,}2$ : on arrive en $8{,}45$.',
            'Rajouter $6{,}75$ à $8{,}45$ est le déplacement exactement inverse, de même longueur : on revient donc en $15{,}2$.',
            'C\'est la vérification écrite dans le cours : $(a - b) + b = a$. Ici $(15{,}2 - 6{,}75) + 6{,}75 = 15{,}2$.',
            'Cette vérification est utile parce qu\'elle emploie l\'opération <strong>inverse</strong> : refaire la soustraction reproduirait la même erreur, refaire l\'addition non.'
          ],
          reading: 'Les deux flèches ont rigoureusement la même longueur, seul leur sens diffère : c\'est pour cela qu\'elles s\'annulent. Si, après avoir rajouté $6{,}75$, tu ne retombes pas sur $15{,}2$, la soustraction est fausse — et tu le sais sans avoir eu à la refaire.',
          caption: 'Sur la droite graduée : reculer de $6{,}75$ depuis $15{,}2$ mène en $8{,}45$, et avancer de $6{,}75$ y ramène.'
        }
      ],
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
      { q: 'Un élève calcule $15{,}2 - 6{,}75$ et trouve $8{,}55$. Où est l\'erreur ?', options: ['Il n\'a pas aligné les virgules.', 'Il n\'y a pas d\'erreur.', 'Il a oublié de compléter $15{,}2$ en $15{,}20$ : dans la colonne des centièmes, il a recopié le $5$ au lieu de calculer $0 - 5$ avec un emprunt.', 'Il a inversé les deux nombres.'], answer: 2, correction: 'Avec la colonne des centièmes laissée vide, le $5$ de $6{,}75$ « descend » tel quel et aucun emprunt n\'est pris sur les dixièmes : on obtient $8{,}55$.<br/><br/>En écrivant <strong>$15{,}20$</strong>, la colonne des centièmes donne $0 - 5$ → emprunt → $10 - 5 = 5$, puis les dixièmes $12 - 1 - 7 = 4$ : le bon résultat est $15{,}20 - 6{,}75 = 8{,}45$.<br/><br/>Les virgules étaient bien alignées, sinon les unités et les dizaines auraient été fausses aussi ; et inverser les nombres n\'a pas de sens ici, on ne peut pas retirer $15{,}2$ de $6{,}75$.' },
      { q: 'Marie a $20{,}00$ €. Elle achète un livre à $8{,}95$ € et un stylo à $3{,}50$ €. Combien lui reste-t-il ?', options: ['$7{,}55$ €', '$7{,}45$ €', '$8{,}55$ €', '$6{,}55$ €'], answer: 0, correction: '$8{,}95 + 3{,}50 = 12{,}45$ €. Reste : $20{,}00 - 12{,}45 = 7{,}55$ €.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        // Quatre TACHES distinctes (2026-09-08) : avant, les huit scenarios
        // (temperature, supermarche, chantier...) posaient tous une ADDITION
        // de deux decimaux, si bien que le manuel imprimait trois fois la
        // meme somme. Le chapitre s'appelle « addition ET soustraction ».
        const variante = pick(['somme', 'difference', 'monnaie', 'terme']);

        if (variante === 'somme') {
          const scenario = pick([
            { emoji: '🧮', intro: 'Calcule', suffix: '', unit: '' },
            { emoji: '🛒', intro: 'Au supermarché, tu achètes un pack de yaourts à', suffix: '€ et un jus de fruits à', unit: '€', twoPart: true },
            { emoji: '🏗️', intro: 'Sur un chantier, une planche mesure', suffix: 'm. On en ajoute une deuxième de', unit: 'm', twoPart: true },
            { emoji: '🏃', intro: 'Lors d\'une compétition, un athlète court', suffix: 'km le matin puis', unit: 'km', twoPart: true },
            { emoji: '⚗️', intro: 'En chimie, on mélange', suffix: 'g d\'un produit avec', unit: 'g', twoPart: true }
          ]);
          const a = randFloat(1, 20, 1);
          const b = randFloat(1, 10, 2);
          const sum = parseFloat((a + b).toFixed(2));
          const statement = scenario.twoPart
            ? `${scenario.emoji} ${scenario.intro} $${fr(a)}$ ${scenario.suffix} $${fr(b)}$ ${scenario.unit}. Quel est le total ?`
            : `${scenario.emoji} ${scenario.intro} $${fr(a)} + ${fr(b)}$.`;
          return {
            statement,
            answer: sum,
            tolerance: 0.01,
            unit: scenario.unit,
            hint: `Aligne les virgules : écris $${fr(a)}$ comme $${fr(a, 2)}$, puis additionne colonne par colonne.`,
            solution: [
              `Aligner les virgules : $${fr(a, 2)} + ${fr(b, 2)}$`,
              `On additionne les centièmes, puis les dixièmes, puis les unités.`,
              `Total : $${fr(sum)}$ ${scenario.unit}`
            ]
          };
        }

        if (variante === 'difference') {
          const scenario = pick([
            { emoji: '🌡️', intro: 'Le thermomètre affichait', mid: '°C ce midi. Il a baissé de', unit: '°C' },
            { emoji: '✂️', intro: 'Une bande de tissu mesure', mid: 'm. On en coupe', unit: 'm' },
            { emoji: '⛽', intro: 'Un bidon contient', mid: 'L d\'essence. On en verse', unit: 'L' },
            { emoji: '🎒', intro: 'Un sac pèse', mid: 'kg. On en retire', unit: 'kg' }
          ]);
          const a = randFloat(10, 40, 2);
          const b = randFloat(1, 9, 2);
          const diff = parseFloat((a - b).toFixed(2));
          return {
            statement: `${scenario.emoji} ${scenario.intro} $${fr(a)}$ ${scenario.mid} $${fr(b)}$ ${scenario.unit}. Que reste-t-il ?`,
            answer: diff,
            tolerance: 0.01,
            unit: scenario.unit,
            hint: `Pose la soustraction en alignant les virgules l'une sous l'autre : $${fr(a, 2)} - ${fr(b, 2)}$.`,
            solution: [
              `Aligner les virgules : $${fr(a, 2)} - ${fr(b, 2)}$`,
              `On soustrait les centièmes, puis les dixièmes, puis les unités, avec retenue si besoin.`,
              `Il reste $${fr(diff)}$ ${scenario.unit}`
            ]
          };
        }

        if (variante === 'monnaie') {
          // Rendu de monnaie : une soustraction dont le premier terme est un
          // entier « rond », cas ou l'eleve oublie souvent les zeros.
          const billet = pick([10, 20, 50]);
          const prix = parseFloat((rand(1, billet - 2) + rand(1, 99) / 100).toFixed(2));
          const rendu = parseFloat((billet - prix).toFixed(2));
          return {
            statement: `💶 Tu paies un article de $${fr(prix)}$ € avec un billet de $${billet}$ €. Combien te rend-on, en euros ?`,
            answer: rendu,
            tolerance: 0.01,
            unit: '€',
            hint: `Écris le billet avec deux décimales : $${billet}{,}00$. La soustraction devient plus facile à poser.`,
            solution: [
              `On écrit le billet avec deux décimales : $${billet}{,}00$.`,
              `On pose la soustraction : $${billet}{,}00 - ${fr(prix, 2)}$.`,
              `On rend $${fr(rendu)}$ €.`,
              `Vérification : $${fr(prix)} + ${fr(rendu)} = ${billet}$ € ✓`
            ]
          };
        }

        // « terme » : retrouver le terme manquant d'une addition. L'eleve doit
        // comprendre qu'une addition se « defait » par une soustraction.
        const total = randFloat(15, 40, 2);
        const connu = randFloat(2, 12, 2);
        const manquant = parseFloat((total - connu).toFixed(2));
        const ctx = pick([
          { s: 'Deux paquets pèsent ensemble', u: 'kg', m: 'Le premier pèse' },
          { s: 'Deux trajets font au total', u: 'km', m: 'Le premier fait' },
          { s: 'Deux achats coûtent en tout', u: '€', m: 'Le premier coûte' }
        ]);
        return {
          statement: `${ctx.s} $${fr(total)}$ ${ctx.u}. ${ctx.m} $${fr(connu)}$ ${ctx.u}. Combien vaut le second ?`,
          answer: manquant,
          tolerance: 0.01,
          unit: ctx.u,
          hint: `Le total est une addition : pour retrouver un terme, on soustrait l'autre du total.`,
          solution: [
            `On sait que « premier $+$ second $= ${fr(total)}$ ».`,
            `Pour retrouver le second, on retire le premier du total : $${fr(total, 2)} - ${fr(connu, 2)}$.`,
            `Le second vaut $${fr(manquant)}$ ${ctx.u}.`,
            `Vérification : $${fr(connu)} + ${fr(manquant)} = ${fr(total)}$ ✓`
          ]
        };
      }
    },
    probleme: {
      context: 'Un épicier reçoit une livraison : $12{,}5$ kg de tomates, $8{,}75$ kg de carottes et $5{,}4$ kg de courgettes. Il avait déjà $3{,}25$ kg de tomates en stock.',
      tasks: [
        'Calcule la masse totale livrée.',
        'Quelle est la masse totale de tomates disponibles après livraison ?',
        'Quelle masse de légumes y a-t-il en rayon après la livraison ? Une cliente en achète ensuite $6{,}8$ kg : quelle masse reste-t-il ?'
      ],
      solutions: [
        'Masse livrée : $12{,}5 + 8{,}75 + 5{,}4 = 26{,}65$ kg.',
        'Tomates totales : $12{,}5 + 3{,}25 = 15{,}75$ kg.',
        'En rayon : $26{,}65 + 3{,}25 = 29{,}90$ kg.<br/><br/>Reste : $29{,}90 - 6{,}80 = 23{,}10$ kg.'
      ],
      finalAnswer: 'Il reste $23{,}10$ kg de légumes en rayon.'
    },

    evaluation: {
      title: 'Évaluation — Addition et soustraction',
      duration: '15 min',
      questions: [
        { statement: 'Calcule $14{,}6 + 7{,}85$.', type: 'numeric', answer: 22.45, tolerance: 0.01, unit: '', points: 2, correction: '$14{,}60 + 7{,}85 = 22{,}45$.' },
        { statement: 'Calcule $20{,}03 - 8{,}7$.', type: 'numeric', answer: 11.33, tolerance: 0.01, unit: '', points: 2, correction: '$20{,}03 - 8{,}70 = 11{,}33$.' },
        // Competence « communiquer » (2026-09-12). L'ancienne version demandait
        // de DESIGNER l'erreur ; les options tenaient en trois mots et se triaient
        // au seul resultat numerique, si bien que la question notait un calcul de
        // plus. Elle demande desormais de choisir la phrase qui EXPLIQUE le mieux
        // l'erreur a un camarade : les quatre options annoncent le meme resultat
        // juste, seule la formulation les separe. L'eleve lit et juge un discours
        // mathematique, ce que « communiquer » designe exactement.
        { statement: 'Un élève calcule $6{,}5 + 3{,}28$ et trouve $9{,}33$. Tu dois lui expliquer son erreur.<br/><br/>Quelle explication est la mieux formulée ?', type: 'multiple-choice', options: ['« Tu t\'es trompé, la bonne réponse est $9{,}78$. »', '« Tu as placé le $8$ des centièmes sous le $5$ des dixièmes : en écrivant $6{,}50$ au lieu de $6{,}5$, chaque chiffre retrouve son rang et tu obtiens $9{,}78$. »', '« Il fallait aligner les deux nombres à droite, comme pour les entiers ; tu trouves alors $9{,}78$. »', '« Tu as oublié une retenue entre les dixièmes et les unités, d\'où $9{,}78$. »'], answer: 1, points: 2, correction: 'Les quatre phrases annoncent le même résultat $9{,}78$ : ce n\'est donc pas le calcul qui les départage, mais la <strong>qualité de l\'explication</strong>.<br/><br/>La première corrige sans rien expliquer.<br/><br/>La troisième donne une consigne fausse : aligner à droite est justement ce qui a produit l\'erreur.<br/><br/>La quatrième invente une cause qui n\'est pas en jeu ici.<br/><br/>Seule la deuxième <strong>nomme le rang</strong> de chaque chiffre et <strong>indique le geste</strong> qui répare : compléter par un zéro pour que les deux nombres aient le même nombre de décimales.' },
        { statement: 'Léo a $50$ €. Il achète un jeu à $23{,}45$ € et un livre à $12{,}80$ €. Combien lui reste-t-il ?', type: 'numeric', answer: 13.75, tolerance: 0.01, unit: '€', points: 2, correction: '$23{,}45 + 12{,}80 = 36{,}25$ €. Reste : $13{,}75$ €.' },
        // Competence « chercher » (2026-09-12). L'ancienne question demandait de
        // reconnaitre le mot « commutativite », terme que la note prof signale
        // comme non exigible en sixieme : elle notait du vocabulaire. La version
        // actuelle demande de TROUVER un contre-exemple — essayer des couples
        // jusqu'a en tenir un qui tranche — c'est-a-dire la demarche d'essais que
        // « chercher » designe au referentiel. La reponse reste numerique, donc
        // corrigeable automatiquement par le site.
        { statement: 'On peut échanger les deux nombres d\'une <strong>addition</strong> sans changer le résultat : $7{,}3 + 4{,}5 = 4{,}5 + 7{,}3$.<br/><br/>Cherche si la même chose vaut pour la <strong>soustraction</strong> : essaie plusieurs couples de nombres, puis calcule $9{,}4 - 6{,}1$.<br/><br/>Quelle est la valeur de cette différence ?', type: 'numeric', answer: 3.3, tolerance: 0.01, unit: '', points: 2, correction: 'En essayant quelques couples, on s\'aperçoit vite que l\'échange ne marche plus pour la soustraction.<br/><br/>Ici : $9{,}4 - 6{,}1 = 3{,}3$, alors que $6{,}1 - 9{,}4$ ne donne pas le même nombre.<br/><br/>Un seul exemple bien choisi suffit à le montrer : c\'est un <strong>contre-exemple</strong>, et c\'est une preuve complète.<br/><br/>La réponse attendue est donc $3{,}3$.' }
      ]
    }
  });
