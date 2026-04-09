import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'led-saving-calculator';
const title = 'LED Saving Calculator';
const description =
  'Calculate how much money and kWh you save by switching your traditional bulbs to LED. Discover your exact annual and monthly savings plus CO2 reduction.';

const faqData = [
  {
    question: 'How much does an LED bulb really save?',
    answer:
      'An LED bulb saves between 80% and 90% of energy compared to an incandescent. For example, switching from 60W to 9W reduces energy use for that fixture to almost nothing while maintaining the same brightness.',
  },
  {
    question: 'How quickly does the LED switch pay for itself?',
    answer:
      'Given the low current cost of LEDs and their significant savings, the investment typically pays back in less than 4 months of normal use. The more hours the lights are on, the faster the payback.',
  },
  {
    question: 'What if I install a higher-wattage LED?',
    answer:
      'LEDs generate very little heat, so you can install bulbs with higher lumens in fixtures that were previously limited by the heat from incandescents, as long as you respect the electrical limits of the socket.',
  },
  {
    question: 'Do LEDs really last as long as the box says?',
    answer:
      'A quality LED lasts between 15,000 and 50,000 hours. At average home use of 4 hours per day, that means a bulb can last over 15 years without burning out.',
  },
  {
    question: 'Can I use LEDs with a dimmer switch?',
    answer:
      'Only if the bulb clearly states it is dimmable. Standard LEDs do not work well with older dimmer switches and may flicker or buzz.',
  },
  {
    question: 'Do I need to replace the whole fixture?',
    answer:
      'In 99% of cases, no. You simply replace the bulb with an LED using the same base (E27, E14, GU10, etc.). Only in some modern integrated LED panels is the light source fixed.',
  },
  {
    question: 'Will my 12V halogen transformers still work?',
    answer:
      'For MR16 spotlights, older transformers sometimes cannot detect the very low load of LEDs and cause flickering. The safest option is to replace the transformer with one designed for LEDs, or switch to a GU10 socket.',
  },
];

const howToData = [
  {
    name: 'Count your light fixtures',
    text: 'Check how many incandescent or halogen bulbs you have at home and note their wattage.',
  },
  {
    name: 'Select the equivalent LED',
    text: 'Choose your current bulb type in the calculator. The equivalent LED wattage is assigned automatically.',
  },
  {
    name: 'Set your daily usage',
    text: 'Indicate how many hours per day the lights are switched on on average.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Energy Efficient Lighting Guide — IDAE (Spain)',
      url: 'https://www.idae.es/publicaciones/guia-tecnica-de-eficiencia-energetica-en-iluminacion-oficinas',
    },
    {
      name: 'Energy Labelling of Lamps — European Union',
      url: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2019-81875',
    },
    {
      name: 'Electricity Consumption Calculator — OCU',
      url: 'https://www.ocu.org/vivienda-y-energia/gas-luz/calculadora/consumo-stand-by',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'LED Savings Guide: How to Cut Your Electricity Bill',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Switching from traditional lighting to <strong>LED (Light Emitting Diode)</strong> technology is one of the home investments with the fastest and most visible return. Every watt we remove from our base consumption translates directly into savings at the end of the month. A 9W LED bulb delivers the same brightness as a 60W incandescent at <strong>85% less energy consumption</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Energy Saving', icon: 'mdi:lightning-bolt' },
        { value: '25,000h', label: 'LED Lifespan', icon: 'mdi:clock-outline' },
        { value: '< 4 months', label: 'Payback Period', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Incandescent Lighting',
          description: '20th-century technology based on heating a tungsten filament. 95% of energy is wasted as heat.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% of energy wasted as heat', 'Lifespan: 1,000 hours', 'Very high running cost'],
        },
        {
          title: 'Modern LED Technology',
          description: "Today's energy efficiency standard for the home. Instant full brightness from the very first second.",
          icon: 'mdi:led-outline',
          points: ['85–90% direct saving', 'Lifespan: 25,000–50,000 hours', 'Minimal heat emission'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'The Physics Behind the Savings',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'An incandescent bulb works by heating a tungsten filament. <strong>95% of the energy</strong> is wasted as heat and only 5% becomes visible light. LEDs, on the other hand, convert electricity directly into light through semiconductors with vastly superior efficiency. <strong>Look at lumens, not watts:</strong> an old 60W bulb produces around 800 lm; today you can get those same 800 lm from a LED using just 8–9W.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Equivalence Reference',
      icon: 'mdi:table',
      badge: 'Reference',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W incandescent</strong> → LED 5–6W (450 lm)</li><li><strong>60W incandescent</strong> → LED 8–10W (800 lm)</li><li><strong>100W incandescent</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halogen (spotlight)</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'LED Benefits Beyond Money',
      items: [
        'Extreme lifespan: a quality LED can last over 15 years at 4h/day.',
        'Instant full brightness with no warm-up time or flickering.',
        'No heat emission: reduces air-conditioning load in summer.',
        'No mercury or toxic gases, easier to recycle than fluorescent tubes.',
        'Compatible with most existing sockets (E27, E14, GU10).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Home Configuration',
    labelBulbs: 'How many bulbs do you want to replace?',
    unitBulbs: 'units',
    labelType: 'What bulbs do you currently have?',
    labelHours: 'How many hours a day are they on?',
    labelPrice: 'Electricity price',
    unitPrice: '€/kWh',
    resultBadge: 'Real saving calculation',
    labelAnnual: 'You will save per year',
    labelMonthly: 'Monthly',
    labelEfficiency: 'Efficiency',
    labelCo2: 'CO₂ footprint reduction',
    unitLess: '% less',
    currencySign: '$',
    btnInc60Title: 'Incandescent',
    btnInc60Sub: 'Classic (60W)',
    btnInc40Title: 'Incandescent',
    btnInc40Sub: 'Small (40W)',
    btnInc100Title: 'Incandescent',
    btnInc100Sub: 'Large (100W)',
    btnHalo50Title: 'Halogen',
    btnHalo50Sub: 'Spotlight (50W)',
    usageNever: 'Almost never',
    usageLow: 'Light use',
    usageNormal: 'Normal use',
    usageModerate: 'Moderate use',
    usageHeavy: 'Heavy use',
    usagePro: 'Professional use',
    usageVeryHeavy: 'Very heavy use',
    usageAlways: 'Always on',
  },
};
