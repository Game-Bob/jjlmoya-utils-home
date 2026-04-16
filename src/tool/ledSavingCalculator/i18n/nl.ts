import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'led-besparingscalculator';
const title = 'LED Besparingscalculator';
const description =
  'Bereken hoeveel geld en kWh u bespaart door uw traditionele lampen te vervangen door LED. Ontdek uw exacte jaarlijkse en maandelijkse besparing en CO2-reductie.';

const faqData = [
  {
    question: 'Hoeveel bespaart een LED-lamp echt?',
    answer:
      'Een LED-lamp bespaart tussen de 80% und 90% energie vergeleken met een gloeilamp. Van 60W naar 9W gaan verlaagt het verbruik tot een minimum, terwijl de helderheid gelijk blijft.',
  },
  {
    question: 'Hoe snel verdient de overstap naar LED zich terug?',
    answer:
      'Door de lage prijs van LED en de grote besparing, is de investering vaak binnen 4 maanden terugverdiend bij normaal gebruik. Bij lampen die veel branden, gaat dit nog sneller.',
  },
  {
    question: 'Wat gebeurt er als ik een LED-lamp met meer watt gebruik?',
    answer:
      'LED-lampen geven weinig hitte af. U kunt dus fellere LED-lampen gebruiken in armaturen die voorheen beperkt waren door de warmte van gloeilampen, mits u binnen de elektrische grenzen van de fitting blijft.',
  },
  {
    question: 'Gaan ze echt zo lang mee als op de doos staat?',
    answer:
      'Kwaliteits-LEDs gaan 15.000 tot 50.000 uur mee. Bij een gemiddeld gebruik van 4 uur per dag betekent dit dat een lamp meer dan 15 jaar mee kan gaan.',
  },
  {
    question: 'Kan ik LED-lampen gebruiken met een dimmer?',
    answer:
      'Alleen als op de lamp staat dat deze "Dimbaar" is. Standaard LED-lampen werken vaak niet goed met oude dimmers.',
  },
  {
    question: 'Moet de hele lamp vervangen worden?',
    answer:
      'In 99% van de gevallen niet. U vervangt alleen de lichtbron door een LED met dezelfde fitting (E27, E14, GU10, etc.).',
  },
];

const howToData = [
  {
    name: 'Tel uw lichtpunten',
    text: 'Kijk hoeveel gloei- of halogeenlampen u heeft en noteer het wattage.',
  },
  {
    name: 'Kies het LED-alternatief',
    text: 'Selecteer uw huidige lamp in de calculator. De LED-equivalenten worden automatisch berekend.',
  },
  {
    name: 'Stel de gebruiksuren in',
    text: 'Geef aan hoeveel uur per dag de lampen gemiddeld branden.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'Energiebesparing — Milieu Centraal',
      url: 'https://www.milieucentraal.nl/',
    },
    {
      name: 'Energielabels voor lampen — Europese Unie',
      url: 'https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/energy-label-and-ecodesign/energy-efficient-products_nl',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Gids voor LED-besparingen: Verlaag uw energierekening',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De overstap naar <strong>LED-technologie (Light Emitting Diode)</strong> is een van de snelste manieren om thuis geld te besparen. Elke watt die u bespaart, ziet u direct terug op uw rekening. Een 9W LED-lamp geeft evenveel licht als een 60W gloeilamp met <strong>85% minder verbruik</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Energiebesparing', icon: 'mdi:lightning-bolt' },
        { value: '25.000u', label: 'Levensduur LED', icon: 'mdi:clock-outline' },
        { value: '< 4 mnd', label: 'Terugverdientijd', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Gloeilampverlichting',
          description: 'Technologie uit de 20e eeuw op basis van warmte. 95% van de energie gaat verloren als hitte.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% energieverlies als warmte', 'Levensduur: 1.000 uur', 'Hoge gebruikskosten'],
        },
        {
          title: 'Moderne LED techniek',
          description: 'De huidige standaard voor efficiëntie. Direct licht en minimale warmteafgifte.',
          icon: 'mdi:led-outline',
          points: ['85–90% directe besparing', 'Levensduur: tot 50.000 uur', 'Nauwelijks warmte'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'De wetenschap achter de besparing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gloeilampen zetten slechts 5% van de energie om in licht. LEDs gebruiken halfgeleiders voor een veel hogere efficiëntie. <strong>Kijk niet naar watt, maar naar lumen:</strong> een oude 60W lamp geeft ca. 800 lm; dat haalt u nu met een 8-9W LED.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle Vergelijkingstabel',
      icon: 'mdi:table',
      badge: 'Naslag',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W gloeilamp</strong> → LED 5–6W (450 lm)</li><li><strong>60W gloeilamp</strong> → LED 8–10W (800 lm)</li><li><strong>100W gloeilamp</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halogeen</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Voordelen van LED naast geld',
      items: [
        'Extreem lange levensduur: tot wel 15 jaar.',
        'Direct 100% helderheid na het inschakelen.',
        'Wordt niet heet: veiliger en minder koeling nodig in de zomer.',
        'Geen kwik, beter voor het milieu.',
        'Past in bijna alle bestaande fittingen (E27, E14, GU10).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Huisconfiguratie',
    labelBulbs: 'Aantal lampen vervangen',
    unitBulbs: 'stuks',
    labelType: 'Huidige lampsoort',
    labelHours: 'Branduren per dag',
    labelPrice: 'Elektriciteitsprijs',
    unitPrice: '€/kWh',
    resultBadge: 'Besparingsberekening',
    labelAnnual: 'Jaarlijkse besparing',
    labelMonthly: 'Per maand',
    labelEfficiency: 'Efficiëntie',
    labelCo2: 'Minder CO2-uitstoot',
    unitLess: '% minder',
    currencySign: '€',
    btnInc60Title: 'Gloeilamp',
    btnInc60Sub: 'Klassiek (60W)',
    btnInc40Title: 'Gloeilamp',
    btnInc40Sub: 'Klein (40W)',
    btnInc100Title: 'Gloeilamp',
    btnInc100Sub: 'Groot (100W)',
    btnHalo50Title: 'Halogeen',
    btnHalo50Sub: 'Spot (50W)',
    usageNever: 'Bijna nooit',
    usageLow: 'Weinig gebruik',
    usageNormal: 'Normaal gebruik',
    usageModerate: 'Gemiddeld gebruik',
    usageHeavy: 'Veel gebruik',
    usagePro: 'Intensief gebruik',
    usageVeryHeavy: 'Heel intensief',
    usageAlways: 'Brandt altijd',
  },
};
