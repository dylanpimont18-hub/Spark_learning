Lis le fichier `docs/programmes-maths.md` en entier.
Filtre les chapitres avec le statut 🔴 pour le niveau : $ARGUMENTS

Pour chaque chapitre 🔴, dans l'ordre :

1. Vérifie que l'id n'existe pas déjà dans `js/data.js`
2. Crée le module complet avec :
   - `cours` : intro claire, méthode pas-à-pas, formules KaTeX, piège fréquent
   - `quiz` : 3 questions à choix multiples avec correction socratique
   - `exercice.generate()` : utilise rand()/randFloat() pour randomiser, calcule answer depuis les paramètres
   - `probleme` : contexte concret (vie quotidienne ou physique si `physics: true`)
3. Ajoute le module à `window.MODULES` dans `js/data.js`
4. Mets à jour le statut 🔴 → 🟢 dans `docs/programmes-maths.md`
5. Mets à jour le tableau récapitulatif en bas de `docs/programmes-maths.md`
6. Passe au chapitre suivant

⚠️ Si tu sens que le contexte devient long (plus de 5-6 modules d'affilée), arrête-toi proprement :
- Indique le dernier chapitre traité
- Indique le prochain chapitre 🔴 à reprendre
- Je relancerai la commande pour continuer

Niveaux acceptés : 6e, 5e, 4e, 3e, 2nde, 1re, Tle, BTS, tous

À la fin, affiche :
- ✅ Modules créés cette session
- 🔴 Modules restants pour ce niveau
- Progression globale (X/102)
