import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wall-painting-calculator';
const title = '壁用ペイント・希釈最適化計算ツール';
const description =
  '壁に必要なリットル数またはガロン数を正確に計算します。塗装回数、下地の種類、希釈率を調整して、購入前に実際のコストを把握できます。';

const faqData = [
  {
    question: 'ペイントの正確な量はどうやって計算しますか？',
    answer:
      '壁の表面積に塗装回数を掛け、1リットルまたは1ガロンあたりの平米数または平方フィート数で割ります。ドアと窓の面積は先に合計面積から差し引いてください。',
  },
  {
    question: '標準的な部屋にはどのくらいのペイントが必要ですか？',
    answer:
      '12平方メートルの部屋で天井高さ2.5メートルの場合、壁面積は約30平方メートルです。2回塗装で1リットルあたり12平方メートルの場合、約5リットルのペイントが必要です。',
  },
  {
    question: '塗装前にペイントを希釈すべきですか？',
    answer:
      '水系アクリルペイントは通常そのまま使用できるか、下塗り時に水を5から10パーセント加える必要があります。エナメルまたは油性ペイントは、缶に記載された専用の溶剤が必要な場合があります。',
  },
  {
    question: '本当に必要な塗装回数は何回ですか？',
    answer:
      '新しい表面や吸水性の高い表面は、プライマーと仕上げ塗装2回が必要です。すでに塗装された壁を似たような色で塗り直す場合は、通常1回または2回で十分です。',
  },
  {
    question: 'ドアと窓の面積を差し引く必要がありますか？',
    answer:
      'はい。開口部を測定し、壁の総面積から差し引いてください。目安として、ドアは約2平方メートル、窓は約1.5平方メートルです。',
  },
  {
    question: '表面の種類は塗布量に影響しますか？',
    answer:
      'はい。滑らかで下地処理された壁は、1リットルあたり最大14平方メートル塗布できます。粗いコンクリート、漆喰、または吸水するレンガは、1リットルあたり6～8平方メートルまで塗布量が低下する場合があります。',
  },
];

const howToData = [
  {
    name: '壁を測定する',
    text: '各壁の幅と高さを測定します。それらを掛けて各壁の面積を求め、すべての壁を合計します。',
  },
  {
    name: '開口部を差し引く',
    text: 'ドアと窓を測定し、その面積を合計から差し引いて、実際に塗装する表面積を求めます。',
  },
  {
    name: 'ペイントの種類を選ぶ',
    text: '計算ツールでペイントの種類を選びます。アクリルマット、アクリルサテン、エナメルはそれぞれ塗布量と希釈の推奨値が異なります。',
  },
  {
    name: '回数と価格を設定する',
    text: '塗装する回数とリットルまたはガロンあたりの価格を入力します。計算ツールが正確な量と総コストを返します。',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'ペイント計算ツール：必要な量だけを購入',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '計算せずに部屋を塗装すると、<strong>半分残った缶</strong>や緊急の買い物に終わることが多いです。理由は単純です。ペイントの塗布量は表面の吸水性、色の変更、塗装回数によって異なります。滑らかで既に塗装された壁は1リットルあたり最大14平方メートル塗布できますが、粗い漆喰壁は同量を吸収して6平方メートルしか塗布できない場合があります。',
    },
    {
      type: 'stats',
      items: [
        { value: '高い', label: '標準塗布量', icon: 'mdi:format-paint' },
        { value: '2回塗装', label: '推奨', icon: 'mdi:layers' },
        { value: '5-10%', label: '標準希釈率', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'ペイントの塗布量の仕組み',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'メーカーは缶に理論塗布量を記載しています。この数値は、完全に滑らかで非吸収性の白い表面に、プロのローラーで理想的な条件の下に塗布した場合を前提としています。実際には、<strong>多孔質の壁、暗い色、DIY塗装</strong>はこの塗布量を20～40パーセント減少させます。当計算ツールでは現実的なプロファイルを選択できるため、不足することはありません。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'アクリルマットペイント',
          description: '室内で最も一般的な選択です。高い隠蔽力、簡単な補修、ほとんどの品質で水洗い可能です。',
          icon: 'mdi:palette',
          points: ['標準的な室内塗布量', '希釈：水5～10パーセント', '最適：リビングと寝室'],
        },
        {
          title: 'アクリルサテンペイント',
          description: 'わずかに光沢のある仕上がりで、湿気と汚れに対する耐性が高いです。シームレスな補修が難しい場合があります。',
          icon: 'mdi:brightness-6',
          points: ['やや高い塗布量', '希釈：水5パーセント', '最適：キッチンとバスルーム'],
        },
        {
          title: 'エナメルペイント',
          description: '木部品、ラジエーター、通行量の多いエリアに適した硬く耐久性のある仕上がりです。溶剤または専用の薄め液が必要です。',
          icon: 'mdi:spray',
          points: ['硬く耐久性のある仕上がり', '希釈：溶剤10～15パーセント', '最適：ドア、枠、家具'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '実用的な表面積の測定',
      icon: 'mdi:ruler-square',
      badge: 'ヒント',
      html: '<p style="margin:0">各壁の幅に高さを掛けます。素早く合計を出すには、すべての幅を足して部屋の高さを掛けます。次に、標準的なドアあたり約2平方メートル、窓あたり約1.5平方メートルを差し引きます。</p>',
    },
    {
      type: 'title',
      text: '希釈と塗装のルール',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '新しい表面や補修した表面への初回塗装は、ペイントが浸透して定着するために常に軽い希釈が必要です。仕上げ塗装は、希釈せず、またはメーカーが示す最小量で塗布すべきです。<strong>過度な希釈は顔料を破壊</strong>し、追加の塗装が必要な透明な斑点を残します。',
    },
    {
      type: 'summary',
      title: '購入前に計算すべき理由',
      items: [
        '缶の中で乾いて廃棄物になる余剰ペイントを避ける。',
        '異なる時期に購入したロット間の色の違いを防ぐ。',
        '正確に予算を立てる：プライマーと道具を含む実際のコストを把握する。',
        '追加の材料のために作業を中断することなく、一度に作業を計画する。',
      ],
    },
  ],
  ui: {
    sectionTitle: '表面とペイント',
    labelMetric: 'メートル法',
    labelImperial: 'ヤードポンド法',
    labelArea: '塗装する総面積',
    labelAreaFt: '塗装する総面積',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'ペイントの塗布量',
    labelYieldFt: 'ペイントの塗布量',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'ペイントの種類を選択',
    btnPlasticMatTitle: 'アクリルマット',
    btnPlasticMatSub: 'マット · 水5%',
    btnPlasticSatinTitle: 'アクリルサテン',
    btnPlasticSatinSub: 'サテン · 水5%',
    btnEnamelTitle: 'エナメル',
    btnEnamelSub: 'エナメル · 溶剤10%',
    labelCoats: '塗装回数',
    unitCoats: '回',
    labelPrice: 'リットルあたりの価格',
    labelPriceFt: 'ガロンあたりの価格',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: '希釈率',
    unitDilution: '%',
    resultBadge: 'ペイント計算',
    labelPaint: 'ペイントのリットル数',
    labelPaintGal: 'ペイントのガロン数',
    labelCost: '総コスト',
    labelWater: '希釈液',
    labelWaterGal: '希釈液',
    labelTotalVolume: '総混合量',
    labelTotalVolumeGal: '総混合量',
    labelCurrency: '通貨',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '¥',
  },
};
