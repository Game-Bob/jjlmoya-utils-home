import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wandfarben-rechner';
const title = 'Wandfarben und Verdünnungsrechner';
const description =
  'Berechnen Sie exakt, wie viele Liter oder Gallonen Farbe Sie für Ihre Wände benötigen. Passen Sie Decklagen, Oberflächentyp, Verdünnung an und ermitteln Sie die realen Kosten vor dem Kauf.';

const faqData = [
  {
    question: 'Wie berechne ich die genaue Farbmenge?',
    answer:
      'Multiplizieren Sie die Wandfläche mit der Anzahl der Decklagen und teilen Sie durch den Farbertrag in Quadratmetern oder Quadratfuß pro Liter oder Gallone. Ziehen Sie zuerst Türen und Fenster von der Gesamtfläche ab.',
  },
  {
    question: 'Wie viel Farbe braucht ein Standardzimmer?',
    answer:
      'Ein 12 Quadratmeter großes Zimmer mit 2,5 Meter hohen Decken hat etwa 30 Quadratmeter Wandfläche. Bei zwei Decklagen und einem Ertrag von 12 Quadratmetern pro Liter benötigen Sie etwa 5 Liter Farbe.',
  },
  {
    question: 'Soll ich die Farbe vor dem Auftragen verdünnen?',
    answer:
      'Dispersionsfarben auf Wasserbasis sind meist gebrauchsfertig oder benötigen 5 bis 10 Prozent Wasser beim ersten Anstrich. Emaille- oder Ölfarben erfordern oft ein spezifisches Lösungsmittel, das auf der Dose angegeben ist.',
  },
  {
    question: 'Wie viele Decklagen sind wirklich notwendig?',
    answer:
      'Neue oder stark saugende Oberflächen benötigen einen Grundieranstrich plus zwei Deckanstriche. Das Überstreichen einer bereits gestrichenen Wand in einer ähnlichen Farbe benötigt meist nur ein bis zwei Decklagen.',
  },
  {
    question: 'Ziehe ich Türen und Fenster ab?',
    answer:
      'Ja. Messen Sie jede Öffnung und ziehen Sie sie von der Gesamtwandfläche ab. Als Faustregel sind Türen etwa 2 Quadratmeter und Fenster etwa 1,5 Quadratmeter groß.',
  },
  {
    question: 'Ändert der Oberflächentyp den Ertrag?',
    answer:
      'Ja. Glatte, vorbereitete Wände erbringen bis zu 14 Quadratmeter pro Liter. Rauer Beton, Rauputz oder saugendes Mauerwerk können den Ertrag auf 6 bis 8 Quadratmeter pro Liter senken.',
  },
];

const howToData = [
  {
    name: 'Messen Sie Ihre Wände',
    text: 'Messen Sie Breite und Höhe jeder Wand. Multiplizieren Sie sie, um die Fläche jeder Wand zu erhalten, und addieren Sie alle Wände.',
  },
  {
    name: 'Öffnungen abziehen',
    text: 'Messen Sie Türen und Fenster und ziehen Sie deren Fläche von der Gesamtfläche ab, um die reale zu streichende Fläche zu erhalten.',
  },
  {
    name: 'Wählen Sie den Farbtyp',
    text: 'Wählen Sie den Farbtyp im Rechner. Dispersionsfarbe matt, Dispersionsfarbe seidenglänzend und Emaille haben unterschiedliche Erträge und Verdünnungsempfehlungen.',
  },
  {
    name: 'Decklagen und Preis eingeben',
    text: 'Geben Sie an, wie viele Decklagen Sie auftragen möchten, und den Preis pro Liter oder Gallone. Der Rechner gibt die genaue Menge und die Gesamtkosten aus.',
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
      text: 'Farbrechner: Kaufen Sie Genau das, was Sie Brauchen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Zimmer ohne Vorabberechnung zu streichen endet meist in <strong>halbleeren Dosen</strong> oder Notfalleinkäufen. Der Grund ist simpel: der Farbertrag variiert mit der Porosität der Oberfläche, der Farbänderung und der Anzahl der Decklagen. Eine glatte, bereits gestrichene Wand kann bis zu 14 Quadratmeter pro Liter erbringen, während eine Rauputzwand die gleiche Menge auf nur 6 Quadratmeter pro Liter reduzieren kann.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Hoch', label: 'Standard Deckkraft', icon: 'mdi:format-paint' },
        { value: '2 Schichten', label: 'Empfohlen', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Typische Verdünnung', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Wie der Farbertrag Wirklich Funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hersteller geben einen theoretischen Ertrag auf der Dose an. Diese Zahl geht von einer perfekt glatten, nicht saugenden, weißen Oberfläche aus, die mit einer professionellen Rolle unter Idealbedingungen aufgetragen wird. In der Realität <strong>reduzieren poröse Wände, dunkle Farben und Heimwerkeranwendungen</strong> diesen Ertrag um 20 bis 40 Prozent. Unser Rechner ermöglicht realistische Profile, damit Sie nicht zu knapp kalkulieren.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Dispersionsfarbe Matt',
          description: 'Die gebräuchlichste Wahl für Innenräume. Hohe Deckkraft, leicht zu retuschieren und in den meisten Qualitäten waschbar.',
          icon: 'mdi:palette',
          points: ['Standard Deckkraft für Innenräume', 'Verdünnung: 5 bis 10 Prozent Wasser', 'Ideal für: Wohnzimmer und Schlafzimmer'],
        },
        {
          title: 'Dispersionsfarbe Seidenglänzend',
          description: 'Leicht glänzender Finish mit größerer Feuchtigkeits- und Fleckenresistenz. Schwieriger nahtlos zu retuschieren.',
          icon: 'mdi:brightness-6',
          points: ['Etwas höhere Deckkraft', 'Verdünnung: 5 Prozent Wasser', 'Ideal für: Küchen und Bäder'],
        },
        {
          title: 'Emaillefarbe',
          description: 'Harter und haltbarer Finish für Tischlerarbeiten, Heizkörper und stark frequentierte Bereiche. Erfordert Lösungsmittel oder spezifischen Verdünner.',
          icon: 'mdi:spray',
          points: ['Harter und langlebiger Finish', 'Verdünnung: 10 bis 15 Prozent Lösungsmittel', 'Ideal für: Türen, Rahmen und Möbel'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Praktische Oberflächenmessung',
      icon: 'mdi:ruler-square',
      badge: 'Tipp',
      html: '<p style="margin:0">Multiplizieren Sie Breite mal Höhe jeder Wand. Für eine schnelle Gesamtsumme addieren Sie alle Breiten und multiplizieren sie mit der Raumhöhe. Ziehen Sie dann ungefähr 2 Quadratmeter pro Standardtür und 1,5 Quadratmeter pro Fenster ab.</p>',
    },
    {
      type: 'title',
      text: 'Regeln für Verdünnung und Auftrag',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Erste Anstriche auf neuen oder reparierten Oberflächen benötigen immer eine leichte Verdünnung, damit die Farbe eindringt und haftet. Deckanstriche sollten unverdünnt oder mit dem vom Hersteller angegebenen Minimum aufgetragen werden. <strong>Übermäßige Verdünnung zerstört das Pigment</strong> und hinterlässt transparente Stellen, die einen zusätzlichen Anstrich erfordern.',
    },
    {
      type: 'summary',
      title: 'Warum Vor dem Kauf Berechnen',
      items: [
        'Vermeiden Sie Farbreste, die in der Dose eintrocknen und zu Abfall werden.',
        'Verhindern Sie Farbunterschiede zwischen Chargen, die zu verschiedenen Zeitpunkten gekauft wurden.',
        'Budgetieren Sie präzise: kennen Sie die realen Kosten inklusive Grundierung und Werkzeug.',
        'Planen Sie die Arbeit in einem Zug, ohne sie für zusätzliches Material zu unterbrechen.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Oberfläche und Farbe',
    labelMetric: 'Metrisch',
    labelImperial: 'Imperial',
    labelArea: 'Gesamtfläche zu streichen',
    labelAreaFt: 'Gesamtfläche zu streichen',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Farbertrag',
    labelYieldFt: 'Farbertrag',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Farbtyp wählen',
    btnPlasticMatTitle: 'Dispersion Matt',
    btnPlasticMatSub: 'Matt · Wasser 5%',
    btnPlasticSatinTitle: 'Dispersion Seidenglänzend',
    btnPlasticSatinSub: 'Seidenglänzend · Wasser 5%',
    btnEnamelTitle: 'Emaille',
    btnEnamelSub: 'Emaille · Lösungsmittel 10%',
    labelCoats: 'Anzahl Decklagen',
    unitCoats: 'Schichten',
    labelPrice: 'Preis pro Liter',
    labelPriceFt: 'Preis pro Gallone',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Verdünnungsprozentsatz',
    unitDilution: '%',
    resultBadge: 'Farbberechnung',
    labelPaint: 'Liter Farbe',
    labelPaintGal: 'Gallonen Farbe',
    labelCost: 'Gesamtkosten',
    labelWater: 'Verdünnungsflüssigkeit',
    labelWaterGal: 'Verdünnungsflüssigkeit',
    labelTotalVolume: 'Gesamtmischung',
    labelTotalVolumeGal: 'Gesamtmischung',
    labelCurrency: 'Währung',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '€',
  },
};
