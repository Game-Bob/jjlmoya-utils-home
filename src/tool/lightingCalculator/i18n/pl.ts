import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-oswietlenia-i-lumenow-dla-domu';
const title = 'Kalkulator Oświetlenia i Lumenów dla Domu';
const description =
  'Oblicz dokładnie, ile lumenów i żarówek potrzebujesz do każdego pomieszczenia. Wybierz typ pokoju, wymiary oraz rodzaj żarówki, aby uzyskać profesjonalny plan oświetlenia z szacunkami lux w czasie rzeczywistym.';

const faqData = [
  {
    question: 'Ile lumenów potrzebuję do salonu?',
    answer:
      'W typowym salonie należy dążyć do około 150 lux na podłodze. Pomnóż powierzchnię pomieszczenia w metrach kwadratowych przez 150, aby uzyskać wymaganą liczbę lumenów. W pomieszczeniu o powierzchni 20 metrów kwadratowych potrzeba około 3000 lumenów.',
  },
  {
    question: 'Jaka jest różnica między lux a lumenami?',
    answer:
      'Lumeny mierzą całkowitą ilość światła wypływającego z żarówki. Luxy mierzą światło, które faktycznie dociera do powierzchni. Pomieszczenie z wysokimi sufitami lub ciemnymi ścianami potrzebuje więcej lumenów, aby osiągnąć ten sam poziom lux, ponieważ światło jest tracone na skutek odległości i absorpcji.',
  },
  {
    question: 'Czy żarówki LED naprawdę oszczędzają energię?',
    answer:
      'Tak. Żarówki LED produkują około 100 lumenów na wat, podczas gdy żarówki tradycyjne produkują tylko około 15. Żarówka LED 10W daje tyle samo światła co żarówka tradycyjna 60W, zużywając jedną szóstą energii elektrycznej.',
  },
  {
    question: 'Jak kolor pomieszczenia wpływa na zapotrzebowanie na oświetlenie?',
    answer:
      'Ciemne ściany i sufity absorbują światło. W pomieszczeniu o ciemnych powierzchniach może być potrzeba o 50% więcej lumenów niż wynika to ze standardowego zalecenia.',
  },
  {
    question: 'Jaki poziom lux jest dobry do czytania?',
    answer:
      'Do komfortowego czytania potrzeba od 300 do 500 lux na stronie. Ogólne oświetlenie otoczenia zazwyczaj zapewnia 150 do 200 lux, dlatego dodaj lampę biurkową w pobliżu miejsca do czytania, aby uzyskać dodatkową jasność.',
  },
  {
    question: 'Czy można ściemniać żarówki LED?',
    answer:
      'Tylko jeśli są oznaczone jako ściemnialne. Standardowe LED-y mogą migać lub mieć skróconą żywotność po podłączeniu do ściemniacza. Zawsze sprawdź na opakowaniu symbol ściemnialności przed instalacją.',
  },
];

const howToData = [
  {
    name: 'Wybierz typ pomieszczenia',
    text: 'Wybierz funkcję pomieszczenia. Kuchnie i biura potrzebują jaśniejszego światła niż sypialnie czy korytarze.',
  },
  {
    name: 'Wprowadź wymiary',
    text: 'Wprowadź szerokość, długość i wysokość sufitu pomieszczenia. Kalkulator używa ich do określenia wskaźnika pomieszczenia i współczynnika wykorzystania światła.',
  },
  {
    name: 'Wybierz rodzaj żarówki i ich liczbę',
    text: 'Wybierz preferowaną technologię żarówek i liczbę opraw, które posiadasz. Kalkulator pokaże, czy potrzebujesz więcej żarówek.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Kompletny Przewodnik po Projektowaniu Oświetlenia Domowego i Planowaniu Lumenów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Właściwe oświetlenie przekształca dom w przytulne miejsce. Poza estetyką, odpowiednia ilość światła wpływa na nastrój, produktywność, a nawet zdrowie oczu. <strong>Nasz kalkulator oświetlenia domowego</strong> pomaga dokładnie określić, ile lumenów potrzebujesz do każdego pomieszczenia, uwzględniając wielkość pomieszczenia, wysokość sufitu, kolory powierzchni i rodzaj żarówki.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Zalecany Zakres Lux', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'Wydajność LED', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Współczynnik Utrzymania', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ciepłe Oświetlenie Ogólne',
          description: 'Idealne do salonów i sypialni. Tworzy przytulną atmosferę i zmniejsza zmęczenie oczu wieczorem.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Ciepła temperatura barwowa (2700K)', 'Wiele źródeł ściemnialnych'],
        },
        {
          title: 'Jasne Oświetlenie Robocze',
          description: 'Niezbędne w kuchniach, biurach i łazienkach. Zapewnia wyraźną widoczność do prac szczegółowych.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Zimna biel (4000K)', 'Skoncentrowane na powierzchniach roboczych'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Dlaczego Wymiary Pomieszczenia Mają Znaczenie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Światło rozprzestrzenia się i słabnie wraz z odległością. Żarówka, która jest wystarczająco jasna dla sufitu o wysokości 2,5 metra, może być zbyt słaba dla sufitu o wysokości 4 metrów. Kalkulator uwzględnia to, wykorzystując wzór na wskaźnik pomieszczenia, który bierze pod uwagę zarówno powierzchnię podłogi, jak i wysokość montażu, aby oszacować, ile światła faktycznie dociera do płaszczyzny pracy.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybka Tabela Referencyjna Lux',
      icon: 'mdi:table',
      badge: 'Referencja',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Salon</strong> → 150 lux</li><li><strong>Kuchnia</strong> → 300 lux</li><li><strong>Sypialnia</strong> → 100 lux</li><li><strong>Łazienka</strong> → 200 lux</li><li><strong>Biuro</strong> → 500 lux</li><li><strong>Korytarz</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Wskazówki Ekspertów dla Lepszego Oświetlenia',
      items: [
        'Warstwuj trzy rodzaje światła: ogólne, robocze i akcentowe.',
        'Używaj ściemniaczy, aby dostosować jasność do różnych pór dnia.',
        'Wybieraj żarówki LED dla długiej żywotności i niskiego zużycia energii.',
        'Umieszczaj lampy biurkowe po przeciwnej stronie względem dominującej ręki, aby uniknąć cieni.',
        'Rozważ żarówki smart dla automatycznego planowania i zmiany temperatury barwowej.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Kalkulator Oświetlenia Pokoju',
    labelRoomType: 'Typ pomieszczenia',
    labelRoomWidth: 'Szerokość',
    labelRoomLength: 'Długość',
    labelHeight: 'Sufit',
    labelBulbType: 'Żarówka',
    labelBulbWatt: 'Moc',
    labelFixtures: 'Oprawy',
    labelAmbient: 'Nastrój',
    btnAmbientCozy: 'Przytulny',
    btnAmbientNormal: 'Normalny',
    btnAmbientBright: 'Jasny',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'szt',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Docelowy lux',
    labelCurrentLux: 'Aktualny lux',
    labelBulbsNeeded: 'Potrzebne żarówki',
    labelRoomArea: 'Powierzchnia',
    statusOptimal: 'Idealnie',
    statusInsufficient: 'Za Ciemno',
    statusExcess: 'Za Jasno',
    btnLiving: 'Salon',
    btnKitchen: 'Kuchnia',
    btnBedroom: 'Sypialnia',
    btnBathroom: 'Łazienka',
    btnOffice: 'Biuro',
    btnHallway: 'Korytarz',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halog.',
    btnBulbIncandescent: 'Żarówka',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Oświetlenie jest idealnie zrównoważone dla tego pomieszczenia.',
    tipInsufficient: 'Dodaj więcej opraw lub żarówek o wyższej mocy.',
    tipExcess: 'Zmniejsz liczbę opraw lub ściemniaj, aby oszczędzać energię.',
    labelManualAdjust: 'Regulacja ręczna',
    labelSummary: 'Twój plan oświetlenia',
    labelTotalLumens: 'Całkowita liczba lumenów',
    labelSuggestedSetup: 'Zalecana konfiguracja',
    btnExport: 'Eksportuj PDF',
  },
};
