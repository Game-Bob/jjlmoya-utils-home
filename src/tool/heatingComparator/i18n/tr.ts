import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'isitma-karsilastirma-dogalgaz-isi-pompasi-klima';
const title = 'Doğalgaz vs. Isı Pompası vs. Klima Karşılaştırması';
const description = 'Doğalgaz kombisini ısı pompası veya klima ile değiştirmenin tasarruf miktarını hesaplayın. Eviniz için gerçek enerji tüketimi ve verimlilik karşılaştırması.';

const faqData = [
  {
    question: 'Hangisi daha ucuz: Isı pompası mı, doğalgaz mı?',
    answer: 'Aylık işletme maliyetleri açısından ısı pompası, doğalgazdan önemli ölçüde daha ucuzdur. %400 verimlilik (COP 4) sayesinde, elektrik birim fiyatı yüksek olsa bile, sağlanan kWh ısı başına maliyet genellikle doğalgaza göre %30 ile %50 daha düşüktür.',
  },
  {
    question: 'Isı pompası ile normal bir klima arasındaki fark nedir?',
    answer: 'Teknik olarak her ikisi de ısı pompasıdır. Temel fark, ısıyı aktardıkları ortamdır: Isı pompası genellikle "havadan suya" sistemdir (radyatörlerdeki veya yerden ısıtmadaki suyu ısıtır), klima ise "havadan havaya" sistemdir (havayı doğrudan iç üniteler aracılığıyla ısıtır).',
  },
  {
    question: 'Eski radyatörlü bir eve ısı pompası kurulabilir mi?',
    answer: 'Evet, "yüksek sıcaklık" üniteleri kullanılarak geleneksel radyatörlü evlere ısı pompası kurulabilir. Ancak maksimum tasarruf için yerden ısıtma veya düşük sıcaklıklı radyatörlerle kombinasyon idealdir.',
  },
  {
    question: 'Isı pompası kendini kaç yılda amorti eder?',
    answer: 'Evin tüketimine ve mevcut teşviklere bağlı olarak amortisman süresi genellikle 5 ile 8 yıl arasındadır. Güneş panelleri ile bu süre çok daha kısa olabilir.',
  },
];

const howToData = [
  {
    name: 'Ev Yüzölçümü',
    text: 'Yıllık ısı ihtiyacını tahmin etmek için evinizin net metrekaresini girin.',
  },
  {
    name: 'Enerji Fiyatları',
    text: 'Daha doğru sonuçlar için doğalgaz ve elektrik fiyatlarını güncel faturanıza göre ayarlayın.',
  },
  {
    name: 'Sonuçları Karşılaştır',
    text: 'Üç sistemi yan yana karşılaştırın, verimlilik ve yıllık maliyet açısından kazananı görün.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça ve Kaynaklar',
  bibliography: [
    {
      name: 'Enerji Verimliliği ve Çevre Dairesi Başkanlığı',
      url: 'https://enerji.gov.tr/',
    },
    {
      name: 'Isı Pompası Sistemleri Genel Rehberi',
      url: 'https://www.iskid.org.tr/',
    },
    {
      name: 'TMMOB Makina Mühendisleri Odası',
      url: 'https://www.mmo.org.tr/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Isıtma sistemi seçimi için ipuçları',
      items: [
        '<strong>Isı pompası</strong> doğalgazdan %400\'e kadar daha verimlidir.',
        '<strong>Yalıtım</strong>, faturanızı her türlü kombiden daha çok düşürür.',
        'Elektrikli sistemlerin <strong>amortismanı</strong> yaklaşık 6-8 yıldır.',
        'Neredeyse bedava ısınma için <strong>güneş panelleriyle</strong> birleştirin.',
      ],
    },
    {
      type: 'title',
      text: 'Tüketim Karşılaştırması: Doğalgaz vs. Isı Pompası vs. Klima',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eviniz için doğru iklimlendirme sistemini seçmek, en önemli finansal ve konfor kararlarından biridir. Enerji fiyatlarının değişken olduğu bir dönemde, hangi sistemin daha verimli olduğunu ve hangisinin aylık daha fazla tasarruf sağlayacağını bilmek kritiktir.',
    },
    {
      type: 'paragraph',
      html: 'Yıllardır Türkiye\'de doğalgaz kombileri tartışmasız liderdi. Ancak <strong>ısı pompalarının (havadan suya)</strong> yaygınlaşması ve <strong>klimaların (havadan havaya)</strong> teknolojik gelişimi oyunun kurallarını değiştirdi. Hesaplayıcımız, gerçek verilerle yıllık işletme maliyetlerini görmenize yardımcı olur.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Isı Pompası Verimi',
          value: '%400',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'en iyi', positive: true },
        },
        {
          label: 'Yıllık Ort. Tasarruf',
          value: '15.000₺',
          icon: 'mdi:piggy-bank',
          trend: { value: 'tahmini', positive: true },
        },
        {
          label: 'Ekipman Ömrü',
          value: '20 Yıl',
          icon: 'mdi:calendar-check',
          trend: { value: 'standart', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. Doğalgazlı Kombi: Geleneksel Standart',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Doğalgazlı ısıtma, suyu ısıtmak için yakıt yakan bir kombi kullanır; bu su radyatörlerde veya yerden ısıtmada dolaşır.',
    },
    {
      type: 'list',
      items: [
        '<strong>Performans:</strong> Modern yoğuşmalı kombiler %100\'e yakın verimliliğe sahiptir.',
        '<strong>Avantajlar:</strong> Yaygın tesisat, hızlı ısınma ve düşük ilk kurulum maliyeti.',
        '<strong>Dezavantajlar:</strong> Fosil yakıt bağımlılığı, faturalardaki sabit ücretler ve CO2 emisyonu.',
      ],
    },
    {
      type: 'title',
      text: '2. Isı Pompası: Uç Verimlilik (Havadan Suya)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Isı pompası, dış havadaki termal enerjiyi çekerek (sıfırın altındaki sıcaklıklarda bile) ev içindeki suyun ısıtılmasında kullanır.',
    },
    {
      type: 'list',
      items: [
        '<strong>Verimlilik (COP):</strong> Modern bir ısı pompası genellikle 4 COP değerine sahiptir. Yani tükettiği her 1 kWh elektrik için eve 4 kWh ısı verir.',
        '<strong>Avantajlar:</strong> Güneş panelleriyle tam sürdürülebilirlik, tek cihazla ısıtma ve soğutma, en düşük işletme maliyeti.',
        '<strong>Dezavantajlar:</strong> Yüksek ilk yatırım maliyeti (5-8 yılda amorti edilir) ve dış ünite için yer ihtiyacı.',
      ],
    },
    {
      type: 'tip',
      title: 'Tasarruf Önerisi',
      html: 'Isı pompası en iyi sonucu yerden ısıtma ile verir; çünkü suyun sadece 35°C\'ye ısıtılması yeterlidir (radyatörlerde bu 60-70°C\'dir).',
    },
    {
      type: 'proscons',
      title: 'Isı Pompası vs. Doğalgaz Kombi',
      proTitle: 'Neden Isı Pompası?',
      conTitle: 'Neden Doğalgaz?',
      items: [
        { pro: 'Rakipsiz verim (COP 4+)', con: 'Daha ekonomik kurulum' },
        { pro: 'Fosil yakıt bağımsızlığı', con: 'Hızlı ve yüksek ısı gücü' },
        { pro: 'Isıtma ve Soğutma bir arada', con: 'Eski radyatörlerle tam uyum' },
        { pro: 'Güneş paneliyle harika uyum', con: 'Dış ünite gerektirmez' },
      ],
    },
    {
      type: 'title',
      text: '3. Klima (Havadan Havaya Isı Pompası)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Halk arasında "split klima" olarak bilinen sistemdir. Isı pompası ile aynı prensibi kullanır ancak suyu değil, havayı doğrudan ısıtır. Ilıman iklimler veya destekleyici ısıtma için mükemmel bir çözümdür. Verimliliği (SCOP) genelde 3 ile 3.5 arasındadır.',
    },
    {
      type: 'title',
      text: 'Hesaplama Formülü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sistemleri adil şekilde karşılaştırmak için tüm tüketimi sağlanan her net kWh ısı maliyetine dönüştürüyoruz:',
    },
    {
      type: 'code',
      code: 'Yıllık Maliyet = (Evin Isı İhtiyacı / Sistem Verimi) × Enerji Fiyatı',
      ariaLabel: 'Yıllık maliyet hesaplama formülü',
    },
    {
      type: 'paragraph',
      html: 'Burada:',
    },
    {
      type: 'list',
      items: [
        '<strong>Isı İhtiyacı:</strong> Evinizin yıllık ihtiyaç duyduğu kWh cinsinden ısı (yalıtım ve m2\'ye bağlıdır).',
        '<strong>Verimlilik:</strong> Doğalgaz için 0.95, Isı Pompası için 4.0 ve Klima için 3.2.',
        '<strong>Enerji Fiyatı:</strong> Vergiler dahil kWh başına maliyet.',
      ],
    },
    {
      type: 'card',
      title: 'Gerçek Örnek: 100m² Ev',
      icon: 'mdi:home-analytics',
      html: '<p>Yıllık 7.000 kWh ısı ihtiyacı olan bir evi hayal edelim:</p><ul><li><strong>Doğalgaz:</strong> (7.000 / 0.95) * Fiyat = Hesaplanan tutar</li><li><strong>Isı Pompası:</strong> (7.000 / 4) * Fiyat = %46\'ya varan tasarruf</li><li><strong>Klima:</strong> (7.000 / 3.2) * Fiyat = Ara çözüm</li></ul>',
    },
    {
      type: 'title',
      text: 'Hangi sistem ne zaman mantıklı?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tek bir doğru cevap yoktur; coğrafi konumunuza ve bina tipine göre değişir.',
    },
    {
      type: 'title',
      text: 'Yalıtımın Etkisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Evinizde ısı kaçakları varsa hiçbir sistem verimli değildir. Yeni bir sisteme büyük paralar harcamadan önce pencerelerinizi ve duvar yalıtımınızı kontrol edin. İyi bir yalıtım ısı ihtiyacınızı yarıya indirebilir.',
    },
    {
      type: 'title',
      text: 'Isı Pompası Hakkında Şehir Efsaneleri',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>"Çok soğukta çalışmaz":</strong> Yanlış. Modern cihazlar -15°C hatta -20°C\'ye kadar verimlidir.',
        '<strong>"Havanın nemini kurutur":</strong> Sadece klima (havadan havaya) sistemlerinde geçerlidir. Sulu sistemler konforludur.',
        '<strong>"Elektrik çok pahalı, değmez":</strong> Elektrik birim fiyatı yüksek görünse de, %400 verim bu farkı fazlasıyla kapatır.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Biliyor muydunuz?',
      icon: 'mdi:lightbulb-on',
      badge: 'Bilgi',
      html: '<p>COP (Verimlilik katsayısı) dış sıcaklığa göre değişir. Bu nedenle aşırı soğuklarda verim bir miktar düşse de, hala herhangi bir elektrikli ısıtıcı veya kombiden çok daha üstündür.</p>',
    },
    {
      type: 'title',
      text: 'Sonuç: Gelecek Elektrikte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Avrupa ve dünyadaki eğilim nettir: <strong>karbonsuzlaşma</strong>. Fosil yakıtların yerini yenilenebilir enerji alıyor. Güneş panelleri ve ısı pompası kombinasyonu, günümüzde benzersiz bir konfor ve tasarruf sunar.',
    },
    {
      type: 'paragraph',
      html: 'Faturanızı modern alternatiflerle karşılaştırmak için aracımızı kullanın. Bazen en büyük "para sızıntısı" açık pencere değil, eski bir ısıtma sistemidir.',
    },
  ],
  ui: {
    titleVivienda: '1. Ev Verileri',
    helperVivienda: 'Evinizin özelliklerini yapılandırın',
    labelM2: 'Toplam Alan',
    helperM2: 'Evinizin metrekare cinsinden alanı.',
    labelAislamiento: 'Yalıtım Seviyesi',
    helperAislamiento: 'Eviniz ısıyı ne kadar iyi tutuyor?',
    optExcelent: 'Mükemmel (Yeni bina / Yalıtımlı)',
    optMedium: 'Orta (Çift cam / Standart yalıtım)',
    optPoor: 'Zayıf (Eski / Yalıtımsız)',
    titleCoste: '2. Enerji Maliyeti',
    descCoste: 'Son faturanızdan kWh başına birim fiyatı kontrol edin.',
    labelGasPrice: 'Gaz Maliyeti',
    helperGasPrice: 'Tüketilen her kWh (veya m3) gazın fiyatı.',
    labelElecPrice: 'Elektrik Maliyeti',
    helperElecPrice: 'Tüketilen her kWh elektriğin fiyatı.',
    titleComparison: '3. Yıllık Tüketim Karşılaştırması',
    descComparison: 'Ekipmanların teknik verimine dayalı tahmindir.',
    systemGas: 'Doğalgaz Kombi',
    systemAero: 'Isı Pompası',
    systemAir: 'Klima (Split)',
    labelAnnualCost: 'Isıtma Gideri',
    labelEfficiency: 'Verimlilik',
    labelSource: 'Kaynak',
    labelEnergy: 'Enerji',
    labelInstallation: 'Kurulum',
    valGasSource: 'Doğalgaz',
    valAeroEnergy: 'Yenilenebilir + Elektr.',
    valAirInstall: 'Havadan Havaya',
    winnerBadge: 'En Verimli',
    unitCurrency: '₺',
  },
};
