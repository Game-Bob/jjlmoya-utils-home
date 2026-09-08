import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-czasu-nagrzewania-bojlera';
const title = 'Kalkulator czasu nagrzewania bojlera';
const description = 'Oszacuj, ile czasu bojler potrzebuje, aby przejść od bieżącej temperatury wody do temperatury docelowej na podstawie objętości, mocy użytecznej i sprawności.';
const faq = [
  { question: 'Co oznacza tu czas nagrzewania?', answer: 'To szacowany czas podniesienia temperatury wprowadzonej ilości wody od wartości bieżącej do docelowej. Obliczenie wykorzystuje ciepło właściwe wody, moc użyteczną i szacowaną sprawność.' },
  { question: 'Jakiego wzoru używa kalkulator?', answer: 'Wymaganą energię szacuje się jako litry razy przyrost temperatury razy 1,16 watogodziny na litr i stopień Celsjusza. Następnie energię dzieli się przez moc grzałki pomnożoną przez sprawność.' },
  { question: 'Czy wynik przewiduje dokładny czas mojego urządzenia?', answer: 'Nie. To przejrzysty szacunek do planowania. Straty postojowe, cykle termostatu, rozwarstwienie, mieszanie, straty w rurach i ograniczenia mocy mogą wydłużyć rzeczywisty czas.' },
  { question: 'Jaką sprawność wpisać?', answer: 'Jeśli ją znasz, użyj udokumentowanej sprawności użytkowej lub odzysku. W przeciwnym razie wpisz ostrożny szacunek i porównaj go z instrukcją albo zmierzonym cyklem.' },
];
const howTo = [
  { name: 'Wpisz ilość zgromadzonej wody', text: 'Podaj pojemność zbiornika w litrach, aby oszacować ilość wody do ogrzania.' },
  { name: 'Ustaw temperaturę bieżącą i docelową', text: 'Wpisz temperaturę na początku oraz temperaturę, którą ma osiągnąć zbiornik.' },
  { name: 'Wpisz moc użyteczną i sprawność', text: 'Użyj mocy grzałki w kilowatach i udziału energii faktycznie przekazywanej wodzie.' },
  { name: 'Odczytaj okno nagrzewania', text: 'Wykorzystaj czas trwania i przewidywaną godzinę końca do planowania, a następnie porównaj wynik z dokumentacją.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Ilość zgromadzonej wody', volumeHint: 'Pojemność zbiornika', temperatureUnitLabel: 'Jednostki temperatury', celsiusOption: 'Celsjusz (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Bieżąca temperatura wody', targetTempLabel: 'Temperatura docelowa', powerLabel: 'Użyteczna moc grzałki', efficiencyLabel: 'Szacowana sprawność', startTimeLabel: 'Nagrzewanie zaczyna się o', compareTitle: 'Porównaj inne ustawienie', comparePowerLabel: 'Inna moc użyteczna', compareEfficiencyLabel: 'Inna sprawność', compareOptional: 'Opcjonalnie: wpisz oba pola, aby porównać', calculateNote: 'Traktuj wynik jako szacunek do planowania i sprawdź dokumentację urządzenia, zanim oprzesz na nim decyzję.', tankCurrent: 'Bieżąca', tankTarget: 'Cel', resultTitle: 'Okno nagrzewania', recoveryTimeLabel: 'Szacowany czas nagrzewania', energyLabel: 'Wymagana energia', effectivePowerLabel: 'moc efektywna', readyAtLabel: 'Przewidywana gotowość o', temperatureRiseLabel: 'Przyrost temperatury', comparisonTitle: 'Ustawienie alternatywne', comparisonFaster: 'szybsze', comparisonSlower: 'wolniejsze', noHeatingNeeded: 'Temperatura docelowa jest już osiągnięta', invalidInputs: 'Wpisz dodatnie wartości objętości, mocy i sprawności, aby zobaczyć szacunek.', insufficientPower: 'Wymagana jest dodatnia moc użyteczna.', limitsTitle: 'Czego nie uwzględnia ten szacunek', limitsText: 'Model nie zna izolacji zbiornika, strat postojowych, cykli termostatu, rozwarstwienia, mieszania, strat w rurach ani rzeczywistej charakterystyki mocy urządzenia.', hoursUnit: 'godz.', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'l',
  },
  seo: [
    { type: 'title', text: 'Oszacuj, kiedy ciepła woda będzie znów gotowa', level: 2 },
    { type: 'paragraph', html: 'Po prysznicu, kąpieli lub dużym poborze sama pojemność zbiornika nie wystarczy. Trzeba wiedzieć, ile energii musi wrócić do wody i jak szybko grzałka może ją dostarczyć. Ten kalkulator zamienia te dane w okno nagrzewania przydatne przy planowaniu kolejnego użycia.' },
    { type: 'stats', items: [{ value: 'l × ΔT × 1,16', label: 'Wymagana energia w Wh', icon: 'mdi:water-boiler' }, { value: 'kW × sprawność', label: 'Użyteczna moc grzania', icon: 'mdi:flash-outline' }, { value: 'Energia ÷ moc', label: 'Czas nagrzewania', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Jak powstaje szacunek nagrzewania', level: 2 },
    { type: 'paragraph', html: 'Szacunek wykorzystuje ciepło właściwe wody. Podgrzanie jednego litra o jeden stopień wymaga około 1,16 watogodziny. Kalkulator mnoży ten współczynnik przez objętość i przyrost temperatury, a potem dzieli przez moc użyteczną po uwzględnieniu sprawności.' },
    { type: 'comparative', items: [{ title: 'Przydatne do planowania', description: 'Wybierz godzinę rozpoczęcia, podaj stan zbiornika i zobacz przewidywaną godzinę końca. Dodaj drugą parę mocy i sprawności, aby porównać ustawienia.', icon: 'mdi:calendar-clock', points: ['Sprawdź kolejny cykl nagrzewania', 'Porównuj moc użyteczną, nie tylko znamionową', 'Zachowaj widoczny przyrost temperatury'] }, { title: 'To nie jest gwarancja usługi', description: 'Rzeczywiste urządzenie może działać wolniej przez straty ciepła, cykle termostatu, mieszanie lub brak stałej mocy. Porównaj wynik z instrukcją albo pomiarem.', icon: 'mdi:thermometer-alert', points: ['Straty postojowe nie są modelowane', 'Nie pobieramy danych producenta', 'Brak porad dotyczących bezpieczeństwa i montażu'] }], columns: 2 },
    { type: 'title', text: 'Dane wejściowe, które najbardziej zmieniają czas', level: 2 },
    { type: 'paragraph', html: 'Większy przyrost temperatury bezpośrednio zwiększa zapotrzebowanie na energię. Większy zbiornik wymaga proporcjonalnie więcej energii przy tym samym przyroście. Moc użyteczna i sprawność działają odwrotnie: podwojenie ich iloczynu mniej więcej skraca idealny czas o połowę.' },
    { type: 'title', text: 'Korzystaj z wyniku bez pozornej precyzji', level: 2 },
    { type: 'paragraph', html: 'To narzędzie służy do planowania i porównywania założeń, a nie do certyfikowania bojlera ani projektowania instalacji. Wytyczne techniczne i rzeczywiste testy uwzględniają dodatkowe straty oraz warunki pomiaru, więc zmierzony cykl może różnić się od ideału.' },
  ],
};
