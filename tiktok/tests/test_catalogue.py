# -*- coding: utf-8 -*-
"""Contrat de pipeline/catalogue.py : retrouver le bon module parmi
les 248 exportes depuis js/data/."""

import pytest

from pipeline.catalogue import choisir


def corpus():
    return [
        {"id": "6e-fractions", "titre": "Fractions", "tranche": "college", "matiere": "maths"},
        {"id": "3e-thales", "titre": "Théorème de Thalès", "tranche": "college", "matiere": "maths"},
        {"id": "bts-integrales", "titre": "Intégrales", "tranche": "bts", "matiere": "maths"},
        {"id": "physique-bts-optique", "titre": "Optique", "tranche": "bts", "matiere": "physique"},
        {"id": "4e-calcul-algebrique", "titre": "Calcul algébrique", "tranche": "college", "matiere": "maths"},
        {"id": "lycee-tle-derivees", "titre": "Dérivées", "tranche": "lycee", "matiere": "maths"},
        {"id": "physique-3e-lumiere", "titre": "Lumière", "tranche": "college", "matiere": "physique"},
    ]


def test_un_identifiant_exact_designe_le_module():
    assert choisir(corpus(), identifiant="3e-thales")["id"] == "3e-thales"


def test_un_libelle_approximatif_retrouve_le_module():
    """« Les fractions 3ème » doit tomber sur le module fractions."""
    assert choisir(corpus(), identifiant="les fractions")["id"] == "6e-fractions"


def test_la_recherche_ignore_les_accents():
    assert choisir(corpus(), identifiant="theoreme de thales")["id"] == "3e-thales"


def test_un_identifiant_introuvable_leve_une_erreur_nommant_la_demande():
    with pytest.raises(LookupError, match="calcul quantique"):
        choisir(corpus(), identifiant="calcul quantique")


def test_le_tirage_peut_etre_restreint_a_une_tranche():
    assert choisir(corpus(), tranche="lycee", graine=1)["tranche"] == "lycee"


def test_le_tirage_peut_etre_restreint_a_une_matiere():
    assert choisir(corpus(), matiere="physique", graine=1)["matiere"] == "physique"


def test_le_tirage_est_reproductible_a_graine_egale():
    a = choisir(corpus(), graine=42)
    b = choisir(corpus(), graine=42)
    assert a["id"] == b["id"]


def test_un_filtre_qui_ne_laisse_rien_leve_une_erreur():
    with pytest.raises(LookupError):
        choisir(corpus(), matiere="latin")


def test_une_demande_qui_ne_matche_qu_a_moitie_est_refusee():
    """« calcul quantique » ne doit PAS tomber sur « calcul algébrique » :
    produire trois vidéos sur la mauvaise notion serait pire qu'échouer."""
    with pytest.raises(LookupError):
        choisir(corpus(), identifiant="calcul quantique")


def test_les_mots_outils_ne_comptent_pas_dans_le_score():
    """« les fractions » reste une demande valide malgré « les »."""
    assert choisir(corpus(), identifiant="les fractions")["id"] == "6e-fractions"


# ── Perimetre : le BTS est hors sujet (decision du 2026-08-26) ──

def test_le_tirage_aleatoire_ne_propose_jamais_de_module_hors_perimetre():
    tires = {choisir(corpus(), graine=g)["tranche"] for g in range(30)}
    assert "bts" not in tires


def test_un_module_hors_perimetre_nomme_explicitement_est_refuse_en_disant_pourquoi():
    with pytest.raises(LookupError, match="hors périmètre"):
        choisir(corpus(), identifiant="bts-integrales")


def test_le_perimetre_reste_forcable_pour_qui_le_demande():
    """Rien n'est definitivement inaccessible : le jour ou le BTS
    revient, c'est un argument, pas une reecriture."""
    module = choisir(corpus(), identifiant="bts-integrales", tranches=("bts",))
    assert module["id"] == "bts-integrales"


def test_le_perimetre_est_exposable_pour_compter_sans_tirer():
    """L'affichage d'avancement doit compter les mêmes modules que
    ceux que le tirage peut sortir, sinon il annonce un faux total."""
    from pipeline.catalogue import dans_perimetre
    assert {m["id"] for m in dans_perimetre(corpus(), ("college",))} == {
        "6e-fractions", "3e-thales", "4e-calcul-algebrique", "physique-3e-lumiere"}
