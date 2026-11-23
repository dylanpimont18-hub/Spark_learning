# Spark Learning

Plateforme pédagogique (Maths, Physique-Chimie, Sciences de l'Ingénieur — Collège, Lycée, BTS) : cours, quiz, exercices générés, évaluations. Accès élève gratuit, sans création de compte obligatoire.

## Stack

SPA en **Vanilla JS** : aucun bundler, aucune dépendance npm. Tout le chargement des scripts est déclaré dans [`index.html`](index.html), dans un ordre précis (Firebase → auth → vues → data → engines → components → app). Voir [`CLAUDE.md`](CLAUDE.md) pour les règles d'architecture détaillées.

## Lancer le projet en local

Servir le dossier comme un site statique (ex. `npx serve .` ou toute extension "Live Server"). Pas de build à lancer.

⚠️ En local, Firebase se connecte aux vrais services (pas de mock) — éviter les tests automatisés en navigateur headless pour ne pas générer de trafic publicitaire invalide.

## Déploiement

Hébergé sur Firebase Hosting (`sparklearning.fr`, projet `spark-learning-7d96b`) : chaque push sur `main` déploie via l'action GitHub [`firebase-hosting-merge.yml`](.github/workflows/firebase-hosting-merge.yml) (sitemap, déploiement, pré-rendu SEO). Un déploiement qui touche `js/` ou `css/styles.css` doit incrémenter le suffixe `?v=N` sur toutes les balises `<script>`/`<link>` locales de `index.html` (cache-busting, voir `CLAUDE.md`).

## Ajouter un TD BTS FED / remplacer une vidéo

La page [`/bts-fed`](https://sparklearning.fr/bts-fed) (TD Revit / ArchiWIZARD du projet L'Escale) est entièrement produite par un script, à partir du dossier d'enseignement voisin (`Desktop\Enseignement\BTS FED`) :

```
node scripts/build-bts-fed.js
git add media/bts-fed js/data/bts-fed.js
git commit -m "BTS FED : <ce qui change>"
git push
```

- Le script copie dans `media/bts-fed/` les vidéos (`Banque-Revit\TD-Escale\<id>\<id>.mp4`), les énoncés et corrigés (`projets\td-revit\TD{n}-*-etudiant.pdf` / `-corrige.pdf`) et les maquettes de départ (`TD{n}_depart.rvt`), puis réécrit `js/data/bts-fed.js`. Il ne recopie que ce qui a changé et signale les fichiers publiés dont la source a disparu.
- **Vidéo avec voix prête** : la déposer sous `<id>-AVEC-VOIX.mp4` dans le dossier de la vidéo, puis relancer la commande. Elle remplace la version muette sous le même nom public ; le bandeau « Vidéos sans voix » disparaît de lui-même quand plus aucune vidéo du TD n'est muette (niveau sonore mesuré par ffmpeg).
- **Nouveau TD** : ajouter son numéro à `TD_NUMBERS` en tête du script ; dossiers `TD{n}-NN-...` et PDF sont détectés seuls, le sitemap suit.
- Outils requis dans le PATH : `ffprobe`, `ffmpeg`, `pdftotext`. Aucun fichier au-delà de 50 Mio (limite GitHub ; pas de Git LFS, que Firebase ne sait pas lire).
- **Ouvrir ou fermer la page au public** : panneau admin (`/connexion`), rubrique Paramètres, case « Page BTS FED ouverte au public », puis Enregistrer. Effet immédiat, sans déploiement. Fermée par défaut : tant que la case n'a jamais été cochée, les étudiants voient « Page en maintenance » ; un admin connecté voit toujours la page, avec un bandeau.
- **Réglages** dans [`scripts/bts-fed.config.json`](scripts/bts-fed.config.json), puis relancer le script :
  - `presentation` : dossier vidéo du film de présentation, affiché en tête du sommaire ;
  - `fichiersComplementaires` : fichiers à télécharger en plus de la maquette (ex. TD4 : `Normes_CVC.rvt` et les familles `TD_*.rfa`), chemins relatifs au dossier `BTS FED` ;
  - `disponibleLe` : date de mise en ligne du corrigé, des vidéos et des valeurs de contrôle, par TD, ex. `{ "td3": "2026-12-04" }`. Avant la date, la page n'affiche que l'énoncé et la maquette. Le dépôt GitHub étant **public**, les fichiers y restent téléchargeables : la date masque, elle ne protège pas ;
  - `modulesLies` : modules S8 du catalogue proposés en « Revoir les notions » (identifiants `fed-bts-…`).
- **Statistiques** (Google Analytics, visiteurs ayant accepté les cookies) : événements `video_start`, `video_complete` (90 % regardés), `bts_download`, `bts_print_memo`, avec `video_id` / `td` / `file_name`. Dans GA4 : Rapports › Engagement › Événements.
- Dossier source ailleurs : `--source "chemin\BTS FED"`. Simulation sans copie : `--dry-run`.

## Où trouver quoi

| Fichier | Rôle |
|---|---|
| [`CODEBASE_MAP.md`](CODEBASE_MAP.md) | Index de navigation fichier par fichier (fonctions clés, rôle) |
| [`contenu.md`](contenu.md) | Carte architecturale de haut niveau |
| [`docs/programmes-*.md`](docs/) | Programmes scolaires suivis pour la génération de modules |
| [`docs/archives/`](docs/archives/) | Anciens plans et backlogs (archivés) |
| [`.claude/rules/dev-guidelines.md`](.claude/rules/dev-guidelines.md) | Directives de développement complémentaires |
