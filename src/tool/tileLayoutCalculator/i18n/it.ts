import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-disposizione-piastrelle';
const title = 'Calcolatore di Disposizione e Scarti di Piastrelle';
const description =
  'Pavimenta la tua stanza con precisione. Calcola la quantità esatta di piastrelle, le scatole necessarie, il costo totale e visualizza la disposizione in tempo reale con un\'anteprima interattiva della griglia.';

const faqData = [
  {
    question: 'Come calcolo quante piastrelle mi servono per una stanza?',
    answer:
      'Misura la larghezza e la lunghezza della stanza, scegli la dimensione della piastrella e indica la larghezza della fuga. Il calcolatore divide le dimensioni della stanza per la piastrella più la fuga per ottenere il numero esatto di pezzi per fila e colonna.',
  },
  {
    question: 'Quale percentuale di scarto devo aggiungere quando acquisto piastrelle?',
    answer:
      'Per ambienti rettangolari standard, aggiungi uno scarto del 10%. Per stanze con molti angoli, disposizioni diagonali o tagli complessi, aumenta al 15%. Questo copre rotture e errori di taglio.',
  },
  {
    question: 'Lo spessore della fuga influenza davvero il numero di piastrelle?',
    answer:
      'Sì. Fughe più larghe riducono la copertura effettiva di ogni piastrella, aumentando leggermente il numero totale necessario. Il calcolatore tiene conto automaticamente di questo in ogni fila e colonna.',
  },
  {
    question: 'Dovrei acquistare scatole extra oltre alla percentuale di scarto?',
    answer:
      'È saggio acquistare una scatola aggiuntiva se disponibile. I lotti di tinta possono variare tra le produzioni, e avere pezzi di ricambio abbinati semplifica le riparazioni future.',
  },
  {
    question: 'Come poso piastrelle in una stanza di forma irregolare?',
    answer:
      'Suddividi lo spazio in rettangoli più piccoli. Calcola ogni sezione separatamente e somma i totali. Arrotonda sempre per eccesso le scatole parziali per garantire una copertura completa.',
  },
  {
    question: 'Qual è la differenza di scarto tra ceramica e gres porcellanato?',
    answer:
      'Il gres porcellanato è più denso e difficile da tagliare, il che può aumentare lo scarto di taglio dal 2% al 3% rispetto alla ceramica standard. Entrambi i materiali devono seguire lo stesso processo di misurazione.',
  },
  {
    question: 'Posso restituire le scatole di piastrelle non utilizzate?',
    answer:
      'La maggior parte dei rivenditori accetta scatole sigillate entro 30 giorni. Conserva sempre lo scontrino e non aprire le scatole in eccedenza fino al completamento dell\'installazione.',
  },
];

const howToData = [
  {
    name: 'Misura la stanza',
    text: 'Annota larghezza e lunghezza della superficie da pavimentare con il sistema di unità che preferisci.',
  },
  {
    name: 'Seleziona piastrella e fuga',
    text: 'Scegli le dimensioni della piastrella e la larghezza della fuga desiderata.',
  },
  {
    name: 'Calcola e visualizza',
    text: 'Inserisci i valori nel calcolatore, regola il margine di scarto e controlla l\'anteprima live della disposizione.',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Guida Completa alla Pianificazione del Pavimento in Piastrelle e al Controllo degli Scarti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un progetto di posa in opera riuscito inizia molto prima di stendere il primo strato di adesivo. La misurazione accurata, la pianificazione intelligente della disposizione e la stima precisa degli scarti determinano se la ristrutturazione rimane in budget e nei tempi. <strong>Il nostro calcolatore interattivo di disposizione piastrelle</strong> trasforma le dimensioni grezze in una pianta visiva, mostrando esattamente quante piastrelle entrano per fila, quante scatole acquistare e dove va il tuo denaro.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Scarto Standard', icon: 'mdi:alert-circle' },
        { value: '30+ anni', label: 'Durata della Piastrella', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Posa Media', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Piastrelle Grandi Formati',
          description: 'Le piastrelle oltre i 60 cm creano un aspetto moderno e continuo, ma richiedono supporti perfettamente piani e generano maggiori scarti di taglio in ambienti piccoli.',
          icon: 'mdi:arrow-expand',
          points: ['Meno fughe visibili', 'Effetto visivo premium', 'Maggior scarto in spazi stretti'],
        },
        {
          title: 'Mosaici di Piccole Dimensioni',
          description: 'Ideali per bagni e motivi intricati. Si adattano a forme irregolari, ma richiedono più fuga e tempo di manodopera.',
          icon: 'mdi:apps',
          points: ['Flessibili intorno agli ostacoli', 'Più fuga richiesta', 'Maggiore tempo di posa'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Perché la Visualizzazione della Disposizione è Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vedere la griglia delle piastrelle prima dell\'acquisto previene sorprese costose. L\'anteprima live rivela se la dimensione scelta lascia strisce strette ai margini o crea un pavimento equilibrato e simmetrico. Modificando larghezza fuga e orientamento della piastrella nel calcolatore, puoi ottimizzare la disposizione per estetica ed efficienza prima di ordinare.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabella di Riferimento Rapida per la Copertura',
      icon: 'mdi:table',
      badge: 'Riferimento',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 piastrelle per m²</li><li><strong>45 x 45 cm</strong> → 5 piastrelle per m²</li><li><strong>60 x 60 cm</strong> → 3 piastrelle per m²</li><li><strong>60 x 120 cm</strong> → 1,5 piastrelle per m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Suggerimenti Pro per Ridurre gli Scarti',
      items: [
        'Ordina il 10% in più per pose dritte e il 15% per diagonali o a spina.',
        'Conserva tutte le scatole dello stesso lotto di produzione per garantire la coerenza cromatica.',
        'Misura in diagonale la stanza per verificare la squadra prima di pianificare le file.',
        'Usa grandi formati solo in ambienti più larghi della lunghezza della piastrella per evitare tagli eccessivi.',
        'Arrotonda sempre le scatole per eccesso: costa meno di una seconda consegna.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configurazione Stanza',
    labelRoomWidth: 'Larghezza stanza',
    labelRoomLength: 'Lunghezza stanza',
    labelTileWidth: 'Larghezza piastrella',
    labelTileLength: 'Lunghezza piastrella',
    labelGrout: 'Fuga',
    labelWaste: 'Margine di scarto',
    labelTilesPerBox: 'Piastrelle per scatola',
    labelPrice: 'Prezzo per scatola',
    labelPattern: 'Schema di posa',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'pz',
    unitPrice: '/scatola',
    resultBadge: 'Anteprima live',
    labelArea: 'Superficie pavimento',
    labelTiles: 'Piastrelle totali',
    labelBoxes: 'Scatole necessarie',
    labelCost: 'Costo totale',
    labelWasteCount: 'Piastrelle di scarto',
    labelCuts: 'Tagli parziali',
    currency: 'EUR',
    btnMetric: 'Metrico',
    btnImperial: 'Imperiale',
    btnPatternStraight: 'Dritto',
    btnPatternBrick: 'Sfalsato',
    btnPatternDiagonal: 'Diagonale',
    badgeOptimal: 'Disposizione ottimale',
    badgeWarning: 'Attenzione: scarti elevati',
    visualTitle: 'Anteprima della disposizione',
  },
};
