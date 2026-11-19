'use strict';
// Bouwt de complete site in de map boven _build/. Gebruik: node _build/build.js
const fs = require('fs');
const path = require('path');
const C = require('./config');
const AREAS = require('./areas');
const S = require('./shell');
const home = require('./home');
const areas = require('./pages-areas');
const info = require('./pages-info');

const ROOT = path.resolve(__dirname, '..');
const write = (rel, content) => {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};
const writePage = (slug, html) => write(slug === '/' ? 'index.html' : `${slug}/index.html`, html);

const urls = [{ loc: '/', priority: '1.0', changefreq: 'daily' }];

// Home
writePage('/', home.build());

// Infopagina's
for (const p of info.pages()) {
  writePage(p.slug, p.html);
  urls.push({ loc: `/${p.slug}/`, priority: p.priority || '0.7', changefreq: p.changefreq || 'monthly' });
}

// Bezorggebieden
writePage('bezorggebieden', areas.hubPage());
urls.push({ loc: '/bezorggebieden/', priority: '0.8', changefreq: 'weekly' });
for (const a of AREAS) {
  writePage(a.slug, areas.areaPage(a));
  urls.push({ loc: `/${a.slug}/`, priority: a.group === 'stadsdeel' ? '0.9' : '0.8', changefreq: 'weekly' });
}

// 404
write('404.html', info.notFound());

// Sitemap, robots, manifest, favicon, llms.txt, hosting config
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => `  <url>
    <loc>${C.SITE_URL}${u.loc}</loc>
    <lastmod>${C.LASTMOD}</lastmod>
${u.loc === '/' ? `
    <image:image><image:loc>${C.SITE_URL}/assets/img/og-lachgas-amsterdam.jpg</image:loc><image:title>Lachgas Amsterdam Direct</image:title></image:image>` : ''}
  </url>`).join('\n')}
</urlset>
`);

write('robots.txt', `User-agent: *
Allow: /
Disallow: /_build/

Sitemap: ${C.SITE_URL}/sitemap.xml
`);

write('site.webmanifest', JSON.stringify({
  name: `${C.BRAND} - Lachgas Amsterdam`, short_name: 'Lachgas A\'dam', description: 'Lachgas Amsterdam direct bezorgd: 24/7, binnen 20 minuten.',
  start_url: '/', display: 'browser', background_color: '#040912', theme_color: '#040912', lang: 'nl',
  icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }, { src: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any maskable' }],
}, null, 2));

write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="${C.BRAND}"><rect width="512" height="512" rx="96" fill="#040912"/><rect x="196" y="120" width="120" height="300" rx="40" fill="none" stroke="#ffd84a" stroke-width="26"/><rect x="226" y="80" width="60" height="44" rx="10" fill="#ffd84a"/><path d="M256 190v120M226 220l30-30 30 30" stroke="#ffd84a" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
`);

write('llms.txt', `# ${C.BRAND}

> Lachgas Amsterdam Direct bezorgt originele Fastgas lachgas cilinders (2000 gram N2O) in heel Amsterdam en omstreken: 24 uur per dag, 7 dagen per week, meestal binnen 20 minuten. Uitsluitend voor 18+ en voor toegestane toepassingen.

Contact: WhatsApp ${C.WA_DISPLAY}, e-mail ${C.EMAIL}.

## Belangrijkste pagina's
- [Lachgas Amsterdam](${C.SITE_URL}/): hoofdpagina, bezorging in alle stadsdelen
- [Lachgas bestellen Amsterdam](${C.SITE_URL}/lachgas-bestellen-amsterdam/)
- [Lachgas kopen Amsterdam](${C.SITE_URL}/lachgas-kopen-amsterdam/)
- [Lachgas bezorgen Amsterdam](${C.SITE_URL}/lachgas-bezorgen-amsterdam/)
- [Fastgas Amsterdam](${C.SITE_URL}/fastgas-amsterdam/)
- [Fastgas tank 2 kg](${C.SITE_URL}/fastgas-tank-2kg/)
- [Horeca en events](${C.SITE_URL}/lachgas-horeca-amsterdam/)
- [Werkwijze](${C.SITE_URL}/werkwijze/)
- [Veelgestelde vragen](${C.SITE_URL}/veelgestelde-vragen/)
- [Veilig gebruik](${C.SITE_URL}/veilig-gebruik-lachgas/)
- [Wetgeving lachgas](${C.SITE_URL}/wetgeving-lachgas/)

## Bezorggebieden
${AREAS.map((a) => `- [Lachgas ${a.name}](${C.SITE_URL}/${a.slug}/): binnen ${a.minutes} minuten`).join('\n')}
`);

write('vercel.json', JSON.stringify({
  trailingSlash: true,
  cleanUrls: false,
  redirects: [
    { source: '/:path*', has: [{ type: 'host', value: 'lachgasamsterdamdirect.nl' }], destination: 'https://www.lachgasamsterdamdirect.nl/:path*', permanent: true },
    { source: '/index.html', destination: '/', permanent: true },
  ],
  headers: [
    { source: '/(.*)', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    ] },
    { source: '/assets/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
  ],
}, null, 2));
write('.vercelignore', '_build\n.claude\n.htaccess\n.gitignore\n');

write('.htaccess', `Options -Indexes
DirectorySlash On
AddDefaultCharset utf-8
ErrorDocument 404 /404.html
RedirectMatch 404 ^/_build/
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  RewriteCond %{HTTP_HOST} ^lachgasamsterdamdirect\\.nl$ [NC]
  RewriteRule ^ https://www.lachgasamsterdamdirect.nl%{REQUEST_URI} [L,R=301]
</IfModule>
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  <FilesMatch "\\.(webp|jpg|png|svg|mp4|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json application/xml image/svg+xml
</IfModule>
`);

write(C.INDEXNOW_KEY + '.txt', C.INDEXNOW_KEY);

console.log(`Gebouwd: ${urls.length} pagina's + 404, sitemap, robots, manifest, favicon, llms.txt`);
