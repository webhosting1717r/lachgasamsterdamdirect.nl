'use strict';
// Gedeelde layout: head, menu, footer, scripts, schema-helpers.
const C = require('./config');
const AREAS = require('./areas');
const { BASE } = require('./styles');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const waLink = (text) => `https://wa.me/${C.WA_NUMBER}?text=${encodeURIComponent(text || C.WA_TEXT)}`;
const url = (p) => C.SITE_URL + (p === '/' ? '/' : `/${p.replace(/^\/|\/$/g, '')}/`);

const ICON = {
  phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 16.4V20a2 2 0 0 1-2.18 2A19.9 19.9 0 0 1 10.1 18.9 19.5 19.5 0 0 1 5.1 13.9 19.9 19.9 0 0 1 2 5.16 2 2 0 0 1 3.99 3h3.6a2 2 0 0 1 2 1.72c.12.91.34 1.81.67 2.66a2 2 0 0 1-.45 2.11L8.3 11a16 16 0 0 0 4.7 4.7l1.5-1.5a2 2 0 0 1 2.11-.45c.85.33 1.75.55 2.66.67A2 2 0 0 1 21 16.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.1.6 2.9.5a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.5-.3Z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 10.2V15.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="7.8" r="1.1" fill="currentColor"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5v5l3.2 2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 4.2-2.7 8.1-7 9.3-4.3-1.2-7-5.1-7-9.3V6l7-3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="11" r="2.2" stroke="currentColor" stroke-width="1.8"/></svg>',
  tank: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="7" y="6" width="10" height="15" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M10 6V3h4v3M9 10h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  euro: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 6.5A6.5 6.5 0 0 0 7.2 10M17 17.5A6.5 6.5 0 0 1 7.2 14M5 10.5h8M5 13.5h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V16A2.5 2.5 0 0 1 4 13.5v-7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  route: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 16.5c1.5-2.6 3.8-4.1 6.4-4.1h3.2c2.6 0 4.9-1.5 6.4-4.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M4 9.2h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  logo: '<svg viewBox="0 0 512 512" aria-hidden="true"><rect width="512" height="512" rx="96" fill="#040912"/><rect x="196" y="120" width="120" height="300" rx="40" fill="none" stroke="#ffd84a" stroke-width="26"/><rect x="226" y="80" width="60" height="44" rx="10" fill="#ffd84a"/><path d="M256 190v120M226 220l30-30 30 30" stroke="#ffd84a" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
};

const stadsdelen = AREAS.filter((a) => a.group === 'stadsdeel');
const regio = AREAS.filter((a) => a.group === 'regio');

function menu(current) {
  const li = (slug, label) => `<li><a href="/${slug}/"${current === slug ? ' aria-current="page"' : ''}>${esc(label)}</a></li>`;
  const a = (href, label) => `<a href="${href}"${current === href.replace(/\//g, '') ? ' aria-current="page"' : ''}>${esc(label)}</a>`;
  return `
<a class="brand-mini" href="/" aria-label="${esc(C.BRAND)} home">${ICON.logo}<span>Lachgas Amsterdam <b>Direct</b></span></a>
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-menu" aria-label="Open menu"><span></span></button>
<div class="menu-backdrop" id="menu-backdrop" aria-hidden="true"></div>
<nav class="menu-panel" id="main-menu" aria-label="Hoofdmenu">
  <div class="menu-header"><p class="menu-title">Menu</p><button class="menu-close" type="button" aria-label="Sluit menu">&times;</button></div>
  <div class="menu-links">
    ${a('/', 'Lachgas Amsterdam')}
    ${a('/lachgas-bestellen-amsterdam/', 'Lachgas bestellen')}
    ${a('/fastgas-tank-2kg/', 'Fastgas tank 2 kg')}
    <div class="menu-group" id="areas-group">
      <button class="menu-subtoggle" type="button" aria-expanded="false" aria-controls="areas-list">Bezorggebieden</button>
      <ul class="menu-submenu" id="areas-list">
        ${li('bezorggebieden', 'Alle bezorggebieden')}
        ${li('lachgas-bezorgen-amsterdam', 'Lachgas bezorgen Amsterdam')}
        ${stadsdelen.map((s) => li(s.slug, s.name)).join('')}
        ${regio.map((s) => li(s.slug, s.name)).join('')}
      </ul>
    </div>
    ${a('/lachgas-horeca-amsterdam/', 'Horeca en events')}
    ${a('/werkwijze/', 'Werkwijze')}
    ${a('/veelgestelde-vragen/', 'Veelgestelde vragen')}
    ${a('/veilig-gebruik-lachgas/', 'Veilig gebruik')}
    ${a('/wetgeving-lachgas/', 'Wetgeving lachgas')}
    ${a('/over-ons/', 'Over ons')}
    ${a('/contact/', 'Contact')}
    <div class="menu-contact">
      <a href="tel:${C.PHONE_TEL}">${ICON.phone}Bel ${esc(C.PHONE_DISPLAY)}</a>
      <a class="wa" href="${waLink()}" rel="noopener">${ICON.wa}WhatsApp ${esc(C.WA_DISPLAY)}</a>
    </div>
    <a class="menu-brand-fill" href="/" aria-label="Lachgas Amsterdam Direct home"><span>LACHGAS</span><span>AMSTERDAM</span><span>DIRECT</span></a>
  </div>
</nav>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="footer-wrap">
    <section>
      <div class="footer-brand">Lachgas Amsterdam <b>Direct</b></div>
      <p class="footer-meta"><span class="kw">Lachgas Amsterdam</span> direct aan huis: originele Fastgas cilinders van 2000 gram, 24 uur per dag, 7 dagen per week, binnen 20 minuten bezorgd in heel Amsterdam en omstreken. Alleen voor 18+.</p>
      <ul class="footer-list" style="margin-top:12px">
        <li><a href="tel:${C.PHONE_TEL}">Bel ${esc(C.PHONE_DISPLAY)}</a></li>
        <li><a href="${waLink()}" rel="noopener">WhatsApp ${esc(C.WA_DISPLAY)}</a></li>
        <li><a href="mailto:${C.EMAIL}">${C.EMAIL}</a></li>
        <li class="footer-note">24/7 bereikbaar, ook op feestdagen</li>
      </ul>
    </section>
    <section>
      <h2 class="footer-title">Stadsdelen Amsterdam</h2>
      <ul class="footer-list">${stadsdelen.map((s) => `<li><a href="/${s.slug}/">Lachgas ${esc(s.name)}</a></li>`).join('')}</ul>
    </section>
    <section>
      <h2 class="footer-title">Regio Amsterdam</h2>
      <ul class="footer-list">${regio.map((s) => `<li><a href="/${s.slug}/">Lachgas ${esc(s.short)}</a></li>`).join('')}</ul>
    </section>
    <section>
      <h2 class="footer-title">Informatie</h2>
      <ul class="footer-list">
        <li><a href="/">Lachgas Amsterdam</a></li>
        <li><a href="/lachgas-bestellen-amsterdam/">Lachgas bestellen Amsterdam</a></li>
        <li><a href="/lachgas-kopen-amsterdam/">Lachgas kopen Amsterdam</a></li>
        <li><a href="/lachgas-bezorgen-amsterdam/">Lachgas bezorgen Amsterdam</a></li>
        <li><a href="/fastgas-amsterdam/">Fastgas Amsterdam</a></li>
        <li><a href="/fastgas-tank-2kg/">Fastgas tank 2 kg</a></li>
        <li><a href="/lachgas-horeca-amsterdam/">Horeca en events</a></li>
        <li><a href="/bezorggebieden/">Bezorggebieden</a></li>
        <li><a href="/werkwijze/">Werkwijze</a></li>
        <li><a href="/veelgestelde-vragen/">Veelgestelde vragen</a></li>
        <li><a href="/veilig-gebruik-lachgas/">Veilig gebruik</a></li>
        <li><a href="/wetgeving-lachgas/">Wetgeving lachgas</a></li>
        <li><a href="/over-ons/">Over ons</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/voorwaarden/">Algemene voorwaarden</a></li>
        <li><a href="/privacy/">Privacy</a></li>
      </ul>
    </section>
  </div>
  <div class="footer-bottom"><span>&copy; ${C.YEAR} ${esc(C.BRAND)}. Alle rechten voorbehouden.</span><span>Discreet bezorgd in Amsterdam en omstreken. Verkoop uitsluitend aan 18+.</span></div>
</footer>
<a class="wa-float" href="${waLink()}" rel="noopener" aria-label="Bestel lachgas via WhatsApp">${ICON.wa}<span>WhatsApp bestellen</span></a>`;
}

function ageGate() {
  return `
<div class="age-gate is-hidden" id="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title" hidden>
  <div class="age-gate__card">
    <h2 class="age-gate__title" id="age-gate-title">18+ verificatie</h2>
    <p class="age-gate__text">Lachgas Amsterdam Direct levert uitsluitend aan personen van 18 jaar en ouder. Bevestig je leeftijd om verder te gaan.</p>
    <div class="age-gate__actions">
      <button class="age-gate__btn age-gate__btn--confirm" id="age-confirm" type="button">Ja, ik ben 18 jaar of ouder</button>
      <button class="age-gate__btn" id="age-decline" type="button">Nee, ik ben jonger dan 18</button>
    </div>
  </div>
</div>`;
}

const SCRIPT = `
(()=>{const b=document.body,g=document.getElementById("age-gate"),k="lad_age_ok";let ok=false;
if(document.querySelector(".hero-copy")){b.classList.add("pre");requestAnimationFrame(()=>requestAnimationFrame(()=>b.classList.remove("pre")));
document.querySelectorAll(".hero-copy,.cta-stack").forEach(el=>el.addEventListener("transitionend",()=>{el.style.willChange="transform";requestAnimationFrame(()=>{el.style.willChange=""})},{once:true}))}try{ok=localStorage.getItem(k)==="1"}catch(e){}
if(g&&!ok){g.hidden=false;g.classList.remove("is-hidden");b.classList.add("age-gate-open");
document.getElementById("age-confirm").addEventListener("click",()=>{try{localStorage.setItem(k,"1")}catch(e){}g.classList.add("is-hidden");g.hidden=true;b.classList.remove("age-gate-open")});
document.getElementById("age-decline").addEventListener("click",()=>{location.href="https://www.google.nl"})}
const t=document.querySelector(".menu-toggle"),m=document.getElementById("main-menu"),bd=document.getElementById("menu-backdrop"),c=document.querySelector(".menu-close"),ag=document.getElementById("areas-group");if(!t||!m)return;
const items=m.querySelectorAll(".menu-links > *");
const open=()=>{items.forEach((el,i)=>el.style.setProperty("--stagger-delay",(90+i*55)+"ms"));b.classList.add("menu-open");t.setAttribute("aria-expanded","true")};
const close=()=>{b.classList.remove("menu-open");t.setAttribute("aria-expanded","false")};
t.addEventListener("click",()=>b.classList.contains("menu-open")?close():open());c.addEventListener("click",close);bd.addEventListener("click",close);
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
if(ag){const st=ag.querySelector(".menu-subtoggle");st.addEventListener("click",()=>{const o=ag.classList.toggle("open");st.setAttribute("aria-expanded",o?"true":"false")});if(ag.querySelector('a[aria-current="page"]')){ag.classList.add("open");st.setAttribute("aria-expanded","true")}}
const v=document.querySelector(".bg-top-video");if(v){const p=v.play&&v.play();if(p&&p.catch)p.catch(()=>{})}
})();`;

function head({ title, description, path, ogImage, schema, extraHead = '', robots }) {
  const canonical = url(path);
  const img = ogImage || `${C.SITE_URL}/assets/img/og-lachgas-amsterdam.jpg`;
  return `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">
<link rel="canonical" href="${canonical}">
<meta name="author" content="${esc(C.BRAND)}">
<meta name="theme-color" content="#040912">
<meta name="format-detection" content="telephone=yes">
<meta name="geo.region" content="NL-NH">
<meta name="geo.placename" content="Amsterdam">
<meta name="geo.position" content="${C.GEO.lat};${C.GEO.lng}">
<meta name="ICBM" content="${C.GEO.lat}, ${C.GEO.lng}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(C.BRAND)}">
<meta property="og:locale" content="nl_NL">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Fastgas lachgas cilinder, bezorgd in Amsterdam door Lachgas Amsterdam Direct">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
${extraHead}
<style>${BASE}</style>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>`;
}

// ---- Schema bouwstenen ----
const ORG_ID = `${C.SITE_URL}/#organization`;
const SITE_ID = `${C.SITE_URL}/#website`;
const LB_ID = `${C.SITE_URL}/#localbusiness`;

function orgNodes() {
  return [
    {
      '@type': 'Organization', '@id': ORG_ID, name: C.BRAND, url: `${C.SITE_URL}/`,
      alternateName: ['Lachgas Amsterdam', 'Lachgas Amsterdam Direct', 'LachgasAmsterdamDirect.nl'],
      logo: { '@type': 'ImageObject', url: `${C.SITE_URL}/assets/img/apple-touch-icon.png`, width: 180, height: 180 },
      image: `${C.SITE_URL}/assets/img/og-lachgas-amsterdam.jpg`,
      email: C.EMAIL, telephone: C.PHONE_TEL,
      sameAs: [`https://wa.me/${C.WA_NUMBER}`],
      contactPoint: [{ '@type': 'ContactPoint', telephone: C.PHONE_TEL, contactType: 'sales', areaServed: 'NL', availableLanguage: ['nl', 'en'], hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' } }],
    },
    { '@type': 'WebSite', '@id': SITE_ID, url: `${C.SITE_URL}/`, name: C.BRAND, inLanguage: 'nl-NL', publisher: { '@id': ORG_ID } },
    {
      '@type': 'LocalBusiness', '@id': LB_ID, name: C.BRAND, url: `${C.SITE_URL}/`, telephone: C.PHONE_TEL, email: C.EMAIL,
      image: `${C.SITE_URL}/assets/img/og-lachgas-amsterdam.jpg`, priceRange: '€€', currenciesAccepted: 'EUR', paymentAccepted: 'Pin, contant, factuur',
      description: 'Lachgas Amsterdam Direct bezorgt originele Fastgas lachgas cilinders van 2000 gram in heel Amsterdam en omstreken: 24/7, binnen 20 minuten, uitsluitend aan 18+.',
      address: { '@type': 'PostalAddress', addressLocality: 'Amsterdam', addressRegion: 'Noord-Holland', addressCountry: 'NL' },
      geo: { '@type': 'GeoCoordinates', latitude: C.GEO.lat, longitude: C.GEO.lng },
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
      areaServed: [{ '@type': 'City', name: 'Amsterdam' }].concat(AREAS.map((a) => ({ '@type': 'Place', name: a.name }))),
      parentOrganization: { '@id': ORG_ID },
      slogan: 'Lachgas Amsterdam, direct bezorgd.',
    },
  ];
}

function webPage(path, title, description, extra = {}) {
  return Object.assign({ '@type': 'WebPage', '@id': `${url(path)}#webpage`, url: url(path), name: title, description, inLanguage: 'nl-NL', isPartOf: { '@id': SITE_ID }, about: { '@id': LB_ID }, dateModified: C.LASTMOD }, extra);
}

function breadcrumb(items) {
  return { '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it[0], item: url(it[1]) })) };
}

function faqSchema(faq) {
  return { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

function faqHtml(faq) {
  return `<div class="faq-list">${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
}

function crumbsHtml(items) {
  return `<nav aria-label="Kruimelpad"><ol class="crumbs">${items.map((it, i) => i === items.length - 1 ? `<li aria-current="page">${esc(it[0])}</li>` : `<li><a href="${it[1] === '/' ? '/' : `/${it[1]}/`}">${esc(it[0])}</a></li>`).join('')}</ol></nav>`;
}

function ctaButtons(waText) {
  return `<div class="btn-row"><a class="btn btn--wa" href="${waLink(waText)}" rel="noopener">${ICON.wa}Bestel via WhatsApp</a><a class="btn" href="tel:${C.PHONE_TEL}">${ICON.phone}Bel ${esc(C.PHONE_DISPLAY)}</a></div>`;
}

function ctaBox(title, text, waText) {
  return `<section class="box box--accent cta-box" aria-labelledby="cta-h"><h2 class="h2" id="cta-h">${esc(title)}</h2><p class="txt">${text}</p><p style="margin-top:12px"><a class="tel-big" href="tel:${C.PHONE_TEL}">${esc(C.PHONE_DISPLAY)}</a></p>${ctaButtons(waText).replace('btn-row', 'btn-row" style="justify-content:center')}<p class="note">Dag en nacht bereikbaar. Uitsluitend 18+. Legitimatie kan worden gevraagd.</p></section>`;
}

function backdrop() {
  return `<div class="backdrop" aria-hidden="true"><img src="/assets/img/scene-ext-960.webp" srcset="/assets/img/scene-ext-960.webp 960w, /assets/img/scene-ext-1536.webp 1536w" sizes="100vw" alt="" width="1536" height="1024" decoding="async" fetchpriority="low"></div>`;
}

function page({ slug, title, description, h1, eyebrow, lead, crumbs, body, faq, schemaExtra = [], ogImage, waText }) {
  const path = slug;
  const graph = orgNodes().concat([webPage(path, title, description, { breadcrumb: { '@id': `${url(path)}#breadcrumb` } }), Object.assign(breadcrumb(crumbs), { '@id': `${url(path)}#breadcrumb` })]).concat(faq ? [faqSchema(faq)] : []).concat(schemaExtra);
  const schema = { '@context': 'https://schema.org', '@graph': graph };
  return `${head({ title, description, path, ogImage, schema })}
<body>
<a class="skip" href="#main">Naar de inhoud</a>
${ageGate()}
${menu(slug)}
${backdrop()}
<main class="page" id="main">
  <header class="box">
    ${crumbsHtml(crumbs)}
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h1>${h1}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
    ${ctaButtons(waText)}
  </header>
  ${body}
  ${faq ? `<section class="box" aria-labelledby="faq-h"><h2 class="h2" id="faq-h">Veelgestelde vragen</h2>${faqHtml(faq)}</section>` : ''}
  ${ctaBox('Direct lachgas bestellen in Amsterdam', 'Stuur je adres via WhatsApp of bel. Je krijgt direct de prijs en de bezorgtijd, en de koerier vertrekt meteen.', waText)}
</main>
${footer()}
<script>${SCRIPT}</script>
</body>
</html>`;
}

module.exports = { esc, waLink, url, ICON, menu, footer, ageGate, SCRIPT, head, orgNodes, webPage, breadcrumb, faqSchema, faqHtml, crumbsHtml, ctaButtons, ctaBox, backdrop, page, stadsdelen, regio, ORG_ID, SITE_ID, LB_ID };
