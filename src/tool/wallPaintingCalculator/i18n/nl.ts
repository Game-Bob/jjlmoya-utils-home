import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verf-calculator-muren';
const title = 'Verf en Verdunningscalculator voor Muren';
const description =
  'Bereken exact hoeveel liter of gallons verf u nodig heeft voor uw muren. Pas aan voor lagen, oppervlaktype, verdunning en krijg de werkelijke kosten voordat u koopt.';

const faqData = [
  {
    question: 'Hoe bereken ik de exacte hoeveelheid verf?',
    answer:
      'Vermenigvuldig de wandoppervlakte met het aantal lagen en deel door de opbrengst van de verf in vierkante meters of vierkante voet per liter of gallon. Trek eerst deuren en ramen af van het totale oppervlak.',
  },
  {
    question: 'Hoeveel verf heeft een standaard kamer nodig?',
    answer:
      'Een kamer van 12 vierkante meter met plafonds van 2,5 meter hoog heeft ongeveer 30 vierkante meter wandoppervlak. Met twee lagen en een opbrengst van 12 vierkante meter per liter heeft u ongeveer 5 liter verf nodig.',
  },
  {
    question: 'Moet ik de verf verdunnen voordat ik deze aanbreng?',
    answer:
      'Watergedragen kunstharsverven zijn meestal kant-en-klaar of hebben 5 tot 10 procent water nodig bij de eerste laag. Email- of olieverven vereisen vaak een specifiek oplosmiddel dat op het blik staat aangegeven.',
  },
  {
    question: 'Hoeveel lagen zijn echt nodig?',
    answer:
      'Nieuwe of zeer absorberende oppervlakken hebben een primer plus twee afwerkingslagen nodig. Het overschilderen van een al geschilderde muur in een vergelijkbare kleur vereist meestal slechts een of twee lagen.',
  },
  {
    question: 'Trek ik deuren en ramen af?',
    answer:
      'Ja. Meet elke opening en trek deze af van de totale wandoppervlakte. Als vuistregel zijn deuren ongeveer 2 vierkante meter en ramen ongeveer 1,5 vierkante meter elk.',
  },
  {
    question: 'Verandert het oppervlaktype de opbrengst?',
    answer:
      'Ja. Gladde, voorbereide muren kunnen een opbrengst hebben van tot 14 vierkante meter per liter. Ruw beton, structuurverf of absorberende baksteen kunnen de opbrengst laten dalen tot 6 of 8 vierkante meter per liter.',
  },
];

const howToData = [
  {
    name: 'Meet uw muren',
    text: 'Meet de breedte en hoogte van elke muur. Vermenigvuldig deze om het oppervlak van elke muur te krijgen, tel dan alle muren op.',
  },
  {
    name: 'Trek openingen af',
    text: 'Meet deuren en ramen en trek hun oppervlak af van het totaal om het werkelijke oppervlak te schilderen te krijgen.',
  },
  {
    name: 'Kies uw verftype',
    text: 'Selecteer het verftype in de calculator. Kunststof mat, kunststof zijdeglans en email hebben verschillende opbrengsten en verdunningsaanbevelingen.',
  },
  {
    name: 'Stel lagen en prijs in',
    text: 'Geef aan hoeveel lagen u van plan bent aan te brengen en de prijs per liter of gallon. De calculator geeft het exacte bedrag en de totale kosten terug.',
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
  inLanguage: 'nl',
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
      text: 'Verf Calculator: Koop Precies Wat U Nodig Heeft',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een kamer schilderen zonder van tevoren te berekenen eindigt meestal in <strong>halve blikken</strong> of nooduitstapjes naar de winkel. De reden is simpel: de opbrengst van verf varieert met de porositeit van het oppervlak, de kleurverandering en het aantal lagen. Een gladde, eerder geschilderde muur kan een opbrengst hebben van tot 14 vierkante meter per liter, terwijl een structuurmuur dezelfde hoeveelheid kan absorberen en slechts 6 vierkante meter per liter kan bedekken.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Hoog', label: 'Standaard Dekking', icon: 'mdi:format-paint' },
        { value: '2 lagen', label: 'Aanbevolen', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Typische Verdunning', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Hoe Verfopbrengst Echt Werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fabrikanten vermelden een theoretische opbrengst op het blik. Dat getal gaat uit van een perfect glad, niet absorberend, wit oppervlak dat met een professionele roller onder ideale omstandigheden wordt aangebracht. In de echte wereld <strong>reduceren poreuze muren, donkere kleuren en doe-het-zelf aanbrenging</strong> die opbrengst met 20 tot 40 procent. Onze calculator laat u realistische profielen kiezen zodat u niet tekort komt.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Kunststof Matte Verf',
          description: 'De meest gebruikelijke keuze voor interieurs. Hoge dekking, gemakkelijk bij te werken en in de meeste kwaliteiten afwasbaar.',
          icon: 'mdi:palette',
          points: ['Standaard interieur dekking', 'Verdunning: 5 tot 10 procent water', 'Ideaal voor: woonkamers en slaapkamers'],
        },
        {
          title: 'Kunststof Zijdeglans Verf',
          description: 'Iets glanzende afwerking met grotere weerstand tegen vocht en vlekken. Moeilijker naadloos bij te werken.',
          icon: 'mdi:brightness-6',
          points: ['Iets hogere dekking', 'Verdunning: 5 procent water', 'Ideaal voor: keukens en badkamers'],
        },
        {
          title: 'Emailverf',
          description: 'Harde en duurzame afwerking voor timmerwerk, radiatoren en drukke gebieden. Vereist oplosmiddel of specifieke verdunner.',
          icon: 'mdi:spray',
          points: ['Harde en duurzame afwerking', 'Verdunning: 10 tot 15 procent oplosmiddel', 'Ideaal voor: deuren, kozijnen en meubels'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Praktische Oppervlaktemeting',
      icon: 'mdi:ruler-square',
      badge: 'Tip',
      html: '<p style="margin:0">Vermenigvuldig wandbreedte maal wandhoogte voor elke muur. Voor een snelle totaalopbrengst, tel alle breedtes op en vermenigvuldig met de kamerhoogte. Trek dan ongeveer 2 vierkante meter af voor elke standaard deur en 1,5 vierkante meter voor elk raam.</p>',
    },
    {
      type: 'title',
      text: 'Regels voor Verdunning en Aanbrenging',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eerste lagen op nieuwe of gerepareerde oppervlakken hebben altijd lichte verdunning nodig zodat de verf kan doordringen en hechten. Afwerkingslagen moeten onverdund of met het minimum aangebracht worden dat door de fabrikant is aangegeven. <strong>Overmatige verdunning breekt het pigment</strong> en laat transparante plekken achter die een extra laag vereisen.',
    },
    {
      type: 'summary',
      title: 'Waarom Berekenen Voor het Kopen',
      items: [
        'Vermijd verfresten die in het blik opdrogen en als afval eindigen.',
        'Voorkom kleurverschillen tussen partijen die op verschillende momenten zijn gekocht.',
        'Budgetteer nauwkeurig: ken de werkelijke kosten inclusief primer en gereedschap.',
        'Plan het werk in een keer zonder het te onderbreken voor extra materialen.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Oppervlak en Verf',
    labelMetric: 'Metrisch',
    labelImperial: 'Imperiaal',
    labelArea: 'Totale oppervlakte te schilderen',
    labelAreaFt: 'Totale oppervlakte te schilderen',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Verfopbrengst',
    labelYieldFt: 'Verfopbrengst',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Selecteer verftype',
    btnPlasticMatTitle: 'Kunststof Mat',
    btnPlasticMatSub: 'Mat · Water 5%',
    btnPlasticSatinTitle: 'Kunststof Zijdeglans',
    btnPlasticSatinSub: 'Zijdeglans · Water 5%',
    btnEnamelTitle: 'Email',
    btnEnamelSub: 'Email · Oplosmiddel 10%',
    labelCoats: 'Aantal lagen',
    unitCoats: 'lagen',
    labelPrice: 'Prijs per liter',
    labelPriceFt: 'Prijs per gallon',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Verdunningspercentage',
    unitDilution: '%',
    resultBadge: 'Verfberekening',
    labelPaint: 'Liters verf',
    labelPaintGal: 'Gallons verf',
    labelCost: 'Totale kosten',
    labelWater: 'Verdunningsvloeistof',
    labelWaterGal: 'Verdunningsvloeistof',
    labelTotalVolume: 'Totale mengsel',
    labelTotalVolumeGal: 'Totale mengsel',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '€',
  },
};
