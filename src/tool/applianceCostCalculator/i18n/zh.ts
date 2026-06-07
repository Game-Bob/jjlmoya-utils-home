import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'appliance-cost-calculator';
const title = '家电用水用电单次成本计算器';
const description =
  '计算洗衣机、洗碗机和烘干机的真实单次成本。准确查看每次洗涤周期消耗的电费、水费和洗涤剂费用，并发现切换到节能模式可节省多少。';

const faqData = [
  {
    question: '洗衣机一个周期多少钱？',
    answer:
      '典型的节能40°C周期约使用0.45千瓦时电力和40升水。按照欧洲平均价格，每次洗涤成本约为0.10到0.15欧元。强力60°C周期可能超过1.2千瓦时和70升，将每次成本推高至0.30欧元以上。',
  },
  {
    question: '晚上运行洗碗机更便宜吗？',
    answer:
      '如果您的电力供应商采用分时电价，在非高峰时段运行洗碗机可降低30%或更多的能源成本。高峰时段通常是工作日的上午和傍晚。查看您的合同或智能电表数据以确认您的确切非高峰时段。',
  },
  {
    question: '烘干机耗电量大吗？',
    answer:
      '是的。烘干机是家庭中最耗电的电器之一。一次满载可消耗2.5到3.5千瓦时，每次周期成本为0.50到0.80欧元。使用热泵烘干机或在户外晾晒可将此成本降低60%到80%。',
  },
  {
    question: '洗碗机用水量是多少？',
    answer:
      '现代洗碗机出奇地高效。标准节能周期每次仅使用8到12升水，而强力程序可能使用14到16升。这远低于在流动水龙头下手工清洗同样餐具，通常消耗40到60升。',
  },
  {
    question: '使用家电最便宜的时间是什么时候？',
    answer:
      '在分时电价下，最便宜的时段通常是深夜、清晨和周末。这些非高峰时段可能比工作日高峰时段便宜30%到50%。部分供应商还在周末提供免费时段。',
  },
  {
    question: '切换到节能模式真的能省钱吗？',
    answer:
      '绝对可以。节能模式使用更低的温度、更短的加热阶段和更少的水。一整年下来，将洗衣机和洗碗机从标准模式切换到节能模式，根据使用频率和当地价格，可节省50到100欧元的电费和的水费合计。',
  },
];

const howToData = [
  {
    name: '选择您的家电',
    text: '点击计算器顶部的洗衣机、洗碗机或烘干机图标。每种家电都有不同的能耗和水耗特征。',
  },
  {
    name: '选择洗涤程序类型',
    text: '使用节能、标准或强力滑块设置洗涤程序。节能使用更少的能源和水。强力使用最多。',
  },
  {
    name: '输入当地价格',
    text: '输入每千瓦时电价和每升水价。您可以在水电账单或供应商网站上找到这些信息。',
  },
  {
    name: '设置使用频率',
    text: '输入您每周运行多少次。这使计算器能够估算您的年度成本和潜在的年节省金额。',
  },
  {
    name: '选择使用时段',
    text: '选择您计划运行家电的时段。高峰时段以红色高亮显示。非高峰时段为绿色，如果您采用分时电价则更便宜。',
  },
  {
    name: '开启洗涤剂费用',
    text: '如果您希望收据包含每次洗衣粉、液或胶囊的估算费用，请启用洗涤剂开关。',
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
      text: '每次洗涤的隐性成本',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大多数人完全不知道洗衣机一个周期的实际成本是多少。他们看到季度电费账单，就以为家电运行很便宜。事实上，一个每周洗五次的家庭每年仅洗衣就要花费超过200欧元。再加上每周三次洗碗机和每周两次烘干机，年度总额攀升至500欧元以上。这个计算器将每一分钱都拆解清楚，以便您优化使用习惯。',
    },
    {
      type: 'stats',
      items: [
        { value: '0.45', label: '千瓦时节能洗涤', icon: 'mdi:washing-machine' },
        { value: '40升', label: '节能洗涤用水', icon: 'mdi:water' },
        { value: '30%', label: '峰值附加费', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '为什么微小改变会累积',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '单次洗涤中一度温度或几升水看似微不足道。但在一年250次洗涤中，这些微小差异会累积成可观的金额。从60°C降至40°C，每次可减少约40%的能耗。将洗碗机从标准模式切换到节能模式，每次可节省约3升水和0.3千瓦时。这些不是边际收益。它们是在不购买新家电的情况下降低账单的最快方式。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '强力模式',
          description: '最高温度和水量，用于重度污渍。',
          icon: 'mdi:alert',
          points: ['每次1.2到3.5千瓦时', '洗衣机70升', '高峰时段附加费适用', '年度成本最高'],
        },
        {
          title: '节能模式',
          description: '更低温度、优化时长、最少水量。',
          icon: 'mdi:check-circle',
          points: ['每次0.45到1.5千瓦时', '仅8到40升', '非高峰时段可行', '年度成本最低'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '家电快速审计',
      icon: 'mdi:clipboard-check',
      badge: '行动',
      html: '<p style="margin:0">仅在满载时运行洗衣机。对于普通污渍使用节能程序。如果您采用分时电价，将洗碗机设置为22:00后延迟启动。每次使用后清洁烘干机绒毛过滤器以保持效率。天气允许时在户外或晾衣架上晾干衣物。</p>',
    },
    {
      type: 'title',
      text: '分时电价与峰值定价',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '许多电力供应商现在根据一天中的不同时段收取不同费率。高峰时段，通常是工作日的上午和傍晚，可能比非高峰时段贵30%到50%。20:00运行的一次洗涤可能花费0.18欧元，而同一洗涤在02:00仅需0.12欧元。一年下来，正确安排家电使用时间可在不改变其他习惯的情况下节省50到100欧元。本计算器以红色高亮高峰时段，以绿色显示非高峰时段，以便您提前规划。',
    },
    {
      type: 'summary',
      title: '如何降低家电成本',
      items: [
        '使用本计算器找出家电每次周期的真实成本。',
        '尽可能切换到节能模式，可节省高达40%的能源。',
        '运行满载而非部分负载，以最大化效率。',
        '如果您的电价支持分时定价，将周期推迟至非高峰时段。',
        '在户外晾干衣物，而非使用烘干机，可完全消除其成本。',
        '定期清洁过滤器和除垢，使家电保持额定效率运行。',
      ],
    },
  ],
  ui: {
    labelAppliance: '家电',
    applianceWasher: '洗衣机',
    applianceDishwasher: '洗碗机',
    applianceDryer: '烘干机',
    labelCycle: '程序',
    cycleEco: '节能',
    cycleNormal: '标准',
    cycleIntensive: '强力',
    labelElectricityPrice: '电价',
    unitPriceKwh: '¥/千瓦时',
    labelWaterPrice: '水价',
    unitPriceLiter: '¥/升',
    labelDetergent: '洗涤剂',
    labelDetergentToggle: '包含洗涤剂费用',
    labelHour: '计划时段',
    peakBadge: '峰值费率生效',
    offPeakBadge: '非峰值费率',
    receiptTitle: '成本明细',
    receiptElectricity: '电费',
    receiptWater: '水费',
    receiptDetergent: '洗涤剂',
    receiptTotal: '每次总成本',
    receiptPerYear: '预计年费用',
    comparisonTitle: '智能切换',
    comparisonText: '从标准切换到节能模式，每次都能省钱。',
    comparisonSavings: '年节省',
    comparisonMonths: '个月洗涤剂',
    badgePeak: '峰值',
    badgeOffPeak: '非峰值',
    unitKwh: '千瓦时',
    unitLiters: '升',
    unitCycles: '年',
    labelCyclesPerWeek: '每周次数',
    currencySign: '¥',
    labelCurrency: '货币',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
