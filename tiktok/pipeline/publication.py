# -*- coding: utf-8 -*-
"""Programmation des publications TikTok via Upload-Post.

Upload-Post a passe l'audit TikTok : c'est ce qu'on loue chez eux. Leur
API accepte un `scheduled_date`, donc les 30 videos partent en un envoi
avec leurs horaires — ni file d'attente, ni declencheur quotidien, ni
orchestrateur.

La rotation des angles est le point sensible. Publier toujours l'angle
« erreur » a 18 h et « notion » a 20 h 30 confondrait le format et
l'heure : au bout de dix jours on saurait qu'un des trois marche mieux,
sans pouvoir dire lequel des deux facteurs en est la cause.
"""

from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

# Sortie du dejeuner, sortie des cours, soiree.
CRENEAUX = ("12:30", "18:00", "20:30")

# L'ordre de reference : le decalage quotidien s'applique dessus.
ANGLES_ORDRE = ("erreur", "piege-quiz", "notion")

FUSEAU = ZoneInfo("Europe/Paris")
UTC = ZoneInfo("UTC")

ENDPOINT = "https://api.upload-post.com/api/upload"

# TikTok accepte 2200 caracteres de legende.
LEGENDE_MAX = 2200


def calendrier(modules, depart, creneaux=CRENEAUX, angles=ANGLES_ORDRE):
    """Un module par jour, ses angles repartis sur les creneaux.

    Jour i, l'angle de rang j part au creneau (j + i) modulo n : chaque
    angle passe donc dans chaque creneau au fil des jours, ce qui permet
    de lire separement l'effet du format et celui de l'heure.
    """
    if len(creneaux) != len(angles):
        raise ValueError(
            "il faut autant de créneaux que d'angles ({} créneaux pour {} angles)".format(
                len(creneaux), len(angles))
        )

    lignes = []
    for jour, module in enumerate(modules):
        for rang, angle in enumerate(angles):
            creneau = creneaux[(rang + jour) % len(creneaux)]
            heure, minute = (int(x) for x in creneau.split(":"))
            quand = datetime.combine(depart, datetime.min.time()) + timedelta(days=jour)
            lignes.append({
                "module": module,
                "angle": angle,
                "jour": jour + 1,
                "creneau": creneau,
                "quand": quand.replace(hour=heure, minute=minute),
            })

    return sorted(lignes, key=lambda l: l["quand"])


# YouTube coupe les titres a 100 caracteres.
TITRE_YOUTUBE_MAX = 100

# Categorie « Education » du catalogue YouTube.
CATEGORIE_EDUCATION = "27"


def _legende_tiktok(meta):
    """Accroche puis hashtags. Les liens n'y sont pas cliquables."""
    morceaux = []
    if (meta.get("legende") or "").strip():
        morceaux.append(meta["legende"].strip())
    tags = [t.strip().lstrip("#") for t in meta.get("hashtags") or []]
    if [t for t in tags if t]:
        morceaux.append(" ".join("#" + t for t in tags if t))
    return "\n\n".join(morceaux)


def _description_youtube(meta):
    """Accroche, lien du module, puis hashtags.

    Sur YouTube le lien EST cliquable : c'est le seul endroit de la
    chaine ou le CTA amene reellement du trafic vers le site, donc il
    passe avant les hashtags.
    """
    morceaux = []
    if (meta.get("legende") or "").strip():
        morceaux.append(meta["legende"].strip())
    if meta.get("url"):
        morceaux.append("Le cours complet, gratuitement :\n" + meta["url"])
    tags = [t.strip().lstrip("#") for t in meta.get("hashtags") or []]
    if [t for t in tags if t]:
        morceaux.append(" ".join("#" + t for t in tags if t) + " #Shorts")
    return "\n\n".join(morceaux)


def parametres(ligne, meta, utilisateur, aigc=True, plateformes=("tiktok",),
               repli_brouillon=True):
    """Champs du multipart attendus par Upload-Post.

    `quand` est une heure locale de Paris : on la convertit en UTC
    explicite plutot que d'envoyer une heure nue, pour qu'aucune
    ambiguite de fuseau ne decale une publication d'une heure.

    Chaque reseau a ses propres champs. On n'envoie que ceux des
    plateformes demandees, pour ne pas polluer la requete de reglages
    qui ne s'appliquent a rien.
    """
    plateformes = tuple(plateformes)
    local = ligne["quand"].replace(tzinfo=FUSEAU)

    champs = {
        "user": utilisateur,
        "platform[]": list(plateformes) if len(plateformes) > 1 else plateformes[0],
        "title": _legende_tiktok(meta)[:LEGENDE_MAX],
        "scheduled_date": local.astimezone(UTC).strftime("%Y-%m-%dT%H:%M:%SZ"),
    }

    if "tiktok" in plateformes:
        champs.update({
            "post_mode": "DIRECT_POST",
            "privacy_level": "PUBLIC_TO_EVERYONE",
            # TikTok sanctionne le contenu IA non declare. Le cout est un
            # bandeau ; le risque de l'omettre est le compte.
            "is_aigc": "true" if aigc else "false",
        })
        # TikTok plafonne le nombre d'utilisateurs actifs quotidiens de
        # l'application Upload-Post. Plafond atteint, un DIRECT_POST est
        # rebascule en brouillon SANS erreur : la video semble partie,
        # elle dort dans l'inbox. Desactiver le repli rend l'echec
        # visible, au prix d'une publication perdue.
        if not repli_brouillon:
            champs["disable_inbox_fallback"] = "true"

    if "youtube" in plateformes:
        champs.update({
            "youtube_title": (meta.get("legende") or "")[:TITRE_YOUTUBE_MAX],
            "youtube_description": _description_youtube(meta),
            "privacyStatus": "public",
            "categoryId": CATEGORIE_EDUCATION,
            # Equivalent YouTube de is_aigc : voix de synthese.
            "containsSyntheticMedia": "true" if aigc else "false",
            # « Made for kids » couperait commentaires et notifications et
            # reduirait fortement la portee. Le public vise est college et
            # lycee, pas les moins de 13 ans.
            "selfDeclaredMadeForKids": "false",
            "defaultLanguage": "fr",
            "defaultAudioLanguage": "fr",
        })

    return champs


def envoyer(ligne, video, meta, cle_api, utilisateur, aigc=True,
            plateformes=("tiktok",), repli_brouillon=True, client=None):
    """Programme une publication. Renvoie la reponse de l'API.

    Rien n'est publie immediatement : `scheduled_date` est toujours dans
    le futur, l'API repond 202 avec un identifiant de tache.
    """
    import httpx

    champs = parametres(ligne, meta, utilisateur, aigc=aigc,
                        plateformes=plateformes, repli_brouillon=repli_brouillon)
    ferme = client is None
    client = client or httpx.Client(timeout=180.0)

    try:
        with open(video, "rb") as flux:
            reponse = client.post(
                ENDPOINT,
                headers={"Authorization": "Apikey " + cle_api},
                data=champs,
                files={"video": (video.name, flux, "video/mp4")},
            )
    finally:
        if ferme:
            client.close()

    if reponse.status_code >= 400:
        raise RuntimeError("publication refusée ({}) : {}".format(
            reponse.status_code, reponse.text[:400]))

    try:
        return reponse.json()
    except ValueError:
        return {"reponse": reponse.text[:400]}
