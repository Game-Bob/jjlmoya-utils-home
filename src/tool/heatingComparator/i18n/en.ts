import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'heating-consumption-comparator';
const title = 'Gas vs. Heat Pump vs. AC: Savings & Consumption Comparator';
const description =
  'Calculate how much you save by switching your gas boiler for an air source heat pump or AC. Real consumption and efficiency comparison for your home.';

const faqData = [
  {
    question: 'Is a heat pump cheaper than natural gas?',
    answer:
      'At a monthly operational level, heat pumps are significantly cheaper than natural gas. Thanks to their 400% efficiency (COP of 4), the cost per kWh of heat delivered is usually 30% to 50% lower than with gas, despite higher electricity prices.',
  },
  {
    question: 'What is the difference between air source heat pump and regular AC?',
    answer:
      'Technically both are heat pumps. The main difference is the medium they deliver heat to: air source heat pumps are usually "air-to-water", while conventional heat pumps are "air-to-air".',
  },
  {
    question: 'Can I install a heat pump in a flat with old radiators?',
    answer:
      'Yes, it is possible to install heat pumps with conventional radiators using "high temperature" equipment. However, for maximum savings, underfloor heating or low-temperature radiators are ideal.',
  },
  {
    question: 'How long does it take to pay off a heat pump system?',
    answer:
      'Depending on home consumption and available subsidies, the payback period is usually between 5 and 8 years. If combined with solar panels, this period can be drastically reduced.',
  },
];

const howToData = [
  {
    name: 'House Surface',
    text: 'Enter the usable square meters of your home to estimate the annual thermal demand.',
  },
  {
    name: 'Energy Prices',
    text: 'Adjust Gas and Electricity prices according to your real bill for higher accuracy.',
  },
  {
    name: 'View Results',
    text: 'Compare the three systems side by side and discover the winner in efficiency and annual cost.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'IEA: The Future of Heat Pumps',
      url: 'https://www.iea.org/reports/the-future-of-heat-pumps',
    },
    {
      name: 'Energy Saving Trust: Air Source Heat Pumps',
      url: 'https://energysavingtrust.org.uk/advice/air-source-heat-pumps/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Keys to Choosing Your Heating',
      items: [
        '<strong>Air source heat pump</strong> is up to 400% more efficient than gas.',
        '<strong>Insulation</strong> reduces your bill more than any boiler.',
        '<strong>Payback</strong> for electric systems is around 6-8 years.',
        'Combine with <strong>solar panels</strong> for nearly free heating.',
      ],
    },
    {
      type: 'title',
      text: 'Consumption Comparison: Gas vs. Air Source Heat Pump vs. AC',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Choosing the right climate system for your home is one of the most important financial and comfort decisions. In a context of volatile energy prices and growing concern for sustainability, knowing which system is most efficient—and which will save us more per month—is essential.',
    },
    {
      type: 'paragraph',
      html: 'Historically, natural gas has been the undisputed king due to its convenience and price. However, the emergence of <strong>air source heat pumps</strong> and the technological improvement of <strong>heat pumps (air-to-air)</strong> have changed the game. Our calculator helps you visualize the annual operating cost.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Heat Pump Efficiency',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'best', positive: true },
        },
        {
          label: 'Avg Annual Saving',
          value: '$450',
          icon: 'mdi:piggy-bank',
          trend: { value: 'estimated', positive: true },
        },
        {
          label: 'Equipment Life',
          value: '20 years',
          icon: 'mdi:calendar-check',
          trend: { value: 'standard', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. Natural Gas Boiler: The traditional standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natural gas heating uses a boiler that burns fuel to heat water, which then circulates through radiators or underfloor heating.',
    },
    {
      type: 'list',
      items: [
        '<strong>Efficiency:</strong> Modern condensing boilers have an efficiency close to 100%.',
        '<strong>Advantages:</strong> Widely installed, fast and homogeneous heat, and competitive kWh cost.',
        '<strong>Disadvantages:</strong> Dependence on fossil fuels, fixed gas fees, and CO2 emissions.',
      ],
    },
    {
      type: 'title',
      text: '2. Air Source Heat Pump: Extreme efficiency (Air-to-Water)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Air source heat pumps extract thermal energy from outside air (even at sub-zero temperatures) and transfer it inside the home to heat water.',
    },
    {
      type: 'list',
      items: [
        '<strong>Efficiency (COP):</strong> An air source heat pump system usually has an average COP of 4. This means that for every 1 kWh it eats, it gives out 4 kWh of heat.',
        '<strong>Advantages:</strong> Total sustainability with solar panels, one equipment for heating and cooling, and lower operating costs.',
        '<strong>Disadvantages:</strong> High initial investment (though pays off in 5-8 years) and need for outdoor space.',
      ],
    },
    {
      type: 'tip',
      title: 'Saving Tip',
      html: 'Air source heat pumps shine especially when combined with underfloor heating, as water only needs to heat to about 35°C.',
    },
    {
      type: 'proscons',
      title: 'Heat Pump vs Natural Gas',
      proTitle: 'Why Heat Pump?',
      conTitle: 'Why Gas?',
      items: [
        { pro: 'Unbeatable efficiency (COP 4+)', con: 'Much cheaper installation' },
        { pro: 'Fossil fuel independence', con: 'High power instant heat' },
        { pro: 'Heating and Cooling', con: 'Compatibility with old radiators' },
        { pro: 'Ideal with solar panels', con: 'No outdoor units needed' },
      ],
    },
    {
      type: 'title',
      text: '3. Air-to-Air Heat Pump (Air Conditioning Split)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Commonly known as "split" or AC with heat mode. It uses the same thermodynamic cycle as air source heat pumps but directly heats the air, not water. It is a very common solution in mild climates. Its efficiency (SCOP) is usually between 3 and 3.5.',
    },
    {
      type: 'title',
      text: 'Understanding the calculation formula',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To compare these systems fairly, we must convert all consumptions to a common unit: the cost per delivered useful kWh. Our formula is:',
    },
    {
      type: 'code',
      code: 'Annual Cost = (Home Thermal Demand / System Efficiency) × Energy Price',
      ariaLabel: 'Annual cost calculation formula',
    },
    {
      type: 'paragraph',
      html: 'Where:',
    },
    {
      type: 'list',
      items: [
        '<strong>Thermal Demand:</strong> The heat kWh your house needs per year (depends on insulation and m2).',
        '<strong>Efficiency:</strong> 0.95 for Gas, 4.0 for Heat Pump, and 3.2 for Air.',
        '<strong>Energy Price:</strong> The cost per kWh including taxes and fees.',
      ],
    },
    {
      type: 'card',
      title: 'Real Example: 100m² Home',
      icon: 'mdi:home-analytics',
      html: '<p>Imagine a house that needs 7,000 kWh of heating per year:</p><ul><li><strong>Gas ($0.08/kWh):</strong> $589/year</li><li><strong>Heat Pump ($0.18/kWh):</strong> $315/year (You save 46%)</li><li><strong>Air ($0.18/kWh):</strong> $393/year</li></ul>',
    },
    {
      type: 'title',
      text: 'When does each system pay off?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'There is no single answer, as it depends on your location and house type:',
    },
    {
      type: 'paragraph',
      html: '<strong>Single-Family Houses / New Build:</strong> Heat pump is almost mandatory for sustainability and long-term savings.',
    },
    {
      type: 'paragraph',
      html: '<strong>Small Apartments in Mild Zones:</strong> Air-to-air split is unbeatable due to low installation costs.',
    },
    {
      type: 'paragraph',
      html: '<strong>Gas Flats Renovations:</strong> If gas connection exists, switching to condensing is cheapest initially. However, full renovations should consider switching to electricity.',
    },
    {
      type: 'title',
      text: 'The impact of insulation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No heating system is efficient in a leaky house. Good insulation can halve your thermal demand, making your heating system smaller and cheaper.',
    },
    {
      type: 'title',
      text: 'Heat Pump Myths and Consumption',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'There are many doubts about these modern systems. Let\'s debunk some:',
    },
    {
      type: 'list',
      items: [
        '<strong>"Doesn\'t work in deep cold":</strong> False. Modern units work down to -20°C.',
        '<strong>"Dries the air":</strong> Only if it\'s air-to-air. Solar underfloor heating doesn\'t.',
        '<strong>"Electricity is too expensive":</strong> 400% efficiency more than compensates.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Did you know?',
      icon: 'mdi:lightbulb-on',
      badge: 'Fact',
      html: '<p>The COP (Coefficient of Performance) varies with outdoor temperature. In extreme cold, efficiency drops slightly but remains far superior to electric heaters or gas boilers.</p>',
    },
    {
      type: 'title',
      text: 'Conclusion: The future is electric',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The trend in Europe is clear: home decarbonization. Natural gas prices will likely rise due to carbon taxes. Combining solar panels with heat pumps is the perfect circle.',
    },
    {
      type: 'paragraph',
      html: 'Use our calculator to compare your current bills with what you could be paying. Sometimes the biggest "money leak" is an obsolete heating system.',
    },
  ],
  ui: {
    titleVivienda: '1. Home Data',
    helperVivienda: 'Configure your home characteristics',
    labelM2: 'Total Surface',
    helperM2: 'Square meters of your home.',
    labelAislamiento: 'Insulation Level',
    helperAislamiento: 'How well does your house retain heat?',
    optExcelent: 'Excellent (New build / Passivhaus)',
    optMedium: 'Medium (Double glazing / Standard insulation)',
    optPoor: 'Poor (Old / No wall insulation)',
    titleCoste: '2. Energy Cost',
    descCoste: 'Look for the "Energy Term Price" or "kWh Cost" in your last bill.',
    labelGasPrice: 'Gas Cost',
    helperGasPrice: 'Price for each kWh of gas consumed.',
    labelElecPrice: 'Electricity Cost',
    helperElecPrice: 'Price for each kWh of light consumed.',
    titleComparison: '3. Annual Consumption Comparison',
    descComparison: 'Estimation based on the technical performance of each equipment.',
    systemGas: 'Gas Boiler',
    systemAero: 'Air Source Heat Pump',
    systemAir: 'Heat Pump (Split)',
    labelAnnualCost: 'Heating Expense',
    labelEfficiency: 'Efficiency',
    labelSource: 'Source',
    labelEnergy: 'Energy',
    labelInstallation: 'Installation',
    valGasSource: 'Natural Gas',
    valAeroEnergy: 'Renewable + Light',
    valAirInstall: 'Air-to-Air',
    winnerBadge: 'Most Efficient',
    unitCurrency: '$',
  },
};
