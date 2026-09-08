import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'su-isitici-toparlanma-suresi-hesaplayici';
const title = 'Su Isıtıcısı Toparlanma Süresi Hesaplayıcı';
const description = 'Su hacmi, kullanılabilir güç ve verimlilik bilgilerine göre su ısıtıcısının mevcut sıcaklıktan hedef sıcaklığa dönme süresini tahmin edin.';
const faq = [
  { question: 'Buradaki toparlanma süresi ne anlama geliyor?', answer: 'Girilen su hacminin mevcut sıcaklıktan hedef sıcaklığa çıkması için gereken tahmini süredir. Hesaplama suyun ısı kapasitesini, kullanılabilir ısıtıcı gücünü ve tahmini verimliliği kullanır.' },
  { question: 'Hesaplayıcı hangi formülü kullanıyor?', answer: 'Gerekli ısı, litre miktarı ile sıcaklık artışının ve litre-derece başına 1,16 watt-saatin çarpımı olarak tahmin edilir. Enerji daha sonra ısıtıcı gücü ile verimliliğin çarpımına bölünür.' },
  { question: 'Bu sonuç cihazımın kesin süresini tahmin eder mi?', answer: 'Hayır. Bu, planlama için şeffaf bir tahmindir. Bekleme kayıpları, termostat döngüleri, tabakalaşma, karışma, boru kayıpları ve güç sınırları gerçek süreyi uzatabilir.' },
  { question: 'Hangi verimliliği girmeliyim?', answer: 'Varsa belgelenmiş kullanılabilir veya toparlanma verimliliğini kullanın. Yoksa temkinli bir tahmin girin ve sonucu kullanım kılavuzu ya da ölçülmüş bir döngüyle karşılaştırın.' },
];
const howTo = [
  { name: 'Depolanan su hacmini girin', text: 'Isıtılacak su miktarını tahmin etmek için tank hacmini litre olarak girin.' },
  { name: 'Mevcut ve hedef sıcaklıkları ayarlayın', text: 'Başlangıç sıcaklığını ve tankın ulaşmasını istediğiniz sıcaklığı girin.' },
  { name: 'Kullanılabilir güç ve verimliliği girin', text: 'Gücü kilovat olarak, suya gerçekten ulaşan enerji oranını ise yüzde olarak kullanın.' },
  { name: 'Toparlanma penceresini okuyun', text: 'Süreyi ve tahmini bitiş zamanını planlama için kullanın, ardından cihaz belgeleriyle karşılaştırın.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Depolanan su hacmi', volumeHint: 'Tank kapasitesi', temperatureUnitLabel: 'Sıcaklık birimleri', celsiusOption: 'Santigrat (°C)', fahrenheitOption: 'Fahrenhayt (°F)', currentTempLabel: 'Mevcut su sıcaklığı', targetTempLabel: 'Hedef sıcaklık', powerLabel: 'Isıtıcının kullanılabilir gücü', efficiencyLabel: 'Tahmini verimlilik', startTimeLabel: 'Toparlanma başlangıcı', compareTitle: 'Başka bir kurulumu karşılaştır', comparePowerLabel: 'Diğer kullanılabilir güç', compareEfficiencyLabel: 'Diğer verimlilik', compareOptional: 'İsteğe bağlı: karşılaştırmak için iki alanı da doldurun', calculateNote: 'Bunu planlama tahmini olarak kullanın ve süreye güvenmeden önce ısıtıcı belgelerini kontrol edin.', tankCurrent: 'Mevcut', tankTarget: 'Hedef', resultTitle: 'Toparlanma penceresi', recoveryTimeLabel: 'Tahmini toparlanma', energyLabel: 'Gerekli ısı', effectivePowerLabel: 'etkin güç', readyAtLabel: 'Tahmini hazır olma zamanı', temperatureRiseLabel: 'Sıcaklık artışı', comparisonTitle: 'Alternatif kurulum', comparisonFaster: 'daha hızlı', comparisonSlower: 'daha yavaş', noHeatingNeeded: 'Hedef sıcaklığa zaten ulaşıldı', invalidInputs: 'Tahmini görmek için hacim, güç ve verimlilik için pozitif değerler girin.', insufficientPower: 'Pozitif bir kullanılabilir güç gereklidir.', limitsTitle: 'Bu tahminin kapsamadığı noktalar', limitsText: 'Model tank yalıtımını, bekleme kayıplarını, termostat döngülerini, tabakalaşmayı, karışmayı, boru kayıplarını veya cihazınızın gerçek güç eğrisini bilmez.', hoursUnit: 'sa', minutesUnit: 'dk', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Sıcak suyun ne zaman yeniden hazır olacağını tahmin edin', level: 2 },
    { type: 'paragraph', html: 'Duş, banyo veya yüksek miktarda kullanım sonrasında yalnızca tankın büyüklüğünü bilmek yeterli değildir. Suyun kazanması gereken enerjiyi ve ısıtıcının bunu ne kadar hızlı sağlayabileceğini bilmeniz gerekir. Bu hesaplayıcı verileri bir sonraki kullanımı planlayabileceğiniz toparlanma penceresine dönüştürür.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Wh cinsinden gerekli ısı', icon: 'mdi:water-boiler' }, { value: 'kW × verimlilik', label: 'Kullanılabilir ısıtma gücü', icon: 'mdi:flash-outline' }, { value: 'Isı ÷ güç', label: 'Toparlanma süresi', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Toparlanma tahmini nasıl oluşturulur?', level: 2 },
    { type: 'paragraph', html: 'Tahmin suyun ısı kapasitesini kullanır. Bir litre suyu bir derece yükseltmek yaklaşık 1,16 watt-saat gerektirir. Hesaplayıcı bu katsayıyı hacim ve sıcaklık artışıyla çarpar, ardından verimlilik uygulandıktan sonraki kullanılabilir güce böler.' },
    { type: 'comparative', items: [{ title: 'Planlama için yararlı', description: 'Başlangıç zamanı seçin, tankın durumunu girin ve tahmini bitiş zamanını görün. Farklı bir güç ve verimlilik çifti ekleyerek ayarları karşılaştırın.', icon: 'mdi:calendar-clock', points: ['Sonraki toparlanma döngüsünü test edin', 'Yalnızca etiket gücünü değil kullanılabilir gücü karşılaştırın', 'Sıcaklık artışını görünür tutun'] }, { title: 'Servis garantisi değildir', description: 'Gerçek bir cihaz ısı kaybı, termostat döngüleri, karışma veya sürdürülemeyen güç nedeniyle daha yavaş toparlanabilir. Sonucu kılavuz veya ölçümle karşılaştırın.', icon: 'mdi:thermometer-alert', points: ['Bekleme kayıpları modellenmez', 'Üretici verisi alınmaz', 'Güvenlik veya kurulum tavsiyesi değildir'] }], columns: 2 },
    { type: 'title', text: 'Toparlanma süresini en çok değiştiren girdiler', level: 2 },
    { type: 'paragraph', html: 'Daha büyük bir sıcaklık artışı gereken enerjiyi doğrudan artırır. Aynı artışta daha büyük bir tank da orantılı olarak daha fazla enerji ister. Kullanılabilir güç ve verimlilik ters yönde çalışır: çarpımları iki katına çıkarsa ideal toparlanma süresi yaklaşık yarıya iner.' },
    { type: 'title', text: 'Sonucu sahte kesinlik yaratmadan kullanın', level: 2 },
    { type: 'paragraph', html: 'Bu araç varsayımları planlamak ve karşılaştırmak içindir; ısıtıcı sertifikası veya kurulum boyutlandırması için değildir. Teknik kılavuzlar ve gerçek testler ek kayıpları ve ölçüm koşullarını dikkate alır, bu nedenle gözlenen döngü ideal tahminden farklı olabilir.' },
  ],
};
