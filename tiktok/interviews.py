# -*- coding: utf-8 -*-
"""Les interviews : dialogues et plans de tournage.

Contrairement aux deux autres lignes de production, ces textes ne sont
PAS ecrits par un modele. Ce sont des videos de presentation : elles
racontent pourquoi le site existe et ce que la boutique vend. Une
generation, meme validee, produirait une histoire plausible plutot que
la vraie — et ca s'entend.

Chaque replique porte :
  - `locuteur` : "sparky" (il questionne) ou "lumen" (il repond) ;
  - `pose`     : quel sprite afficher pendant qu'il parle, parmi les
                 moments de config.POSES ("hook" = reflechit,
                 "body" = console, "cta" = felicite, "neutre").

Le plan de tournage donne les bornes en FRACTION de la video, jamais en
secondes : le texte est ecrit avant que la voix off existe.

Regles d'ecriture heritees du pipeline : aucun symbole imprononcable,
pas de LaTeX, pas de decimale anglaise. Les prix sont ecrits en toutes
lettres — edge-tts lit « 9,99 € » de facon irreguliere selon le
contexte, « neuf euros quatre-vingt-dix-neuf » jamais.
"""

import config

SITE = config.SITE_URL.rstrip("/")
BOUTIQUE = "https://boutique.sparklearning.fr"


INTERVIEWS = {

    # ── Pourquoi le site existe ──────────────────────────────────────
    #
    # Le fil : un constat de terrain, un blocage, une decision. La these
    # tombe a la quatrieme replique et tout le reste la sert. La
    # derniere replique — « et ca le reste » — est la charniere avec
    # l'interview boutique, qui repond a « alors pourquoi vendre ? ».
    #
    # Le segment « tout etait payant » ne filme ni ne nomme personne :
    # on reste sur le site. Citer un concurrent serait risque et,
    # surtout, moins fort qu'un propos general.

    "pourquoi": {
        "titre": "Pourquoi Spark Learning existe",
        "domaine": "sparklearning.fr",
        "repliques": [
            {"locuteur": "sparky", "pose": "hook", "texte":
                "Lumen. Tu enseignes. Qu'est-ce qui t'a énervé au point de construire "
                "un site entier ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Mes étudiants voulaient devenir techniciens. Ce qui les ralentissait, "
                "ce n'était pas le geste. C'étaient les sciences. Une conversion d'unités "
                "ratée, une puissance mal calculée, et tout le métier derrière s'arrête."},
            {"locuteur": "sparky", "pose": "hook", "texte":
                "Attends. Les sciences les empêchaient d'être bons dans leur métier ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Exactement. Aucun d'eux ne voulait devenir mathématicien. Ils voulaient "
                "devenir de bons techniciens. Et c'est la science qui les en empêchait."},
            {"locuteur": "sparky", "pose": "hook", "texte":
                "Et il n'existait rien pour les aider ?"},
            {"locuteur": "lumen", "pose": "body", "texte":
                "Si. Tout existait. Et tout était payant. Un élève qui bloque un dimanche "
                "soir tombe sur un mur. C'est ça que je n'ai pas supporté."},
            {"locuteur": "sparky", "pose": "neutre", "texte":
                "Alors tu as fait quoi ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Un site gratuit, sans compte obligatoire. Et un contenu qui commence "
                "par l'erreur, pas par la règle. On montre d'abord le piège où tout le "
                "monde tombe, et on explique ensuite."},
            {"locuteur": "sparky", "pose": "hook", "texte":
                "Il y a combien de modules, aujourd'hui ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Deux cent quarante-huit modules. Mathématiques, physique-chimie, "
                "sciences de l'ingénieur. De la sixième au BTS."},
            {"locuteur": "sparky", "pose": "cta", "texte":
                "Et donc c'est gratuit."},
            {"locuteur": "lumen", "pose": "cta", "texte":
                "Et ça le reste. sparklearning.fr."},
        ],
        "plan": [
            {"url": SITE + "/", "jusqu_a": 0.09},
            # Un module BTS FED : c'est le public dont parle Lumen.
            {"url": SITE + "/module/fed-bts-a1-1-thermique-tubes/cours", "jusqu_a": 0.42},
            {"url": SITE + "/module/fed-bts-a1-1-thermique-tubes/exercice", "jusqu_a": 0.62},
            # Puis un module de college : le piege, montre en vrai.
            {"url": SITE + "/module/6e-fractions/cours", "jusqu_a": 0.82},
            {"url": SITE + "/module/6e-fractions/quiz", "jusqu_a": 0.90},
            {"url": SITE + "/subjects"},
        ],
        "legende": (
            "Pourquoi Spark Learning existe — 248 modules de maths, physique-chimie et "
            "sciences de l'ingénieur, de la 6e au BTS. Gratuit, sans compte."
        ),
        "hashtags": ["#SparkLearning", "#soutienscolaire", "#maths", "#BTS", "#gratuit"],
    },

    # ── La boutique ──────────────────────────────────────────────────
    #
    # Le sujet reel de cette video est une question genante : le site
    # est gratuit, alors pourquoi vendre ? Si Sparky ne la pose pas, le
    # spectateur se la pose quand meme — et il part. Qu'elle tombe a la
    # troisieme seconde est ce qui rend la reponse credible.
    #
    # Le pivot n'est pas le prix, c'est l'edition professeur : c'est ce
    # que personne d'autre ne propose, et le seul segment qui achete
    # sans hesiter.

    "boutique": {
        "titre": "La boutique Spark Learning",
        "domaine": "boutique.sparklearning.fr",
        "repliques": [
            {"locuteur": "sparky", "pose": "hook", "texte":
                "Lumen. Le site est entièrement gratuit. Alors pourquoi vous vendez "
                "des manuels ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Parce que ce n'est pas le même besoin. Le site sert à débloquer une "
                "notion, un soir, à vingt-deux heures. Un manuel sert à construire "
                "une année entière."},
            {"locuteur": "sparky", "pose": "hook", "texte":
                "Et il y a quoi dedans ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Dix-neuf titres. Mathématiques et physique-chimie, de la sixième au BTS. "
                "Chaque chapitre commence par le piège, comme sur le site. C'est le même "
                "contenu, mis en page pour être lu du début à la fin."},
            {"locuteur": "sparky", "pose": "hook", "texte":
                "Attends. Il y a deux versions de chaque ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Une édition élève, et une édition professeur. La seconde donne de quoi "
                "construire l'année : la progression, les corrigés, chapitre par chapitre. "
                "C'est celle que mes collègues me réclamaient."},
            {"locuteur": "sparky", "pose": "neutre", "texte":
                "Et ça coûte combien ?"},
            {"locuteur": "lumen", "pose": "neutre", "texte":
                "Neuf euros quatre-vingt-dix-neuf pour un niveau. Vingt-quatre euros "
                "quatre-vingt-dix-neuf pour un cycle complet, ce qui revient moins cher "
                "que les niveaux achetés séparément."},
            {"locuteur": "sparky", "pose": "cta", "texte":
                "Et le site, lui, reste gratuit."},
            {"locuteur": "lumen", "pose": "cta", "texte":
                "Toujours. C'était le point de départ, et ça ne changera pas. "
                "Les manuels, c'est sur boutique.sparklearning.fr."},
        ],
        "plan": [
            {"url": BOUTIQUE + "/", "jusqu_a": 0.08},
            {"url": BOUTIQUE + "/products/mathematiques-college-6e-3e-edition-eleve",
             "jusqu_a": 0.27},
            # Les dix-neuf titres, vus d'un coup.
            {"url": BOUTIQUE + "/collections/all", "jusqu_a": 0.46},
            # Le pivot : l'edition professeur.
            {"url": BOUTIQUE + "/products/mathematiques-college-6e-3e-edition-professeur",
             "jusqu_a": 0.70},
            # Le prix d'entree, sur la page qui l'affiche.
            {"url": BOUTIQUE + "/products/mathematiques-sixieme-edition-eleve",
             "jusqu_a": 0.88},
            {"url": BOUTIQUE + "/"},
        ],
        "legende": (
            "Le site reste gratuit — les manuels, eux, servent à construire une année. "
            "19 titres, éditions élève et professeur, de la 6e au BTS."
        ),
        "hashtags": ["#SparkLearning", "#manuel", "#profs", "#maths", "#physiquechimie"],
    },
}


def sujet(nom):
    """Interview par son nom, avec un message utile si le nom est faux."""
    if nom not in INTERVIEWS:
        raise ValueError("interview inconnue : {} (valeurs : {})".format(
            nom, ", ".join(INTERVIEWS)))
    return INTERVIEWS[nom]


def poses(interview):
    """Pose a afficher pour chaque replique, dans l'ordre."""
    return [r.get("pose", "neutre") for r in interview["repliques"]]
