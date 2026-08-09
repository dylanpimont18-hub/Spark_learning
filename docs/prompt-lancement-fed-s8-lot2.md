# Prompt de lancement — BTS FED, savoir S8 (lot 2 : 5 modules suivants) — à coller dans une nouvelle session

> Contexte : préparé le 2026-08-02, à la suite du lot 1 (A1-1, A1-2, A2-1 — déployés en production sur sparklearning.fr). Colle le bloc ci-dessous tel quel dans une nouvelle conversation Claude Code, dans ce même projet.
>
> **Différence avec le prompt du lot 1** : la matière `fed`, sa couleur, et toute la plomberie (`state.js`, `loader.js`, `adminPanel.js`) existent déjà — ce lot n'a **aucune plomberie à refaire**, seulement des modules à ajouter aux structures existantes. Tu as aussi maintenant 3 vrais modules FED comme gabarit, meilleurs que le gabarit SI générique utilisé au lot 1.

---

## PROMPT À COLLER

On continue la génération des modules BTS FED (savoir S8, option GCF) sur Spark Learning.

**État actuel :**
- Matière `fed` déjà enregistrée dans `js/state.js` (`SUBJECT_DEFS`), couleur `--fed` déjà dans `css/styles.css` (`.diagram-theme-fed` inclus), déjà câblée dans `js/loader.js` (`DATA_FILES['fed-3']` + `MODULE_INDEX`) et `js/views/adminPanel.js`. Rien de tout ça à retoucher, seulement à étendre.
- 3 modules déjà en production : `js/data/fed-bts/fed-bts-a1-1-thermique-tubes.js`, `fed-bts-a1-2-hygrothermie.js`, `fed-bts-a2-1-genie-civil.js`. **Ce sont ton meilleur gabarit** — lis-en au moins un en entier avant de commencer (structure, ton, niveau de détail, style des diagrammes SVG).
- `docs/programmes-fed.md` : 3/54 notions S8 à 🟢, le reste à 🔴.
- Cache-busting `index.html` : `?v=44` (vérifier que ça n'a pas bougé depuis ; sinon prendre N+1).
- Déploiement : push sur `main` déclenche automatiquement le déploiement Firebase (`.github/workflows/firebase-hosting-merge.yml`) — pas d'action manuelle de déploiement à faire, seulement committer/pousser une fois vérifié.

### Étape 1 — Les 5 notions à traiter (dans cet ordre, depuis `docs/programmes-fed.md` section A, lignes 4 à 8)

1. **A2-2 Simulation dynamique thermique (STD)** (GCF 2) → `fed-bts-a2-2-std`
   Référentiel (`docs/referentiel-fed-S8.md`, section A2) : *« Approche globale d'un bâtiment à partir d'une maquette numérique. Analyse et exploitation des résultats d'une étude STD. »* Ce n'est pas une notion de calcul lourd : c'est la capacité à **lire et interpréter** les résultats d'une étude STD (logiciel type Pléiades+COMFIE) — température intérieure simulée heure par heure sur une période, heures d'inconfort/surchauffe, indicateurs de confort d'été. Un exercice numérique cohérent : à partir d'une série de températures horaires données (ou d'un seuil de confort, ex. 28°C), compter le nombre d'heures de dépassement, ou calculer un pourcentage d'heures inconfortables sur une période. Reste au niveau GCF 2 (application guidée) : pas besoin de faire tourner un vrai logiciel STD, juste savoir exploiter des résultats déjà produits.

2. **A2-3 Bilan thermique (déperditions, apports de chaleur et d'humidité)** (GCF 3) → `fed-bts-a2-3-bilan-thermique`
   Référentiel : *« Détermination des charges thermiques et hydriques d'une enveloppe. Bilan thermique en régime permanent. »* Méthode classique (norme/DTU) : déperditions par transmission $D_t = \sum U_i \times A_i \times (\theta_i - \theta_e)$ (somme sur chaque paroi/vitrage, $U$ en W/(m²·K)) + déperditions par renouvellement d'air $D_r = 0{,}34 \times Q_v \times (\theta_i - \theta_e)$ (avec $Q_v$ en m³/h, le coefficient $0{,}34$ Wh/(m³·K) vient de $\rho \times c_p / 3\,600$). Déperdition totale $D = D_t + D_r$, en W. C'est le calcul le plus structurant de S8-A : **A2-4 (DJU) en dépend directement** via le coefficient de déperdition global $G_v = D/(\theta_i-\theta_e)$ en W/K — pense à le faire apparaître explicitement dans les formules/exemple pour préparer le module suivant.

3. **A2-4 DJU, besoin d'énergie utile (chauffage et climatisation)** (GCF 3) → `fed-bts-a2-4-dju`
   Référentiel : *« Évaluation par calcul ou logiciel du besoin en énergie utile d'un bâtiment sur une période définie. »* Méthode des degrés-jours unifiés (DJU) : besoin annuel de chauffage $E \approx \dfrac{DJU \times G_v \times 24}{1\,000}$ (en kWh, avec $G_v$ le coefficient de déperdition globale en W/K issu du bilan thermique — module précédent — et $DJU$ en base 18 ou 19°C selon la zone climatique, en °C·jour). Bonne occasion de réutiliser un $G_v$ calculé au module A2-3 pour montrer la continuité pédagogique (sans dépendance technique entre les deux fichiers — chaque module reste autonome, juste une cohérence narrative dans les exemples).

4. **A3 Dynamique des fluides** (GCF 3) → `fed-bts-a3-dynamique-fluides`
   Référentiel : 6 lignes sans code individuel — tronçons et réseaux (pertes de charge singulières et linéiques), caractéristique circulateur/pompe/ventilateur, point de fonctionnement réseau-circulateur, cavitation, répartition naturelle des débits, équilibrage. Contrairement au module SI `si-bts-hydraulique.js` (vérins), ici c'est la **perte de charge dans un réseau CVC** (hydraulique ou aéraulique) qui est centrale : $\Delta P_{\text{lin}} = J \times L$ (J = perte de charge unitaire en Pa/m, donnée par abaque ou formule de Darcy-Weisbach simplifiée) + pertes de charge singulières (coudes, vannes, tés). Le point de fonctionnement est l'intersection entre la courbe caractéristique du circulateur/pompe (HMT en fonction du débit) et la courbe de pertes de charge du réseau (croissante avec le débit) — bon sujet de diagramme SVG (deux courbes qui se croisent, cf. le style des diagrammes déjà utilisés dans `physique-bts-dynamique-fluides.js` pour l'inspiration du tracé de courbes).

5. **A4 Traitement d'air** (GCF 3) → `fed-bts-a4-traitement-air`
   Référentiel : diagramme de l'air humide (caractéristiques), évolutions de l'air (types confort et industriel, bilans), conditions de soufflage. C'est la suite naturelle de l'hygrothermie (module A1-2, déjà en prod) mais côté traitement d'air actif plutôt que paroi passive : humidité absolue $r$ (g d'eau/kg d'air sec), enthalpie $h$ (kJ/kg air sec), lecture du diagramme de l'air humide (abaque). Une évolution type à illustrer : mélange de deux flux d'air (air neuf + air repris) avec bilan massique et énergétique pondéré par les débits, ou un chauffage simple (évolution à humidité absolue constante). Reste au niveau applicatif — pas besoin de couvrir tous les cas industriels du référentiel, un ou deux cas représentatifs suffisent pour GCF 3.

### Étape 2 — Gabarit et conventions (rappel, inchangé depuis le lot 1)

Lire en premier un des 3 modules FED déjà en production (`js/data/fed-bts/fed-bts-a1-2-hygrothermie.js` est un bon choix : diagramme en courbe + formule physique + exercice numérique robuste). Structure identique à reproduire : `id`, `level: 3`, `subject: 'fed'`, `icon`, `title`, `subtitle`, `keywords`, `physics` (accroche), puis `cours` (`intro`, `definitions[]`, `method`, `example`, `formulas[]`, `diagram`, `recap[]`, `piege`), `quiz` (3 QCM), `exercice.generate()`, `probleme`, `evaluation` (4-5 questions notées).

**Fonctions disponibles dans `generate()`** (`js/data/helpers.js`) : `rand(min, max)` (entier), `randFloat(min, max, d=1)` (flottant arrondi), `pick(arr)` (élément aléatoire), `fr(value, decimals)` (notation française — **jamais** de `.replace('.', '{,}')` à la main).

**Règles de contenu (CLAUDE.md, obligatoires)** :
- Style aéré : `<br/><br/>` entre chaque idée/étape, `<strong>` sur les concepts clés, rédaction narrative.
- KaTeX avec virgule française via `fr()` uniquement.
- Ton socratique, jamais punitif.
- `generate()` varie les contextes (via `pick()`), pas juste les valeurs numériques.

⚠️ **Vigilance calcul** : ces 5 notions impliquent des calculs plus longs (bilan thermique multi-parois, DJU, pertes de charge réseau, mélange d'air) que les 3 premiers modules. **Vérifie chaque valeur numérique à la main avant de l'écrire** dans `example`/`probleme`/`evaluation` (les valeurs de `exercice.generate()` étant calculées par le code lui-même au runtime, elles n'ont pas ce risque — mais vérifie quand même la cohérence physique des plages de `rand()`/`randFloat()` choisies, ex. pas de température de soufflage inférieure à une température ambiante par erreur de signe).

**Diagrammes (`cours.diagram`)** : `theme: 'fed'`. SVG fait main, réutiliser les classes CSS existantes (`curve-main`, `frame-line`, `plot-point`, `plot-point-alt`, `guide-line`, `tick-label`, `annotation-label`, `label-soft`). Pour A3 (point de fonctionnement), inspire-toi du tracé de courbes de `js/data/physique-bts/physique-bts-dynamique-fluides.js`. Vérifier qu'aucun élément (surtout les labels) ne sort du `viewBox` ni ne chevauche un autre élément.

### Étape 3 — Après CHAQUE module créé

1. Ajouter le fichier à `DATA_FILES['fed-3']` (déjà existant, juste ajouter une ligne) et son `id` à `MODULE_INDEX` (`'fed-bts-...':'fed-3'`) dans `js/loader.js`.
2. Faire passer son statut 🔴 → 🟢 dans `docs/programmes-fed.md`, et mettre à jour le récapitulatif en bas du fichier (section A : 3 → 8 faites une fois les 5 modules terminés ; total S8 : 3 → 8).
3. `node scripts/check-decimal-notation.js` — doit rester à 0 erreur.

### Étape 4 — Vérification visuelle obligatoire

1. `node scripts/tmp-static-server.js 5177` en arrière-plan.
2. Playwright (`C:\Users\Dylan\node_modules\playwright`) — recréer un script driver dans le scratchpad de session (celui du lot 1 ne persiste pas entre sessions).
3. Naviguer vers `http://localhost:5177/module/{id}/{tab}` (routeur pushState, pas de hash).
4. Capturer chaque module × chaque onglet (cours/quiz/exercice/probleme/evaluation) en clair ET en sombre (`localStorage.setItem('sparkTheme','dark')` puis reload). Regarder les captures — un cadre vide ou un diagramme qui déborde du viewBox est un échec, pas un détail.
5. Vérifier `console --errors` vide sur tous les onglets de tous les modules.
6. Un message `@firebase/firestore: ... Could not reach Cloud Firestore backend` est normal en local — pas bloquant.
7. Écrire les scripts Node avec des chemins en slash `/`, pas en backslash.
8. Arrêter le serveur (`taskkill //PID <pid> //F`) une fois les 5 modules terminés et vérifiés.

### Étape 5 — Finalisation

- Mettre à jour `contenu.md` : `fed-bts/` passe de « 3/54 notions » à « 8/54 notions ».
- Régénérer `sitemap.xml` : `node scripts/generate-sitemap.js`.
- Incrémenter le `?v=` de toutes les balises locales d'`index.html` (44 → 45, ou N+1 sur la valeur actuelle).

**Arrêt** : s'arrêter proprement après ces 5 modules (8/54 notions S8, section A complétée à l'exception de A5/A7/A8 — 3 restantes en section A, puis passage à la section B). Indiquer le prochain 🔴 à reprendre (A5 Thermodynamique appliquée) et le nombre de notions restantes (46). Ne pas committer/pousser sans demande explicite — proposer une fois le lot terminé et vérifié, laisser l'utilisateur valider (et rappeler que pousser sur `main` déclenche le déploiement automatique en production).

---

*Fin du prompt à coller.*
