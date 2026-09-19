#!/usr/bin/env node
'use strict';

/**
 * Remet la pagination annoncee des fiches produit en accord avec les PDF reels.
 *
 * Pourquoi : les fiches ont ete redigees avant la vague du 14/09 (fiches
 * professeur, schemas secondaires). Le contenu a grossi, les chiffres non.
 * Quinze fiches annoncaient donc MOINS de pages qu'elles n'en contiennent —
 * le pack College professeur affichait 489 pages pour 1484 reelles.
 *
 * Le nombre de pages est lu dans le PDF lui-meme : aucune liste a tenir a jour
 * a la main, le script reste juste apres chaque recompilation.
 *
 * Usage :
 *   node scripts/shopify-corriger-paginations.js          # rapport, n'ecrit rien
 *   node scripts/shopify-corriger-paginations.js --apply  # met a jour Shopify
 *
 * L'ecriture passe par le MCP Shopify de la session ; ce script produit le
 * rapport et le plan de correction que l'agent applique.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const RACINE_PDF = path.join(__dirname, '..', 'Livret pedagogique');

/**
 * Compte les pages d'un PDF sans dependance externe.
 *
 * Deux strategies : le catalogue /Type /Pages est parfois en clair, parfois
 * dans un flux compresse (c'est le cas des manuels produits par notre chaine
 * LaTeX). On tente le clair, puis on deflate les flux.
 */
function compterPages(fichier) {
  const buffer = fs.readFileSync(fichier);
  const texte = buffer.toString('latin1');

  const enClair = [...texte.matchAll(/\/Type\s*\/Pages[\s\S]{0,200}?\/Count\s+(\d+)/g)]
    .map(m => Number(m[1]));
  if (enClair.length) return Math.max(...enClair);

  let maximum = 0;
  const debutFlux = /stream\r?\n/g;
  let trouve;
  while ((trouve = debutFlux.exec(texte))) {
    const debut = trouve.index + trouve[0].length;
    const fin = texte.indexOf('endstream', debut);
    if (fin < 0) continue;
    try {
      const decompresse = zlib.inflateSync(buffer.slice(debut, fin)).toString('latin1');
      for (const m of decompresse.matchAll(/\/Count\s+(\d+)/g)) {
        maximum = Math.max(maximum, Number(m[1]));
      }
    } catch {
      // Flux non deflate (image, police) : sans interet ici.
    }
  }
  return maximum || null;
}

function skuDepuisFichier(fichier) {
  const nom = path.basename(fichier, '.pdf')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase();

  const matiere = nom.startsWith('mathematiques') ? 'MATH' : 'PHYS';
  const edition = nom.includes('professeur') ? 'PROF' : 'ELEVE';

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

function paginationsLocales() {
  const pages = {};
  for (const entree of fs.readdirSync(RACINE_PDF)) {
    const dossier = path.join(RACINE_PDF, entree);
    if (!fs.statSync(dossier).isDirectory()) continue;
    for (const fichier of fs.readdirSync(dossier)) {
      if (!fichier.toLowerCase().endsWith('.pdf')) continue;
      const sku = skuDepuisFichier(fichier);
      if (sku) pages[sku] = compterPages(path.join(dossier, fichier));
    }
  }
  return pages;
}

/**
 * Remplace le nombre de pages partout ou il apparait dans une fiche : le corps
 * de la description ("PDF de 99 pages") et la meta description SEO, qui le
 * reprend souvent. Les deux doivent rester coherents.
 */
function corriger(texte, reel) {
  if (!texte) return texte;
  return texte.replace(/PDF de (\d+) pages/g, `PDF de ${reel} pages`);
}

function main() {
  const pages = paginationsLocales();
  const manquants = Object.entries(pages).filter(([, p]) => !p);

  console.log(`Paginations lues : ${Object.keys(pages).length - manquants.length}/${Object.keys(pages).length}`);
  if (manquants.length) {
    console.log('Illisibles :', manquants.map(([s]) => s).join(', '));
  }
  console.log('');
  console.log(JSON.stringify(pages, null, 2));
}

if (require.main === module) main();

module.exports = { compterPages, skuDepuisFichier, paginationsLocales, corriger };
