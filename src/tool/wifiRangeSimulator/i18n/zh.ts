import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wifi-range-simulator';
const title = 'WiFi 信号范围与障碍物模拟器';
const description =
  '勾勒您的家居布局，放置墙壁、门窗、家具和电器，然后拖动路由器和设备，找到最佳信号路径。实时查看信号覆盖损失、流媒体评估结果以及摆放建议，无需购买新硬件即可消除信号盲区。';

const faqData = [
  {
    question: '为什么我的 Wi-Fi 信号在某些房间会变弱？',
    answer:
      'Wi-Fi 使用无线电波，这些电波会被物理材料吸收、反射或阻挡。实心砖、混凝土和金属是最严重的障碍物，每种材料都会显著降低信号强度。水和玻璃也会反射或吸收部分信号。',
  },
  {
    question: '混凝土或石墙对 Wi-Fi 的影响有多大？',
    answer:
      '一堵标准混凝土墙可以将 2.4 GHz 信号衰减 10 到 20 分贝。70 到 80 厘米厚的石墙可达到 22 分贝或更高。根据厚度和密度的不同，这相当于大约 50% 到 90% 的范围损失。在 5 GHz 下，损失更大，因为较高频率会被致密材料更快地吸收。',
  },
  {
    question: '我应该把路由器放在哪里才能获得最佳覆盖？',
    answer:
      '居中、抬高、开阔。将路由器放在家中的中央位置，距离厚墙和金属物体至少一米，并抬高至胸部高度以便水平扩散。避免角落、壁橱和家具后面的低矮位置。',
  },
  {
    question: '玻璃门会阻挡 Wi-Fi 吗？',
    answer:
      '透明玻璃的影响很小，但带有金属膜的镀膜玻璃或双层玻璃窗可能会反射信号。模拟器将标准玻璃视为轻度障碍物，损失约为 2 到 3 分贝。',
  },
];

const howToData = [
  {
    name: '识别信号路径',
    text: '想象一下路由器和您关注的设备之间有一条直线。穿过这条线的每个物体都很重要。',
  },
  {
    name: '添加每个障碍物',
    text: '单击模拟器中的材质按钮，添加穿过路径的每面墙壁、门、电器或家具。',
  },
  {
    name: '查看评估结果',
    text: '当您添加或移除物体时，观察信号环、波动画和流媒体仪表板会立即更新。',
  },
  {
    name: '应用情境提示',
    text: '根据您的具体障碍物组合出现的摆放建议卡，按照提示操作，无需购买新硬件即可改善覆盖范围。',
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

export const content: ToolLocaleContent<WifiRangeSimulatorUI> = {
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
      text: '为什么你的 Wi-Fi 在隔壁房间就没了信号',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '你的路由器向各个方向发射无线电波。这些电波在空气中传播很容易，但遇到的每个物理物体都会造成损耗。有些材料能让大部分信号通过。另一些则会完全吞噬信号。了解家中哪些物品正在悄悄扼杀你的连接，是在不花一分钱购买新硬件的情况下修复盲区的第一步。',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: '石膏板损耗', icon: 'mdi:wall' },
        { value: '22 dB', label: '厚石墙', icon: 'mdi:wall' },
        { value: '18 dB', label: '金属门损耗', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '家中每件物品的真实代价',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '并非所有障碍物都同等。一块石膏板可能只削弱你百分之几的信号，但一根混凝土柱或一扇金属门可以让你的有效覆盖范围减半。这就是当你把路由器放在电视后面、冰箱旁边或金属架子下面的地板上时，真正面临的情况。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '轻度障碍物',
          description: '这些物体造成的信号损失最小，通常靠近信号路径也是安全的。你不必担心一扇窗户或玻璃门。',
          icon: 'mdi:window-open-variant',
          points: [
            '玻璃门：2 到 3 dB 损失',
            '标准窗户：2 dB 损失',
            '石膏板隔断：3 dB 损失',
            '木制室内门：4 dB 损失',
          ],
        },
        {
          title: '中度障碍物',
          description: '这些物体会对你的覆盖范围造成明显影响。一两个没问题，但在同一信号路径上堆积三个或更多就会开始导致缓冲和延迟。',
          icon: 'mdi:wardrobe',
          points: [
            '木制衣柜：5 dB 损失',
            '大镜子：6 dB 损失',
            '洗衣机：6 dB 损失',
            '微波炉：5 dB 损失',
          ],
        },
        {
          title: '重度障碍物',
          description: '这些是家庭网络的无声杀手。一堵混凝土墙或一扇金属门就能把强信号变成弱信号，多个叠加就会产生必死盲区。',
          icon: 'mdi:wall',
          points: [
            '实心砖墙：8 dB 损失',
            '地板或天花板：10 dB 损失',
            '冰箱：10 dB 损失',
            '鱼缸：12 dB 损失',
          ],
        },
        {
          title: '极端障碍物',
          description: '这些材料几乎会吸收或反射所有无线电能量。如果你的信号路径穿过其中任何一个，你就需要移动路由器或设备。没有变通办法。',
          icon: 'mdi:shield',
          points: [
            '厚石墙（70-80 厘米）：22 dB 损失',
            '混凝土墙：15 dB 损失',
            '金属柜：12 dB 损失',
            '金属门或栅门：18 dB 损失',
            '电梯井：20+ dB 损失',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '不同频率穿过墙壁的表现',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大多数现代路由器在两个频段上发射信号：2.4 GHz 和 5 GHz。较低的频率传播更远，更容易穿过墙壁，但速度较慢且拥挤。较高的频率速度极快，但会被路径上的每个障碍物吸收。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2.4 GHz 穿透力',
          description: '较低频率传播更远，穿透墙壁的能力更好。非常适合长距离，但会被邻居的网络拥挤。',
          icon: 'mdi:signal',
          points: [
            '更能穿透实心砖和混凝土',
            '受邻居路由器的干扰更多',
            '最高速度较慢，实际约 150 Mbps',
            '更适合智能家居设备和物联网',
          ],
        },
        {
          title: '5 GHz 穿透力',
          description: '较高频率提供更快的速度，但会被建筑材料更快地吸收。最适合开放空间和附近设备。',
          icon: 'mdi:signal-5g',
          points: [
            '穿透混凝土和金属效果差',
            '干扰更少，信道更干净',
            '同房间内可达千兆速度',
            '覆盖范围较差，但到达处质量更好',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '隐藏的杀手：你从未怀疑过的物品',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大多数人归咎于墙壁，但一些最糟糕的 Wi-Fi 杀手是日常物品。鱼缸主要是水，而水几乎能完美吸收 2.4 GHz 无线电波。大镜子背面有一层薄金属层，会把信号从你的设备反射开。微波炉在 2.4 GHz 频率上辐射，与你的路由器完全相同，每次加热食物时都会造成干扰。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '鱼缸陷阱',
      icon: 'mdi:fish',
      badge: '意外阻挡物',
      html: '<p>一个大鱼缸可以衰减你的 Wi-Fi 信号多达 12 分贝。这相当于一堵厚混凝土墙。如果你的路由器在鱼缸的一侧，而你的书桌在另一侧，水造成的损害比后面的墙还要大。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '镜子效应',
      icon: 'mdi:mirror',
      badge: '反射危险',
      html: '<p>大镜子背面有一层薄金属层，用来反射光线。这层金属也会反射无线电波。一面朝向路由器的镜子可以把信号反射到你需要的地方之外，或者造成混乱的多路径干扰，破坏数据包。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '微波炉干扰',
      icon: 'mdi:microwave',
      badge: '主动干扰源',
      html: '<p>微波炉在 2.45 GHz 频率运行，与 2.4 GHz Wi-Fi 频段直接重叠。运行时，微波炉可以在 3 到 5 米半径内摧毁 2.4 GHz 信号。如果你的路由器只支持 2.4 GHz，而厨房就在附近，请换用双频路由器，并在关键任务中使用 5 GHz。</p>',
    },
    {
      type: 'title',
      text: '逐个房间：路由器应该放在哪里',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '理想的路由器位置不是最方便的位置。而是为你真正使用互联网的房间提供最清晰视线路径的位置。以下是每个房间的思考方式。',
    },
    {
      type: 'table',
      headers: ['房间', '风险等级', '为什么困难', '解决方案'],
      rows: [
        ['厨房', '高', '冰箱、微波炉、金属橱柜、水管', '把路由器放在厨房外面，绝对不要放在里面。'],
        ['浴室', '高', '镜子、水管、带金属网的瓷砖', '避免将路由器放在浴室墙壁的另一侧。'],
        ['卧室', '中', '衣柜、厚墙、金属床架', '抬高路由器，清理家具上方的路径。'],
        ['客厅', '低', '通常开阔，但注意电视和游戏机', '让路由器保持可见，不要藏在电视后面。'],
        ['车库', '极高', '金属门、混凝土、汽车', '不要指望室内路由器能覆盖车库。'],
        ['花园/露台', '高', '外墙、玻璃、距离', '使用室外接入点或网状网络节点。'],
      ],
    },
    {
      type: 'title',
      text: '一米规则和其他摆放技巧',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '小小的移动就能带来巨大的改变。你不需要重新布线。你只需要了解无线电波如何传播，并给它们一条畅通的路径。',
    },
    {
      type: 'tip',
      title: '一米规则',
      html: '<p>将路由器从混凝土或金属屏障移开仅一米，即可恢复高达 40% 的丢失信号强度。</p>',
    },
    {
      type: 'tip',
      title: '抬高以增加覆盖',
      html: '<p>将路由器放在架子上，抬高到胸部高度。信号从天线水平辐射。把它放在地板上会把一半的覆盖浪费在地面。</p>',
    },
    {
      type: 'tip',
      title: '保持可见',
      html: '<p>切勿将路由器藏在柜子、壁橱里或电视后面。封闭空间就像法拉第笼一样，在信号到达你的房间之前就将其困住。</p>',
    },
    {
      type: 'tip',
      title: '天线定位',
      html: '<p>如果你的路由器有外置天线，请将一根垂直放置，另一根水平放置。这可以为不同高度的设备提供更好的覆盖。</p>',
    },
    {
      type: 'tip',
      title: '避免干扰',
      html: '<p>让路由器距离微波炉、无绳电话和婴儿监视器至少 1.5 米。这些设备共享 2.4 GHz 频段，会造成主动干扰。</p>',
    },
    {
      type: 'tip',
      title: '中间楼层优势',
      html: '<p>如果你住在多层住宅中，请把路由器放在中间楼层。信号通过混凝土地板向上和向下传播效果不佳。</p>',
    },
    {
      type: 'title',
      text: '流媒体评估结果：你的信号实际意味着什么',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '百分比是抽象的。你真正关心的是能否观看 Netflix、赢得比赛或完成视频通话而不卡顿。以下是每个信号级别在现实世界中的含义。',
    },
    {
      type: 'table',
      headers: ['信号', '4K 流媒体', '在线游戏', '视频通话', '浏览网页'],
      rows: [
        ['80% 到 100%', '完美，即时加载', '低延迟，竞技游戏', '清晰无掉线', '即时，无延迟'],
        ['60% 到 79%', '良好，偶尔缓冲', '可玩，轻微延迟', '稳定，极少像素化', '快速，无问题'],
        ['40% 到 59%', '每几分钟缓冲一次', '延迟警告，橡皮筋效应', '像素化，部分掉线', '可用，加载较慢'],
        ['20% 到 39%', '不可能，持续卡顿', '断开连接，无法游戏', '频繁掉线，无法使用', '非常慢，超时'],
        ['0% 到 19%', '无法启动', '无法连接', '无连接', '无法使用'],
      ],
    },
    {
      type: 'title',
      text: '购买任何东西之前的快速修复',
      level: 3,
    },
    {
      type: 'summary',
      title: '免费优化检查清单',
      items: [
        '将路由器移到家的中央，而不是角落。',
        '放在架子或高大家具上，抬高到胸部高度。',
        '从柜子、壁橱和电视后面拿出来。',
        '如果可能，将一根天线垂直放置，另一根水平放置。',
        '近距离设备使用 5 GHz，远距离设备使用 2.4 GHz。',
        '使用扫描仪应用切换到不那么拥挤的 Wi-Fi 信道。',
        '更新路由器固件，修复已知的信号问题。',
        '每月重启一次路由器，清除内存泄漏。',
      ],
    },
    {
      type: 'title',
      text: '何时升级硬件',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '有时环境会胜出。如果你尝试了所有摆放技巧，但仍然受到盲区困扰，那么是时候扩展网络而不是与物理定律抗争了。',
    },
    {
      type: 'proscons',
      title: 'WiFi 扩展器 vs 网状网络系统',
      items: [
        { pro: '扩展器价格便宜，安装简单。', con: '扩展器会创建第二个网络名称，速度减半。' },
        { pro: '扩展器适用于单个盲区。', con: '扩展器需要强大的现有信号才能增强。' },
        { pro: '网状网络系统创建一个无缝网络。', con: '网状网络系统前期成本更高。' },
        { pro: '网状网络适用于多层和大户型住宅。', con: '网状网络需要在调制解调器附近有一个主节点。' },
      ],
    },
    {
      type: 'tip',
      title: '何时使用网状网络',
      html: '<p>对于超过 120 平方米或带有厚混凝土墙的住宅，至少有两个节点的网状网络系统将胜过任何单个路由器，无论它有多贵。</p>',
    },
    {
      type: 'title',
      text: '通俗理解分贝',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '分贝是对数单位，意味着它们不像普通数字那样运作。每 3 dB 的损失就会使信号功率减半。6 dB 的损失意味着只有原始功率的四分之一剩余。10 dB 的损失意味着只有十分之一幸存。这就是为什么 15 dB 的混凝土墙是毁灭性的。它不仅削弱信号。它直接摧毁信号。',
    },
    {
      type: 'glossary',
      items: [
        { term: '衰减', definition: '信号通过材料时强度逐渐损失。数字越高意味着损失信号越多。' },
        { term: 'dBm', definition: '用于测量 Wi-Fi 信号强度的功率单位。0 dBm 等于一毫瓦。负值是正常的，-30 表示优秀，-80 表示几乎无法使用。' },
        { term: '盲区', definition: 'Wi-Fi 信号太弱而无法建立或维持可靠连接的区域。' },
        { term: '网状网络', definition: '多个路由器节点协同工作，用一个无缝的 Wi-Fi 网络覆盖大面积的系统。' },
        { term: '多路径干扰', definition: '无线电波从墙壁和物体反射，产生同一信号的多个延迟副本，使接收器混淆。' },
        { term: 'SSID', definition: '你的 Wi-Fi 网络名称。扩展器通常会创建第二个 SSID，而网状网络在所有节点上保持一个名称。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '路由器摆放的黄金法则',
      icon: 'mdi:map-marker-radius',
      badge: '关键提示',
      html: '<p>如果你的路由器目前在角落、柜子里或地板上，在信号离开房间之前，你就已经浪费了其潜在范围的 50% 到 70%。你能做的最快的升级就是把它移到一个开阔、居中、较高的位置。这一项改变常常比购买新设备解决更多问题。</p>',
    },
    {
      type: 'summary',
      title: '如何预防 WiFi 盲区',
      items: [
        '将路由器居中、抬高并放在开阔位置。',
        '尽量减少路由器和设备之间的墙壁数量。',
        '避免将路由器放在厨房、浴室和车库。',
        '同一房间内使用 5 GHz 获取速度，远距离使用 2.4 GHz。',
        '大户型或厚外墙住宅考虑使用网状网络。',
        '每月重启并更新固件以保持最佳性能。',
      ],
    },
  ],
  ui: {
    labelObstacles: '阻挡 Wi-Fi 的家居物品',
    labelAddObstacle: '点击添加到信号路径',
    labelRemove: '移除',
    labelSignalStrength: '信号',
    labelEffectiveRange: '有效范围',
    labelMeters: '米',
    labelPercent: '%',
    labelStreamingVerdict: '流媒体评估',
    verdictPerfect: '完美',
    verdictGood: '良好',
    verdictFair: '一般',
    verdictPoor: '差',
    verdictDead: '盲区',
    tipTitle: '摆放建议',
    label4kStreaming: '4K 流媒体',
    labelOnlineGaming: '在线游戏',
    labelVideoCalls: '视频通话',
    labelBasicBrowsing: '基本浏览',
    statusPerfect: '完美',
    statusGood: '良好',
    statusFair: '一般',
    statusPoor: '差',
    statusImpossible: '不可能',
    statusLowLatency: '低延迟',
    statusLagWarning: '延迟警告',
    statusDisconnect: '断开',
    statusStable: '稳定',
    statusPixelated: '像素化',
    statusDropped: '掉线',
    statusPass: '合格',
    statusUnusable: '无法使用',
    tipMoveRouter: '将路由器从那个固体屏障移开仅 1 米，信号最多可提升 40%。',
    tipElevateRouter: '将路由器抬高到胸部高度。信号水平扩散，地板吸收的比你想象的更多。',
    tipReduceObstacles: '每增加一堵墙，信号就减半。尽量减少路由器和设备之间的障碍物数量。',
  },
};
