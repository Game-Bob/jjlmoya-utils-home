import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'beleuchtungs-und-lumen-rechner-fuer-zuhause';
const title = 'Beleuchtungs und Lumen Rechner für Zuhause';
const description =
  'Berechnen Sie exakt, wie viele Lumen und Leuchtmittel Sie für jeden Raum benötigen. Wählen Sie Raumtyp, Abmessungen und Leuchtmittelart, um einen professionellen Beleuchtungsplan mit Echtzeit-Lux-Schätzungen zu erhalten.';

const faqData = [
  {
    question: 'Wie viele Lumen brauche ich für ein Wohnzimmer?',
    answer:
      'Für ein typisches Wohnzimmer sollten Sie auf etwa 150 Lux am Boden abzielen. Multiplizieren Sie die Raumfläche in Quadratmetern mit 150, um die benötigten Lumen zu erhalten. Für einen 20 Quadratmeter großen Raum benötigen Sie etwa 3.000 Lumen.',
  },
  {
    question: 'Was ist der Unterschied zwischen Lux und Lumen?',
    answer:
      'Lumen messen die gesamte Lichtausbeute einer Lampe. Lux messen das Licht, das tatsächlich eine Oberfläche erreicht. Ein Raum mit hohen Decken oder dunklen Wänden benötigt mehr Lumen, um denselben Lux-Wert zu erreichen, da Licht durch Entfernung und Absorption verloren geht.',
  },
  {
    question: 'Sparen LED-Lampen wirklich Energie?',
    answer:
      'Ja. LED-Lampen erzeugen etwa 100 Lumen pro Watt, während Glühlampen nur etwa 15 erzeugen. Eine 10-Watt-LED-Lampe liefert dasselbe Licht wie eine 60-Watt-Glühlampe und verbraucht nur ein Sechstel des Stroms.',
  },
  {
    question: 'Wie beeinflusst die Raumfarbe den Lichtbedarf?',
    answer:
      'Dunkle Wände und Decken absorbieren Licht. In einem Raum mit dunklen Oberflächen benötigen Sie möglicherweise 50 % mehr Lumen als die Standardempfehlung vorsieht.',
  },
  {
    question: 'Welcher Lux-Wert ist zum Lesen geeignet?',
    answer:
      'Für komfortables Lesen benötigen Sie 300 bis 500 Lux auf der Seite. Die allgemeine Umgebungsbeleuchtung bietet normalerweise 150 bis 200 Lux, daher ergänzen Sie eine Arbeitsleuchte an Ihrem Lesestuhl für die zusätzliche Helligkeit.',
  },
  {
    question: 'Kann ich LED-Lampen dimmen?',
    answer:
      'Nur, wenn sie als dimmbar gekennzeichnet sind. Standard-LEDs können flackern oder eine verkürzte Lebensdauer haben, wenn sie an einen Dimmer angeschlossen werden. Prüfen Sie immer die Verpackung auf das Dimmbar-Symbol, bevor Sie installieren.',
  },
];

const howToData = [
  {
    name: 'Wählen Sie Ihren Raumtyp',
    text: 'Wählen Sie die Raumfunktion. Küchen und Büros benötigen helleres Licht als Schlafzimmer oder Flure.',
  },
  {
    name: 'Geben Sie die Abmessungen ein',
    text: 'Geben Sie Raumbreite, -länge und Deckenhöhe ein. Der Rechner verwendet diese Werte, um den Raumindex und den Lichtausnutzungsfaktor zu bestimmen.',
  },
  {
    name: 'Wählen Sie Leuchtmittelart und Anzahl',
    text: 'Wählen Sie Ihre bevorzugte Leuchtmitteltechnologie und die Anzahl der Leuchten. Der Rechner zeigt Ihnen, ob Sie mehr Lampen benötigen.',
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
      text: 'Kompletter Leitfaden zur Wohnraumbeleuchtung und Lumen-Planung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Richtiges Licht verwandelt ein Haus in ein Zuhause. Über die Ästhetik hinaus beeinflusst die richtige Lichtmenge Stimmung, Produktivität und sogar die Augengesundheit. <strong>Unser Beleuchtungsrechner für Zuhause</strong> hilft Ihnen, exakt zu bestimmen, wie viele Lumen Sie für jeden Raum benötigen - unter Berücksichtigung von Raumgröße, Deckenhöhe, Oberflächenfarben und Leuchtmittelart.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Empfohlener Lux-Bereich', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED-Effizienz', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Wartungsfaktor', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Warme Ambientebeleuchtung',
          description: 'Ideal für Wohnzimmer und Schlafzimmer. Schafft eine gemütliche Atmosphäre und reduziert abends die Augenbelastung.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Warme Farbtemperatur (2700K)', 'Mehrere dimmbare Lichtquellen'],
        },
        {
          title: 'Helle Arbeitsbeleuchtung',
          description: 'Unverzichtbar für Küchen, Büros und Badezimmer. Bietet klare Sichtbarkeit für detailgenaue Arbeiten.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Kaltweiß (4000K)', 'Auf Arbeitsflächen fokussiert'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Warum Raumabmessungen wichtig sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Licht breitet sich aus und schwächt sich mit der Entfernung ab. Eine Lampe, die für eine 2,5-Meter-Decke hell genug ist, kann bei einer 4-Meter-Decke zu dunkel sein. Der Rechner berücksichtigt dies mithilfe der Raumindex-Formel, die sowohl die Bodenfläche als auch die Montagehöhe berücksichtigt, um abzuschätzen, wie viel Licht tatsächlich Ihre Arbeitsebene erreicht.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Referenztabelle Lux Werte',
      icon: 'mdi:table',
      badge: 'Referenz',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Wohnzimmer</strong> → 150 lux</li><li><strong>Küche</strong> → 300 lux</li><li><strong>Schlafzimmer</strong> → 100 lux</li><li><strong>Badezimmer</strong> → 200 lux</li><li><strong>Büro</strong> → 500 lux</li><li><strong>Flur</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Profihinweise für bessere Beleuchtung',
      items: [
        'Schichten Sie drei Lichtarten: Allgemein-, Arbeits- und Akzentbeleuchtung.',
        'Verwenden Sie Dimmer, um die Helligkeit für verschiedene Tageszeiten anzupassen.',
        'Wählen Sie LED-Lampen für lange Lebensdauer und geringen Energieverbrauch.',
        'Platzieren Sie Arbeitsleuchten auf der gegenüberliegenden Seite Ihrer dominanten Hand, um Schatten zu vermeiden.',
        'Erwägen Sie Smart-Lampen für automatisierte Zeitsteuerung und Farbtemperaturwechsel.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Raumbeleuchtungsrechner',
    labelRoomType: 'Raumtyp',
    labelRoomWidth: 'Breite',
    labelRoomLength: 'Länge',
    labelHeight: 'Deckenhöhe',
    labelBulbType: 'Leuchtmittel',
    labelBulbWatt: 'Leistung',
    labelFixtures: 'Leuchten',
    labelAmbient: 'Ambiente',
    btnAmbientCozy: 'Gemütlich',
    btnAmbientNormal: 'Normal',
    btnAmbientBright: 'Hell',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'Stk',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Ziel-Lux',
    labelCurrentLux: 'Aktuell Lux',
    labelBulbsNeeded: 'Benötigte Lampen',
    labelRoomArea: 'Fläche',
    statusOptimal: 'Perfekt',
    statusInsufficient: 'Zu dunkel',
    statusExcess: 'Zu hell',
    btnLiving: 'Wohnen',
    btnKitchen: 'Küche',
    btnBedroom: 'Schlafen',
    btnBathroom: 'Bad',
    btnOffice: 'Büro',
    btnHallway: 'Flur',
    btnBulbLED: 'LED',
    btnBulbCFL: 'ESL',
    btnBulbHalogen: 'Halogen',
    btnBulbIncandescent: 'Glühlampe',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Ihre Beleuchtung ist für diesen Raum perfekt ausbalanciert.',
    tipInsufficient: 'Fügen Sie mehr Leuchten oder leistungsstärkere Lampen hinzu.',
    tipExcess: 'Reduzieren Sie Leuchten oder dimmen Sie, um Energie zu sparen.',
    labelManualAdjust: 'Manuelle Anpassung',
    labelSummary: 'Ihr Beleuchtungsplan',
    labelTotalLumens: 'Benötigte Gesamtlumen',
    labelSuggestedSetup: 'Empfohlene Konfiguration',
    btnExport: 'PDF exportieren',
  },
};
