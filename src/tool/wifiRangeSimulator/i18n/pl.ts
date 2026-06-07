import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'symulator-zasiegu-wifi';
const title = 'Symulator Zasięgu i Przeszkód WiFi';
const description =
  'Naszkicuj plan swojego domu, umieść ściany, drzwi, meble i urządzenia, a następnie przeciągnij router i urządzenie, aby znaleźć najlepszą ścieżkę sygnału. Zobacz na żywo utratę zasięgu, ocenę strumieniowania i wskazówki dotyczące rozmieszczenia, aby wyeliminować martwe strefy bez kupowania nowego sprzętu.';

const faqData = [
  {
    question: 'Dlaczego mój sygnał Wi-Fi słabnie w niektórych pomieszczeniach?',
    answer:
      'Wi-Fi wykorzystuje fale radiowe, które są pochłaniane, odbijane lub blokowane przez materiały fizyczne. Pełna cegła, beton i metal są najgorsze, każdy z nich znacznie zmniejsza siłę sygnału. Woda i szkło również mogą odbijać lub pochłaniać części sygnału.',
  },
  {
    question: 'Jak bardzo ściana betonowa lub kamienna wpływa na Wi-Fi?',
    answer:
      'Standardowa ściana betonowa może tłumić sygnał 2,4 GHz o 10 do 20 decybeli. Grube kamienne ściany o grubości 70 do 80 centymetrów mogą osiągnąć 22 decybele lub więcej. Przekłada się to na mniej więcej 50 do 90 procent utraty zasięgu, w zależności od grubości i gęstości. Przy 5 GHz utrata jest jeszcze większa, ponieważ wyższe częstotliwości są szybciej pochłaniane przez gęste materiały.',
  },
  {
    question: 'Gdzie umieścić router, aby uzyskać najlepszy zasięg?',
    answer:
      'Centralnie, podwyższony i otwarty. Umieść router na środku domu, co najmniej metr od grubych ścian i metalowych przedmiotów, i podnieś go na wysokość klatki piersiowej dla poziomego rozproszenia. Unikaj kątów, szaf i niskich pozycji za meblami.',
  },
  {
    question: 'Czy szklane drzwi mogą blokować Wi-Fi?',
    answer:
      'Czyste szkło ma minimalny wpływ, ale okna powlekane lub podwójnie oszklone z foliami metalicznymi mogą odbijać sygnały. Symulator traktuje standardowe szkło jako lekką przeszkodę z utratą około 2 do 3 decybeli.',
  },
];

const howToData = [
  {
    name: 'Zidentyfikuj ścieżkę sygnału',
    text: 'Wyobraź sobie prostą linię między routerem a urządzeniem, które cię interesuje. Każdy obiekt przecinający tę linię ma znaczenie.',
  },
  {
    name: 'Dodaj każdą przeszkodę',
    text: 'Kliknij przyciski materiałów w symulatorze, aby dodać każdą ścianę, drzwi, urządzenie lub mebel przecinający ścieżkę.',
  },
  {
    name: 'Odczytaj werdykt',
    text: 'Obserwuj, jak pierścień sygnału, animacja fali i panel strumieniowania aktualizują się natychmiast podczas dodawania lub usuwania obiektów.',
  },
  {
    name: 'Zastosuj kontekstową wskazówkę',
    text: 'Postępuj zgodnie z kartami rozmieszczenia, które pojawiają się na podstawie dokładnej kombinacji przeszkód, aby poprawić zasięg bez kupowania nowego sprzętu.',
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

export const content: ToolLocaleContent<WifiRangeSimulatorUI> = {
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
      text: 'Dlaczego twoje Wi-Fi umiera w pokoju obok',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Twój router emituje fale radiowe we wszystkich kierunkach. Te fale łatwo przemieszczają się przez powietrze, ale każdy napotkany fizyczny obiekt odbija się na nich. Niektóre materiały przepuszczają większość sygnału. Inne pożerają go całkowicie. Zrozumienie, które przedmioty w twoim domu po cichu zabijają twoje połączenie, to pierwszy krok do naprawienia martwych stref bez wydawania ani złotówki na nowy sprzęt.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Strata płyty gipsowej', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Gruba ściana kamienna', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Drzwi metalowe', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Prawdziwy koszt każdego przedmiotu w twoim domu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie przeszkody są sobie równe. Pojedyncza płyta gipsowo-kartonowa może odjąć kilka procent sygnału, ale betonowy filar lub metalowe drzwi mogą zmniejszyć efektywny zasięg o połowę. Oto z czym naprawdę się mierzysz, gdy umieszczasz router za telewizorem, obok lodówki lub na podłodze pod metalową półką.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lekkie przeszkody',
          description: 'Te obiekty powodują minimalną utratę sygnału i zwykle są bezpieczne w pobliżu ścieżki sygnału. Nie powinieneś martwić się pojedynczym oknem lub szklanymi drzwiami.',
          icon: 'mdi:window-open-variant',
          points: [
            'Szklane drzwi: 2 do 3 dB utraty',
            'Standardowe okno: 2 dB utraty',
            'Ścianka gipsowo-kartonowa: 3 dB utraty',
            'Drewniane drzwi wewnętrzne: 4 dB utraty',
          ],
        },
        {
          title: 'Umiarkowane przeszkody',
          description: 'Te obiekty powodują zauważalne obniżenie zasięgu. Jeden lub dwa są w porządku, ale nagromadzenie trzech lub więcej na tej samej ścieżce sygnału zacznie powodować buforowanie i opóźnienia.',
          icon: 'mdi:wardrobe',
          points: [
            'Drewniana szafa: 5 dB utraty',
            'Duże lustro: 6 dB utraty',
            'Pralka: 6 dB utraty',
            'Kuchenka mikrofalowa: 5 dB utraty',
          ],
        },
        {
          title: 'Ciężkie przeszkody',
          description: 'To są cisi zabójcy domowych sieci. Pojedyncza betonowa ściana lub metalowe drzwi mogą zamienić silny sygnał w słaby, a ich nagromadzenie tworzy gwarantowane martwe strefy.',
          icon: 'mdi:wall',
          points: [
            'Ściana z pełnej cegły: 8 dB utraty',
            'Podłoga lub sufit: 10 dB utraty',
            'Lodówka: 10 dB utraty',
            'Akwarium: 12 dB utraty',
          ],
        },
        {
          title: 'Ekstremalne przeszkody',
          description: 'Te materiały pochłaniają lub odbijają prawie całą energię radiową. Jeśli twoja ścieżka sygnału przecina jeden z nich, musisz przenieść router lub urządzenie. Nie ma obejścia.',
          icon: 'mdi:shield',
          points: [
            'Gruba ściana kamienna (70-80 cm): 22 dB utraty',
            'Ściana betonowa: 15 dB utraty',
            'Metalowa szafka: 12 dB utraty',
            'Metalowe drzwi lub brama: 18 dB utraty',
            'Szyb windowy: 20+ dB utraty',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Jak różne częstotliwości zachowują się przez ściany',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Większość nowoczesnych routerów nadaje na dwóch pasmach: 2,4 GHz i 5 GHz. Niższa częstotliwość dociera dalej i łatwiej przenika przez ściany, ale jest wolniejsza i zatłoczona. Wyższa częstotliwość jest błyskawiczna, ale jest pochłaniana przez każdą przeszkodę na swojej drodze.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Penetracja 2,4 GHz',
          description: 'Niższe częstotliwości docierają dalej i lepiej przenikają ściany. Idealne do dalekiego zasięgu, ale zatłoczone sąsiednimi sieciami.',
          icon: 'mdi:signal',
          points: [
            'Lepsza przez pełną cegłę i beton',
            'Więcej zakłóceń od routerów sąsiadów',
            'Niższe prędkości maksymalne, około 150 Mbps w rzeczywistości',
            'Lepsza dla urządzeń inteligentnego domu i IoT',
          ],
        },
        {
          title: 'Penetracja 5 GHz',
          description: 'Wyższe częstotliwości oferują wyższe prędkości, ale są znacznie szybciej pochłaniane przez materiały budowlane. Najlepsze do otwartych przestrzeni i pobliskich urządzeń.',
          icon: 'mdi:signal-5g',
          points: [
            'Słaba przez beton i metal',
            'Mniej zakłóceń, czystsze kanały',
            'Prędkości gigabitowe w tym samym pomieszczeniu',
            'Gorszy zasięg, lepsza jakość tam, gdzie dociera',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Ukryci zabójcy: przedmioty, których nigdy byś nie podejrzewał',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Większość ludzi obwinia ściany, ale niektóre z najgorszych zabójców Wi-Fi to codzienne przedmioty. Akwarium to głównie woda, a woda pochłania fale radiowe 2,4 GHz prawie idealnie. Duże lustro ma cienką metalową warstwę z tyłu, która odbija sygnał z dala od urządzenia. Kuchenka mikrofalowa emituje promieniowanie o częstotliwości 2,4 GHz, dokładnie tej samej co router, powodując zakłócenia za każdym razem, gdy podgrzewasz zupę.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pułapka akwarium',
      icon: 'mdi:fish',
      badge: 'Niespodziewany bloker',
      html: '<p>Duże akwarium może tłumić sygnał Wi-Fi nawet o 12 decybeli. To tyle, co gruba betonowa ściana. Jeśli router jest po jednej stronie akwarium, a biurko po drugiej, woda wyrządza więcej szkód niż ściana za nim.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Efekt lustra',
      icon: 'mdi:mirror',
      badge: 'Zagrożenie odbiciem',
      html: '<p>Duże lustra mają cienką warstwę metalu z tyłu zaprojektowaną do odbijania światła. Ta sama metalowa warstwa odbija również fale radiowe. Lustro skierowane w stronę routera może odbijać sygnał z dala od miejsca, w którym go potrzebujesz, lub tworzyć mylące interferencje wielościeżkowe, które mieszają pakiety danych.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zakłócenia mikrofalowe',
      icon: 'mdi:microwave',
      badge: 'Aktywny zagłuszacz',
      html: '<p>Kuchenki mikrofalowe działają na częstotliwości 2,45 GHz, nakładającej się bezpośrednio na pasmo Wi-Fi 2,4 GHz. Podczas pracy mikrofalówka może zniszczyć sygnał 2,4 GHz w promieniu 3 do 5 metrów. Jeśli router obsługuje tylko 2,4 GHz, a kuchnia jest w pobliżu, przełącz się na router dwuzakresowy i używaj 5 GHz do krytycznych zadań.</p>',
    },
    {
      type: 'title',
      text: 'Pokój po pokoju: gdzie umieścić router',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Idealna lokalizacja routera nie jest najwygodniejsza. To ta, która zapewnia najczystszą linię widoczności do pomieszczeń, w których faktycznie używasz internetu. Oto jak myśleć o każdym pomieszczeniu.',
    },
    {
      type: 'table',
      headers: ['Pomieszczenie', 'Poziom ryzyka', 'Dlaczego trudne', 'Rozwiązanie'],
      rows: [
        ['Kuchnia', 'Wysoki', 'Lodówka, mikrofalówka, metalowe szafki, rury wodne', 'Umieść router poza kuchnią, nigdy w środku.'],
        ['Łazienka', 'Wysoki', 'Lustra, rury wodne, płytki z metalową siatką', 'Unikaj umieszczania routera za ścianą łazienki.'],
        ['Sypialnia', 'Średni', 'Szafy, grube ściany, metalowe ramy łóżek', 'Podnieś router, oczyść ścieżkę nad meblami.'],
        ['Salon', 'Niski', 'Zwykle otwarty, ale uważaj na telewizory i konsole', 'Trzymaj router widoczny, nie ukryty za telewizorem.'],
        ['Garaż', 'Ekstremalny', 'Metalowe drzwi, beton, samochody', 'Nie oczekuj, że router wewnętrzny dosięgnie garażu.'],
        ['Ogród / Taras', 'Wysoki', 'Ściany zewnętrzne, szkło, odległość', 'Użyj zewnętrznego punktu dostępowego lub węzła mesh.'],
      ],
    },
    {
      type: 'title',
      text: 'Zasada jednego metra i inne sztuczki rozmieszczenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Małe ruchy tworzą duże różnice. Nie musisz przekablać domu. Musisz tylko zrozumieć, jak poruszają się fale radiowe i dać im czystą ścieżkę.',
    },
    {
      type: 'tip',
      title: 'Zasada jednego metra',
      html: '<p>Przesunięcie routera zaledwie o metr od betonowej lub metalowej bariery może przywrócić do 40 procent utraconej siły sygnału.</p>',
    },
    {
      type: 'tip',
      title: 'Podnieś dla zasięgu',
      html: '<p>Podnieś router na wysokość klatki piersiowej na półce. Sygnały promieniują poziomo z anteny. Umieszczenie go na podłodze marnuje połowę zasięgu w ziemię.</p>',
    },
    {
      type: 'tip',
      title: 'Trzymaj go widocznym',
      html: '<p>Nigdy nie chowaj routera w szafce, szafie ani za telewizorem. Obudowa działa jak klatka Faradaya, zatrzymując sygnał, zanim dotrze do pokoju.</p>',
    },
    {
      type: 'tip',
      title: 'Ustawienie anten',
      html: '<p>Jeśli twój router ma zewnętrzne anteny, ustaw jedną pionowo, a drugą poziomo. Zapewnia to lepszy zasięg dla urządzeń na różnych wysokościach.</p>',
    },
    {
      type: 'tip',
      title: 'Unikaj zakłóceń',
      html: '<p>Trzymaj router co najmniej 1,5 metra od kuchenek mikrofalowych, telefonów bezprzewodowych i monitorów dla niemowląt. Te urządzenia dzielą pasmo 2,4 GHz i powodują aktywne zakłócenia.</p>',
    },
    {
      type: 'tip',
      title: 'Zaleta środkowego piętra',
      html: '<p>Jeśli mieszkasz w domu wielopiętrowym, umieść router na środkowym piętrze. Sygnały rozprzestrzeniają się słabo w górę i w dół przez betonowe stropy.</p>',
    },
    {
      type: 'title',
      text: 'Werdykty strumieniowania: co twój sygnał naprawdę oznacza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Procenty są abstrakcyjne. Naprawdę zależy ci na tym, czy możesz oglądać Netflixa, wygrać mecz lub zakończyć rozmowę wideo bez zamrażania. Oto co każdy poziom sygnału oznacza w prawdziwym świecie.',
    },
    {
      type: 'table',
      headers: ['Sygnał', 'Streaming 4K', 'Gry online', 'Rozmowy wideo', 'Przeglądanie'],
      rows: [
        ['80% do 100%', 'Idealny, natychmiastowe ładowanie', 'Niskie opóźnienie, gra konkurencyjna', 'Krystalicznie czysty, bez przerw', 'Natychmiastowy, bez opóźnień'],
        ['60% do 79%', 'Dobry, okazjonalne buforowanie', 'Grywalny, drobne lagi', 'Stabilny, rzadko pikseluje', 'Szybki, bez problemów'],
        ['40% do 59%', 'Buforowanie co kilka minut', 'Ostrzeżenia o lagu, rubber banding', 'Pikseluje, pewne przerwy', 'Używalny, wolniejsze ładowanie'],
        ['20% do 39%', 'Niemożliwy, ciągłe zamrażanie', 'Rozłączenia, niegrywalny', 'Częste przerwy, nieużywalny', 'Bardzo wolny, timeouty'],
        ['0% do 19%', 'Nie uruchomi się', 'Nie można się połączyć', 'Brak połączenia', 'Nieużywalny'],
      ],
    },
    {
      type: 'title',
      text: 'Szybkie naprawy, zanim cokolwiek kupisz',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista kontrolna darmowej optymalizacji',
      items: [
        'Przenieś router na środek domu, nie w róg.',
        'Podnieś go na wysokość klatki piersiowej na półce lub wysokim meblu.',
        'Wyjmij go z szafek, szaf i spoza telewizora.',
        'Jeśli to możliwe, ustaw jedną antenę pionowo, a drugą poziomo.',
        'Używaj 5 GHz dla pobliskich urządzeń i 2,4 GHz dla odległych.',
        'Zmień kanał Wi-Fi na mniej zatłoczony za pomocą aplikacji skanera.',
        'Zaktualizuj oprogramowanie routera, aby naprawić znane błędy sygnału.',
        'Restartuj router raz w miesiącu, aby wyczyścić wycieki pamięci.',
      ],
    },
    {
      type: 'title',
      text: 'Kiedy zmodernizować sprzęt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Czasami środowisko wygrywa. Jeśli wypróbowałeś wszystkie sztuczki z rozmieszczeniem i nadal masz martwe strefy, czas rozszerzyć sieć zamiast walczyć z fizyką.',
    },
    {
      type: 'proscons',
      title: 'Wzmacniacz WiFi vs System Mesh',
      items: [
        { pro: 'Wzmacniacze są tanie i łatwe w instalacji.', con: 'Wzmacniacze tworzą drugą nazwę sieci i zmniejszają prędkość o połowę.' },
        { pro: 'Wzmacniacze działają dla pojedynczej martwej strefy.', con: 'Wzmacniacze potrzebują silnego istniejącego sygnału do wzmocnienia.' },
        { pro: 'Systemy mesh tworzą jedną bezproblemową sieć.', con: 'Systemy mesh są droższe w zakupie.' },
        { pro: 'Mesh obsługuje wiele pięter i duże domy.', con: 'Mesh wymaga głównego węzła w pobliżu modemu.' },
      ],
    },
    {
      type: 'tip',
      title: 'Kiedy używać mesh',
      html: '<p>W domach powyżej 120 metrów kwadratowych lub z grubymi betonowymi ścianami, system mesh z co najmniej dwoma węzłami przewyższy każdy pojedynczy router, nieważne jak drogi.</p>',
    },
    {
      type: 'title',
      text: 'Zrozumieć decybele w prosty sposób',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Decybele są logarytmiczne, co oznacza, że nie zachowują się jak normalne liczby. Każde 3 dB utraty zmniejsza moc sygnału o połowę. 6 dB utraty oznacza, że pozostaje tylko jedna czwarta pierwotnej mocy. 10 dB utraty oznacza, że przetrwa tylko jedna dziesiąta. Dlatego betonowa ściana o 15 dB jest niszczycielska. Nie tylko osłabia sygnał. Ona go unicestwia.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Tłumienie', definition: 'Stopniowa utrata siły sygnału podczas przechodzenia przez materiał. Wyższe liczby oznaczają większą utratę sygnału.' },
        { term: 'dBm', definition: 'Jednostka mocy używana do pomiaru siły sygnału Wi-Fi. 0 dBm to jeden miliwat. Wartości ujemne są normalne, przy czym -30 jest doskonałe, a -80 ledwo używalne.' },
        { term: 'Martwa strefa', definition: 'Obszar, w którym sygnał Wi-Fi jest zbyt słaby, aby nawiązać lub utrzymać niezawodne połączenie.' },
        { term: 'Sieć mesh', definition: 'System wielu węzłów routera, które współpracują, aby pokryć duży obszar jedną bezproblemową siecią Wi-Fi.' },
        { term: 'Interferencja wielościeżkowa', definition: 'Gdy fale radiowe odbijają się od ścian i przedmiotów, tworząc wiele opóźnionych kopii tego samego sygnału, co dezorientuje odbiornik.' },
        { term: 'SSID', definition: 'Nazwa twojej sieci Wi-Fi. Wzmacniacze często tworzą drugi SSID, podczas gdy systemy mesh zachowują jedną nazwę na wszystkich węzłach.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Złota zasada umieszczania routera',
      icon: 'mdi:map-marker-radius',
      badge: 'Kluczowa wskazówka',
      html: '<p>Jeśli twój router znajduje się obecnie w rogu, w szafce lub na podłodze, marnujesz 50 do 70 procent jego potencjalnego zasięgu, zanim sygnał w ogóle opuści pomieszczenie. Najszybszym ulepszeniem, jakie możesz zrobić, jest przeniesienie go w otwarte, centralne, podwyższone miejsce. Ta jedna zmiana często rozwiązuje więcej problemów niż zakup nowego sprzętu.</p>',
    },
    {
      type: 'summary',
      title: 'Jak zapobiegać martwym strefom WiFi',
      items: [
        'Umieść router centralnie, podwyższony i na otwartej przestrzeni.',
        'Minimalizuj liczbę ścian między routerem a urządzeniem.',
        'Unikaj kuchni, łazienek i garaży jako lokalizacji routera.',
        'Używaj 5 GHz dla prędkości w tym samym pokoju, 2,4 GHz dla odległości.',
        'Rozważ mesh dla dużych domów lub grubych ścian zewnętrznych.',
        'Restartuj miesięcznie i aktualizuj oprogramowanie, aby utrzymać szczytową wydajność.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Przedmioty domowe blokujące Wi-Fi',
    labelAddObstacle: 'Kliknij, aby dodać do ścieżki sygnału',
    labelRemove: 'Usuń',
    labelSignalStrength: 'Sygnał',
    labelEffectiveRange: 'Efektywny zasięg',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Werdykt strumieniowania',
    verdictPerfect: 'Idealny',
    verdictGood: 'Dobry',
    verdictFair: 'Średni',
    verdictPoor: 'Słaby',
    verdictDead: 'Martwa strefa',
    tipTitle: 'Wskazówka dotycząca rozmieszczenia',
    label4kStreaming: 'Streaming 4K',
    labelOnlineGaming: 'Gry online',
    labelVideoCalls: 'Rozmowy wideo',
    labelBasicBrowsing: 'Podstawowe przeglądanie',
    statusPerfect: 'Idealny',
    statusGood: 'Dobry',
    statusFair: 'Średni',
    statusPoor: 'Słaby',
    statusImpossible: 'Niemożliwy',
    statusLowLatency: 'Niskie opóźnienie',
    statusLagWarning: 'Ostrzeżenie o lagu',
    statusDisconnect: 'Rozłącz',
    statusStable: 'Stabilny',
    statusPixelated: 'Pikseluje',
    statusDropped: 'Przerwany',
    statusPass: 'Zaliczony',
    statusUnusable: 'Nieużywalny',
    tipMoveRouter: 'Przesunięcie routera zaledwie 1 metr od tej solidnej bariery może poprawić sygnał nawet o 40%.',
    tipElevateRouter: 'Podnieś router na wysokość klatki piersiowej. Sygnały rozprzestrzeniają się poziomo, a podłoga pochłania więcej, niż myślisz.',
    tipReduceObstacles: 'Każda dodatkowa ściana zmniejsza sygnał o połowę. Spróbuj zmniejszyć liczbę przeszkód między routerem a urządzeniem.',
  },
};
