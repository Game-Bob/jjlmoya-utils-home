import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'kalkulator-oszczednosci-led';
const title = 'Kalkulator Oszczędności LED';
const description =
  'Oblicz, ile pieniędzy i energii zaoszczędzisz, wymieniając tradycyjne żarówki na LED. Sprawdź swój dokładny roczny i miesięczny zysk oraz redukcję CO2.';

const faqData = [
  {
    question: 'Ile naprawdę oszczędza żarówka LED?',
    answer:
      'Żarówka LED zużywa od 80% do 90% mniej energii niż żarówka tradycyjna. Na przykład zmiana z 60W na 9W redukuje koszt oświetlenia niemal do minimum, zachowując tę samą jasność.',
  },
  {
    question: 'Po jakim czasie zwraca się wymiana na LED?',
    answer:
      'Dzięki niskim cenom LED-ów i dużym oszczędnościom, inwestycja zwraca się zazwyczaj w mniej niż 4 miesiące standardowego użytkowania.',
  },
  {
    question: 'Co jeśli włożę żarówkę LED o większej mocy?',
    answer:
      'LED-y generują bardzo mało ciepła, więc możesz stosować jaśniejsze żarówki w oprawach, które wcześniej były ograniczone temperaturą starych żarówek, o ile nie przekroczysz limitów elektrycznych oprawki.',
  },
  {
    question: 'Czy rzeczywiście świecą tak długo, jak podano na opakowaniu?',
    answer:
      'Wysokiej jakości LED działa od 15 000 do 50 000 godzin. Przy średnim użyciu 4h dziennie oznacza to ponad 15 lat pracy.',
  },
  {
    question: 'Czy mogę używać LED ze ściemniaczem?',
    answer:
      'Tylko jeśli żarówka posiada oznaczenie "Dimmable" (ściemnialna). Standardowe LED-y mogą migać na starych ściemniaczach.',
  },
  {
    question: 'Czy muszę wymieniać całą lampę?',
    answer:
      'W 99% przypadków nie. Wystarczy wymienić samą żarówkę na LED o tym samym gwincie (E27, E14, GU10 itp.).',
  },
];

const howToData = [
  {
    name: 'Policz punkty świetlne',
    text: 'Sprawdź, ile masz tradycyjnych żarówek lub halogenów i zanotuj ich moc w watach.',
  },
  {
    name: 'Wybierz odpowiednik LED',
    text: 'Wybierz typ obecnej żarówki w kalkulatorze. System automatycznie dopasuje odpowiednią żarówkę LED.',
  },
  {
    name: 'Ustaw czas świecenia',
    text: 'Podaj, ile godzin dziennie średnio świecą się te lampy.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Efektywność Energetyczna — Ministerstwo Klimatu',
      url: 'https://www.gov.pl/web/klimat/efektywnosc-energetyczna',
    },
    {
      name: 'Etykiety Energetyczne UE',
      url: 'https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/energy-label-and-ecodesign/energy-efficient-products_pl',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Przewodnik po Oszczędnościach LED: Jak Obniżyć Rachunek za Prąd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zmiana oświetlenia na technologię <strong>LED (Light Emitting Diode)</strong> to jedna z najszybszych ścieżek do oszczędności w domu. Każdy wat, który odejmiemy od zużycia, to bezpośredni zysk w portfelu. Żarówka LED 9W daje tyle światła co tradycyjna 60W, zużywając przy tym <strong>85% mniej energii</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Oszczędność Energii', icon: 'mdi:lightning-bolt' },
        { value: '25.000h', label: 'Żywotność LED', icon: 'mdi:clock-outline' },
        { value: '< 4 m-ce', label: 'Amortyzacja', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Żarówka Tradycyjna',
          description: 'Technologia z XX wieku oparta na żarzeniu. 95% energii marnuje się na wydzielanie ciepła.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% energii marnowane na ciepło', 'Żywotność: 1.000 godzin', 'Bardzo wysokie koszty'],
        },
        {
          title: 'Nowoczesny LED',
          description: 'Obecny standard efektywności. Błyskawiczny start i minimalne wydzielanie ciepła.',
          icon: 'mdi:led-outline',
          points: ['85–90% oszczędności', 'Żywotność: 25.000–50.000 godzin', 'Bezpieczna temperatura'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Nauka Stojąca za Oszczędnościami',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zwykła żarówka zamienia tylko 5% energii w światło. LED-y używają półprzewodników, co czyni je radykalnie sprawniejszymi. <strong>Nie patrz na waty, patrz na lumeny:</strong> stara żarówka 60W daje ok. 800 lm; dziś tyle samo uzyskasz z LED-a o mocy 8-9W.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabela Zamienników',
      icon: 'mdi:table',
      badge: 'Ściąga',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W tradycyjna</strong> → LED 5–6W (450 lm)</li><li><strong>60W tradycyjna</strong> → LED 8–10W (800 lm)</li><li><strong>100W tradycyjna</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halogen</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Zalety LED poza pieniędzmi',
      items: [
        'Wyjątkowa trwałość: jakość na ponad 15 lat.',
        'Pełna jasność od pierwszej sekundy.',
        'Znikome ciepło: chłodniejszy dom w lecie.',
        'Ekologia: brak rtęci i gazów toksycznych.',
        'Kompatybilność z większością gwintów (E27, E14, GU10).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Konfiguracja Domu',
    labelBulbs: 'Ile żarówek wymieniasz?',
    unitBulbs: 'szt.',
    labelType: 'Obecna żarówka',
    labelHours: 'Godziny świecenia na dobę',
    labelPrice: 'Cena prądu',
    unitPrice: 'zł/kWh',
    resultBadge: 'Realna oszczędność',
    labelAnnual: 'Zaoszczędzisz rocznie',
    labelMonthly: 'Miesięcznie',
    labelEfficiency: 'Efektywność',
    labelCo2: 'Redukcja śladu CO₂',
    unitLess: '% mniej',
    currencySign: 'zł',
    btnInc60Title: 'Tradycyjna',
    btnInc60Sub: 'Klasyczna (60W)',
    btnInc40Title: 'Tradycyjna',
    btnInc40Sub: 'Mała (40W)',
    btnInc100Title: 'Tradycyjna',
    btnInc100Sub: 'Duża (100W)',
    btnHalo50Title: 'Halogen',
    btnHalo50Sub: 'Reflektor (50W)',
    usageNever: 'Prawie nigdy',
    usageLow: 'Rzadko',
    usageNormal: 'Normalnie',
    usageModerate: 'Średnio',
    usageHeavy: 'Intensywnie',
    usagePro: 'Bardzo intensywnie',
    usageVeryHeavy: 'Ciągle',
    usageAlways: 'Zawsze włączona',
  },
};
