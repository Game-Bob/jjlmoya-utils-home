import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'luftfuktighetskalkylator';
const title = 'Hemluftfuktighet och Avfuktare Drifttid Estimator';
const description =
  'Beräkna hur mycket vatten din avfuktare måste avlägsna för att föra ett fuktigt rum till en hälsosam luftfuktighetsnivå. Se beräknad drifttid, mögelriskvarningar och komfortzonsvisualiseringar i ett interaktivt verktyg.';

const faqData = [
  {
    question: 'Hur länge ska en avfuktare gå per dag?',
    answer:
      'I ett måttligt fuktigt rum behöver en standard hushållsavfuktare vanligtvis gå mellan 8 och 12 timmar per dag för att bibehålla 50 procent relativ luftfuktighet. Vid mycket fuktiga förhållanden eller efter vattenskador kan kontinuerlig drift i 24 till 48 timmar vara nödvändig för att uppnå baslinjetorrhet.',
  },
  {
    question: 'Vilken inomhusluftfuktighetsnivå förhindrar mögel?',
    answer:
      'Mögelväxt hämmas när inomhus relativ luftfuktighet hålls under 60 procent. Den ideala komfortzonen för människors hälsa och byggnadens bevarande ligger mellan 40 och 50 procent relativ luftfuktighet. Nivåer över 70 procent skapar en högriskmiljö för mögelsporer att gro inom 24 till 48 timmar.',
  },
  {
    question: 'Hur mycket vatten kan luft hålla?',
    answer:
      'Mängden vattenånga luft kan hålla beror på temperaturen. Vid 20 grader Celsius innehåller mättad luft cirka 17 gram vatten per kubikmeter. Vid 25 grader Celsius stiger detta till ungefär 23 gram per kubikmeter. Ett 30 kvadratmeter stort rum vid 25 grader Celsius och 70 procent luftfuktighet innehåller ungefär 8 liter osynligt vatten i luften.',
  },
  {
    question: 'Påverkar temperatur avfuktarens effektivitet?',
    answer:
      'Ja. Kompressorbaserade avfuktare fungerar bäst över 18 grader Celsius. Under 15 grader Celsius sjunker deras prestanda eftersom förångarspolar kan frysa över. Dessicant avfuktare är bättre lämpade för kalla utrymmen som garage eller källare eftersom de använder en kemisk torkningsprocess istället för kondensering.',
  },
  {
    question: 'Vilken storlek på avfuktare behöver jag?',
    answer:
      'För ett måttligt fuktigt rum upp till 50 kvadratmeter räcker vanligtvis en enhet på 10 till 12 liter per dag. För mycket fuktiga rum eller utrymmen över 50 kvadratmeter, välj en 20 liter per dag modell. Efter översvämning eller svår fuktighet återställer en industriell enhet på 30 liter per dag förhållandena snabbare.',
  },
  {
    question: 'Kan en avfuktare torka tvätt?',
    answer:
      'Ja. En avfuktare med tvättläge kan effektivt torka kläder inomhus samtidigt som den avlägsnar fukt från omgivande luft. Den använder mindre energi än en torktumlare och förhindrar kondens på fönster och väggar. Förvänta dig torktider liknande utomhus torkning i varmt väder.',
  },
];

const howToData = [
  {
    name: 'Ange rumsstorlek',
    text: 'Skriv in golvytan på rummet i kvadratmeter. Kalkylatorn förutsätter en standard takhöjd på 2,5 meter för att uppskatta total luftvolym.',
  },
  {
    name: 'Ställ in temperatur',
    text: 'Mata in aktuell rumstemperatur i grader Celsius. Varmare luft håller mer fukt, så temperaturen påverkar direkt hur mycket vatten som måste avlägsnas.',
  },
  {
    name: 'Välj aktuell luftfuktighet',
    text: 'Använd komfortreglaget eller numerisk inmatning för att ställa in aktuell procent relativ luftfuktighet. Värden över 60 procent markeras i varningsfärger.',
  },
  {
    name: 'Välj målluftfuktighet',
    text: 'Ställ in önskad relativ luftfuktighet. 50 procent rekommenderas för komfort och mögelförebyggande. 40 procent är idealiskt för allergiker.',
  },
  {
    name: 'Mata in avfuktarkapacitet',
    text: 'Ange avfuktarens kapacitet i liter per dag. Detta står vanligtvis på framsidans etikett eller i bruksanvisningen.',
  },
  {
    name: 'Granska resultat',
    text: 'Läs vattenavlagsningssimuleringen, drifttidsuppskattningen och mögelriskbannern för att besluta hur länge du ska köra din apparat.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'Det dolda vattnet i dina väggar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De flesta husägare inser aldrig att fuktig luft inte bara är obekväm, utan också dyr och farlig. Ett enda fuktigt rum kan hålla flera liter osynlig vattenånga. Med tiden kondenserar denna fukt på kalla ytor, ger näring åt mögelkolonier och försämrar puts, färg och timmer. Att förstå exakt hur mycket vatten som måste avlägsnas och hur lång tid det tar är det första steget för att skydda ditt hem och din hälsa.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Ideal inomhusluftfuktighet', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Genomsnittlig daglig drifttid', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Mögelriskgräns', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Varför relativ luftfuktighet spelar roll',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relativ luftfuktighet är inte mängden vatten i luften, det är procentandelen vatten som luften håller i förhållande till maximalt vad den skulle kunna hålla vid den temperaturen. Varm luft är som en större svamp. Vid 30 grader Celsius kan luft hålla nästan dubbelt så mycket fukt som vid 15 grader Celsius. Det är därför ett rum känns klibbigt även efter att du har öppnat fönstren. Fuktigheten är fortfarande där, bara mindre synlig.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Hög luftfuktighet',
          description: 'Över 60 procent relativ luftfuktighet. Risk för mögel, kvalster och kondensationsskador.',
          icon: 'mdi:alert',
          points: ['Kondens på fönster och väggar', 'Instängda lukter och mikrobiell tillväxt', 'Ökad andningsirritation', 'Högre uppvärmningskostnader på grund av termisk ledningsförmåga hos fuktig luft'],
        },
        {
          title: 'Optimal luftfuktighet',
          description: 'Mellan 40 och 50 procent relativ luftfuktighet. Bekvämt, hälsosamt och energieffektivt.',
          icon: 'mdi:check-circle',
          points: ['Ingen kondens på kalla ytor', 'Mögelsporer förblir vilande', 'Hud och andningskomfort', 'Bevarande av möbler och virke'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb fuktighetskontroll',
      icon: 'mdi:clipboard-check',
      badge: 'Åtgärd',
      html: '<p style="margin:0">Kontrollera fönster efter kondensering varje morgon. Om droppar visas regelbundet är din luftfuktighet för hög. Kör en avfuktare i 12 timmar dagligen tills kondenseringen upphör. Flytta enheten till det fuktigaste rummet, vanligtvis köket, badrummet eller källaren. Töm tanken dagligen och rengör filtret varannan vecka.</p>',
    },
    {
      type: 'title',
      text: 'Rätt dimensionering av din avfuktare',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett vanligt misstag är att köpa en avfuktare som är för liten för utrymmet. En 10 liter per dag maskin i en 60 kvadratmeter fuktig källare kommer att gå kontinuerligt utan att någonsin nå målluftfuktigheten. Använd denna kalkylator för att se den exakta avfuktningsvolymen ditt rum kräver. Om drifttidsuppskattningen överstiger 20 timmar per dag behöver du en enhet med större kapacitet eller bättre ventilation.',
    },
    {
      type: 'summary',
      title: 'Hur du håller ditt hem torrt',
      items: [
        'Använd denna kalkylator för att fastställa den exakta vattenavfuktning som behövs för varje rum.',
        'Underhåll inomhus relativ luftfuktighet mellan 40 och 50 procent för hälsa och komfort.',
        'Kör avfuktaren tills mögelriskbannern blir grön.',
        'Töm vattentanken innan den fylls för att förhindra automatisk avstängning.',
        'Rengör filter regelbundet för att hålla luftflöde och avfuktningstakt på maximum.',
        'Förbättra rumsventilationen vid sidan av avfuktning för snabbare resultat.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Rumsstorlek',
    unitM2: 'm²',
    labelTemperature: 'Temperatur',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Aktuell luftfuktighet',
    labelTargetHumidity: 'Målluftfuktighet',
    labelCapacity: 'Avfuktarkapacitet',
    unitLitersDay: 'L/dag',
    comfortDialTitle: 'Komfortzon',
    comfortCurrent: 'Aktuell',
    comfortTarget: 'Mål',
    tankTitle: 'Vatten i luften',
    tankLiters: 'liter',
    runtimeTitle: 'Beräknad drifttid',
    runtimeUnitH: 't',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Mögelrisk',
    moldRiskHigh: 'Hög risk',
    moldRiskMedium: 'Måttlig risk',
    moldRiskLow: 'Låg risk',
    extractionLabel: 'att avlägsna',
    tipEnergy: 'Att köra din avfuktare under låglasttimmar kan sänka elräkningen avsevärt.',
    tipMold: 'Att hålla luftfuktigheten under 50 procent förhindrar att mögelsporer gror på ytor.',
    unitPercent: '%',
    badgeHigh: 'Hög',
    badgeMedium: 'Måttlig',
    badgeLow: 'Låg',
  },
};
