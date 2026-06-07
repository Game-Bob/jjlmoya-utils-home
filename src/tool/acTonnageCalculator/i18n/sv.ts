import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tonnage-kalkylator-luftkonditionering';
const title = 'Tonnage- och Kylkapacitetskalkylator för Luftkonditionering';
const description =
  'Beräkna exakt luftkonditioneringsstorlek för ditt rum i BTU, frigorier och ton. Ange rumsstorlek, takhöjd, personer och värmekällor.';

const faqData = [
  { question: 'Hur många BTU per kvadratmeter?', answer: 'Standardbasen är 600 BTU per kvadratmeter för ett tak på 2,5 m i tempererat klimat. Det ökar med höjd, sol och personer.' },
  { question: 'Vad är en frigorie?', answer: 'En frigorie är en äldre kylenhet som används i Spanien och Latinamerika. En frigorie är ungefär 3,968 BTU per timme.' },
  { question: 'Hur konverterar jag BTU till ton?', answer: 'Ett kylton är 12 000 BTU per timme. Dela totala BTU med 12 000 för tonnage.' },
  { question: 'Påverkar takhöjden?', answer: 'Ja. Varje meter över 2,7 m ökar kylbehovet med cirka 8%.' },
];

const howToData = [
  { name: 'Mät ditt rum', text: 'Mät längd och bredd i meter och multiplicera för att få arean.' },
  { name: 'Räkna personer och enheter', text: 'Lägg till personer och värmekällor som datorer och TV-apparater.' },
  { name: 'Välj soleksponering', text: 'Välj lätt, medel eller kraftig baserat på direkt solljus.' },
  { name: 'Läs rekommendationen', text: 'Kalkylatorn visar BTU, frigorier och ton för alla marknader.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vilken luftkonditioneringsstorlek behöver jag?', level: 2 },
    { type: 'paragraph', html: 'Rätt storlek beror på area, takhöjd, personer och sol. Använd denna kalkylator för exakta BTU, frigorier och ton.' },
    { type: 'table', headers: ['Area', 'Rekommenderade BTU', 'Tonnage', 'Typisk användning'], rows: [['10 m² (litet sovrum)', '6 000 – 7 000 BTU', '0,5 – 0,75 t', 'Gästrum'], ['15 m² (sovrum)', '9 000 – 10 000 BTU', '0,75 – 1 t', 'Huvudsovrum'], ['20 m² (vardagsrum)', '12 000 – 14 000 BTU', '1 – 1,25 t', 'Litet vardagsrum'], ['30 m² (öppen planlösning)', '18 000 – 21 000 BTU', '1,5 – 1,75 t', 'Studio'], ['40 m² (stort vardagsrum)', '24 000 – 28 000 BTU', '2 – 2,5 t', 'Stort vardagsrum + matsal']] },
    { type: 'title', text: 'Varför fel storlek kostar pengar', level: 2 },
    { type: 'paragraph', html: 'En för liten AC kör oavbrutet, når aldrig temperaturen och sliter ut kompressorn i förtid. En för stor blåser korta kalla luftstötar och lämnar rummet fuktigt.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU per m² bas', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU per ton', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU per frigorie', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Rumsarea', labelRoomSizeFt: 'Area', labelCeilingHeight: 'Takhöjd', labelCeilingHeightFt: 'Höjd',
    labelPeople: 'Personer', labelHeatSources: 'Värmekällor', labelSunExposure: 'Solexponering', labelRoomType: 'Rumstyp',
    labelCalculate: 'Beräkna', labelResult: 'Resultat', labelBtus: 'BTU/h', labelFrigorias: 'Frigorier', labelTons: 'Ton',
    labelRequired: 'Krävs', labelRecommended: 'Rekommenderas', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'Frigorier', labelUnitTons: 'Ton',
    labelMetric: 'Metrisk', labelImperial: 'Imperial', labelRoomCozy: 'Mysigt', labelRoomWarm: 'Varmt', labelRoomHot: 'Het',
    bdBaseCooling: 'Grundkylning', bdCeilingHeight: 'Takhöjd', bdPeople: 'Personer', bdHeatSources: 'Värmekällor', bdSunRoom: 'Sol & rumstyp',
    sunLight: 'Lätt', sunMedium: 'Mellan', sunHeavy: 'Kraftig',
    roomBedroom: 'Sovrum', roomLiving: 'Vardagsrum', roomKitchen: 'Kök', roomOffice: 'Kontor', roomServer: 'Serverrum',
    errorRequired: 'Fyll i alla fält',
  },
};
