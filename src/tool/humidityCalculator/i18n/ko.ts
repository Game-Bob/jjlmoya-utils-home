import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'humidity-calculator';
const title = '실내 습도 및 제습기 가동 시간 예측 도구';
const description =
  '습기 많은 방을 건강한 습도 수준으로 만들기 위해 제습기가 제거해야 하는 수분량을 계산하세요. 예상 가동 시간, 곰팡이 위험 경고 및 쾌적 구역 시각화를 하나의 인터랙티브 도구에서 확인할 수 있습니다.';

const faqData = [
  {
    question: '제습기는 하루에 얼마나 오래 가동해야 합니까?',
    answer:
      '중간 정도로 습기가 많은 방에서 표준 가정용 제습기는 상대 습도 50%를 유지하기 위해 일반적으로 하루 8시간에서 12시간 가동이 필요합니다. 매우 습한 환경이나 수해 후에는 기준 건조 상태에 도달하기 위해 24시간에서 48시간 연속 가동이 필요할 수 있습니다.',
  },
  {
    question: '곰팡이를 방지하는 실내 습도 수준은 어느 정도입니까?',
    answer:
      '실내 상대 습도를 60% 이하로 유지하면 곰팡이 성장이 억제됩니다. 인간의 건강과 건물 보존을 위한 이상적인 쾌적 구역은 상대 습도 40%에서 50% 사이입니다. 70% 이상의 수준은 곰팡이 포자가 24시간에서 48시간 내에 발아할 수 있는 고위험 환경을 만듭니다.',
  },
  {
    question: '공기는 얼마나 많은 수분을 포함할 수 있습니까?',
    answer:
      '공기가 포함할 수 있는 수증기의 양은 온도에 따라 달라집니다. 20도에서 포화된 공기는 1입방미터당 약 17그램의 수분을 포함합니다. 25도에서는 이것이 대략 1입방미터당 23그램으로 증가합니다. 25도와 습도 70%인 30제곱미터 방에는 공기 중에 보이지 않는 물이 약 8리터 포함되어 있습니다.',
  },
  {
    question: '온도가 제습기 효율에 영향을 줍니까?',
    answer:
      '예. 압축기 기반 제습기는 18도 이상에서 가장 잘 작동합니다. 15도 이하에서는 증발기 코일에 서리가 낄 수 있기 때문에 성능이 저하됩니다. 제습기(데시칸트)는 차고나 지하실과 같은 추운 공간에 더 적합합니다. 응결 대신 화학적 건조 과정을 사용하기 때문입니다.',
  },
  {
    question: '어떤 크기의 제습기가 필요합니까?',
    answer:
      '50제곱미터 이하의 중간 정도 습기가 많은 방에는 하루 10리터에서 12리터 용량의 기기가 일반적으로 충분합니다. 습기가 매우 많은 방이나 50제곱미터 이상의 공간에는 하루 20리터 모델을 선택하세요. 홍수나 심각한 습기 후에는 하루 30리터 산업용 기기가 상태를 더 빠르게 회복시킵니다.',
  },
  {
    question: '제습기로 빨래를 건조할 수 있습니까?',
    answer:
      '예. 세탁 건조 모드가 있는 제습기는 주변 공기에서 수분을 제거하면서 실내에서 효율적으로 옷을 건조할 수 있습니다. 텀블 드라이어보다 에너지를 덜 사용하고 창문과 벽의 결로를 방지합니다. 따뜻한 날씨에 야외에서 말리는 것과 유사한 건조 시간을 예상하세요.',
  },
];

const howToData = [
  {
    name: '방 크기 입력',
    text: '방의 바닥 면적을 제곱미터로 입력하세요. 계산기는 총 공기량을 추정하기 위해 표준 천장 높이 2.5미터를 가정합니다.',
  },
  {
    name: '온도 설정',
    text: '현재 실내 온도를 섭씨로 입력하세요. 더 따뜻한 공기는 더 많은 수분을 포함하므로, 온도는 제거해야 할 수분량에 직접적인 영향을 줍니다.',
  },
  {
    name: '현재 습도 선택',
    text: '쾌적 다이얼 또는 숫자 입력을 사용하여 현재 상대 습도 백분율을 설정하세요. 60%를 초과하는 값은 경고색으로 강조 표시됩니다.',
  },
  {
    name: '목표 습도 선택',
    text: '원하는 상대 습도를 설정하세요. 쾌적함과 곰팡이 방지를 위해 50%가 권장됩니다. 알레르기 환자에게는 40%가 이상적입니다.',
  },
  {
    name: '제습기 용량 입력',
    text: '기기의 제습 능력을 하루 리터 단위로 입력하세요. 이는 일반적으로 전면 라벨이나 사용 설명서에 인쇄되어 있습니다.',
  },
  {
    name: '결과 검토',
    text: '수분 제거 탱크 시뮬레이션, 예상 가동 시간 및 곰팡이 위험 배너를 읽고 가전제품을 얼마나 오래 가동할지 결정하세요.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: '벽 속에 숨겨진 물',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '대부분의 주택 소유주는 습한 공기가 불편할 뿐만 아니라 비싸고 위험하다는 사실을 알지 못합니다. 습기가 많은 방 하나에 보이지 않는 수증기가 수 리터 포함될 수 있습니다. 시간이 지남에 따라 이 수분은 차가운 표면에 응결되어 곰팡이 군집을 먹이고 석고, 페인트, 목재를 저하시킵니다. 정확히 얼마나 많은 물을 제거해야 하는지, 그리고 얼마나 오래 걸리는지 이해하는 것은 집과 건강을 보호하기 위한 첫걸음입니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: '이상적인 실내 습도', icon: 'mdi:water-percent' },
        { value: '8h', label: '평균 일일 가동 시간', icon: 'mdi:timer-outline' },
        { value: '70%', label: '곰팡이 위험 임계값', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '상대 습도가 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '상대 습도는 공기 중의 수분량이 아니라, 해당 온도에서 공기가 포함할 수 있는 최대량에 대한 수분의 백분율입니다. 따뜻한 공기는 더 큰 스펀지와 같습니다. 30도에서 공기는 15도에서의 거의 두 배에 가까운 수분을 포함할 수 있습니다. 이것이 창문을 열어도 방이 끈적끈적하게 느껴질 수 있는 이유입니다. 수분은 여전히 그곳에 있지만, 덜 눈에 띄는 것뿐입니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '높은 습도',
          description: '상대 습도 60% 이상. 곰팡이, 진드기 및 결로 손상의 위험이 있습니다.',
          icon: 'mdi:alert',
          points: ['창문과 벽의 결로', '곰팡이 냄새와 미생물 성장', '호흡기 자극 증가', '습한 공기의 열전도율로 인한 난방비 상승'],
        },
        {
          title: '최적 습도',
          description: '상대 습도 40%에서 50% 사이. 편안하고 건강하며 에너지 효율적입니다.',
          icon: 'mdi:check-circle',
          points: ['차가운 표면에 결로 없음', '곰팡이 포자는 휴면 상태 유지', '피부 및 호흡기 편안함', '가구 및 목재 보존'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '간편 습기 진단',
      icon: 'mdi:clipboard-check',
      badge: '조치',
      html: '<p style="margin:0">매일 아침 창문에 결로가 있는지 확인하세요. 물방울이 정기적으로 나타나면 습도가 너무 높은 것입니다. 결로가 멈출 때까지 매일 12시간 제습기를 가동하세요. 기기를 가장 습기가 많은 방, 보통 주방, 욕실 또는 지하실로 이동시키세요. 탱크는 매일 비우고 필터는 2주마다 청소하세요.</p>',
    },
    {
      type: 'title',
      text: '제습기 올바르게 사이즈 선택하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '흔한 실수는 공간에 비해 너무 작은 제습기를 구입하는 것입니다. 60제곱미터의 습기 많은 지하실에 하루 10리터 기기를 두면 목표 습도에 도달하지 못한 채 연속 가동할 것입니다. 이 계산기를 사용하여 방에 필요한 정확한 제습량을 확인하세요. 예상 가동 시간이 하루 20시간을 초과하면 더 큰 용량의 기기나 더 나은 환기가 필요합니다.',
    },
    {
      type: 'summary',
      title: '집을 건조하게 유지하는 방법',
      items: [
        '이 계산기를 사용하여 모든 방에 필요한 정확한 수분 제거량을 결정하세요.',
        '건강과 쾌적함을 위해 실내 상대 습도를 40%에서 50% 사이로 유지하세요.',
        '곰팡이 위험 배너가 초록색으로 바뀔 때까지 제습기를 가동하세요.',
        '자동 정지를 방지하기 위해 물 탱크가 가득 차기 전에 비우세요.',
        '기류와 제습율을 최대로 유지하기 위해 필터를 정기적으로 청소하세요.',
        '더 빠른 결과를 얻기 위해 제습과 함께 방 환기를 개선하세요.',
      ],
    },
  ],
  ui: {
    labelRoomSize: '방 크기',
    unitM2: 'm2',
    labelTemperature: '온도',
    unitCelsius: '°C',
    labelCurrentHumidity: '현재 습도',
    labelTargetHumidity: '목표 습도',
    labelCapacity: '제습기 용량',
    unitLitersDay: 'L/일',
    comfortDialTitle: '쾌적 구역',
    comfortCurrent: '현재',
    comfortTarget: '목표',
    tankTitle: '공기 중의 수분',
    tankLiters: '리터',
    runtimeTitle: '예상 가동 시간',
    runtimeUnitH: '시간',
    runtimeUnitM: '분',
    moldRiskTitle: '곰팡이 위험',
    moldRiskHigh: '위험 높음',
    moldRiskMedium: '위험 보통',
    moldRiskLow: '위험 낮음',
    extractionLabel: '제거 대상',
    tipEnergy: '전력 피크 시간 외에 제습기를 가동하면 전기 요금을 크게 줄일 수 있습니다.',
    tipMold: '습도를 50% 이하로 유지하면 곰팡이 포자가 표면에서 발아하는 것을 방지합니다.',
    unitPercent: '%',
    badgeHigh: '높음',
    badgeMedium: '보통',
    badgeLow: '낮음',
  },
};
