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
from pipeline.dialogue import grouper_repliques
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

# ── Dialogue vertical (campagnes) ──
#
# Deux mascottes dans les coins bas, une etiquette de nom sous les pieds
# de chacune, et les sous-titres remontes sous le telephone. Ces valeurs
# sont liees : un pave de deux lignes descend jusqu'a ~1510 px, le
# sommet des mascottes est a 1498 px — ils ne se touchent qu'aux
# extremites, la ou un pave centre n'ecrit presque jamais.
MASCOTTE_DIALOGUE_HAUTEUR = 330
MASCOTTE_DIALOGUE_MARGE = 36
ETIQUETTE_HAUTEUR = 46
ETIQUETTE_ECART = 10
MASCOTTE_DIALOGUE_Y = (config.HAUTEUR - MASCOTTE_DIALOGUE_MARGE - ETIQUETTE_HAUTEUR
                       - ETIQUETTE_ECART - MASCOTTE_DIALOGUE_HAUTEUR)
SOUS_TITRE_Y_DIALOGUE = 1300

# Largeur reellement disponible pour le texte d'un pave : la bande moins
# le contour, qui deborde de chaque cote de chaque glyphe.
SOUS_TITRE_UTILE = SOUS_TITRE_LARGEUR - config.CONTOUR_SOUS_TITRE * 4
# Un pave illisible est pire qu'un pave qui deborde un peu : sous cette
# taille on rend la main plutot que de continuer a reduire.
TAILLE_SOUS_TITRE_MINI = 44

# ── Plaque de code promo ──
PLAQUE_MARGE_INTERNE = 44
PLAQUE_LARGEUR_MINI = 660
PLAQUE_RAYON = 36
PLAQUE_BAS = 70            # entre le bas de la plaque et le bas de l'ecran du telephone
PLAQUE_POP = 0.38          # duree de l'apparition, en secondes


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


def taille_ajustee(mots, taille=None):
    """Plus grande taille a laquelle le pave tient dans la bande.

    Le retour a la ligne ne suffit pas toujours : « STUDENT2026 » ou un
    nom de domaine est un seul mot, qu'on ne peut ni couper ni laisser
    sortir du cadre. On reduit ce pave-la — et lui seul — pour que le
    reste du sous-titrage garde sa taille nominale. Meme regle que le
    format paysage (montage_interview.taille_ajustee).
    """
    taille = taille or config.TAILLE_SOUS_TITRE
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


def _image_sous_titre(groupe, index_actif, taille=None, accent=None):
    """Rend un pave de sous-titres, le mot en cours mis en couleur.

    On dessine mot par mot plutot que d'utiliser un TextClip : c'est le
    seul moyen de colorer un seul mot d'une ligne. `accent` est la
    couleur du mot en cours : le jaune de la charte par defaut, la
    couleur du locuteur dans un dialogue.
    """
    contour = config.CONTOUR_SOUS_TITRE
    mots = groupe["mots"]
    accent = accent or (_hex(config.ACCENT) + (255,))

    # La taille et le decoupage sont resolus ensemble : un pave qui ne
    # tient pas est reduit jusqu'a tenir.
    taille, lignes = taille_ajustee(mots, taille)
    police = _police(taille)
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
                fill=accent if actif else (255, 255, 255, 255),
                stroke_width=contour,
                stroke_fill=(12, 16, 22, 235),
            )
            x += dessin.textlength(rendu + " ", font=police)
            rang += 1

    return np.array(image)


def _clips_sous_titres(mots, duree, par_locuteur=False, y=None):
    """Un clip par mot : le pave reste, seule la couleur se deplace.

    En dialogue, les paves sont coupes au changement de voix et le mot
    en cours prend la couleur du locuteur (config.COULEUR_LOCUTEUR) :
    avec la mascotte qui bouge, c'est ce qui dit qui parle.
    """
    y = SOUS_TITRE_Y if y is None else y
    groupes = grouper_repliques(mots) if par_locuteur else grouper(mots)
    clips = []
    for groupe in groupes:
        accent = None
        if par_locuteur:
            accent = _hex(config.COULEUR_LOCUTEUR[groupe["locuteur"]]) + (255,)
        for i, mot in enumerate(groupe["mots"]):
            debut = mot["debut"]
            fin = groupe["mots"][i + 1]["debut"] if i + 1 < len(groupe["mots"]) else groupe["fin"]
            fin = min(max(fin, debut + 0.08), duree)
            if fin <= debut:
                continue
            image = _image_sous_titre(groupe, i, accent=accent)
            clips.append(
                ImageClip(image, transparent=True)
                .with_start(debut)
                .with_duration(fin - debut)
                .with_position(((config.LARGEUR - SOUS_TITRE_LARGEUR) // 2, y))
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


def _estompe(image):
    """Version en retrait de la mascotte qui ecoute.

    Sans lip-sync, c'est le seul moyen de designer celui qui parle. On
    assombrit sans effacer : l'autre reste present a l'image.
    """
    sombre = image.astype(np.float32)
    sombre[..., :3] *= 0.55
    sombre[..., 3] *= 0.85
    return sombre.astype(np.uint8)


def _etiquette(texte, couleur, actif):
    """Nom de la mascotte, sous ses pieds.

    Affichee en permanence : un spectateur qui arrive en cours de video
    sait qui est qui. Seule la mise en avant change quand la parole
    passe.
    """
    police = _police(28)
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    largeur = int(mesure.textlength(texte, font=police)) + 48

    image = Image.new("RGBA", (largeur, ETIQUETTE_HAUTEUR), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)
    rgb = _hex(couleur)
    if actif:
        fond, encre = rgb + (240,), (16, 22, 30, 255)
    else:
        fond, encre = (24, 32, 42, 190), rgb + (160,)
    dessin.rounded_rectangle([0, 0, largeur - 1, ETIQUETTE_HAUTEUR - 1],
                             radius=ETIQUETTE_HAUTEUR // 2, fill=fond)
    dessin.text((largeur / 2, ETIQUETTE_HAUTEUR / 2 + 1), texte, font=police,
                fill=encre, anchor="mm")
    return np.array(image)


def _clips_mascottes_dialogue(repliques, enveloppe, duree, poses=None, pas=0.04):
    """Les deux mascottes dans les coins bas, sur toute la duree.

    Une paire de clips par replique : celle qui parle rebondit sur
    l'energie de sa voix, celle qui ecoute reste immobile et en retrait.
    Meme mise en scene que le format paysage, ramenee en 9:16.
    """
    poses = poses or ["neutre"] * len(repliques)
    clips = []

    for rang, replique in enumerate(repliques):
        debut = replique["debut"]
        # La derniere replique tient jusqu'au bout : la plaque de fin ne
        # doit pas se retrouver sans personne a l'image.
        fin = duree if rang == len(repliques) - 1 else repliques[rang + 1]["debut"]
        if fin - debut < 0.05:
            continue

        for locuteur in ("sparky", "lumen"):
            actif = locuteur == replique["locuteur"]
            moment = poses[rang] if actif else "neutre"
            image = _sprite(config.sprite(moment, config.JEU_SPRITES[locuteur]),
                            MASCOTTE_DIALOGUE_HAUTEUR)
            largeur = image.shape[1]
            base_x = (MASCOTTE_DIALOGUE_MARGE if locuteur == "sparky"
                      else config.LARGEUR - largeur - MASCOTTE_DIALOGUE_MARGE)

            if actif:
                def position(t, _debut=debut, _x=base_x):
                    index = min(len(enveloppe) - 1, int((_debut + t) / pas))
                    energie = enveloppe[index] if len(enveloppe) else 0.0
                    return (_x + 4 * math.sin((_debut + t) * 6.0),
                            MASCOTTE_DIALOGUE_Y - 24 * energie)
                clip = ImageClip(image, transparent=True).with_position(position)
            else:
                clip = ImageClip(_estompe(image), transparent=True).with_position(
                    (base_x, MASCOTTE_DIALOGUE_Y + 8))
            clips.append(clip.with_start(debut).with_duration(fin - debut))

            etiquette = _etiquette(config.NOM_LOCUTEUR[locuteur],
                                   config.COULEUR_LOCUTEUR[locuteur], actif)
            clips.append(
                ImageClip(etiquette, transparent=True)
                .with_start(debut)
                .with_duration(fin - debut)
                .with_position((base_x + (largeur - etiquette.shape[1]) // 2,
                                config.HAUTEUR - MASCOTTE_DIALOGUE_MARGE - ETIQUETTE_HAUTEUR))
            )

    return clips


# ── Plaque de code promo ──

def _normaliser_mot(texte):
    return "".join(c for c in texte.upper() if c.isalnum())


def debut_plaque(plaque, bornes, mots, duree):
    """Instant d'apparition de la plaque.

    Trois facons de le dire, de la plus precise a la plus simple :
    `mot` — la plaque surgit quand le narrateur prononce ce mot (le code
    lui-meme, en general) ; `des` — une fraction de la video ; sinon le
    debut du CTA. Une consigne introuvable retombe sur le CTA plutot que
    de faire echouer un rendu de plusieurs minutes.
    """
    mot = _normaliser_mot(plaque.get("mot") or "")
    if mot:
        for m in mots:
            if _normaliser_mot(m["texte"]).startswith(mot):
                return max(0.0, m["debut"] - 0.1)

    des = plaque.get("des")
    if isinstance(des, (int, float)) and not isinstance(des, bool):
        return max(0.0, min(duree, float(des) * duree))

    cta = (bornes or {}).get("cta")
    if cta and cta[1] > cta[0]:
        return cta[0]
    return max(0.0, duree * 0.72)


def _image_plaque_code(plaque):
    """Plaque du code promo, posee par-dessus l'ecran du telephone.

    Jaune de la charte sur le fond sombre : c'est la couche la plus
    contrastee de la video, volontairement — le code est la seule chose
    que le spectateur doit retenir.
    """
    libelle = plaque.get("libelle", "CODE PROMO")
    remise = plaque.get("remise", "")
    code = plaque["code"]
    sous_texte = plaque.get("sous_texte", "")

    police_entete = _police(38)
    police_code = _police(108)
    police_sous = _police(34)
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))

    entete = libelle + ("   ·   " + remise if remise else "")
    largeurs = [mesure.textlength(entete, font=police_entete),
                mesure.textlength(code, font=police_code)]
    if sous_texte:
        largeurs.append(mesure.textlength(sous_texte, font=police_sous))
    largeur = max(PLAQUE_LARGEUR_MINI, int(max(largeurs)) + PLAQUE_MARGE_INTERNE * 2)

    haut = 34
    hauteur = haut + 46 + 8 + 120 + (6 + 42 if sous_texte else 0) + 30

    image = Image.new("RGBA", (largeur, hauteur), (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)
    dessin.rounded_rectangle([0, 0, largeur - 1, hauteur - 1], radius=PLAQUE_RAYON,
                             fill=_hex(config.ACCENT) + (250,))
    encre = _hex(config.PRIMARY) + (255,)
    centre = largeur / 2

    dessin.text((centre, haut), entete, font=police_entete, fill=encre, anchor="ma")
    dessin.text((centre, haut + 46 + 8), code, font=police_code, fill=encre, anchor="ma")
    if sous_texte:
        dessin.text((centre, haut + 46 + 8 + 120 + 6), sous_texte, font=police_sous,
                    fill=_hex(config.PRIMARY) + (215,), anchor="ma")
    return np.array(image)


def _ressort(u):
    """Ease-out avec un leger depassement : la plaque « claque »."""
    c1 = 1.70158
    c3 = c1 + 1
    return 1 + c3 * (u - 1) ** 3 + c1 * (u - 1) ** 2


def _clips_plaque(plaque, debut, duree):
    """La plaque, de `debut` a la fin : une apparition animee puis une
    image fixe. Deux clips plutot qu'un seul redimensionne 30 fois par
    seconde : l'animation ne dure qu'un tiers de seconde."""
    if duree - debut < 0.1:
        return []

    image = _image_plaque_code(plaque)
    hauteur, largeur = image.shape[:2]
    x = (config.LARGEUR - largeur) // 2
    y = TEL_Y + TEL_HAUTEUR - PLAQUE_BAS - hauteur
    pop = min(PLAQUE_POP, duree - debut)

    def echelle(t):
        u = min(1.0, t / pop) if pop > 0 else 1.0
        return 0.55 + 0.45 * _ressort(u)

    def position(t):
        e = echelle(t)
        return (x + largeur * (1 - e) / 2, y + hauteur * (1 - e) / 2)

    clips = [
        ImageClip(image, transparent=True)
        .with_start(debut)
        .with_duration(pop)
        .resized(lambda t: echelle(t))
        .with_position(position)
    ]
    if duree - debut - pop > 0.01:
        clips.append(
            ImageClip(image, transparent=True)
            .with_start(debut + pop)
            .with_duration(duree - debut - pop)
            .with_position((x, y))
        )
    return clips


# ── Bandeau de marque ──

def _pastille_marque(texte=None):
    police = _police(34)
    texte = texte or config.SITE
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

def _fond_complet(marque=None):
    """Fond aplati en une seule image opaque.

    `marque` est le domaine ecrit dans la pastille : le site par defaut,
    un autre domaine pour une campagne.

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

    pastille = Image.fromarray(_pastille_marque(marque))
    fond.alpha_composite(pastille, dest=((config.LARGEUR - pastille.width) // 2, 52))

    return np.array(fond.convert("RGB"))


def monter(trames, fps_capture, audio, mots, bornes, destination, jeu_sprites="jeune",
           marque=None, plaque=None, dialogue=None):
    """Compose et exporte la video finale.

    Trois options servent aux campagnes et ne changent rien aux lignes
    quotidiennes quand elles sont absentes : `marque` remplace le
    domaine de la pastille (une campagne peut filmer un autre site) ; `plaque`
    ({code, remise, sous_texte, mot|des}) affiche un code promo
    par-dessus l'ecran a partir de debut_plaque() ; `dialogue`
    ({repliques, poses}) remplace la mascotte unique par les deux
    mascottes, et `mots` portent alors un `locuteur`.
    """
    audio_clip = AudioFileClip(str(audio))
    duree = float(audio_clip.duration)

    fond = ImageClip(_fond_complet(marque)).with_duration(duree)

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
    if dialogue:
        couches += _clips_mascottes_dialogue(dialogue["repliques"], enveloppe, duree,
                                             dialogue.get("poses"))
        couches += _clips_sous_titres(mots, duree, par_locuteur=True, y=SOUS_TITRE_Y_DIALOGUE)
    else:
        couches += _clips_mascotte(bornes, enveloppe, duree, jeu_sprites)
        couches += _clips_sous_titres(mots, duree)
    if plaque:
        couches += _clips_plaque(plaque, debut_plaque(plaque, bornes, mots, duree), duree)

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
