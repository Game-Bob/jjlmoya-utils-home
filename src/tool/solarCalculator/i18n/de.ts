import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';

const slug = 'solar-neigung-rechner';
const title = 'Solarpanel Neigungsrechner';
const description =
  'Berechnen Sie den optimalen Neigungswinkel für Ihre Solarmodule basierend auf Ihrem Breitengrad. Für feste Installationen und saisonale Anpassungen.';

const faqData = [
  {
    question: 'Was passiert, wenn mein Dach nicht die perfekte Neigung hat?',
    answer:
      'Das ist kein großes Problem. Verluste durch Abweichungen von 5-10° liegen bei weniger als 3 % der Jahresproduktion. Es ist wichtiger, Schatten zu vermeiden, als den exakten Winkel zu jagen.',
  },
  {
    question: 'Ist der optimale Winkel überall auf der Welt gleich?',
    answer:
      'Nein. Er hängt direkt von Ihrem Breitengrad ab. In Madrid (~40°N) ist der Winkel anders als in Oslo (~60°N) oder Sydney (~34°S).',
  },
  {
    question: 'In welche Richtung sollten die Paneele zeigen?',
    answer:
      'Auf der Nordhalbkugel immer nach Süden (Azimut 180°). Auf der Südhalbkugel nach Norden. Eine Ost-West-Ausrichtung kann 15-20 % Verlust gegenüber dem Optimum bedeuten.',
  },
  {
    question: 'Funktioniert das auch für Solarthermie (Warmwasser)?',
    answer:
      'Ja. Die Formeln für die Neigung sind für thermische Kollektoren und Photovoltaik identisch, da beide auf dem gleichen geometrischen Prinzip basieren.',
  },
];

const howToData = [
  {
    name: 'Breitengrad eingeben',
    text: 'Geben Sie Ihren Breitengrad in Dezimalgrad ein oder nutzen Sie die automatische Standorterkennung.',
  },
  {
    name: 'Optimalen Winkel prüfen',
    text: 'Der optimale Ganzjahreswinkel ist der Hauptwert für feste Installationen.',
  },
  {
    name: 'Saisonal anpassen (optional)',
    text: 'Wenn Ihre Halterung verstellbar ist, nutzen Sie die Winter- und Sommerwinkel für maximale Erträge.',
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    { name: 'NREL PVWatts Rechner', url: 'https://pvwatts.nrel.gov/' },
    { name: 'PVGIS — Europäisches Solar-Tool', url: 'https://re.jrc.ec.europa.eu/pvgis/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die Wissenschaft der Solar-Neigung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Unterschied zwischen einer hohen Stromersparnis und einer suboptimalen Anlage liegt oft im Winkel. Die Sonnenstrahlung ist dynamisch und ändert sich mit der Uhrzeit und Jahreszeit.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Breite × 0,87', label: 'Faustformel', icon: 'mdi:angle-acute' },
        { value: '± 15°', label: 'Saisonaler Abgleich', icon: 'mdi:calendar-sync' },
      ],
      columns: 2,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Das Prinzip der Rechtwinkligkeit',
          description: 'Ein Solarpanel arbeitet am effektivsten, wenn die Sonnenstrahlen im 90°-Winkel auftreffen.',
          icon: 'mdi:solar-panel',
          points: ['Maximiert die Energieausbeute', 'Basis aller Neigungsberechnungen'],
        },
      ],
      columns: 1,
    },
    {
      type: 'summary',
      title: 'Tipps für eine effiziente Installation',
      items: [
        'Der Ganzjahreswinkel ist ideal für feste Montagen.',
        'Abweichungen von ±5° sind vernachlässigbar.',
        'Verschattung vermeiden ist wichtiger als der exakte Winkel.',
        'Auf der Nordhalbkugel nach Süden ausrichten.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Geographische Breite',
    btnLocate: 'Meinen Standort finden',
    labelOptimal: 'Optimaler Ganzjahreswinkel',
    labelEfficiency: 'Maximale Effizienz',
    labelWinter: 'Winter',
    labelSummer: 'Sommer',
    hemisphereNorth: 'Nordhalbkugel — Nach SÜDEN ausrichten',
    hemisphereSouth: 'Südhalbkugel — Nach NORDEN ausrichten',
    geoNotAvailable: 'Geolokalisierung wird nicht unterstützt.',
  },
};
