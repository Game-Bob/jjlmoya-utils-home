import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'electricity-tariff-comparator';
const title = '电费套餐对比：自由市场 vs 监管市场';
const description =
  '了解哪种电费套餐最适合您。根据您的实际用电量对比自由市场套餐与监管市场套餐。';

const faqData = [
  {
    question: '固定价格和动态价格哪个更好？',
    answer:
      '固定价格提供可预测性。动态价格（如监管市场）在发电量充沛时可能极低，但存在波动风险。本计算器可帮您做出选择。',
  },
  {
    question: '如何获取我的年用电量？',
    answer:
      '您可以在最新的电费账单中找到“年用电量”(kWh) 这一数值。',
  },
  {
    question: '什么是合同功率？',
    answer:
      '指您可以同时使用的最大电力负荷 (kW)。',
  },
];

const howToData = [
  {
    name: '查看账单',
    text: '查找年用电量 (kWh) 和合同功率 (kW)。',
  },
  {
    name: '调整数值',
    text: '根据您的实际数据调节滑块。',
  },
  {
    name: '对比结果',
    text: '查看两种模式下的预估年支出差异。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
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
      text: '节省您的电力开支',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '选择合适的套餐每年可节省数百元。利用我们的对比工具做出决定。',
    },
    {
      type: 'summary',
      title: '省钱策略',
      items: [
        '定期对比市场上的新套餐。',
        '合理设定合同功率，避免不必要的月租费。',
        '尽量将大功率用电安排在低谷时段。',
      ],
    },
  ],
  ui: {
    labelConsumption: '年用电量',
    unitKwhYear: 'kWh/年',
    labelPower: '合同功率',
    unitKw: 'kW',
    labelMarket: '监管市场 (动态)',
    labelFree: '自由市场 (固定)',
    labelAnnualEst: '预估年支出',
    labelPowerTerm: '功率费 (固定)',
    labelEnergyTerm: '电费 (变量)',
    labelDashboard: '能源面板',
    labelMaxPower: '峰值功率',
    labelMaxPowerEst: '预估峰值',
    labelCo2: '碳足迹',
    labelCo2Est: '预估年排放量',
    labelSimulator: '方案模拟器',
    labelSolar: '太阳能自用',
    labelSolarDesc: '模拟安装电池板后的节省（默认减少 30% 用电）',
    labelShift: '低谷时段转移',
    labelShiftDesc: '转移至低谷时段的比例：',
    badgeBetter: '更佳性价比',
    badgeWorseYear: '年',
    currencySign: '¥',
    monthLabels: '1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
  },
};
