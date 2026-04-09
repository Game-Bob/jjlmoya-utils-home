import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'dew-point-calculator';
const title = 'Dew Point Calculator';
const description =
  'Calculate the condensation temperature on your walls using ambient humidity and temperature. An essential tool for preventing dampness and protecting the structural health of your home.';

const faqData = [
  {
    question: 'What exactly is the dew point?',
    answer:
      'It is the temperature to which the air must cool for water vapour to condense into liquid water. The higher the relative humidity, the closer the dew point is to the current temperature.',
  },
  {
    question: 'Why does mould appear in the corners of my home?',
    answer:
      'Corners are often thermal bridges where the wall is colder. If the surface temperature falls below the dew point, liquid water forms. Mould needs that constant moisture to grow.',
  },
  {
    question: 'How can I reduce humidity at home?',
    answer:
      'The most effective method is ventilation — especially after showering or cooking — and using dehumidifiers. Maintaining a constant temperature also helps the air retain more vapour without condensing.',
  },
  {
    question: 'Is condensation mould dangerous?',
    answer:
      'Yes. Mould releases spores that can cause respiratory problems, allergies and asthma. Detecting the condensation risk with this calculator is the first step towards a healthy home.',
  },
];

const howToData = [
  {
    name: 'Measure temperature and humidity',
    text: 'Use a thermometer and hygrometer to find the current values for the room.',
  },
  {
    name: 'Enter the values',
    text: 'Adjust the temperature in degrees Celsius and the humidity percentage in the calculator.',
  },
  {
    name: 'Get the critical temperature',
    text: 'The tool will tell you the exact temperature at which water will start to condense on surfaces.',
  },
  {
    name: 'Check surfaces',
    text: 'If you have a laser thermometer, measure your wall temperature. If it is equal to or below the result, you need to ventilate or insulate.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Magnus Approximation of the Dew-Point — Meteorological Applications (2011)',
      url: 'https://es.scribd.com/document/331352069/dew-point',
    },
    {
      name: 'Guide to Meteorological Instruments and Methods of Observation — WMO (2021)',
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'What is the Dew Point and Why Does It Matter at Home?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The dew point is the temperature to which air must cool for water vapour to condense into liquid water. In a home, this concept marks the boundary between a healthy house and one with structural moisture problems. When the temperature of a surface (such as a poorly insulated wall) falls below the dew point, water droplets appear — the ideal breeding ground for <em>Aspergillus</em> and other harmful fungi.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Safe Difference', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Ideal Humidity', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Extreme Danger', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'The Magnus-Tetens Formula',
          description: 'To calculate the dew point with scientific accuracy we use the Magnus-Tetens approximation, with constants b=17.625 and c=243.04°C recommended by the World Meteorological Organization for temperatures between 0°C and 50°C.',
          icon: 'mdi:calculator',
          points: ['Scientific accuracy validated by the WMO', 'Valid for residential temperature ranges'],
        },
        {
          title: 'Thermal Bridges and Mould',
          description: 'Room corners, window frames, and poorly insulated exterior walls are the coldest points. If their temperature falls below the dew point, condensation and mould are inevitable.',
          icon: 'mdi:home-thermometer',
          points: ['Corners are the most vulnerable spots', 'Thermal insulation prevents condensation'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Risk Levels',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Low Risk (difference &gt; 5°C):</strong> The air is far from saturation. Your walls are safe. <strong>Medium Risk (3–5°C):</strong> Watch corners and thermal bridges. <strong>High Risk (1–3°C):</strong> Condensation likely on glass and cold zones — ventilate immediately. <strong>Extreme Danger (&lt; 1°C):</strong> Active condensation with imminent risk of black mould growth.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The Golden Rule',
      icon: 'mdi:thermometer-alert',
      badge: 'Key Tip',
      html: '<p>If your wall temperature is within <strong>3°C of the dew point</strong>, you face an imminent condensation risk. Ventilate, use extractor fans in bathrooms and kitchens, and keep relative humidity between 40% and 60%.</p>',
    },
    {
      type: 'summary',
      title: 'How to Prevent Condensation',
      items: [
        'Ventilate daily, especially after showering or cooking.',
        'Keep relative humidity between 40% and 60%.',
        'Use extractor fans in bathrooms and kitchens to remove steam.',
        'Never dry laundry indoors without ventilation.',
        'Thermally insulate walls to prevent cold surfaces.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Ambient Temperature',
    labelHumidity: 'Relative Humidity',
    labelDewPoint: 'Dew Point',
    riskLow: 'Low Risk',
    riskMedium: 'Medium Risk',
    riskHigh: 'High Risk',
    riskExtreme: 'Extreme Danger',
    riskLowDesc: 'Difference > 5°C. Surfaces are safe.',
    riskMediumDesc: 'Difference 3–5°C. Watch the corners.',
    riskHighDesc: 'Difference 1–3°C. Ventilate immediately.',
    riskExtremeDesc: 'Difference < 1°C. Active condensation.',
  },
};
