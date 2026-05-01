import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'projector-throw-calculator';
const title = 'プロジェクター設置距離計算機 — 投写距離と画面サイズ';
const description =
  '希望のスクリーンサイズと投写比（Throw Ratio）に基づいて、プロジェクターの正確な設置距離を計算。リアルタイムシミュレーション機能を搭載。';

const faqData = [
  {
    question: '投写比（Throw Ratio）とは何ですか？',
    answer:
      '特定の距離で画像がどれくらいの大きさになるかを定義する数値です。「投写距離 ÷ 画面の幅」で計算されます。比率が1.5の場合、1.5mの距離から投写すると、画面の幅が1mになることを意味します。',
  },
  {
    question: '100インチの画面にするにはどれくらいの距離が必要ですか？',
    answer:
      'プロジェクターの投写比によります。一般的な1.5:1の比率の場合、約3.3m必要です。短焦点（Short Throw）プロジェクターであれば、1m未満の距離で実現可能です。',
  },
  {
    question: '16:9と4:3の違いは何ですか？',
    answer:
      '16:9は現代の映画やドラマに使われるワイドフォーマットです。4:3はプレゼンテーションなどで使われるクラシックなフォーマットです。適切なものを選択することで、余計な黒帯を避けることができます。',
  },
  {
    question: 'プロジェクターを設置する高さは重要ですか？',
    answer:
      'はい。プロジェクターには垂直オフセットや台形補正（キーストーン）機能があります。歪みを避けるため、画面の上端または下端に対して中央に設置するのが理想的です。',
  },
];

const howToData = [
  {
    name: '投写比を確認する',
    text: 'プロジェクターの箱や説明書に記載されている「1.2:1」や「1.5-1.8:1」などの数値を探します。',
  },
  {
    name: '画面サイズを決める',
    text: '希望する画面のインチ数（対角）または壁の有効幅を入力します。',
  },
  {
    name: 'フォーマットを選ぶ',
    text: '映画なら16:9、プレゼンなら4:3、シネマスコープなら21:9を選択します。',
  },
  {
    name: '距離を確認する',
    text: '計算機が、プロジェクターを固定するための正確な設置距離を表示します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
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
      text: 'プロジェクションの幾何学をマスターする',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '目分量でプロジェクターを設置すると、映像体験が損なわれる可能性があります。近すぎると画面が小さくなり、遠すぎると明るさが不足します。鍵となるのは<strong>投写比（Throw Ratio）</strong>です。',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: '設置距離の式', icon: 'mdi:projector' },
        { value: '< 0.4', label: '超短焦点', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: '長焦点', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '投写比とは？',
          description: '投写距離と画面幅の比率です。TRが1.5の場合、画面幅1mあたり1.5mの距離が必要です。',
          icon: 'mdi:ruler',
          points: ['TR < 1: 短焦点。狭い部屋に最適', 'TR 1–2: 標準的。リビング等に', 'TR > 2: 長焦点。広い講堂等に'],
        },
        {
          title: 'アスペクト比（フォーマット）',
          description: 'フォーマットは画像の縦横比を決定します。不適切な比率を使うと黒帯が発生し、明るさが損なわれます。',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: HD/4Kの標準フォーマット', '21:9: 映画用シネマスコープ', '4:3: プレゼン・事務用'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'プロの設置テクニック',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>レンズシフト vs 台形補正:</strong> レンズシフト機能がある場合は、デジタルの台形補正（キーストーン）よりも常に優先して使用してください。台形補正は画質を劣化させます。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '環境光とスクリーンゲイン',
      icon: 'mdi:lightbulb-on',
      badge: 'プロのヒント',
      html: '<p>照明のある部屋では、コントラストの低下を補うために高ゲイン（>1.0）のスクリーンを検討してください。</p>',
    },
    {
      type: 'summary',
      title: '設置チェックリスト',
      items: [
        '設置場所を決める前に投写比を確認する。',
        '壁の有効スペースから最大画面サイズを把握する。',
        '画面に対して垂直方向に中央設置する。',
        '電子補正は避け、物理的な位置調整を優先する。',
        'スクリーンに直接当たる光源がないか確認する。',
      ],
    },
  ],
  ui: {
    configTitle: '設置設定',
    configSubtitle: 'スクリーンと機種情報を入力',
    labelDiagonal: '画面サイズ（対角）',
    labelDiagonalUnit: 'インチ (")',
    labelFormat: 'アスペクト比（フォーマット）',
    labelThrowRatio: '投写比（Throw Ratio）',
    throwRatioHint: '例: 1.50は、幅1mに対して1.5mの距離が必要であることを示します。',
    ratio169Sub: 'TV / HD',
    ratio219Sub: '映画',
    ratio43Sub: '事務',
    labelWidth: '画面の幅',
    labelHeight: '画面の高さ',
    labelDistance: '必要な投写距離',
    simulationBadge: 'リアルタイム予測',
  },
};
