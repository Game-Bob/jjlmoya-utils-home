import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulyator-dalnosti-wi-fi';
const title = 'Simulyator dalnosti i prepyatstviy WiFi';
const description =
  'Narisuyte plan svoego doma, razmestite steny, dveri, mebel i bytovuyu tekhniku, zatem peretashchite router i ustroystvo, chtoby nayti nailuchshiy put signala. Nablyudayte v realnom vremeni poteryu pokrytiya, verdikt striminga i sovety po razmeshcheniyu, chtoby ustranit myortvye zony bez pokupki novogo oborudovaniya.';

const faqData = [
  {
    question: 'Pochemu moy WiFi signal propadaet v nekotorykh komnatakh?',
    answer:
      'WiFi ispolzuet radiovolny, kotorye pogloshchayutsya, otrazhayutsya ili blokiruyutsya fizicheskimi materialami. Kirpich, beton i metall khudshie iz nikh, kazhdyy znachitelno snizhaet moshchnost signala. Voda i steklo takzhe mogut otrazhat ili pogloshchat chasti signala.',
  },
  {
    question: 'Kak silno betonnaya ili kamennaya stena vliyaet na WiFi?',
    answer:
      'Standartnaya betonnaya stena mozhet oslabit signal 2,4 GGts na 10-20 detsibel. Tolstye kamennye steny tolshchinoy 70-80 santimetrov mogut dostigat 22 detsibel i bolee. Eto privodit k potere dalnosti primerno na 50-90 protsentov v zavisimosti ot tolshchiny i plotnosti. Na 5 GGts poteri eshche bolshe, poskolku vysokie chastoty bystree pogloshchayutsya plotnymi materialami.',
  },
  {
    question: 'Gde razmestit router dlya nailuchshego pokrytiya?',
    answer:
      'Tsentralno, vysoko i otkryto. Razmestite router v tsentre doma, kak minimum v metre ot tolstykh sten i metallicheskikh predmetov, i podnimite ego na uroven grudi dlya gorizontalnogo rasprostraneniya. Izbegayte uglov, shkafov i nizkikh pozitsiy za mobelyu.',
  },
  {
    question: 'Mogut li steklyannye dveri blokirovat WiFi?',
    answer:
      'Prozrachnoe steklo okazyvaet minimalnoe vliyanie, no okna s pokrytiem ili steklopakety s metallicheskimi plyonkami mogut otrazhat signaly. Simulyator rassmatrivaet obychnoe steklo kak lyogkoe prepyatstvie s poteryami primerno 2-3 detsibela.',
  },
];

const howToData = [
  {
    name: 'Opredelite put signala',
    text: 'Predstavte pryamuyu liniyu mezhdu routerom i interesuyushchim vas ustroystvom. Kazhdyy obekt, peresekayushchiy etu liniyu, imeet znachenie.',
  },
  {
    name: 'Dobavte kazhdoe prepyatstvie',
    text: 'Nazhimayte knopki materialov v simulyatore, chtoby dobavit kazhduyu stenu, dver, pribor ili predmet mobeli, peresekayushchiy put.',
  },
  {
    name: 'Prochitayte verdikt',
    text: 'Nablyudayte, kak koltso signala, animatsiya volny i panel striminga mgnovenno obnovlyayutsya pri dobavlenii ili udalenii obektov.',
  },
  {
    name: 'Primenite kontekstnuyu podskazku',
    text: 'Sleduyte kartochkam razmeshcheniya, kotorye poyavlyayutsya na osnove vashey tochnoy kombinatsii prepyatstviy, chtoby uluchshit pokrytie bez pokupki novogo oborudovaniya.',
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
  inLanguage: 'ru',
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
      text: 'Pochemu vash WiFi umiraet v sosedney komnate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vash router izluchaet radiovolny vo vsekh napravleniyakh. Eti volny legko prokhodyat cherez vozdukh, no kazhdyy fizicheskiy obekt na ikh puti ostavlyaet svoy sled. Odni materialy propuskayut bolshuyu chast signala. Drugie pogloshchayut ego polnostyu. Ponimanie togo, kakie predmety v vashem dome nezametno ubivayut vashe soedinenie, pervyy shag k ustraneniyu mertvykh zon bez edinoy traty na novoe oborudovanie.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Gipsokarton', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Tolstaya kamennaya stena', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Metallicheskaya dver', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Realnaya tsena kazhdogo predmeta v vashem dome',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ne vse prepyatstviya odinakovy. Odin list gipsokartona mozhet otnyat neskolko protsentov signala, no betonnaya kolonna ili metallicheskaya dver mogut sokratit effektivnuyu dalnost vdvoe. Vot s chem vy na samom dele stalkivaetes, kogda stavite router za televizorom, ryadom s kholodilnikom ili na polu pod metallicheskoy polkoy.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lyogkie prepyatstviya',
          description: 'Eti predmety vyzyvayut minimalnye poteri signala i obychno bezopasny vblizi puti signala. Odno okno ili steklyannaya dver ne dolzhny vas bespokoit.',
          icon: 'mdi:window-open-variant',
          points: [
            'Steklyannaya dver: 2-3 dB poter',
            'Obychnoe okno: 2 dB poter',
            'Gipsokartonnaya peregorodka: 3 dB poter',
            'Derevyannaya mezhkomnatnaya dver: 4 dB poter',
          ],
        },
        {
          title: 'Umerennye prepyatstviya',
          description: 'Eti predmety sozdayut zametnoe snizhenie pokrytiya. Odin-dva normalno, no tri i bolee na odnom puti signala nachnut vyzyvat bufferizatsiyu i zaderzhki.',
          icon: 'mdi:wardrobe',
          points: [
            'Derevyannoy shkaf: 5 dB poter',
            'Bolshoe zerkalo: 6 dB poter',
            'Stiralnaya mashina: 6 dB poter',
            'Mikrovolnovaya pech: 5 dB poter',
          ],
        },
        {
          title: 'Tyazhyolye prepyatstviya',
          description: 'Eto tikhie ubiytsy domashnikh setey. Odna betonnaya stena ili metallicheskaya dver mogut prevratit silnyy signal v slabyy, a ikh nakoplenie sozdayot garantirovannye mertvye zony.',
          icon: 'mdi:wall',
          points: [
            'Stena iz kirpicha: 8 dB poter',
            'Pol ili potolok: 10 dB poter',
            'Kholodilnik: 10 dB poter',
            'Akvarium: 12 dB poter',
          ],
        },
        {
          title: 'Ekstremalnye prepyatstviya',
          description: 'Eti materialy pogloshchayut ili otrazhayut pochti vsyu radioenergiyu. Esli put signala peresekaet odin iz nikh, vam nuzhno peremestit router ili ustroystvo. Obkhodnogo puti net.',
          icon: 'mdi:shield',
          points: [
            'Tolstaya kamennaya stena (70-80 sm): 22 dB poter',
            'Betonnaya stena: 15 dB poter',
            'Metallicheskiy shkaf: 12 dB poter',
            'Metallicheskaya dver ili vorota: 18 dB poter',
            'Liftovaya shakhta: 20+ dB poter',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Kak raznye chastoty prokhodyat cherez steny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bolshinstvo sovremennykh routerov peredayut signal na dvukh diapazonakh: 2,4 GGts i 5 GGts. Bolee nizkaya chastota rasprostranyaetsya dalshe i legche prokhodit skvoz steny, no ona medlennee i zagruzhennee. Bolee vysokaya chastota ochen bystraya, no pogloshchaetsya kazhdym prepyatstviem na svoyom puti.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Proniknovenie 2,4 GGts',
          description: 'Bolee nizkie chastoty rasprostranyayutsya dalshe i luchshe pronikayut cherez steny. Idealno dlya bolshogo rasstoyaniya, no peregruzheno sosednimi setyami.',
          icon: 'mdi:signal',
          points: [
            'Luchshe cherez kirpich i beton',
            'Bolshe pomekh ot sosednikh routerov',
            'Medlennee, realno okolo 150 Mbit/s',
            'Luchshe dlya umnogo doma i IoT',
          ],
        },
        {
          title: 'Proniknovenie 5 GGts',
          description: 'Bolee vysokie chastoty obespechivayut bolee vysokie skorosti, no gorazdo bystree pogloshchayutsya stroitelnymi materialami. Luchshe vsego dlya otkrytykh prostranstv i blizlezhashchikh ustroystv.',
          icon: 'mdi:signal-5g',
          points: [
            'Plokho cherez beton i metall',
            'Menshe pomekh, chishche kanaly',
            'Skorosti gigabit v odnoy komnate',
            'Khuzhe pokrytie, no luchshe kachestvo tam, gde dostigaet',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Skrytye ubiytsy: predmety, kotorye vy nikogda ne podozrevali',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bolshinstvo lyudey vinyat steny, no odni iz khudshikh ubiyts WiFi eto povsednevnye predmety. Akvarium eto v osnovnom voda, a voda pogloshchaet radiovolny 2,4 GGts pochti idealno. Bolshoe zerkalo imeet tonkiy metallicheskiy sloy szadi, kotoryy otrazhaet signal ot vashego ustroystva. Mikrovolnovaya pech izluchaet na chastote 2,4 GGts tochno takoy zhe, kak vash router, vyzyvaya pomekhi kazhdyy raz, kogda vy razogrevate edu.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Lovushka akvariuma',
      icon: 'mdi:fish',
      badge: 'Neozhidannyy blokirovshchik',
      html: '<p>Bolshoy akvarium mozhet oslabit signal WiFi do 12 detsibel. Eto kak tolstaya betonnaya stena. Esli router nakhoditsya s odnoy storony akvariuma, a vash stol s drugoy, voda nanosit bolshe vreda, chem stena za nim.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Effekt zerkala',
      icon: 'mdi:mirror',
      badge: 'Opasnost otrazheniya',
      html: '<p>Bolshie zerkala imeyut tonkiy metallicheskiy sloy na zadney storone, prednaznachennyy dlya otrazheniya sveta. Etot zhe metallicheskiy sloy takzhe otrazhaet radiovolny. Zerkalo, napravlennoe na router, mozhet otrazhat signal ot togo mesta, gde on nuzhen, ili sozdavat mnogoluchevuyu interferentsiyu, kotoraya iskazhaet pakety dannykh.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pomekhi ot mikrovolnovki',
      icon: 'mdi:microwave',
      badge: 'Aktivnyy glushitel',
      html: '<p>Mikrovolnovye pechi rabotayut na chastote 2,45 GGts, napryamuyu peresekayas s diapazonom WiFi 2,4 GGts. Vo vremya raboty mikrovolnovka mozhet unichtozhit signal 2,4 GGts v radiuse 3-5 metrov. Esli vash router podderzhivaet tolko 2,4 GGts, a kukhnya ryadom, pereklyuchites na dvukhdiapanzonnyy router i ispolzuyte 5 GGts dlya kriticheski vazhnykh zadach.</p>',
    },
    {
      type: 'title',
      text: 'Komnata za komnatoy: kuda stavit router',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Idealnoe mesto dlya routera ne samoe udobnoe. Eto to mesto, kotoroe obespechivaet naibolee chistuyu liniyu pryamoy vidimosti k komnatam, gde vy deystvitelno polzuetes internetom. Vot kak dumat o kazhdoy komnate.',
    },
    {
      type: 'table',
      headers: ['Komnata', 'Uroven riska', 'Pochemu slozhno', 'Reshenie'],
      rows: [
        ['Kukhnya', 'Vysokiy', 'Kholodilnik, mikrovolnovka, metallicheskie shkafy, truby', 'Razmestite router vne kukhni, nikogda vnutri.'],
        ['Vannaya', 'Vysokiy', 'Zerkala, truby,plitka s metallicheskoy setkoy', 'Izbegayte razmeshcheniya routera za stenoy vannoy.'],
        ['Spalnya', 'Sredniy', 'Shkafy, tolstye steny, metallicheskie karkasy krovatey', 'Podnimite router, osvobodite put nad mobelyu.'],
        ['Gostinaya', 'Nizkiy', 'Obychno otkryto, no sledite za televizorami i konsolemi', 'Derzhite router na vidu, ne pryachte za televizorom.'],
        ['Garazh', 'Ekstremalnyy', 'Metallicheskie dveri, beton, avtomobili', 'Ne zhdite, chto komnatnyy router dostanet do garazha.'],
        ['Sad / Terrasa', 'Vysokiy', 'Naruzhnye steny, steklo, rasstoyanie', 'Ispolzuyte ulichnuyu tochku dostupa ili mesh uzel.'],
      ],
    },
    {
      type: 'title',
      text: 'Pravilo odnogo metra i drugie khitrosti razmeshcheniya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Malenkie peremeshcheniya sozdayut bolshie razlichiya. Vam ne nuzhno perekladyvat provodku v dome. Vam prosto nuzhno ponyat, kak dvizhutsya radiovolny, i dat im svobodnyy put.',
    },
    {
      type: 'tip',
      title: 'Pravilo odnogo metra',
      html: '<p>Peremeshchenie routera vsego na odin metr ot betonnogo ili metallicheskogo barera mozhet vosstanovit do 40 protsentov poteryannoy moshchnosti signala.</p>',
    },
    {
      type: 'tip',
      title: 'Podnimite dlya pokrytiya',
      html: '<p>Podnimite router na uroven grudi na polku. Signaly rasprostranyayutsya gorizontalno ot antenny. Razmeshchenie na polu tratit polovinu pokrytiya vpustuyu.</p>',
    },
    {
      type: 'tip',
      title: 'Derzhite na vidu',
      html: '<p>Nikogda ne pryachte router v shkafu, tumbe ili za televizorom. Korpus deystvuet kak kletka Faradeya, zapiraya signal do togo, kak on dostignet komnaty.</p>',
    },
    {
      type: 'tip',
      title: 'Raspolozhenie antenn',
      html: '<p>Esli u routera est vneshnie antenny, raspolozhite odnu vertikalno, a druguyu gorizontalno. Eto obespechivaet luchshee pokrytie dlya ustroystv na raznoy vysote.</p>',
    },
    {
      type: 'tip',
      title: 'Izbegayte pomekh',
      html: '<p>Derzhite router na rasstoyanii ne menee 1,5 metra ot mikrovolnovok, radiotelefonov i radionyan. Eti ustroystva ispolzuyut spektr 2,4 GGts i sozdayut aktivnye pomekhi.</p>',
    },
    {
      type: 'tip',
      title: 'Preimushchestvo srednego etazha',
      html: '<p>Esli vy zhivyote v mnogoetazhnom dome, razmestite router na srednem etazhe. Signaly plokho rasprostranyayutsya vverkh i vniz cherez betonnye perekrytiya.</p>',
    },
    {
      type: 'title',
      text: 'Verdikty striminga: chto na samom dele oznachaet vash signal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Protsenty abstraktsiya. Chto vas deystvitelno volnuet smozhete li vy smotret Netflix, vyigrat match ili zakonchit videozovok bez zavisaniy. Vot chto kazhdyy uroven signala oznachaet v realnom mire.',
    },
    {
      type: 'table',
      headers: ['Signal', '4K striming', 'Onlayn igry', 'Videozovki', 'Syerfing'],
      rows: [
        ['ot 80% do 100%', 'Otlichno, mgnovennaya zagruzka', 'Nizkaya zaderzhka, sorevnovatelnaya igra', 'Chyotko, bez obryvov', 'Mgnovenno, bez zaderzhek'],
        ['ot 60% do 79%', 'Khorosho, izredka bufferizatsiya', 'Igrabelno, nebolshie lagi', 'Stabilno, redko piksely', 'Bystro, bez problem'],
        ['ot 40% do 59%', 'Bufferizatsiya kazhdye neskolko minut', 'Preduprezhdeniya o lagakh, rubber banding', 'Piksely, nekotorye obryvy', 'Rabotosposobno, medlennee'],
        ['ot 20% do 39%', 'Nevozmozhno, postoyannye zavisaniya', 'Razryvy, neigrabelno', 'Chastye obryvy, neprigodno', 'Ochen medlenno, taymauty'],
        ['ot 0% do 19%', 'Ne zapuskaetsya', 'Ne udaetsya podklyuchitsya', 'Net soedineniya', 'Neprigodno'],
      ],
    },
    {
      type: 'title',
      text: 'Bystrye ispravleniya prezhde chem chto to pokupat',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Check list besplatnoy optimizatsii',
      items: [
        'Peremestite router v tsentr doma, a ne v ugol.',
        'Podnimite ego na uroven grudi na polku ili vysokuyu mobel.',
        'Dostante ego iz shkafov, tumb i iz za televizora.',
        'Po vozmozhnosti napravte odnu antennu vertikalno, druguyu gorizontalno.',
        'Ispolzuyte 5 GGts dlya blizkikh ustroystv i 2,4 GGts dlya dalnikh.',
        'Smenite kanal WiFi na menee zagruzhennyy s pomoshchyu prilozheniya-skenera.',
        'Obnovite proshivku routera, chtoby ispravit izvestnye bagy signala.',
        'Perezagruzhaite router raz v mesyats dlya ochistki utechek pamyati.',
      ],
    },
    {
      type: 'title',
      text: 'Kogda obnovlyat oborudovanie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inogda okruzhayushchaya sreda pobezhdaet. Esli vy pereprobovali vse khitrosti razmeshcheniya i vsye stradaete ot mertvykh zon, prishlo vremya rasshirit set, a ne borotsya s fizikoy.',
    },
    {
      type: 'proscons',
      title: 'WiFi udlinitel vs Mesh sistema',
      items: [
        { pro: 'Udliniteli deshevy i prosty v ustanovke.', con: 'Udliniteli sozdayut vtoroe imya seti i snizhayut skorost vdvoe.' },
        { pro: 'Udliniteli rabotayut dlya odnoy mertvoy zony.', con: 'Udlinitelyam nuzhen silnyy sushchestvuyushchiy signal dlya usileniya.' },
        { pro: 'Mesh sistemy sozdayut edinuyu besshovnuyu set.', con: 'Mesh sistemy dorozhe v pokupke.' },
        { pro: 'Mesh spravlyaetsya s neskolkimi etazhami i bolshimi domami.', con: 'Mesh trebuet glavnogo uzla ryadom s modemom.' },
      ],
    },
    {
      type: 'tip',
      title: 'Kogda ispolzovat mesh',
      html: '<p>Dlya domov ploshchadyu bolee 120 kvadratnykh metrov ili s tolstymi betonnymi stenami mesh sistema kak minimum s dvumya uzlamami prevzo ydet lyuboy odinochnyy router, kakim by dorogim on ni byl.</p>',
    },
    {
      type: 'title',
      text: 'Ponimanie detsibel prostymi slovami',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Detsibely logarifmicheskie, to est oni vedut sebya ne tak, kak obychnye chisla. Kazhdye 3 dB poter umenshayut moshchnost signala vdvoe. 6 dB poter oznachayut, chto ostayotsya lish chetvert iskhodnoy moshchnosti. 10 dB poter oznachayut, chto vyzhivaet lish odna desyataya. Vot pochemu betonnaya stena v 15 dB tak razrushitelna. Ona ne prosto oslablyaet signal. Ona unichtozhaet ego.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Zatukhanie', definition: 'Postepennaya poterya moshchnosti signala pri prokhozhdenii cherez material. Bolee vysokie chisla oznachayut bolshuyu poteryu signala.' },
        { term: 'dBm', definition: 'Edinitsa moshchnosti dlya izmereniya sily signala WiFi. 0 dBm raven odnomu millivattu. Otritsatelnye znacheniya norma, gde -30 otlichno, a -80 edva prigodno.' },
        { term: 'Myortvaya zona', definition: 'Oblast, gde signal WiFi slishkom slab dlya ustanovleniya ili podderzhaniya stabilnogo soedineniya.' },
        { term: 'Mesh set', definition: 'Sistema iz neskolkikh uzlov-routerov, rabotayushchikh vmeste dlya pokrytiya bolshoy ploshchadi edinoy besshovnoy setyu WiFi.' },
        { term: 'Mnogoluchevaya interferentsiya', definition: 'Kogda radiovolny otrazhayutsya ot sten i predmetov, sozdavaya neskolko zapazdyvayushchikh kopiy odnogo signala, sbivayushchikh priyomnik.' },
        { term: 'SSID', definition: 'Imya vashey seti WiFi. Udliniteli chasto sozdayut vtoroy SSID, v to vremya kak mesh sistemy sokhranyayut odno imya na vsekh uzlakh.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zolotoe pravilo razmeshcheniya routera',
      icon: 'mdi:map-marker-radius',
      badge: 'Klyuchevoy sovet',
      html: '<p>Esli vash router seychas stoit v uglu, v shkafu ili na polu, vy teryaete 50-70 protsentov ego potentsialnoy dalnosti prezhde chem signal voobshche pokinet komnatu. Samoe bystroe uluchshenie, kotoroe vy mozhete sdelat peremestit ego na otkrytoe, tsentralnoe, vozvyshennoe mesto. Eto odno izmenenie chasto reshaet bolshe problem, chem pokupka novogo oborudovaniya.</p>',
    },
    {
      type: 'summary',
      title: 'Kak predotvratit myortvye zony WiFi',
      items: [
        'Razmeshchayte router tsentralno, vysoko i na otkrytom prostranstve.',
        'Svedite k minimumu kolichestvo sten mezhdu routerom i ustroystvom.',
        'Izbegayte kukhon, vannykh i garazhey kak mesta razmeshcheniya routera.',
        'Ispolzuyte 5 GGts dlya skorosti v odnoy komnate, 2,4 GGts dlya rasstoyaniya.',
        'Rassmotrite mesh dlya bolshikh domov ili tolstykh naruzhnykh sten.',
        'Perezagruzhavte ezhemesyachno i obnovlyayte proshivku dlya pikovoy proizvoditelnosti.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Bytovye predmety, blokiruyushchie WiFi',
    labelAddObstacle: 'Nazhmite, chtoby dobavit na put signala',
    labelRemove: 'Udalit',
    labelSignalStrength: 'Signal',
    labelEffectiveRange: 'Effektivnaya dalnost',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Verdikt striminga',
    verdictPerfect: 'Otlichno',
    verdictGood: 'Khorosho',
    verdictFair: 'Udovletvoritelno',
    verdictPoor: 'Plokho',
    verdictDead: 'Myortvaya zona',
    tipTitle: 'Sovet po razmeshcheniyu',
    label4kStreaming: '4K striming',
    labelOnlineGaming: 'Onlayn igry',
    labelVideoCalls: 'Videozovki',
    labelBasicBrowsing: 'Obychnyy syerfing',
    statusPerfect: 'Otlichno',
    statusGood: 'Khorosho',
    statusFair: 'Udovletvoritelno',
    statusPoor: 'Plokho',
    statusImpossible: 'Nevozmozhno',
    statusLowLatency: 'Nizkaya zaderzhka',
    statusLagWarning: 'Preduprezhdenie o lagakh',
    statusDisconnect: 'Razryv',
    statusStable: 'Stabilno',
    statusPixelated: 'Pikselizatsiya',
    statusDropped: 'Obryv',
    statusPass: 'Proydeno',
    statusUnusable: 'Neprigodno',
    tipMoveRouter: 'Peremeshchenie routera vsego na 1 metr ot etogo tvyordogo barera mozhet uluchshit signal do 40%.',
    tipElevateRouter: 'Podnimite router na uroven grudi. Signaly rasprostranyayutsya gorizontalno, a pol pogloshchaet bolshe, chem vy dumaete.',
    tipReduceObstacles: 'Kazhdaya dopolnitelnaya stena umenshaet signal vdvoe. Postaraytes umenshit kolichestvo prepyatstviy mezhdu routerom i ustroystvom.',

    tipFishTank: 'Аквариум блокирует Wi-Fi как бетонная стена. Отодвиньте роутер или устройство от него.',
    tipMicrowave: 'Микроволновки глушат диапазон 2,4 ГГц при работе. Используйте 5 ГГц или отодвиньте роутер от кухни.',
    labelMove: 'Переместить',
    labelWalls: 'Стены',
    labelDrywall: 'Гипсокартон',
    labelBrick: 'Кирпич',
    labelConcrete: 'Бетон',
    labelStone: 'Камень',
    labelObjects: 'Объекты',
    labelWood: 'Дерево',
    labelMetal: 'Металл',
    labelWindow: 'Окно',
    labelFridge: 'Холодильник',
    labelFish: 'Рыба',
    labelMicro: 'Микро',
    labelMirror: 'Зеркало',
    labelFurn: 'Мебель',
    labelActions: 'Действия',
    labelUndo: 'Отменить',
    labelAddDevice: '+ Устройство',
    labelClearWalls: 'Очистить стены',
    labelClearObjects: 'Очистить объекты',
    labelClearAll: 'Очистить всё',
    labelZoomIn: 'Приблизить',
    labelZoomOut: 'Отдалить',
    labelRouter: 'Роутер',
    labelAverageSignal: 'Средний сигнал',
    labelScaleMeters: '5 м',
    hintText: 'Перетаскивайте роутер или устройства для перемещения. Дважды щёлкните по стенам или объектам для удаления. Ctrl+Z для отмены.',
    labelMaxDevices: 'Макс. 4 устройства',
    labelDevicePrefix: 'Устройство',
    labelPerDevice: 'За устройство',
    labelDb: 'дБ',
  },
};
