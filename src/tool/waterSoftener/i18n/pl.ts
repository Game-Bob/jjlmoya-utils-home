import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-zmiekczacza';
const title = 'Domowy zmiękczacz wody i optymalizator zużycia soli';
const description =
  'Przeanalizuj poziom twardości wody, oblicz optymalne ustawienia zmiękczacza i oszacuj roczne zużycie soli. Zobacz prognozy wpływu osadu, harmonogramy uzupełniania soli i przewidywania żywotności urządzeń w jednym interaktywnym narzędziu.';

const faqData = [
  {
    question: 'Co to jest twardość wody?',
    answer:
      'Twardość wody to stężenie rozpuszczonych minerałów wapnia i magnezu w wodzie z kranu. Mierzy się ją w grainach na galon lub stopniach francuskich. Twarda woda powoduje odkładanie się kamienia w rurach, zmniejsza efektywność grzania i skraca żywotność urządzeń.',
  },
  {
    question: 'Jak działa zmiękczacz wody?',
    answer:
      'Zmiękczacz wody wykorzystuje żywicę jonowymienną do wymiany jonów wapnia i magnezu na jony sodu. Gdy żywica nasyci się, system regeneruje się przez przepłukanie zbiornika roztworem solnym, co przywraca koraliki i usuwa twarde minerały do kanalizacji.',
  },
  {
    question: 'Ile soli zużywa zmiękczacz rocznie?',
    answer:
      'Typowe gospodarstwo domowe czteroosobowe z wodą o umiarkowanej twardości zużywa od 80 do 120 kilogramów soli rocznie. Bardzo twarda woda lub większe gospodarstwa mogą zwiększyć to powyżej 200 kilogramów. Nowoczesne zmiękczacze wysokiej efektywności zużywają około 30 procent mniej soli niż starsze modele.',
  },
  {
    question: 'Jak często należy uzupełniać zbiornik soli?',
    answer:
      'Większość zbiorników solanki wymaga uzupełniania co 4 do 8 tygodni. Sprawdzaj poziom soli co miesiąc. Jeśli zbiornik jest wypełniony w mniej niż jednej trzeciej, dodaj nowy worek 25 kilogramowy. Nigdy nie dopuszczaj do całkowitego wyczerpania soli, ponieważ żywica stwardnieje i straci skuteczność.',
  },
  {
    question: 'Czy twarda woda naprawdę niszczy urządzenia?',
    answer:
      'Tak. Osad z kamienia na elementach grzejnych zmusza je do cięższej pracy, co zwiększa rachunki za energię i powoduje przedwczesne uszkodzenia. Podgrzewacz wody w obszarze z bardzo twardą wodą może stracić do 45 procent przewidywanej żywotności. Pralki i zmywarki również cierpią z powodu zatkanych zaworów i zkamieniałych bębnów.',
  },
  {
    question: 'Czy mogę pić zmiękczoną wodę?',
    answer:
      'Zmiękczona woda jest bezpieczna do picia dla większości osób. Wzrost sodu jest niewielki, mniej więcej równoważny jednej kromce chleba dziennie. Jednak osoby na ścisłej diecie niskosodowej mogą preferować oddzielny, niezmiękczony kran do picia wody lub wybrać sól zmiękczającą na bazie potasu.',
  },
];

const howToData = [
  {
    name: 'Wprowadź twardość wody',
    text: 'Wpisz wartość twardości z raportu o jakości wody lub paska testowego. Wybierz grainy na galon lub stopnie francuskie z selektora jednostek.',
  },
  {
    name: 'Ustaw liczbę mieszkańców',
    text: 'Wybierz liczbę osób mieszkających w domu. Więcej mieszkańców oznacza wyższe zużycie wody i szybsze zużycie soli.',
  },
  {
    name: 'Wybierz pojemność zmiękczacza',
    text: 'Wprowadź pojemność żywicy zmiękczacza w grainach. Zazwyczaj jest to wydrukowane na zaworze sterującym lub w instrukcji obsługi. Powszechne wartości to 24 000 lub 32 000 grainów.',
  },
  {
    name: 'Sprawdź kategorię twardości',
    text: 'Przeczytaj interaktywną skalę twardości, aby zrozumieć, czy Twoja woda jest miękka, umiarkowanie twarda czy bardzo twarda.',
  },
  {
    name: 'Sprawdź prognozę soli',
    text: 'Spójrz na symulator stosu worków solnych, aby zobaczyć, ile worków po 25 kilogramów będziesz potrzebował rocznie i kiedy nastąpi kolejne uzupełnienie.',
  },
  {
    name: 'Sprawdź wpływ na urządzenia',
    text: 'Porównaj bazową żywotność pralki, podgrzewacza wody i ekspresu do kawy z ich szacowaną żywotnością przy obecnej, nieuzdatnionej wodzie.',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: 'Niewidoczne koszty twardej wody',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Twarda woda jest jednym z najdroższych ukrytych problemów w domu. Za każdym razem, gdy otwierasz kran, rozpuszczone minerały przepływają przez rury i urządzenia. Przez miesiące i lata minerały te krystalizują się w osad kamienny, twardą białą skorupę, która zatyka elementy grzejne, zmniejsza przepływ i niszczy uszczelki gumowe. Wynikiem są wyższe rachunki za energię, krótsza żywotność urządzeń i częste wizyty serwisowe. Zmiękczacz wody eliminuje to uszkodzenie u źródła.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Śr. roczne zużycie soli', icon: 'mdi:shaker-outline' },
        { value: '11 lat', label: 'Bazowa żywotność pralki', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm osadu na GPG/rok', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Dlaczego osad kamienny jest tak destrukcyjny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Osad kamienny to nie tylko kosmetyczna plama w czajniku. Wewnątrz podgrzewacza wody tworzy izolującą warstwę na elemencie grzewczym. Na każdy milimetr osadu sprawność przekazywania energii spada nawet o 10 procent. Oznacza to, że 3-milimetrowa powłoka może zwiększyć rachunki za ogrzewanie wody o prawie 30 procent. W pralkach kamień blokuje aktywację detergentu, więc używasz więcej proszku do gorszych rezultatów. W ekspresach do kawy psuje termostat i powoduje gorzką, nierównomierną ekstrakcję.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Nieuzdatniona twarda woda',
          description: 'Minerały osadzają się swobodnie w całym systemie hydraulicznym i każdym podłączonym urządzeniu.',
          icon: 'mdi:alert',
          points: ['Szybki narost kamienia w podgrzewaczach i kotłach', 'Zwiększone zużycie detergentu i mydła', 'Skrócenie żywotności urządzeń o 30 do 45 procent', 'Wyższe rachunki za energię z powodu izolującego działania kamienia'],
        },
        {
          title: 'Zmiękczona woda',
          description: 'Wapń i magnez są usuwane w punkcie wejścia, zanim dotrą do kranów i urządzeń.',
          icon: 'mdi:check-circle',
          points: ['Zero osadzania się kamienia na elementach grzejnych', 'Normalne dawki detergentu dają lepsze rezultaty', 'Urządzenia osiągają pełną projektową żywotność', 'Niższe zużycie energii na podgrzewanie wody'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybki test twardej wody',
      icon: 'mdi:clipboard-check',
      badge: 'Działanie',
      html: '<p style="margin:0">Napełnij przezroczystą butelkę wodą z kranu i dodaj kilka kropli płynnego mydła. Mocno potrząśnij. Jeśli woda pozostaje mętna i produkuje bardzo mało piany, Twoja woda jest twarda. Krystalicznie czysta woda z gęstą, trwałą pianą wskazuje na miękką wodę. Aby uzyskać precyzyjny pomiar, użyj paska testowego do pomiaru całkowitej twardości lub poproś o raport od dostawcy wody.</p>',
    },
    {
      type: 'title',
      text: 'Dobierz zapas soli właściwie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wyczerpanie zapasu soli to najszybszy sposób na zniszczenie zmiękczacza. Gdy zbiornik solanki opróżni się, łoże żywicy stwardnieje w ciągu kilku dni, a system przestanie chronić Twój dom. Użyj tego kalkulatora, aby dokładnie przewidzieć, ile worków po 25 kilogramach potrzebujesz rocznie. Jeśli wynik przekracza 10 worków, rozważ przejście na większy zbiornik żywicy lub zawór wysokiej efektywności, który zużywa mniej soli na cykl regeneracji.',
    },
    {
      type: 'summary',
      title: 'Jak chronić dom przed twardą wodą',
      items: [
        'Użyj tego kalkulatora, aby określić dokładną kategorię twardości wody i zapotrzebowanie na sól.',
        'Zainstaluj odpowiednio dobrany zmiękczacz wody przy głównym zasilaniu wodnym.',
        'Uzupełniaj zbiornik solanki, zanim spadnie poniżej jednej trzeciej pojemności.',
        'Używaj tabletek soli odparowanej o wysokiej czystości dla najlepszej wydajności żywicy.',
        'Serwisuj zawór i łoże żywicy co 3 do 5 lat.',
        'Monitoruj rachunki za energię urządzeń pod kątem nagłych wzrostów, które mogą sygnalizować narastanie kamienia.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Twardość wody',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Liczba mieszkańców',
    unitPeople: 'osób',
    labelSoftenerCapacity: 'Pojemność zmiękczacza',
    unitGrains: 'grainy',
    hardnessSoft: 'Miękka',
    hardnessSlightly: 'Lekko twarda',
    hardnessModerate: 'Umiarkowanie twarda',
    hardnessHard: 'Twarda',
    hardnessVery: 'Bardzo twarda',
    hardnessExtreme: 'Ekstremalnie twarda',
    scaleTitle: 'Szybkość narastania kamienia',
    scaleUnitMetric: 'mm/rok',
    scaleUnitImperial: 'in/rok',
    saltTitle: 'Roczna prognoza soli',
    saltAnnual: 'Roczna sól',
    saltBags: 'Worki rocznie',
    saltDaysPerBag: 'Dni na worek',
    saltWeeksPerBag: 'Tygodnie na worek',
    applianceTitle: 'Żywotność urządzeń',
    applianceWasher: 'Pralka',
    applianceHeater: 'Podgrzewacz wody',
    applianceCoffee: 'Ekspres do kawy',
    applianceBaseline: 'Ze zmiękczaczem',
    applianceWithHardness: 'Z twardą wodą',
    applianceSaved: 'lat',
    badgeSaved: 'Wydłużono o',
    labelUnitSystem: 'Jednostki',
    btnMetric: 'Metryczne',
    btnImperial: 'Imperialne',
  },
};
