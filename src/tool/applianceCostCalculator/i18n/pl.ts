import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-kosztow-urzadzen';
const title = 'Kalkulator Kosztów na Cykl Urządzeń Domowych';
const description =
  'Oblicz rzeczywisty koszt każdego prania w pralce, zmywarce i suszarce. Zobacz dokładnie, ile energii elektrycznej, wody i środka czyszczącego kosztuje każdy cykl i odkryj, ile możesz zaoszczędzić, przechodząc w tryb Eco.';

const faqData = [
  {
    question: 'Ile kosztuje cykl prania w pralce?',
    answer:
      'Typowy cykl Eco w 40°C zużywa około 0,45 kWh energii elektrycznej i 40 litrów wody. Przy przeciętnych europejskich cenach kosztuje to około 0,10 do 0,15 euro na pranie. Cykl intensywny w 60°C może zużywać ponad 1,2 kWh i 70 litrów, podnosząc koszt powyżej 0,30 euro.',
  },
  {
    question: 'Czy korzystanie ze zmywarki w nocy jest tańsze?',
    answer:
      'Jeśli Twój dostawca energii elektrycznej stosuje taryfy z różnicowaniem godzinowym, uruchamianie zmywarki poza szczytem może obniżyć koszt energii o 30 procent lub więcej. Godziny szczytu to zazwyczaj poranki i wieczory w dni powszednie.',
  },
  {
    question: 'Czy suszarka zużywa dużo prądu?',
    answer:
      'Tak. Suszarka jest jednym z najbardziej energochłonnych urządzeń domowych. Pełne pranie może zużywać od 2,5 do 3,5 kWh, kosztując od 0,50 do 0,80 euro na cykl. Użycie suszarki z pompą ciepła lub suszenie odzieży na zewnątrz może obniżyć ten koszt o 60 do 80 procent.',
  },
  {
    question: 'Ile wody zużywa zmywarka?',
    answer:
      'Nowoczesne zmywarki są zaskakująco wydajne. Standardowy cykl Eco zużywa tylko 8 do 12 litrów wody na pranie, podczas gdy program intensywny może zużywać 14 do 16 litrów. Jest to znacznie mniej niż mycie tych samych naczyń ręcznie pod bieżącą wodą, co zazwyczaj zużywa 40 do 60 litrów.',
  },
  {
    question: 'Jaka jest najtańsza pora na korzystanie z urządzeń?',
    answer:
      'Przy taryfach z różnicowaniem godzinowym najtańsze okresy to zazwyczaj późna noc, bardzo wczesny ranek i weekendy. Te okresy poza szczytem mogą być o 30 do 50 procent tańsze niż szczytowe godziny w dni powszednie.',
  },
  {
    question: 'Czy przejście w tryb Eco naprawdę pozwala zaoszczędzić?',
    answer:
      'Absolutnie. Tryby Eco wykorzystują niższe temperatury, krótsze fazy nagrzewania i mniej wody. Przez cały rok, przechodzenie z Normalnego na Eco w pralce i zmywarce może zaoszczędzić od 50 do 100 euro łącznie na energii elektrycznej i wodzie, w zależności od częstotliwości użycia i lokalnych cen.',
  },
];

const howToData = [
  {
    name: 'Wybierz urządzenie',
    text: 'Dotknij ikony pralki, zmywarki lub suszarki u góry kalkulatora. Każde urządzenie ma inny profil zużycia energii i wody.',
  },
  {
    name: 'Wybierz typ cyklu',
    text: 'Użyj suwaka Eco, Normalny lub Intensywny, aby ustawić program prania. Eco zużywa mniej energii i wody. Intensywny zużywa najwięcej.',
  },
  {
    name: 'Wprowadź lokalne ceny',
    text: 'Wpisz cenę energii elektrycznej za kWh i cenę wody za litr. Możesz je znaleźć na rachunku lub na stronie dostawcy.',
  },
  {
    name: 'Ustaw częstotliwość użycia',
    text: 'Podaj, ile cykli uruchamiasz w tygodniu. Pozwala to kalkulatorowi oszacować koszt roczny i potencjalne oszczędności.',
  },
  {
    name: 'Wybierz godzinę użycia',
    text: 'Wybierz godzinę, w której planujesz uruchomić urządzenie. Godziny szczytu są podświetlone na czerwono. Godziny poza szczytem są zielone i tańsze, jeśli masz taryfę z różnicowaniem godzinowym.',
  },
  {
    name: 'Włącz koszty środka czyszczącego',
    text: 'Włącz przełącznik środka czyszczącego, jeśli chcesz, aby rachunek zawierał szacunek proszku, płynu lub kapsułek na cykl.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'Ukryty Koszt Każdego Prania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Większość osób nie ma pojęcia, ile rzeczywiście kosztuje cykl prania w pralce. Widzą kwartalny rachunek za energię elektryczną i zakładają, że urządzenia są tanie w eksploatacji. Rzeczywistość jest taka, że rodzina wykonująca pięć prań w tygodniu może wydawać ponad 200 euro rocznie tylko na pranie. Dodajmy zmywarkę trzy razy w tygodniu i suszarkę dwa razy, a suma przekracza 500 euro rocznie. Ten kalkulator szczegółowo analizuje każdy grosz, aby zoptymalizować Twoje nawyki.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Pranie Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Woda Pranie Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Dopłata Szczytowa', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Dlaczego Małe Zmiany Się Mnożą',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeden stopień temperatury lub kilka litrów wody wydaje się nieistotne w jednym cyklu. Ale w ciągu 250 cykli rocznie, te małe różnice przekładają się na poważne pieniądze. Spadek z 60°C do 40°C zmniejsza zużycie energii o około 40 procent na pranie. Przejście z Normalnego na Eco w zmywarce oszczędza około 3 litrów wody i 0,3 kWh za każdym razem. To nie są marginalne zyski. To najszybszy sposób na zmniejszenie rachunków bez kupowania nowych urządzeń.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Cykl Intensywny',
          description: 'Maksymalne ciepło i woda dla silnie zabrudzonych prań.',
          icon: 'mdi:alert',
          points: ['Od 1,2 do 3,5 kWh na pranie', '70 litrów w pralce', 'Obowiązuje dopłata w szczycie', 'Najwyższy koszt roczny'],
        },
        {
          title: 'Cykl Eco',
          description: 'Niższa temperatura, zoptymalizowany czas, minimalna ilość wody.',
          icon: 'mdi:check-circle',
          points: ['Od 0,45 do 1,5 kWh na pranie', 'Tylko 8 do 40 litrów', 'Możliwość uruchomienia poza szczytem', 'Najniższy koszt roczny'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybki Audyt Urządzeń',
      icon: 'mdi:clipboard-check',
      badge: 'Działanie',
      html: '<p style="margin:0">Używaj pralki tylko przy pełnym załadowaniu. Używaj programu Eco przy normalnym zabrudzeniu. Ustaw zmywarkę na opóźniony start po 22:00, jeśli masz taryfę z różnicowaniem godzinowym. Czyść filtr suszarki po każdym cyklu, aby zachować wydajność. Susz odzież na zewnątrz lub na suszarce, gdy pozwala na to pogoda.</p>',
    },
    {
      type: 'title',
      text: 'Taryfy z Różnicowaniem Godzinowym i Godziny Szczytu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wielu dostawców energii elektrycznej obecnie stosuje różne stawki w zależności od pory dnia. Okresy szczytowe, zazwyczaj poranki i wieczory w dni powszednie, mogą być o 30 do 50 procent droższe niż okresy poza szczytem. Takie samo pranie o 20:00 może kosztować 0,18 euro, podczas gdy to samo pranie o 02:00 kosztuje tylko 0,12 euro. W ciągu roku, właściwe planowanie korzystania z urządzeń może zaoszczędzić od 50 do 100 euro bez zmiany niczego innego. Ten kalkulator podświetla godziny szczytu na czerwono, a poza szczytem na zielono, aby można było planować.',
    },
    {
      type: 'summary',
      title: 'Jak Ograniczyć Koszty Urządzeń',
      items: [
        'Użyj tego kalkulatora, aby poznać rzeczywisty koszt każdego cyklu Twoich urządzeń.',
        'Przechodź w tryb Eco zawsze, gdy to możliwe, aby zaoszczędzić do 40 procent energii.',
        'Uruchamiaj pełne załadowania zamiast częściowych, aby zmaksymalizować wydajność.',
        'Opóźniaj cykle na godziny poza szczytem, jeśli Twoja taryfa przewiduje ceny godzinowe.',
        'Susz odzież na zewnątrz zamiast używać suszarki, aby całkowicie wyeliminować ten koszt.',
        'Regularnie czyść filtry i odkamieniaj urządzenia, aby utrzymać je na nominalnej wydajności.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Urządzenie',
    applianceWasher: 'Pralka',
    applianceDishwasher: 'Zmywarka',
    applianceDryer: 'Suszarka',
    labelCycle: 'Program',
    cycleEco: 'Eco',
    cycleNormal: 'Normalny',
    cycleIntensive: 'Intensywny',
    labelElectricityPrice: 'Cena Energii',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Cena Wody',
    unitPriceLiter: '€/L',
    labelDetergent: 'Środek Czyszczący',
    labelDetergentToggle: 'Uwzględnij koszt środka',
    labelHour: 'Planowana Godzina',
    peakBadge: 'Aktywna taryfa szczytowa',
    offPeakBadge: 'Taryfa poza szczytem',
    receiptTitle: 'Podsumowanie Kosztów',
    receiptElectricity: 'Energia',
    receiptWater: 'Woda',
    receiptDetergent: 'Środek',
    receiptTotal: 'Razem na cykl',
    receiptPerYear: 'Szacunkowo rocznie',
    comparisonTitle: 'Inteligentna Zmiana',
    comparisonText: 'Przejście z Normalnego na Eco oszczędza pieniądze przy każdym praniu.',
    comparisonSavings: 'Oszczędności roczne',
    comparisonMonths: 'miesięcy środka',
    badgePeak: 'Szczyt',
    badgeOffPeak: 'Poza Szczytem',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'rok',
    labelCyclesPerWeek: 'Cykle w tygodniu',
    currencySign: '€',
    labelCurrency: 'Waluta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
