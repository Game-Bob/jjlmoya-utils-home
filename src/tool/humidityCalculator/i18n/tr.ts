import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'nem-hesaplayici';
const title = 'Ev Nemliligi ve Nem Alma Cihazi Calisma Suresi Hesaplayici';
const description =
  'Nemli bir odanin saglikli bir nem seviyesine getirilmesi icin nem alma cihazinizin ne kadar su cekmesi gerektigini hesaplayin. Tahmini calisma suresi, kuf riski uyarilari ve konfor bolgesi gorsellerini tek bir etkilesimli aracta gorun.';

const faqData = [
  {
    question: 'Nem alma cihazi gunde kac saat calismalidir?',
    answer:
      'Orta derecede nemli bir odada, standart bir ev tipi nem alma cihazi genellikle 50 oranli bagil nemi korumak icin gunde 8 ila 12 saat calismalidir. Cok nemli kosullarda veya su hasarindan sonra, temel kuruluga ulasmak icin 24 ila 48 saat surekli calisma gerekebilir.',
  },
  {
    question: 'Hangi ic mekan nem seviyesi kufu onler?',
    answer:
      'Kuf buyumesi, ic mekan bagil nemi 60in altinda tutuldugunda engellenir. Insan sagligi ve bina korunmasi icin ideal konfor bolgesi 40 ile 50 arasindadir. 70in uzerindeki seviyeler, kuf sporlarinin 24 ila 48 saat icinde filizlenmesi icin yuksek riskli bir ortam yaratir.',
  },
  {
    question: 'Hava ne kadar su tutabilir?',
    answer:
      'Havanin tutabilecegi su buhari miktari sicakliga baglidir. 20 santigrat derecede, doymus hava metrekup basina yaklasik 17 gram su icerir. 25 santigrat derecede bu, metrekup basina yaklasik 23 grama yukselir. 25 santigrat derece ve 70 nemde 30 metrekarelik bir oda, havada yaklasik 8 litre gorunmez su barindirir.',
  },
  {
    question: 'Sicaklik nem alma cihazi verimliligini etkiler mi?',
    answer:
      'Evet. Kompresorlu nem alma cihazlari 18 santigrat derecenin uzerinde en iyi sekilde calisir. 15 santigrat derecenin altinda performanslari duser cunku buharlastirici bobinler buzlanabilir. Kimyasal kurutma islemi kullandiklari icin, nem alma tuzlu cihazlar garaj veya bodrum gibi soguk mekanlar icin daha uygundur.',
  },
  {
    question: 'Hangi boyutta nem alma cihazina ihtiyacim var?',
    answer:
      '50 metrekareye kadar orta derecede nemli bir oda icin, genellikle gunde 10 ila 12 litrelik bir unite yeterlidir. Cok nemli odalar veya 50 metrekareyi asan alanlar icin gunde 20 litrelik bir model secin. Sel veya siddetli nemden sonra, gunde 30 litrelik endustriyel bir unite kosullari daha hizli geri getirecektir.',
  },
  {
    question: 'Nem alma cihazi camasir kurutabilir mi?',
    answer:
      'Evet. Camasir modu olan bir nem alma cihazi, cevredeki havadan nem cekerken kapali mekanlarda kiyafetleri verimli bir sekilde kurutabilir. Kurutma makinesinden daha az enerji kullanir ve pencerelerde ve duvarlarda yogusmayi onler. Sicak havalarda acik hava kurutmasina benzer kurutma sureleri bekleyin.',
  },
];

const howToData = [
  {
    name: 'Oda boyutunu girin',
    text: 'Odanin zemin alanini metrekare olarak yazin. Hesaplayici, toplam hava hacmini tahmin etmek icin standart 2,5 metre tavan yuksekligini varsayar.',
  },
  {
    name: 'Sicakligi ayarlayin',
    text: 'Mevcut oda sicakligini santigrat derece olarak girin. Sicak hava daha fazla nem tutar, bu nedenle sicaklik, cikarilmasi gereken su miktarini dogrudan etkiler.',
  },
  {
    name: 'Mevcut nemi secin',
    text: 'Mevcut bagil nem yuzdesini ayarlamak icin konfor carkini veya sayisal girisi kullanin. 60in uzerindeki degerler uyari tonlarinda vurgulanir.',
  },
  {
    name: 'Hedef nemi secin',
    text: 'Istediginiz bagil nemi ayarlayin. 50, konfor ve kuf onleme icin onerilir. 40, alerji hastalari icin idealdir.',
  },
  {
    name: 'Nem alma cihazi kapasitesini girin',
    text: 'Makinanizin gunde litre cinsinden cekim hizini girin. Bu genellikle on etikette veya kullanim kilavuzunda yazilidir.',
  },
  {
    name: 'Sonuclari inceleyin',
    text: 'Su cekim tanki simulasyonunu, calisma suresi tahminini ve kuf riski basligini okuyarak cihazinizi ne kadar sure calistiracaginiza karar verin.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'Duvarlarinizdaki Gizli Su',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cogu ev sahibi, nemli havanin sadece rahatsiz edici degil, ayni zamanda pahali ve tehlikeli oldugunu asla fark etmez. Tek bir nemli oda, birkaç litre gorunmez su buhari barindirabilir. Zamanla bu nem soguk yuzeylerde yogunlasir, kuf kolonilerini besler ve siva, boya ve keresteyi bozar. Tam olarak ne kadar suyun cikarilmasi gerektigini ve bunun ne kadar surdugunu anlamak, evinizi ve sagliginizi korumak icin atilacak ilk adimdir.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'İdeal ic mekan nemi', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Ort. gunluk calisma suresi', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Kuf riski esigi', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Neden bagil nem onemlidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bagil nem, havadaki su miktari degil, havanin o sicaklikta tutabilecegi maksimuma gore tuttugu su yuzdesidir. Sicak hava daha buyuk bir sunger gibidir. 30 santigrat derecede, hava 15 santigrat derecede oldugundan neredeyse iki kat daha fazla nem tutabilir. Iste bu yuzden, pencereleri actiktan sonra bile bir oda yapiskan hissedebilir. Nem hala oradadir, sadece daha az gorunur.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Yuksek nem',
          description: '60in uzerinde bagil nem. Kuf, toz akarlari ve yogusma hasari riski.',
          icon: 'mdi:alert',
          points: ['Pencerelerde ve duvarlarda yogusma', 'Kotu kokular ve mikrobiyal buyume', 'Artmis solunum tahrişi', 'Nemli havanin isi iletkenligi nedeniyle daha yuksek isitma faturalari'],
        },
        {
          title: 'Optimal nem',
          description: '40 ile 50 arasinda bagil nem. Konforlu, saglikli ve enerji verimli.',
          icon: 'mdi:check-circle',
          points: ['Soguk yuzeylerde yogusma yok', 'Kuf sporlari hareketsiz kalir', 'Cilt ve solunum konforu', 'Mobilya ve keresteyi koruma'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hizli nem denetimi',
      icon: 'mdi:clipboard-check',
      badge: 'Eylem',
      html: '<p style="margin:0">Her sabah pencereleri yogusma acisindan kontrol edin. Eger damlalar duzenli olarak beliriyorsa, neminiz cok yuksek. Yogusma durana kadar gunluk 12 saat nem alma cihazi calistirin. Uniteyi en nemli odaya tasiyin, genellikle mutfak, banyo veya bodrum. Tanki her gun bosaltin ve filtreyi iki haftada bir temizleyin.</p>',
    },
    {
      type: 'title',
      text: 'Nem alma cihazinizi dogru boyutlandirma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yaygin bir hata, mekan icin cok kucuk bir nem alma cihazi satin almaktir. 60 metrekarelik nemli bir bodrumda gunde 10 litrelik bir makine, hedef nemi hicbir zaman yakalayamadan surekli calisacaktir. Odanizin gerektirdigi tam su cekim hacmini gormek icin bu hesaplayiciyi kullanin. Calisma suresi tahmini gunde 20 saati asiyorsa, daha buyuk kapasiteli bir uniteye veya daha iyi havalandirmaya ihtiyaciniz var.',
    },
    {
      type: 'summary',
      title: 'Evinizi nasil kuru tutarsiniz',
      items: [
        'Herhangi bir oda icin gereken tam su cekim miktarini belirlemek icin bu hesaplayiciyi kullanin.',
        'Saglik ve konfor icin ic mekan bagil nemi 40 ile 50 arasinda tutun.',
        'Kuf riski basligi yeşile donene kadar nem alma cihazini calistirin.',
        'Otomatik kapanmayi onlemek icin su tanki dolmadan once bosaltin.',
        'Hava akisini ve cekim hizini maksimumda tutmak icin filtreleri duzenli olarak temizleyin.',
        'Daha hizli sonuclar icin nem almanin yaninda oda havalandirmasini iyilestirin.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Oda boyutu',
    unitM2: 'm2',
    labelTemperature: 'Sicaklik',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Mevcut nem',
    labelTargetHumidity: 'Hedef nem',
    labelCapacity: 'Nem alma kapasitesi',
    unitLitersDay: 'L/gun',
    comfortDialTitle: 'Konfor bolgesi',
    comfortCurrent: 'Mevcut',
    comfortTarget: 'Hedef',
    tankTitle: 'Havadaki su',
    tankLiters: 'litre',
    runtimeTitle: 'Tahmini calisma suresi',
    runtimeUnitH: 's',
    runtimeUnitM: 'd',
    moldRiskTitle: 'Kuf riski',
    moldRiskHigh: 'Yuksek risk',
    moldRiskMedium: 'Orta risk',
    moldRiskLow: 'Dusuk risk',
    extractionLabel: 'cekilcek',
    tipEnergy: 'Nem alma cihazinizi dusuk yuk saatlerinde calistirmak, elektrik maliyetlerini onemli olcude dusurebilir.',
    tipMold: 'Nemi 50in altinda tutmak, kuf sporlarinin yuzeylerde filizlenmesini onler.',
    unitPercent: '%',
    badgeHigh: 'Yuksek',
    badgeMedium: 'Orta',
    badgeLow: 'Dusuk',
  },
};
