import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'humidity-calculator';
const title = '室内湿度与除湿机运行时间估算器';
const description =
  '计算除湿机需要将潮湿房间降至健康湿度水平所需提取的水量。在一个交互式工具中查看预估运行时间、霉菌风险警告和舒适区可视化。';

const faqData = [
  {
    question: '除湿机每天应该运行多长时间？',
    answer:
      '在中等潮湿的房间中，标准家用除湿机通常需要每天运行8到12小时才能将相对湿度维持在50%。在非常潮湿的环境或水灾后，可能需要连续运行24到48小时才能达到基线干燥度。',
  },
  {
    question: '什么室内湿度水平可以防止霉菌？',
    answer:
      '当室内相对湿度保持在60%以下时，霉菌的生长会受到抑制。对人类健康和建筑保护而言，理想的舒适区是相对湿度在40%到50%之间。超过70%的水平会在24到48小时内为霉菌孢子的萌发创造高风险环境。',
  },
  {
    question: '空气能容纳多少水分？',
    answer:
      '空气能容纳的水蒸气量取决于温度。在20摄氏度时，饱和空气每立方米约含17克水。在25摄氏度时，这上升到约每立方米23克。一个25摄氏度、湿度70%的30平方米房间，空气中约含有8升看不见的水分。',
  },
  {
    question: '温度会影响除湿机效率吗？',
    answer:
      '是的。压缩机型除湿机在18摄氏度以上效果最佳。在15摄氏度以下，其性能会下降，因为蒸发器盘管可能会结霜。转轮式除湿机更适合车库或地下室等寒冷空间，因为它们使用化学干燥过程而非冷凝。',
  },
  {
    question: '我需要多大尺寸的除湿机？',
    answer:
      '对于50平方米以下中等潮湿的房间，每天10到12升的机型通常就足够了。对于非常潮湿的房间或50平方米以上的空间，请选择每天20升的机型。洪水或严重潮湿后，每天30升的工业机型将更快地恢复环境。',
  },
  {
    question: '除湿机能烘干衣物吗？',
    answer:
      '可以。带有干衣模式的除湿机可以在从周围空气中提取湿气的同时，高效地在室内烘干衣物。它比滚筒式干衣机耗能更少，并能防止窗户和墙壁上的冷凝水。预计烘干时间与温暖天气下的户外晾晒相似。',
  },
];

const howToData = [
  {
    name: '输入房间面积',
    text: '输入房间的地板面积（平方米）。计算器假设标准天花板高度为2.5米，以估算总空气量。',
  },
  {
    name: '设置温度',
    text: '输入当前的室内温度（摄氏度）。温暖的空气容纳更多湿气，因此温度直接影响需要去除的水量。',
  },
  {
    name: '选择当前湿度',
    text: '使用舒适拨盘或数字输入设置当前的相对湿度百分比。超过60%的数值将以警告色调突出显示。',
  },
  {
    name: '选择目标湿度',
    text: '设置您想要的相对湿度。建议将50%作为舒适和防霉的标准。过敏人群的理想湿度是40%。',
  },
  {
    name: '输入除湿机容量',
    text: '输入您机器的抽湿速率（每天升数）。这通常印在前方标签或用户手册上。',
  },
  {
    name: '查看结果',
    text: '阅读水提取水箱模拟、运行时间估算和霉菌风险横幅，以决定家电的运行时长。',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: '墙壁中隐藏的水分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大多数房主从未意识到，潮湿的空气不仅令人不适，而且代价高昂且危险。一个潮湿的房间可能含有数升看不见的水蒸气。随着时间的推移，这些水分会在寒冷表面凝结，滋养霉菌菌群并降解石膏、油漆和木材。准确了解需要去除多少水以及需要多长时间，是保护您的房屋和健康的第一步。',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: '理想室内湿度', icon: 'mdi:water-percent' },
        { value: '8h', label: '平均每日运行时间', icon: 'mdi:timer-outline' },
        { value: '70%', label: '霉菌风险阈值', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '相对湿度为何重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '相对湿度不是空气中所含的水分，而是相对于该温度下空气可容纳的最大量而言的百分比。温暖的空气就像一块更大的海绵。在30摄氏度时，空气容纳的水分几乎是15摄氏度时的两倍。这就是为什么即使您打开窗户后，房间仍会感到黏腻。水分仍然在那里，只是不那么明显了。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '高湿度',
          description: '相对湿度超过60%。存在霉菌、尘螨和冷凝损坏的风险。',
          icon: 'mdi:alert',
          points: ['窗户和墙壁上的冷凝水', '霉味和微生物滋生', '呼吸道刺激增加', '潮湿空气的热导率导致取暖费用升高'],
        },
        {
          title: '最佳湿度',
          description: '相对湿度在40%到50%之间。舒适、健康且节能。',
          icon: 'mdi:check-circle',
          points: ['寒冷表面无冷凝水', '霉菌孢子保持休眠', '皮肤和呼吸道舒适', '家具和木材保存'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速湿度自查',
      icon: 'mdi:clipboard-check',
      badge: '行动',
      html: '<p style="margin:0">每天早晨检查窗户是否有冷凝水。如果水滴定期出现，说明您的湿度过高。每天运行除湿机12小时，直到冷凝水停止。将设备移到最潮湿的房间，通常是厨房、浴室或地下室。每天清空水箱，每两周清洁一次滤网。</p>',
    },
    {
      type: 'title',
      text: '正确选择除湿机尺寸',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '常见的错误是购买的除湿机对于空间来说太小。一台每天10升的机器放在60平方米潮湿的地下室里，会连续运行却永远无法达到目标湿度。使用此计算器查看您的房间所需的精确抽湿量。如果预估运行时间超过每天20小时，您需要更大容量的机型或更好的通风。',
    },
    {
      type: 'summary',
      title: '如何保持家居干燥',
      items: [
        '使用此计算器确定任何房间所需的精确抽水量。',
        '将室内相对湿度维持在40%到50%之间，以保持健康和舒适。',
        '运行除湿机直到霉菌风险横幅变为绿色。',
        '在水箱满之前将其清空，以防止自动停机。',
        '定期清洁滤网，以保持气流和抽湿率处于最大水平。',
        '在除湿的同时改善房间通风，以获得更快的效果。',
      ],
    },
  ],
  ui: {
    labelRoomSize: '房间面积',
    unitM2: 'm2',
    labelTemperature: '温度',
    unitCelsius: '°C',
    labelCurrentHumidity: '当前湿度',
    labelTargetHumidity: '目标湿度',
    labelCapacity: '除湿机容量',
    unitLitersDay: 'L/天',
    comfortDialTitle: '舒适区',
    comfortCurrent: '当前',
    comfortTarget: '目标',
    tankTitle: '空气中的水分',
    tankLiters: '升',
    runtimeTitle: '预估运行时间',
    runtimeUnitH: '小时',
    runtimeUnitM: '分钟',
    moldRiskTitle: '霉菌风险',
    moldRiskHigh: '高风险',
    moldRiskMedium: '中等风险',
    moldRiskLow: '低风险',
    extractionLabel: '需提取',
    tipEnergy: '在用电非高峰时段运行除湿机可以显著降低电费。',
    tipMold: '将湿度保持在50%以下可防止霉菌孢子在表面萌发。',
    unitPercent: '%',
    badgeHigh: '高',
    badgeMedium: '中',
    badgeLow: '低',
  },
};
