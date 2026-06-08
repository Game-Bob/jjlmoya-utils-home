import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'how-many-lights-per-room';
const title = '주택 조명 및 루멘 계산기';
const description =
  '모든 방에 필요한 루멘 수와 전구 수를 정확히 계산하세요. 방 유형, 치수, 전구 종류를 선택하면 실시간 럭스 추정치가 포함된 전문적인 조명 계획을 얻을 수 있습니다.';

const faqData = [
  {
    question: '거실에는 얼마나 많은 루멘이 필요한가요?',
    answer:
      '일반적인 거실의 경우 바닥면에 약 150 럭스를 목표로 하세요. 방의 면적(제곱미터)에 150을 곱하면 필요한 루멘 수가 나옵니다. 20제곱미터 방의 경우 약 3,000 루멘이 필요합니다.',
  },
  {
    question: '럭스와 루멘의 차이점은 무엇인가요?',
    answer:
      '루멘은 전구에서 나오는 총 광량을 측정합니다. 럭스는 실제로 표면에 도달하는 빛을 측정합니다. 천장이 높거나 벽이 어두운 방은 거리와 흡수로 인해 빛이 손실되므로 같은 럭스 수준을 달성하기 위해 더 많은 루멘이 필요합니다.',
  },
  {
    question: 'LED 전구가 정말 에너지를 절약하나요?',
    answer:
      '네. LED 전구는 1와트당 약 100 루멘을 발생하는 반면, 백열 전구는 약 15 루멘만 발생합니다. 10W LED 전구는 60W 백열 전구와 같은 밝기를 제공하며, 전력을 6분의 1만 사용합니다.',
  },
  {
    question: '방 색상이 조명 요구에 어떤 영향을 미치나요?',
    answer:
      '어두운 벽과 천장은 빛을 흡수합니다. 어두운 표면이 있는 방에서는 표준 권장값보다 50% 더 많은 루멘이 필요할 수 있습니다.',
  },
  {
    question: '독서에 적당한 럭스 수준은 얼마인가요?',
    answer:
      '편안하게 독서하려면 페이지에 300~500 럭스가 필요합니다. 일반적인 주변 조명은 보통 150~200 럭스를 제공하므로 추가 밝기를 위해 독서 공간 근처에 작업등을 추가하세요.',
  },
  {
    question: 'LED 전구를 디밍할 수 있나요?',
    answer:
      '디밍 가능으로 표시된 경우에만 가능합니다. 일반 LED는 디머에 연결하면 깜빡이거나 수명이 단축될 수 있습니다. 설치 전에 반드시 포장의 디밍 가능 심볼을 확인하세요.',
  },
];

const howToData = [
  {
    name: '방 유형을 선택하세요',
    text: '방의 기능을 선택하세요. 주방과 사무실은 침실이나 복도보다 더 밝은 조명이 필요합니다.',
  },
  {
    name: '치수를 입력하세요',
    text: '방의 너비, 길이, 천장 높이를 입력하세요. 계산기는 이를 사용하여 방 지수와 조명 이용 계수를 결정합니다.',
  },
  {
    name: '전구 종류와 개수를 선택하세요',
    text: '선호하는 전구 기술과 보유한 조명기구 수를 선택하세요. 계산기가 더 많은 전구가 필요한지 알려드립니다.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: '주택 조명 디자인 및 루멘 계획의 완벽한 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '적절한 조명은 집을 보다 살기 좋은 공간으로 바꿉니다. 미관을 넘어, 적정한 광량은 기분, 생산성, 심지어 눈 건강에도 영향을 미칩니다. <strong>우리의 주택 조명 계산기</strong>는 방 크기, 천장 높이, 표면 색상, 전구 종류를 고려하여 모든 방에 필요한 루멘 수를 정확히 파악하도록 도와줍니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: '권장 럭스 범위', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED 효율', icon: 'mdi:lightbulb' },
        { value: '80%', label: '유지보수 계수', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '따뜻한 환경 조명',
          description: '거실과 침실에 이상적입니다. 아늑한 분위기를 조성하고 밤에 눈의 피로를 줄여줍니다.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', '따뜻한 색온도(2700K)', '다수의 디밍 가능한 광원'],
        },
        {
          title: '밝은 작업 조명',
          description: '주방, 사무실, 욕실에 필수적입니다. 세부 작업을 위한 명확한 시인성을 제공합니다.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', '차가운 백색(4000K)', '작업 면에 집중'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '왜 방 치수가 중요한가',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '빛은 거리에 따라 퍼지고 약해집니다. 2.5미터 천장에 충분히 밝은 전구가 4미터 천장에서는 너무 어두울 수 있습니다. 계산기는 방 지수 공식을 사용하여 이를 고려합니다. 공식은 바닥 면적과 설치 높이를 모두 고려하여 실제로 작업면에 도달하는 빛의 양을 추정합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '빠른 럭스 참조표',
      icon: 'mdi:table',
      badge: '참조',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>거실</strong> → 150 lux</li><li><strong>주방</strong> → 300 lux</li><li><strong>침실</strong> → 100 lux</li><li><strong>욕실</strong> → 200 lux</li><li><strong>사무실</strong> → 500 lux</li><li><strong>복도</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: '더 나은 조명을 위한 전문가 팁',
      items: [
        '세 가지 조명을 겹쳐 사용하세요: 환경, 작업, 액센트 조명.',
        '하루 중 다른 시간에 밝기를 조절하기 위해 디머를 사용하세요.',
        '장수명과 저소비 전력을 위해 LED 전구를 선택하세요.',
        '그림자를 피하려면 작업등을 주로 쓰는 손 반대편에 배치하세요.',
        '자동 예약과 색온도 변화를 위해 스마트 전구를 고려하세요.',
      ],
    },
  ],
  ui: {
    sectionTitle: '방 조명 계산기',
    labelRoomType: '방 유형',
    labelRoomWidth: '너비',
    labelRoomLength: '길이',
    labelHeight: '천장',
    labelBulbType: '전구',
    labelBulbWatt: '소비전력',
    labelFixtures: '조명기구',
    labelAmbient: '분위기',
    btnAmbientCozy: '아늑한',
    btnAmbientNormal: '보통',
    btnAmbientBright: '밝은',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: '개',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: '목표 럭스',
    labelCurrentLux: '현재 럭스',
    labelBulbsNeeded: '필요한 전구',
    labelRoomArea: '면적',
    statusOptimal: '완벽함',
    statusInsufficient: '너무 어두움',
    statusExcess: '너무 밝음',
    btnLiving: '거실',
    btnKitchen: '주방',
    btnBedroom: '침실',
    btnBathroom: '욕실',
    btnOffice: '사무실',
    btnHallway: '복도',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: '할로겐',
    btnBulbIncandescent: '백열',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: '이 방의 조명이 완벽하게 균형 잡혀 있습니다.',
    tipInsufficient: '더 많은 조명기구나 고와트 전구를 추가하세요.',
    tipExcess: '조명기구를 줄이거나 디밍하여 에너지를 절약하세요.',
    labelManualAdjust: '수동 조정',
    labelSummary: '조명 계획',
    labelTotalLumens: '필요한 총 루멘',
    labelSuggestedSetup: '권장 구성',
    btnExport: 'PDF보내기',
  },
};
