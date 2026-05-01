import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'electricity-tariff-comparator';
const title = '電気料金比較：自由市場 vs 規制料金';
const description =
  'どちらの電気料金プランがあなたに最適かを見つけましょう。消費電力に基づいて自由市場プランと規制プランを比較します。';

const faqData = [
  {
    question: '固定料金プランと市場連動型プラン、どちらが良いですか？',
    answer:
      '固定料金は価格の安定性を提供します。市場連動型は市場価格が安い時に有利ですが、高騰するリスクもあります。このツールでシミュレーションを行ってください。',
  },
  {
    question: '年間消費電力はどこでわかりますか？',
    answer:
      '検針票や電力会社のマイページに記載されている年間使用量（kWh）を確認してください。',
  },
  {
    question: '契約電力とは何ですか？',
    answer:
      '一度に使える電気の上限（kWまたはA）です。高すぎると基本料金が無駄になり、低すぎるとブレーカーが落ちやすくなります。',
  },
];

const howToData = [
  {
    name: '検針票を確認',
    text: '前年１年間の消費量(kWh)と現在の契約容量を確認します。',
  },
  {
    name: '値を入力',
    text: 'スライダーをご自身の実際のデータに合わせます。',
  },
  {
    name: '結果を比較',
    text: '２つのプランの年間推定金額を確認します。',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
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
      text: '電気代を節約するために',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '適切なプランを選択することで、年間で大きな節約が可能になります。',
    },
    {
      type: 'summary',
      title: '節約のヒント',
      items: [
        '定期的に他社のプランと比較する。',
        '無理のない範囲で契約容量を適正化する。',
        '可能であれば安い時間帯に電力をシフトする。',
      ],
    },
  ],
  ui: {
    labelConsumption: '年間消費電力',
    unitKwhYear: 'kWh/年',
    labelPower: '契約容量',
    unitKw: 'kW/A',
    labelMarket: '市場連動・規制プラン',
    labelFree: '固定料金プラン',
    labelAnnualEst: '年間推定金額',
    labelPowerTerm: '基本料金 (固定分)',
    labelEnergyTerm: '電力量料金 (従量分)',
    labelDashboard: 'エネルギーダッシュボード',
    labelMaxPower: '最大使用電力',
    labelMaxPowerEst: '推定ピーク',
    labelCo2: 'CO₂排出量',
    labelCo2Est: '年間推定',
    labelSimulator: 'シナリオシミュレーター',
    labelSolar: '太陽光自己消費',
    labelSolarDesc: 'パネル設置時の節約（30%削減と仮定）',
    labelShift: 'ピークシフト',
    labelShiftDesc: '安い時間帯への移行割合：',
    badgeBetter: 'よりお得な選択肢',
    badgeWorseYear: '年',
    currencySign: '¥',
    monthLabels: '1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
  },
};
