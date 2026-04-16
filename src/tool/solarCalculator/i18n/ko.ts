import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';

const slug = 'solar-calculator';
const title = '태양광 패널 각도 계산기';
const description =
  '지역 위도에 따른 태양광 패널의 최적 기울기 각도를 계산합니다. 고정식 설치 및 계절별 조정 값을 확인해 보세요.';

const faqData = [
  {
    question: '지붕 각도가 이상적이지 않으면 어떻게 되나요?',
    answer:
      '큰 문제는 아닙니다. 5~10도 정도의 오차로 인한 발전량 손실은 연간 3% 미만입니다. 정확한 각도에 집착하기보다 패널에 그림자가 생기지 않도록 하는 것이 더 중요합니다.',
  },
  {
    question: '최적 각도는 전 세계 어디나 같은가요?',
    answer:
      '아니요. 위도에 따라 다릅니다. 서울(약 37°N)의 최적 각도는 적도 부근이나 남반구 호주와는 확연히 다릅니다.',
  },
  {
    question: '패널은 어느 방향을 향해야 하나요?',
    answer:
      '북반구에서는 항상 남쪽(방위각 180°)을 향해야 합니다. 남반구에서는 북쪽을 향해야 합니다.',
  },
];

const howToData = [
  {
    name: '위도 입력',
    text: '현재 위치의 위도를 입력하거나 내 위치 찾기 버튼을 사용하세요.',
  },
  {
    name: '최적 각도 확인',
    text: '고정형 설치 시 연간 최적 각도가 가장 중요한 기준 값입니다.',
  },
  {
    name: '계절별 조정 (선택 사항)',
    text: '가변형 거치대를 사용 중이라면 겨울과 여름 각도를 참고하여 발전량을 높이세요.',
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    { name: 'PVGIS — 유럽 연합 태양광 도구', url: 'https://re.jrc.ec.europa.eu/pvgis/' },
    { name: 'PVWatts 계산기', url: 'https://pvwatts.nrel.gov/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '태양광 기울기 설계의 과학',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '태양광 패널의 효율은 빛이 받는 각도에 달려 있습니다. 패널이 태양과 수직일수록 더 많은 에너지를 생산합니다.',
    },
    {
      type: 'summary',
      title: '효율적인 설치 핵심 요약',
      items: [
        '연간 최적 각도가 기본 설치 지표입니다.',
        '±5도 정도의 편차는 발전량에 큰 타격을 주지 않습니다.',
        '정확한 각도보다 그림자 방지가 최우선입니다.',
        '북반구에서는 항상 정남향으로 설치하세요.',
      ],
    },
  ],
  ui: {
    labelLatitude: '위도 (Latitude)',
    btnLocate: '내 위치 감지',
    labelOptimal: '연간 최적 각도',
    labelEfficiency: '최대 효율',
    labelWinter: '겨울철',
    labelSummer: '여름철',
    hemisphereNorth: '북반구 — 남쪽 방향 지향',
    hemisphereSouth: '남반구 — 북쪽 방향 지향',
    geoNotAvailable: '이 브라우저에서는 위치 정보 서비스를 사용할 수 없습니다.',
  },
};
