import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-heater-recovery-time-calculator';
const title = '온수기 회복 시간 계산기';
const description = '용량, 유효 출력, 효율을 사용해 온수기가 현재 수온에서 목표 온도까지 회복하는 시간을 추정합니다.';
const faq = [
  { question: '여기서 회복 시간은 무엇인가요?', answer: '입력한 물의 양이 현재 온도에서 목표 온도까지 올라가는 데 걸리는 예상 시간입니다. 물의 열용량, 유효 가열 출력, 예상 효율을 사용합니다.' },
  { question: '계산기는 어떤 공식을 사용하나요?', answer: '필요한 열량을 리터 수와 온도 상승, 리터·도당 1.16와트시의 곱으로 추정합니다. 그 에너지를 가열 출력과 효율의 곱으로 나눕니다.' },
  { question: '내 온수기의 정확한 시간을 예측하나요?', answer: '아니요. 계획을 위한 투명한 추정치입니다. 대기 손실, 온도조절기 작동, 성층, 혼합, 배관 손실, 출력 제한 때문에 실제 시간은 더 길어질 수 있습니다.' },
  { question: '효율에는 어떤 값을 넣어야 하나요?', answer: '자료에 유효 효율이나 회복 효율이 있다면 그 값을 사용하세요. 없다면 보수적인 값을 입력하고 설명서나 실제 측정 주기와 비교하세요.' },
];
const howTo = [
  { name: '저장된 물의 양 입력', text: '가열할 물의 양을 추정할 수 있도록 탱크 용량을 리터로 입력합니다.' },
  { name: '현재 온도와 목표 온도 설정', text: '회복을 시작하는 온도와 탱크가 도달할 온도를 입력합니다.' },
  { name: '유효 출력과 효율 입력', text: '히터 출력은 킬로와트로, 물에 실제로 전달되는 에너지 비율은 퍼센트로 입력합니다.' },
  { name: '회복 시간 확인', text: '예상 시간과 완료 시각을 계획에 사용하고 기기 설명서와 비교하세요.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: '저장된 물의 양', volumeHint: '탱크 용량', temperatureUnitLabel: '온도 단위', celsiusOption: '섭씨 (°C)', fahrenheitOption: '화씨 (°F)', currentTempLabel: '현재 물 온도', targetTempLabel: '목표 온도', powerLabel: '온수기 유효 출력', efficiencyLabel: '예상 효율', startTimeLabel: '회복 시작 시각', compareTitle: '다른 설정 비교', comparePowerLabel: '다른 유효 출력', compareEfficiencyLabel: '다른 효율', compareOptional: '선택 사항: 비교하려면 두 항목을 모두 입력하세요', calculateNote: '계획을 위한 추정치로 사용하고, 시간을 믿기 전에 온수기 설명서를 확인하세요.', tankCurrent: '현재', tankTarget: '목표', resultTitle: '회복 시간', recoveryTimeLabel: '예상 회복 시간', energyLabel: '필요한 열량', effectivePowerLabel: '유효 출력', readyAtLabel: '사용 가능 예상 시각', temperatureRiseLabel: '온도 상승', comparisonTitle: '대체 설정', comparisonFaster: '더 빠름', comparisonSlower: '더 느림', noHeatingNeeded: '이미 목표 온도입니다', invalidInputs: '추정치를 보려면 용량, 출력, 효율에 양수를 입력하세요.', insufficientPower: '양의 유효 출력이 필요합니다.', limitsTitle: '이 추정에 포함되지 않는 항목', limitsText: '탱크 단열, 대기 손실, 온도조절기 주기, 성층, 혼합, 배관 손실, 실제 기기의 출력 곡선은 모델에 포함되지 않습니다.', hoursUnit: '시간', minutesUnit: '분', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: '온수가 다시 준비되는 시간을 추정하세요', level: 2 },
    { type: 'paragraph', html: '샤워나 목욕, 많은 양의 물 사용 후에는 탱크 크기만으로 충분하지 않습니다. 물에 얼마나 많은 에너지를 되돌려야 하는지, 온수기가 얼마나 빨리 공급할 수 있는지 알아야 합니다. 이 계산기는 다음 사용을 계획할 수 있는 회복 시간으로 바꿔 줍니다.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1.16', label: '필요 열량(Wh)', icon: 'mdi:water-boiler' }, { value: 'kW × 효율', label: '유효 가열 출력', icon: 'mdi:flash-outline' }, { value: '열량 ÷ 출력', label: '회복 시간', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: '회복 시간 추정 방식', level: 2 },
    { type: 'paragraph', html: '물의 열용량을 사용합니다. 물 1리터를 1도 올리는 데 약 1.16와트시가 필요합니다. 용량과 온도 상승을 이 값과 곱한 뒤 효율을 반영한 유효 출력으로 나눕니다.' },
    { type: 'comparative', items: [{ title: '계획에 유용함', description: '시작 시각과 탱크 상태를 입력해 예상 완료 시각을 확인하세요. 다른 출력과 효율을 추가하면 설정을 비교할 수 있습니다.', icon: 'mdi:calendar-clock', points: ['다음 회복 주기 테스트', '정격 출력이 아닌 유효 출력 비교', '온도 상승을 계속 표시'] }, { title: '서비스 보증이 아님', description: '열 손실, 온도조절기 주기, 탱크 혼합, 지속되지 않는 출력 때문에 실제 기기는 더 느릴 수 있습니다. 결과를 설명서나 측정값과 비교하세요.', icon: 'mdi:thermometer-alert', points: ['대기 손실은 모델링하지 않음', '제조사 데이터를 가져오지 않음', '안전 또는 설치 조언이 아님'] }], columns: 2 },
    { type: 'title', text: '회복 시간을 가장 크게 바꾸는 입력', level: 2 },
    { type: 'paragraph', html: '온도 상승이 클수록 필요한 에너지가 직접 증가합니다. 같은 상승 폭이라면 탱크가 클수록 필요한 에너지도 비례해 늘어납니다. 유효 출력과 효율은 반대로 작용하므로 두 값의 곱이 두 배가 되면 이상적인 회복 시간은 대략 절반이 됩니다.' },
    { type: 'title', text: '과도한 정확성을 약속하지 않고 결과 사용하기', level: 2 },
    { type: 'paragraph', html: '이 도구는 조건을 계획하고 비교하기 위한 것이며, 온수기를 인증하거나 설치를 설계하기 위한 것이 아닙니다. 기술 자료와 실제 시험에는 추가 손실과 측정 조건이 있으므로 실제 주기는 이상적인 추정과 다를 수 있습니다.' },
  ],
};
