import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vampire-draw-simulator';
const title = '대기 전력(뱀파이어 전력) 시뮬레이터';
const description =
  '기기가 대기 모드에서 얼마나 많은 전기를 낭비하는지 확인하세요. TV, 라우터, 충전기 등의 팬텀 부하로 인한 숨겨진 연간 비용을 계산하세요.';

const faqData = [
  {
    question: '뱀파이어 전력이나 팬텀 부하란 무엇인가요?',
    answer:
      '뱀파이어 전력은 전자기기가 꺼진 상태나 대기 모드에서 소비하는 전기입니다. 많은 기기가 리모컨에 반응하거나, 네트워크 연결을 유지하거나, 내부 시계를 계속 작동시키기 위해 부분적으로 활성 상태를 유지하기 때문입니다.',
  },
  {
    question: '대기 전력의 연간 비용은 얼마인가요?',
    answer:
      '평균 가정은 대기 전력만으로 연간 50에서 150유로를 낭비합니다. 최신 TV 한 대가 지속적으로 10에서 20와트를 소비하면, 전기 요금에 따라 연간 약 15에서 30유로에 해당합니다.',
  },
  {
    question: '대기 상태에서 가장 많이 소비하는 기기는 무엇인가요?',
    answer:
      '가장 큰 범인은 셋톱박스, 게임 콘솔, 절전 모드로 남겨진 데스크톱 컴퓨터, 스마트 TV, 오래된 외부 전원 어댑터입니다. 케이블 및 위성 TV 박스는 거의 진정한 대기 상태로 들어가지 않기 때문에 특히 낭비가 큽니다.',
  },
  {
    question: '기기의 플러그를 정말 뽑으면 돈을 절약할 수 있나요?',
    answer:
      '네. 기기의 플러그를 뽑거나 마스터 콘센트가 있는 고급 전원 분배기를 사용하면 대기 소비를 완전히 없앨 수 있습니다. 대기 기기 20개를 가진 일반적인 가정에서는 연간 40에서 120유로를 절약할 수 있습니다.',
  },
  {
    question: '스마트 전원 분배기는 효율적인가요?',
    answer:
      '스마트 또는 고급 전원 분배기는 마스터 기기가 꺼지면 주변 기기의 전원을 차단합니다. 엔터테인먼트 센터나 컴퓨터 워크스테이션과 함께 사용하면 몇 달 안에 원가를 회수할 수 있습니다.',
  },
  {
    question: '집에서 대기 전력을 측정하려면 어떻게 해야 하나요?',
    answer:
      '저렴한 플러그인 전력계(와트미터)를 사용하여 각 기기가 꺼진 상태나 유휴 상태에서 정확히 몇 와트를 소비하는지 측정할 수 있습니다. 또는 이 시뮬레이터는 제조사 평균값과 실험실 측정값을 기반으로 한 표준화된 추정치를 제공합니다.',
  },
];

const howToData = [
  {
    name: '각 방을 점검하기',
    text: '24시간 내내 플러그가 꽂혀 있는 모든 기기를 세세요. TV, 전자레인지, 라우터, 프린터, 게임 콘솔, 휴대폰 충전기를 포함하세요.',
  },
  {
    name: '일일 대기 시간 추정하기',
    text: '대부분의 기기는 하루 20에서 24시간 대기 상태입니다. 각 기기의 평균값을 입력하거나 기본값인 24시간을 사용하세요.',
  },
  {
    name: '전기 요금 설정하기',
    text: '킬로와트시당 지불하는 금액을 입력하세요. 이는 전기 요금청구서에 인쇄되어 있습니다.',
  },
  {
    name: '뱀파이어 부하 요약 보기',
    text: '시뮬레이터는 총 낭비 와트수, 연간 킬로와트시, 그리고 숨겨진 연간 비용을 보여줍니다. 카테고리 배지를 사용하여 귀하의 가정이 낮음, 보통, 높음 또는 극심한지 확인하세요.',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: '팬텀 부하: 비용을 지불하지만 사용하지 않는 전기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '집안의 모든 콘센트 중 케이블이 꽂힌 것은 <strong>팬텀 전기</strong>의 잠재적 공급원입니다. 스위치가 꺼져 있어도 기기는 계속 전력을 소비합니다. 단 몇 와트일 수 있지만, 하루 24시간, 1년 365일을 곱하면 그 와트는 수백 킬로와트시가 되고, 귀하의 주머니에서 진짜 돈이 나가게 됩니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: '가정 전기요금의', icon: 'mdi:flash' },
        { value: '23h', label: '일일 평균 대기 시간', icon: 'mdi:clock-outline' },
        { value: '30W', label: '상위 기기 평균', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '절대 자지 않는 기기들',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '현대 가정에는 평균 40대의 전자 기기가 있습니다. 그 중 약 절반은 계속 전력망에 연결되어 있습니다. 최근 몇 년 동안 에너지 규제로 대기 효율성이 향상되었지만, 기기의 수는 늘어났습니다. 인스턴트 온 모드의 게임 콘솔 한 대가 15와트를 소비할 수 있습니다. 퀵 스타트 기능이 있는 TV는 12와트를 소비할 수 있습니다. 라우터, 모뎀, 스마트 스피커, 시계가 달린 전자레인지, 프린터, 충전기를 더하면, 총 영구 배경 소비는 빠르게 100와트를 초과합니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '저영향 가정',
          description: '스마트 분배기와 플러그 뽑기 습관을 통해 대기 전력을 적극적으로 관리하는 가정입니다.',
          icon: 'mdi:leaf',
          points: ['총 대기 전력 50와트 미만', '연간 비용 50유로 미만', '고급 전원 분배기 사용'],
        },
        {
          title: '고영향 가정',
          description: '엔터테인먼트 센터, 여러 대의 게임 콘솔, 항상 켜진 컴퓨터를 가진 일반적인 가정입니다.',
          icon: 'mdi:lightning-bolt',
          points: ['총 대기 전력 150와트 초과', '연간 비용 150유로 초과', '많은 기기가 퀵 스타트 모드'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '빠른 절약 체크리스트',
      icon: 'mdi:check-circle',
      badge: '조치',
      html: '<p style="margin:0">사용하지 않을 때 휴대폰 충전기를 뽑으세요. 엔터테인먼트 센터에는 마스터 제어형 전원 분배기를 사용하세요. TV와 콘솔의 퀵 스타트나 인스턴트 온 모드를 비활성화하세요. 슬립 모드로 두는 대신 데스크톱 컴퓨터를 끄세요.</p>',
    },
    {
      type: 'title',
      text: '와트가 생각보다 빠르게 누적되는 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '와트는 에너지 사용 속도입니다. 1와트를 1시간 동안 사용하면 1와트시입니다. 지속적으로 10와트를 소비하는 기기는 연간 87.6킬로와트시를 사용합니다. 킬로와트시당 평균 0.25유로의 가격으로, 그 기기 한 대의 연간 비용은 21유로가 넘습니다. 이제 집에 꽂혀 있는 모든 기기에 이를 곱해보세요.',
    },
    {
      type: 'summary',
      title: '뱀파이어 부하를 줄이는 방법',
      items: [
        '이 시뮬레이터나 플러그인 전력계로 가장 큰 소비 기기를 파악하세요.',
        '메인 기기가 꺼졌을 때 대기 전원을 차단하는 스마트 전원 분배기에 기기를 그룹화하세요.',
        '가능한 한 항상 켜짐, 퀵 스타트, 네트워크 대기 기능을 비활성화하세요.',
        '매일 사용하지 않는 충전기와 소형 가전의 플러그를 뽑으세요.',
        '오래된 외부 전원 어댑터를 현대적이고 효율적인 모델로 교체하는 것을 고려하세요.',
      ],
    },
  ],
  ui: {
    sectionTitle: '팬텀 부하 감사',
    labelDevices: '연결된 대기 기기',
    labelHours: '일일 대기 시간',
    unitHours: 'h',
    labelPrice: '전기 요금',
    unitPrice: '/kWh',
    resultBadge: '뱀파이어 부하 결과',
    labelAnnualKwh: '연간 낭비 전력',
    labelAnnualCost: '숨겨진 연간 비용',
    labelMonthlyCost: '월간 환산',
    labelDevicesCount: '계산된 기기 수',
    labelTotalWatts: '총 대기 와트',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: '통화',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: '낮은 부하',
    categoryModerate: '보통 부하',
    categoryHigh: '높은 부하',
    categoryExtreme: '극심한 부하',
    addDevice: '기기 추가',
    removeDevice: '제거',
    modalAddTitle: '대기 기기 추가',
    labelDeviceName: '기기 이름',
    labelDeviceWatts: '대기 시 와트',
    btnSave: '저장',
    btnCancel: '취소',
  },
};
