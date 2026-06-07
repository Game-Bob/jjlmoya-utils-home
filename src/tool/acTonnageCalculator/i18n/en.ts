import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ac-tonnage-calculator';
const title = 'AC Tonnage and Cooling Capacity Calculator';
const description =
  'Calculate the exact air conditioner size your room needs in BTUs, frigorias, and tons. Input room size, ceiling height, occupants, heat sources, and sun exposure to get a precise cooling recommendation.';

const faqData = [
  {
    question: 'How many BTUs do I need per square metre?',
    answer:
      'The standard baseline is 600 BTU per square metre for a standard 2.5 metre ceiling in a temperate climate. This increases with ceiling height, sun exposure, number of occupants, and heat generating appliances.',
  },
  {
    question: 'What is a frigoría and how does it compare to a BTU?',
    answer:
      'A frigoría is an older unit of cooling power common in Spain and Latin America. One frigoría equals approximately 3.968 BTU per hour. Modern AC units often list both units, but BTU is the global standard.',
  },
  {
    question: 'How do I convert BTU to tons of cooling?',
    answer:
      'One ton of refrigeration equals 12,000 BTU per hour. Divide your total BTU requirement by 12,000 to get the tonnage. For example, 24,000 BTU equals 2 tons.',
  },
  {
    question: 'Does ceiling height affect AC sizing?',
    answer:
      'Yes. For every metre above 2.7 metres, increase your cooling requirement by roughly 8 percent. High ceilings contain significantly more air volume that must be cooled.',
  },
];

const howToData = [
  { name: 'Measure your room', text: 'Measure the length and width in metres and multiply to get the area in square metres.' },
  { name: 'Count occupants and devices', text: 'Add the number of people who regularly use the room and count heat sources like computers, TVs, and ovens.' },
  { name: 'Select sun exposure', text: 'Choose light, medium, or heavy based on how much direct sun the room receives during the hottest part of the day.' },
  { name: 'Read the recommendation', text: 'The calculator outputs BTUs, frigorias, and tons so you can shop for the right unit in any market.' },
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

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'What Size Air Conditioner Do I Need?', level: 2 },
    { type: 'paragraph', html: 'The right air conditioner size depends on your room area, ceiling height, how many people use the space, sun exposure, and heat sources like computers or kitchen appliances. Use this calculator to get the exact BTU, frigoría, and tonnage your room needs. Below is a quick reference for common room sizes with standard 2.5 m ceilings and light sun exposure.' },
    { type: 'table', headers: ['Room size', 'Recommended BTU', 'Tonnage', 'Typical use'], rows: [['10 m² (small bedroom)', '6,000 - 7,000 BTU', '0.5 - 0.75 tons', 'Guest room, home office'], ['15 m² (bedroom)', '9,000 - 10,000 BTU', '0.75 - 1 ton', 'Master bedroom'], ['20 m² (living room)', '12,000 - 14,000 BTU', '1 - 1.25 tons', 'Small living room'], ['30 m² (open plan)', '18,000 - 21,000 BTU', '1.5 - 1.75 tons', 'Studio or open kitchen'], ['40 m² (large living)', '24,000 - 28,000 BTU', '2 - 2.5 tons', 'Large living + dining']] },
    { type: 'title', text: 'Why Getting the Size Wrong Costs You Money', level: 2 },
    { type: 'paragraph', html: 'An undersized air conditioner runs non-stop, never reaches the set temperature, and burns out its compressor years early. Your electricity bill spikes and you still feel uncomfortable. An oversized unit blasts cold air in short bursts, shuts off before dehumidifying, and leaves the room cold and damp. Both mistakes waste money. Getting the tonnage right is the single most important decision when buying an AC.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU per m² base', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU per ton', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU per frigoría', icon: 'mdi:calculator' }], columns: 3 },
    { type: 'title', text: 'How the Calculator Works', level: 3 },
    { type: 'paragraph', html: 'This tool starts with a baseline of 600 BTU per square metre for a room with 2.5 metre ceilings. It then adds load for every extra metre of ceiling height, each person in the room, every heat-generating device, the amount of direct sun, and the room type. The result is your total cooling requirement in BTU per hour, plus the equivalent in frigorías and tons so you can shop anywhere in the world.' },
    { type: 'title', text: 'Real Factors That Increase Your Cooling Load', level: 3 },
    { type: 'paragraph', html: 'A 20 square metre bedroom and a 20 square metre kitchen need completely different AC units. Ovens, gaming PCs, large south-facing windows, and high ceilings add heat that a simple area chart ignores. Here is exactly how each factor changes your calculation.' },
    { type: 'table', headers: ['Factor', 'Extra load', 'Practical fix'], rows: [['Ceiling height over 2.7 m', '+8% per extra metre', 'Buy a slightly larger unit or add a ceiling fan to circulate air.'], ['Direct afternoon sun', '+15% to +35%', 'Use reflective film or blackout blinds; size up the AC.'], ['Each extra person', '+500 BTU per person', 'Count the people who are normally in the room, not party guests.'], ['Kitchen with oven or stove', '+25% room multiplier', 'If possible, install a dedicated kitchen unit or size up by one step.'], ['Gaming PC or server', '+400 BTU per device', 'Position the AC vent to blow across the heat source.']] },
    { type: 'title', text: 'BTU, Frigorías, and Tons: A Quick Guide', level: 3 },
    { type: 'paragraph', html: '<strong>BTU (British Thermal Unit)</strong> is the global standard. One BTU is the energy needed to cool one pound of water by one degree Fahrenheit. <strong>Frigorías</strong> are still common in Spain and Latin America; one frigoría equals about 3.968 BTU per hour. <strong>Tons</strong> are used in North America; one ton of refrigeration equals 12,000 BTU per hour. This calculator shows all three so you can compare units from any manufacturer or retailer.' },
    { type: 'tip', title: 'Buy at 80 Percent Capacity for Best Results', html: '<p>Choose an AC rated for about 80 percent of your calculated peak load, not 100 percent. A unit running at 80 percent capacity cycles less, removes humidity better, uses less electricity, and lasts several years longer than one constantly maxed out.</p>' },
    { type: 'summary', title: 'Checklist: Buy the Right AC Unit', items: ['Measure the room length and width and multiply to get the area in square metres.', 'Check ceiling height; add roughly 8% cooling power for every metre above 2.7 m.', 'Count regular occupants and add 500 BTU per person beyond the first two.', 'Count heat sources like PCs, TVs, and ovens and add 400 BTU per device.', 'Check sun exposure; south-facing rooms with big windows need 15% to 35% more.', 'Use this calculator to get your total BTU, frigorías, and tons.', 'Buy a unit rated at about 80% of your calculated load.'] },
  ],
  ui: {
    labelRoomSize: 'Room Area',
    labelCeilingHeight: 'Ceiling Height',
    labelPeople: 'People',
    labelHeatSources: 'Heat Sources',
    labelSunExposure: 'Sun Exposure',
    labelRoomType: 'Room Type',
    labelCalculate: 'Calculate',
    labelResult: 'Result',
    labelBtus: 'BTU/h',
    labelFrigorias: 'Frigorías',
    labelTons: 'Tons',
    labelRequired: 'Required',
    labelRecommended: 'Recommended',
    labelUnitBtu: 'BTU/h',
    labelUnitFrigorias: 'Frigorías',
    labelUnitTons: 'Tons',
    labelMetric: 'Metric',
    labelImperial: 'Imperial',
    labelRoomCozy: 'Cozy',
    labelRoomWarm: 'Warm',
    labelRoomHot: 'Hot',
    bdBaseCooling: 'Base cooling',
    bdCeilingHeight: 'Ceiling height',
    bdPeople: 'People',
    bdHeatSources: 'Heat sources',
    bdSunRoom: 'Sun & room type',
    sunLight: 'Light',
    sunMedium: 'Medium',
    sunHeavy: 'Heavy',
    roomBedroom: 'Bedroom',
    roomLiving: 'Living Room',
    roomKitchen: 'Kitchen',
    roomOffice: 'Office',
    roomServer: 'Server Room',
    errorRequired: 'Please fill in all fields',
  },
};
