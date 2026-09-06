import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarBatteryAutonomyCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'solar-battery-autonomy-calculator';
const title = 'Solar Battery Autonomy Calculator';
const description = 'Estimate solar battery backup runtime from usable capacity, charge level, efficiency, and household loads. See kWh demand, coverage, and what to shift.';
const faq = [
  { question: 'What does battery autonomy mean?', answer: 'It is the estimated time your battery can supply the combined power of the loads in your schedule. The estimate uses usable capacity, starting charge, efficiency, and the loads you enter.' },
  { question: 'Does this calculate solar production during the day?', answer: 'No. It is an overnight or backup scenario calculator. It does not model weather, solar generation, battery ageing, inverter limits, or professional system sizing.' },
  { question: 'Why is efficiency included?', answer: 'Energy is lost when the battery passes through the inverter and wiring. Applying an efficiency percentage gives a more conservative estimate than using nameplate capacity alone.' },
  { question: 'How can I extend autonomy?', answer: 'Move flexible loads such as washing, water heating, or vehicle charging outside the battery window. The result highlights the largest scheduled load so you know where to start.' },
];
const howTo = [
  { name: 'Enter usable battery capacity', text: 'Use the usable energy figure from your battery documentation, in kilowatt-hours.' },
  { name: 'Set starting charge and efficiency', text: 'Choose the charge remaining when the backup window begins and the approximate usable efficiency of the system.' },
  { name: 'List household loads', text: 'Add each device, its running power in watts, and the number of hours it will run.' },
  { name: 'Act on the result', text: 'Use the autonomy estimate and largest load to decide which flexible appliance to shift or switch off.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'en' };

export const content: ToolLocaleContent<SolarBatteryAutonomyCalculatorUI> = {
  slug, title, description, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    setupEyebrow: 'YOUR NIGHT PLAN', setupTitle: 'Build a realistic battery window', capacityLabel: 'Usable battery capacity', chargeLabel: 'Starting charge', efficiencyLabel: 'Usable efficiency', loadsTitle: 'Loads to keep running', loadName: 'Load name', loadWatts: 'Power', loadHours: 'Hours', addLoad: 'Add load', removeLoad: 'Remove', resultEyebrow: 'THE TAKEAWAY', autonomyLabel: 'Estimated autonomy', availableEnergy: 'Available now', plannedDemand: 'Planned demand', afterSchedule: 'After schedule', coverage: 'Schedule coverage', shortfall: 'You are short by', enoughEnergy: 'This plan fits inside the available battery energy.', biggestLoad: 'Largest energy draw', shiftSuggestion: 'Shift or switch this load first if you need more backup time.', unitKwh: 'kWh', unitHours: 'h', unitWatts: 'W', unitPercent: '%', emptyLoads: 'Add at least one load to see the estimate',
  },
  seo: [
    { type: 'title', text: 'How long will your solar battery last overnight?', level: 2 },
    { type: 'paragraph', html: 'The useful question is not simply "How many kWh is my battery?". It is <strong>how many hours can it cover my actual night?</strong> A refrigerator, router, lights, heating controls, and chargers all draw energy at different rates. Enter the loads you expect to keep on and get a transparent battery backup runtime estimate before you change your routine or compare storage options.' },
    { type: 'stats', items: [{ value: 'W × hours ÷ 1,000', label: 'Energy per load', icon: 'mdi:flash' }, { value: 'Usable kWh × charge × efficiency', label: 'Energy available', icon: 'mdi:battery-check' }, { value: 'Available − planned', label: 'Energy after schedule', icon: 'mdi:scale-balance' }], columns: 3 },
    { type: 'title', text: 'What this battery runtime calculator tells you', level: 2 },
    { type: 'paragraph', html: 'The main result is estimated autonomy in hours, based on the combined running power of your loads. You also get the energy available now, the energy your schedule needs, the percentage of that schedule covered, and any shortfall. The largest energy draw is called out so the result leads to a concrete action: shift that appliance, reduce its hours, or switch it off during the backup window.' },
    { type: 'comparative', items: [{ title: 'Model your real night', description: 'Use the calculator to test scenarios: a full evening routine, essential loads only, or a lower starting charge after a cloudy day. It runs in your browser and does not need access to your installation.', icon: 'mdi:clipboard-check-outline', points: ['Use usable capacity, not just nameplate capacity', 'Include the hours each load runs', 'Compare "keep on" and "shift" scenarios'] }, { title: 'Know what the estimate excludes', description: 'This is an energy-balance scenario, not a professional battery sizing tool. It does not predict solar generation, weather, battery ageing, peak-power cut-offs, or the safety limits of your inverter and installation.', icon: 'mdi:alert-outline', points: ['No weather or production forecast', 'No battery degradation model', 'Check the manufacturer documentation'] }], columns: 2 },
    { type: 'title', text: 'Use the result to improve your backup plan', level: 2 },
    { type: 'paragraph', html: 'Start with loads that are both significant and flexible. Water heating, laundry, dishwashers, vehicle charging, and some heating or cooling cycles can often be scheduled outside the battery window. Essential background loads still matter: a small router running for twelve hours can use more energy than a brighter lamp used briefly. Change one assumption at a time and compare the remaining energy after each schedule.' },
  ],
};
