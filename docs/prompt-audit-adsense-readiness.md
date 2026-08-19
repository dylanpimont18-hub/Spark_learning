# Prompt — Audit de préparation AdSense (code)

À utiliser tel quel comme prompt de lancement d'une session Claude Code dédiée.

---

Tu vas auditer le code de Spark Learning (Vanilla JS SPA, voir CLAUDE.md) pour vérifier qu'il est prêt à activer de vraies publicités Google AdSense (`ADS_ENABLED: true` dans `js/adsConfig.js`), sans risquer un rejet ou une suspension de compte AdSense, ni dégrader l'expérience utilisateur. Ce prompt est complémentaire à la checklist d'activation déjà écrite dans `docs/plan-fondations-monetisation.md` (section 3.3, actions mécaniques/externes : créer les ad units, remplir `AD_SLOTS`, etc.) — ici il s'agit de vérifier que le CODE lui-même ne pose pas de problème de conformité ou de qualité avant/après cette activation.

Contexte déjà acté (ne pas rouvrir, voir `docs/plan-fondations-monetisation.md` et mémoire `project_monetisation_spark_learning`) :
- Pub AdSense + dons uniquement, contenu élève 100% gratuit, pas d'abonnement.
- Aucune pub dans les onglets d'apprentissage actif (cours/quiz/exercice/problème/évaluation/companion).
- Pas de mécanique "regarder une pub pour débloquer" (risque de suspension déjà identifié et écarté).
- Bannière de consentement maison (`js/consent.js`) déjà en place, bloque le rendu de vraie pub sans consentement explicite.
- `ads.txt` déjà présent à la racine : `google.com, pub-5320273649803132, DIRECT, f08c47fec0942fa0`.

## Garde-fous avant de commencer

`git status` et `git branch --show-current` d'abord. Une autre session peut être active en parallèle sur ce repo partagé (déjà arrivé plusieurs fois). Si le dossier a des modifications non commitées qui ne t'appartiennent pas, ne les touche pas : travaille dans un worktree Git isolé (`git worktree add .claude/worktrees/audit-adsense-<date> main`).

Pour Puppeteer : `node_modules/puppeteer` existe déjà à la racine, ne le réinstalle pas — crée une jonction Windows vers le worktree (`New-Item -ItemType Junction`). **Avant tout `git worktree remove`, retire d'abord cette jonction avec `cmd /c rmdir <chemin>` (jamais `Remove-Item -Recurse` ni `git worktree remove --force` directement dessus) — une jonction suivie par une suppression récursive peut vider le vrai `node_modules` du dépôt principal (déjà arrivé, corrigé via `npm ci`, mais évitable).**

## Partie A — Revue du code publicitaire existant

**IMPORTANT — lis d'abord `docs/superpowers/specs/2026-07-24-adsense-conformite-contenu-design.md` avant de toucher au placement des pubs.** Ce fichier documente une décision délibérée, actée avec l'utilisateur, suite à 2 vrais refus AdSense ("pages sans contenu d'éditeur") : l'emplacement `moduleTab` doit couvrir volontairement les 6 onglets d'un module (cours/quiz/exercice/probleme/evaluation/companion), pas seulement le cours. Une IA qui audite ce code sans lire cette spec risque de croire — comme ça a été le cas lors de l'audit du 2026-08-19 avant correction — qu'un vieux commentaire encore présent ailleurs ("jamais... pendant un exercice, quiz ou évaluation en cours") signifie qu'il faut restreindre l'emplacement au cours seul. **Ne fais pas cette erreur : vérifie toujours la spec datée la plus récente avant de "corriger" un placement pub qui semble à première vue trop large.**

- `js/adsConfig.js`, `js/components/adSlot.js`, `js/consent.js` : relis-les en entier, vérifie la cohérence avec la spec du 2026-07-24 (position toujours après le contenu, jamais visuellement au milieu — pas une restriction par onglet ou par état d'interaction).
- Grep tous les appels à `renderAdSlot(...)`/`initAdSlots()` dans `js/` : confirme qu'aucun n'apparaît sur une page de navigation pure (subjects/modules — retirés le 2026-07-30, ne pas les réintroduire sans revalider).
- **Résolu le 2026-08-19 (à revérifier si le code a rebougé depuis) :** `requestNonPersonalizedAds` est posé dans `initAdSlots()` avant tout push — la promesse « publicités non personnalisées » de `js/views/confidentialite.js` est désormais techniquement appliquée, pas juste déclarée.
- **Résolu le 2026-08-19 :** `AD_SLOTS.home` existait dans la config sans aucun point d'appel réel — `renderHome()` n'affichait jamais de pub même une fois activée. Corrigé (appel `renderAdSlot(..., 'home')` en bas de `renderHome()`).
- **Résolu le 2026-08-19 :** le paragraphe pub de `js/views/confidentialite.js` décrivait encore l'ancien placement (home/subjects/modules, retiré le 2026-07-30) et prétendait "jamais pendant... quiz, exercice ou évaluation" — contraire au placement réel décidé le 2026-07-24. Texte corrigé pour refléter le comportement réellement approuvé.

## Partie B — Audience mineure (mixed audience / TFAT)

Spark Learning sert des élèves de 6e (~11 ans) jusqu'au BTS (adultes) : c'est une **audience mixte incluant des mineurs de moins de 13 ans**. Ce point n'était traité nulle part dans `docs/plan-fondations-monetisation.md` avant l'audit du 2026-08-19.

**Déjà établi lors de cet audit (vérifié par recherche web le 2026-08-19, à reconfirmer sur la doc Google si beaucoup de temps s'est écoulé — ce sujet bouge vite) : ce n'est PAS un simple réglage du dashboard AdSense, c'est une modification de code.** Google a remplacé en mai 2026 les anciens signaux `tagForChildDirectedTreatment` (TFCD) / `tagForUnderAgeOfConsent` (TFUA) par un nouveau signal unifié **TFAT** (Tag For Age Treatment, valeurs CHILD/TEEN/UNSPECIFIED). Pour une intégration AdSense classique (`adsbygoogle.js`, pas Google Publisher Tags/Ad Manager — le cas de ce projet), le mécanisme documenté est l'attribut `data-tag-for-age-treatment` posé sur chaque balise `<ins class="adsbygoogle">`.

- Confirme la syntaxe exacte de l'attribut (valeur numérique ou textuelle) sur la doc technique Google actuelle avant d'implémenter — non confirmée avec certitude lors de cet audit (`https://support.google.com/adsense/answer/17042704`, `https://support.google.com/adsense/answer/9007197`).
- Implémente-le dans `js/components/adSlot.js` → `renderAdSlot()`, sur le même `<ins>` que celui qui porte déjà `data-ad-client`/`data-ad-slot`.
- Documente clairement dans le rapport final : ce point doit être traité **avant** d'activer les vraies pubs, pas après.
- Le choix déjà fait de publicités non personnalisées (`requestNonPersonalizedAds`, voir Partie A) réduit une partie du risque mais ne dispense pas de ce signal d'âge, qui est un mécanisme distinct.

## Partie C — Conformité de contenu (politiques du programme AdSense)

- Échantillonne plusieurs pages publiques indexables (accueil, `/subjects`, quelques `/levels/:subject`, quelques `/modules/:subject/:level`) : confirme qu'aucune n'est une coquille vide (ex. un niveau/matière affichant "0 module"). Si une combinaison matière×niveau existe dans le routage mais n'a aucun module publié, c'est un candidat à `noindex` ou à retirer du sitemap tant que vide.
- Vérifie l'absence de lien mort et la cohérence de la navigation (référence : audit fonctionnel du 2026-08-19, à revalider si le code a bougé depuis — voir mémoire `project_audit_perf_2026-08-19`).
- Vérifie qu'aucune pub ne peut se retrouver visuellement proche d'un bouton de navigation au point de créer un risque de clic accidentel (`css/styles.css`, classes `.ad-slot-placeholder` et son futur équivalent `<ins class="adsbygoogle">` réel).

## Partie D — Décalage de mise en page (CLS) et Core Web Vitals

- **Résolu le 2026-08-19 :** `.ad-slot-placeholder` réservait déjà `min-height: 90px`, mais rien n'équivalait côté `<ins class="adsbygoogle">` réel — ajouté une règle `ins.adsbygoogle { min-height: 90px; ... }` dans `css/styles.css` pour que la même réservation d'espace s'applique une fois `ADS_ENABLED=true`.
- Si testable sans compte AdSense actif (ex. en forçant temporairement un faux `data-ad-slot` pour observer le comportement du placeholder), mesure l'impact via Puppeteer (`performance.getEntriesByType` + observation de layout shift). Si pas testable en local sans compte actif, documente la limite et la méthode à suivre manuellement une fois les ad units créées.

## Partie E — Pages légales et consentement

- Relis `js/views/confidentialite.js` en entier : vérifie qu'elle mentionne bien Google AdSense, les cookies techniques déposés, le mode annoncé (personnalisé ou non — cohérent avec ce qui est réellement implémenté après la Partie A), et un lien vers `policies.google.com/technologies/ads`.
- Vérifie l'existence et le contenu d'une page mentions légales (éditeur, hébergeur — obligation légale française, distincte du RGPD).
- Reteste manuellement (Puppeteer) le flux de consentement : `Consent.reject()` doit garantir qu'aucune requête réseau vers `pagead2.googlesyndication.com` ou tout domaine AdSense ne part avant acceptation explicite.

## Livrable

Rapport structuré : ✅ ce qui est déjà conforme (avec preuve : ligne de code ou requête réseau observée), 🐛 les vrais problèmes trouvés et corrigés (avant/après), 🔍 ce qui reste **[Externe]** à faire par Dylan dans le dashboard Google (compte AdSense, réglage audience mixte, création des ad units — déjà listé partiellement dans `docs/plan-fondations-monetisation.md` section 3.3, ne pas dupliquer, juste renvoyer vers cette section). Ne pas activer `ADS_ENABLED: true` toi-même — ça reste un déclenchement volontaire de Dylan une fois les ad units créées côté AdSense.
