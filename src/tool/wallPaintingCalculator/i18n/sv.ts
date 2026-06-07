import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fargkalkulator-vaggar';
const title = 'Färg och Utspädningskalkulator för Väggar';
const description =
  'Beräkna exakt hur många liter eller gallon färg du behöver för dina väggar. Justera för lager, ytyp, utspädning och få den verkliga kostnaden innan du köper.';

const faqData = [
  {
    question: 'Hur beräknar jag exakt mängd färg?',
    answer:
      'Multiplicera väggytan med antalet lager och dela sedan med färgens täckförmåga i kvadratmeter eller kvadratfot per liter eller gallon. Dra först bort dörrar och fönster från den totala ytan.',
  },
  {
    question: 'Hur mycket färg behöver ett standardrum?',
    answer:
      'Ett rum på 12 kvadratmeter med tak på 2,5 meters höjd har cirka 30 kvadratmeter väggyta. Med två lager och en täckförmåga på 12 kvadratmeter per liter behöver du cirka 5 liter färg.',
  },
  {
    question: 'Bör jag späda ut färgen innan jag applicerar den?',
    answer:
      'Vattenbaserade plastfärger är vanligtvis färdiga att använda eller behöver 5 till 10 procent vatten vid första lagret. Emalj- eller oljefärger kräver ofta ett specifikt lösningsmedel som anges på burken.',
  },
  {
    question: 'Hur många lager är verkligen nödvändiga?',
    answer:
      'Nya eller starkt absorberande ytor behöver en grundfärg plus två toppskikt. Att måla om en redan målad vägg i en liknande färg behöver vanligtvis bara ett eller två lager.',
  },
  {
    question: 'Drar jag bort dörrar och fönster?',
    answer:
      'Ja. Mät varje öppning och dra bort den från den totala väggytan. Som tumregel är dörrar cirka 2 kvadratmeter och fönster cirka 1,5 kvadratmeter vardera.',
  },
  {
    question: 'Ändrar yttypen täckförmågan?',
    answer:
      'Ja. Släta, förberedda väggar kan ha en täckförmåga på upp till 14 kvadratmeter per liter. Grov betong, strukturfärg eller absorberande tegel kan sänka täckförmågan till 6 eller 8 kvadratmeter per liter.',
  },
];

const howToData = [
  {
    name: 'Mät dina väggar',
    text: 'Mät bredden och höjden på varje vägg. Multiplicera dem för att få arean av varje vägg och lägg sedan till alla väggar.',
  },
  {
    name: 'Dra bort öppningar',
    text: 'Mät dörrar och fönster och dra bort deras area från totalen för att få den verkliga ytan att måla.',
  },
  {
    name: 'Välj din färgtyp',
    text: 'Välj färgtypen i kalkylatorn. Plast matt, plast sidenmatt och emalj har olika täckförmågor och utspädningsrekommendationer.',
  },
  {
    name: 'Ställ in lager och pris',
    text: 'Ange hur många lager du planerar att applicera och priset per liter eller gallon. Kalkylatorn returnerar exakt mängd och total kostnad.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Färgkalkulator: Köp Exakt vad Du Behöver',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att måla ett rum utan att beräkna i förväg slutar vanligtvis i <strong>halvfulla burkar</strong> eller akutbesök till butiken. Anledningen är enkel: färgens täckförmåga varierar med ytporsitet, färgändring och antal lager. En slät, tidigare målad vägg kan ha en täckförmåga på upp till 14 kvadratmeter per liter, medan en strukturvägg kan absorbera samma mängd och endast täcka 6 kvadratmeter per liter.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Hög', label: 'Standard Täckning', icon: 'mdi:format-paint' },
        { value: '2 lager', label: 'Rekommenderas', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Typisk Utspädning', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Hur Färgens Täckförmåga Verkligen Fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tillverkare anger en teoretisk täckförmåga på burken. Det talet förutsätter en perfekt slät, icke-absorberande, vit yta applicerad med en professionell roller under idealiska förhållanden. I verkligheten <strong>minskar porösa väggar, mörka färger och gör-det-själv-applicering</strong> den täckförmågan med 20 till 40 procent. Vår kalkylator låter dig välja realistiska profiler så att du inte går tom.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Plastfärg Matt',
          description: 'Det vanligaste valet för interiörer. Hög täckning, lätt att toucha upp och tvättbar i de flesta kvaliteter.',
          icon: 'mdi:palette',
          points: ['Standard interiörtäckning', 'Utspädning: 5 till 10 procent vatten', 'Bäst för: vardagsrum och sovrum'],
        },
        {
          title: 'Plastfärg Sidenmatt',
          description: 'Lätt glansig finish med större motstånd mot fukt och fläckar. Svårare att toucha upp sömlöst.',
          icon: 'mdi:brightness-6',
          points: ['Något högre täckning', 'Utspädning: 5 procent vatten', 'Bäst för: kök och badrum'],
        },
        {
          title: 'Emaljfärg',
          description: 'Hård och hållbar finish för snickeri, radiatorer och högtrafikerade områden. Kräver lösningsmedel eller specifik utspädningsvätska.',
          icon: 'mdi:spray',
          points: ['Hård och hållbar finish', 'Utspädning: 10 till 15 procent lösningsmedel', 'Bäst för: dörrar, karmar och möbler'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Praktisk Ytmätning',
      icon: 'mdi:ruler-square',
      badge: 'Tips',
      html: '<p style="margin:0">Multiplicera väggbredd med vägghöjd för varje vägg. För en snabb total, lägg till alla bredder och multiplicera med rumshöjden. Dra sedan bort cirka 2 kvadratmeter för varje standarddörr och 1,5 kvadratmeter för varje fönster.</p>',
    },
    {
      type: 'title',
      text: 'Regler för Utspädning och Applicering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Första lagren på nya eller reparerade ytor behöver alltid en lätt utspädning så att färgen kan tränga in och fästa. Toppskikt ska appliceras outspädda eller med minimum enligt tillverkarens anvisningar. <strong>Överdriven utspädning bryter pigmentet</strong> och lämnar genomskinliga fläckar som kräver ett extra lager.',
    },
    {
      type: 'summary',
      title: 'Varför Beräkna Innan Du Köper',
      items: [
        'Undvik överbliven färg som torkar i burken och blir avfall.',
        'Förhindra färgskillnader mellan partier köpta vid olika tillfällen.',
        'Budgetera noggrant: känna till de verkliga kostnaderna inklusive grundfärg och verktyg.',
        'Planera arbetet i ett enda tillfälle utan att avbryta för extra material.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Yta och Färg',
    labelMetric: 'Metrisk',
    labelImperial: 'Imperial',
    labelArea: 'Total yta att måla',
    labelAreaFt: 'Total yta att måla',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Färgens täckförmåga',
    labelYieldFt: 'Färgens täckförmåga',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Välj färgtyp',
    btnPlasticMatTitle: 'Plastfärg Matt',
    btnPlasticMatSub: 'Matt · Vatten 5%',
    btnPlasticSatinTitle: 'Plastfärg Sidenmatt',
    btnPlasticSatinSub: 'Sidenmatt · Vatten 5%',
    btnEnamelTitle: 'Emaljfärg',
    btnEnamelSub: 'Emalj · Lösningsmedel 10%',
    labelCoats: 'Antal lager',
    unitCoats: 'lager',
    labelPrice: 'Pris per liter',
    labelPriceFt: 'Pris per gallon',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Utspädningsprocent',
    unitDilution: '%',
    resultBadge: 'Färgberegnig',
    labelPaint: 'Liter färg',
    labelPaintGal: 'Gallons färg',
    labelCost: 'Total kostnad',
    labelWater: 'Utspädningsvätska',
    labelWaterGal: 'Utspädningsvätska',
    labelTotalVolume: 'Total blandning',
    labelTotalVolumeGal: 'Total blandning',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: 'kr',
  },
};
