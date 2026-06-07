import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulator-jangkauan-wifi';
const title = 'Simulator Jangkauan dan Hambatan WiFi';
const description =
  'Gambar tata letak rumah Anda, tempatkan dinding, pintu, furnitur, dan peralatan, lalu seret router dan perangkat Anda untuk menemukan jalur sinyal terbaik. Lihat langsung kerugian jangkauan, vonis streaming, dan tips penempatan untuk memperbaiki zona mati tanpa membeli perangkat keras baru.';

const faqData = [
  {
    question: 'Mengapa sinyal WiFi saya lemah di ruangan tertentu?',
    answer:
      'WiFi menggunakan gelombang radio yang diserap, dipantulkan, atau dihalangi oleh material fisik. Bata padat, beton, dan logam adalah yang terburuk, masing-masing mengurangi kekuatan sinyal secara signifikan. Air dan kaca juga dapat memantulkan atau menyerap sebagian sinyal.',
  },
  {
    question: 'Seberapa besar pengaruh dinding beton atau batu terhadap WiFi?',
    answer:
      'Dinding beton standar dapat meredam sinyal 2,4 GHz sebesar 10 hingga 20 desibel. Dinding batu tebal setebal 70 hingga 80 sentimeter dapat mencapai 22 desibel atau lebih. Ini berarti hilangnya jangkauan sekitar 50 hingga 90 persen tergantung pada ketebalan dan kepadatan. Pada 5 GHz kerugiannya lebih besar karena frekuensi yang lebih tinggi diserap lebih cepat oleh material padat.',
  },
  {
    question: 'Di mana sebaiknya saya meletakkan router untuk jangkauan terbaik?',
    answer:
      'Di tengah, ditinggikan, dan terbuka. Tempatkan router di tengah rumah Anda, setidaknya satu meter dari dinding tebal dan benda logam, dan naikkan setinggi dada untuk penyebaran horizontal. Hindari sudut, lemari, dan posisi rendah di belakang furnitur.',
  },
  {
    question: 'Bisakah pintu kaca menghalangi WiFi?',
    answer:
      'Kaca bening memiliki dampak minimal, tetapi jendela berlapis atau kaca ganda dengan film logam dapat memantulkan sinyal. Simulator memperlakukan kaca standar sebagai hambatan ringan dengan kerugian sekitar 2 hingga 3 desibel.',
  },
];

const howToData = [
  {
    name: 'Identifikasi jalur sinyal',
    text: 'Bayangkan garis lurus antara router Anda dan perangkat yang Anda pedulikan. Setiap objek yang melintasi garis ini penting.',
  },
  {
    name: 'Tambahkan setiap hambatan',
    text: 'Klik tombol material di simulator untuk menambahkan setiap dinding, pintu, peralatan, atau furnitur yang melintasi jalur.',
  },
  {
    name: 'Baca vonisnya',
    text: 'Saksikan cincin sinyal, animasi gelombang, dan dasbor streaming langsung berubah saat Anda menambah atau menghapus objek.',
  },
  {
    name: 'Terapkan tips kontekstual',
    text: 'Ikuti kartu penempatan yang muncul berdasarkan kombinasi hambatan spesifik Anda untuk meningkatkan jangkauan tanpa membeli perangkat keras baru.',
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
  inLanguage: 'id',
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
      text: 'Mengapa WiFi Anda Mati di Kamar Sebelah',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Router Anda memancarkan gelombang radio ke segala arah. Gelombang tersebut melintasi udara dengan mudah, tetapi setiap benda fisik yang ditemuinya akan berdampak. Beberapa material membiarkan sebagian besar sinyal lewat. Yang lainnya melahapnya sepenuhnya. Memahami benda mana di rumah Anda yang diam-diam mematikan koneksi adalah langkah pertama untuk memperbaiki zona mati tanpa mengeluarkan uang sepeser pun untuk perangkat keras baru.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Hilang di Dinding Kering', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Dinding Batu Tebal', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Pintu Logam', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Biaya Sebenarnya dari Setiap Benda di Rumah Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua hambatan sama. Panel dinding kering mungkin hanya menghilangkan beberapa persen sinyal Anda, tetapi pilar beton atau pintu logam dapat memotong jangkauan efektif Anda hingga setengahnya. Inilah yang sebenarnya Anda hadapi saat menempatkan router di belakang TV, di samping kulkas, atau di lantai di bawah rak logam.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Hambatan Ringan',
          description: 'Benda-benda ini menyebabkan kehilangan sinyal minimal dan biasanya aman di dekat jalur sinyal. Anda tidak perlu khawatir dengan satu jendela atau pintu kaca.',
          icon: 'mdi:window-open-variant',
          points: [
            'Pintu kaca: 2 hingga 3 dB hilang',
            'Jendela standar: 2 dB hilang',
            'Partisi dinding kering: 3 dB hilang',
            'Pintu interior kayu: 4 dB hilang',
          ],
        },
        {
          title: 'Hambatan Sedang',
          description: 'Benda-benda ini menciptakan pengurangan jangkauan yang terlihat. Satu atau dua tidak masalah, tetapi menumpuk tiga atau lebih di jalur sinyal yang sama akan menyebabkan buffering dan lag.',
          icon: 'mdi:wardrobe',
          points: [
            'Lemari pakaian kayu: 5 dB hilang',
            'Cermin besar: 6 dB hilang',
            'Mesin cuci: 6 dB hilang',
            'Oven microwave: 5 dB hilang',
          ],
        },
        {
          title: 'Hambatan Berat',
          description: 'Ini adalah pembunuh diam-diam jaringan rumah. Satu dinding beton atau pintu logam dapat mengubah sinyal kuat menjadi lemah, dan menumpuknya menciptakan zona mati yang pasti.',
          icon: 'mdi:wall',
          points: [
            'Dinding bata padat: 8 dB hilang',
            'Lantai atau langit-langit: 10 dB hilang',
            'Kulkas: 10 dB hilang',
            'Akuarium: 12 dB hilang',
          ],
        },
        {
          title: 'Hambatan Ekstrem',
          description: 'Material ini menyerap atau memantulkan hampir semua energi radio. Jika jalur sinyal Anda melewati salah satunya, Anda harus memindahkan router atau perangkat. Tidak ada solusi lain.',
          icon: 'mdi:shield',
          points: [
            'Dinding batu tebal (70-80 cm): 22 dB hilang',
            'Dinding beton: 15 dB hilang',
            'Kabinet logam: 12 dB hilang',
            'Pintu atau gerbang logam: 18 dB hilang',
            'Lift shaft: 20+ dB hilang',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Bagaimana Frekuensi Berbeda Menembus Dinding',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kebanyakan router modern memancarkan dua pita: 2,4 GHz dan 5 GHz. Frekuensi yang lebih rendah menjangkau lebih jauh dan menembus dinding lebih mudah, tetapi lebih lambat dan padat. Frekuensi yang lebih tinggi sangat cepat tetapi diserap oleh setiap hambatan di jalurnya.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Penetrasi 2,4 GHz',
          description: 'Frekuensi lebih rendah menjangkau lebih jauh dan menembus dinding lebih baik. Ideal untuk jangkauan jauh namun padat dengan jaringan tetangga.',
          icon: 'mdi:signal',
          points: [
            'Lebih baik menembus bata padat dan beton',
            'Lebih banyak interferensi dari router tetangga',
            'Kecepatan puncak lebih lambat, sekitar 150 Mbps nyata',
            'Lebih baik untuk perangkat rumah pintar dan IoT',
          ],
        },
        {
          title: 'Penetrasi 5 GHz',
          description: 'Frekuensi lebih tinggi menawarkan kecepatan lebih cepat tetapi diserap jauh lebih cepat oleh material bangunan. Terbaik untuk ruang terbuka dan perangkat di dekatnya.',
          icon: 'mdi:signal-5g',
          points: [
            'Buruk menembus beton dan logam',
            'Lebih sedikit interferensi, saluran lebih bersih',
            'Kecepatan gigabit di ruangan yang sama',
            'Jangkauan lebih buruk, kualitas lebih baik di tempat yang terjangkau',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Pembunuh Tersembunyi: Benda yang Tidak Pernah Anda Duga',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kebanyakan orang menyalahkan dinding, tetapi beberapa pembunuh WiFi terburuk adalah benda sehari-hari. Akuarium sebagian besar berisi air, dan air menyerap gelombang radio 2,4 GHz hampir sempurna. Cermin besar memiliki lapisan logam tipis di belakang yang memantulkan sinyal menjauh dari perangkat Anda. Oven microwave memancarkan radiasi pada 2,4 GHz, frekuensi yang sama persis dengan router Anda, menyebabkan interferensi setiap kali Anda memanaskan makanan.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jebakan Akuarium',
      icon: 'mdi:fish',
      badge: 'Penghalang Tak Terduga',
      html: '<p>Akuarium besar dapat meredam sinyal WiFi Anda hingga 12 desibel. Itu sama dengan dinding beton tebal. Jika router Anda di satu sisi akuarium dan meja Anda di sisi lain, air menyebabkan lebih banyak kerusakan daripada dinding di belakangnya.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Efek Cermin',
      icon: 'mdi:mirror',
      badge: 'Bahaya Refleksi',
      html: '<p>Cermin besar memiliki lapisan logam tipis di bagian belakang yang dirancang untuk memantulkan cahaya. Lapisan logam yang sama juga memantulkan gelombang radio. Cermin yang menghadap router Anda dapat memantulkan sinyal menjauh dari tempat yang Anda butuhkan, atau menciptakan interferensi multi-jalur yang mengacaukan paket data.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interferensi Microwave',
      icon: 'mdi:microwave',
      badge: 'Pengganggu Aktif',
      html: '<p>Oven microwave beroperasi pada 2,45 GHz, tumpang tindih langsung dengan pita WiFi 2,4 GHz. Saat menyala, microwave dapat menghilangkan sinyal 2,4 GHz dalam radius 3 hingga 5 meter. Jika router Anda hanya mendukung 2,4 GHz dan dapur Anda dekat, beralihlah ke router dual-band dan gunakan 5 GHz untuk tugas-tugas penting.</p>',
    },
    {
      type: 'title',
      text: 'Ruang demi Ruang: Tempat Meletakkan Router Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lokasi router ideal bukanlah yang paling nyaman. Melainkan yang memberikan garis pandang paling jelas ke ruangan tempat Anda benar-benar menggunakan internet. Begini cara memikirkan setiap ruangan.',
    },
    {
      type: 'table',
      headers: ['Ruang', 'Tingkat Risiko', 'Mengapa Sulit', 'Solusi'],
      rows: [
        ['Dapur', 'Tinggi', 'Kulkas, microwave, kabinet logam, pipa air', 'Tempatkan router di luar dapur, jangan pernah di dalam.'],
        ['Kamar Mandi', 'Tinggi', 'Cermin, pipa air, ubin dengan jaring logam', 'Hindari menempatkan router di belakang dinding kamar mandi.'],
        ['Kamar Tidur', 'Sedang', 'Lemari, dinding tebal, rangka tempat tidur logam', 'Tinggikan router, bersihkan jalur di atas furnitur.'],
        ['Ruang Tamu', 'Rendah', 'Biasanya terbuka, tapi perhatikan TV dan konsol', 'Jaga router tetap terlihat, jangan sembunyikan di belakang TV.'],
        ['Garasi', 'Ekstrem', 'Pintu logam, beton, mobil', 'Jangan harap router dalam ruangan menjangkau garasi.'],
        ['Kebun / Teras', 'Tinggi', 'Dinding luar, kaca, jarak', 'Gunakan access point luar ruangan atau node mesh.'],
      ],
    },
    {
      type: 'title',
      text: 'Aturan Satu Meter dan Trik Penempatan Lainnya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gerakan kecil menciptakan perbedaan besar. Anda tidak perlu memasang ulang kabel rumah. Anda hanya perlu memahami bagaimana gelombang radio bergerak dan memberi mereka jalur yang bersih.',
    },
    {
      type: 'tip',
      title: 'Aturan Satu Meter',
      html: '<p>Memindahkan router Anda hanya satu meter dari penghalang beton atau logam dapat memulihkan hingga 40 persen kekuatan sinyal yang hilang.</p>',
    },
    {
      type: 'tip',
      title: 'Tinggikan untuk Jangkauan',
      html: '<p>Tinggikan router setinggi dada di rak. Sinyal memancar secara horizontal dari antena. Meletakkannya di lantai membuang setengah jangkauan Anda ke tanah.</p>',
    },
    {
      type: 'tip',
      title: 'Jaga Tetap Terlihat',
      html: '<p>Jangan pernah menyembunyikan router di dalam kabinet, lemari, atau di belakang TV. Ruang tertutup bertindak seperti sangkar Faraday, menjebak sinyal sebelum mencapai ruangan Anda.</p>',
    },
    {
      type: 'tip',
      title: 'Posisi Antena',
      html: '<p>Jika router Anda memiliki antena eksternal, posisikan satu secara vertikal dan satu secara horizontal. Ini memberikan jangkauan lebih baik untuk perangkat di ketinggian berbeda.</p>',
    },
    {
      type: 'tip',
      title: 'Hindari Interferensi',
      html: '<p>Jaga router setidaknya 1,5 meter dari microwave, telepon nirkabel, dan monitor bayi. Perangkat ini berbagi spektrum 2,4 GHz dan menyebabkan interferensi aktif.</p>',
    },
    {
      type: 'tip',
      title: 'Keuntungan Lantai Tengah',
      html: '<p>Jika Anda tinggal di rumah bertingkat, tempatkan router di lantai tengah. Sinyal menyebar buruk ke atas dan ke bawah melalui lantai beton.</p>',
    },
    {
      type: 'title',
      text: 'Vonis Streaming: Arti Sebenarnya Sinyal Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Persentase itu abstrak. Yang benar-benar Anda pedulikan adalah apakah Anda bisa menonton Netflix, memenangkan pertandingan, atau menyelesaikan panggilan video tanpa membeku. Inilah arti setiap level sinyal di dunia nyata.',
    },
    {
      type: 'table',
      headers: ['Sinyal', 'Streaming 4K', 'Game Online', 'Panggilan Video', 'Jelajah'],
      rows: [
        ['80% hingga 100%', 'Sempurna, muat instan', 'Latensi rendah, main kompetitif', 'Bening, tanpa putus', 'Instan, tanpa jeda'],
        ['60% hingga 79%', 'Baik, buffering sesekali', 'Bisa dimainkan, lag kecil', 'Stabil, jarang pecah', 'Cepat, tanpa masalah'],
        ['40% hingga 59%', 'Buffering setiap beberapa menit', 'Peringatan lag, rubber banding', 'Pecah, beberapa putus', 'Bisa dipakai, lebih lambat'],
        ['20% hingga 39%', 'Tidak mungkin, beku terus', 'Putus koneksi, tidak bisa main', 'Sering putus, tidak berguna', 'Sangat lambat, timeout'],
        ['0% hingga 19%', 'Tidak mau mulai', 'Tidak bisa terhubung', 'Tidak ada koneksi', 'Tidak berguna'],
      ],
    },
    {
      type: 'title',
      text: 'Perbaikan Cepat Sebelum Membeli Apa Pun',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Daftar Optimasi Tanpa Biaya',
      items: [
        'Pindahkan router ke tengah rumah, bukan sudut.',
        'Tinggikan setinggi dada di rak atau furnitur tinggi.',
        'Keluarkan dari kabinet, lemari, dan belakang TV.',
        'Arahkan satu antena vertikal dan satu horizontal jika memungkinkan.',
        'Gunakan 5 GHz untuk perangkat dekat dan 2,4 GHz untuk yang jauh.',
        'Ganti saluran WiFi ke yang kurang padat menggunakan aplikasi pemindai.',
        'Perbarui firmware router untuk memperbaiki bug sinyal.',
        'Nyalakan ulang router sebulan sekali untuk membersihkan kebocoran memori.',
      ],
    },
    {
      type: 'title',
      text: 'Kapan Harus Mengupgrade Perangkat Keras Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Terkadang lingkungan menang. Jika Anda sudah mencoba semua trik penempatan dan masih menderita zona mati, saatnya memperluas jaringan daripada melawan fisika.',
    },
    {
      type: 'proscons',
      title: 'WiFi Extender vs Sistem Mesh',
      items: [
        { pro: 'Extender murah dan mudah dipasang.', con: 'Extender membuat nama jaringan kedua dan kecepatan setengah.' },
        { pro: 'Extender cocok untuk satu zona mati.', con: 'Extender membutuhkan sinyal kuat yang ada untuk diperkuat.' },
        { pro: 'Sistem mesh menciptakan satu jaringan mulus.', con: 'Sistem mesh lebih mahal di awal.' },
        { pro: 'Mesh menangani beberapa lantai dan rumah besar.', con: 'Mesh membutuhkan node utama dekat modem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Kapan Menggunakan Mesh',
      html: '<p>Untuk rumah di atas 120 meter persegi atau dengan dinding beton tebal, sistem mesh dengan setidaknya dua node akan mengungguli router tunggal mana pun, semahal apa pun.</p>',
    },
    {
      type: 'title',
      text: 'Memahami Desibel dalam Bahasa Sederhana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Desibel bersifat logaritmik, artinya mereka tidak berperilaku seperti angka normal. Setiap 3 dB kehilangan memotong kekuatan sinyal Anda setengahnya. Kehilangan 6 dB berarti seperempat dari kekuatan asli yang tersisa. Kehilangan 10 dB berarti hanya sepersepuluh yang bertahan. Itulah mengapa dinding beton pada 15 dB sangat menghancurkan. Ini tidak hanya melemahkan sinyal. Ini memusnahkannya.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Attenuasi', definition: 'Hilangnya kekuatan sinyal secara bertahap saat melewati material. Angka yang lebih tinggi berarti lebih banyak sinyal yang hilang.' },
        { term: 'dBm', definition: 'Satuan daya untuk mengukur kekuatan sinyal WiFi. 0 dBm sama dengan satu miliwatt. Nilai negatif adalah normal, dengan minus 30 sangat baik dan minus 80 hampir tidak bisa digunakan.' },
        { term: 'Zona Mati', definition: 'Area di mana sinyal WiFi terlalu lemah untuk membangun atau mempertahankan koneksi yang andal.' },
        { term: 'Jaringan Mesh', definition: 'Sistem beberapa node router yang bekerja sama untuk menutupi area luas dengan satu jaringan WiFi yang mulus.' },
        { term: 'Interferensi Multi-Jalur', definition: 'Ketika gelombang radio memantul dari dinding dan benda, menciptakan beberapa salinan tertunda dari sinyal yang sama yang membingungkan penerima.' },
        { term: 'SSID', definition: 'Nama jaringan WiFi Anda. Extender sering membuat SSID kedua, sementara sistem mesh mempertahankan satu nama di semua node.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aturan Emas Penempatan Router',
      icon: 'mdi:map-marker-radius',
      badge: 'Tips Kunci',
      html: '<p>Jika router Anda saat ini berada di sudut, di dalam kabinet, atau di lantai, Anda membuang 50 hingga 70 persen jangkauan potensialnya sebelum sinyal bahkan meninggalkan ruangan. Upgrade tercepat yang bisa Anda lakukan adalah memindahkannya ke lokasi yang terbuka, sentral, dan tinggi. Perubahan tunggal ini sering memperbaiki lebih banyak masalah daripada membeli peralatan baru.</p>',
    },
    {
      type: 'summary',
      title: 'Cara Mencegah Zona Mati WiFi',
      items: [
        'Tempatkan router di tengah, ditinggikan, dan terbuka.',
        'Minimalkan jumlah dinding antara router dan perangkat.',
        'Hindari dapur, kamar mandi, dan garasi sebagai lokasi router.',
        'Gunakan 5 GHz untuk kecepatan di ruangan yang sama, 2,4 GHz untuk jarak.',
        'Pertimbangkan mesh untuk rumah besar atau dinding luar tebal.',
        'Nyalakan ulang bulanan dan perbarui firmware untuk kinerja puncak.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Benda Rumah yang Menghalangi WiFi',
    labelAddObstacle: 'Klik untuk menambah ke jalur sinyal',
    labelRemove: 'Hapus',
    labelSignalStrength: 'Sinyal',
    labelEffectiveRange: 'Jangkauan Efektif',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Vonis Streaming',
    verdictPerfect: 'Sempurna',
    verdictGood: 'Baik',
    verdictFair: 'Cukup',
    verdictPoor: 'Buruk',
    verdictDead: 'Zona Mati',
    tipTitle: 'Tips Penempatan',
    label4kStreaming: 'Streaming 4K',
    labelOnlineGaming: 'Game Online',
    labelVideoCalls: 'Panggilan Video',
    labelBasicBrowsing: 'Jelajah Dasar',
    statusPerfect: 'Sempurna',
    statusGood: 'Baik',
    statusFair: 'Cukup',
    statusPoor: 'Buruk',
    statusImpossible: 'Tidak Mungkin',
    statusLowLatency: 'Latensi Rendah',
    statusLagWarning: 'Peringatan Lag',
    statusDisconnect: 'Putus Koneksi',
    statusStable: 'Stabil',
    statusPixelated: 'Pecah',
    statusDropped: 'Terputus',
    statusPass: 'Berhasil',
    statusUnusable: 'Tidak Berguna',
    tipMoveRouter: 'Memindahkan router hanya 1 meter dari penghalang padat itu bisa meningkatkan sinyal hingga 40%.',
    tipElevateRouter: 'Tinggikan router setinggi dada. Sinyal menyebar horizontal, dan lantai menyerap lebih dari yang Anda kira.',
    tipReduceObstacles: 'Setiap dinding tambahan membagi sinyal setengahnya. Coba kurangi jumlah hambatan antara router dan perangkat.',

    tipFishTank: 'Akuarium memblokir Wi-Fi seperti dinding beton. Jauhkan router atau perangkat darinya.',
    tipMicrowave: 'Microwave mengganggu pita 2,4 GHz saat menyala. Gunakan 5 GHz atau jauhkan router dari dapur.',
    labelMove: 'Pindah',
    labelWalls: 'Dinding',
    labelDrywall: 'Dinding Kering',
    labelBrick: 'Bata',
    labelConcrete: 'Beton',
    labelStone: 'Batu',
    labelObjects: 'Objek',
    labelWood: 'Kayu',
    labelMetal: 'Logam',
    labelWindow: 'Jendela',
    labelFridge: 'Kulkas',
    labelFish: 'Ikan',
    labelMicro: 'Mikro',
    labelMirror: 'Cermin',
    labelFurn: 'Furn',
    labelActions: 'Tindakan',
    labelUndo: 'Undo',
    labelAddDevice: '+ Perangkat',
    labelClearWalls: 'Hapus Dinding',
    labelClearObjects: 'Hapus Objek',
    labelClearAll: 'Hapus Semua',
    labelZoomIn: 'Perbesar',
    labelZoomOut: 'Perkecil',
    labelRouter: 'Router',
    labelAverageSignal: 'Sinyal Rata-rata',
    labelScaleMeters: '5 m',
    hintText: 'Seret router atau perangkat untuk memindahkannya. Klik dua kali dinding atau objek untuk menghapus. Ctrl+Z untuk undo.',
    labelMaxDevices: 'Maks 4 perangkat',
    labelDevicePrefix: 'Perangkat',
    labelPerDevice: 'Per Perangkat',
    labelDb: 'dB',
  },
};
