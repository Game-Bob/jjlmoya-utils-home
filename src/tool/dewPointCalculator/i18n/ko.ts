import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dew-point-calculator';
const title = '이슬점 계산기';
const description = '습도와 실내 온도를 사용하여 벽면의 결로 온도를 계산합니다. 습기를 방지하고 건물의 건강을 지키기 위한 필수 도구입니다.';

const faqData = [
  {
    question: '이슬점이란 정확히 무엇인가요?',
    answer: '공기 중의 수증기가 물방울(결로)로 변하기 시작하는 온도입니다. 상대 습도가 높을수록 이슬점은 현재 기온에 가까워집니다.',
  },
  {
    question: '왜 방 구석에 곰팡이가 생기나요?',
    answer: '구석진 곳은 대개 벽면 온도가 낮은 열교(Heat bridge) 현상이 발생하기 쉽습니다. 벽면 온도가 이슬점보다 낮아지면 수분이 맺히고, 곰팡이는 이 습기를 먹고 자랍니다.',
  },
  {
    question: '집안의 습도를 낮추는 방법은 무엇인가요?',
    answer: '가장 효과적인 방법은 환기(특히 샤워나 요리 후)와 제습기 사용입니다. 실내 온도를 일정하게 유지하는 것도 공기가 결로 없이 더 많은 수증기를 머금을 수 있게 도와줍니다.',
  },
  {
    question: '결로로 인한 곰팡이가 위험한가요?',
    answer: '네. 곰팡이는 호흡기 질환, 알레르기, 천식을 유발할 수 있는 포자를 퍼뜨립니다. 이 계산기로 결로 위험을 미리 감지하는 것이 건강한 집을 만드는 첫 걸음입니다.',
  },
];

const howToData = [
  {
    name: '온도와 습도 측정',
    text: '온습도계를 사용하여 현재 방 안의 온도와 습도를 확인하세요.',
  },
  {
    name: '수치 입력',
    text: '계산기에 현재 온도(Celsius)와 습도(%)를 입력하세요.',
  },
  {
    name: '임계 온도 확인',
    text: '표면 온도가 이 온도 이하로 떨어지면 물이 맺히기 시작한다는 것을 알려줍니다.',
  },
  {
    name: '표면 온도 체크',
    text: '레이저 온도계가 있다면 벽면 온도를 측정해 보세요. 계산 결과보다 낮다면 단열 보강이나 환기가 필요합니다.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
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
      text: '이슬점이란 무엇이며 왜 우리 집에 중요한가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이슬점은 공기 중의 수증기가 액체로 변하는 온도입니다. 실내 환경에서 이 값은 "건강한 집"과 "습기 문제가 있는 집"을 나누는 경계가 됩니다. 단열이 부족한 벽면의 온도가 이슬점 아래로 떨어지면 물방울이 맺히고 이는 곰팡이가 번식하기 가장 좋은 환경이 됩니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: '안전 범위', icon: 'mdi:shield-check' },
        { value: '40–60%', label: '이상적 습도', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: '매우 위험', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '마그누스 테텐스 공식',
          description: '과학적으로 정확한 계산을 위해 세계기상기구(WMO)에서 0~50°C 사이 온도 대역에 권장하는 마그누스-테텐스 근사식을 사용합니다.',
          icon: 'mdi:calculator',
          points: ['검증된 과학적 정확도', '주거 공간 온도 대역에 최적화'],
        },
        {
          title: '열교 현상과 곰팡이',
          description: '방 구석이나 창틀은 집에서 가장 차가운 곳입니다. 이곳의 온도가 이슬점 이하로 떨어지면 곰팡이는 피할 수 없습니다.',
          icon: 'mdi:home-thermometer',
          points: ['구석진 곳은 가장 취약한 지점', '열 단열이 결로를 예방합니다'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '위험 단계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>낮은 위험 (차이 &gt; 5°C):</strong> 벽면이 안전한 상태입니다. <strong>중간 위험 (3–5°C):</strong> 구석진 곳을 주의 깊게 살피세요. <strong>높은 위험 (1–3°C):</strong> 유리창 등에 결로 가능성이 큽니다 - 즉시 환기하세요. <strong>매우 위험 (차이 &lt; 1°C):</strong> 현재 결로가 진행 중이며 곰팡이 증식 위험이 매우 높습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '골든 룰',
      icon: 'mdi:thermometer-alert',
      badge: '핵심 팁',
      html: '<p>벽면 온도와 <strong>이슬점의 차이가 3°C 이내</strong>라면 결로가 임박한 상태입니다. 자주 환기하고 상대 습도를 40~60% 사이로 유지하세요.</p>',
    },
    {
      type: 'summary',
      title: '결로를 예방하는 방법',
      items: [
        '매일 환기하세요. 특히 샤워나 요리 직후에는 필수입니다.',
        '상대 습도를 40% ~ 60% 사이로 유지하세요.',
        '주방에서는 반드시 후드를 사용하세요.',
        '환기가 안 되는 실내에서 빨래 건조를 피하세요.',
        '차가운 벽면이 생기지 않도록 단열을 보강하세요.',
      ],
    },
  ],
  ui: {
    labelTemperature: '주변 온도',
    labelHumidity: '상대 습도',
    labelDewPoint: '이슬점 온도',
    riskLow: '낮은 위험',
    riskMedium: '중간 위험',
    riskHigh: '높은 위험',
    riskExtreme: '매우 위험',
    riskLowDesc: '차이 > 5°C. 안전한 상태.',
    riskMediumDesc: '차이 3–5°C. 구석을 살피세요.',
    riskHighDesc: '차이 1–3°C. 즉시 환기 필요.',
    riskExtremeDesc: '차이 < 1°C. 결로 진행 중.',
  },
};
