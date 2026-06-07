import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'appliance-cost-calculator';
const title = '가전제품 수도와 전기 1회 비용 계산기';
const description =
  '세탁기, 식기세척기, 건조기의 1회당 실제 비용을 계산하세요. 각 사이클에 들어가는 전기, 수도, 세제 비용을 정확히 확인하고 에코 모드로 전환하면 얼마나 절약할 수 있는지 알아보세요.';

const faqData = [
  {
    question: '세탁기 한 사이클 비용은 얼마인가요?',
    answer:
      '일반적인 에코 40°C 사이클은 약 0.45 kWh 전기와 40리터 물을 사용합니다. 유럽 평균 가격 기준으로 회당 약 0.10~0.15유로입니다. 강력 60°C 사이클은 1.2 kWh와 70리터를 초과하여 회당 0.30유로 이상이 될 수 있습니다.',
  },
  {
    question: '밤에 식기세척기를 돌리면 더 저렴한가요?',
    answer:
      '전력 공급사가 시간대별 요금제를 사용하는 경우, 식기세척기를 비수요 시간대에 작동하면 에너지 비용을 30% 이상 절감할 수 있습니다. 수요 시간대는 일반적으로 평일 아침과 저녁입니다. 정확한 비수요 시간대를 확인하려면 계약서나 스마트 미터 데이터를 확인하세요.',
  },
  {
    question: '건조기가 전기를 많이 사용하나요?',
    answer:
      '네. 건조기는 가정에서 가장 전기를 많이 소비하는 기기 중 하나입니다. 한 번의 만땅 세탁물은 2.5~3.5 kWh를 소비하여 사이클당 0.50~0.80유로가 듭니다. 히트펌프 건조기를 사용하거나 야외에 빨래를 널면 이 비용을 60~80% 절감할 수 있습니다.',
  },
  {
    question: '식기세척기는 물을 얼마나 사용하나요?',
    answer:
      '현대 식기세척기는 놀랍도록 효율적입니다. 표준 에코 사이클은 회당 8~12리터 물만 사용하고, 강력 프로그램은 14~16리터를 사용할 수 있습니다. 이는 흐르는 수도꼭지에서 같은 그릇을 손으로 설거지하는 것보다 훨씬 적으며, 손 설거지는 일반적으로 40~60리터를 소비합니다.',
  },
  {
    question: '가전제품을 사용하기 가장 저렴한 시간은 언제인가요?',
    answer:
      '시간대별 요금제에서는 가장 저렴한 시간대가 보통 심야, 이른 새벽, 주말입니다. 이 비수요 시간대는 평일 수요 시간대보다 30~50% 저렴할 수 있습니다. 일부 공급사는 주말에 무료 시간대를 제공하기도 합니다.',
  },
  {
    question: '에코 모드로 전환하면 정말 돈을 절약할 수 있나요?',
    answer:
      '물론입니다. 에코 모드는 더 낮은 온도, 더 짧은 가열 단계, 더 적은 물을 사용합니다. 1년 내내 세탁기와 식기세척기를 일반에서 에코로 전환하면, 사용 빈도와 지역 가격에 따라 전기와 수도비 합계 50~100유로를 절약할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '가전제품 선택',
    text: '계산기 상단의 세탁기, 식기세척기 또는 건조기 아이콘을 탭하세요. 각 기기는 에너지와 물 소비량이 다릅니다.',
  },
  {
    name: '코스 유형 선택',
    text: '세탁 프로그램을 설정하려면 에코, 표준, 강력 슬라이더를 사용하세요. 에코는 에너지와 물을 더 적게 사용합니다. 강력은 가장 많이 사용합니다.',
  },
  {
    name: '지역 요금 입력',
    text: '1kWh당 전기 요금과 1리터당 수도 요금을 입력하세요. 이는 공과금 청구서나 공급사 웹사이트에서 확인할 수 있습니다.',
  },
  {
    name: '사용 빈도 설정',
    text: '주당 몇 회 실행하는지 입력하세요. 이를 통해 계산기는 연간 비용과 잠재적 연간 절약액을 추정할 수 있습니다.',
  },
  {
    name: '사용 시간 선택',
    text: '기기를 작동할 예정 시간을 선택하세요. 수요 시간대는 빨간색으로 강조 표시됩니다. 비수요 시간대는 녹색이며, 시간대별 요금제가 있으면 더 저렴합니다.',
  },
  {
    name: '세제 비용 표시',
    text: '영수증에 회당 분말, 액체 또는 캡슐 비용 추정치를 포함하려면 세제 토글을 활성화하세요.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: '매번 숨겨진 비용',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '대부분의 사람은 세탁기 한 사이클이 실제로 얼마나 드는지 모릅니다. 분기별 전기 요금을 보고 가전제품 운영이 저렴하다고 가정합니다. 사실 매주 5번 세탁하는 가족은 세탁만으로 연간 200유로 이상을 지출할 수 있습니다. 주 3회 식기세척기와 주 2회 건조기를 추가하면 연간 총액이 500유로를 넘습니다. 이 계산기는 모든 습관을 최적화할 수 있도록 1센트까지 분석합니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '0.45', label: 'kWh 에코 세탁', icon: 'mdi:washing-machine' },
        { value: '40L', label: '에코 세탁 물', icon: 'mdi:water' },
        { value: '30%', label: '피크 할증', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '작은 변화가 왜 누적되는가',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '한 사이클에서 1도의 온도나 몇 리터의 물은 사소해 보입니다. 하지만 연간 250회에 걸쳐, 이런 작은 차이들이 상당한 금액으로 누적됩니다. 60°C에서 40°C로 낮추면 회당 에너지 사용량이 약 40% 줄어듭니다. 식기세척기를 표준에서 에코로 전환하면 매번 약 3리터 물과 0.3 kWh를 절약합니다. 이는 한계적인 이득이 아닙니다. 새로운 가전을 사지 않고 공과금을 줄이는 가장 빠른 방법입니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '강력 코스',
          description: '심한 오염을 위한 최대 열과 물 사용량.',
          icon: 'mdi:alert',
          points: ['회당 1.2~3.5 kWh', '세탁기 70리터', '피크 할증 적용', '최고 연간 비용'],
        },
        {
          title: '에코 코스',
          description: '더 낮은 온도, 최적화된 시간, 최소한의 물.',
          icon: 'mdi:check-circle',
          points: ['회당 0.45~1.5 kWh', '단 8~40리터', '비수요 시간대 가능', '최저 연간 비용'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '가전제품 빠른 점검',
      icon: 'mdi:clipboard-check',
      badge: '실행',
      html: '<p style="margin:0">세탁기는 가득 찬 상태에서만 사용하세요. 일반적인 오염에는 에코 프로그램을 사용하세요. 시간대별 요금제가 있다면 식기세척기를 22:00 이후 지연 시작하도록 설정하세요. 매번 사용 후 건조기 보풀 필터를 청소하여 효율을 유지하세요. 날씨가 허락할 때마다 야외나 건조대에서 빨래를 말리세요.</p>',
    },
    {
      type: 'title',
      text: '시간대별 요금과 피크 요금',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '많은 전력 공급사가 이제 하루 중 시간대에 따라 다른 요금을 부과합니다. 수요 시간대, 보통 평일 아침과 저녁은 비수요 시간대보다 30~50% 더 비쌀 수 있습니다. 20:00에 작동시킨 한 회 세탁은 0.18유로가 들 수 있는데, 같은 세탁을 02:00에 하면 0.12유로만 듭니다. 1년 동안 가전제품 사용 시간을 정확히 맞추면 다른 것을 바꾸지 않고도 50~100유로를 절약할 수 있습니다. 이 계산기는 수요 시간대를 빨간색으로, 비수요 시간대를 녹색으로 표시하여 미리 계획할 수 있게 합니다.',
    },
    {
      type: 'summary',
      title: '가전제품 비용을 줄이는 방법',
      items: [
        '이 계산기를 사용하여 가전제품의 회당 실제 비용을 찾으세요.',
        '가능할 때마다 에코 모드로 전환하여 최대 40% 에너지를 절약하세요.',
        '효율을 최대화하기 위해 부분 로드 대신 만땅으로 운영하세요.',
        '요금이 시간대별 요금을 지원하면 사이클을 비수요 시간대로 미루세요.',
        '건조기를 사용하는 대신 야외에서 빨래를 말려 이 비용을 완전히 없애세요.',
        '필터를 청소하고 정기적으로 제거하여 가전제품이 정격 효율로 작동하도록 하세요.',
      ],
    },
  ],
  ui: {
    labelAppliance: '가전제품',
    applianceWasher: '세탁기',
    applianceDishwasher: '식기세척기',
    applianceDryer: '건조기',
    labelCycle: '코스',
    cycleEco: '에코',
    cycleNormal: '표준',
    cycleIntensive: '강력',
    labelElectricityPrice: '전기 요금',
    unitPriceKwh: '₩/kWh',
    labelWaterPrice: '수도 요금',
    unitPriceLiter: '₩/L',
    labelDetergent: '세제',
    labelDetergentToggle: '세제 비용 포함',
    labelHour: '사용 예정 시간',
    peakBadge: '피크 요금 적용 중',
    offPeakBadge: '비피크 요금',
    receiptTitle: '비용 세부 내역',
    receiptElectricity: '전기',
    receiptWater: '수도',
    receiptDetergent: '세제',
    receiptTotal: '사이클당 합계',
    receiptPerYear: '연간 예상',
    comparisonTitle: '스마트 전환',
    comparisonText: '표준에서 에코로 전환하면 매번 돈을 절약할 수 있습니다.',
    comparisonSavings: '연간 절약액',
    comparisonMonths: '개월분 세제',
    badgePeak: '피크',
    badgeOffPeak: '비피크',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: '년',
    labelCyclesPerWeek: '주당 사이클',
    currencySign: '₩',
    labelCurrency: '통화',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
