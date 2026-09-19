# -*- coding: utf-8 -*-
"""Campagnes promotionnelles : textes, plans de tournage, legendes.

Comme les interviews, ces textes sont ECRITS A LA MAIN, jamais generes.
Une campagne engage la boutique sur une offre precise : un chiffre faux
dans une video de promotion n'est pas une coquille, c'est une publicite
mensongere. Chaque nombre ecrit ici a ete verifie contre la boutique
(prix reels, mecanique du Duo, reglages du code) le jour de l'ecriture.

Regles d'ecriture heritees du pipeline : aucun symbole imprononcable,
pas de LaTeX, pas de decimale anglaise, les prix en toutes lettres. Le
code se dit « STUDENT 2026 » avec une espace : edge-tts lit alors le mot
puis le nombre, et le sous-titre affiche les deux tels quels. La plaque
a l'ecran, elle, porte le code exact a taper.

Chaque video porte :
  - `narrateur` : "sparky", "lumen", ou "dialogue" (Sparky questionne,
                  Lumen repond) ;
  - `sections`  : hook / body / cta pour un narrateur seul, ou
    `repliques` : {locuteur, pose, texte} pour un dialogue ;
  - `plan`      : les endroits filmes, bornes en FRACTION de la video
                  (le texte est ecrit avant que la voix off existe) ;
  - `jour` / `creneau` : sa place dans le calendrier, en jours apres le
                  lancement.
"""

import re

import config
from pipeline import capture, livraison, postiz, scripts
from pipeline.texte import symboles_interdits

SITE = config.SITE_URL.rstrip("/")
BOUTIQUE = config.BOUTIQUE_URL.rstrip("/")

# Entre le 18:00 et le 20:30 des modules, loin du 22:00 de la ligne
# « vie reelle » : une campagne s'ajoute au fil, elle ne le remplace pas.
CRENEAU_CAMPAGNE = "19:15"

# Plafond plus bas que les 32 s des videos quotidiennes ? Non : 35 s
# estimees, soit ~30 s reelles apres coupe. Premiere version a 45 s,
# ramenee le 2026-09-06 : TikTok recompense la completion, et une
# campagne n'a rien a dire qui vaille dix secondes de plus.
DUREE_MAX_CAMPAGNE = 35.0
DUREE_MIN_CAMPAGNE = 6.0

# Limites des champs TikTok.
ACCROCHE_MAX = 150
LEGENDE_MAX = postiz.LEGENDE_MAX
BIO_MAX = 80
COMMENTAIRE_MAX = 150


CAMPAGNES = {

    # ── STUDENT2026 : -20 % sur toute la commande ────────────────────
    #
    # Le code a ete cree le 2026-09-06 sur la boutique : 20 % sur tous
    # les produits, tous les clients, sans date de fin, cumulable avec
    # les 16 offres automatiques « Duo » (un manuel de maths et un de
    # physique du MEME niveau : le second a -50 %, une fois par
    # commande). Les prix cites : 9,99 € un niveau en edition eleve,
    # 14,99 € en edition professeur, 24,99 € un cycle complet.
    #
    # Le fil de la campagne : la question genante d'abord (le site est
    # gratuit, pourquoi vendre ?), parce que le spectateur se la pose de
    # toute facon ; puis une VRAIE lecon de maths sur l'offre elle-meme
    # (les remises successives ne s'additionnent pas) — c'est la video
    # la plus Spark Learning des quatre ; puis le contenu du manuel ;
    # enfin un rappel court, six jours plus tard.

    "student2026": {
        "titre": "STUDENT2026 — la rentrée à -20 %",
        "code": "STUDENT2026",
        "remise": "-20 %",
        # Ce lien applique le code tout seul au panier : c'est celui de
        # la bio, le seul endroit cliquable du compte.
        "lien": BOUTIQUE + "/discount/STUDENT2026",
        "marque": config.BOUTIQUE,
        # Decision de Dylan du 2026-09-06 : pas de label « contenu genere
        # par IA » sur les videos de promotion (video_made_with_ai a
        # faux). Reserve signalee : TikTok demande ce label pour les
        # voix de synthese et peut l'apposer lui-meme ou limiter la
        # portee. La premiere video (question, publiee le 2026-09-06 a
        # 23:51) est partie AVEC le label, avant cette decision.
        "declarer_ia": False,
        # La plaque surgit a 15 % de la video, bien avant que le code soit
        # prononce : TikTok recompense la completion, et celui qui part a
        # huit secondes doit deja avoir vu STUDENT2026. (Decision du
        # 2026-09-06 ; l'autre reglage, `"mot": "STUDENT"`, la faisait
        # attendre la voix, soit 20 a 29 s.)
        "plaque": {
            "code": "STUDENT2026",
            "remise": "-20 %",
            "sous_texte": config.BOUTIQUE,
            "des": 0.15,
        },
        # Sous CHAQUE publication TikTok pendant la campagne, y compris
        # les videos quotidiennes (via PROMO_TIKTOK dans .env).
        "pied": (
            "📚 -20 % sur tous les manuels avec le code STUDENT2026 · lien en bio · "
            "cumulable avec l'offre Duo (maths + physique du même niveau, le 2e à -50 %)"
        ),
        "bio": "Cours gratuits ⚡ Manuels -20 % avec le code STUDENT2026 👇",
        "commentaire": (
            "🎓 STUDENT2026 = -20 % sur toute la commande (lien en bio). "
            "Cumulable avec l'offre Duo : le 2e manuel à -50 %. Le site reste gratuit ⚡"
        ),

        "videos": {

            # Jour 0 — la question genante, en dialogue. A epingler en
            # tete de profil : c'est la video qui explique tout.
            "question": {
                "titre": "La question gênante",
                "narrateur": "dialogue",
                "repliques": [
                    {"locuteur": "sparky", "pose": "hook", "texte":
                        "Lumen. Le site est gratuit. Alors pourquoi vous vendez des manuels ?"},
                    {"locuteur": "lumen", "pose": "neutre", "texte":
                        "Parce que ce n'est pas le même besoin. Le site débloque une notion, "
                        "un soir, à vingt-deux heures. Un manuel construit toute l'année."},
                    # Coupe du 2026-09-06 : l'echange « et il y a quoi dedans ? »
                    # est parti dans la video « dedans », qui lui est consacree.
                    {"locuteur": "sparky", "pose": "hook", "texte":
                        "Et pour la rentrée ?"},
                    {"locuteur": "lumen", "pose": "cta", "texte":
                        "Moins vingt pour cent sur toute la commande, avec le code STUDENT 2026. "
                        "C'est sur la boutique Spark Learning. Le lien est en bio."},
                    {"locuteur": "sparky", "pose": "cta", "texte":
                        "Et le site, lui, reste gratuit."},
                    {"locuteur": "lumen", "pose": "cta", "texte":
                        "Toujours."},
                    # L'outro : un appel au partage, pendant que la plaque du
                    # code reste a l'ecran.
                    {"locuteur": "sparky", "pose": "cta", "texte":
                        "Partage ça à tous tes potes, ils te diront merci."},
                ],
                "plan": [
                    # Defilement court : les deux premieres secondes decident de
                    # tout sur TikTok, l'accueil doit y rester reconnaissable.
                    {"url": BOUTIQUE + "/", "jusqu_a": 0.14, "defilement": 0.3},
                    # « Un manuel construit toute l'annee » : une fiche
                    # produit, la couverture puis les chapitres.
                    {"url": BOUTIQUE + "/products/mathematiques-troisieme-edition-eleve",
                     "jusqu_a": 0.32, "defilement": 0.8},
                    # La fiche Seconde montre le bloc « Duo » : l'offre
                    # cumulable, sans un mot de plus.
                    {"url": BOUTIQUE + "/products/mathematiques-seconde-edition-eleve",
                     "jusqu_a": 0.52, "defilement": 0.8},
                    # Le CTA sur la grille des couvertures, sous la plaque.
                    {"url": BOUTIQUE + "/collections/manuels", "defilement": 0.6},
                ],
                "legende": "Le site est gratuit. Alors pourquoi on vend des manuels ? "
                           "Lumen répond, et il y a un code dedans 👀",
                "hashtags": ["SparkLearning", "maths", "physiquechimie", "rentrée2026",
                             "lycée", "collège"],
                "jour": 0,
                "creneau": CRENEAU_CAMPAGNE,
                "epingler": True,
            },

            # Jour 1 — une vraie lecon : les remises successives. Les
            # chiffres sont ceux de l'offre, arrondis a dix euros pour
            # se calculer de tete ; 0,75 x 0,8 = 0,6 est exact.
            "pourcentages": {
                "titre": "-50 % puis -20 %, ça ne fait pas -70 %",
                "narrateur": "sparky",
                "sections": {
                    # Coupe du 2026-09-06 : la regle des coefficients est partie,
                    # le « pourquoi » tient dans « vingt pour cent de quinze, pas
                    # de vingt ». Le cours filme derriere donne la regle.
                    "hook": "Moins cinquante, puis moins vingt. Ça fait moins soixante-dix ? "
                            "Non.",
                    "body": "Un manuel de maths, un de physique, dix euros chacun : vingt "
                            "euros. Offre Duo, le deuxième à moitié prix : il reste quinze. "
                            "Le code STUDENT 2026 enlève vingt pour cent. Mais vingt pour cent "
                            "de quinze, pas de vingt : il reste douze. De vingt à douze, c'est "
                            "moins quarante, pas moins soixante-dix.",
                    "cta": "Le duo à moins quarante avec STUDENT 2026, lien en bio. "
                           "Partage ça à un pote qui additionne les pourcentages.",
                },
                "plan": [
                    {"url": BOUTIQUE + "/collections/packs", "jusqu_a": 0.14, "defilement": 0.4},
                    # Le calcul sur le vrai cours d'evolutions successives.
                    {"url": SITE + "/module/1re-information-chiffree/cours",
                     "jusqu_a": 0.66, "defilement": 0.7},
                    {"url": BOUTIQUE + "/collections/manuels", "defilement": 0.6},
                ],
                "legende": "-50 % puis -20 %, ça fait -70 % ? Non. Le piège des pourcentages, "
                           "expliqué sur une vraie remise 🧠",
                "hashtags": ["SparkLearning", "maths", "pourcentages", "astuce", "lycée",
                             "rentrée2026"],
                "jour": 1,
                "creneau": CRENEAU_CAMPAGNE,
            },

            # Jour 3 — ce qu'il y a dedans, par Lumen : le narrateur
            # adulte est plus credible pour parler du contenu, et ce
            # sont souvent les parents qui paient.
            "dedans": {
                "titre": "Ce qu'il y a dans un manuel",
                "narrateur": "lumen",
                "sections": {
                    "hook": "Un manuel de maths à neuf euros quatre-vingt-dix-neuf. Voilà ce "
                            "qu'il y a dedans.",
                    # Coupe du 2026-09-06 : l'edition professeur est partie, la
                    # video s'adresse a l'eleve qui la regarde.
                    "body": "Un niveau complet, du premier chapitre au dernier. Chaque chapitre "
                            "commence par le piège, celui qui fait perdre des points le jour du "
                            "contrôle. Puis le cours, aéré, et les exercices pour s'entraîner. "
                            "Et c'est un PDF : tu l'as tout de suite, sur le téléphone comme "
                            "sur l'ordinateur.",
                    "cta": "Moins vingt pour cent avec le code STUDENT 2026, sur la boutique "
                           "Spark Learning. Lien en bio. Et partage cette vidéo à quelqu'un qui "
                           "en a besoin.",
                },
                "plan": [
                    # 0,55 : on descend jusqu'a la liste des chapitres et au
                    # paragraphe « Edition eleve », pas jusqu'au pied de page.
                    {"url": BOUTIQUE + "/products/mathematiques-troisieme-edition-eleve",
                     "jusqu_a": 0.62, "defilement": 0.55},
                    {"url": BOUTIQUE + "/collections/manuels", "defilement": 0.6},
                ],
                "legende": "9,99 € le manuel : voilà exactement ce qu'il y a dedans 📖",
                "hashtags": ["SparkLearning", "manuel", "maths", "physiquechimie", "profs",
                             "rentrée2026"],
                "jour": 3,
                "creneau": CRENEAU_CAMPAGNE,
            },

            # Jour 6 — le rappel, dix secondes, le code et rien d'autre.
            "teaser": {
                "titre": "Le rappel",
                "narrateur": "sparky",
                "sections": {
                    "hook": "Un code. Moins vingt pour cent. Sur tous les manuels Spark Learning.",
                    "body": "STUDENT 2026. Et ça se cumule avec l'offre Duo.",
                    "cta": "Le lien est en bio. Partage ça à tous tes potes, et fonce.",
                },
                "plan": [
                    {"url": BOUTIQUE + "/collections/manuels", "defilement": 0.9},
                ],
                # L'accroche ne repete pas le pied : elle appelle, le pied explique.
                "legende": "Un code, -20 %, tous les manuels. Tu sais quoi faire ⚡",
                "hashtags": ["SparkLearning", "codepromo", "maths", "physiquechimie",
                             "rentrée2026"],
                "jour": 6,
                "creneau": CRENEAU_CAMPAGNE,
            },
        },
    },

    # ── PROFS2026 : les editions professeur ──────────────────────────
    #
    # Campagne ecrite le 2026-09-19, premiere a viser les enseignants
    # et non les eleves. Trois differences assumees avec student2026 :
    #
    #   - Lumen SEUL, jamais le dialogue. Le ping-pong Sparky/Lumen
    #     porte l'energie qui parle aux collegiens ; face a un
    #     enseignant, une voix posee qui explique vaut mieux qu'un duo
    #     qui s'amuse.
    #   - AUCUN code promo. Le discours repose sur le temps gagne ;
    #     une remise le ramene au prix, et « STUDENT » dit « eleve ».
    #     Le lien en bio suffit.
    #   - Aucun argument de volume. Decision de Dylan du 2026-09-19 :
    #     l'angle « 1484 pages contre 750 » est ecarte, vendre au poids
    #     dessert un discours sur la qualite pedagogique.
    #
    # Ce qui est montre existe et a ete verifie en ligne le jour de
    # l'ecriture : la collection « Pour les enseignants » (7 ouvrages),
    # les 12 pages d'apercu des fiches professeur, la page « erreurs
    # frequentes » et la grille de suivi des attendus, visibles dans
    # la liseuse. Aucun chiffre d'exercices n'est cite : le volume de
    # la banque n'est mesure que sur la 6e (voir
    # docs/manuels/argumentaire-edition-professeur.md, §6).
    #
    # Cible, par ordre de pertinence commerciale : le contractuel ou le
    # debutant, puis le professeur particulier et la famille en IEF —
    # ceux a qui les ressources enseignant des editeurs sont fermees.
    # Le titulaire experimente n'est PAS vise : il a deja sa
    # progression, et le livre du professeur de son editeur gratuitement.

    "profs2026": {
        "titre": "Éditions professeur — le temps gagné",
        # Pas de remise : la campagne ne vend pas un prix, elle vend du
        # temps gagne. Le validateur exige neanmoins un `code` et une
        # plaque qui en porte un — la plaque est en realite generique
        # (libelle / code / sous_texte), on y met donc le nom de la
        # collection, qui est ce que le spectateur doit retenir et
        # retrouver. Meme role qu'un code : un repere a l'ecran.
        "code": "ÉDITIONS PROFESSEUR",
        "remise": "",
        # Aucun code promo a prononcer : le champ ci-dessus n'est qu'un
        # libelle de plaque. Sans ce drapeau, le validateur exigerait
        # que « ÉDITIONS PROFESSEUR » soit dit mot pour mot par la voix.
        "sans_code": True,
        "lien": BOUTIQUE + "/collections/pour-les-enseignants",
        "marque": config.BOUTIQUE,
        "declarer_ia": False,
        # La plaque dessine le « code » en 108 px sans jamais le reduire :
        # « ÉDITIONS PROFESSEUR » y debordait des deux cotes (rendu du
        # 2026-09-19, on lisait « DITIONS PROFESSEU »). Un libelle court
        # est donc obligatoire ici — la ligne longue passe au-dessus, en
        # 38 px, ou elle tient.
        "plaque": {
            "libelle": "ÉDITIONS PROFESSEUR",
            "code": "POUR LES PROFS",
            "remise": "",
            "sous_texte": config.BOUTIQUE,
            "des": 0.15,
        },
        "pied": (
            "📘 Éditions professeur : progression annuelle, erreurs fréquentes avec leur "
            "remédiation, corrigés rédigés étape par étape · lien en bio"
        ),
        "bio": "Cours gratuits ⚡ Manuels pour enseignants 👇",
        # 150 caracteres maximum : c'est un commentaire epingle, pas une
        # legende. On garde les trois apports et le rappel du gratuit.
        "commentaire": (
            "📘 Progression, erreurs fréquentes, corrigés rédigés — en plus du manuel élève. "
            "Le site reste gratuit ⚡"
        ),

        "videos": {

            # Jour 0 — l'entree en matiere. A epingler : c'est celle qui
            # dit a un enseignant qu'on parle de lui.
            "dimanche-soir": {
                "titre": "Dimanche, 21 heures",
                "narrateur": "lumen",
                "sections": {
                    # Une situation, pas une offre. Celui qui la reconnait
                    # reste ; les autres ne sont pas la cible.
                    "hook": "Dimanche, vingt et une heures. Vous préparez la semaine.",
                    "body": "Vous cherchez un exercice de plus pour le groupe qui va trop vite. "
                            "Vous essayez de retrouver pourquoi, chaque année, ils butent au "
                            "même endroit. Ce travail-là, quelqu'un l'a déjà fait.",
                    "cta": "Les éditions professeur Spark Learning. Le lien est en bio.",
                },
                "plan": [
                    # L'accueil d'abord : la bande enseignants y porte la
                    # phrase « L'essentiel, c'est de transmettre ».
                    {"url": BOUTIQUE + "/", "jusqu_a": 0.30, "defilement": 0.55},
                    # Puis la collection : sept ouvrages, une promesse tenue.
                    {"url": BOUTIQUE + "/collections/pour-les-enseignants",
                     "defilement": 0.8},
                ],
                "legende": "Dimanche soir, vous préparez la semaine. Ce travail-là est déjà fait 📘",
                "hashtags": ["SparkLearning", "profs", "enseignant", "maths",
                             "physiquechimie"],
                "jour": 0,
                "creneau": CRENEAU_CAMPAGNE,
                "epingler": True,
            },

            # Jour 2 — la preuve. C'est la rubrique la plus distinctive
            # de l'edition professeur, et elle se MONTRE : la liseuse
            # l'affiche en douze pages, sans acheter.
            "erreurs": {
                "titre": "L'erreur que tous vos élèves font",
                "narrateur": "lumen",
                "sections": {
                    "hook": "Vos élèves font tous la même erreur. Vous savez laquelle.",
                    "body": "Dans l'édition professeur, elle est écrite. Ce que l'élève écrit, "
                            "d'où cela vient, par quoi y répondre — et l'exercice du livre qui "
                            "sert de remédiation. Quatre erreurs par chapitre, sur tout l'ouvrage.",
                    "cta": "Douze pages sont consultables avant d'acheter. Le lien est en bio.",
                },
                "plan": [
                    # La fiche Troisieme professeur : c'est celle dont
                    # l'apercu contient la page « erreurs frequentes ».
                    {"url": BOUTIQUE + "/products/mathematiques-troisieme-edition-professeur",
                     "jusqu_a": 0.55, "defilement": 0.85},
                    {"url": BOUTIQUE + "/collections/pour-les-enseignants",
                     "defilement": 0.7},
                ],
                "legende": "L'erreur que tous vos élèves font est déjà écrite, avec sa remédiation 📘",
                "hashtags": ["SparkLearning", "profs", "enseignant", "maths", "pédagogie"],
                "jour": 2,
                "creneau": CRENEAU_CAMPAGNE,
            },

            # Jour 4 — la cible la plus precise de la campagne. Celui
            # qui prend une classe sans progression eprouvee est aussi
            # celui qui a le moins de ressources deja constituees.
            "contractuel": {
                "titre": "Une classe, trois jours avant",
                "narrateur": "lumen",
                "sections": {
                    "hook": "On vous confie une classe trois jours avant la rentrée.",
                    "body": "Pas de progression, pas de banque d'évaluations, pas dix ans de "
                            "copies derrière vous. L'édition professeur donne l'ordre des "
                            "chapitres, leurs prérequis réels, et les attendus officiels de "
                            "fin d'année, chapitre par chapitre.",
                    "cta": "De quoi tenir l'année dès la première semaine. Le lien est en bio.",
                },
                "plan": [
                    # La Sixieme : l'ouvrage de reference de l'edition
                    # professeur, et le niveau le plus souvent confie a
                    # un debutant.
                    {"url": BOUTIQUE + "/products/mathematiques-sixieme-edition-professeur",
                     "jusqu_a": 0.55, "defilement": 0.85},
                    {"url": BOUTIQUE + "/collections/pour-les-enseignants",
                     "defilement": 0.7},
                ],
                "legende": "Une classe trois jours avant la rentrée. La progression est déjà écrite 📘",
                "hashtags": ["SparkLearning", "profs", "contractuel", "enseignant", "rentrée2026"],
                "jour": 4,
                "creneau": CRENEAU_CAMPAGNE,
            },
        },
    },
}


# ── Acces ──

def campagne(nom):
    """Campagne par son nom, avec son identifiant a l'interieur."""
    if nom not in CAMPAGNES:
        raise ValueError("campagne inconnue : {} (valeurs : {})".format(
            nom, ", ".join(CAMPAGNES)))
    resultat = dict(CAMPAGNES[nom])
    resultat["id"] = nom
    return resultat


def video(campagne_, nom):
    videos = campagne_["videos"]
    if nom not in videos:
        raise ValueError("vidéo inconnue : {} (valeurs : {})".format(
            nom, ", ".join(videos)))
    resultat = dict(videos[nom])
    resultat["id"] = nom
    return resultat


def videos_dans_l_ordre(campagne_):
    """Les videos par jour puis creneau : l'ordre du calendrier."""
    return sorted(
        (video(campagne_, nom) for nom in campagne_["videos"]),
        key=lambda v: (int(v["jour"]), v["creneau"], v["id"]),
    )


# ── Texte ──

def texte_parle(video_):
    """Tout ce que la voix dit, dans l'ordre."""
    if video_["narrateur"] == "dialogue":
        return " ".join(r["texte"].strip() for r in video_["repliques"])
    return scripts.assembler(video_["sections"])["full_text"]


def poses(video_):
    """Pose de sprite de chaque replique d'un dialogue, dans l'ordre."""
    return [r.get("pose", "neutre") for r in video_.get("repliques", [])]


def legende_tiktok(campagne_, video_):
    """Legende complete publiee sous la video : accroche, pied de
    campagne, hashtags."""
    return livraison.legende_api(
        {"legende": video_["legende"], "hashtags": video_["hashtags"]},
        promo=campagne_["pied"],
    )


def calendrier(campagne_, depart):
    """Une ligne par video : quand elle part, en heure de Paris."""
    lignes = []
    for video_ in videos_dans_l_ordre(campagne_):
        lignes.append({
            "video": video_["id"],
            "titre": video_["titre"],
            "jour": int(video_["jour"]),
            "creneau": video_["creneau"],
            "quand": postiz.quand(depart, video_["jour"], video_["creneau"]),
            "epingler": bool(video_.get("epingler")),
        })
    return sorted(lignes, key=lambda l: l["quand"])


# ── Validation ──

_CRENEAU = re.compile(r"^([01]\d|2[0-3]):[0-5]\d$")


def _contient_le_code(texte, code):
    """Le code est-il prononce ? On compare sans espaces ni casse :
    « STUDENT 2026 » a l'oral est bien « STUDENT2026 »."""
    return code.replace(" ", "").upper() in texte.replace(" ", "").upper()


def valider(campagne_):
    """Tout ce qui rendrait la campagne fausse ou impubliable.

    Une liste vide = rien a reprocher. Chaque reproche nomme la video,
    pour qu'un lot de quatre ne renvoie pas a une lecture complete.
    """
    reproches = []
    code = campagne_.get("code", "")
    # Une campagne peut ne porter AUCUN code promo : profs2026 vend du
    # temps gagne, pas un prix, et le champ `code` n'y sert qu'a remplir
    # la plaque. Le drapeau doit etre pose a la main dans la campagne —
    # un code oublie reste une faute, c'est tout l'interet du controle.
    sans_code = bool(campagne_.get("sans_code"))

    if not code:
        reproches.append("campagne sans code")
    if len(campagne_.get("bio", "")) > BIO_MAX:
        reproches.append("bio trop longue pour TikTok ({} > {})".format(
            len(campagne_["bio"]), BIO_MAX))
    if len(campagne_.get("commentaire", "")) > COMMENTAIRE_MAX:
        reproches.append("commentaire épinglé trop long ({} > {})".format(
            len(campagne_["commentaire"]), COMMENTAIRE_MAX))
    if not (campagne_.get("pied") or "").strip():
        reproches.append("pied de légende vide")
    if not campagne_.get("plaque", {}).get("code"):
        reproches.append("plaque sans code")

    epinglees = 0
    for nom, brut in campagne_.get("videos", {}).items():
        video_ = dict(brut)
        video_["id"] = nom
        prefixe = "vidéo « {} » : ".format(nom)

        narrateur = video_.get("narrateur")
        if narrateur == "dialogue":
            repliques = video_.get("repliques") or []
            if not repliques:
                reproches.append(prefixe + "dialogue sans réplique")
            for rang, r in enumerate(repliques):
                if r.get("locuteur") not in config.VOIX_INTERVIEW:
                    reproches.append(prefixe + "réplique {} : locuteur inconnu".format(rang))
                if r.get("pose", "neutre") not in config.POSES:
                    reproches.append(prefixe + "réplique {} : pose inconnue".format(rang))
                if not (r.get("texte") or "").strip():
                    reproches.append(prefixe + "réplique {} vide".format(rang))
        elif narrateur in config.VOIX_INTERVIEW:
            sections = video_.get("sections") or {}
            for cle in ("hook", "body", "cta"):
                if not (sections.get(cle) or "").strip():
                    reproches.append(prefixe + "section « {} » vide".format(cle))
        else:
            reproches.append(prefixe + "narrateur inconnu : {!r}".format(narrateur))
            continue

        texte = texte_parle(video_)
        fautes = symboles_interdits(texte)
        if fautes:
            reproches.append(prefixe + "texte non prononçable, contient : " + ", ".join(fautes))
        if code and not sans_code and not _contient_le_code(texte, code):
            reproches.append(prefixe + "le code n'est jamais prononcé")

        duree = scripts.duree_estimee(texte)
        if duree > DUREE_MAX_CAMPAGNE:
            reproches.append(prefixe + "trop longue ({} s estimées)".format(duree))
        if duree < DUREE_MIN_CAMPAGNE:
            reproches.append(prefixe + "trop courte ({} s estimées)".format(duree))

        try:
            segments = capture.plan_segments(video_.get("plan") or [], 10.0)
            for segment in segments:
                if not str(segment["url"]).startswith("http"):
                    reproches.append(prefixe + "URL de plan invalide : " + str(segment["url"]))
        except ValueError as erreur:
            reproches.append(prefixe + "plan invalide : {}".format(erreur))

        accroche = (video_.get("legende") or "").strip()
        if not accroche:
            reproches.append(prefixe + "accroche vide")
        elif len(accroche) > ACCROCHE_MAX:
            reproches.append(prefixe + "accroche trop longue ({} > {})".format(
                len(accroche), ACCROCHE_MAX))
        if not video_.get("hashtags"):
            reproches.append(prefixe + "aucun hashtag")
        if len(legende_tiktok(campagne_, video_)) > LEGENDE_MAX:
            reproches.append(prefixe + "légende TikTok trop longue")

        if not isinstance(video_.get("jour"), int) or video_["jour"] < 0:
            reproches.append(prefixe + "jour invalide")
        if not _CRENEAU.match(str(video_.get("creneau", ""))):
            reproches.append(prefixe + "créneau invalide (attendu HH:MM)")
        if video_.get("epingler"):
            epinglees += 1

    if epinglees != 1:
        reproches.append("il faut exactement une vidéo à épingler ({} trouvée(s))".format(
            epinglees))

    return reproches
