import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'projektor-abstand-rechner';
const title = 'Projektor Abstandsrechner — Verhältnis & Leinwand';
const description =
  'Berechnen Sie den exakten Abstand für die Installation Ihres Projektors basierend auf der Leinwandgröße und dem Projektionsverhältnis (Throw Ratio).';

const faqData = [
  {
    question: 'Was ist das Throw Ratio (Projektionsverhältnis)?',
    answer:
      'Es definiert, wie groß das Bild in einem bestimmten Abstand wird. Es wird berechnet, indem man den Projektionsabstand durch die Bildbreite teilt. Ein Verhältnis von 1,5 bedeutet, dass Sie bei einem Abstand von 1,5 m ein 1 m breites Bild erhalten.',
  },
  {
    question: 'Welchen Abstand benötige ich für ein 100-Zoll-Bild?',
    answer:
      'Das hängt vom Throw Ratio Ihres Beamers ab. Bei einem Standardverhältnis von 1,5:1 benötigen Sie etwa 3,3 m. Mit einem Kurzdistanz-Projektor (Short Throw) erreichen Sie das schon bei unter 1 m.',
  },
  {
    question: 'Was ist der Unterschied zwischen 16:9 und 4:3?',
    answer:
      '16:9 ist das Breitbildformat für moderne Filme und Serien. 4:3 ist das klassische Format für Präsentationen. Die Wahl des richtigen Formats verhindert störende schwarze Balken.',
  },
  {
    question: 'Ist die Montagehöhe des Projektors wichtig?',
    answer:
      'Ja. Projektoren haben einen vertikalen Versatz (Offset) oder eine Trapezkorrektur (Keystone). Idealerweise wird er mittig zur Ober- oder Unterkante der Leinwand installiert, um Verzerrungen zu vermeiden.',
  },
];

const howToData = [
  {
    name: 'Throw Ratio ermitteln',
    text: 'Suchen Sie auf dem Karton oder im Handbuch nach Werten wie 1,2:1 oder 1,5-1,8:1.',
  },
  {
    name: 'Bildgröße festlegen',
    text: 'Geben Sie die gewünschte Diagonale in Zoll oder die verfügbare Breite an Ihrer Wand ein.',
  },
  {
    name: 'Format wählen',
    text: 'Wählen Sie 16:9 für Filme, 4:3 für Präsentationen oder 21:9 für Cinemascope.',
  },
  {
    name: 'Abstand ablesen',
    text: 'Der Rechner zeigt Ihnen den exakten Abstand für die Montage Ihres Projektors an.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    { name: 'Projector Central — Abstandsrechner', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Epson — Installationsanleitungen', url: 'https://epson.com/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die Geometrie der Projektion verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Installation eines Projektors nach Augenmaß kann das Erlebnis ruinieren. Zu nah und das Bild ist winzig; zu weit weg und es mangelt an Helligkeit. Der Schlüssel ist das <strong>Throw Ratio</strong>, das exakt das Verhältnis zwischen Abstand und Bildgröße definiert.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × B', label: 'Abstandsformel', icon: 'mdi:projector' },
        { value: '< 0,4', label: 'Ultra Kurzdistanz', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2,0', label: 'Langdistanz', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Was ist das Throw Ratio?',
          description: 'Es ist das Verhältnis zwischen Projektionsabstand und Bildbreite. Ein TR von 1,5 bedeutet 1,5 m Abstand pro Meter Bildbreite.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Kurzdistanz, ideal für kleine Räume', 'TR 1–2: Standard für Wohnzimmer', 'TR > 2: Langdistanz für Hörsäle'],
        },
        {
          title: 'Seitenverhältnis (Format)',
          description: 'Das Format bestimmt die Proportionen. Ein falsches Format führt zu schwarzen Balken und verringert die wahrgenommene Helligkeit.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: HD/4K Standard für Heimkino', '21:9: Cinemascope für Filmfans', '4:3: Klassisch für Büro & Präsentationen'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Professionelle Installation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs. Keystone:</strong> Falls Ihr Beamer Lens Shift besitzt, nutzen Sie diesen immer vor der digitalen Trapezkorrektur (Keystone). Keystone reduziert die effektive Auflösung. Eine korrekte Montage macht Korrekturen meist überflüssig.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Umgebungslicht und Leinwandgewinn',
      icon: 'mdi:lightbulb-on',
      badge: 'Profi-Tipp',
      html: '<p>In hellen Räumen sollten Sie eine Leinwand mit höherem Gewinn (Gain > 1,0) wählen, um den Kontrastverlust auszugleichen. In dunklen Kinosälen ist ein Gain von 1,0 ideal.</p>',
    },
    {
      type: 'summary',
      title: 'Checkliste für die Montage',
      items: [
        'Throw Ratio vor der Standortwahl prüfen.',
        'Maximale Bildgröße an der Wand ausmessen.',
        'Beamer mittig zur Leinwand ausrichten.',
        'Digitalen Keystone vermeiden: Physische Position optimieren.',
        'Direkte Lichtquellen auf der Leinwand vermeiden.',
      ],
    },
  ],
  ui: {
    configTitle: 'Konfiguration',
    configSubtitle: 'Leinwand & Projektor definieren',
    labelDiagonal: 'Bilddiagonale',
    labelDiagonalUnit: 'Zoll (")',
    labelFormat: 'Bildformat',
    labelThrowRatio: 'Projektionsverhältnis (Throw Ratio)',
    throwRatioHint: 'Beispiel: 1.50 bedeutet, dass Sie für 1 m Breite 1,5 m Abstand benötigen.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Cino',
    ratio43Sub: 'Retro',
    labelWidth: 'Bildbreite',
    labelHeight: 'Bildhöhe',
    labelDistance: 'Benötigter Abstand',
    simulationBadge: 'Echtzeit-Simulation',
  },
};
