# Professionnalisation du contact — Design

Date : 2026-08-03

## Contexte

Le seul moyen de contacter Dylan sur Spark Learning est aujourd'hui une bulle flottante ("?") en bas à gauche, peu visible, qui ouvre un panneau à 3 catégories (🐛 erreur / 💬 remarque / ❓ question) envoyées via Formspree (`js/components/contactPanel.js`). Le formulaire ne collecte ni nom ni email : impossible de recontacter l'expéditeur. Ce système convient au feedback pédagogique ponctuel d'un élève, mais pas à des demandes professionnelles (propositions commerciales, partenariats, presse).

## Objectif

Professionnaliser le contact pour couvrir tous les motifs (question, erreur, proposition, partenariat, presse) sans perdre la simplicité du feedback rapide existant.

## Architecture

- **Nouvelle vue dédiée** `js/views/contact.js`, route `/contact`, suivant le pattern de `js/views/confidentialite.js` (page_header avec bouton retour, contenu dans `.container`).
  - Déclarer la vue dans `index.html` (script + cache-busting `?v=N`), dans le routeur `js/app.js` (`_buildPath`, `_parseRouteParts`, `render()`), et régénérer `sitemap.xml` via `node scripts/generate-sitemap.js`.
- **Lien footer** : "Nous contacter" ajouté dans `index.html` à côté de "Politique de confidentialité" (`.footer-legal-link`, `onclick="navigate('contact')"`).
- **Bulle flottante conservée** (`contactPanel.js`) pour le feedback rapide (erreur/remarque/question) — comportement et 3 catégories inchangés. Le panneau gagne une ligne de pont en pied : séparateur `<hr>` + lien texte *"Une proposition, un partenariat ? → Contacte-moi directement"* menant à `/contact`. Pas de duplication des 5 catégories pro dans la bulle.

## Redesign de la bulle

- Le bouton `#contact-toggle` passe du texte `?` à une icône SVG inline de bulle de dialogue (cohérente avec le style du site, pas d'emoji ici car élément UI persistant), conservant les classes/état existants (`.contact-btn`, `.active` en croix rotation 45°).
- Ajout d'un `title="Nous contacter"` pour l'accessibilité/tooltip navigateur natif — pas de tooltip custom CSS supplémentaire (YAGNI, le natif suffit).
- Taille, position (48px, bas 28px, gauche 28px) et logique JS (`toggleContactPanel`) inchangées.

## Page /contact

**En-tête** : titre "Nous contacter", sous-titre humain et signé (ex. *"Une question, une remarque, une proposition ? Je te réponds personnellement — Dylan"*), cohérent avec le ton "une seule personne derrière Spark Learning" déjà utilisé dans `confidentialite.js`.

**Formulaire** (nouveau `_CONTACT_PAGE_FORM_HTML` dans `js/views/contact.js`, distinct du formulaire de la bulle) :
- `Nom` — text, obligatoire
- `Email` — email, obligatoire
- 5 catégories en chips radio (même styles `.contact-cat` / `.contact-cat-chip` réutilisés) :
  - 🎓 Question pédagogique
  - 🐛 Signaler une erreur
  - 💼 Proposition commerciale
  - 🤝 Partenariat (école, éditeur...)
  - 📰 Presse & médias
- `Message` — textarea, obligatoire
- Bouton "Envoyer"

**Soumission** : nouvelle fonction `handleContactPageSubmit` dans `js/views/contact.js`, sur le modèle de `handleContactSubmit` (`contactPanel.js`) :
- POST vers le même endpoint Formspree (`https://formspree.io/f/xnjgyrjd`)
- Payload : `{ _subject: "Spark Learning — <label catégorie>", name, email, categorie, message, page: 'Page contact' }`
- Le champ `email` soumis active le reply-to natif Formspree (répondre = bouton "Répondre" dans la boîte mail, aucune config supplémentaire).
- États de succès/erreur identiques au composant existant (remplacement du formulaire par un message de confirmation, restauration après délai).

## Contenu légal

- `js/views/confidentialite.js`, section "4. Formulaire de contact" : reformuler pour mentionner les deux points de contact (bulle flottante + page `/contact`), tous deux transmis à Formspree dans le seul but de répondre.

## Hors scope

- Pas d'email affiché en clair (`mailto:`) sur la page — formulaire uniquement (décision utilisateur, anti-spam).
- Pas de nouveau backend, pas de routage différencié par catégorie (tout part vers la même boîte Formspree) — un seul point de gestion pour Dylan.
- Pas de changement des catégories/comportement de la bulle flottante au-delà du lien de pont et de l'icône.
