# -*- coding: utf-8 -*-
"""Assemblage de la video verticale 1080x1920.

Composition, du fond vers l'avant :
  1. un degrade aux couleurs de la charte, anime par deux halos lents ;
  2. la capture du site, encastree dans un cadre de telephone ;
  3. les sous-titres mot a mot, sous le telephone ;
  4. la mascotte, en bas a droite, qui rebondit sur la voix.

Tout est genere localement : ni police a telecharger a l'execution, ni
appel reseau, ni GPU.
"""

import math

import numpy as np
from moviepy import AudioFileClip, CompositeVideoClip, ImageClip, ImageSequenceClip
from PIL import Image, ImageDraw, ImageFont

import config
from pipeline.soustitres import grouper

# ── Geometrie du cadre ──
#
# Partagee avec la capture (config) : le site est filme exactement a la
# taille de la fenetre, donc aucune trame n'est redimensionnee ici.

TEL_LARGEUR = config.TEL_LARGEUR
TEL_HAUTEUR = config.TEL_HAUTEUR
TEL_X = config.TEL_X
TEL_Y = config.TEL_Y
BORDURE = config.TEL_BORDURE
RAYON = config.TEL_RAYON

SOUS_TITRE_Y = 1360
SOUS_TITRE_LARGEUR = 940

SPARKY_HAUTEUR = 380
SPARKY_MARGE = 40


def _hex(couleur):
    couleur = couleur.lstrip("#")
    return tuple(int(couleur[i:i + 2], 16) for i in (0, 2, 4))


# ── Fond ──

def _degrade():
    """Degrade vertical de la charte, du primaire vers un bleu profond."""
    haut = _hex(config.PRIMARY)
    bas = tuple(max(0, c - 22) for c in haut)
    image = Image.new("RGB", (1, config.HAUTEUR))
    dessin = ImageDraw.Draw(image)
    for y in range(config.HAUTEUR):
        k = y / config.HAUTEUR
        dessin.point((0, y), fill=tuple(int(haut[i] + (bas[i] - haut[i]) * k) for i in range(3)))
    return np.array(image.resize((config.LARGEUR, config.HAUTEUR), Image.BILINEAR))


def _halo(couleur, rayon, opacite):
    """Tache lumineuse floue : donne de la profondeur au fond uni."""
    taille = rayon * 2
    image = Image.new("RGBA", (taille, taille), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)
    r, v, b = _hex(couleur)
    for i in range(rayon, 0, -4):
        alpha = int(opacite * (1 - i / rayon) ** 2 * 255)
        dessin.ellipse(
            [rayon - i, rayon - i, rayon + i, rayon + i],
            fill=(r, v, b, alpha),
        )
    return np.array(image)


# ── Cadre du telephone ──

def _cadre_telephone():
    """Coque opaque percee d'une fenetre : posee PAR-DESSUS la capture,
    elle masque ses angles droits et fabrique les coins arrondis sans
    avoir a retoucher les 300 trames une par une."""
    largeur = TEL_LARGEUR + BORDURE * 2
    hauteur = TEL_HAUTEUR + BORDURE * 2
    image = Image.new("RGBA", (largeur, hauteur), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)

    dessin.rounded_rectangle(
        [0, 0, largeur - 1, hauteur - 1],
        radius=RAYON + BORDURE,
        fill=(18, 24, 32, 255),
    )
    # La fenetre : on efface le rectangle interieur.
    dessin.rounded_rectangle(
        [BORDURE, BORDURE, BORDURE + TEL_LARGEUR - 1, BORDURE + TEL_HAUTEUR - 1],
        radius=RAYON,
        fill=(0, 0, 0, 0),
    )
    return np.array(image)


# ── Sous-titres ──

def _police(taille):
    return ImageFont.truetype(config.police(), taille)


def _lignes(mots, police, largeur_max, rendu=None):
    """Repartit les mots d'un pave sur plusieurs lignes.

    `rendu` transforme le texte AVANT de le mesurer, et doit etre la
    meme transformation que celle appliquee au dessin. Les sous-titres
    sont dessines en CAPITALES, sensiblement plus larges que les
    minuscules dans une graisse ExtraBold : mesurer la minuscule fait
    deborder le pave hors du cadre.
    """
    rendu = rendu or (lambda texte: texte)
    lignes, courante = [], []
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    for mot in mots:
        essai = courante + [mot]
        texte = " ".join(rendu(m["texte"]) for m in essai)
        if mesure.textlength(texte, font=police) > largeur_max and courante:
            lignes.append(courante)
            courante = [mot]
        else:
            courante = essai
    if courante:
        lignes.append(courante)
    return lignes


def _image_sous_titre(groupe, index_actif, taille=None):
    """Rend un pave de sous-titres, le mot en cours mis en couleur.

    On dessine mot par mot plutot que d'utiliser un TextClip : c'est le
    seul moyen de colorer un seul mot d'une ligne.
    """
    taille = taille or config.TAILLE_SOUS_TITRE
    police = _police(taille)
    contour = config.CONTOUR_SOUS_TITRE
    mots = groupe["mots"]

    lignes = _lignes(mots, police, SOUS_TITRE_LARGEUR - contour * 4)
    hauteur_ligne = int(taille * 1.28)
    image = Image.new(
        "RGBA",
        (SOUS_TITRE_LARGEUR, hauteur_ligne * len(lignes) + contour * 2),
        (0, 0, 0, 0),
    )
    dessin = ImageDraw.Draw(image)

    rang = 0
    for numero, ligne in enumerate(lignes):
        texte = " ".join(m["texte"].upper() for m in ligne)
        largeur = dessin.textlength(texte, font=police)
        x = (SOUS_TITRE_LARGEUR - largeur) / 2
        y = contour + numero * hauteur_ligne
        for mot in ligne:
            rendu = mot["texte"].upper()
            actif = rang == index_actif
            dessin.text(
                (x, y),
                rendu,
                font=police,
                fill=_hex(config.ACCENT) + (255,) if actif else (255, 255, 255, 255),
                stroke_width=contour,
                stroke_fill=(12, 16, 22, 235),
            )
            x += dessin.textlength(rendu + " ", font=police)
            rang += 1

    return np.array(image)


def _clips_sous_titres(mots, duree):
    """Un clip par mot : le pave reste, seule la couleur se deplace."""
    clips = []
    for groupe in grouper(mots):
        for i, mot in enumerate(groupe["mots"]):
            debut = mot["debut"]
            fin = groupe["mots"][i + 1]["debut"] if i + 1 < len(groupe["mots"]) else groupe["fin"]
            fin = min(max(fin, debut + 0.08), duree)
            image = _image_sous_titre(groupe, i)
            clips.append(
                ImageClip(image, transparent=True)
                .with_start(debut)
                .with_duration(fin - debut)
                .with_position(((config.LARGEUR - SOUS_TITRE_LARGEUR) // 2, SOUS_TITRE_Y))
            )
    return clips


# ── Mascotte ──

def _sprite(chemin, hauteur):
    """Recadre sur le personnage : les PNG du site ont une large marge
    transparente qui le decollerait du bord de l'ecran."""
    image = Image.open(chemin).convert("RGBA")
    boite = image.getbbox()
    if boite:
        image = image.crop(boite)
    ratio = hauteur / image.height
    return np.array(image.resize((max(1, int(image.width * ratio)), hauteur), Image.LANCZOS))


def _enveloppe(chemin_audio, duree, pas=0.04):
    """Energie de la voix, echantillonnee regulierement.

    Sert a faire rebondir la mascotte sur ce qui est dit plutot que sur
    une horloge : elle bouge quand ca parle, elle se pose aux silences.
    """
    with AudioFileClip(str(chemin_audio)) as audio:
        son = audio.to_soundarray(fps=8000)
    if son.ndim > 1:
        son = son.mean(axis=1)

    n = max(1, int(duree / pas))
    taille = max(1, len(son) // n)
    valeurs = np.zeros(n)
    for i in range(n):
        bloc = son[i * taille:(i + 1) * taille]
        if bloc.size:
            valeurs[i] = float(np.sqrt(np.mean(np.square(bloc))))

    plafond = float(valeurs.max())
    return valeurs / plafond if plafond > 0 else valeurs


def _clips_mascotte(bornes, enveloppe, duree, jeu, pas=0.04):
    """Une pose par section, qui rebondit au rythme de la voix."""
    clips = []
    for moment in ("hook", "body", "cta"):
        debut, fin = bornes.get(moment, (0.0, 0.0))
        if moment == "cta":
            fin = duree           # la mascotte reste jusqu'au dernier instant
        if fin - debut < 0.15:
            continue

        image = _sprite(config.sprite(moment, jeu), SPARKY_HAUTEUR)
        largeur = image.shape[1]
        base_x = config.LARGEUR - largeur - SPARKY_MARGE
        base_y = config.HAUTEUR - SPARKY_HAUTEUR - SPARKY_MARGE

        def position(t, _debut=debut, _x=base_x, _y=base_y):
            index = min(len(enveloppe) - 1, int((_debut + t) / pas))
            energie = enveloppe[index] if len(enveloppe) else 0.0
            saut = 26 * energie
            oscillation = 5 * math.sin((_debut + t) * 6.0)
            return (_x + oscillation, _y - saut)

        clips.append(
            ImageClip(image, transparent=True)
            .with_start(debut)
            .with_duration(fin - debut)
            .with_position(position)
        )
    return clips


# ── Bandeau de marque ──

def _pastille_marque():
    police = _police(34)
    texte = config.SITE
    marge_x, marge_y = 30, 16
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    largeur = int(mesure.textlength(texte, font=police)) + marge_x * 2
    hauteur = 34 + marge_y * 2

    image = Image.new("RGBA", (largeur, hauteur), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)
    dessin.rounded_rectangle([0, 0, largeur - 1, hauteur - 1], radius=hauteur // 2,
                             fill=_hex(config.SECONDARY) + (235,))
    dessin.text((marge_x, marge_y - 4), texte, font=police, fill=(255, 255, 255, 255))
    return np.array(image)


# ── Assemblage ──

def _fond_complet():
    """Fond aplati en une seule image opaque.

    Degrade, halos et pastille de marque ne bougent pas d'une trame a
    l'autre : les composer une fois ici evite a MoviePy de melanger
    trois couches transparentes plein cadre 660 fois de suite. C'est le
    gros du temps de montage.
    """
    fond = Image.fromarray(_degrade()).convert("RGBA")

    for couleur, rayon, opacite, position in (
        (config.SECONDARY, 420, 0.30, (-140, 1190)),
        (config.ACCENT, 340, 0.20, (780, -110)),
    ):
        halo = Image.fromarray(_halo(couleur, rayon, opacite))
        fond.alpha_composite(halo, dest=(max(0, position[0]), max(0, position[1])),
                             source=(max(0, -position[0]), max(0, -position[1])))

    pastille = Image.fromarray(_pastille_marque())
    fond.alpha_composite(pastille, dest=((config.LARGEUR - pastille.width) // 2, 52))

    return np.array(fond.convert("RGB"))


def monter(trames, fps_capture, audio, mots, bornes, destination, jeu_sprites="jeune"):
    """Compose et exporte la video finale."""
    audio_clip = AudioFileClip(str(audio))
    duree = float(audio_clip.duration)

    fond = ImageClip(_fond_complet()).with_duration(duree)

    site = ImageSequenceClip(trames, fps=fps_capture)
    if site.size != [TEL_LARGEUR, TEL_HAUTEUR]:
        # Filet de securite : une capture faite a une autre echelle
        # reste utilisable, au prix d'un redimensionnement par trame.
        site = site.resized(new_size=(TEL_LARGEUR, TEL_HAUTEUR))
    site = site.with_duration(duree).with_position((TEL_X, TEL_Y))

    cadre = (ImageClip(_cadre_telephone(), transparent=True)
             .with_duration(duree)
             .with_position((TEL_X - BORDURE, TEL_Y - BORDURE)))

    enveloppe = _enveloppe(audio, duree)
    couches = [fond, site, cadre]
    couches += _clips_mascotte(bornes, enveloppe, duree, jeu_sprites)
    couches += _clips_sous_titres(mots, duree)

    video = (CompositeVideoClip(couches, size=(config.LARGEUR, config.HAUTEUR))
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
