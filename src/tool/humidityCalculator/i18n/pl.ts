import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-wilgotnosci';
const title = 'Kalkulator Wilgotnosci W Domu i Czas Pracy Osuszacza';
const description =
  'Oblicz, ile wody musi usunac Twoj osuszacz, aby doprowadzic wilgotne pomieszczenie do zdrowego poziomu wilgotnosci. Zobacz szacowany czas pracy, ostrzezenia o ryzyku plesni i wizualizacje strefy komfortu w jednym interaktywnym narzedziu.';

const faqData = [
  {
    question: 'Jak dlugo powinien pracowac osuszacz na dobe?',
    answer:
      'W umiarkowanie wilgotnym pomieszczeniu standardowy domowy osuszacz musi zazwyczaj pracowac od 8 do 12 godzin dziennie, aby utrzymac 50 procent wilgotnosci wzglednej. W bardzo wilgotnych warunkach lub po zalaniu moze byc konieczna ciagla praca przez 24 do 48 godzin, aby osiagnac podstawowa suchosc.',
  },
  {
    question: 'Jaki poziom wilgotnosci wewnetrznej zapobiega plesni?',
    answer:
      'Wzrost plesni jest hamowany, gdy wewnetrzna wilgotnosc wzgledna jest utrzymywana ponizej 60 procent. Idealna strefa komfortu dla zdrowia czlowieka i zachowania budynku wynosi od 40 do 50 procent wilgotnosci wzglednej. Poziomy powyzej 70 procent tworza srodowisko o wysokim ryzyku dla zarodnikow plesni, ktore moga kielkowac w ciagu 24 do 48 godzin.',
  },
  {
    question: 'Ile wody moze zawierac powietrze?',
    answer:
      'Ilosc pary wodnej, ktora powietrze moze zawierac, zalezy od temperatury. Przy 20 stopniach Celsjusza powietrze nasycone zawiera okolo 17 gramow wody na metr szescienny. Przy 25 stopniach Celsjusza wzrasta to do okolo 23 gramow na metr szescienny. Pomieszczenie o powierzchni 30 metrow kwadratowych przy 25 stopniach Celsjusza i 70 procent wilgotnosci zawiera w powietrzu okolo 8 litrow niewidocznej wody.',
  },
  {
    question: 'Czy temperatura wplywa na wydajnosc osuszacza?',
    answer:
      'Tak. Osuszacze kompresorowe dzialaja najlepiej powyzej 18 stopni Celsjusza. Ponizej 15 stopni Celsjusza ich wydajnosc spada, poniewaz parowniki moga pokryc sie szronem. Osuszacze adsorpcyjne sa lepiej przystosowane do zimnych pomieszczen, takich jak garaze czy piwnice, poniewaz wykorzystuja proces chemicznego osuszania zamiast kondensacji.',
  },
  {
    question: 'Jaki rozmiar osuszacza jest mi potrzebny?',
    answer:
      'Do umiarkowanie wilgotnego pomieszczenia do 50 metrow kwadratowych zazwyczaj wystarcza urzadzenie o wydajnosci 10 do 12 litrow na dobe. Do bardzo wilgotnych pomieszczen lub przestrzeni powyzej 50 metrow kwadratowych wybierz model o wydajnosci 20 litrow na dobe. Po powodzi lub powaznym zawilgoceniu przemyslowe urzadzenie o wydajnosci 30 litrow na dobe szybciej przywroci odpowiednie warunki.',
  },
  {
    question: 'Czy osuszacz moze suszyc pranie?',
    answer:
      'Tak. Osuszacz z trybem suszenia prania moze efektywnie suszyc ubrania w pomieszczeniu, jednoczesnie wyciagajac wilgoc z otaczajacego powietrza. Zuzywa mniej energii niz suszarka bebnowa i zapobiega kondensacji na oknach i scianach. Oczekuj czasow suszenia podobnych do suszenia na zewnatrz w ciepla pogode.',
  },
];

const howToData = [
  {
    name: 'Wprowadz powierzchnie pomieszczenia',
    text: 'Wpisz powierzchnie podlogi pomieszczenia w metrach kwadratowych. Kalkulator zaklada standardowa wysokosc sufitu 2,5 metra, aby oszacowac calkowita objetosc powietrza.',
  },
  {
    name: 'Ustaw temperature',
    text: 'Wprowadz aktualna temperature pomieszczenia w stopniach Celsjusza. Cieplejsze powietrze zawiera wiecej wilgoci, wiec temperatura bezposrednio wplywa na ilosc wody, ktora trzeba usunac.',
  },
  {
    name: 'Wybierz aktualna wilgotnosc',
    text: 'Uzyj pokretla komfortu lub wprowadzenia numerycznego, aby ustawic aktualny procent wilgotnosci wzglednej. Wartosci powyzej 60 procent sa wyroznione w kolorach ostrzegawczych.',
  },
  {
    name: 'Wybierz docelowa wilgotnosc',
    text: 'Ustaw pozadana wilgotnosc wzgledna. 50 procent jest zalecane dla komfortu i zapobiegania plesni. 40 procent jest idealne dla osob cierpiacych na alergie.',
  },
  {
    name: 'Wprowadz wydajnosc osuszacza',
    text: 'Wprowadz wydajnosc odwadniania swojego urzadzenia w litrach na dobe. Jest to zazwyczaj podane na przedniej etykiecie lub w instrukcji obslugi.',
  },
  {
    name: 'Przejrzyj wyniki',
    text: 'Przeczytaj symulacje zbiornika na wode, szacowany czas pracy i baner ryzyka plesni, aby zdecydowac, jak dlugo uruchamiac swoje urzadzenie.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'Ukryta woda w Twoich scianach',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wiekszosc wlascicieli domow nigdy nie zdaje sobie sprawy, ze wilgotne powietrze nie jest tylko niekomfortowe, ale takze drogie i niebezpieczne. Jedno wilgotne pomieszczenie moze zawierac kilka litrow niewidocznej pary wodnej. Z czasem ta wilgoc kondensuje na zimnych powierzchniach, zywi kolonie plesni i degraduje tynk, farbe i drewno. Zrozumienie dokladnie, ile wody trzeba usunac i jak dlugo to zajmuje, to pierwszy krok do ochrony domu i zdrowia.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Idealna wilgotnosc wewnetrzna', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Sr. dzienny czas pracy', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Prog ryzyka plesni', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Dlaczego wilgotnosc wzgledna ma znaczenie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wilgotnosc wzgledna to nie ilosc wody w powietrzu, to procent wody, ktora powietrze utrzymuje w stosunku do maksimum, jakie mogloby utrzymac przy tej temperaturze. Cieple powietrze jest jak wieksza gabka. Przy 30 stopniach Celsjusza powietrze moze utrzymac prawie dwa razy wiecej wilgoci niz przy 15 stopniach Celsjusza. Dlatego pomieszczenie moze byc wilgotne nawet po otwarciu okien. Wilgoc jest nadal tam, tylko mniej widoczna.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Wysoka wilgotnosc',
          description: 'Powyzej 60 procent wilgotnosci wzglednej. Ryzyko plesni, roztoczy i uszkodzen kondensacyjnych.',
          icon: 'mdi:alert',
          points: ['Kondensacja na oknach i scianach', 'Zatechle zapachy i wzrost mikroorganizmow', 'Zwiekszona podraznienie drog oddechowych', 'Wyzsze rachunki za ogrzewanie ze wzgledu na przewodnosc cieplna wilgotnego powietrza'],
        },
        {
          title: 'Optymalna wilgotnosc',
          description: 'Miedzy 40 a 50 procent wilgotnosci wzglednej. Komfortowe, zdrowe i energooszczedne.',
          icon: 'mdi:check-circle',
          points: ['Brak kondensacji na zimnych powierzchniach', 'Zarodniki plesni pozostaja w stanie uspienia', 'Komfort skory i drog oddechowych', 'Zachowanie mebli i drewna'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybki audyt wilgotnosci',
      icon: 'mdi:clipboard-check',
      badge: 'Dzialanie',
      html: '<p style="margin:0">Sprawdzaj okna pod katem kondensacji kazdego ranka. Jesli krople pojawiaja sie regularnie, wilgotnosc jest zbyt wysoka. Uruchamiaj osuszacz przez 12 godzin dziennie, az kondensacja ustanie. Przenies urzadzenie do najwilgotniejszego pomieszczenia, zazwyczaj kuchni, lazienki lub piwnicy. Oproznijaj zbiornik codziennie i czysc filtr co dwa tygodnie.</p>',
    },
    {
      type: 'title',
      text: 'Prawidlowy dobor osuszacza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Powszechnym bledem jest zakup osuszacza, ktory jest zbyt maly dla pomieszczenia. Urzadzenie o wydajnosci 10 litrow na dobe w wilgotnej piwnicy o powierzchni 60 metrow kwadratowych bedzie pracowac ciagle, nigdy nie osiagajac docelowej wilgotnosci. Uzyj tego kalkulatora, aby zobaczyc dokladna objetosc wody, ktora musi usunac Twoje pomieszczenie. Jesli szacowany czas pracy przekracza 20 godzin dziennie, potrzebujesz urzadzenia o wiekszej wydajnosci lub lepszej wentylacji.',
    },
    {
      type: 'summary',
      title: 'Jak utrzymac dom w suchosci',
      items: [
        'Uzyj tego kalkulatora, aby okreslic dokladna ilosc wody do usuniecia w kazdym pomieszczeniu.',
        'Utrzymuj wewnetrzna wilgotnosc wzgledna miedzy 40 a 50 procent dla zdrowia i komfortu.',
        'Uruchamiaj osuszacz, az baner ryzyka plesni zmieni kolor na zielony.',
        'Oproznijaj zbiornik na wode, zanim sie napelni, aby zapobiec automatycznemu wylaczeniu.',
        'Regularnie czysc filtry, aby utrzymac przeplyw powietrza i wydajnosc odwadniania na maksimum.',
        'Popraw wentylacje pomieszczenia obok osuszania, aby uzyskac szybsze efekty.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Powierzchnia pomieszczenia',
    unitM2: 'm2',
    labelTemperature: 'Temperatura',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Aktualna wilgotnosc',
    labelTargetHumidity: 'Docelowa wilgotnosc',
    labelCapacity: 'Wydajnosc osuszacza',
    unitLitersDay: 'L/dobę',
    comfortDialTitle: 'Strefa komfortu',
    comfortCurrent: 'Aktualna',
    comfortTarget: 'Docelowa',
    tankTitle: 'Woda w powietrzu',
    tankLiters: 'litrów',
    runtimeTitle: 'Szacowany czas pracy',
    runtimeUnitH: 'h',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Ryzyko plesni',
    moldRiskHigh: 'Wysokie ryzyko',
    moldRiskMedium: 'Umiarkowane ryzyko',
    moldRiskLow: 'Niskie ryzyko',
    extractionLabel: 'do usuniecia',
    tipEnergy: 'Uruchamianie osuszacza w godzinach poza szczytem moze znaczaco obnizyc koszty energii elektrycznej.',
    tipMold: 'Utrzymywanie wilgotnosci ponizej 50 procent zapobiega kielkowaniu zarodnikow plesni na powierzchniach.',
    unitPercent: '%',
    badgeHigh: 'Wysoka',
    badgeMedium: 'Umiarkowana',
    badgeLow: 'Niska',
  },
};
