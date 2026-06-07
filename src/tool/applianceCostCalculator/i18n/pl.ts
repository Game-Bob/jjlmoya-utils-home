import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-kosztow-urzadzen';
const title = 'Kalkulator Kosztow na Cykl Urzadzen Domowych';
const description =
  'Oblicz rzeczywisty koszt kazdego prania w pralce, zmywarce i suszarce. Zobacz dokladnie, ile energii elektrycznej, wody i srodka czyszczacego kosztuje kazdy cykl i odkryj, ile mozesz zaoszczedzic, przechodzac w tryb Eco.';

const faqData = [
  {
    question: 'Ile kosztuje cykl prania w pralce?',
    answer:
      'Typowy cykl Eco w 40C zuzywa okolo 0,45 kWh energii elektrycznej i 40 litrow wody. Przy przecietnych europejskich cenach kosztuje to okolo 0,10 do 0,15 euro na pranie. Cykl intensywny w 60C moze zuzywac ponad 1,2 kWh i 70 litrow, podnoszac koszt powyzej 0,30 euro.',
  },
  {
    question: 'Czy korzystanie ze zmywarki w nocy jest tansze?',
    answer:
      'Jesli Twoj dostawca energii elektrycznej stosuje taryfy z roznicowaniem godzinowym, uruchamianie zmywarki poza szczytem moze obnizyc koszt energii o 30 procent lub wiecej. Godziny szczytu to zazwyczaj poranki i wieczory w dni powszednie.',
  },
  {
    question: 'Czy suszarka zuzywa duzo pradu?',
    answer:
      'Tak. Suszarka jest jednym z najbardziej energochlonnych urzadzen domowych. Pelne pranie moze zuzywac od 2,5 do 3,5 kWh, kosztujac od 0,50 do 0,80 euro na cykl. Uzycie suszarki z pompa ciepla lub suszenie odziezy na zewnatrz moze obnizyc ten koszt o 60 do 80 procent.',
  },
  {
    question: 'Ile wody zuzywa zmywarka?',
    answer:
      'Nowoczesne zmywarki sa zaskakujaco wydajne. Standardowy cykl Eco zuzywa tylko 8 do 12 litrow wody na pranie, podczas gdy program intensywny moze zuzywac 14 do 16 litrow. Jest to znacznie mniej niz mycie tych samych naczyn recznie pod biezaca woda, co zazwyczaj zuzywa 40 do 60 litrow.',
  },
  {
    question: 'Jaka jest najtansza pora na korzystanie z urzadzen?',
    answer:
      'Przy taryfach z roznicowaniem godzinowym najtansze okresy to zazwyczec pozna noc, bardzo wczesny ranek i weekendy. Te okresy poza szczytem moga byc o 30 do 50 procent tansze niz szczytowe godziny w dni powszednie.',
  },
  {
    question: 'Czy przejscie w tryb Eco naprawde pozwala zaoszczedzic?',
    answer:
      'Absolutnie. Tryby Eco wykorzystuja nizsze temperatury, krotsze fazy nagrzewania i mniej wody. Przez caly rok, przechodzenie z Normalnego na Eco w pralce i zmywarce moze zaoszczedzic od 50 do 100 euro lacznie na energii elektrycznej i wodzie, w zaleznosci od czestotliwosci uzycia i lokalnych cen.',
  },
];

const howToData = [
  {
    name: 'Wybierz urzadzenie',
    text: 'Dotknij ikony pralki, zmywarki lub suszarki u gory kalkulatora. Kazde urzadzenie ma inny profil zuycia energii i wody.',
  },
  {
    name: 'Wybierz typ cyklu',
    text: 'Uzyj suwaka Eco, Normalny lub Intensywny, aby ustawic program prania. Eco zuzywa mniej energii i wody. Intensywny zuzywa najwiecej.',
  },
  {
    name: 'Wprowadz lokalne ceny',
    text: 'Wpisz cene energii elektrycznej za kWh i cene wody za litro. Mozesz je znalezc na rachunku lub na stronie dostawcy.',
  },
  {
    name: 'Ustaw czestotliwosc uzycia',
    text: 'Podaj, ile cykli uruchamiasz w tygodniu. Pozwala to kalkulatorowi oszacowac koszt roczny i potencjalne oszczednosci.',
  },
  {
    name: 'Wybierz godzine uzycia',
    text: 'Wybierz godzine, w ktorej planujesz uruchomic urzadzenie. Godziny szczytu sa podswietlone na czerwono. Godziny poza szczytem sa zielone i tansze, jesli masz taryfe z roznicowaniem godzinowym.',
  },
  {
    name: 'Wlacz koszty srodka czyszczacego',
    text: 'Wlacz przelacznik srodka czyszczacego, jesli chcesz, aby rachunek zawieral szacunek proszku, plynu lub kapsulek na cykl.',
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
      text: 'Ukryty Koszt Kazdego Prania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wiekszosc osob nie ma pojecia, ile rzeczywiscie kosztuje cykl prania w pralce. Widza kwartalny rachunek za energie elektryczna i zakladaja, ze urzadzenia sa tanie w eksploatacji. Rzeczywistosc jest taka, ze rodzina wykonujaca piec pran w tygodniu moze wydawac ponad 200 euro rocznie tylko na pranie. Dodajmy zmywarke trzy razy w tygodniu i suszarke dwa razy, a suma przekracza 500 euro rocznie. Ten kalkulator szczegolowo analizuje kazdy grosz, aby zoptymalizowac Twoje nawyki.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Pranie Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Woda Pranie Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Doplata Szczytowa', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Dlaczego Male Zmiany Sie Mnoza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeden stopien temperatury lub kilka litrow wody wydaje sie nieistotne w jednym cyklu. Ale w ciagu 250 cykli rocznie, te male roznice przekladaja sie na powazne pieniadze. Spadek z 60C do 40C zmniejsza zuycie energii o okolo 40 procent na pranie. Przejscie z Normalnego na Eco w zmywarce oszczedza okolo 3 litrow wody i 0,3 kWh za kazdym razem. To nie sa marginalne zyski. To najszybszy sposob na zmniejszenie rachunkow bez kupowania nowych urzadzen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Cykl Intensywny',
          description: 'Maksymalne cieplo i woda dla silnie zabrudzonych pran.',
          icon: 'mdi:alert',
          points: ['Od 1,2 do 3,5 kWh na pranie', '70 litrow w pralce', 'Obowiazuje doplata w szczycie', 'Najwyzszy koszt roczny'],
        },
        {
          title: 'Cykl Eco',
          description: 'Nizsza temperatura, zoptymalizowany czas, minimalna ilosc wody.',
          icon: 'mdi:check-circle',
          points: ['Od 0,45 do 1,5 kWh na pranie', 'Tylko 8 do 40 litrow', 'Mozliwosc uruchomienia poza szczytem', 'Najnizszy koszt roczny'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybki Audyt Urzadzen',
      icon: 'mdi:clipboard-check',
      badge: 'Dzialanie',
      html: '<p style="margin:0">Uzywaj pralki tylko przy pelnym zaladowaniu. Uzywaj programu Eco przy normalnym zabrudzeniu. Ustaw zmywarke na opozniony start po 22:00, jesli masz taryfe z roznicowaniem godzinowym. Czysc filtr suszarki po kazdym cyklu, aby zachowac wydajnosc. Susz odziez na zewnatrz lub na suszarce, gdy pozwala na to pogoda.</p>',
    },
    {
      type: 'title',
      text: 'Taryfy z Roznicowaniem Godzinowym i Godziny Szczytu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wielu dostawcow energii elektrycznej obecnie stosuje rozne stawki w zaleznosci od pory dnia. Okresy szczytowe, zazwyczaj poranki i wieczory w dni powszednie, moga byc o 30 do 50 procent drozsze niz okresy poza szczytem. Takie samo pranie o 20:00 moze kosztowac 0,18 euro, podczas gdy to samo pranie o 02:00 kosztuje tylko 0,12 euro. W ciagu roku, wlasciwe planowanie korzystania z urzadzen moze zaoszczedzic od 50 do 100 euro bez zmiany niczego innego. Ten kalkulator podswietla godziny szczytu na czerwono, a poza szczytem na zielono, aby mozna bylo planowac.',
    },
    {
      type: 'summary',
      title: 'Jak Ograniczyc Koszty Urzadzen',
      items: [
        'Uzyj tego kalkulatora, aby poznac rzeczywisty koszt kazdego cyklu Twoich urzadzen.',
        'Przechodz w tryb Eco zawsze, gdy to mozliwe, aby zaoszczedzic do 40 procent energii.',
        'Uruchamiaj pelne zaladowania zamiast czesciowych, aby zmaksymalizowac wydajnosc.',
        'Opozniaj cykle na godziny poza szczytem, jesli Twoja taryfa przewiduje ceny godzinowe.',
        'Susz odziez na zewnatrz zamiast uzywac suszarki, aby calkowicie wyeliminowac ten koszt.',
        'Regularnie czysc filtry i odkamieniaj urzadzenia, aby utrzymac je na nominalnej wydajnosci.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Urzadzenie',
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
    labelDetergent: 'Srodek Czyszczacy',
    labelDetergentToggle: 'Uwzglednij koszt srodka',
    labelHour: 'Planowana Godzina',
    peakBadge: 'Aktywna taryfa szczytowa',
    offPeakBadge: 'Taryfa poza szczytem',
    receiptTitle: 'Podsumowanie Kosztow',
    receiptElectricity: 'Energia',
    receiptWater: 'Woda',
    receiptDetergent: 'Srodek',
    receiptTotal: 'Razem na cykl',
    receiptPerYear: 'Szacunkowo rocznie',
    comparisonTitle: 'Inteligentna Zmiana',
    comparisonText: 'Przejscie z Normalnego na Eco oszczedza pieniadze przy kazdym praniu.',
    comparisonSavings: 'Oszczednosci roczne',
    comparisonMonths: 'miesiecy srodka',
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
