# -*- coding: utf-8 -*-
r"""Conversion du contenu des modules en texte parlable.

Les modules de js/data/ melangent HTML de mise en forme et KaTeX.
Une voix de synthese qui lit « backslash dfrac » produit du bruit, et
un sous-titre qui affiche $\dfrac{a}{b}$ tue la video. Ce module fait
donc deux choses :

  - en amont, il rend le contenu lisible pour l'IA (html_vers_texte,
    math_vers_parle) ;
  - en aval, il verifie que ce que l'IA a repondu est reellement
    prononcable (symboles_interdits).
"""

import html as _html
import re

# ── HTML ──

_BR_MULTIPLE = re.compile(r"(?:<br\s*/?>\s*){2,}", re.I)
_BR = re.compile(r"<br\s*/?>", re.I)
_LI = re.compile(r"<li[^>]*>", re.I)
_BALISE = re.compile(r"<[^>]+>")


def html_vers_texte(source):
    """Retire le balisage en gardant les frontieres de sens.

    Le double <br/> est la convention d'aeration du projet : il separe
    deux idees, donc il devient un vrai saut de paragraphe.
    """
    if not source:
        return ""
    texte = _BR_MULTIPLE.sub("\n\n", source)
    texte = _BR.sub("\n", texte)
    texte = _LI.sub("\n- ", texte)
    texte = _BALISE.sub("", texte)
    texte = _html.unescape(texte)
    texte = texte.replace("\xa0", " ")
    texte = re.sub(r"[ \t]{2,}", " ", texte)
    texte = re.sub(r"\n{3,}", "\n\n", texte)
    return texte.strip()


# ── KaTeX ──

# Les fractions que le francais nomme au lieu de les epeler.
_FRACTIONS_NOMMEES = {
    ("1", "2"): "un demi",
    ("1", "3"): "un tiers",
    ("2", "3"): "deux tiers",
    ("1", "4"): "un quart",
    ("3", "4"): "trois quarts",
    ("1", "5"): "un cinquieme",
    ("1", "10"): "un dixieme",
    ("1", "100"): "un centieme",
}

# Ordre important : les symboles deviennent des mots AVANT le
# demontage des fractions, pour que \dfrac{\pi}{2} donne « pi sur 2 ».
_SYMBOLES = [
    (r"\\times", "fois"),
    (r"\\cdot", "fois"),
    (r"\\div", "divisé par"),
    (r"\\neq", "différent de"),
    (r"\\leq|\\le\b", "inférieur ou égal à"),
    (r"\\geq|\\ge\b", "supérieur ou égal à"),
    (r"\\approx", "environ"),
    (r"\\pm", "plus ou moins"),
    (r"\\infty", "l'infini"),
    (r"\\rightarrow|\\to\b", "donne"),
    (r"\\ldots|\\dots", "et ainsi de suite"),
    (r"\\pi", "pi"),
    (r"\\%|%", "pour cent"),
    (r"\\circ", "degré"),
]

_FRACTION = re.compile(r"\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}")
_RACINE = re.compile(r"\\sqrt\{([^{}]*)\}")
_COMMANDE_RESIDUELLE = re.compile(r"\\([a-zA-Z]+)")


def _remplacer_fraction(m):
    haut, bas = m.group(1).strip(), m.group(2).strip()
    nomme = _FRACTIONS_NOMMEES.get((haut, bas))
    return nomme if nomme else "{} sur {}".format(haut, bas)


def math_vers_parle(source):
    """Traduit les fragments KaTeX en francais dit a voix haute."""
    if not source:
        return ""
    texte = source

    # La notation decimale du projet : 1{,}5 est un nombre, pas du balisage.
    texte = re.sub(r"(\d)\{,\}(\d)", r"\1,\2", texte)

    for motif, mot in _SYMBOLES:
        texte = re.sub(motif, " " + mot + " ", texte)

    # Applique en boucle : \dfrac{\dfrac{1}{2}}{3} demande deux passes.
    for _ in range(4):
        nouveau = _FRACTION.sub(_remplacer_fraction, texte)
        if nouveau == texte:
            break
        texte = nouveau

    texte = _RACINE.sub(lambda m: "racine carrée de " + m.group(1).strip(), texte)

    texte = re.sub(r"\^\{?2\}?(?![0-9])", " au carré", texte)
    texte = re.sub(r"\^\{?3\}?(?![0-9])", " au cube", texte)
    texte = re.sub(r"\^\{?([^{}\s$]+)\}?", r" puissance \1", texte)
    texte = re.sub(r"_\{?([^{}\s$]+)\}?", r" indice \1", texte)

    # Ce qui reste de LaTeX perd sa barre oblique plutot que d'etre lu.
    texte = _COMMANDE_RESIDUELLE.sub(r"\1", texte)
    texte = texte.replace("$", "").replace("{", "").replace("}", "")

    texte = re.sub(r"[ \t]{2,}", " ", texte)
    texte = re.sub(r" +([,.;:!?])", r"\1", texte)
    return texte.strip()


def pour_ia(source):
    """Contenu d'un module rendu lisible par le modele."""
    return math_vers_parle(html_vers_texte(source))


# ── Garde-fou sur la sortie du modele ──

_TAG_HTML = re.compile(r"<[a-zA-Z/]")
_DECIMALE_ANGLAISE = re.compile(r"\d\.\d")


def symboles_interdits(texte):
    """Liste les motifs qui rendraient le texte impossible a dire ou a
    afficher. Une liste non vide doit declencher une relance du modele.
    """
    fautes = []
    if "$" in texte:
        fautes.append("$")
    if "\\" in texte:
        fautes.append("\\")
    if _TAG_HTML.search(texte):
        fautes.append("<")
    if "{" in texte or "}" in texte:
        fautes.append("{}")
    if _DECIMALE_ANGLAISE.search(texte):
        fautes.append("décimale anglaise")
    return fautes
