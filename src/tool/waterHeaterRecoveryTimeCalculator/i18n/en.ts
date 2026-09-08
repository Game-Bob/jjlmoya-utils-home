import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-heater-recovery-time-calculator';
const title = 'Water Heater Recovery Time Calculator';
const description = 'Estimate how long your water heater needs to recover from its current temperature to a target temperature using its volume, useful power, and efficiency.';
const faq = [
  { question: 'What does recovery time mean here?', answer: 'It is the estimated heating time for the water volume you enter to rise from its current temperature to the target temperature. The calculation uses water heat capacity, useful heater power, and estimated efficiency.' },
  { question: 'What formula does the calculator use?', answer: 'It estimates the heat as volume in litres multiplied by the temperature rise and 1.16 watt hours per litre degree Celsius. It then divides that energy by the heater power multiplied by the efficiency percentage.' },
  { question: 'Does this predict the exact time from my heater?', answer: 'No. It is a transparent planning estimate. Real recovery can be longer because of standby losses, thermostat cycling, stratification, mixing, pipe losses, ambient conditions, and power limits.' },
  { question: 'What efficiency should I enter?', answer: 'Use a documented useful or recovery efficiency when you have one. If you do not, enter a cautious estimate and compare the result with the appliance documentation or a measured recovery cycle.' },
];
const howTo = [
  { name: 'Enter the stored water volume', text: 'Use the tank volume in litres. This estimates the amount of water that needs to warm up.' },
  { name: 'Set the current and target temperatures', text: 'Enter the temperature at the start of recovery and the temperature you want the tank to reach.' },
  { name: 'Enter useful power and efficiency', text: 'Use the heater power in kilowatts and an efficiency percentage that represents the energy reaching the water.' },
  { name: 'Read the recovery window', text: 'Use the estimated duration and completion time to decide when hot water should be available, then compare it with the appliance documentation.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'en' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug,
  title,
  description,
  bibliography,
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Stored water volume', volumeHint: 'Tank capacity', temperatureUnitLabel: 'Temperature units', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Current water temperature', targetTempLabel: 'Target temperature', powerLabel: 'Useful heater power', efficiencyLabel: 'Estimated efficiency', startTimeLabel: 'Recovery starts at', compareTitle: 'Compare another setup', comparePowerLabel: 'Other useful power', compareEfficiencyLabel: 'Other efficiency', compareOptional: 'Optional, enter both fields to compare', calculateNote: 'Use this as a planning estimate and check the heater documentation before relying on the time.', tankCurrent: 'Current', tankTarget: 'Target', resultTitle: 'Recovery window', recoveryTimeLabel: 'Estimated recovery', energyLabel: 'Heat needed', effectivePowerLabel: 'effective power', readyAtLabel: 'Estimated ready at', temperatureRiseLabel: 'Temperature rise', comparisonTitle: 'Alternative setup', comparisonFaster: 'faster', comparisonSlower: 'slower', noHeatingNeeded: 'Already at target', invalidInputs: 'Enter positive volume, power, and efficiency values to see the estimate.', insufficientPower: 'A positive useful power is required.', limitsTitle: 'What this estimate leaves out', limitsText: 'The model does not know the tank insulation, standby losses, thermostat cycles, stratification, mixing, pipe losses, or the actual power curve of your appliance.', hoursUnit: 'h', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Estimate when your hot water will be ready again', level: 2 },
    { type: 'paragraph', html: 'After a shower, bath, or large draw, the useful question is not only how large the tank is. You need to know how much energy must return to the water and how long the heater can deliver it. This calculator turns the tank volume, temperature rise, useful power, and estimated efficiency into a recovery window you can use when planning the next demand.' },
    { type: 'stats', items: [{ value: 'L × °C × 1.16', label: 'Heat needed in Wh', icon: 'mdi:water-boiler' }, { value: 'kW × efficiency', label: 'Useful heating power', icon: 'mdi:flash-outline' }, { value: 'Heat ÷ power', label: 'Recovery time', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'How the recovery estimate is built', level: 2 },
    { type: 'paragraph', html: 'The estimate uses the heat capacity of water. One litre of water needs about 1.16 watt hours for each degree Celsius of temperature increase. The calculator multiplies that factor by the stored volume and the temperature rise, then divides by useful power after efficiency is applied. Because every input remains visible, you can test a cooler starting tank, a lower setpoint, or a different heater configuration without hiding the assumptions.' },
    { type: 'comparative', items: [{ title: 'Useful for planning', description: 'Choose a start time, enter the state of the tank, and see an estimated completion time. Add an alternative power and efficiency pair when you want to compare a different configuration.', icon: 'mdi:calendar-clock', points: ['Test the next recovery cycle', 'Compare useful power, not just nameplate power', 'Keep the temperature rise visible'] }, { title: 'Not a service guarantee', description: 'A real appliance may recover more slowly because heat escapes, the thermostat cycles, the tank mixes, or the heater cannot sustain its rated power. Treat the result as a transparent estimate and verify it against the manual or a measured cycle.', icon: 'mdi:thermometer-alert', points: ['Standby losses are not modelled', 'No manufacturer data is fetched', 'No safety or installation advice is implied'] }], columns: 2 },
    { type: 'title', text: 'The inputs that change recovery time most', level: 2 },
    { type: 'paragraph', html: 'A larger temperature rise increases the energy requirement directly. A larger tank also takes proportionally more energy to warm when the temperature change is the same. Useful power and efficiency work in the opposite direction: doubling their product roughly halves the ideal recovery time. In practice, compare the result with the appliance documentation because rated input power is not always the same as power delivered to the water.' },
    { type: 'title', text: 'Use the result without overpromising precision', level: 2 },
    { type: 'paragraph', html: 'This tool is best for scheduling and comparing assumptions, not for certifying a heater or sizing an installation. The IDAE technical guide describes the same volume, temperature difference, heat capacity, production power, and efficiency relationship for domestic hot water systems, while official test procedures account for measured temperatures, water properties, recovery efficiency, and losses. Those real system details are why an observed cycle can differ from the ideal estimate.' },
  ],
};
