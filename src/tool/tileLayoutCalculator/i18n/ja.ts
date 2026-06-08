import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tile-layout-calculator';
const title = 'タイルレイアウトとロス計算機';
const description =
  '部屋の床を精密にプランニング。タイルの正確な枚数、必要箱数、総費用を計算し、インタラクティブなグリッドプレビューでレイアウトをリアルタイムに可視化できます。';

const faqData = [
  {
    question: '部屋に必要なタイルの枚数はどう計算しますか？',
    answer:
      '部屋の幅と奥行きを測り、タイルサイズと目地幅を選んで入力してください。計算機は、部屋の寸法をタイル＋目地のサイズで割り、1列・1行あたりの必要枚数を正確に算出します。',
  },
  {
    question: 'タイル購入時のロス率はどの程度見込めばよいですか？',
    answer:
      '標準的な矩形の部屋では10%のロスを見込んでください。角が多い部屋、斜め貼り、複雑なカットが必要な場合は15%に増やすと、割れやカットミスに対応できます。',
  },
  {
    question: '目地幅は本当にタイル枚数に影響しますか？',
    answer:
      'はい。目地が広いほど、各タイルの有効な被覆面積が減るため、総枚数がわずかに増えます。計算機は各行・各列でこれを自動的に考慮しています。',
  },
  {
    question: 'ロス率の上に追加で箱を買うべきですか？',
    answer:
      '可能であれば1箱多めに購入するのが賢明です。生産ロットによって色味が異なる場合があり、同じロットの予備タイルがあれば将来の補修がスムーズに行えます。',
  },
  {
    question: '変形した部屋にタイルを貼るにはどうすればよいですか？',
    answer:
      '部屋を小さな矩形に分割して、それぞれを個別に計算して合計してください。部分箱は常に切り上げて、完全な被覆を確保してください。',
  },
  {
    question: '陶器タイルと磁器タイルのロス率の違いは何ですか？',
    answer:
      '磁器タイルは密度が高くカットが難しいため、標準的な陶器タイルに比べてカットロスが2〜3%増えることがあります。いずれの素材も同じ測定手順に従ってください。',
  },
  {
    question: '余ったタイルの箱は返品できますか？',
    answer:
      'ほとんどの小売店は未開封の箱を30日以内に返品を受け付けます。必ずレシートを保管し、施工が完全に終了するまで余分の箱は開封しないでください。',
  },
];

const howToData = [
  {
    name: '部屋を測定する',
    text: 'お好みの単位系で床の幅と奥行きを記録します。',
  },
  {
    name: 'タイルと目地を選ぶ',
    text: 'タイルの寸法と希望の目地幅を選びます。',
  },
  {
    name: '計算して可視化する',
    text: '数値を計算機に入力し、ロス率を調整して、リアルタイムのレイアウトプレビューを確認します。',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: '床タイルのプランニングとロスコントロールの完全ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'タイル貼りの成功は、最初の接着剤を塗る前から始まっています。正確な測定、賢いレイアウト計画、そして正確なロス見積もりが、リフォームが予算と工期の範囲内に収まるかどうかを決定します。<strong>当社のインタラクティブなタイルレイアウト計算機</strong>は、生の寸法を視覚的なフロアプランに変換し、1列に何枚入るか、何箱買えばよいか、そしてお金がどこに使われるかを正確に示します。',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: '標準ロス', icon: 'mdi:alert-circle' },
        { value: '30年以上', label: 'タイル寿命', icon: 'mdi:clock-outline' },
        { value: '48時間', label: '平均施工', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '大判タイル',
          description: '60cmを超えるタイルはシームレスでモダンな見た目を作りますが、完全に平らな下地が必要で、小さな部屋ではカットロスが増えます。',
          icon: 'mdi:arrow-expand',
          points: ['目地が少ない', 'プレミアムな視覚効果', '狭い空間ではカットロス増大'],
        },
        {
          title: '小さなモザイクタイル',
          description: '浴室や繊細な柄に最適。不規則な形に対応しますが、目地と施工時間が増えます。',
          icon: 'mdi:apps',
          points: ['障害物周りで柔軟', '目地が多い', '施工時間が長い'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'レイアウトの可視化が重要な理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '購入前にタイルのグリッドを見ることで、高額な予想外を防げます。ライブプレビューは、選んだタイルサイズが端に不格好な細い帯を残すのか、それともバランスの取れた対称的な床を作るのかを明らかにします。計算機内で目地幅とタイルの方向を調整することで、注文前に美観と効率の両面でレイアウトを最適化できます。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'カバレッジ早見表',
      icon: 'mdi:table',
      badge: '参考',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 1m²あたり11枚</li><li><strong>45 x 45 cm</strong> → 1m²あたり5枚</li><li><strong>60 x 60 cm</strong> → 1m²あたり3枚</li><li><strong>60 x 120 cm</strong> → 1m²あたり1.5枚</li></ul>',
    },
    {
      type: 'summary',
      title: 'ロスを最小化するプロのコツ',
      items: [
        '直線貼りは10%多め、斜め貼りやヘリンボーンは15%多めを注文しましょう。',
        '色の統一を保つため、すべての箱は同じ生産ロットのものを保管してください。',
        '行の計画前に、部屋の対角線を測って直角を確認してください。',
        '大判タイルは、部屋の幅がタイルの長さより大きい場合にのみ使用し、過剰なカットを避けましょう。',
        '箱数は常に切り上げましょう。二度目の配送より安上がりです。',
      ],
    },
  ],
  ui: {
    sectionTitle: '部屋の設定',
    labelRoomWidth: '部屋の幅',
    labelRoomLength: '部屋の奥行き',
    labelTileWidth: 'タイルの幅',
    labelTileLength: 'タイルの長さ',
    labelGrout: '目地幅',
    labelWaste: 'ロス率',
    labelTilesPerBox: '1箱あたりの枚数',
    labelPrice: '1箱の価格',
    labelPattern: '貼り方',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: '枚',
    unitPrice: '/箱',
    resultBadge: 'ライブプレビュー',
    labelArea: '床面積',
    labelTiles: '総タイル数',
    labelBoxes: '必要箱数',
    labelCost: '総費用',
    labelWasteCount: 'ロス枚数',
    labelCuts: '部分カット',
    currency: 'JPY',
    btnMetric: 'メートル法',
    btnImperial: 'ヤードポンド法',
    btnPatternStraight: '直線',
    btnPatternBrick: 'ずらし貼り',
    btnPatternDiagonal: '斜め',
    badgeOptimal: '最適レイアウト',
    badgeWarning: 'ロス過多警告',
    visualTitle: 'レイアウトプレビュー',
  },
};
