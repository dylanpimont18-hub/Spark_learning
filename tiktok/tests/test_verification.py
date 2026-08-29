# -*- coding: utf-8 -*-
"""Contrat de pipeline/verification.py.

Le contenu des modules est déjà relu. Ce qui ne l'est pas, ce sont les
exemples chiffrés que le modèle invente pour l'illustrer — comme ce
« six plus trois sur neuf plus trois donne dix sur douze » sorti deux
fois de suite sur le module Fractions.
"""

import pytest

from pipeline.verification import construire_demande, interpreter


def script():
    return {
        "hook": "Tu simplifies en ajoutant le même chiffre en haut et en bas ?",
        "body": "Six plus trois sur neuf plus trois donne dix sur douze, pas deux tiers.",
        "cta": "Revois la méthode sur Spark Learning.",
        "full_text": "Tu simplifies en ajoutant le même chiffre en haut et en bas ? "
                     "Six plus trois sur neuf plus trois donne dix sur douze, pas deux tiers. "
                     "Revois la méthode sur Spark Learning.",
    }


def module():
    return {
        "id": "6e-fractions",
        "titre": "Fractions",
        "cours": {
            "intro": "Une <strong>fraction</strong> $\\dfrac{a}{b}$ représente des parts.",
            "piege": "Erreur fréquente : simplifier $\\dfrac{a+k}{b+k}$ en divisant par $k$.",
        },
        "quiz": [],
    }


# ── construire_demande ──

def test_la_demande_contient_le_texte_a_verifier():
    assert "dix sur douze" in construire_demande(script(), module())


def test_la_demande_contient_le_contenu_source_pour_comparer():
    assert "Erreur fréquente" in construire_demande(script(), module())


def test_la_demande_est_debarrassee_du_balisage_du_module():
    demande = construire_demande(script(), module())
    assert "<strong>" not in demande
    assert "\\dfrac" not in demande


def test_la_demande_reclame_une_reponse_en_json():
    assert "JSON" in construire_demande(script(), module())


# ── interpreter ──

def test_un_script_juge_correct_ne_remonte_aucun_probleme():
    assert interpreter('{"erreurs": []}') == []


def test_une_erreur_signalee_restitue_l_extrait_et_le_diagnostic():
    reponse = '{"erreurs": [{"extrait": "dix sur douze", "probleme": "6+3 sur 9+3 fait 9 sur 12"}]}'
    problemes = interpreter(reponse)
    assert len(problemes) == 1
    assert "dix sur douze" in problemes[0]
    assert "9 sur 12" in problemes[0]


def test_plusieurs_erreurs_sont_toutes_remontees():
    reponse = ('{"erreurs": ['
               '{"extrait": "a", "probleme": "p1"},'
               '{"extrait": "b", "probleme": "p2"}]}')
    assert len(interpreter(reponse)) == 2


def test_une_reponse_emballee_dans_une_barriere_de_code_est_lue():
    assert interpreter('```json\n{"erreurs": []}\n```') == []


def test_une_erreur_sans_extrait_reste_exploitable():
    """Le vérificateur peut décrire un problème sans citer le texte."""
    problemes = interpreter('{"erreurs": [{"probleme": "le résultat final est faux"}]}')
    assert len(problemes) == 1
    assert "résultat final" in problemes[0]


def test_une_reponse_illisible_est_signalee_et_non_prise_pour_un_succes():
    """Un vérificateur muet ne doit jamais valoir « rien à signaler »."""
    with pytest.raises(ValueError):
        interpreter("je ne peux pas vérifier cela")
