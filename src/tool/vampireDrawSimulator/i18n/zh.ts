import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vampire-draw-simulator';
const title = '待机功耗（吸血鬼负载）模拟器';
const description =
  '了解您的设备在待机模式下浪费多少电量。计算电视、路由器、充电器等设备的幽灵负载所带来的隐藏年成本。';

const faqData = [
  {
    question: '什么是吸血鬼功耗或幽灵负载？',
    answer:
      '吸血鬼功耗是指电子设备在关闭或待机模式下消耗的电能。这是因为许多设备会保持部分活跃状态，以便响应遥控器、维持网络连接或保持内部时钟运行。',
  },
  {
    question: '待机功耗每年花费多少钱？',
    answer:
      '普通家庭每年仅在待机功耗上就会浪费50到150欧元。一台现代电视可以持续消耗10到20瓦的电力，根据您的电价，每年大约相当于15到30欧元。',
  },
  {
    question: '哪些设备在待机时消耗最多？',
    answer:
      '最大的耗电者包括机顶盒、游戏机、处于睡眠模式的台式电脑、智能电视和老式外部电源适配器。有线电视和卫星电视盒子尤其浪费，因为它们很少进入真正的待机状态。',
  },
  {
    question: '拔掉设备插头真的能省钱吗？',
    answer:
      '是的。拔掉设备插头或使用带主控插座的高级电源插排可以完全消除待机消耗。对于拥有20个待机设备的典型家庭来说，每年可节省40到120欧元。',
  },
  {
    question: '智能电源插排值得吗？',
    answer:
      '智能或高级电源插排会在主设备关闭时切断外围设备的电源。如果将它们用于娱乐中心或电脑工作站，几个月内就能回本。',
  },
  {
    question: '如何在家测量待机功耗？',
    answer:
      '您可以使用便宜的插电式功率计（瓦特表）来精确测量每个设备在关闭或空闲时消耗的瓦数。或者，本模拟器根据制造商平均值和实验室测量提供标准化估算。',
  },
];

const howToData = [
  {
    name: '逐个房间检查',
    text: '清点每个房间中全天候插着电源的设备。包括电视、微波炉、路由器、打印机、游戏机和手机充电器。',
  },
  {
    name: '估算每日待机时间',
    text: '大多数设备每天待机20到24小时。输入每台设备的平均值，或使用默认值24小时。',
  },
  {
    name: '设置您的电价',
    text: '输入您每千瓦时的电价。这印在您的电费账单上。',
  },
  {
    name: '查看吸血鬼负载摘要',
    text: '模拟器显示总浪费瓦数、年度千瓦时和隐藏的年成本。使用类别标签查看您的家庭属于低、中、高还是极端。',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: '幽灵负载：您付费却从未使用的电力',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '家中每个插着插头的插座都是<strong>幽灵电力</strong>的潜在来源。即使开关已关闭，设备仍会继续耗电。可能只有几瓦，但乘以一天24小时、一年365天，这些瓦特就会变成数百千瓦时和您口袋里的真金白银。',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: '家庭电费占比', icon: 'mdi:flash' },
        { value: '23h', label: '日均待机时间', icon: 'mdi:clock-outline' },
        { value: '30W', label: '最高设备平均值', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '那些从不休息的设备',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '现代家庭平均拥有40台电子设备。其中大约一半持续连接电网。虽然近年来能源法规提高了待机效率，但设备数量却增加了。一台处于即时开机模式的游戏机可以消耗15瓦。一台带快速启动功能的电视可以消耗12瓦。加上路由器、调制解调器、智能音箱、带时钟的微波炉、打印机和充电器，总功耗很快就超过100瓦的永久背景消耗。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '低影响家庭',
          description: '通过智能插排和拔插习惯积极管理待机功耗的家庭。',
          icon: 'mdi:leaf',
          points: ['总待机低于50瓦', '年成本低于50欧元', '使用高级电源插排'],
        },
        {
          title: '高影响家庭',
          description: '拥有娱乐中心、多台游戏机和始终开机的电脑的典型家庭。',
          icon: 'mdi:lightning-bolt',
          points: ['总待机超过150瓦', '年成本超过150欧元', '许多设备处于快速启动模式'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速节省清单',
      icon: 'mdi:check-circle',
      badge: '行动',
      html: '<p style="margin:0">不使用时拔掉手机充电器。为娱乐中心使用主控电源插排。在电视和游戏机上禁用快速启动或即时开机模式。关闭台式电脑，不要让它们处于睡眠模式。</p>',
    },
    {
      type: 'title',
      text: '为什么瓦数的累加速度超出您的想象',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '瓦特是能源使用的速率。一瓦运行一小时就是一瓦时。一个持续消耗10瓦的设备每年使用87.6千瓦时。按照平均每千瓦时0.25欧元的价格，这一台设备每年就要花费超过21欧元。现在把这个数字乘以家中每个插着电源的小工具。',
    },
    {
      type: 'summary',
      title: '如何削减您的吸血鬼负载',
      items: [
        '使用本模拟器或插头式电表找出最大的耗电设备。',
        '将设备分组到智能电源插排上，当主设备关闭时切断待机电源。',
        '尽可能禁用始终开启、快速启动和网络待机功能。',
        '拔掉不每天使用的充电器和中小家电。',
        '考虑用现代高效型号替换非常老旧的外部电源适配器。',
      ],
    },
  ],
  ui: {
    sectionTitle: '幽灵负载审计',
    labelDevices: '已连接的待机设备',
    labelHours: '每日待机小时数',
    unitHours: 'h',
    labelPrice: '电价',
    unitPrice: '/kWh',
    resultBadge: '吸血鬼负载结果',
    labelAnnualKwh: '每年浪费电量',
    labelAnnualCost: '隐藏年成本',
    labelMonthlyCost: '每月等值',
    labelDevicesCount: '已统计设备数',
    labelTotalWatts: '总待机瓦数',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: '货币',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: '低耗电',
    categoryModerate: '中等耗电',
    categoryHigh: '高耗电',
    categoryExtreme: '极端耗电',
    addDevice: '添加设备',
    removeDevice: '移除',
    modalAddTitle: '添加待机设备',
    labelDeviceName: '设备名称',
    labelDeviceWatts: '待机瓦数',
    btnSave: '保存',
    btnCancel: '取消',
  },
};
