import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'standby-verbrauch-simulator';
const title = 'Standby Verbrauch Simulator';
const description =
  'Finden Sie heraus, wie viel Strom Ihre Geräte im Standby-Modus verschwenden. Berechnen Sie die versteckten jährlichen Kosten von Phantomlasten von Fernsehern, Routern, Ladegeräten und mehr.';

const faqData = [
  {
    question: 'Was ist Vampire Power oder Phantomlast?',
    answer:
      'Vampire Power ist die Elektrizität, die elektronische Geräte verbrauchen, wenn sie ausgeschaltet oder im Standby-Modus sind. Dies geschieht, weil viele Geräte teilweise aktiv bleiben, um auf Fernbedienungen zu reagieren, Netzwerkverbindungen aufrechtzuerhalten oder interne Uhren laufen zu lassen.',
  },
  {
    question: 'Wie viel kostet Standby-Strom pro Jahr?',
    answer:
      'Der durchschnittliche Haushalt verschwendet allein für Standby-Strom zwischen 50 und 150 Euro pro Jahr. Ein einzelner moderner Fernseher kann kontinuierlich 10 bis 20 Watt verbrauchen, was je nach Strompreis auf etwa 15 bis 30 Euro pro Jahr hinausläuft.',
  },
  {
    question: 'Welche Geräte verbrauchen im Standby am meisten?',
    answer:
      'Die größten Verbraucher sind Set-Top-Boxen, Spielekonsolen, Desktop-Computer im Schlafmodus, Smart-TVs und ältere externe Netzteile. Kabel- und Satellitenboxen sind besonders verschwenderisch, weil sie selten in den echten Standby wechseln.',
  },
  {
    question: 'Bringt das Ausstecken von Geräten wirklich Geld?',
    answer:
      'Ja. Das Ausstecken von Geräten oder die Verwendung von Advanced Power Strips mit Master-Steckdosen eliminiert den Standby-Verbrauch vollständig. Bei einem typischen Haushalt mit 20 Standby-Geräten kann die jährliche Einsparung zwischen 40 und 120 Euro liegen.',
  },
  {
    question: 'Lohnen sich smarte Steckdosenleisten?',
    answer:
      'Smarte oder Advanced Power Strips schalten Strom zu Peripheriegeräten ab, wenn ein Master-Gerät ausgeschaltet wird. Sie amortisieren sich innerhalb weniger Monate, wenn man sie mit Entertainment-Centern oder Computerarbeitsplätzen nutzt.',
  },
  {
    question: 'Wie kann ich den Standby-Verbrauch zu Hause messen?',
    answer:
      'Sie können ein preiswertes Steckdosen-Leistungsmessgerät (Wattmeter) verwenden, um exakt zu messen, wie viele Watt jedes Gerät im ausgeschalteten oder im Leerlaufzustand zieht. Alternativ liefert dieser Simulator standardisierte Schätzungen basierend auf Herstellermittelwerten und Labormessungen.',
  },
];

const howToData = [
  {
    name: 'Gehen Sie jeden Raum durch',
    text: 'Zählen Sie jedes Gerät, das rund um die Uhr eingesteckt bleibt. Dazu gehören Fernseher, Mikrowellen, Router, Drucker, Spielekonsolen und Handy-Ladegeräte.',
  },
  {
    name: 'Schätzen Sie die täglichen Standby-Stunden',
    text: 'Die meisten Geräte sind 20 bis 24 Stunden pro Tag im Standby. Geben Sie den Durchschnitt für jedes Gerät ein oder verwenden Sie den Standardwert von 24 Stunden.',
  },
  {
    name: 'Geben Sie Ihren Strompreis ein',
    text: 'Geben Sie den Preis ein, den Sie pro Kilowattstunde zahlen. Er steht auf Ihrer Stromrechnung.',
  },
  {
    name: 'Lesen Sie Ihre Vampire-Draw-Zusammenfassung',
    text: 'Der Simulator zeigt die insgesamt verschwendeten Watt, die jährlichen Kilowattstunden und die versteckten jährlichen Kosten. Verwenden Sie das Kategorie-Abzeichen, um zu sehen, ob Ihr Haushalt niedrig, moderat, hoch oder extrem ist.',
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
      text: 'Phantomlast: Die Elektrizität, die Sie bezahlen, aber nie nutzen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jede Steckdose in Ihrem Zuhause, an der ein Kabel angeschlossen ist, ist eine potenzielle Quelle von <strong>Phantomelektrizität</strong>. Auch wenn der Schalter ausgeschaltet ist, zieht das Gerät weiterhin Strom. Es sind vielleicht nur wenige Watt, multipliziert mit 24 Stunden am Tag und 365 Tagen im Jahr, werden diese Watt zu Hunderten von Kilowattstunden und zu echtem Geld, das aus Ihrer Tasche geht.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'des Haushaltsbudgets', icon: 'mdi:flash' },
        { value: '23h', label: 'Ø Standby pro Tag', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'Ø Top-Gerät', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Die Geräte, die niemals schlafen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Moderne Haushalte enthalten durchschnittlich 40 elektronische Geräte. Etwa die Hälfte davon ist durchgehend mit dem Stromnetz verbunden. Während Energievorschriften die Standby-Effizienz in den letzten Jahren verbessert haben, ist die absolute Zahl der Geräte gestiegen. Eine einzelne Spielekonsole im Instant-On-Modus kann 15 Watt ziehen. Ein Fernseher mit Quick-Start kann 12 Watt verbrauchen. Addieren Sie Router, Modems, smarte Lautsprecher, Mikrowellen mit Uhren, Drucker und Ladegeräte, und die Summe übersteigt schnell 100 Watt dauerhaften Hintergrundverbrauchs.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Haushalte mit geringem Verbrauch',
          description: 'Haushalte, die den Standby-Verbrauch aktiv durch smarte Steckdosenleisten und Aussteckgewohnheiten steuern.',
          icon: 'mdi:leaf',
          points: ['Unter 50 Watt Gesamt-Standby', 'Jährliche Kosten unter 50 Euro', 'Verwendet Advanced Power Strips'],
        },
        {
          title: 'Haushalte mit hohem Verbrauch',
          description: 'Typische Haushalte mit Entertainment-Centern, mehreren Spielekonsolen und immer eingeschalteten Computern.',
          icon: 'mdi:lightning-bolt',
          points: ['Über 150 Watt Gesamt-Standby', 'Jährliche Kosten über 150 Euro', 'Viele Geräte im Quick-Start-Modus'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Spar Checkliste',
      icon: 'mdi:check-circle',
      badge: 'Aktion',
      html: '<p style="margin:0">Ziehen Sie Handy-Ladegeräte bei Nichtgebrauch aus der Steckdose. Verwenden Sie eine Master-gesteuerte Steckdosenleiste für Ihr Entertainment-Center. Deaktivieren Sie den Quick-Start- oder Instant-On-Modus bei Fernsehern und Konsolen. Schalten Sie Desktop-Computer aus, anstatt sie im Schlafmodus zu lassen.</p>',
    },
    {
      type: 'title',
      text: 'Warum Watt sich schneller summieren, als Sie denken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein Watt ist eine Rate des Energieverbrauchs. Ein Watt, das eine Stunde lang läuft, ist eine Wattstunde. Ein Gerät, das kontinuierlich 10 Watt zieht, verbraucht 87,6 Kilowattstunden pro Jahr. Bei einem Durchschnittspreis von 0,25 Euro pro Kilowattstunde kostet dieses einzelne Gerät über 21 Euro pro Jahr. Multiplizieren Sie das nun mit jedem eingesteckten Gadget in Ihrem Zuhause.',
    },
    {
      type: 'summary',
      title: 'So senken Sie Ihre Phantomlast',
      items: [
        'Ermitteln Sie die größten Verbraucher mit diesem Simulator oder einem Steckdosen-Messgerät.',
        'Gruppieren Sie Geräte auf smarten Steckdosenleisten, die den Standby abschalten, wenn das Hauptgerät aus ist.',
        'Deaktivieren Sie Always-On-, Quick-Start- und Netzwerk-Standby-Funktionen, wo möglich.',
        'Ziehen Sie Ladegeräte und kleine Geräte ab, die nicht täglich genutzt werden.',
        'Erwägen Sie den Ersatz sehr alter externer Netzteile durch moderne, effiziente Modelle.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Phantom-Last-Audit',
    labelDevices: 'Angeschlossene Standby-Geräte',
    labelHours: 'Standby-Stunden pro Tag',
    unitHours: 'h',
    labelPrice: 'Strompreis',
    unitPrice: '/kWh',
    resultBadge: 'Vampire-Draw-Ergebnis',
    labelAnnualKwh: 'Pro Jahr verschwendet',
    labelAnnualCost: 'Versteckte jährliche Kosten',
    labelMonthlyCost: 'Monatliches Äquivalent',
    labelDevicesCount: 'Geräte gezählt',
    labelTotalWatts: 'Gesamt-Standby-Watt',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Währung',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Geringer Verbrauch',
    categoryModerate: 'Moderater Verbrauch',
    categoryHigh: 'Hoher Verbrauch',
    categoryExtreme: 'Extremer Verbrauch',
    addDevice: 'Gerät hinzufügen',
    removeDevice: 'Entfernen',
    modalAddTitle: 'Standby-Gerät hinzufügen',
    labelDeviceName: 'Gerätename',
    labelDeviceWatts: 'Watt im Standby',
    btnSave: 'Speichern',
    btnCancel: 'Abbrechen',
  },
};
