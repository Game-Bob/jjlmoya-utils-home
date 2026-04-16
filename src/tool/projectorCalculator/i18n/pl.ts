import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'kalkulator-odleglosci-projektora';
const title = 'Kalkulator Odległości Projektora — Rzut i Ekran';
const description =
  'Oblicz dokładną odległość montażu projektora w zależności od rozmiaru ekranu i współczynnika rzutu (Throw Ratio).';

const faqData = [
  {
    question: 'Co to jest Throw Ratio (współczynnik rzutu)?',
    answer:
      'To liczba określająca, jak duży obraz powstanie z danej odległości. Oblicza się go, dzieląc odległość od ekranu przez szerokość obrazu. Współczynnik 1.5 oznacza, że z 1.5m otrzymasz 1m szerokości obrazu.',
  },
  {
    question: 'Jaka odległość jest potrzebna dla ekranu 100 cali?',
    answer:
      'Zależy to od współczynnika rzutu projektora. Przy standardowym 1.5:1 potrzeba ok. 3.3m. Projektory krótkoogniskowe (Short Throw) osiągają to z odległości poniżej 1m.',
  },
  {
    question: 'Jaka jest różnica między 16:9 a 4:3?',
    answer:
      '16:9 to format panoramiczny dla nowoczesnych filmów. 4:3 to format klasyczny dla prezentacji i biur. Wybór właściwego formatu pozwala uniknąć czarnych pasów.',
  },
  {
    question: 'Czy wysokość montażu ma znaczenie?',
    answer:
      'Tak. Projektory mają tzw. offset lub korekcję keystone. Najlepiej montować go centralnie względem górnej lub dolnej krawędzi ekranu, by uniknąć deformacji.',
  },
];

const howToData = [
  {
    name: 'Sprawdź Throw Ratio',
    text: 'Znajdź w instrukcji lub na pudełku wartość taką jak 1.2:1 lub 1.5-1.8:1.',
  },
  {
    name: 'Podaj rozmiar ekranu',
    text: 'Wpisz przekątną w calach lub dostępną szerokość ściany.',
  },
  {
    name: 'Wybierz format',
    text: 'Wybierz 16:9 dla filmów, 4:3 dla biura lub 21:9 dla kina panoramicznego.',
  },
  {
    name: 'Odczytaj dystans',
    text: 'Kalkulator poda dokładną odległość dla Twojego uchwytu.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'Projector Central — Throw Distance Calculator', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Epson — Instrukcje Projekcji', url: 'https://epson.com/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Opanuj Geometrię Projekcji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Montaż projektora "na oko" może popsuć seans. Za blisko — obraz za mały, za daleko — stracisz jasność. Kluczem jest <strong>Throw Ratio</strong>, który precyzyjnie określa relację odległości do obrazu.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Wzór na dystans', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Co to jest Throw Ratio?',
          description: 'To stosunek odległości do szerokości obrazu. TR 1.5 oznacza 1.5m dystansu na każdy metr szerokości ekranu.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, do małych pokoi', 'TR 1–2: Standard do salonu', 'TR > 2: Long Throw, do dużych sal'],
        },
        {
          title: 'Format (Aspect Ratio)',
          description: 'Format określa proporcje. Błędny wybór powoduje czarne pasy i mniejszą jasność.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: standard HD/4K domowy', '21:9: kinowy format panoramiczny', '4:3: format biurowy'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Profesjonalna Instalacja',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Jeśli projektor ma Lens Shift, używaj go zamiast cyfrowego Keystone. Keystone pogarsza rozdzielczość.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Światło w Pokoju',
      icon: 'mdi:lightbulb-on',
      badge: 'Porada Eksperta',
      html: '<p>W jasnych pokojach użyj ekranu z wyższym zyskiem (gain), by poprawić kontrast.</p>',
    },
    {
      type: 'summary',
      title: 'Checklista Montażu',
      items: [
        'Sprawdź Throw Ratio przed wyborem miejsca.',
        'Zmierz szerokość ściany pod kątem obrazu.',
        'Wypoziomuj projektor względem ekranu.',
        'Unikaj cyfrowego Keystone: ustaw prosto urządzenie.',
        'Zlikwiduj źródła światła padające na ekran.',
      ],
    },
  ],
  ui: {
    configTitle: 'Konfiguracja',
    configSubtitle: 'Zdefiniuj ekran i projektor',
    labelDiagonal: 'Przekątna Ekranu',
    labelDiagonalUnit: 'Cale (")',
    labelFormat: 'Format Obrazu',
    labelThrowRatio: 'Współczynnik Rzutu (Throw Ratio)',
    throwRatioHint: 'Przykładowo: 1.50 oznacza 1.5m dystansu na 1m szerokości ekranu.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Kino',
    ratio43Sub: 'Biuro',
    labelWidth: 'Szerokość Ekranu',
    labelHeight: 'Wysokość Ekranu',
    labelDistance: 'Wymagana Odległość',
    simulationBadge: 'Symulacja w Czasie Rzeczywistym',
  },
};
