import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'projector-distance-calculator';
const title = '프로젝터 투사거리 계산기 — 화면 크기 및 위치';
const description =
  '원하는 화면 크기와 프로젝터의 투사비(Throw Ratio)에 따른 정확한 설치 거리를 계산해 보세요. 실시간 시뮬레이션 기능을 제공합니다.';

const faqData = [
  {
    question: '투사비(Throw Ratio)란 무엇인가요?',
    answer:
      '특정 거리에서 화면이 얼마나 커지는지를 결정하는 숫자입니다. 투사 거리를 화면 가로 폭으로 나눈 값입니다. 투사비가 1.5라면 1.5m 거리에서 가로 1m 크기의 화면이 만들어집니다.',
  },
  {
    question: '100인치 화면을 만들려면 거리가 얼마나 필요한가요?',
    answer:
      '프로젝터의 투사비에 따라 다릅니다. 표준 투사비 1.5:1 기준으로는 약 3.3m가 필요합니다. 단초점(Short Throw) 프로젝터라면 1m 미만에서도 가능합니다.',
  },
  {
    question: '16:9와 4:3의 차이는 무엇인가요?',
    answer:
      '16:9는 영화나 최신 드라마 감상에 적합한 와이드 포맷입니다. 4:3은 프레젠테이션이나 옛날 영상에 주로 쓰이는 포맷입니다. 적절한 포맷을 선택해야 불필요한 블랙바를 줄일 수 있습니다.',
  },
  {
    question: '프로젝터 설치 높이가 중요한가요?',
    answer:
      '매우 중요합니다. 프로젝터에는 렌즈 시프트나 키스톤 보정 기능이 있습니다. 왜곡을 방지하려면 화면의 상단 또는 하단 끝부분에 맞춰 중앙에 설치하는 것이 가장 좋습니다.',
  },
];

const howToData = [
  {
    name: '투사비 확인',
    text: '프로젝터 본체나 매뉴얼에서 1.2:1 또는 1.5-1.8:1 같은 숫자를 찾습니다.',
  },
  {
    name: '화면 크기 설정',
    text: '원하는 대각선 인치 수 또는 벽면의 가로 길이를 입력합니다.',
  },
  {
    name: '화면 비율 선택',
    text: '영화는 16:9, 발표용은 4:3, 시네마스코프는 21:9를 선택하세요.',
  },
  {
    name: '설치 거리 확인',
    text: '계산기가 프로젝터 브래킷을 고정할 정확한 위치(거리)를 알려줍니다.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    { name: 'Projector Central — 투사거리 계산기', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Epson 투사 시뮬레이터', url: 'https://epson.com/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '프로젝션 설계의 정석',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '눈짐작으로 프로젝터를 설치하면 화질을 망칠 수 있습니다. 너무 가까우면 화면이 작고, 너무 멀면 밝기가 떨어집니다. 핵심은 <strong>투사비(Throw Ratio)</strong>를 정확히 파악하는 것입니다.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: '투사거리 공식', icon: 'mdi:projector' },
        { value: '< 0.4', label: '초단초점', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: '장초점', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '투사비란?',
          description: '거리와 화면 폭의 비율입니다. 투사비 1.5는 화면 폭 1m당 1.5m의 거리가 필요함을 뜻합니다.',
          icon: 'mdi:ruler',
          points: ['TR < 1: 단초점, 좁은 방에 최적', 'TR 1–2: 거실용 표준 규격', 'TR > 2: 대강당용 장초점'],
        },
        {
          title: '화면 비율(포맷)',
          description: '이미지의 가로세로 비율입니다. 잘못 쓰면 블랙바가 생기고 화면 활용도가 떨어집니다.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: HD/4K 영화 및 TV 표준', '21:9: 극장용 와이드 포맷', '4:3: 프레젠테이션용'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '전문가 설치 팁',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>렌즈 시프트 vs 키스톤:</strong> 렌즈 시프트 기능이 있다면 디지털 키스톤 대신 무조건 렌즈 시프트를 쓰세요. 키스톤은 해상도를 깎아먹습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '주변광과 스크린 게인',
      icon: 'mdi:lightbulb-on',
      badge: '전문가 조언',
      html: '<p>어둡지 않은 환경에서는 고휘도(Gain > 1.0) 스크린을 써서 명암비 저하를 방지하세요.</p>',
    },
    {
      type: 'summary',
      title: '설치 체크리스트',
      items: [
        '설치 전에 내 프로젝터의 투사비를 반드시 메모하세요.',
        '벽면 가용 공간에 맞는 최대 화면 크기를 확인하세요.',
        '렌즈 중심이 화면 중앙과 수직이 되게 설치하세요.',
        '디지털 보정보다는 가급적 물리적 위치 조정을 우선하세요.',
        '스크린에 직접 닿는 빛이 없는지 확인하세요.',
      ],
    },
  ],
  ui: {
    configTitle: '설치 설정',
    configSubtitle: '스크린 및 프로젝터 정보 입력',
    labelDiagonal: '스크린 인치(대각선)',
    labelDiagonalUnit: '인치 (")',
    labelFormat: '화면 비율',
    labelThrowRatio: '투사비 (Throw Ratio)',
    throwRatioHint: '매뉴얼 참조(예: 1.50은 가로 1m당 1.5m 거리 필요)',
    ratio169Sub: 'TV / HD',
    ratio219Sub: '영화',
    ratio43Sub: '문서',
    labelWidth: '화면 가로 길이',
    labelHeight: '화면 세로 길이',
    labelDistance: '필요 설치 거리',
    simulationBadge: '실시간 예측치',
  },
};
