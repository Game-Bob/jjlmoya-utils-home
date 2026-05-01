import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'solar-panel-calculator';
const title = 'ソーラーパネル傾斜角計算機';
const description =
  '緯度に基づいてソーラーパネルの最適な傾斜角を計算します。固定設置および季節ごとの調整値を取得できます。';

const faqData = [
  {
    question: '屋根の傾斜が理想的でない場合はどうなりますか？',
    answer:
      '大きな問題ではありません。5〜10度のズレによる損失は年間発電量の3%未満です。正確な角度にこだわるよりも、パネルの一部が影にならないようにすることの方が重要です。',
  },
  {
    question: '最適な角度は世界中どこでも同じですか？',
    answer:
      'いいえ、緯度によって異なります。東京（約35°N）の最適角は、オーストラリアのシドニー（約34°S）やノルウェーのオスロ（約60°N）とは異なります。',
  },
  {
    question: 'パネルはどちらの方向を向くべきですか？',
    answer:
      '北半球では常に南向き（方位角180°）です。南半球では北向きです。東西に向けると最適方向に対して15〜20%の損失が生じる可能性があります。',
  },
  {
    question: '太陽熱温水器にも使えますか？',
    answer:
      'はい。傾斜角の計算式は太陽熱コレクターも太陽光発電パネルも同じ幾何学的原理に基づいています。',
  },
];

const howToData = [
  {
    name: '緯度を入力する',
    text: 'お住まいの地域の緯度を十進法で入力するか、位置情報取得ボタンを使用して自動検出します。',
  },
  {
    name: '最適な角度を確認する',
    text: '年間の最適角度は、固定設置の際の主要な参照値です。',
  },
  {
    name: '季節ごとに調整する（オプション）',
    text: '架台が可動式の場合は、冬と夏の角度を使用して季節ごとの発電量を最大化します。',
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
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
      text: '太陽光発電と傾斜角の科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ソーラーパネルの効率は太陽の光が当たる角度に依存します。パネルが太陽光に対して垂直に近いほど、より多くのエネルギーを取り込むことができます。',
    },
    {
      type: 'summary',
      title: '効率的な設置のポイント',
      items: [
        '年間の最適角度を基本参照値とする。',
        '±5度のズレは年間発電量に大きな影響を与えない。',
        '正確な角度よりも「影を避ける」ことを最優先する。',
        '北半球では常に南向きに設置する。',
      ],
    },
  ],
  ui: {
    labelLatitude: '地理緯度',
    btnLocate: '現在地を取得',
    labelOptimal: '年間最適角度',
    labelEfficiency: '最大効率',
    labelWinter: '冬期',
    labelSummer: '夏期',
    hemisphereNorth: '北半球 — 南に向けて設置',
    hemisphereSouth: '南半球 — 北に向けて設置',
    geoNotAvailable: 'このブラウザでは位置情報が利用できません。',
  },
};
