import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "kalkulator-zuzycia-wody-w-gospodarstwie",
  title: "Kalkulator zużycia wody w gospodarstwie domowym",
  description:
    "Oszacuj zużycie wody w domu na podstawie codziennych nawyków, sprawdź, które czynności zużywają jej najwięcej, i porównaj obecną rutynę z realistycznym scenariuszem mniejszego zużycia.",
  language: "pl",
  ui: {
    presetLabel: "Zacznij od profilu",
    presetEveryday: "Codzienny",
    presetWaterAware: "Oszczędzanie wody",
    presetLowFlow: "Niski przepływ",
    controlsLabel: "Dane zużycia wody w domu",
    optionalInputsTitle: "Urządzenia i przecieki",
    peopleLabel: "Liczba osób w domu",
    peopleUnit: "osoby",
    showerTitle: "Prysznice",
    showersPerWeekLabel: "Prysznice na osobę",
    showerMinutesLabel: "Minuty na prysznic",
    showerFlowLabel: "Przepływ",
    toiletTitle: "Toaleta",
    flushesPerDayLabel: "Spłukania na osobę",
    flushVolumeLabel: "Objętość spłukania",
    tapTitle: "Krany",
    tapMinutesLabel: "Czas otwarcia na osobę",
    tapFlowLabel: "Przepływ",
    washingLoadsLabel: "Prania",
    washingVolumeLabel: "Litry na pranie",
    dishwasherLoadsLabel: "Zmywania",
    dishwasherVolumeLabel: "Litry na cykl",
    leakLabel: "Szacowany możliwy do uniknięcia przeciek",
    litresPerDay: "szacowane litry dziennie",
    litresPerMonth: "litry miesięcznie",
    litresPerYear: "litry rocznie",
    perPerson: "litry na osobę dziennie",
    reference: "Wartość odniesienia",
    aboveReference: "Powyżej wartości odniesienia",
    belowReference: "Poniżej wartości odniesienia",
    nearReference: "Blisko wartości odniesienia",
    referenceDescription:
      "Średnie zużycie w hiszpańskich gospodarstwach według INE wynosi 128 litrów na osobę dziennie w najnowszej serii. Traktuj je jako kontekst, nie jako próg zaliczenia.",
    savingTitle: "Możliwość ograniczenia",
    savingDescription:
      "To łączna różnica między obecnymi nawykami a założeniami mniejszego zużycia. Testuj jedną zmianę naraz.",
    currentScenario: "Obecny profil",
    efficientScenario: "Scenariusz mniejszego zużycia",
    monthlySaving: "potencjalnie zaoszczędzone litry miesięcznie",
    categoryShowers: "Prysznice",
    categoryToilets: "Toaleta",
    categoryTaps: "Krany",
    categoryWashing: "Pranie",
    categoryDishwasher: "Zmywarka",
    categoryLeaks: "Przecieki",
    breakdownTitle: "Miesięczny podział zużycia",
    usageShare: "całości",
  },
  faq: [
    {
      question: "Co szacuje ten kalkulator wody dla domu?",
      answer:
        "Szacuje litry dziennie, miesięcznie i rocznie na podstawie pryszniców, spłukiwań, kranów, prania, zmywania i przecieków. Pokazuje też scenariusz mniejszego zużycia oparty na umiarkowanych zmianach.",
    },
    {
      question: "Czy wynik jest taki sam jak na rachunku za wodę?",
      answer:
        "Nie. To szacunek planistyczny oparty na nawykach. Rachunek może obejmować także zużycie na zewnątrz, wspólne instalacje, termin odczytu licznika, przecieki poza domem i rzeczywisty przepływ armatury.",
    },
    {
      question: "Która wartość zwykle najbardziej zmienia wynik?",
      answer:
        "Długie prysznice o dużym przepływie często mają największy udział, ale znaczenie mają też liczba osób, objętość spłukiwania, czas użycia kranów oraz częstotliwość prania i zmywania.",
    },
    {
      question: "Czym jest scenariusz mniejszego zużycia?",
      answer:
        "Stosuje przejrzyste cele, takie jak pięciominutowe prysznice, mniejszy przepływ, oszczędne spłukiwanie, krótsze użycie kranów, pełne ładunki i brak możliwego do uniknięcia przecieku. To porównanie, nie gwarancja.",
    },
    {
      question: "Dlaczego kalkulator pokazuje wartość odniesienia?",
      answer:
        "To najnowsza średnia hiszpańskich gospodarstw z serii INE dotyczącej dostaw i oczyszczania wody, podana na osobę dziennie. Nie jest celem ani diagnozą, bo warunki i niezmierzone zużycie są różne.",
    },
  ],
  howTo: [
    {
      name: "Podaj liczbę osób",
      text: "Zacznij od osób regularnie korzystających z domu. Kalkulator pokazuje też wynik na osobę, aby porównywać gospodarstwa różnej wielkości.",
    },
    {
      name: "Opisz główne nawyki",
      text: "Podaj częstotliwość, czas i przepływ pryszniców, a następnie spłukiwania, czas pracy kranów, pranie i zmywanie. Jeśli możesz, użyj pomiaru lub danych z urządzenia.",
    },
    {
      name: "Odczytaj wynik dzienny",
      text: "Duża liczba to szacowane litry dla domu dziennie. Wartości miesięczne i roczne używają tych samych nawyków i aktualizują się od razu.",
    },
    {
      name: "Znajdź największą dźwignię",
      text: "Sprawdź miesięczny podział litrów i udziałów. Oszczędność przy każdej czynności pokazuje możliwą zmianę w kierunku scenariusza mniejszego zużycia.",
    },
    {
      name: "Przetestuj realistyczny profil",
      text: "Wybierz Oszczędzanie wody lub Niski przepływ, wróć do swoich wartości i zmień jeden nawyk. Zobaczysz, co warto sprawdzić jako pierwsze.",
    },
  ],
  seo: {
    introTitle: "Od rachunku za wodę do nawyków, które za nim stoją",
    introOne:
      "Rachunek mówi, ile wody przeszło przez licznik, ale zwykle nie pokazuje, który nawyk spowodował zmianę. Ten kalkulator zamienia powtarzalne elementy domowej rutyny w przejrzysty szacunek: osoby, prysznice, spłukiwania, krany, pranie, zmywanie i możliwe do uniknięcia przecieki.",
    introTwo:
      "Najnowsza seria INE podaje średnio 128 litrów na osobę dziennie dla hiszpańskich gospodarstw w 2024 roku. To kontekst, a nie uniwersalny cel: użycie na zewnątrz, klimat, wspólny licznik lub ukryty przeciek mogą wyjaśniać różnicę.",
    averageLabel: "Średnia hiszpańskiego gospodarstwa na osobę dziennie",
    groupsLabel: "Grupy nawyków w podziale",
    daysLabel: "Dni użyte do oszacowania miesiąca",
    readTitle: "Jak czytać szacunek",
    readText:
      "Zacznij od najdłuższego miesięcznego paska, a nie od najbardziej widocznej liczby. Długi prysznic może być większą dźwignią niż mała, rzadka czynność, a mały przeciek może trwać codziennie. Kalkulator porządkuje kategorie według Twoich danych.",
    currentTitle: "Obecny profil",
    currentText:
      "Częstotliwości, czasy, przepływy i litry na ładunek są przeliczane na litry dzienne i miesięczne.",
    currentPoints: [
      "Pokazuje wielkość gospodarstwa",
      "Pokazuje udział każdej czynności",
      "Aktualizuje się podczas edycji",
    ],
    lowerTitle: "Scenariusz mniejszego zużycia",
    lowerText:
      "Porównanie stosuje umiarkowane i przejrzyste cele, takie jak krótsze prysznice, mniejszy przepływ i pełne ładunki.",
    lowerPoints: [
      "Nie gwarantuje oszczędności",
      "Nie oblicza kwoty rachunku",
      "Pozwala przetestować zmianę",
    ],
    chooseTitle: "Wybierz jedną zmianę",
    chooseText:
      "Dobry scenariusz jest wystarczająco konkretny, aby go wypróbować. Skróć prysznic o minutę, zmierz założony przepływ albo usuń przeciek po naprawie i kontroli. Jeśli wynik mało się zmieni, przejdź dalej.",
    actions: [
      "Zmierz przepływ kranu lub prysznica pojemnikiem i minutnikiem.",
      "Porównaj etykietę urządzenia z wpisanymi litrami na ładunek.",
      "Uruchom profil, aby zobaczyć kierunek zmiany.",
      "Zmień jeden nawyk i ustal realistyczny cel dla domu.",
    ],
    limitsTitle: "Czego ten szacunek nie może powiedzieć",
    limitsText:
      "Nie odtwarza licznika, nie wykrywa awarii instalacji, nie obejmuje każdego użycia na zewnątrz i nie gwarantuje wartości z etykiety armatury. Traktuj go jako pomoc w decyzji. Przy różnicy z licznikiem szukaj brakującego użycia lub przecieku.",
    flowTitle: "Dlaczego przepływ i częstotliwość liczą się razem",
    flowText:
      "To samo urządzenie może zużyć różną ilość wody zależnie od czasu pracy i częstotliwości. Prysznic mnoży osoby, prysznice tygodniowo, minuty i litry na minutę. Pranie i zmywanie używają ładunków tygodniowo i litrów na ładunek. Ułatwia to wybór między zmianą nawyku, konserwacją i lepszym pomiarem.",
  },
});

export { content };
