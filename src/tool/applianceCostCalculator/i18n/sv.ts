import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'apparatkostnadskalkylator';
const title = 'Hushallsapparat Vatten och Energi Kostnadskalkylator per Cykel';
const description =
  'Berakna den verkliga kostnaden per laddning for din tvattmaskin, diskmaskin och torktumlare. Se exakt hur mycket el, vatten och tvattmedel varje program kostar och upptack hur mycket du kan spara genom att byta till Eco lage.';

const faqData = [
  {
    question: 'Hur mycket kostar ett tvattprogram?',
    answer:
      'Ett typiskt Eco 40C program anvander cirka 0,45 kWh el och 40 liter vatten. Med genomsnittliga europeiska priser kostar detta ungefar 0,10 till 0,15 euro per laddning. Ett intensivt 60C program kan anvanda over 1,2 kWh och 70 liter, vilket driver upp kostnaden over 0,30 euro.',
  },
  {
    question: 'Ar det billigare att kora diskmaskinen pa natten?',
    answer:
      'Om din elleverantor anvander tidsdifferentierade tariffer kan korning av diskmaskinen utanfor hoglastimmar minska energikostnaden med 30 procent eller mer. Hoglastimmar ar vanligtvis vardagsmorgnar och kvallar.',
  },
  {
    question: 'Anvander torktumlaren mycket el?',
    answer:
      'Ja. En torktumlare ar en av de mest energikrävande hushallsapparaterna. En full laddning kan förbruka 2,5 till 3,5 kWh, vilket kostar 0,50 till 0,80 euro per program. Att anvanda en varmepumpstumlare eller torka klader utomhus kan minska denna kostnad med 60 till 80 procent.',
  },
  {
    question: 'Hur mycket vatten anvander en diskmaskin?',
    answer:
      'Moderna diskmaskiner ar overraskande effektiva. Ett standard Eco program anvander bara 8 till 12 liter vatten per laddning, medan ett intensivt program kan anvanda 14 till 16 liter. Detta ar mycket mindre an att diska samma tallrikar for hand under rinnande kran, vilket typiskt förbrukar 40 till 60 liter.',
  },
  {
    question: 'Vilken ar den billigaste tiden att anvanda apparater?',
    answer:
      'Vid tidsdifferentierade tariffer ar de billigaste perioderna vanligtvis sent pa natten, mycket tidigt pa morgonen och under helger. Dessa laglastimmar kan vara 30 till 50 procent billigare an hvardagshoglastimmar.',
  },
  {
    question: 'Sparar det verkligen pengar att byta till Eco lage?',
    answer:
      'Absolut. Eco program anvander lägre temperaturer, kortare uppvärmningsfaser och mindre vatten. Under ett helt ar kan byte fran Normal till Eco pa tvattmaskinen och diskmaskinen spara 50 till 100 euro i el och vatten, beroende på användningsfrekvens och lokala priser.',
  },
];

const howToData = [
  {
    name: 'Välj din apparat',
    text: 'Tryck på ikonen för tvattmaskin, diskmaskin eller torktumlare hogst upp i kalkylatorn. Varje apparat har olika energi och vattenforbrukningsprofiler.',
  },
  {
    name: 'Välj en programtyp',
    text: 'Använd Eco, Normal eller Intensiv skjutreglaget for att ställa in tvattprogrammet. Eco anvander mindre energi och vatten. Intensiv förbrukar mest.',
  },
  {
    name: 'Ange dina lokala priser',
    text: 'Skriv in ditt elpris per kWh och ditt vattenpris per liter. Du kan hitta dessa på din faktura eller leverantörens webbplats.',
  },
  {
    name: 'Ställ in användningsfrekvens',
    text: 'Ange hur många program du kör per vecka. Detta gör att kalkylatorn kan uppskatta din årliga kostnad och potentiella årliga besparingar.',
  },
  {
    name: 'Välj användningstimme',
    text: 'Välj den timme du planerar att köra apparaten. Hoglastimmar är markerade i rött. Laglastimmar är gröna och billigare om du har tidsdifferentierad tariff.',
  },
  {
    name: 'Växla tvättmedelskostnader',
    text: 'Aktivera tvättmedelsomkopplaren om du vill att kvittot ska innehålla en uppskattning för pulver, vätska eller kapslar per program.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'Dolda Kostnaden for Varje Laddning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De flesta människor har ingen aning om vad ett enda tvattprogram faktiskt kostar. De ser den kvartalsvisa elräkningen och antar att apparater är billiga i drift. Verkligheten är att en familj som tvattar fem laddningar per vecka kan spendera över 200 euro per år bara för tvätt. Lägg till diskmaskinen tre gånger i veckan och torktumlaren två gånger, och totalen stiger över 500 euro per år. Denna kalkylator bryter ner varje cent så att du kan optimera dina vanor.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Eco Tvatt', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Vatten Eco Tvatt', icon: 'mdi:water' },
        { value: '30%', label: 'Hoglastillagg', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Varfor Små Förändringar Multipliceras',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En enda grad temperatur eller några liter vatten verkar trivialt för ett program. Men över 250 program per år, lägger dessa små skillnader sig till allvarliga pengar. Att sjunka fran 60C till 40C minskar energiförbrukningen med ungefär 40 procent per laddning. Att byta fran Normal till Eco på diskmaskinen sparar cirka 3 liter vatten och 0,3 kWh varje gång. Detta är inte marginella vinster. Det är det snabbaste sättet att krympa din faktura utan att köpa nya apparater.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Intensivt Program',
          description: 'Maximal värme och vatten för kraftigt nedsmutsade laddningar.',
          icon: 'mdi:alert',
          points: ['1,2 till 3,5 kWh per laddning', '70 liter för tvattmaskiner', 'Hoglastillagg tillämpas', 'Högst årlig kostnad'],
        },
        {
          title: 'Eco Program',
          description: 'Lägre temperatur, optimerad varaktighet, minimalt vatten.',
          icon: 'mdi:check-circle',
          points: ['0,45 till 1,5 kWh per laddning', 'Endast 8 till 40 liter', 'Laglastimme möjlig', 'Lägst årlig kostnad'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb Apparatgranskning',
      icon: 'mdi:clipboard-check',
      badge: 'Atgard',
      html: '<p style="margin:0">Anvand tvattmaskinen endast med full laddning. Anvand Eco programmet for normal nedsmutsning. Ställ in diskmaskinen på fördröjd start efter 22:00 om du har tidsdifferentierad tariff. Rengör torktumlarens luddfilter efter varje program för att upprätthålla effektivitet. Torka kläder utomhus eller på ett torkställ när vädret tillåter.</p>',
    },
    {
      type: 'title',
      text: 'Tidsdifferentierade Tariffer och Hoglastider',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Många elleverantörer tar nu ut olika priser beroende på timme på dagen. Höglastperioder, vanligtvis vardagsmorgnar och kvällar, kan kosta 30 till 50 procent mer än låglastperioder. Samma laddning klockan 20:00 kan kosta 0,18 euro, medan samma laddning klockan 02:00 kostar bara 0,12 euro. Under ett år kan korrekt planering av apparater spara 50 till 100 euro utan att ändra något annat. Denna kalkylator markerar höglästimmar i rött och låglastimmar i grönt så att du kan planera i förväg.',
    },
    {
      type: 'summary',
      title: 'Hur du Minskar Apparatkostnader',
      items: [
        'Använd denna kalkylator för att hitta den verkliga kostnaden per program för dina apparater.',
        'Byt till Eco läge närhelst möjligt för att spara upp till 40 procent energi.',
        'Kör fulla laddningar istället för delvisa laddningar för att maximera effektiviteten.',
        'Fördröj program till låglastimmar om din tariff stöder tidsdifferentierade priser.',
        'Torka kläder utomhus istället för att använda torktumlaren för att helt eliminera den kostnaden.',
        'Rengör filter och avkalka regelbundet för att hålla apparaterna igång på nominell effektivitet.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Apparat',
    applianceWasher: 'Tvattmaskin',
    applianceDishwasher: 'Diskmaskin',
    applianceDryer: 'Torktumlare',
    labelCycle: 'Program',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensiv',
    labelElectricityPrice: 'Elpris',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Vattenpris',
    unitPriceLiter: '€/L',
    labelDetergent: 'Tvattmedel',
    labelDetergentToggle: 'Inkludera tvattmedelskostnad',
    labelHour: 'Planerad Timme',
    peakBadge: 'Hoglastariff aktiv',
    offPeakBadge: 'Laglastariff',
    receiptTitle: 'Kostnadsnedbrytning',
    receiptElectricity: 'El',
    receiptWater: 'Vatten',
    receiptDetergent: 'Tvattmedel',
    receiptTotal: 'Totalt per program',
    receiptPerYear: 'Uppskattat per ar',
    comparisonTitle: 'Smart Byte',
    comparisonText: 'Att byta fran Normal till Eco sparar pengar vid varje laddning.',
    comparisonSavings: 'Arlig besparing',
    comparisonMonths: 'manader tvattmedel',
    badgePeak: 'Hoglast',
    badgeOffPeak: 'Laglast',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'ar',
    labelCyclesPerWeek: 'Program per vecka',
    currencySign: '€',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
