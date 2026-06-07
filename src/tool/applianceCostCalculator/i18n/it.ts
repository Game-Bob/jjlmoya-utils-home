import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-costo-elettrodomestici';
const title = 'Calcolatore del Costo per Ciclo degli Elettrodomestici di Casa';
const description =
  'Calcola il costo reale di ogni carico della tua lavatrice, lavastoviglie e asciugatrice. Scopri esattamente quanto costano in elettricità, acqua e detersivo ogni ciclo e quanto puoi risparmiare passando alla modalità Eco.';

const faqData = [
  {
    question: 'Quanto costa un ciclo di lavatrice?',
    answer:
      'Un tipico ciclo Eco a 40C consuma circa 0,45 kWh di elettricità e 40 litri di acqua. Con prezzi europei medi, costa approssimativamente da 0,10 a 0,15 euro a carico. Un ciclo intensivo a 60C può superare 1,2 kWh e 70 litri, portando il costo sopra 0,30 euro.',
  },
  {
    question: 'È più economico usare la lavastoviglie di notte?',
    answer:
      'Se il tuo fornitore di energia elettrica utilizza tariffe orarie, usare la lavastoviglie nelle ore di punta può ridurre il costo energetico del 30 per cento o più. Le ore di punta sono tipicamente le mattine e le sere feriali.',
  },
  {
    question: 'L\'asciugatrice consuma molta elettricità?',
    answer:
      'Sì. L\'asciugatrice è uno degli elettrodomestici più intensivi in energia. Un carico completo può consumare da 2,5 a 3,5 kWh, costando da 0,50 a 0,80 euro a ciclo. Usare un\'asciugatrice con pompa di calore o stendere i panni all\'aperto può ridurre questo costo dal 60 all\'80 per cento.',
  },
  {
    question: 'Quanta acqua usa una lavastoviglie?',
    answer:
      'Le lavastoviglie moderne sono sorprendentemente efficienti. Un ciclo Eco standard usa solo da 8 a 12 litri di acqua a carico, mentre un programma intensivo può usare da 14 a 16 litri. Questo è molto meno che lavare gli stessi piatti a mano sotto il rubinetto, che consuma tipicamente da 40 a 60 litri.',
  },
  {
    question: 'Qual è l\'ora più economica per usare gli elettrodomestici?',
    answer:
      'Con tariffe orarie, i periodi più economici sono solitamente a tarda notte, molto presto al mattino e durante i fine settimana. Queste fasce orarie possono essere dal 30 al 50 per cento più economiche rispetto alle ore di punta feriali.',
  },
  {
    question: 'Passare alla modalità Eco fa davvero risparmiare soldi?',
    answer:
      'Assolutamente sì. Le modalità Eco usano temperature più basse, fasi di riscaldamento più brevi e meno acqua. Nel corso di un anno intero, passare da Normale a Eco su lavatrice e lavastoviglie può far risparmiare da 50 a 100 euro combinando elettricità e acqua.',
  },
];

const howToData = [
  {
    name: 'Seleziona il tuo elettrodomestico',
    text: 'Tocca l\'icona della lavatrice, lavastoviglie o asciugatrice nella parte superiore del calcolatore. Ogni elettrodomestico ha diversi profili di consumo energetico e idrico.',
  },
  {
    name: 'Scegli un tipo di ciclo',
    text: 'Usa il selettore Eco, Normale o Intensivo per impostare il programma di lavaggio. Eco usa meno energia e acqua. Intensivo consuma il massimo.',
  },
  {
    name: 'Inserisci i tuoi prezzi locali',
    text: 'Digita il tuo prezzo dell\'elettricità per kWh e il tuo prezzo dell\'acqua per litro. Puoi trovarli sulla tua bolletta o sul sito del tuo fornitore.',
  },
  {
    name: 'Imposta la frequenza di uso',
    text: 'Indica quanti cicli fai a settimana. Questo permette al calcolatore di stimare il tuo costo annuo e i potenziali risparmi annuali.',
  },
  {
    name: 'Scegli l\'ora di utilizzo',
    text: 'Seleziona l\'ora in cui pianifichi di usare l\'elettrodomestico. Le ore di punta sono evidenziate in rosso. Le ore fuori punta sono verdi e più economiche se hai una tariffa oraria.',
  },
  {
    name: 'Attiva i costi del detersivo',
    text: 'Abilita l\'interruttore del detersivo se vuoi che lo scontrino includa una stima per polvere, liquido o capsule a ciclo.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'Il Costo Nascosto di Ogni Carico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte delle persone non ha idea di quanto costi realmente un ciclo di lavatrice. Vedono la bolletta trimestrale e assumono che gli elettrodomestici siano economici. La realtà è che una famiglia che fa cinque carichi a settimana può spendere oltre 200 euro all\'anno solo per lavare. Aggiungi la lavastoviglie tre volte a settimana e l\'asciugatrice due volte, e il totale supera i 500 euro annuali. Questo calcolatore scompone ogni centesimo per ottimizzare le tue abitudini.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Lavaggio Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Acqua Lavaggio Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Sovrapprezzo Punta', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Perché le Piccole Modifiche si Moltiplicano',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un solo grado di temperatura o pochi litri d\'acqua sembrano insignificanti in un ciclo. Ma in 250 cicli annuali, quelle piccole differenze si traducono in soldi seri. Passare da 60C a 40C riduce il consumo energetico di circa il 40 per cento a carico. Passare da Normale a Eco sulla lavastoviglie risparmia circa 3 litri d\'acqua e 0,3 kWh ogni volta. Non sono guadagni marginali. Sono il modo più veloce per ridurre la bolletta senza acquistare nuovi elettrodomestici.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ciclo Intensivo',
          description: 'Massimo calore e acqua per carichi molto sporchi.',
          icon: 'mdi:alert',
          points: ['Da 1,2 a 3,5 kWh a carico', '70 litri per lavatrici', 'Applica sovrapprezzo ora di punta', 'Costo annuo più alto'],
        },
        {
          title: 'Ciclo Eco',
          description: 'Temperatura più bassa, durata ottimizzata, acqua minima.',
          icon: 'mdi:check-circle',
          points: ['Da 0,45 a 1,5 kWh a carico', 'Solo da 8 a 40 litri', 'Timing fuori punta possibile', 'Costo annuo più basso'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Audit Rapido degli Elettrodomestici',
      icon: 'mdi:clipboard-check',
      badge: 'Azione',
      html: '<p style="margin:0">Usa la lavatrice solo con carico completo. Usa il programma Eco per sporco normale. Imposta la lavastoviglie per partire dopo le 22:00 se hai una tariffa oraria. Pulisci il filtro dell\'asciugatrice dopo ogni ciclo per mantenere l\'efficienza. Stendi i panni all\'aperto o su un stendino quando il tempo lo permette.</p>',
    },
    {
      type: 'title',
      text: 'Tariffa Oraria e Prezzi di Punta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Molti fornitori di energia elettrica ora applicano tariffe diverse a seconda dell\'ora del giorno. I periodi di punta, solitamente mattine e sere feriali, possono costare dal 30 al 50 per cento in più dei periodi fuori punta. Un carico alle 20:00 può costare 0,18 euro, mentre lo stesso carico alle 02:00 costa solo 0,12. Nel corso di un anno, programmare correttamente gli elettrodomestici può far risparmiare da 50 a 100 euro senza cambiare altro. Questo calcolatore evidenzia le ore di punta in rosso e quelle fuori punta in verde per pianificare.',
    },
    {
      type: 'summary',
      title: 'Come Ridurre i Costi degli Elettrodomestici',
      items: [
        'Usa questo calcolatore per conoscere il costo reale a ciclo dei tuoi elettrodomestici.',
        'Passa alla modalità Eco ogni volta che possibile per risparmiare fino al 40 per cento di energia.',
        'Fai carichi completi invece di lavaggi parziali per massimizzare l\'efficienza.',
        'Rinvia i cicli alle ore fuori punta se la tua tariffa prevede prezzi orari.',
        'Stendi i panni all\'aperto invece di usare l\'asciugatrice per eliminare completamente quel costo.',
        'Pulisci i filtri e decalcifica regolarmente per mantenere gli elettrodomestici all\'efficienza nominale.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Elettrodomestico',
    applianceWasher: 'Lavatrice',
    applianceDishwasher: 'Lavastoviglie',
    applianceDryer: 'Asciugatrice',
    labelCycle: 'Programma',
    cycleEco: 'Eco',
    cycleNormal: 'Normale',
    cycleIntensive: 'Intensivo',
    labelElectricityPrice: 'Prezzo Elettricità',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Prezzo Acqua',
    unitPriceLiter: '€/L',
    labelDetergent: 'Detersivo',
    labelDetergentToggle: 'Includi costo detersivo',
    labelHour: 'Ora Prevista',
    peakBadge: 'Tariffa di punta attiva',
    offPeakBadge: 'Tariffa fuori punta',
    receiptTitle: 'Dettaglio Costi',
    receiptElectricity: 'Elettricità',
    receiptWater: 'Acqua',
    receiptDetergent: 'Detersivo',
    receiptTotal: 'Totale per ciclo',
    receiptPerYear: 'Stimato annuo',
    comparisonTitle: 'Cambio Intelligente',
    comparisonText: 'Passare da Normale a Eco fa risparmiare soldi a ogni carico.',
    comparisonSavings: 'Risparmio annuo',
    comparisonMonths: 'mesi di detersivo',
    badgePeak: 'Punta',
    badgeOffPeak: 'Fuori Punta',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'anno',
    labelCyclesPerWeek: 'Cicli a settimana',
    currencySign: '€',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
