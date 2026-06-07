import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vampire-draw-simulator';
const title = '待機電力（バンパイア電力）シミュレーター';
const description =
  'デバイスが待機モードで浪費する電力量を把握しましょう。テレビ、ルーター、充電器などのファントム負荷による隠された年間コストを計算します。';

const faqData = [
  {
    question: 'バンパイア電力やファントム負荷とは何ですか？',
    answer:
      'バンパイア電力とは、電子機器が電源を切った状態や待機モードで消費する電力のことです。これは、多くのデバイスがリモコンに応答したり、ネットワーク接続を維持したり、内部時計を動かし続けたりするために部分的に作動状態を保つためです。',
  },
  {
    question: '待機電力の年間コストはどのくらいですか？',
    answer:
      '平均的な家庭は、待機電力だけで年間50～150ユーロを浪費しています。1台の最新テレビは継続的に10～20ワットを消費し、電気料金によって年間約15～30ユーロに相当します。',
  },
  {
    question: '待機時に最も消費するデバイスは何ですか？',
    answer:
      '最大の犯人はセットトップボックス、ゲーム機、スリープモードのままのデスクトップパソコン、スマートテレビ、古い外部電源アダプターです。ケーブルテレビや衛星放送ボックスは、本当の待機状態になることがほとんどないため、特に浪費が大きいです。',
  },
  {
    question: 'デバイスのコンセントを抜くことは本当に節約になりますか？',
    answer:
      'はい。デバイスのコンセントを抜くか、マスター出力付きの高機能電源タップを使用することで、待機消費を完全に排除できます。待機デバイス20台を持つ典型的な家庭では、年間40～120ユーロの節約が見込めます。',
  },
  {
    question: 'スマート電源タップは買い得ですか？',
    answer:
      'スマート電源タップや高機能電源タップは、マスターデバイスがオフになったときに周辺機器への電力を遮断します。エンターテイメントセンターやコンピューターワークステーションで使用すれば、数か月以内に元が取れます。',
  },
  {
    question: '家庭で待機電力を測定するにはどうすればよいですか？',
    answer:
      '安価なプラグインパワーメーター（ワットメーター）を使用して、各デバイスがオフまたはアイドル状態のときに正確に何ワットを消費しているか測定できます。または、このシミュレーターは、メーカーの平均値と実験室の測定値に基づいた標準化された推定値を提供します。',
  },
];

const howToData = [
  {
    name: '各部屋を確認する',
    text: '24時間プラグを刺したままのすべてのデバイスを数えましょう。テレビ、電子レンジ、ルーター、プリンター、ゲーム機、スマホ充電器も含めてください。',
  },
  {
    name: '1日あたりの待機時間を見積もる',
    text: 'ほとんどのデバイスは1日20～24時間待機しています。各デバイスの平均値を入力するか、デフォルトの24時間を使用してください。',
  },
  {
    name: '電気料金単価を設定する',
    text: '1キロワット時あたりの料金を入力してください。これは電気料金請求書に記載されています。',
  },
  {
    name: 'バンパイア電力のサマリーを確認する',
    text: 'シミュレーターは、浪費された合計ワット数、年間キロワット時、そして隠された年間コストを示します。カテゴリーバッジを使用して、ご家庭が低、中、高、極端のどれに該当するか確認してください。',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: 'ファントム負荷：支払っているのに使用していない電力',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ケーブルが刺さっている家のすべてのコンセントは、<strong>ファントム電力</strong>の潜在的な源です。スイッチがオフになっていても、デバイスは電力を継続して消費します。わずか数ワットかもしれませんが、1日24時間、1年365日で掛け合わされると、それらのワットは数百キロワット時となり、あなたのポケットから本当のお金が出ていきます。',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: '家庭電気代の', icon: 'mdi:flash' },
        { value: '23h', label: '1日あたりの平均待機時間', icon: 'mdi:clock-outline' },
        { value: '30W', label: '上位デバイスの平均', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '決して眠らないデバイスたち',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '現代の家庭には平均40台の電子機器があります。その約半分は常時電力網に接続されています。近年、省エネ規制により待機効率は向上しましたが、デバイスの数は増えています。インスタントオン モードのゲーム機1台で15ワットを消費できます。クイックスタート付きのテレビは12ワットを消費できます。ルーター、モデム、スマートスピーカー、時計付き電子レンジ、プリンター、充電器を加えると、常時のバックグラウンド消費はすぐに100ワットを超えます。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '低影響家庭',
          description: 'スマートタップや抜き差しの習慣を通じて待機電力を積極的に管理する家庭。',
          icon: 'mdi:leaf',
          points: ['総待機電力50ワット未満', '年間コスト50ユーロ未満', '高機能電源タップを使用'],
        },
        {
          title: '高影響家庭',
          description: 'エンターテイメントセンター、複数のゲーム機、常時オン状態のコンピューターを持つ典型的な家庭。',
          icon: 'mdi:lightning-bolt',
          points: ['総待機電力150ワット超', '年間コスト150ユーロ超', '多くのデバイスがクイックスタートモード'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '簡単節約チェックリスト',
      icon: 'mdi:check-circle',
      badge: '対策',
      html: '<p style="margin:0">使用しないときはスマホ充電器のプラグを抜きましょう。エンターテイメントセンターにはマスター制御型電源タップを使用しましょう。テレビやゲーム機のクイックスタートやインスタントオン モードを無効にしましょう。スリープモードのままにするのではなく、デスクトップパソコンをシャットダウンしましょう。</p>',
    },
    {
      type: 'title',
      text: 'ワットが想像以上に速く積み重なる理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ワットはエネルギー使用の速度です。1ワットを1時間動かすと1ワット時です。継続的に10ワットを消費するデバイスは、年間87.6キロワット時を使用します。1キロワット時あたり平均0.25ユーロの価格で、1台のデバイスの年間コストは21ユーロ以上です。これを家のすべての差し込まれたガジェットに掛け合わせてみてください。',
    },
    {
      type: 'summary',
      title: 'バンパイア負荷を削減する方法',
      items: [
        'このシミュレーターやプラグインメーターで最大の消費者を特定しましょう。',
        'メインデバイスがオフになったときに待機電源を遮断するスマート電源タップにデバイスをグループ化しましょう。',
        '可能な限り、常時オン、クイックスタート、ネットワーク待機機能を無効にしましょう。',
        '毎日使用しない充電器や小型家電のプラグを抜きましょう。',
        '非常に古い外部電源アダプターを、最新の高効率モデルに交換することを検討しましょう。',
      ],
    },
  ],
  ui: {
    sectionTitle: 'ファントム負荷監査',
    labelDevices: '接続された待機デバイス',
    labelHours: '1日あたりの待機時間',
    unitHours: 'h',
    labelPrice: '電気料金',
    unitPrice: '/kWh',
    resultBadge: 'バンパイア電力結果',
    labelAnnualKwh: '年間浪費電力',
    labelAnnualCost: '隠された年間コスト',
    labelMonthlyCost: '月間等価額',
    labelDevicesCount: 'カウントされたデバイス数',
    labelTotalWatts: '総待機ワット数',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: '通貨',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: '低負荷',
    categoryModerate: '中負荷',
    categoryHigh: '高負荷',
    categoryExtreme: '極端な負荷',
    addDevice: 'デバイスを追加',
    removeDevice: '削除',
    modalAddTitle: '待機デバイスを追加',
    labelDeviceName: 'デバイス名',
    labelDeviceWatts: '待機時のワット数',
    btnSave: '保存',
    btnCancel: 'キャンセル',
  },
};
