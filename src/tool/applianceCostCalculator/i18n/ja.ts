import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'appliance-cost-calculator';
const title = '家電の水とエネルギー1回分コスト計算機';
const description =
  '洗濯機、食器洗い機、衣類乾燥機の1回分の真のコストを計算します。1サイクルあたりの電気代、水道代、洗剤代が正確にどのくらいかかるかを確認し、エコモードに切り替えることでどれだけ節約できるかを発見してください。';

const faqData = [
  {
    question: '洗濯機の1回分はいくらですか？',
    answer:
      '典型的なエコ40°Cサイクルは約0.45 kWhの電気と40リットルの水を使用します。欧州の平均価格では、1回あたり約0.10〜0.15ユーロです。強力60°Cサイクルは1.2 kWhと70リットルを超えることもあり、1回あたり0.30ユーロを超えます。',
  },
  {
    question: '食器洗い機を夜に回す方が安いですか？',
    answer:
      '電力会社が時間帯別料金を採用している場合、オフピーク時間帯に食器洗い機を運転すると、エネルギー費用を30%以上削減できます。ピーク時間帯は通常、平日の朝と夕方です。正確なオフピーク時間帯を確認するには、契約書やスマートメーターのデータを確認してください。',
  },
  {
    question: '乾燥機は電気をたくさん使いますか？',
    answer:
      'はい。乾燥機は家庭で最も電気を消費する機器の一つです。1回のフルロードで2.5〜3.5 kWhを消費し、1サイクルあたり0.50〜0.80ユーロかかります。ヒートポンプ乾燥機を使用したり、外に洗濯物を干したりすると、この費用を60〜80%削減できます。',
  },
  {
    question: '食器洗い機はどのくらい水を使いますか？',
    answer:
      '現代の食器洗い機は驚くほど効率的です。標準のエコサイクルは1回あたりわずか8〜12リットルの水を使用し、強力プログラムは14〜16リットルを使用します。これは、流し台の蛇口で同じ食器を手洗いする場合よりはるかに少なく、手洗いは通常40〜60リットルを消費します。',
  },
  {
    question: '家電を使うのに一番安い時間帯はいつですか？',
    answer:
      '時間帯別料金では、最も安い時間帯は通常、深夜、早朝、週末です。これらのオフピーク時間帯は、平日のピーク時間帯より30〜50%安くなります。一部の電力会社では週末に無料時間帯も提供しています。',
  },
  {
    question: 'エコモードに切り替えると本当に節約できますか？',
    answer:
      'もちろんです。エコモードは、より低い温度、短い加熱時間、そしてより少ない水を使用します。1年間で、洗濯機と食器洗い機をノーマルからエコに切り替えると、使用頻度と地域の価格によって、電気代と水道代の合計で50〜100ユーロ節約できます。',
  },
];

const howToData = [
  {
    name: '家電を選択',
    text: '計算機の上部にある洗濯機、食器洗い機、または乾燥機のアイコンをタップします。各機器には異なるエネルギーと水の消費プロファイルがあります。',
  },
  {
    name: '運転コースを選ぶ',
    text: '洗濯プログラムを設定するには、エコ、ノーマル、または強力のスライダーを使用します。エコはエネルギーと水をより少なく使用します。強力は最も多く使用します。',
  },
  {
    name: '地域の料金を入力',
    text: '1 kWhあたりの電気代と1リットルあたりの水代を入力します。これらは公共料金の請求書や電力会社のウェブサイトで確認できます。',
  },
  {
    name: '使用頻度を設定',
    text: '1週間に何サイクル実行するかを入力します。これにより、計算機は年間コストと潜在的な年間節約額を推定できます。',
  },
  {
    name: '使用時間を選ぶ',
    text: '機器を運転する予定の時間を選択します。ピーク時間帯は赤色で強調表示されます。オフピーク時間帯は緑色で、時間帯別料金があればより安くなります。',
  },
  {
    name: '洗剤代を表示する',
    text: 'レシートに1サイクルあたりの粉末、液体、またはカプセルの見積もりを含めたい場合は、洗剤のトグルを有効にします。',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: '1回分の隠されたコスト',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ほとんどの人は、洗濯機の1回分が実際にどのくらいかかるかを知りません。四半期の電気料金を見て、家電の運転は安いと思い込んでいます。実際には、週に5回洗濯をする家庭では、洗濯だけで年間200ユーロ以上を費やすことがあります。週に3回の食器洗い機と週に2回の乾燥機を加えると、年間の総額は500ユーロを超えます。この計算機は、あなたの習慣を最適化できるよう、1セントまで分解します。',
    },
    {
      type: 'stats',
      items: [
        { value: '0.45', label: 'kWh エコ洗濯', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'エコ洗濯の水', icon: 'mdi:water' },
        { value: '30%', label: 'ピーク時割増', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'なぜ小さな変化が積み重なるか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '1回のサイクルで1度の温度や数リットルの水は些細なことに思えます。しかし、年間250サイクルを通じて、これらの小さな違いは、深刻な金額に積み重なります。60°Cから40°Cに下げると、1回あたりのエネルギー使用量が約40%削減されます。食器洗い機をノーマルからエコに切り替えると、毎回約3リットルの水と0.3 kWhを節約できます。これらは限界な利益ではありません。新しい家電を購入せずに光熱費を縮小する最速の方法です。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '強力コース',
          description: '重度の汚れに対して最大の熱と水量。',
          icon: 'mdi:alert',
          points: ['1回あたり1.2〜3.5 kWh', '洗濯機は70リットル', 'ピーク時割増が適用', '最も高い年間コスト'],
        },
        {
          title: 'エココース',
          description: 'より低い温度、最適化された時間、最小限の水量。',
          icon: 'mdi:check-circle',
          points: ['1回あたり0.45〜1.5 kWh', 'わずか8〜40リットル', 'オフピーク時間帯が可能', '最も低い年間コスト'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '家電クイック診断',
      icon: 'mdi:clipboard-check',
      badge: 'アクション',
      html: '<p style="margin:0">洗濯機は満タン時のみ使用してください。通常の汚れにはエコプログラムを使用します。時間帯別料金がある場合、食器洗い機を22:00以降に遅延開始するよう設定します。効率を維持するため、毎回のサイクル後に乾燥機の糸くずフィルターを掃除します。天気が許す限り、屋外または物干しで洗濯物を乾燥させます。</p>',
    },
    {
      type: 'title',
      text: '時間帯別料金とピークタイム課金',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '多くの電力会社は、現在、時間帯に応じて異なる料金を請求しています。ピーク時間帯、通常は平日の朝と夕方は、オフピーク時間帯より30〜50%高くなることがあります。20:00に運転した1回の洗濯は0.18ユーロかかる一方、同じ洗濯を02:00に行うとわずか0.12ユーロです。1年間で、家電の運転時間を正しく設定することで、他に何も変更せずに50〜100ユーロ節約できます。この計算機は、事前に計画できるよう、ピーク時間帯を赤色で、オフピーク時間帯を緑色で強調表示します。',
    },
    {
      type: 'summary',
      title: '家電費を削減する方法',
      items: [
        'この計算機を使用して、家電の1回あたりの真のコストを確認してください。',
        '可能な限りエコモードに切り替え、最大40%のエネルギーを節約します。',
        '効率を最大化するため、部分洗いではなく満タンで運転してください。',
        '料金が時間帯別料金をサポートしている場合、サイクルをオフピーク時間帯に遅らせてください。',
        '乾燥機を使用せず、屋外で洗濯物を乾燥させることで、そのコストを完全に排除します。',
        'フィルターを掃除し、定期的に洗浄して、家電が定格効率で運転するようにします。',
      ],
    },
  ],
  ui: {
    labelAppliance: '家電',
    applianceWasher: '洗濯機',
    applianceDishwasher: '食器洗い機',
    applianceDryer: '衣類乾燥機',
    labelCycle: '運転コース',
    cycleEco: 'エコ',
    cycleNormal: '標準',
    cycleIntensive: '強力',
    labelElectricityPrice: '電気料金',
    unitPriceKwh: '¥/kWh',
    labelWaterPrice: '水道料金',
    unitPriceLiter: '¥/L',
    labelDetergent: '洗剤',
    labelDetergentToggle: '洗剤代を含める',
    labelHour: '使用予定時間',
    peakBadge: 'ピーク料金適用中',
    offPeakBadge: 'オフピーク料金',
    receiptTitle: 'コスト内訳',
    receiptElectricity: '電気代',
    receiptWater: '水道代',
    receiptDetergent: '洗剤代',
    receiptTotal: '1回分の合計',
    receiptPerYear: '年間推定',
    comparisonTitle: '賢い切り替え',
    comparisonText: '標準からエコに切り替えると、毎回お金が節約できます。',
    comparisonSavings: '年間節約額',
    comparisonMonths: 'か月分の洗剤',
    badgePeak: 'ピーク',
    badgeOffPeak: 'オフピーク',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: '年',
    labelCyclesPerWeek: '週あたり回数',
    currencySign: '¥',
    labelCurrency: '通貨',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
