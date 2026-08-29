# -*- coding: utf-8 -*-
"""Contrat de la sélection de modules dans publier.py."""

from publier import modules_complets

ANGLES = ["erreur", "piege-quiz", "notion"]


def memoire():
    complet = {a: {"fichier": a + ".mp4"} for a in ANGLES}
    return {
        "2nde-statistiques": complet,
        "3e-systemes": complet,
        "6e-multiplication": dict(list(complet.items())[:2]),   # incomplet
    }


def test_seuls_les_modules_a_tous_les_angles_sont_retenus():
    """Un module à moitié rendu casserait la comparaison entre angles."""
    assert modules_complets(memoire(), ANGLES) == ["2nde-statistiques", "3e-systemes"]


def test_un_module_peut_etre_ecarte_nommement():
    """Un module dont des vidéos sont déjà sorties hors calendrier
    fausserait l'expérience : il faut pouvoir l'exclure."""
    retenus = modules_complets(memoire(), ANGLES, exclure=["2nde-statistiques"])
    assert retenus == ["3e-systemes"]


def test_exclure_un_module_inconnu_ne_change_rien():
    assert modules_complets(memoire(), ANGLES, exclure=["inexistant"]) == [
        "2nde-statistiques", "3e-systemes"]
