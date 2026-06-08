import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'humidity-calculator';
const title = 'Home Humidity and Dehumidifier Run Time Estimator';
const description =
  'Calculate how much water your dehumidifier must extract to bring a damp room to a healthy humidity level. See estimated run time, mold risk warnings and comfort zone visuals in one interactive tool.';

const faqData = [
  {
    question: 'How long should a dehumidifier run per day?',
    answer:
      'In a moderately damp room, a standard domestic dehumidifier typically needs to run between 8 and 12 hours per day to maintain 50 percent relative humidity. In very humid conditions or after water damage, continuous operation for 24 to 48 hours may be necessary to reach baseline dryness.',
  },
  {
    question: 'What indoor humidity level prevents mold?',
    answer:
      'Mold growth is inhibited when indoor relative humidity is kept below 60 percent. The ideal comfort zone for human health and building preservation is between 40 and 50 percent relative humidity. Levels above 70 percent create a high risk environment for mold spores to germinate within 24 to 48 hours.',
  },
  {
    question: 'How much water can air hold?',
    answer:
      'The amount of water vapor air can hold depends on temperature. At 20 degrees Celsius, saturated air contains about 17 grams of water per cubic metre. At 25 degrees Celsius this rises to roughly 23 grams per cubic metre. A 30 square metre room at 25 degrees Celsius and 70 percent humidity holds approximately 8 litres of invisible water in the air.',
  },
  {
    question: 'Does temperature affect dehumidifier efficiency?',
    answer:
      'Yes. Compressor based dehumidifiers work best above 18 degrees Celsius. Below 15 degrees Celsius their performance drops because evaporator coils may frost over. Desiccant dehumidifiers are better suited for cold spaces such as garages or basements because they use a chemical drying process instead of condensation.',
  },
  {
    question: 'What size dehumidifier do I need?',
    answer:
      'For a moderately damp room up to 50 square metres, a 10 to 12 litre per day unit is usually sufficient. For very damp rooms or spaces above 50 square metres, choose a 20 litre per day model. After flooding or severe damp, a 30 litre per day industrial unit will restore conditions faster.',
  },
  {
    question: 'Can a dehumidifier dry laundry?',
    answer:
      'Yes. A dehumidifier with a laundry mode can dry clothes indoors efficiently while extracting moisture from the surrounding air. It uses less energy than a tumble dryer and prevents condensation on windows and walls. Expect drying times similar to outdoor line drying in warm weather.',
  },
];

const howToData = [
  {
    name: 'Enter room size',
    text: 'Type the floor area of the room in square metres. The calculator assumes a standard ceiling height of 2.5 metres to estimate total air volume.',
  },
  {
    name: 'Set temperature',
    text: 'Input the current room temperature in degrees Celsius. Warmer air holds more moisture, so temperature directly affects how much water must be removed.',
  },
  {
    name: 'Select current humidity',
    text: 'Use the comfort dial or the numeric input to set the current relative humidity percentage. Values above 60 percent are highlighted in warning tones.',
  },
  {
    name: 'Choose target humidity',
    text: 'Set your desired relative humidity. 50 percent is recommended for comfort and mold prevention. 40 percent is ideal for allergy sufferers.',
  },
  {
    name: 'Input dehumidifier capacity',
    text: 'Enter the extraction rate of your machine in litres per day. This is usually printed on the front label or user manual.',
  },
  {
    name: 'Review results',
    text: 'Read the water extraction tank simulation, the run time estimate and the mold risk banner to decide how long to run your appliance.',
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
      text: 'The Hidden Water in Your Walls',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most homeowners never realise that damp air is not just uncomfortable, it is expensive and dangerous. A single damp room can hold several litres of invisible water vapor. Over time this moisture condenses on cold surfaces, feeds mold colonies and degrades plaster, paint and timber. Understanding exactly how much water must be removed and how long it takes is the first step to protecting your home and your health.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Ideal Indoor Humidity', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Avg Daily Run Time', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Mold Risk Threshold', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Why Relative Humidity Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relative humidity is not the amount of water in the air, it is the percentage of water the air is holding relative to the maximum it could hold at that temperature. Warm air is like a bigger sponge. At 30 degrees Celsius, air can hold nearly twice as much moisture as at 15 degrees Celsius. This is why a room can feel clammy even after you have opened the windows. The moisture is still there, just less visible.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'High Humidity',
          description: 'Above 60 percent relative humidity. Risk of mold, dust mites and condensation damage.',
          icon: 'mdi:alert',
          points: ['Condensation on windows and walls', 'Musty odors and microbial growth', 'Increased respiratory irritation', 'Higher heating bills due to thermal conductivity of damp air'],
        },
        {
          title: 'Optimal Humidity',
          description: 'Between 40 and 50 percent relative humidity. Comfortable, healthy and energy efficient.',
          icon: 'mdi:check-circle',
          points: ['No condensation on cold surfaces', 'Mold spores remain dormant', 'Skin and respiratory comfort', 'Furniture and timber preservation'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Dampness Audit',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Check windows for condensation every morning. If droplets appear regularly, your humidity is too high. Run a dehumidifier for 12 hours daily until the condensation stops. Move the unit to the dampest room, usually the kitchen, bathroom or basement. Empty the tank daily and clean the filter every two weeks.</p>',
    },
    {
      type: 'title',
      text: 'Sizing Your Dehumidifier Correctly',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A common mistake is buying a dehumidifier that is too small for the space. A 10 litre per day machine in a 60 square metre damp basement will run continuously without ever reaching the target humidity. Use this calculator to see the exact extraction volume your room requires. If the run time estimate exceeds 20 hours per day, you need a larger capacity unit or better ventilation.',
    },
    {
      type: 'summary',
      title: 'How to Keep Your Home Dry',
      items: [
        'Use this calculator to determine the exact water extraction needed for any room.',
        'Maintain indoor relative humidity between 40 and 50 percent for health and comfort.',
        'Run the dehumidifier until the mold risk banner turns green.',
        'Empty the water tank before it fills to prevent automatic shutoff.',
        'Clean filters regularly to keep airflow and extraction rates at maximum.',
        'Improve room ventilation alongside dehumidification for faster results.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Room Size',
    unitM2: 'm2',
    labelTemperature: 'Temperature',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Current Humidity',
    labelTargetHumidity: 'Target Humidity',
    labelCapacity: 'Dehumidifier Capacity',
    unitLitersDay: 'L/day',
    comfortDialTitle: 'Comfort Zone',
    comfortCurrent: 'Current',
    comfortTarget: 'Target',
    tankTitle: 'Water in the Air',
    tankLiters: 'liters',
    runtimeTitle: 'Estimated Run Time',
    runtimeUnitH: 'h',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Mold Risk',
    moldRiskHigh: 'High Risk',
    moldRiskMedium: 'Moderate Risk',
    moldRiskLow: 'Low Risk',
    extractionLabel: 'to extract',
    tipEnergy: 'Running your dehumidifier during off peak hours can reduce electricity costs significantly.',
    tipMold: 'Keeping humidity below 50 percent prevents mold spores from germinating on surfaces.',
    unitPercent: '%',
    badgeHigh: 'High',
    badgeMedium: 'Medium',
    badgeLow: 'Low',
  },
};
