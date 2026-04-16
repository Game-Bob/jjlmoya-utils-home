import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'heating-comparator-gas-vs-heatpump-vs-ac';
const title = '난방 비교: 가스 vs 공기열 히트펌프 vs 에어컨';
const description = '가스 보일러를 히트펌프나 에어컨으로 교체했을 때의 절약액을 계산해 보세요. 실제 에너지 소비량과 효율을 비교하여 최적의 난방 방식을 제안합니다.';

const faqData = [
  {
    question: '히트펌프와 천연가스 중 어느 것이 더 저렴한가요?',
    answer: '월간 운영 비용 측면에서 히트펌프는 천연가스보다 훨씬 저렴합니다. 400%의 효율(COP 4) 덕분에 전기 요금이 가스보다 비싸더라도 실제 전달되는 열량당 비용은 가스보다 30%~50% 정도 낮게 유지됩니다.',
  },
  {
    question: '히트펌프와 일반 에어컨의 차이점은 무엇인가요?',
    answer: '기술적으로는 둘 다 히트펌프 원리를 사용합니다. 주요 차이점은 열을 전달하는 매체입니다. 일반적인 히트펌프 보일러는 "공기-물" 시스템으로 바닥 난방이나 라디에이터를 위한 "물"을 데우고, 일반 에어컨은 "공기-공기" 시스템으로 실내기를 통해 직접 "공기"를 데웁니다.',
  },
  {
    question: '오래된 라디에이터가 있는 집에도 히트펌프 설치가 가능한가요?',
    answer: '네, "고온용" 모델을 사용하면 기존 라디에이터 환경에서도 설치가 가능합니다. 하지만 최대의 절약 효과를 보려면 바닥 난방(온돌)이나 저온용 라디에이터와 조합하는 것이 가장 이상적입니다.',
  },
  {
    question: '히트펌프 설치 비용은 몇 년 정도면 회수할 수 있나요?',
    answer: '가구의 에너지 사용량과 정부 보조금에 따라 다르지만, 일반적으로 5~8년 사이에 초기 투자 비용을 회수할 수 있습니다. 태양광 패널과 함께 사용하면 이 기간은 더욱 단축됩니다.',
  },
];

const howToData = [
  {
    name: '주택 면적',
    text: '연간 난방 수요를 추정하기 위해 주택의 전용 면적(제곱미터)을 입력하세요.',
  },
  {
    name: '에너지 가격',
    text: '정확한 계산을 위해 최근 고지서를 참고하여 가스와 전기 단가를 조정하세요.',
  },
  {
    name: '결과 비교',
    text: '세 가지 시스템을 나란히 비교하여 효율성과 연간 비용 면에서 가장 유리한 방식을 확인하세요.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 자료',
  bibliography: [
    {
      name: '한국에너지공단: 에너지 효율 가이드',
      url: 'https://www.energy.or.kr/',
    },
    {
      name: 'IEA: 히트펌프의 미래 보고서',
      url: 'https://www.iea.org/reports/the-future-of-heat-pumps',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: '난방 시스템 선택의 핵심 포인트',
      items: [
        '<strong>히트펌프</strong>는 가스 보일러보다 최대 400% 더 효율적입니다.',
        '<strong>단열</strong>은 어떤 보일러로 바꾸는 것보다 요금을 더 많이 줄여줍니다.',
        '전기 시스템의 <strong>투자 회수 기간</strong>은 약 6~8년입니다.',
        '<strong>태양광 패널</strong>과 조합하면 난방비를 거의 0원에 가깝게 줄일 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '소비량 비교: 가스 vs 히트펌프 vs 에어컨',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '집에 맞는 적절한 냉난방 시스템을 선택하는 것은 가계 경제와 삶의 질 측면에서 매우 중요한 결정입니다. 에너지 가격이 불안정하고 지속 가능성에 대한 관심이 높아지는 요즘, 어떤 시스템이 가장 효율적이고 매달 얼마나 절약할 수 있는지 아는 것이 필수적입니다.',
    },
    {
      type: 'paragraph',
      html: '과거에는 가스 보일러가 그 편리함과 저렴한 가격으로 독보적이었지만, <strong>공기열 히트펌프(공기-물)</strong>의 보급과 <strong>에어컨(공기-공기 히트펌프)</strong>의 기술 발전으로 판도가 바뀌었습니다. 당사의 계산기는 실제 데이터를 바탕으로 연간 운영 비용을 시각화해 드립니다.',
    },
    {
      type: 'stats',
      items: [
        {
          label: '히트펌프 효율',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: '최고', positive: true },
        },
        {
          label: '연간 평균 절약액',
          value: '약 60만원',
          icon: 'mdi:piggy-bank',
          trend: { value: '추정치', positive: true },
        },
        {
          label: '설비 기대 수명',
          value: '20년',
          icon: 'mdi:calendar-check',
          trend: { value: '표준', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. 가스 보일러: 전통적인 표준 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가스 난방은 연료를 태워 물을 데우고, 그 물이 라디에이터나 바닥 난방 코일을 순환하며 열을 전달하는 방식입니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>효율:</strong> 최신 콘덴싱 보일러의 경우 100%에 가까운 효율을 냅니다.',
        '<strong>장점:</strong> 인프라가 잘 갖춰져 있고, 빠르게 온도를 높일 수 있으며, 초기 설치 비용이 상대적으로 저렴합니다.',
        '<strong>단점:</strong> 화실 연료 의존도가 높고, 가스 기본 요금이 발생하며, 탄소 배출량이 많습니다.',
      ],
    },
    {
      type: 'title',
      text: '2. 히트펌프: 극대화된 효율 (공기-물)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '히트펌프는 외부 공기에서 열에너지를 추출하여(영하의 기온에서도 가능) 실내 난방용수나 온수를 데우는 데 사용하는 기술입니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>효율(COP):</strong> 최신 시스템의 평균 COP는 4 내외입니다. 이는 1kWh의 전기를 써서 4kWh의 열을 만들어낸다는 의미입니다.',
        '<strong>장점:</strong> 태양광 패널과 조합 시 탄소 제로 실현 가능, 냉방과 난방 동시 해결, 운영 비용이 가장 저렴합니다.',
        '<strong>단점:</strong> 초기 투자 비용이 높고(5~8년 내 회수 가능), 실외기 설치 공간이 필요합니다.',
      ],
    },
    {
      type: 'tip',
      title: '절약 팁',
      html: '히트펌프는 바닥 난방(온돌)과 조합했을 때 가장 빛을 발합니다. 60~70℃까지 데워야 하는 라디에이터와 달리, 바닥 난방은 35℃ 정도의 온수만으로도 충분히 따뜻하기 때문입니다.',
    },
    {
      type: 'proscons',
      title: '히트펌프 vs 가스 보일러',
      proTitle: '왜 히트펌프인가요?',
      conTitle: '왜 가스인가요?',
      items: [
        { pro: '압도적인 효율 (COP 4+)', con: '설치 비용 저렴' },
        { pro: '화석 연료 독립', con: '즉각적인 고출력 난방' },
        { pro: '냉방과 난방을 동시에', con: '기존 라디에이터와 호환 우수' },
        { pro: '태양광과 환상의 궁합', con: '실외기 설치 불필요' },
      ],
    },
    {
      type: 'title',
      text: '3. 에어컨 (공기-공기 히트펌프)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '우리가 흔히 아는 "시스템 에어컨"이나 "멀티형 에어컨"입니다. 히트펌프와 동일한 원리를 사용하지만 물이 아닌 공기를 직접 데웁니다. 겨울이 짧은 지역이나 보조 난방용으로 훌륭한 선택입니다. 효율(SCOP)은 보통 3~3.5 수준입니다.',
    },
    {
      type: 'title',
      text: '계산 원리 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '시스템을 공정하게 비교하기 위해 모든 소비량을 실제 전달된 유효 열량 1kWh당 비용으로 환산합니다.',
    },
    {
      type: 'code',
      code: '연간 비용 = (주택 난방 수요 / 시스템 효율) × 에너지 단가',
      ariaLabel: '연간 운영 비용 계산 공식',
    },
    {
      type: 'paragraph',
      html: '항목 설명:',
    },
    {
      type: 'list',
      items: [
        '<strong>난방 수요:</strong> 집에 1년간 필요한 열량(단열 성능과 면적에 비례).',
        '<strong>효율:</strong> 가스 0.95, 히트펌프 4.0, 에어컨 3.2.',
        '<strong>에너지 단가:</strong> 세금을 포함한 kWh당 가격.',
      ],
    },
    {
      type: 'card',
      title: '실제 사례: 30평(100m²) 아파트',
      icon: 'mdi:home-analytics',
      html: '<p>연간 7,000kWh의 난방이 필요한 집을 가정해 봅시다:</p><ul><li><strong>가스:</strong> 약 80만원/년</li><li><strong>히트펌프:</strong> 약 43만원/년 (약 46% 절감)</li><li><strong>에어컨:</strong> 약 54만원/년</li></ul>',
    },
    {
      type: 'title',
      text: '단열의 중요성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '아무리 좋은 난방기도 집에서 열이 샌다면 소용이 없습니다. 새 시스템에 큰 돈을 쓰기 전에 창문 틈새와 단열재를 먼저 점검하세요. 좋은 단열은 난방 수요를 절반까지 줄여줍니다.',
    },
    {
      type: 'title',
      text: '히트펌프에 대한 오해',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>"추운 겨울엔 작동안한다":</strong> 틀렸습니다. 최신 기기들은 영하 15℃에서도 높은 성능을 유지합니다.',
        '<strong>"공기를 건조하게 만든다":</strong> 공기-공기(에어컨) 시스템만 해당됩니다. 바닥 난방 방식은 매우 쾌적합니다.',
        '<strong>"전기요금 폭탄 맞는다":</strong> 가스보다 전기 단가가 높더라도 400%의 효율이 그 차이를 충분히 상쇄합니다.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '알고 계셨나요?',
      icon: 'mdi:lightbulb-on',
      badge: '상식',
      html: '<p>COP는 외기 온도에 따라 변합니다. 혹한기에는 효율이 조금 떨어지지만, 여전히 가스 보일러나 전기 히터보다는 훨씬 뛰어난 성능을 보여줍니다.</p>',
    },
    {
      type: 'title',
      text: '결론: 미래는 전기로 통한다',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '세계적인 추세는 명확합니다. 바로 가정의 "탈탄소화"입니다. 가스 가격은 장기적으로 상승할 가능성이 높으며, 태양광과 히트펌프의 조합은 현시점에서 가장 현명한 에너지 솔루션 중 하나입니다.',
    },
  ],
  ui: {
    titleVivienda: '1. 우리 집 데이터',
    helperVivienda: '주택의 특징을 설정해 주세요',
    labelM2: '전용 면적',
    helperM2: '주택의 전용 면적(제곱미터).',
    labelAislamiento: '단열 수준',
    helperAislamiento: '우리 집은 열을 얼마나 잘 잡아주나요?',
    optExcelent: '우수 (신축 / 패시브 하우스)',
    optMedium: '보통 (이중창 / 일반 단열)',
    optPoor: '미흡 (오래된 주택 / 단열재 없음)',
    titleCoste: '2. 에너지 단가',
    descCoste: '최근 고지서에서 kWh당 단가를 확인해 입력하세요.',
    labelGasPrice: '가스 요금',
    helperGasPrice: '사용된 가스 1kWh당 단가.',
    labelElecPrice: '전기 요금',
    helperElecPrice: '사용된 전기 1kWh당 단가.',
    titleComparison: '3. 연간 운영 비용 비교',
    descComparison: '시스템별 기술 효율에 따른 추정치입니다.',
    systemGas: '가스 보일러',
    systemAero: '히트펌프 보일러',
    systemAir: '시스템 에어컨',
    labelAnnualCost: '예상 난방비',
    labelEfficiency: '에너지 효율',
    labelSource: '열원',
    labelEnergy: '에너지 종류',
    labelInstallation: '설치 방식',
    valGasSource: '도시가스 / LPG',
    valAeroEnergy: '재생에너지 + 전기',
    valAirInstall: '공기-공기 방식',
    winnerBadge: '최고 효율',
    unitCurrency: '원',
  },
};
