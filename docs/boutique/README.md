# Boutique Shopify — mentions obligatoires

Quatre textes à installer avant la première vente. Ils sont rédigés pour un
**produit 100 % numérique** (PDF téléchargeable) vendu à des **consommateurs**
(particuliers), depuis la **France**.

| Fichier | Page Shopify | Obligatoire ? |
|---|---|---|
| `mentions-legales.md` | Page « Mentions légales » | Oui — LCEN art. 6-III |
| `cgv.md` | Politique → **Conditions générales de vente** | Oui — Code de la consommation |
| `politique-confidentialite.md` | Politique → **Politique de confidentialité** | Oui — RGPD |
| `politique-remboursement.md` | Politique → **Politique de remboursement** | Oui — champ exigé par Shopify |

> Ces textes sont un **point de départ sérieux, pas un avis juridique**. Fais-les
> relire avant la mise en ligne, en particulier la clause de renonciation au droit
> de rétractation, qui est celle qui protège réellement ton chiffre d'affaires.

---

## ⚠️ Ce que Shopify change par rapport à Gumroad / Lemon Squeezy

**Shopify n'est PAS « Merchant of Record ».** Sur Gumroad, Lemon Squeezy ou Paddle,
la plateforme devient le vendeur légal et collecte *et reverse* la TVA à ta place.
**Sur Shopify, le vendeur, c'est toi.** La TVA sur les ventes de contenu numérique
te revient entièrement.

Concrètement :

- Un PDF vendu à un particulier est un **service fourni par voie électronique**.
  La TVA est due **dans le pays de l'acheteur**, pas dans le tien.
- Il existe un **seuil de 10 000 € par an** de ventes à distance intracommunautaires,
  tous pays de l'UE confondus. En dessous, tu peux appliquer les règles françaises.
  Au-dessus, tu dois facturer le taux du pays de l'acheteur et déclarer via le
  **guichet unique OSS** (impots.gouv.fr).
- La **franchise en base** de la micro-entreprise te dispense de facturer la TVA
  française, mais **elle ne te dispense pas** des obligations sur les ventes vers
  les autres pays de l'UE.

**Ce que je te recommande :** au démarrage, restreins la vente à la France dans
Shopify (*Settings → Shipping and delivery → Shipping zones*, ou via les marchés
dans *Settings → Markets*). Tu vends, tu valides le produit, et tu ouvres l'UE
seulement quand tu sais où tu en es du seuil. Fais confirmer ce point par un
comptable : c'est le seul de la liste où une erreur coûte de l'argent
rétroactivement.

---

## Le point qui protège ton chiffre d'affaires

Pour un contenu numérique, le client dispose en principe de **14 jours de
rétractation**. Ce droit **saute** si — et seulement si — deux conditions sont
réunies avant le téléchargement (Code de la consommation, art. L221-28, 13°) :

1. l'acheteur **consent expressément** à l'exécution immédiate ;
2. l'acheteur **renonce expressément** à son droit de rétractation.

Sans ces deux consentements, un client peut télécharger le PDF puis demander le
remboursement pendant 14 jours, et tu dois le lui accorder.

**Mise en œuvre sur Shopify, du minimum au plus sûr :**

- **Minimum viable** : active la case d'acceptation des CGV au paiement
  (*Settings → Checkout → Terms of service*). La clause de renonciation est en
  **article 7 des CGV**, en gras. Reprends-la ensuite dans l'e-mail de confirmation
  de commande (*Settings → Notifications → Order confirmation*) : la loi exige que
  tu conserves une preuve de l'accord sur support durable.
- **Plus sûr** : une case à cocher **dédiée** à la renonciation, distincte de
  l'acceptation des CGV. Sur Shopify cela demande une extension de checkout ou une
  app. C'est ce qui tient le mieux en cas de litige.

---

## Livraison du fichier

Shopify ne délivre pas de fichier numérique nativement : installe l'app officielle
**Shopify Digital Downloads** (gratuite). Pense à décocher l'expédition sur la
fiche produit (*This is a physical product* → décoché), sinon Shopify réclamera une
adresse de livraison.

**Filigrane** : le PDF est copiable à l'infini. Un filigrane nominatif (nom +
e-mail de l'acheteur en pied de page) ne bloque personne techniquement mais dissuade
le partage large. À brancher sur la chaîne `scripts/manuel/` le jour où le volume
le justifie.

---

## À remplacer avant publication

Tous les `[...]` des quatre fichiers :

- `[NOM COMMERCIAL]`, `[ADRESSE COMPLÈTE]`, `[EMAIL DE CONTACT]`, `[TÉLÉPHONE]`
- `[NUMÉRO SIREN]` / `[NUMÉRO SIRET]` — après immatriculation
- `[NOM DU MÉDIATEUR]`, `[SITE DU MÉDIATEUR]`, `[ADRESSE DU MÉDIATEUR]` — l'adhésion
  à un médiateur de la consommation est **obligatoire** pour tout professionnel
  vendant à des particuliers (art. L616-1 du Code de la consommation)
- `[URL DE LA BOUTIQUE]`
- `[PRIX]` le cas échéant
