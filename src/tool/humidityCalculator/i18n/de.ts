import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'luftfeuchtigkeitsrechner';
const title = 'Rechner für Luftfeuchtigkeit und Entfeuchtungsdauer zu Hause';
const description =
  'Berechnen Sie, wie viel Wasser Ihr Entfeuchter entfernen muss, um ein feuchtes Zimmer auf einen gesunden Feuchtigkeitsgrad zu bringen. Sehen Sie die geschätzte Laufzeit, Schimmelwarnungen und Komfortzonen auf einen Blick in einem interaktiven Tool.';

const faqData = [
  {
    question: 'Wie lange sollte ein Entfeuchter pro Tag laufen?',
    answer:
      'In einem mäßig feuchten Raum muss ein standardmäßiger Hausentfeuchter in der Regel zwischen 8 und 12 Stunden pro Tag laufen, um 50 Prozent relative Luftfeuchtigkeit zu halten. Bei sehr feuchten Bedingungen oder nach Wasserschäden kann ein durchgehender Betrieb von 24 bis 48 Stunden nötig sein, um einen trockenen Grundzustand zu erreichen.',
  },
  {
    question: 'Welcher Raumluftfeuchtigkeitswert verhindert Schimmel?',
    answer:
      'Schimmelwachstum wird gehemmt, wenn die relative Luftfeuchtigkeit im Innenbereich unter 60 Prozent gehalten wird. Die ideale Komfortzone für die menschliche Gesundheit und Gebäudeerhaltung liegt zwischen 40 und 50 Prozent relativer Luftfeuchtigkeit. Werte über 70 Prozent schaffen ein Hochrisikoumfeld, in dem Schimmelsporen innerhalb von 24 bis 48 Stunden keimen können.',
  },
  {
    question: 'Wie viel Wasser kann Luft halten?',
    answer:
      'Die Menge an Wasserdampf, die Luft halten kann, hängt von der Temperatur ab. Bei 20 Grad Celsius enthält gesättigte Luft etwa 17 Gramm Wasser pro Kubikmeter. Bei 25 Grad Celsius steigt dies auf etwa 23 Gramm pro Kubikmeter. Ein 30 Quadratmeter großer Raum bei 25 Grad Celsius und 70 Prozent Luftfeuchtigkeit enthält etwa 8 Liter unsichtbares Wasser in der Luft.',
  },
  {
    question: 'Beeinflusst die Temperatur die Effizienz des Entfeuchters?',
    answer:
      'Ja. Kompressorbasierte Entfeuchter arbeiten am besten über 18 Grad Celsius. Unter 15 Grad Celsius sinkt ihre Leistung, da Verdampferschlangen vereisen können. Sorptionsentfeuchter sind besser für kalte Räume wie Garagen oder Keller geeignet, da sie einen chemischen Trocknungsprozess anstelle von Kondensation verwenden.',
  },
  {
    question: 'Welche Entfeuchtergröße brauche ich?',
    answer:
      'Für einen mäßig feuchten Raum bis zu 50 Quadratmetern ist in der Regel ein Gerät mit 10 bis 12 Litern pro Tag ausreichend. Für sehr feuchte Räume oder Räume über 50 Quadratmetern wählen Sie ein Modell mit 20 Litern pro Tag. Nach einer Überschwemmung oder starkem Feuchtigkeitsschaden wird ein industrielles Gerät mit 30 Litern pro Tag die Verhältnisse schneller wiederherstellen.',
  },
  {
    question: 'Kann ein Entfeuchter Wäsche trocknen?',
    answer:
      'Ja. Ein Entfeuchter mit Wäschetrocknungsmodus kann Kleidung im Innenbereich effizient trocknen und dabei Feuchtigkeit aus der Umgebungsluft entziehen. Er verbraucht weniger Energie als ein Wäschetrockner und verhindert Kondensation an Fenstern und Wänden. Erwarten Sie Trocknungszeiten ähnlich dem Trocknen an der Leine bei warmem Wetter.',
  },
];

const howToData = [
  {
    name: 'Raumgröße eingeben',
    text: 'Geben Sie die Bodenfläche des Raums in Quadratmetern ein. Der Rechner geht von einer Standardraumhöhe von 2,5 Metern aus, um das Gesamtluftvolumen zu schätzen.',
  },
  {
    name: 'Temperatur einstellen',
    text: 'Geben Sie die aktuelle Raumtemperatur in Grad Celsius ein. Wärmere Luft kann mehr Feuchtigkeit aufnehmen, daher beeinflusst die Temperatur direkt, wie viel Wasser entfernt werden muss.',
  },
  {
    name: 'Aktuelle Luftfeuchtigkeit auswählen',
    text: 'Verwenden Sie den Komfortregler oder die numerische Eingabe, um die aktuelle relative Luftfeuchtigkeit in Prozent einzustellen. Werte über 60 Prozent werden in Warntönen hervorgehoben.',
  },
  {
    name: 'Gewünschte Luftfeuchtigkeit wählen',
    text: 'Stellen Sie Ihre gewünschte relative Luftfeuchtigkeit ein. 50 Prozent werden für Komfort und Schimmelvermeidung empfohlen. 40 Prozent sind ideal für Allergiker.',
  },
  {
    name: 'Entfeuchterleistung eingeben',
    text: 'Geben Sie die Entzugsrate Ihres Geräts in Litern pro Tag ein. Diese ist in der Regel auf dem vorderen Etikett oder im Handbuch angegeben.',
  },
  {
    name: 'Ergebnisse überprüfen',
    text: 'Lesen Sie die Wasserentzugssimulation, die Laufzeitschätzung und das Schimmelrisikobanner, um zu entscheiden, wie lange Sie Ihr Gerät laufen lassen sollten.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'Das verborgene Wasser in Ihren Wänden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Hausbesitzer erkennen nie, dass feuchte Luft nicht nur unangenehm, sondern teuer und gefährlich ist. Ein einziges feuchtes Zimmer kann mehrere Liter unsichtbaren Wasserdampf enthalten. Mit der Zeit kondensiert diese Feuchtigkeit an kalten Oberflächen, nährt Schimmelkolonien und beschädigt Putz, Farbe und Holz. Genau zu verstehen, wie viel Wasser entfernt werden muss und wie lange das dauert, ist der erste Schritt, um Ihr Zuhause und Ihre Gesundheit zu schützen.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Ideale Raumluftfeuchtigkeit', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Durchschnittliche tägliche Laufzeit', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Schimmelrisikoschwelle', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Warum relative Luftfeuchtigkeit wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relative Luftfeuchtigkeit ist nicht die Menge an Wasser in der Luft, sondern der Prozentsatz an Wasser, den die Luft relativ zum Maximum bei dieser Temperatur aufnehmen kann. Warme Luft ist wie ein größerer Schwamm. Bei 30 Grad Celsius kann Luft fast doppelt so viel Feuchtigkeit aufnehmen wie bei 15 Grad Celsius. Deshalb kann ein Raum sich klebrig anfühlen, selbst nachdem Sie die Fenster geöffnet haben. Die Feuchtigkeit ist immer noch da, nur weniger sichtbar.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Hohe Luftfeuchtigkeit',
          description: 'Über 60 Prozent relative Luftfeuchtigkeit. Risiko von Schimmel, Hausstaubmilben und Kondensationsschäden.',
          icon: 'mdi:alert',
          points: ['Kondensation an Fenstern und Wänden', 'Muffiger Geruch und mikrobielles Wachstum', 'Erhöhte Atemwegsreizung', 'Höhere Heizkosten aufgrund der Wärmeleitfähigkeit feuchter Luft'],
        },
        {
          title: 'Optimale Luftfeuchtigkeit',
          description: 'Zwischen 40 und 50 Prozent relative Luftfeuchtigkeit. Komfortabel, gesund und energieeffizient.',
          icon: 'mdi:check-circle',
          points: ['Keine Kondensation an kalten Oberflächen', 'Schimmelsporen bleiben inaktiv', 'Haut und Atemwegskomfort', 'Erhalt von Möbeln und Holz'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Feuchtigkeitsprüfung',
      icon: 'mdi:clipboard-check',
      badge: 'Aktion',
      html: '<p style="margin:0">Überprüfen Sie jeden Morgen die Fenster auf Kondensation. Wenn sich regelmäßig Tropfen bilden, ist Ihre Luftfeuchtigkeit zu hoch. Lassen Sie den Entfeuchter 12 Stunden täglich laufen, bis die Kondensation aufhört. Stellen Sie das Gerät in den feuchtesten Raum, meist die Küche, das Badezimmer oder den Keller. Leeren Sie den Tank täglich und reinigen Sie den Filter alle zwei Wochen.</p>',
    },
    {
      type: 'title',
      text: 'Ihren Entfeuchter korrekt dimensionieren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein häufiger Fehler ist der Kauf eines zu kleinen Entfeuchters für den Raum. Ein 10 Liter pro Tag Gerät in einem 60 Quadratmeter feuchten Keller läuft durchgehend, ohne je die Zielfeuchtigkeit zu erreichen. Verwenden Sie diesen Rechner, um das genaue Extraktionsvolumen zu sehen, das Ihr Raum benötigt. Wenn die Laufzeitschätzung 20 Stunden pro Tag übersteigt, benötigen Sie ein leistungsfähigeres Gerät oder eine bessere Belüftung.',
    },
    {
      type: 'summary',
      title: 'So halten Sie Ihr Zuhause trocken',
      items: [
        'Verwenden Sie diesen Rechner, um das genaue Wasserentzugsvolumen für jeden Raum zu bestimmen.',
        'Halten Sie die relative Raumluftfeuchtigkeit zwischen 40 und 50 Prozent für Gesundheit und Komfort.',
        'Lassen Sie den Entfeuchter laufen, bis das Schimmelrisikobanner grün wird.',
        'Leeren Sie den Wassertank, bevor er voll ist, um eine automatische Abschaltung zu verhindern.',
        'Reinigen Sie die Filter regelmäßig, um Luftstrom und Entzugsraten auf dem Maximum zu halten.',
        'Verbessern Sie die Raumbelüftung zusätzlich zur Entfeuchtung für schnellere Ergebnisse.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Raumgröße',
    unitM2: 'm2',
    labelTemperature: 'Temperatur',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Aktuelle Luftfeuchtigkeit',
    labelTargetHumidity: 'Gewünschte Luftfeuchtigkeit',
    labelCapacity: 'Entfeuchterleistung',
    unitLitersDay: 'L/day',
    comfortDialTitle: 'Komfortzone',
    comfortCurrent: 'Aktuell',
    comfortTarget: 'Ziel',
    tankTitle: 'Wasser in der Luft',
    tankLiters: 'Liter',
    runtimeTitle: 'Geschätzte Laufzeit',
    runtimeUnitH: 'h',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Schimmelrisiko',
    moldRiskHigh: 'Hohes Risiko',
    moldRiskMedium: 'Mittleres Risiko',
    moldRiskLow: 'Geringes Risiko',
    extractionLabel: 'zu entziehen',
    tipEnergy: 'Wenn Sie Ihren Entfeuchter in Schwachlastzeiten laufen lassen, können Sie die Stromkosten erheblich senken.',
    tipMold: 'Eine Luftfeuchtigkeit unter 50 Prozent verhindert, dass Schimmelsporen auf Oberflächen keimen.',
    unitPercent: '%',
    badgeHigh: 'Hoch',
    badgeMedium: 'Mittel',
    badgeLow: 'Gering',
  },
};
