# Conformité contenu AdSense (refus "pages sans contenu / navigation") — Design

## Contexte

Spark Learning a essuyé 2 refus AdSense. Le dernier motif (générique, sans détail par URL dans le rapport) : "Annonces Google diffusées sur des pages ou écrans sans contenu d'éditeur" — visant spécifiquement les pages sans contenu, en construction, ou qui servent à la navigation/au comportement plutôt qu'à de l'éditorial. `ADS_ENABLED` est à `false` depuis le début (aucune vraie pub n'a jamais été servie) : le refus porte donc sur la qualité de contenu perçue du domaine dans son ensemble, pas sur la présence de pubs elles-mêmes.

Deux constats issus de l'analyse du code, qui correspondent précisément au motif de refus :

1. **Les 2 seuls emplacements pub actifs** (`js/adsConfig.js` → `AD_SLOTS.subjects`, `AD_SLOTS.modules`) sont sur `/subjects` et `/modules` — des pages de grille de cartes cliquables, quasi sans texte rédactionnel propre. Le contenu réellement riche du site (texte de cours, KaTeX) n'a, lui, jamais eu de pub.
2. **La carte "Physique-Chimie" sur `/subjects`** affiche un badge "Bientôt disponible" (`js/views/home.js` → `renderSubjects()`, branche `isEmpty`) : cette matière a 0 module aujourd'hui. C'est un stub "en construction" visible publiquement, juste au-dessus de l'emplacement pub de cette page.

Une 3e piste (site 100% CSR — `<main id="app">` vide dans le HTML statique, contenu injecté après coup par JS avec chargement asynchrone via `ensureLevelData`) reste possible mais non confirmée : elle sera vérifiée manuellement (Search Console) avant resoumission plutôt que traitée par du code dans ce chantier (décision utilisateur — on commence par les correctifs de contenu, moins lourds, avant d'envisager un pré-rendu/SSR).

## Décisions actées avec l'utilisateur

- **Nouvelle règle de placement pub** (remplace la règle précédente "jamais dans les onglets d'apprentissage actif", voir mémoire `project_monetisation_spark_learning` et spec `2026-07-02-consent-banner-adsense-activation-design.md`) : **une pub par page, toujours en bas / après le contenu ou l'interaction, jamais insérée au milieu d'un exercice, quiz ou évaluation en cours.** Ça s'applique désormais aussi aux onglets Quiz/Exercice/Problème/Évaluation/Companion, pas seulement au Cours.
- Retirer les emplacements sur `/subjects` et `/modules` (navigation pure).
- Garder l'emplacement accueil (déjà du contenu correct).
- Masquer publiquement toute matière à 0 module plutôt que d'afficher un badge "Bientôt disponible".
- Enrichir `/subjects` et `/levels/:subject` d'un court texte rédactionnel unique (pas du contenu pédagogique `js/data/` — hors périmètre du chantier `js/data/`, simple copie de page).
- La vérification Search Console (rendu Googlebot) est une action manuelle avant resoumission, pas un livrable code de ce chantier.

## Architecture

### 1. Emplacements pub (`js/adsConfig.js`, `js/components/adSlot.js`)

- `AD_SLOTS` : retirer `subjects` et `modules`, ajouter `moduleTab: ''`.
- `js/views/home.js` → `renderSubjects()` : retirer l'appel `renderAdSlot('liste des matières — bas de grille', 'subjects')`.
- `js/views/home.js` → `renderModulesList()` : retirer les 2 appels `renderAdSlot('liste des modules — bas de grille...', 'modules')` (branche "avec prep" et branche normale).
- `js/views/home.js` → `renderModuleDetail()` : ajouter **un seul** appel `renderAdSlot('onglet module — bas de contenu', 'moduleTab')` juste après la fermeture du `<div class="tab-content">...</div>` (ligne actuelle ~807). Un seul point d'insertion suffit pour couvrir les 6 onglets : `renderTabContentHTML(mod)` retourne déjà le contenu de l'onglet actif (`state.tab`), et ce bloc est entièrement re-rendu à chaque changement d'onglet (`switchTab()`). Pas besoin de toucher `js/components/moduleTabs.js` ni les 6 fonctions `render{Cours,Quiz,Exercice,Probleme,Evaluation,CompanionSession}`.
- Le comportement de `renderAdSlot()` lui-même (placeholder si `ADS_ENABLED` faux, vérification consentement sinon) ne change pas.

### 2. Masquer les matières à 0 module (`js/views/home.js` → `renderSubjects()`)

- Avant le `.map()`, filtrer : ne garder que les `SUBJECT_DEFS` pour lesquelles `window.MODULES.filter(m => (m.subject || 'maths') === s.id).length > 0`.
- Conséquence : la branche `isEmpty` / badge "Bientôt disponible" devient morte pour l'instant (0 matière concernée aujourd'hui) mais reste en code — utile dès qu'une future matière est ajoutée à `SUBJECT_DEFS` avant d'avoir des modules prêts. Elle ne s'affichera simplement pas tant qu'aucun module n'existe pour cette matière.
- Compromis UX assumé : les élèves ne voient plus de "teaser" pour Physique-Chimie tant qu'elle est vide — acceptable, c'est justement ce que Google reproche.

### 3. Texte rédactionnel sur les pages hub (`js/views/home.js`)

- `renderSubjects()` : ajouter un paragraphe d'intro (2 à 4 phrases, ton cohérent avec le reste du site — socratique, encourageant) au-dessus de `.subjects-grid`, qui explique en quoi consiste le choix de matière et l'approche pédagogique Spark Learning. Texte unique à cette page, pas dupliqué de la page d'accueil.
- `renderLevels()` : ajouter un paragraphe similaire, spécifique à la matière sélectionnée (`subjectDef.description` existe déjà mais n'est affiché nulle part sur cette page — le réutiliser/l'étoffer plutôt que dupliquer une nouvelle chaîne).
- Pas de nouvelle donnée dans `js/data/` : ces textes sont de la copie d'interface (`js/views/`), pas du contenu pédagogique.

## Checklist AdSense — mise à jour nécessaire

La checklist d'activation de la spec `2026-07-02-consent-banner-adsense-activation-design.md` (§ "Checklist d'activation AdSense") liste les emplacements à créer dans le dashboard comme "accueil, matières, modules" — devenu inexact avec ce chantier. Le jour de l'approbation, les ad units à créer seront : **accueil** et **onglet module** (un seul ad unit `moduleTab`, réutilisé sur les 6 onglets). Cette correction sera reportée dans cette spec-ci, pas dans l'ancienne (déjà committée).

## Vérification manuelle avant resoumission (hors code)

1. Déployer les changements de ce chantier (penser au bump `?v=N` sur les balises `<script>`/`<link>` locales de `index.html`, cf. `CLAUDE.md`).
2. Google Search Console → Inspection de l'URL → "Voir la page testée", sur au moins : `/`, `/subjects`, une page de module (ex. `/modules/maths/1`).
3. Si le rendu capturé par Googlebot montre le contenu correctement (pas de coquille vide) → resoumettre à AdSense.
4. Si une page apparaît vide au rendu → confirme la piste CSR/chargement asynchrone : chantier de pré-rendu/SSR à ouvrir séparément avant resoumission (non traité ici, sur décision explicite de l'utilisateur de traiter d'abord les correctifs de contenu).

## Hors scope de ce chantier

- Pré-rendu / SSR (piste de secours si la vérification Search Console le confirme nécessaire — chantier séparé).
- Ajout de nouveaux modules Physique-Chimie (contenu pédagogique — suivra dans un chantier dédié, voir prompt de préparation demandé séparément par l'utilisateur).
- Activation des vraies pubs (`ADS_ENABLED=true`) — reste gated par l'approbation AdSense, checklist déjà décrite dans la spec du 2026-07-02.
