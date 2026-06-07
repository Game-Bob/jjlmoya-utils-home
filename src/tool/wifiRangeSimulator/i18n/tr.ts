import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wifi-menzil-simulatoru';
const title = 'WiFi Menzil ve Engel Simülatörü';
const description =
  'Ev planınızı çizin, duvarları, kapıları, mobilyaları ve cihazları yerleştirin, ardından yönlendiricinizi ve cihazınızı sürükleyerek en iyi sinyal yolunu bulun. Yeni donanım satın almadan ölü bölgeleri düzeltmek için canlı kapsama kaybı, akış kararı ve yerleştirme ipuçlarını görün.';

const faqData = [
  {
    question: 'Wi-Fi sinyalim neden bazı odalarda düşüyor?',
    answer:
      'Wi-Fi, fiziksel malzemeler tarafından emilen, yansıtılan veya engellenen radyo dalgalarını kullanır. Masif tuğla, beton ve metal en kötüleridir ve her biri sinyal gücünü önemli ölçüde azaltır. Su ve cam da sinyalin bir kısmını yansıtabilir veya emebilir.',
  },
  {
    question: 'Beton veya taş duvar Wi-Fi\'yi ne kadar etkiler?',
    answer:
      'Standart bir beton duvar, 2,4 GHz sinyalini 10 ila 20 desibel zayıflatabilir. 70 ila 80 santimetre kalınlığındaki taş duvarlar 22 desibel veya daha fazlasına ulaşabilir. Bu, kalınlık ve yoğunluğa bağlı olarak kabaca yüzde 50 ila 90 arasında menzil kaybı anlamına gelir. 5 GHz\'de kayıp daha da fazladır çünkü yüksek frekanslar yoğun malzemeler tarafından daha hızlı emilir.',
  },
  {
    question: 'En iyi kapsama için yönlendiricimi nereye koymalıyım?',
    answer:
      'Merkezi, yüksekte ve açıkta. Yönlendiricinizi evinizin ortasına, kalın duvarlardan ve metal nesnelerden en az bir metre uzağa yerleştirin ve yatay dağılım için göğüs hizasına yükseltin. Köşelerden, dolaplardan ve mobilyaların arkasındaki alçak konumlardan kaçının.',
  },
  {
    question: 'Cam kapılar Wi-Fi\'yi engelleyebilir mi?',
    answer:
      'Şeffaf cam minimum düzeyde etkiye sahiptir, ancak metal filmli kaplamalı veya çift camlı pencereler sinyalleri yansıtabilir. Simülatör, standart camı yaklaşık 2 ila 3 desibel kayıpla hafif bir engel olarak ele alır.',
  },
];

const howToData = [
  {
    name: 'Sinyal yolunu belirleyin',
    text: 'Yönlendiricinizle önemsediğiniz cihaz arasında düz bir çizgi hayal edin. Bu çizgiyi kesen her nesne önemlidir.',
  },
  {
    name: 'Her engeli ekleyin',
    text: 'Yolu kesen her duvarı, kapıyı, cihazı veya mobilya parçasını eklemek için simülatördeki malzeme düğmelerine tıklayın.',
  },
  {
    name: 'Kararı okuyun',
    text: 'Nesneler ekledikçe veya çıkardıkça sinyal halkasının, dalga animasyonunun ve akış panelinin anında güncellendiğini izleyin.',
  },
  {
    name: 'Bağlamsal ipucunu uygulayın',
    text: 'Tam engel kombinasyonunuza göre görünen yerleştirme kartlarını izleyerek yeni donanım satın almadan kapsamayı iyileştirin.',
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
      text: 'Wi-Fi\'niz Neden Yan Odada Ölüyor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Yönlendiriciniz her yöne radyo dalgaları yayar. Bu dalgalar havada kolayca seyahat eder, ancak karşılaştıkları her fiziksel nesne bir bedel ödetir. Bazı malzemeler sinyalin çoğunu geçirir. Diğerleri onu tamamen yutar. Evinizdeki hangi nesnelerin bağlantınızı sessizce öldürdüğünü anlamak, yeni donanıma tek bir euro bile harcamadan ölü bölgeleri düzeltmenin ilk adımıdır.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Alçıpan Kaybı', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Kalın Taş Duvar', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Metal Kapı Kaybı', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Evinizdeki Her Nesnenin Gerçek Maliyeti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tüm engeller eşit değildir. Tek bir alçıpan panel sinyalinizin yüzde birkaçını götürebilir, ancak beton bir sütun veya metal bir kapı etkili menzilinizi yarıya indirebilir. Yönlendiricinizi televizyonun arkasına, buzdolabının yanına veya metal bir rafın altında yere koyduğunuzda gerçekten karşı karşıya olduğunuz şey budur.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Hafif Engeller',
          description: 'Bu nesneler minimum sinyal kaybına neden olur ve genellikle sinyal yolunun yakınında bulunmaları güvenlidir. Tek bir pencere veya cam kapı için endişelenmemelisiniz.',
          icon: 'mdi:window-open-variant',
          points: [
            'Cam kapı: 2 ila 3 dB kayıp',
            'Standart pencere: 2 dB kayıp',
            'Alçıpan bölme: 3 dB kayıp',
            'Ahşap iç kapı: 4 dB kayıp',
          ],
        },
        {
          title: 'Orta Düzey Engeller',
          description: 'Bu nesneler kapsamanızda gözle görülür bir düşüş yaratır. Bir veya ikisi sorun değil, ancak aynı sinyal yolunda üç veya daha fazlasını biriktirmek arabelleğe alma ve gecikmeye neden olmaya başlayacaktır.',
          icon: 'mdi:wardrobe',
          points: [
            'Ahşap gardırop: 5 dB kayıp',
            'Büyük ayna: 6 dB kayıp',
            'Çamaşır makinesi: 6 dB kayıp',
            'Mikrodalga fırın: 5 dB kayıp',
          ],
        },
        {
          title: 'Ağır Engeller',
          description: 'Bunlar ev ağlarının sessiz katilleridir. Tek bir beton duvar veya metal kapı güçlü bir sinyali zayıf bir sinyale dönüştürebilir ve bunların birikmesi garantili ölü bölgeler oluşturur.',
          icon: 'mdi:wall',
          points: [
            'Masif tuğla duvar: 8 dB kayıp',
            'Zemin veya tavan: 10 dB kayıp',
            'Buzdolabı: 10 dB kayıp',
            'Akvaryum: 12 dB kayıp',
          ],
        },
        {
          title: 'Aşırı Engeller',
          description: 'Bu malzemeler neredeyse tüm radyo enerjisini emer veya yansıtır. Sinyal yolunuz bunlardan birini kesiyorsa, yönlendiriciyi veya cihazı taşımanız gerekir. Başka bir çözüm yoktur.',
          icon: 'mdi:shield',
          points: [
            'Kalın taş duvar (70-80 cm): 22 dB kayıp',
            'Beton duvar: 15 dB kayıp',
            'Metal dolap: 12 dB kayıp',
            'Metal kapı veya geçit: 18 dB kayıp',
            'Asansör boşluğu: 20+ dB kayıp',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Farklı Frekanslar Duvarlardan Nasıl Geçer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Çoğu modern yönlendirici iki bantta yayın yapar: 2,4 GHz ve 5 GHz. Düşük frekans daha uzağa gider ve duvarlardan daha kolay sızar, ancak daha yavaş ve kalabalıktır. Yüksek frekans çok hızlıdır ancak yolundaki her engel tarafından emilir.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2,4 GHz Nüfuzu',
          description: 'Düşük frekanslar daha uzağa gider ve duvarları daha iyi deler. Uzun menzil için idealdir ancak komşu ağlarla kalabalıktır.',
          icon: 'mdi:signal',
          points: [
            'Masif tuğla ve betonda daha iyi',
            'Komşu yönlendiricilerden daha fazla parazit',
            'Daha yavaş maksimum hızlar, gerçekte yaklaşık 150 Mbps',
            'Akıllı ev cihazları ve IoT için daha iyi',
          ],
        },
        {
          title: '5 GHz Nüfuzu',
          description: 'Yüksek frekanslar daha hızlı hızlar sunar ancak yapı malzemeleri tarafından çok daha hızlı emilir. Açık alanlar ve yakındaki cihazlar için en iyisidir.',
          icon: 'mdi:signal-5g',
          points: [
            'Beton ve metalde zayıf',
            'Daha az parazit, daha temiz kanallar',
            'Aynı odada gigabit hızları',
            'Daha kötü kapsama, ulaştığı yerde daha iyi kalite',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Gizli Katiller: Hiç Şüphelenmediğiniz Nesneler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Çoğu insan duvarları suçlar, ancak en kötü Wi-Fi katillerinden bazıları günlük nesnelerdir. Bir akvaryum çoğunlukla sudan oluşur ve su, 2,4 GHz radyo dalgalarını neredeyse mükemmel bir şekilde emer. Büyük bir ayna, sinyali cihazınızdan uzağa yansıtan ince bir metal tabakaya sahiptir. Bir mikrodalga fırın, yönlendiricinizle tamamen aynı frekans olan 2,4 GHz\'de radyasyon yayar ve her çorba ısıttığınızda parazite neden olur.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Akvaryum Tuzağı',
      icon: 'mdi:fish',
      badge: 'Sürpriz Engelleyici',
      html: '<p>Büyük bir akvaryum Wi-Fi sinyalinizi 12 desibele kadar zayıflatabilir. Bu, kalın bir beton duvarla aynıdır. Yönlendiriciniz akvaryumun bir tarafında ve masanız diğer tarafındaysa, su arkadaki duvardan daha fazla hasara neden oluyordur.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ayna Etkisi',
      icon: 'mdi:mirror',
      badge: 'Yansıma Tehlikesi',
      html: '<p>Büyük aynalar, ışığı yansıtmak için tasarlanmış ince bir metal tabakaya sahiptir. Aynı metal tabaka radyo dalgalarını da yansıtır. Yönlendiricinize bakan bir ayna, sinyali ihtiyacınız olan yerden uzağa yansıtabilir veya veri paketlerini karıştıran kafa karıştırıcı çok yollu parazit oluşturabilir.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mikrodalga Paraziti',
      icon: 'mdi:microwave',
      badge: 'Aktif Bozucu',
      html: '<p>Mikrodalga fırınlar 2,45 GHz\'de çalışır ve doğrudan 2,4 GHz Wi-Fi bandıyla örtüşür. Çalışırken, bir mikrodalga fırın 3 ila 5 metrelik bir yarıçap içindeki 2,4 GHz sinyalini yok edebilir. Yönlendiriciniz yalnızca 2,4 GHz\'i destekliyorsa ve mutfağınız yakındaysa, çift bantlı bir yönlendiriciye geçin ve kritik görevler için 5 GHz kullanın.</p>',
    },
    {
      type: 'title',
      text: 'Oda Oda: Yönlendiricinizi Nereye Koymalısınız',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İdeal yönlendirici konumu en uygun olanı değildir. Gerçekten interneti kullandığınız odalara en net görüş hattını sağlayan konumdur. Her oda hakkında böyle düşünmelisiniz.',
    },
    {
      type: 'table',
      headers: ['Oda', 'Risk Seviyesi', 'Neden Zor', 'Çözüm'],
      rows: [
        ['Mutfak', 'Yüksek', 'Buzdolabı, mikrodalga, metal dolaplar, su boruları', 'Yönlendiriciyi mutfağın dışına yerleştirin, asla içine değil.'],
        ['Banyo', 'Yüksek', 'Aynalar, su boruları, metal fileli fayanslar', 'Yönlendiriciyi banyo duvarının arkasına koymaktan kaçının.'],
        ['Yatak Odası', 'Orta', 'Dolaplar, kalın duvarlar, metal yatak çerçeveleri', 'Yönlendiriciyi yükseltin, mobilyaların üzerinden yolu açın.'],
        ['Oturma Odası', 'Düşük', 'Genellikle açıktır, ancak TV ve konsollara dikkat edin', 'Yönlendiriciyi görünür tutun, televizyonun arkasına saklamayın.'],
        ['Garaj', 'Aşırı', 'Metal kapılar, beton, arabalar', 'İç mekan yönlendiricisinin garaja ulaşmasını beklemeyin.'],
        ['Bahçe / Teras', 'Yüksek', 'Dış duvarlar, cam, mesafe', 'Bir dış mekan erişim noktası veya mesh düğümü kullanın.'],
      ],
    },
    {
      type: 'title',
      text: 'Bir Metre Kuralı ve Diğer Yerleştirme İpuçları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Küçük hareketler büyük farklar yaratır. Evinizi yeniden kablolamanıza gerek yok. Sadece radyo dalgalarının nasıl hareket ettiğini anlamanız ve onlara temiz bir yol vermeniz gerekiyor.',
    },
    {
      type: 'tip',
      title: 'Bir Metre Kuralı',
      html: '<p>Yönlendiricinizi beton veya metal bir bariyerden sadece bir metre uzaklaştırmak, kaybolan sinyal gücünün yüzde 40\'ına kadarını geri kazandırabilir.</p>',
    },
    {
      type: 'tip',
      title: 'Kapsama İçin Yükseltin',
      html: '<p>Yönlendiriciyi bir rafta göğüs hizasına yükseltin. Sinyaller antenden yatay olarak yayılır. Yere koymak, kapsamanızın yarısını boşa harcar.</p>',
    },
    {
      type: 'tip',
      title: 'Görünür Tutun',
      html: '<p>Yönlendiriciyi asla bir dolabın, gardırobun içine veya televizyonun arkasına saklamayın. Muhafaza, sinyali odanıza ulaşmadan önce hapseden bir Faraday kafesi gibi çalışır.</p>',
    },
    {
      type: 'tip',
      title: 'Anten Konumlandırma',
      html: '<p>Yönlendiricinizin harici antenleri varsa, birini dikey, diğerini yatay olarak konumlandırın. Bu, farklı yüksekliklerdeki cihazlar için daha iyi kapsama sağlar.</p>',
    },
    {
      type: 'tip',
      title: 'Parazitten Kaçının',
      html: '<p>Yönlendiriciyi mikrodalga fırınlardan, kablosuz telefonlardan ve bebek monitörlerinden en az 1,5 metre uzakta tutun. Bu cihazlar 2,4 GHz spektrumunu paylaşır ve aktif parazite neden olur.</p>',
    },
    {
      type: 'tip',
      title: 'Orta Kat Avantajı',
      html: '<p>Çok katlı bir evde yaşıyorsanız, yönlendiriciyi orta kata yerleştirin. Sinyaller beton döşemelerden yukarı ve aşağı iyi yayılmaz.</p>',
    },
    {
      type: 'title',
      text: 'Akış Kararları: Sinyaliniz Gerçekte Ne Anlama Geliyor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yüzdeler soyuttur. Gerçekten önemsediğiniz şey, Netflix izleyip izleyemeyeceğiniz, bir maçı kazanıp kazanamayacağınız veya donmadan bir görüntülü görüşmeyi bitirip bitiremeyeceğinizdir. İşte her sinyal seviyesinin gerçek dünyada anlamı.',
    },
    {
      type: 'table',
      headers: ['Sinyal', '4K Akış', 'Çevrimiçi Oyun', 'Görüntülü Görüşme', 'Gezinme'],
      rows: [
        ['%80 ila %100', 'Mükemmel, anında yükleme', 'Düşük gecikme, rekabetçi oyun', 'Kristal netliğinde, düşme yok', 'Anında, gecikme yok'],
        ['%60 ila %79', 'İyi, ara sıra arabellek', 'Oynanabilir, küçük gecikmeler', 'Kararlı, nadiren piksellenme', 'Hızlı, sorun yok'],
        ['%40 ila %59', 'Her birkaç dakikada bir arabellek', 'Gecikme uyarıları, lastik bantlanma', 'Piksellenme, bazı düşmeler', 'Kullanılabilir, daha yavaş yükleme'],
        ['%20 ila %39', 'İmkansız, sürekli donma', 'Bağlantı kesilmeleri, oynanamaz', 'Sık düşmeler, kullanılamaz', 'Çok yavaş, zaman aşımları'],
        ['%0 ila %19', 'Başlamaz', 'Bağlanamıyor', 'Bağlantı yok', 'Kullanılamaz'],
      ],
    },
    {
      type: 'title',
      text: 'Bir Şey Satın Almadan Önce Hızlı Çözümler',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Ücretsiz Optimizasyon Kontrol Listesi',
      items: [
        'Yönlendiriciyi evinizin köşesine değil ortasına taşıyın.',
        'Bir raf veya yüksek mobilya üzerinde göğüs hizasına yükseltin.',
        'Dolaplardan, gardıroplardan ve televizyonun arkasından çıkarın.',
        'Mümkünse bir anteni dikey, birini yatay olarak ayarlayın.',
        'Yakındaki cihazlar için 5 GHz, uzaktakiler için 2,4 GHz kullanın.',
        'Bir tarayıcı uygulaması kullanarak daha az kalabalık bir Wi-Fi kanalına geçin.',
        'Bilinen sinyal hatalarını düzeltmek için yönlendirici yazılımını güncelleyin.',
        'Bellek sızıntılarını temizlemek için yönlendiriciyi ayda bir yeniden başlatın.',
      ],
    },
    {
      type: 'title',
      text: 'Donanımınızı Ne Zaman Yükseltmelisiniz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bazen ortam kazanır. Tüm yerleştirme ipuçlarını denediyseniz ve hala ölü bölgelerden mustaripseniz, fizikle savaşmak yerine ağı genişletmenin zamanı gelmiştir.',
    },
    {
      type: 'proscons',
      title: 'WiFi Genişletici vs Mesh Sistemi',
      items: [
        { pro: 'Genişleticiler ucuz ve kurulumu kolaydır.', con: 'Genişleticiler ikinci bir ağ adı oluşturur ve hızı yarıya düşürür.' },
        { pro: 'Genişleticiler tek bir ölü bölge için çalışır.', con: 'Genişleticilerin güçlendirmek için güçlü bir mevcut sinyale ihtiyacı vardır.' },
        { pro: 'Mesh sistemleri tek bir kesintisiz ağ oluşturur.', con: 'Mesh sistemleri başlangıçta daha pahalıdır.' },
        { pro: 'Mesh, birden çok katı ve büyük evleri yönetir.', con: 'Mesh, modemin yakınında bir ana düğüm gerektirir.' },
      ],
    },
    {
      type: 'tip',
      title: 'Mesh Ne Zaman Kullanılmalı',
      html: '<p>120 metrekarenin üzerindeki evler veya kalın beton duvarlı evler için, en az iki düğümlü bir mesh sistemi, ne kadar pahalı olursa olsun herhangi bir tek yönlendiriciden daha iyi performans gösterecektir.</p>',
    },
    {
      type: 'title',
      text: 'Desibelleri Basit Dilde Anlamak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Desibeller logaritmiktir, yani normal sayılar gibi davranmazlar. Her 3 dB kayıp, sinyal gücünüzü yarıya indirir. 6 dB kayıp, orijinal gücün yalnızca dörtte birinin kaldığı anlamına gelir. 10 dB kayıp, yalnızca onda birinin hayatta kaldığı anlamına gelir. Bu nedenle 15 dB\'lik bir beton duvar yıkıcıdır. Sinyali yalnızca zayıflatmaz. Onu yok eder.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Zayıflama', definition: 'Sinyal gücünün bir malzemeden geçerken kademeli olarak kaybolması. Daha yüksek sayılar daha fazla sinyal kaybı anlamına gelir.' },
        { term: 'dBm', definition: 'Wi-Fi sinyal gücünü ölçmek için kullanılan bir güç birimi. 0 dBm bir miliwatta eşittir. Negatif değerler normaldir, -30 mükemmel ve -80 neredeyse kullanılamaz anlamına gelir.' },
        { term: 'Ölü Bölge', definition: 'Wi-Fi sinyalinin güvenilir bir bağlantı kurmak veya sürdürmek için çok zayıf olduğu bir alan.' },
        { term: 'Mesh Ağı', definition: 'Geniş bir alanı tek bir kesintisiz Wi-Fi ağıyla kaplamak için birlikte çalışan birden çok yönlendirici düğümünden oluşan bir sistem.' },
        { term: 'Çok Yollu Parazit', definition: 'Radyo dalgalarının duvarlardan ve nesnelerden yansıyarak alıcının kafasını karıştıran aynı sinyalin birden çok gecikmeli kopyasını oluşturması.' },
        { term: 'SSID', definition: 'Wi-Fi ağınızın adı. Genişleticiler genellikle ikinci bir SSID oluştururken, mesh sistemleri tüm düğümlerde tek bir ad tutar.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yönlendirici Yerleştirmenin Altın Kuralı',
      icon: 'mdi:map-marker-radius',
      badge: 'Anahtar İpucu',
      html: '<p>Yönlendiriciniz şu anda bir köşede, bir dolabın içinde veya yerdeyse, sinyal odadan çıkmadan önce potansiyel menzilinin yüzde 50 ila 70\'ini çöpe atıyorsunuz. Yapabileceğiniz en hızlı yükseltme, onu açık, merkezi, yüksek bir konuma taşımaktır. Bu tek değişiklik, genellikle yeni ekipman satın almaktan daha fazla sorunu çözer.</p>',
    },
    {
      type: 'summary',
      title: 'WiFi Ölü Bölgeleri Nasıl Önlenir',
      items: [
        'Yönlendiriciyi merkezi, yüksek ve açık bir yere yerleştirin.',
        'Yönlendirici ve cihaz arasındaki duvar sayısını en aza indirin.',
        'Yönlendirici konumu olarak mutfak, banyo ve garajdan kaçının.',
        'Aynı odada hız için 5 GHz, mesafe için 2,4 GHz kullanın.',
        'Büyük evler veya kalın dış duvarlar için mesh\'i düşünün.',
        'En yüksek performans için aylık yeniden başlatma ve yazılım güncellemesi yapın.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Wi-Fi\'yi Engelleyen Ev Nesneleri',
    labelAddObstacle: 'Sinyal yoluna eklemek için tıklayın',
    labelRemove: 'Kaldır',
    labelSignalStrength: 'Sinyal',
    labelEffectiveRange: 'Etkili Menzil',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Akış Kararı',
    verdictPerfect: 'Mükemmel',
    verdictGood: 'İyi',
    verdictFair: 'Orta',
    verdictPoor: 'Kötü',
    verdictDead: 'Ölü Bölge',
    tipTitle: 'Yerleştirme İpucu',
    label4kStreaming: '4K Akış',
    labelOnlineGaming: 'Çevrimiçi Oyun',
    labelVideoCalls: 'Görüntülü Görüşme',
    labelBasicBrowsing: 'Temel Gezinme',
    statusPerfect: 'Mükemmel',
    statusGood: 'İyi',
    statusFair: 'Orta',
    statusPoor: 'Kötü',
    statusImpossible: 'İmkansız',
    statusLowLatency: 'Düşük Gecikme',
    statusLagWarning: 'Gecikme Uyarısı',
    statusDisconnect: 'Bağlantıyı Kes',
    statusStable: 'Kararlı',
    statusPixelated: 'Piksellenmiş',
    statusDropped: 'Düştü',
    statusPass: 'Geçti',
    statusUnusable: 'Kullanılamaz',
    tipMoveRouter: 'Yönlendiricinizi o katı bariyerden sadece 1 metre uzaklaştırmak sinyali %40\'a kadar iyileştirebilir.',
    tipElevateRouter: 'Yönlendiriciyi göğüs hizasına yükseltin. Sinyaller yatay olarak yayılır ve zemin düşündüğünüzden daha fazlasını emer.',
    tipReduceObstacles: 'Her ek duvar sinyali yarıya indirir. Yönlendirici ve cihaz arasındaki engel sayısını azaltmaya çalışın.',

    tipFishTank: 'Akvaryum, beton bir duvar gibi Wi-Fi\'yi engeller. Yönlendiriciyi veya cihazı ondan uzaklaştırın.',
    tipMicrowave: 'Mikrodalgalar çalışırken 2,4 GHz bandını bozar. 5 GHz kullanın veya yönlendiriciyi mutfaktan uzaklaştırın.',
    labelMove: 'Taşı',
    labelWalls: 'Duvarlar',
    labelDrywall: 'Alçıpan',
    labelBrick: 'Tuğla',
    labelConcrete: 'Beton',
    labelStone: 'Taş',
    labelObjects: 'Nesneler',
    labelWood: 'Ahşap',
    labelMetal: 'Metal',
    labelWindow: 'Pencere',
    labelFridge: 'Buzdolabı',
    labelFish: 'Balık',
    labelMicro: 'Mikro',
    labelMirror: 'Ayna',
    labelFurn: 'Mobilya',
    labelActions: 'İşlemler',
    labelUndo: 'Geri Al',
    labelAddDevice: '+ Cihaz',
    labelClearWalls: 'Duvarları Temizle',
    labelClearObjects: 'Nesneleri Temizle',
    labelClearAll: 'Hepsini Temizle',
    labelZoomIn: 'Yakınlaştır',
    labelZoomOut: 'Uzaklaştır',
    labelRouter: 'Yönlendirici',
    labelAverageSignal: 'Ortalama Sinyal',
    labelScaleMeters: '5 m',
    hintText: 'Yönlendiriciyi veya cihazları taşımak için sürükleyin. Duvarları veya nesneleri silmek için çift tıklayın. Ctrl+Z ile geri alın.',
    labelMaxDevices: 'Maks. 4 cihaz',
    labelDevicePrefix: 'Cihaz',
    labelPerDevice: 'Cihaz Başına',
    labelDb: 'dB',
  },
};
