import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'dew-point-calculator';
const title = '露点計算機';
const description = '室温と湿度から結露温度（露点）を計算。壁や窓の結露を防ぎ、カビの発生を抑えて住まいの健康を守るための必須ツールです。';

const faqData = [
  {
    question: '「露点」とは具体的に何ですか？',
    answer: '空気中の水蒸気が水滴（結露）に変わり始める温度のことです。相対湿度が高いほど、露点は現在の気温に近くなります。',
  },
  {
    question: 'なぜ部屋の隅にカビが生えるのですか？',
    answer: '部屋の隅は「熱橋（ヒートブリッジ）」になりやすく、壁の温度が低くなりがちです。壁の表面温度が露点を下回ると、そこに結露が生じます。カビはこの継続的な湿気を好んで増殖します。',
  },
  {
    question: '家の中の湿度を下げるにはどうすればよいですか？',
    answer: '最も効果的なのは換気です（特に換気扇の使用や窓開け）。除湿機の併用も有効です。また、室温を一定に保つことで、空気がより多くの水蒸気を保持できるようになり、結露しにくくなります。',
  },
  {
    question: '結露によるカビは危険ですか？',
    answer: 'はい。カビは呼吸器疾患やアレルギー、喘息の原因となる胞子を放出します。この計算機で結露のリスクを把握することは、健康な住まい環境への第一歩です。',
  },
];

const howToData = [
  {
    name: '温度と湿度を測る',
    text: '室内の現在の温度と湿度を温湿度計で確認します。',
  },
  {
    name: '値を入力する',
    text: '計算機に摂氏温度と湿度のパーセンテージを入力します。',
  },
  {
    name: '限界温度を知る',
    text: '表面で結露が始まる正確な温度が表示されます。',
  },
  {
    name: '表面温度を確認する',
    text: '放射温度計などがあれば壁の温度を測ってみましょう。露点以下であれば、換気や断熱対策が必要です。',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'マグヌス式による露点計算',
      url: 'https://ja.wikipedia.org/wiki/露点',
    },
    {
      name: 'WMO Guide to Meteorological Instruments',
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '露点とは何か？なぜ住まいにおいて重要なのか',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '露点とは、空気中の水蒸気が結露して水滴になる温度のことです。住宅において、この値は「健康な家」と「湿気による構造的問題を抱えた家」の境界線となります。断熱不足の壁などの表面温度が露点を下回ると水滴が発生し、カビの格好の繁殖地となります。',
    },
    {
      type: 'stats',
      items: [
        { value: '差 > 5°C', label: '安全圏', icon: 'mdi:shield-check' },
        { value: '40–60%', label: '理想的な湿度', icon: 'mdi:water-percent' },
        { value: '差 < 1°C', label: '結露の危険', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'マグヌス・テテンの式',
          description: '科学的に正確な露点計算のため、世界気象機関（WMO）が推奨するマグヌス・テテンの近似式を使用しています。',
          icon: 'mdi:calculator',
          points: ['検証された科学的精度', '居住空間の温度域に最適'],
        },
        {
          title: '熱橋とカビの関係',
          description: '部屋の隅やサッシ周りは最も冷えやすい場所です。その温度が露点を下回ると、カビの発生を避けることはできません。',
          icon: 'mdi:home-thermometer',
          points: ['部屋の隅は最も脆い場所', '断熱対策が結露を未然に防ぐ'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'リスクレベル',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>低リスク (差 &gt; 5°C):</strong> 安全な状態です。 <strong>中リスク (3–5°C):</strong> 部屋の隅などに注意が必要です。 <strong>高リスク (1–3°C):</strong> 窓ガラスなどで結露の可能性が高いです。直ちに換気をしてください。 <strong>非常に危険 (差 &lt; 1°C):</strong> 結露が発生しており、黒カビ増殖の緊急リスクがあります。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '黄金のルール',
      icon: 'mdi:thermometer-alert',
      badge: '対策の秘訣',
      html: '<p>壁の表面温度が<strong>露点まで3°Cを切ったら</strong>、結露のリスクが非常に高いです。換気を心がけ、相対湿度を40%〜60%に保ちましょう。</p>',
    },
    {
      type: 'summary',
      title: '結露を防ぐために',
      items: [
        '毎日こまめに換気する（特に風呂上がりや調理後）。',
        '相対湿度を40%〜60%に維持する。',
        'キッチンでは換気扇を活用する。',
        '換気のない室内での洗濯物干しを避ける。',
        '壁を断熱して、冷たい表面を作らないようにする。',
      ],
    },
  ],
  ui: {
    labelTemperature: '周囲温度',
    labelHumidity: '相対湿度',
    labelDewPoint: '露点温度',
    riskLow: '低リスク',
    riskMedium: '中リスク',
    riskHigh: '高リスク',
    riskExtreme: '非常に危険',
    riskLowDesc: '差 > 5°C。表面は安全です。',
    riskMediumDesc: '差 3–5°C。部屋の隅に注意。',
    riskHighDesc: '差 1–3°C。直ちに換気が必要。',
    riskExtremeDesc: '差 < 1°C。結露が発生中。',
  },
};
