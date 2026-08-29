# -*- coding: utf-8 -*-
"""Assemblage de l'interview paysage 1920x1080.

Composition, du fond vers l'avant :
  1. le degrade de la charte et ses halos, avec la pastille de marque ;
  2. la capture du site, encastree dans un cadre de navigateur ;
  3. les plaques de nom facon plateau de television ;
  4. les deux mascottes, posees dans les coins bas ;
  5. les sous-titres mot a mot, colores par locuteur.

Le format vertical (montage.py) montre UNE mascotte qui commente un
telephone. Ici il y en a deux, et elles se parlent : toute la mise en
scene sert a rendre lisible qui parle, sans lip-sync. Trois signaux
redondants s'en chargent — la voix, la couleur du sous-titre, et la
seule mascotte qui bouge. Perdre un signal ne casse rien.

Les briques communes (degrade, halo, sprite, enveloppe, police) sont
importees de montage.py plutot que dupliquees : ce sont les memes
couleurs de charte et le meme rendu de texte.
"""

import math

import numpy as np
from moviepy import AudioFileClip, CompositeVideoClip, ImageClip, ImageSequenceClip
from PIL import Image, ImageDraw

import config
from pipeline.dialogue import grouper_repliques
from pipeline.montage import _degrade, _enveloppe, _halo, _hex, _lignes, _police, _sprite

LARGEUR = config.INTERVIEW_LARGEUR
HAUTEUR = config.INTERVIEW_HAUTEUR

ECRAN_X, ECRAN_Y = config.ECRAN_X, config.ECRAN_Y
ECRAN_LARGEUR, ECRAN_HAUTEUR = config.ECRAN_LARGEUR, config.ECRAN_HAUTEUR
BORDURE = config.NAVIGATEUR_BORDURE
BARRE = config.NAVIGATEUR_BARRE
RAYON = config.NAVIGATEUR_RAYON

SOUS_TITRE_LARGEUR = config.INTERVIEW_SOUS_TITRE_LARGEUR
SOUS_TITRE_Y = config.INTERVIEW_SOUS_TITRE_Y
TAILLE_SOUS_TITRE = config.INTERVIEW_TAILLE_SOUS_TITRE

MASCOTTE_HAUTEUR = config.MASCOTTE_HAUTEUR
MASCOTTE_MARGE = config.MASCOTTE_MARGE
MASCOTTE_Y = HAUTEUR - MASCOTTE_HAUTEUR - MASCOTTE_MARGE

PLAQUE_HAUTEUR = 52
PLAQUE_ECART = 14          # entre la plaque et le sommet de la mascotte


# ── Cadre du navigateur ──

def _cadre_navigateur(domaine):
    """Coque de navigateur posee PAR-DESSUS la capture.

    Meme principe que le cadre de telephone du format vertical : une
    plaque opaque percee d'une fenetre fabrique les coins arrondis sans
    retoucher les centaines de trames une par une.
    """
    largeur = ECRAN_LARGEUR + BORDURE * 2
    hauteur = BORDURE * 2 + BARRE + ECRAN_HAUTEUR
    image = Image.new("RGBA", (largeur, hauteur), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)

    dessin.rounded_rectangle([0, 0, largeur - 1, hauteur - 1],
                             radius=RAYON + BORDURE, fill=(18, 24, 32, 255))
    # La fenetre : on efface le rectangle interieur.
    dessin.rounded_rectangle(
        [BORDURE, BORDURE + BARRE,
         BORDURE + ECRAN_LARGEUR - 1, BORDURE + BARRE + ECRAN_HAUTEUR - 1],
        radius=8, fill=(0, 0, 0, 0),
    )

    # Les trois pastilles de fenetre, puis la barre d'adresse.
    centre = BORDURE + BARRE // 2
    for rang, couleur in enumerate(((236, 106, 94), (240, 190, 90), (120, 205, 130))):
        x = BORDURE + 18 + rang * 22
        dessin.ellipse([x, centre - 6, x + 12, centre + 6], fill=couleur + (255,))

    police = _police(22)
    largeur_pilule = int(dessin.textlength(domaine, font=police)) + 46
    x = (largeur - largeur_pilule) // 2
    dessin.rounded_rectangle([x, centre - 13, x + largeur_pilule, centre + 13],
                             radius=13, fill=(38, 48, 60, 255))
    dessin.text((x + 23, centre - 12), domaine, font=police, fill=(198, 212, 226, 255))

    return np.array(image)


# ── Plaques de nom ──

def _plaque_nom(locuteur, actif):
    """Etiquette facon plateau de television.

    Elle porte le nom en permanence : le spectateur qui arrive en cours
    de video sait immediatement qui est qui. Seule la mise en avant
    change quand la parole passe.
    """
    texte = config.NOM_LOCUTEUR[locuteur]
    police = _police(30)
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    largeur = int(mesure.textlength(texte, font=police)) + 56

    image = Image.new("RGBA", (largeur, PLAQUE_HAUTEUR), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)

    couleur = _hex(config.COULEUR_LOCUTEUR[locuteur])
    if actif:
        fond, encre = couleur + (240,), (16, 22, 30, 255)
    else:
        fond, encre = (24, 32, 42, 180), couleur + (150,)

    dessin.rounded_rectangle([0, 0, largeur - 1, PLAQUE_HAUTEUR - 1],
                             radius=PLAQUE_HAUTEUR // 2, fill=fond)
    dessin.text((28, PLAQUE_HAUTEUR // 2 - 20), texte, font=police, fill=encre)
    return np.array(image)


# ── Sous-titres ──

# Largeur reellement disponible pour le texte : la bande moins le
# contour, qui deborde de chaque cote de chaque glyphe.
SOUS_TITRE_UTILE = SOUS_TITRE_LARGEUR - config.CONTOUR_SOUS_TITRE * 4

# Un pave illisible est pire qu'un pave qui deborde un peu : sous cette
# taille on rend la main plutot que de continuer a reduire.
TAILLE_SOUS_TITRE_MINI = 44


def taille_ajustee(mots, taille=None):
    """Plus grande taille a laquelle le pave tient dans la bande.

    Le retour a la ligne ne suffit pas toujours : « boutique.spark
    learning.fr » est un seul mot de 1009 px pour une bande de 968. On
    ne peut ni le couper ni le laisser sortir du cadre, donc on reduit
    ce pave-la — et lui seul, pour que le reste du sous-titrage garde sa
    taille nominale.
    """
    taille = taille or TAILLE_SOUS_TITRE
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))

    while True:
        police = _police(taille)
        lignes = _lignes(mots, police, SOUS_TITRE_UTILE, rendu=str.upper)
        large = max(
            (mesure.textlength(" ".join(m["texte"].upper() for m in ligne), font=police)
             for ligne in lignes),
            default=0,
        )
        if large <= SOUS_TITRE_UTILE or taille <= TAILLE_SOUS_TITRE_MINI:
            return taille, lignes
        taille = max(TAILLE_SOUS_TITRE_MINI, taille - 2)


def _image_sous_titre(groupe, index_actif):
    """Rend un pave, le mot en cours colore a la couleur du locuteur.

    Le pave ne contient jamais deux locuteurs : grouper_repliques() a
    deja coupe au changement de voix.
    """
    contour = config.CONTOUR_SOUS_TITRE
    accent = _hex(config.COULEUR_LOCUTEUR[groupe["locuteur"]]) + (255,)

    # La taille et le decoupage sont resolus ensemble : un pave qui ne
    # tient pas est reduit jusqu'a tenir.
    taille, lignes = taille_ajustee(groupe["mots"])
    police = _police(taille)
    hauteur_ligne = int(taille * 1.28)
    image = Image.new("RGBA",
                      (SOUS_TITRE_LARGEUR, hauteur_ligne * len(lignes) + contour * 2),
                      (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)

    rang = 0
    for numero, ligne in enumerate(lignes):
        texte = " ".join(m["texte"].upper() for m in ligne)
        x = (SOUS_TITRE_LARGEUR - dessin.textlength(texte, font=police)) / 2
        y = contour + numero * hauteur_ligne
        for mot in ligne:
            rendu = mot["texte"].upper()
            dessin.text((x, y), rendu, font=police,
                        fill=accent if rang == index_actif else (255, 255, 255, 255),
                        stroke_width=contour, stroke_fill=(12, 16, 22, 235))
            x += dessin.textlength(rendu + " ", font=police)
            rang += 1

    return np.array(image)


def _clips_sous_titres(mots, duree):
    """Un clip par mot : le pave reste, seule la couleur se deplace."""
    clips = []
    for groupe in grouper_repliques(mots):
        for i, mot in enumerate(groupe["mots"]):
            debut = mot["debut"]
            suivant = groupe["mots"][i + 1]["debut"] if i + 1 < len(groupe["mots"]) else groupe["fin"]
            fin = min(max(suivant, debut + 0.08), duree)
            if fin <= debut:
                continue
            clips.append(
                ImageClip(_image_sous_titre(groupe, i), transparent=True)
                .with_start(debut)
                .with_duration(fin - debut)
                .with_position(((LARGEUR - SOUS_TITRE_LARGEUR) // 2, SOUS_TITRE_Y))
            )
    return clips


# ── Mascottes ──

def _estompe(image):
    """Version en retrait de la mascotte qui ecoute.

    Sans lip-sync, c'est le seul moyen de designer celui qui parle. On
    assombrit sans effacer : l'autre reste present a l'image, comme sur
    un plateau ou les deux invites sont dans le champ.
    """
    sombre = image.astype(np.float32)
    sombre[..., :3] *= 0.55
    sombre[..., 3] *= 0.85
    return sombre.astype(np.uint8)


def _clips_mascottes(repliques, enveloppe, duree, poses, pas=0.04):
    """Les deux mascottes, sur toute la duree.

    Une paire de clips par replique : celui qui parle rebondit sur
    l'energie de sa voix, celui qui ecoute reste immobile et en retrait.
    """
    clips = []

    for rang, replique in enumerate(repliques):
        debut = replique["debut"]
        # La derniere replique tient jusqu'au bout : le carton de fin ne
        # doit pas se retrouver sans personne a l'image.
        fin = duree if rang == len(repliques) - 1 else repliques[rang + 1]["debut"]
        if fin - debut < 0.05:
            continue

        for locuteur in ("sparky", "lumen"):
            actif = locuteur == replique["locuteur"]
            moment = poses[rang] if actif else "neutre"
            image = _sprite(config.sprite(moment, config.JEU_SPRITES[locuteur]),
                            MASCOTTE_HAUTEUR)
            largeur = image.shape[1]
            base_x = MASCOTTE_MARGE if locuteur == "sparky" else LARGEUR - largeur - MASCOTTE_MARGE

            if actif:
                def position(t, _debut=debut, _x=base_x):
                    index = min(len(enveloppe) - 1, int((_debut + t) / pas))
                    energie = enveloppe[index] if len(enveloppe) else 0.0
                    return (_x + 4 * math.sin((_debut + t) * 6.0), MASCOTTE_Y - 22 * energie)
                clip = ImageClip(image, transparent=True).with_position(position)
            else:
                clip = ImageClip(_estompe(image), transparent=True).with_position(
                    (base_x, MASCOTTE_Y + 10))

            clips.append(clip.with_start(debut).with_duration(fin - debut))

        # Les plaques suivent la parole, au meme rythme que les poses.
        for locuteur in ("sparky", "lumen"):
            plaque = _plaque_nom(locuteur, actif=locuteur == replique["locuteur"])
            x = (MASCOTTE_MARGE + 10 if locuteur == "sparky"
                 else LARGEUR - plaque.shape[1] - MASCOTTE_MARGE - 10)
            clips.append(
                ImageClip(plaque, transparent=True)
                .with_start(debut)
                .with_duration(fin - debut)
                .with_position((x, MASCOTTE_Y - PLAQUE_HAUTEUR - PLAQUE_ECART))
            )

    return clips


# ── Fond ──

def _pastille_marque(texte):
    police = _police(32)
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    largeur = int(mesure.textlength(texte, font=police)) + 56
    hauteur = 60

    image = Image.new("RGBA", (largeur, hauteur), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)
    dessin.rounded_rectangle([0, 0, largeur - 1, hauteur - 1], radius=hauteur // 2,
                             fill=_hex(config.SECONDARY) + (235,))
    dessin.text((28, hauteur // 2 - 21), texte, font=police, fill=(255, 255, 255, 255))
    return np.array(image)


def _fond_complet():
    """Fond aplati en une seule image opaque.

    Degrade, halos et pastille ne bougent pas d'une trame a l'autre :
    les composer une fois ici evite a MoviePy de melanger trois couches
    transparentes plein cadre a chaque image. C'est le gros du temps de
    montage.
    """
    degrade = Image.fromarray(_degrade()).resize((LARGEUR, HAUTEUR), Image.BILINEAR)
    fond = degrade.convert("RGBA")

    for couleur, rayon, opacite, position in (
        (config.SECONDARY, 520, 0.28, (-180, 620)),
        (config.ACCENT, 420, 0.18, (1480, -150)),
    ):
        halo = Image.fromarray(_halo(couleur, rayon, opacite))
        fond.alpha_composite(halo,
                             dest=(max(0, position[0]), max(0, position[1])),
                             source=(max(0, -position[0]), max(0, -position[1])))

    # La pastille porte le NOM, pas le domaine : celui-ci est deja dans
    # la barre d'adresse du cadre, juste a cote. Le repeter gaspillerait
    # le seul endroit du cadre ou la marque peut s'ecrire en toutes
    # lettres.
    pastille = Image.fromarray(_pastille_marque("Spark Learning"))
    fond.alpha_composite(pastille, dest=(MASCOTTE_MARGE, 40))

    return np.array(fond.convert("RGB"))


# ── Assemblage ──

def monter(trames, fps_capture, audio, mots, repliques, destination,
           domaine=None, poses=None):
    """Compose et exporte l'interview."""
    domaine = domaine or config.SITE
    poses = poses or ["neutre"] * len(repliques)

    audio_clip = AudioFileClip(str(audio))
    duree = float(audio_clip.duration)

    fond = ImageClip(_fond_complet()).with_duration(duree)

    site = ImageSequenceClip(trames, fps=fps_capture)
    if site.size != [ECRAN_LARGEUR, ECRAN_HAUTEUR]:
        # Filet de securite : une capture faite a une autre echelle
        # reste utilisable, au prix d'un redimensionnement par trame.
        site = site.resized(new_size=(ECRAN_LARGEUR, ECRAN_HAUTEUR))
    site = site.with_duration(duree).with_position((ECRAN_X, ECRAN_Y))

    cadre = (ImageClip(_cadre_navigateur(domaine), transparent=True)
             .with_duration(duree)
             .with_position((ECRAN_X - BORDURE, ECRAN_Y - BORDURE - BARRE)))

    enveloppe = _enveloppe(audio, duree)
    couches = [fond, site, cadre]
    couches += _clips_mascottes(repliques, enveloppe, duree, poses)
    couches += _clips_sous_titres(mots, duree)

    video = (CompositeVideoClip(couches, size=(LARGEUR, HAUTEUR))
             .with_duration(duree)
             .with_audio(audio_clip))

    destination.parent.mkdir(parents=True, exist_ok=True)
    video.write_videofile(
        str(destination),
        fps=config.FPS,
        codec="libx264",
        audio_codec="aac",
        preset="veryfast",     # l'encodage n'est pas le goulot : la composition l'est
        threads=8,
        logger=None,
    )
    video.close()
    audio_clip.close()
    return destination
