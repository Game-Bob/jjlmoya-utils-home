import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-tonnellaggio-climatizzatore';
const title = 'Calcolatore di Tonnellaggio e Capacità di Raffreddamento';
const description =
  'Calcola la dimensione esatta del condizionatore per la tua stanza in BTU, frigorie e tonnellate. Inserisci superficie, altezza del soffitto, occupanti e fonti di calore.';

const faqData = [
  { question: 'Quanti BTU per metro quadro?', answer: 'La base standard è 600 BTU per metro quadro per un soffitto di 2,5 m in clima temperato. Aumenta con altezza, sole e persone.' },
  { question: 'Cos\'è una frigoria?', answer: 'Una frigoria è un\'unità di raffreddamento usata in Spagna e America Latina. Una frigoria equivale a circa 3,968 BTU all\'ora.' },
  { question: 'Come convertire BTU in tonnellate?', answer: 'Una tonnellata di refrigerazione equivale a 12.000 BTU all\'ora. Dividi i BTU totali per 12.000.' },
  { question: 'L\'altezza del soffitto conta?', answer: 'Sì. Ogni metro oltre i 2,7 m aumenta il fabbisogno di raffreddamento di circa l\'8%.' },
];

const howToData = [
  { name: 'Misura la stanza', text: 'Misura lunghezza e larghezza in metri e moltiplica per ottenere l\'area in metri quadri.' },
  { name: 'Conta persone e dispositivi', text: 'Aggiungi le persone e le fonti di calore come computer e televisori.' },
  { name: 'Seleziona esposizione solare', text: 'Scegli leggera, media o forte in base al sole diretto.' },
  { name: 'Leggi il risultato', text: 'Il calcolatore mostra BTU, frigorie e tonnellate per qualsiasi mercato.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Di che dimensione ho bisogno il condizionatore?', level: 2 },
    { type: 'paragraph', html: 'La dimensione giusta dipende da superficie, altezza soffitto, persone e sole. Usa questo calcolatore per BTU, frigorie e tonnellate esatti.' },
    { type: 'table', headers: ['Superficie', 'BTU raccomandati', 'Tonnellaggio', 'Uso tipico'], rows: [['10 m² (piccola camera)', '6.000 - 7.000 BTU', '0,5 - 0,75 t', 'Camera ospiti'], ['15 m² (camera)', '9.000 - 10.000 BTU', '0,75 - 1 t', 'Camera principale'], ['20 m² (soggiorno)', '12.000 - 14.000 BTU', '1 - 1,25 t', 'Piccolo soggiorno'], ['30 m² (open space)', '18.000 - 21.000 BTU', '1,5 - 1,75 t', 'Studio'], ['40 m² (grande soggiorno)', '24.000 - 28.000 BTU', '2 - 2,5 t', 'Grande soggiorno + pranzo']] },
    { type: 'title', text: 'Perché sbagliare dimensione costa denaro', level: 2 },
    { type: 'paragraph', html: 'Un condizionatore sottodimensionato funziona sempre, non raggiunge mai la temperatura e usurà il compressore. Uno sovradimensionato emette aria fredda a raffiche e lascia la stanza umida.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU per m² base', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU per tonnellata', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU per frigoria', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Superficie stanza', labelRoomSizeFt: 'Superficie', labelCeilingHeight: 'Altezza soffitto', labelCeilingHeightFt: 'Altezza',
    labelPeople: 'Persone', labelHeatSources: 'Fonti di calore', labelSunExposure: 'Esposizione solare', labelRoomType: 'Tipo di stanza',
    labelCalculate: 'Calcola', labelResult: 'Risultato', labelBtus: 'BTU/h', labelFrigorias: 'Frigorie', labelTons: 'Tonnellate',
    labelRequired: 'Necessario', labelRecommended: 'Raccomandato', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'Frigorie', labelUnitTons: 'Tonnellate',
    labelMetric: 'Metrico', labelImperial: 'Imperiale', labelRoomCozy: 'Accogliente', labelRoomWarm: 'Caldo', labelRoomHot: 'Molto caldo',
    bdBaseCooling: 'Raffreddamento base', bdCeilingHeight: 'Altezza soffitto', bdPeople: 'Persone', bdHeatSources: 'Fonti di calore', bdSunRoom: 'Sole e tipo stanza',
    sunLight: 'Leggera', sunMedium: 'Media', sunHeavy: 'Forte',
    roomBedroom: 'Camera da letto', roomLiving: 'Soggiorno', roomKitchen: 'Cucina', roomOffice: 'Ufficio', roomServer: 'Server',
    errorRequired: 'Compila tutti i campi',
  },
};
