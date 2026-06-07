import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'appliance-cost-calculator';
const title = 'Home Appliance Water and Energy Cycle Cost Calculator';
const description =
  'Calculate the true cost per load of your washing machine, dishwasher and tumble dryer. See exactly how much electricity, water and detergent each cycle costs and discover how much you can save by switching to Eco mode.';

const faqData = [
  {
    question: 'How much does a washing machine cycle cost?',
    answer:
      'A typical Eco 40C cycle uses around 0.45 kWh of electricity and 40 litres of water. At average European prices this costs roughly 0.10 to 0.15 euros per load. An intensive 60C cycle can use over 1.2 kWh and 70 litres, pushing the cost above 0.30 euros per load.',
  },
  {
    question: 'Is it cheaper to run the dishwasher at night?',
    answer:
      'If your electricity provider uses time-of-use tariffs, running the dishwasher during off peak hours can reduce the energy cost by 30 percent or more. Peak hours are typically weekday mornings and evenings. Check your contract or smart meter data to confirm your exact off peak window.',
  },
  {
    question: 'Does the dryer use a lot of electricity?',
    answer:
      'Yes. A tumble dryer is one of the most energy intensive domestic appliances. A single full load can consume 2.5 to 3.5 kWh, costing 0.50 to 0.80 euros per cycle. Using a heat pump dryer or line drying clothes outdoors can cut this cost by 60 to 80 percent.',
  },
  {
    question: 'How much water does a dishwasher use?',
    answer:
      'Modern dishwashers are surprisingly efficient. A standard Eco cycle uses only 8 to 12 litres of water per load, while an intensive program may use 14 to 16 litres. This is far less than washing the same dishes by hand under a running tap, which typically consumes 40 to 60 litres.',
  },
  {
    question: 'What is the cheapest time to use appliances?',
    answer:
      'Under time-of-use tariffs, the cheapest periods are usually late at night, very early morning and during weekends. These off peak slots can be 30 to 50 percent cheaper than weekday peak hours. Some providers also offer free hours on weekends.',
  },
  {
    question: 'Does switching to Eco mode really save money?',
    answer:
      'Absolutely. Eco modes use lower temperatures, shorter heating phases and less water. Over a full year, switching from Normal to Eco on your washing machine and dishwasher can save 50 to 100 euros in electricity and water combined, depending on usage frequency and local prices.',
  },
];

const howToData = [
  {
    name: 'Select your appliance',
    text: 'Tap the washing machine, dishwasher or tumble dryer icon at the top of the calculator. Each appliance has different energy and water consumption profiles.',
  },
  {
    name: 'Choose a cycle type',
    text: 'Use the Eco, Normal or Intensive slider to set the washing program. Eco uses less energy and water. Intensive uses the most.',
  },
  {
    name: 'Enter your local prices',
    text: 'Type your electricity price per kWh and your water price per litre. You can find these on your utility bill or provider website.',
  },
  {
    name: 'Set usage frequency',
    text: 'Enter how many cycles you run per week. This allows the calculator to estimate your annual cost and potential yearly savings.',
  },
  {
    name: 'Pick the hour of use',
    text: 'Select the hour when you plan to run the appliance. Peak hours are highlighted in red. Off peak hours are green and cheaper if you have a time-of-use tariff.',
  },
  {
    name: 'Toggle detergent costs',
    text: 'Enable the detergent toggle if you want the receipt to include an estimate for powder, liquid or capsules per cycle.',
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
      text: 'The Hidden Cost of Every Load',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most people have no idea how much a single washing machine cycle actually costs. They see a quarterly electricity bill and assume appliances are cheap to run. The reality is that a family doing five loads of laundry per week can spend over 200 euros per year just on washing. Add the dishwasher three times a week and a tumble dryer twice a week and the total climbs above 500 euros annually. This calculator breaks down every cent so you can optimise your habits.',
    },
    {
      type: 'stats',
      items: [
        { value: '0.45', label: 'kWh Eco Wash', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Water Eco Wash', icon: 'mdi:water' },
        { value: '30%', label: 'Peak Surcharge', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Why Small Changes Multiply',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A single degree of temperature or a few litres of water seems trivial for one cycle. But over 250 cycles per year, those small differences compound into serious money. Dropping from 60C to 40C reduces energy use by roughly 40 percent per load. Switching from Normal to Eco on a dishwasher saves about 3 litres of water and 0.3 kWh every single time. These are not marginal gains. They are the fastest way to shrink your utility bill without buying new appliances.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Intensive Cycle',
          description: 'Maximum heat and water for heavily soiled loads.',
          icon: 'mdi:alert',
          points: ['1.2 to 3.5 kWh per load', '70 litres for washers', 'Peak hour surcharge applies', 'Highest annual cost'],
        },
        {
          title: 'Eco Cycle',
          description: 'Lower temperature, optimised duration, minimal water.',
          icon: 'mdi:check-circle',
          points: ['0.45 to 1.5 kWh per load', '8 to 40 litres only', 'Off peak timing possible', 'Lowest annual cost'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Appliance Audit',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Run your washing machine only with a full load. Use the Eco program for normal soiling. Set your dishwasher to delay start until after 22:00 if you have a time-of-use tariff. Clean the dryer lint filter after every cycle to maintain efficiency. Air dry clothes outdoors or on a rack whenever weather permits.</p>',
    },
    {
      type: 'title',
      text: 'Time of Use and Peak Pricing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Many electricity providers now charge different rates depending on the hour of day. Peak periods, usually weekday mornings and evenings, can cost 30 to 50 percent more than off peak periods. A single load run at 20:00 might cost 0.18 euros while the same load at 02:00 costs only 0.12 euros. Over a year, timing your appliances correctly can save 50 to 100 euros without changing anything else. This calculator highlights peak hours in red and off peak hours in green so you can plan ahead.',
    },
    {
      type: 'summary',
      title: 'How to Cut Appliance Costs',
      items: [
        'Use this calculator to find the true cost per cycle for your appliances.',
        'Switch to Eco mode whenever possible to save up to 40 percent energy.',
        'Run full loads instead of partial loads to maximise efficiency.',
        'Delay cycles to off peak hours if your tariff supports time-of-use pricing.',
        'Air dry clothes instead of using the tumble dryer to eliminate its cost entirely.',
        'Clean filters and descale regularly to keep appliances running at rated efficiency.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Appliance',
    applianceWasher: 'Washer',
    applianceDishwasher: 'Dishwasher',
    applianceDryer: 'Dryer',
    labelCycle: 'Program',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensive',
    labelElectricityPrice: 'Electricity Price',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Water Price',
    unitPriceLiter: '€/L',
    labelDetergent: 'Detergent',
    labelDetergentToggle: 'Include detergent cost',
    labelHour: 'Planned Hour',
    peakBadge: 'Peak rate active',
    offPeakBadge: 'Off peak rate',
    receiptTitle: 'Cost Breakdown',
    receiptElectricity: 'Electricity',
    receiptWater: 'Water',
    receiptDetergent: 'Detergent',
    receiptTotal: 'Total per cycle',
    receiptPerYear: 'Estimated per year',
    comparisonTitle: 'Smart Switch',
    comparisonText: 'Switching from Normal to Eco saves money on every load.',
    comparisonSavings: 'Annual savings',
    comparisonMonths: 'months of detergent',
    badgePeak: 'Peak',
    badgeOffPeak: 'Off Peak',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'year',
    labelCyclesPerWeek: 'Cycles per week',
    currencySign: '€',
    labelCurrency: 'Currency',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
