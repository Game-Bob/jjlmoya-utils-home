import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'led-besparingskalkylator';
const title = 'LED Besparingskalkylator';
const description =
  'Beräkna hur mycket pengar och kWh du sparar genom att byta ut dina traditionella glödlampor till LED. Se din exakta årliga besparing och CO2-minskning.';

const faqData = [
  {
    question: 'Hur mycket sparar en LED-lampa egentligen?',
    answer:
      'En LED-lampa sparar mellan 80 % och 90 % energi jämfört med en glödlampa. Att gå från 60W till 9W minskar elkostnaden för den lampan till ett minimum med bibehållen ljusstyrka.',
  },
  {
    question: 'Hur snabbt tjänar man in bytet till LED?',
    answer:
      'Tack vare det låga priset på LED idag och den stora besparingen tjänas investeringen oftast in på mindre än 4 månader vid normal användning.',
  },
  {
    question: 'Vad händer om jag sätter i en LED-lampa med högre watt?',
    answer:
      'LED-lampor genererar väldigt lite värme. Du kan därför sätta i lampor med högre lumenvärde i armaturer som tidigare begränsades av värmen från glödlampor, så länge sockelns elektriska gränser hålls.',
  },
  {
    question: 'Håller de verkligen så länge som det står på förpackningen?',
    answer:
      'En LED-lampa av god kvalitet håller mellan 15 000 och 50 000 timmar. Vid normal hemmanvändning på 4h per dag innebär det över 15 års livslängd.',
  },
  {
    question: 'Kan jag använda LED i lampor med dimmer?',
    answer:
      'Endast om lampan är märkt som "Dimbar". Standard-LED fungerar inte bra med gamla dimmers och kan flimra eller surra.',
  },
  {
    question: 'Måste jag byta hela lampan?',
    answer:
      'I 99 % av fallen, nej. Du byter bara ut själva glödlampan mot en LED med samma sockel (E27, E14, GU10 etc.).',
  },
];

const howToData = [
  {
    name: 'Räkna dina ljuspunkter',
    text: 'Se över hur många glöd- eller halogenlampor du har hemma och notera deras wattstyrka.',
  },
  {
    name: 'Välj motsvarande LED',
    text: 'Välj din nuvarande lamptyp i kalkylatorn. Motsvarande LED-värden tilldelas automatiskt.',
  },
  {
    name: 'Ställ in användningstimmar',
    text: 'Ange hur många timmar per dag lamporna i genomsnitt är tända.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'Energimyndigheten — Belysning',
      url: 'https://www.energimyndigheten.se/',
    },
    {
      name: 'EU:s energimärkning för lampor',
      url: 'https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/energy-label-and-ecodesign/energy-efficient-products_sv',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'LED-guide: Så minskar du din elräkning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att byta till <strong>LED-teknik (Light Emitting Diode)</strong> är en av de snabbaste sätten att spara pengar i hemmet. Varje watt du sparar syns direkt på din faktura. En 9W LED ger samma ljus som en 60W glödlampa men med <strong>85 % lägre förbrukning</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Energibesparing', icon: 'mdi:lightning-bolt' },
        { value: '25.000h', label: 'Livslängd LED', icon: 'mdi:clock-outline' },
        { value: '< 4 mån', label: 'Återbetalning', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Glödljusbelysning',
          description: 'Ljus baserat på upphettning. 95 % av energin går förlorad som värme.',
          icon: 'mdi:lightbulb-outline',
          points: ['95 % värmeutveckling', 'Livslängd: 1 000 timmar', 'Höga driftskostnader'],
        },
        {
          title: 'Modern LED teknik',
          description: 'Nuvarande standard för effektivitet. Tänds direkt och minimal värmeavgivning.',
          icon: 'mdi:led-outline',
          points: ['85–90 % direkt besparing', 'Livslängd: upp till 50 000 timmar', 'Minimal värme'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Fysiken bakom besparingen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En glödlampa omvandlar bara 5 % av energin till ljus. LED använder halvledare för en mycket högre effektivitet. <strong>Titta inte på watt, titta på lumen:</strong> en gammal 60W lampa ger ca 800 lm; idag får du det från en 8-9W LED.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabbguide för utbyte',
      icon: 'mdi:table',
      badge: 'Referens',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W glödlampa</strong> → LED 5–6W (450 lm)</li><li><strong>60W glödlampa</strong> → LED 8–10W (800 lm)</li><li><strong>100W glödlampa</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halogen</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Fördelar med LED utöver pengar',
      items: [
        'Extrem livslängd: håller i över 15 år.',
        'Full ljusstyrka direkt vid start.',
        'Svalare hem: minskar belastningen på AC under sommaren.',
        'Miljövänligt: inget kvicksilver eller giftiga gaser.',
        'Passar i nästan alla befintliga socklar (E27, E14, GU10).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Hemkonfiguration',
    labelBulbs: 'Lampor att byta ut',
    unitBulbs: 'st',
    labelType: 'Nuvarande lamptyp',
    labelHours: 'Timmar tända per dag',
    labelPrice: 'Elpris',
    unitPrice: 'kr/kWh',
    resultBadge: 'Beräkning av besparing',
    labelAnnual: 'Du sparar per år',
    labelMonthly: 'Månadsvis',
    labelEfficiency: 'Effektivitet',
    labelCo2: 'Minskad CO₂-påverkan',
    unitLess: '% lägre',
    currencySign: 'kr',
    btnInc60Title: 'Glödlampa',
    btnInc60Sub: 'Klassisk (60W)',
    btnInc40Title: 'Glödlampa',
    btnInc40Sub: 'Liten (40W)',
    btnInc100Title: 'Glödlampa',
    btnInc100Sub: 'Stor (100W)',
    btnHalo50Title: 'Halogen',
    btnHalo50Sub: 'Spotlight (50W)',
    usageNever: 'Nästan aldrig',
    usageLow: 'Lite användning',
    usageNormal: 'Normal användning',
    usageModerate: 'Medelanvändning',
    usageHeavy: 'Mycket användning',
    usagePro: 'Professionell användning',
    usageVeryHeavy: 'Väldigt mycket',
    usageAlways: 'Alltid tänd',
  },
};
