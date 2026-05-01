import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-saving-calculator';
const title = 'LED节电与省钱计算器';
const description =
  '计算将传统灯泡更换为LED后，您可以节省多少钱和电量。发现您的精确年省钱金额、月省钱金额及CO2减排量。';

const faqData = [
  {
    question: 'LED灯泡到底能省多少钱？',
    answer:
      '与白热灯相比，LED灯泡可节省80%至90%的能源。例如，将60W灯泡更换为9W，可在保持相同亮度的同时，将电费支出降至最低。',
  },
  {
    question: '更换LED灯泡的成本多久能回本？',
    answer:
      '由于LED目前的成本较低且节能效果显著，在正常使用情况下，投资通常在不到4个月内就能收回。如果灯开启时间很长，回本速度会更快。',
  },
  {
    question: '如果我换一个瓦数更大的LED灯泡会怎样？',
    answer:
      'LED产生的热量非常少，因此您可以在以前受热量限制的灯具中安装更高流明的LED灯泡，只要符合灯座的电气限制即可。',
  },
  {
    question: 'LED寿命真的有包装盒上说的那么长吗？',
    answer:
      '优质LED的寿命在15,000到50,000小时之间。在每天平均使用4小时的家庭中，这意味着一个灯泡可以使用超过15年。',
  },
  {
    question: '我可以在带调光器的灯具上使用LED吗？',
    answer:
      '仅当灯泡明确标注为“可调光”（Dimmable）时。标准LED在旧式调光器上表现不佳，可能会出现闪烁或嗡嗡声。',
  },
  {
    question: '需要更换整个灯具吗？',
    answer:
      '在99%的情况下，不需要。您只需将灯泡更换为具有相同灯头（E27、E14、GU10等）的LED灯泡即可。',
  },
];

const howToData = [
  {
    name: '清点灯泡数量',
    text: '检查家里有多少个白热灯或卤素灯泡，并记录它们的功率（瓦数）。',
  },
  {
    name: '选择等效 LED',
    text: '在计算器中选择当前灯泡类型。系统会自动分配对应的 LED 等效值。',
  },
  {
    name: '设定使用时间',
    text: '输入每天灯泡平均开启的小时数。',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
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
      text: 'LED节能指南：如何大幅削减您的电费支出',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '将传统照明更换为 <strong>LED (发光二极管)</strong> 技术是家庭投资中回报最快、最明显的举措之一。您节省的每一瓦电都直接转化为账单上的金额。一个 9W 的 LED 灯泡能提供与 60W 白热灯相同的亮度，但 <strong>能耗降低了 85%</strong>。',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: '能源节省率', icon: 'mdi:lightning-bolt' },
        { value: '25,000h', label: 'LED 寿命', icon: 'mdi:clock-outline' },
        { value: '< 4 个月', label: '投资回本周期', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '白热灯照明',
          description: '基于灯丝加热的 20 世纪技术。95% 的能量以热量的形式浪费了。',
          icon: 'mdi:lightbulb-outline',
          points: ['95% 能量以热量浪费', '寿命：约 1,000 小时', '运行成本极高'],
        },
        {
          title: '现代 LED 技术',
          description: '当前的家庭节能标准。即开即亮，热量排放极低。',
          icon: 'mdi:led-outline',
          points: ['85–90% 直接节能', '寿命：25,000–50,000 小时', '发热量极低'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '节能背后的科学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '白热灯只将 5% 的电能转化为光。而 LED 通过半导体直接将电能转化为光，效率极高。<strong>不要只看瓦数，要看流明：</strong> 旧的 60W 泡提供约 800 lm；现在用 8-9W 的 LED 就能实现。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速等效表',
      icon: 'mdi:table',
      badge: '参考',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W 白热灯</strong> → LED 5–6W (450 lm)</li><li><strong>60W 白热灯</strong> → LED 8–10W (800 lm)</li><li><strong>100W 白热灯</strong> → LED 13–15W (1500 lm)</li><li><strong>50W 卤素灯</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'LED 除省钱外的优势',
      items: [
        '超长寿命：正常使用下可超过 15 年。',
        '即开即亮：瞬间达到 100% 亮度。',
        '低发热：夏天可减轻空调负担。',
        '绿色环保：无汞及有害气体。',
        '兼容性强：适用于大多数现有灯座。',
      ],
    },
  ],
  ui: {
    sectionTitle: '家庭配置',
    labelBulbs: '要更换的灯泡数量',
    unitBulbs: '个',
    labelType: '当前灯泡类型',
    labelHours: '每天使用时长',
    labelPrice: '电费单价',
    unitPrice: '元/kWh',
    resultBadge: '真实节能计算',
    labelAnnual: '每年省钱金额',
    labelMonthly: '每月',
    labelEfficiency: '节能比例',
    labelCo2: '二氧化碳减排量',
    unitLess: '% 减少',
    currencySign: '¥',
    btnInc60Title: '白热灯',
    btnInc60Sub: '经典 (60W)',
    btnInc40Title: '白热灯',
    btnInc40Sub: '小型 (40W)',
    btnInc100Title: '白热灯',
    btnInc100Sub: '大型 (100W)',
    btnHalo50Title: '卤素灯',
    btnHalo50Sub: '射灯 (50W)',
    usageNever: '几乎不用',
    usageLow: '较少使用',
    usageNormal: '正常使用',
    usageModerate: '中度使用',
    usageHeavy: '频繁使用',
    usagePro: '专业级别使用',
    usageVeryHeavy: '极高频使用',
    usageAlways: '常亮',
  },
};
