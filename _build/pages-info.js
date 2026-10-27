'use strict';
// Commerciële en productpagina's. Overige infopagina's staan in pages-info2.js.
const C = require('./config');
const S = require('./shell');
const { esc, ICON, waLink } = S;
const more = require('./pages-info2');

const HOME = ['Lachgas Amsterdam', '/'];
const box = (id, h2, inner) => `<section class="box" aria-labelledby="${id}"><h2 class="h2" id="${id}">${h2}</h2>${inner}</section>`;
const p = (t) => `<p class="txt">${t}</p>`;
const card = (icon, h, t) => `<article class="box"><div class="info-head"><span class="icon-chip" aria-hidden="true">${icon}</span><h3 class="h3">${esc(h)}</h3></div><p class="txt">${t}</p></article>`;

function bestellen() {
  const faq = [
    ['Moet ik een account aanmaken om lachgas te bestellen?', 'Nee. Je bestelt via WhatsApp of telefoon, zonder webshop, account of vooruitbetaling. Je betaalt aan de deur met pin of contant.'],
    ['Wat moet ik doorgeven bij mijn bestelling?', 'Je adres met postcode en huisnummer, eventueel verdieping, ingang of naam op de bel, het aantal cilinders, het gewenste tijdstip en een telefoonnummer waarop je bereikbaar bent.'],
    ['Kan ik een bestelling vooruit plannen?', 'Ja. Geef het gewenste tijdstip door; voor horeca en events plannen we leveringen ook overdag of dagen vooruit in.'],
    ['Kan ik mijn bestelling nog wijzigen?', 'Zolang de koerier nog niet is vertrokken wel; stuur een WhatsApp. Onderweg kun je het aantal cilinders vaak nog aanpassen, de koerier heeft extra voorraad bij zich.'],
    ['Wat als ik niet thuis ben als de koerier komt?', 'De koerier belt vlak voor aankomst. Als er niemand van 18 jaar of ouder opendoet, wordt de bestelling niet geleverd en kunnen voorrijkosten in rekening worden gebracht.'],
  ];
  const body = `
${box('h-how', 'Zo bestel je lachgas in Amsterdam', `
<ol class="steps">
  <li><strong>Stuur je adres</strong>Via <a href="${waLink()}" rel="noopener">WhatsApp</a> of bel <a href="tel:${C.PHONE_TEL}">${esc(C.PHONE_DISPLAY)}</a>. Noem postcode, huisnummer, verdieping, aantal cilinders en een telefoonnummer.</li>
  <li><strong>Ontvang prijs en tijd</strong>Binnen een minuut krijg je de totaalprijs inclusief bezorging en de verwachte aankomsttijd. Pas als jij akkoord geeft, vertrekt de koerier.</li>
  <li><strong>Betaal aan de deur</strong>Pin of contant. Bedrijven op factuur. De koerier belt vlak voor aankomst en controleert samen met jou het zegel.</li>
</ol>`)}
${box('h-info', 'Wat je doorgeeft bij lachgas bestellen in Amsterdam', `
${p('Hoe completer je bericht, hoe sneller de koerier bij je is. Dit hebben we nodig:')}
<ul style="margin-top:8px">
  <li><strong>Adres</strong>: straat, huisnummer, postcode en stadsdeel. Bij appartementen ook verdieping, ingang of de naam op de bel.</li>
  <li><strong>Aantal</strong>: hoeveel Fastgas cilinders van 2000 gram je wilt. Twijfel je? Eén cilinder is goed voor ongeveer 250 vullingen.</li>
  <li><strong>Tijdstip</strong>: nu, of een gewenst moment later vandaag of op een andere dag.</li>
  <li><strong>Telefoonnummer</strong>: zodat de koerier je kan bellen bij aankomst.</li>
  <li><strong>Bedrijf</strong> (optioneel): bedrijfsnaam en contactpersoon als je op factuur wilt bestellen.</li>
</ul>`)}
<section class="grid grid--3" aria-label="Voordelen">
  ${card(ICON.bolt, 'Binnen 20 minuten', 'In alle stadsdelen van Amsterdam. Bekijk de bezorgtijd van jouw <a href="/bezorggebieden/">stadsdeel of plaats</a>.')}
  ${card(ICON.clock, 'Bestellen kan altijd', '24 uur per dag, 7 dagen per week, ook op feestdagen. Ook na middernacht vertrekt de koerier direct.')}
  ${card(ICON.euro, 'Prijs vooraf bevestigd', 'Eén totaalprijs inclusief bezorging, bevestigd via WhatsApp voordat we rijden. Geen verrassingen aan de deur.')}
</section>
${box('h-pay', 'Betalen: pin, contant of op factuur', p('Aan de deur betaal je met pin (de koerier heeft een pinapparaat bij zich) of contant. Horeca, cateraars en evenementenlocaties kunnen op factuur bestellen; geef bij de eerste bestelling je bedrijfsgegevens door. Voor grotere aantallen maken we vooraf een offerte.'))}
${box('h-age', 'Alleen voor 18 jaar en ouder', p('Lachgas Amsterdam Direct levert uitsluitend aan volwassenen. De koerier kan om legitimatie vragen en levert niet als er niemand van 18 jaar of ouder aanwezig is. We leveren alleen voor toegestane toepassingen; lees daarover meer op onze pagina over de <a href="/wetgeving-lachgas/">wetgeving rond lachgas</a>.'))}
${box('h-product', 'Wat je bestelt: Fastgas 2000 gram', p('We leveren uitsluitend de originele <a href="/fastgas-tank-2kg/">Fastgas cilinder van 2000 gram</a>: verzegeld, getest op 165 bar, 99,9 procent zuivere N2O en met een drukregelaar die op elke standaard slagroomspuit past. Eén cilinder vervangt ongeveer 250 patronen van 8 gram.'))}`;
  return { slug: 'lachgas-bestellen-amsterdam', priority: '0.9', changefreq: 'weekly', html: S.page({ slug: 'lachgas-bestellen-amsterdam', title: 'Lachgas bestellen Amsterdam | Binnen 20 min bezorgd, 24/7', description: 'Lachgas bestellen in Amsterdam zonder webshop: app of bel, direct prijs en bezorgtijd, betalen aan de deur. 24/7, binnen 20 minuten. 18+.', h1: 'Lachgas bestellen in Amsterdam: app, bevestig, ontvang', eyebrow: 'Bestellen', lead: 'Lachgas bestellen in Amsterdam duurt bij ons één bericht. Je stuurt je adres via WhatsApp of belt, krijgt direct de prijs en de bezorgtijd, en de koerier vertrekt meteen. Binnen 20 minuten in alle stadsdelen, 24 uur per dag. Uitsluitend 18+.', crumbs: [HOME, ['Lachgas bestellen Amsterdam', 'lachgas-bestellen-amsterdam']], body, faq }) };
}

function kopen() {
  const faq = [
    ['Waar kan ik lachgas kopen in Amsterdam?', 'Bij Lachgas Amsterdam Direct: je koopt via WhatsApp of telefoon en wij bezorgen binnen 20 minuten in elk stadsdeel van Amsterdam. Geen winkel, geen wachttijd, 24 uur per dag.'],
    ['Kan ik lachgas ophalen in Amsterdam?', 'Nee, we werken uitsluitend met bezorging. Dat is sneller dan ophalen en je hoeft de stad niet door. De koerier is in de meeste stadsdelen binnen 20 minuten bij je.'],
    ['Wat kost een Fastgas cilinder in Amsterdam?', 'Je krijgt bij je bestelling direct een totaalprijs inclusief bezorging voor jouw adres. Bestel je meerdere cilinders, dan wordt de prijs per cilinder lager.'],
    ['Is kopen bij jullie legaal?', 'Wij leveren uitsluitend aan 18+ en alleen voor toepassingen die onder de uitzonderingen van de Opiumwet vallen, zoals culinair en professioneel gebruik. Lees meer op onze pagina over wetgeving.'],
  ];
  const body = `
${box('h-vs', 'Lachgas kopen in Amsterdam: bezorgd is sneller dan ophalen', `
${p('Wie lachgas wil kopen in Amsterdam komt al snel uit bij webshops die morgen leveren of adressen aan de rand van de stad. Lachgas Amsterdam Direct doet het anders: je koopt via WhatsApp of telefoon en de koerier staat binnen 20 minuten voor de deur, 24 uur per dag. Geen reistijd, geen openingstijden, geen vooruitbetaling.')}
<div style="overflow-x:auto;margin-top:12px"><table><thead><tr><th>&nbsp;</th><th>Lachgas Amsterdam Direct</th><th>Webshop</th><th>Ophalen</th></tr></thead><tbody>
<tr><th scope="row">Levertijd</th><td>Binnen 20 minuten</td><td>1 tot 3 dagen</td><td>Reistijd + openingstijden</td></tr>
<tr><th scope="row">Bereikbaar</th><td>24/7, ook feestdagen</td><td>Kantooruren</td><td>Beperkt</td></tr>
<tr><th scope="row">Betalen</th><td>Pin of contant aan de deur, factuur</td><td>Vooruit</td><td>Ter plekke</td></tr>
<tr><th scope="row">Product</th><td>Origineel Fastgas 2000 g, verzegeld</td><td>Wisselend</td><td>Wisselend</td></tr>
</tbody></table></div>`)}
${box('h-what', 'Wat je koopt: originele Fastgas 2000 gram', p('Eén merk, één product: de verzegelde <a href="/fastgas-tank-2kg/">Fastgas cilinder van 2000 gram</a> met drukregelaar. Getest op 165 bar, 99,9 procent zuivere N2O, goed voor ongeveer 250 vullingen van een standaard slagroomspuit. Geen hervulde of naamloze cilinders.'))}
${box('h-where', 'In heel Amsterdam en de regio', `${p('We bezorgen in Centrum, Noord, Oost, West, Zuid, Zuidoost, Nieuw-West en Weesp, en daarbuiten in Amstelveen, Diemen, Zaandam, Haarlem, Hoofddorp, Almere en Purmerend.')}<ul class="area-grid" style="margin-top:12px">${S.stadsdelen.map((a) => `<li><a href="/${a.slug}/">Lachgas ${esc(a.name)}</a></li>`).join('')}</ul>`)}
${box('h-steps', 'Zo koop je lachgas bij ons', `<ol class="steps"><li><strong>App of bel</strong>Adres, aantal cilinders, telefoonnummer.</li><li><strong>Akkoord op de prijs</strong>Totaalprijs inclusief bezorging, vooraf bevestigd.</li><li><strong>Betaal aan de deur</strong>Pin of contant, binnen 20 minuten. Lees de <a href="/lachgas-bestellen-amsterdam/">volledige uitleg over bestellen</a>.</li></ol>`)}`;
  return { slug: 'lachgas-kopen-amsterdam', priority: '0.8', changefreq: 'weekly', html: S.page({ slug: 'lachgas-kopen-amsterdam', title: 'Lachgas kopen Amsterdam | Bezorgd binnen 20 min, 24/7', description: 'Lachgas kopen in Amsterdam? Bestel via WhatsApp of telefoon en ontvang de originele Fastgas 2000 g binnen 20 minuten aan huis. 24/7, pin of contant. 18+.', h1: 'Lachgas kopen in Amsterdam: besteld en binnen 20 minuten bezorgd', eyebrow: 'Kopen', lead: 'Lachgas kopen in Amsterdam hoeft geen rit naar een winkel of wachten op een pakket te zijn. Bij Lachgas Amsterdam Direct koop je via WhatsApp of telefoon en bezorgt een koerier de originele Fastgas cilinder binnen 20 minuten, 24 uur per dag, in elk stadsdeel. Uitsluitend 18+.', crumbs: [HOME, ['Lachgas kopen Amsterdam', 'lachgas-kopen-amsterdam']], body, faq }) };
}

function bezorgen() {
  const faq = [
    ['Hoe halen jullie 20 minuten in Amsterdam?', 'Eigen voorraad in de stad, koeriers die vanuit meerdere punten rijden en vaste routes per stadsdeel. Daardoor hoeven we niet eerst naar een magazijn buiten de ring.'],
    ['Bezorgen jullie ook bij evenementen en op boten?', 'Ja. Stuur je locatie via WhatsApp; we spreken een ontmoetpunt af bij de ingang, de steiger of de dichtstbijzijnde bereikbare hoek.'],
    ['Wat kost bezorging?', 'De bezorging zit in de totaalprijs die je vooraf via WhatsApp krijgt. Binnen Amsterdam geldt één tarief; buiten de stad hoor je de prijs voor jouw adres direct bij je aanvraag.'],
    ['Is de bezorging discreet?', 'Ja. Neutrale koeriers zonder opvallende verpakking; de koerier belt vlak voor aankomst en overhandigt aan de deur.'],
  ];
  const body = `
${box('h-promise', 'Lachgas bezorgen Amsterdam: van bestelling tot deur', p('Lachgas bezorgen in Amsterdam is ons enige werk. Zodra je bestelling binnenkomt, vertrekt een koerier met de verzegelde Fastgas cilinder vanuit onze voorraad in de stad. Omdat we per stadsdeel vaste routes rijden, staan we in Centrum, West, Zuid en Oost vaak binnen een kwartier voor de deur en in Noord, Zuidoost en Nieuw-West binnen 20 minuten. Je volgt het via WhatsApp: bevestiging, verwachte tijd en een belletje vlak voor aankomst.'))}
<section class="grid grid--4" aria-label="Kenmerken bezorging">
  ${card(ICON.route, 'Eigen koeriers', 'Geen externe bezorgdienst. Onze koeriers kennen de stadsdelen, de afgesloten straten en de snelste routes.')}
  ${card(ICON.clock, '24 uur per dag', 'Dag, avond, nacht, weekend en feestdagen. Je bestelt wanneer het nodig is, niet wanneer het uitkomt.')}
  ${card(ICON.shield, 'Verzegeld geleverd', 'Elke cilinder is verzegeld en getest; bij de overdracht controleer je het zegel samen met de koerier.')}
  ${card(ICON.pin, 'Overal in Amsterdam', 'Alle stadsdelen plus Weesp, en de regio van Zaandam tot Hoofddorp en Almere.')}
</section>
${box('h-times', 'Bezorgtijden per stadsdeel', `<div style="overflow-x:auto"><table><thead><tr><th>Stadsdeel</th><th>Bezorgtijd</th></tr></thead><tbody>${S.stadsdelen.map((a) => `<tr><th scope="row"><a href="/${a.slug}/">Lachgas ${esc(a.name)}</a></th><td>binnen ${esc(a.minutes)} minuten</td></tr>`).join('')}</tbody></table></div><p class="note">Regio buiten Amsterdam: 20 tot 30 minuten. Bekijk <a href="/bezorggebieden/">alle bezorggebieden</a>.</p>`)}
${box('h-handover', 'De overdracht aan de deur', p('De koerier belt of appt vlak voor aankomst en overhandigt de cilinder aan een persoon van 18 jaar of ouder. Jullie controleren samen het zegel en het ventiel; je betaalt met pin of contant, of op factuur als bedrijf. Wil je dat de koerier bij een receptie, portier of achteringang levert, dan geef je dat bij de bestelling door.'))}
${box('h-events', 'Bezorgen bij events, hotels en boten', p('Voor festivals op de NDSM-werf, concerten bij de ArenA, hotels rond het Museumplein en boten aan de grachten of de Amstel spreken we een duidelijk ontmoetpunt af. Bij afgesloten gebieden rijden we tot de dichtstbijzijnde bereikbare hoek. Voor grotere aantallen cilinders zie onze pagina voor <a href="/lachgas-horeca-amsterdam/">horeca en events</a>.'))}`;
  return { slug: 'lachgas-bezorgen-amsterdam', priority: '0.9', changefreq: 'weekly', html: S.page({ slug: 'lachgas-bezorgen-amsterdam', title: 'Lachgas bezorgen Amsterdam | 24/7 binnen 20 min aan huis', description: 'Lachgas bezorgen in Amsterdam door eigen koeriers: 24/7, binnen 20 minuten in alle stadsdelen. Fastgas 2000 g, verzegeld, pin of contant. 18+.', h1: 'Lachgas bezorgen Amsterdam: eigen koeriers, binnen 20 minuten', eyebrow: 'Bezorging', lead: 'Lachgas bezorgen in Amsterdam doen we met eigen koeriers vanuit eigen voorraad in de stad. Daardoor staan we in elk stadsdeel binnen 20 minuten voor de deur, 24 uur per dag, ook in de nacht en op feestdagen.', crumbs: [HOME, ['Lachgas bezorgen Amsterdam', 'lachgas-bezorgen-amsterdam']], body, faq }) };
}

function fastgasAmsterdam() {
  const faq = [
    ['Is Fastgas hetzelfde als lachgas?', 'Fastgas is een merknaam voor N2O-cilinders (lachgas) van 2000 gram. Zoek je "Fastgas Amsterdam" of "lachgas Amsterdam", dan kom je bij ons op hetzelfde product uit: de originele Fastgas cilinder.'],
    ['Leveren jullie alleen het merk Fastgas?', 'Ja. We leveren uitsluitend originele, verzegelde Fastgas cilinders. Geen hervulde cilinders en geen onbekende merken.'],
    ['Past Fastgas op mijn slagroomspuit?', 'Ja. De meegeleverde drukregelaar past op elke standaard slagroomspuit (kidde, iSi, Mosa en vergelijkbare).'],
  ];
  const body = `
${box('h-brand', 'Fastgas Amsterdam: het merk, de cilinder en de bezorging', p('Zoek je "Fastgas Amsterdam"? Dan zoek je drie dingen tegelijk: het originele merk Fastgas, de cilinder van 2000 gram en iemand die hem nu bezorgt. Lachgas Amsterdam Direct levert alle drie. We werken alleen met het originele Fastgas merk, houden de cilinders op voorraad in Amsterdam en bezorgen binnen 20 minuten in elk stadsdeel.'))}
${box('h-why', 'Waarom het originele merk', `<ul><li><strong>Verzegeld en getest</strong>: elke cilinder wordt getest op 165 bar en met zegel geleverd.</li><li><strong>99,9 procent zuivere N2O</strong>: voedselveilig gas, bedoeld voor slagroomspuiten.</li><li><strong>Lekvrij ventiel en drukregelaar</strong>: past op elke standaard slagroomspuit.</li><li><strong>2000 gram</strong>: ongeveer 250 vullingen per cilinder, tot 60 procent goedkoper dan patronen.</li></ul>`)}
${box('h-areas', 'Fastgas bezorgen in heel Amsterdam', `${p('Fastgas in Centrum, Noord, Oost, West, Zuid, Zuidoost, Nieuw-West en Weesp: dezelfde 20 minuten, dag en nacht.')}<ul class="area-grid" style="margin-top:12px">${S.stadsdelen.map((a) => `<li><a href="/${a.slug}/">Fastgas ${esc(a.short)}</a></li>`).join('')}</ul>`)}
${box('h-specs', 'Specificaties en bewaren', p('Alle specificaties van de cilinder vind je op de pagina <a href="/fastgas-tank-2kg/">Fastgas tank 2 kg</a>. Bewaar een cilinder rechtop, koel en droog, en lees onze tips voor <a href="/veilig-gebruik-lachgas/">veilig gebruik</a>.'))}`;
  return { slug: 'fastgas-amsterdam', priority: '0.8', changefreq: 'monthly', html: S.page({ slug: 'fastgas-amsterdam', title: 'Fastgas Amsterdam | Originele Fastgas 2000 g, 24/7 bezorgd', description: 'Fastgas Amsterdam: originele, verzegelde Fastgas cilinders van 2000 g binnen 20 minuten bezorgd in elk stadsdeel. 24/7 via WhatsApp of telefoon. Pin of contant. 18+.', h1: 'Fastgas Amsterdam: origineel, verzegeld en binnen 20 minuten bezorgd', eyebrow: 'Fastgas', lead: 'Fastgas Amsterdam Direct is onze bezorging van het originele Fastgas merk: cilinders van 2000 gram N2O, verzegeld en getest, 24 uur per dag bezorgd in heel Amsterdam. Uitsluitend 18+.', crumbs: [HOME, ['Fastgas Amsterdam', 'fastgas-amsterdam']], body, faq }) };
}

function tank() {
  const faq = [
    ['Hoeveel vullingen haal ik uit een Fastgas tank van 2 kg?', 'Ongeveer 250 vullingen van een standaard slagroomspuit van 0,5 liter; dat komt overeen met circa 250 patronen van 8 gram.'],
    ['Hoe sluit ik de drukregelaar aan?', 'Draai de drukregelaar handvast op de cilinder, sluit de slang aan op de slagroomspuit en open het ventiel langzaam. Gebruik nooit gereedschap om de aansluiting vast te draaien en gebruik de cilinder nooit zonder drukregelaar.'],
    ['Kan ik een lege cilinder inleveren?', 'Ja. Geef bij je volgende bestelling door dat je een lege cilinder hebt; de koerier neemt hem mee.'],
    ['Hoe bewaar ik een Fastgas cilinder?', 'Rechtop, koel (onder 50 graden), droog, uit direct zonlicht en buiten bereik van kinderen. Nooit in een afgesloten auto in de zon.'],
  ];
  const body = `
<section class="box"><div class="product"><picture><source type="image/webp" srcset="/assets/img/fastgas-cilinder-amsterdam.webp"><img src="/assets/img/fastgas-cilinder-amsterdam.jpg" width="480" height="907" alt="Fastgas tank 2 kg lachgas cilinder met gele band" loading="lazy" decoding="async"></picture><div><h2 class="h2">Specificaties Fastgas tank 2 kg</h2><ul class="spec"><li><b>2000 g</b>netto inhoud N2O</li><li><b>&plusmn; 250</b>vullingen van 8 g</li><li><b>165 bar</b>testdruk, verzegeld</li><li><b>99,9%</b>zuiverheid, voedselveilig</li><li><b>Incl.</b>drukregelaar en slang</li><li><b>Universeel</b>past op elke standaard spuit</li></ul><p class="note">Afmetingen circa 36 cm hoog, 10 cm doorsnede, gewicht circa 3,3 kg gevuld. Wegwerpcilinder: lege cilinders neemt de koerier op verzoek mee.</p></div></div></section>
${box('h-vs', 'Eén tank in plaats van 250 patronen', `${p('Een cilinder van 2000 gram vervangt ongeveer 250 patronen van 8 gram. Voor een horecakeuken betekent dat: niet meer wisselen tijdens de service, geen berg lege patronen en tot 60 procent lagere gaskosten per vulling. Thuis of op een feest betekent het dat één cilinder de hele avond meegaat.')}<div style="overflow-x:auto;margin-top:12px"><table><thead><tr><th>&nbsp;</th><th>Fastgas 2000 g</th><th>Patronen 8 g</th></tr></thead><tbody><tr><th scope="row">Vullingen</th><td>&plusmn; 250 per cilinder</td><td>1 per patroon</td></tr><tr><th scope="row">Wisselen</th><td>Eén keer per avond</td><td>Elke vulling</td></tr><tr><th scope="row">Afval</th><td>1 cilinder</td><td>250 stalen patronen</td></tr><tr><th scope="row">Kosten per vulling</th><td>Tot 60% lager</td><td>Hoger</td></tr></tbody></table></div>`)}
${box('h-use', 'Aansluiten en gebruiken', `<ol class="steps"><li><strong>Drukregelaar</strong>Draai de drukregelaar handvast op de cilinder. Geen gereedschap.</li><li><strong>Aansluiten</strong>Sluit de slang aan op de slagroomspuit en open het ventiel langzaam tot de gewenste druk.</li><li><strong>Afsluiten</strong>Sluit het ventiel na gebruik en bewaar de cilinder rechtop en koel. Lees onze pagina over <a href="/veilig-gebruik-lachgas/">veilig gebruik</a>.</li></ol>`)}
${box('h-order', 'Fastgas tank bestellen in Amsterdam', p('Bestel via WhatsApp of telefoon en ontvang de cilinder binnen 20 minuten in elk stadsdeel van Amsterdam, 24 uur per dag. Meerdere cilinders? Dan daalt de prijs per cilinder; vraag direct een totaalprijs. Zie ook <a href="/lachgas-bestellen-amsterdam/">lachgas bestellen Amsterdam</a>.'))}`;
  const schemaExtra = [{ '@type': 'Product', '@id': `${C.SITE_URL}/fastgas-tank-2kg/#product`, name: 'Fastgas lachgas cilinder 2000 gram', brand: { '@type': 'Brand', name: 'Fastgas' }, image: `${C.SITE_URL}/assets/img/fastgas-cilinder-amsterdam.jpg`, url: `${C.SITE_URL}/fastgas-tank-2kg/`, sku: 'FASTGAS-2000', description: 'Originele Fastgas N2O cilinder van 2000 gram met drukregelaar, verzegeld en getest op 165 bar. Circa 250 vullingen van 8 gram. Bezorgd in Amsterdam binnen 20 minuten.', additionalProperty: [{ '@type': 'PropertyValue', name: 'Inhoud', value: '2000 g' }, { '@type': 'PropertyValue', name: 'Zuiverheid', value: '99,9% N2O' }, { '@type': 'PropertyValue', name: 'Testdruk', value: '165 bar' }], offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'EUR', seller: { '@id': S.LB_ID }, areaServed: { '@type': 'City', name: 'Amsterdam' }, availableDeliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet' } }];
  return { slug: 'fastgas-tank-2kg', priority: '0.8', changefreq: 'monthly', html: S.page({ slug: 'fastgas-tank-2kg', title: 'Fastgas tank 2 kg | Specificaties en bezorging in Amsterdam', description: 'Fastgas tank 2 kg: 2000 g N2O, circa 250 vullingen, getest op 165 bar, 99,9% zuiver, inclusief drukregelaar. Binnen 20 minuten bezorgd in Amsterdam, 24/7. 18+.', h1: 'Fastgas tank 2 kg: specificaties, gebruik en bezorging', eyebrow: 'Product', lead: 'De Fastgas tank van 2 kg is de cilinder die we in Amsterdam bezorgen: 2000 gram N2O, verzegeld, getest en voorzien van drukregelaar. Hier vind je alle specificaties, hoe je hem aansluit en hoe je hem bewaart.', crumbs: [HOME, ['Fastgas tank 2 kg', 'fastgas-tank-2kg']], body, faq, schemaExtra, ogImage: `${C.SITE_URL}/assets/img/og-lachgas-amsterdam.jpg` }) };
}

function horeca() {
  const faq = [
    ['Kunnen we als restaurant op factuur bestellen?', 'Ja. Geef bij de eerste bestelling je bedrijfsnaam, adres en contactpersoon door. Daarna bestel je per WhatsApp en ontvang je maandelijks of per levering een factuur.'],
    ['Leveren jullie ook overdag, voor de service?', 'Ja. We plannen leveringen op elk gewenst tijdstip in, bijvoorbeeld voor de lunch- of dinerservice, of dagen vooruit voor een evenement.'],
    ['Kunnen jullie grotere aantallen leveren?', 'Ja. Voor events, festivals en cateraars leveren we meerdere cilinders tegelijk; vraag vooraf een offerte via WhatsApp.'],
    ['Wat als midden in de service de cilinder leeg is?', 'Dan app je en staat de koerier binnen 20 minuten bij de achteringang of receptie, ook ’s nachts.'],
  ];
  const body = `
${box('h-b2b', 'Lachgas voor horeca in Amsterdam: geen lege spuit tijdens de service', p('Restaurants, cocktailbars, hotels, ijssalons en cateraars in Amsterdam gebruiken onze Fastgas cilinders voor slagroomspuiten, espuma’s en infusies. Eén cilinder van 2000 gram is goed voor ongeveer 250 vullingen, dus je wisselt na de service in plaats van tijdens. En raakt hij toch leeg, dan staat onze koerier binnen 20 minuten bij de achteringang, ook midden in de nacht.'))}
<section class="grid grid--3" aria-label="Voordelen horeca">
  ${card(ICON.euro, 'Op factuur', 'Vaste bedrijfsklanten bestellen per WhatsApp en ontvangen een factuur per levering of per maand.')}
  ${card(ICON.clock, 'Geplande leveringen', 'Voor de service, wekelijks of dagen vooruit voor een event. Jij bepaalt het moment.')}
  ${card(ICON.chat, 'Vast aanspreekpunt', 'Eén nummer, één contactpersoon die je keuken, je adres en je voorkeuren kent.')}
</section>
${box('h-events', 'Events, festivals en locaties', p('Voor festivals op de NDSM-werf, bedrijfsfeesten op de Zuidas, boten op de Amstel en evenementenlocaties van Westergas tot de ArenA leveren we meerdere cilinders tegelijk, op het afgesproken moment en op het afgesproken punt. Vraag vooraf een offerte; grotere aantallen betekenen een lagere prijs per cilinder.'))}
${box('h-how', 'Zo werkt het voor bedrijven', `<ol class="steps"><li><strong>Eenmalig aanmelden</strong>Bedrijfsnaam, adres, contactpersoon en gewenste leverinstructies via WhatsApp.</li><li><strong>Bestellen per app</strong>Aantal cilinders en tijdstip. Je krijgt direct een bevestiging.</li><li><strong>Levering en factuur</strong>De koerier levert bij de keuken, receptie of achteringang. Facturatie per levering of per maand.</li></ol>`)}
${box('h-safe', 'Veilig in de keuken', p('Bewaar cilinders rechtop en vast, weg van fornuizen en warmte, en gebruik altijd de drukregelaar. Instrueer personeel over het aansluiten en afsluiten; zie <a href="/veilig-gebruik-lachgas/">veilig gebruik</a>. Verkoop en gebruik vallen onder de uitzonderingen van de Opiumwet voor professioneel en culinair gebruik; lees onze pagina over <a href="/wetgeving-lachgas/">wetgeving</a>.'))}`;
  const schemaExtra = [{ '@type': 'Service', name: 'Lachgas bezorging voor horeca en events Amsterdam', serviceType: 'B2B lachgas bezorging', provider: { '@id': S.LB_ID }, audience: { '@type': 'BusinessAudience', audienceType: 'Horeca, catering, evenementen' }, areaServed: { '@type': 'City', name: 'Amsterdam' } }];
  return { slug: 'lachgas-horeca-amsterdam', priority: '0.8', changefreq: 'monthly', html: S.page({ slug: 'lachgas-horeca-amsterdam', title: 'Lachgas horeca Amsterdam | Fastgas op factuur, 24/7 geleverd', description: 'Lachgas voor horeca, catering en events in Amsterdam: Fastgas 2000 g op factuur, gepland of binnen 20 minuten tijdens de service. 24/7.', h1: 'Lachgas voor horeca en events in Amsterdam', eyebrow: 'Zakelijk', lead: 'Voor restaurants, bars, hotels, cateraars en evenementen in Amsterdam leveren we originele Fastgas cilinders op factuur, gepland of binnen 20 minuten als het moet. Eén aanspreekpunt, 24 uur per dag.', crumbs: [HOME, ['Horeca en events', 'lachgas-horeca-amsterdam']], body, faq, schemaExtra, waText: 'Hoi, ik wil lachgas bestellen voor ons bedrijf in Amsterdam. Bedrijfsnaam en adres: ' }) };
}

function werkwijze() {
  const faq = [
    ['Hoe weet ik dat de koerier onderweg is?', 'Je krijgt een bevestiging met de verwachte tijd zodra je akkoord geeft, en de koerier belt of appt vlak voor aankomst.'],
    ['Wat controleren we bij de overdracht?', 'Het zegel op de cilinder en de werking van het ventiel. Daarna betaal je met pin of contant, of op factuur als bedrijf.'],
    ['Wat gebeurt er als de bezorging langer duurt dan beloofd?', 'We geven vooraf een eerlijke inschatting. Loopt het door drukte of afsluitingen uit, dan hoor je dat direct via WhatsApp met een nieuwe tijd.'],
  ];
  const body = `
${box('h-steps', 'Van bericht tot cilinder aan de deur', `<ol class="steps"><li><strong>Je bericht komt binnen</strong>Via WhatsApp of telefoon, 24 uur per dag. Een medewerker (geen bot) leest je adres en aantal.</li><li><strong>Prijs en tijd</strong>Je krijgt binnen een minuut de totaalprijs inclusief bezorging en de verwachte aankomsttijd.</li><li><strong>Koerier vertrekt</strong>Na je akkoord vertrekt de dichtstbijzijnde koerier met een verzegelde cilinder uit onze voorraad in Amsterdam.</li></ol><ol class="steps" start="4" style="margin-top:14px;counter-reset:s 3"><li><strong>Belletje vooraf</strong>Vlak voor aankomst belt of appt de koerier, zodat je niet hoeft te wachten bij de deur.</li><li><strong>Overdracht</strong>Zegel en ventiel controleren, betalen met pin of contant. Alleen aan 18+.</li><li><strong>Klaar</strong>Vragen achteraf of een lege cilinder retour? Stuur een WhatsApp; bij je volgende bestelling nemen we hem mee.</li></ol>`)}
${box('h-why', 'Waarom we 20 minuten kunnen beloven', p('Drie redenen: eigen voorraad in Amsterdam in plaats van een magazijn buiten de ring, koeriers die vanuit meerdere punten in de stad rijden, en vaste routes per stadsdeel. Daardoor rijden we in Centrum, West, Zuid en Oost vaak binnen een kwartier en in de overige stadsdelen binnen 20 minuten. Bekijk de tijden per <a href="/bezorggebieden/">bezorggebied</a>.'))}
${box('h-rules', 'Onze regels', `<ul><li>We leveren uitsluitend aan personen van 18 jaar en ouder en vragen zo nodig om legitimatie.</li><li>We leveren alleen voor toegestane toepassingen volgens de <a href="/wetgeving-lachgas/">Opiumwet</a> en weigeren bij twijfel.</li><li>We leveren uitsluitend originele, verzegelde Fastgas cilinders.</li><li>Prijs vooraf bevestigd; geen verrassingen aan de deur.</li><li>Persoonlijk contact, geen chatbot, geen webshop.</li></ul>`)}`;
  return { slug: 'werkwijze', priority: '0.6', changefreq: 'monthly', html: S.page({ slug: 'werkwijze', title: 'Werkwijze | Zo bezorgt Lachgas Amsterdam Direct binnen 20 min', description: 'Zo werkt bestellen bij Lachgas Amsterdam Direct: app of bel, prijs en tijd bevestigd, koerier vertrekt direct, zegelcontrole aan de deur. 24/7, 18+.', h1: 'Werkwijze: bestellen, koerier, overdracht, klaar', eyebrow: 'Werkwijze', lead: 'Geen webshop, geen account, geen wachten op een pakket. Zo gaat een bestelling bij Lachgas Amsterdam Direct, van je eerste bericht tot de cilinder aan de deur.', crumbs: [HOME, ['Werkwijze', 'werkwijze']], body, faq }) };
}

function pages() {
  return [bestellen(), kopen(), bezorgen(), fastgasAmsterdam(), tank(), horeca(), werkwijze()].concat(more.pages());
}

module.exports = { pages, notFound: more.notFound };
