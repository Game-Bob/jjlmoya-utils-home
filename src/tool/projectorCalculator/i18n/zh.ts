import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'projector-throw-calculator';
const title = '投影机距离计算器 — 投射比与屏幕';
const description =
  '根据所需的屏幕尺寸和投影机投射比（Throw Ratio）计算精确的安装距离。支持实时模拟的视觉化工具。';

const faqData = [
  {
    question: '什么是投射比（Throw Ratio）？',
    answer:
      '投射比定义了投影机在特定距离下能投射出多大的画面。计算公式为“投射距离 ÷ 画面宽度”。例如，投射比为 1.5 意味着从 1.5 米外投影，可以获得 1 米宽的画面。',
  },
  {
    question: '100 英寸的屏幕需要多远的距离？',
    answer:
      '这取决于投影机的投射比。如果投射比是标准的 1.5:1，大约需要 3.3 米。如果是短焦投影机（Short Throw），距离可以缩短到 1 米以内。',
  },
  {
    question: '16:9 和 4:3 有什么区别？',
    answer:
      '16:9 是现代电影和电视剧使用的宽屏格式。4:3 是传统演示文稿使用的比例。选择正确的比例可以避免出现过大的黑边。',
  },
  {
    question: '安装投影机的高度重要吗？',
    answer:
      '非常重要。投影机通常有垂直偏移或梯形校正。理想状态是投影机对准屏幕的上边缘或下边缘中央，以避免图像变形。',
  },
];

const howToData = [
  {
    name: '查询投射比',
    text: '在投影机机身、手册或包装盒上查找类似“1.2:1”或“1.5-1.8:1”的数值。',
  },
  {
    name: '确定屏幕尺寸',
    text: '输入您想要的对角线英寸数或墙面可用的宽度。',
  },
  {
    name: '选择画面比例',
    text: '看电影或剧集选 16:9，办公演示选 4:3，追求院线感选 21:9。',
  },
  {
    name: '获取安装距离',
    text: '计算器将给出安装投影机支架的确切距离。',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
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
      text: '掌控投影几何学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '凭直觉安装投影机可能会毁掉观影体验。太近画面太小，太远则亮度不足。核心在于 <strong>投射比（Throw Ratio）</strong>，它精确定义了距离与画面尺寸的关系。',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: '距离公式', icon: 'mdi:projector' },
        { value: '< 0.4', label: '超短焦', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: '长焦', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '什么是投射比？',
          description: '投射比是投影距离与画面宽度的比值。TR 为 1.5 意味着每 1 米画面宽度需要 1.5 米的投影距离。',
          icon: 'mdi:ruler',
          points: ['TR < 1: 短焦，适合小空间', 'TR 1–2: 客厅及会议室标准', 'TR > 2: 长焦，适合大型礼堂'],
        },
        {
          title: '画面格式与比例',
          description: '画面格式决定了投影比例。使用错误的比例会导致出现黑边，并浪费投影亮度。',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: 现代电影与游戏的标准高清比例', '21:9: 宽屏幕电影院格式', '4:3: 办公演示与老式投影比例'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '专业安装建议',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>镜头位移 (Lens Shift) vs 梯形校正:</strong> 如果投影机支持镜头位移，请务必优先使用，而不是使用数字梯形校正。梯形校正会损失分辨率。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '环境光与幕布增益',
      icon: 'mdi:lightbulb-on',
      badge: '专业贴士',
      html: '<p>在光线较亮的房间，考虑使用高增益（>1.0）幕布来补偿对比度的损失。</p>',
    },
    {
      type: 'summary',
      title: '安装自查清单',
      items: [
        '安装前先确认投影机的确切投射比。',
        '核对墙面可用空间，确保能放下目标尺寸。',
        '尽量使投影机光轴垂直并对准幕布中心。',
        '避免数字校正：优先通过物理位置调整。',
        '确保屏幕上没有直射光源干扰。',
      ],
    },
  ],
  ui: {
    configTitle: '参数配置',
    configSubtitle: '设置您的幕布与投影机',
    labelDiagonal: '幕布对角线',
    labelDiagonalUnit: '英寸 (")',
    labelFormat: '画面比例',
    labelThrowRatio: '投射比（Throw Ratio）',
    throwRatioHint: '参考投影机手册。例如：1.50 表示每 1 米宽度需 1.5 米距离。',
    ratio169Sub: '高清电视',
    ratio219Sub: '宽银幕',
    ratio43Sub: '普通/办公',
    labelWidth: '屏幕宽度',
    labelHeight: '屏幕高度',
    labelDistance: '需安装距离',
    simulationBadge: '实时模拟预测',
  },
};
