import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'airco-tonnage-calculator';
const title = 'Airconditioning Tonnage en Koelcapaciteit Calculator';
const description =
  'Bereken de exacte airconditioning grootte voor je kamer in BTU, frigorieën en tonnen. Voer ruimte, plafondhoogte, personen en warmtebronnen in.';

const faqData = [
  { question: 'Hoeveel BTU per vierkante meter?', answer: 'De standaard basis is 600 BTU per vierkante meter voor een plafond van 2,5 m in gematigd klimaat. Dit stijgt met hoogte, zon en personen.' },
  { question: 'Wat is een frigorie?', answer: 'Een frigorie is een oude koeleenheid gebruikt in Spanje en Latijns-Amerika. Eén frigorie is ongeveer 3,968 BTU per uur.' },
  { question: 'Hoe reken ik BTU om naar tonnen?', answer: 'Eén koeleton is 12.000 BTU per uur. Deel het totale BTU door 12.000 voor de tonnage.' },
  { question: 'Maakt plafondhoogte uit?', answer: 'Ja. Elke meter boven 2,7 m verhoogt de koelbehoefte met ongeveer 8%.' },
];

const howToData = [
  { name: 'Meet je kamer', text: 'Meet lengte en breedte in meters en vermenigvuldig voor de oppervlakte.' },
  { name: 'Tel personen en apparaten', text: 'Voeg personen en warmtebronnen zoals computers en tv\'s toe.' },
  { name: 'Selecteer zonlicht', text: 'Kies licht, gemiddeld of sterk op basis van direct zonlicht.' },
  { name: 'Lees de aanbeveling', text: 'De calculator toont BTU, frigorieën en tonnen voor elke markt.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Welke airconditioning maat heb ik nodig?', level: 2 },
    { type: 'paragraph', html: 'De juiste maat hangt af van oppervlakte, plafondhoogte, personen en zon. Gebruik deze calculator voor exacte BTU, frigorieën en tonnen.' },
    { type: 'table', headers: ['Oppervlakte', 'Aanbevolen BTU', 'Tonnage', 'Typisch gebruik'], rows: [['10 m² (kleine slaapkamer)', '6.000 – 7.000 BTU', '0,5 – 0,75 t', 'Gastenkamer'], ['15 m² (slaapkamer)', '9.000 – 10.000 BTU', '0,75 – 1 t', 'Hoofdslaapkamer'], ['20 m² (woonkamer)', '12.000 – 14.000 BTU', '1 – 1,25 t', 'Kleine woonkamer'], ['30 m² (open plan)', '18.000 – 21.000 BTU', '1,5 – 1,75 t', 'Studio'], ['40 m² (grote woonkamer)', '24.000 – 28.000 BTU', '2 – 2,5 t', 'Grote woonkamer + eetkamer']] },
    { type: 'title', text: 'Waarom de verkeerde maat geld kost', level: 2 },
    { type: 'paragraph', html: 'Een te kleine airco draait continu, bereikt nooit de temperatuur en slijt de compressor voortijdig. Een te grote blaast korte koude luchtstoten en laat de kamer vochtig.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU per m² basis', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU per ton', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU per frigorie', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Ruimte', labelRoomSizeFt: 'Ruimte', labelCeilingHeight: 'Plafondhoogte', labelCeilingHeightFt: 'Hoogte',
    labelPeople: 'Personen', labelHeatSources: 'Warmtebronnen', labelSunExposure: 'Zonlicht', labelRoomType: 'Kamertype',
    labelCalculate: 'Berekenen', labelResult: 'Resultaat', labelBtus: 'BTU/h', labelFrigorias: 'Frigorieën', labelTons: 'Tonnen',
    labelRequired: 'Vereist', labelRecommended: 'Aanbevolen', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'Frigorieën', labelUnitTons: 'Tonnen',
    labelMetric: 'Metrisch', labelImperial: 'Imperiaal', labelRoomCozy: 'Gezellig', labelRoomWarm: 'Warm', labelRoomHot: 'Heet',
    bdBaseCooling: 'Basis koeling', bdCeilingHeight: 'Plafondhoogte', bdPeople: 'Personen', bdHeatSources: 'Warmtebronnen', bdSunRoom: 'Zon & kamertype',
    sunLight: 'Licht', sunMedium: 'Gemiddeld', sunHeavy: 'Sterk',
    roomBedroom: 'Slaapkamer', roomLiving: 'Woonkamer', roomKitchen: 'Keuken', roomOffice: 'Kantoor', roomServer: 'Serverruimte',
    errorRequired: 'Vul alle velden in',
  },
};
