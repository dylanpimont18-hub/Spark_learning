/* =========================================================
   Spark Learning – data/5e/reperage-graphique.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'reperage-graphique',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Repérage spatial et Lecture Graphique',
    subtitle: 'Repère cartésien, interpolation, extrapolation',
    keywords: ['Abscisse', 'Ordonnée', 'Graphique', 'Interpolation'],
    physics: 'Suivi de croissance en SVT, relevés météo, mouvement à vitesse constante en physique-chimie',

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro ouvrait sur « un graphique
         traduit une relation entre deux grandeurs », soit la definition du mot
         graphique. La question retenue oppose deux estimations qui se
         RESSEMBLENT — meme droite, meme geste — et dont une seule est
         legitime : c'est la distinction interpoler/extrapoler, qui est le cœur
         du chapitre et sa seule vraie difficulte. */
      intro: 'Un plant mesure $12$ cm au bout de $2$ semaines et $28$ cm au bout de $6$ semaines. Peux-tu estimer sa taille à $4$ semaines ? Et à $50$ semaines ?<br/><br/>' +
        'Les deux questions se ressemblent, et la même droite semble répondre aux deux. Pourtant la première estimation est raisonnable — $4$ semaines tombe <strong>entre</strong> les deux mesures — tandis que la seconde annoncerait $2$ mètres de haut pour une plante en pot.<br/><br/>' +
        'Prolonger une droite est un geste facile ; savoir jusqu\'où on a le droit de le faire est tout le sujet.<br/><br/>' +
        'Un graphique traduit visuellement une relation entre deux grandeurs. L\'axe horizontal (<strong>abscisse</strong>) porte la variable que l\'on contrôle, l\'axe vertical (<strong>ordonnée</strong>) porte ce que l\'on observe.<br/><br/>' +
        '<strong>Interpoler</strong> signifie estimer une valeur entre deux points mesurés — c\'est fiable si la courbe est régulière. <strong>Extrapoler</strong> signifie prolonger au-delà des mesures — c\'est risqué car une courbe linéaire dans une plage peut devenir non linéaire ailleurs.<br/><br/>' +
        'La <strong>pente</strong> d\'une droite, $a = \\dfrac{\\Delta y}{\\Delta x}$, a toujours un sens concret.<br/><br/>' +
        'Si $y$ est une distance parcourue et $x$ un temps, alors $a$ est une <strong>vitesse</strong> (en km/h par exemple) : le nombre de kilomètres gagnés à chaque heure qui passe.<br/><br/>' +
        'Ne jamais lire un graphe sans vérifier les <strong>unités sur les axes</strong> et l\'origine. Un graphique sans légende est inutilisable !',
      definitions: [
        { term: 'Abscisse', def: 'Coordonnée horizontale d\'un point dans un repère. Première valeur du couple $(x ; y)$.' },
        { term: 'Ordonnée', def: 'Coordonnée verticale d\'un point dans un repère. Seconde valeur du couple $(x ; y)$.' },
        { term: 'Interpolation', def: 'Estimation d\'une valeur entre deux points de mesure connus. Fiable si la courbe est régulière.' },
        { term: 'Extrapolation', def: 'Prolongation de la tendance au-delà des mesures. Moins fiable — nécessite une justification physique.' }
      ],
      example: {
        statement: 'Une droite passe par $A(1 ; 3)$ et $B(4 ; 9)$. Calcule sa pente, puis estime par interpolation l\'ordonnée du point de la droite dont l\'abscisse est $x = 2{,}5$.',
        steps: [
          'Pente : $a = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2$ : à chaque unité d\'abscisse, $y$ augmente de $2$.',
          '$x = 2{,}5$ est à mi-chemin entre $x_A = 1$ et $x_B = 4$. Par interpolation, $y$ est alors à mi-chemin entre $y_A = 3$ et $y_B = 9$, soit $y \\approx 6$.'
        ],
        answer: 'Pente $a = 2$ ; à $x = 2{,}5$, $y \\approx 6$ par interpolation.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Repère cartésien',
        title: 'Lire un point, interpoler et reconnaître une pente',
        description: 'La droite passe par $A(1 ; 3)$ et $B(4 ; 9)$. On voit comment lire un point et estimer une valeur intermédiaire sur une tendance régulière.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="reperage-graph-title reperage-graph-desc">
            <title id="reperage-graph-title">Droite de lecture graphique dans un repère</title>
            <desc id="reperage-graph-desc">La droite relie deux points connus, avec une lecture intermédiaire par interpolation.</desc>
            <line class="grid-line" x1="50" y1="30" x2="310" y2="30"></line>
            <line class="grid-line" x1="50" y1="62" x2="310" y2="62"></line>
            <line class="grid-line" x1="50" y1="94" x2="310" y2="94"></line>
            <line class="grid-line" x1="50" y1="126" x2="310" y2="126"></line>
            <line class="grid-line" x1="50" y1="158" x2="310" y2="158"></line>
            <line class="grid-line" x1="50" y1="190" x2="310" y2="190"></line>
            <line class="grid-line" x1="50" y1="30" x2="50" y2="190"></line>
            <line class="grid-line" x1="102" y1="30" x2="102" y2="190"></line>
            <line class="grid-line" x1="154" y1="30" x2="154" y2="190"></line>
            <line class="grid-line" x1="206" y1="30" x2="206" y2="190"></line>
            <line class="grid-line" x1="258" y1="30" x2="258" y2="190"></line>
            <line class="grid-line" x1="310" y1="30" x2="310" y2="190"></line>
            <line class="axis" x1="50" y1="190" x2="318" y2="190"></line>
            <line class="axis" x1="50" y1="198" x2="50" y2="22"></line>
            <polyline class="graph-line" points="50,174 102,142 154,110 206,78 258,46 310,14"></polyline>
            <line class="guide-line" x1="180" y1="94" x2="180" y2="190"></line>
            <line class="guide-line" x1="50" y1="94" x2="180" y2="94"></line>
            <circle class="plot-point-alt" cx="102" cy="142" r="6"></circle>
            <circle class="plot-point-alt" cx="258" cy="46" r="6"></circle>
            <circle class="plot-point" cx="180" cy="94" r="6"></circle>
            <text class="annotation-label" x="112" y="134">A(1 ; 3)</text>
            <text class="annotation-label" x="196" y="86">Interpolation : (2,5 ; 6)</text>
            <text class="annotation-label" x="224" y="38">B(4 ; 9)</text>
            <text class="axis-label" x="322" y="194">x</text>
            <text class="axis-label" x="56" y="24">y</text>
            <text class="tick-label" x="46" y="206">0</text>
            <text class="tick-label" x="98" y="206">1</text>
            <text class="tick-label" x="150" y="206">2</text>
            <text class="tick-label" x="202" y="206">3</text>
            <text class="tick-label" x="254" y="206">4</text>
            <text class="tick-label" x="306" y="206">5</text>
            <text class="tick-label" x="36" y="194">0</text>
            <text class="tick-label" x="36" y="162">2</text>
            <text class="tick-label" x="36" y="130">4</text>
            <text class="tick-label" x="36" y="98">6</text>
            <text class="tick-label" x="36" y="66">8</text>
            <text class="tick-label" x="30" y="34">10</text>
          </svg>
        `,
        notes: [
          'Le point $A(1 ; 3)$ se lit en allant d’abord vers la droite jusqu’à $x = 1$, puis vers le haut jusqu’à $y = 3$.',
          'Le point intermédiaire $(2{,}5 ; 6)$ n’a pas été mesuré : on l’estime sur la droite, c’est une interpolation.',
          'Comme la droite monte régulièrement, la pente est positive : quand $x$ augmente d’une unité, $y$ augmente de $2$.'
        ],
        reading: 'Toujours lire l’abscisse sur l’axe horizontal puis l’ordonnée sur l’axe vertical. Le couple s’écrit dans cet ordre : $(x ; y)$.',
        caption: 'Repère cartésien avec lecture d’un point connu, d’un second point et d’une valeur interpolée sur la droite reliant $A$ et $B$.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Les trois retenus sont les trois pieges que l'intro du cours nomme
         elle-meme, et qu'aucun encadre ne peut lever :
           1. interpoler et extrapoler traites comme le meme geste ;
           2. la pente calculee en melangeant l'ordre des soustractions ;
           3. la pente jugee A L'OEIL, alors qu'elle depend de l'echelle.

         La figure 3 est la plus importante des trois et la moins attendue :
         c'est la seule qui apprend a se MEFIER du dessin, ce que le cours exige
         (« ne jamais lire un graphe sans verifier les unites sur les axes »).

         Toutes les coordonnees sont CALCULEES a partir des donnees du chapitre
         (le plant du probleme : 12 cm a 2 semaines, 28 cm a 6 semaines, donc
         une pente de 4 cm par semaine exactement) puis converties en
         coordonnees ecran par une echelle explicite, jamais posees a la main. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Entre ou au-delà',
          title: 'Interpoler est sûr, extrapoler ne l\'est pas',
          description: 'Entre deux mesures, prolonger la régularité observée est raisonnable : c\'est <strong>interpoler</strong>. Au-delà de la dernière mesure, plus rien ne garantit qu\'elle continue : c\'est <strong>extrapoler</strong>. Le même trait de crayon, mais pas du tout la même confiance.',
          svg: `
            <svg viewBox="0 0 400 210" role="img" aria-labelledby="repere-interp-title repere-interp-desc">
              <title id="repere-interp-title">Zone d'interpolation et zone d'extrapolation autour de deux mesures</title>
              <desc id="repere-interp-desc">Un repere porte en abscisse les semaines et en ordonnee la hauteur d'un plant en centimetres. Deux mesures sont marquees : 12 centimetres a 2 semaines et 28 centimetres a 6 semaines. Entre ces deux mesures, la droite est tracee en trait plein : c'est la zone d'interpolation, ou l'estimation est fiable, et la hauteur estimee a 4 semaines y vaut 20 centimetres. Au-dela de la derniere mesure, la droite est prolongee en trait tirete jusqu'a 20 semaines, ou elle annoncerait 84 centimetres : c'est la zone d'extrapolation, ou l'estimation n'est plus garantie, car une plante finit par ralentir sa croissance. Les deux zones sont distinguees par la nature du trait et par une etiquette chacune.</desc>

              <!-- Axes. Echelle CALCULEE : 16 unites d'ecran par semaine en
                   abscisse (0 a 20 semaines de x=50 a x=370), 1,4444 unite par
                   centimetre en ordonnee (0 a 90 cm de y=170 a y=40). -->
              <line class="axis" x1="50" y1="170" x2="384" y2="170"></line>
              <line class="axis" x1="50" y1="170" x2="50" y2="34"></line>
              <text class="axis-label" x="384" y="188" text-anchor="end">semaines</text>
              <text class="axis-label" x="44" y="34" text-anchor="end">hauteur en cm</text>

              <!-- Zone d'INTERPOLATION : entre les deux mesures, trait plein. -->
              <line class="curve-main" x1="82" y1="152.7" x2="146" y2="129.6"></line>
              <!-- Zone d'EXTRAPOLATION : au-dela, trait tirete et teinte faible.
                   Meme droite prolongee jusqu'a 20 semaines (84 cm). -->
              <line class="guide-line" x1="146" y1="129.6" x2="370" y2="48.75" stroke-dasharray="6 5"></line>

              <!-- Les deux mesures, en plot-point fort : ce sont les seuls faits
                   du dessin, tout le reste en est deduit. -->
              <circle class="plot-point" cx="82" cy="152.7" r="4"></circle>
              <text class="tick-label" x="76" y="146" text-anchor="end">12 cm</text>
              <circle class="plot-point" cx="146" cy="129.6" r="4"></circle>
              <text class="tick-label" x="152" y="122" text-anchor="start">28 cm</text>

              <!-- La valeur interpolee : cercle VIDE, parce qu'elle est estimee
                   et non mesuree. -->
              <circle class="plot-point-alt" cx="114" cy="141.1" r="4"></circle>
              <text class="label-soft" x="114" y="196" text-anchor="middle">4 sem : 20 cm</text>
              <line class="grid-line" x1="114" y1="141.1" x2="114" y2="170" stroke-dasharray="3 3"></line>

              <circle class="plot-point-alt" cx="370" cy="48.75" r="4"></circle>
              <text class="label-soft" x="364" y="42" text-anchor="end">20 sem : 84 cm ?</text>

              <text class="annotation-label" x="114" y="112" text-anchor="middle">interpoler</text>
              <text class="tick-label" x="114" y="96" text-anchor="middle">entre les mesures</text>
              <text class="label-soft" x="278" y="112" text-anchor="middle">extrapoler</text>
              <text class="tick-label" x="278" y="96" text-anchor="middle">au-delà, sans garantie</text>
            </svg>
          `,
          notes: [
            'Les deux mesures donnent une croissance de $4$ cm par semaine : $\\dfrac{28 - 12}{6 - 2} = \\dfrac{16}{4} = 4$.',
            'À $4$ semaines, on est <strong>entre</strong> les deux mesures : l\'estimation de $20$ cm est fiable.',
            'À $20$ semaines, la droite annoncerait $84$ cm, soit près d\'un mètre. Aucune mesure ne le confirme, et une plante <strong>ralentit</strong> en vieillissant : l\'extrapolation est ici franchement fausse.'
          ],
          reading: 'Repère d\'abord les deux points mesurés : ce sont les seuls faits. Entre eux, tu peux lire la droite en confiance. Au-delà, tu ne lis plus une mesure mais une hypothèse — d\'où le trait en pointillés.',
          caption: 'Zone d\'interpolation (trait plein, entre les mesures) et zone d\'extrapolation (pointillés, au-delà) pour un plant de $12$ cm à $2$ semaines et $28$ cm à $6$ semaines.'
        },
        {
          theme: 'maths',
          kicker: 'Lire une pente',
          title: 'La pente se lit sur un triangle',
          description: 'La pente n\'est pas une formule à retenir mais une <strong>forme à repérer</strong> : entre deux points de la droite, on avance horizontalement, on monte verticalement, et la pente est le rapport des deux. L\'essentiel est de faire les deux soustractions <strong>dans le même ordre</strong>.',
          svg: `
            <svg viewBox="0 0 400 208" role="img" aria-labelledby="repere-pente-title repere-pente-desc">
              <title id="repere-pente-title">Le triangle qui donne la pente entre deux points d'une droite</title>
              <desc id="repere-pente-desc">Une droite passe par le point A de coordonnees 2 et 12 et par le point B de coordonnees 6 et 28. Un triangle rectangle est trace sous la droite : son cote horizontal va de A jusqu'a l'aplomb de B et mesure 4 unites en abscisse, son cote vertical remonte de la jusqu'a B et mesure 16 unites en ordonnee. La pente vaut donc 16 divise par 4, soit 4. Un rappel ecrit precise que les deux soustractions doivent se faire dans le meme ordre, de A vers B au numerateur comme au denominateur.</desc>

              <!-- Echelle CALCULEE : 35,5 unites d'ecran par unite d'abscisse
                   (0 a 8), 4 unites par unite d'ordonnee (0 a 32).
                   A(2;12) -> (127,120) ; B(6;28) -> (269,56). -->
              <line class="axis" x1="56" y1="168" x2="384" y2="168"></line>
              <line class="axis" x1="56" y1="168" x2="56" y2="30"></line>
              <text class="axis-label" x="384" y="186" text-anchor="end">semaines</text>
              <text class="axis-label" x="50" y="30" text-anchor="end">hauteur en cm</text>

              <!-- La droite passe EXACTEMENT par A(127,120) et B(269,56), pente
                   ecran -0,450704. Ses extremites sont CALCULEES sur cette
                   droite, pas arrondies : posees a y=136 et y=32, les deux
                   points marques tombaient a cote du trait (produits vectoriels
                   48 et 32 au lieu de 0), ce qu'aucune relecture n'aurait vu. -->
              <line class="curve-main" x1="91" y1="136.2" x2="322" y2="32.1"></line>

              <!-- Le TRIANGLE de pente, en guide-line : il se lit sous la droite
                   sans la concurrencer. -->
              <line class="guide-line" x1="127" y1="120" x2="269" y2="120"></line>
              <line class="guide-line" x1="269" y1="120" x2="269" y2="56"></line>
              <path class="axis" d="M257 120 L257 108 L269 108"></path>

              <circle class="plot-point" cx="127" cy="120" r="4"></circle>
              <text class="annotation-label" x="119" y="114" text-anchor="end">A</text>
              <circle class="plot-point" cx="269" cy="56" r="4"></circle>
              <text class="annotation-label" x="277" y="50" text-anchor="start">B</text>

              <text class="tick-label" x="198" y="138" text-anchor="middle">on avance de 4</text>
              <text class="tick-label" x="279" y="92" text-anchor="start">on monte de 16</text>

              <text class="annotation-label" x="60" y="196" text-anchor="start">pente = 16 ÷ 4 = 4 cm par semaine</text>
            </svg>
          `,
          notes: [
            'On avance de $6 - 2 = 4$ semaines et l\'on monte de $28 - 12 = 16$ cm.',
            'La pente vaut $\\dfrac{16}{4} = 4$, et son unité se lit sur les axes : des <strong>cm par semaine</strong>.',
            'Les deux soustractions vont de $A$ vers $B$, en haut comme en bas. Les inverser au numérateur seulement donnerait $-4$, une plante qui rapetisse.'
          ],
          reading: 'Pars de $A$, avance horizontalement jusqu\'à te placer sous $B$, puis monte jusqu\'à $B$. Tu viens de dessiner le triangle. La pente est simplement « ce que tu as monté » divisé par « ce que tu as avancé ».',
          caption: 'Le triangle de pente entre $A(2 ; 12)$ et $B(6 ; 28)$ : on avance de $4$, on monte de $16$, la pente vaut $4$ cm par semaine.'
        },
        {
          theme: 'maths',
          kicker: 'Se méfier des axes',
          title: 'La même croissance, deux graphiques très différents',
          description: 'Ces deux graphiques portent <strong>exactement les mêmes mesures</strong>. Seule l\'échelle de l\'axe vertical change. À gauche la hausse paraît spectaculaire, à droite presque plate — et pourtant la pente calculée est <strong>la même</strong>. C\'est pourquoi on ne juge jamais une évolution à l\'œil.',
          svg: `
            <svg viewBox="0 0 400 216" role="img" aria-labelledby="repere-echelle-title repere-echelle-desc">
              <title id="repere-echelle-title">Les memes mesures tracees avec deux echelles verticales differentes</title>
              <desc id="repere-echelle-desc">Deux graphiques cote a cote portent les memes deux mesures : 12 centimetres a 2 semaines et 28 centimetres a 6 semaines. Le graphique de gauche a un axe vertical gradue de 10 a 30 centimetres seulement, si bien que la droite y monte tres fortement. Le graphique de droite a un axe vertical gradue de 0 a 100 centimetres, si bien que la meme droite y parait presque horizontale. La pente calculee vaut pourtant 4 centimetres par semaine dans les deux cas. Les deux dessins ont la meme largeur et la meme hauteur, et seule la graduation de leur axe vertical differe.</desc>

              <!-- GAUCHE : axe vertical de 10 a 30 cm (plage 20). Les mesures 12
                   et 28 occupent donc presque toute la hauteur. -->
              <line class="axis" x1="40" y1="160" x2="176" y2="160"></line>
              <line class="axis" x1="40" y1="160" x2="40" y2="46"></line>
              <text class="tick-label" x="34" y="164" text-anchor="end">10</text>
              <text class="tick-label" x="34" y="52" text-anchor="end">30</text>
              <line class="curve-main" x1="74" y1="148.6" x2="142" y2="57.4"></line>
              <circle class="plot-point" cx="74" cy="148.6" r="4"></circle>
              <circle class="plot-point" cx="142" cy="57.4" r="4"></circle>
              <text class="tick-label" x="108" y="178" text-anchor="middle">axe de 10 à 30</text>
              <text class="label-soft" x="108" y="196" text-anchor="middle">ça flambe</text>

              <!-- DROITE : axe vertical de 0 a 100 cm (plage 100), MEME hauteur
                   de dessin. Les memes mesures y occupent cinq fois moins de
                   place : 12 cm et 28 cm sont proches du bas. -->
              <line class="axis" x1="236" y1="160" x2="372" y2="160"></line>
              <line class="axis" x1="236" y1="160" x2="236" y2="46"></line>
              <text class="tick-label" x="230" y="164" text-anchor="end">0</text>
              <text class="tick-label" x="230" y="52" text-anchor="end">100</text>
              <line class="curve-main" x1="270" y1="146.3" x2="338" y2="128.1"></line>
              <circle class="plot-point" cx="270" cy="146.3" r="4"></circle>
              <circle class="plot-point" cx="338" cy="128.1" r="4"></circle>
              <text class="tick-label" x="304" y="178" text-anchor="middle">axe de 0 à 100</text>
              <text class="label-soft" x="304" y="196" text-anchor="middle">ça stagne</text>

              <text class="annotation-label" x="200" y="22" text-anchor="middle">mêmes mesures, même pente : 4 cm par semaine</text>
              <text class="tick-label" x="200" y="38" text-anchor="middle">12 cm à 2 semaines, 28 cm à 6 semaines</text>
            </svg>
          `,
          notes: [
            'À gauche, l\'axe vertical ne couvre que $20$ cm : la montée de $16$ cm y occupe presque toute la hauteur.',
            'À droite, il couvre $100$ cm : la même montée de $16$ cm n\'occupe plus qu\'un sixième environ.',
            'Dans les deux cas la pente vaut $\\dfrac{28 - 12}{6 - 2} = 4$ cm par semaine. L\'impression visuelle a changé, <strong>le fait n\'a pas bougé</strong>.'
          ],
          reading: 'Avant de dire qu\'une courbe « explose » ou « stagne », lis les graduations de l\'axe vertical : c\'est là que se joue l\'impression. Puis calcule la pente, qui est le seul nombre que l\'échelle ne peut pas déformer.',
          caption: 'Les mêmes mesures ($12$ cm à $2$ semaines, $28$ cm à $6$ semaines) tracées sur un axe vertical de $10$ à $30$ puis de $0$ à $100$ : la pente vaut $4$ cm/semaine dans les deux cas.'
        }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier les axes</strong> : abscisse $x$ (horizontal) = variable indépendante ; ordonnée $y$ (vertical) = variable dépendante.',
          '<strong>Lire un point $(x_0, y_0)$</strong> : partir de $x_0$ sur l\'axe des x, monter verticalement jusqu\'\u00e0 la courbe, puis lire l\'ordonnée à gauche.',
          '<strong>Interpoler / Extrapoler</strong> : interpoler = trouver une valeur entre deux points mesurés ; extrapoler = prolonger la tendance au-delà des mesures (moins fiable).'
        ]
      },
      formulas: [
        'Pente d\'une droite : $a = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$'
      ],
      recap: [
        'Un point se repère par un couple $(x ; y)$ : abscisse d\'abord, ordonnée ensuite.',
        'La pente $a$ se calcule par $\\dfrac{\\Delta y}{\\Delta x}$ — même ordre de soustraction au numérateur et dénominateur.',
        'Interpoler (entre les données) est plus fiable qu\'extrapoler (au-delà).',
        'Toujours vérifier les unités sur les axes avant de lire un graphique.'
      ],
      piege: 'Ne jamais extrapoler trop loin ! La taille d\'un enfant peut suivre une droite assez régulière pendant quelques années, mais cette tendance ne continue pas indéfiniment (personne ne mesure $3$ mètres à $40$ ans). L\'extrapolation n\'est valide que si on a une bonne raison de croire que la tendance se poursuit.'
    },

    quiz: [
      {
        q: 'Sur un graphe, un point a pour coordonnées $(3 ; 7{,}5)$. Cela signifie que :',
        options: [
          'L\'abscisse est $3$ et l\'ordonnée est $7{,}5$',
          'L\'abscisse est $7{,}5$ et l\'ordonnée est $3$',
          'La pente est $7{,}5 / 3 = 2{,}5$',
          'Le point est à $3 + 7{,}5 = 10{,}5$ unités de l\'origine'
        ],
        answer: 0,
        correction: 'Dans le couple $(x ; y)$, le premier terme est TOUJOURS l\'abscisse (axe horizontal) et le second est l\'ordonnée (axe vertical). Donc abscisse = 3, ordonnée = 7,5.'
      },
      {
        q: 'Un robinet remplit un bassin à débit constant. Le niveau d\'eau suit une droite passant par $(0 ; 0)$ et $(2 ; 0{,}8)$ (temps en minutes ; hauteur en mètres). Quelle est la hauteur d\'eau après $1{,}5$ minute ?',
        options: ['$0{,}4$', '$0{,}5$', '$0{,}6$', '$0{,}75$'],
        answer: 2,
        correction: 'Pente : $a = 0{,}8/2 = 0{,}4$ m/min. Pour $t = 1{,}5$ min : $h = 0{,}4 \\times 1{,}5 = 0{,}6$ m. Interpolation linéaire directe.'
      },
      {
        q: 'Une droite passe par $(0 ; 2)$ et $(4 ; 2)$. Un élève dit que sa pente est $\\dfrac{4}{2} = 2$. Quelle est son erreur ?',
        options: [
          'Il a raison : la pente est $\\dfrac{x}{y} = \\dfrac{4}{2} = 2$.',
          'Il a mal choisi les points : il faut prendre $(4;2)$ et $(2;4)$.',
          'La pente est $\\dfrac{2}{4} = 0{,}5$.',
          'Il a inversé : la pente est $\\dfrac{\\Delta y}{\\Delta x} = \\dfrac{2-2}{4-0} = \\dfrac{0}{4} = 0$. La droite est horizontale.'
        ],
        answer: 3,
        correction: 'La pente se calcule toujours $a = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$, jamais $\\dfrac{x}{y}$. Ici $y$ ne change pas ($y_1 = y_2 = 2$), donc $\\Delta y = 0$ et la pente est nulle : la droite est horizontale.'
      },
      {
        q: 'Sur le graphique du cours, la droite passe par $A(1 ; 3)$ et $B(4 ; 9)$. Pour lire la valeur de $y$ quand $x = 3$, on part de $3$ sur l\'axe horizontal, on monte jusqu\'à la droite, puis on lit à gauche. Que trouve-t-on ?',
        options: ['$3$', '$7$', '$6$', '$9$'],
        answer: 1,
        correction: 'À chaque unité vers la droite, $y$ gagne $2$ (la pente).<br/><br/>De $A(1 ; 3)$ à $x = 3$, on avance de $2$ : $y = 3 + 2 \\times 2 = 7$.<br/><br/>$3$ et $9$ sont les ordonnées des points connus, pas celle du point cherché ; $6$ est la lecture à $x = 2{,}5$, celle de l\'exemple du cours.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE LE 2026-09-13.

         C'etait le chapitre le plus pauvre de l'ouvrage : quatre contextes,
         UNE tache (calculer une pente), et une banque du professeur
         litteralement VIDE — le tirage s'arretait a 12 enonces, soit le nombre
         exact d'exercices de l'edition eleve, donc zero supplement. Les
         remediations de la fiche n'avaient nulle part ou renvoyer.

         Trois taches ajoutees, prises dans ce que le chapitre annonce et
         n'entrainait pas :
           - INTERPOLER une valeur intermediaire, qui est le titre meme du
             chapitre et n'apparaissait que dans le probleme ;
           - LIRE une coordonnee, l'attendu le plus elementaire, absent ;
           - DECIDER si une estimation releve de l'interpolation ou de
             l'extrapolation, qui est la seule difficulte conceptuelle du
             chapitre et le sujet de sa question d'evaluation reecrite.
         Mesure avant/apres : 1 tache pour 12 enonces -> 4 taches, 42 enonces. */
      generate() {
        const tache = pick(['pente', 'pente', 'interpoler', 'lire', 'decider']);

        /* TACHE 2 — interpoler a mi-chemin. On impose une abscisse au MILIEU
           des deux mesures : l'ordonnee cherchee est alors la moyenne des deux,
           donc entiere ou a une decimale, sans division penible. */
        if (tache === 'interpoler') {
          /* Plage de depart `y` et vitesse d'evolution `v` (par unite de x)
             portees par le contexte (2026-10-13) : un four a 13 °C ou un train
             a 3 km/h apprenaient a ignorer le sens des nombres. */
          const ctx = pick([
            { nom: 'la température d\'un four', unitX: 'min', unitY: '°C', y: [40, 120], v: [8, 20] },
            { nom: 'le niveau d\'eau d\'une citerne', unitX: 'h', unitY: 'cm', y: [5, 40], v: [2, 12] },
            { nom: 'la distance parcourue par un train', unitX: 'h', unitY: 'km', y: [20, 120], v: [60, 120] },
            { nom: 'la masse de compost accumulée', unitX: 'semaines', unitXs: 'semaine', unitY: 'kg', y: [5, 40], v: [2, 12] }
          ]);
          const ux = (n) => (n > 1 ? ctx.unitX : (ctx.unitXs || ctx.unitX));
          const x1 = rand(1, 4);
          const ecart = 2 * rand(1, 3);          // pair : le milieu tombe juste
          const x2 = x1 + ecart;
          const y1 = rand(ctx.y[0], ctx.y[1]);
          const y2 = y1 + ecart * rand(ctx.v[0], ctx.v[1]);   // ecart pair : la moyenne est entiere
          const xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
          return {
            statement: `On relève ${ctx.nom} à deux instants : $${y1}$ ${ctx.unitY} à $${x1}$ ${ux(x1)}, puis $${y2}$ ${ctx.unitY} à $${x2}$ ${ux(x2)}. Entre les deux, l'évolution est régulière.<br/><br/>Par <strong>interpolation</strong>, estime la valeur à $${xm}$ ${ctx.unitX}, en ${ctx.unitY}.`,
            answer: ym,
            tolerance: 0.02,
            unit: ctx.unitY,
            hint: `$${xm}$ est exactement au <strong>milieu</strong> de $${x1}$ et $${x2}$.<br/><br/>Si l'évolution est régulière, la valeur cherchée est donc au milieu de $${y1}$ et $${y2}$ : c'est leur moyenne.`,
            solution: [
              `Interpoler à mi-chemin revient à prendre la moyenne des deux mesures qui encadrent.`,
              `L'abscisse $${xm}$ est au milieu de $${x1}$ et $${x2}$.`,
              `L'évolution étant régulière, l'ordonnée est au milieu de $${y1}$ et $${y2}$ : $\\dfrac{${y1} + ${y2}}{2} = ${fr(ym)}$ ${ctx.unitY}.`,
              `L'estimation est ici fiable, car $${xm}$ se situe <strong>entre</strong> les deux mesures.`
            ]
          };
        }

        /* TACHE 3 — lire une coordonnee. L'attendu le plus elementaire du
           chapitre, et le seul que la banque n'exercait pas du tout. Le piege
           vise est l'inversion abscisse/ordonnee, erreur numero un du chapitre
           d'apres la fiche professeur. */
        if (tache === 'lire') {
          const px = rand(-6, 8), py = rand(-6, 8);
          const quoi = pick([
            { mot: 'abscisse', val: px, rang: 'premier' },
            { mot: 'ordonnée', val: py, rang: 'second' }
          ]);
          const ctx = pick([
            { nom: 'une balise de randonnée', lettre: 'B' },
            { nom: 'un trésor sur une carte', lettre: 'T' },
            { nom: 'une station de métro sur un plan', lettre: 'S' },
            { nom: 'un pion sur un damier', lettre: 'P' }
          ]);
          return {
            statement: `Dans un repère, ${ctx.nom} occupe le point $${ctx.lettre}(${px} ; ${py})$.<br/><br/>Quelle est son <strong>${quoi.mot}</strong> ?`,
            answer: quoi.val,
            tolerance: 0,
            unit: '',
            hint: `Dans un couple $(x ; y)$, l'abscisse vient <strong>toujours en premier</strong> et l'ordonnée en second.<br/><br/>L'abscisse se lit sur l'axe horizontal, l'ordonnée sur l'axe vertical.`,
            solution: [
              `Dans un couple de coordonnées, l'abscisse s'écrit toujours avant l'ordonnée.`,
              `Le point s'écrit $${ctx.lettre}(${px} ; ${py})$ : son abscisse vaut $${px}$ et son ordonnée $${py}$.`,
              `L'${quoi.mot} est donc $${quoi.val}$, c'est le ${quoi.rang} des deux nombres.`
            ]
          };
        }

        /* TACHE 4 — interpolation ou extrapolation. C'est le cœur conceptuel du
           chapitre, celui que l'evaluation teste depuis sa reecriture, et qu'un
           eleve peut manquer tout en calculant parfaitement des pentes.
           Reponse 1 / 0, format du projet pour une question a trancher. */
        if (tache === 'decider') {
          const ctx = pick([
            { nom: 'la croissance d\'un plant', unitX: 'semaines', unitXs: 'semaine', limite: 'une plante finit par ralentir' },
            { nom: 'la charge d\'une batterie', unitX: 'min', limite: 'une batterie sature une fois pleine' },
            { nom: 'le remplissage d\'un réservoir', unitX: 'min', limite: 'un réservoir déborde une fois plein' },
            { nom: 'la fonte d\'un glaçon', unitX: 'min', limite: 'la fonte s\'arrête quand tout est fondu' }
          ]);
          const x1 = rand(1, 4), x2 = x1 + rand(3, 6);
          const dedans = pick([true, false]);
          const xq = dedans ? x1 + Math.max(1, Math.floor((x2 - x1) / 2)) : x2 + rand(4, 15);
          const ux = (n) => (n > 1 ? ctx.unitX : (ctx.unitXs || ctx.unitX));
          return {
            statement: `On a mesuré ${ctx.nom} à $${x1}$ ${ux(x1)} puis à $${x2}$ ${ctx.unitX}, et l'évolution entre ces deux relevés est régulière.<br/><br/>On veut maintenant estimer la valeur à $${xq}$ ${ctx.unitX}. Cette estimation est-elle une <strong>interpolation</strong>, donc fiable ? Réponds par $1$ pour oui, $0$ pour non.`,
            answer: dedans ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Regarde d'abord où se situe $${xq}$ par rapport aux deux mesures, $${x1}$ et $${x2}$.<br/><br/>Entre les deux, on interpole et l'estimation est fiable. Au-delà, on extrapole et plus rien ne la garantit.`,
            solution: [
              `Une estimation est fiable si elle tombe entre les mesures, risquée si elle les dépasse.`,
              `Les mesures encadrent l'intervalle de $${x1}$ à $${x2}$ ${ctx.unitX}.`,
              dedans
                ? `La valeur $${xq}$ est <strong>dans</strong> cet intervalle : c'est bien une interpolation, et l'estimation est fiable.`
                : `La valeur $${xq}$ est <strong>au-delà</strong> de la dernière mesure : c'est une extrapolation, et rien ne la garantit — ${ctx.limite}.`
            ]
          };
        }

        /* Contextes compatibles avec une pente de 0,5 a 3 unites par unite de
           temps et des valeurs a une decimale (2026-10-13) : un cycliste a
           2,4 km/h et des « pages lues » non entieres ont ete remplaces. */
        const ctx = pick([
          { name: 'la hauteur d\'eau dans une baignoire', unitX: 'min', unitY: 'cm' },
          { name: 'le prix total à payer', unitX: 'L', unitY: '€' },
          { name: 'la hauteur d\'un plant', unitX: 'semaines', unitXs: 'semaine', unitY: 'cm' },
          { name: 'la longueur de bougie consumée', unitX: 'h', unitY: 'cm' }
        ]);
        const ux = (n) => (n > 1 ? ctx.unitX : (ctx.unitXs || ctx.unitX));
        const x1 = rand(1, 5);
        const a = randFloat(0.5, 3.0, 1);
        const b = rand(0, 5);
        const y1 = parseFloat((a * x1 + b).toFixed(1));
        const x2 = x1 + rand(2, 5);
        const y2 = parseFloat((a * x2 + b).toFixed(1));
        const slope = parseFloat(((y2 - y1) / (x2 - x1)).toFixed(2));
        return {
          statement: `On suit ${ctx.name} : à $x_1 = ${x1}$ ${ux(x1)}, on mesure $y_1 = ${fr(y1)}$ ${ctx.unitY} ; à $x_2 = ${x2}$ ${ux(x2)}, on mesure $y_2 = ${fr(y2)}$ ${ctx.unitY}. Sur un graphique, ces deux mesures correspondent aux points $A(${x1} ; ${fr(y1)})$ et $B(${x2} ; ${fr(y2)})$.<br/><br/>Calcule la <strong>pente</strong> de la droite $(AB)$.`,
          answer: slope,
          tolerance: 0.02,
          unit: `${ctx.unitY}/${ctx.unitXs || ctx.unitX}`,
          hint: `La formule de la pente est $a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${fr(y2)} - ${fr(y1)}}{${x2} - ${x1}}$. Fais bien la soustraction dans le même ordre au numérateur et au dénominateur !`,
          solution: [
            `On applique la formule : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$`,
            `$a = \\dfrac{${fr(y2)} - ${fr(y1)}}{${x2} - ${x1}} = \\dfrac{${fr(parseFloat((y2 - y1).toFixed(1)))}}{${x2 - x1}}$`,
            `$a = ${fr(slope)}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un pépiniériste mesure chaque semaine la hauteur d\'un jeune plant : à $S = 2$ semaines, il mesure $12$ cm ; à $S = 6$ semaines, il mesure $28$ cm. Sur cette période, la croissance est régulière (le graphique est une droite).',
      schema: 'Droite passant par les points (2 ; 12) et (6 ; 28) dans un repère Semaines / Hauteur (cm).',
      tasks: [
        'Calculer la pente de la droite (la vitesse de croissance, en cm par semaine).',
        'Par interpolation, estimer la hauteur du plant à $S = 4$ semaines.',
        'Peut-on utiliser la même méthode pour prédire la hauteur du plant à $S = 50$ semaines ? Pourquoi ?'
      ],
      solutions: [
        'Pente $a = \\dfrac{28 - 12}{6 - 2} = \\dfrac{16}{4} = 4$ cm par semaine.',
        '$S = 4$ est entre les deux mesures (interpolation) : $12 + 4 \\times (4 - 2) = 12 + 8 = 20$ cm.',
        'Non : cela reviendrait à extrapoler très loin des mesures, en supposant que la croissance reste linéaire indéfiniment — or une plante ralentit en vieillissant. Extrapoler loin des données mesurées n\'est pas fiable.'
      ],
      finalAnswer: 'À $4$ semaines, le plant mesure environ $20$ cm (interpolation fiable) ; on ne peut pas prédire fiablement sa hauteur à $50$ semaines par extrapolation.'
    },

    evaluation: {
      title: 'Évaluation — Repérage spatial et Lecture Graphique',
      duration: '25 min',
      questions: [
        {
          statement: 'Un point $M$ a pour coordonnées $(4 ; -2)$ dans un repère. Quelle est son ordonnée ?',
          type: 'numeric',
          answer: -2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Dans un couple $(x ; y)$, le premier nombre est l\'abscisse et le second est l\'ordonnée. Ici l\'ordonnée est $-2$.'
        },
        {
          statement: 'Une droite passe par $A(1 ; 3)$ et $B(5 ; 11)$. Quelle est la pente de cette droite ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{11 - 3}{5 - 1} = \\dfrac{8}{4} = 2$.'
        },
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait une interpolation a mi-chemin, c'est-a-dire un calcul
           de pente suivi d'une moyenne — soit la MEME mecanique que la question
           2, qui demande deja la pente. Deux questions pour une competence, et un
           TROISIEME « calculer » sur cinq dans un ouvrage ou cette competence
           pesait 38,6 % du total, au-dela du plafond de 35 %.

           La nouvelle question porte sur la distinction INTERPOLER / EXTRAPOLER
           appliquee a un cas concret, qui est le cœur du chapitre et sa seule
           vraie difficulte conceptuelle. Aucun calcul n'est demande : il faut
           juger la FIABILITE d'une estimation, ce qui est « raisonner ». La
           reponse 2 est le piege de l'eleve qui prolonge une regularite sans
           voir qu'elle sort du domaine mesure. */
        {
          statement: 'Un plant mesuré chaque semaine atteint $12$ cm à $2$ semaines et $28$ cm à $6$ semaines, avec une croissance régulière. Pour laquelle de ces estimations peut-on se fier à cette régularité ?',
          type: 'multiple-choice',
          options: [
            'Sa hauteur à $50$ semaines, en prolongeant la droite.',
            'Sa hauteur à $4$ semaines, qui est entre les deux mesures.',
            'Les deux : la droite est valable partout.',
            'Aucune des deux : on ne peut rien estimer sans mesurer.'
          ],
          answer: 1,
          points: 2,
          correction: 'À $4$ semaines, on est ENTRE les deux mesures : c\'est une <strong>interpolation</strong>, ' +
            'et elle est fiable puisque la régularité a été observée sur cet intervalle (on trouverait $20$ cm). ' +
            'À $50$ semaines, on sort largement du domaine mesuré : c\'est une <strong>extrapolation</strong>, ' +
            'et elle suppose que la croissance reste régulière indéfiniment — or un plant finit par cesser de grandir. ' +
            'La droite donnerait $204$ cm, ce qui est absurde pour ce plant. ' +
            'La limite n\'est donc pas mathématique mais physique : c\'est ce qui distingue les deux estimations.'
        },
        {
          statement: 'Qu\'appelle-t-on « interpoler » sur un graphique ?',
          type: 'multiple-choice',
          options: [
            'Prolonger la courbe au-delà des points mesurés.',
            'Lire la valeur exacte d\'un point qui a été mesuré.',
            'Estimer une valeur entre deux points mesurés.',
            'Relier tous les points mesurés par des segments.'
          ],
          answer: 2,
          points: 2,
          correction: 'Interpoler signifie estimer une valeur <strong>entre</strong> deux points de mesure connus.<br/><br/>Prolonger au-delà des mesures, c\'est extrapoler — une démarche moins fiable. Lire un point mesuré n\'est pas une estimation : la valeur est connue. Relier les points prépare l\'interpolation, mais n\'en est pas une.'
        },
        {
          statement: 'Une droite passe par $(0 ; 5)$ et $(3 ; 5)$. Quelle est sa pente ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{5 - 5}{3 - 0} = \\dfrac{0}{3} = 0$. La droite est horizontale : l\'ordonnée ne change pas.'
        }
      ]
    }
  });
