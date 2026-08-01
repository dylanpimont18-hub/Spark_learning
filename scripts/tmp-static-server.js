// Serveur statique temporaire avec fallback SPA (sert index.html pour toute route inconnue).
// Usage : node scripts/tmp-static-server.js [port]
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PORT = process.argv[2] || 5177;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(ROOT, urlPath);

  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end(); }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // Fallback SPA : sert index.html pour les routes pushState
      const indexPath = path.join(ROOT, 'index.html');
      fs.readFile(indexPath, (e2, data) => {
        if (e2) { res.writeHead(404); return res.end('Not found'); }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }
  });
});

server.listen(PORT, () => console.log('Static server on http://localhost:' + PORT));
