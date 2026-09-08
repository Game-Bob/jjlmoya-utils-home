import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-waktu-pemulihan-pemanas-air';
const title = 'Kalkulator Waktu Pemulihan Pemanas Air';
const description = 'Perkirakan waktu yang dibutuhkan pemanas air untuk naik dari suhu saat ini ke suhu target berdasarkan volume, daya berguna, dan efisiensi.';
const faq = [
  { question: 'Apa arti waktu pemulihan di sini?', answer: 'Ini adalah perkiraan waktu agar volume air yang dimasukkan naik dari suhu saat ini ke suhu target. Perhitungan memakai kapasitas panas air, daya berguna pemanas, dan efisiensi perkiraan.' },
  { question: 'Rumus apa yang digunakan kalkulator?', answer: 'Panas diperkirakan dari liter dikali kenaikan suhu dan 1,16 watt-jam per liter per derajat Celsius. Energi itu kemudian dibagi dengan daya pemanas dikali efisiensi.' },
  { question: 'Apakah ini memprediksi waktu persis pemanas saya?', answer: 'Tidak. Ini adalah perkiraan transparan untuk perencanaan. Kehilangan panas, siklus termostat, stratifikasi, pencampuran, pipa, dan batas daya dapat membuat waktu nyata lebih lama.' },
  { question: 'Efisiensi apa yang harus saya masukkan?', answer: 'Gunakan efisiensi berguna atau pemulihan yang tercantum di dokumentasi jika tersedia. Jika tidak, masukkan perkiraan yang hati-hati lalu bandingkan dengan manual atau siklus yang diukur.' },
];
const howTo = [
  { name: 'Masukkan volume air tersimpan', text: 'Gunakan volume tangki dalam liter untuk memperkirakan jumlah air yang perlu dipanaskan.' },
  { name: 'Atur suhu saat ini dan target', text: 'Masukkan suhu awal dan suhu yang ingin dicapai tangki.' },
  { name: 'Masukkan daya berguna dan efisiensi', text: 'Gunakan daya pemanas dalam kilowatt dan persentase energi yang benar-benar sampai ke air.' },
  { name: 'Baca jendela pemulihan', text: 'Gunakan durasi dan waktu selesai untuk merencanakan, lalu bandingkan dengan dokumentasi alat.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'id' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Volume air tersimpan', volumeHint: 'Kapasitas tangki', temperatureUnitLabel: 'Satuan suhu', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Suhu air saat ini', targetTempLabel: 'Suhu target', powerLabel: 'Daya berguna pemanas', efficiencyLabel: 'Efisiensi perkiraan', startTimeLabel: 'Pemulihan dimulai pukul', compareTitle: 'Bandingkan pengaturan lain', comparePowerLabel: 'Daya berguna lain', compareEfficiencyLabel: 'Efisiensi lain', compareOptional: 'Opsional: isi kedua bidang untuk membandingkan', calculateNote: 'Gunakan ini sebagai perkiraan untuk perencanaan dan periksa dokumentasi pemanas sebelum mengandalkan waktunya.', tankCurrent: 'Saat ini', tankTarget: 'Target', resultTitle: 'Jendela pemulihan', recoveryTimeLabel: 'Pemulihan perkiraan', energyLabel: 'Panas yang dibutuhkan', effectivePowerLabel: 'daya efektif', readyAtLabel: 'Diperkirakan siap pukul', temperatureRiseLabel: 'Kenaikan suhu', comparisonTitle: 'Pengaturan alternatif', comparisonFaster: 'lebih cepat', comparisonSlower: 'lebih lambat', noHeatingNeeded: 'Suhu target sudah tercapai', invalidInputs: 'Masukkan nilai positif untuk volume, daya, dan efisiensi untuk melihat perkiraan.', insufficientPower: 'Daya berguna harus bernilai positif.', limitsTitle: 'Hal yang tidak termasuk dalam perkiraan ini', limitsText: 'Model tidak mengetahui insulasi tangki, kehilangan saat siaga, siklus termostat, stratifikasi, pencampuran, kehilangan pada pipa, atau kurva daya alat yang sebenarnya.', hoursUnit: 'jam', minutesUnit: 'mnt', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Perkirakan kapan air panas tersedia kembali', level: 2 },
    { type: 'paragraph', html: 'Setelah mandi atau penggunaan air dalam jumlah besar, ukuran tangki saja belum cukup. Anda perlu mengetahui energi yang harus dikembalikan ke air dan seberapa cepat pemanas dapat memberikannya. Kalkulator ini mengubah data tersebut menjadi jendela pemulihan untuk merencanakan penggunaan berikutnya.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Panas yang dibutuhkan dalam Wh', icon: 'mdi:water-boiler' }, { value: 'kW × efisiensi', label: 'Daya pemanasan berguna', icon: 'mdi:flash-outline' }, { value: 'Panas ÷ daya', label: 'Waktu pemulihan', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Cara perkiraan pemulihan dibuat', level: 2 },
    { type: 'paragraph', html: 'Perkiraan menggunakan kapasitas panas air. Setiap liter membutuhkan sekitar 1,16 watt-jam untuk setiap kenaikan satu derajat. Kalkulator mengalikan faktor itu dengan volume dan kenaikan suhu, lalu membaginya dengan daya berguna setelah efisiensi diterapkan.' },
    { type: 'comparative', items: [{ title: 'Berguna untuk perencanaan', description: 'Pilih waktu mulai, masukkan kondisi tangki, dan lihat waktu selesai yang diperkirakan. Tambahkan pasangan daya dan efisiensi alternatif untuk membandingkan konfigurasi.', icon: 'mdi:calendar-clock', points: ['Uji siklus pemulihan berikutnya', 'Bandingkan daya berguna, bukan hanya daya nominal', 'Pertahankan kenaikan suhu tetap terlihat'] }, { title: 'Bukan jaminan layanan', description: 'Alat nyata bisa pulih lebih lambat karena kehilangan panas, siklus termostat, pencampuran, atau daya yang tidak dapat dipertahankan. Bandingkan hasil dengan manual atau pengukuran.', icon: 'mdi:thermometer-alert', points: ['Kehilangan saat siaga tidak dimodelkan', 'Data produsen tidak diambil', 'Tidak menyiratkan saran keselamatan atau instalasi'] }], columns: 2 },
    { type: 'title', text: 'Masukan yang paling mengubah waktu pemulihan', level: 2 },
    { type: 'paragraph', html: 'Kenaikan suhu yang lebih besar langsung meningkatkan kebutuhan energi. Tangki yang lebih besar juga memerlukan energi yang sebanding untuk kenaikan yang sama. Daya berguna dan efisiensi bekerja berlawanan: menggandakan hasil kalinya kira-kira membagi dua waktu pemulihan ideal.' },
    { type: 'title', text: 'Gunakan hasil tanpa menjanjikan presisi palsu', level: 2 },
    { type: 'paragraph', html: 'Alat ini cocok untuk menjadwalkan dan membandingkan asumsi, bukan untuk mensertifikasi pemanas atau merancang instalasi. Panduan teknis dan pengujian nyata memperhitungkan kehilangan serta kondisi pengukuran lain, sehingga siklus teramati dapat berbeda dari perkiraan ideal.' },
  ],
};
