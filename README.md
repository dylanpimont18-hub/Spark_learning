# Spark Learning

Plateforme pédagogique (Maths, Physique-Chimie, Sciences de l'Ingénieur — Collège, Lycée, BTS) : cours, quiz, exercices générés, évaluations. Accès élève gratuit, sans création de compte obligatoire.

## Stack

SPA en **Vanilla JS** : aucun bundler, aucune dépendance npm. Tout le chargement des scripts est déclaré dans [`index.html`](index.html), dans un ordre précis (Firebase → auth → vues → data → engines → components → app). Voir [`CLAUDE.md`](CLAUDE.md) pour les règles d'architecture détaillées.

## Lancer le projet en local

Servir le dossier comme un site statique (ex. `npx serve .` ou toute extension "Live Server"). Pas de build à lancer.

⚠️ En local, Firebase et AdSense se connectent aux vrais services (pas de mock) — éviter les tests automatisés en navigateur headless pour ne pas générer de trafic publicitaire invalide.

## Déploiement

Hébergé sur GitHub Pages (`sparklearning.fr`, voir [`CNAME`](CNAME)). Un déploiement qui touche `js/` ou `css/styles.css` doit incrémenter le suffixe `?v=N` sur toutes les balises `<script>`/`<link>` locales de `index.html` (cache-busting, voir `CLAUDE.md`).

## Où trouver quoi

| Fichier | Rôle |
|---|---|
| [`CODEBASE_MAP.md`](CODEBASE_MAP.md) | Index de navigation fichier par fichier (fonctions clés, rôle) |
| [`contenu.md`](contenu.md) | Carte architecturale de haut niveau |
| [`docs/programmes-*.md`](docs/) | Programmes scolaires suivis pour la génération de modules |
| [`docs/ameliorations-site.md`](docs/ameliorations-site.md) | Backlog produit en cours |
| [`.claude/rules/dev-guidelines.md`](.claude/rules/dev-guidelines.md) | Directives de développement complémentaires |
