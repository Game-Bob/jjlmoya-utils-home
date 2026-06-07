import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-mocy-klimatyzatora';
const title = 'Kalkulator Mocy i Tonażu Klimatyzatora';
const description =
  'Oblicz dokładny rozmiar klimatyzatora dla swojego pokoju w BTU, frigoriach i tonach. Podaj powierzchnię, wysokość sufitu, liczbę osób i źródła ciepła.';

const faqData = [
  { question: 'Ile BTU na metr kwadratowy?', answer: 'Standardowa podstawa to 600 BTU na metr kwadratowy dla sufitu 2,5 m w klimacie umiarkowanym. Wzrasta z wysokością, słońcem i osobami.' },
  { question: 'Co to jest frigoria?', answer: 'Frigoria to stara jednostka chłodzenia używana w Hiszpanii i Ameryce Łacińskiej. Jedna frigoria to około 3,968 BTU na godzinę.' },
  { question: 'Jak przeliczyć BTU na tony?', answer: 'Jedna tona chłodnicza to 12 000 BTU na godzinę. Podziel całkowitą liczbę BTU przez 12 000.' },
  { question: 'Czy wysokość sufitu ma znaczenie?', answer: 'Tak. Każdy metr powyżej 2,7 m zwiększa zapotrzebowanie na chłodzenie o około 8%.' },
];

const howToData = [
  { name: 'Zmież swój pokój', text: 'Zmież długość i szerokość w metrach i pomnóż, aby uzyskać powierzchnię.' },
  { name: 'Policz osoby i urządzenia', text: 'Dodaj liczbę osób i źródła ciepła, takie jak komputery i telewizory.' },
  { name: 'Wybierz nasłonecznienie', text: 'Wybierz lekkie, średnie lub silne w zależności od bezpośredniego światła słonecznego.' },
  { name: 'Odczytaj zalecenie', text: 'Kalkulator pokazuje BTU, frigorie i tony dla każdego rynku.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Jaki rozmiar klimatyzatora potrzebuję?', level: 2 },
    { type: 'paragraph', html: 'Właściwy rozmiar zależy od powierzchni, wysokości sufitu, liczby osób i słońca. Użyj tego kalkulatora, aby uzyskać dokładne BTU, frigorie i tony.' },
    { type: 'table', headers: ['Powierzchnia', 'Zalecane BTU', 'Tonaż', 'Typowe zastosowanie'], rows: [['10 m² (mała sypialnia)', '6 000 – 7 000 BTU', '0,5 – 0,75 t', 'Pokój gościnny'], ['15 m² (sypialnia)', '9 000 – 10 000 BTU', '0,75 – 1 t', 'Główna sypialnia'], ['20 m² (salon)', '12 000 – 14 000 BTU', '1 – 1,25 t', 'Mały salon'], ['30 m² (otwarta przestrzeń)', '18 000 – 21 000 BTU', '1,5 – 1,75 t', 'Studio'], ['40 m² (duży salon)', '24 000 – 28 000 BTU', '2 – 2,5 t', 'Duży salon + jadalnia']] },
    { type: 'title', text: 'Dlaczego zły rozmiar kosztuje', level: 2 },
    { type: 'paragraph', html: 'Zbyt mały klimatyzator pracuje bez przerwy, nigdy nie osiąga temperatury i przedwcześnie zużywa sprężarkę. Zbyt duży wydmuchuje krótkie podmuchy zimnego powietrza i pozostawia pomieszczenie wilgotne.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU na m² podstawa', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU na tonę', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU na frigorię', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Powierzchnia pokoju', labelRoomSizeFt: 'Powierzchnia', labelCeilingHeight: 'Wysokość sufitu', labelCeilingHeightFt: 'Wysokość',
    labelPeople: 'Osoby', labelHeatSources: 'Źródła ciepła', labelSunExposure: 'Nasłonecznienie', labelRoomType: 'Typ pokoju',
    labelCalculate: 'Oblicz', labelResult: 'Wynik', labelBtus: 'BTU/h', labelFrigorias: 'Frigorie', labelTons: 'Tony',
    labelRequired: 'Wymagane', labelRecommended: 'Zalecane', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'Frigorie', labelUnitTons: 'Tony',
    labelMetric: 'Metryczny', labelImperial: 'Imperialny', labelRoomCozy: 'Przytulnie', labelRoomWarm: 'Ciepło', labelRoomHot: 'Gorąco',
    bdBaseCooling: 'Chłodzenie podstawowe', bdCeilingHeight: 'Wysokość sufitu', bdPeople: 'Osoby', bdHeatSources: 'Źródła ciepła', bdSunRoom: 'Słońce i typ pokoju',
    sunLight: 'Lekkie', sunMedium: 'Średnie', sunHeavy: 'Silne',
    roomBedroom: 'Sypialnia', roomLiving: 'Salon', roomKitchen: 'Kuchnia', roomOffice: 'Biuro', roomServer: 'Serwerownia',
    errorRequired: 'Wypełnij wszystkie pola',
  },
};
