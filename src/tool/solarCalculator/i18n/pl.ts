import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';

const slug = 'kalkulator-solar';
const title = 'Kalkulator Nachylenia Paneli Słonecznych';
const description =
  'Oblicz optymalny kąt nachylenia paneli słonecznych na podstawie Twojej szerokości geograficznej. Wyniki dla instalacji stałych i okresowych.';

const faqData = [
  {
    question: 'Co jeśli mój dach nie ma idealnego nachylenia?',
    answer:
      'To nie problem. Straty przy odchyleniu o 5-10° są mniejsze niż 3% produkcji rocznej. Ważniejsze jest unikanie cienia niż walka o każdy stopień kąta.',
  },
  {
    question: 'Czy optymalny kąt jest taki sam na całym świecie?',
    answer:
      'Nie. Zależy od szerokości geograficznej. W Polsce (~52°N) kąt jest inny niż w Hiszpanii (~40°N) czy Australii.',
  },
  {
    question: 'W którą stronę powinny patrzeć panele?',
    answer:
      'Na półkuli północnej zawsze na południe (azymut 180°). Na południowej — na północ.',
  },
];

const howToData = [
  {
    name: 'Wpisz szerokość geograficzną',
    text: 'Podaj szerokość w stopniach lub użyj przycisku auto-lokalizacji.',
  },
  {
    name: 'Sprawdź kąt optymalny',
    text: 'Kąt roczny to podstawa dla instalacji montowanych na stałe.',
  },
  {
    name: 'Regulacja sezonowa (opcjonalnie)',
    text: 'Jeśli masz regulowany stelaż, użyj kątów zimowych i letnich dla max. zysków.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SolarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'PVGIS — Europejskie narzędzie solarne', url: 'https://re.jrc.ec.europa.eu/pvgis/' },
    { name: 'PVWatts Calculator', url: 'https://pvwatts.nrel.gov/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Nauka o Nachyleniu Słonecznym',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Efektywność paneli zależy od tego, jak prostopadle padają na nie promienie słońca. Poznaj geometrię słońca dla swojej lokalizacji.',
    },
    {
      type: 'summary',
      title: 'Klucze do wydajnej instalacji',
      items: [
        'Kąt roczny to główny punkt odniesienia.',
        'Małe odchylenia ±5° nie psują produkcji.',
        'Unikanie cienia jest absolutnie priorytetowe.',
        'Orientacja na Południe (półkula płn.).',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Szerokość Geograficzna',
    btnLocate: 'Wykryj moją lokalizację',
    labelOptimal: 'Kąt Optymalny Roczny',
    labelEfficiency: 'Maks. Efektywność',
    labelWinter: 'Zima',
    labelSummer: 'Lato',
    hemisphereNorth: 'Półkula Północna — Kieruj na POŁUDNIE',
    hemisphereSouth: 'Półkula Południowa — Kieruj na PÓŁNOC',
    geoNotAvailable: 'Lokalizacja niedostępna w tej przeglądarce.',
  },
};
