import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-sparrechner';
const title = 'LED Sparrechner';
const description =
  'Berechnen Sie, wie viel Geld und kWh Sie sparen, wenn Sie Ihre herkömmlichen Glühbirnen gegen LEDs austauschen. Entdecken Sie Ihre exakte jährliche Ersparnis und CO2-Reduktion.';

const faqData = [
  {
    question: 'Wie viel spart eine LED-Glühbirne wirklich?',
    answer:
      'Eine LED-Birne spart zwischen 80 % und 90 % Energie im Vergleich zu einer herkömmlichen Glühbirne. Wenn Sie zum Beispiel von 60 W auf 9 W umsteigen, reduziert sich der Stromverbrauch bei gleicher Helligkeit fast auf ein Minimum.',
  },
  {
    question: 'In welcher Zeit amortisiert sich der Umstieg auf LED?',
    answer:
      'Aufgrund der niedrigen Anschaffungskosten von LEDs und der hohen Energieeinsparung amortisiert sich die Investition bei normaler Nutzung meist in weniger als 4 Monaten. Bei Lampen, die viele Stunden brennen, geht es sogar noch schneller.',
  },
  {
    question: 'Was passiert, wenn ich eine LED mit mehr Watt einsetze?',
    answer:
      'LEDs erzeugen sehr wenig Hitze. Daher können Sie Lampen, die früher durch die Hitzeentwicklung herkömmlicher Birnen begrenzt waren, mit helleren LEDs bestücken, solange die elektrischen Grenzwerte der Fassung eingehalten werden.',
  },
  {
    question: 'Halten LEDs wirklich so lange, wie auf der Packung steht?',
    answer:
      'Qualitäts-LEDs halten zwischen 15.000 und 50.000 Stunden. Bei einer durchschnittlichen Nutzung von 4 Stunden am Tag bedeutet das eine Lebensdauer von über 15 Jahren.',
  },
  {
    question: 'Kann ich LEDs mit einem Dimmer verwenden?',
    answer:
      'Nur wenn auf der Verpackung explizit "Dimmbar" steht. Standard-LEDs funktionieren nicht mit alten Dimmern und können flackern oder summen.',
  },
  {
    question: 'Muss ich die ganze Lampe austauschen?',
    answer:
      'In 99 % der Fälle nein. Sie müssen nur das Leuchtmittel durch eine LED mit der gleichen Fassung (E27, E14, GU10 etc.) ersetzen.',
  },
];

const howToData = [
  {
    name: 'Lichtpunkte zählen',
    text: 'Prüfen Sie, wie viele Glüh- oder Halogenlampen Sie im Haus haben und notieren Sie deren Wattleistung.',
  },
  {
    name: 'Passende LED wählen',
    text: 'Wählen Sie den aktuellen Lampentyp im Rechner aus. Die entsprechenden LED-Äquivalente werden automatisch zugewiesen.',
  },
  {
    name: 'Nutzungsstunden anpassen',
    text: 'Geben Sie an, wie viele Stunden am Tag die Lampen im Durchschnitt eingeschaltet sind.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
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
      text: 'LED-Sparratgeber: So senken Sie Ihre Stromrechnung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Wechsel von klassischer Beleuchtung zu moderner <strong>LED-Technologie (Light Emitting Diode)</strong> ist eine der rentabelsten Investitionen im Haushalt. Jedes Watt, das eingespart wird, entlastet direkt Ihren Geldbeutel. Eine 9W LED bietet die gleiche Helligkeit wie eine 60W Glühbirne, benötigt aber <strong>85 % weniger Strom</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Energieersparnis', icon: 'mdi:lightning-bolt' },
        { value: '25.000h', label: 'Lebensdauer LED', icon: 'mdi:clock-outline' },
        { value: '< 4 Monate', label: 'Amortisation', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Traditionelle Glühbirne',
          description: 'Technik aus dem 20. Jahrhundert, die auf der Erhitzung eines Drahtes basiert. 95 % der Energie verpuffen als Hitze.',
          icon: 'mdi:lightbulb-outline',
          points: ['95 % Energieverlust durch Hitze', 'Lebensdauer: 1.000 Stunden', 'Sehr hohe Betriebskosten'],
        },
        {
          title: 'Moderne LED Technik',
          description: 'Der aktuelle Standard für Energieeffizienz zu Hause. Sofort 100 % Helligkeit beim Einschalten.',
          icon: 'mdi:led-outline',
          points: ['85–90 % direkte Ersparnis', 'Lebensdauer: bis zu 50.000 Stunden', 'Minimale Wärmeabgabe'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Die Physik dahinter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine Glühbirne wandelt nur 5 % des Stroms in Licht um. LEDs hingegen nutzen Halbleiter, um Elektrizität fast direkt in Licht umzuwandeln. <strong>Achten Sie nicht auf die Watt, sondern auf die Lumen:</strong> Eine alte 60W Birne liefert ca. 800 lm – moderne LEDs schaffen das mit nur 8–9W.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Vergleichstabelle',
      icon: 'mdi:table',
      badge: 'Referenz',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W Glühbirne</strong> → LED 5–6W (450 lm)</li><li><strong>60W Glühbirne</strong> → LED 8–10W (800 lm)</li><li><strong>100W Glühbirne</strong> → LED 13–15W (1500 lm)</li><li><strong>50W Halogen</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Vorteile von LED über das Geld hinaus',
      items: [
        'Extreme Langlebigkeit: Hält oft über 15 Jahre.',
        'Sofort hell: Keine Aufwärmphase wie bei Energiesparlampen.',
        'Wenig Hitze: Ideal für empfindliche Lampenschirme.',
        'Umweltfreundlich: Kein Quecksilber enthalten.',
        'Kompatibel: Passt in fast alle alten Fassungen.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Haus-Konfiguration',
    labelBulbs: 'Wie viele Lampen tauschen Sie?',
    unitBulbs: 'Stück',
    labelType: 'Aktuelle Lampenart',
    labelHours: 'Nutzung pro Tag',
    labelPrice: 'Strompreis',
    unitPrice: '€/kWh',
    resultBadge: 'Ersparnis-Berechnung',
    labelAnnual: 'Ersparnis pro Jahr',
    labelMonthly: 'pro Monat',
    labelEfficiency: 'Effizienz',
    labelCo2: 'CO2-Vermeidung',
    unitLess: '% weniger',
    currencySign: '€',
    btnInc60Title: 'Glühbirne',
    btnInc60Sub: 'Klassisch (60W)',
    btnInc40Title: 'Glühbirne',
    btnInc40Sub: 'Klein (40W)',
    btnInc100Title: 'Glühbirne',
    btnInc100Sub: 'Groß (100W)',
    btnHalo50Title: 'Halogen',
    btnHalo50Sub: 'Spot (50W)',
    usageNever: 'Selten',
    usageLow: 'Wenig',
    usageNormal: 'Normal',
    usageModerate: 'Mittel',
    usageHeavy: 'Viel',
    usagePro: 'Intensiv',
    usageVeryHeavy: 'Sehr viel',
    usageAlways: 'Dauerbetrieb',
  },
};
