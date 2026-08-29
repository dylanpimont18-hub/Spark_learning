# -*- coding: utf-8 -*-
"""Reglages du pipeline TikTok.

Tout ce qui se regle sans toucher au code est ici : identite de marque,
personas (voix + sprites par tranche de niveau), formats video, modele
IA. Les secrets viennent de .env et ne sont jamais ecrits ici.
"""

import os
from pathlib import Path

from dotenv import load_dotenv

RACINE = Path(__file__).resolve().parent          # tiktok/
PROJET = RACINE.parent                            # racine du depot Spark Learning

load_dotenv(RACINE / ".env")

# ── Mammouth AI (API compatible OpenAI) ──

MAMMOUTH_BASE_URL = os.getenv("MAMMOUTH_BASE_URL", "https://api.mammouth.ai/v1")
MAMMOUTH_API_KEY = os.getenv("MAMMOUTH_API_KEY", "")
# « mammouth-recommended » est l'alias maison vers le meilleur rapport
# qualite/prix du moment : c'est le defaut le plus sur face a un
# catalogue de modeles qui bouge.
MAMMOUTH_MODELE = os.getenv("MAMMOUTH_MODELE", "mammouth-recommended")

# ── Identite ──

MASCOTTE = os.getenv("MASCOTTE", "Sparky")
SITE = "sparklearning.fr"
SITE_URL = os.getenv("SITE_URL", "https://sparklearning.fr")

# Charte Spark Learning (css/styles.css). Ne jamais hardcoder ailleurs.
PRIMARY = "#2C3E50"
SECONDARY = "#48C9B0"
ACCENT = "#F4D03F"
TEXTE_CLAIR = "#FFFFFF"

# ── Format video ──

LARGEUR, HAUTEUR = 1080, 1920
FPS = 30
FPS_CAPTURE = 12          # le fond bouge lentement : inutile de le filmer a la cadence de sortie

# ── Cadre du telephone ──
#
# Ces valeurs sont partagees par la capture et le montage : le site est
# capture EXACTEMENT a la taille de la fenetre du mockup, ce qui evite
# de redimensionner chaque trame au montage (le poste de cout numero un
# quand la capture est plus grande que sa destination).

TEL_LARGEUR = 620
TEL_HAUTEUR = int(TEL_LARGEUR * 16 / 9)     # 1102
TEL_X = (LARGEUR - TEL_LARGEUR) // 2
TEL_Y = 150
TEL_BORDURE = 16
TEL_RAYON = 46

# Fenetre logique du navigateur : un vrai viewport mobile, pour que le
# site serve sa mise en page telephone.
CAPTURE_VIEWPORT = (540, 960)
ECHELLE_CAPTURE = TEL_LARGEUR / CAPTURE_VIEWPORT[0]   # ~1,148

# ── Personas : la voix et l'age de Sparky suivent le public ──
#
# « formants » est le seul curseur d'age. Le rajeunissement ne passe pas
# par un simple pitch : on reinterprete l'echantillonnage plus vite (la
# hauteur ET les formants montent, comme dans une cavite vocale plus
# petite) puis on retablit le tempo. La duree finale est conservee, donc
# les timings mot a mot d'edge-tts restent valides quel que soit le
# facteur. 1,00 = voix telle quelle, 1,12 = rajeunie, 1,18 = nettement
# enfantine, 1,25 = chipmunk.
#
# Choix du 2026-08-26 apres ecoute comparee : la voix NON TRAITEE, jugee
# plus credible que toutes les versions rajeunies. Les variantes restent
# disponibles via --persona.

PERSONAS = {
    "naturelle": {
        "voix": "fr-FR-EloiseNeural",
        "debit": "+12%",
        "pitch": "+0Hz",
        "formants": 1.0,      # aucun traitement : c'est le defaut retenu
        "sprites": "jeune",
    },
    "rajeunie": {
        "voix": "fr-FR-EloiseNeural",
        "debit": "+12%",
        "pitch": "+0Hz",
        "formants": 1.12,
        "sprites": "jeune",
    },
    "enfantine": {
        "voix": "fr-FR-EloiseNeural",
        "debit": "+12%",
        "pitch": "+0Hz",
        "formants": 1.18,
        "sprites": "jeune",
    },
    "adulte": {
        "voix": "fr-FR-RemyMultilingualNeural",
        "debit": "+10%",
        "pitch": "+0Hz",
        "formants": 1.0,
        "sprites": "adulte",
    },
}

# Quelle persona pour quel public.
PERSONA_PAR_TRANCHE = {
    "college": "naturelle",
    "lycee": "naturelle",
    "bts": "adulte",          # inutilise tant que le BTS est hors perimetre
}

# ── Perimetre editorial ──
#
# Decision du 2026-08-26 : on ne fait pas de videos sur le BTS. Les 99
# modules BTS du catalogue sont donc exclus du tirage ET de la recherche
# par libelle, pour qu'un --aleatoire ne tombe pas dessus par accident.
# Y revenir = ajouter "bts" ici, rien d'autre (la persona adulte et les
# sprites correspondants sont deja prevus).

TRANCHES_ACTIVES = ("college", "lycee")


def persona_pour(tranche, forcee=None):
    """Persona a utiliser pour un module donne."""
    if forcee:
        if forcee not in PERSONAS:
            raise ValueError("persona inconnue : {} (valeurs : {})".format(
                forcee, ", ".join(PERSONAS)))
        return PERSONAS[forcee]
    # Repli sur une persona qui existe : un nouveau dossier dans
    # js/data/ ne doit pas faire planter le pipeline sur un KeyError.
    return PERSONAS[PERSONA_PAR_TRANCHE.get(tranche, "naturelle")]


# ── Sprites de la mascotte ──
#
# Le jeu « jeune » pointe sur les visuels deja publies sur le site.
# Le jeu « adulte » n'existe pas encore : deposer les PNG dans
# tiktok/assets/sparky/adulte/ suffira, sans toucher au code.

SPRITES_SITE = PROJET / "images" / "mascotte"
SPRITES_LOCAUX = RACINE / "assets" / "sparky"

# Une pose par moment du script : Sparky reagit a ce qu'il raconte.
POSES = {
    "hook": "sparky-reflechit.png",
    "body": "sparky-console.png",
    "cta": "sparky-felicite.png",
    "neutre": "sparky.png",
}


def sprite(moment, jeu="jeune"):
    """Chemin du visuel de la mascotte, avec repli sur le jeu du site."""
    nom = POSES.get(moment, POSES["neutre"])
    local = SPRITES_LOCAUX / jeu / nom
    if local.exists():
        return local
    officiel = SPRITES_SITE / nom
    if officiel.exists():
        return officiel
    return SPRITES_SITE / POSES["neutre"]


# ── Interviews a deux voix (interview.py) ──
#
# Troisieme ligne de production, independante des deux autres : des
# videos de presentation ou Sparky interroge Lumen. Format paysage, pour
# la page d'accueil, YouTube et la fiche produit de la boutique.
#
# Chaque mascotte a sa voix ET son jeu de sprites : c'est ce couple qui
# rend le dialogue lisible sans lip-sync. Le spectateur reconnait qui
# parle a la voix, a la couleur du sous-titre et a la mascotte qui
# bouge — trois signaux redondants, aucun ne demande d'animation.

VOIX_INTERVIEW = {
    "sparky": "naturelle",     # Eloise : la question, l'energie
    "lumen": "adulte",         # Remy : la reponse, le fond
}

JEU_SPRITES = {
    "sparky": "jeune",
    "lumen": "adulte",
}

# Couleur du mot en cours dans le sous-titre, par locuteur. Deux
# variables de la charte, jamais de valeur en dur.
COULEUR_LOCUTEUR = {
    "sparky": ACCENT,          # jaune
    "lumen": SECONDARY,        # aqua
}

NOM_LOCUTEUR = {
    "sparky": "Sparky",
    "lumen": "Lumen",
}


def persona_locuteur(locuteur):
    """Voix d'une mascotte dans une interview."""
    if locuteur not in VOIX_INTERVIEW:
        raise ValueError("locuteur inconnu : {} (valeurs : {})".format(
            locuteur, ", ".join(VOIX_INTERVIEW)))
    return PERSONAS[VOIX_INTERVIEW[locuteur]]

# Silence entre deux repliques. En dessous de ~0,2 s les voix se
# marchent dessus et l'echange perd sa lisibilite ; au-dela de ~0,4 s
# l'interview traine.
SILENCE_REPLIQUE = 0.25

# ── Geometrie du format paysage ──

INTERVIEW_LARGEUR, INTERVIEW_HAUTEUR = 1920, 1080

# La capture est faite a la taille EXACTE de la fenetre affichee : comme
# en vertical, c'est ce qui evite de redimensionner chaque trame au
# montage. 1350 px de large en logique = une vraie mise en page bureau,
# pas la version mobile.
#
# La largeur de l'ecran est bornee par les mascottes : elles occupent
# environ 350 px dans chaque coin bas, l'ecran ne doit pas les toucher.
INTERVIEW_VIEWPORT = (1350, 760)
ECRAN_LARGEUR = 1080
ECRAN_HAUTEUR = 608
ECHELLE_ECRAN = ECRAN_LARGEUR / INTERVIEW_VIEWPORT[0]     # 0,8

ECRAN_X = (INTERVIEW_LARGEUR - ECRAN_LARGEUR) // 2
# Laisse la place a la barre de titre du cadre navigateur, qui se pose
# AU-DESSUS de l'ecran : le haut du cadre tombe donc a 24 px du bord.
ECRAN_Y = 76
NAVIGATEUR_BORDURE = 14
NAVIGATEUR_BARRE = 38          # hauteur de la barre de titre du cadre
NAVIGATEUR_RAYON = 18

# Les mascottes se posent dans les deux coins bas, de part et d'autre
# de la bande de sous-titres. Ces trois valeurs sont liees : elles sont
# choisies pour que rien ne se chevauche en 1920x1080.
MASCOTTE_HAUTEUR = 500
MASCOTTE_MARGE = 46

# Le bandeau de sous-titres passe SOUS le cadre du navigateur et ENTRE
# les deux mascottes : ces trois valeurs sont liees, les changer isolement
# fait se chevaucher les couches.
INTERVIEW_SOUS_TITRE_LARGEUR = 1000
INTERVIEW_SOUS_TITRE_Y = 730
INTERVIEW_TAILLE_SOUS_TITRE = 64

# ── Typographie des sous-titres ──

POLICE_LOCALE = RACINE / "assets" / "fonts" / "Poppins-ExtraBold.ttf"
POLICE_SYSTEME = Path(r"C:\Windows\Fonts\ariblk.ttf")   # Arial Black, toujours present


def police():
    """Poppins (charte du site) si disponible, sinon Arial Black."""
    if POLICE_LOCALE.exists():
        return str(POLICE_LOCALE)
    return str(POLICE_SYSTEME)


TAILLE_SOUS_TITRE = 82
CONTOUR_SOUS_TITRE = 8

# ── Chemins de travail ──

SORTIE = RACINE / "output"
TRAVAIL = RACINE / ".travail"      # frames de capture, audio intermediaire
CATALOGUE = RACINE / "catalogue.json"

# Ce qui a deja ete fabrique. Fichier lisible et corrigeable a la main :
# retirer une ligne force la regeneration de l'angle correspondant.
MEMOIRE = RACINE / "production.json"

# ── Depot sur Google Drive ──
#
# La publication se fait a la main depuis le telephone : on depose donc
# les videos dans le dossier synchronise par Google Drive pour
# ordinateur, ce qui les rend disponibles sur mobile sans API, sans
# credential et sans jeton a renouveler.
#
# Vide = detection automatique des emplacements usuels (G:\Mon Drive...).
# Si rien n'est trouve, le rendu se poursuit et le depot est simplement
# signale comme non effectue : pas question de perdre une video parce
# que Drive n'est pas installe.

# ── Publication (Upload-Post) ──
#
# Upload-Post a passe l'audit TikTok : c'est ce qu'on loue chez eux.
# Leur API accepte un scheduled_date, donc les videos partent en un seul
# envoi avec leurs horaires — pas d'orchestrateur a maintenir.

UPLOADPOST_API_KEY = os.getenv("UPLOADPOST_API_KEY", "")
UPLOADPOST_USER = os.getenv("UPLOADPOST_USER", "")

# Declaration de contenu genere par IA. Voix de synthese + script ecrit
# par un modele : TikTok sanctionne l'omission, le cout est un bandeau.
DECLARER_IA = os.getenv("DECLARER_IA", "1") not in ("0", "false", "False")

# Reseaux vises. Le format 9:16 sous-titre convient tel quel a TikTok,
# YouTube Shorts et Instagram Reels : un seul appel les sert tous, donc
# ajouter un reseau ne coute ni rendu ni argent supplementaire.
PLATEFORMES = tuple(
    p.strip() for p in os.getenv("PLATEFORMES", "tiktok").split(",") if p.strip()
)

DOSSIER_DRIVE = os.getenv("DOSSIER_DRIVE", "")
DOSSIER_DRIVE_CIBLE = os.getenv("DOSSIER_DRIVE_CIBLE", "TikTok Spark Learning")

# ── Ligne editoriale « maths x vie reelle » (culture.py) ──
#
# Seconde ligne, independante de celle des modules : une video par jour
# qui part d'un sujet d'ado et remonte vers une notion. Elle a sa propre
# memoire, sa propre sortie et son propre dossier Drive, pour qu'aucune
# des deux ne puisse marcher sur l'autre.

DOSSIER_DRIVE_CIBLE_CULTURE = os.getenv("DOSSIER_DRIVE_CIBLE_CULTURE",
                                        "TikTok Spark Learning - Vie reelle")

SORTIE_CULTURE = RACINE / "output-culture"

# Les interviews ont leur propre sortie : ce sont des videos de
# presentation, pas des publications quotidiennes. Elles ne passent ni
# par la memoire de production ni par le depot Drive.
SORTIE_INTERVIEW = RACINE / "output-interview"

# Sujets deja sortis. Comme production.json : lisible, corrigeable a la
# main, et sa perte ne coute que quelques doublons.
MEMOIRE_SUJETS = RACINE / "sujets.json"

# Score minimal pour rattacher un module a une video de cette ligne.
# Le module ne sert qu'au lien cliquable de la description YouTube :
# ne rien rattacher est un cas normal, pas un echec.
#
# catalogue._score n'a pas d'echelle theorique, il fallait la relever.
# Mesure du 2026-08-27 sur les 149 modules du perimetre, avec douze
# sujets couvrant les huit familles (tiktok/.travail/calibrer_seuil.py) :
#
#   requete = sujet + notion .......... 0,00 sur les DOUZE sujets
#   requete = notion, bon module ...... 9,34 a 9,78  (1 mot)
#                                       19,56 a 19,66 (2 mots)
#                                       1000 si la notion EST un id
#   requete = notion hors catalogue ... 0,00 (solfege, histoire romaine,
#                                       grammaire allemande, dressage...)
#   plancher theorique a 1 mot ........ 9,16 (physique-1re-champ-gravitationnel,
#                                       le plus long id+titre du catalogue)
#
# Deux enseignements. D'abord la requete est la NOTION seule : _score
# exige que plus de la moitie des mots significatifs tombent dans le
# titre du module, ce qu'un sujet de quatre a six mots ne peut jamais
# atteindre — scorer « sujet + notion » ne rattacherait donc jamais
# rien. Ensuite le tri hors sujet est deja fait par cette regle des 50 %,
# qui rend 0 : le seuil n'a qu'a separer « quelque chose » de « rien ».
# 9,0 passe sous le plancher des vrais rattachements sans laisser
# remonter un seul zero.
SEUIL_RATTACHEMENT = float(os.getenv("SEUIL_RATTACHEMENT", "9.0"))
