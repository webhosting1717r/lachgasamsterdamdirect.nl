'use strict';
// Homepage: zoekterm "lachgas amsterdam". Hero in fastgas2go-stijl, daaronder volledige SEO-structuur.
const C = require('./config');
const S = require('./shell');
const { esc, ICON, waLink } = S;

const TITLE = 'Lachgas Amsterdam | Direct bezorgd binnen 20 minuten, 24/7';
const DESC = 'Lachgas Amsterdam direct aan huis: originele Fastgas 2000 g, 24/7 binnen 20 minuten bezorgd in elk stadsdeel. Bestel via WhatsApp of bel. 18+.';

const FAQ = [
  ['Hoe snel wordt lachgas in Amsterdam bezorgd?', 'In de meeste stadsdelen van Amsterdam staat onze koerier binnen 20 minuten voor de deur. Je krijgt bij je bestelling via WhatsApp direct de verwachte bezorgtijd voor jouw adres.'],
  ['Is Lachgas Amsterdam Direct 24 uur per dag bereikbaar?', 'Ja. We zijn 24 uur per dag en 7 dagen per week bereikbaar via WhatsApp en telefoon, ook in de nacht, in het weekend en op feestdagen.'],
  ['In welke delen van Amsterdam bezorgen jullie lachgas?', 'In alle stadsdelen: Centrum, Noord, Oost, West, Zuid, Zuidoost, Nieuw-West en Weesp. Daarnaast in Amstelveen, Diemen, Duivendrecht, Badhoevedorp, Hoofddorp, Haarlem, Zaandam, Almere, Purmerend en Aalsmeer.'],
  ['Welk product leveren jullie?', 'Originele Fastgas lachgas cilinders van 2000 gram (N2O), verzegeld, met drukregelaar die op elke standaard slagroomspuit past. Eén cilinder staat gelijk aan ongeveer 250 patronen van 8 gram.'],
  ['Hoe bestel ik lachgas in Amsterdam?', 'Stuur je adres en het gewenste aantal cilinders via WhatsApp of bel ons. Je ontvangt direct een bevestiging met prijs en bezorgtijd, en de koerier vertrekt meteen.'],
  ['Hoe kan ik betalen?', 'Met pin of contant aan de deur. Bedrijven en horeca kunnen op factuur bestellen.'],
  ['Wat is de minimumleeftijd?', 'We leveren uitsluitend aan personen van 18 jaar en ouder. De koerier kan om legitimatie vragen en levert niet aan minderjarigen.'],
  ['Wat kost lachgas bezorgen in Amsterdam?', 'Je krijgt bij je bestelling direct een totaalprijs inclusief bezorging voor jouw adres. Geen verrassingen aan de deur; in heel Amsterdam geldt hetzelfde tarief.'],
];

function hero() {
  return `
<div class="bg">
  <div class="scene-top">
    <video class="bg-top-video" autoplay muted loop playsinline preload="auto" poster="/assets/img/scene-top-960.webp" disablepictureinpicture aria-label="Fastgas lachgas cilinder in een automaat, lachgas Amsterdam bezorgd door Lachgas Amsterdam Direct" tabindex="-1">
      <source src="/assets/video/hero-lachgas-amsterdam.mp4" type="video/mp4">
    </video>
  </div>
  <div class="scene-bottom">
    <picture>
      <source type="image/webp" srcset="/assets/img/scene-bottom-960.webp 960w, /assets/img/scene-bottom-1536.webp 1536w" sizes="100vw">
      <img class="scene-img" src="/assets/img/scene-bottom-1536.jpg" width="1536" height="1024" alt="" fetchpriority="high" decoding="async">
    </picture>
  </div>
  <div class="seam-merge" aria-hidden="true"></div>
  <div class="hero-copy">
    <h1 class="hero-title"><span class="hero-chip hero-chip--title">Lachgas Amsterdam <span class="go">Direct</span></span></h1>
    <p class="hero-sub"><span class="hero-chip">Lachgas Amsterdam, direct bezorgd.</span><br><span class="hero-chip">Binnen 20 minuten. Dag en nacht.</span></p>
    <ul class="hero-usps">
      <li><span class="hero-chip">24/7 bereikbaar via WhatsApp</span></li>
      <li><span class="hero-chip">Originele Fastgas 2000 gram</span></li>
      <li><span class="hero-chip">Alle stadsdelen van Amsterdam</span></li>
    </ul>
    <div class="hero-desktop-extra">
      <p>Lachgas Amsterdam Direct bezorgt originele Fastgas cilinders in heel Amsterdam en omstreken: snel, discreet en 24 uur per dag. Van <span class="kw">lachgas bestellen</span> tot <span class="kw">lachgas bezorgen</span>, voor horeca, events en thuis (18+).</p>
      <ul>
        <li><span class="hero-chip">Eigen koeriers, eigen voorraad in Amsterdam</span></li>
        <li><span class="hero-chip">Direct contact via WhatsApp of telefoon</span></li>
        <li><span class="hero-chip">Pin, contant of op factuur</span></li>
        <li><span class="hero-chip">Centrum, Noord, Oost, West, Zuid, Zuidoost, Nieuw-West</span></li>
      </ul>
    </div>
  </div>
  <div class="cta-stack">
    <a class="cta cta--call" href="tel:${C.PHONE_TEL}" aria-label="Bel Lachgas Amsterdam Direct">${ICON.phone.replace('<svg', '<svg class="cta__icon"')}<span class="cta__label">Bel ${esc(C.PHONE_DISPLAY)}</span></a>
    <a class="cta cta--wa" href="${waLink()}" rel="noopener" aria-label="Bestel via WhatsApp">${ICON.wa.replace('<svg', '<svg class="cta__icon"')}<span class="cta__label">WhatsApp bestellen</span></a>
    <a class="cta cta--info" href="/lachgas-bestellen-amsterdam/" aria-label="Zo bestel je lachgas in Amsterdam">${ICON.info.replace('<svg', '<svg class="cta__icon"')}<span class="cta__label">Zo werkt bestellen</span></a>
  </div>
  <a class="scroll-hint" href="#intro" aria-label="Scroll naar informatie over lachgas Amsterdam">Meer<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
</div>`;
}

function infoBox(icon, title, text) {
  return `<article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${icon}</span><h3 class="h3">${esc(title)}</h3></div><p class="txt">${text}</p></article>`;
}

function body() {
  const sd = S.stadsdelen;
  const rg = S.regio;
  return `
<main class="page page--home" id="main">
  <section class="box" id="intro" aria-labelledby="intro-h">
    <p class="eyebrow">Lachgas Amsterdam Direct</p>
    <h2 class="h2" id="intro-h">Lachgas Amsterdam: binnen 20 minuten aan de deur, 24 uur per dag</h2>
    <p class="txt">Zoek je <strong>lachgas in Amsterdam</strong>? Lachgas Amsterdam Direct is de bezorgservice voor de hele stad. Wij leveren uitsluitend de <a href="/fastgas-tank-2kg/">originele Fastgas cilinder van 2000 gram</a>: verzegeld, getest en voorzien van een drukregelaar die op elke standaard slagroomspuit past. Onze koeriers vertrekken vanuit eigen voorraad in Amsterdam, waardoor we in Centrum, Noord, Oost, West, Zuid, Zuidoost en Nieuw-West meestal binnen 20 minuten voor de deur staan. Ook ’s nachts, in het weekend en op feestdagen.</p>
    <p class="txt">Bestellen gaat zonder webshop of account: je stuurt je adres via WhatsApp of belt, krijgt direct de prijs en bezorgtijd, en betaalt met pin of contant aan de deur. Horeca, cateraars en evenementenlocaties kunnen op factuur bestellen. We leveren alleen aan personen van 18 jaar en ouder.</p>
    <ul class="chips" aria-label="Kernpunten">
      <li class="chip--y">Binnen 20 minuten</li><li>24/7, ook feestdagen</li><li>Originele Fastgas 2000 g</li><li>Heel Amsterdam + regio</li><li>Pin, contant, factuur</li><li>Alleen 18+</li>
    </ul>
  </section>

  <section class="box" aria-labelledby="order-h">
    <h2 class="h2" id="order-h">Lachgas bestellen in Amsterdam: drie stappen</h2>
    <ol class="steps">
      <li><strong>App of bel</strong>Stuur je adres, het aantal cilinders en een telefoonnummer via <a href="${waLink()}" rel="noopener">WhatsApp</a>, of bel <a href="tel:${C.PHONE_TEL}">${esc(C.PHONE_DISPLAY)}</a>.</li>
      <li><strong>Bevestiging met prijs en tijd</strong>Je krijgt direct een totaalprijs inclusief bezorging en de verwachte aankomsttijd voor jouw stadsdeel.</li>
      <li><strong>Koerier aan de deur</strong>Meestal binnen 20 minuten. Je controleert samen het zegel en betaalt met pin of contant. Klaar.</li>
    </ol>
    <div class="btn-row"><a class="btn btn--wa" href="${waLink()}" rel="noopener">${ICON.wa}Bestel via WhatsApp</a><a class="btn btn--y" href="/lachgas-bestellen-amsterdam/">${ICON.info}Alles over bestellen</a></div>
  </section>

  <section class="box" aria-labelledby="product-h">
    <div>
      <div>
        <p class="eyebrow">Het product</p>
        <h2 class="h2" id="product-h">Fastgas cilinder 2000 gram: één tank, de hele avond</h2>
        <p class="txt">We bezorgen in Amsterdam uitsluitend het originele Fastgas merk. Eén cilinder van 2000 gram vervangt ongeveer 250 patronen van 8 gram: minder wisselen, minder afval en tot 60 procent lagere gaskosten dan losse patronen. Elke cilinder is verzegeld en getest, met een lekvrij ventiel en 99,9 procent zuivere N2O. De meegeleverde drukregelaar past op elke standaard slagroomspuit.</p>
        <ul class="spec">
          <li><b>2000 g</b>inhoud per cilinder</li>
          <li><b>&plusmn; 250</b>vullingen van 8 g</li>
          <li><b>165 bar</b>getest en verzegeld</li>
          <li><b>99,9%</b>zuivere N2O</li>
        </ul>
        <div class="btn-row"><a class="btn btn--y" href="/fastgas-tank-2kg/">${ICON.tank}Specificaties Fastgas tank</a><a class="btn" href="/fastgas-amsterdam/">${ICON.route}Fastgas Amsterdam</a></div>
      </div>
    </div>
  </section>

  <section class="box" aria-labelledby="areas-h">
    <p class="eyebrow">Bezorggebied</p>
    <h2 class="h2" id="areas-h">Lachgas bezorgen in elk stadsdeel van Amsterdam</h2>
    <p class="txt">Elke wijk, dezelfde 20 minuten. Kies je stadsdeel voor bezorgtijden, buurten en veelgestelde vragen over lachgas in jouw deel van Amsterdam.</p>
    <ul class="area-grid" style="margin-top:14px">${sd.map((a) => `<li><a href="/${a.slug}/">Lachgas ${esc(a.name)}<small>${esc(a.buurten.slice(0, 3).join(', '))}</small></a></li>`).join('')}</ul>
    <h3 class="h3" style="margin-top:18px">Ook rond Amsterdam</h3>
    <ul class="chips">${rg.map((a) => `<li><a href="/${a.slug}/" style="text-decoration:none;color:inherit">${esc(a.short)}</a></li>`).join('')}</ul>
    <div class="btn-row"><a class="btn" href="/bezorggebieden/">${ICON.pin}Alle bezorggebieden</a><a class="btn" href="/lachgas-bezorgen-amsterdam/">${ICON.route}Lachgas bezorgen Amsterdam</a></div>
  </section>

  <section aria-labelledby="why-h">
    <div class="box" style="margin-bottom:14px"><h2 class="h2" id="why-h">Waarom Amsterdam voor Lachgas Amsterdam Direct kiest</h2><p class="txt">Geen webshop die morgen levert, maar een koerier die nu vertrekt. Dit is wat je van ons mag verwachten.</p></div>
    <div class="grid grid--4">
      ${infoBox(ICON.bolt, 'Binnen 20 minuten', 'Eigen voorraad in Amsterdam en koeriers die de stad kennen. In de meeste stadsdelen staan we binnen 20 minuten voor de deur.')}
      ${infoBox(ICON.clock, 'Dag en nacht', '24 uur per dag, 7 dagen per week bereikbaar. Ook na middernacht, op zondag en op feestdagen rijden we gewoon.')}
      ${infoBox(ICON.shield, 'Origineel en verzegeld', 'Alleen het originele Fastgas merk, verzegeld en getest. Geen hervulde of naamloze cilinders.')}
      ${infoBox(ICON.chat, 'Persoonlijk contact', 'Je appt of belt met een mens, geen chatbot. Directe bevestiging met prijs en bezorgtijd.')}
      ${infoBox(ICON.euro, 'Eerlijke prijs', 'Eén totaalprijs inclusief bezorging, vooraf bevestigd. Pin, contant of op factuur voor bedrijven.')}
      ${infoBox(ICON.pin, 'Heel Amsterdam en regio', 'Alle stadsdelen plus Amstelveen, Diemen, Zaandam, Haarlem, Hoofddorp, Almere en Purmerend.')}
      ${infoBox(ICON.route, 'Discreet bezorgd', 'Neutrale koeriers, geen opvallende verpakking. De koerier belt vlak voor aankomst.')}
      ${infoBox(ICON.check, 'Verantwoord', 'Uitsluitend 18+, legitimatie op verzoek, duidelijke instructies voor veilig bewaren en gebruik.')}
    </div>
  </section>

  <section class="box" aria-labelledby="who-h">
    <h2 class="h2" id="who-h">Voor wie bezorgen we lachgas in Amsterdam?</h2>
    <div class="grid grid--3" style="margin-top:12px">
      <article><h3 class="h3">Horeca en catering</h3><p class="txt">Restaurants, cocktailbars, hotels en cateraars die midden in de service een lege cilinder willen vervangen. Vaste aanspreekpunten en levering op factuur. <a href="/lachgas-horeca-amsterdam/">Lees meer over horeca</a>.</p></article>
      <article><h3 class="h3">Events en locaties</h3><p class="txt">Festivals, bedrijfsfeesten, boten en evenementenlocaties van de NDSM-werf tot de ArenA. Grotere aantallen op afspraak, bezorgd tot aan het afgesproken punt.</p></article>
      <article><h3 class="h3">Thuis (18+)</h3><p class="txt">Een verjaardag in De Pijp of een avond in Oost: we bezorgen aan huis in heel Amsterdam. Een volwassene neemt de bestelling in ontvangst en de koerier belt vlak voor aankomst.</p></article>
    </div>
  </section>

  <section class="grid" aria-label="Veiligheid en wetgeving">
    <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.shield}</span><h2 class="h3">Veilig bewaren en gebruiken</h2></div><p class="txt">Bewaar een cilinder rechtop, droog en koel, buiten bereik van kinderen en weg van warmtebronnen. Gebruik altijd de drukregelaar en nooit direct uit de cilinder. Lees onze pagina over <a href="/veilig-gebruik-lachgas/">veilig gebruik van lachgas</a> voordat je bestelt.</p></article>
    <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.info}</span><h2 class="h3">Wetgeving lachgas in Nederland</h2></div><p class="txt">Sinds 1 januari 2023 staat lachgas op lijst II van de Opiumwet, met uitzonderingen voor technisch, medisch en culinair gebruik. Wij leveren uitsluitend aan 18+ en alleen voor toegestane toepassingen. Lees wat dat betekent op onze pagina <a href="/wetgeving-lachgas/">wetgeving lachgas</a>.</p></article>
  </section>

  <section class="box" aria-labelledby="faq-h">
    <h2 class="h2" id="faq-h">Veelgestelde vragen over lachgas in Amsterdam</h2>
    ${S.faqHtml(FAQ)}
    <p class="note">Meer vragen? Bekijk <a href="/veelgestelde-vragen/">alle veelgestelde vragen</a> of stuur een bericht via WhatsApp.</p>
  </section>

  <section class="box" aria-labelledby="about-h">
    <h2 class="h2" id="about-h">Lachgas Amsterdam Direct: lokaal, snel en eerlijk</h2>
    <p class="txt">Lachgas Amsterdam Direct is opgezet door koeriers uit Amsterdam die al jaren lachgas bezorgen in de stad. We werken vanuit eigen voorraad, met eigen mensen en vaste routes door alle stadsdelen. Daardoor kunnen we een bezorgtijd beloven die we ook waarmaken: binnen 20 minuten in het grootste deel van Amsterdam, 24 uur per dag. Lees meer <a href="/over-ons/">over ons</a> of bekijk onze <a href="/werkwijze/">werkwijze</a>.</p>
  </section>

  ${S.ctaBox('Lachgas Amsterdam nodig? Bestel direct.', 'Stuur je adres via WhatsApp of bel. Binnen een minuut weet je de prijs en de bezorgtijd en vertrekt de koerier.')}
</main>`;
}

function build() {
  const graph = S.orgNodes().concat([
    S.webPage('/', TITLE, DESC, { primaryImageOfPage: { '@type': 'ImageObject', url: `${C.SITE_URL}/assets/img/og-lachgas-amsterdam.jpg` } }),
    S.faqSchema(FAQ),
    {
      '@type': 'Service', '@id': `${C.SITE_URL}/#service`, name: 'Lachgas bezorgen Amsterdam', serviceType: 'Lachgas bezorgservice',
      provider: { '@id': S.LB_ID }, areaServed: { '@type': 'City', name: 'Amsterdam' },
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${C.SITE_URL}/lachgas-bestellen-amsterdam/`, servicePhone: { '@type': 'ContactPoint', telephone: C.PHONE_TEL } },
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'EUR', itemOffered: { '@id': `${C.SITE_URL}/fastgas-tank-2kg/#product` } },
    },
    {
      '@type': 'Product', '@id': `${C.SITE_URL}/fastgas-tank-2kg/#product`, name: 'Fastgas lachgas cilinder 2000 gram', brand: { '@type': 'Brand', name: 'Fastgas' },
      image: `${C.SITE_URL}/assets/img/fastgas-cilinder-amsterdam.jpg`, url: `${C.SITE_URL}/fastgas-tank-2kg/`,
      description: 'Originele Fastgas N2O cilinder van 2000 gram met drukregelaar, verzegeld en getest. Gelijk aan ongeveer 250 patronen van 8 gram.',
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'EUR', seller: { '@id': S.LB_ID }, areaServed: { '@type': 'City', name: 'Amsterdam' } },
    },
    { '@type': 'ItemList', name: 'Bezorggebieden lachgas Amsterdam', itemListElement: require('./areas').map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: `Lachgas ${a.name}`, url: `${C.SITE_URL}/${a.slug}/` })) },
  ]);
  const schema = { '@context': 'https://schema.org', '@graph': graph };
  const extraHead = `<link rel="preload" as="image" href="/assets/img/scene-bottom-960.webp" imagesrcset="/assets/img/scene-bottom-960.webp 960w, /assets/img/scene-bottom-1536.webp 1536w" imagesizes="100vw" fetchpriority="high">`;
  return `${S.head({ title: TITLE, description: DESC, path: '/', schema, extraHead })}
<body>
<a class="skip" href="#intro">Naar de inhoud</a>
${S.ageGate()}
${S.menu('')}
${hero()}
${body()}
${S.footer()}
<script>${S.SCRIPT}</script>
</body>
</html>`;
}

module.exports = { build };
