import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'id',
  slug: 'kalkulator-ukuran-unit-penyimpanan',
  title: 'Kalkulator Ukuran Unit Penyimpanan',
  description: 'Perkirakan ukuran unit penyimpanan berdasarkan kardus, furnitur, dan ruang untuk mengambil barang.',
  labels: {
    inventory: 'Inventaris Anda', boxes: 'Kardus', furniture: 'Barang besar', smallBoxes: 'Kardus kecil', mediumBoxes: 'Kardus sedang', largeBoxes: 'Kardus besar', sofa: 'Sofa', bed: 'Tempat tidur', wardrobe: 'Lemari', desk: 'Meja kerja', chair: 'Kursi', accessLane: 'Jalur akses', accessHint: 'Jalur akses yang lebih luas memakai area, tetapi barang yang dibutuhkan tetap mudah dijangkau.', quickScenarios: 'Muat inventaris awal', reset: 'Atur ulang',
  },
  presetLabels: ['Pindahan studio', 'Satu kamar tidur', 'Kantor kecil'],
  accessLabels: ['Sempit', 'Seimbang', 'Akses sering'],
  result: {
    title: 'Papan pemuatan', minimum: 'Ukuran minimum', comfortable: 'Ukuran nyaman', emptyStatus: 'Tambahkan barang', readyStatus: 'Rencana seimbang', tightStatus: 'Ukuran minimum sempit', emptyMessage: 'Papan akan menggambar zona penyimpanan saat Anda menambahkan barang.', readyMessage: 'Ukuran minimum masih menyisakan jalur akses yang dipilih.', tightMessage: 'Ukuran minimum hampir penuh. Ukuran nyaman akan lebih mudah digunakan.', unit: 'm²', access: 'akses', boxesZone: 'Kardus', furnitureZone: 'Barang besar', laneZone: 'Jalur akses', floorPlanLabel: 'Denah unit penyimpanan proporsional dengan kardus, barang besar, dan jalur akses', packedLabel: 'terkemas', areaLabel: 'Area perencanaan', volumeLabel: 'volume', emptyPlan: 'Tambahkan kardus atau furnitur untuk menggambar denah',
  },
  seo: [
    { type: 'title', level: 2, text: 'Pilih unit penyimpanan dari barang yang Anda miliki' },
    { type: 'paragraph', html: 'Kalkulator ukuran unit penyimpanan paling berguna jika dimulai dari inventaris nyata. Masukkan kardus dan furnitur besar, lalu tentukan apakah Anda membutuhkan susunan padat atau ruang untuk mengambil barang di bagian belakang.' },
    { type: 'title', level: 2, text: 'Apa yang diukur oleh perkiraan ini' },
    { type: 'list', items: ['Volume terkemas dari kardus dan furnitur', 'Luas lantai setelah kardus ditumpuk menurut jenisnya', 'Jalur akses berdasarkan seberapa sering barang akan diambil', 'Ukuran minimum dan nyaman yang dibulatkan ke ukuran umum'] },
    { type: 'title', level: 2, text: 'Cara membaca ukuran minimum dan nyaman' },
    { type: 'paragraph', html: 'Ukuran minimum adalah ukuran standar pertama yang memuat area perencanaan. Ini adalah pemeriksaan kapasitas, bukan jaminan bahwa setiap bentuk furnitur akan cocok. Ukuran nyaman menambahkan ruang agar unit yang sering dibuka tidak berubah menjadi dinding kardus.' },
    { type: 'title', level: 2, text: 'Periksa sebelum memesan' },
    { type: 'paragraph', html: 'Gunakan hasil ini untuk membuat daftar pilihan, lalu bandingkan ukuran bagian dalam, lebar pintu, tinggi plafon, tiang, tangga, dan akses pemuatan. Volume yang besar bisa menipu jika ketinggiannya tidak benar-benar dapat digunakan.' },
    { type: 'list', items: ['Hitung kardus berdasarkan ukuran luar kira-kira.', 'Masukkan sofa dan lemari meskipun akan dibongkar.', 'Pilih Akses sering untuk barang musiman, stok, atau perlengkapan kerja.', 'Tanyakan luas lantai dalam yang dapat dipakai dan ukur pintu sebelum memindahkan furnitur.'] },
    { type: 'tip', title: 'Batas perencanaan', html: 'Ini adalah perkiraan transparan berdasarkan ukuran perwakilan dan asumsi penumpukan. Kalkulator tidak memeriksa unit nyata, batas beban, harga, atau apakah furnitur tidak beraturan dapat melewati pintu.' },
  ],
  faq: [
    { question: 'Sebaiknya memilih ukuran minimum atau nyaman?', answer: 'Pilih minimum jika barang akan dipadatkan dan jarang diambil. Pilih nyaman jika akses penting, inventaris mungkin bertambah, atau furnitur besar sulit ditumpuk.' },
    { question: 'Mengapa kalkulator menggunakan meter persegi?', answer: 'Penyedia sering mencantumkan luas lantai, yang menunjukkan apakah barang dapat ditempatkan dan dijangkau. Volume kubik juga ditampilkan untuk membandingkan penawaran berbasis volume.' },
    { question: 'Bisakah digunakan untuk garasi atau kontainer?', answer: 'Bisa sebagai titik awal. Periksa ukuran dalam, bukaan pintu, plafon, ventilasi, serta batas berat dan penumpukan ruang yang sebenarnya.' },
    { question: 'Apakah kalkulator mengetahui ukuran furnitur yang sebenarnya?', answer: 'Tidak. Kalkulator memakai tapak dan volume perwakilan. Ukur barang yang tidak biasa, rapuh, atau sangat dalam dan sisakan ruang tambahan bila akses belum pasti.' },
  ],
  howTo: [
    { name: 'Muat inventaris awal', text: 'Pilih skenario yang paling dekat dengan pindahan atau pengosongan Anda, lalu ubah jumlahnya.' },
    { name: 'Hitung kardus dan barang besar', text: 'Masukkan kardus kecil, sedang, dan besar, lalu tambahkan sofa, tempat tidur, lemari, meja, dan kursi.' },
    { name: 'Atur jalur akses', text: 'Pilih Sempit, Seimbang, atau Akses sering sesuai frekuensi Anda mengambil barang.' },
    { name: 'Bandingkan dua rekomendasi', text: 'Gunakan minimum sebagai batas kapasitas dan ukuran nyaman sebagai pilihan yang lebih mudah untuk akses rutin.' },
  ],
};

export const content = buildLocalizedContent(copy);
