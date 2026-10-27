'use strict';
// Informatieve en juridische pagina's + 404.
const C = require('./config');
const S = require('./shell');
const { esc, ICON, waLink } = S;

const HOME = ['Lachgas Amsterdam', '/'];
const box = (id, h2, inner) => `<section class="box" aria-labelledby="${id}"><h2 class="h2" id="${id}">${h2}</h2>${inner}</section>`;
const p = (t) => `<p class="txt">${t}</p>`;

function faqPage() {
  const groups = [
    ['Bestellen en bezorgen', [
      ['Hoe bestel ik lachgas in Amsterdam?', 'Stuur je adres, het aantal cilinders en een telefoonnummer via WhatsApp of bel ons. Je krijgt direct prijs en bezorgtijd; na je akkoord vertrekt de koerier.'],
      ['Hoe snel bezorgen jullie?', 'In de stadsdelen van Amsterdam meestal binnen 20 minuten; in de regio tussen 20 en 30 minuten. De exacte verwachting krijg je bij je bestelling.'],
      ['Zijn jullie echt 24 uur per dag open?', 'Ja, 24/7 inclusief weekenden en feestdagen. Ook na middernacht rijden we gewoon.'],
      ['Bezorgen jullie buiten Amsterdam?', 'Ja: Amstelveen, Diemen, Duivendrecht, Badhoevedorp, Hoofddorp, Haarlem, Zaandam, Almere, Purmerend en Aalsmeer. Andere plaatsen op aanvraag.'],
      ['Kan ik een bestelling vooruit plannen?', 'Ja, geef het gewenste tijdstip door. Voor horeca en events plannen we ook dagen vooruit in.'],
      ['Is de bezorging discreet?', 'Ja. Neutrale koeriers zonder opvallende verpakking; de koerier belt vlak voor aankomst.'],
    ]],
    ['Prijs en betalen', [
      ['Wat kost lachgas bij jullie?', 'Je krijgt bij je aanvraag direct een totaalprijs inclusief bezorging voor jouw adres. Meerdere cilinders betekent een lagere prijs per cilinder.'],
      ['Hoe kan ik betalen?', 'Pin of contant aan de deur. Bedrijven kunnen op factuur bestellen.'],
      ['Zijn er bezorgkosten?', 'De bezorging zit in de totaalprijs die je vooraf krijgt. Binnen Amsterdam geldt één tarief.'],
    ]],
    ['Product', [
      ['Welk lachgas leveren jullie?', 'Uitsluitend de originele Fastgas cilinder van 2000 gram N2O, verzegeld, getest op 165 bar, met drukregelaar.'],
      ['Hoeveel vullingen zitten er in een cilinder?', 'Ongeveer 250 vullingen van een standaard slagroomspuit, vergelijkbaar met 250 patronen van 8 gram.'],
      ['Past de cilinder op mijn slagroomspuit?', 'Ja, de meegeleverde drukregelaar past op elke standaard slagroomspuit.'],
      ['Nemen jullie lege cilinders mee?', 'Ja, geef het door bij je volgende bestelling en de koerier neemt de lege cilinder mee.'],
    ]],
    ['Leeftijd, veiligheid en wet', [
      ['Wat is de minimumleeftijd?', '18 jaar. De koerier kan om legitimatie vragen en levert niet aan minderjarigen.'],
      ['Is lachgas legaal in Nederland?', 'Lachgas staat sinds 1 januari 2023 op lijst II van de Opiumwet. Er gelden uitzonderingen voor onder andere technisch, medisch en culinair gebruik. Wij leveren alleen aan 18+ en alleen voor toegestane toepassingen. Lees meer op onze pagina over wetgeving.'],
      ['Hoe bewaar ik een cilinder veilig?', 'Rechtop, koel, droog, uit de zon en buiten bereik van kinderen. Gebruik altijd de drukregelaar.'],
    ]],
  ];
  const all = groups.flatMap((g) => g[1]);
  const body = groups.map((g, i) => box(`g${i}`, esc(g[0]), S.faqHtml(g[1]))).join('');
  return { slug: 'veelgestelde-vragen', priority: '0.7', changefreq: 'monthly', html: S.page({ slug: 'veelgestelde-vragen', title: 'Veelgestelde vragen over lachgas in Amsterdam | 24/7 antwoord', description: 'Antwoorden op vragen over lachgas bestellen in Amsterdam: bezorgtijd, prijs, betalen, Fastgas, leeftijd, veiligheid en wetgeving.', h1: 'Veelgestelde vragen over lachgas in Amsterdam', eyebrow: 'FAQ', lead: 'Alles wat klanten ons vragen over bestellen, bezorgen, betalen, het product en de regels. Staat je vraag er niet bij? Stuur een WhatsApp, we antwoorden dag en nacht.', crumbs: [HOME, ['Veelgestelde vragen', 'veelgestelde-vragen']], body, faq: all }) };
}

function veilig() {
  const body = `
${box('h-store', 'Bewaren', `<ul><li>Bewaar de cilinder rechtop en vast, zodat hij niet kan omvallen.</li><li>Koel (onder 50 graden), droog en uit direct zonlicht. Nooit in een auto in de zon of naast een fornuis of kachel.</li><li>Buiten bereik van kinderen en huisdieren.</li><li>Laat het zegel zitten tot je de cilinder in gebruik neemt.</li></ul>`)}
${box('h-use', 'Aansluiten en gebruiken', `<ul><li>Gebruik altijd de meegeleverde drukregelaar. Nooit direct uit de cilinder.</li><li>Draai de drukregelaar handvast aan, zonder gereedschap, en open het ventiel langzaam.</li><li>Gebruik in een goed geventileerde ruimte. N2O verdringt zuurstof in afgesloten ruimtes.</li><li>Sluit het ventiel na gebruik en koppel de slang los.</li><li>De cilinder en de drukregelaar kunnen koud worden bij langdurig gebruik; raak metalen delen dan niet met blote huid aan.</li></ul>`)}
${box('h-health', 'Gezondheid en verantwoord gebruik', `${p('N2O is bedoeld voor culinair en professioneel gebruik. Inademen van lachgas is niet zonder risico: het kan leiden tot duizeligheid, flauwvallen, bevriezingsletsel en bij herhaald gebruik tot een tekort aan vitamine B12 met zenuwschade. Combineer nooit met alcohol of andere middelen en neem nooit deel aan het verkeer na gebruik. Gebruik tijdens zwangerschap wordt afgeraden.')}<p class="note" style="margin-top:10px">Twijfel je over je gezondheid of die van een ander? Bel bij een noodgeval 112. Voor informatie over middelengebruik: Trimbos-instituut, drugsinfolijn 0900 1995.</p>`)}
${box('h-dispose', 'Lege cilinders', p('Lege cilinders horen niet bij het huisvuil. Geef bij je volgende bestelling door dat je een lege cilinder hebt; de koerier neemt hem mee. Of lever hem in bij een milieustraat.'))}
${box('h-law', 'Regels', p('Lachgas Amsterdam Direct levert uitsluitend aan 18+ en alleen voor toepassingen die zijn toegestaan onder de Opiumwet. Lees onze pagina over <a href="/wetgeving-lachgas/">wetgeving lachgas</a> voordat je bestelt.'))}`;
  return { slug: 'veilig-gebruik-lachgas', priority: '0.7', changefreq: 'monthly', html: S.page({ slug: 'veilig-gebruik-lachgas', title: 'Veilig gebruik en bewaren van lachgas | Lachgas Amsterdam Direct', description: 'Zo bewaar en gebruik je een Fastgas lachgas cilinder veilig: rechtop, koel, altijd met drukregelaar, geventileerd. Risico’s, lege cilinders en regels.', h1: 'Veilig gebruik en bewaren van lachgas', eyebrow: 'Veiligheid', lead: 'Een cilinder van 2000 gram staat onder hoge druk. Met deze regels bewaar en gebruik je hem veilig, thuis en in de keuken. Lees ze voordat je bestelt.', crumbs: [HOME, ['Veilig gebruik', 'veilig-gebruik-lachgas']], body }) };
}

function wetgeving() {
  const faq = [
    ['Is lachgas verboden in Nederland?', 'Sinds 1 januari 2023 staat lachgas (distikstofmonoxide, N2O) op lijst II van de Opiumwet. Bezit, verkoop en productie voor recreatief gebruik zijn verboden. Er zijn uitzonderingen voor technisch, medisch en culinair gebruik en voor gebruik in de voedingsmiddelenindustrie.'],
    ['Mag ik lachgas bestellen voor mijn slagroomspuit?', 'Culinair gebruik valt onder de uitzonderingen van het verbod. Wij leveren Fastgas cilinders uitsluitend aan 18+ en alleen voor toegestane toepassingen.'],
    ['Wat zijn de regels in Amsterdam?', 'Naast de landelijke Opiumwet kent Amsterdam in de APV een verbod op het gebruik van lachgas op straat in aangewezen gebieden. Gebruik lachgas nooit in de openbare ruimte en nooit in het verkeer.'],
    ['Vragen jullie om legitimatie?', 'Ja, de koerier kan om een geldig legitimatiebewijs vragen en levert niet aan minderjarigen of bij twijfel over het gebruik.'],
  ];
  const body = `
${box('h-law', 'Opiumwet: lachgas op lijst II sinds 2023', p('Per 1 januari 2023 is distikstofmonoxide (lachgas, N2O) opgenomen op lijst II van de Opiumwet. Daarmee zijn het bezit, de verkoop, het vervoer en de productie van lachgas voor recreatief gebruik strafbaar. De wetgever heeft uitzonderingen gemaakt voor toepassingen waarin lachgas een legitieme functie heeft: technisch gebruik, medisch en tandheelkundig gebruik, en gebruik als drijfgas in de voedingsmiddelenindustrie, waaronder slagroomspuiten.'))}
${box('h-us', 'Wat dit betekent voor bestellen bij ons', `<ul><li>We leveren uitsluitend aan personen van 18 jaar en ouder en kunnen om legitimatie vragen.</li><li>We leveren Fastgas cilinders voor culinair en professioneel gebruik (horeca, catering, patisserie, barista) en weigeren levering bij twijfel over de toepassing.</li><li>We leveren niet aan minderjarigen, niet op straat en niet in de openbare ruimte.</li><li>Recreatief gebruik van lachgas is in Nederland niet toegestaan. Wij nemen daarin geen risico en verwachten dat ook van onze klanten.</li></ul>`)}
${box('h-ams', 'Amsterdamse regels', p('Naast de landelijke wet heeft de gemeente Amsterdam in de Algemene Plaatselijke Verordening een verbod op het gebruik van lachgas in aangewezen gebieden en op overlast door lachgas. Deelname aan het verkeer onder invloed van lachgas is strafbaar; de politie handhaaft daarop. Gebruik lachgas dus nooit op straat, in parken of in de auto.'))}
${box('h-health', 'Gezondheid', p('Het inademen van lachgas kan leiden tot duizeligheid, flauwvallen, bevriezingsletsel en bij regelmatig gebruik tot een vitamine B12-tekort met blijvende zenuwschade. Lees onze pagina over <a href="/veilig-gebruik-lachgas/">veilig gebruik en bewaren</a>. Voor onafhankelijke informatie: Trimbos-instituut.'))}
<section class="box"><p class="note">Deze pagina is een praktische samenvatting en geen juridisch advies. De volledige regelgeving staat op wetten.overheid.nl (Opiumwet, lijst II) en in de APV van de gemeente Amsterdam. Laatst bijgewerkt: ${C.LASTMOD}.</p></section>`;
  return { slug: 'wetgeving-lachgas', priority: '0.7', changefreq: 'monthly', html: S.page({ slug: 'wetgeving-lachgas', title: 'Wetgeving lachgas Nederland en Amsterdam | Opiumwet uitgelegd', description: 'Lachgas staat sinds 2023 op lijst II van de Opiumwet, met uitzonderingen voor culinair, technisch en medisch gebruik. Wat mag wel en niet in Amsterdam.', h1: 'Wetgeving lachgas: wat mag wel en niet in Amsterdam', eyebrow: 'Wetgeving', lead: 'Lachgas valt sinds 1 januari 2023 onder de Opiumwet. Hier lees je in gewone taal wat dat betekent, welke uitzonderingen er zijn en hoe Lachgas Amsterdam Direct daarmee omgaat.', crumbs: [HOME, ['Wetgeving lachgas', 'wetgeving-lachgas']], body, faq }) };
}

function overOns() {
  const body = `
${box('h-who', 'Wie we zijn', p('Lachgas Amsterdam Direct is opgezet door koeriers die al jaren lachgas bezorgen in Amsterdam. We kennen de stad: welke straten in het centrum op vrijdagnacht dicht zijn, hoe je het snelst van West naar IJburg komt en bij welke flats in Zuidoost je de achteringang moet nemen. Die kennis gebruiken we om één ding te doen: lachgas binnen 20 minuten bezorgen, dag en nacht.'))}
<section class="grid" aria-label="Kernwaarden">
  <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.bolt}</span><h3 class="h3">Snel, omdat we lokaal zijn</h3></div><p class="txt">Eigen voorraad in Amsterdam, koeriers op meerdere punten in de stad, vaste routes per stadsdeel.</p></article>
  <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.shield}</span><h3 class="h3">Alleen origineel</h3></div><p class="txt">Uitsluitend verzegelde Fastgas cilinders van 2000 gram. Geen hervulde of naamloze tanks.</p></article>
  <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.chat}</span><h3 class="h3">Mensen, geen bots</h3></div><p class="txt">Je appt of belt met iemand die je bestelling direct regelt en eerlijk zegt hoe laat we er zijn.</p></article>
  <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.check}</span><h3 class="h3">Verantwoord</h3></div><p class="txt">18+, legitimatie op verzoek, alleen toegestane toepassingen en duidelijke veiligheidsinstructies.</p></article>
</section>
${box('h-data', 'Bedrijfsgegevens', `<ul><li>Handelsnaam: ${esc(C.BRAND)}</li><li>Vestigingsplaats: Amsterdam</li><li>Telefoon: <a href="tel:${C.PHONE_TEL}">${esc(C.PHONE_DISPLAY)}</a></li><li>WhatsApp: <a href="${waLink()}" rel="noopener">${esc(C.WA_DISPLAY)}</a></li><li>E-mail: <a href="mailto:${C.EMAIL}">${C.EMAIL}</a></li><li>Bereikbaar: 24 uur per dag, 7 dagen per week</li></ul>`)}`;
  const schemaExtra = [{ '@type': 'AboutPage', '@id': `${C.SITE_URL}/over-ons/#about`, url: `${C.SITE_URL}/over-ons/`, mainEntity: { '@id': S.ORG_ID } }];
  return { slug: 'over-ons', priority: '0.6', changefreq: 'monthly', html: S.page({ slug: 'over-ons', title: 'Over Lachgas Amsterdam Direct | Lokale bezorgservice, 24/7', description: 'Lachgas Amsterdam Direct: Amsterdamse koeriers, eigen voorraad en originele Fastgas cilinders, 24/7 binnen 20 minuten bezorgd in elk stadsdeel.', h1: 'Over Lachgas Amsterdam Direct', eyebrow: 'Over ons', lead: 'Een bezorgservice uit Amsterdam, voor Amsterdam. Eigen koeriers, eigen voorraad en één belofte: binnen 20 minuten, dag en nacht.', crumbs: [HOME, ['Over ons', 'over-ons']], body, schemaExtra }) };
}

function contact() {
  const body = `
<section class="grid grid--3" aria-label="Contactmogelijkheden">
  <article class="box box--wa"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.wa}</span><h2 class="h3">WhatsApp (snelst)</h2></div><p class="txt">Stuur je adres en aantal cilinders. Antwoord binnen een minuut, 24 uur per dag.</p><div class="btn-row"><a class="btn btn--wa" href="${waLink()}" rel="noopener">${ICON.wa}${esc(C.WA_DISPLAY)}</a></div></article>
  <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.phone}</span><h2 class="h3">Bellen</h2></div><p class="txt">Liever direct iemand aan de lijn? Bel ons, ook ’s nachts en in het weekend.</p><div class="btn-row"><a class="btn" href="tel:${C.PHONE_TEL}">${ICON.phone}${esc(C.PHONE_DISPLAY)}</a></div></article>
  <article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${ICON.chat}</span><h2 class="h3">E-mail</h2></div><p class="txt">Voor offertes, facturen en zakelijke vragen. Antwoord binnen een werkdag.</p><div class="btn-row"><a class="btn" href="mailto:${C.EMAIL}">${ICON.chat}${C.EMAIL}</a></div></article>
</section>
${box('h-hours', 'Bereikbaarheid', `<div style="overflow-x:auto"><table><tbody><tr><th scope="row">Maandag t/m zondag</th><td>24 uur per dag</td></tr><tr><th scope="row">Feestdagen</th><td>24 uur per dag</td></tr><tr><th scope="row">Bezorging Amsterdam</th><td>binnen 20 minuten</td></tr><tr><th scope="row">Bezorging regio</th><td>20 tot 30 minuten</td></tr></tbody></table></div>`)}
${box('h-biz', 'Zakelijk', p('Horeca, catering en evenementen: stuur je bedrijfsnaam, adres en contactpersoon via WhatsApp of e-mail. We zetten je op factuur en plannen leveringen op het moment dat jij wilt. Zie <a href="/lachgas-horeca-amsterdam/">horeca en events</a>.'))}
${box('h-area', 'Bezorggebied', p('Alle stadsdelen van Amsterdam en de regio van Zaandam tot Hoofddorp en Almere. Bekijk <a href="/bezorggebieden/">alle bezorggebieden</a>.'))}`;
  const schemaExtra = [{ '@type': 'ContactPage', '@id': `${C.SITE_URL}/contact/#contact`, url: `${C.SITE_URL}/contact/`, mainEntity: { '@id': S.ORG_ID } }];
  return { slug: 'contact', priority: '0.7', changefreq: 'monthly', html: S.page({ slug: 'contact', title: 'Contact | Lachgas Amsterdam Direct, 24/7 via WhatsApp of telefoon', description: 'Neem contact op met Lachgas Amsterdam Direct: WhatsApp +1 647 493 5191, bel +31 6 84 69 51 84 of mail. 24 uur per dag bereikbaar voor lachgas bestellen in Amsterdam.', h1: 'Contact: dag en nacht bereikbaar', eyebrow: 'Contact', lead: 'WhatsApp is het snelst: je stuurt je adres en krijgt binnen een minuut prijs en bezorgtijd. Bellen kan ook, 24 uur per dag.', crumbs: [HOME, ['Contact', 'contact']], body, schemaExtra }) };
}

function voorwaarden() {
  const body = `
${box('h-1', '1. Toepassing', p(`Deze voorwaarden gelden voor elke bestelling bij ${esc(C.BRAND)} (hierna: wij). Door te bestellen ga je akkoord met deze voorwaarden.`))}
${box('h-2', '2. Leeftijd en toegestaan gebruik', p('Wij leveren uitsluitend aan personen van 18 jaar en ouder. De koerier kan om een geldig legitimatiebewijs vragen en weigert levering aan minderjarigen of bij twijfel over de toepassing. Lachgas wordt geleverd voor culinair, technisch en professioneel gebruik overeenkomstig de uitzonderingen van de Opiumwet. De klant is verantwoordelijk voor gebruik conform de wet.'))}
${box('h-3', '3. Bestelling en prijs', p('Een bestelling komt tot stand na bevestiging via WhatsApp of telefoon van prijs, aantal en bezorgtijd. Alle prijzen zijn in euro inclusief btw en inclusief bezorging, tenzij anders vermeld. Genoemde bezorgtijden zijn een inschatting; wij doen ons best deze te halen maar kunnen er niet voor instaan bij verkeer, afsluitingen of weersomstandigheden.'))}
${box('h-4', '4. Betaling', p('Betaling vindt plaats bij levering per pin of contant, of op factuur voor zakelijke klanten met een betaaltermijn van 14 dagen. Als niemand van 18 jaar of ouder de bestelling in ontvangst kan nemen, wordt niet geleverd en kunnen voorrijkosten in rekening worden gebracht.'))}
${box('h-5', '5. Levering en controle', p('Bij levering controleren koerier en klant samen het zegel en het ventiel. Klachten over een geleverde cilinder meld je direct bij de overdracht of binnen 24 uur via WhatsApp. Een beschadigde of defecte cilinder vervangen wij kosteloos.'))}
${box('h-6', '6. Annuleren', p('Annuleren is kosteloos zolang de koerier nog niet is vertrokken. Na vertrek kunnen voorrijkosten in rekening worden gebracht.'))}
${box('h-7', '7. Aansprakelijkheid', p('Wij zijn niet aansprakelijk voor schade die voortvloeit uit onjuist, oneigenlijk of onwettig gebruik van het geleverde product. Onze aansprakelijkheid is beperkt tot het bedrag van de betreffende bestelling.'))}
${box('h-8', '8. Toepasselijk recht', p(`Op deze voorwaarden is Nederlands recht van toepassing. Versie: ${C.LASTMOD}.`))}`;
  return { slug: 'voorwaarden', priority: '0.3', changefreq: 'yearly', html: S.page({ slug: 'voorwaarden', title: 'Algemene voorwaarden | Lachgas Amsterdam Direct', description: 'Algemene voorwaarden van Lachgas Amsterdam Direct: leeftijd 18+, toegestaan gebruik, bestelling, prijs, betaling, levering, annuleren en aansprakelijkheid.', h1: 'Algemene voorwaarden', eyebrow: 'Juridisch', lead: 'Kort en leesbaar: de afspraken die gelden bij elke bestelling.', crumbs: [HOME, ['Algemene voorwaarden', 'voorwaarden']], body }) };
}

function privacy() {
  const body = `
${box('h-1', 'Welke gegevens we verwerken', p('Bij een bestelling verwerken we je naam (indien opgegeven), adres, telefoonnummer en de inhoud van je bericht. Zakelijke klanten geven daarnaast bedrijfsnaam en factuurgegevens door. We verwerken deze gegevens om je bestelling te bezorgen, te factureren en voor vragen achteraf.'))}
${box('h-2', 'WhatsApp en telefoon', p('Bestellingen via WhatsApp lopen via de servers van WhatsApp (Meta). Daarop is het privacybeleid van WhatsApp van toepassing. Wij bewaren gesprekken niet langer dan nodig voor de afhandeling en de wettelijke bewaartermijn van facturen (7 jaar).'))}
${box('h-3', 'Website', p('Deze website plaatst geen trackingcookies en gebruikt geen analytics van derden. De leeftijdsbevestiging wordt alleen lokaal in je browser opgeslagen. Onze hostingprovider verwerkt technische logbestanden (IP-adres, tijdstip, opgevraagde pagina) voor beveiliging.'))}
${box('h-4', 'Delen met derden', p('We delen je gegevens niet met derden, behalve met onze koeriers voor de bezorging en wanneer de wet ons daartoe verplicht.'))}
${box('h-5', 'Je rechten', p(`Je kunt inzage, correctie of verwijdering van je gegevens vragen via <a href="mailto:${C.EMAIL}">${C.EMAIL}</a>. Je hebt het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens. Versie: ${C.LASTMOD}.`))}`;
  return { slug: 'privacy', priority: '0.3', changefreq: 'yearly', html: S.page({ slug: 'privacy', title: 'Privacyverklaring | Lachgas Amsterdam Direct', description: 'Privacyverklaring van Lachgas Amsterdam Direct: gegevens bij een bestelling, WhatsApp, website zonder trackingcookies, bewaartermijn en je rechten.', h1: 'Privacyverklaring', eyebrow: 'Juridisch', lead: 'We verwerken alleen wat nodig is om je bestelling te bezorgen. Geen trackingcookies, geen doorverkoop van gegevens.', crumbs: [HOME, ['Privacy', 'privacy']], body }) };
}

function notFound() {
  const schema = { '@context': 'https://schema.org', '@graph': S.orgNodes() };
  return `${S.head({ title: 'Pagina niet gevonden | Lachgas Amsterdam Direct', description: 'Deze pagina bestaat niet. Ga naar lachgas Amsterdam of bekijk de bezorggebieden.', path: '404', schema, robots: 'noindex, follow' })}
<body>
${S.menu('')}
${S.backdrop()}
<main class="page" id="main">
  <header class="box"><p class="eyebrow">404</p><h1>Pagina niet gevonden</h1><p class="lead">De pagina die je zocht bestaat niet (meer). Wat je waarschijnlijk zoekt:</p>
  <ul class="area-grid" style="margin-top:14px"><li><a href="/">Lachgas Amsterdam</a></li><li><a href="/lachgas-bestellen-amsterdam/">Lachgas bestellen</a></li><li><a href="/bezorggebieden/">Bezorggebieden</a></li><li><a href="/contact/">Contact</a></li></ul>
  ${S.ctaButtons()}</header>
</main>
${S.footer()}
<script>${S.SCRIPT}</script>
</body>
</html>`;
}

function pages() {
  return [faqPage(), veilig(), wetgeving(), overOns(), contact(), voorwaarden(), privacy()];
}

module.exports = { pages, notFound };
