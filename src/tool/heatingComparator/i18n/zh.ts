import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'heating-consumption-comparator';
const title = '暖房方式对比：天然气 vs 空气源热泵 vs 空调';
const description = '计算将燃气锅炉更换为空气源热泵或空调后的省钱金额。为您提供家庭能源消耗与效率的真实对比。';

const faqData = [
  {
    question: '热泵和天然气哪个更便宜？',
    answer: '从每月运行成本来看，热泵明显比天然气便宜。得益于其 400% 的效率（COP 为 4），尽管每度电的价格高于燃气，但每提供 1 kWh 热量的成本通常比燃气低 30% 到 50%。',
  },
  {
    question: '空气源热泵和普通空调有什么区别？',
    answer: '从技术上讲，两者都是热泵。主要区别在于传递热量的媒介：空气源热泵通常是“空气对水”系统（加热暖气片或地暖中的水），而传统空调是“空气对空气”系统（通过内机直接加热空气）。',
  },
  {
    question: '旧暖气片住宅可以安装热泵吗？',
    answer: '可以。通过使用“高温”机型，可以在传统暖气片住宅中安装热泵。但是，为了实现最大程度的节能，结合地暖或低温暖气片是理想的选择。',
  },
  {
    question: '热泵系统需要多少年才能回本？',
    answer: '根据房屋消耗量和补贴政策，投资回收期通常在 5 到 8 年之间。如果结合太阳能光伏板，这个周期可以大幅缩短。',
  },
];

const howToData = [
  {
    name: '房屋面积',
    text: '输入房屋的使用面积（平方米），以估算每年的热量需求。',
  },
  {
    name: '能源价格',
    text: '根据您最近的账单调整天然气和电力的单价，以获得更准确的结果。',
  },
  {
    name: '查看结果',
    text: '并排对比三种系统，找出在效率和年运行成本方面的获胜者。',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与来源',
  bibliography: [
    {
      name: '国际能源署 (IEA)：热泵的未来',
      url: 'https://www.iea.org/reports/the-future-of-heat-pumps',
    },
    {
      name: '能源效率指南',
      url: 'https://energysavingtrust.org.uk/advice/air-source-heat-pumps/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: '选择暖房系统的关键点',
      items: [
        '<strong>空气源热泵</strong>的效率比燃气锅炉高出 400%。',
        '良好的<strong>房屋保温</strong>比更换任何锅炉都更能降低账单。',
        '电力系统的<strong>回收成本</strong>周期大约为 6-8 年。',
        '结合<strong>太阳能板</strong>可实现近乎免费的供暖。',
      ],
    },
    {
      type: 'title',
      text: '能耗对比：天然气 vs 空气源热泵 vs 空调',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '为您的家庭选择合适的供暖系统是一项重要的财务和舒适度决策。在能源价格波动和可持续发展备受关注的背景下，了解哪种系统最有效、每月能省多少钱至关重要。',
    },
    {
      type: 'paragraph',
      html: '历史上，天然气因其便利和价格一直是首选。然而，<strong>空气源热泵 (空气对水)</strong> 的出现和 <strong>空调 (空气对空气热泵)</strong> 技术的提升改变了游戏规则。我们的计算器帮助您基于真实数据实现年运行成本的可视化。',
    },
    {
      type: 'stats',
      items: [
        {
          label: '热泵效率',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: '最佳', positive: true },
        },
        {
          label: '年均大概节省',
          value: '¥3,500',
          icon: 'mdi:piggy-bank',
          trend: { value: '预估', positive: true },
        },
        {
          label: '设备使用寿命',
          value: '20年',
          icon: 'mdi:calendar-check',
          trend: { value: '标准', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. 天然气锅炉：传统标准',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '天然气供暖使用锅炉燃烧燃料来加热水，水随后循环经过暖气片或地暖系统。',
    },
    {
      type: 'list',
      items: [
        '<strong>效率：</strong> 现代冷凝锅炉的效率接近 100%。',
        '<strong>优势：</strong> 安装广泛、升温快且均匀，单位热量成本通常具有竞争力。',
        '<strong>劣势：</strong> 依赖化石燃料、存在燃气月费及 CO2 排放。',
      ],
    },
    {
      type: 'title',
      text: '2. 空气源热泵：极致效率 (空气对水)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '热泵是一种从室外空气中提取热能（即使在零下温度）并将其转移到室内用于加热水或空气的技术。',
    },
    {
      type: 'list',
      items: [
        '<strong>效率 (COP)：</strong> 热泵系统平均 COP 为 4。这意味着每消耗 1 kWh 的电力，可向房屋提供 4 kWh 的热量。',
        '<strong>优势：</strong> 结合太阳能则是完全的可持续能源，一套设备兼顾冷暖，运行成本市场最低。',
        '<strong>劣势：</strong> 初始投资高（尽管在 5-8 年内回本），且需要室外机安装空间。',
      ],
    },
    {
      type: 'tip',
      title: '省钱小贴士',
      html: '空气源热泵在结合地暖时表现最出色，因为水温只需加热到 35°C 左右，而传统暖气片需要 60-70°C。',
    },
    {
      type: 'proscons',
      title: '热泵 vs 天然气锅炉',
      proTitle: '为何选择热泵？',
      conTitle: '为何选择燃气？',
      items: [
        { pro: '无敌的效率 (COP 4+)', con: '安装成本更低' },
        { pro: '摆脱化石燃料', con: '大功率瞬时供热' },
        { pro: '兼顾制冷与采暖', con: '兼容旧款暖气片' },
        { pro: '结合太阳能的理想之选', con: '无需室外机组' },
      ],
    },
    {
      type: 'title',
      text: '3. 空调 (空气对空气热泵)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '即我们常说的“分体空调”。它使用与热泵相同的热力学循环，但直接加热空气而不是水。是温和气候地区或辅助供暖的常见方案。其效率 (SCOP) 通常在 3 到 3.5 之间。',
    },
    {
      type: 'title',
      text: '理解计算公式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '为了公平对比，我们将所有消耗转化为单位有效热量成本：',
    },
    {
      type: 'code',
      code: '年度成本 = (房屋热需求 / 系统效率) × 能源价格',
      ariaLabel: '年运行成本计算公式',
    },
    {
      type: 'paragraph',
      html: '其中：',
    },
    {
      type: 'list',
      items: [
        '<strong>热需求：</strong> 房屋每年需要的热量 (取决于保温和面积)。',
        '<strong>效率：</strong> 燃气为 0.95，热泵为 4.0，空调为 3.2。',
        '<strong>能源价格：</strong> 含税单价。',
      ],
    },
    {
      type: 'card',
      title: '真实案例：100m² 房屋',
      icon: 'mdi:home-analytics',
      html: '<p>假设一个房屋每年需要 7,000 kWh 的热量：</p><ul><li><strong>天然气：</strong> 约 ¥5,300/年</li><li><strong>热泵：</strong> 约 ¥2,800/年 (节省约 46%)</li><li><strong>空调：</strong> 约 ¥3,500/年</li></ul>',
    },
    {
      type: 'title',
      text: '保温的重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果房屋漏风，任何供暖系统都不会高效。在投入重金购买新系统前，请检查您的窗户和墙体保温。良好的保温可以将热需求减半。',
    },
    {
      type: 'title',
      text: '关于热泵的误区',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>“严寒环境下不工作”：</strong> 错误。现代机组在 -15°C 甚至 -20°C 仍能保持良好运行。',
        '<strong>“会让空气干燥”：</strong> 仅限空调。地暖系统非常舒适。',
        '<strong>“电费太贵不划算”：</strong> 虽然电单价比燃气贵，但 400% 的效率完全抵消了单价差。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '您知道吗？',
      icon: 'mdi:lightbulb-on',
      badge: '科普',
      html: '<p>COP 会随室外温度变化。严寒时效率会略降，但仍远高于任何电加热或燃气锅炉。</p>',
    },
    {
      type: 'title',
      text: '结论：未来是电能的时代',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '欧洲及全球趋势很明确：家庭脱碳。天然气价格长期看涨。太阳能光伏与热泵的结合是目前最完美的家庭能源解决方案。',
    },
  ],
  ui: {
    titleVivienda: '1. 房屋数据',
    helperVivienda: '配置您的房屋特征',
    labelM2: '总面积',
    helperM2: '房屋的使用面积（平方米）。',
    labelAislamiento: '保温等级',
    helperAislamiento: '房屋的保温性能如何？',
    optExcelent: '优秀 (新房 / 被动房标准)',
    optMedium: '中等 (双层玻璃 / 标准保温)',
    optPoor: '较差 (旧房 / 无墙体保温)',
    titleCoste: '2. 能源成本',
    descCoste: '请查看您最近账单上的单价。',
    labelGasPrice: '燃气单价',
    helperGasPrice: '每立方米或每度燃气的价格。',
    labelElecPrice: '电力单价',
    helperElecPrice: '每度电的价格。',
    titleComparison: '3. 年度运行成本对比',
    descComparison: '基于各设备技术效率的估算值。',
    systemGas: '燃气锅炉',
    systemAero: '空气源热泵',
    systemAir: '空调/分体热泵',
    labelAnnualCost: '采暖支出',
    labelEfficiency: '能效',
    labelSource: '热源',
    labelEnergy: '能源类型',
    labelInstallation: '安装方式',
    valGasSource: '管道天然气',
    valAeroEnergy: '可再生能源 + 电能',
    valAirInstall: '空气对空气',
    winnerBadge: '效能冠军',
    unitCurrency: '¥',
  },
};
