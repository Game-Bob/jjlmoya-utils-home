import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulatore-consumo-standby';
const title = 'Simulatore Consumo Standby';
const description =
  "Scopri quanta elettricità i tuoi dispositivi sprecano in modalità standby. Calcola il costo annuale nascosto dei carichi fantasma di TV, router, caricabatterie e altro.";

const faqData = [
  {
    question: "Che cos'è il consumo fantasma o il carico fantasma?",
    answer:
      "Il consumo fantasma è l'elettricità consumata dai dispositivi elettronici quando sono spenti o in modalità standby. Questo accade perché molti dispositivi rimangono parzialmente attivi per rispondere ai telecomandi, mantenere le connessioni di rete o tenere in funzione gli orologi interni.",
  },
  {
    question: "Quanto costa l'energia in standby all'anno?",
    answer:
      "La famiglia media spreca tra 50 e 150 euro all'anno solo per l'energia in standby. Un solo televisore moderno può consumare da 10 a 20 watt in modo continuo, il che corrisponde a circa 15-30 euro all'anno a seconda del prezzo dell'elettricità.",
  },
  {
    question: 'Quali dispositivi consumano di più in standby?',
    answer:
      "I maggiori colpevoli sono i decoder, le console di gioco, i computer desktop lasciati in modalità sospensione, gli smart TV e gli alimentatori esterni più vecchi. I decoder via cavo e satellite sono particolarmente dispendiosi perché raramente entrano in standby reale.",
  },
  {
    question: "Staccare la spina ai dispositivi fa davvero risparmiare?",
    answer:
      "Sì. Staccare la spina ai dispositivi o utilizzare ciabatte avanzate con prese master elimina completamente il consumo in standby. Per una casa tipica con 20 dispositivi in standby, il risparmio annuo può variare da 40 a 120 euro.",
  },
  {
    question: 'Le ciabatte intelligenti valgono la spesa?',
    answer:
      "Le ciabatte intelligenti o avanzate tagliano l'alimentazione ai dispositivi periferici quando un dispositivo master viene spento. Si ripagano in pochi mesi se le usi con centri di intrattenimento o postazioni di lavoro informatiche.",
  },
  {
    question: 'Come posso misurare il consumo in standby a casa?',
    answer:
      "Puoi usare un economico misuratore di potenza da presa (wattmetro) per misurare esattamente quanti watt ogni dispositivo consuma quando è spento o inattivo. In alternativa, questo simulatore fornisce stime standardizzate basate su medie dei produttori e misurazioni di laboratorio.",
  },
];

const howToData = [
  {
    name: 'Percorri ogni stanza',
    text: "Conta ogni dispositivo che rimane collegato alla corrente 24 ore su 24. Includi televisori, microonde, router, stampanti, console di gioco e caricabatterie per telefono.",
  },
  {
    name: 'Stima le ore giornaliere di standby',
    text: "La maggior parte dei dispositivi è in standby per 20-24 ore al giorno. Inserisci la media per ogni dispositivo o usa il valore predefinito di 24 ore.",
  },
  {
    name: 'Imposta il prezzo della tua elettricità',
    text: "Inserisci il prezzo che paghi per kilowattora. È indicato sulla bolletta dell'elettricità.",
  },
  {
    name: 'Leggi il riepilogo del tuo consumo fantasma',
    text: "Il simulatore mostra i watt totali sprecati, i kilowattora annuali e il costo annuo nascosto. Usa il distintivo di categoria per vedere se la tua casa è a basso, moderato, alto o estremo consumo.",
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: "Carico fantasma: l'elettricità che paghi ma non usi mai",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Ogni presa di casa tua che ha un cavo collegato è una potenziale fonte di <strong>elettricità fantasma</strong>. Anche quando l'interruttore è spento, il dispositivo continua a consumare energia. Potrebbero essere solo pochi watt, ma moltiplicati per 24 ore al giorno e 365 giorni all'anno, quei watt diventano centinaia di kilowattora e soldi veri che escono dalle tue tasche.",
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'della bolletta domestica', icon: 'mdi:flash' },
        { value: '23h', label: 'media standby/giorno', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'media dispositivo top', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'I dispositivi che non dormono mai',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le case moderne contengono in media 40 dispositivi elettronici. Circa la metà di essi è continuamente collegata alla rete. Sebbene le normative energetiche abbiano migliorato l'efficienza in standby negli ultimi anni, il numero totale di dispositivi è aumentato. Una sola console di gioco in modalità accensione istantanea può consumare 15 watt. Un televisore con avvio rapido può consumare 12 watt. Aggiungi router, modem, smart speaker, microonde con orologi, stampanti e caricabatterie, e il totale supera rapidamente i 100 watt di consumo permanente in background.",
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Case a basso impatto',
          description: 'Famiglie che gestiscono attivamente il consumo in standby attraverso ciabatte intelligenti e il abitudine di staccare la spina.',
          icon: 'mdi:leaf',
          points: ['Sotto i 50 watt totali in standby', 'Costo annuo sotto i 50 euro', 'Utilizza ciabatte avanzate'],
        },
        {
          title: 'Case ad alto impatto',
          description: 'Famiglie tipiche con centri di intrattenimento, più console di gioco e computer sempre accesi.',
          icon: 'mdi:lightning-bolt',
          points: ['Oltre 150 watt totali in standby', 'Costo annuo superiore a 150 euro', 'Molti dispositivi in modalità avvio rapido'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lista rapida di risparmio',
      icon: 'mdi:check-circle',
      badge: 'Azione',
      html: "<p style=\"margin:0\">Stacca la spina ai caricabatterie del telefono quando non in uso. Usa una ciabatta controllata da master per il tuo centro di intrattenimento. Disabilita le modalità di avvio rapido o accensione istantanea su TV e console. Spegni i computer desktop invece di lasciarli in modalità sospensione.</p>",
    },
    {
      type: 'title',
      text: 'Perché i watt si sommano più in fretta di quanto pensi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Un watt è una misura di velocità di consumo di energia. Un watt che funziona per un'ora è un wattora. Un dispositivo che consuma 10 watt in modo continuo utilizza 87,6 kilowattora all'anno. A un prezzo medio di 0,25 euro per kilowattora, quel singolo dispositivo costa oltre 21 euro all'anno. Moltiplica ora per ogni gadget collegato in casa tua.",
    },
    {
      type: 'summary',
      title: 'Come ridurre il tuo carico fantasma',
      items: [
        'Identifica i maggiori consumatori con questo simulatore o un misuratore da presa.',
        "Raggruppa i dispositivi su ciabatte intelligenti che tagliano lo standby quando il dispositivo principale è spento.",
        'Disabilita le funzioni sempre acceso, avvio rapido e standby di rete quando possibile.',
        "Stacca la spina a caricabatterie e piccoli elettrodomestici che non usi quotidianamente.",
        'Considera di sostituire alimentatori esterni molto vecchi con modelli moderni ed efficienti.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Audit carico fantasma',
    labelDevices: 'Dispositivi in standby connessi',
    labelHours: 'Ore di standby al giorno',
    unitHours: 'h',
    labelPrice: "Prezzo dell'elettricità",
    unitPrice: '/kWh',
    resultBadge: 'Risultato consumo fantasma',
    labelAnnualKwh: 'Sprecato all\'anno',
    labelAnnualCost: 'Costo annuo nascosto',
    labelMonthlyCost: 'Equivalente mensile',
    labelDevicesCount: 'Dispositivi contati',
    labelTotalWatts: 'Watt totali in standby',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Consumo basso',
    categoryModerate: 'Consumo moderato',
    categoryHigh: 'Consumo alto',
    categoryExtreme: 'Consumo estremo',
    addDevice: 'Aggiungi dispositivo',
    removeDevice: 'Rimuovi',
    modalAddTitle: 'Aggiungi dispositivo in standby',
    labelDeviceName: 'Nome dispositivo',
    labelDeviceWatts: 'Watt in standby',
    btnSave: 'Salva',
    btnCancel: 'Annulla',
  },
};
