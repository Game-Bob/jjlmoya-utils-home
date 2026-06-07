import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'standby-forbrukning-simulator';
const title = 'Standby Energiförbrukning Simulator';
const description =
  'Upptäck hur mycket el dina enheter slösar i standby-läge. Beräkna den dolda årliga kostnaden för spöklaster från TV-apparater, routrar, laddare och mer.';

const faqData = [
  {
    question: 'Vad är vampire power eller spöklast?',
    answer:
      'Vampire power är den elektricitet som elektroniska enheter förbrukar när de är avstängda eller i standby-läge. Detta händer eftersom många enheter förblir delvis aktiva för att svara på fjärrkontroller, upprätthålla nätverksanslutningar eller hålla interna klockor igång.',
  },
  {
    question: 'Hur mycket kostar standby-effekt per år?',
    answer:
      'Det genomsnittliga hushållet slösar mellan 50 och 150 euro per år på enbart standby-effekt. En enda modern TV kan förbruka 10 till 20 watt kontinuerligt, vilket motsvarar ungefär 15 till 30 euro årligen beroende på ditt elpris.',
  },
  {
    question: 'Vilka enheter förbrukar mest i standby?',
    answer:
      'De största syndarna är digitalboxar, spelkonsoler, stationära datorer i viloläge, smart-tv-apparater och äldre externa nätaggregat. Kabel- och satellitboxar är särskilt slösaktiga eftersom de sällan går in i verklig standby.',
  },
  {
    question: 'Spara det verkligen pengar att dra ur sladdarna?',
    answer:
      'Ja. Att dra ur sladdarna eller använda avancerade grenuttag med master-uttag eliminerar standby-förbrukningen helt. För ett typiskt hem med 20 standby-enheter kan årliga besparingar variera från 40 till 120 euro.',
  },
  {
    question: 'Är smarta grenuttag värda det?',
    answer:
      'Smarta eller avancerade grenuttag bryter strömmen till kringutrustning när en master-enhet stängs av. De betalar för sig själva inom några månader om du använder dem med underhållningscenter eller datorarbetsplatser.',
  },
  {
    question: 'Hur kan jag mäta standby-effekt hemma?',
    answer:
      'Du kan använda en billig stickproppseffektmätare (wattmätare) för att exakt mäta hur många watt varje enhet drar när den är av eller overksam. Alternativt tillhandahåller denna simulator standardiserade uppskattningar baserade på tillverkargenomsnitt och laboratoriemätningar.',
  },
];

const howToData = [
  {
    name: 'Gå igenom varje rum',
    text: 'Räkna varje enhet som står inkopplad dygnet runt. Inkludera TV-apparater, mikrovågsugnar, routrar, skrivare, spelkonsoler och telefonladdare.',
  },
  {
    name: 'Uppskatta dagliga standby-timmar',
    text: 'De flesta enheter är i standby i 20 till 24 timmar per dag. Ange genomsnittet för varje enhet eller använd standardvärdet 24 timmar.',
  },
  {
    name: 'Ställ in ditt elpris',
    text: 'Ange priset du betalar per kilowattimme. Detta står på din elräkning.',
  },
  {
    name: 'Läs din sammanfattning',
    text: 'Simulatorn visar totalt slösat watt, årliga kilowattimmar och den dolda årliga kostnaden. Använd kategoribadgen för att se om ditt hem har låg, måttlig, hög eller extrem förbrukning.',
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
  inLanguage: 'sv',
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
      text: 'Phantom Load: Elektriciteten du betalar för men aldrig använder',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Varje eluttag i ditt hem som har en inkopplad kabel är en potentiell källa till <strong>spökelektricitet</strong>. Även när strömbrytaren är av fortsätter enheten att dra ström. Det är kanske bara några watt, men multiplicerat med 24 timmar om dagen och 365 dagar om året blir de watten hundratals kilowattimmar och riktiga pengar ur din ficka.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'Av hushållsräkningen', icon: 'mdi:flash' },
        { value: '23h', label: 'Genomsnittlig standby per dag', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'Topp-enhet genomsnitt', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Enheterna som aldrig sover',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Moderna hem innehåller i genomsnitt 40 elektroniska enheter. Ungefär hälften av dem är kontinuerligt anslutna till elnätet. Även om energiregleringar har förbättrat standby-effektiviteten de senaste åren har det totala antalet enheter ökat. En enda spelkonsol i instant on-läge kan dra 15 watt. En TV med snabbstart kan dra 12 watt. Lägg till routrar, modem, smarta högtalare, mikrovågsugnar med klockor, skrivare och laddare, och totalen överstiger snabbt 100 watt permanent bakgrundsförbrukning.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lågpåverkande hem',
          description: 'Hushåll som aktivt hanterar standby-effekt genom smarta strip och vanan att dra ur sladdar.',
          icon: 'mdi:leaf',
          points: ['Under 50 watt total standby', 'Årlig kostnad under 50 euro', 'Använder avancerade grenuttag'],
        },
        {
          title: 'Högpåverkande hem',
          description: 'Typiska hushåll med underhållningscenter, flera spelkonsoler och alltid-på-datorer.',
          icon: 'mdi:lightning-bolt',
          points: ['Över 150 watt total standby', 'Årlig kostnad överstiger 150 euro', 'Många enheter i snabbstartsläge'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb sparchecklista',
      icon: 'mdi:check-circle',
      badge: 'Åtgärd',
      html: '<p style="margin:0">Dra ur telefonladdare när de inte används. Använd ett masterkontrollerat grenuttag för ditt underhållningscenter. Inaktivera snabbstart eller instant on-lägen på TV-apparater och konsoler. Stäng av stationära datorer istället för att lämna dem i viloläge.</p>',
    },
    {
      type: 'title',
      text: 'Varför watt växer snabbare än du tror',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En watt är en hastighet för energianvändning. En watt under en timme är en wattimme. En enhet som drar 10 watt kontinuerligt förbrukar 87,6 kilowattimmar per år. Vid ett genomsnittligt pris på 0,25 euro per kilowattimme kostar den enda enheten över 21 euro årligen. Multiplicera nu det med varje inkopplad pryl i ditt hem.',
    },
    {
      type: 'summary',
      title: 'Så minskar du din vampire load',
      items: [
        'Identifiera de största förbrukarna med denna simulator eller en stickproppmätare.',
        'Gruppera enheter på smarta grenuttag som bryter standby när huvudenheten är avstängd.',
        'Inaktivera alltid på, snabbstart och nätverks standby-funktioner där det är möjligt.',
        'Dra ur laddare och små apparater som inte används dagligen.',
        'Överväg att ersätta mycket gamla externa nätaggregat med moderna effektiva modeller.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Spöklast Audit',
    labelDevices: 'Anslutna standby-enheter',
    labelHours: 'Standby-timmar per dag',
    unitHours: 'h',
    labelPrice: 'Elpris',
    unitPrice: '/kWh',
    resultBadge: 'Vampire draw resultat',
    labelAnnualKwh: 'Slösad per år',
    labelAnnualCost: 'Dold årlig kostnad',
    labelMonthlyCost: 'Månatlig motsvarighet',
    labelDevicesCount: 'Räknade enheter',
    labelTotalWatts: 'Totalt standby watt',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Låg förbrukning',
    categoryModerate: 'Måttlig förbrukning',
    categoryHigh: 'Hög förbrukning',
    categoryExtreme: 'Extrem förbrukning',
    addDevice: 'Lägg till enhet',
    removeDevice: 'Ta bort',
    modalAddTitle: 'Lägg till standby-enhet',
    labelDeviceName: 'Enhetsnamn',
    labelDeviceWatts: 'Watt i standby',
    btnSave: 'Spara',
    btnCancel: 'Avbryt',
  },
};
