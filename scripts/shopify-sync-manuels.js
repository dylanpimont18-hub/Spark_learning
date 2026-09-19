#!/usr/bin/env node
'use strict';

/**
 * Synchronise les manuels PDF locaux vers Fileflare (Digital Downloads), l'app
 * qui assure la livraison numerique de la boutique Shopify.
 *
 * Pourquoi ce script existe : les PDF vendus etaient ceux d'aout, alors que le
 * dossier local porte les versions de septembre (fiches professeur, schemas).
 * Rien ne reliait "je recompile un manuel" a "le fichier vendu change" ; c'est
 * ce chainon.
 *
 * Usage :
 *   node scripts/shopify-sync-manuels.js            # essai a blanc, n'ecrit rien
 *   node scripts/shopify-sync-manuels.js --apply    # televerse et attache
 *   node scripts/shopify-sync-manuels.js --apply --only=MATH-6E-ELEVE
 *
 * La cle d'API se lit dans .env (FILEFLARE_API_KEY), jamais en argument : un
 * argument de ligne de commande se retrouve dans l'historique du shell.
 */

const fs = require('fs');
const path = require('path');

const API = 'https://app.digital-downloads.com/api/v1';
const RACINE_PDF = path.join(__dirname, '..', 'Livret pedagogique');
const ENV = path.join(__dirname, '..', '.env');

// Le rythme impose par Fileflare est de 60 requetes par minute. Chaque manuel
// en consomme trois (signature, confirmation, attachement) ; l'upload S3 lui-meme
// ne compte pas. Une pause d'une seconde entre deux manuels garde une marge
// confortable sans allonger notablement la synchronisation.
const PAUSE_MS = 1000;

// Un PDF plus court que celui deja en ligne trahit presque toujours une
// compilation interrompue. En dessous de ce seuil, on refuse de publier.
const SEUIL_TAILLE_SUSPECTE = 0.5;

const pause = ms => new Promise(r => setTimeout(r, ms));

function lireCle() {
  if (!fs.existsSync(ENV)) {
    throw new Error('Fichier .env absent. Y placer FILEFLARE_API_KEY=...');
  }
  const ligne = fs.readFileSync(ENV, 'utf8')
    .split(/\r?\n/)
    .find(l => l.startsWith('FILEFLARE_API_KEY='));
  const cle = ligne ? ligne.slice('FILEFLARE_API_KEY='.length).trim() : '';
  if (!cle) {
    throw new Error('FILEFLARE_API_KEY vide dans .env. La generer dans Fileflare > Settings > API.');
  }
  return cle;
}

async function api(cle, methode, chemin, corps) {
  const options = {
    method: methode,
    headers: {
      Authorization: `Bearer ${cle}`,
      Accept: 'application/json',
    },
  };
  if (corps !== undefined) {
    // Le corps est serialise ici plutot que compose a la main : les titres
    // contiennent des accents ("Troisieme", "eleve") qu'une interpolation
    // shell corrompt silencieusement, et l'API repond alors 422 en pretendant
    // que les champs sont absents.
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(corps);
  }
  const reponse = await fetch(`${API}${chemin}`, options);
  const texte = await reponse.text();
  if (!reponse.ok) {
    throw new Error(`${methode} ${chemin} -> HTTP ${reponse.status} ${texte.slice(0, 300)}`);
  }
  return texte ? JSON.parse(texte) : null;
}

/**
 * Deduit le SKU d'un manuel depuis son nom de fichier.
 *
 * On passe par le SKU et non par le titre : le fichier dit "Mathematiques
 * College" la ou la fiche produit dit "Mathematiques College (6e-3e)". Le SKU
 * est la seule cle stable entre les deux.
 */
function skuDepuisFichier(fichier) {
  const nom = path.basename(fichier, '.pdf')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase();

  const matiere = nom.startsWith('mathematiques') ? 'MATH' : 'PHYS';
  const edition = nom.includes('professeur') ? 'PROF' : 'ELEVE';

  // "Remise a niveau" se teste avant "bts" : le titre complet mentionne les
  // deux ("Remise a niveau (avant BTS)") et l'ordre inverse le classerait en BTS.
  let niveau = null;
  if (nom.includes('remise a niveau')) niveau = 'PREP';
  else if (nom.includes('sixieme')) niveau = '6E';
  else if (nom.includes('cinquieme')) niveau = '5E';
  else if (nom.includes('quatrieme')) niveau = '4E';
  else if (nom.includes('troisieme')) niveau = '3E';
  else if (nom.includes('seconde')) niveau = '2NDE';
  else if (nom.includes('premiere')) niveau = '1RE';
  else if (nom.includes('terminale')) niveau = 'TLE';
  else if (nom.includes('college')) niveau = 'COLLEGE';
  else if (nom.includes('lycee')) niveau = 'LYCEE';
  else if (nom.includes('bts')) niveau = 'BTS';

  return niveau ? `${matiere}-${niveau}-${edition}` : null;
}

function listerPdf() {
  const trouves = [];
  for (const entree of fs.readdirSync(RACINE_PDF)) {
    const dossier = path.join(RACINE_PDF, entree);
    if (!fs.statSync(dossier).isDirectory()) continue;
    for (const fichier of fs.readdirSync(dossier)) {
      if (fichier.toLowerCase().endsWith('.pdf')) {
        trouves.push(path.join(dossier, fichier));
      }
    }
  }
  return trouves.sort();
}

/**
 * Verifie qu'un PDF est publiable. Sans relecture humaine avant la mise en
 * vente, ce controle est le seul garde-fou : un fichier tronque partirait
 * directement chez les clients.
 */
function controler(fichier, tailleEnLigne) {
  const taille = fs.statSync(fichier).size;
  if (taille === 0) return { ok: false, motif: 'fichier vide' };

  const entete = Buffer.alloc(5);
  const fd = fs.openSync(fichier, 'r');
  fs.readSync(fd, entete, 0, 5, 0);
  fs.closeSync(fd);
  if (entete.toString('latin1') !== '%PDF-') {
    return { ok: false, motif: 'ce n\'est pas un PDF valide' };
  }

  if (tailleEnLigne && taille < tailleEnLigne * SEUIL_TAILLE_SUSPECTE) {
    return {
      ok: false,
      motif: `deux fois plus petit que la version en ligne (${taille} vs ${tailleEnLigne} octets)`,
    };
  }
  return { ok: true, taille };
}

async function televerser(cle, fichier) {
  const taille = fs.statSync(fichier).size;
  const nom = path.basename(fichier);

  const signature = await api(cle, 'POST', '/assets/signed', {
    name: nom,
    size: taille,
    mime: 'application/pdf',
  });

  // Les manuels pesent au plus 8 Mo pour un chunk de 100 Mo : un seul morceau
  // en pratique. La boucle couvre le cas ou un ouvrage de cycle grossirait.
  const parts = [];
  for (const part of signature.urls) {
    const morceau = fs.createReadStream(fichier, { start: part.start, end: part.end - 1 });
    const octets = [];
    for await (const bloc of morceau) octets.push(bloc);
    const corps = Buffer.concat(octets);

    const envoi = await fetch(part.url, { method: 'PUT', body: corps });
    if (!envoi.ok) {
      throw new Error(`PUT morceau ${part.part} -> HTTP ${envoi.status}`);
    }
    const etag = envoi.headers.get('etag');
    if (!etag) throw new Error(`morceau ${part.part} : ETag absent`);
    parts.push({ PartNumber: part.part, ETag: etag });
  }

  await api(cle, 'POST', `/assets/${signature.id}/uploaded`, {
    upload_id: signature.upload_id,
    parts,
  });

  return signature.id;
}

async function main() {
  const args = process.argv.slice(2);
  const appliquer = args.includes('--apply');
  const seul = (args.find(a => a.startsWith('--only=')) || '').split('=')[1];

  const cle = lireCle();

  console.log(appliquer
    ? '=== SYNCHRONISATION REELLE ==='
    : '=== ESSAI A BLANC (aucune ecriture) ===');
  console.log('Ajouter --apply pour televerser.\n');

  // Fileflare expose les produits Shopify avec leur SKU : c'est le pont entre
  // un PDF sur le disque et une fiche produit en boutique.
  const produits = (await api(cle, 'GET', '/products?per_page=100')).data;
  const parSku = new Map(produits.map(p => [p.sku, p]));

  // Les fichiers deja presents servent a distinguer un premier envoi d'un
  // remplacement, et a reperer un PDF anormalement petit.
  const assets = (await api(cle, 'GET', '/assets?per_page=100')).data || [];
  const assetParNom = new Map(assets.map(a => [a.filename, a]));

  const pdfs = listerPdf();
  console.log(`PDF locaux : ${pdfs.length}   Produits Fileflare : ${produits.length}\n`);

  const aFaire = [];
  const ignores = [];

  for (const fichier of pdfs) {
    const sku = skuDepuisFichier(fichier);
    const produit = sku ? parSku.get(sku) : null;
    if (!produit) {
      ignores.push({ fichier, motif: `aucun produit pour le SKU ${sku || '(indetermine)'}` });
      continue;
    }
    if (seul && sku !== seul) continue;

    const ancien = assetParNom.get(path.basename(fichier));
    const verdict = controler(fichier, ancien ? ancien.raw_size : null);
    if (!verdict.ok) {
      ignores.push({ fichier, motif: verdict.motif });
      continue;
    }
    aFaire.push({ fichier, sku, produit, taille: verdict.taille, remplace: Boolean(ancien) });
  }

  for (const e of aFaire) {
    const ko = (e.taille / 1024 / 1024).toFixed(1);
    console.log(`  ${e.remplace ? 'MAJ ' : 'NEUF'}  ${e.sku.padEnd(20)} ${ko.padStart(5)} Mo  ${path.basename(e.fichier)}`);
  }
  if (ignores.length) {
    console.log('\n  IGNORES :');
    ignores.forEach(i => console.log(`   ! ${path.basename(i.fichier)} — ${i.motif}`));
  }

  if (!appliquer) {
    console.log(`\n${aFaire.length} manuel(s) seraient televerses. Relancer avec --apply.`);
    return;
  }

  console.log(`\nTeleversement de ${aFaire.length} manuel(s)...\n`);
  let reussis = 0;
  const echecs = [];

  for (const [i, e] of aFaire.entries()) {
    const etiquette = `[${i + 1}/${aFaire.length}] ${e.sku}`;
    try {
      const assetId = await televerser(cle, e.fichier);
      await api(cle, 'POST', `/assets/${assetId}/attach`, { products: [e.produit.id] });
      console.log(`  OK   ${etiquette}`);
      reussis++;
    } catch (erreur) {
      console.log(`  ECHEC ${etiquette} — ${erreur.message}`);
      echecs.push({ sku: e.sku, message: erreur.message });
    }
    if (i < aFaire.length - 1) await pause(PAUSE_MS);
  }

  console.log(`\n=== ${reussis}/${aFaire.length} televerses ===`);
  if (echecs.length) {
    console.log('Echecs :');
    echecs.forEach(e => console.log(`  - ${e.sku} : ${e.message}`));
    process.exitCode = 1;
  }
}

main().catch(erreur => {
  console.error('ERREUR :', erreur.message);
  process.exitCode = 1;
});
