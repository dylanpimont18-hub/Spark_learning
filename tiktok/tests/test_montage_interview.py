# -*- coding: utf-8 -*-
"""Contrat de l'ajustement des sous-titres (pipeline/montage_interview.py).

Un pave peut deborder de la bande sans qu'aucun retour a la ligne ne
puisse le sauver : « boutique.sparklearning.fr » est un seul mot, et il
mesure 1009 px la ou la bande en fait 968. Couper n'est pas une option,
laisser deborder non plus. On reduit donc la taille de ce pave-la — et
de lui seul.
"""

from pipeline.montage_interview import SOUS_TITRE_UTILE, taille_ajustee


def mot(texte):
    return {"texte": texte, "debut": 0.0, "fin": 0.3}


def test_un_pave_qui_tient_garde_la_taille_nominale():
    from pipeline import montage_interview as mi

    taille, _ = taille_ajustee([mot("et"), mot("donc")])

    assert taille == mi.TAILLE_SOUS_TITRE


def test_un_mot_insecable_trop_large_fait_baisser_la_taille():
    from pipeline import montage_interview as mi

    taille, _ = taille_ajustee([mot("boutique.sparklearning.fr.")])

    assert taille < mi.TAILLE_SOUS_TITRE


def test_le_pave_reduit_tient_effectivement_dans_la_bande():
    from PIL import Image, ImageDraw

    from pipeline.montage import _police

    taille, lignes = taille_ajustee([mot("boutique.sparklearning.fr.")])
    mesure = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    police = _police(taille)

    for ligne in lignes:
        texte = " ".join(m["texte"].upper() for m in ligne)
        assert mesure.textlength(texte, font=police) <= SOUS_TITRE_UTILE


def test_la_taille_ne_descend_jamais_sous_le_plancher():
    """Un pave illisible est pire qu'un pave qui deborde un peu : sous
    le plancher on rend la main plutot que de continuer a reduire."""
    from pipeline import montage_interview as mi

    taille, _ = taille_ajustee([mot("a" * 200)])

    assert taille == mi.TAILLE_SOUS_TITRE_MINI
