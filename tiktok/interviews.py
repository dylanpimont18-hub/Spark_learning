# -*- coding: utf-8 -*-
"""Les interviews : dialogues et plans de tournage.

Contrairement aux deux autres lignes de production, ces textes ne sont
PAS ecrits par un modele. Ce sont des videos de presentation : elles
racontent pourquoi le site existe. Une
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


INTERVIEWS = {

    # ── Pourquoi le site existe ──────────────────────────────────────
    #
    # Le fil : un constat de terrain, un blocage, une decision. La these
    # tombe a la quatrieme replique et tout le reste la sert. La
    # derniere replique est « et ca le reste ».
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
