import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'boiler-herstelduur-calculator';
const title = 'Calculator voor de hersteltijd van een boiler';
const description = 'Schat hoe lang je boiler nodig heeft om van de huidige naar de gewenste watertemperatuur te gaan op basis van volume, nuttig vermogen en rendement.';
const faq = [
  { question: 'Wat betekent hersteltijd hier?', answer: 'Dit is de geschatte tijd waarin het ingevoerde watervolume van de huidige naar de gewenste temperatuur stijgt. De berekening gebruikt de warmtecapaciteit van water, het nuttige verwarmingsvermogen en het geschatte rendement.' },
  { question: 'Welke formule gebruikt de calculator?', answer: 'De benodigde warmte wordt geschat als liters maal temperatuurstijging maal 1,16 wattuur per liter en graad Celsius. Die energie wordt gedeeld door het verwarmingsvermogen maal het rendement.' },
  { question: 'Voorspelt dit de exacte tijd van mijn boiler?', answer: 'Nee. Het is een transparante schatting voor planning. Stilstandsverlies, thermostaatcycli, stratificatie, menging, leidingverlies en vermogensgrenzen kunnen de echte tijd verlengen.' },
  { question: 'Welk rendement moet ik invullen?', answer: 'Gebruik een gedocumenteerd nuttig of herstelrendement als je dat hebt. Kies anders een voorzichtige schatting en vergelijk die met de handleiding of een gemeten herstelcyclus.' },
];
const howTo = [
  { name: 'Voer het opgeslagen watervolume in', text: 'Gebruik het volume van de tank in liter om de hoeveelheid te verwarmen water te schatten.' },
  { name: 'Stel de huidige en gewenste temperatuur in', text: 'Voer de temperatuur bij de start en de temperatuur die de tank moet bereiken in.' },
  { name: 'Voer nuttig vermogen en rendement in', text: 'Gebruik het vermogen in kilowatt en het percentage energie dat het water werkelijk bereikt.' },
  { name: 'Lees het herstelvenster af', text: 'Gebruik de duur en verwachte eindtijd voor je planning en vergelijk het resultaat met de documentatie.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Opgeslagen watervolume', volumeHint: 'Tankinhoud', temperatureUnitLabel: 'Temperatuureenheden', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Huidige watertemperatuur', targetTempLabel: 'Doeltemperatuur', powerLabel: 'Nuttig vermogen van de boiler', efficiencyLabel: 'Geschat rendement', startTimeLabel: 'Herstel start om', compareTitle: 'Andere instelling vergelijken', comparePowerLabel: 'Ander nuttig vermogen', compareEfficiencyLabel: 'Ander rendement', compareOptional: 'Optioneel: vul beide velden in om te vergelijken', calculateNote: 'Gebruik dit als planningsschatting en controleer de documentatie voordat je op de tijd vertrouwt.', tankCurrent: 'Huidig', tankTarget: 'Doel', resultTitle: 'Herstelvenster', recoveryTimeLabel: 'Geschatte hersteltijd', energyLabel: 'Benodigde warmte', effectivePowerLabel: 'effectief vermogen', readyAtLabel: 'Geschat klaar om', temperatureRiseLabel: 'Temperatuurstijging', comparisonTitle: 'Alternatieve instelling', comparisonFaster: 'sneller', comparisonSlower: 'langzamer', noHeatingNeeded: 'Doeltemperatuur is al bereikt', invalidInputs: 'Voer positieve waarden voor volume, vermogen en rendement in om de schatting te zien.', insufficientPower: 'Een positief nuttig vermogen is vereist.', limitsTitle: 'Wat deze schatting niet meeneemt', limitsText: 'Het model kent de isolatie van de tank, stilstandsverlies, thermostaatcycli, stratificatie, menging, leidingverlies en de echte vermogenscurve van het apparaat niet.', hoursUnit: 'uur', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Schat wanneer je warme water weer klaar is', level: 2 },
    { type: 'paragraph', html: 'Na een douche, bad of grote afname zegt de tankinhoud niet alles. Je moet weten hoeveel energie terug in het water moet komen en hoe snel de boiler die kan leveren. Deze calculator vertaalt dat naar een herstelvenster voor je volgende gebruik.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Benodigde warmte in Wh', icon: 'mdi:water-boiler' }, { value: 'kW × rendement', label: 'Nuttig verwarmingsvermogen', icon: 'mdi:flash-outline' }, { value: 'Warmte ÷ vermogen', label: 'Hersteltijd', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Zo wordt de schatting opgebouwd', level: 2 },
    { type: 'paragraph', html: 'De schatting gebruikt de warmtecapaciteit van water. Eén liter heeft ongeveer 1,16 wattuur nodig per graad temperatuurstijging. De calculator vermenigvuldigt die factor met volume en temperatuurstijging en deelt daarna door het nuttige vermogen na toepassing van het rendement.' },
    { type: 'comparative', items: [{ title: 'Handig voor planning', description: 'Kies een starttijd, voer de toestand van de tank in en bekijk de geschatte eindtijd. Voeg een andere combinatie van vermogen en rendement toe om instellingen te vergelijken.', icon: 'mdi:calendar-clock', points: ['De volgende herstelcyclus testen', 'Nuttig vermogen vergelijken, niet alleen nominaal vermogen', 'De temperatuurstijging zichtbaar houden'] }, { title: 'Geen servicegarantie', description: 'Een echt apparaat kan langzamer herstellen door warmteverlies, thermostaatcycli, menging of vermogen dat niet constant blijft. Vergelijk het resultaat met de handleiding of een meting.', icon: 'mdi:thermometer-alert', points: ['Stilstandsverlies wordt niet gemodelleerd', 'Er worden geen fabrikantgegevens opgehaald', 'Geen veiligheids- of installatieadvies'] }], columns: 2 },
    { type: 'title', text: 'De invoer die de hersteltijd het meest verandert', level: 2 },
    { type: 'paragraph', html: 'Een grotere temperatuurstijging verhoogt de energiebehoefte rechtstreeks. Een grotere tank vraagt bij dezelfde stijging evenredig meer energie. Nuttig vermogen en rendement werken omgekeerd: als hun product verdubbelt, halveert de ideale hersteltijd ongeveer.' },
    { type: 'title', text: 'Gebruik het resultaat zonder schijnprecisie', level: 2 },
    { type: 'paragraph', html: 'Deze tool is bedoeld om aannames te plannen en te vergelijken, niet om een boiler te certificeren of een installatie te dimensioneren. Technische richtlijnen en echte tests houden rekening met extra verliezen en meetomstandigheden, waardoor een gemeten cyclus kan afwijken.' },
  ],
};
