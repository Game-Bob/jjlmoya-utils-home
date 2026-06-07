import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'klima-tonaj-hesaplama';
const title = 'Klima Tonaj ve Soğutma Kapasitesi Hesaplayıcı';
const description =
  'Odanız için gereken tam klima boyutunu BTU, frigori ve ton cinsinden hesaplayın. Oda büyüklüğü, tavan yüksekliği, kişi sayısı ve ısı kaynaklarını girin.';

const faqData = [
  { question: 'Metrekare başına kaç BTU gerekir?', answer: 'Ilıman iklimde 2,5 m tavan için standart baz 600 BTU/m²\'dir. Yükseklik, güneş ve kişi sayısıyla artar.' },
  { question: 'Frigori nedir?', answer: 'Frigori, İspanya ve Latin Amerika\'da kullanılan eski bir soğutma birimidir. Bir frigori yaklaşık 3,968 BTU/saat\'tir.' },
  { question: 'BTU\'yu ton\'a nasıl çeviririm?', answer: 'Bir soğutma tonu 12.000 BTU/saat\'tir. Toplam BTU\'yu 12.000\'e bölün.' },
  { question: 'Tavan yüksekliği önemli mi?', answer: 'Evet. 2,7 m\'nin üzerindeki her metre, soğutma ihtiyacını yaklaşık %8 artırır.' },
];

const howToData = [
  { name: 'Odanızı ölçün', text: 'Uzunluk ve genişliği metre cinsinden ölçün ve alanı bulmak için çarpın.' },
  { name: 'Kişileri ve cihazları sayın', text: 'Kişi sayısını ve bilgisayar, TV gibi ısı kaynaklarını ekleyin.' },
  { name: 'Güneş maruziyetini seçin', text: 'Doğrudan güneş ışığına göre hafif, orta veya yoğun seçin.' },
  { name: 'Öneriyi okuyun', text: 'Hesaplayıcı, her pazar için BTU, frigori ve ton cinsinden sonuç gösterir.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Ne boyutta klima ihtiyacım var?', level: 2 },
    { type: 'paragraph', html: 'Doğru boyut, alan, tavan yüksekliği, kişi sayısı ve güneşe bağlıdır. Kesin BTU, frigori ve ton için bu hesaplayıcıyı kullanın.' },
    { type: 'table', headers: ['Alan', 'Önerilen BTU', 'Tonaj', 'Tipik kullanım'], rows: [['10 m² (küçük yatak odası)', '6.000 – 7.000 BTU', '0,5 – 0,75 t', 'Misafir odası'], ['15 m² (yatak odası)', '9.000 – 10.000 BTU', '0,75 – 1 t', 'Ana yatak odası'], ['20 m² (oturma odası)', '12.000 – 14.000 BTU', '1 – 1,25 t', 'Küçük oturma odası'], ['30 m² (açık plan)', '18.000 – 21.000 BTU', '1,5 – 1,75 t', 'Stüdyo'], ['40 m² (büyük salon)', '24.000 – 28.000 BTU', '2 – 2,5 t', 'Büyük salon + yemek odası']] },
    { type: 'title', text: 'Yanlış boyut neden para kaybettirir?', level: 2 },
    { type: 'paragraph', html: 'Çok küçük bir klima sürekli çalışır, sıcaklığa asla ulaşamaz ve kompresörü erken yıpratır. Çok büyük bir klima kısa soğuk hava patlamaları yapar ve odayı nemli bırakır.' },
    { type: 'stats', items: [{ value: '600', label: 'm² başına BTU baz', icon: 'mdi:thermometer' }, { value: '12000', label: 'Ton başına BTU', icon: 'mdi:snowflake' }, { value: '3.968', label: 'Frigori başına BTU', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Oda alanı', labelRoomSizeFt: 'Alan', labelCeilingHeight: 'Tavan yüksekliği', labelCeilingHeightFt: 'Yükseklik',
    labelPeople: 'Kişi sayısı', labelHeatSources: 'Isı kaynakları', labelSunExposure: 'Güneş maruziyeti', labelRoomType: 'Oda tipi',
    labelCalculate: 'Hesapla', labelResult: 'Sonuç', labelBtus: 'BTU/saat', labelFrigorias: 'Frigori', labelTons: 'Ton',
    labelRequired: 'Gerekli', labelRecommended: 'Önerilen', labelUnitBtu: 'BTU/saat', labelUnitFrigorias: 'Frigori', labelUnitTons: 'Ton',
    labelMetric: 'Metrik', labelImperial: 'Imperial', labelRoomCozy: 'Rahat', labelRoomWarm: 'Sıcak', labelRoomHot: 'Çok sıcak',
    bdBaseCooling: 'Temel soğutma', bdCeilingHeight: 'Tavan yüksekliği', bdPeople: 'Kişi', bdHeatSources: 'Isı kaynakları', bdSunRoom: 'Güneş & oda tipi',
    sunLight: 'Hafif', sunMedium: 'Orta', sunHeavy: 'Yoğun',
    roomBedroom: 'Yatak odası', roomLiving: 'Oturma odası', roomKitchen: 'Mutfak', roomOffice: 'Ofis', roomServer: 'Sunucu odası',
    errorRequired: 'Lütfen tüm alanları doldurun',
  },
};
