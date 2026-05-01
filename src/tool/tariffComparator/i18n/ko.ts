import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'electricity-tariff-comparator';
const title = '전기 요금 비교: 고정 요금 vs 변동 요금';
const description =
  '나에게 어떤 전기 요금제가 가장 유리한지 확인해 보세요. 연간 사용량을 기준으로 고정 요금제와 변동 요금제를 비교합니다.';

const faqData = [
  {
    question: '고정 요금과 변동 요금 중 무엇이 더 좋나요?',
    answer:
      '고정 요금은 가격 예측이 가능합니다. 변동 요금은 시장 가격이 낮을 때 매우 저렴할 수 있지만 변동성이 큽니다. 시뮬레이터를 통해 결정해 보세요.',
  },
  {
    question: '연간 소비량은 어떻게 확인하나요?',
    answer:
      '최근 전기 요금 고지서의 "연간 사용량"(kWh) 항목에서 확인할 수 있습니다.',
  },
  {
    question: '계약 전력이란 무엇인가요?',
    answer:
      '동시에 사용할 수 있는 최대 전기 부하(kW)를 말합니다.',
  },
];

const howToData = [
  {
    name: '고지서 확인',
    text: '연간 소비량(kWh)과 계약 전력(kW)을 확인합니다.',
  },
  {
    name: '수치 설정',
    text: '실제 데이터에 맞게 슬라이더를 조정합니다.',
  },
  {
    name: '결과 비교',
    text: '두 방식의 연간 예상 비용 차이를 확인합니다.',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
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
      text: '전기 요금 절약하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '나에게 맞는 요금제를 선택하면 연간 수십만 원을 절약할 수 있습니다.',
    },
    {
      type: 'summary',
      title: '절약 팁',
      items: [
        '정기적으로 새로운 요금제를 비교해 보세요.',
        '불필요하게 높은 계약 전력을 조정하여 기본료를 줄이세요.',
        '가능하다면 요금이 저렴한 시간대에 가전제품을 사용하세요.',
      ],
    },
  ],
  ui: {
    labelConsumption: '연간 소비량',
    unitKwhYear: 'kWh/년',
    labelPower: '계약 전력',
    unitKw: 'kW',
    labelMarket: '변동/규제 요금제',
    labelFree: '고정 요금제',
    labelAnnualEst: '연간 예상 비용',
    labelPowerTerm: '기본 요금 (고정분)',
    labelEnergyTerm: '전력량 요금 (사용분)',
    labelDashboard: '에너지 대시보드',
    labelMaxPower: '최대 전력 피크',
    labelMaxPowerEst: '예상 피크',
    labelCo2: '탄소 발자국',
    labelCo2Est: '연간 예상치',
    labelSimulator: '시나리오 시뮬레이터',
    labelSolar: '태양광 자가소비',
    labelSolarDesc: '패널 설치 시 절감 시뮬레이션 (30% 감소 가정)',
    labelShift: '부하 이동 (피크 시프트)',
    labelShiftDesc: '저렴한 시간대로 옮긴 비율:',
    badgeBetter: '더 저렴한 선택',
    badgeWorseYear: '년',
    currencySign: '₩',
    monthLabels: '1월,2月,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월',
  },
};
