import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-softener';
const title = 'Home Water Softener and Salt Consumption Optimizer';
const description =
  'Analyze your water hardness level, calculate optimal softener settings and estimate annual salt consumption. See limescale impact forecasts, salt refill timelines and appliance lifespan predictions in one interactive tool.';

const faqData = [
  {
    question: 'What is water hardness?',
    answer:
      'Water hardness is the concentration of dissolved calcium and magnesium minerals in your tap water. It is measured in grains per gallon or French degrees. Hard water causes limescale buildup in pipes, reduces heating efficiency and shortens appliance life.',
  },
  {
    question: 'How does a water softener work?',
    answer:
      'A water softener uses ion exchange resin beads to swap calcium and magnesium ions for sodium ions. When the resin becomes saturated, the system regenerates by flushing a brine solution through the tank, restoring the beads and sending the hard minerals down the drain.',
  },
  {
    question: 'How much salt does a softener use per year?',
    answer:
      'A typical household of four people with moderately hard water uses between 80 and 120 kilograms of salt per year. Very hard water or larger households can push this above 200 kilograms. Modern high efficiency softeners use about 30 percent less salt than older models.',
  },
  {
    question: 'How often should I refill the salt tank?',
    answer:
      'Most brine tanks need refilling every 4 to 8 weeks. Check the salt level monthly. If the tank is less than one third full, add a new 25 kilogram bag. Never let the salt completely run out or the resin will reharden and lose effectiveness.',
  },
  {
    question: 'Does hard water really damage appliances?',
    answer:
      'Yes. Limescale deposits on heating elements force them to work harder, increasing energy bills and causing premature failure. A water heater in a very hard water area can lose up to 45 percent of its expected lifespan. Washing machines and dishwashers also suffer from clogged valves and scaled drums.',
  },
  {
    question: 'Can I drink softened water?',
    answer:
      'Softened water is safe for most people to drink. The sodium increase is small, roughly equivalent to a slice of bread per day. However, people on strict low sodium diets may prefer a separate unsoftened tap for drinking water or choose a potassium based softener salt.',
  },
];

const howToData = [
  {
    name: 'Enter your water hardness',
    text: 'Type the hardness value from your water quality report or test strip. Choose grains per gallon or French degrees from the unit selector.',
  },
  {
    name: 'Set household size',
    text: 'Select the number of people living in your home. More occupants mean higher water consumption and faster salt depletion.',
  },
  {
    name: 'Choose softener capacity',
    text: 'Enter the grain capacity of your softener resin tank. This is usually printed on the control valve or user manual. Common values are 24,000 or 32,000 grains.',
  },
  {
    name: 'Review hardness category',
    text: 'Read the interactive hardness scale to understand whether your water is soft, moderately hard or extremely hard.',
  },
  {
    name: 'Check salt forecast',
    text: 'Look at the salt bag stack simulator to see how many 25 kilogram bags you will need per year and when the next refill is due.',
  },
  {
    name: 'Inspect appliance impact',
    text: 'Compare the baseline lifespan of your washing machine, water heater and coffee maker against their estimated life with your current untreated water.',
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
      text: 'The Invisible Cost of Hard Water',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hard water is one of the most expensive hidden problems in a home. Every time you turn on the tap, dissolved minerals flow through your pipes and appliances. Over months and years these minerals crystallise into limescale, a hard white crust that clogs heating elements, reduces flow rates and destroys rubber seals. The result is higher energy bills, shorter appliance life and frequent maintenance calls. A water softener eliminates this damage at the source.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Avg Annual Salt Use', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: 'Washer Baseline Life', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm Scale per GPG/yr', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Why Limescale Is So Destructive',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Limescale is not just a cosmetic stain on your kettle. Inside a water heater it forms an insulating layer on the heating element. For every millimetre of scale, energy transfer efficiency drops by up to 10 percent. That means a 3 millimetre coating can increase your water heating bill by nearly 30 percent. In washing machines scale blocks detergent activation, so you use more powder for worse results. In coffee makers it ruins the thermostat and produces bitter, uneven extraction.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Untreated Hard Water',
          description: 'Minerals deposit freely throughout the plumbing system and every connected appliance.',
          icon: 'mdi:alert',
          points: ['Rapid limescale buildup in heaters and boilers', 'Increased detergent and soap consumption', 'Shortened appliance lifespan by 30 to 45 percent', 'Higher energy bills due to insulation effect of scale'],
        },
        {
          title: 'Softened Water',
          description: 'Calcium and magnesium are removed at the point of entry before they reach taps and appliances.',
          icon: 'mdi:check-circle',
          points: ['Zero scale deposition on heating elements', 'Normal detergent doses produce better results', 'Appliances reach their full design lifespan', 'Lower energy consumption for water heating'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Hard Water Check',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Fill a clear bottle with tap water and add a few drops of liquid soap. Shake vigorously. If the water remains cloudy and produces very little foam, your water is hard. Crystal clear water with thick stable foam indicates soft water. For a precise measurement use a total hardness test strip or request a report from your water supplier.</p>',
    },
    {
      type: 'title',
      text: 'Sizing Your Salt Supply Correctly',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Running out of salt is the fastest way to ruin a softener. When the brine tank empties, the resin bed rehardens within days and the system stops protecting your home. Use this calculator to forecast exactly how many 25 kilogram bags you need per year. If the result is more than 10 bags, consider upgrading to a larger capacity resin tank or a high efficiency valve that uses less salt per regeneration cycle.',
    },
    {
      type: 'summary',
      title: 'How to Protect Your Home from Hard Water',
      items: [
        'Use this calculator to find your exact water hardness category and salt needs.',
        'Install a correctly sized water softener at the main supply entry point.',
        'Refill the brine tank before it drops below one third full.',
        'Use high purity evaporated salt pellets for best resin performance.',
        'Service the valve and resin bed every 3 to 5 years.',
        'Monitor appliance energy bills for sudden increases that may signal scale buildup.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Water Hardness',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Household Size',
    unitPeople: 'people',
    labelSoftenerCapacity: 'Softener Capacity',
    unitGrains: 'grains',
    hardnessSoft: 'Soft',
    hardnessSlightly: 'Slightly Hard',
    hardnessModerate: 'Moderately Hard',
    hardnessHard: 'Hard',
    hardnessVery: 'Very Hard',
    hardnessExtreme: 'Extremely Hard',
    scaleTitle: 'Limescale Buildup Rate',
    scaleUnitMetric: 'mm/yr',
    scaleUnitImperial: 'in/yr',
    saltTitle: 'Annual Salt Forecast',
    saltAnnual: 'Annual Salt',
    saltBags: 'Bags per year',
    saltDaysPerBag: 'Days per bag',
    saltWeeksPerBag: 'Weeks per bag',
    applianceTitle: 'Appliance Lifespan',
    applianceWasher: 'Washing Machine',
    applianceHeater: 'Water Heater',
    applianceCoffee: 'Coffee Maker',
    applianceBaseline: 'With softener',
    applianceWithHardness: 'With hard water',
    applianceSaved: 'yrs',
    badgeSaved: 'Extended by',
    labelUnitSystem: 'Units',
    btnMetric: 'Metric',
    btnImperial: 'Imperial',
  },
};
