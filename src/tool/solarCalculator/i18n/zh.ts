import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';

const slug = 'solar-calculator';
const title = '太阳能电池板倾斜角计算器';
const description =
  '根据您所在的地理纬度计算太阳能电池板的最佳倾斜角度。获取固定安装和季节性调整的数值。';

const faqData = [
  {
    question: '如果我屋顶的倾斜度不完美怎么办？',
    answer:
      '这不是大问题。5-10 度的偏差导致的年度发电量损失通常小于 3%。比起追求精确的角度，避免局部阴影遮挡更为重要。',
  },
  {
    question: '全球各地的最佳角度都一样吗？',
    answer:
      '不一样。它直接取决于您所在的纬度。北京（约 39°N）的最佳角度与广州（约 23°N）或悉尼（约 34°S）的都不同。',
  },
  {
    question: '电池板应该朝向哪个方向？',
    answer:
      '在北半球，应始终朝南（方位角 180°）。在南半球，应朝北。偏离正南/正北可能会导致显著的效率下降。',
  },
];

const howToData = [
  {
    name: '输入纬度',
    text: '输入所在位置的十进制纬度，或点击自动定位按钮检测。',
  },
  {
    name: '查看最佳角度',
    text: '“全年最佳角度”是固定安装方式的主要参考数值。',
  },
  {
    name: '季节性调整（可选）',
    text: '如果支架可调节，建议根据冬季和夏季角度进行调整以最大化产量。',
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    { name: 'NREL PVWatts 计算器', url: 'https://pvwatts.nrel.gov/' },
    { name: 'PVGIS — 欧盟太阳能计算工具', url: 'https://re.jrc.ec.europa.eu/pvgis/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '太阳能倾斜角的科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '太阳能电池板的效率取决于太阳光照射的角度。了解地理几何学是将屋顶转化为高效发电站的第一步。',
    },
    {
      type: 'summary',
      title: '高效安装关键',
      items: [
        '全年最佳角度是固定安装的主要参考。',
        '±5 度的偏差对年度产量的影响微乎其微。',
        '避免阴影遮挡比追求精准角度更重要。',
        '北半球应朝南安装。',
      ],
    },
  ],
  ui: {
    labelLatitude: '地理纬度',
    btnLocate: '检测我的位置',
    labelOptimal: '全年最佳角度',
    labelEfficiency: '最大效率',
    labelWinter: '冬季',
    labelSummer: '夏季',
    hemisphereNorth: '北半球 — 请朝向南方',
    hemisphereSouth: '南半球 — 请朝向北方',
    geoNotAvailable: '当前浏览器不支持地理定位。',
  },
};
