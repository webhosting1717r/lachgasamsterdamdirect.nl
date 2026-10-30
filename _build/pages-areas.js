'use strict';
// Gebiedspagina's (stadsdelen + regio) en de hub /bezorggebieden/
const C = require('./config');
const S = require('./shell');
const AREAS = require('./areas');
const { esc, ICON, waLink } = S;

const byslug = Object.fromEntries(AREAS.map((a) => [a.slug, a]));

function areaPage(a) {
  const isSD = a.group === 'stadsdeel';
  const tname = a.name.length > 22 ? a.short : a.name;
  const title = `Lachgas ${tname} | Binnen ${a.minutes} min bezorgd, 24/7`;
  const description = `Lachgas ${tname} direct bezorgd: originele Fastgas 2000 g, 24/7 binnen ${a.minutes} minuten in ${a.buurten.slice(0, 2).join(', ')} en heel ${a.short}. Pin of contant. 18+.`;
  const waText = `Hoi, ik wil lachgas bestellen in ${a.name}. Adres: `;
  const faq = a.faq.concat([
    [`Welk lachgas leveren jullie in ${a.name}?`, 'Uitsluitend de originele Fastgas cilinder van 2000 gram N2O, verzegeld en getest, met drukregelaar voor elke standaard slagroomspuit. Eén cilinder staat gelijk aan ongeveer 250 patronen van 8 gram.'],
    [`Hoe betaal ik in ${a.short}?`, 'Met pin of contant aan de deur. Horeca en bedrijven kunnen op factuur bestellen. Je krijgt de totaalprijs inclusief bezorging vooraf via WhatsApp bevestigd.'],
    ['Wat is de minimumleeftijd?', 'We leveren alleen aan personen van 18 jaar en ouder. De koerier kan om legitimatie vragen.'],
  ]);
  const nearby = a.nearby.map((s) => byslug[s]).filter(Boolean);
  const crumbs = [['Lachgas Amsterdam', '/'], ['Bezorggebieden', 'bezorggebieden'], [a.name, a.slug]];
  const body = `
<section class="box" aria-labelledby="intro-h">
  <h2 class="h2" id="intro-h">Lachgas bezorgen in ${esc(a.name)}: zo werkt het bij ons</h2>
  <p class="txt">${esc(a.intro)}</p>
  <p class="txt">${esc(a.delivery)}</p>
  <ul class="chips" aria-label="Kernpunten ${esc(a.name)}"><li class="chip--y">Binnen ${esc(a.minutes)} minuten</li><li>24 uur per dag</li><li>Fastgas 2000 g</li><li>Pin, contant, factuur</li><li>18+</li></ul>
</section>

<section class="box" aria-labelledby="buurten-h">
  <h2 class="h2" id="buurten-h">Buurten in ${esc(a.name)} waar we lachgas bezorgen</h2>
  <p class="txt">We bezorgen in heel ${esc(a.name)}, onder andere rond ${esc(a.landmarks)}. Buurten en plaatsen die we dagelijks rijden:</p>
  <ul class="chips">${a.buurten.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
  <p class="note">Staat je buurt er niet bij? App je adres, in vrijwel alle gevallen rijden we gewoon door. ${esc(a.extra)}</p>
</section>

<section class="box" aria-labelledby="steps-h">
  <h2 class="h2" id="steps-h">Lachgas bestellen in ${esc(a.short)} in drie stappen</h2>
  <ol class="steps">
    <li><strong>App of bel</strong>Stuur je adres in ${esc(a.short)} (met verdieping of ingang), het aantal cilinders en een telefoonnummer via <a href="${waLink(waText)}" rel="noopener">WhatsApp</a>, of bel <a href="tel:${C.PHONE_TEL}">${esc(C.PHONE_DISPLAY)}</a>.</li>
    <li><strong>Bevestiging</strong>Je krijgt direct de totaalprijs inclusief bezorging en de verwachte aankomsttijd in ${esc(a.short)}: meestal binnen ${esc(a.minutes)} minuten.</li>
    <li><strong>Koerier aan de deur</strong>De koerier belt vlak voor aankomst. Je controleert het zegel, betaalt met pin of contant, en de avond kan door.</li>
  </ol>
</section>

<section class="grid" aria-label="Product en service">
  <article class="box">
    <div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.tank}</span><h2 class="h3">Fastgas 2000 gram in ${esc(a.short)}</h2></div>
    <p class="txt">Het originele Fastgas merk: één verzegelde cilinder van 2000 gram, getest op 165 bar, met 99,9 procent zuivere N2O en een drukregelaar die op elke standaard slagroomspuit past. Eén cilinder vervangt ongeveer 250 patronen van 8 gram. <a href="/fastgas-tank-2kg/">Bekijk de specificaties</a>.</p>
  </article>
  <article class="box">
    <div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.clock}</span><h2 class="h3">Dag en nacht in ${esc(a.short)}</h2></div>
    <p class="txt">Een lege cilinder tijdens de late service of op zondagnacht hoeft niet tot morgen te wachten. We zijn 24 uur per dag en 7 dagen per week bereikbaar en rijden ook ’s nachts naar ${esc(a.name)}, van ${esc(a.buurten[0])} tot ${esc(a.buurten[a.buurten.length - 1])}. Bekijk onze <a href="/werkwijze/">werkwijze</a>.</p>
  </article>
</section>

<section class="box" aria-labelledby="horeca-h">
  <h2 class="h2" id="horeca-h">Horeca, hotels en evenementen in ${esc(a.name)}</h2>
  <p class="txt">Voor restaurants, bars, hotels, cateraars en evenementenlocaties in ${esc(a.name)} werken we met een vast aanspreekpunt en levering op factuur. Rond ${esc(a.landmarks)} bezorgen we grotere aantallen cilinders op afspraak, ook overdag voordat de service begint. Lees meer op onze pagina <a href="/lachgas-horeca-amsterdam/">lachgas voor horeca en events in Amsterdam</a>.</p>
</section>

<section class="box" aria-labelledby="safe-h">
  <h2 class="h2" id="safe-h">Veilig bewaren en verantwoord gebruik</h2>
  <p class="txt">Bewaar de cilinder rechtop, koel en droog, buiten bereik van kinderen en weg van warmtebronnen. Gebruik altijd de drukregelaar en nooit direct uit de cilinder. We leveren uitsluitend aan 18+ en alleen voor toegestane toepassingen volgens de <a href="/wetgeving-lachgas/">Nederlandse wetgeving</a>. Lees onze tips voor <a href="/veilig-gebruik-lachgas/">veilig gebruik</a>.</p>
</section>

<section class="box" aria-labelledby="nearby-h">
  <h2 class="h2" id="nearby-h">Lachgas bezorgen in de buurt van ${esc(a.short)}</h2>
  <ul class="area-grid">${nearby.map((n) => `<li><a href="/${n.slug}/">Lachgas ${esc(n.name)}<small>binnen ${esc(n.minutes)} min</small></a></li>`).join('')}</ul>
  <p class="note">Of bekijk <a href="/bezorggebieden/">alle bezorggebieden</a> en de hoofdpagina <a href="/">lachgas Amsterdam</a>.</p>
</section>`;

  const schemaExtra = [
    {
      '@type': 'Service', '@id': `${S.url(a.slug)}#service`, name: `Lachgas bezorgen ${a.name}`, serviceType: 'Lachgas bezorgservice',
      provider: { '@id': S.LB_ID }, url: S.url(a.slug),
      areaServed: { '@type': isSD ? 'Place' : 'City', name: a.name, containedInPlace: isSD ? { '@type': 'City', name: 'Amsterdam' } : { '@type': 'AdministrativeArea', name: 'Noord-Holland' }, geo: { '@type': 'GeoCoordinates', latitude: a.lat, longitude: a.lng } },
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
      serviceOutput: { '@id': `${C.SITE_URL}/fastgas-tank-2kg/#product` },
    },
  ];

  return S.page({ slug: a.slug, title, description, h1: `Lachgas ${esc(a.name)}: direct bezorgd, binnen ${esc(a.minutes)} minuten, dag en nacht`, eyebrow: isSD ? 'Bezorggebied · Stadsdeel Amsterdam' : 'Bezorggebied · Regio Amsterdam', lead: `Lachgas bestellen in ${esc(a.name)}? Lachgas Amsterdam Direct bezorgt originele Fastgas cilinders van 2000 gram in ${esc(a.buurten.slice(0, 3).join(', '))} en de rest van ${esc(a.short)}. Je appt of belt, krijgt direct prijs en bezorgtijd, en de koerier vertrekt meteen. 24 uur per dag, uitsluitend 18+.`, crumbs, body, faq, schemaExtra, waText });
}

function hubPage() {
  const title = 'Bezorggebieden lachgas Amsterdam en regio | 24/7 bezorgd';
  const description = 'Alle bezorggebieden: elk stadsdeel van Amsterdam binnen 20 minuten, plus Amstelveen, Diemen, Zaandam, Haarlem, Hoofddorp, Almere en Purmerend. 24/7, 18+.';
  const crumbs = [['Lachgas Amsterdam', '/'], ['Bezorggebieden', 'bezorggebieden']];
  const row = (a) => `<tr><th scope="row"><a href="/${a.slug}/">Lachgas ${esc(a.name)}</a></th><td>${esc(a.minutes)} min</td><td>${esc(a.buurten.slice(0, 4).join(', '))}</td></tr>`;
  const body = `
<section class="box" aria-labelledby="sd-h">
  <h2 class="h2" id="sd-h">Stadsdelen van Amsterdam: dezelfde 20 minuten</h2>
  <p class="txt">Amsterdam is ons thuisgebied. Vanuit eigen voorraad in de stad bezorgen we in alle zeven stadsdelen en in Weesp, dat sinds 2022 bij de gemeente Amsterdam hoort. Kies je stadsdeel voor buurten, bezorgtijden en veelgestelde vragen.</p>
  <div style="overflow-x:auto;margin-top:12px"><table><thead><tr><th>Stadsdeel</th><th>Bezorgtijd</th><th>Onder andere</th></tr></thead><tbody>${S.stadsdelen.map(row).join('')}</tbody></table></div>
</section>
<section class="box" aria-labelledby="rg-h">
  <h2 class="h2" id="rg-h">Rondom Amsterdam</h2>
  <p class="txt">Ook buiten de ring rijden we dag en nacht. De bezorgtijd loopt op met de afstand; je krijgt bij je bestelling altijd de exacte verwachting voor jouw adres.</p>
  <div style="overflow-x:auto;margin-top:12px"><table><thead><tr><th>Plaats</th><th>Bezorgtijd</th><th>Onder andere</th></tr></thead><tbody>${S.regio.map(row).join('')}</tbody></table></div>
</section>
<section class="box" aria-labelledby="check-h">
  <h2 class="h2" id="check-h">Bezorgen we bij jou? Check het in één bericht</h2>
  <p class="txt">Staat je plaats er niet bij? Stuur je adres via WhatsApp. Je hoort binnen een minuut of we rijden en hoe laat we er zijn. Voor Amsterdam zelf geldt: altijd, elk stadsdeel, binnen 20 minuten.</p>
  <div class="btn-row"><a class="btn btn--wa" href="${waLink('Hoi, bezorgen jullie lachgas op dit adres? ')}" rel="noopener">${ICON.wa}Check mijn adres</a><a class="btn" href="/lachgas-bezorgen-amsterdam/">${ICON.route}Lachgas bezorgen Amsterdam</a></div>
</section>`;
  const schemaExtra = [{ '@type': 'ItemList', name: 'Bezorggebieden', itemListElement: AREAS.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: `Lachgas ${a.name}`, url: S.url(a.slug) })) }];
  return S.page({ slug: 'bezorggebieden', title, description, h1: 'Bezorggebieden: lachgas in heel Amsterdam en de regio', eyebrow: 'Bezorggebieden', lead: 'Acht stadsdelen, tien plaatsen eromheen, één belofte: je appt of belt en de koerier vertrekt. In Amsterdam binnen 20 minuten, in de regio tussen 20 en 30 minuten, 24 uur per dag.', crumbs, body, schemaExtra });
}

module.exports = { areaPage, hubPage };
