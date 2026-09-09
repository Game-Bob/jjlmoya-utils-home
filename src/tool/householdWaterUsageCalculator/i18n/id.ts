import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "kalkulator-penggunaan-air-rumah",
  title: "Kalkulator Penggunaan Air Rumah Tangga",
  description:
    "Perkirakan jejak air rumah dari kebiasaan harian, lihat aktivitas yang paling banyak memakai air, lalu bandingkan rutinitas saat ini dengan skenario penggunaan yang lebih hemat.",
  language: "id",
  ui: {
    presetLabel: "Mulai dengan pola",
    presetEveryday: "Sehari-hari",
    presetWaterAware: "Hemat air",
    presetLowFlow: "Aliran rendah",
    controlsLabel: "Masukan air rumah tangga",
    optionalInputsTitle: "Peralatan dan kebocoran",
    peopleLabel: "Orang yang memakai rumah",
    peopleUnit: "orang",
    showerTitle: "Mandi",
    showersPerWeekLabel: "Mandi per orang",
    showerMinutesLabel: "Menit setiap kali",
    showerFlowLabel: "Laju aliran",
    toiletTitle: "Toilet",
    flushesPerDayLabel: "Siram per orang",
    flushVolumeLabel: "Volume setiap siraman",
    tapTitle: "Keran",
    tapMinutesLabel: "Waktu terbuka per orang",
    tapFlowLabel: "Laju aliran",
    washingLoadsLabel: "Muatan mesin cuci",
    washingVolumeLabel: "Liter per cucian",
    dishwasherLoadsLabel: "Muatan mesin pencuci piring",
    dishwasherVolumeLabel: "Liter per siklus",
    leakLabel: "Perkiraan kebocoran yang dapat dihindari",
    litresPerDay: "perkiraan liter setiap hari",
    litresPerMonth: "liter per bulan",
    litresPerYear: "liter per tahun",
    perPerson: "liter per orang per hari",
    reference: "Referensi",
    aboveReference: "Di atas referensi",
    belowReference: "Di bawah referensi",
    nearReference: "Dekat referensi",
    referenceDescription:
      "Rata-rata rumah tangga Spanyol dari INE adalah 128 liter per orang per hari dalam seri terbaru. Gunakan sebagai konteks, bukan sebagai batas lulus atau gagal.",
    savingTitle: "Ruang untuk mengurangi",
    savingDescription:
      "Ini adalah selisih gabungan antara kebiasaan saat ini dan asumsi penggunaan lebih rendah. Uji satu perubahan pada satu waktu sebelum menjadikannya komitmen.",
    currentScenario: "Pola saat ini",
    efficientScenario: "Skenario penggunaan lebih rendah",
    monthlySaving: "liter yang berpotensi dihemat per bulan",
    categoryShowers: "Mandi",
    categoryToilets: "Toilet",
    categoryTaps: "Keran",
    categoryWashing: "Mencuci",
    categoryDishwasher: "Pencuci piring",
    categoryLeaks: "Kebocoran",
    breakdownTitle: "Ke mana air bulanan pergi",
    usageShare: "dari total",
  },
  faq: [
    {
      question: "Apa yang diperkirakan kalkulator air rumah ini?",
      answer:
        "Kalkulator memperkirakan liter per hari, bulan, dan tahun dari data mandi, siraman toilet, keran, cucian, pencuci piring, dan kebocoran. Kalkulator juga menampilkan skenario lebih hemat berdasarkan perubahan kebiasaan dan peralatan yang wajar.",
    },
    {
      question: "Apakah hasilnya sama dengan tagihan air saya?",
      answer:
        "Tidak. Hasilnya adalah perkiraan untuk perencanaan berdasarkan kebiasaan. Tagihan juga mencakup penggunaan luar rumah, layanan bersama, waktu pembacaan meter, kebocoran di luar rumah, dan aliran nyata dari perlengkapan Anda.",
    },
    {
      question: "Masukan apa yang biasanya paling mengubah hasil?",
      answer:
        "Mandi lama dengan aliran tinggi sering menjadi bagian terbesar, tetapi hasil bergantung pada jumlah orang, volume siraman toilet, waktu memakai keran, serta frekuensi mencuci dan mencuci piring. Rincian memakai data rumah Anda sendiri.",
    },
    {
      question: "Apa itu skenario penggunaan lebih rendah?",
      answer:
        "Skenario ini memakai target transparan seperti mandi lima menit, aliran lebih kecil, siraman efisien, waktu keran lebih singkat, muatan penuh, dan tanpa kebocoran yang dapat dihindari. Ini alat perbandingan, bukan janji dari alat tertentu.",
    },
    {
      question: "Mengapa kalkulator menampilkan angka referensi?",
      answer:
        "Angka itu adalah rata-rata rumah tangga Spanyol terbaru dari seri pasokan dan sanitasi air INE, dinyatakan per orang per hari. Ini bukan target atau diagnosis karena kondisi setempat dan penggunaan yang tidak diukur berbeda-beda.",
    },
  ],
  howTo: [
    {
      name: "Masukkan jumlah orang",
      text: "Mulai dari orang yang rutin memakai rumah. Kalkulator membagi hasil per orang agar rumah dengan ukuran berbeda dapat dibandingkan.",
    },
    {
      name: "Jelaskan kebiasaan utama",
      text: "Masukkan frekuensi, durasi, dan aliran mandi, lalu tambahkan siraman, waktu keran, cucian, dan pencuci piring. Gunakan hasil pengukuran atau label alat jika tersedia.",
    },
    {
      name: "Baca perkiraan harian",
      text: "Angka besar adalah perkiraan liter rumah per hari. Angka bulanan dan tahunan memakai kebiasaan yang sama dan langsung berubah saat kolom diedit.",
    },
    {
      name: "Cari perubahan terbesar",
      text: "Baca rincian liter dan persentase bulanan. Angka penghematan di samping aktivitas menunjukkan kemungkinan perubahan menuju asumsi yang lebih hemat.",
    },
    {
      name: "Uji pola yang realistis",
      text: "Coba Hemat air atau Aliran rendah, lalu kembali ke angka Anda dan ubah satu kebiasaan saja. Ini membantu memilih hal yang perlu diperiksa lebih dulu.",
    },
  ],
  seo: {
    introTitle: "Dari tagihan air ke kebiasaan yang membentuknya",
    introOne:
      "Tagihan air menunjukkan jumlah yang melewati meter, tetapi jarang menjelaskan kebiasaan yang menyebabkan perubahan. Kalkulator ini mengubah bagian rutin dari kegiatan rumah menjadi perkiraan transparan: orang, mandi, siraman, keran, cucian, pencuci piring, dan kebocoran yang bisa dihindari. Setiap masukan tetap terlihat agar Anda dapat menantang asumsi yang digunakan.",
    introTwo:
      "Seri INE terbaru melaporkan rata-rata 128 liter per orang per hari untuk rumah tangga Spanyol pada 2024. Angka ini berguna sebagai konteks, bukan target universal: penggunaan luar rumah, iklim, meter bersama, atau kebocoran tersembunyi dapat menjelaskan perbedaan yang besar.",
    averageLabel: "Rata-rata rumah tangga Spanyol per orang per hari",
    groupsLabel: "Kelompok kebiasaan dalam rincian",
    daysLabel: "Hari yang dipakai untuk perkiraan bulanan",
    readTitle: "Cara membaca perkiraan",
    readText:
      "Mulai dari batang bulanan terpanjang, bukan angka yang paling besar di layar. Mandi lama dapat menjadi pengungkit yang lebih besar daripada aktivitas kecil yang jarang dilakukan, sementara kebocoran kecil dapat berjalan setiap hari. Kalkulator mengurutkan kategori berdasarkan masukan Anda.",
    currentTitle: "Pola saat ini",
    currentText:
      "Frekuensi, durasi, aliran, dan volume per muatan Anda diubah menjadi liter harian dan bulanan.",
    currentPoints: [
      "Menjaga ukuran rumah tetap terlihat",
      "Menunjukkan kontribusi tiap aktivitas",
      "Memperbarui hasil saat Anda mengedit",
    ],
    lowerTitle: "Skenario penggunaan lebih rendah",
    lowerText:
      "Perbandingan transparan menerapkan sasaran sedang seperti mandi lebih singkat, aliran lebih kecil, dan muatan penuh.",
    lowerPoints: [
      "Tidak menjanjikan penghematan pasti",
      "Tidak menghitung jumlah tagihan",
      "Memungkinkan uji coba sebelum bertindak",
    ],
    chooseTitle: "Pilih satu perubahan",
    chooseText:
      "Skenario yang berguna cukup spesifik untuk dicoba. Kurangi waktu mandi satu menit, ukur aliran yang hanya diperkirakan, atau hapus perkiraan kebocoran setelah diperbaiki dan diperiksa. Jika perubahan kecil, lanjutkan ke kategori berikutnya.",
    actions: [
      "Ukur aliran keran atau pancuran dengan wadah dan pengatur waktu.",
      "Bandingkan label alat dengan liter per muatan yang Anda masukkan.",
      "Jalankan preset untuk memahami arah perubahan.",
      "Ubah satu kebiasaan dan tetapkan sasaran rumah yang realistis.",
    ],
    limitsTitle: "Hal yang tidak dapat diberitahukan oleh perkiraan ini",
    limitsText:
      "Perkiraan ini tidak menggantikan meter, tidak menemukan kerusakan pipa, tidak mencakup semua penggunaan luar rumah, dan tidak menjamin nilai label perlengkapan. Gunakan sebagai alat mengambil keputusan. Jika berbeda dari meter, cari penggunaan yang hilang atau kebocoran alih-alih menaikkan angka kebiasaan tanpa dasar.",
    flowTitle: "Mengapa aliran dan frekuensi harus dilihat bersama",
    flowText:
      "Perlengkapan yang sama dapat menghasilkan total berbeda bergantung pada lama dan frekuensi pemakaian. Perkiraan mandi mengalikan orang, mandi per minggu, menit, dan liter per menit. Cucian dan pencuci piring memakai muatan per minggu serta liter per muatan. Hubungan ini membantu memilih antara mengubah kebiasaan, merawat perlengkapan, atau mengukur ulang.",
  },
});

export { content };
