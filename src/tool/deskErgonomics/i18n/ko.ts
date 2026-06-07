import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'desk-ergonomics';
const title = '데스크 인체공학 및 작업 공간 배치 정렬';
const description =
  '키를 입력하면 의자, 책상, 모니터를 조정하는 방법을 즉시 확인할 수 있습니다. 재택근무 시 등과 목 통증을 제거하세요.';

const faqData = [
  {
    question: '책상 높이는 왜 중요한가요?',
    answer:
      '책상이 너무 높으면 어깨가 올라가며 목과 등 상부에 긴장이 생깁니다. 너무 낮으면 몸을 숙이게 되어 허리 디스크를 압박합니다. 적절한 높이는 전완이 바닥과 평행이 되고 팔꿈치가 90도를 유지하게 합니다.',
  },
  {
    question: '모니터 높이는 어느 정도로 해야 하나요?',
    answer:
      '모니터 상단은 눈높이와 같거나 약간 아래에 있어야 하며, 화면은 10도에서 20도 뒤로 기울여야 합니다. 이는 목을 중립 위치에 유지하고 자연스럽게 아래를 보는 인간 시각의 휴식 각도를 유지하여 눈의 피로를 줄입니다.',
  },
  {
    question: '화면에서 얼마나 떨어져 앉아야 하나요?',
    answer:
      '이상적인 거리는 팔 길이 정도, 대략 50에서 70센티미터입니다. 이 거리에서는 눈이 초점을 맞추기 위해 어렵게 노력하지 않으며, 머리를 움직이지 않고 화면 전체를 볼 수 있습니다. 큰 화면의 경우 비례하여 거리를 늘리세요.',
  },
  {
    question: '스탠딩 데스크가 더 좋은가요?',
    answer:
      '스탠딩 데스크는 심혈관 및 대사 문제와 연관된 장시간 앉아 있는 것을 줄입니다. 하지만 하루 종일 서 있으면 정맥과 발 문제를 일으킬 수 있습니다. 가장 좋은 방법은 교대로 하는 것입니다. 30분 앉고, 15분에서 30분 서고, 정기적으로 움직이세요.',
  },
  {
    question: '발은 바닥에 닿아야 하나요?',
    answer:
      '예. 발은 바닥에 평평하게 닿고 무릎이 90도를 유지해야 합니다. 의자가 너무 높으면 발판을 사용하세요. 발이 공중에 떠 있으면 허벅지 뒤쪽에 압력이 쌓여 혈류를 제한하고 저림을 유발합니다.',
  },
  {
    question: '의자의 최적 높이는 어느 정도인가요?',
    answer:
      '좌석은 발이 바닥에 평평하게 닿고 무릎이 약 90도로 구부러지는 높이여야 합니다. 엉덩이는 무릎과 같은 높이이거나 약간 높아야 합니다. 이렇게 하면 체중이 좌골에 고르게 분산되고 허리에 가해지는 압력을 줄입니다.',
  },
];

const howToData = [
  {
    name: '신장 측정하기',
    text: '맨발로 벽에 서서 머리 꼭대기에 표시를 합니다. 바닥에서 표시까지의 거리를 센티미터로 측정합니다.',
  },
  {
    name: '작업 공간 모드 선택하기',
    text: '앉아서 사용하는 책상이나 스탠딩 데스크 중 어떤 추천값을 원하는지 선택하세요. 각 모드는 다른 신체 비율을 사용합니다.',
  },
  {
    name: '먼저 의자 조정하기',
    text: '발이 바닥에 평평하게 닿고 무릎이 90도가 되도록 의자를 설정하세요. 엉댓이는 무릎과 같은 높이이거나 약간 높아야 합니다.',
  },
  {
    name: '책상 면 조정하기',
    text: '타이핑 시 전완이 바닥과 평행이 되도록 책상을 높이거나 낮추세요. 팔꿈치는 90도를 유지해야 합니다.',
  },
  {
    name: '모니터 배치하기',
    text: '모니터를 팔 길이 정도 떨어뜨려 배치하세요. 화면 상단은 눈높이와 같거나 약간 아래에 있어야 하며, 10도에서 20도 뒤로 기울여야 합니다.',
  },
  {
    name: '아바타로 확인하기',
    text: '화면의 아바타를 사용하여 모든 각도가 초록색인지 확인하세요. 빨간색 관절이 있으면 해당 가구를 조정하세요.',
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

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: '나쁜 데스크 환경의 숨겨진 비용',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '대부분의 사람들은 하루에 8시간 이상 데스크에서 보내지만, 의자, 책상, 모니터가 자신의 몸에 맞는지 측정하는 사람은 거의 없습니다. 불과 몇 센티미터의 불일치만으로도 목, 어깨, 허리에 만성적인 긴장을 유발할 수 있습니다. 몇 달에서 몇 년이 지나면 이 긴장은 통증이 되고, 통증은 부상으로 변합니다. 다행히도 최적의 인체공학은 키라는 하나의 측정값으로 정확하게 계산할 수 있습니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: '평균 데스크 시간', icon: 'mdi:desk' },
        { value: '90°', label: '이상적인 팔꿈치 각도', icon: 'mdi:angle-acute' },
        { value: '60cm', label: '최적의 화면 거리', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '왜 원 사이즈가 모두에게 맞지 않는가',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '표준 책상은 높이 73센티미터이고 표준 의자는 높이 45센티미터입니다. 이 치수는 수십 년 전 평균적인 남성 사무원을 위해 설계되었습니다. 키가 175센티미터 미만이거나 185센티미터를 초과하는 경우, 이러한 기본값은 자세에 적극적으로 해를 끼칩니다. 여성, 청소년, 그리고 평균보다 몸통이 길거나 짧은 사람들은 특히 기성 가구에 잘 맞지 않습니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '불량한 환경',
          description: '시간이 지남에 따라 긴장을 유발하는 일반적인 가구 기본값입니다.',
          icon: 'mdi:alert',
          points: ['모니터가 너무 높거나 낮음', '책상이 어깨를 올리게 함', '발이 바닥에 닿지 않음', '의자에 허리 지지가 없음'],
        },
        {
          title: '최적의 환경',
          description: '신체 비율에 기반한 개인화된 측정값입니다.',
          icon: 'mdi:check-circle',
          points: ['모니터가 눈높이', '팔꿈치가 90도', '발이 바닥에 평평하게 닿음', '허리가 완전히 지지됨'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '빠른 자세 체크리스트',
      icon: 'mdi:clipboard-check',
      badge: '액션',
      html: '<p style="margin:0">등을 의자에 기대 책 앉으세요. 무릎 뒤쪽과 좌석 가장자리 사이에 작은 간격이 있는지 확인하세요. 타이핑할 때 손목이 곧은지 확인하세요. 모니터 상단은 눈높이를 넘지 않아야 합니다. 30분마다 2분간 걷는 휴식을 취하세요.</p>',
    },
    {
      type: 'title',
      text: '앉기와 서기의 과학',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '인간의 몸은 몇 시간 동안 한 자세를 유지하도록 설계되지 않았습니다. 앉아 있을 때, 서 있을 때와 비교하여 허리 디스크에 가해지는 압력이 40퍼센트 증가합니다. 서서 가만히 있으면, 피가 다리에 고이고 심장은 이를 다시 올리기 위해 더 힘들게 일해야 합니다. 가장 건강한 작업 리듬은 30분에서 60분마다 앉기와 서기를 교대로 하고, 짧은 산책을 병행하는 것입니다. 이 도구는 두 모드를 모두 계산하므로 높이 조절 책상을 올바르게 설정할 수 있습니다.',
    },
    {
      type: 'summary',
      title: '인체공학적 작업 공간 구축 방법',
      items: [
        '맨발의 키를 센티미터로 측정하세요.',
        '이 시뮬레이터를 사용하여 의자, 책상, 모니터의 정확한 높이를 얻으세요.',
        '먼저 의자를 조정하고, 그 다음 책상, 마지막으로 모니터를 조정하세요.',
        '스탠딩 데스크를 사용하는 경우, 앉아서 작업할 때의 책상 높이보다 30센티미터 높게 설정하세요.',
        '모니터를 팔 길이 정도 떨어뜨려 배치하고, 10도에서 20도 뒤로 기울이세요.',
        '30분마다 2분간 걷거나 스트레칭하는 휴식을 취하세요.',
      ],
    },
  ],
  ui: {
    labelMode: '작업 공간 모드',
    modeSit: '앉아서 작업',
    modeStand: '서서 작업',
    labelHeight: '당신의 키',
    unitCm: 'cm',
    labelGender: '체격',
    genderMale: '남성',
    genderFemale: '여성',
    labelChair: '의자',
    labelDesk: '책상',
    labelMonitor: '모니터',
    labelDistance: '거리',
    labelAngle: '각도',
    labelGood: '양호',
    labelAdjust: '조정',
    badgeChair: '좌석',
    badgeDesk: '면',
    badgeMonitor: '화면',
    tipScreenLow: '모니터를 올리세요',
    tipScreenHigh: '모니터를 내리세요',
    tipDeskLow: '책상을 올리세요',
    tipDeskHigh: '책상을 내리세요',
    tipChairLow: '의자를 올리세요',
    tipChairHigh: '의자를 내리세요',
    tipDistance: '화면을 팔 길이로 이동하세요',
  },
};
