import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'porownanie-ogrzewania-gaz-pompa-ciepla-klimatyzacja';
const title = 'Porównanie: Gaz vs. Pompa Ciepła vs. Klimatyzacja';
const description = 'Oblicz ile oszczędzisz zamieniając kocioł gazowy na pompę ciepła lub klimatyzację. Rzeczywiste porównanie zużycia energii i efektywności dla Twojego domu.';

const faqData = [
  {
    question: 'Co jest tańsze: pompa ciepła czy gaz ziemny?',
    answer: 'W ujęciu miesięcznych kosztów eksploatacji, pompa ciepła jest znacznie tańsza od gazu ziemnego. Dzięki sprawności na poziomie 400% (COP 4), koszt dostarczonej kWh ciepła jest zazwyczaj o 30% do 50% niższy niż w przypadku gazu, mimo wyższej ceny energii elektrycznej.',
  },
  {
    question: 'Czym różni się pompa ciepła od zwykłej klimatyzacji?',
    answer: 'Technicznie oba urządzenia są pompami ciepła. Główna różnica to medium, do którego oddają ciepło: klasyczna pompa ciepła to zazwyczaj układ "powietrze-woda" (grzeje wodę w grzejnikach lub podłogówce), natomiast klimatyzacja to układ "powietrze-powietrze" (grzeje bezpośrednio powietrze przez jednostki wewnętrzne).',
  },
  {
    question: 'Czy mogę zainstalować pompę ciepła w domu ze starymi grzejnikami?',
    answer: 'Tak, instalacja pompy ciepła ze zwykłymi grzejnikami jest możliwa przy użyciu urządzeń "wysokotemperaturowych". Jednak dla maksymalnych oszczędności idealne jest połączenie z ogrzewaniem podłogowym lub grzejnikami niskotemperaturowymi.',
  },
  {
    question: 'Po ilu latach zwraca się inwestycja w pompę ciepła?',
    answer: 'Zależnie od zużycia energii oraz dostępnych dotacji (np. program "Czyste Powietrze"), okres zwrotu wynosi zazwyczaj od 5 do 8 lat. Przy posiadaniu instalacji fotowoltaicznej okres ten może ulec znacznemu skróceniu.',
  },
];

const howToData = [
  {
    name: 'Powierzchnia domu',
    text: 'Wprowadź powierzchnię użytkową swojego domu, aby oszacować roczne zapotrzebowanie na ciepło.',
  },
  {
    name: 'Ceny energii',
    text: 'Dopasuj ceny gazu i prądu zgodnie ze swoimi rachunkami dla większej precyzji obliczeń.',
  },
  {
    name: 'Zobacz wyniki',
    text: 'Porównaj trzy systemy obok siebie i sprawdź, który wygrywa pod względem sprawności i kosztów.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Kluczowe rady przy wyborze ogrzewania',
      items: [
        '<strong>Pompa ciepła</strong> jest do 400% wydajniejsza niż kocioł gazowy.',
        'Dobra <strong>termoizolacja</strong> obniża rachunki bardziej niż jakikolwiek kocioł.',
        '<strong>Zwrot inwestycji</strong> w systemy elektryczne to ok. 6-8 lat.',
        'Połącz z <strong>fotowoltaiką</strong> dla niemal darmowego ogrzewania.',
      ],
    },
    {
      type: 'title',
      text: 'Porównanie zużycia: Gaz vs. Pompa Ciepła vs. Klimatyzacja',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wybór odpowiedniego systemu ogrzewania to jedna z najważniejszych decyzji finansowych dotyczących Twojego domu. W dobie zmiennych cen energii i rosnącej troski o ekologię, wiedza o tym, który system jest najsprawniejszy — i który pozwoli najwięcej zaoszczędzić — jest kluczowa.',
    },
    {
      type: 'paragraph',
      html: 'Przez lata gaz ziemny był w Polsce standardem. Jednak popularyzacja <strong>pomp ciepła (powietrze-woda)</strong> oraz rozwój technologiczny <strong>klimatyzatorów grzewczych (powietrze-powietrze)</strong> zmieniły reguły gry. Nasz kalkulator pomoże Ci zwizualizować roczne koszty na podstawie realnych danych.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Sprawność pompy ciepła',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'top', positive: true },
        },
        {
          label: 'Średnia oszczędność',
          value: '2200 zł',
          icon: 'mdi:piggy-bank',
          trend: { value: 'rocznie', positive: true },
        },
        {
          label: 'Żywotność urządzeń',
          value: '20 lat',
          icon: 'mdi:calendar-check',
          trend: { value: 'standard', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. Kocioł Gazowy: Tradycyjny Standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ogrzewanie gazowe wykorzystuje kocioł do spalania paliwa w celu podgrzania wody, która krąży w grzejnikach lub ogrzewaniu podłogowym.',
    },
    {
      type: 'list',
      items: [
        '<strong>Wydajność:</strong> Nowoczesne kotły kondensacyjne mają sprawność bliską 100%.',
        '<strong>Zalety:</strong> Stabilna technologia, szybkie nagrzewanie i niższe koszty początkowe instalacji.',
        '<strong>Wady:</strong> Uzależnienie od paliw kopalnych, opłaty stałe w rachunkach za gaz oraz emisja CO2.',
      ],
    },
    {
      type: 'title',
      text: '2. Pompa Ciepła: Maksymalna Sprawność (Powietrze-Woda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pompa ciepła pobiera energię z powietrza zewnętrznego (nawet przy ujemnych temperaturach) i przekazuje ją do wnętrza domu w celu podgrzania wody grzewczej oraz wody użytkowej.',
    },
    {
      type: 'list',
      items: [
        '<strong>Wskaźnik COP:</strong> System pompy ciepła ma zazwyczaj średni COP na poziomie 4. Oznacza to, że z 1 kWh prądu oddaje 4 kWh ciepła do domu.',
        '<strong>Zalety:</strong> Pełna ekologia przy fotowoltaice, jedno urządzenie do grzania i chłodzenia, najniższe koszty eksploatacji.',
        '<strong>Wady:</strong> Wysoki koszt zakupu (zazwyczaj zwraca się w 5-8 lat) i wymóg miejsca na jednostkę zewnętrzną.',
      ],
    },
    {
      type: 'tip',
      title: 'Rada Oszczędnościowa',
      html: 'Pompa ciepła najlepiej sprawdza się z ogrzewaniem podłogowym, ponieważ woda musi być podgrzana tylko do 35°C, w przeciwieństwie do 60-70°C w tradycyjnych grzejnikach.',
    },
    {
      type: 'proscons',
      title: 'Pompa Ciepła vs Gaz',
      proTitle: 'Dlaczego Pompa?',
      conTitle: 'Dlaczego Gaz?',
      items: [
        { pro: 'Bezkonkurencyjna sprawność (COP 4+)', con: 'Tańsza instalacja başlangıçta' },
        { pro: 'Niezależność od paliw kopalnych', con: 'Szybkie ciepło o dużej mocy' },
        { pro: 'Grzanie i chłodzenie w jednym', con: 'Działa ze starymi grzejnikami' },
        { pro: 'Idealna pod fotowoltaikę', con: 'Brak jednostki zewnętrznej' },
      ],
    },
    {
      type: 'title',
      text: '3. Klimatyzacja (Pompa Ciepła Powietrze-Powietrze)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To popularny klimatyzator typu split. Działa na tej samej zasadzie co pompa ciepła, ale grzeje bezpośrednio powietrze, a nie wodę. Doskonałe rozwiązanie w łagodniejszym klimacie lub jako wsparcie. Sprawność (SCOP) wynosi zazwyczaj od 3 do 3.5.',
    },
    {
      type: 'title',
      text: 'Zrozumienie wzoru obliczeń',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aby uczciwie porównać te systemy, przeliczamy zużycie na koszt 1 kWh netto dostarczonego ciepła:',
    },
    {
      type: 'code',
      code: 'Roczny Koszt = (Zapotrzebowanie Cieplne Domu / Sprawność Systemu) × Cena Energii',
      ariaLabel: 'Wzór na roczny koszt ogrzewania',
    },
    {
      type: 'paragraph',
      html: 'Gdzie:',
    },
    {
      type: 'list',
      items: [
        '<strong>Zapotrzebowanie cieplne:</strong> kWh ciepła potrzebne rocznie (zależy od izolacji i metrów).',
        '<strong>Sprawność:</strong> 0.95 dla gazu, 4.0 dla pompy ciepła i 3.2 dla klimy.',
        '<strong>Cena energii:</strong> Koszt za kWh z uwzględnieniem podatków.',
      ],
    },
    {
      type: 'card',
      title: 'Przykład: Dom 100m²',
      icon: 'mdi:home-analytics',
      html: '<p>Wyobraźmy sobie dom potrzebujący 7 000 kWh ciepła rocznie:</p><ul><li><strong>Gaz:</strong> ok. 1900 zł/rok</li><li><strong>Pompa Ciepła:</strong> ok. 1000 zł/rok (Oszczędzasz 47%)</li><li><strong>Klima:</strong> ok. 1300 zł/rok</li></ul>',
    },
    {
      type: 'title',
      text: 'Znaczenie izolacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Żaden system nie będzie wydajny w nieszczelnym domu. Zanim zainwestujesz w nowe źródło ciepła, sprawdź okna i docieplenie ścian. Dobra izolacja może zmniejszyć zapotrzebowanie na ciepło o połowę.',
    },
    {
      type: 'title',
      text: 'Mity o pompach ciepła',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>"Nie działa podczas mrozów":</strong> Nieprawda. Nowoczesne jednostki pracują wydajnie do -15°C lub nawet -20°C.',
        '<strong>"Wysusza powietrze":</strong> Dotyczy to tylko klimatyzacji (nawiewu). Ogrzewanie podłogowe z pompą wody jest bardzo komfortowe.',
        '<strong>"Prąd jest za drogi":</strong> Nawet przy wyższej cenie prądu niż gazu, sprawność 400% całkowicie odwraca rachunek na korzyść elektryczności.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Czy wiesz, że?',
      icon: 'mdi:lightbulb-on',
      badge: 'Fakt',
      html: '<p>Wskaźnik COP zmienia się zależnie od temperatury na zewnątrz. Przy dużym mrozie sprawność nieco spada, ale wciąż jest wielokrotnie wyższa od jakiegokolwiek grzejnika elektrycznego czy kotła.</p>',
    },
    {
      type: 'title',
      text: 'Podsumowanie: Przyszłość jest elektryczna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Trend w Europie jest jasny: dekarbonizacja budownictwa. Ceny gazu będą prawdopodobnie rosły. Połączenie fotowoltaiki i pompy ciepła to dziś najlepszy sposób na komfort i oszczędności.',
    },
  ],
  ui: {
    titleVivienda: '1. Dane Twojego domu',
    helperVivienda: 'Skonfiguruj parametry budynku',
    labelM2: 'Powierzchnia Całkowita',
    helperM2: 'Metry kwadratowe Twojego domu.',
    labelAislamiento: 'Poziom Izolacji',
    helperAislamiento: 'Jak dobrze Twój dom trzyma ciepło?',
    optExcelent: 'Doskonała (Nowy dom / Standard pasywny)',
    optMedium: 'Średnia (Okna dwuszybowe / Standardowa izolacja)',
    optPoor: 'Słaba (Stary dom / Brak ocieplenia ścian)',
    titleCoste: '2. Koszty energii',
    descCoste: 'Sprawdź na ostatnim rachunku cenę za kWh.',
    labelGasPrice: 'Koszt Gazu',
    helperGasPrice: 'Cena za każdą zużytą kWh gazu.',
    labelElecPrice: 'Koszt Prądu',
    helperElecPrice: 'Cena za każdą zużytą kWh energii elektrycznej.',
    titleComparison: '3. Porównanie Roczne',
    descComparison: 'Szacunek oparty na sprawności technicznej urządzeń.',
    systemGas: 'Kocioł Gazowy',
    systemAero: 'Pompa Ciepła',
    systemAir: 'Klimatyzacja (Split)',
    labelAnnualCost: 'Wydatki na Ogrzewanie',
    labelEfficiency: 'Sprawność',
    labelSource: 'Źródło',
    labelEnergy: 'Energia',
    labelInstallation: 'Instalacja',
    valGasSource: 'Gaz Ziemny',
    valAeroEnergy: 'OZE + Prąd',
    valAirInstall: 'Powietrze-Powietrze',
    winnerBadge: 'Najwydajniejszy',
    unitCurrency: 'zł',
  },
};
