import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-di-illuminazione-e-lumen-per-la-casa';
const title = 'Calcolatore di Illuminazione e Lumen per la Casa';
const description =
  'Calcola esattamente quanti lumen e lampadine ti servono per ogni stanza. Seleziona il tipo di stanza, le dimensioni e il tipo di lampadina per ottenere un piano di illuminazione professionale con stime lux in tempo reale.';

const faqData = [
  {
    question: 'Quanti lumen mi servono per un soggiorno?',
    answer:
      'Per un soggiorno tipico, punta a circa 150 lux sul pavimento. Moltiplica l\'area della stanza in metri quadrati per 150 per ottenere i lumen necessari. Per una stanza di 20 metri quadrati, servono circa 3.000 lumen.',
  },
  {
    question: 'Qual è la differenza tra lux e lumen?',
    answer:
      'I lumen misurano la produzione totale di luce di una lampadina. I lux misurano la luce che effettivamente raggiunge una superficie. Una stanza con soffitti alti o pareti scure ha bisogno di più lumen per raggiungere lo stesso livello di lux perché la luce viene persa per distanza e assorbimento.',
  },
  {
    question: 'Le lampadine LED risparmiano davvero energia?',
    answer:
      'Sì. Le lampadine LED producono circa 100 lumen per watt, mentre le incandescenti ne producono solo circa 15. Una lampadina LED da 10W dà la stessa luce di una incandescente da 60W, usando un sesto dell\'elettricità.',
  },
  {
    question: 'Come il colore della stanza influisce sui bisogni di illuminazione?',
    answer:
      'Le pareti e i soffitti scuri assorbono la luce. In una stanza con superfici scure, potresti aver bisogno del 50% in più di lumen rispetto alla raccomandazione standard.',
  },
  {
    question: 'Qual è un buon livello di lux per leggere?',
    answer:
      'Per leggere comodamente, servono da 300 a 500 lux sulla pagina. L\'illuminazione ambientale generale fornisce solitamente da 150 a 200 lux, quindi aggiungi una lampada da lavoro vicino al tuo punto di lettura per la luminosità extra.',
  },
  {
    question: 'Posso dimmerare le lampadine LED?',
    answer:
      'Solo se sono contrassegnate come dimmerabili. Le LED standard potrebbero lampeggiare o avere una durata ridotta quando collegate a un dimmer. Controlla sempre la confezione per il simbolo dimmerabile prima di installare.',
  },
];

const howToData = [
  {
    name: 'Scegli il tipo di stanza',
    text: 'Seleziona la funzione della stanza. Cucine e uffici hanno bisogno di luce più intensa rispetto a camere da letto o corridoi.',
  },
  {
    name: 'Inserisci le dimensioni',
    text: 'Inserisci larghezza, lunghezza e altezza del soffitto della stanza. Il calcolatore le usa per determinare l\'indice della stanza e il fattore di utilizzo della luce.',
  },
  {
    name: 'Seleziona il tipo di lampadina e il numero',
    text: 'Scegli la tecnologia della lampadina che preferisci e quanti corpi illuminanti hai. Il calcolatore ti dirà se ti servono più lampadine.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Completa alla Progettazione dell\'Illuminazione Domestica e alla Pianificazione dei Lumen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'illuminazione adeguata trasforma una casa in un luogo accogliente. Oltre all\'estetica, la giusta quantità di luce influenza l\'umore, la produttività e persino la salute degli occhi. <strong>Il nostro calcolatore di illuminazione per la casa</strong> ti aiuta a determinare esattamente quanti lumen ti servono per ogni stanza, tenendo conto delle dimensioni della stanza, dell\'altezza del soffitto, dei colori delle superfici e del tipo di lampadina.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Intervallo Lux Consigliato', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'Efficienza LED', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Fattore di Manutenzione', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Illuminazione Ambientale Calda',
          description: 'Ideale per soggiorni e camere da letto. Crea un\'atmosfera accogliente e riduce l\'affaticamento visivo la sera.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Temperatura colore calda (2700K)', 'Molteplici sorgenti dimmerabili'],
        },
        {
          title: 'Illuminazione da Lavoro Luminosa',
          description: 'Essenziale per cucine, uffici e bagni. Fornisce una visibilità chiara per lavori dettagliati.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Bianco freddo (4000K)', 'Focalizzata sulle superfici di lavoro'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Perché le Dimensioni della Stanza sono Importanti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La luce si espande e si indebolisce con la distanza. Una lampadina che è abbastanza luminosa per un soffitto di 2,5 metri potrebbe essere troppo fioca per un soffitto di 4 metri. Il calcolatore tiene conto di questo utilizzando la formula dell\'indice della stanza, che considera sia l\'area del pavimento che l\'altezza di montaggio per stimare quanta luce raggiunge effettivamente il tuo piano di lavoro.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabella di Riferimento Rapida Lux',
      icon: 'mdi:table',
      badge: 'Riferimento',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Soggiorno</strong> → 150 lux</li><li><strong>Cucina</strong> → 300 lux</li><li><strong>Camera</strong> → 100 lux</li><li><strong>Bagno</strong> → 200 lux</li><li><strong>Ufficio</strong> → 500 lux</li><li><strong>Corridoio</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Consigli da Professionisti per una Migliore Illuminazione',
      items: [
        'Sovrapponi tre tipi di luce: ambientale, da lavoro e d\'accento.',
        'Usa dimmer per regolare la luminosità in momenti diversi della giornata.',
        'Scegli lampadine LED per lunga durata e basso consumo energetico.',
        'Posiziona le lampade da lavoro sul lato opposto alla tua mano dominante per evitare ombre.',
        'Considera lampadine smart per programmazione automatica e variazioni di temperatura colore.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Calcolatore Illuminazione Stanza',
    labelRoomType: 'Tipo di stanza',
    labelRoomWidth: 'Larghezza',
    labelRoomLength: 'Lunghezza',
    labelHeight: 'Soffitto',
    labelBulbType: 'Lampadina',
    labelBulbWatt: 'Potenza',
    labelFixtures: 'Corpi illuminanti',
    labelAmbient: 'Ambiente',
    btnAmbientCozy: 'Cozy',
    btnAmbientNormal: 'Normale',
    btnAmbientBright: 'Luminoso',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'pz',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Lux obiettivo',
    labelCurrentLux: 'Lux attuali',
    labelBulbsNeeded: 'Lampadine necessarie',
    labelRoomArea: 'Superficie',
    statusOptimal: 'Perfetto',
    statusInsufficient: 'Troppo Scuro',
    statusExcess: 'Troppo Luminoso',
    btnLiving: 'Soggiorno',
    btnKitchen: 'Cucina',
    btnBedroom: 'Camera',
    btnBathroom: 'Bagno',
    btnOffice: 'Ufficio',
    btnHallway: 'Corridoio',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Alogena',
    btnBulbIncandescent: 'Incandescente',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'La tua illuminazione è perfettamente bilanciata per questa stanza.',
    tipInsufficient: 'Aggiungi più corpi illuminanti o lampadine di potenza superiore.',
    tipExcess: 'Riduci i corpi illuminanti o diminuisci per risparmiare energia.',
    labelManualAdjust: 'Regolazione manuale',
    labelSummary: 'Il tuo piano di illuminazione',
    labelTotalLumens: 'Lumen totali necessari',
    labelSuggestedSetup: 'Configurazione consigliata',
    btnExport: 'Esporta PDF',
  },
};
