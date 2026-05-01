import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-distanza-proiettore';
const title = 'Calcolatore Distanza Proiettore — Tiro e Schermo';
const description =
  'Calcola la distanza esatta per installare il tuo proiettore in base alla dimensione dello schermo desiderata e al Throw Ratio.';

const faqData = [
  {
    question: 'Cos\'è il Throw Ratio (rapporto di tiro)?',
    answer:
      'È un numero che definisce quanto sarà grande l\'immagine a una distanza specifica. Si calcola dividendo la distanza di proiezione per la larghezza dell\'immagine. Un rapporto di 1.5 significa che se proietti da 1.5m, avrai 1m di larghezza immagine.',
  },
  {
    question: 'A che distanza devo mettere il proiettore per 100 pollici?',
    answer:
      'Dipende dal Throw Ratio del proiettore. Con un rapporto standard di 1.5:1 servirebbero circa 3.3m. Con un proiettore a tiro corto (Short Throw) potresti riuscirci a meno di 1m.',
  },
  {
    question: 'Che differenza c\'è tra 16:9 e 4:3?',
    answer:
      '16:9 è il formato panoramico per film e serie moderni. 4:3 è il formato classico per presentazioni. Scegliere quello corretto evita fastidiose bande nere.',
  },
  {
    question: 'L\'altezza di installazione è importante?',
    answer:
      'Sì. I proiettori hanno un offset verticale o correzione keystone. L\'ideale è installarlo centrato rispetto al bordo superiore o inferiore dello schermo per evitare deformazioni.',
  },
];

const howToData = [
  {
    name: 'Consultare il Throw Ratio',
    text: 'Cerca sul manuale o sulla scatola un valore come 1.2:1 o 1.5-1.8:1.',
  },
  {
    name: 'Definire la dimensione',
    text: 'Inserisci i pollici della diagonale o la larghezza disponibile sulla parete.',
  },
  {
    name: 'Scegliere il formato',
    text: 'Seleziona 16:9 per i film, 4:3 per le presentazioni o 21:9 per il cinema.',
  },
  {
    name: 'Ottenere la distanza',
    text: 'Il calcolatore ti darà la distanza esatta per installare il supporto.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
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
      text: 'Domina la Geometria di Proiezione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Installare un proiettore "a occhio" può rovinare l\'esperienza. Troppo vicino e l\'immagine è piccola; troppo lontano e perderai luminosità. La chiave è il <strong>Throw Ratio</strong>, un numero che definisce la relazione tra distanza e dimensione immagine.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Formula Distanza', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Cos\'è il Throw Ratio?',
          description: 'È il rapporto tra distanza di proiezione e larghezza immagine. Un TR di 1.5 significa che serve 1.5m di distanza per ogni metro di larghezza schermo.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, per spazi piccoli', 'TR 1–2: Standard per soggiorni', 'TR > 2: Long Throw, per auditorium'],
        },
        {
          title: 'Formato e Aspect Ratio',
          description: 'Il formato determina le proporzioni. Usare quello errato genera barre nere e spreca luminosità.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: standard HD/4K per home cinema', '21:9: formato panoramico cinematografico', '4:3: per presentazioni da ufficio'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Installazione Professionale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Se il proiettore ha il Lens Shift, usalo sempre al posto del Keystone digitale. Il Keystone riduce la risoluzione effettiva.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Luce Ambiente e Guadagno Schermo',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro Tip',
      html: '<p>In stanze luminose, usa uno schermo ad alto guadagno (>1.0) per compensare la perdita di contrasto.</p>',
    },
    {
      type: 'summary',
      title: 'Checklist di Installazione',
      items: [
        'Verifica il Throw Ratio prima di posizionare il supporto.',
        'Controlla lo spazio disponibile sulla parete.',
        'Centra il proiettore rispetto allo schermo.',
        'Evita il Keystone: meglio la posizione fisica corretta.',
        'Elimina sorgenti luminose che puntano direttamente sullo schermo.',
      ],
    },
  ],
  ui: {
    configTitle: 'Configurazione',
    configSubtitle: 'Definisci schermo e proiettore',
    labelDiagonal: 'Diagonale Schermo',
    labelDiagonalUnit: 'Pollici (")',
    labelFormat: 'Formato',
    labelThrowRatio: 'Rapporto di Tiro (Throw Ratio)',
    throwRatioHint: 'Esempio: 1.50 significa che per 1m di larghezza servono 1.5m di distanza.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Cinema',
    ratio43Sub: 'Documenti',
    labelWidth: 'Larghezza Schermo',
    labelHeight: 'Altezza Schermo',
    labelDistance: 'Distanza Richiesta',
    simulationBadge: 'Simulazione Real-Time',
  },
};
