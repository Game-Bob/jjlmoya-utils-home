import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'electricity-tariff-comparator';
const title = 'Electricity Tariff Comparator: Fixed vs Variable Price';
const description =
  'Find out which electricity tariff suits you best. Compare the regulated market (PVPC) vs the free market based on your consumption and save hundreds of euros on your electricity bill.';

const faqData = [
  {
    question: 'What is better nowadays, the free market or the regulated market?',
    answer:
      'Historically, the regulated market (PVPC) has been cheaper, but it is volatile. The free market offers stability with fixed prices. Our calculator helps you decide based on how much electricity you use per year.',
  },
  {
    question: 'Can I go back to the regulated market if I switch to the free market?',
    answer:
      'Yes, you can return to the regulated market (PVPC) at any time as long as your contracted power is less than 10 kW. You just need to contact a reference electricity supplier.',
  },
  {
    question: 'How do I know how much power I have contracted?',
    answer:
      'You can find this information on your electricity bill, usually identified as "Power term" or "Contracted power", expressed in kW. The standard is usually between 3.3 kW and 5.5 kW.',
  },
  {
    question: 'What happens if I exceed my contracted power?',
    answer:
      'If you have a digital meter, the ICP will temporarily cut the power. You will need to disconnect an appliance and reset the electrical panel.',
  },
];

const howToData = [
  {
    name: 'Check your bill',
    text: 'Look for the annual consumption in kWh and contracted power in kW on your latest electricity bill.',
  },
  {
    name: 'Adjust the values',
    text: 'Move the sliders to match your real consumption and power data.',
  },
  {
    name: 'Compare results',
    text: 'Observe the difference in estimated annual cost between the regulated market and the free market.',
  },
  {
    name: 'Make a decision',
    text: 'Choose the option that gives you the most savings or the one that offers you more peace of mind.',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
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
      text: 'Electricity Tariff Comparator: Free Market vs Regulated',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Understanding the electricity bill in Spain has become a real challenge. With the volatility of energy prices, the choice between the <strong>Regulated Market (PVPC)</strong> and the <strong>Free Market</strong> can make a difference of hundreds of euros per year. Our tool uses updated power and energy cost data to help you decide.',
    },
    {
      type: 'stats',
      items: [
        { value: 'PVPC', label: 'Dynamic hourly price', icon: 'mdi:clock-fast' },
        { value: 'Free', label: 'Fixed annual price', icon: 'mdi:shield-check' },
        { value: '≈150€', label: 'Typical annual difference', icon: 'mdi:currency-eur' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'PVPC — Regulated Market',
          description: 'The energy price changes every hour according to the wholesale market. On days with high renewable generation, it can drop to very low levels.',
          icon: 'mdi:lightning-bolt',
          points: ['No lock-in, free to switch', 'Access to Social Bonus for vulnerable consumers', 'Peak/Off-peak/Valley time-of-use pricing'],
        },
        {
          title: 'Free Market — Fixed Price',
          description: 'Energy suppliers set a price per kWh that remains stable throughout the year, regardless of the wholesale market.',
          icon: 'mdi:tag-outline',
          points: ['Stability and predictability', 'No surprises on the bill', 'May include additional services'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'The Three Time-of-Use Periods',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Peak (most expensive):</strong> Mon–Fri 10:00–14:00 and 18:00–22:00. <strong>Standard (mid-price):</strong> Mon–Fri 08:00–10:00, 14:00–18:00 and 22:00–00:00. <strong>Off-peak (cheapest):</strong> Mon–Fri 00:00–08:00 and all day on Saturdays, Sundays and public holidays. Scheduling washing machines, dishwashers and electric car charging during off-peak hours is the key to extreme savings.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The Discount Trap',
      icon: 'mdi:alert',
      badge: 'Warning',
      html: '<p>Many free market offers promise a "20% discount". Make sure to ask <strong>on what base price</strong> that discount applies. Sometimes the base price is so inflated that, even with the discount, it ends up being more expensive than a standard tariff.</p>',
    },
    {
      type: 'summary',
      title: 'Key Factors to Decide',
      items: [
        'If your consumption is high and mostly during off-peak hours, PVPC is usually more advantageous.',
        'If you value stability and do not want to watch the clock, choose a fixed price.',
        'With solar panels, PVPC allows you to offset surplus at the hourly market price.',
        'Reducing contracted power is often the fastest way to lower your bill.',
        'PVPC has no lock-in: you can switch back at any time.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Annual Consumption',
    unitKwhYear: 'kWh/year',
    labelPower: 'Contracted Power',
    unitKw: 'kW',
    labelMarket: 'Regulated Market (PVPC)',
    labelFree: 'Free Market (Fixed Price)',
    labelAnnualEst: 'Annual estimate',
    labelPowerTerm: 'Power (Fixed)',
    labelEnergyTerm: 'Energy (Variable)',
    labelDashboard: 'Energy Dashboard',
    labelMaxPower: 'Peak Meter',
    labelMaxPowerEst: 'Peak estimate',
    labelCo2: 'CO₂ Footprint',
    labelCo2Est: 'Annual estimate',
    labelSimulator: 'Scenario Simulator',
    labelSolar: 'Solar Self-Consumption',
    labelSolarDesc: 'Simulate savings with solar panels (30% consumption reduction)',
    labelShift: 'Off-Peak Shift',
    labelShiftDesc: 'Consumption moved to cheap hours:',
    badgeBetter: 'Cheapest option',
    badgeWorseYear: 'year',
    currencySign: '$',
    monthLabels: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
  },
};
