import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wasserenthaertungsrechner';
const title = 'Haushaltswasserenthärter und Salzverbrauchsoptimierer';
const description =
  'Analysieren Sie Ihren Wasserhärtegrad, berechnen Sie optimale Enthärtereinstellungen und schätzen Sie den jährlichen Salzverbrauch. Sehen Sie Kalkablagerungsprognosen, Salznachfüllzeitpläne und Gerätelebensdauervorhersagen in einem interaktiven Tool.';

const faqData = [
  {
    question: 'Was ist Wasserhärte?',
    answer:
      'Wasserhärte ist die Konzentration gelöster Kalzium- und Magnesiumminerale in Ihrem Leitungswasser. Sie wird in Körnern pro Gallone oder französischen Graden gemessen. Hartes Wasser verursacht Kalkablagerungen in Rohren, reduziert die Heizeffizienz und verkürzt die Lebensdauer von Geräten.',
  },
  {
    question: 'Wie funktioniert ein Wasserenthärter?',
    answer:
      'Ein Wasserenthärter verwendet Ionenaustauscherharzperlen, um Kalzium- und Magnesiumionen gegen Natriumionen auszutauschen. Wenn das Harz gesättigt ist, regeneriert das System durch Spülen einer Salzlösung durch den Tank, wodurch die Perlen wiederhergestellt und die harten Mineralien abgeführt werden.',
  },
  {
    question: 'Wie viel Salz verbraucht ein Enthärter pro Jahr?',
    answer:
      'Ein typischer Vierpersonenhaushalt mit mäßig hartem Wasser verbraucht zwischen 80 und 120 Kilogramm Salz pro Jahr. Sehr hartes Wasser oder größere Haushalte können diesen Wert auf über 200 Kilogramm steigern. Moderne hochenergieeffiziente Enthärter verbrauchen etwa 30 Prozent weniger Salz als ältere Modelle.',
  },
  {
    question: 'Wie oft sollte ich den Salztank auffüllen?',
    answer:
      'Die meisten Salztanks müssen alle 4 bis 8 Wochen aufgefüllt werden. Überprüfen Sie den Salzstand monatlich. Wenn der Tank weniger als ein Drittel voll ist, fügen Sie eine neue 25 Kilogramm Tüte hinzu. Lassen Sie das Salz niemals vollständig ausgehen, da sonst das Harz wieder aushärten und an Wirksamkeit verlieren wird.',
  },
  {
    question: 'Schadet hartes Wasser Geräten wirklich?',
    answer:
      'Ja. Kalkablagerungen auf Heizelementen zwingen diese zu härterer Arbeit, was die Energiekosten erhöht und vorzeitige Ausfälle verursacht. Ein Warmwasserbereiter in einem Gebiet mit sehr hartem Wasser kann bis zu 45 Prozent seiner erwarteten Lebensdauer verlieren. Waschmaschinen und Geschirrspüler leiden ebenfalls unter verstopften Ventilen und verkalkten Trommeln.',
  },
  {
    question: 'Kann ich enthärtetes Wasser trinken?',
    answer:
      'Enthärtetes Wasser ist für die meisten Menschen zum Trinken sicher. Der Natriumzuwachs ist gering und entspricht in etwa einer Scheibe Brot pro Tag. Menschen mit strenger natriumarmer Diät bevorzugen jedoch möglicherweise einen separaten nichtenthärteten Wasserhahn für Trinkwasser oder wählen ein kaliumbasiertes Enthärtersalz.',
  },
];

const howToData = [
  {
    name: 'Geben Sie Ihre Wasserhärte ein',
    text: 'Geben Sie den Härtegrad aus Ihrem Wasserqualitätsbericht oder Teststreifen ein. Wählen Sie Körner pro Gallone oder französische Grade im Einheitenauswahlmenü.',
  },
  {
    name: 'Setzen Sie die Haushaltsgröße',
    text: 'Wählen Sie die Anzahl der Personen in Ihrem Zuhause aus. Mehr Bewohner bedeuten höheren Wasserverbrauch und schnelleren Salzverbrauch.',
  },
  {
    name: 'Wählen Sie die Enthärterkapazität',
    text: 'Geben Sie die Kornkapazität des Harztanks Ihres Enthärters ein. Diese steht normalerweise auf dem Steuerventil oder im Handbuch. Übliche Werte sind 24.000 oder 32.000 Körner.',
  },
  {
    name: 'Überprüfen Sie die Härtekategorie',
    text: 'Lesen Sie die interaktive Härteskala, um zu verstehen, ob Ihr Wasser weich, mäßig hart oder extrem hart ist.',
  },
  {
    name: 'Prüfen Sie die Salzprognose',
    text: 'Betrachten Sie den Salzsäckesimulator, um zu sehen, wie viele 25 Kilogramm Säcke Sie pro Jahr benötigen und wann die nächste Nachfüllung fällig ist.',
  },
  {
    name: 'Untersuchen Sie die Geräteauswirkung',
    text: 'Vergleichen Sie die Basislebensdauer Ihrer Waschmaschine, Ihres Warmwasserbereiters und Ihrer Kaffeemaschine mit ihrer geschätzten Lebensdauer bei Ihrem aktuellen unbehandelten Wasser.',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: 'Die unsichtbaren Kosten harten Wassers',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hartes Wasser ist eines der teuersten versteckten Probleme in einem Zuhause. Jedes Mal, wenn Sie den Wasserhahn aufdrehen, fließen gelöste Mineralien durch Ihre Rohre und Geräte. Über Monate und Jahre kristallisieren sich diese Mineralien zu Kalk, einer harten weißen Kruste, die Heizelemente verstopft, Durchflussraten reduziert und Gummidichtungen zerstört. Das Ergebnis sind höhere Energierechnungen, kürzere Gerätelebensdauer und häufigere Wartungsanrufe. Ein Wasserenthärter beseitigt diesen Schaden an der Quelle.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Durchschn. Jahressalzverbrauch', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: 'Waschmaschine Basislebensdauer', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm Kalk pro GPG/Jahr', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Warum Kalk so zerstörerisch ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalk ist nicht nur ein kosmetischer Fleck auf Ihrem Wasserkocher. In einem Warmwasserbereiter bildet er eine isolierende Schicht auf dem Heizelement. Für jeden Millimeter Kalk sinkt die Energieübertragungseffizienz um bis zu 10 Prozent. Das bedeutet, dass eine 3 Millimeter Schicht Ihre Wasserheizungsrechnung um fast 30 Prozent erhöhen kann. In Waschmaschinen verhindert Kalk die Aktivierung von Waschmitteln, sodass Sie mehr Pulver für schlechtere Ergebnisse verwenden. In Kaffeemaschinen zerstört er das Thermostat und führt zu bitterem, ungleichmäßigem Extrakt.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Unbehandeltes hartes Wasser',
          description: 'Mineralien lagern sich frei in der gesamten Installation und jedem angeschlossenen Gerät ab.',
          icon: 'mdi:alert',
          points: ['Schneller Kalkaufbau in Heizungen und Boilern', 'Erhöhter Waschmittel- und Seifenverbrauch', 'Verkürzte Gerätelebensdauer um 30 bis 45 Prozent', 'Höhere Energierechnungen durch Isolationswirkung von Kalk'],
        },
        {
          title: 'Enthärtetes Wasser',
          description: 'Kalzium und Magnesium werden am Eintrittspunkt entfernt, bevor sie Wasserhähne und Geräte erreichen.',
          icon: 'mdi:check-circle',
          points: ['Null Kalkablagerung auf Heizelementen', 'Normale Waschmitteldosen liefern bessere Ergebnisse', 'Geräte erreichen ihre volle konstruktive Lebensdauer', 'Niedrigerer Energieverbrauch für die Wassererwärmung'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelltest für hartes Wasser',
      icon: 'mdi:clipboard-check',
      badge: 'Aktion',
      html: '<p style="margin:0">Füllen Sie eine klare Flasche mit Leitungswasser und geben Sie einige Tropfen Flüssigseife hinzu. Schütteln Sie kräftig. Wenn das Wasser trüb bleibt und sehr wenig Schaum bildet, ist Ihr Wasser hart. Kristallklares Wasser mit dichtem, stabilem Schaum weist auf weiches Wasser hin. Für eine präzise Messung verwenden Sie einen Gesamthärte-Teststreifen oder fordern Sie einen Bericht bei Ihrem Wasserversorger an.</p>',
    },
    {
      type: 'title',
      text: 'Die Salzversorgung richtig bemessen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Salzmangel ist der schnellste Weg, einen Enthärter zu ruinieren. Wenn der Salztank leer ist, härtet das Harzbett innerhalb von Tagen wieder aus und das System hört auf, Ihr Zuhause zu schützen. Verwenden Sie diesen Rechner, um genau vorherzusagen, wie viele 25 Kilogramm Säcke Sie pro Jahr benötigen. Wenn das Ergebnis mehr als 10 Säcke ist, erwägen Sie ein Upgrade auf einen größeren Harztank oder ein hocheffizientes Ventil, das pro Regenerationszyklus weniger Salz verbraucht.',
    },
    {
      type: 'summary',
      title: 'So schützen Sie Ihr Zuhause vor hartem Wasser',
      items: [
        'Verwenden Sie diesen Rechner, um Ihre genaue Wasserhärtekategorie und Salzanforderungen zu ermitteln.',
        'Installieren Sie einen richtig dimensionierten Wasserenthärter am Haupteintrittspunkt der Wasserversorgung.',
        'Füllen Sie den Salztank auf, bevor er unter ein Drittel fällt.',
        'Verwenden Sie hochreine verdunstete Salzpellets für die beste Harzleistung.',
        'Warten Sie Ventil und Harzbett alle 3 bis 5 Jahre.',
        'Überwachen Sie die Energierechnungen der Geräte auf plötzliche Anstiege, die auf Kalkaufbau hindeuten könnten.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Wasserhärte',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Haushaltsgröße',
    unitPeople: 'Personen',
    labelSoftenerCapacity: 'Enthärterkapazität',
    unitGrains: 'Körner',
    hardnessSoft: 'Weich',
    hardnessSlightly: 'Leicht hart',
    hardnessModerate: 'Mäßig hart',
    hardnessHard: 'Hart',
    hardnessVery: 'Sehr hart',
    hardnessExtreme: 'Extrem hart',
    scaleTitle: 'Kalkablagerungsrate',
    scaleUnitMetric: 'mm/Jahr',
    scaleUnitImperial: 'in/Jahr',
    saltTitle: 'Jährliche Salzprognose',
    saltAnnual: 'Jährlicher Salzverbrauch',
    saltBags: 'Säcke pro Jahr',
    saltDaysPerBag: 'Tage pro Sack',
    saltWeeksPerBag: 'Wochen pro Sack',
    applianceTitle: 'Gerätelebensdauer',
    applianceWasher: 'Waschmaschine',
    applianceHeater: 'Warmwasserbereiter',
    applianceCoffee: 'Kaffeemaschine',
    applianceBaseline: 'Mit Enthärter',
    applianceWithHardness: 'Mit hartem Wasser',
    applianceSaved: 'Jahre',
    badgeSaved: 'Verlängert um',
    labelUnitSystem: 'Einheiten',
    btnMetric: 'Metrisch',
    btnImperial: 'Imperial',
  },
};
