import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ergonomika-biurka';
const title = 'Ergonomika Biurka i Dostosowanie Układu Przestrzeni Roboczej';
const description =
  'Wprowadź swój wzrost i natychmiast zobacz, jak dostosować krzesło, biurko i monitor, aby wyeliminować ból pleców i karku w domowym biurze.';

const faqData = [
  {
    question: 'Dlaczego wysokość biurka ma znaczenie?',
    answer:
      'Biurko, które jest za wysokie, zmusza ramiona do unoszenia się, powodując napięcie w karku i górnej części pleców. Biurko, które jest za niskie, sprawia, że pochylasz się do przodu, ściskając dyski lędźwiowe. Prawidłowa wysokość utrzymuje przedramiona równolegle do podłogi i łokcie pod kątem 90 stopni.',
  },
  {
    question: 'Na jakiej wysokości powinien być monitor?',
    answer:
      'Górna krawędź monitora powinna znajdować się na wysokości oczu lub nieco poniżej, z ekranem pochylonym do tyłu o 10 do 20 stopni. Utrzymuje to kark w pozycji neutralnej i zmniejsza napięcie oczu, ponieważ patrzenie lekko w dół jest naturalnym kątem spoczynkowym ludzkiego wzroku.',
  },
  {
    question: 'Jak daleko powinienem siedzieć od ekranu?',
    answer:
      'Idealna odległość to długość ramienia, mniej więcej 50 do 70 centymetrów. W tej odległości oczy nie muszą się napinać, aby skupić wzrok, i możesz zobaczyć cały ekran bez poruszania głową. Dla większych ekranów zwiększ odległość proporcjonalnie.',
  },
  {
    question: 'Czy biurko do pracy na stojąco jest lepsze?',
    answer:
      'Biurka do pracy na stojąco zmniejszają czas długotrwałego siedzenia, który jest związany z problemami układu krążenia i metabolicznymi. Jednak całe dni stanie może powodować problemy z żyłami i stopami. Najlepsze podejście to naprzemienne: siedzieć 30 minut, stać 15 do 30 minut i regularnie się ruszać.',
  },
  {
    question: 'Czy moje stopy powinny dotykać podłogi?',
    answer:
      'Tak. Twoje stopy powinny spoczywać płasko na podłodze, z kolanami pod kątem 90 stopni. Jeśli twoje krzesło jest za wysokie, użyj podnóżka. Jeśli stopy wiszą w powietrzu, nacisk kumuluje się za udami, ograniczając przepływ krwi i powodując drętwienie.',
  },
  {
    question: 'Jaka jest najlepsza wysokość krzesła?',
    answer:
      'Siedzisko powinno pozwolić na zgięcie kolan w przybliżeniu pod kątem 90 stopni ze stopami płasko na podłodze. Twoje biodra powinny być na równi z kolanami lub nieco powyżej. Rozkłada to ciężar równomiernie na kość siedzenia i zmniejsza nacisk na dolną część pleców.',
  },
];

const howToData = [
  {
    name: 'Zmierz swój wzrost',
    text: 'Stań boso przy ścianie i zaznacz wierzch głowy. Zmierz od podłogi do zaznaczenia w centymetrach.',
  },
  {
    name: 'Wybierz tryb pracy',
    text: 'Wybierz, czy chcesz zalecenia dla biurka do pracy siedzącej czy stojącej. Każdy tryb wykorzystuje inne proporcje ciała.',
  },
  {
    name: 'Najpierw dostosuj krzesło',
    text: 'Ustaw krzesło tak, aby stopy spoczywały płasko na podłodze, a kolana tworzyły kąt 90 stopni. Twoje biodra powinny być na równi z kolanami lub nieco powyżej.',
  },
  {
    name: 'Ustaw powierzchnię biurka',
    text: 'Podnieś lub obniż biurko, tak aby przedramiona spoczywały równolegle do podłogi podczas pisania. Twoje łokcie powinny być pod kątem 90 stopni.',
  },
  {
    name: 'Ustaw monitor',
    text: 'Umieść monitor w odległości długości ramienia. Górna krawędź ekranu powinna znajdować się na wysokości oczu lub nieco poniżej, pochylona do tyłu o 10 do 20 stopni.',
  },
  {
    name: 'Sprawdź za pomocą awatara',
    text: 'Użyj awatara na ekranie, aby sprawdzić, czy wszystkie kąty są zielone. Jeśli któryś staw jest czerwony, dostosuj odpowiedni mebel.',
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

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: 'Ukryty Koszt Złego Ustawienia Biurka',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Większość ludzi spędza ponad osiem godzin dziennie przy biurku, ale niewielu sprawdza, czy ich krzesło, biurko czy monitor pasują do ich ciała. Różnica zaledwie kilku centymetrów może spowodować przewlekłe napięcie w karku, ramionach i dolnej części pleców. W ciągu miesięcy i lat to napięcie przeradza się w ból, a ból w uraz. Dobra wiadomość jest taka, że optymalną ergonomię można precyzyjnie obliczyć na podstawie jednego pomiaru: twojego wzrostu.',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: 'Średni Czas przy Biurku', icon: 'mdi:desk' },
        { value: '90°', label: 'Idealny Kąt Łokcia', icon: 'mdi:angle-acute' },
        { value: '60cm', label: 'Najlepsza Odległość od Ekranu', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Dlaczego Jedyny Rozmiar Nigdy Nie Pasuje Wszystkim',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Standardowe biurka mają 73 centymetry wysokości, a standardowe krzesła 45 centymetry. Wymiary te zostały zaprojektowane dziesiątki lat temu dla przeciętnych mężczyzn pracujących w biurze. Jeśli jesteś niższy niż 175 centymetrów lub wyższy niż 185 centymetrów, te domyślne wartości aktywnie szkodzą twojej postawie. Kobiety, nastolatki i osoby z dłuższym lub krótszym tułowiem niż przeciętnie są szczególnie źle obsługiwane przez meble standardowe.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Złe Ustawienie',
          description: 'Typowe wartości domyślne, które z czasem powodują napięcie.',
          icon: 'mdi:alert',
          points: ['Monitor za wysoki lub za niski', 'Biurko zmusza ramiona do unoszenia', 'Stopy nie dotykają podłogi', 'Krzesło nie oferuje podparcia lędźwiowego'],
        },
        {
          title: 'Optymalne Ustawienie',
          description: 'Spersonalizowane pomiary oparte na proporcjach twojego ciała.',
          icon: 'mdi:check-circle',
          points: ['Monitor na wysokości oczu', 'Łokcie pod kątem 90 stopni', 'Stopy płasko na podłodze', 'Dolna część pleców w pełni podparta'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybka Lista Kontrolna Postawy',
      icon: 'mdi:clipboard-check',
      badge: 'Działanie',
      html: '<p style="margin:0">Usiądź z plecami opartymi o krzesło. Sprawdź, czy między tyłem kolan a krawędzią siedziska jest mała przerwa. Upewnij się, że nadgarstki są proste podczas pisania. Górna krawędź monitora nie powinna być wyższa niż twoje oczy. Co 30 minut zrób 2-minutową przerwę na spacer.</p>',
    },
    {
      type: 'title',
      text: 'Nauka o Siedzeniu i Staniu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ludzkie ciała nie są zaprojektowane do pozostawania w jednej pozycji przez godziny. Podczas siedzenia nacisk na dyski lędźwiowe wzrasta o 40 procent w porównaniu ze staniem. Podczas nieruchomego stania krew gromadzi się w nogach, a serce musi pracować ciężej, aby ją pompować z powrotem. Najzdrowszy rytm pracy to naprzemienne siedzenie i stanie co 30 do 60 minut, połączone z krótkimi spacerami. To narzędzie oblicza oba tryby, aby poprawnie skonfigurować biurko regulowane.',
    },
    {
      type: 'summary',
      title: 'Jak Zbudować Ergonomiczną Przestrzeń Roboczą',
      items: [
        'Zmierz swój wzrost boso w centymetrach.',
        'Użyj tego symulatora, aby uzyskać dokładne wysokości krzesła, biurka i monitora.',
        'Najpierw dostosuj krzesło, potem biurko, potem monitor.',
        'Jeśli używasz biurka do pracy na stojąco, ustaw je 30 centymetrów powyżej wysokości biurka do siedzenia.',
        'Umieść monitor w odległości długości ramienia i pochyl go do tyłu o 10 do 20 stopni.',
        'Co 30 minut zrób 2-minutową przerwę na spacer lub rozciąganie.',
      ],
    },
  ],
  ui: {
    labelMode: 'Tryb pracy',
    modeSit: 'Siedzący',
    modeStand: 'Stojący',
    labelHeight: 'Twój wzrost',
    unitCm: 'cm',
    labelGender: 'Budowa',
    genderMale: 'Mężczyzna',
    genderFemale: 'Kobieta',
    labelChair: 'Krzesło',
    labelDesk: 'Biurko',
    labelMonitor: 'Monitor',
    labelDistance: 'Odległość',
    labelAngle: 'Kąt',
    labelGood: 'Dobrze',
    labelAdjust: 'Dostosuj',
    badgeChair: 'Siedzisko',
    badgeDesk: 'Powierzchnia',
    badgeMonitor: 'Ekran',
    tipScreenLow: 'Podnieś monitor',
    tipScreenHigh: 'Obniż monitor',
    tipDeskLow: 'Podnieś biurko',
    tipDeskHigh: 'Obniż biurko',
    tipChairLow: 'Podnieś krzesło',
    tipChairHigh: 'Obniż krzesło',
    tipDistance: 'Przesuń ekran na długość ramienia',
  },
};
