import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-pittura-pareti';
const title = 'Calcolatore di Pittura e Diluizione per Pareti';
const description =
  'Calcola esattamente quanti litri o galloni di vernice ti servono per le tue pareti. Regola per strati, tipo di superficie, diluizione e ottieni il costo reale prima di acquistare.';

const faqData = [
  {
    question: 'Come calcolo la quantità esatta di vernice?',
    answer:
      'Moltiplica la superficie della parete per il numero di strati, poi dividi per la resa della vernice in metri quadrati o piedi quadrati per litro o gallone. Sottrai prima porte e finestre dall\'area totale.',
  },
  {
    question: 'Quanta vernice serve per una stanza standard?',
    answer:
      'Una stanza di 12 metri quadrati con soffitti alti 2,5 metri ha circa 30 metri quadrati di superficie muraria. Con due strati e una resa di 12 metri quadrati per litro, servono circa 5 litri di vernice.',
  },
  {
    question: 'Devo diluire la vernice prima di applicarla?',
    answer:
      'Le vernici plastiche a base d\'acqua sono solitamente pronte all\'uso o necessitano del 5 al 10 per cento di acqua sul primo strato. Le vernici smaltate o ad olio spesso richiedono un diluente specifico indicato sulla latta.',
  },
  {
    question: 'Quanti strati sono davvero necessari?',
    answer:
      'Le superfici nuove o molto assorbenti necessitano di un fondo più due mani di finitura. Rivedere una parete già dipinta in un colore simile di solito richiede solo uno o due strati.',
  },
  {
    question: 'Devo sottrarre porte e finestre?',
    answer:
      'Sì. Misura ogni apertura e sottraila dall\'area muraria totale. Come regola pratica, le porte sono circa 2 metri quadrati e le finestre circa 1,5 metri quadrati ciascuna.',
  },
  {
    question: 'Il tipo di superficie cambia la resa?',
    answer:
      'Sì. Le pareti lisce e preparate possono avere una resa fino a 14 metri quadrati per litro. Il calcestruzzo ruvido, l\'intonaco ruvido o il mattone assorbente possono far scendere la resa a 6 o 8 metri quadrati per litro.',
  },
];

const howToData = [
  {
    name: 'Misura le tue pareti',
    text: 'Misura la larghezza e l\'altezza di ogni parete. Moltiplicale per ottenere l\'area di ciascuna parete, poi somma tutte le pareti.',
  },
  {
    name: 'Sottrai le aperture',
    text: 'Misura porte e finestre e sottrai la loro area dal totale per ottenere la superficie reale da dipingere.',
  },
  {
    name: 'Scegli il tipo di vernice',
    text: 'Seleziona il tipo di vernice nel calcolatore. La plastica opaca, la plastica satinata e lo smalto hanno rese e raccomandazioni di diluizione diverse.',
  },
  {
    name: 'Imposta strati e prezzo',
    text: 'Indica quanti strati prevedi di applicare e il prezzo per litro o gallone. Il calcolatore restituirà la quantità e il costo totale esatti.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Calcolatore di Vernice: Acquista Esattamente Quello che Ti Serve',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dipingere una stanza senza calcolare prima di solito finisce con <strong>lattine mezze piene</strong> o corse d\'emergenza al negozio. Il motivo è semplice: la resa della vernice varia con la porosità della superficie, il cambio di colore e il numero di strati. Una parete liscia e precedentemente dipinta può avere una resa fino a 14 metri quadrati per litro, mentre una parete di intonaco ruvido può assorbire la stessa quantità e coprire solo 6 metri quadrati per litro.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Alto', label: 'Copertura Standard', icon: 'mdi:format-paint' },
        { value: '2 strati', label: 'Raccomandato', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Diluizione Tipica', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Come Funziona Realmente la Resa della Vernice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I produttori indicano sulla latta una resa teorica. Quel numero presuppone una superficie perfettamente liscia, non assorbente, bianca e applicata con un rullo professionale in condizioni ideali. Nel mondo reale, <strong>pareti porose, colori scuri e applicazione fai da te</strong> riducono quella resa dal 20 al 40 per cento. Il nostro calcolatore ti permette di scegliere profili realistici in modo da non rimanere a corto.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Vernice Plastica Opaca',
          description: 'La scelta più comune per gli interni. Alta copertura, facile da ritoccare e lavabile nella maggior parte delle qualità.',
          icon: 'mdi:palette',
          points: ['Copertura standard per interni', 'Diluizione: 5 al 10 per cento di acqua', 'Ideale per: soggiorni e camere da letto'],
        },
        {
          title: 'Vernice Plastica Satinata',
          description: 'Finitura leggermente lucida con maggiore resistenza all\'umidità e alle macchie. Più difficile da ritoccare senza segni.',
          icon: 'mdi:brightness-6',
          points: ['Copertura leggermente superiore', 'Diluizione: 5 per cento di acqua', 'Ideale per: cucine e bagni'],
        },
        {
          title: 'Vernice Smalto',
          description: 'Finitura dura e duratura per falegnameria, termosifoni e aree ad alto traffico. Richiede diluente o solvente specifico.',
          icon: 'mdi:spray',
          points: ['Finitura dura e duratura', 'Diluizione: 10 al 15 per cento di solvente', 'Ideale per: porte, cornici e mobili'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Misurazione Pratica delle Superfici',
      icon: 'mdi:ruler-square',
      badge: 'Suggerimento',
      html: '<p style="margin:0">Moltiplica la larghezza per l\'altezza di ogni parete. Per un totale rapido, somma tutte le larghezze e moltiplicalle per l\'altezza della stanza. Poi sottrai circa 2 metri quadrati per ogni porta standard e 1,5 metri quadrati per ogni finestra.</p>',
    },
    {
      type: 'title',
      text: 'Regole di Diluizione e Applicazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I primi strati su superfici nuove o riparate necessitano sempre di una leggera diluizione in modo che la vernice penetri e ancori. Gli strati di finitura devono essere applicati non diluiti o con il minimo indicato dal produttore. <strong>Una diluizione eccessiva rompe il pigmento</strong> e lascia zone trasparenti che richiedono uno strato aggiuntivo.',
    },
    {
      type: 'summary',
      title: 'Perché Calcolare Prima di Acquistare',
      items: [
        'Evita avanzi di vernice che si seccano nella latta e finiscono come rifiuto.',
        'Previene differenze di tonalità tra lotti acquistati in momenti diversi.',
        'Stima il budget con precisione: conosci il costo reale incluso fondo e attrezzi.',
        'Pianifica il lavoro in un\'unica volta senza interromperlo per materiale aggiuntivo.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Superficie e Vernice',
    labelMetric: 'Metrico',
    labelImperial: 'Imperiale',
    labelArea: 'Superficie totale da dipingere',
    labelAreaFt: 'Superficie totale da dipingere',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Resa della vernice',
    labelYieldFt: 'Resa della vernice',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Seleziona il tipo di vernice',
    btnPlasticMatTitle: 'Plastica Opaca',
    btnPlasticMatSub: 'Opaca · Acqua 5%',
    btnPlasticSatinTitle: 'Plastica Satinata',
    btnPlasticSatinSub: 'Satinata · Acqua 5%',
    btnEnamelTitle: 'Smalto',
    btnEnamelSub: 'Smalto · Solvente 10%',
    labelCoats: 'Numero di strati',
    unitCoats: 'strati',
    labelPrice: 'Prezzo per litro',
    labelPriceFt: 'Prezzo per gallone',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Percentuale di diluizione',
    unitDilution: '%',
    resultBadge: 'Calcolo vernice',
    labelPaint: 'Litri di vernice',
    labelPaintGal: 'Galloni di vernice',
    labelCost: 'Costo totale',
    labelWater: 'Liquido diluente',
    labelWaterGal: 'Liquido diluente',
    labelTotalVolume: 'Miscela totale',
    labelTotalVolumeGal: 'Miscela totale',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '€',
  },
};
