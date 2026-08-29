# -*- coding: utf-8 -*-
"""Verification arithmetique des scripts, par un second appel au modele.

Les garde-fous de scripts.py verifient la FORME : sections presentes,
duree tenable, rien d'imprononcable, marque citee. Aucun ne verifie que
les calculs tiennent.

Cas reel qui a motive ce module : sur le module Fractions, deux
generations independantes ont ecrit « six plus trois sur neuf plus
trois donne dix sur douze ». C'est neuf sur douze. La conclusion du
script restait juste, donc rien ne s'est declenche.

Le principe : le contenu du module est deja relu, on ne le rejuge pas.
On ne controle que ce que le modele a INVENTE pour l'illustrer.
"""

from pipeline.scripts import extraire_json
from pipeline.texte import pour_ia

SYSTEME = """Tu es correcteur de mathematiques. On te donne le contenu d'un module de \
cours deja valide, puis le texte d'une video censee l'expliquer.

Ton unique travail : recalculer chaque affirmation chiffree du texte de la video et \
signaler celles qui sont fausses.

Regles strictes :
- Tu ne juges PAS le style, le ton, la longueur, ni le choix pedagogique. Uniquement \
l'exactitude.
- Tu ne signales que ce que tu peux demontrer faux, en donnant la valeur correcte.
- Une simplification pedagogique n'est pas une erreur. Une approximation annoncee comme \
telle non plus.
- Le contenu du module fait autorite : s'il contredit la video, c'est la video qui a tort.
- Si tout est exact, tu renvoies une liste vide. C'est le cas le plus frequent et il ne \
faut pas inventer de probleme pour justifier ta reponse.

Tu reponds UNIQUEMENT par un objet JSON, sans texte autour et sans barriere de code :
{"erreurs": [{"extrait": "le passage fautif", "probleme": "ce qui est faux et la valeur correcte"}]}"""


def construire_demande(script, module):
    """Message utilisateur : le module source, puis le texte a verifier."""
    cours = module.get("cours", {}) or {}
    morceaux = ["CONTENU DU MODULE (fait autorite) — {}".format(module.get("titre", ""))]

    for champ in ("intro", "piege", "method", "example", "formulas", "recap"):
        valeur = cours.get(champ)
        if not valeur:
            continue
        morceaux.append(pour_ia(_texte(valeur)))

    for question in (module.get("quiz") or [])[:3]:
        if question.get("q"):
            morceaux.append(pour_ia(question["q"]))
        if question.get("correction"):
            morceaux.append(pour_ia(question["correction"]))

    morceaux += [
        "",
        "TEXTE DE LA VIDEO A VERIFIER",
        script.get("full_text", ""),
        "",
        "Recalcule chaque affirmation chiffree. Reponds en JSON.",
    ]
    return "\n".join(m for m in morceaux if m is not None)


def _texte(valeur):
    """Les champs de cours sont tantot une chaine, tantot une structure."""
    if isinstance(valeur, str):
        return valeur
    if isinstance(valeur, list):
        return "\n".join(
            item if isinstance(item, str)
            else " ".join(str(v) for v in item.values() if isinstance(v, str))
            for item in valeur
        )
    if isinstance(valeur, dict):
        return "\n".join(str(v) for v in valeur.values() if isinstance(v, str))
    return str(valeur)


def interpreter(reponse):
    """Transforme la reponse du verificateur en liste de reproches.

    Une reponse illisible leve : un verificateur muet ne doit jamais
    etre pris pour un « rien a signaler ».
    """
    donnees = extraire_json(reponse)
    erreurs = donnees.get("erreurs")
    if erreurs is None:
        raise ValueError("réponse du vérificateur sans champ « erreurs »")

    problemes = []
    for erreur in erreurs:
        if not isinstance(erreur, dict):
            problemes.append(str(erreur))
            continue
        extrait = (erreur.get("extrait") or "").strip()
        probleme = (erreur.get("probleme") or "").strip()
        if extrait and probleme:
            problemes.append("« {} » : {}".format(extrait, probleme))
        else:
            problemes.append(probleme or extrait or "erreur non décrite")
    return problemes


def verifier(script, module, client_ia, modele):
    """Soumet un script au verificateur. Liste vide = calculs exacts.

    Une panne du verificateur remonte comme un probleme plutot que
    comme un succes : mieux vaut regenerer une video correcte que
    publier une video non verifiee.
    """
    reponse = client_ia.chat.completions.create(
        model=modele,
        messages=[
            {"role": "system", "content": SYSTEME},
            {"role": "user", "content": construire_demande(script, module)},
        ],
        temperature=0,      # une verification ne doit pas varier d'un appel a l'autre
    )
    contenu = reponse.choices[0].message.content or ""

    try:
        return interpreter(contenu)
    except ValueError as erreur:
        return ["vérification impossible ({})".format(erreur)]
