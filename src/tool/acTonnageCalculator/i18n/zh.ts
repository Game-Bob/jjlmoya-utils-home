import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ac-tonnage-calculator';
const title = '空调吨位和制冷能力计算器';
const description =
  '以BTU、 frigorías和吨为单位计算您房间所需的确切空调尺寸。输入房间面积、天花板高度、人数和热源。';

const faqData = [
  { question: '每平方米需要多少BTU？', answer: '在温带气候下，2.5米天花板的基准是每平方米600 BTU。随着天花板高度、日照和人数增加。' },
  { question: '什么是 frigoría？', answer: 'Frigoría是西班牙和拉丁美洲使用的旧式制冷单位。1 frigoría约等于3.968 BTU/小时。' },
  { question: '如何将BTU转换为吨？', answer: '1制冷吨等于12,000 BTU/小时。将总BTU除以12,000即可得到吨位。' },
  { question: '天花板高度有影响吗？', answer: '是的。超过2.7米的每米，制冷需求增加约8%。' },
];

const howToData = [
  { name: '测量房间', text: '以米为单位测量长度和宽度，相乘得到面积。' },
  { name: '统计人数和设备', text: '添加定期使用房间的人数和电脑、电视等热源。' },
  { name: '选择日照强度', text: '根据直射阳光量选择轻度、中度或重度。' },
  { name: '查看推荐', text: '计算器显示BTU、frigorías和吨，方便在任何市场购买。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '我需要多大尺寸的空调？', level: 2 },
    { type: 'paragraph', html: '正确的尺寸取决于面积、天花板高度、人数和日照。使用此计算器获取准确的BTU、frigorías和吨位。' },
    { type: 'table', headers: ['面积', '推荐BTU', '吨位', '典型用途'], rows: [['10 m²（小卧室）', '6,000 - 7,000 BTU', '0.5 - 0.75 t', '客房'], ['15 m²（卧室）', '9,000 - 10,000 BTU', '0.75 - 1 t', '主卧室'], ['20 m²（客厅）', '12,000 - 14,000 BTU', '1 - 1.25 t', '小客厅'], ['30 m²（开放式）', '18,000 - 21,000 BTU', '1.5 - 1.75 t', '工作室'], ['40 m²（大客厅）', '24,000 - 28,000 BTU', '2 - 2.5 t', '大客厅+餐厅']] },
    { type: 'title', text: '为什么尺寸错误会浪费钱', level: 2 },
    { type: 'paragraph', html: '过小的空调持续运行，永远达不到设定温度，并提前磨损压缩机。过大的空调短促吹出冷风，让房间又冷又湿。' },
    { type: 'stats', items: [{ value: '600', label: '每m²基准BTU', icon: 'mdi:thermometer' }, { value: '12000', label: '每吨BTU', icon: 'mdi:snowflake' }, { value: '3.968', label: '每frigoría的BTU', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: '房间面积', labelRoomSizeFt: '面积', labelCeilingHeight: '天花板高度', labelCeilingHeightFt: '高度',
    labelPeople: '人数', labelHeatSources: '热源', labelSunExposure: '日照强度', labelRoomType: '房间类型',
    labelCalculate: '计算', labelResult: '结果', labelBtus: 'BTU/小时', labelFrigorias: 'Frigorías', labelTons: '吨',
    labelRequired: '需要', labelRecommended: '推荐', labelUnitBtu: 'BTU/小时', labelUnitFrigorias: 'Frigorías', labelUnitTons: '吨',
    labelMetric: '公制', labelImperial: '英制', labelRoomCozy: '舒适', labelRoomWarm: '温暖', labelRoomHot: '炎热',
    bdBaseCooling: '基础制冷', bdCeilingHeight: '天花板高度', bdPeople: '人数', bdHeatSources: '热源', bdSunRoom: '日照和房间类型',
    sunLight: '轻度', sunMedium: '中度', sunHeavy: '重度',
    roomBedroom: '卧室', roomLiving: '客厅', roomKitchen: '厨房', roomOffice: '办公室', roomServer: '服务器机房',
    errorRequired: '请填写所有字段',
  },
};
