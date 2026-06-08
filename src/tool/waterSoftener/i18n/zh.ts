import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-softener';
const title = '家用软水机与盐耗优化计算器';
const description =
  '分析您的水质硬度水平，计算最佳软水机设置并估算年度盐耗量。在这个交互式工具中查看水垢影响预测、盐补充时间表和电器寿命预测。';

const faqData = [
  {
    question: '什么是水的硬度？',
    answer:
      '水的硬度是指自来水中的溶解钙和镁矿物质浓度。它以每加仑格令或法国度来测量。硬水会导致管道中形成水垢，降低加热效率并缩短电器寿命。',
  },
  {
    question: '软水机是如何工作的？',
    answer:
      '软水机使用离子交换树脂珠将钙和镁离子替换为钠离子。当树脂饱和时，系统通过向水箱中冲洗盐水溶液来进行再生，恢复树脂珠并将硬矿物质排入下水道。',
  },
  {
    question: '软水机每年使用多少盐？',
    answer:
      '一个典型的四口之家在中等硬度水质条件下每年使用80至120公斤盐。水质非常硬或家庭人数更多时，这一数值可能超过200公斤。现代高效软水机比旧型号少用约30%的盐。',
  },
  {
    question: '我应该多久补充一次盐箱？',
    answer:
      '大多数盐水箱需要每4到8周补充一次。每月检查盐量。如果盐箱少于三分之一满，请添加一袋新的25公斤盐。切勿让盐完全耗尽，否则树脂会重新硬化并失去效力。',
  },
  {
    question: '硬水真的会损坏电器吗？',
    answer:
      '是的。水垢沉积在加热元件上会迫使它们更努力地工作，从而增加能源费用并导致过早故障。在硬水非常严重的地区，热水器的预期寿命可能缩短多达45%。洗衣机和洗碗机也会因阀门堵塞和滚筒结垢而受损。',
  },
  {
    question: '软化后的水可以饮用吗？',
    answer:
      '软化水对大多数人来说是安全可饮用的。钠含量的增加很小，大约相当于每天一片面包。然而，严格限制低钠饮食的人可能更倾向于使用单独的未软化水龙头作为饮用水，或选择基于钾的软水盐。',
  },
];

const howToData = [
  {
    name: '输入您的水质硬度',
    text: '从您的水质报告或测试条中输入硬度数值。在单位选择器中选择每加仑格令或法国度。',
  },
  {
    name: '设置家庭人数',
    text: '选择您家中居住的人数。居住人数越多，用水量越大，盐消耗也越快。',
  },
  {
    name: '选择软水机容量',
    text: '输入软水机树脂罐的格令容量。这通常印在控制阀或用户手册上。常见数值为24,000或32,000格令。',
  },
  {
    name: '查看硬度类别',
    text: '阅读交互式硬度标尺，了解您的水质属于软水、中等硬水还是极硬水。',
  },
  {
    name: '查看盐消耗预测',
    text: '查看盐袋堆叠模拟器，了解您每年需要多少袋25公斤盐以及下次补充的时间。',
  },
  {
    name: '检查电器影响',
    text: '将您的洗衣机、热水器和咖啡机的基准寿命与当前未处理硬水下的预估寿命进行比较。',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: '硬水的隐形成本',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '硬水是家庭中最昂贵的隐性烦恼之一。每次您打开水龙头，溶解的矿物质就会流经管道和电器。经过数月甚至数年，这些矿物质会结晶成水垢，一种坚硬的白色沉积物，堵塞加热元件、降低流量并破坏橡胶密封圈。结果是更高的能源费用、更短的电器寿命和频繁的维修电话。软水机可以从源头上消除这种损害。',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: '年均盐耗量', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: '洗衣机基准寿命', icon: 'mdi:washing-machine' },
        { value: '0.15', label: '每GPG每年水垢毫米数', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '水垢为何具有如此大的破坏力',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '水垢不仅仅是水壶上的美观污渍。在热水器内部，它会在加热元件上形成隔热层。每增加一毫米水垢，热传递效率就会下降多达10%。这意味着三毫米的水垢涂层可能使您的热水费用增加近30%。在洗衣机中，水垢会阻碍洗涤剂活化，因此您需要使用更多洗衣粉却得到更差的效果。在咖啡机中，它会损坏温控器并产生苦涩、不均匀的萃取。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '未处理的硬水',
          description: '矿物质在整个管道系统和每个连接的电器中自由沉积。',
          icon: 'mdi:alert',
          points: ['加热器和锅炉中快速形成水垢', '洗涤剂和肥皂用量增加', '电器寿命缩短30%至45%', '水垢的隔热效应导致能源费用更高'],
        },
        {
          title: '软化后的水',
          description: '钙和镁在进入点就被去除，不会到达水龙头和电器。',
          icon: 'mdi:check-circle',
          points: ['加热元件上无水垢沉积', '正常剂量的洗涤剂即可产生更好的效果', '电器达到其设计的完整使用寿命', '降低热水加热的能耗'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速硬水检测',
      icon: 'mdi:clipboard-check',
      badge: '操作',
      html: '<p style="margin:0">用一个透明瓶子装满自来水，加入几滴液体肥皂。用力摇晃。如果水保持浑浊且产生的泡沫很少，说明您的水是硬水。清澈透明且有厚实稳定泡沫的水表示软水。要获得精确测量，请使用总硬度测试条或向您的水务供应商索取报告。</p>',
    },
    {
      type: 'title',
      text: '正确确定盐供应量',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '盐耗尽是毁坏软水机最快的方式。当盐水箱空了，树脂床会在几天内重新硬化，系统将停止保护您的家庭。使用此计算器精确预测您每年需要多少袋25公斤盐。如果结果超过10袋，请考虑升级到更大容量的树脂罐，或使用每个再生周期耗盐量更少的高效阀门。',
    },
    {
      type: 'summary',
      title: '如何保护您的家庭免受硬水侵害',
      items: [
        '使用此计算器查找您确切的水质硬度类别和盐需求量。',
        '在主供水入口处安装尺寸合适的软水机。',
        '在盐水箱降至三分之一以下之前进行补充。',
        '使用高纯度蒸发盐颗粒以获得最佳的树脂性能。',
        '每3至5年对阀门和树脂床进行维护。',
        '监控电器能源费用是否突然增加，这可能预示着水垢堆积。',
      ],
    },
  ],
  ui: {
    labelHardness: '水质硬度',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: '家庭人数',
    unitPeople: '人',
    labelSoftenerCapacity: '软水机容量',
    unitGrains: '格令',
    hardnessSoft: '软水',
    hardnessSlightly: '微硬',
    hardnessModerate: '中等硬度',
    hardnessHard: '硬水',
    hardnessVery: '很硬',
    hardnessExtreme: '极硬',
    scaleTitle: '水垢堆积速率',
    scaleUnitMetric: '毫米/年',
    scaleUnitImperial: '英寸/年',
    saltTitle: '年度盐耗预测',
    saltAnnual: '年度盐耗',
    saltBags: '每年袋数',
    saltDaysPerBag: '每袋天数',
    saltWeeksPerBag: '每袋周数',
    applianceTitle: '电器使用寿命',
    applianceWasher: '洗衣机',
    applianceHeater: '热水器',
    applianceCoffee: '咖啡机',
    applianceBaseline: '使用软水时',
    applianceWithHardness: '使用硬水时',
    applianceSaved: '年',
    badgeSaved: '延长了',
    labelUnitSystem: '单位制',
    btnMetric: '公制',
    btnImperial: '英制',
  },
};
