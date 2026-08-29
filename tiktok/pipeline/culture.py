# -*- coding: utf-8 -*-
"""Redaction et controle des videos « maths x vie reelle ».

La ligne des modules part d'un cours deja relu et n'a donc qu'une chose
a controler : les exemples chiffres que le modele invente pour
l'illustrer (pipeline/verification.py). Ici il n'y a pas de cours :
le sujet, le fait et le calcul sortent tous du modele. Rien ne fait
autorite, donc tout est a verifier — d'ou deux consignes soeurs plutot
qu'un parametre ajoute a verification.py, dont le postulat deviendrait
faux pour son usage d'origine.

Le danger propre a cette ligne n'est pas le calcul faux, que le second
appel attrape bien : c'est la donnee perissable. Un prix, un nombre
d'abonnes, un classement — exact au moment de l'ecriture, faux trois
mois plus tard, et la video reste en ligne. Un second appel au meme
modele ne peut pas trancher « est-ce encore vrai aujourd'hui ? » : il
partage la meme date de coupure que le redacteur. On lui retire donc ce
travail impossible et on le remplace par une question fiable, « ce
chiffre est-il du genre a perimer ? ». Le redacteur, lui, a interdiction
d'en produire.
"""

from pipeline import sujets
from pipeline.catalogue import _normaliser, _score
from pipeline.scripts import assembler, extraire_json, valider
from pipeline.verification import interpreter

# Libelle editorial de la ligne, pendant de scripts.ANGLES[...]["libelle"].
LIBELLE = "Maths et vie réelle"


SYSTEME_REDACTION = """Tu écris le script d'une vidéo verticale de trente secondes pour \
Spark Learning, une plateforme éducative française gratuite.

La ligne éditoriale : partir de quelque chose qui intéresse vraiment un adolescent, et \
montrer la notion de mathématiques qui se cache derrière. On ne fait pas du cours \
déguisé : on part de sa vie, pas du programme.

Le narrateur est {mascotte}, un loup pédagogue : posé, précis, chaleureux. Il tutoie le \
spectateur. C'est le pendant mûr de Sparky le renard, qui tient l'autre ligne de la \
chaîne — pas son clone : moins d'exclamations, plus de démonstration.

TON — règle absolue : socratique et encourageant, jamais punitif. On ne dit jamais \
« faux » ni « erreur ». On dit « c'est le piège classique », « on tombe tous dedans », \
« regarde pourquoi ».

STRUCTURE, en trois champs :
- hook : 8 à 14 mots. Doit tenir en 3 secondes et donner envie de rester.
- body : 30 à 55 mots. Le cœur : une seule idée, expliquée jusqu'au bout.
- cta : 10 à 18 mots. Il DOIT prononcer le nom du site, « Spark Learning » ou \
« sparklearning point fr ». Un CTA qui dit seulement « le cours » ne ramène personne et \
sera refusé. Varie les formulations autour de ce nom.

INTERDICTION ABSOLUE DES DONNÉES PÉRISSABLES. La vidéo restera en ligne des années : \
tout ce qui peut périmer la rendra fausse sans que personne ne s'en aperçoive.
- aucun prix, aucun tarif, aucune somme présentée comme le coût réel de quelque chose
- aucune statistique d'actualité, aucun nombre d'abonnés, de vues ou de joueurs
- aucun classement, aucun record, aucun palmarès, aucun résultat de compétition
- aucune date récente, aucune version d'application, aucun nom d'édition annuelle

Sont autorisés, et eux seuls, les faits STRUCTURELS stables : un match de football dure \
90 minutes, un panier à trois points vaut 3 points, un jeu de cartes en compte 52, une \
semaine fait 7 jours, un octave compte 12 demi-tons.

Tout autre nombre doit être POSÉ PAR L'ÉNONCÉ, jamais présenté comme un fait du monde : \
« imaginons que tu ouvres 10 paquets », « disons qu'un paquet sur cinq contient une carte \
rare ». Le spectateur doit entendre que c'est une hypothèse de travail.

CONTRAINTE TECHNIQUE ABSOLUE — le texte est lu par une voix de synthèse ET affiché en \
sous-titres. Il doit donc être intégralement prononçable :
- aucun symbole mathématique : écris « un demi », « trois quarts », « a sur b », \
« au carré », « racine de vingt-cinq ».
- aucun LaTeX, aucun dollar, aucune barre oblique inversée, aucune accolade.
- aucune balise HTML.
- les décimales s'écrivent avec une virgule (0,75) ou en toutes lettres, jamais 0.75.
- pas de parenthèses, pas de tirets de liste, pas d'emoji.

Tu réponds UNIQUEMENT par un objet JSON, sans texte autour et sans barrière de code."""


SYSTEME_FAITS = """Tu contrôles les affirmations sur le monde réel d'un texte de vidéo \
courte. Ce texte restera en ligne plusieurs années.

Tu as deux devoirs, et deux seulement :
1. signaler ce qui est INDÉFENDABLE publiquement — une affirmation qu'un spectateur \
informé saurait fausse ;
2. signaler ce qui est PÉRISSABLE — un prix, une statistique d'actualité, un nombre \
d'abonnés, un classement, un record, une date récente. Même exact aujourd'hui, cela sera \
faux demain, et la vidéo ne sera pas corrigée.

Ce que tu ne fais PAS :
- tu ne juges ni le style, ni le ton, ni la longueur, ni la pédagogie ;
- tu ne signales pas un fait structurel stable, qui ne périme pas : la durée d'un match, \
la valeur d'un panier, le nombre de cartes d'un jeu ;
- tu ne signales pas un nombre POSÉ PAR L'ÉNONCÉ. « Imaginons que tu ouvres 10 paquets » \
est une hypothèse de travail, pas une affirmation sur le monde.
- tu ne recalcules rien : l'arithmétique est contrôlée ailleurs.

Si tout est défendable et durable, tu renvoies une liste vide. C'est le cas le plus \
fréquent et il ne faut pas inventer de problème pour justifier ta réponse.

Tu réponds UNIQUEMENT par un objet JSON, sans texte autour et sans barrière de code :
{"erreurs": [{"extrait": "le passage en cause", "probleme": "indéfendable, ou périssable, et pourquoi"}]}"""


SYSTEME_CALCULS = """Tu es correcteur de mathématiques. On te donne le texte d'une vidéo \
courte qui explique une notion à partir d'un exemple de la vie quotidienne.

Ton unique travail : recalculer chaque affirmation chiffrée et signaler celles qui sont \
fausses, en donnant la valeur correcte.

Attention : rien ici ne fait référence. L'exemple, les nombres et le raisonnement ont tous \
été inventés pour cette vidéo, aucune source ne les a validés avant toi. Tu ne peux donc \
faire confiance à aucune ligne : recalcule tout, y compris ce qui a l'air évident, et \
vérifie que la conclusion découle bien des nombres énoncés.

Règles strictes :
- tu ne juges PAS le style, le ton, la longueur, ni le choix pédagogique. Uniquement \
l'exactitude.
- tu ne signales que ce que tu peux démontrer faux.
- une simplification pédagogique n'est pas une erreur. Une approximation annoncée comme \
telle non plus.
- un raisonnement de probabilité doit être exact : additionner des chances qui ne \
s'additionnent pas est l'erreur la plus fréquente sur ce format.
- si tout est exact, tu renvoies une liste vide. C'est le cas le plus fréquent et il ne \
faut pas inventer de problème pour justifier ta réponse.

Tu réponds UNIQUEMENT par un objet JSON, sans texte autour et sans barrière de code :
{"erreurs": [{"extrait": "le passage fautif", "probleme": "ce qui est faux et la valeur correcte"}]}"""


def _consigne(sujet, notion, reproches=None):
    """Message utilisateur de la redaction : le sujet, la notion, et ce
    qui a ete reproche a la tentative precedente."""
    morceaux = ["""Sujet de la vidéo : {sujet}
Notion de mathématiques à faire apparaître : {notion}

Écris le script. Le spectateur doit rester pour le sujet, et repartir en ayant compris \
la notion.

Format de réponse exact :
{{
  "hook": "...",
  "body": "...",
  "cta": "...",
  "titre": "...",
  "hashtags": ["...", "..."]
}}

"titre" est la légende publiée, moins de 90 caractères, accrocheuse.
"hashtags" : 4 à 6 tags pertinents, sans le croisillon, en minuscules.

Attention : "titre" et "hashtags" sont ÉCRITS, pas prononcés. Les contraintes de \
prononçabilité ne s'y appliquent pas — écris « 90 % » et non « 90 pourcent ».""".format(
        sujet=sujet, notion=notion)]

    if reproches:
        morceaux += [
            "",
            "La version précédente a été refusée pour ces raisons :",
            "\n".join("- " + r for r in reproches),
            "",
            "Corrige-les toutes. Renvoie le JSON complet, même format, sans commentaire.",
        ]
    return "\n".join(morceaux)


def ecrire(client_ia, modele, sujet, notion, mascotte="Lumen", reproches=None):
    """Ecrit le script d'une video sur ce sujet. Leve si elle est refusee.

    Les reproches d'une tentative precedente repartent dans la consigne
    plutot que dans un historique de conversation : la fonction reste
    sans etat, donc rejouable telle quelle depuis n'importe ou.
    """
    reponse = client_ia.chat.completions.create(
        model=modele,
        messages=[
            {"role": "system", "content": SYSTEME_REDACTION.format(mascotte=mascotte)},
            {"role": "user", "content": _consigne(sujet, notion, reproches)},
        ],
        temperature=0.9,
    )
    brut = extraire_json(reponse.choices[0].message.content or "")

    script = assembler(brut)
    alertes = valider(script)
    if alertes:
        raise ValueError("script refusé : " + " ; ".join(alertes))

    script["libelle"] = LIBELLE
    return script


def _controler(script, client_ia, modele, systeme, demande):
    """Soumet le texte a un controleur et rend ses reproches.

    Une panne du controleur remonte comme un probleme, jamais comme un
    succes : mieux vaut regenerer que publier non verifie.
    """
    reponse = client_ia.chat.completions.create(
        model=modele,
        messages=[
            {"role": "system", "content": systeme},
            {"role": "user", "content": "{}\n\n{}\n\n{}".format(
                "TEXTE DE LA VIDÉO À CONTRÔLER",
                script.get("full_text", ""),
                demande)},
        ],
        temperature=0,      # un controle ne doit pas varier d'un appel a l'autre
    )

    try:
        return interpreter(reponse.choices[0].message.content or "")
    except ValueError as erreur:
        return ["vérification impossible ({})".format(erreur)]


def verifier_faits(script, client_ia, modele):
    """Reproches sur les affirmations concernant le monde reel."""
    return _controler(
        script, client_ia, modele, SYSTEME_FAITS,
        "Signale les affirmations indéfendables ou périssables. Réponds en JSON.")


def verifier_calculs(script, client_ia, modele):
    """Reproches sur l'arithmetique du script."""
    return _controler(
        script, client_ia, modele, SYSTEME_CALCULS,
        "Recalcule chaque affirmation chiffrée. Réponds en JSON.")


def rattacher_module(modules, sujet, notion, seuil):
    """Module du catalogue le plus proche, ou None.

    La requete est la NOTION, pas le sujet : catalogue._score exige que
    plus de la moitie des mots significatifs de la requete tombent dans
    le titre du module, ce qu'un sujet de quatre a six mots ne peut
    jamais satisfaire (releve dans config.SEUIL_RATTACHEMENT). Le sujet
    parle de loot boxes, le catalogue parle de probabilites : c'est la
    notion qui fait le pont.

    Aucun module au-dessus du seuil n'est pas une erreur. Le
    rattachement ne sert qu'au lien cliquable de la description
    YouTube : il ne doit jamais bloquer une production.
    """
    requete = _normaliser(notion)
    classes = sorted(((_score(m, requete), m) for m in modules),
                     key=lambda p: p[0], reverse=True)
    if classes and classes[0][0] >= seuil:
        return classes[0][1]
    return None


def produire(client_ia, modele, famille, memoire, modules, sujet=None,
             mascotte="Lumen", seuil=None, verifier=True, tentatives=2):
    """Chaine complete d'ecriture : choix, redaction, controles, reprise.

    Renvoie la fiche de la video, ou None si le sujet a resiste aux
    controles. Ecrit dans la memoire RECUE plutot que d'en rendre une
    copie : le sujet abandonne doit etre marque brule, et cette marque
    ne peut pas voyager par un retour qui vaut None.

    Leve LookupError quand la famille n'a plus rien de neuf a proposer.
    C'est distinct d'un abandon : l'appelant passe a la famille
    suivante au lieu de perdre le tour.
    """
    if seuil is None:
        import config

        seuil = config.SEUIL_RATTACHEMENT

    choix = sujets.choisir(client_ia, modele, famille,
                           sujets.deja_sortis(memoire), sujet_impose=sujet)

    reproches = None
    for _ in range(tentatives):
        try:
            script = ecrire(client_ia, modele, choix["sujet"], choix["notion"],
                            mascotte=mascotte, reproches=reproches)
        except ValueError as erreur:
            reproches = [str(erreur)]
            continue

        if not verifier:
            reproches = []
        else:
            # Les deux controles passent toujours, meme si le premier a
            # deja trouve : corriger un reproche pour decouvrir l'autre
            # au tour suivant couterait une tentative entiere.
            reproches = (verifier_faits(script, client_ia, modele)
                         + verifier_calculs(script, client_ia, modele))

        if not reproches:
            module = rattacher_module(modules, choix["sujet"], choix["notion"], seuil)
            sujets.noter(memoire, choix["sujet"], choix["notion"], famille,
                         module=module["id"] if module else None)
            return {
                "sujet": choix["sujet"],
                "notion": choix["notion"],
                "famille": famille,
                "pourquoi": choix.get("pourquoi", ""),
                "script": script,
                "module": module,
            }

    sujets.noter(memoire, choix["sujet"], choix["notion"], famille,
                 brule=True, reproches=reproches)
    return None
