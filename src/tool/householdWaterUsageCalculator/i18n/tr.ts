import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "evsel-su-tuketimi-hesaplayici",
  title: "Evsel Su Tüketimi Hesaplayıcı",
  description:
    "Günlük alışkanlıklarınıza göre evinizin su tüketimini tahmin edin, en çok su kullanan faaliyetleri görün ve mevcut düzeninizi gerçekçi bir düşük tüketim senaryosuyla karşılaştırın.",
  language: "tr",
  ui: {
    presetLabel: "Bir örnekle başlayın",
    presetEveryday: "Günlük",
    presetWaterAware: "Su bilinçli",
    presetLowFlow: "Düşük debi",
    controlsLabel: "Ev suyu bilgileri",
    optionalInputsTitle: "Cihazlar ve kaçaklar",
    peopleLabel: "Evi kullanan kişiler",
    peopleUnit: "kişi",
    showerTitle: "Duş",
    showersPerWeekLabel: "Kişi başına duş",
    showerMinutesLabel: "Her duşun dakikası",
    showerFlowLabel: "Debi",
    toiletTitle: "Tuvalet",
    flushesPerDayLabel: "Kişi başına sifon",
    flushVolumeLabel: "Sifon başına hacim",
    tapTitle: "Musluklar",
    tapMinutesLabel: "Kişi başına açık kalma süresi",
    tapFlowLabel: "Debi",
    washingLoadsLabel: "Çamaşır makinesi yükleri",
    washingVolumeLabel: "Yıkama başına litre",
    dishwasherLoadsLabel: "Bulaşık makinesi yükleri",
    dishwasherVolumeLabel: "Program başına litre",
    leakLabel: "Önlenebilir kaçak tahmini",
    litresPerDay: "günlük tahmini litre",
    litresPerMonth: "aylık litre",
    litresPerYear: "yıllık litre",
    perPerson: "kişi başına günlük litre",
    reference: "Referans",
    aboveReference: "Referansın üstünde",
    belowReference: "Referansın altında",
    nearReference: "Referansa yakın",
    referenceDescription:
      "INE'nin İspanyol hane halkları için yayımladığı en güncel seride ortalama 128 litre/kişi/gün değerindedir. Bunu geçme kalma ölçütü değil, bağlam olarak kullanın.",
    savingTitle: "Azaltma payı",
    savingDescription:
      "Bu değer mevcut alışkanlıklarınız ile düşük tüketim varsayımları arasındaki toplam farktır. Kalıcı karar vermeden önce tek tek değişiklikleri deneyin.",
    currentScenario: "Mevcut düzeniniz",
    efficientScenario: "Düşük tüketim senaryosu",
    monthlySaving: "aylık potansiyel litre tasarrufu",
    categoryShowers: "Duş",
    categoryToilets: "Tuvalet",
    categoryTaps: "Musluklar",
    categoryWashing: "Çamaşır",
    categoryDishwasher: "Bulaşık makinesi",
    categoryLeaks: "Kaçaklar",
    breakdownTitle: "Aylık tüketimin dağılımı",
    usageShare: "toplamın",
  },
  faq: [
    {
      question: "Bu evsel su hesaplayıcı neyi tahmin eder?",
      answer:
        "Duş, sifon, musluk, çamaşır, bulaşık makinesi ve kaçak bilgilerinize göre günlük, aylık ve yıllık litreyi tahmin eder. Ayrıca makul alışkanlık ve cihaz değişikliklerine dayalı düşük tüketim senaryosu gösterir.",
    },
    {
      question: "Sonuç su faturamla aynı mıdır?",
      answer:
        "Hayır. Sonuç alışkanlıklarınıza dayalı bir planlama tahminidir. Faturada dış kullanım, ortak hizmetler, sayaç okuma zamanı, ev dışı kaçaklar ve armatürlerin gerçek debisi de bulunabilir.",
    },
    {
      question: "Hangi giriş sonucu genellikle en çok değiştirir?",
      answer:
        "Uzun ve yüksek debili duşlar çoğu zaman öne çıkar; ancak kişi sayısı, sifon hacmi, musluk süresi ve çamaşır-bulaşık sıklığı da önemlidir. Dağılım, sizin verilerinizi sıralar.",
    },
    {
      question: "Düşük tüketim senaryosu nedir?",
      answer:
        "Beş dakikalık duş, daha düşük debi, verimli sifon, daha kısa musluk kullanımı, tam yük ve önlenebilir kaçak olmaması gibi şeffaf hedefler uygular. Belirli bir cihaz için garanti değildir.",
    },
    {
      question: "Hesaplayıcı neden referans gösterir?",
      answer:
        "Bu, INE'nin su temini ve sanitasyon serisindeki İspanyol hane ortalamasıdır ve kişi başına günlük verilir. Hedef ya da teşhis değildir; iklim ve ölçülmeyen kullanımlar sonucu değiştirir.",
    },
  ],
  howTo: [
    {
      name: "Kişi sayısını girin",
      text: "Evi düzenli kullanan kişilerle başlayın. Hesaplayıcı farklı büyüklükteki haneleri karşılaştırmak için kişi başına değeri de gösterir.",
    },
    {
      name: "Temel alışkanlıkları tanımlayın",
      text: "Duş sıklığı, süresi ve debisini girin; ardından sifonları, musluk süresini, çamaşır ve bulaşık yüklerini ekleyin. Ölçümünüz veya cihaz etiketi varsa onu kullanın.",
    },
    {
      name: "Günlük tahmini okuyun",
      text: "Büyük sayı evin günlük tahmini litresidir. Aylık ve yıllık değerler aynı alışkanlıkları kullanır ve bir alan değişince hemen güncellenir.",
    },
    {
      name: "En büyük etkiyi bulun",
      text: "Aylık litre ve yüzdelerdeki dağılıma bakın. Her faaliyetin yanındaki tasarruf, düşük senaryoya yaklaşıldığında neyin değişebileceğini gösterir.",
    },
    {
      name: "Gerçekçi bir örnek deneyin",
      text: "Su bilinçli veya Düşük debi seçeneğini deneyin, sonra kendi değerlerinize dönüp tek bir alışkanlığı değiştirin. Böylece ilk neyi inceleyeceğinizi görürsünüz.",
    },
  ],
  seo: {
    introTitle: "Su faturasından arkasındaki alışkanlıklara",
    introOne:
      "Su faturası sayaçtan geçen miktarı gösterir, ancak değişikliğe hangi alışkanlığın neden olduğunu nadiren açıklar. Bu hesaplayıcı ev rutinindeki tekrar eden bölümleri şeffaf bir tahmine dönüştürür: kişiler, duş, sifon, musluk, çamaşır, bulaşık ve önlenebilir kaçaklar. Varsayımları sorgulayabilmeniz için her giriş görünür kalır.",
    introTwo:
      "En güncel INE serisi, 2024 yılında İspanyol haneleri için kişi başına günlük ortalama 128 litre bildirir. Bu yararlı bir bağlamdır, evrensel hedef değildir: dış kullanım, iklim, ortak sayaç veya gizli kaçak farkı açıklayabilir.",
    averageLabel: "Kişi başına günlük İspanyol hane ortalaması",
    groupsLabel: "Dağılımda gösterilen alışkanlık grupları",
    daysLabel: "Aylık tahminde kullanılan gün sayısı",
    readTitle: "Tahmin nasıl okunur?",
    readText:
      "En görünür sayıyla değil, en uzun aylık çubukla başlayın. Uzun bir duş, seyrek yapılan küçük bir faaliyetten daha büyük etki yaratabilir; küçük bir kaçak ise her gün akabilir. Hesaplayıcı kategorileri kendi girişlerinize göre sıralar.",
    currentTitle: "Mevcut düzen",
    currentText:
      "Girdiğiniz sıklık, süre, debi ve yük başına litre değerleri günlük ve aylık litreye çevrilir.",
    currentPoints: [
      "Hane büyüklüğünü görünür tutar",
      "Her faaliyetin katkısını gösterir",
      "Alanı değiştirirken güncellenir",
    ],
    lowerTitle: "Düşük tüketim senaryosu",
    lowerText:
      "Karşılaştırma daha kısa duş, düşük debi ve tam yük gibi ölçülü ve şeffaf hedefler uygular.",
    lowerPoints: [
      "Kesin tasarruf sözü vermez",
      "Fatura tutarı hesaplamaz",
      "Değişikliği önceden denemenizi sağlar",
    ],
    chooseTitle: "Tek bir değişiklik seçin",
    chooseText:
      "İşe yarayan bir senaryo denenebilecek kadar somut olmalıdır. Duşu bir dakika kısaltın, tahmini debiyi ölçün veya onarıp kontrol ettikten sonra kaçak değerini kaldırın. Sonuç az değişirse sonraki kategoriye geçin.",
    actions: [
      "Bir kap ve zamanlayıcıyla musluk veya duş debisini ölçün.",
      "Cihaz etiketini girdiğiniz yük başına litreyle karşılaştırın.",
      "Değişimin yönünü anlamak için bir preset çalıştırın.",
      "Bir alışkanlığı değiştirip gerçekçi bir ev hedefi belirleyin.",
    ],
    limitsTitle: "Bu tahmin size neyi söyleyemez?",
    limitsText:
      "Sayaç ölçümünü yeniden oluşturamaz, tesisat arızası bulamaz, tüm dış kullanımları kapsayamaz ve bir armatürün etiket değerini garanti edemez. Sonucu karar desteği olarak kullanın. Sayaçla uyuşmuyorsa alışkanlık sayılarını körü körüne artırmak yerine eksik kullanım veya kaçak arayın.",
    flowTitle: "Debi ve sıklık neden birlikte önemlidir?",
    flowText:
      "Aynı armatür çalışma süresi ve kullanım sıklığına göre çok farklı toplamlar üretebilir. Duş tahmini kişi, haftalık duş, dakika ve dakika başına litreyi çarpar. Çamaşır ve bulaşık ise haftalık yük ve yük başına litreyi kullanır. Bu ilişki, alışkanlık değiştirme, bakım yapma veya daha iyi ölçme arasında seçim yapmanıza yardım eder.",
  },
});

export { content };
