import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tile-layout-calculator';
const title = '타일 배치 및 손실 계산기';
const description =
  '방 바닥을 정밀하게 계획하세요. 타일의 정확한 수량, 필요한 박스 수, 총 비용을 계산하고 인터랙티브 그리드 미리보기로 실시간 레이아웃을 시각화합니다.';

const faqData = [
  {
    question: '방에 필요한 타일 수량을 어떻게 계산하나요?',
    answer:
      '방의 너비와 길이를 측정하고, 타일 크기를 선택한 뒤 줄루 폭을 입력하세요. 계산기는 방 크기를 타일 크기에 줄루를 더한 값으로 나누어, 행과 열당 필요한 타일의 정확한 수를 계산합니다.',
  },
  {
    question: '타일 구매 시 몇 퍼센트의 손실을 추가해야 하나요?',
    answer:
      '표준 직사각형 방은 10% 손실을 추가하세요. 모서리가 많거나 대각선 배치, 복잡한 커팅이 필요한 방은 15%로 늘리세요. 이는 파손과 절단 실수를 커버합니다.',
  },
  {
    question: '줄루 두께가 타일 수량에 영향을 주나요?',
    answer:
      '네. 줄루가 넓을수록 각 타일의 실제 커버 면적이 줄어들어 필요한 총 수량이 약간 늘어납니다. 계산기는 이를 각 행과 열에 자동으로 반영합니다.',
  },
  {
    question: '손실률 외에 추가 박스를 구매해야 하나요?',
    answer:
      '가능하다면 한 박스를 여분으로 구매하는 것이 현명합니다. 생산 배치에 따라 색조가 다를 수 있으며, 동일한 여분 타일이 있으면 향후 보수가 원활합니다.',
  },
  {
    question: '비정형 방에 타일을 시공하려면 어떻게 해야 하나요?',
    answer:
      '방을 작은 직사각형으로 나눈 뒤 각 구역을 따로 계산하고 합산하세요. 부분 박스는 항상 올림하여 완전한 커버를 보장하세요.',
  },
  {
    question: '세라믹과 포세린 타일의 손실 차이는 무엇인가요?',
    answer:
      '포세린은 더 단단하고 자르기 어려워, 일반 세라믹에 비해 절단 손실이 2~3% 더 발생할 수 있습니다. 두 재료 모두 동일한 측정 과정을 따릅니다.',
  },
  {
    question: '사용하지 않은 타일 박스는 반품할 수 있나요?',
    answer:
      '대부분의 판매점은 개봉하지 않은 박스를 30일 이내에 반품을 받습니다. 영수증을 반드시 보관하고, 시공이 완전히 끝날 때까지 여분 박스는 개봉하지 마세요.',
  },
];

const howToData = [
  {
    name: '방을 측정하세요',
    text: '선호하는 단위계로 바닥의 너비와 길이를 기록하세요.',
  },
  {
    name: '타일과 줄루를 선택하세요',
    text: '타일 크기와 원하는 줄루 폭을 선택하세요.',
  },
  {
    name: '계산하고 시각화하세요',
    text: '값을 계산기에 입력하고, 손실률을 조정한 뒤 실시간 레이아웃 미리보기를 확인하세요.',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: '바닥 타일 계획 및 손실 제어의 완벽한 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '성공적인 타일 시공은 첫 번째 접착제를 바르기 전부터 시작됩니다. 정밀한 측정, 지능적인 배치 계획, 그리고 정확한 손실 예측이 리모델링이 예산과 일정 내에 완료될지를 결정합니다. <strong>우리의 인터랙티브 타일 배치 계산기</strong>는 원시 치수를 시각적인 평면도로 변환하여, 한 행에 몇 장이 들어가는지, 몇 박스를 사야 하는지, 비용이 어디로 가는지 정확히 보여줍니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: '표준 손실', icon: 'mdi:alert-circle' },
        { value: '30년 이상', label: '타일 수명', icon: 'mdi:clock-outline' },
        { value: '48시간', label: '평균 시공', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '대형 포맷 타일',
          description: '60cm를 초과하는 타일은 매끄럽고 현대적인 느낌을 주지만, 완벽하게 평평한 기반이 필요하며 작은 방에서는 절단 손실이 더 큽니다.',
          icon: 'mdi:arrow-expand',
          points: ['줄루가 적음', '프리미엄 시각 효과', '좁은 공간에서 절단 손실 증가'],
        },
        {
          title: '소형 모자이크 타일',
          description: '욕실과 복잡한 패턴에 이상적입니다. 비정형 형태에 적응하지만 더 많은 줄루와 시공 시간이 필요합니다.',
          icon: 'mdi:apps',
          points: ['장애물 주변 유연성', '줄루가 더 많이 필요', '시공 시간이 더 긺'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '레이아웃 시각화가 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '구매 전 타일 그리드를 보면 비용이 큰 낭패를 피할 수 있습니다. 라이브 미리보기는 선택한 타일 크기가 가장자리에 어색한 좁은 띠를 남기는지, 아니면 균형 잡히고 대칭적인 바닥을 만드는지 보여줍니다. 계산기에서 줄루 폭과 타일 방향을 조정하여, 주문 전에 미관과 효율성 모두에 최적화된 배치를 만들 수 있습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '빠른 커버리지 참조표',
      icon: 'mdi:table',
      badge: '참조',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 1㎡당 11장</li><li><strong>45 x 45 cm</strong> → 1㎡당 5장</li><li><strong>60 x 60 cm</strong> → 1㎡당 3장</li><li><strong>60 x 120 cm</strong> → 1㎡당 1.5장</li></ul>',
    },
    {
      type: 'summary',
      title: '손실을 최소화하는 전문가 팁',
      items: [
        '직선 배치는 10% 추가, 대각선이나 헤링본은 15% 추가로 주문하세요.',
        '색상 일관성을 위해 모든 박스는 동일 생산 배치를 보관하세요.',
        '행을 계획하기 전에 방의 대각선을 측정하여 직각을 확인하세요.',
        '대형 포맷 타일은 방 너비가 타일 길이보다 큰 경우에만 사용하여 과도한 절단을 피하세요.',
        '박스 수량은 항상 올림하세요. 두 번째 배송보다 저렴합니다.',
      ],
    },
  ],
  ui: {
    sectionTitle: '방 설정',
    labelRoomWidth: '방 너비',
    labelRoomLength: '방 길이',
    labelTileWidth: '타일 너비',
    labelTileLength: '타일 길이',
    labelGrout: '줄루 폭',
    labelWaste: '손실률',
    labelTilesPerBox: '박스당 타일 수',
    labelPrice: '박스당 가격',
    labelPattern: '배치 패턴',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: '장',
    unitPrice: '/박스',
    resultBadge: '실시간 레이아웃 미리보기',
    labelArea: '바닥 면적',
    labelTiles: '총 타일 수',
    labelBoxes: '필요한 박스',
    labelCost: '총 비용',
    labelWasteCount: '손실 타일',
    labelCuts: '부분 절단',
    currency: 'KRW',
    btnMetric: '미터법',
    btnImperial: '야드파운드법',
    btnPatternStraight: '직선',
    btnPatternBrick: '벽돌 시공',
    btnPatternDiagonal: '대각선',
    badgeOptimal: '최적 레이아웃',
    badgeWarning: '손실 과다 경고',
    visualTitle: '레이아웃 미리보기',
  },
};
