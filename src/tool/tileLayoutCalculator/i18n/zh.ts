import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tile-layout-calculator';
const title = '瓷砖布局与损耗计算器';
const description =
  '精准规划房间地板。计算所需瓷砖的确切数量、箱数、总成本，并通过交互式网格预览实时可视化布局。';

const faqData = [
  {
    question: '如何计算房间需要多少瓷砖？',
    answer:
      '测量房间的宽度和长度，选择瓷砖尺寸，并输入填缝宽度。计算器将房间尺寸除以瓷砖加填缝尺寸，得出每行和每列所需瓷砖的确切数量。',
  },
  {
    question: '购买瓷砖时应增加多少损耗百分比？',
    answer:
      '标准矩形房间增加10%损耗。对于角落多、对角线铺设或复杂切割的房间，增加到15%。这可以覆盖破损和切割失误。',
  },
  {
    question: '填缝厚度真的会影响瓷砖数量吗？',
    answer:
      '是的。更宽的填缝会减少每块瓷砖的有效覆盖面积，略微增加所需总数。计算器会自动将其计入每一行和每一列。',
  },
  {
    question: '除了损耗百分比外，我应该多买几箱吗？',
    answer:
      '如果还有货，多买一箱是明智的。不同生产批次的瓷砖可能会有色差，拥有匹配的备件可以让未来维修更无缝。',
  },
  {
    question: '如何给不规则形状的房间铺砖？',
    answer:
      '将房间分成若干小矩形。分别计算每个区域并汇总总数。部分箱数务必向上取整，以确保完全覆盖。',
  },
  {
    question: '陶瓷和瓷砖的损耗有什么区别？',
    answer:
      '瓷砖更致密、更难切割，与标准陶瓷相比，切割损耗可能增加2%至3%。两种材料都应遵循相同的测量流程。',
  },
  {
    question: '未使用的瓷砖可以退货吗？',
    answer:
      '大多数零售商在30天内接受未开封的退货。务必保留收据，在全部铺设完成前不要拆开多余的箱子。',
  },
];

const howToData = [
  {
    name: '测量房间',
    text: '用您喜欢的单位系统记录地面的宽度和长度。',
  },
  {
    name: '选择瓷砖和填缝',
    text: '选择瓷砖尺寸和期望的填缝宽度。',
  },
  {
    name: '计算并可视化',
    text: '将数值输入计算器，调整损耗余量，并查看实时布局预览。',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: '地板瓷砖规划与损耗控制的完整指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '成功的铺砖项目在涂抹第一块粘合剂之前就已经开始了。精确的测量、智能的布局规划以及准确的损耗估算决定了您的翻新是否能按预算和进度完成。<strong>我们的交互式瓷砖布局计算器</strong>将原始尺寸转化为可视平面图，准确显示每行能铺多少块瓷砖、需要购买多少箱以及您的资金去向。',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: '标准损耗', icon: 'mdi:alert-circle' },
        { value: '30+ 年', label: '瓷砖寿命', icon: 'mdi:clock-outline' },
        { value: '48小时', label: '平均安装', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '大规格瓷砖',
          description: '超过60厘米的瓷砖能营造无缝现代感，但需要完全平整的基层，在小房间中会产生更高的切割损耗。',
          icon: 'mdi:arrow-expand',
          points: ['更少的填缝线', '高端视觉效果', '小空间切割损耗更高'],
        },
        {
          title: '小马赛克瓷砖',
          description: '非常适合浴室和复杂图案。能适应不规则形状，但需要更多填缝和施工时间。',
          icon: 'mdi:apps',
          points: ['可灵活避开障碍物', '需要更多填缝', '安装时间更长'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '为什么布局可视化很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在购买前看到瓷砖网格可以避免代价高昂的尴尬。实时预览可以揭示您选择的瓷砖尺寸是否会在边缘留下不美观的窄条，或者是否能创造出平衡、对称的地面。在计算器中调整填缝宽度和瓷砖方向，您可以在下单前从美学和效率两方面优化布局。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速参考覆盖表',
      icon: 'mdi:table',
      badge: '参考',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 厘米</strong> → 每平方米11块</li><li><strong>45 x 45 厘米</strong> → 每平方米5块</li><li><strong>60 x 60 厘米</strong> → 每平方米3块</li><li><strong>60 x 120 厘米</strong> → 每平方米1.5块</li></ul>',
    },
    {
      type: 'summary',
      title: '最小化损耗的专业技巧',
      items: [
        '直线布局多订10%，对角线或人字形布局多订15%。',
        '保留同一生产批次的所有瓷砖箱，以确保颜色一致。',
        '在规划行数前，对角测量房间以检查方正度。',
        '仅在房间宽度大于瓷砖长度时使用大规格瓷砖，以避免过度切割。',
        '箱数务必向上取整，这比二次送货更划算。',
      ],
    },
  ],
  ui: {
    sectionTitle: '房间配置',
    labelRoomWidth: '房间宽度',
    labelRoomLength: '房间长度',
    labelTileWidth: '瓷砖宽度',
    labelTileLength: '瓷砖长度',
    labelGrout: '填缝宽度',
    labelWaste: '损耗余量',
    labelTilesPerBox: '每箱瓷砖数',
    labelPrice: '每箱价格',
    labelPattern: '铺贴方式',
    unitMetricRoom: '米',
    unitImperialRoom: '英尺',
    unitMetricTile: '厘米',
    unitImperialTile: '英寸',
    unitGroutMetric: '毫米',
    unitGroutImperial: '英寸',
    unitPercent: '%',
    unitBoxes: '块',
    unitPrice: '/箱',
    resultBadge: '实时布局预览',
    labelArea: '地面面积',
    labelTiles: '瓷砖总数',
    labelBoxes: '所需箱数',
    labelCost: '总成本',
    labelWasteCount: '损耗瓷砖',
    labelCuts: '部分切割',
    currency: 'CNY',
    btnMetric: '公制',
    btnImperial: '英制',
    btnPatternStraight: '直铺',
    btnPatternBrick: '工字铺',
    btnPatternDiagonal: '对角铺',
    badgeOptimal: '最佳布局',
    badgeWarning: '高损耗警告',
    visualTitle: '布局预览',
  },
};
