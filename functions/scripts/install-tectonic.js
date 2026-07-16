const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { execFileSync } = require('child_process');

const TECTONIC_VERSION = '0.15.0';
const ASSET = `tectonic-${TECTONIC_VERSION}-x86_64-unknown-linux-gnu.tar.gz`;
const URL = `https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%40${TECTONIC_VERSION}/${ASSET}`;
const BIN_DIR = path.join(__dirname, '..', 'bin');
const ARCHIVE_PATH = path.join(BIN_DIR, ASSET);

function download(url, destPath) {
  return new Promise(function (resolve, reject) {
    https.get(url, function (res) {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, destPath).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error('Échec du téléchargement de Tectonic : HTTP ' + res.statusCode));
        return;
      }
      var file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', function () { file.close(resolve); });
    }).on('error', reject);
  });
}

async function main() {
  fs.mkdirSync(BIN_DIR, { recursive: true });
  if (fs.existsSync(path.join(BIN_DIR, 'tectonic'))) {
    return;
  }
  await download(URL, ARCHIVE_PATH);
  // Passer des chemins relatifs (via cwd) plutôt qu'absolus : sur Windows, le
  // tar de Git/MSYS interprète une lettre de lecteur ("C:\...") comme un hôte
  // distant ("host:path") et échoue avec "Cannot connect to C:".
  execFileSync('tar', ['-xzf', ASSET, '-C', '.'], { cwd: BIN_DIR });
  fs.unlinkSync(ARCHIVE_PATH);
  fs.chmodSync(path.join(BIN_DIR, 'tectonic'), 0o755);
}

main().catch(function (err) {
  console.error('install-tectonic: ' + err.message);
  process.exit(1);
});
