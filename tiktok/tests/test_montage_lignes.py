# -*- coding: utf-8 -*-
"""Contrat du retour a la ligne des sous-titres (pipeline/montage.py).

Les paves sont DESSINES en capitales, qui sont sensiblement plus larges
que les minuscules dans une graisse ExtraBold. Mesurer la minuscule pour
decider du retour a la ligne fait donc deborder le pave hors du cadre —
constate le 2026-08-27 sur l'interview « pourquoi », ou « CONVERSION
D'UNITES RATEE » sortait de l'image par la droite.
"""

from PIL import Image, ImageDraw

from pipeline.montage import _lignes, _police


def mot(texte):
    return {"texte": texte, "debut": 0.0, "fin": 0.3}


def largeur(ligne, police, transformation):
    texte = " ".join(transformation(m["texte"]) for m in ligne)
    return ImageDraw.Draw(Image.new("RGB", (1, 1))).textlength(texte, font=police)


def test_aucune_ligne_ne_deborde_quand_le_rendu_est_en_capitales():
    police = _police(64)
    mots = [mot("conversion"), mot("d'unités"), mot("ratée,")]

    lignes = _lignes(mots, police, 868, rendu=str.upper)

    for ligne in lignes:
        assert largeur(ligne, police, str.upper) <= 868


def test_le_texte_est_bien_reparti_sur_plusieurs_lignes_si_besoin():
    police = _police(64)
    mots = [mot("conversion"), mot("d'unités"), mot("ratée,")]

    assert len(_lignes(mots, police, 868, rendu=str.upper)) > 1


def test_sans_transformation_le_comportement_reste_celui_d_avant():
    """Le format vertical appelle _lignes sans `rendu` : sa mise en page
    ne doit pas bouger."""
    police = _police(64)
    mots = [mot("un"), mot("deux")]

    assert _lignes(mots, police, 2000) == [mots]


def test_un_mot_seul_trop_large_occupe_quand_meme_sa_ligne():
    """Rien a couper : mieux vaut un pave trop large qu'une ligne vide
    et une boucle infinie."""
    police = _police(64)
    mots = [mot("anticonstitutionnellement")]

    assert _lignes(mots, police, 50, rendu=str.upper) == [mots]
