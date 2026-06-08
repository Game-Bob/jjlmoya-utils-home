import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'how-many-lights-per-room';
const title = '住宅照明与流明计算器';
const description =
  '精确计算每个房间所需的流明数和灯泡数量。选择房间类型、尺寸和灯泡类型，即可获得包含实时照度估算的专业照明方案。';

const faqData = [
  {
    question: '客厅需要多少流明？',
    answer:
      '对于一般客厅，地面照度目标约为150勒克斯。将房间面积（平方米）乘以150，即可得出所需流明数。20平方米的房间大约需要3000流明。',
  },
  {
    question: '勒克斯和流明有什么区别？',
    answer:
      '流明衡量灯泡发出的总光量。勒克斯衡量实际到达某一表面的光量。天花板较高或墙壁较暗的房间需要更多流明才能达到相同勒克斯水平，因为光线会因距离和吸收而损失。',
  },
  {
    question: 'LED灯泡真的省电吗？',
    answer:
      '是的。LED灯泡每瓦约产生100流明，而白炽灯泡仅约15流明。10瓦LED灯泡的亮度与60瓦白炽灯泡相当，但耗电量仅为其六分之一。',
  },
  {
    question: '房间颜色如何影响照明需求？',
    answer:
      '深色墙壁和天花板会吸收光线。在深色表面的房间中，您可能需要比标准建议多50%的流明。',
  },
  {
    question: '阅读需要多少勒克斯？',
    answer:
      '舒适阅读需要页面照度达到300至500勒克斯。一般环境照明通常提供150至200勒克斯，因此请在阅读位置附近添加一盏台灯以补充亮度。',
  },
  {
    question: 'LED灯泡可以调光吗？',
    answer:
      '只有标有可调光字样的LED灯泡才能调光。普通LED连接调光器时可能会闪烁或缩短寿命。安装前务必检查包装上的可调光标志。',
  },
];

const howToData = [
  {
    name: '选择房间类型',
    text: '选择房间功能。厨房和办公室比卧室或走廊需要更明亮的光线。',
  },
  {
    name: '输入尺寸',
    text: '输入房间的宽度、长度和天花板高度。计算器将据此计算室形指数和照明利用系数。',
  },
  {
    name: '选择灯泡类型和数量',
    text: '选择您偏好的灯泡技术和现有灯具数量。计算器会告诉您是否需要更多灯泡。',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: '住宅照明设计与流明规划完整指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '恰当的照明能把房子变成家。除了美观之外，合适的光量还会影响情绪、生产力，甚至眼睛健康。<strong>我们的住宅照明计算器</strong>会综合考虑房间大小、天花板高度、表面颜色和灯泡类型，帮助您精确计算每个房间所需的流明数。',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: '推荐照度范围', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED效率', icon: 'mdi:lightbulb' },
        { value: '80%', label: '维护系数', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '温馨环境照明',
          description: '适用于客厅和卧室。营造舒适氛围，并在夜间减轻眼睛疲劳。',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', '暖色温（2700K）', '多个可调光光源'],
        },
        {
          title: '明亮任务照明',
          description: '厨房、办公室和浴室必备。为精细工作提供清晰视野。',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', '冷白色（4000K）', '聚焦工作台面'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '为什么房间尺寸很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '光线会随着距离扩散而减弱。一盏在2.5米天花板下足够明亮的灯泡，在4米天花板下可能显得太暗。计算器通过室形指数公式来考虑这一点，该公式同时参考地板面积和安装高度，以估算实际到达工作面的光量。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速参考照度表',
      icon: 'mdi:table',
      badge: '参考',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>客厅</strong> → 150 lux</li><li><strong>厨房</strong> → 300 lux</li><li><strong>卧室</strong> → 100 lux</li><li><strong>浴室</strong> → 200 lux</li><li><strong>办公室</strong> → 500 lux</li><li><strong>走廊</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: '优化照明的专业建议',
      items: [
        '将三种照明叠加使用：环境照明、任务照明和重点照明。',
        '使用调光器根据不同时间段调整亮度。',
        '选择LED灯泡，寿命长且耗电低。',
        '将台灯放在惯用手的另一侧，可避免阴影。',
        '考虑使用智能灯泡，实现自动定时和色温变化。',
      ],
    },
  ],
  ui: {
    sectionTitle: '房间照明计算器',
    labelRoomType: '房间类型',
    labelRoomWidth: '宽度',
    labelRoomLength: '长度',
    labelHeight: '天花板',
    labelBulbType: '灯泡',
    labelBulbWatt: '功率',
    labelFixtures: '灯具',
    labelAmbient: '氛围',
    btnAmbientCozy: '温馨',
    btnAmbientNormal: '普通',
    btnAmbientBright: '明亮',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: '个',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: '目标照度',
    labelCurrentLux: '当前照度',
    labelBulbsNeeded: '所需灯泡',
    labelRoomArea: '面积',
    statusOptimal: '完美',
    statusInsufficient: '太暗',
    statusExcess: '太亮',
    btnLiving: '客厅',
    btnKitchen: '厨房',
    btnBedroom: '卧室',
    btnBathroom: '浴室',
    btnOffice: '办公室',
    btnHallway: '走廊',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: '卤素',
    btnBulbIncandescent: '白炽',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: '该房间的照明平衡完美。',
    tipInsufficient: '请增加灯具或更换更高瓦数的灯泡。',
    tipExcess: '减少灯具或调光以节省能源。',
    labelManualAdjust: '手动调整',
    labelSummary: '您的照明方案',
    labelTotalLumens: '所需总流明',
    labelSuggestedSetup: '推荐配置',
    btnExport: '导出PDF',
  },
};
