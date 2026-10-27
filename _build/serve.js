// Preview server: node _build/serve.js <root> <port>
// Directory-URL's -> index.html, 404.html bij misser, gzip voor tekst, Range-support voor video.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const PORT = Number(process.argv[3] || 8793);
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon' };

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath.includes('..') || urlPath.startsWith('/_build')) { res.writeHead(404); return res.end(); }
  let file = path.join(ROOT, urlPath);
  let status = 200;
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    if (!urlPath.endsWith('/')) { res.writeHead(301, { Location: urlPath + '/' }); return res.end(); }
    file = path.join(file, 'index.html');
  }
  if (!fs.existsSync(file)) { status = 404; file = path.join(ROOT, '404.html'); }
  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  const headers = { 'Content-Type': type, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': ext === '.html' ? 'no-cache' : 'max-age=31536000, immutable', 'Accept-Ranges': 'bytes' };
  if (ext === '.mp4') {
    const size = fs.statSync(file).size;
    const range = req.headers.range;
    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      const start = m[1] ? Number(m[1]) : 0;
      const end = m[2] ? Number(m[2]) : size - 1;
      headers['Content-Range'] = `bytes ${start}-${end}/${size}`;
      headers['Content-Length'] = end - start + 1;
      res.writeHead(206, headers);
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    headers['Content-Length'] = size;
    res.writeHead(200, headers);
    return fs.createReadStream(file).pipe(res);
  }
  let body = fs.readFileSync(file);
  const textual = /^(text\/|application\/(javascript|json|xml|manifest)|image\/svg)/.test(type);
  if (textual && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) { body = zlib.gzipSync(body); headers['Content-Encoding'] = 'gzip'; headers['Vary'] = 'Accept-Encoding'; }
  headers['Content-Length'] = body.length;
  res.writeHead(status, headers);
  res.end(body);
}).listen(PORT, () => console.log(`Serving ${ROOT} on http://localhost:${PORT}`));
