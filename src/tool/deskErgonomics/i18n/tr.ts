import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'masa-ergonomisi';
const title = 'Masa Ergonomisi ve Çalışma Alanı Düzen Hizalama';
const description =
  'Boyunuzu girin ve sandalyenizi, masanızı ve monitörünüzü ev ofisinizde sırt ve boyun ağrısını ortadan kaldırmak için nasıl ayarlayacağınızı anında görün.';

const faqData = [
  {
    question: 'Masa yüksekliği neden önemlidir?',
    answer:
      'Çok yüksek bir masa omuzlarınızı kaldırmaya zorlar, boyun ve üst sırtınızda gerilme yaratır. Çok alçak bir masa öne eğilmenize neden olarak bel disklerinizi sıkıştırır. Doğru yükseklik, ön kollarınızı yere paralel tutar ve dirseklerinizi 90 derece açıda kalmasını sağlar.',
  },
  {
    question: 'Monitörüm ne kadar yüksekte olmalı?',
    answer:
      'Monitörünüzün üst kısmı göz hizanızda veya hafif altında olmalı, ekran 10 ila 20 derece geriye eğilmiş olmalı. Bu boynunuzu nötr pozisyonda tutar ve hafifçe aşağı bakarak göz yorgunluğunu azaltır, bu da insan görüşünün doğal dinlenme açısıdır.',
  },
  {
    question: 'Ekranıma ne kadar uzaklıkta oturmalıyım?',
    answer:
      'İdeal mesafe bir kol uzunluğu kadar, yaklaşık 50 ila 70 santimetredir. Bu mesafede gözleriniz odaklanmak için fazla çaba harcamaz ve başınızı hareket ettirmeden tüm ekranı görebilirsiniz. Daha büyük ekranlar için mesafeyi orantılı olarak artırın.',
  },
  {
    question: 'Ayakta çalışma masası daha mı iyi?',
    answer:
      'Ayakta çalışma masaları uzun süre oturmayı azaltır, bu da kalp-damar ve metabolik sorunlarla bağlantılıdır. Ancak bütün gün ayakta kalmak damar ve ayak sorunlarına yol açabilir. En iyi yaklaşım değiştirmektir: 30 dakika oturun, 15 ila 30 dakika ayakta durun ve düzenli hareket edin.',
  },
  {
    question: 'Ayaklarım yere değmeli mi?',
    answer:
      'Evet. Ayaklarınız yere düz bir şekilde basmalı ve dizleriniz 90 derece açıda olmalı. Sandalyeniz çok yüksekse bir ayak desteği kullanın. Ayaklarınız sallanırsa, uyluklarınızın arkasında basınç oluşur, bu kan akışını kısıtlar ve uyuşukluk yapar.',
  },
  {
    question: 'En iyi sandalye yüksekliği nedir?',
    answer:
      'Koltuk, ayaklarınız yere düz basarken dizlerinizin yaklaşık 90 derece bükülmesine izin vermelidir. Kalçalarınız dizlerinizle aynı hizada veya hafif üstünde olmalı. Bu ağırlığı oturma kemiklerinize eşit şekilde dağıtır ve bel bölgenizdeki basıncı azaltır.',
  },
];

const howToData = [
  {
    name: 'Boyunuzu ölçün',
    text: 'Çıplak ayakla bir duvara yaslanın ve başınızın tepesini işaretleyin. Yerden işarete kadar santimetre cinsinden ölçüm yapın.',
  },
  {
    name: 'Çalışma modunuzu seçin',
    text: 'Oturarak çalışma masası mı yoksa ayakta çalışma masası mı için öneriler istediğinizi seçin. Her mod farklı vücut oranlarını kullanır.',
  },
  {
    name: 'Önce sandalyenizi ayarlayın',
    text: 'Sandalyenizi ayaklarınız yere düz bassın ve dizleriniz 90 derece açıda olsun diye ayarlayın. Kalçalarınız dizlerinizle aynı hizada veya hafif üstünde olmalı.',
  },
  {
    name: 'Masa yüksekliğini ayarlayın',
    text: 'Yazarken ön kollarınız yere paralel olacak şekilde masanızı yükseltin veya alçaltın. Dirsekleriniz 90 derece açıda olmalı.',
  },
  {
    name: 'Monitörünüzü konumlandırın',
    text: 'Monitörü bir kol uzunluğu kadar uzağa yerleştirin. Ekranın üst kısmı göz hizanızda veya hafif altında olmalı, 10 ila 20 derece geriye eğilmiş.',
  },
  {
    name: 'Avatar ile doğrulayın',
    text: 'Ekrandaki avatarı kullanarak tüm açıların yeşil olduğunu kontrol edin. Herhangi bir eklem kırmızıya dönerse, ilgili mobilyayı ayarlayın.',
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
      text: 'Kötü Bir Masa Düzeninin Gizli Maliyeti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çoğu insan günlük sekiz saatten fazla bir masada geçiriyor, ancak çok az kişi sandalyesinin, masasının veya monitörünün vücuduna uyup uymadığını ölçüyor. Sadece birkaç santimetrelik bir uyumsuzluk, boyunda, omuzlarında ve belinde kronik gerilme yaratabilir. Aylar ve yıllar içinde bu gerilme ağrıya, ağrı da yaralanmaya dönüşür. İyi haber şu ki, optimum ergonomi tek bir ölçümden tam olarak hesaplanabilir: boyunuz.',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: 'Ortalama Masa Süresi', icon: 'mdi:desk' },
        { value: '90°', label: 'İdeal Dirsek Açısı', icon: 'mdi:angle-acute' },
        { value: '60cm', label: 'En İyi Ekran Mesafesi', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Neden Tek Bir Boyut Hiçbir Zaman Herkese Uymaz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Standart masalar 73 santimetre yüksekliğinde ve standart sandalyeler 45 santimetre. Bu ölçüler onlarca yıl önce ortalama boydaki erkek ofis çalışanları için tasarlandı. 175 santimetreden kısa veya 185 santimetreden uzunsanız, bu varsayılanlar duruşunuzu aktif olarak bozuyor. Kadınlar, gençler ve ortalamanın üstünde veya altında torsoya sahip kişiler, standart mobilyalardan özellikle kötü hizmet görüyor.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Kötü Düzen',
          description: 'Zamanla gerilme yaratan yaygın mobilya varsayılanları.',
          icon: 'mdi:alert',
          points: ['Monitör çok yüksek veya çok alçak', 'Masa omuzları kaldırmaya zorlar', 'Ayaklar yere değmiyor', 'Sandalye bel desteği sağlamıyor'],
        },
        {
          title: 'Optimal Düzen',
          description: 'Vücut oranlarınıza göre kişiselleştirilmiş ölçümler.',
          icon: 'mdi:check-circle',
          points: ['Monitör göz hizasında', 'Dirsekler 90 derece', 'Ayaklar yere düz basıyor', 'Alt sırt tamamen destekleniyor'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı Duruş Kontrol Listesi',
      icon: 'mdi:clipboard-check',
      badge: 'Eylem',
      html: '<p style="margin:0">Sırtınız sandalyeye yaslanarak oturun. Dizlerinizin arkasıyla koltuk kenarı arasında küçük bir boşluk olduğunu kontrol edin. Yazarken bileklerinizin düz olduğundan emin olun. Monitörünüzün üst kısmı gözlerinizden daha yüksek olmamalı. Her 30 dakikada 2 dakikalık bir yürüyüş molası verin.</p>',
    },
    {
      type: 'title',
      text: 'Oturma ve Ayakta Durma Bilimi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İnsan vücutları saatlerce tek bir pozisyonda kalmak için tasarlanmamıştır. Otururken, bel disklerine uygulanan basınç ayakta durmaya göre yüzde 40 artar. Hareketsiz ayakta dururken, kan bacaklarda birikir ve kalp tekrar yukarı pompalamak için daha çok çalışmak zorunda kalır. En sağlıklı çalışma ritmi, oturma ve ayakta durmayı her 30 ila 60 dakikada bir değiştirmek ve kısa yürüyüşler eklemektir. Bu araç her iki modu da hesaplayarak dönüştürülebilir bir masayı doğru şekilde ayarlamanızı sağlar.',
    },
    {
      type: 'summary',
      title: 'Ergonomik Bir Çalışma Alanı Nasıl Kurulur',
      items: [
        'Çıplak ayak boyunuzu santimetre cinsinden ölçün.',
        'Tam sandalye, masa ve monitör yüksekliklerini almak için bu simülatörü kullanın.',
        'Önce sandalyeyi, sonra masayı, sonra monitörü ayarlayın.',
        'Ayakta çalışma masası kullanıyorsanız, oturarak masa yüksekliğinin 30 santimetre üzerine ayarlayın.',
        'Monitörü bir kol uzunluğu kadar uzağa yerleştirin ve 10 ila 20 derece geriye eğin.',
        'Her 30 dakikada 2 dakikalık yürüyüş veya esneme molası verin.',
      ],
    },
  ],
  ui: {
    labelMode: 'Çalışma modu',
    modeSit: 'Oturarak',
    modeStand: 'Ayakta',
    labelHeight: 'Boyunuz',
    unitCm: 'cm',
    labelGender: 'Vücut yapısı',
    genderMale: 'Erkek',
    genderFemale: 'Kadın',
    labelChair: 'Sandalye',
    labelDesk: 'Masa',
    labelMonitor: 'Monitör',
    labelDistance: 'Mesafe',
    labelAngle: 'Açı',
    labelGood: 'İyi',
    labelAdjust: 'Ayarla',
    badgeChair: 'Oturma',
    badgeDesk: 'Yüzey',
    badgeMonitor: 'Ekran',
    tipScreenLow: 'Monitörünüzü yükseltin',
    tipScreenHigh: 'Monitörünüzü alçaltın',
    tipDeskLow: 'Masanızı yükseltin',
    tipDeskHigh: 'Masanızı alçaltın',
    tipChairLow: 'Sandalyenizi yükseltin',
    tipChairHigh: 'Sandalyenizi alçaltın',
    tipDistance: 'Ekranı bir kol uzunluğu kadar uzağa getirin',
  },
};
