// Fausse API Anthropic pour les tests et l'essai local du module devoir : un petit serveur HTTP
// qui répond à POST /v1/messages comme le ferait l'API, sans aucun appel réel ni aucune clé.
// Dans l'émulateur, runPreCorrection est dirigé vers ce serveur (variable DEVOIR_IA_URL_TEST,
// ignorée hors émulateur). La « correction » rendue est mécanique : tous les points d'un critère
// si le bloc correspondant est rempli, zéro sinon. Elle ne juge rien — elle sert à vérifier le
// circuit (envoi, contrôles du serveur, relecture, validation).
//
// Des mots-clés dans la réponse de l'étudiant déclenchent les cas d'erreur à tester :
//   IA_JSON_INVALIDE_UNE_FOIS  → 1re réponse illisible, 2e correcte (vérifie le nouvel essai)
//   IA_TOUJOURS_INVALIDE       → réponses hors schéma (vérifie le statut « erreur IA »)
//   IA_SOMME_FAUSSE            → note incohérente et points au-dessus du maximum
//   IA_CONFIANCE_BASSE         → confiance 0,3 et alerte « incoherence »
const http = require('http');
const { PORTS, HOTE } = require('./devoir-emulateur.js');

const journal = [];          // requêtes reçues : { cle, modele, systeme, message, corps }
const dejaVues = {};         // attribution_id → nombre d'appels

function extraire(message, balise) {
  const m = new RegExp('<' + balise + '>([\\s\\S]*?)</' + balise + '>').exec(message);
  return m ? JSON.parse(m[1]) : null;
}

function corriger(message) {
  const donnees = extraire(message, 'donnees');
  const reponse = extraire(message, 'reponse_etudiant') || {};
  const tout = Object.keys(reponse).map((k) => reponse[k]).join(' ');
  const id = donnees.attribution_id;
  dejaVues[id] = (dejaVues[id] || 0) + 1;

  if (/IA_TOUJOURS_INVALIDE/.test(tout)) return JSON.stringify({ attribution_id: id, note: 'vingt sur vingt' });
  if (/IA_JSON_INVALIDE_UNE_FOIS/.test(tout) && dejaVues[id] === 1) return 'Voici ma correction : { "note_proposee": ';

  const criteres = donnees.bareme.map((c) => {
    const rempli = !!(reponse[c.critere_id] || '').trim();
    return {
      critere_id: c.critere_id, points_obtenus: rempli ? c.points_max : 0, points_max: c.points_max,
      statut: rempli ? 'valide' : 'absent',
      justification: rempli ? 'Bloc rempli (correction simulée).' : 'Bloc laissé vide.'
    };
  });
  let note = criteres.reduce((s, c) => s + c.points_obtenus, 0);
  if (/IA_SOMME_FAUSSE/.test(tout)) { criteres[0].points_obtenus = criteres[0].points_max + 25; note = 999; }
  const basse = /IA_CONFIANCE_BASSE/.test(tout);
  return JSON.stringify({
    attribution_id: id,
    note_proposee: note,
    note_max: donnees.bareme.reduce((s, c) => s + c.points_max, 0),
    criteres,
    etapes: [{ libelle: 'Application de la formule', statut: 'validee', commentaire: 'Étape simulée.' }],
    erreurs: criteres.some((c) => c.statut === 'absent')
      ? [{ etiquette: 'réponse incomplète', description: 'Un bloc au moins est resté vide.', gravite: 'mineure', extrait_reponse: '', propagee: false }] : [],
    axes_progression: [{ axe: 'Rédaction', action_concrete: 'Refaire l\'exercice en écrivant chaque étape du calcul.' }],
    commentaire_pour_etudiant: 'Correction simulée : le raisonnement est présent.',
    note_pour_enseignant: 'Proposition produite par la fausse IA des tests.',
    confiance: basse ? 0.3 : 0.9,
    alertes: basse ? ['incoherence'] : []
  });
}

function demarrer() {
  journal.length = 0;                                   // chaque suite de tests repart d'un journal vide
  Object.keys(dejaVues).forEach((k) => { delete dejaVues[k]; });
  const serveur = http.createServer((req, res) => {
    let corps = '';
    req.on('data', (c) => { corps += c; });
    req.on('end', () => {
      if (req.method !== 'POST' || !/\/v1\/messages/.test(req.url)) { res.writeHead(404); return res.end(); }
      let demande;
      try { demande = JSON.parse(corps); } catch (e) { res.writeHead(400); return res.end(); }
      const message = typeof demande.messages[0].content === 'string' ? demande.messages[0].content : demande.messages[0].content.map((b) => b.text || '').join('');
      // Le SDK envoie une vraie clé « sk-ant-… » dans x-api-key, toute autre valeur en jeton Bearer.
      const cle = req.headers['x-api-key'] || String(req.headers.authorization || '').replace(/^Bearer /, '');
      journal.push({ cle, modele: demande.model, systeme: demande.system, message, corps: demande });
      const texte = corriger(message);
      res.writeHead(200, { 'Content-Type': 'application/json', 'request-id': 'req_test_' + journal.length });
      res.end(JSON.stringify({
        id: 'msg_test_' + journal.length, type: 'message', role: 'assistant', model: demande.model,
        content: [{ type: 'text', text: texte }], stop_reason: 'end_turn', stop_sequence: null,
        usage: { input_tokens: 100, output_tokens: 100 }
      }));
    });
  });
  serveur.listen(PORTS.ia, HOTE);
  return serveur;
}

module.exports = { demarrer, journal };
