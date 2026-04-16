import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'daggpunkt-raknare';
const title = 'Daggpunktsräknare';
const description = 'Beräkna kondenstemperaturen på dina väggar baserat på luftfuktighet och rumstemperatur. Ett viktigt verktyg för att förebygga fukt och skydda ditt hem.';

const faqData = [
  {
    question: 'Vad är daggpunkt egentligen?',
    answer: 'Daggpunkten är den temperatur till vilken luft måste kylas för att vattenångan i den ska kondensera till flytande vatten. Ju högre den relativa luftfuktigheten är, desto närmare ligger daggpunkten den aktuella temperaturen.',
  },
  {
    question: 'Varför uppstår mögel i hörnen av mitt hus?',
    answer: 'Hörn är ofta köldbryggor där väggen är kallare. Om temperaturen på den ytan faller under daggpunkten bildas kondensvatten. Mögel behöver denna konstanta fukt för att växa.',
  },
  {
    question: 'Hur kan jag sänka luftfuktigheten hemma?',
    answer: 'Det mest effektiva sättet är att ventilera (särskilt efter dusch eller matlagning) och använda avfuktare. Att hålla en jämn temperatur hjälper också luften att hålla kvar mer ånga utan att den kondenserar.',
  },
  {
    question: 'Är mögel från kondens farligt?',
    answer: 'Ja. Mögel frigör sporer som kan orsaka andningsproblem, allergier och astma. Att upptäcka kondensrisk med denna räknare är första steget mot ett hälsosamt hem.',
  },
];

const howToData = [
  {
    name: 'Mät temperatur och fuktighet',
    text: 'Använd en termometer och hygrometer för att mäta de nuvarande värdena i rummet.',
  },
  {
    name: 'Ange värden',
    text: 'Ställ in temperaturen i Celsius och luftfuktigheten i procent i räknaren.',
  },
  {
    name: 'Se kritisk temperatur',
    text: 'Verktyget berättar exakt vid vilken yttemperatur vatten börjar kondensera.',
  },
  {
    name: 'Kontrollera ytor',
    text: 'Använd en infraröd termometer för att mäta väggarnas temperatur. Är den under daggpunkten behöver du ventilera eller isolera.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'Magnus approximation för daggpunkt',
      url: 'https://sv.wikipedia.org/wiki/Daggpunkt',
    },
    {
      name: 'WMO Guide to Meteorological Instruments',
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vad är daggpunkt och varför spelar det roll i ditt hem?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Daggpunkten är den temperatur där vattenånga i luften blir flytande. I hemmet markerar detta gränsen mellan ett hälsosamt hus och ett med fuktproblem. När yttemperaturen på en vägg faller under daggpunkten uppstår kondens — en perfekt grogrund för mögel.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Säker Marginal', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Ideal Fuktighet', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Hög Risk', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Magnus Tetens formel',
          description: 'Vi använder Magnus-Tetens approximation, som rekommenderas av WMO för temperaturer mellan 0°C och 50°C.',
          icon: 'mdi:calculator',
          points: ['Vetenskapligt validerad precision', 'Idealisk för inomhusklimat'],
        },
        {
          title: 'Köldbryggor och mögel',
          description: 'Hörn och fönsterkarmar är ofta kalla punkter. Om deras temperatur faller under daggpunkten är mögel oundvikligt.',
          icon: 'mdi:home-thermometer',
          points: ['Hörn är mest utsatta', 'Isolering förebygger kondens'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Risknivåer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Låg risk (diff &gt; 5°C):</strong> Dina väggar är säkra. <strong>Medelrisk (3–5°C):</strong> Håll koll på hörn. <strong>Hög risk (1–3°C):</strong> Kondens på rutor trolig — ventilera direkt. <strong>Fara (&lt; 1°C):</strong> Aktiv kondens med risk för svartmögel.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gyllene regeln',
      icon: 'mdi:thermometer-alert',
      badge: 'Viktigt råd',
      html: '<p>Om väggtemperaturen är mindre än <strong>3°C från daggpunkten</strong> har du en akut risk för kondens. Ventilera mer och håll fuktigheten mellan 40 % och 60 %.</p>',
    },
    {
      type: 'summary',
      title: 'Så förebygger du kondens',
      items: [
        'Vädra dagligen, särskilt efter dusch och matlagning.',
        'Håll den relativa luftfuktigheten mellan 40 % och 60 %.',
        'Använd köksfläkt vid matlagning.',
        'Torka inte tvätt inomhus utan god ventilation.',
        'Isolera väggar för att slippa kalla ytor.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Rumstemperatur',
    labelHumidity: 'Relativ fuktighet',
    labelDewPoint: 'Daggpunkt',
    riskLow: 'Låg risk',
    riskMedium: 'Medelrisk',
    riskHigh: 'Hög risk',
    riskExtreme: 'Fara',
    riskLowDesc: 'Differens > 5°C. Ytorna är säkra.',
    riskMediumDesc: 'Differens 3–5°C. Kolla hörnen.',
    riskHighDesc: 'Differens 1–3°C. Ventilera genast.',
    riskExtremeDesc: 'Differens < 1°C. Aktiv kondensation.',
  },
};
