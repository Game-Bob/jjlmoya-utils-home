import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vampire-draw-simulator';
const title = 'Standby Power Consumption Vampire Draw Simulator';
const description =
  'Discover how much electricity your devices waste in standby mode. Calculate the hidden annual cost of phantom loads from TVs, routers, chargers and more.';

const faqData = [
  {
    question: 'What is vampire power or phantom load?',
    answer:
      'Vampire power is the electricity consumed by electronic devices when they are turned off or in standby mode. This happens because many devices remain partially active to respond to remote controls, maintain network connections or keep internal clocks running.',
  },
  {
    question: 'How much does standby power cost per year?',
    answer:
      'The average household wastes between 50 and 150 euros per year on standby power alone. A single modern TV can consume 10 to 20 watts continuously, which translates to roughly 15 to 30 euros annually depending on your electricity price.',
  },
  {
    question: 'Which devices consume the most in standby?',
    answer:
      'The biggest offenders are set top boxes, game consoles, desktop computers left in sleep mode, smart TVs and older external power adapters. Cable and satellite boxes are particularly wasteful because they rarely enter true standby.',
  },
  {
    question: 'Does unplugging devices really save money?',
    answer:
      'Yes. Unplugging devices or using advanced power strips with master outlets eliminates standby consumption entirely. For a typical home with 20 standby devices, annual savings can range from 40 to 120 euros.',
  },
  {
    question: 'Are smart power strips worth it?',
    answer:
      'Smart or advanced power strips cut power to peripheral devices when a master device is turned off. They pay for themselves within a few months if you use them with entertainment centres or computer workstations.',
  },
  {
    question: 'How can I measure standby power at home?',
    answer:
      'You can use an inexpensive plug in power meter (wattmeter) to measure exactly how many watts each device draws when off or idle. Alternatively, this simulator provides standardised estimates based on manufacturer averages and laboratory measurements.',
  },
];

const howToData = [
  {
    name: 'Walk through each room',
    text: 'Count every device that stays plugged in around the clock. Include TVs, microwaves, routers, printers, game consoles and phone chargers.',
  },
  {
    name: 'Estimate daily standby hours',
    text: 'Most devices are in standby for 20 to 24 hours per day. Enter the average for each device or use the default of 24 hours.',
  },
  {
    name: 'Set your electricity price',
    text: 'Enter the price you pay per kilowatt hour. This is printed on your electricity bill.',
  },
  {
    name: 'Read your vampire draw summary',
    text: 'The simulator shows total wasted watts, annual kilowatt hours and the hidden yearly cost. Use the category badge to see if your home is low, moderate, high or extreme.',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: 'Phantom Load: The Electricity You Pay for But Never Use',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Every socket in your home that has a plugged in cable is a potential source of <strong>phantom electricity</strong>. Even when the switch is off, the device continues to draw power. It might be just a few watts, but multiplied by 24 hours a day and 365 days a year, those watts become hundreds of kilowatt hours and real money out of your pocket.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'Of Household Bill', icon: 'mdi:flash' },
        { value: '23h', label: 'Avg Standby per Day', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'Top Device Average', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'The Devices That Never Sleep',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Modern homes contain an average of 40 electronic devices. Roughly half of them are continuously connected to the grid. While energy regulations have improved standby efficiency in recent years, the sheer number of devices has increased. A single game console in instant on mode can draw 15 watts. A TV with quick start can draw 12 watts. Add routers, modems, smart speakers, microwaves with clocks, printers and chargers, and the total quickly exceeds 100 watts of permanent background consumption.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Low Impact Homes',
          description: 'Households that actively manage standby power through smart strips and unplugging habits.',
          icon: 'mdi:leaf',
          points: ['Below 50 watts total standby', 'Annual cost under 50 euros', 'Uses advanced power strips'],
        },
        {
          title: 'High Impact Homes',
          description: 'Typical households with entertainment centres, multiple game consoles and always on computers.',
          icon: 'mdi:lightning-bolt',
          points: ['Over 150 watts total standby', 'Annual cost exceeds 150 euros', 'Many devices in quick start mode'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Savings Checklist',
      icon: 'mdi:check-circle',
      badge: 'Action',
      html: '<p style="margin:0">Unplug phone chargers when not in use. Use a master controlled power strip for your entertainment centre. Disable quick start or instant on modes on TVs and consoles. Turn off desktop computers instead of leaving them in sleep mode.</p>',
    },
    {
      type: 'title',
      text: 'Why Watts Add Up Faster Than You Think',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A watt is a rate of energy use. One watt running for one hour is one watt hour. A device drawing 10 watts continuously uses 87.6 kilowatt hours per year. At an average price of 0.25 euros per kilowatt hour, that single device costs over 21 euros annually. Now multiply that by every plugged in gadget in your home.',
    },
    {
      type: 'summary',
      title: 'How to Cut Your Vampire Load',
      items: [
        'Identify the biggest consumers with this simulator or a plug in meter.',
        'Group devices on smart power strips that cut standby when the main device is off.',
        'Disable always on, quick start and network standby features where possible.',
        'Unplug chargers and small appliances that are not in daily use.',
        'Consider replacing very old external power adapters with modern efficient models.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Phantom Load Audit',
    labelDevices: 'Connected standby devices',
    labelHours: 'Standby hours per day',
    unitHours: 'h',
    labelPrice: 'Electricity price',
    unitPrice: '/kWh',
    resultBadge: 'Vampire draw result',
    labelAnnualKwh: 'Wasted per year',
    labelAnnualCost: 'Hidden annual cost',
    labelMonthlyCost: 'Monthly equivalent',
    labelDevicesCount: 'Devices counted',
    labelTotalWatts: 'Total standby watts',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Currency',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Low draw',
    categoryModerate: 'Moderate draw',
    categoryHigh: 'High draw',
    categoryExtreme: 'Extreme draw',
    addDevice: 'Add device',
    removeDevice: 'Remove',
  },
};
