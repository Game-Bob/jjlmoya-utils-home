import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'punto-di-rugiada';
const title = 'Calcolatore Punto di Rugiada';
const description = 'Calcola la temperatura di condensazione sulle pareti usando umidità e temperatura ambiente. Uno strumento essenziale per prevenire muffe e proteggere la salute della casa.';

const faqData = [
  {
    question: 'Cos\'è esattamente il punto di rugiada?',
    answer: 'È la temperatura alla quale l\'aria deve raffreddarsi affinché il vapore acqueo si condensi in acqua liquida. Più alta è l\'umidità relativa, più il punto di rugiada è vicino alla temperatura attuale.',
  },
  {
    question: 'Perché compare la muffa negli angoli della mia casa?',
    answer: 'Gli angoli sono spesso ponti termici dove la parete è più fredda. Se la temperatura della superficie scende sotto il punto di rugiada, si forma condensa. La muffa ha bisogno di questa umidità costante per crescere.',
  },
  {
    question: 'Come posso abbassare l\'umidità in casa?',
    answer: 'Il modo più efficace è ventilare (specialmente dopo la doccia o mentre si cucina) e usare deumidificatori. Mantenere una temperatura costante aiuta anche l\'aria a trattenere più vapore senza condensare.',
  },
  {
    question: 'La muffa da condensa è pericolosa?',
    answer: 'Sì. La muffa rilascia spore che possono causare problemi respiratori, allergie e asma. Rilevare il rischio di condensa con questo calcolatore è il primo passo per una casa sana.',
  },
];

const howToData = [
  {
    name: 'Misurare temperatura e umidità',
    text: 'Usa un termometro e un igrometro per conoscere i valori attuali della stanza.',
  },
  {
    name: 'Inserire i valori',
    text: 'Imposta la temperatura in gradi Celsius e la percentuale di umidità nel calcolatore.',
  },
  {
    name: 'Ottenere la temperatura critica',
    text: 'Lo strumento ti dirà a quale temperatura esatta l\'acqua inizierà a condensare sulle superfici.',
  },
  {
    name: 'Verificare le superfici',
    text: 'Se hai un termometro laser, misura la temperatura delle pareti. Se è uguale o inferiore al risultato, devi ventilare o isolare.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Approssimazione di Magnus per il Punto di Rugiada',
      url: 'https://it.wikipedia.org/wiki/Punto_di_rugiada',
    },
    {
      name: 'WMO: Guide to Meteorological Instruments',
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cos\'è il Punto di Rugiada e perché è importante per la tua casa?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il punto di rugiada è la temperatura alla quale l\'aria deve raffreddarsi affinché il vapore acqueo si condensi. In casa, questo valore segna il confine tra una casa sana e una con problemi di umidità. Quando la temperatura di una parete scende sotto questo punto, appare la condensa — l\'ambiente ideale per la proliferazione di muffe nocive.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Differenza Sicura', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Umidità Ideale', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Pericolo Estremo', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Formula di Magnus Tetens',
          description: 'Utilizziamo l\'approssimazione di Magnus-Tetens, raccomandata dall\'Organizzazione Meteorologica Mondiale per la sua precisione scientifica tra 0°C e 50°C.',
          icon: 'mdi:calculator',
          points: ['Precisione scientifica validata', 'Ideale per ambienti domestici'],
        },
        {
          title: 'Ponti Termici e Muffa',
          description: 'Gli angoli e i telai delle finestre sono spesso i punti più freddi. Se la loro temperatura scende sotto il punto di rugiada, la muffa è inevitabile.',
          icon: 'mdi:home-thermometer',
          points: ['Gli angoli sono i punti più critici', 'L\'isolamento previene la condensa'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Livelli di Rischio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Rischio Basso (diff. &gt; 5°C):</strong> Le tue pareti sono sicure. <strong>Rischio Medio (3–5°C):</strong> Controlla gli angoli. <strong>Rischio Alto (1–3°C):</strong> Condensa probabile sui vetri — ventila subito. <strong>Pericolo Estremo (&lt; 1°C):</strong> Condensa attiva con rischio muffa nera.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La Regola d\'Oro',
      icon: 'mdi:thermometer-alert',
      badge: 'Consiglio',
      html: '<p>Se la parete è a meno di <strong>3°C dal punto di rugiada</strong>, rischi la condensa imminente. Ventila spesso e mantieni l\'umidità tra il 40% e il 60%.</p>',
    },
    {
      type: 'summary',
      title: 'Come prevenire la condensa',
      items: [
        'Ventila quotidianamente, specie dopo doccia o cucina.',
        'Mantieni l\'umidità relativa tra il 40% e il 60%.',
        'Usa le cappe aspiranti durante la cottura.',
        'Evita di asciugare i panni in casa senza ricircolo d\'aria.',
        'Isola le pareti per eliminare le superfici fredde.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Temperatura Ambiente',
    labelHumidity: 'Umidità Relativa',
    labelDewPoint: 'Punto di Rugiada',
    riskLow: 'Rischio Basso',
    riskMedium: 'Rischio Medio',
    riskHigh: 'Rischio Alto',
    riskExtreme: 'Pericolo Estremo',
    riskLowDesc: 'Differenza > 5°C. Pareti sicure.',
    riskMediumDesc: 'Differenza 3–5°C. Controlla gli angoli.',
    riskHighDesc: 'Differenza 1–3°C. Ventila subito.',
    riskExtremeDesc: 'Differenza < 1°C. Condensa attiva.',
  },
};
