import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'tr',
  slug: 'depo-boyutu-hesaplayici',
  title: 'Depo alanı boyutu hesaplayıcı',
  description: 'Kutu, mobilya ve eşyalara erişim için gereken koridor alanına göre uygun depo boyutunu tahmin edin.',
  labels: {
    inventory: 'Eşyalarınız', boxes: 'Kutular', furniture: 'Hacimli eşyalar', smallBoxes: 'Küçük kutular', mediumBoxes: 'Orta kutular', largeBoxes: 'Büyük kutular', sofa: 'Kanepe', bed: 'Yatak', wardrobe: 'Gardırop', desk: 'Çalışma masası', chair: 'Sandalyeler', accessLane: 'Erişim koridoru', accessHint: 'Daha geniş erişim alanı zeminde yer kaplar, ancak ihtiyacınız olan eşyalara ulaşmayı kolaylaştırır.', quickScenarios: 'Başlangıç envanteri yükle', reset: 'Sıfırla',
  },
  presetLabels: ['Stüdyo taşınması', 'Tek yatak odası', 'Küçük ofis'],
  accessLabels: ['Dar', 'Dengeli', 'Sık erişim'],
  result: {
    title: 'Yükleme planı', minimum: 'Minimum boyut', comfortable: 'Rahat boyut', emptyStatus: 'Eşya ekleyin', readyStatus: 'Dengeli plan', tightStatus: 'Minimum boyut dar', emptyMessage: 'Eşya ekledikçe plan depolama bölgelerini çizecek.', readyMessage: 'Minimum boyut seçtiğiniz erişim koridoruna yer bırakıyor.', tightMessage: 'Minimum boyut neredeyse dolu. Rahat boyut kullanımı kolaylaştırır.', unit: 'm²', access: 'erişim', boxesZone: 'Kutular', furnitureZone: 'Hacimli eşyalar', laneZone: 'Koridor', floorPlanLabel: 'Kutular, hacimli eşyalar ve erişim koridorunu orantılı gösteren depo planı', packedLabel: 'paketli', areaLabel: 'Planlama alanı', volumeLabel: 'hacim', emptyPlan: 'Planı çizmek için kutu veya mobilya ekleyin',
  },
  seo: [
    { type: 'title', level: 2, text: 'Sahip olduğunuz eşyalara göre depo seçin' },
    { type: 'paragraph', html: 'Depo boyutu hesaplayıcı, gerçek envanterinizle başladığında daha kullanışlıdır. Kutu ve hacimli mobilyaları girin; eşyaları sıkı yerleştirmek mi yoksa arka tarafa ulaşmak için alan bırakmak mı istediğinizi seçin.' },
    { type: 'title', level: 2, text: 'Bu tahmin neleri ölçer' },
    { type: 'list', items: ['Kutu ve mobilyaların paketlenmiş hacmi', 'Kutular üst üste yerleştirildikten sonra kaplanan zemin alanı', 'Eşyaları alma sıklığına göre erişim koridoru', 'Yaygın metrekare ölçülerine yuvarlanmış minimum ve rahat boyutlar'] },
    { type: 'title', level: 2, text: 'Minimum ve rahat boyutu nasıl okuyabilirsiniz' },
    { type: 'paragraph', html: 'Minimum boyut, hesaplanan planlama alanını alan ilk standart ölçüdür. Bu bir kapasite kontrolüdür; her mobilyanın her alana sığacağını garanti etmez. Rahat boyut, sık açılan deponun kutu duvarına dönüşmemesi için pay ekler.' },
    { type: 'title', level: 2, text: 'Rezervasyondan önce kontrol edin' },
    { type: 'paragraph', html: 'Sonucu seçenekleri daraltmak için kullanın ve ardından iç ölçüleri, kapı genişliğini, tavan yüksekliğini, kolonları, merdivenleri ve yükleme erişimini karşılaştırın. Kullanılamayan yükseklik, metreküp değerini yanıltıcı hâle getirebilir.' },
    { type: 'list', items: ['Kutuları yaklaşık dış ölçülerine göre sayın.', 'Sökülecek olsa bile kanepe ve gardıropları ekleyin.', 'Mevsimlik eşya, stok veya iş ekipmanı alacaksanız Sık erişimi seçin.', 'Kullanılabilir zemin alanını sorun ve büyük mobilyalardan önce kapıyı ölçün.'] },
    { type: 'tip', title: 'Planlama sınırı', html: 'Bu, temsili ölçülere ve istifleme varsayımlarına dayanan şeffaf bir tahmindir. Gerçek depoyu, taşıma sınırını, fiyatı veya düzensiz bir mobilyanın kapıdan geçip geçmeyeceğini incelemez.' },
  ],
  faq: [
    { question: 'Minimum boyutu mu, rahat boyutu mu seçmeliyim?', answer: 'Sıkı paketleme yapacak ve nadiren erişecekseniz minimumu seçin. Eşya alacak, envanterinizi büyütecek veya büyük mobilyaları istiflemekte zorlanacaksanız rahat boyut daha uygundur.' },
    { question: 'Hesaplayıcı neden metrekare kullanıyor?', answer: 'Depo sağlayıcıları genellikle zemin alanını belirtir; bu değer eşyaları yerleştirip ulaşmayı anlamayı kolaylaştırır. Metreküp hacmi de hacim üzerinden sunulan seçenekleri karşılaştırmanızı sağlar.' },
    { question: 'Garaj veya konteyner için kullanabilir miyim?', answer: 'Evet, başlangıç noktası olarak kullanabilirsiniz. Gerçek iç ölçüleri, kapı açıklığını, tavanı, havalandırmayı ve ağırlık veya istifleme kısıtlarını kontrol edin.' },
    { question: 'Hesaplayıcı mobilyalarımın gerçek ölçülerini biliyor mu?', answer: 'Hayır. Temsili taban alanı ve hacim kullanır. Olağan dışı, kırılabilir veya çok derin eşyaları ölçün ve belirsiz erişim durumunda pay bırakın.' },
  ],
  howTo: [
    { name: 'Başlangıç envanteri yükleyin', text: 'Taşınmanıza veya boşaltmanıza yakın bir senaryo seçin ve adetleri düzenleyin.' },
    { name: 'Kutuları ve hacimli eşyaları sayın', text: 'Küçük, orta ve büyük kutuları girin; kanepe, yatak, gardırop, masa ve sandalye ekleyin.' },
    { name: 'Erişim koridorunu ayarlayın', text: 'Eşyaları ne sıklıkla alacağınıza göre Dar, Dengeli veya Sık erişim seçin.' },
    { name: 'İki öneriyi karşılaştırın', text: 'Minimumu kapasite sınırı, rahat boyutu ise düzenli erişim için daha kullanışlı seçenek olarak değerlendirin.' },
  ],
};

export const content = buildLocalizedContent(copy);
