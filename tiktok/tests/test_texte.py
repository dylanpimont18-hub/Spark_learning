"""Contrat de pipeline/texte.py : rendre le contenu des modules
lisible par l'IA, puis verifier que ce qu'elle renvoie est parlable."""

import pytest

from pipeline.texte import html_vers_texte, math_vers_parle, symboles_interdits


# ── html_vers_texte ──

def test_les_balises_de_mise_en_valeur_disparaissent_sans_manger_le_texte():
    assert html_vers_texte("le <strong>numerateur</strong> compte") == "le numerateur compte"


def test_le_double_saut_de_ligne_devient_une_frontiere_de_paragraphe():
    assert html_vers_texte("une idee<br/><br/>une autre") == "une idee\n\nune autre"


def test_les_entites_html_sont_decodees():
    assert html_vers_texte("2&nbsp;kg &amp; plus") == "2 kg & plus"


# ── math_vers_parle ──

def test_une_fraction_devient_un_rapport_dit_a_voix_haute():
    assert math_vers_parle(r"$\dfrac{a}{b}$") == "a sur b"


def test_les_fractions_usuelles_ont_leur_nom_francais():
    assert math_vers_parle(r"$\dfrac{1}{2}$") == "un demi"


def test_la_decimale_francaise_du_site_est_preservee():
    assert math_vers_parle(r"$1{,}5$ litre") == "1,5 litre"


def test_les_operateurs_deviennent_des_mots():
    assert math_vers_parle(r"$3 \times 4$") == "3 fois 4"


def test_le_carre_se_dit_au_carre():
    assert math_vers_parle("$x^2$") == "x au carré"


def test_aucun_symbole_latex_ne_survit_a_la_conversion():
    sortie = math_vers_parle(r"$\sqrt{25} \neq \dfrac{\pi}{2}$")
    assert "\\" not in sortie
    assert "$" not in sortie
    assert "{" not in sortie


# ── symboles_interdits : le garde-fou sur la sortie de l'IA ──

def test_un_texte_deja_parlable_ne_declenche_aucune_alerte():
    assert symboles_interdits("Un demi plus un tiers, ca fait cinq sixiemes.") == []


def test_le_latex_residuel_est_signale():
    assert "$" in symboles_interdits(r"la fraction $\dfrac{1}{2}$")


def test_la_decimale_anglaise_est_signalee():
    """Bug recurrent du projet : 0.75 au lieu de 0,75."""
    assert "décimale anglaise" in symboles_interdits("il reste 0.75 litre")
