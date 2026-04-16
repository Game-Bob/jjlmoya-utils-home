import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'led-saving-calculator';
const title = 'LED 절약 계산기';
const description =
  '기존 전구를 LED로 교체했을 때 절약되는 금액과 에너지를 계산해 보세요. 연간 및 월간 정확한 절약액과 CO2 절감량을 확인할 수 있습니다.';

const faqData = [
  {
    question: 'LED 전구로 바꾸면 정말 얼마나 절약되나요?',
    answer:
      'LED 전구는 백열전구에 비해 에너지를 80%~90% 적게 소비합니다. 예를 들어 60W 전구를 9W LED로 바꾸면 동일한 밝기를 유지하면서 전기료를 최소한으로 줄일 수 있습니다.',
  },
  {
    question: 'LED 교체 비용은 언제쯤 회수할 수 있나요?',
    answer:
      'LED 가격이 많이 낮아졌고 절전 효과는 크기 때문에, 일반적인 사용 환경이라면 약 4개월 이내에 투자 비용을 회수할 수 있습니다. 점등 시간이 길수록 회수 기간은 더 짧아집니다.',
  },
  {
    question: 'W(와트)가 더 높은 LED 전구를 끼워도 안전한가요?',
    answer:
      'LED는 열 발생이 매우 적습니다. 따라서 기존에 열 때문에 전구 와트수가 제한되었던 스탠드 등에 더 밝은(루멘이 높은) LED를 끼워도 전기 소켓의 허용 전류 이내라면 괜찮습니다.',
  },
  {
    question: '수명이 정말 상자에 적힌 대로 긴가요?',
    answer:
      '품질이 좋은 LED는 15,000~50,000시간 정도 사용할 수 있습니다. 하루 4시간 사용 시 약 15년 이상 전구 교체 없이 사용할 수 있다는 의미입니다.',
  },
  {
    question: '조광기(디머)가 있는 채등에 LED를 쓸 수 있나요?',
    answer:
      '반드시 "조광기 대응(Dimmable)"이라고 적힌 LED 전구를 사용해야 합니다. 일반 LED는 기존 조광기에서 깜빡이거나 웅 하는 소리가 날 수 있습니다.',
  },
  {
    question: '등기구 전체를 바꿔야 하나요?',
    answer:
      '99%의 경우 그럴 필요 없습니다. 소켓 사이즈(E26, E17, GU10 등)가 같은 LED 전구로 갈아 끼우기만 하면 됩니다.',
  },
];

const howToData = [
  {
    name: '전구 개수 확인',
    text: '집에 있는 백열전구나 할로겐 전구의 개수와 각각의 와트(W)를 확인합니다.',
  },
  {
    name: '적절한 LED 선택',
    text: '계산기에서 현재 사용 중인 전구 타입을 선택하면 그에 맞는 LED 전구 수치가 자동으로 할당됩니다.',
  },
  {
    name: '사용 시간 설정',
    text: '하루 평균 전등을 켜두는 시간을 입력해 정확한 계산 결과를 확인하세요.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    {
      name: '한국에너지공단 - 고효율 에너지기자재 가이드',
      url: 'https://www.energy.or.kr/',
    },
    {
      name: '에너지 효율 등급 안내 - 한국소비자원',
      url: 'https://www.kca.go.kr/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'LED 절약 가이드: 전기 요금을 획기적으로 줄이는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '전통적인 조명에서 <strong>LED(발광 다이오드)</strong> 기술로 교체하는 것은 가계 투자 중 가장 확실하고 빠른 수익을 보장합니다. 60W 백열전구와 같은 밝기를 내면서 LED는 단 9W만 소비하여 <strong>약 85% 이상의 전기를 절약</strong>할 수 있습니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: '에너지 절감률', icon: 'mdi:lightning-bolt' },
        { value: '25,000h', label: 'LED 수명', icon: 'mdi:clock-outline' },
        { value: '4개월 이내', label: '회수 기간', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '백열전구 조명',
          description: '필라멘트를 가열하는 20세기의 기술. 에너지의 95%가 열로 낭비됩니다.',
          icon: 'mdi:lightbulb-outline',
          points: ['에너지 95%가 열로 낭비', '수명: 약 1,000시간', '운영 비용 매우 높음'],
        },
        {
          title: '최신 LED 기술',
          description: '현재의 에너지 효율 표준. 켜는 즉시 100% 밝기이며 열 발생이 매우 적습니다.',
          icon: 'mdi:led-outline',
          points: ['85-90% 직접 절감', '수명: 25,000~50,000시간', '열 발생 최소화'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '절약의 과학적 원리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '백열전구는 전기 에너지의 5%만 빛으로 바꿉니다. 반면 LED는 반도체를 이용해 전기를 직접 빛으로 바꿔 효율이 매우 높습니다. <strong>와트(W)가 아니라 루멘(lm)을 확인하세요:</strong> 과거 60W 전구가 내던 800lm의 밝기를 이제 8-9W LED로 충분히 낼 수 있습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '빠른 전구 비교표',
      icon: 'mdi:table',
      badge: '참고용',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W 백열전구</strong> → LED 5–6W (450 lm)</li><li><strong>60W 백열전구</strong> → LED 8–10W (800 lm)</li><li><strong>100W 백열전구</strong> → LED 13–15W (1500 lm)</li><li><strong>50W 할로겐</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: '경제성 외의 LED 장점',
      items: [
        '초장수명: 하루 4시간 사용 시 15년 이상 사용 가능.',
        '즉각 점등: 켜자마자 바로 최대 밝기에 도달.',
        '저발열: 여름철 냉방 효율에 긍정적인 영향.',
        '친환경: 수은이나 유해 가스가 없어 폐기가 용이함.',
        '호환성: 기존의 거의 모든 소켓에 바로 설치 가능.',
      ],
    },
  ],
  ui: {
    sectionTitle: '가계 설정',
    labelBulbs: '교체할 전구 개수',
    unitBulbs: '개',
    labelType: '현재 전구 타입',
    labelHours: '하루 평균 사용 시간',
    labelPrice: '전기 요금 단가',
    unitPrice: '원/kWh',
    resultBadge: '실제 절약 예상치',
    labelAnnual: '연간 예상 절약액',
    labelMonthly: '월평균',
    labelEfficiency: '에너지 효율',
    labelCo2: '탄소 배출 감소량',
    unitLess: '% 절감',
    currencySign: '₩',
    btnInc60Title: '백열전구',
    btnInc60Sub: '일반용 (60W)',
    btnInc40Title: '백열전구',
    btnInc40Sub: '소형 (40W)',
    btnInc100Title: '백열전구',
    btnInc100Sub: '대형 (100W)',
    btnHalo50Title: '할로겐',
    btnHalo50Sub: '스포트라이트 (50W)',
    usageNever: '거의 안 씀',
    usageLow: '가끔 사용',
    usageNormal: '보통 사용',
    usageModerate: '자주 사용',
    usageHeavy: '많이 사용',
    usagePro: '전문가 수준',
    usageVeryHeavy: '매우 많이 사용',
    usageAlways: '항상 켜둠',
  },
};
