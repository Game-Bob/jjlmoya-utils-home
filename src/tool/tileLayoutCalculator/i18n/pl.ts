import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-ukladu-plytek';
const title = 'Kalkulator Układu i Odpadów Płytek';
const description =
  'Zaplanuj podłogę w pomieszczeniu z milimetrową precyzją. Oblicz dokładną liczbę płytek, potrzebne kartony, całkowity koszt i wizualizuj układ w czasie rzeczywistym dzięki interaktywnej podglądowi siatki.';

const faqData = [
  {
    question: 'Jak obliczyć, ile płytek potrzebuję do pomieszczenia?',
    answer:
      'Zmierz szerokość i długość pokoju, wybierz rozmiar płytki i podaj szerokość fugi. Kalkulator dzieli wymiary pomieszczenia przez płytkę plus fugę, aby uzyskać dokładną liczbę sztuk w rzędzie i kolumnie.',
  },
  {
    question: 'Jaki procent odpadów dodać przy zakupie płytek?',
    answer:
      'W standardowych prostokątnych pomieszczeniach dodaj 10% odpadów. W pokojach z wieloma narożnikami, układem na ukos lub skomplikowanymi cięciami zwiększ do 15%. To pokrywa uszkodzenia i błędy cięcia.',
  },
  {
    question: 'Czy grubość fugi naprawdę zmienia liczbę płytek?',
    answer:
      'Tak. Szersze fugi zmniejszają efektywną powierzchnię pokrycia każdej płytki, nieznacznie zwiększając całkowitą liczbę potrzebnych sztuk. Kalkulator uwzględnia to automatycznie w każdym rzędzie i kolumnie.',
  },
  {
    question: 'Czy kupić dodatkowe kartony poza procentem odpadów?',
    answer:
      'Warto nabyć jeden karton więcej, jeśli jest dostępny. Partie barwne mogą się różnić między produkcjami, a posiadanie dopasowanych zapasów ułatwia przyszłe naprawy.',
  },
  {
    question: 'Jak układać płytki w pomieszczeniu o nieregularnym kształcie?',
    answer:
      'Podziel pokój na mniejsze prostokąty. Oblicz każdy obszar osobno i zsumuj wyniki. Zawsze zaokrąglaj częściowe kartony w górę, aby zapewnić pełne pokrycie.',
  },
  {
    question: 'Jaka jest różnica w odpadach między ceramiką a gresem?',
    answer:
      'Gres jest gęstszy i trudniejszy do cięcia, co może zwiększyć odpady cięcia o 2-3% w porównaniu do standardowej ceramiki. Oba materiały wymagają tego samego procesu pomiarowego.',
  },
  {
    question: 'Czy można zwrócić nieużywane kartony płytek?',
    answer:
      'Większość sklepów przyjmuje nieotwarte kartony w ciągu 30 dni. Zawsze zachowaj paragon i nie otwieraj nadwyżek do czasu zakończenia całkowitego montażu.',
  },
];

const howToData = [
  {
    name: 'Zmierz pomieszczenie',
    text: 'Zapisz szerokość i długość powierzchni podłogi w preferowanym systemie jednostek.',
  },
  {
    name: 'Wybierz płytkę i fugę',
    text: 'Wybierz wymiary płytki oraz pożądaną szerokość fugi.',
  },
  {
    name: 'Oblicz i wizualizuj',
    text: 'Wprowadź wartości do kalkulatora, dostosuj margines odpadów i sprawdź podgląd układu na żywo.',
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
      text: 'Kompletny Przewodnik po Planowaniu Podłóg Płytek i Kontroli Odpadów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Udany projekt układania płytek zaczyna się na długo przed nałożeniem pierwszej warstwy kleju. Precyzyjny pomiar, inteligentne planowanie układu oraz dokładna estymacja odpadów decydują o tym, czy remont zmieści się w budżecie i terminie. <strong>Nasz interaktywny kalkulator układu płytek</strong> przekształca surowe wymiary w wizualny plan pokazujący dokładnie, ile płytek zmieści się w rzędzie, ile kartonów kupić i gdzie idą twoje pieniądze.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Standardowe odpady', icon: 'mdi:alert-circle' },
        { value: '30+ lat', label: 'Trwałość płytek', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Średni montaż', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Płytki Wielkoformatowe',
          description: 'Płytki powyżej 60 cm tworzą nowoczesny, bezszwowy wygląd, ale wymagają idealnie płaskich podłoży i generują więcej odpadów przy cięciu w małych pomieszczeniach.',
          icon: 'mdi:arrow-expand',
          points: ['Mniej fug', 'Premium efekt wizualny', 'Większe odpady w ciasnych przestrzeniach'],
        },
        {
          title: 'Małe Mozaiki',
          description: 'Idealne do łazienek i skomplikowanych wzorów. Dostosowują się do nieregularnych kształtów, ale wymagają więcej fugi i czasu pracy.',
          icon: 'mdi:apps',
          points: ['Elastyczność wokół przeszkód', 'Więcej fugi potrzebnej', 'Dłuższy czas montażu'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Dlaczego Wizualizacja Układu Jest Ważna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Widok siatki płytek przed zakupem pozwala uniknąć kosztownych niespodzianek. Podgląd na żywo ujawnia, czy wybrany rozmiar płytki pozostawi niezręczne wąskie paski na krawędziach, czy stworzy zrównoważoną, symetryczną podłogę. Dostosowując szerokość fugi i orientację płytki w kalkulatorze, możesz zoptymalizować układ pod kątem estetyki i wydajności przed złożeniem zamówienia.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybka Tabela Pokrycia',
      icon: 'mdi:table',
      badge: 'Referencja',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 płytek na m²</li><li><strong>45 x 45 cm</strong> → 5 płytek na m²</li><li><strong>60 x 60 cm</strong> → 3 płytki na m²</li><li><strong>60 x 120 cm</strong> → 1,5 płytki na m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Wskazówki Ekspertów jak Zminimalizować Odpady',
      items: [
        'Zamów 10% więcej przy układzie prostym i 15% na ukos lub w jodełkę.',
        'Przechowuj wszystkie kartony z tej samej partii produkcyjnej, aby zachować jednolitość koloru.',
        'Zmierz przekątną pomieszczenia, aby sprawdzić prostokątność przed planowaniem rzędów.',
        'Płytki wielkoformatowe stosuj tylko w pokojach szerszych niż długość płytki, aby uniknąć nadmiernych cięć.',
        'Zawsze zaokrąglaj liczbę kartonów w górę; to tańsze niż druga dostawa.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Konfiguracja pomieszczenia',
    labelRoomWidth: 'Szerokość pokoju',
    labelRoomLength: 'Długość pokoju',
    labelTileWidth: 'Szerokość płytki',
    labelTileLength: 'Długość płytki',
    labelGrout: 'Szerokość fugi',
    labelWaste: 'Margines odpadów',
    labelTilesPerBox: 'Płytek w kartonie',
    labelPrice: 'Cena za karton',
    labelPattern: 'Wzór układania',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'szt',
    unitPrice: '/karton',
    resultBadge: 'Podgląd na żywo',
    labelArea: 'Powierzchnia podłogi',
    labelTiles: 'Płytek razem',
    labelBoxes: 'Potrzebne kartony',
    labelCost: 'Koszt całkowity',
    labelWasteCount: 'Odpadowe płytki',
    labelCuts: 'Częściowe cięcia',
    currency: 'PLN',
    btnMetric: 'Metryczny',
    btnImperial: 'Imperialny',
    btnPatternStraight: 'Prosty',
    btnPatternBrick: 'Na przesunięcie',
    btnPatternDiagonal: 'Na ukos',
    badgeOptimal: 'Optymalny układ',
    badgeWarning: 'Wysokie odpady',
    visualTitle: 'Podgląd układu',
  },
};
