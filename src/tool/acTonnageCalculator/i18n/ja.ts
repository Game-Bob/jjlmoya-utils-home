import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ac-tonnage-calculator';
const title = 'エアコンのトン数と冷却能力計算機';
const description =
  '部屋に必要な正確なエアコンサイズをBTU、フリゴリア、トンで計算します。部屋の広さ、天井の高さ、人数、熱源を入力してください。';

const faqData = [
  { question: '1平方メートルあたりどのくらいのBTUが必要ですか？', answer: '温暖な気候で2.5mの天井の場合、標準基準は1平方メートルあたり600BTUです。天井の高さ、日当たり、人数によって増加します。' },
  { question: 'フリゴリアとは何ですか？', answer: 'フリゴリアはスペインやラテンアメリカで使われる古い冷却単位です。1フリゴリアは約3.968BTU/時に相当します。' },
  { question: 'BTUをトンに変換するには？', answer: '1冷凍トンは12,000BTU/時に相当します。総BTU数を12,000で割ってください。' },
  { question: '天井の高さは影響しますか？', answer: 'はい。2.7mを超える1メートルごとに、冷却必要量が約8%増加します。' },
];

const howToData = [
  { name: '部屋を測定する', text: '長さと幅をメートルで測定し、掛け算して面積を求めます。' },
  { name: '人数と機器を数える', text: '定期的に使用する人数と、コンピューターやテレビなどの熱源を追加します。' },
  { name: '日当たりを選択する', text: '直射日光の量に基づいて、弱い、中程度、強いを選択します。' },
  { name: '推奨を確認する', text: '計算機はどの市場でも購入できるよう、BTU、フリゴリア、トンを表示します。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '必要なエアコンのサイズは？', level: 2 },
    { type: 'paragraph', html: '適切なサイズは、面積、天井の高さ、人数、日当たりによって異なります。この計算機を使用して、正確なBTU、フリゴリア、トンを算出してください。' },
    { type: 'table', headers: ['面積', '推奨BTU', 'トン数', '典型的な使用法'], rows: [['10 m²（小さな寝室）', '6,000～7,000 BTU', '0.5～0.75 t', 'ゲストルーム'], ['15 m²（寝室）', '9,000～10,000 BTU', '0.75～1 t', '主寝室'], ['20 m²（リビング）', '12,000～14,000 BTU', '1～1.25 t', '小さなリビング'], ['30 m²（オープンプラン）', '18,000～21,000 BTU', '1.5～1.75 t', 'スタジオ'], ['40 m²（広いリビング）', '24,000～28,000 BTU', '2～2.5 t', '広いリビング＋ダイニング']] },
    { type: 'title', text: '間違ったサイズを選ぶとお金の無駄に', level: 2 },
    { type: 'paragraph', html: '小さすぎるエアコンは継続的に運転し、設定温度に達せず、コンプレッサーを早期に消耗させます。大きすぎるエアコンは短い冷風を断続的に吹き出し、部屋を冷たく湿ったままにします。' },
    { type: 'stats', items: [{ value: '600', label: 'm²あたりの基本BTU', icon: 'mdi:thermometer' }, { value: '12000', label: 'トンあたりのBTU', icon: 'mdi:snowflake' }, { value: '3.968', label: 'フリゴリアあたりのBTU', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: '部屋の面積', labelRoomSizeFt: '面積', labelCeilingHeight: '天井の高さ', labelCeilingHeightFt: '高さ',
    labelPeople: '人数', labelHeatSources: '熱源', labelSunExposure: '日当たり', labelRoomType: '部屋のタイプ',
    labelCalculate: '計算', labelResult: '結果', labelBtus: 'BTU/h', labelFrigorias: 'フリゴリア', labelTons: 'トン',
    labelRequired: '必要', labelRecommended: '推奨', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'フリゴリア', labelUnitTons: 'トン',
    labelMetric: 'メートル法', labelImperial: 'ヤード・ポンド法', labelRoomCozy: '快適', labelRoomWarm: '暖かい', labelRoomHot: '暑い',
    bdBaseCooling: '基本冷却', bdCeilingHeight: '天井の高さ', bdPeople: '人数', bdHeatSources: '熱源', bdSunRoom: '日当たりと部屋のタイプ',
    sunLight: '弱い', sunMedium: '中程度', sunHeavy: '強い',
    roomBedroom: '寝室', roomLiving: 'リビングルーム', roomKitchen: 'キッチン', roomOffice: 'オフィス', roomServer: 'サーバールーム',
    errorRequired: 'すべての項目を入力してください',
  },
};
