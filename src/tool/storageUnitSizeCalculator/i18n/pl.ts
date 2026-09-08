import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'pl',
  slug: 'kalkulator-rozmiaru-magazynu',
  title: 'Kalkulator rozmiaru magazynu samoobsługowego',
  description: 'Oszacuj potrzebny rozmiar magazynu na podstawie kartonów, mebli i miejsca na przejście.',
  labels: {
    inventory: 'Twoje rzeczy', boxes: 'Kartony', furniture: 'Duże przedmioty', smallBoxes: 'Małe kartony', mediumBoxes: 'Średnie kartony', largeBoxes: 'Duże kartony', sofa: 'Sofa', bed: 'Łóżko', wardrobe: 'Szafa', desk: 'Biurko', chair: 'Krzesła', accessLane: 'Miejsce na przejście', accessHint: 'Szersze przejście zajmuje powierzchnię, ale ułatwia dostęp do potrzebnych rzeczy.', quickScenarios: 'Wczytaj przykładowy zestaw', reset: 'Resetuj',
  },
  presetLabels: ['Przeprowadzka z kawalerki', 'Jedna sypialnia', 'Małe biuro'],
  accessLabels: ['Ciasno', 'Równowaga', 'Częsty dostęp'],
  result: {
    title: 'Plan załadunku', minimum: 'Minimalny rozmiar', comfortable: 'Wygodny rozmiar', emptyStatus: 'Dodaj rzeczy', readyStatus: 'Zrównoważony plan', tightStatus: 'Minimum jest ciasne', emptyMessage: 'Po dodaniu rzeczy plan narysuje strefy magazynu.', readyMessage: 'Minimalny rozmiar zachowuje wybrane miejsce na przejście.', tightMessage: 'Minimalny rozmiar jest prawie pełny. Wygodny wariant będzie łatwiejszy w użyciu.', unit: 'm²', access: 'przejście', boxesZone: 'Kartony', furnitureZone: 'Duże przedmioty', laneZone: 'Przejście', floorPlanLabel: 'Proporcjonalny plan magazynu z kartonami, dużymi przedmiotami i przejściem', packedLabel: 'spakowane', areaLabel: 'Powierzchnia planowania', volumeLabel: 'objętość', emptyPlan: 'Dodaj kartony lub meble, aby narysować plan',
  },
  seo: [
    { type: 'title', level: 2, text: 'Dobierz magazyn do rzeczy, które posiadasz' },
    { type: 'paragraph', html: 'Kalkulator rozmiaru magazynu jest najbardziej przydatny, gdy zaczynasz od prawdziwego spisu rzeczy. Wpisz kartony i duże meble, a następnie zdecyduj, czy możesz układać je ciasno, czy musisz mieć dostęp do tylnej części.' },
    { type: 'title', level: 2, text: 'Co uwzględnia to oszacowanie' },
    { type: 'list', items: ['Objętość spakowanych kartonów i mebli', 'Powierzchnia podłogi po ułożeniu kartonów warstwami', 'Miejsce na przejście zależne od częstotliwości dostępu', 'Minimalny i wygodny rozmiar zaokrąglony do typowych wartości'] },
    { type: 'title', level: 2, text: 'Jak czytać minimalny i wygodny rozmiar' },
    { type: 'paragraph', html: 'Minimalny rozmiar to pierwsza standardowa powierzchnia mieszcząca obliczony plan. To kontrola pojemności, a nie gwarancja dopasowania każdego mebla. Wygodny wariant dodaje bufor, aby często otwierany magazyn nie zamienił się w ścianę kartonów.' },
    { type: 'title', level: 2, text: 'Sprawdź te parametry przed rezerwacją' },
    { type: 'paragraph', html: 'Potraktuj wynik jako listę wstępną i porównaj wymiary wewnętrzne, szerokość drzwi, wysokość, słupy, schody oraz dostęp dla samochodu. Duża objętość może być myląca, jeśli część wysokości jest nieużyteczna.' },
    { type: 'list', items: ['Licz kartony według przybliżonego wymiaru zewnętrznego.', 'Uwzględnij sofy i szafy, nawet jeśli planujesz je rozmontować.', 'Wybierz Częsty dostęp dla sezonowych rzeczy, zapasów lub sprzętu do pracy.', 'Potwierdź użyteczną powierzchnię i zmierz drzwi przed wniesieniem dużych mebli.'] },
    { type: 'tip', title: 'Granica planowania', html: 'To przejrzyste oszacowanie oparte na typowych wymiarach i założeniach układania. Nie sprawdza konkretnego magazynu, nośności, ceny ani przejścia nietypowego mebla przez drzwi.' },
  ],
  faq: [
    { question: 'Wybrać minimalny czy wygodny rozmiar?', answer: 'Minimalny wybierz przy ciasnym pakowaniu i rzadkim dostępie. Wygodny lepiej sprawdzi się przy częstym wyjmowaniu, możliwym powiększeniu zbioru lub meblach trudnych do układania.' },
    { question: 'Dlaczego kalkulator używa metrów kwadratowych?', answer: 'Operatorzy często podają powierzchnię podłogi, która pokazuje, czy rzeczy można ułożyć i dosięgnąć. Objętość w metrach sześciennych ułatwia porównanie ofert podających kubaturę.' },
    { question: 'Czy mogę użyć go dla garażu lub kontenera?', answer: 'Tak, jako punktu wyjścia. Sprawdź jednak rzeczywiste wymiary wewnętrzne, otwór drzwiowy, wysokość, wentylację i ograniczenia ciężaru lub układania.' },
    { question: 'Czy kalkulator zna dokładne wymiary moich mebli?', answer: 'Nie. Korzysta z reprezentatywnej powierzchni i objętości. Nietypowe, kruche lub głębokie przedmioty zmierz samodzielnie i zostaw zapas.' },
  ],
  howTo: [
    { name: 'Wczytaj przykładowy zestaw', text: 'Wybierz scenariusz zbliżony do przeprowadzki lub opróżniania i zmień liczby.' },
    { name: 'Policz kartony i duże rzeczy', text: 'Podaj liczbę małych, średnich i dużych kartonów, a potem dodaj sofy, łóżka, szafy, biurka i krzesła.' },
    { name: 'Ustaw przejście', text: 'Wybierz Ciasno, Równowaga lub Częsty dostęp zależnie od tego, jak często będziesz korzystać z magazynu.' },
    { name: 'Porównaj rekomendacje', text: 'Traktuj minimum jako dolną granicę pojemności, a wygodny wariant jako praktyczniejszy przy regularnym dostępie.' },
  ],
};

export const content = buildLocalizedContent(copy);
