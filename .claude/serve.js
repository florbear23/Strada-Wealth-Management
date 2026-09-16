/* Dependency-free static server for local preview.
     node .claude/serve.js   ->   http://localhost:4210
   Serves clean nested paths (/about, /services/financial-planning) by
   resolving to <path>/index.html when there's no file extension.        */
const http = require('http'), fs = require('fs'), path = require('path'), url = require('url');

const ROOT = path.resolve(__dirname, '..');
const PORT = 4210;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.json': 'application/json'
};

function send(res, file) {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('404 ' + file); }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    res.end(data);
  });
}

http.createServer((req, res) => {
  let p = decodeURIComponent(url.parse(req.url).pathname);
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }

  if (p.endsWith('/')) return send(res, path.join(file, 'index.html'));
  if (path.extname(file)) return send(res, file);

  // Extensionless path: try it as a directory (/about -> /about/index.html),
  // then fall back to a literal file, so both /about and /about.html work.
  fs.stat(file, (err, stat) => {
    if (!err && stat.isDirectory()) return send(res, path.join(file, 'index.html'));
    send(res, file);
  });
}).listen(PORT, () => console.log('strada-prototype on http://localhost:' + PORT));
