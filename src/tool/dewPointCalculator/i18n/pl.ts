import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'punkt-rosy';
const title = 'Kalkulator Punktu Rosy';
const description = 'Oblicz temperaturę kondensacji na swoich ścianach, wykorzystując wilgotność i temperaturę otoczenia. Niezbędne narzędzie w zapobieganiu wilgoci i ochronie konstrukcji domu.';

const faqData = [
  {
    question: 'Czym dokładnie jest punkt rosy?',
    answer: 'To temperatura, do której należy ochłodzić powietrze, aby zawarta w nim para wodna skropliła się (zamieniła w wodę). Im wyższa wilgotność względna, tym punkt rosy jest bliższy aktualnej temperaturze.',
  },
  {
    question: 'Dlaczego w rogach mojego domu pojawia się pleśń?',
    answer: 'Rogi pomieszczeń to często mostki termiczne, gdzie ściana jest chłodniejsza. Jeśli temperatura tej powierzchni spadnie poniżej punktu rosy, powstaje skroplona woda. Pleśń potrzebuje tej stałej wilgoci do wzrostu.',
  },
  {
    question: 'Jak mogę obniżyć wilgotność w domu?',
    answer: 'Najskuteczniejszym sposobem jest wentylacja (zwłaszcza po kąpieli lub gotowaniu) oraz stosowanie osuszaczy powietrza. Utrzymywanie stałej temperatury również pomaga, gdyż ciepłe powietrze może pomieścić więcej pary bez kondensacji.',
  },
  {
    question: 'Czy pleśń z kondensacji jest niebezpieczna?',
    answer: 'Tak. Pleśń uwalnia zarodniki, które mogą powodować problemy z oddychaniem, alergie i astmę. Wykrycie ryzyka kondensacji za pomocą tego kalkulatora to pierwszy krok do zdrowego domu.',
  },
];

const howToData = [
  {
    name: 'Zmierz temperaturę i wilgotność',
    text: 'Użyj termometru i higrometru, aby poznać aktualne wartości w pomieszczeniu.',
  },
  {
    name: 'Wprowadź wartości',
    text: 'Ustaw temperaturę w stopniach Celsjusza i procent wilgotności w kalkulatorze.',
  },
  {
    name: 'Uzyskaj temperaturę krytyczną',
    text: 'Narzędzie powie Ci dokładnie, przy jakiej temperaturze powierzchni woda zacznie się skraplać.',
  },
  {
    name: 'Sprawdź powierzchnie',
    text: 'Jeśli masz termometr laserowy, zmierz temperaturę ścian. Jeśli jest równa lub niższa od wyniku, musisz przewietrzyć lub docieplić pomieszczenie.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Przybliżenie Magnusa dla Punktu Rosy',
      url: 'https://pl.wikipedia.org/wiki/Punkt_rosy',
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
      text: 'Czym jest Punkt Rosy i dlaczego ma znaczenie w Twoim domu?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Punkt rosy to temperatura, w której para wodna w powietrzu skrapla się. W domu wartość ta wyznacza granicę między zdrowym budynkiem a takim z problemami wilgotnościowymi. Gdy temperatura powierzchni spadnie poniżej punktu rosy, pojawiają się krople wody — idealne podłoże dla szkodliwych grzybów i pleśni.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Bezpieczny Margin', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Idealna Wilgotność', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Ekstremalne Ryzyko', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Wzór Magnusa Tetensa',
          description: 'Do obliczenia punktu rosy używamy przybliżenia Magnusa-Tetensa, zalecanego przez WMO dla temperatur od 0°C do 50°C.',
          icon: 'mdi:calculator',
          points: ['Potwierdzona naukowo precyzja', 'Idealny dla temperatur domowych'],
        },
        {
          title: 'Mostki Termiczne i Pleśń',
          description: 'Narożniki i ramy okienne to najzimniejsze punkty. Jeśli ich temperatura spadnie poniżej punktu rosy, pleśń jest nieunikniona.',
          icon: 'mdi:home-thermometer',
          points: ['Narożniki są najbardziej wrażliwe', 'Izolacja termiczna zapobiega skraplaniu'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Poziomy Ryzyka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Niskie Ryzyko (różnica &gt; 5°C):</strong> Ściany są bezpieczne. <strong>Średnie Ryzyko (3–5°C):</strong> Obserwuj narożniki. <strong>Wysokie Ryzyko (1–3°C):</strong> Skraplanie na szybach — natychmiast przewietrz. <strong>Ekstremalne Ryzyko (&lt; 1°C):</strong> Aktywne skraplanie z ryzykiem czarnej pleśni.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Złota Zasada',
      icon: 'mdi:thermometer-alert',
      badge: 'Kluczowa Porada',
      html: '<p>Jeśli temperatura ściany jest mniejsza niż <strong>3°C od punktu rosy</strong>, masz ryzyko kondensacji. Wietrz pomieszczenia i trzymaj wilgotność między 40% a 60%.</p>',
    },
    {
      type: 'summary',
      title: 'Jak zapobiegać skraplaniu',
      items: [
        'Wietrz codziennie, zwłaszcza po prysznicu lub gotowaniu.',
        'Utrzymuj wilgotność względną między 40% a 60%.',
        'Używaj okapu kuchennego podczas gotowania.',
        'Unikaj suszenia ubrań wewnątrz bez odpowiedniej wentylacji.',
        'Ociepl ściany, aby uniknąć zimnych powierzchni.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Temperatura Otoczenia',
    labelHumidity: 'Wilgotność Względna',
    labelDewPoint: 'Punkt Rosy',
    riskLow: 'Niskie Ryzyko',
    riskMedium: 'Średnie Ryzyko',
    riskHigh: 'Wysokie Ryzyko',
    riskExtreme: 'Ekstremalne Ryzyko',
    riskLowDesc: 'Różnica > 5°C. Ściany bezpieczne.',
    riskMediumDesc: 'Różnica 3–5°C. Sprawdź rogi.',
    riskHighDesc: 'Różnica 1–3°C. Przewietrz teraz.',
    riskExtremeDesc: 'Różnica < 1°C. Aktywne skraplanie.',
  },
};
