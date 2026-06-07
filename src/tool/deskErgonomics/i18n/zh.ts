import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'desk-ergonomics';
const title = '桌面人体工学与工作站布局调整';
const description =
  '输入您的身高，立即查看如何调整椅子、桌子和显示器，以消除居家办公时的背部和颈部疼痛。';

const faqData = [
  {
    question: '桌子高度为什么重要？',
    answer:
      '桌子过高会迫使肩膀抬起，导致颈部和上背部紧张。桌子过低会使身体前倾，压迫腰椎间盘。正确的高度能让前臂与地面平行，肘部保持90度。',
  },
  {
    question: '显示器应该多高？',
    answer:
      '显示器顶部应与眼睛水平或略低，屏幕向后倾斜10到20度。这样能让颈部保持中立位置，同时微微向下看，这是人类视觉的自然休息角度，可减少眼睛疲劳。',
  },
  {
    question: '我应该离屏幕多远？',
    answer:
      '理想距离约为一个臂长，大致50到70厘米。在这个距离下，眼睛不需要费力聚焦，而且无需移动头部就能看到整个屏幕。对于更大的屏幕，请按比例增加距离。',
  },
  {
    question: '升降桌更好吗？',
    answer:
      '升降桌可以减少久坐，久坐与心血管和代谢问题有关。然而，整天站立可能会导致静脉和足部问题。最佳方法是交替进行：坐30分钟，站15到30分钟，并定期活动。',
  },
  {
    question: '脚应该碰到地面吗？',
    answer:
      '是的。脚应该平放在地面上，膝盖保持90度。如果椅子太高，请使用脚踏板。如果脚悬空，大腿后侧会积聚压力，限制血流并导致麻木。',
  },
  {
    question: '椅子最佳高度是多少？',
    answer:
      '座椅高度应使膝盖弯曲约90度，脚平放在地面上。臀部应与膝盖平齐或略高于膝盖。这样能将体重均匀分布在坐骨上，减轻下背部压力。',
  },
];

const howToData = [
  {
    name: '测量你的身高',
    text: '赤脚靠墙站立，在头顶处做标记。测量从地面到标记处的距离，单位为厘米。',
  },
  {
    name: '选择工作空间模式',
    text: '选择您想要坐姿办公桌还是站立式办公桌的建议。每种模式使用不同的身体比例。',
  },
  {
    name: '先调整椅子',
    text: '调整椅子，使脚平放在地面上，膝盖形成90度角。臀部应与膝盖平齐或略高于膝盖。',
  },
  {
    name: '设置桌面高度',
    text: '升高或降低桌子，使打字时前臂与地面平行。肘部应保持在90度角。',
  },
  {
    name: '摆放显示器',
    text: '将显示器放在约一个臂长之外。屏幕顶部应与眼睛水平或略低，向后倾斜10到20度。',
  },
  {
    name: '用虚拟形象验证',
    text: '使用屏幕上的虚拟形象检查所有角度是否均为绿色。如果有任何关节为红色，请调整相应的家具。',
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

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: '糟糕桌面环境的隐性代价',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大多数人每天在桌前度过超过八个小时，但很少有人测量自己的椅子、桌子或显示器是否适合身体。仅仅几厘米的不匹配就可能在颈部、肩部和下背部造成慢性紧张。数月乃至数年后，这种紧张会变成疼痛，疼痛则会演变成损伤。好消息是，最佳人体工学可以从一个测量值-你的身高-精确计算出来。',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: '平均桌边时间', icon: 'mdi:desk' },
        { value: '90°', label: '理想肘部角度', icon: 'mdi:angle-acute' },
        { value: '60cm', label: '最佳屏幕距离', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '为什么统一尺寸无法适合所有人',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '标准桌子高度为73厘米，标准椅子高度为45厘米。这些尺寸是几十年前为平均身高的男性办公室职员设计的。如果你身高低于175厘米或高于185厘米，这些默认值正在损害你的姿势。女性、青少年以及躯干比平均值更长或更短的人，尤其不适合现成家具。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '不良设置',
          description: '常见的家具默认值，长期会造成劳损。',
          icon: 'mdi:alert',
          points: ['显示器过高或过低', '桌子迫使肩膀抬高', '脚够不到地面', '椅子没有腰部支撑'],
        },
        {
          title: '最佳设置',
          description: '基于你身体比例的个性化测量值。',
          icon: 'mdi:check-circle',
          points: ['显示器与眼睛平齐', '肘部保持90度', '脚平放在地面', '下背部完全支撑'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速姿势检查清单',
      icon: 'mdi:clipboard-check',
      badge: '行动',
      html: '<p style="margin:0">背靠椅子坐好。检查膝盖后侧与座椅边缘之间是否有小间隙。确保打字时手腕是直的。显示器顶部不应高于眼睛。每30分钟休息2分钟走动一下。</p>',
    },
    {
      type: 'title',
      text: '坐与站的科学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '人体并非设计为长时间保持同一姿势。坐着时，腰椎间盘承受的压力比站立时增加40%。静止站立时，血液会在腿部淤积，心脏需要更努力地将血液泵回。最健康的工作节奏是每30到60分钟交替坐与站，并结合短距离步行。本工具可计算两种模式，帮助你正确设置升降桌。',
    },
    {
      type: 'summary',
      title: '如何打造人体工学工作空间',
      items: [
        '测量你的赤脚身高，单位为厘米。',
        '使用本模拟器获取椅子、桌子和显示器的精确高度。',
        '先调整椅子，再调整桌子，最后调整显示器。',
        '如果使用升降桌，将其设置为比坐姿桌高30厘米。',
        '将显示器放在约一个臂长之外，向后倾斜10到20度。',
        '每30分钟休息2分钟，走动或拉伸一下。',
      ],
    },
  ],
  ui: {
    labelMode: '工作空间模式',
    modeSit: '坐姿',
    modeStand: '站姿',
    labelHeight: '你的身高',
    unitCm: 'cm',
    labelGender: '体型',
    genderMale: '男性',
    genderFemale: '女性',
    labelChair: '椅子',
    labelDesk: '桌子',
    labelMonitor: '显示器',
    labelDistance: '距离',
    labelAngle: '角度',
    labelGood: '良好',
    labelAdjust: '调整',
    badgeChair: '座面',
    badgeDesk: '台面',
    badgeMonitor: '屏幕',
    tipScreenLow: '抬高显示器',
    tipScreenHigh: '降低显示器',
    tipDeskLow: '抬高桌子',
    tipDeskHigh: '降低桌子',
    tipChairLow: '抬高椅子',
    tipChairHigh: '降低椅子',
    tipDistance: '将屏幕移至臂长距离',
  },
};
