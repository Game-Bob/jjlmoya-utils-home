import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fliesen-layout-und-verschnitt-rechner';
const title = 'Fliesenlayout und Verschnittrechner';
const description =
  'Plane deinen Raumboden millimetergenau. Berechne die exakte Fliesenmenge, die benötigte Kartonanzahl, die Gesamtkosten und visualisiere das Layout in Echtzeit mit einer interaktiven Raster-Vorschau.';

const faqData = [
  {
    question: 'Wie berechne ich, wie viele Fliesen ich für einen Raum brauche?',
    answer:
      'Messe Raumbreite und -länge, wähle die Fliesengröße und gib die Fugenbreite ein. Der Rechner teilt die Raummaße durch Fliese plus Fuge und liefert die exakte Anzahl je Reihe und Spalte.',
  },
  {
    question: 'Welchen Verschnittanteil sollte ich beim Fliesenkauf einplanen?',
    answer:
      'Für standardmäßige rechteckige Räume rechnen Sie 10% Verschnitt. Bei Räumen mit vielen Ecken, diagonalen Verlegemustern oder komplexen Schnitten erhöhen Sie auf 15%. Das deckt Bruch und Schnittfehler ab.',
  },
  {
    question: 'Beeinflusst die Fugenbreite wirklich die Fliesenanzahl?',
    answer:
      'Ja. Breitere Fugen verringern die effektive Abdeckung jeder Fliese und erhöhen leicht den Gesamtbedarf. Der Rechner berücksichtigt das automatisch in jeder Reihe und Spalte.',
  },
  {
    question: 'Sollte ich zusätzliche Kartons über den Verschnitt hinaus kaufen?',
    answer:
      'Es ist ratsam, eine zusätzliche Karton zu erwerben, sofern verfügbar. Die Farbchargen können zwischen Produktionen variieren; passende Ersatzfliesen erleichtern spätere Reparaturen.',
  },
  {
    question: 'Wie verlege ich Fliesen in einem unregelmäßig geformten Raum?',
    answer:
      'Teilen Sie den Raum in kleinere Rechtecke. Berechnen Sie jeden Bereich einzeln und addieren Sie die Ergebnisse. Runden Sie Teilkartons immer auf, um vollständige Abdeckung zu gewährleisten.',
  },
  {
    question: 'Was ist der Unterschied im Verschnitt zwischen Keramik und Feinsteinzeug?',
    answer:
      'Feinsteinzeug ist dichter und schwerer zu schneiden, was den Verschnitt beim Schneiden um 2% bis 3% gegenüber Standardkeramik erhöhen kann. Beide Materialien sollten nach demselben Messverfahren geplant werden.',
  },
  {
    question: 'Kann ich ungebrauchte Fliesenkartons zurückgeben?',
    answer:
      'Die meisten Händler nehmen ungeöffnete Kartons innerhalb von 30 Tagen zurück. Bewahren Sie den Kassenbon auf und öffnen Sie Überschusskartons erst, wenn die Verlegung vollständig abgeschlossen ist.',
  },
];

const howToData = [
  {
    name: 'Raum vermessen',
    text: 'Erfassen Sie Breite und Länge des Bodenbereichs in Ihrem bevorzugten Maßsystem.',
  },
  {
    name: 'Fliese und Fuge wählen',
    text: 'Wählen Sie Ihre Fliesenabmessungen und die gewünschte Fugenbreite.',
  },
  {
    name: 'Berechnen und visualisieren',
    text: 'Geben Sie die Werte in den Rechner ein, passen Sie den Verschnittanteil an und prüfen Sie die Live-Layout-Vorschau.',
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
      text: 'Komplette Anleitung zur Fliesenplanung und Verschnittkontrolle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein erfolgreiches Fliesenprojekt beginnt lange bevor der erste Kleber aufgetragen wird. Präzises Vermessen, intelligente Layoutplanung und genaue Verschnittberechnung entscheiden, ob Ihre Renovierung im Budget und Termin bleibt. <strong>Unser interaktiver Fliesenlayout-Rechner</strong> wandelt Rohmaße in einen visuellen Grundriss um und zeigt exakt, wie viele Fliesen pro Reihe passen, wie viele Kartons Sie benötigen und wo Ihr Geld hingeht.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Standardverschnitt', icon: 'mdi:alert-circle' },
        { value: '30+ Jahre', label: 'Fliesenlebensdauer', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Ø Verlegedauer', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Großformatige Fliesen',
          description: 'Fliesen über 60 cm sorgen für ein nahtloses, modernes Erscheinungsbild, erfordern aber perfekt ebene Untergründe und erzeugen in kleinen Räumen höheren Schnittverschnitt.',
          icon: 'mdi:arrow-expand',
          points: ['Weniger Fugen', 'Premium-Optik', 'Höherer Verschnitt in engen Räumen'],
        },
        {
          title: 'Kleine Mosaikfliesen',
          description: 'Ideal für Bäder und filigrane Muster. Sie passen sich unregelmäßigen Formen an, benötigen aber mehr Fugen und Arbeitszeit.',
          icon: 'mdi:apps',
          points: ['Flexibel bei Hindernissen', 'Mehr Fugen erforderlich', 'Längere Verlegezeit'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Warum die Layout-Visualisierung wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Fliesenansicht vor dem Kauf verhindert kostspielige Überraschungen. Die Live-Vorschau zeigt, ob Ihre gewählte Fliesengröße am Rand unangenehm schmale Streifen hinterlässt oder einen ausgewogenen, symmetrischen Boden ergibt. Durch Anpassung von Fugenbreite und Fliesenausrichtung im Rechner können Sie das Layout vor der Bestellung auf Ästhetik und Effizienz optimieren.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Referenztabelle zur Abdeckung',
      icon: 'mdi:table',
      badge: 'Referenz',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 Fliesen pro m²</li><li><strong>45 x 45 cm</strong> → 5 Fliesen pro m²</li><li><strong>60 x 60 cm</strong> → 3 Fliesen pro m²</li><li><strong>60 x 120 cm</strong> → 1,5 Fliesen pro m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'ProfTipps zur Verschnittminimierung',
      items: [
        'Bestellen Sie 10% Extra für gerade Verlegemuster und 15% für Diagonal- oder Fischgrätenmuster.',
        'Bewahren Sie alle Kartons aus derselben Produktionscharge auf, um Farbgleichheit zu sichern.',
        'Messen Sie den Raum diagonal, um die Rechtwinkligkeit vor der Reihenplanung zu prüfen.',
        'Verwenden Sie Großformatfliesen nur in Räumen, die breiter sind als die Fliesenlänge, um übermäßige Schnitte zu vermeiden.',
        'Runden Sie Kartonmengen immer auf; das ist günstiger als eine zweite Lieferung.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Raumkonfiguration',
    labelRoomWidth: 'Raumbreite',
    labelRoomLength: 'Raumlänge',
    labelTileWidth: 'Fliesenbreite',
    labelTileLength: 'Fliesenlänge',
    labelGrout: 'Fugenbreite',
    labelWaste: 'Verschnittanteil',
    labelTilesPerBox: 'Fliesen pro Karton',
    labelPrice: 'Preis pro Karton',
    labelPattern: 'Verlegemuster',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'Stk',
    unitPrice: '/Karton',
    resultBadge: 'Live-Layout-Vorschau',
    labelArea: 'Bodenfläche',
    labelTiles: 'Fliesen gesamt',
    labelBoxes: 'Kartons benötigt',
    labelCost: 'Gesamtkosten',
    labelWasteCount: 'Verschnittfliesen',
    labelCuts: 'Teilschnitte',
    currency: 'EUR',
    btnMetric: 'Metrisch',
    btnImperial: 'Imperial',
    btnPatternStraight: 'Gerade',
    btnPatternBrick: 'Laufend',
    btnPatternDiagonal: 'Diagonal',
    badgeOptimal: 'Optimales Layout',
    badgeWarning: 'Hoher Verschnitt',
    visualTitle: 'Layout Vorschau',
  },
};
