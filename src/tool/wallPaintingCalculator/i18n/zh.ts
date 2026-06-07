import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wall-painting-calculator';
const title = '墙面油漆与稀释优化计算器';
const description =
  '精确计算墙面所需的升数或加仑数油漆。根据涂层、表面类型和稀释率进行调整，在购买前获取真实成本。';

const faqData = [
  {
    question: '如何计算所需油漆的精确用量？',
    answer:
      '将墙面面积乘以涂层数，然后除以油漆的覆盖率（每升或每加仑的平方米或平方英尺）。请先从总面积中减去门窗面积。',
  },
  {
    question: '标准房间需要多少油漆？',
    answer:
      '一个12平方米、天花板高2.5米的房间，墙面面积约为30平方米。两遍涂刷，每升覆盖12平方米，大约需要5升油漆。',
  },
  {
    question: '涂刷前需要稀释油漆吗？',
    answer:
      '水性乳胶漆通常可以直接使用，或者第一遍需要加5%到10%的水。搪瓷漆或油性漆通常需要罐上标注的特定溶剂。',
  },
  {
    question: '到底需要刷几遍？',
    answer:
      '新的或吸水性强的表面需要底漆加两遍面漆。在已涂漆的墙面上刷相近颜色，通常只需要一到两遍。',
  },
  {
    question: '需要扣除门窗面积吗？',
    answer:
      '是的。测量每个开口并从墙面总面积中扣除。快速估算规则：每扇门约2平方米，每扇窗约1.5平方米。',
  },
  {
    question: '表面类型会影响覆盖率吗？',
    answer:
      '是的。光滑处理过的墙面每升可覆盖高达14平方米。粗糙的混凝土、纹理灰泥或吸水性砖块可能将覆盖率降低到每升6到8平方米。',
  },
];

const howToData = [
  {
    name: '测量墙面',
    text: '测量每面墙的宽度和高度。相乘得到每面墙的面积，然后全部相加。',
  },
  {
    name: '扣除开口',
    text: '测量门窗并从总面积中扣除它们的面积，得到实际需要涂刷的表面积。',
  },
  {
    name: '选择油漆类型',
    text: '在计算器中选择油漆类型。哑光乳胶漆、半光乳胶漆和搪瓷漆具有不同的覆盖率和稀释建议。',
  },
  {
    name: '设定遍数和价格',
    text: '输入计划涂刷的遍数和每升或每加仑的价格。计算器将返回精确的用量和总成本。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: '油漆计算器：只买你需要的量',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '不计算就刷漆通常会导致<strong>半罐剩余的油漆</strong>或紧急去商店补货。原因很简单：油漆的覆盖率随表面孔隙率、颜色变化和涂刷遍数而变化。光滑且已涂过漆的墙面每升可覆盖高达14平方米，而粗糙的纹理墙可能会吸收同样多的油漆却只覆盖6平方米。',
    },
    {
      type: 'stats',
      items: [
        { value: '高', label: '标准覆盖率', icon: 'mdi:format-paint' },
        { value: '2遍', label: '推荐', icon: 'mdi:layers' },
        { value: '5-10%', label: '典型稀释率', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '油漆覆盖率的真实工作原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '制造商在罐上标注的是理论覆盖率。这个数字假设在理想条件下，由专业人士使用滚筒在完全光滑、不吸水、白色的表面上施工。在现实世界中，<strong>多孔墙面、深色和DIY施工</strong>会将这个覆盖率降低20%到40%。我们的计算器让你选择符合实际的参数，避免用料不足。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '哑光乳胶漆',
          description: '最常见的室内选择。遮盖力高，容易修补，大多数品质可擦洗。',
          icon: 'mdi:palette',
          points: ['标准室内覆盖率', '稀释：加5%到10%的水', '最适合：客厅和卧室'],
        },
        {
          title: '半光乳胶漆',
          description: '轻微光泽的饰面，对湿气和污渍的抵抗力更强。无痕修补相对困难。',
          icon: 'mdi:brightness-6',
          points: ['略高的覆盖率', '稀释：加5%的水', '最适合：厨房和浴室'],
        },
        {
          title: '搪瓷漆',
          description: '坚硬耐用的饰面，适用于木制品、暖气片和高流量区域。需要溶剂或专用稀释剂。',
          icon: 'mdi:spray',
          points: ['坚硬耐用的饰面', '稀释：加10%到15%的溶剂', '最适合：门、窗框和家具'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '实用的表面积测量',
      icon: 'mdi:ruler-square',
      badge: '提示',
      html: '<p style="margin:0">将每面墙的宽度乘以高度。快速估算时，将所有宽度相加再乘以房间高度。然后每扇标准门扣除约2平方米，每扇窗扣除约1.5平方米。</p>',
    },
    {
      type: 'title',
      text: '稀释和施工规则',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '新表面或修补过的表面第一遍漆总是需要轻微稀释，以便油漆渗透和附着。面漆应不稀释或使用制造商指示的最低稀释量施工。<strong>过度稀释会破坏颜料</strong>，留下需要额外一遍的透明斑块。',
    },
    {
      type: 'summary',
      title: '为什么购买前要计算',
      items: [
        '避免油漆在罐中干涸变成废弃物。',
        '防止不同时期购买的批次之间出现色差。',
        '精确预算：了解包含底漆和工具的实际成本。',
        '一次性规划好工作，不因补充材料而中断。',
      ],
    },
  ],
  ui: {
    sectionTitle: '表面与油漆',
    labelMetric: '公制',
    labelImperial: '英制',
    labelArea: '待涂刷总面积',
    labelAreaFt: '待涂刷总面积',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: '油漆覆盖率',
    labelYieldFt: '油漆覆盖率',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: '选择油漆类型',
    btnPlasticMatTitle: '哑光乳胶漆',
    btnPlasticMatSub: '哑光 · 加水5%',
    btnPlasticSatinTitle: '半光乳胶漆',
    btnPlasticSatinSub: '半光 · 加水5%',
    btnEnamelTitle: '搪瓷漆',
    btnEnamelSub: '搪瓷 · 加溶剂10%',
    labelCoats: '涂刷遍数',
    unitCoats: '遍',
    labelPrice: '每升价格',
    labelPriceFt: '每加仑价格',
    unitPrice: '/升',
    unitPriceGal: '/gal',
    labelDilution: '稀释百分比',
    unitDilution: '%',
    resultBadge: '油漆计算',
    labelPaint: '油漆升数',
    labelPaintGal: '油漆加仑数',
    labelCost: '总成本',
    labelWater: '稀释液',
    labelWaterGal: '稀释液',
    labelTotalVolume: '总混合量',
    labelTotalVolumeGal: '总混合量',
    labelCurrency: '货币',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '¥',
  },
};
