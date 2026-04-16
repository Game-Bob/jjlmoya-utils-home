import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'heating-comparator-gas-vs-heatpump-vs-ac';
const title = '暖房比較：ガス vs エコキュート（ヒートポンプ） vs エアコン';
const description = 'ガス給湯器をエコキュートやエアコンに切り替えた場合の節約額を計算。実際のエネルギー消費量と効率を比較して、最適な住まいづくりをサポートします。';

const faqData = [
  {
    question: 'ヒートポンプと都市ガス、どちらが安いですか？',
    answer: '月々のランニングコストで見ると、ヒートポンプの方が都市ガスよりも大幅に安くなります。効率400%（COP 4）のおかげで、1kWhあたりの熱供給コストは、電気単価が高くてもガスより30%〜50%ほど低く抑えられるのが一般的です。',
  },
  {
    question: 'エコキュート（ヒートポンプ）と普通のエアコンの違いは何ですか？',
    answer: '技術的にはどちらもヒートポンプです。主な違いは熱を伝える媒体です。エコキュートなどは「空気対水」システムで、床暖房やラジエーターのための「水」を温めます。一方、エアコンは「空気対空気」システムで、室内機を通して直接「空気」を温めます。',
  },
  {
    question: '古いラジエーターがある家でもヒートポンプは設置できますか？',
    answer: 'はい、「高温暖房」対応モデルを使用すれば可能です。ただし、最大限の節約効果を得るには、床暖房や低温水用ラジエーターとの組み合わせが理想的です。',
  },
  {
    question: 'ヒートポンプの導入費用は何年で回収できますか？',
    answer: '家の使用状況や補助金にもよりますが、一般的に5〜8年程度で回収できるケースが多いです。太陽光発電と組み合わせれば、この期間をさらに短縮できます。',
  },
];

const howToData = [
  {
    name: '住宅の面積',
    text: '年間の熱需要を推定するために、住宅の延床面積（平方メートル）を入力してください。',
  },
  {
    name: 'エネルギー価格',
    text: 'より正確な計算のために、検針票を確認してガスと電気の単価を調整してください。',
  },
  {
    name: '結果を比較',
    text: '3つのシステムを並べて比較し、効率と年間コストで最適なものを見つけましょう。',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献・リソース',
  bibliography: [
    {
      name: '資源エネルギー庁：省エネポータル',
      url: 'https://www.enecho.meti.go.jp/category/saving_and_new/saving/',
    },
    {
      name: '一般財団法人 ヒートポンプ・蓄熱センター',
      url: 'https://www.hptcj.or.jp/',
    },
    {
      name: '電力・ガス比較サイト（価格.comなど）',
      url: 'https://kakaku.com/energy/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: '暖房システム選びのポイント',
      items: [
        '<strong>ヒートポンプ</strong>はガス給湯器より最大400%効率的です。',
        '<strong>断熱リフォーム</strong>は、どの機器を選ぶよりも光熱費を下げます。',
        '電気システムの<strong>投資回収</strong>は平均6〜8年です。',
        '<strong>太陽光パネル</strong>と組み合わせれば、暖房費をほぼゼロにできます。',
      ],
    },
    {
      type: 'title',
      text: '消費量比較：ガス vs ヒートポンプ vs エアコン',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '住まいに適した空調システムを選ぶことは、家計と快適性の両面で非常に重要な決断です。エネルギー価格が変動し、持続可能性への関心が高まる中、どのシステムが最も効率的で、月々の支払いをどれだけ抑えられるかを知ることは不可欠です。',
    },
    {
      type: 'paragraph',
      html: '日本では長らくガスが主流でした。しかし、<strong>エコキュート等のヒートポンプ（空気対水）</strong>の普及と、<strong>エアコン（空気対空気）</strong>の技術向上により、状況は一変しました。当シミュレーターは、実際のデータに基づいて年間の運用コストを可視化します。',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'ヒートポンプ効率',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: '最高', positive: true },
        },
        {
          label: '年間平均節約額',
          value: '約6万円',
          icon: 'mdi:piggy-bank',
          trend: { value: '推定', positive: true },
        },
        {
          label: '設備寿命',
          value: '20年',
          icon: 'mdi:calendar-check',
          trend: { value: '標準', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. 都市ガス給湯器：従来のスタンダード',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ガス暖房は、燃料を燃やして水を温め、それをラジエーターや床暖房に循環させる仕組みです。',
    },
    {
      type: 'list',
      items: [
        '<strong>効率：</strong> 最新のエコジョーズなどの潜熱回収型であれば、100%に近い効率を誇ります。',
        '<strong>メリット：</strong> すでにインフラが整っている、立ち上がりが早い、1kWhあたりの単価が安定している。',
        '<strong>デメリット：</strong> 化石燃料への依存、基本料金（固定費）の発生、CO2排出。',
      ],
    },
    {
      type: 'title',
      text: '2. ヒートポンプ（エコキュート等）：圧倒的な高効率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '外気から熱エネルギーを取り込み（氷点下でも可能）、それを住まいの給湯や暖房（床暖房等）に利用する技術です。',
    },
    {
      type: 'list',
      items: [
        '<strong>効率（COP）：</strong> 最新システムは平均してCOP 4程度です。これは1kWhの電気を使って、4kWh分の熱を生み出すことを意味します。',
        '<strong>メリット：</strong> 太陽光発電との相性が抜群、1台で冷暖房と給湯をカバー可能、圧倒的な低ランニングコスト。',
        '<strong>デメリット：</strong> 導入費用が高い（ただし5〜8年で回収可能）、室外機の設置スペースが必要。',
      ],
    },
    {
      type: 'tip',
      title: '節約のアドバイス',
      html: 'ヒートポンプは床暖房と組み合わせるのが最も効果的です。普通のラジエーター（60〜70℃）と違い、35℃程度の低温水で十分な暖かさを提供できるからです。',
    },
    {
      type: 'proscons',
      title: 'ヒートポンプ vs ガス給湯器',
      proTitle: 'ヒートポンプを選ぶ理由',
      conTitle: 'ガスを選ぶ理由',
      items: [
        { pro: '圧倒的な効率 (COP 4+)', con: '導入コストが安い' },
        { pro: '化石燃料からの脱却', con: '瞬時に高い熱量を提供' },
        { pro: '1台で冷暖房・給湯', con: '既存の古い設備と相性が良い' },
        { pro: '太陽光パネルと最適', con: '室外機が不要（宅内のみ）' },
      ],
    },
    {
      type: 'title',
      text: '3. エアコン（ヒートポンプ：空気対空気）',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一般的に普及している壁掛けエアコンです。ヒートポンプと同じ原理ですが、水ではなく空気を直接温めます。温暖な地域や、特定の部屋だけを温める場合に最適です。効率（SCOP）は通常3〜3.5程度です。',
    },
    {
      type: 'title',
      text: '計算式の解説',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '公平に比較するため、すべての消費量を「実際に供給された1kWhあたりのコスト」に変換しています。',
    },
    {
      type: 'code',
      code: '年間コスト = (住宅の熱需要 / システム効率) × エネルギー価格',
      ariaLabel: '年間コスト計算式',
    },
    {
      type: 'paragraph',
      html: '各項目の意味：',
    },
    {
      type: 'list',
      items: [
        '<strong>熱需要：</strong> 家を温めるのに1年間に必要な熱量（断熱性能と面積に依存）。',
        '<strong>効率：</strong> ガス 0.95、ヒートポンプ 4.0、エアコン 3.2。',
        '<strong>価格：</strong> 各種税込みの1kWhあたりの単価。',
      ],
    },
    {
      type: 'card',
      title: 'シミュレーション例：100m²の住宅',
      icon: 'mdi:home-analytics',
      html: '<p>年間7,000kWhの暖房が必要な場合：</p><ul><li><strong>ガス：</strong> 約8.5万円/年</li><li><strong>ヒートポンプ：</strong> 約4.5万円/年（約46%節約！）</li><li><strong>エアコン：</strong> 約5.5万円/年</li></ul>',
    },
    {
      type: 'title',
      text: '断熱性能の影響',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'どんなに高性能な暖房器具も、家から熱が逃げてしまえば意味がありません。高価な機器を買う前に、窓や壁の断熱を見直しましょう。断熱が良ければ熱需要が半分になり、機器を小型・安価に抑えられます。',
    },
    {
      type: 'title',
      text: 'ヒートポンプの誤解と真実',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>「寒冷地では使えない」：</strong> 間違いです。近年の機器は-15℃や-20℃でも高い性能を維持します。',
        '<strong>「空気が乾燥する」：</strong> エアコン（温風）特有です。床暖房ならお湯を循環させるので快適です。',
        '<strong>「電気が高いから損」：</strong> 単価はガスより高くても、400%の効率がその差を大幅に逆転させます。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'ご存知ですか？',
      icon: 'mdi:lightbulb-on',
      badge: '豆知識',
      html: '<p>COPは外気温によって変動します。極端な寒さでは効率がやや下がりますが、それでも電気ヒーターやガス暖房よりはるかに高性能です。</p>',
    },
    {
      type: 'title',
      text: '結論：未来は「電化」',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '世界的なトレンドは明確で、家庭の「脱炭素化」です。ガスの価格は長期的に上昇する傾向にあります。太陽光発電とヒートポンプの組み合わせは、今の時代、家計と地球の両方に優しい「正解」の一つです。',
    },
  ],
  ui: {
    titleVivienda: '1. 住宅データ',
    helperVivienda: '住まいの特徴を設定してください',
    labelM2: '延床面積',
    helperM2: '住宅の床面積（平方メートル）。',
    labelAislamiento: '断熱レベル',
    helperAislamiento: 'どれくらい熱を逃がさない家ですか？',
    optExcelent: '優秀（新築 / ZEH / 高断熱）',
    optMedium: '標準（複層ガラス / 一般的断熱）',
    optPoor: '低い（古い住宅 / 無断熱に近い）',
    titleCoste: '2. エネルギー価格',
    descCoste: '直近の検針票で「燃料費調整額」等を含む単価を確認してください。',
    labelGasPrice: 'ガス単価',
    helperGasPrice: 'ガス1kWhあたりの価格。',
    labelElecPrice: '電気単価',
    helperElecPrice: '電気1kWhあたりの価格。',
    titleComparison: '3. 年間ランニングコスト比較',
    descComparison: '各機器の理論上の効率に基づいた推定値です。',
    systemGas: 'ガス給湯・暖房',
    systemAero: 'ヒートポンプ',
    systemAir: 'エアコン',
    labelAnnualCost: '年間暖房費',
    labelEfficiency: 'エネルギー効率',
    labelSource: '熱源',
    labelEnergy: 'エネルギー種別',
    labelInstallation: '設置方式',
    valGasSource: '都市ガス / プロパン',
    valAeroEnergy: '再エネ + 電気',
    valAirInstall: '空気対空気',
    winnerBadge: '最も経済的',
    unitCurrency: '円',
  },
};
