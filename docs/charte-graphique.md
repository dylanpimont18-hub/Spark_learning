# Charte graphique — Spark Learning

> Extraite du code existant (`css/styles.css`, `js/views/home.js`) le 2026-08-21.
> **Source de vérité = `css/styles.css`.** Ce document décrit l'existant, il ne le remplace pas.
> Toute évolution visuelle doit partir d'ici, pas d'une tendance externe.

---

## 1. Couleurs

Toutes les couleurs sont des variables CSS. **Ne jamais hardcoder de hex dans un composant.**

### Mode clair (`:root`)

| Token | Valeur | Rôle réel dans le produit |
|---|---|---|
| `--primary` | `#2C3E50` | Bleu-ardoise. Titres de marque, chiffres de stats, bouton secondaire, niveau « Collège ». **Couleur d'autorité, pas d'action.** |
| `--secondary` | `#48C9B0` | Teal. Niveau « Lycée », thèmes, dégradé du mot surligné du hero. Accent **ponctuel**. |
| `--accent` | `#F4D03F` | Jaune. **C'est la couleur d'action** : `.btn-primary`, kicker du hero, niveau « BTS ». |
| `--fed` | `#E67E22` | Orange. Réservé au parcours BTS FED. |
| `--success` | `#2ECC71` | Validation. |
| `--error` | `#FF6B6B` | Erreur — utilisé avec parcimonie (pédagogie sans « croix rouge »). |
| `--bg` | `#F8F9FA` | Fond de page. |
| `--bg-card` | `#FFFFFF` | Fond de carte **et** fond des sections alternées. |
| `--text` | `#212529` | Texte courant. |
| `--text-muted` | `#6C757D` | Sous-titres, descriptions. |
| `--border` | `#DEE2E6` | Bordures (1px courant, 2px sur les cartes cliquables). |

### Mode sombre (`[data-theme="dark"]`)

Bascule **par attribut sur `<html>`**, pas par `prefers-color-scheme`.

| Token | Valeur | Note |
|---|---|---|
| `--primary` | `#8AB4F8` | S'éclaircit → le texte posé dessus doit passer en foncé. |
| `--secondary` | `#3A8979` | Teal **assourdi**, pas vif. |
| `--accent` | `#D4AC0D` | Or terne, pas le jaune vif. |
| `--bg` / `--bg-card` | `#121212` / `#1E1E1E` | |
| `--text` / `--text-muted` | `#E9ECEF` / `#ADB5BD` | |
| `--border` | `#2C2C2C` | |

### Texte sur fond coloré

`--on-primary`, `--on-accent`, `--on-success`, `--on-error` s'inversent entre les thèmes
(`#fff`/`#1a1a1a` en clair → `#121212` en sombre). **Toujours les utiliser** plutôt qu'un blanc fixe :
en sombre, `--primary` devient clair et un texte blanc dessus devient illisible.

### Dosage (règle observée dans le produit)

Le bleu-ardoise porte la hiérarchie, le jaune porte l'action, le teal est un accent ponctuel.
Un teal omniprésent (liens, focus, icônes, halos) sort de la charte.

---

## 2. Typographie

| Rôle | Police | Réglages |
|---|---|---|
| Titres, chiffres, logo | **Poppins** | 700 courant, **800** pour `.hero-title` et `.hero-stat-number` |
| Corps de texte | **Inter** | 16px base, `line-height: 1.6` |

- `.hero-title` : `clamp(2rem, 5vw, 3.25rem)`, 800, `line-height: 1.15`, `max-width: 800px`, centré.
- `.hero-title .highlight` : dégradé `135deg, var(--primary) → var(--secondary)` en `background-clip: text`.
- `.section-title` : `clamp(1.5rem, 3vw, 2rem)`, centré.
- `.feature-title` : Poppins 700, `1.05rem`.
- `.feature-desc` / `.section-subtitle` : `0.9–1rem`, `var(--text-muted)`.
- `.hero-kicker` : `0.8rem`, 600, **uppercase**, `letter-spacing: 0.05em`, pilule jaune.
- Maths : KaTeX, virgule française avec accolades (`1{,}5`).

---

## 3. Formes, espacement, élévation

| Token | Valeur |
|---|---|
| `--radius` | `14px` |
| `--shadow` | `0 4px 20px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 40px rgba(0,0,0,0.12)` |
| `--transition` | `0.25s ease` |
| `--header-h` | `64px` |
| Espacement | `4 / 8 / 16 / 24 / 32 / 48px` (`--space-xs` → `--space-2xl`) |
| Bordures | `1px` courant, `2px` sur cartes cliquables |

**Élévation douce.** Les ombres sont larges et peu opaques — jamais d'ombre dure ou décalée.

---

## 4. Composants de référence

- **`.card-base`** — le socle de toute carte : `bg-card`, `radius 14px`, bordure 1px, transition sur `transform` + `box-shadow`.
- **`.btn-primary`** — fond `--accent` jaune, texte `--on-accent`, halo jaune au survol. **Un seul par écran.**
- **`.btn-secondary`** — transparent, bordure et texte `--primary`.
- **Grilles** — `repeat(auto-fit, minmax(280px, 1fr))`, gap `24px` ; 2 colonnes en tablette, 1 en mobile.
- **Sections** — padding `64px 0`, alternance `--bg` / `--bg-card` séparée par une bordure fine.
- **Focus** — `outline: 2px solid var(--primary)`, `outline-offset` 2 à 4px. Jamais supprimé.

---

## 5. Signature visuelle du hero

C'est l'élément le plus identitaire du site :

- Hero **centré**, `padding: 80px 0 60px`, `overflow: hidden`.
- `.hero-bg` : halo radial très discret — `ellipse 70% 60% at 50% 0%`, `--primary` à **8 %**.
- `.hero-math-floats` : 6 formules réelles (`E = mc²`, `∫f(x)dx`, `pH = −log[H₃O⁺]`, `F = ma`, `U = RI`, `Δ = b²−4ac`),
  Poppins 700, `opacity: 0.07`, couleur `--primary`, flottement `6s` en boucle, positions dispersées.
- `.hero-stats` : 4 chiffres en flex, gap `48px` — modules / matières / niveaux / 100 % gratuit.

---

## 6. Ton

- Tutoiement, socratique, bienveillant. Jamais « Faux » ni « Erreur ».
- Aération maximale : `<br/><br/>` entre les idées, `<strong>` sur les concepts clés.
- Promesse constante : « aucun compte requis », « à ton rythme », « 100 % gratuit ».
- Emojis présents comme icônes dans le produit actuel (`🎯 💡 ✅ 📖 ❓ 🔢 🔭 📝`).

---

## 7. Accessibilité

- Contraste texte ≥ 4.5:1 dans les deux thèmes.
- `prefers-reduced-motion` respecté (flottement des formules, transitions).
- Focus visible partout, cibles tactiles ≥ 44px.
- Pas de sens porté par la seule couleur.
