import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'klimaanlage-tonnage-rechner';
const title = 'Klimaanlagentonnage und Kühlleistungsrechner';
const description =
  'Berechne die exakte Klimaanlagengröße für deinen Raum in BTU, Frigorien und Tonnen. Gib Raumgröße, Deckenhöhe, Personen, Wärmequellen und Sonneneinstrahlung ein, um eine präzise Kühlempfehlung zu erhalten.';

const faqData = [
  { question: 'Wie viele BTU brauche ich pro Quadratmeter?', answer: 'Der Standardwert liegt bei 600 BTU pro Quadratmeter für eine Standarddeckenhöhe von 2,5 Metern in gemäßigtem Klima. Dieser Wert steigt mit Deckenhöhe, Sonneneinstrahlung, Personenanzahl und wärmeerzeugenden Geräten.' },
  { question: 'Was ist eine Frigoríe und wie vergleicht sie sich mit BTU?', answer: 'Eine Frigoríe ist eine ältere Kühlleistungseinheit, die in Spanien und Lateinamerika üblich ist. Eine Frigoríe entspricht etwa 3,968 BTU pro Stunde. Moderne Klimaanlagen geben oft beide Einheiten an, aber BTU ist der globale Standard.' },
  { question: 'Wie rechne ich BTU in Kühltonnen um?', answer: 'Eine Kühltonne entspricht 12.000 BTU pro Stunde. Teile deinen BTU-Gesamtbedarf durch 12.000, um die Tonnage zu erhalten. Beispiel: 24.000 BTU entsprechen 2 Tonnen.' },
  { question: 'Beeinflusst die Deckenhöhe die Klimaanlagengröße?', answer: 'Ja. Pro Meter über 2,7 Metern erhöht sich der Kühlbedarf um etwa 8%. Hohe Decken enthalten deutlich mehr Luftvolumen, das gekühlt werden muss.' },
];

const howToData = [
  { name: 'Raum ausmessen', text: 'Miss Länge und Breite in Metern und multipliziere sie, um die Fläche in Quadratmetern zu erhalten.' },
  { name: 'Personen und Geräte zählen', text: 'Zähle die Personen, die den Raum regelmäßig nutzen, und Wärmequellen wie Computer, Fernseher und Öfen.' },
  { name: 'Sonneneinstrahlung wählen', text: 'Wähle leicht, mittel oder stark je nach direkter Sonneneinstrahlung während der heißesten Tageszeit.' },
  { name: 'Empfehlung ablesen', text: 'Der Rechner zeigt BTU, Frigorien und Tonnen an, damit du in jedem Markt das passende Gerät kaufen kannst.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Welche Klimaanlagengröße brauche ich?', level: 2 },
    { type: 'paragraph', html: 'Die richtige Klimaanlagengröße hängt von der Raumfläche, Deckenhöhe, Personenanzahl, Sonneneinstrahlung und Wärmequellen ab. Verwende diesen Rechner, um die genauen BTU-, Frigorien- und Tonnage-Werte für deinen Raum zu erhalten.' },
    { type: 'table', headers: ['Raumgröße', 'Empfohlene BTU', 'Tonnage', 'Typische Nutzung'], rows: [['10 m² (kleines Schlafzimmer)', '6.000 - 7.000 BTU', '0,5 - 0,75 Tonnen', 'Gästezimmer, Homeoffice'], ['15 m² (Schlafzimmer)', '9.000 - 10.000 BTU', '0,75 - 1 Tonne', 'Hauptschlafzimmer'], ['20 m² (Wohnzimmer)', '12.000 - 14.000 BTU', '1 - 1,25 Tonnen', 'Kleines Wohnzimmer'], ['30 m² (offener Grundriss)', '18.000 - 21.000 BTU', '1,5 - 1,75 Tonnen', 'Studio oder offene Küche'], ['40 m² (großes Wohnzimmer)', '24.000 - 28.000 BTU', '2 - 2,5 Tonnen', 'Großes Wohnzimmer + Essbereich']] },
    { type: 'title', text: 'Warum die falsche Größe dich Geld kostet', level: 2 },
    { type: 'paragraph', html: 'Eine zu kleine Klimaanlage läuft ununterbrochen, erreicht nie die gewünschte Temperatur und verschleißt den Kompressor vorzeitig. Eine zu große Anlage bläst kurze Kaltluftstöße, schaltet sich vor der Entfeuchtung ab und hinterlässt ein kaltes, feuchtes Raumklima. Beide Fehler kosten Geld.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU pro m² Basis', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU pro Tonne', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU pro Frigoríe', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Raumfläche', labelRoomSizeFt: 'Raumfläche', labelCeilingHeight: 'Deckenhöhe', labelCeilingHeightFt: 'Deckenhöhe',
    labelPeople: 'Personen', labelHeatSources: 'Wärmequellen', labelSunExposure: 'Sonneneinstrahlung', labelRoomType: 'Raumtyp',
    labelCalculate: 'Berechnen', labelResult: 'Ergebnis', labelBtus: 'BTU/h', labelFrigorias: 'Frigorien', labelTons: 'Tonnen',
    labelRequired: 'Erforderlich', labelRecommended: 'Empfohlen', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'Frigorien', labelUnitTons: 'Tonnen',
    labelMetric: 'Metrisch', labelImperial: 'Imperial', labelRoomCozy: 'Gemütlich', labelRoomWarm: 'Warm', labelRoomHot: 'Heiß',
    bdBaseCooling: 'Grundkühlung', bdCeilingHeight: 'Deckenhöhe', bdPeople: 'Personen', bdHeatSources: 'Wärmequellen', bdSunRoom: 'Sonne & Raumtyp',
    sunLight: 'Leicht', sunMedium: 'Mittel', sunHeavy: 'Stark',
    roomBedroom: 'Schlafzimmer', roomLiving: 'Wohnzimmer', roomKitchen: 'Küche', roomOffice: 'Büro', roomServer: 'Serverraum',
    errorRequired: 'Bitte fülle alle Felder aus',
  },
};
