import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'solar-panel-calculator';
const title = 'Solar Panel Tilt Angle Calculator';
const description =
  'Calculate the optimal tilt angle for your solar panels based on your geographic latitude. Get values for fixed installations and seasonal adjustments.';

const faqData = [
  {
    question: "What if my roof doesn't have the perfect tilt?",
    answer:
      "It's not a major problem. Losses from small deviations (5-10°) are less than 3% of annual production. Avoiding partial shading is far more important than achieving the exact angle.",
  },
  {
    question: 'Is the optimal angle the same everywhere in the world?',
    answer:
      'No. It depends directly on your latitude. A user in Madrid (~40°N) has a different optimal angle than someone in Norway (~60°N) or Argentina (~34°S).',
  },
  {
    question: 'Which direction should my panels face?',
    answer:
      'In the Northern Hemisphere, always face South (azimuth 180°). In the Southern Hemisphere, face North. An East-West orientation can cause losses of 15-20% compared to the optimum.',
  },
  {
    question: 'Does this also work for solar water heaters?',
    answer:
      'Yes. The tilt formulas are identical for thermal collectors and photovoltaic panels, since both depend on the same geometric principle.',
  },
];

const howToData = [
  {
    name: 'Enter your latitude',
    text: 'Type your latitude in decimal degrees, or use the geolocation button to detect it automatically.',
  },
  {
    name: 'Read the optimal angle',
    text: 'The optimal annual angle is the main value for fixed installations. Use it as a reference when briefing your installer.',
  },
  {
    name: 'Adjust by season (optional)',
    text: 'If your mounting allows it, use the winter and summer angles to maximise production in each season.',
  },
  {
    name: 'Verify orientation',
    text: 'Check the hemisphere indicator: your panels should face South if you are in the Northern Hemisphere, and North if in the Southern Hemisphere.',
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
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
      text: 'The Science of Solar Tilt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The difference between a zero-euro electricity bill and an underperforming investment lies, literally, in the angles. <strong>Solar radiation</strong> is not uniform — it is a dynamic flow that changes with the hour, the day, and the season. Understanding celestial geometry is the first step to turning your roof into a high-performance power plant.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Lat × 0.87', label: 'General Formula', icon: 'mdi:angle-acute' },
        { value: 'Lat × 0.76 + 3.1', label: 'Latitudes 25°–50°', icon: 'mdi:map-marker' },
        { value: '± 15°', label: 'Seasonal Adjustment', icon: 'mdi:calendar-sync' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'The Perpendicularity Principle',
          description: 'A solar panel works like a net catching photons. It is most effective when facing the flow directly, at 90° to the solar rays. Any deviation reduces the effective capture area.',
          icon: 'mdi:solar-panel',
          points: ['Maximises the effective capture surface', 'The basis of all tilt calculations'],
        },
        {
          title: 'Why Latitude Matters',
          description: 'Your location on the globe dictates the maximum height of the sun. The further from the equator, the lower the sun travels and the more vertical the panel needs to be to intercept it.',
          icon: 'mdi:earth',
          points: ['Higher latitude means greater tilt needed', 'Near the equator, panels are nearly flat'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Seasonal Strategies',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Summer:</strong> The sun reaches its zenith. Panels should be nearly flat — subtract ~15° from your latitude. Take advantage of long days and intense direct radiation. <strong>Winter:</strong> The sun travels low near the horizon. Tilt panels steeper by adding ~15° to your latitude. A steeper angle also helps snow slide off without blocking the cells.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Fixed Installation or Seasonal Adjustment?',
      icon: 'mdi:wrench',
      badge: 'Pro Tip',
      html: '<p><strong>Fixed (standard):</strong> Set to the optimal annual angle. Less maintenance and better wind resistance, with only a 5-10% loss compared to solar tracking. <strong>Seasonal adjustment (pro):</strong> Change the angle 2-4 times a year to gain up to +15% performance during winter months.</p>',
    },
    {
      type: 'summary',
      title: 'Keys to an Efficient Installation',
      items: [
        'The optimal annual angle is your main reference for fixed installations.',
        'Losses from deviations of ±5° are less than 3% of annual production.',
        'Prioritise avoiding partial shade over finding the exact angle.',
        'In the Northern Hemisphere, always orient panels to face South.',
        'Seasonal adjustment 2-4 times a year can improve winter performance by up to +15%.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Geographic Latitude',
    btnLocate: 'Detect my location',
    labelOptimal: 'Optimal Annual Angle',
    labelEfficiency: 'Maximum Efficiency',
    labelWinter: 'Winter',
    labelSummer: 'Summer',
    hemisphereNorth: 'Northern Hemisphere — Face SOUTH',
    hemisphereSouth: 'Southern Hemisphere — Face NORTH',
    geoNotAvailable: 'Geolocation is not available in this browser.',
  },
};
