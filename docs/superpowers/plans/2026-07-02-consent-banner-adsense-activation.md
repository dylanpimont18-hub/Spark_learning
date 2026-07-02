# Bannière de Consentement + Prêt-à-Activer AdSense — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter une bannière de consentement cookies conforme RGPD/CNIL/politique Google, et faire en sorte que l'activation des vraies pubs AdSense (le jour de l'approbation du compte) se réduise à remplir 3 IDs et basculer un booléen — zéro code à écrire ce jour-là.

**Architecture:** Nouveau fichier autonome `js/consent.js` (état + UI de la bannière), persistance par catégorie dans `js/storage.js` (`Storage.getConsent`/`setConsent`, extensible pour une future catégorie `analytics`), gate de rendu dans `js/components/adSlot.js`, initialisation au boot dans `js/app.js`.

**Tech Stack:** Vanilla JS (aucun bundler, aucun npm), localStorage, aucune dépendance externe (pas de service CMP tiers).

## Global Constraints

- Vanilla JS strict : pas d'`export`/`import`, pas de bundler, pas de npm. Nouveau script déclaré dans `index.html`.
- Cache-busting : bump `?v=N` sur **toutes** les balises locales de `index.html` (convention du projet).
- Aucune suite de tests automatisée, et aucun outil de navigateur disponible dans cette session (ni pour le contrôleur, ni pour les subagents). Vérifier ce qui est vérifiable sans DOM réel via Node (avec un shim `localStorage` minimal si besoin — technique déjà utilisée avec succès sur un chantier précédent de ce repo), et documenter explicitement ce qui reste hand-tracé.
- **Contraintes légales dures (RGPD/CNIL/politique Google "EU User Consent Policy"), non négociables :**
  - Le bouton "Refuser" doit avoir un poids visuel **strictement identique** au bouton "Accepter" (même padding, même taille de police, même épaisseur de bordure, même traitement — aucun des deux ne doit être stylé comme un CTA principal face à un lien discret).
  - Défaut sûr : tant qu'aucun choix explicite "Accepter" n'a été enregistré, le consentement est traité comme refusé. Aucune pub ne doit jamais se charger sans un `granted: true` explicite.
  - Aucune case pré-cochée, aucun consentement implicite par simple navigation/fermeture de la bannière.
  - Le choix doit être modifiable à tout moment (lien "Gérer mes préférences cookies") et doit expirer après un délai raisonnable pour être redemandé (pratique CNIL : 6 mois).
- Jamais de pub dans les onglets d'apprentissage actif (cours/quiz/exercice/problème/évaluation/companion) — contrainte déjà actée, non affectée par ce chantier mais à ne pas casser en touchant `adSlot.js`.
- Styling exclusivement via les variables CSS de `css/styles.css` (`var(--primary)`, `var(--space-*)`, etc.) — jamais de couleur en dur.

---

### Task 1: Persistance du consentement par catégorie dans `js/storage.js`

**Files:**
- Modify: `js/storage.js`

**Interfaces:**
- Produces: `Storage.KEYS.CONSENT` (string constant), `Storage.CONSENT_MAX_AGE_MS` (number, 180 jours en ms), `Storage.getConsent(category: string): {granted: boolean, decidedAt: string} | null`, `Storage.setConsent(category: string, granted: boolean): void`
- Consumes: rien (fonctions pures sur `localStorage`)

- [ ] **Step 1: Ajouter la clé `CONSENT` dans `Storage.KEYS`**

Dans `js/storage.js`, remplacer :

```javascript
    FLASHCARDS: 'sparkFlashcards',
    MODULE_STATUS: 'sparkModuleStatus'
  },
```

par :

```javascript
    FLASHCARDS: 'sparkFlashcards',
    MODULE_STATUS: 'sparkModuleStatus',
    CONSENT: 'sparkConsent'
  },
```

- [ ] **Step 2: Ajouter `getConsent`/`setConsent` à la fin de l'objet `Storage`**

Dans `js/storage.js`, remplacer la toute fin du fichier :

```javascript
    return streak;
  }
};
```

par :

```javascript
    return streak;
  },

  /* ══════════════════════════════════════
     CONSENT (RGPD/CNIL — cookies pub, par catégorie)
  ══════════════════════════════════════ */
  CONSENT_MAX_AGE_MS: 1000 * 60 * 60 * 24 * 180, // 6 mois (pratique recommandée CNIL)

  getConsent(category) {
    const all = this._get(this.KEYS.CONSENT, {});
    const record = all[category];
    if (!record) return null;
    const age = Date.now() - new Date(record.decidedAt).getTime();
    if (age > this.CONSENT_MAX_AGE_MS) return null;
    return record;
  },

  setConsent(category, granted) {
    const all = this._get(this.KEYS.CONSENT, {});
    all[category] = { granted: !!granted, decidedAt: new Date().toISOString() };
    this._set(this.KEYS.CONSENT, all);
  }
};
```

- [ ] **Step 3: Vérification (Node, avec un shim `localStorage` minimal)**

Créer un fichier temporaire `/tmp/test-consent-storage.js` (hors du repo, à supprimer après) :

```javascript
global.localStorage = {
  _d: {},
  getItem(k) { return Object.prototype.hasOwnProperty.call(this._d, k) ? this._d[k] : null; },
  setItem(k, v) { this._d[k] = String(v); }
};

const fs = require('fs');
eval(fs.readFileSync(process.argv[2], 'utf8'));

// 1. Pas de choix enregistré -> null
console.assert(Storage.getConsent('ads') === null, 'FAIL: devrait être null avant tout choix');

// 2. setConsent puis getConsent -> reflète le choix
Storage.setConsent('ads', true);
const r1 = Storage.getConsent('ads');
console.assert(r1 && r1.granted === true, 'FAIL: granted devrait être true');

Storage.setConsent('ads', false);
const r2 = Storage.getConsent('ads');
console.assert(r2 && r2.granted === false, 'FAIL: granted devrait être false');

// 3. Catégorie différente indépendante
console.assert(Storage.getConsent('analytics') === null, 'FAIL: une autre catégorie ne doit pas être affectée');

// 4. Expiration : falsifie decidedAt à 200 jours dans le passé -> getConsent doit redevenir null
const all = JSON.parse(localStorage.getItem(Storage.KEYS.CONSENT));
all['ads'].decidedAt = new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString();
localStorage.setItem(Storage.KEYS.CONSENT, JSON.stringify(all));
console.assert(Storage.getConsent('ads') === null, 'FAIL: un consentement de plus de 6 mois doit expirer');

console.log('4/4 assertions passed (no FAIL printed above)');
```

Run: `node /tmp/test-consent-storage.js js/storage.js`
Expected: `4/4 assertions passed (no FAIL printed above)` et aucune ligne `FAIL:` dans la sortie. Supprimer le fichier temporaire après.

- [ ] **Step 4: Commit**

```bash
git add js/storage.js
git commit -m "feat: add per-category consent persistence with 6-month expiry to Storage"
```

---

### Task 2: Bannière de consentement (`js/consent.js`) + styles + intégration `index.html`

**Files:**
- Create: `js/consent.js`
- Modify: `css/styles.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: `Storage.getConsent`, `Storage.setConsent` (Task 1) ; `initAdSlots()` (existe déjà dans `js/components/adSlot.js`, chargé après ce script) ; `navigate('confidentialite')` (existe déjà dans `js/app.js`)
- Produces: `Consent.hasAdConsent(): boolean`, `Consent.needsPrompt(): boolean`, `Consent.init(): void`, `Consent.accept(): void`, `Consent.reject(): void`, `Consent.openPreferences(): void`, `Consent.showBanner(): void`, `Consent.hideBanner(): void`

- [ ] **Step 1: Créer `js/consent.js`**

```javascript
/* =========================================================
   Spark Learning – consent.js
   Bannière de consentement cookies (RGPD/CNIL). Catégorie
   'ads' active aujourd'hui ; structure de données prête pour
   une future catégorie 'analytics' (Semaine 4 du plan).
   ========================================================= */

var Consent = {
  CATEGORY_ADS: 'ads',

  hasAdConsent() {
    const record = Storage.getConsent(this.CATEGORY_ADS);
    return !!(record && record.granted === true);
  },

  needsPrompt() {
    return Storage.getConsent(this.CATEGORY_ADS) === null;
  },

  init() {
    if (this.needsPrompt()) this.showBanner();
  },

  accept() {
    Storage.setConsent(this.CATEGORY_ADS, true);
    this.hideBanner();
    if (typeof initAdSlots === 'function') initAdSlots();
  },

  reject() {
    Storage.setConsent(this.CATEGORY_ADS, false);
    this.hideBanner();
  },

  openPreferences() {
    this.showBanner();
  },

  showBanner() {
    if (document.getElementById('consent-banner')) return;
    const el = document.createElement('div');
    el.id = 'consent-banner';
    el.className = 'consent-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Préférences de cookies');
    el.innerHTML = `
      <p class="consent-banner-text">
        Spark Learning peut afficher des publicités <strong>non personnalisées</strong> pour financer l'hébergement, sans jamais te suivre ni vendre tes données. Le contenu pédagogique reste 100&nbsp;% gratuit dans tous les cas.
        <button class="consent-banner-link" onclick="navigate('confidentialite')">En savoir plus</button>
      </p>
      <div class="consent-banner-actions">
        <button class="consent-btn consent-btn-refuse" onclick="Consent.reject()">Refuser</button>
        <button class="consent-btn consent-btn-accept" onclick="Consent.accept()">Accepter</button>
      </div>
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('consent-banner-visible'));
  },

  hideBanner() {
    const el = document.getElementById('consent-banner');
    if (!el) return;
    el.classList.remove('consent-banner-visible');
    setTimeout(() => el.remove(), 300);
  }
};
```

- [ ] **Step 2: Ajouter les styles dans `css/styles.css`**

Dans le bloc `:root` (fin de la liste des z-index), remplacer :

```css
  --z-confetti:   400;
  --z-skip:       500;
```

par :

```css
  --z-confetti:   400;
  --z-skip:       500;
  --z-consent:    600;
```

Puis, juste avant la règle `/* ── Scroll to top button ── */` (qui suit `.toast-achievement`), insérer :

```css
/* ── Cookie consent banner ── */
.consent-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-consent);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  background: var(--bg-card);
  border-top: var(--border-width-lg) solid var(--border);
  box-shadow: var(--shadow-lg);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.consent-banner-visible {
  transform: translateY(0);
}
.consent-banner-text {
  flex: 1 1 320px;
  margin: 0;
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.5;
}
.consent-banner-link {
  background: none;
  border: none;
  padding: 0;
  margin-left: 4px;
  color: var(--primary);
  font-weight: 600;
  font-size: inherit;
  text-decoration: underline;
  cursor: pointer;
}
.consent-banner-actions {
  display: flex;
  gap: var(--space-sm);
  flex: 0 0 auto;
}
/* .consent-btn-refuse et .consent-btn-accept doivent rester visuellement
   équivalents (même padding/taille/police/épaisseur de bordure) — exigence
   légale, pas un détail esthétique. Ne pas transformer l'un des deux en
   bouton "plein"/CTA pendant que l'autre reste un simple lien. */
.consent-btn {
  padding: 12px 24px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  border: var(--border-width-lg) solid transparent;
  min-height: 48px;
  background: transparent;
}
.consent-btn-refuse {
  color: var(--text);
  border-color: var(--border);
}
.consent-btn-refuse:hover {
  border-color: var(--text-muted);
}
.consent-btn-accept {
  color: var(--primary);
  border-color: var(--primary);
}
.consent-btn-accept:hover {
  background: color-mix(in srgb, var(--primary) 8%, transparent);
}

@media (max-width: 640px) {
  .consent-banner {
    flex-direction: column;
    align-items: stretch;
    padding: var(--space-md);
  }
  .consent-banner-actions {
    justify-content: stretch;
  }
  .consent-btn {
    flex: 1;
  }
}
```

- [ ] **Step 3: Déclarer le script dans `index.html` et ajouter le lien footer**

Remplacer :

```html
  <script src="js/components/celebration.js?v=6"></script>
  <script src="js/adsConfig.js?v=6"></script>
```

par :

```html
  <script src="js/components/celebration.js?v=7"></script>
  <script src="js/consent.js?v=7"></script>
  <script src="js/adsConfig.js?v=7"></script>
```

Remplacer :

```html
      <p class="footer-legal"><button class="footer-legal-link" onclick="navigate('confidentialite')">Politique de confidentialité</button></p>
```

par :

```html
      <p class="footer-legal">
        <button class="footer-legal-link" onclick="navigate('confidentialite')">Politique de confidentialité</button>
        · <button class="footer-legal-link" onclick="Consent.openPreferences()">Gérer mes préférences cookies</button>
      </p>
```

- [ ] **Step 4: Bump `?v=6` → `?v=7` sur toutes les autres balises locales de `index.html`**

`index.html` contient actuellement exactement **38 occurrences** de `?v=6` sur des balises `<script src="js/...">`/`<link href="css/styles.css?v=6">` locales (le Step 3 ci-dessus vient d'en gérer 2 explicitement + en a ajouté 1 nouvelle). Passer TOUTES les occurrences restantes de `?v=6` à `?v=7`, de sorte qu'après ce Step il reste **0** occurrence de `?v=6` et **39** occurrences de `?v=7` dans tout le fichier (38 existantes + `js/consent.js` nouvellement ajouté).

- [ ] **Step 5: Vérification**

`node --check js/consent.js` → doit passer sans erreur.

Vérification Node du gabarit HTML généré (sans navigateur, sans DOM — on vérifie juste que le template literal produit la structure attendue). Créer un fichier temporaire `/tmp/test-consent-html.js` (hors du repo, à supprimer après) :

```javascript
const fs = require('fs');
const src = fs.readFileSync('js/consent.js', 'utf8');
const match = src.match(/el\.innerHTML = `([\s\S]*?)`;/);
console.assert(match, 'FAIL: template innerHTML introuvable');
const html = match[1];
console.assert(html.includes('Consent.accept()'), 'FAIL: bouton accepter manquant');
console.assert(html.includes('Consent.reject()'), 'FAIL: bouton refuser manquant');
console.assert(html.includes('consent-btn-accept'), 'FAIL: classe accept manquante');
console.assert(html.includes('consent-btn-refuse'), 'FAIL: classe refuse manquante');
console.assert(html.includes("navigate('confidentialite')"), 'FAIL: lien politique de confidentialité manquant');
console.log('5/5 assertions passed (no FAIL printed above)');
```

Run: `node /tmp/test-consent-html.js`
Expected: `5/5 assertions passed`, aucune ligne `FAIL:`.

Confirmer aussi visuellement (lecture du fichier) que `.consent-btn-refuse` et `.consent-btn-accept` dans `css/styles.css` ont des propriétés `padding`/`font-size`/`font-weight`/`border` de même valeur (seule la couleur diffère) — exigence légale du Global Constraints.

Compter les occurrences : `grep -c '?v=6' index.html` doit retourner `0`, `grep -c '?v=7' index.html` doit retourner `39`.

- [ ] **Step 6: Commit**

```bash
git add js/consent.js css/styles.css index.html
git commit -m "feat: add cookie consent banner (js/consent.js) with equal-weight accept/refuse"
```

---

### Task 3: Gater le rendu des pubs sur le consentement + initialiser au boot

**Files:**
- Modify: `js/components/adSlot.js`
- Modify: `js/app.js`

**Interfaces:**
- Consumes: `Consent.hasAdConsent()`, `Consent.init()` (Task 2)

- [ ] **Step 1: Modifier `renderAdSlot`/`initAdSlots` dans `js/components/adSlot.js`**

Remplacer tout le contenu du fichier par :

```javascript
/* =========================================================
	 Spark Learning – components/adSlot.js
	 Emplacements publicitaires (pages de navigation uniquement,
	 jamais dans les onglets d'apprentissage actif).
	 Le rendu d'une vraie pub exige ADS_ENABLED=true, un slot ID
	 configuré, ET un consentement cookies explicite (js/consent.js).
	 ========================================================= */

function renderAdSlot(placement, slotKey) {
	const slotId = slotKey && typeof AD_SLOTS !== 'undefined' ? AD_SLOTS[slotKey] : null;
	const adsEnabled = typeof ADS_ENABLED !== 'undefined' && ADS_ENABLED && slotId;

	if (!adsEnabled) {
		return `
			<div class="ad-slot-placeholder" data-ad-placement="${placement}" aria-hidden="true">
				<span class="ad-slot-placeholder-label">📢 Emplacement publicitaire (exemple) — ${placement}</span>
			</div>
		`;
	}

	// ADS_ENABLED + slot configuré, mais pas de vraie pub sans consentement explicite
	const hasConsent = typeof Consent !== 'undefined' && Consent.hasAdConsent();
	if (!hasConsent) return '';

	return `
		<ins class="adsbygoogle" style="display:block" data-ad-slot-key="${slotKey}"
				 data-ad-client="${ADSENSE_CLIENT}" data-ad-slot="${slotId}"
				 data-ad-format="auto" data-full-width-responsive="true"></ins>
	`;
}

// À appeler après chaque rendu de vue (comme renderMath()) : initialise les
// <ins class="adsbygoogle"> nouvellement injectés dans le DOM. Sans effet
// tant qu'ADS_ENABLED est à false OU que le consentement n'a pas été donné.
function initAdSlots() {
	if (typeof ADS_ENABLED === 'undefined' || !ADS_ENABLED) return;
	if (typeof Consent === 'undefined' || !Consent.hasAdConsent()) return;
	document.querySelectorAll('ins.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) { /* silencieux */ }
	});
}
```

- [ ] **Step 2: Appeler `Consent.init()` au tout début du boot dans `js/app.js`**

Remplacer :

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('sparkTheme') || 'light';
  applyTheme(savedTheme);

  // Auth init
  AuthService.init();
```

par :

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('sparkTheme') || 'light';
  applyTheme(savedTheme);

  // Bannière de consentement cookies (RGPD/CNIL) — avant toute autre init,
  // indépendant du rôle (invité/élève/enseignant/admin)
  if (typeof Consent !== 'undefined') Consent.init();

  // Auth init
  AuthService.init();
```

- [ ] **Step 3: Vérification (Node, logique pure de `renderAdSlot` avec stubs)**

Créer un fichier temporaire `/tmp/test-adslot-consent.js` (hors du repo, à supprimer après) :

```javascript
global.ADS_ENABLED = true;
global.AD_SLOTS = { home: 'slot123' };
global.ADSENSE_CLIENT = 'ca-pub-test';

const fs = require('fs');
eval(fs.readFileSync('js/components/adSlot.js', 'utf8'));

// 1. ADS_ENABLED=true, slot configuré, PAS de Consent défini du tout -> pas de pub (fail-safe)
let out = renderAdSlot('home', 'home');
console.assert(out === '', 'FAIL: sans objet Consent défini, aucune pub ne doit être rendue (' + JSON.stringify(out) + ')');

// 2. Consent défini mais refusé -> pas de pub
global.Consent = { hasAdConsent: () => false };
out = renderAdSlot('home', 'home');
console.assert(out === '', 'FAIL: consentement refusé -> aucune pub (' + JSON.stringify(out) + ')');

// 3. Consent accordé -> vraie pub
global.Consent = { hasAdConsent: () => true };
out = renderAdSlot('home', 'home');
console.assert(out.includes('adsbygoogle') && out.includes('slot123'), 'FAIL: consentement accordé -> vraie pub attendue (' + out + ')');

// 4. ADS_ENABLED=false -> placeholder, peu importe le consentement
global.ADS_ENABLED = false;
out = renderAdSlot('home', 'home');
console.assert(out.includes('ad-slot-placeholder'), 'FAIL: ADS_ENABLED=false -> placeholder attendu (' + out + ')');

console.log('4/4 assertions passed (no FAIL printed above)');
```

Run: `node /tmp/test-adslot-consent.js`
Expected: `4/4 assertions passed`, aucune ligne `FAIL:`.

Vérifier aussi par lecture que `initAdSlots()` contient bien les deux gardes (`ADS_ENABLED` et `Consent.hasAdConsent()`) avant le `forEach`.

- [ ] **Step 4: Commit**

```bash
git add js/components/adSlot.js js/app.js
git commit -m "fix: never load a real ad without explicit cookie consent"
```

---

### Task 4: Finaliser la checklist d'activation dans `plan-fondations-monetisation.md`

**Files:**
- Modify: `plan-fondations-monetisation.md`

**Interfaces:** aucune (documentation uniquement)

- [ ] **Step 1: Mettre à jour la section 3.1**

Remplacer :

```markdown
### 3.1 Consentement cookies (bloquant avant toute vraie pub)
- [ ] **[Externe]** Choisir une solution de CMP conforme à la politique "EU User Consent Policy" de Google (ex. solution gratuite type consentmanager.net, ou CMP maison respectant les critères Google : refus aussi facile qu'acceptation, pas de cases pré-cochées)
- [ ] Intégrer le script du CMP choisi dans `index.html`, avant le script `adsbygoogle.js`
- [ ] Bloquer le chargement effectif des ad units tant que le consentement n'est pas donné (adapter `js/components/adSlot.js` / `js/adsConfig.js` si nécessaire)
- [ ] Ajouter un lien "Gérer mes préférences cookies" dans le footer, à côté du lien "Politique de confidentialité" déjà présent
```

par :

```markdown
### 3.1 Consentement cookies (bloquant avant toute vraie pub) — TERMINÉ le 2026-07-02
- [x] Bannière maison en Vanilla JS (`js/consent.js`), pas de CMP tiers — voir `docs/superpowers/specs/2026-07-02-consent-banner-adsense-activation-design.md`
- [x] Persistance par catégorie dans `js/storage.js` (`Storage.getConsent`/`setConsent`, expiration 6 mois)
- [x] `js/components/adSlot.js` bloque tout rendu de vraie pub sans consentement explicite (`renderAdSlot`/`initAdSlots`)
- [x] Lien "Gérer mes préférences cookies" dans le footer, à côté de "Politique de confidentialité"
```

- [ ] **Step 2: Mettre à jour la section 3.3 avec la checklist finale copiable telle quelle**

Remplacer :

```markdown
### 3.3 Checklist d'activation AdSense
- [ ] **[Externe]** Suivre la validation du compte AdSense (déjà en attente depuis les commits précédents)
- [ ] **[Externe]** Une fois validé, créer les ad units dans le dashboard AdSense (home, subjects, modules)
- [ ] Renseigner les IDs réels dans `AD_SLOTS` (`js/adsConfig.js`)
- [ ] Passer `ADS_ENABLED` à `true` — uniquement après que 3.1 (CMP) soit en place
```

par :

```markdown
### 3.3 Checklist d'activation AdSense (le jour de l'approbation — code déjà prêt depuis le 2026-07-02)
- [ ] **[Externe]** Attendre l'email de validation du compte AdSense
- [ ] **[Externe]** Dans le dashboard AdSense, créer 3 ad units : accueil (`home`), liste des matières (`subjects`), liste des modules (`modules`)
- [ ] Dans `js/adsConfig.js`, remplacer les 3 chaînes vides de `AD_SLOTS` par les IDs obtenus :
  ```javascript
  var AD_SLOTS = {
    home: 'XXXXXXXXXX',
    subjects: 'XXXXXXXXXX',
    modules: 'XXXXXXXXXX'
  };
  ```
- [ ] Dans `js/adsConfig.js`, passer `var ADS_ENABLED = false;` à `var ADS_ENABLED = true;`
- [ ] Bump `?v=N` sur toutes les balises locales de `index.html` (convention du projet)
- [ ] Déployer (`git push`) — la bannière de consentement (déjà en place) gère automatiquement le reste : aucune pub ne se chargera avant qu'un visiteur ait cliqué "Accepter"
```

- [ ] **Step 3: Commit**

```bash
git add plan-fondations-monetisation.md
git commit -m "docs: mark consent banner done, finalize AdSense activation checklist"
```
