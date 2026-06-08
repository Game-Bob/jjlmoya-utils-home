import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-softener';
const title = '가정용 연수기 및 염분 소비 최적화 도구';
const description =
  '수돗물 경도 수치를 분석하고, 최적의 연수기 설정과 연간 염분 소비량을 계산하세요. 물때 영향 예측, 염분 보충 일정 및 가전 제품 수명 예측을 하나의 인터랙티브 도구에서 확인하세요.';

const faqData = [
  {
    question: '수질 경도란 무엇인가요?',
    answer:
      '수질 경도는 수돗물에 녹아 있는 칼슘과 마그네슘 미네랄의 농도입니다. 그레인/갤런이나 프랑스 경도 단위로 측정됩니다. 경수는 배관에 물때를 쌓이게 하고, 난방 효율을 떨어뜨리며, 가전 제품의 수명을 단축시킵니다.',
  },
  {
    question: '연수기는 어떻게 작동하나요?',
    answer:
      '연수기는 이온 교환 수지 비즈를 사용하여 칼슘과 마그네슘 이온을 나트륨 이온으로 교환합니다. 수지가 포화되면, 시스템은 염수 용액을 탱크로 흘려보내 재생하고, 비즈를 복원하며 경성 미네랄을 배수구로 보냅니다.',
  },
  {
    question: '연수기는 1년에 얼마나 많은 염분을 사용하나요?',
    answer:
      '중등도 경수 지역의 4인 가구는 일반적으로 연간 80에서 120킬로그램의 염분을 사용합니다. 매우 경수이거나 더 큰 가구는 200킬로그램 이상 사용할 수 있습니다. 현대의 고효율 연수기는 구형 모델보다 약 30퍼센트 더 적은 염분을 사용합니다.',
  },
  {
    question: '염분 탱크는 얼마나 자주 보충해야 하나요?',
    answer:
      '대부분의 염수 탱크는 4주에서 8주마다 보충이 필요합니다. 매월 염분량을 확인하세요. 탱크가 3분의 1 미만으로 떨어지면 25킬로그램짜리 새 가방을 추가하세요. 염분이 완전히 떨어지지 않도록 하세요. 그렇지 않으면 수지가 다시 경화되어 효과를 잃게 됩니다.',
  },
  {
    question: '경수가 정말 가전 제품을 손상시키나요?',
    answer:
      '네. 가열 요소에 쌓인 물때는 더 열심히 작동하게 만들어 에너지 비용을 높이고 조기 고장을 유발합니다. 매우 경수 지역의 온수기는 예상 수명의 최대 45퍼센트를 잃을 수 있습니다. 세탁기와 식기세척기도 밸브 막힘과 드럼 스케일로 피해를 입습니다.',
  },
  {
    question: '연수를 마셔도 되나요?',
    answer:
      '연수는 대부분의 사람이 마셔도 안전합니다. 나트륨 증가량은 작으며, 하루 빵 한 조각 정도에 해당합니다. 그러나 엄격한 저나트륨 식단을 하는 사람은 음용수로 별도의 비연수 수도꼭지를 사용하거나 칼륨 기반 연수기 염분을 선택하는 것을 선호할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '수돗물 경도 입력',
    text: '수질 보고서나 테스트 스트립에서 경도 수치를 입력하세요. 단위 선택기에서 그레인/갤런이나 프랑스 경도를 선택하세요.',
  },
  {
    name: '가구 크기 설정',
    text: '집에 사는 사람 수를 선택하세요. 거주자가 많을수록 물 소비량이 높아지고 염분 고갈이 빨라집니다.',
  },
  {
    name: '연수기 용량 선택',
    text: '연수기 수지 탱크의 그레인 용량을 입력하세요. 이는 보통 제어 밸브나 사용 설명서에 인쇄되어 있습니다. 일반적인 값은 24,000 또는 32,000 그레인입니다.',
  },
  {
    name: '경도 범주 검토',
    text: '인터랙티브 경도 척도를 읽어 물이 부드러운지, 중등도 경수인지, 또는 매우 경수인지 이해하세요.',
  },
  {
    name: '염분 예측 확인',
    text: '염분 가방 적재 시뮬레이터를 확인하여 연간 필요한 25킬로그램 가방 수와 다음 보충 예정일을 확인하세요.',
  },
  {
    name: '가전 영향 검토',
    text: '세탁기, 온수기, 커피 메이커의 기준 수명을 현재 처리되지 않은 경수 상태의 예상 수명과 비교하세요.',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: '보이지 않는 경수의 비용',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '경수는 가정에서 가장 비싼 숨겨진 문제 중 하나입니다. 수도꼭지를 틀 때마다 녹아 있는 미네랄이 배관과 가전 제품을 흐릅니다. 수 개월과 수 년에 걸쳐 이러한 미네랄은 물때로 결정화되어, 가열 요소를 막고, 유량을 줄이며, 고무 패킹을 파괴하는 딱딱한 흰 껍질이 됩니다. 결과는 더 높은 에너지 비용, 짧은 가전 수명 및 잦은 유지보수 출장입니다. 연수기는 이 손상의 근원을 제거합니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: '평균 연간 염분 사용량', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: '세탁기 기준 수명', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'GPG당 연간 물때 mm', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '물때가 이토록 파괴적인 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '물때는 주전자의 미관상 얼룩만은 아닙니다. 온수기 내부에서는 가열 요소에 단열층을 형성합니다. 물때 1밀리미터마다 열 전달 효율이 최대 10퍼센트 떨어집니다. 즉, 3밀리미터 코팅은 온수 비용을 거의 30퍼센트 증가시킬 수 있습니다. 세탁기에서는 물때가 세제 활성화를 막아, 더 많은 분말을 사용해도 결과가 나빠집니다. 커피 메이커에서는 보온 장치를 망가뜨리고 쓴맛이 나는 불균일한 추출을 만듭니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '처리되지 않은 경수',
          description: '미네랄이 배관 시스템 전체와 연결된 모든 가전 제품에 자유롭게 쌓입니다.',
          icon: 'mdi:alert',
          points: ['히터와 보일러의 급속한 물때 축적', '세제와 비누 소비 증가', '가전 수명이 30에서 45퍼센트 단축', '물때의 단열 효과로 인한 높은 에너지 비용'],
        },
        {
          title: '연수',
          description: '칼슘과 마그네슘이 수도꼭지와 가전 제품에 도달하기 전에 유입 지점에서 제거됩니다.',
          icon: 'mdi:check-circle',
          points: ['가열 요소에 물때 침적 제로', '정상적인 세제 투입량으로 더 나은 결과', '가전 제품이 설계 수명을 모두 채움', '온수 난방의 낮은 에너지 소비'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '간편 경수 확인',
      icon: 'mdi:clipboard-check',
      badge: '조치',
      html: '<p style="margin:0">투명한 병에 수돗물을 담고 액체 비누 몇 방울을 넣으세요. 세게 흔드세요. 물이 탁하고 거품이 거의 안 나면 경수입니다. 맑은 수정처럼 투명하고 두껍고 안정적인 거품이 나면 부드러운 물입니다. 정확한 측정을 위해서는 총경도 테스트 스트립을 사용하거나 상수도 사업자에게 보고서를 요청하세요.</p>',
    },
    {
      type: 'title',
      text: '염분 공급량을 정확하게 맞추기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '염분을 소진하는 것은 연수기를 망치는 가장 빠른 방법입니다. 염수 탱크가 비면 수지층은 며칠 안에 다시 경화되고 시스템은 집을 보호하는 것을 멈춥니다. 이 계산기를 사용하여 연간 정확히 몇 개의 25킬로그램 가방이 필요한지 예측하세요. 결과가 10개 이상이면 더 큰 용량의 수지 탱크로 업그레이드하거나 재생 주기당 더 적은 염분을 사용하는 고효율 밸브를 고려하세요.',
    },
    {
      type: 'summary',
      title: '경수로부터 집을 보호하는 방법',
      items: [
        '이 계산기를 사용하여 정확한 수질 경도 범주와 염분 필요량을 확인하세요.',
        '주 수도 유입 지점에 적정 크기의 연수기를 설치하세요.',
        '염수 탱크가 3분의 1 미만으로 떨어지기 전에 보충하세요.',
        '최고의 수지 성능을 위해 고순도 증발 염분 펠릿을 사용하세요.',
        '3년에서 5년마다 밸브와 수지층을 점검하세요.',
        '물때 축적을 알리는 갑작스러운 증가를 나타낼 수 있는 가전 에너지 비용을 모니터링하세요.',
      ],
    },
  ],
  ui: {
    labelHardness: '수돗물 경도',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: '가구 인원',
    unitPeople: '명',
    labelSoftenerCapacity: '연수기 용량',
    unitGrains: 'grains',
    hardnessSoft: '연수',
    hardnessSlightly: '약한 경수',
    hardnessModerate: '중등 경수',
    hardnessHard: '경수',
    hardnessVery: '강한 경수',
    hardnessExtreme: '매우 강한 경수',
    scaleTitle: '물때 축적 속도',
    scaleUnitMetric: 'mm/년',
    scaleUnitImperial: 'in/년',
    saltTitle: '연간 염분 소비 예측',
    saltAnnual: '연간 염분',
    saltBags: '연간 가방 수',
    saltDaysPerBag: '가방당 일수',
    saltWeeksPerBag: '가방당 주수',
    applianceTitle: '가전 제품 수명',
    applianceWasher: '세탁기',
    applianceHeater: '온수기',
    applianceCoffee: '커피 메이커',
    applianceBaseline: '연수 사용 시',
    applianceWithHardness: '경수 사용 시',
    applianceSaved: '년',
    badgeSaved: '수명 연장',
    labelUnitSystem: '단위',
    btnMetric: '미터법',
    btnImperial: '야드파운드법',
  },
};
