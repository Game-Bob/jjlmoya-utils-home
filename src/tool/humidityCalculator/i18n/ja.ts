import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'humidity-calculator';
const title = '室内湿度と除湿機運転時間見積もりツール';
const description =
  '湿気の多い部屋を健康的な湿度レベルにするために、除湿機がどれだけの水分を除去する必要があるかを計算します。推定運転時間、カビリスク警告、快適ゾーンの視覚化を1つのインタラクティブツールで確認できます。';

const faqData = [
  {
    question: '除湿機は1日にどれくらいの時間運転すべきですか？',
    answer:
      '中程度に湿気の多い部屋では、標準的な家庭用除湿機は相対湿度50パーセントを維持するために、通常1日8時間から12時間の運転が必要です。非常に湿気の多い環境や水害後には、基準の乾燥状態に達するために24時間から48時間の連続運転が必要な場合があります。',
  },
  {
    question: 'カビを防ぐ室内湿度レベルはどれくらいですか？',
    answer:
      '室内の相対湿度を60パーセント以下に保つと、カビの繁殖が抑制されます。人の健康と建物の保存にとって理想的な快適ゾーンは、相対湿度40パーセントから50パーセントの間です。70パーセントを超えると、カビの胞子が24時間から48時間以内に発芽するリスクが高まります。',
  },
  {
    question: '空気はどれくらいの水分を含むことができますか？',
    answer:
      '空気が含める水蒸気の量は温度によって異なります。20度のとき、飽和した空気は1立方メートルあたり約17グラムの水分を含みます。25度では、これはおおよそ1立方メートルあたり23グラムに増えます。25度で湿度70パーセントの30平方メートルの部屋には、空気中に見えない水がおおよそ8リットル含まれています。',
  },
  {
    question: '温度は除湿機の効率に影響しますか？',
    answer:
      'はい。コンプレッサー式の除湿機は18度以上で最も効果的に動作します。15度以下では、蒸発器コイルが霜で覆われる可能性があるため、性能が低下します。デシカント式除湿機は、ガレージや地下室のような寒い空間に適しています。これらは結露ではなく化学的な乾燥プロセスを使用するためです。',
  },
  {
    question: 'どのサイズの除湿機が必要ですか？',
    answer:
      '50平方メートルまでの中程度に湿気の多い部屋では、1日10リットルから12リットルの機種で通常十分です。非常に湿気の多い部屋や50平方メートルを超える空間では、1日20リットルの機種を選んでください。洪水や深刻な湿気の後には、1日30リットルの業務用機種が状態をより早く回復させます。',
  },
  {
    question: '除湿機は洗濯物を乾かすことができますか？',
    answer:
      'はい。衣類乾燥モード付きの除湿機は、周囲の空気から湿気を除去しながら、室内で洗濯物を効率的に乾かすことができます。衣類乾燥機よりもエネルギー消費が少なく、窓や壁の結露を防ぎます。暖かい日の外干しと同様の乾燥時間を想定してください。',
  },
];

const howToData = [
  {
    name: '部屋の広さを入力',
    text: '部屋の床面積を平方メートルで入力してください。計算機は標準的な天井高さ2.5メートルを想定し、総空気量を推定します。',
  },
  {
    name: '温度を設定',
    text: '現在の室温を摂氏で入力してください。暖かい空気はより多くの湿気を含むため、温度は除去すべき水分量に直接影響します。',
  },
  {
    name: '現在の湿度を選択',
    text: '快適ダイヤルまたは数値入力を使用して、現在の相対湿度のパーセンテージを設定してください。60パーセントを超える値は警告色で強調表示されます。',
  },
  {
    name: '目標湿度を選択',
    text: '希望する相対湿度を設定してください。快適さとカビ防止には50パーセントが推奨されます。アレルギー体質の方には40パーセントが理想的です。',
  },
  {
    name: '除湿機の容量を入力',
    text: 'あなたの機器の除湿能力を1日あたりのリットル数で入力してください。これは通常、前面のラベルまたは取扱説明書に記載されています。',
  },
  {
    name: '結果を確認',
    text: '水分除去タンクのシミュレーション、運転時間の推定値、カビリスクのバナーを読み、家電をどれくらいの時間運転するかを決定してください。',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: '壁に潜む見えない水分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くの住宅所有者は、湿気の多い空気が不快なだけでなく、高価で危険であることを認識していません。1つの湿気の多い部屋には、見えない水蒸気が数リットル含まれていることがあります。時間とともに、この湿気は冷たい表面に結露し、カビのコロニーを養い、漆喰、塗料、木材を劣化させます。正確にどれだけの水を除去する必要があり、どれくらいの時間がかかるかを理解することは、あなたの家と健康を保護するための第一歩です。',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: '理想的な室内湿度', icon: 'mdi:water-percent' },
        { value: '8h', label: '平均毎日運転時間', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'カビリスクの閾値', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '相対湿度が重要な理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '相対湿度は空気中の水分量ではなく、その温度で空気が含めることのできる最大量に対する水分の割合です。暖かい空気はより大きなスポンジのようなものです。30度の空気は、15度のときの約2倍の湿気を含むことができます。これが、窓を開けた後でも部屋がじめじめと感じる理由です。湿気はまだそこにありますが、目に見えにくくなっているだけです。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '高湿度',
          description: '相対湿度60パーセント以上。カビ、ダニ、結露による損傷のリスクがあります。',
          icon: 'mdi:alert',
          points: ['窓や壁の結露', 'カビ臭と微生物の繁殖', '呼吸器の刺激増加', '湿気の多い空気の熱伝導率による暖房費の上昇'],
        },
        {
          title: '最適湿度',
          description: '相対湿度40パーセントから50パーセントの間。快適で健康的かつ省エネです。',
          icon: 'mdi:check-circle',
          points: ['冷たい表面に結露なし', 'カビの胞子は休眠状態を保つ', '肌と呼吸器の快適さ', '家具と木材の保存'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '簡易湿気診断',
      icon: 'mdi:clipboard-check',
      badge: '対策',
      html: '<p style="margin:0">毎朝窓に結露がないか確認してください。水滴が定期的に現れる場合、湿度が高すぎます。結露が止まるまで、1日12時間除湿機を運転してください。機器を最も湿気の多い部屋、通常は台所、浴室、または地下室に移動させてください。タンクは毎日空にし、フィルターは2週間に1回掃除してください。</p>',
    },
    {
      type: 'title',
      text: '適切な除湿機のサイズ選び',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'よくある間違いは、空間に対して小さすぎる除湿機を購入することです。60平方メートルの湿気の多い地下室に1日10リットルの機種を置いても、目標湿度に到達することなく連続運転し続けます。この計算機を使用して、あなたの部屋に必要な正確な除湿量を確認してください。推定運転時間が1日20時間を超える場合、より大きな容量の機種か、より良い換気が必要です。',
    },
    {
      type: 'summary',
      title: 'お家を乾燥させる方法',
      items: [
        'この計算機を使用して、各部屋に必要な正確な除湿量を決定してください。',
        '健康と快適さのために、室内の相対湿度を40パーセントから50パーセントの間に保ちます。',
        'カビリスクのバナーが緑色になるまで除湿機を運転してください。',
        '自動停止を防ぐため、水タンクが満タンになる前に空にしてください。',
        '風量と除湿率を最大に保つため、フィルターを定期的に掃除してください。',
        '除湿と並行して部屋の換気を改善することで、より早く結果を得られます。',
      ],
    },
  ],
  ui: {
    labelRoomSize: '部屋の広さ',
    unitM2: 'm2',
    labelTemperature: '温度',
    unitCelsius: '°C',
    labelCurrentHumidity: '現在の湿度',
    labelTargetHumidity: '目標湿度',
    labelCapacity: '除湿機の容量',
    unitLitersDay: 'L/日',
    comfortDialTitle: '快適ゾーン',
    comfortCurrent: '現在',
    comfortTarget: '目標',
    tankTitle: '空気中の水分',
    tankLiters: 'リットル',
    runtimeTitle: '推定運転時間',
    runtimeUnitH: '時間',
    runtimeUnitM: '分',
    moldRiskTitle: 'カビリスク',
    moldRiskHigh: 'リスク高',
    moldRiskMedium: 'リスク中',
    moldRiskLow: 'リスク低',
    extractionLabel: '除去対象',
    tipEnergy: '除湿機を電力のピーク時間外に運転すると、電気代を大幅に削減できます。',
    tipMold: '湿度を50パーセント以下に保つことで、カビの胞子が表面で発芽するのを防ぎます。',
    unitPercent: '%',
    badgeHigh: '高',
    badgeMedium: '中',
    badgeLow: '低',
  },
};
