import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'dew-point-calculator';
const title = '露点计算器';
const description = '根据环境湿度和温度，计算您墙壁表面的冷凝温度。这是一款预防潮湿、保护家居结构健康的重要工具。';

const faqData = [
  {
    question: '露点到底是什么？',
    answer: '露点是空气在冷却过程中，其所含水蒸气凝结成液态水时的温度。相对湿度越高，露点就越接近当前气温。',
  },
  {
    question: '为什么我家的墙角会出现霉菌？',
    answer: '墙角通常是“热桥”所在，墙体温度通常较低。如果该表面温度降至露点以下，就会形成冷凝水。霉菌在这种持续潮湿的环境中会迅速滋生。',
  },
  {
    question: '我该如何降低家里的湿度？',
    answer: '最有效的方法是通风（尤其是淋浴或烹饪后）以及使用除湿机。保持室内恒温也有助于让空气容纳更多水蒸气而不会冷凝。',
  },
  {
    question: '因冷凝产生的霉菌危险吗？',
    answer: '是的。霉菌释放的孢子会导致呼吸道疾病、过敏和哮喘。使用此计算器检测冷凝风险是迈向健康家居的第一步。',
  },
];

const howToData = [
  {
    name: '测量温湿度',
    text: '使用温湿度计获取房间内的当前数值。',
  },
  {
    name: '输入数值',
    text: '在计算器中输入摄氏温度和湿度百分比。',
  },
  {
    name: '获取临界温度',
    text: '工具将告知您表面开始冷凝的具体温度。',
  },
  {
    name: '检查墙面',
    text: '如果有激光温度计，请测量墙面温度。如果低于或等于计算结果，说明需要通风或加强保温。',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: '露点计算的 Magnus 近似法',
      url: 'https://zh.wikipedia.org/wiki/露点',
    },
    {
      name: 'WMO 气象仪器与观测方法指南',
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '什么是露点？为什么它对您的家居环境至关重要？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '露点是空气中的水蒸气转化为液态水时的温度。在室内环境中，这一数值决定了房屋是健康的还是存在结构性潮湿问题的。当表面温度降至露点以下时，就会产生冷凝水，成为霉菌滋生的温床。',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: '安全温差', icon: 'mdi:shield-check' },
        { value: '40–60%', label: '理想湿度', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: '极度危险', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Magnus Tetens 公式',
          description: '为了实现科学精准的计算，我们采用了世界气象组织 (WMO) 推荐的 Magnus-Tetens 近似法，适用于 0°C 至 50°C 的温度环境。',
          icon: 'mdi:calculator',
          points: ['经 WMO 验证的科学精度', '适用于室内温度范围'],
        },
        {
          title: '热桥与霉菌',
          description: '墙角、窗框和保温不佳的墙壁是家里最冷的地方。如果它们的温度低于露点，冷凝和结霉将无法避免。',
          icon: 'mdi:home-thermometer',
          points: ['墙角是最脆弱的部位', '保温层可有效预防冷凝'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '风险等级',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>低风险 (温差 &gt; 5°C):</strong> 墙壁处于安全状态。 <strong>中风险 (3–5°C):</strong> 需留意墙角和热桥。 <strong>高风险 (1–3°C):</strong> 玻璃和冷区可能出现冷凝，请立即通风。 <strong>极度危险 (&lt; 1°C):</strong> 正在发生冷凝，极易滋生黑霉。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '黄金准则',
      icon: 'mdi:thermometer-alert',
      badge: '专家建议',
      html: '<p>如果墙面温度与<strong>露点温差小于 3°C</strong>，则随时面临冷凝风险。请加强通风，并将相对湿度保持在 40% 到 60% 之间。</p>',
    },
    {
      type: 'summary',
      title: '如何预防冷凝',
      items: [
        '每天通风，尤其是洗澡或做饭后。',
        '将相对湿度保持在 40% 至 60%。',
        '烹饪时务必开启抽油烟机。',
        '避免在没有通风的情况下在室内晾衣服。',
        '对墙壁进行保温处理，避免产生冷表面。',
      ],
    },
  ],
  ui: {
    labelTemperature: '环境温度',
    labelHumidity: '相对湿度',
    labelDewPoint: '露点温度',
    riskLow: '低风险',
    riskMedium: '中风险',
    riskHigh: '高风险',
    riskExtreme: '极度危险',
    riskLowDesc: '温差 > 5°C。表面安全。',
    riskMediumDesc: '温差 3–5°C。留意墙角。',
    riskHighDesc: '温差 1–3°C。立即通风。',
    riskExtremeDesc: '温差 < 1°C。正在冷凝。',
  },
};
