import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'berakning-aterhamtningstid-varmvattenberedare';
const title = 'Beräkna återhämtningstid för varmvattenberedare';
const description = 'Uppskatta hur lång tid varmvattenberedaren behöver för att gå från aktuell temperatur till måltemperatur utifrån volym, nyttig effekt och verkningsgrad.';
const faq = [
  { question: 'Vad betyder återhämtningstid här?', answer: 'Det är den uppskattade tiden för att värma den angivna vattenmängden från aktuell temperatur till måltemperaturen. Beräkningen använder vattnets värmekapacitet, nyttig värmeeffekt och uppskattad verkningsgrad.' },
  { question: 'Vilken formel använder kalkylatorn?', answer: 'Värmen uppskattas som liter gånger temperaturökning gånger 1,16 wattimmar per liter och grad Celsius. Energin delas sedan med värmeeffekten gånger verkningsgraden.' },
  { question: 'Förutsäger detta den exakta tiden för min beredare?', answer: 'Nej. Det är en tydlig planeringsuppskattning. Värmeförluster, termostatcykler, skiktning, blandning, rörförluster och effektbegränsningar kan göra den verkliga tiden längre.' },
  { question: 'Vilken verkningsgrad ska jag ange?', answer: 'Använd en dokumenterad nyttig verkningsgrad eller återhämtningsverkningsgrad om du har en. Annars anger du en försiktig uppskattning och jämför med manualen eller en uppmätt cykel.' },
];
const howTo = [
  { name: 'Ange lagrad vattenvolym', text: 'Använd tankens volym i liter för att uppskatta hur mycket vatten som ska värmas.' },
  { name: 'Ställ in aktuell temperatur och måltemperatur', text: 'Ange temperaturen vid start och den temperatur tanken ska nå.' },
  { name: 'Ange nyttig effekt och verkningsgrad', text: 'Använd värmarens effekt i kilowatt och andelen energi som faktiskt når vattnet.' },
  { name: 'Läs återhämtningsfönstret', text: 'Använd varaktighet och beräknad sluttid för planeringen och jämför med apparatens dokumentation.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Lagrad vattenvolym', volumeHint: 'Tankvolym', temperatureUnitLabel: 'Temperaturenheter', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Aktuell vattentemperatur', targetTempLabel: 'Måltemperatur', powerLabel: 'Varmvattenberedarens nyttiga effekt', efficiencyLabel: 'Uppskattad verkningsgrad', startTimeLabel: 'Återhämtningen börjar', compareTitle: 'Jämför en annan inställning', comparePowerLabel: 'Annan nyttig effekt', compareEfficiencyLabel: 'Annan verkningsgrad', compareOptional: 'Valfritt: fyll i båda fälten för att jämföra', calculateNote: 'Använd detta som en planeringsuppskattning och kontrollera dokumentationen innan du litar på tiden.', tankCurrent: 'Aktuell', tankTarget: 'Mål', resultTitle: 'Återhämtningsfönster', recoveryTimeLabel: 'Beräknad återhämtning', energyLabel: 'Nödvändig värme', effectivePowerLabel: 'effektiv effekt', readyAtLabel: 'Beräknas vara klar', temperatureRiseLabel: 'Temperaturökning', comparisonTitle: 'Alternativ inställning', comparisonFaster: 'snabbare', comparisonSlower: 'långsammare', noHeatingNeeded: 'Måltemperaturen är redan nådd', invalidInputs: 'Ange positiva värden för volym, effekt och verkningsgrad för att se uppskattningen.', insufficientPower: 'En positiv nyttig effekt krävs.', limitsTitle: 'Detta ingår inte i uppskattningen', limitsText: 'Modellen känner inte till tankens isolering, standbyförluster, termostatcykler, skiktning, blandning, rörförluster eller apparatens faktiska effektkurva.', hoursUnit: 'tim', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Uppskatta när varmvattnet är redo igen', level: 2 },
    { type: 'paragraph', html: 'Efter en dusch, ett bad eller ett stort uttag räcker det inte att veta tankens storlek. Du behöver veta hur mycket energi som ska tillbaka till vattnet och hur snabbt värmaren kan leverera den. Kalkylatorn omvandlar detta till ett återhämtningsfönster som hjälper dig att planera nästa användning.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Nödvändig värme i Wh', icon: 'mdi:water-boiler' }, { value: 'kW × verkningsgrad', label: 'Nyttig värmeeffekt', icon: 'mdi:flash-outline' }, { value: 'Värme ÷ effekt', label: 'Återhämtningstid', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Så byggs uppskattningen upp', level: 2 },
    { type: 'paragraph', html: 'Uppskattningen använder vattnets värmekapacitet. En liter vatten behöver ungefär 1,16 wattimmar per grads temperaturökning. Kalkylatorn multiplicerar faktorn med volym och temperaturökning och delar sedan med nyttig effekt efter verkningsgrad.' },
    { type: 'comparative', items: [{ title: 'Bra för planering', description: 'Välj starttid, ange tankens tillstånd och se en uppskattad sluttid. Lägg till ett alternativt effekt- och verkningsgradspar för att jämföra inställningar.', icon: 'mdi:calendar-clock', points: ['Testa nästa återhämtningscykel', 'Jämför nyttig effekt, inte bara märkeffekt', 'Håll temperaturökningen synlig'] }, { title: 'Ingen servicegaranti', description: 'En verklig apparat kan återhämta sig långsammare på grund av värmeförluster, termostatcykler, blandning eller effekt som inte kan hållas. Jämför resultatet med manualen eller en mätning.', icon: 'mdi:thermometer-alert', points: ['Standbyförluster modelleras inte', 'Tillverkaruppgifter hämtas inte', 'Inga säkerhets- eller installationsråd'] }], columns: 2 },
    { type: 'title', text: 'Inmatningar som ändrar tiden mest', level: 2 },
    { type: 'paragraph', html: 'En större temperaturökning ökar energibehovet direkt. En större tank kräver också proportionellt mer energi för samma ökning. Nyttig effekt och verkningsgrad verkar åt andra hållet: om produkten fördubblas halveras den ideala återhämtningstiden ungefär.' },
    { type: 'title', text: 'Använd resultatet utan falsk precision', level: 2 },
    { type: 'paragraph', html: 'Verktyget är till för planering och jämförelse av antaganden, inte för att certifiera en beredare eller dimensionera en installation. Tekniska riktlinjer och verkliga tester tar hänsyn till fler förluster och mätförhållanden, så en uppmätt cykel kan avvika från idealet.' },
  ],
};
