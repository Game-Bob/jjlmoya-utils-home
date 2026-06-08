import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'how-many-lights-per-room';
const title = '住宅照明とルーメン計算機';
const description =
  'あらゆる部屋に必要なルーメン数と電球の数を正確に計算します。部屋の種類、寸法、電球の種類を選択すると、リアルタイムのルクス推定値付きのプロフェッショナルな照明計画が得られます。';

const faqData = [
  {
    question: 'リビングルームにはどのくらいのルーメンが必要ですか？',
    answer:
      '一般的なリビングルームでは、床面に約150ルクスを目指してください。部屋の面積（平方メートル）に150を掛けると、必要なルーメン数が出ます。20平方メートルの部屋では、約3,000ルーメンが必要です。',
  },
  {
    question: 'ルクスとルーメンの違いは何ですか？',
    answer:
      'ルーメンは電球から出る総光量を測る単位です。ルクスは、実際に表面に到達する光を測る単位です。天井が高い部屋や壁が暗い部屋は、距離や吸収による光の損失のため、同じルクス値を得るためにより多くのルーメンが必要です。',
  },
  {
    question: 'LED電球は本当に省エネですか？',
    answer:
      'はい。LED電球は1ワットあたり約100ルーメンを発生しますが、白熱電球は約15ルーメンしか発生しません。10WのLED電球は、60Wの白熱電球と同じ明るさを生み出し、電力を6分の1しか使いません。',
  },
  {
    question: '部屋の色は照明の必要性にどう影響しますか？',
    answer:
      '暗い壁や天井は光を吸収します。暗い表面の部屋では、標準推奨値より50%多くのルーメンが必要になることがあります。',
  },
  {
    question: '読書に適したルクス値はどのくらいですか？',
    answer:
      '快適に読書するには、ページに300～500ルクスが必要です。一般的な環境照明は通常150～200ルクスを提供するので、読書スポットの近くにタスクライトを追加して明るさを補ってください。',
  },
  {
    question: 'LED電球は調光できますか？',
    answer:
      '調光対応と表示されている場合のみです。標準のLEDは調光器に接続するとちらついたり、寿命が短くなったりすることがあります。設置前に必ずパッケージの調光対応シンボルを確認してください。',
  },
];

const howToData = [
  {
    name: '部屋の種類を選ぶ',
    text: '部屋の用途を選択してください。キッチンやオフィスは、寝室や廊下より明るい光が必要です。',
  },
  {
    name: '寸法を入力する',
    text: '部屋の幅、奥行き、天井高を入力してください。計算機はこれらを使用して室指数と照明利用係数を算出します。',
  },
  {
    name: '電球の種類と数を選ぶ',
    text: '好みの電球技術と設備の数を選択してください。計算機は、より多くの電球が必要かどうかを教えてくれます。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: '住宅照明設計とルーメン計画の完全ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '適切な照明は、家を住みやすい空間に変えます。美観だけでなく、適切な光量は気分、生産性、さらには眼の健康にも影響します。<strong>私たちの住宅照明計算機</strong>は、部屋の大きさ、天井高、壁面の色、電球の種類を考慮して、あらゆる部屋に必要なルーメン数を正確に算出します。',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: '推奨ルクス範囲', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED効率', icon: 'mdi:lightbulb' },
        { value: '80%', label: '保守率', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '暖かい環境照明',
          description: 'リビングルームや寝室に最適。居心地の良い雰囲気を作り出し、夜間の眼疲労を軽減します。',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', '電球色（2700K）', '複数の調光可能な光源'],
        },
        {
          title: '明るい作業照明',
          description: 'キッチン、オフィス、浴室に不可欠。細かい作業に対して明確な視認性を提供します。',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', '昼白色（4000K）', '作業面に焦点を当てる'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'なぜ部屋の寸法が重要なのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '光は距離とともに広がり、弱まっていきます。2.5メートルの天井に十分明るい電球でも、4メートルの天井では暗すぎることがあります。計算機は室指数の式を使用してこれを考慮に入れます。式は床面積と器具高の両方を考慮し、実際に作業面に到達する光量を推定します。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'クイックリファレンス ルクス表',
      icon: 'mdi:table',
      badge: '参考',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>リビング</strong> → 150 lux</li><li><strong>キッチン</strong> → 300 lux</li><li><strong>寝室</strong> → 100 lux</li><li><strong>浴室</strong> → 200 lux</li><li><strong>オフィス</strong> → 500 lux</li><li><strong>廊下</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'より良い照明のためのプロのヒント',
      items: [
        '環境照明、作業照明、アクセント照明の3つの光を重ね合わせましょう。',
        '1日の時間帯に合わせて明るさを調整するために調光器を使用しましょう。',
        '長寿命で低消費電力のLED電球を選びましょう。',
        '利き手の反対側に作業灯を置くと、影ができにくくなります。',
        'スマート電球を使えば、自動スケジュールや色温度の変化が可能です。',
      ],
    },
  ],
  ui: {
    sectionTitle: '部屋照明計算機',
    labelRoomType: '部屋の種類',
    labelRoomWidth: '幅',
    labelRoomLength: '奥行き',
    labelHeight: '天井',
    labelBulbType: '電球',
    labelBulbWatt: '消費電力',
    labelFixtures: '器具',
    labelAmbient: '雰囲気',
    btnAmbientCozy: '居心地の良い',
    btnAmbientNormal: '普通',
    btnAmbientBright: '明るい',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: '個',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: '目標ルクス',
    labelCurrentLux: '現在のルクス',
    labelBulbsNeeded: '必要な電球数',
    labelRoomArea: '面積',
    statusOptimal: '完璧',
    statusInsufficient: '暗すぎ',
    statusExcess: '明るすぎ',
    btnLiving: 'リビング',
    btnKitchen: 'キッチン',
    btnBedroom: '寝室',
    btnBathroom: '浴室',
    btnOffice: 'オフィス',
    btnHallway: '廊下',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'ハロゲン',
    btnBulbIncandescent: '白熱',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'この部屋の照明は完璧にバランスが取れています。',
    tipInsufficient: 'より多くの器具または高ワット数の電球を追加してください。',
    tipExcess: '器具を減らすか調光して省エネしましょう。',
    labelManualAdjust: '手動調整',
    labelSummary: '照明計画',
    labelTotalLumens: '必要な総ルーメン数',
    labelSuggestedSetup: '推奨構成',
    btnExport: 'PDFを出力',
  },
};
