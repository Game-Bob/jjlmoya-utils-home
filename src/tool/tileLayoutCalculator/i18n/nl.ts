import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tegel-layout-calculator';
const title = 'Tegellayout en Snijverliescalculator';
const description =
  'Plan de vloer van je ruimte met millimeterprecisie. Bereken het exacte aantal tegels, benodigde dozen, totale kosten en visualiseer de layout in realtime met een interactief rasteroverzicht.';

const faqData = [
  {
    question: 'Hoe bereken ik hoeveel tegels ik nodig heb voor een ruimte?',
    answer:
      'Meet de breedte en lengte van de ruimte, kies de tegelafmeting en voer de voegbreedte in. De calculator deelt de ruimteafmetingen door de tegel plus voeg om het exacte aantal tegels per rij en kolom te geven.',
  },
  {
    question: 'Welk snijverliespercentage moet ik toevoegen bij de aankoop van tegels?',
    answer:
      'Voeg voor standaard rechthoekige ruimtes 10% snijverlies toe. Bij ruimtes met veel hoeken, diagonale patronen of complexe sneden verhoog je dit naar 15%. Dit dekt breuk en snijfouten.',
  },
  {
    question: 'Beïnvloedt de voegdikte echt het aantal tegels?',
    answer:
      'Ja. Breedere voegen verkleinen het effectieve bereik van elke tegel, waardoor het totale aantal licht stijgt. De calculator houdt hier automatisch rekening mee in elke rij en kolom.',
  },
  {
    question: 'Moet ik extra dozen kopen boven het snijverliespercentage?',
    answer:
      'Het is verstandig om een extra doos te kopen als deze beschikbaar is. Kleurbatches kunnen verschillen tussen productieruns, en passende reserve-exemplaren maken toekomstig herstel eenvoudiger.',
  },
  {
    question: 'Hoe tegel ik een ruimte met een onregelmatige vorm?',
    answer:
      'Splits de ruimte op in kleinere rechthoeken. Bereken elk gedeelte apart en tel de totalen op. Rond gedeeltelijke dozen altijd naar boven af voor volledige dekking.',
  },
  {
    question: 'Wat is het verschil in snijverlies tussen keramiek en porselein?',
    answer:
      'Porselein is dichter en moeilijker te snijden, waardoor het snijverlies 2% tot 3% hoger kan liggen dan bij standaard keramiek. Beide materialen volgen hetzelfde meetproces.',
  },
  {
    question: 'Kan ik ongebruikte tegeldoosjes retourneren?',
    answer:
      'De meeste retailers accepteren ongeopende dozen binnen 30 dagen. Bewaar altijd de bon en open overtollige dozen pas als de installatie volledig is afgerond.',
  },
];

const howToData = [
  {
    name: 'Meet de ruimte',
    text: 'Noteer de breedte en lengte van de vloer in je voorkeurseenheden.',
  },
  {
    name: 'Selecteer tegel en voeg',
    text: 'Kies je tegelafmetingen en de gewenste voegbreedte.',
  },
  {
    name: 'Bereken en visualiseer',
    text: 'Voer de waarden in de calculator in, pas het snijverliespercentage aan en bekijk het live layout-overzicht.',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Complete Gids voor Tegelvloerplanning en Snijverliesbeheersing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een succesvol tegelproject begint lang voordat de eerste lijm wordt aangebracht. Nauwkeurig meten, intelligent layoutplanning en exacte snijverliesinschatting bepalen of je renovatie binnen budget en planning blijft. <strong>Onze interactieve tegel-layoutcalculator</strong> transformeert ruwe afmetingen in een visueel vloerplan, dat precies laat zien hoeveel tegels er per rij passen, hoeveel dozen je nodig hebt en waar je geld naartoe gaat.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Standaard snijverlies', icon: 'mdi:alert-circle' },
        { value: '30+ jaar', label: 'Tegellevensduur', icon: 'mdi:clock-outline' },
        { value: '48u', label: 'Gem. installatie', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Grote Formaat Tegels',
          description: 'Tegels groter dan 60 cm creëren een naadloos, modern uiterlijk, maar vereisen perfect vlakke ondergronden en genereren meer snijverlies in kleine ruimtes.',
          icon: 'mdi:arrow-expand',
          points: ['Minder voegen', 'Premium visueel effect', 'Hoger snijverlies in krappe ruimtes'],
        },
        {
          title: 'Kleine Mozaïektegels',
          description: 'Ideaal voor badkamers en ingewikkelde patronen. Ze passen zich aan onregelmatige vormen aan, maar vereisen meer voeg en arbeidstijd.',
          icon: 'mdi:apps',
          points: ['Flexibel rond obstakels', 'Meer voeg vereist', 'Langere installatietijd'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Waarom Layoutvisualisatie Belangrijk Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het zien van je tegelraster voor aankoop voorkomt kostbare verrassingen. Een live preview onthult of je gekozen tegelafmeting onhandige smalle stroken aan de randen achterlaat of een evenwichtige, symmetrische vloer creëert. Door de voegbreedte en tegeloriëntatie in de calculator aan te passen, optimaliseer je de layout voor esthetiek en efficiëntie voordat je bestelt.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle Dekkingstabel',
      icon: 'mdi:table',
      badge: 'Referentie',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 tegels per m²</li><li><strong>45 x 45 cm</strong> → 5 tegels per m²</li><li><strong>60 x 60 cm</strong> → 3 tegels per m²</li><li><strong>60 x 120 cm</strong> → 1,5 tegels per m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Protips om Snijverlies te Minimaliseren',
      items: [
        'Bestel 10% extra voor rechte patronen en 15% voor diagonaal of visgraat.',
        'Bewaar alle dozen uit dezelfde productiebatch voor kleurconsistentie.',
        'Meet diagonaal door de ruimte om de rechthoekigheid te controleren voordat je rijen plant.',
        'Gebruik grote formaten alleen in ruimtes die breder zijn dan de tegellengte om overmatig snijden te vermijden.',
        'Rond het aantal dozen altijd naar boven af; dat is goedkoper dan een tweede bezorging.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Ruimteconfiguratie',
    labelRoomWidth: 'Ruimtebreedte',
    labelRoomLength: 'Ruimtelengte',
    labelTileWidth: 'Tegelbreedte',
    labelTileLength: 'Tegellengte',
    labelGrout: 'Voegbreedte',
    labelWaste: 'Snijverliesmarge',
    labelTilesPerBox: 'Tegels per doos',
    labelPrice: 'Prijs per doos',
    labelPattern: 'Tegelpatroon',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'st',
    unitPrice: '/doos',
    resultBadge: 'Live layout-overzicht',
    labelArea: 'Vloeroppervlak',
    labelTiles: 'Totaal tegels',
    labelBoxes: 'Dozen nodig',
    labelCost: 'Totale kosten',
    labelWasteCount: 'Snijverlies-tegels',
    labelCuts: 'Deelsneden',
    currency: 'EUR',
    btnMetric: 'Metrisch',
    btnImperial: 'Imperiaal',
    btnPatternStraight: 'Recht',
    btnPatternBrick: 'Halfsteens',
    btnPatternDiagonal: 'Diagonaal',
    badgeOptimal: 'Optimale layout',
    badgeWarning: 'Hoog snijverlies',
    visualTitle: 'Layout overzicht',
  },
};
