import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'symulator-zuzycia-standby';
const title = 'Symulator Poboru Energii w Trybie Czuwania';
const description =
  'Dowiedz się, ile energii marnują Twoje urządzenia w trybie czuwania. Oblicz ukryty roczny koszt poboru fantomowego z telewizorów, routerów, ładowarek i innych.';

const faqData = [
  {
    question: 'Czym jest vampire power lub obciążenie fantomowe?',
    answer:
      'Vampire power to energia elektryczna zużywana przez urządzenia elektroniczne, gdy są wyłączone lub w trybie czuwania. Dzieje się tak, ponieważ wiele urządzeń pozostaje częściowo aktywnych, aby reagować na piloty, utrzymywać połączenia sieciowe lub działać wewnętrzne zegary.',
  },
  {
    question: 'Ile kosztuje energia w trybie czuwania rocznie?',
    answer:
      'Przeciętne gospodarstwo domowe marnuje od 50 do 150 euro rocznie tylko na energię w trybie czuwania. Pojedynczy nowoczesny telewizor może zużywać ciągle od 10 do 20 watów, co przekłada się na około 15 do 30 euro rocznie w zależności od ceny energii elektrycznej.',
  },
  {
    question: 'Które urządzenia zużywają najwięcej w trybie czuwania?',
    answer:
      'Największymi winowajcami są tunery telewizyjne, konsole do gier, komputery stacjonarne pozostawione w trybie uśpienia, smart TV oraz starsze zewnętrzne zasilacze. Tunery kablowe i satelitarne są szczególnie marnotrawne, ponieważ rzadko przechodzą w prawdziwy tryb czuwania.',
  },
  {
    question: 'Czy wyciąganie wtyczek naprawdę oszczędza pieniądze?',
    answer:
      'Tak. Wyciąganie wtyczek lub używanie zaawansowanych listew z gniazdami master całkowicie eliminuje zużycie w trybie czuwania. W typowym domu z 20 urządzeniami w trybie czuwania, roczne oszczędności mogą wynosić od 40 do 120 euro.',
  },
  {
    question: 'Czy smart listwy zasilające są warte zakupu?',
    answer:
      'Smart lub zaawansowane listwy zasilające odłączają zasilanie urządzeń peryferyjnych, gdy urządzenie master zostanie wyłączone. Zwracają się w ciągu kilku miesięcy, jeśli używa się ich z centrami rozrywki lub stanowiskami komputerowymi.',
  },
  {
    question: 'Jak mogę zmierzyć pobór energii w trybie czuwania w domu?',
    answer:
      'Możesz użyć niedrogiego wtykowego miernika mocy (watomierza), aby dokładnie zmierzyć, ile watów pobiera każde urządzenie, gdy jest wyłączone lub bezczynne. Alternatywnie, ten symulator dostarcza ustandaryzowanych szacunków opartych na średnich producentów i pomiarach laboratoryjnych.',
  },
];

const howToData = [
  {
    name: 'Przejdź przez każdy pokój',
    text: 'Policz każde urządzenie, które pozostaje cały czas podłączone do prądu. Uwzględnij telewizory, mikrofalówki, routery, drukarki, konsole do gier i ładowarki do telefonów.',
  },
  {
    name: 'Oszacuj dzienne godziny czuwania',
    text: 'Większość urządzeń pozostaje w trybie czuwania przez 20 do 24 godzin na dobę. Wprowadź średnią dla każdego urządzenia lub użyj domyślnej wartości 24 godziny.',
  },
  {
    name: 'Ustaw cenę energii elektrycznej',
    text: 'Wprowadź cenę, którą płacisz za kilowatogodzinę. Jest ona wydrukowana na rachunku za prąd.',
  },
  {
    name: 'Przeczytaj podsumowanie',
    text: 'Symulator pokazuje całkowite zmarnowane waty, roczne kilowatogodziny i ukryty koszt roczny. Użyj odznaki kategorii, aby sprawdzić, czy Twój dom ma niskie, umiarkowane, wysokie czy ekstremalne zużycie.',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: 'Phantom Load: Energia, za którą płacisz, ale nigdy nie używasz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Każde gniazdo w domu z podłączonym kablem to potencjalne źródło <strong>energii fantomowej</strong>. Nawet gdy wyłącznik jest wyłączony, urządzenie nadal pobiera energię. To może być tylko kilka watów, ale pomnożone przez 24 godziny na dobę i 365 dni w roku, te waty stają się setkami kilowatogodzin i prawdziwymi pieniędzmi z Twojej kieszeni.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'Rachunku domowego', icon: 'mdi:flash' },
        { value: '23h', label: 'Śr. czas czuwania na dobę', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'Średnia najwyższego urządzenia', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Urządzenia, które nigdy nie śpią',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nowoczesne domy zawierają średnio 40 urządzeń elektronicznych. Mniej więcej połowa z nich jest ciągle podłączona do sieci. Choć regulacje energetyczne poprawiły w ostatnich latach sprawność czuwania, sama liczba urządzeń wzrosła. Pojedyncza konsola w trybie instant on może pobierać 15 watów. Telewizor z szybkim startem może pobierać 12 watów. Dodaj routery, modemy, inteligentne głośniki, mikrofalówki z zegarami, drukarki i ładowarki, a suma szybko przekracza 100 watów stałego tła zużycia.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Domy o niskim zużyciu',
          description: 'Gospodarstwa domowe, które aktywnie zarządzają energią czuwania za pomocą smart listew i wyciągania wtyczek.',
          icon: 'mdi:leaf',
          points: ['Poniżej 50 watów całkowitego czuwania', 'Roczny koszt poniżej 50 euro', 'Używa zaawansowanych listew zasilających'],
        },
        {
          title: 'Domy o wysokim zużyciu',
          description: 'Typowe gospodarstwa domowe z centrami rozrywki, wieloma konsolami do gier i ciągle włączonymi komputerami.',
          icon: 'mdi:lightning-bolt',
          points: ['Powyżej 150 watów całkowitego czuwania', 'Roczny koszt przekracza 150 euro', 'Wiele urządzeń w trybie szybkiego startu'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybka lista oszczędności',
      icon: 'mdi:check-circle',
      badge: 'Działanie',
      html: '<p style="margin:0">Wyciągaj ładowarki telefonów, gdy nie są używane. Użyj listwy z gniazdem master dla centrum rozrywki. Wyłącz tryby szybkiego startu lub instant on w telewizorach i konsolach. Wyłączaj komputery stacjonarne zamiast pozostawiać je w trybie uśpienia.</p>',
    },
    {
      type: 'title',
      text: 'Dlaczego waty rosną szybciej, niż myślisz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wat to szybkość zużycia energii. Jeden wat przez jedną godzinę to jedna watogodzina. Urządzenie pobierające ciągle 10 watów zużywa 87,6 kilowatogodziny rocznie. Przy średniej cenie 0,25 euro za kilowatogodzinę, to jedno urządzenie kosztuje ponad 21 euro rocznie. Pomnóż to teraz przez każdy podłączony gadżet w domu.',
    },
    {
      type: 'summary',
      title: 'Jak zmniejszyć vampire load',
      items: [
        'Zidentyfikuj największych konsumentów za pomocą tego symulatora lub wtykowego miernika.',
        'Grupuj urządzenia na smart listwach zasilających, które wyłączają czuwanie, gdy główne urządzenie jest wyłączone.',
        'Wyłącz funkcje zawsze włączone, szybki start i czuwanie sieciowe tam, gdzie to możliwe.',
        'Wyciągaj ładowarki i małe urządzenia, które nie są używane codziennie.',
        'Rozważ wymianę bardzo starych zewnętrznych zasilaczy na nowoczesne, wydajne modele.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Audyt Poboru Fantomowego',
    labelDevices: 'Podłączone urządzenia w czuwaniu',
    labelHours: 'Godziny czuwania na dobę',
    unitHours: 'h',
    labelPrice: 'Cena energii elektrycznej',
    unitPrice: '/kWh',
    resultBadge: 'Wynik',
    labelAnnualKwh: 'Marnowane rocznie',
    labelAnnualCost: 'Ukryty koszt roczny',
    labelMonthlyCost: 'Ekwiwalent miesięczny',
    labelDevicesCount: 'Policzone urządzenia',
    labelTotalWatts: 'Całkowite waty czuwania',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Waluta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Niski pobór',
    categoryModerate: 'Umiarkowany pobór',
    categoryHigh: 'Wysoki pobór',
    categoryExtreme: 'Ekstremalny pobór',
    addDevice: 'Dodaj urządzenie',
    removeDevice: 'Usuń',
    modalAddTitle: 'Dodaj urządzenie czuwania',
    labelDeviceName: 'Nazwa urządzenia',
    labelDeviceWatts: 'Waty w trybie czuwania',
    btnSave: 'Zapisz',
    btnCancel: 'Anuluj',
  },
};
