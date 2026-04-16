import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'calcolatore-risparmio-led';
const title = 'Calcolatore Risparmio LED';
const description =
  'Calcola quanti soldi e kWh risparmi sostituendo le vecchie lampadine con i LED. Scopri il tuo risparmio annuo esatto, mensile e la riduzione di CO2.';

const faqData = [
  {
    question: 'Quanto risparmia davvero una lampadina LED?',
    answer:
      'Una lampadina LED risparmia tra l\'80% e il 90% di energia rispetto a una incandescente. Ad esempio, passare da 60W a 9W riduce il costo elettrico di quella lampada al minimo, mantenendo la stessa luminosità.',
  },
  {
    question: 'In quanto tempo si ammortizza il passaggio a LED?',
    answer:
      'Dato il basso costo attuale dei LED e il grande risparmio, l\'investimento si recupera solitamente in meno di 4 mesi di uso normale. Se le luci restano accese molte ore, il rientro è ancora più veloce.',
  },
  {
    question: 'Cosa succede se metto una lampadina LED di potenza superiore?',
    answer:
      'I LED generano pochissimo calore, quindi puoi usare lampadine con più lumen in lampade che prima erano limitate dal calore delle incandescenti, rispettando i limiti elettrici dell\'attacco.',
  },
  {
    question: 'Durano davvero quanto scritto sulla scatola?',
    answer:
      'Un LED di qualità dura dalle 15.000 alle 50.000 ore. Con un uso domestico medio di 4 ore al giorno, una lampadina può durare oltre 15 anni.',
  },
  {
    question: 'Posso usare i LED con un varialuce (Dimmer)?',
    answer:
      'Solo se la lampadina specifica "Dimmerabile". I LED standard non funzionano bene con i vecchi regolatori e possono sfarfallare.',
  },
  {
    question: 'Devo cambiare tutta la lampada?',
    answer:
      'Nel 99% dei casi no. Basta sostituire la lampadina con una LED con lo stesso attacco (E27, E14, GU10, ecc.).',
  },
];

const howToData = [
  {
    name: 'Conta i punti luce',
    text: 'Controlla quante lampadine a incandescenza o alogene hai in casa e annota la loro potenza in watt.',
  },
  {
    name: 'Scegli il LED equivalente',
    text: 'Seleziona il tipo di lampadina attuale nel calcolatore. I valori LED equivalenti verranno assegnati automaticamente.',
  },
  {
    name: 'Imposta le ore di utilizzo',
    text: 'Indica quante ore al giorno restano accese mediamente le lampadine.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Efficienza Energetica - ENEA',
      url: 'https://www.efficienzaenergetica.enea.it/',
    },
    {
      name: 'Etichettatura Energetica UE',
      url: 'https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/energy-label-and-ecodesign/energy-efficient-products_it',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida al Risparmio con i LED: Come Tagliare la Bolletta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Passare all\'illuminazione <strong>LED (Light Emitting Diode)</strong> è uno degli investimenti domestici più rapidi. Ogni watt risparmiato si traduce in un risparmio immediato. Una lampadina LED da 9W offre la stessa luce di una da 60W con un <strong>85% di consumo in meno</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Risparmio Energetico', icon: 'mdi:lightning-bolt' },
        { value: '25.000h', label: 'Vita Utile LED', icon: 'mdi:clock-outline' },
        { value: '< 4 mesi', label: 'Ammortamento', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lampadina Incandescente',
          description: 'Tecnologia del XX secolo basata sul calore. Il 95% dell\'energia viene sprecata in calore.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% energia sprecata in calore', 'Vita utile: 1.000 ore', 'Costi operativi altissimi'],
        },
        {
          title: 'Tecnologia LED Moderna',
          description: 'Lo standard di efficienza attuale. Accensione istantanea e minima emissione di calore.',
          icon: 'mdi:led-outline',
          points: ['85–90% risparmio diretto', 'Vita utile: 25.000–50.000 ore', 'Pochissimo calore'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'La Fisica del Risparmio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una lampadina incandescente converte solo il 5% di energia in luce. I LED usano semiconduttori per una efficienza superiore. <strong>Non guardare i watt, guarda i lumen:</strong> una vecchia lampadina da 60W emette circa 800 lm; oggi bastano 8–9W LED.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabella Equivalenze Rapide',
      icon: 'mdi:table',
      badge: 'Riferimento',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W incandescente</strong> → LED 5–6W (450 lm)</li><li><strong>60W incandescente</strong> → LED 8–10W (800 lm)</li><li><strong>100W incandescente</strong> → LED 13–15W (1500 lm)</li><li><strong>50W alogena</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Vantaggi del LED oltre il denaro',
      items: [
        'Vita estrema: oltre 15 anni con uso normale.',
        'Accensione istantanea al 100% della luminosità.',
        'Antiscottatura: riduce il carico del climatizzatore in estate.',
        'Ecologici: senza mercurio né gas tossici.',
        'Compatibili con quasi tutti gli attacchi esistenti.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configurazione Casa',
    labelBulbs: 'Lampadine da cambiare',
    unitBulbs: 'unità',
    labelType: 'Tipo lampadina attuale',
    labelHours: 'Ore di luce al giorno',
    labelPrice: 'Prezzo elettricità',
    unitPrice: '€/kWh',
    resultBadge: 'Calcolo risparmio reale',
    labelAnnual: 'Risparmio annuo',
    labelMonthly: 'Mensile',
    labelEfficiency: 'Efficienza',
    labelCo2: 'Riduzione impronta CO₂',
    unitLess: '% in meno',
    currencySign: '€',
    btnInc60Title: 'Incandescente',
    btnInc60Sub: 'Classica (60W)',
    btnInc40Title: 'Incandescente',
    btnInc40Sub: 'Piccola (40W)',
    btnInc100Title: 'Incandescente',
    btnInc100Sub: 'Grande (100W)',
    btnHalo50Title: 'Alogena',
    btnHalo50Sub: 'Faretto (50W)',
    usageNever: 'Quasi mai',
    usageLow: 'Poco uso',
    usageNormal: 'Normale',
    usageModerate: 'Moderato',
    usageHeavy: 'Intenso',
    usagePro: 'Professionale',
    usageVeryHeavy: 'Molto intenso',
    usageAlways: 'Sempre accesa',
  },
};
