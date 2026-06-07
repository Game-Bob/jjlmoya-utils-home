import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'geraetekosten-rechner';
const title = 'Kostenrechner für Wasser und Energie je Waschgang für Haushaltsgeräte';
const description =
  'Berechne die wahren Kosten pro Ladung deiner Waschmaschine, deines Geschirrspülers und deines Wäschetrockners. Sieh genau, wie viel Strom, Wasser und Waschmittel jeder Waschgang kostet und entdecke, wie viel du durch den Wechsel in den Eco Modus sparen kannst.';

const faqData = [
  {
    question: 'Wie viel kostet ein Waschmaschinengang?',
    answer:
      'Ein typischer Eco 40C Gang verbraucht etwa 0,45 kWh Strom und 40 Liter Wasser. Bei durchschnittlichen europäischen Preisen kostet das etwa 0,10 bis 0,15 Euro pro Ladung. Ein intensiver 60C Gang kann über 1,2 kWh und 70 Liter verbrauchen und die Kosten auf über 0,30 Euro pro Ladung treiben.',
  },
  {
    question: 'Ist es günstiger, den Geschirrspüler nachts laufen zu lassen?',
    answer:
      'Wenn dein Stromanbieter Tarife mit Zeitunterscheidung verwendet, kann das Laufenlassen des Geschirrspülers in Schwachlastzeiten die Energiekosten um 30 Prozent oder mehr senken. Spitzenzeiten sind typischerweise an Wochentagen morgens und abends. Prüfe deinen Vertrag oder Daten deines intelligenten Zählers, um dein genaues Schwachlastfenster zu bestätigen.',
  },
  {
    question: 'Verbraucht der Trockner viel Strom?',
    answer:
      'Ja. Ein Wäschetrockner ist eines der energieintensivsten Haushaltsgeräte. Eine einzelne volle Ladung kann 2,5 bis 3,5 kWh verbrauchen und 0,50 bis 0,80 Euro pro Waschgang kosten. Die Verwendung eines Wärmepumpentrockners oder das Wäschetrocknen im Freien kann diese Kosten um 60 bis 80 Prozent senken.',
  },
  {
    question: 'Wie viel Wasser verbraucht ein Geschirrspüler?',
    answer:
      'Moderne Geschirrspüler sind erstaunlich effizient. Ein standardmäßiger Eco Gang verwendet nur 8 bis 12 Liter Wasser pro Ladung, während ein Intensivprogramm 14 bis 16 Liter verwenden kann. Das ist viel weniger als das Abwaschen der gleichen Geschirrmenge von Hand unter fließendem Wasser, was typischerweise 40 bis 60 Liter verbraucht.',
  },
  {
    question: 'Wann ist die günstigste Zeit, um Geräte zu benutzen?',
    answer:
      'Bei Tarifen mit Zeitunterscheidung sind die günstigsten Zeiträume normalerweise spät in der Nacht, sehr früh am Morgen und an Wochenenden. Diese Schwachlastzeiten können 30 bis 50 Prozent günstiger sein als Spitzenzeiten an Wochentagen. Einige Anbieter bieten auch kostenlose Stunden an Wochenenden an.',
  },
  {
    question: 'Spart der Wechsel in den Eco Modus wirklich Geld?',
    answer:
      'Absolut. Eco Modi verwenden niedrigere Temperaturen, kürzere Heizphasen und weniger Wasser. Über ein ganzes Jahr gesehen kann der Wechsel von Normal zu Eco bei Waschmaschine und Geschirrspüler 50 bis 100 Euro an Strom und Wasser zusammen sparen, je nach Nutzungshäufigkeit und lokalen Preisen.',
  },
];

const howToData = [
  {
    name: 'Wähle dein Gerät',
    text: 'Tippe auf das Symbol der Waschmaschine, des Geschirrspülers oder des Wäschetrockners oben im Rechner. Jedes Gerät hat unterschiedliche Profile für Energie und Wasserverbrauch.',
  },
  {
    name: 'Wähle einen Waschgang',
    text: 'Verwende den Eco, Normal oder Intensiv Schieberegler, um das Waschprogramm einzustellen. Eco verwendet weniger Energie und Wasser. Intensiv verwendet am meisten.',
  },
  {
    name: 'Gib deine lokalen Preise ein',
    text: 'Tippe deinen Strompreis pro kWh und deinen Wasserpreis pro Liter ein. Du findest diese auf deiner Nebenkostenabrechnung oder der Webseite deines Anbieters.',
  },
  {
    name: 'Lege die Nutzungshäufigkeit fest',
    text: 'Gib an, wie viele Waschgänge du pro Woche machst. Damit kann der Rechner deine jährlichen Kosten und potenziellen Jahresersparnisse schätzen.',
  },
  {
    name: 'Wähle die Nutzungsstunde',
    text: 'Wähle die Stunde, in der du das Gerät laufen lassen möchtest. Spitzenzeiten sind rot markiert. Schwachlastzeiten sind grün und günstiger, wenn du einen Tarif mit Zeitunterscheidung hast.',
  },
  {
    name: 'Schalte Waschmittelkosten zu',
    text: 'Aktiviere den Waschmittel Schalter, wenn du möchtest, dass die Quittung einen Schätzwert für Pulver, Flüssigkeit oder Kapseln pro Waschgang enthält.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'Die verborgenen Kosten jeder Ladung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Menschen haben keine Ahnung, wie viel ein einzelner Waschmaschinengang tatsächlich kostet. Sie sehen eine vierteljährliche Stromrechnung und nehmen an, dass Geräte billig im Betrieb sind. In Wirklichkeit kann eine Familie, die fünf Waschgänge pro Woche macht, über 200 Euro pro Jahr nur für Wäsche ausgeben. Addiere den Geschirrspüler drei Mal pro Woche und den Wäschetrockner zwei Mal pro Woche und die Summe steigt auf über 500 Euro jährlich. Dieser Rechner zerlegt jeden Cent, damit du deine Gewohnheiten optimieren kannst.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Eco Waschgang', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Wasser Eco Waschgang', icon: 'mdi:water' },
        { value: '30%', label: 'Spitzenaufschlag', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Warum sich kleine Änderungen multiplizieren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein einzelnes Grad Temperatur oder ein paar Liter Wasser erscheinen für einen Waschgang unwichtig. Aber über 250 Waschgänge pro Jahr summieren sich diese kleinen Unterschiede zu einem beträchtlichen Betrag. Das Senken von 60C auf 40C reduziert den Energieverbrauch um etwa 40 Prozent pro Ladung. Der Wechsel von Normal zu Eco bei einem Geschirrspüler spart jedes Mal etwa 3 Liter Wasser und 0,3 kWh. Das sind keine marginalen Gewinne. Das ist der schnellste Weg, deine Nebenkosten zu senken, ohne neue Geräte zu kaufen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Intensiver Waschgang',
          description: 'Maximale Hitze und Wasser für stark verschmutzte Ladungen.',
          icon: 'mdi:alert',
          points: ['1,2 bis 3,5 kWh pro Ladung', '70 Liter für Waschmaschinen', 'Spitzenzeitaufschlag gilt', 'Höchste Jahreskosten'],
        },
        {
          title: 'Eco Waschgang',
          description: 'Niedrigere Temperatur, optimierte Dauer, minimales Wasser.',
          icon: 'mdi:check-circle',
          points: ['0,45 bis 1,5 kWh pro Ladung', 'Nur 8 bis 40 Liter', 'Schwachlastzeiten nutzbar', 'Niedrigste Jahreskosten'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Geräteprüfung',
      icon: 'mdi:clipboard-check',
      badge: 'Aktion',
      html: '<p style="margin:0">Lass die Waschmaschine nur mit voller Ladung laufen. Verwende das Eco Programm für normale Verschmutzung. Stelle deinen Geschirrspüler auf verzögerten Start nach 22:00 Uhr ein, wenn du einen Tarif mit Zeitunterscheidung hast. Reinige das Flusensieb des Trockners nach jedem Waschgang, um die Effizienz zu erhalten. Trockne die Wäsche im Freien oder auf einem Wäscheständer, wann immer das Wetter es erlaubt.</p>',
    },
    {
      type: 'title',
      text: 'Zeitunterscheidung und Spitzenpreise',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Viele Stromanbieter berechnen unterschiedliche Tarife je nach Tageszeit. Spitzenperioden, normalerweise an Wochentagen morgens und abends, können 30 bis 50 Prozent mehr kosten als Schwachlastperioden. Eine Ladung, die um 20:00 Uhr läuft, kann 0,18 Euro kosten, während dieselbe Ladung um 02:00 Uhr nur 0,12 Euro kostet. Über ein Jahr richtig geplant kann das 50 bis 100 Euro sparen, ohne sonst etwas zu ändern. Dieser Rechner markiert Spitzenzeiten rot und Schwachlastzeiten grün, damit du im Voraus planen kannst.',
    },
    {
      type: 'summary',
      title: 'So senkst du Gerätekosten',
      items: [
        'Nutze diesen Rechner, um die wahren Kosten pro Waschgang für deine Geräte zu finden.',
        'Wechsle wann immer möglich in den Eco Modus, um bis zu 40 Prozent Energie zu sparen.',
        'Lass volle Ladungen laufen, anstatt Teilladungen, um die Effizienz zu maximieren.',
        'Verschiebe Waschgänge in Schwachlastzeiten, wenn dein Tarif zeitabhängige Preise unterstützt.',
        'Trockne die Wäsche im Freien, anstatt den Wäschetrockner zu nutzen, um seine Kosten ganz zu eliminieren.',
        'Reinige Filter und entkalkte regelmäßig, damit die Geräte mit der angegebenen Effizienz laufen.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Gerät',
    applianceWasher: 'Waschmaschine',
    applianceDishwasher: 'Geschirrspüler',
    applianceDryer: 'Wäschetrockner',
    labelCycle: 'Programm',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensiv',
    labelElectricityPrice: 'Strompreis',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Wasserpreis',
    unitPriceLiter: '€/L',
    labelDetergent: 'Waschmittel',
    labelDetergentToggle: 'Waschmittelkosten einbeziehen',
    labelHour: 'Geplante Stunde',
    peakBadge: 'Spitzenzeit aktiv',
    offPeakBadge: 'Schwachlastzeit',
    receiptTitle: 'Kostenaufschlüsselung',
    receiptElectricity: 'Strom',
    receiptWater: 'Wasser',
    receiptDetergent: 'Waschmittel',
    receiptTotal: 'Gesamt pro Waschgang',
    receiptPerYear: 'Geschätzt pro Jahr',
    comparisonTitle: 'Intelligenter Wechsel',
    comparisonText: 'Der Wechsel von Normal zu Eco spart bei jeder Ladung Geld.',
    comparisonSavings: 'Jährliche Ersparnis',
    comparisonMonths: 'Monate Waschmittel',
    badgePeak: 'Spitze',
    badgeOffPeak: 'Schwachlast',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'Jahr',
    labelCyclesPerWeek: 'Waschgänge pro Woche',
    currencySign: '€',
    labelCurrency: 'Währung',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
