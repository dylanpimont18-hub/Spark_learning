# -*- coding: utf-8 -*-
"""Ecriture des scripts de video par le modele (API Mammouth).

Un module donne trois videos : le meme contenu attaque sous trois
angles editoriaux. Un seul appel produit les trois, ce qui divise le
cout par trois et garantit qu'ils ne se repetent pas entre eux.
"""

import json

from pipeline.texte import pour_ia, symboles_interdits

# Debit mesure sur edge-tts a --rate=+12%, le reglage retenu pour TikTok.
MOTS_PAR_SECONDE = 2.7

# TikTok tolere large, mais au-dela de 32 s l'accroche ne tient plus.
DUREE_MAX = 32.0

# En dessous, le modele a bacle : pas de quoi expliquer quoi que ce soit.
DUREE_MIN = 8.0

ANGLES = {
    "erreur": {
        "libelle": "L'erreur classique démontée",
        "consigne": (
            "Pars de l'erreur que les élèves commettent vraiment sur cette notion "
            "(le piège du module). Montre pourquoi elle est tentante, puis donne le "
            "bon raisonnement. Le spectateur doit se reconnaître dans les 2 premières secondes."
        ),
    },
    "piege-quiz": {
        "libelle": "La question-piège à réponse retardée",
        "consigne": (
            "Pose une question courte et piégeuse tirée du module, annonce que la "
            "majorité se trompe, laisse un temps de suspense, puis donne et explique "
            "la réponse. Le suspense doit être explicite dans le texte."
        ),
    },
    "notion": {
        "libelle": "La notion expliquée en express",
        "consigne": (
            "Explique la notion elle-même, proprement et vite, comme une révision "
            "de dernière minute. Sobre et crédible plutôt que spectaculaire."
        ),
    },
}


def duree_estimee(texte):
    """Duree de lecture approximative, en secondes."""
    mots = texte.split()
    if not mots:
        return 0.0
    return round(len(mots) / MOTS_PAR_SECONDE, 2)


def assembler(script):
    """Recompose le texte parle a partir des trois sections.

    Le modele renvoie parfois un full_text qui a derive de ses propres
    hook/body/cta. Comme c'est le full_text qui est dit par la voix et
    affiche en sous-titre, on le refabrique plutot que de l'accepter.
    """
    sections = {cle: (script.get(cle) or "").strip() for cle in ("hook", "body", "cta")}
    assemble = dict(script)
    assemble.update(sections)
    assemble["full_text"] = " ".join(s for s in sections.values() if s)
    return assemble


def valider(script, marque="sparklearning"):
    """Liste les raisons de refuser ce script. Vide = utilisable."""
    alertes = []

    for cle in ("hook", "body", "cta"):
        if not script.get(cle, "").strip():
            alertes.append("section « {} » manquante ou vide".format(cle))

    # Un CTA qui ne nomme pas la marque ne ramene personne : c'est sa
    # seule raison d'exister. « Spark Learning » et « sparklearning.fr »
    # doivent passer, d'ou la comparaison sans espaces.
    cta = script.get("cta", "").lower().replace(" ", "")
    if cta and marque not in cta:
        alertes.append("le cta ne nomme pas le site (« {} » attendu)".format(marque))

    fautes = symboles_interdits(script.get("full_text", ""))
    if fautes:
        alertes.append("texte non prononçable, contient : " + ", ".join(fautes))

    duree = duree_estimee(script.get("full_text", ""))
    if duree > DUREE_MAX:
        alertes.append("script trop long pour TikTok ({} s estimées)".format(duree))
    elif duree < DUREE_MIN:
        alertes.append("script trop court ({} s estimées)".format(duree))

    return alertes


def extraire_json(reponse):
    """Recupere l'objet JSON d'une reponse de modele.

    Meme avec une consigne stricte, un modele emballe volontiers sa
    reponse dans une barriere de code ou l'entoure d'une phrase de
    politesse. On isole donc le premier objet equilibre plutot que de
    faire confiance au format.
    """
    debut = reponse.find("{")
    while debut != -1:
        profondeur = 0
        dans_chaine = False
        echappe = False
        for i in range(debut, len(reponse)):
            c = reponse[i]
            if dans_chaine:
                if echappe:
                    echappe = False
                elif c == "\\":
                    echappe = True
                elif c == '"':
                    dans_chaine = False
                continue
            if c == '"':
                dans_chaine = True
            elif c == "{":
                profondeur += 1
            elif c == "}":
                profondeur -= 1
                if profondeur == 0:
                    try:
                        return json.loads(reponse[debut:i + 1])
                    except json.JSONDecodeError:
                        break
        debut = reponse.find("{", debut + 1)

    raise ValueError("aucun objet JSON exploitable dans la réponse du modèle")


def construire_brief(module):
    """Matiere premiere envoyee au modele, debarrassee de son balisage."""
    cours = module.get("cours", {})
    lignes = [
        "Module : {} — {}".format(module.get("titre", ""), module.get("sousTitre", "")),
        "Niveau : {} ({})".format(module.get("dossier", ""), module.get("tranche", "")),
        "Notions clés : {}".format(", ".join(module.get("motsCles", []))),
        "URL du module : sparklearning.fr{}".format(module.get("url", "")),
        "",
    ]

    if cours.get("intro"):
        lignes += ["COURS", pour_ia(cours["intro"]), ""]

    if cours.get("piege"):
        lignes += ["ERREUR CLASSIQUE DES ÉLÈVES", pour_ia(cours["piege"]), ""]

    if cours.get("method"):
        lignes += ["MÉTHODE", pour_ia(_aplatir(cours["method"])), ""]

    quiz = module.get("quiz") or []
    if quiz:
        lignes.append("QUESTIONS DU QUIZ")
        for q in quiz[:3]:
            lignes.append("- " + pour_ia(q.get("q", "")))
            if q.get("correction"):
                lignes.append("  correction : " + pour_ia(q["correction"]))
        lignes.append("")

    return "\n".join(lignes).strip()


SYSTEME = """Tu écris des scripts de vidéos TikTok pour Spark Learning, une plateforme \
éducative française gratuite (collège, lycée, BTS).

Le narrateur est {mascotte}, un renard pédagogue : malicieux, chaleureux, jamais \
condescendant. Il parle à la première personne, tutoie le spectateur, et s'adresse à \
quelqu'un qui a peut-être décroché en cours.

TON — règle absolue : socratique et encourageant, jamais punitif. On ne dit jamais \
« faux », « erreur », « tu es nul ». On dit « c'est le piège classique », « on tombe \
tous dedans », « regarde pourquoi ».

STRUCTURE de chaque script, en trois champs :
- hook : 8 à 14 mots. Doit tenir en 3 secondes et donner envie de rester. Une question, \
une affirmation surprenante, ou un chiffre.
- body : 30 à 55 mots. Le cœur pédagogique. Une seule idée, expliquée jusqu'au bout.
- cta : 10 à 18 mots. Il DOIT prononcer le nom du site, « Spark Learning » ou \
« sparklearning point fr » — un CTA qui dit seulement « le module » ou « le cours » ne \
ramène personne et sera refusé. Varie les formulations autour de ce nom, ne répète pas \
la même phrase d'un script à l'autre.

CONTRAINTE TECHNIQUE ABSOLUE — le texte est lu par une voix de synthèse ET affiché en \
sous-titres. Il doit donc être intégralement prononçable :
- aucun symbole mathématique : écris « un demi », « trois quarts », « a sur b », \
« au carré », « racine de vingt-cinq ».
- aucun LaTeX, aucun dollar, aucune barre oblique inversée, aucune accolade.
- aucune balise HTML.
- les décimales s'écrivent avec une virgule (0,75) ou en toutes lettres, jamais 0.75.
- pas de parenthèses, pas de tirets de liste, pas d'emoji.

Tu réponds UNIQUEMENT par un objet JSON, sans texte autour et sans barrière de code."""


def _consigne(brief, angles, module):
    demandes = []
    for cle in angles:
        angle = ANGLES[cle]
        demandes.append('  "{}" : {} — {}'.format(cle, angle["libelle"], angle["consigne"]))

    return """Voici la matière première d'un module de Spark Learning.

{brief}

Écris {n} scripts DIFFÉRENTS à partir de ce module, un par angle :
{demandes}

Les trois scripts portent sur la même notion mais ne doivent pas se répéter : angles \
différents, exemples différents, formulations différentes.

Format de réponse exact :
{{
  "erreur": {{"hook": "...", "body": "...", "cta": "...", "titre": "...", "hashtags": ["...", "..."]}},
  ...un objet par angle demandé...
}}

"titre" est la légende TikTok (moins de 90 caractères, accrocheuse).
"hashtags" : 4 à 6 tags pertinents, sans le croisillon, en minuscules.

Attention : "titre" et "hashtags" sont ÉCRITS, pas prononcés. Les contraintes de \
prononçabilité ne s'y appliquent pas — écris « 90 % » et non « 90 pourcent », et utilise \
la typographie normale.""".format(
        brief=brief,
        n=len(angles),
        demandes="\n".join(demandes),
    )


def client(base_url=None, cle=None):
    """Client OpenAI pointe sur Mammouth (API compatible)."""
    from openai import OpenAI

    import config

    cle = cle or config.MAMMOUTH_API_KEY
    if not cle:
        raise RuntimeError(
            "MAMMOUTH_API_KEY absente — la renseigner dans tiktok/.env (voir .env.example)"
        )
    return OpenAI(base_url=base_url or config.MAMMOUTH_BASE_URL, api_key=cle)


def generer(module, client_ia, modele, angles=None, mascotte="Sparky", tentatives=2,
            verifier_calcul=True):
    """Demande au modele les scripts des trois angles, en un appel.

    Une reponse qui echoue a la validation est renvoyee au modele avec
    la liste des reproches : c'est moins couteux et plus fiable que de
    relancer une generation a l'aveugle.

    verifier_calcul lance en plus, sur chaque script accepte, une passe
    de verification arithmetique (un second appel, temperature 0). Elle
    ne rejuge pas le contenu du module, qui est deja relu : elle
    controle les exemples chiffres que le modele a inventes.
    """
    from pipeline.verification import verifier
    angles = list(angles or ANGLES)
    brief = construire_brief(module)

    messages = [
        {"role": "system", "content": SYSTEME.format(mascotte=mascotte)},
        {"role": "user", "content": _consigne(brief, angles, module)},
    ]

    dernier_probleme = None
    for essai in range(tentatives):
        reponse = client_ia.chat.completions.create(
            model=modele,
            messages=messages,
            temperature=0.9,
        )
        contenu = reponse.choices[0].message.content or ""

        # Une reponse illisible se relance comme un script refuse : le
        # modele bavarde parfois au lieu de repondre en JSON, et une
        # seconde demande suffit presque toujours. Sans cette relance,
        # une production de nuit meurt sur le premier module bavard.
        try:
            brut = extraire_json(contenu)
        except ValueError as erreur:
            dernier_probleme = [str(erreur)]
            if essai + 1 >= tentatives:
                raise
            messages += [
                {"role": "assistant", "content": contenu[:2000]},
                {"role": "user", "content":
                    "Ta réponse n'était pas exploitable : {}. Renvoie UNIQUEMENT "
                    "l'objet JSON demandé, sans phrase d'introduction ni barrière "
                    "de code.".format(erreur)},
            ]
            continue

        resultats, reproches = {}, []
        for cle in angles:
            script = brut.get(cle)
            if not isinstance(script, dict):
                reproches.append("angle « {} » absent de la réponse".format(cle))
                continue
            assemble = assembler(script)
            alertes = valider(assemble)

            # La verification arithmetique ne tourne que sur un script
            # deja bien forme : inutile de payer un appel pour un texte
            # qui sera de toute facon rejete.
            if not alertes and verifier_calcul:
                alertes = verifier(assemble, module, client_ia, modele)

            if alertes:
                reproches.append("angle « {} » : {}".format(cle, " ; ".join(alertes)))
            else:
                assemble["angle"] = cle
                assemble["libelle"] = ANGLES[cle]["libelle"]
                resultats[cle] = assemble

        if len(resultats) == len(angles):
            return resultats

        dernier_probleme = reproches
        # Dernier essai : mieux vaut livrer les angles valides que rien.
        if essai + 1 == tentatives and resultats:
            return resultats

        if essai + 1 < tentatives:
            messages += [
                {"role": "assistant", "content": contenu},
                {"role": "user", "content":
                    "Ces scripts sont refusés :\n- " + "\n- ".join(reproches) +
                    "\n\nRenvoie le JSON complet corrigé, même format, sans commentaire."},
            ]

    if dernier_probleme:
        raise ValueError("scripts refusés après {} tentatives :\n- {}".format(
            tentatives, "\n- ".join(dernier_probleme)))
    raise ValueError("aucun script exploitable")


def _aplatir(valeur):
    """Les champs de cours sont tantot une chaine, tantot une liste."""
    if isinstance(valeur, str):
        return valeur
    if isinstance(valeur, list):
        morceaux = []
        for item in valeur:
            if isinstance(item, str):
                morceaux.append(item)
            elif isinstance(item, dict):
                morceaux.append(" ".join(str(v) for v in item.values() if isinstance(v, str)))
        return "\n".join(morceaux)
    if isinstance(valeur, dict):
        return "\n".join(str(v) for v in valeur.values() if isinstance(v, str))
    return str(valeur)
