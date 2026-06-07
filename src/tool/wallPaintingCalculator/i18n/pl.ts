import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-farby-sciany';
const title = 'Kalkulator Farby i Rozcieńczania do Ścian';
const description =
  'Oblicz dokładnie, ile litrów lub galonów farby potrzebujesz na swoje ściany. Dostosuj warstwy, rodzaj powierzchni, rozcieńczenie i uzyskaj rzeczywisty koszt przed zakupem.';

const faqData = [
  {
    question: 'Jak obliczyć dokładną ilość farby?',
    answer:
      'Pomnóż powierzchnię ściany przez liczbę warstw, a następnie podziel przez wydajność farby w metrach kwadratowych lub stopach kwadratowych na litr lub galon. Najpierw odejmij drzwi i okna od całkowitej powierzchni.',
  },
  {
    question: 'Ile farby potrzebuje standardowy pokój?',
    answer:
      'Pokój o powierzchni 12 metrów kwadratowych z sufitem na wysokości 2,5 metra ma około 30 metrów kwadratowych powierzchni ścian. Przy dwóch warstwach i wydajności 12 metrów kwadratowych na litr potrzebujesz około 5 litrów farby.',
  },
  {
    question: 'Czy powinienem rozcieńczać farbę przed nałożeniem?',
    answer:
      'Farby plastikowe na bazie wody są zazwyczaj gotowe do użycia lub wymagają 5 do 10 procent wody przy pierwszej warstwie. Farby emaliowe lub olejne często wymagają specjalnego rozpuszczalnika podanego na puszce.',
  },
  {
    question: 'Ile warstw jest naprawdę koniecznych?',
    answer:
      'Nowe lub bardzo chłonne powierzchnie wymagają gruntu plus dwie warstwy wykończeniowe. Przemalowanie już pomalowanej ściany na podobny kolor zazwyczaj wymaga tylko jednej lub dwóch warstw.',
  },
  {
    question: 'Czy odejmuję drzwi i okna?',
    answer:
      'Tak. Zmierz każde otwarcie i odejmij je od całkowitej powierzchni ścian. Jako szybką regułę, drzwi mają około 2 metry kwadratowe, a okna około 1,5 metra kwadratowego każde.',
  },
  {
    question: 'Czy rodzaj powierzchni zmienia wydajność?',
    answer:
      'Tak. Gładkie, przygotowane ściany mogą mieć wydajność do 14 metrów kwadratowych na litr. Szorsty beton, tynk strukturalny lub chłonny cegły mogą obniżyć wydajność do 6 lub 8 metrów kwadratowych na litr.',
  },
];

const howToData = [
  {
    name: 'Zmierz swoje ściany',
    text: 'Zmierz szerokość i wysokość każdej ściany. Pomnóż je, aby uzyskać powierzchnię każdej ściany, a następnie dodaj wszystkie ściany.',
  },
  {
    name: 'Odejmij otwory',
    text: 'Zmierz drzwi i okna oraz odejmij ich powierzchnię od całkowitej, aby uzyskać rzeczywistą powierzchnię do malowania.',
  },
  {
    name: 'Wybierz rodzaj farby',
    text: 'Wybierz rodzaj farby w kalkulatorze. Farba plastikowa matowa, plastikowa satynowa i emalia mają różne wydajności i zalecenia dotyczące rozcieńczenia.',
  },
  {
    name: 'Ustaw warstwy i cenę',
    text: 'Wskaż, ile warstw planujesz nałożyć i cenę za litr lub galon. Kalkulator zwróci dokładną ilość i całkowity koszt.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Kalkulator Farby: Kup Dokładnie Tyle, Ile Potrzebujesz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Malowanie pokoju bez wcześniejszego obliczenia zazwyczaj kończy się <strong>pojemnikami w połowie pełnymi</strong> lub awaryjnymi wyprawami do sklepu. Powód jest prosty: wydajność farby zmienia się w zależności od porowatości powierzchni, zmiany koloru i liczby warstw. Gładka, wcześniej malowana ściana może mieć wydajność do 14 metrów kwadratowych na litr, podczas gdy ściana z tynkiem strukturalnym może pochłonąć tę samą ilość i pokryć tylko 6 metrów kwadratowych na litr.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Wysoka', label: 'Standardowe Krycie', icon: 'mdi:format-paint' },
        { value: '2 warstwy', label: 'Zalecane', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Typowe Rozcieńczenie', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Jak Naprawdę Działa Wydajność Farby',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Producenci podają na puszce teoretyczną wydajność. Ta liczba zakłada idealnie gładką, niechłonną, białą powierzchnię nałożoną profesjonalnym wałkiem w idealnych warunkach. W rzeczywistości <strong>porowate ściany, ciemne kolory i aplikacja DIY</strong> zmniejszają tę wydajność o 20 do 40 procent. Nasz kalkulator pozwala wybrać realistyczne profile, aby nie zabrakło farby.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Farba Plastikowa Matowa',
          description: 'Najpopularniejszy wybór do wnętrz. Wysokie krycie, łatwa do retuszu i zmywalna w większości jakości.',
          icon: 'mdi:palette',
          points: ['Standardowe krycie wnętrz', 'Rozcieńczenie: 5 do 10 procent wody', 'Najlepsza do: salonów i sypialni'],
        },
        {
          title: 'Farba Plastikowa Satynowa',
          description: 'Lekko błyszczące wykończenie z większą odpornością na wilgoć i plamy. Trudniejsza do bezszwowego retuszu.',
          icon: 'mdi:brightness-6',
          points: ['Lekko wyższe krycie', 'Rozcieńczenie: 5 procent wody', 'Najlepsza do: kuchni i łazienek'],
        },
        {
          title: 'Farba Emaliowa',
          description: 'Twarde i trwałe wykończenie do stolarstwa, grzejników i miejsc o dużym ruchu. Wymaga rozpuszczalnika lub specyficznego rozcieńczalnika.',
          icon: 'mdi:spray',
          points: ['Twarde i trwałe wykończenie', 'Rozcieńczenie: 10 do 15 procent rozpuszczalnika', 'Najlepsza do: drzwi, ram i mebli'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Praktyczne Mierzenie Powierzchni',
      icon: 'mdi:ruler-square',
      badge: 'Wskazówka',
      html: '<p style="margin:0">Pomnóż szerokość ściany przez wysokość ściany dla każdej ściany. Aby szybko uzyskać sumę, dodaj wszystkie szerokości i pomnóż przez wysokość pokoju. Następnie odejmij około 2 metry kwadratowe dla każdych standardowych drzwi i 1,5 metra kwadratowego dla każdego okna.</p>',
    },
    {
      type: 'title',
      text: 'Zasady Rozcieńczania i Aplikacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pierwsze warstwy na nowych lub naprawionych powierzchniach zawsze wymagają lekkiego rozcieńczenia, aby farba mogła wniknąć i przyczepić się. Warstwy wykończeniowe powinny być nakładane nierozcieńczone lub z minimum wskazanym przez producenta. <strong>Nadmierne rozcieńczenie niszczy pigment</strong> i pozostawia przezroczyste plamy, które wymagają dodatkowej warstwy.',
    },
    {
      type: 'summary',
      title: 'Dlaczego Warto Obliczyć Przed Zakupem',
      items: [
        'Unikaj resztek farby, które wysychają w puszce i stają się odpadem.',
        'Zapobiegaj różnicom w odcieniu między partiami kupionymi w różnym czasie.',
        'Budżetuj precyzyjnie: znaj rzeczywisty koszt włącznie z gruntem i narzędziami.',
        'Zaplanuj pracę jednym razem, bez przerywania jej na dodatkowy materiał.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Powierzchnia i Farba',
    labelMetric: 'Metryczny',
    labelImperial: 'Imperialny',
    labelArea: 'Całkowita powierzchnia do malowania',
    labelAreaFt: 'Całkowita powierzchnia do malowania',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Wydajność farby',
    labelYieldFt: 'Wydajność farby',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Wybierz rodzaj farby',
    btnPlasticMatTitle: 'Plastikowa Matowa',
    btnPlasticMatSub: 'Matowa · Woda 5%',
    btnPlasticSatinTitle: 'Plastikowa Satynowa',
    btnPlasticSatinSub: 'Satynowa · Woda 5%',
    btnEnamelTitle: 'Emalia',
    btnEnamelSub: 'Emalia · Rozpuszczalnik 10%',
    labelCoats: 'Liczba warstw',
    unitCoats: 'warstw',
    labelPrice: 'Cena za litr',
    labelPriceFt: 'Cena za galon',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Procent rozcieńczenia',
    unitDilution: '%',
    resultBadge: 'Obliczenie farby',
    labelPaint: 'Litry farby',
    labelPaintGal: 'Galony farby',
    labelCost: 'Całkowity koszt',
    labelWater: 'Płyn do rozcieńczenia',
    labelWaterGal: 'Płyn do rozcieńczenia',
    labelTotalVolume: 'Całkowita mieszanka',
    labelTotalVolumeGal: 'Całkowita mieszanka',
    labelCurrency: 'Waluta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: 'zł',
  },
};
