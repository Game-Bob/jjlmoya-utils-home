import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'luftfuktighetskalkylator';
const title = 'Hemluftfuktighet och Avfuktare Drifttid Estimator';
const description =
  'Berakna hur mycket vatten din avfuktare maste avlagsna for att fora ett fuktigt rum till en halsosam luftfuktighetsniva. Se beraknad drifttid, mogelriskvarningar och komfortzonsvisualiseringar i ett interaktivt verktyg.';

const faqData = [
  {
    question: 'Hur lange ska en avfuktare ga per dag?',
    answer:
      'I ett mattligt fuktigt rum behover en standard hushallsavfuktare vanligtvis ga mellan 8 och 12 timmar per dag for att bibehalla 50 procent relativ luftfuktighet. Vid mycket fuktiga forhallanden eller efter vattenskador kan kontinuerlig drift i 24 till 48 timmar vara nodvandig for att uppna baslinjetorrhet.',
  },
  {
    question: 'Vilken inomhusluftfuktighetsniva forhindrar mogel?',
    answer:
      'Mogelvaxt hammas nar inomhus relativ luftfuktighet halls under 60 procent. Den ideala komfortzonen for manniskors halsa och byggnadens bevarande ligger mellan 40 och 50 procent relativ luftfuktighet. Nivaer over 70 procent skapar en hogriskmiljo for mogelsporer att gro inom 24 till 48 timmar.',
  },
  {
    question: 'Hur mycket vatten kan luft halla?',
    answer:
      'Mangden vattenanga luft kan halla beror pa temperaturen. Vid 20 grader Celsius innehaller mattad luft cirka 17 gram vatten per kubikmeter. Vid 25 grader Celsius stiger detta till ungefar 23 gram per kubikmeter. Ett 30 kvadratmeter stort rum vid 25 grader Celsius och 70 procent luftfuktighet innehaller ungefar 8 liter osynligt vatten i luften.',
  },
  {
    question: 'Paverkar temperatur avfuktarens effektivitet?',
    answer:
      'Ja. Kompressorbaserade avfuktare fungerar blast over 18 grader Celsius. Under 15 grader Celsius sjunker deras prestanda eftersom forangarspolar kan frysa over. Dessicant avfuktare ar battre lamplade for kalla utrymmen som garage eller kallare eftersom de anvander en kemisk torkningsprocess istallet for kondensering.',
  },
  {
    question: 'Vilken storlek pa avfuktare behover jag?',
    answer:
      'For ett mattligt fuktigt rum upp till 50 kvadratmeter racker vanligtvis en enhet pa 10 till 12 liter per dag. For mycket fuktiga rum eller utrymmen over 50 kvadratmeter, valj en 20 liter per dag modell. Efter oversvamning eller svar fuktighet aterstaller en industriell enhet pa 30 liter per dag forhallandena snabbare.',
  },
  {
    question: 'Kan en avfuktare torka tvatt?',
    answer:
      'Ja. En avfuktare med tvattlage kan effektivt torka klader inomhus samtidigt som den avlagsnar fukt fran omgivande luft. Den anvander mindre energi an en torktumlare och forhindrar kondens pa fonster och vaggar. Forvanta dig torktider liknande utomhus torkning i varmt vader.',
  },
];

const howToData = [
  {
    name: 'Ange rumsstorlek',
    text: 'Skriv in golvytan pa rummet i kvadratmeter. Kalkylatorn forutsatter en standard takhojd pa 2,5 meter for att uppskatta total luftvolym.',
  },
  {
    name: 'Stall in temperatur',
    text: 'Mata in aktuell rumstemperatur i grader Celsius. Varmare luft hallmer fukt, sa temperaturen paverkar direkt hur mycket vatten som maste avlagsnas.',
  },
  {
    name: 'Valj aktuell luftfuktighet',
    text: 'Anvand komfortreglaget eller numerisk inmatning for att stalla in aktuell procent relativ luftfuktighet. Varden over 60 procent markeras i varningsfarger.',
  },
  {
    name: 'Valj malluftfuktighet',
    text: 'Stall in onskad relativ luftfuktighet. 50 procent rekommenderas for komfort och mogelforebyggande. 40 procent ar idealiskt for allergiker.',
  },
  {
    name: 'Mata in avfuktarkapacitet',
    text: 'Ange avfuktarens kapacitet i liter per dag. Detta star vanligtvis pa framsidans etikett eller i bruksanvisningen.',
  },
  {
    name: 'Granska resultat',
    text: 'Las vattenavlagsningssimuleringen, drifttidsuppskattningen och mogelriskbannern for att besluta hur lange du ska kora din apparat.',
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
      text: 'Det dolda vattnet i dina vaggar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De flesta husagare inser aldrig att fuktig luft inte bara ar obekvam, utan ocksa dyr och farlig. Ett enda fuktigt rum kan halla flera liter osynlig vattenanga. Med tiden kondenserar denna fukt pa kalla ytor, ger naring at mogelkolonier och forsamar puts, farg och timmer. Att forsta exakt hur mycket vatten som maste avlagsnas och hur lang tid det tar ar det forsta steget for att skydda ditt hem och din halsa.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Ideal inomhusluftfuktighet', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Genomsnittlig daglig drifttid', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Mogelriskgrans', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Varfor relativ luftfuktighet spelar roll',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relativ luftfuktighet ar inte mangden vatten i luften, det ar procentandelen vatten som luften haller i forhallande till maximalt vad den skulle kunna halla vid den temperaturen. Varm luft ar som en storre svamp. Vid 30 grader Celsius kan luft halla nastan dubbelt sa mycket fukt som vid 15 grader Celsius. Det ar darfor ett rum kannas klibbigt aven efter att du har oppnat fonstren. Fuktigheten ar fortfarande dar, bara mindre synlig.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Hog luftfuktighet',
          description: 'Over 60 procent relativ luftfuktighet. Risk for mogel, kvalster och kondensationsskador.',
          icon: 'mdi:alert',
          points: ['Kondens pa fonster och vaggar', 'Instangda lukter och mikrobiell tillvaxt', 'Okad andningsirritation', 'Hogre uppvarmningskostnader pa grund av termisk ledningsformaga hos fuktig luft'],
        },
        {
          title: 'Optimal luftfuktighet',
          description: 'Mellan 40 och 50 procent relativ luftfuktighet. Bekvamt, halsosamt och energieffektivt.',
          icon: 'mdi:check-circle',
          points: ['Ingen kondens pa kalla ytor', 'Mogelsporer forblir vilande', 'Hud och andningskomfort', 'Bevarande av mobler och virke'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb fuktighetskontroll',
      icon: 'mdi:clipboard-check',
      badge: 'Atgard',
      html: '<p style="margin:0">Kontrollera fonster efter kondensering varje morgon. Om droppar visas regelbundet ar din luftfuktighet for hog. Kor en avfuktare i 12 timmar dagligen tills kondenseringen upphor. Flytta enheten till det fuktigaste rummet, vanligtvis koket, badrummet eller kallaren. Tom tanken dagligen och rengor filtret varannan vecka.</p>',
    },
    {
      type: 'title',
      text: 'Ratt dimensionering av din avfuktare',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett vanligt misstag ar att kopa en avfuktare som ar for liten for utrymmet. En 10 liter per dag maskin i en 60 kvadratmeter fuktig kallare kommer att ga kontinuerligt utan att nagonsin na malluftfuktigheten. Anvand denna kalkylator for att se den exakta avfuktningsvolymen ditt rum kraver. Om drifttidsuppskattningen overstiger 20 timmar per dag behover du en enhet med storre kapacitet eller battre ventilation.',
    },
    {
      type: 'summary',
      title: 'Hur du haller ditt hem torrt',
      items: [
        'Anvand denna kalkylator for att faststalla den exakta vattenavfuktning som behovs for varje rum.',
        'Underhall inomhus relativ luftfuktighet mellan 40 och 50 procent for halsa och komfort.',
        'Kor avfuktaren tills mogelriskbannern blir gron.',
        'Tom vattentanken innan den fylls for att forhindra automatisk avstangning.',
        'Rengor filter regelbundet for att halla luftflode och avfuktningstakt pa maximum.',
        'Forbattr rumsventilationen vid sidan av avfuktning for snabbare resultat.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Rumsstorlek',
    unitM2: 'm2',
    labelTemperature: 'Temperatur',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Aktuell luftfuktighet',
    labelTargetHumidity: 'Malluftfuktighet',
    labelCapacity: 'Avfuktarkapacitet',
    unitLitersDay: 'L/dag',
    comfortDialTitle: 'Komfortzon',
    comfortCurrent: 'Aktuell',
    comfortTarget: 'Mal',
    tankTitle: 'Vatten i luften',
    tankLiters: 'liter',
    runtimeTitle: 'Beraknad drifttid',
    runtimeUnitH: 't',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Mogelrisk',
    moldRiskHigh: 'Hog risk',
    moldRiskMedium: 'Mattlig risk',
    moldRiskLow: 'Lag risk',
    extractionLabel: 'att avlagsna',
    tipEnergy: 'Att kora din avfuktare under laglasttimmar kan sanka elrakningen avsevart.',
    tipMold: 'Att halla luftfuktigheten under 50 procent forhindrar att mogelsporer gror pa ytor.',
    unitPercent: '%',
    badgeHigh: 'Hog',
    badgeMedium: 'Mattlig',
    badgeLow: 'Lag',
  },
};
