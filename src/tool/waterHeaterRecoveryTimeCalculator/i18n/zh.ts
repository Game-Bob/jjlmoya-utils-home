import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-heater-recovery-time-calculator';
const title = '热水器恢复时间计算器';
const description = '根据储水量、有效功率和效率，估算热水器从当前水温恢复到目标温度所需的时间。';
const faq = [
  { question: '这里的恢复时间是什么意思？', answer: '这是输入的水量从当前温度升到目标温度所需的预计时间。计算使用水的热容量、热水器有效功率和预计效率。' },
  { question: '计算器使用什么公式？', answer: '所需热量按升数、温升以及每升每摄氏度1.16瓦时的乘积估算，再用这部分能量除以加热功率和效率的乘积。' },
  { question: '它能准确预测我的热水器时间吗？', answer: '不能。这是透明的规划估算。待机损耗、恒温器循环、分层、混合、管道损耗和功率限制都可能让实际时间更长。' },
  { question: '应该输入什么效率？', answer: '如果有资料，请使用设备注明的有效效率或恢复效率。没有时输入偏保守的估计，并与说明书或实测恢复周期比较。' },
];
const howTo = [
  { name: '输入储水量', text: '以升为单位输入水箱容量，用于估算需要加热的水量。' },
  { name: '设置当前温度和目标温度', text: '输入恢复开始时的温度以及水箱需要达到的温度。' },
  { name: '输入有效功率和效率', text: '输入千瓦功率以及真正传递到水中的能量比例。' },
  { name: '查看恢复时间窗口', text: '用预计时长和完成时间安排使用，并与设备资料进行比较。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: '储水量', volumeHint: '水箱容量', temperatureUnitLabel: '温度单位', celsiusOption: '摄氏 (°C)', fahrenheitOption: '华氏 (°F)', currentTempLabel: '当前水温', targetTempLabel: '目标温度', powerLabel: '热水器有效功率', efficiencyLabel: '预计效率', startTimeLabel: '恢复开始时间', compareTitle: '比较另一种设置', comparePowerLabel: '另一种有效功率', compareEfficiencyLabel: '另一种效率', compareOptional: '可选：填写两个字段进行比较', calculateNote: '请将此结果作为规划估算，在依赖时间之前查看热水器说明书。', tankCurrent: '当前', tankTarget: '目标', resultTitle: '恢复时间窗口', recoveryTimeLabel: '预计恢复时间', energyLabel: '所需热量', effectivePowerLabel: '有效功率', readyAtLabel: '预计可用时间', temperatureRiseLabel: '温升', comparisonTitle: '替代设置', comparisonFaster: '更快', comparisonSlower: '更慢', noHeatingNeeded: '已经达到目标温度', invalidInputs: '请输入正数的容量、功率和效率以查看估算结果。', insufficientPower: '需要为正数的有效功率。', limitsTitle: '此估算未包含的因素', limitsText: '模型不了解水箱保温、待机损耗、恒温器循环、分层、混合、管道损耗或设备实际功率曲线。', hoursUnit: '小时', minutesUnit: '分钟', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: '估算热水何时可以再次使用', level: 2 },
    { type: 'paragraph', html: '淋浴、泡澡或大量用水后，只知道水箱大小还不够。你需要了解水中需要补回多少能量，以及热水器能多快提供这些能量。本计算器将这些数据转换为可用于安排下一次使用的恢复时间窗口。' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1.16', label: '所需热量（Wh）', icon: 'mdi:water-boiler' }, { value: 'kW × 效率', label: '有效加热功率', icon: 'mdi:flash-outline' }, { value: '热量 ÷ 功率', label: '恢复时间', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: '恢复时间估算如何构成', level: 2 },
    { type: 'paragraph', html: '估算使用水的热容量。水每升每升高一度约需要1.16瓦时。计算器将这个系数乘以储水量和温升，再除以应用效率后的有效功率。' },
    { type: 'comparative', items: [{ title: '适合规划', description: '选择开始时间，输入水箱状态，查看预计完成时间。加入另一组功率和效率即可比较不同设置。', icon: 'mdi:calendar-clock', points: ['测试下一次恢复周期', '比较有效功率而不只是额定功率', '保持温升清晰可见'] }, { title: '不是服务保证', description: '实际设备可能因热量散失、恒温器循环、水箱混合或无法保持额定功率而更慢。请与说明书或实测结果比较。', icon: 'mdi:thermometer-alert', points: ['不模拟待机损耗', '不获取制造商数据', '不构成安全或安装建议'] }], columns: 2 },
    { type: 'title', text: '最能改变恢复时间的输入', level: 2 },
    { type: 'paragraph', html: '温升越大，所需能量直接越多。在温升相同的情况下，水箱越大，需要的能量也按比例增加。有效功率和效率的作用相反：两者乘积翻倍时，理想恢复时间大致减半。' },
    { type: 'title', text: '避免夸大精度地使用结果', level: 2 },
    { type: 'paragraph', html: '本工具适合安排时间和比较假设，不用于认证热水器或设计安装。技术指南和实际测试还会考虑额外损耗及测量条件，因此实测周期可能与理想估算不同。' },
  ],
};
