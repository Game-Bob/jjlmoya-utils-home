import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wall-painting-calculator';
const title = '벽면 페인트 및 희석 최적화 계산기';
const description =
  '벽에 필요한 리터 또는 갤럭 단위의 페인트를 정확하게 계산하세요. 도포 횟수, 표면 유형, 희석율을 조정하고 구매 전 실제 비용을 확인하세요.';

const faqData = [
  {
    question: '페인트의 정확한 양은 어떻게 계산하나요?',
    answer:
      '벽면 면적에 도포 횟수를 곱하고, 리터 또는 갤런당 평방미터 또는 평방피트로 나눕니다. 문과 창문 면적은 먼저 총 면적에서 제외하세요.',
  },
  {
    question: '표준 방에는 얼마나 많은 페인트가 필요한가요?',
    answer:
      '천장 높이가 2.5미터인 12제곱미터 방은 벽면 면적이 약 30제곱미터입니다. 2회 도포하고 리터당 12제곱미터의 도포율을 가질 때 약 5리터의 페인트가 필요합니다.',
  },
  {
    question: '도포 전에 페인트를 희석해야 하나요?',
    answer:
      '수성 플라스틱 페인트는 보통 바로 사용 가능하거나 첫 도포 시 물을 5~10퍼센트 추가해야 합니다. 에나멜이나 유성 페인트는 통에 표시된 전용 용제가 필요한 경우가 많습니다.',
  },
  {
    question: '실제로 몇 회 도포가 필요한가요?',
    answer:
      '새로운 표면이나 흡수성이 높은 표면은 프라이머와 마무리 도포 2회가 필요합니다. 이미 칠해진 벽을 비슷한 색으로 다시 칠할 때는 보통 1~2회면 충분합니다.',
  },
  {
    question: '문과 창문 면적을 제외해야 하나요?',
    answer:
      '네. 각 개구부를 측정하고 벽면 총 면적에서 제외하세요. 간단한 규칙으로 문은 약 2제곱미터, 창문은 약 1.5제곱미터입니다.',
  },
  {
    question: '표면 유형이 도포율에 영향을 주나요?',
    answer:
      '네. 매끄럽게 준비된 벽은 리터당 최대 14제곱미터까지 도포할 수 있습니다. 거친 콘크리트, 텍스처 마감 또는 흡수성 벽돌은 도포율을 리터당 6~8제곱미터로 떨어뜨릴 수 있습니다.',
  },
];

const howToData = [
  {
    name: '벽을 측정하세요',
    text: '각 벽의 너비와 높이를 측정합니다. 곱하여 각 벽의 면적을 구하고 모든 벽을 합산합니다.',
  },
  {
    name: '개구부를 제외하세요',
    text: '문과 창문을 측정하고 그 면적을 총 면적에서 제외하여 실제로 칠할 표면 면적을 구합니다.',
  },
  {
    name: '페인트 종류를 선택하세요',
    text: '계산기에서 페인트 종류를 선택하세요. 플라스틱 매트, 플라스틱 새틴, 에나멜은 도포율과 희석 권장치가 다릅니다.',
  },
  {
    name: '도포 횟수와 가격을 입력하세요',
    text: '도포할 횟수와 리터 또는 갤런당 가격을 입력하세요. 계산기가 정확한 양과 총 비용을 반환합니다.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: '페인트 계산기: 정확히 필요한 만큼만 구매하세요',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '계산 없이 방을 칠하면 <strong>반쯤 남은 통</strong>이나 긴급하게 상점에 가는 상황으로 끝나는 경우가 많습니다. 이유는 간단합니다. 페인트의 도포율은 표면의 흡수성, 색상 변경, 도포 횟수에 따라 달라집니다. 매끄럽고 이미 칠해진 벽은 리터당 최대 14제곱미터까지 도포할 수 있지만, 거친 텍스처 벽은 같은 양을 흡수하여 6제곱미터만 도포할 수 있습니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '높음', label: '표준 도포량', icon: 'mdi:format-paint' },
        { value: '2회', label: '권장', icon: 'mdi:layers' },
        { value: '5-10%', label: '표준 희석률', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '페인트 도포율의 실제 작동 원리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '제조사는 통에 이론적 도포율을 표기합니다. 이 수치는 완전히 매끄럽고 비흡수성인 흰색 표면에 전문 롤러로 이상적인 조건에서 도포한 경우를 가정합니다. 실제로는 <strong>다공성 벽, 어두운 색상, DIY 도포</strong>가 이 도포율을 20~40퍼센트 감소시킵니다. 저희 계산기는 현실적인 프로파일을 선택할 수 있도록 하여 부족하지 않게 해줍니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '플라스틱 매트 페인트',
          description: '실내에서 가장 일반적인 선택입니다. 높은 은폐력, 쉬운 보수, 대부분의 품질에서 세척 가능합니다.',
          icon: 'mdi:palette',
          points: ['표준 실내 도포량', '희석: 물 5~10퍼센트', '최적: 거실과 침실'],
        },
        {
          title: '플라스틱 새틴 페인트',
          description: '약간 광택이 있는 마감으로 습기와 얼룩에 대한 내구성이 더 높습니다. 매끄럽게 보수하기가 더 어렵습니다.',
          icon: 'mdi:brightness-6',
          points: ['약간 더 높은 도포량', '희석: 물 5퍼센트', '최적: 주방과 욕실'],
        },
        {
          title: '에나멜 페인트',
          description: '목공품, 라디에이터, 통행량이 많은 구역에 적합한 단단하고 내구성 있는 마감입니다. 용제 또는 전용 희석액이 필요합니다.',
          icon: 'mdi:spray',
          points: ['단단하고 내구성 있는 마감', '희석: 용제 10~15퍼센트', '최적: 문, 프레임, 가구'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '실용적인 표면적 측정',
      icon: 'mdi:ruler-square',
      badge: '팁',
      html: '<p style="margin:0">각 벽의 너비에 높이를 곱하세요. 빠르게 합계를 구하려면 모든 너비를 더하고 방 높이를 곱하세요. 그런 다음 표준 문마다 약 2제곱미터, 창문마다 약 1.5제곱미터를 제외하세요.</p>',
    },
    {
      type: 'title',
      text: '희석 및 도포 규칙',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '새로운 표면이나 보수한 표면의 첫 도포는 항상 페인트가 침투하고 고정될 수 있도록 가벼운 희석이 필요합니다. 마무리 도포는 희석하지 않거나 제조사가 표시한 최소량으로 도포해야 합니다. <strong>과도한 희석은 안료를 파괴</strong>하고 추가 도포가 필요한 투명한 반점을 남깁니다.',
    },
    {
      type: 'summary',
      title: '구매 전에 계산해야 하는 이유',
      items: [
        '통 안에서 말라버려 폐기물이 되는 잉여 페인트를 피하세요.',
        '다른 시기에 구매한 로트 간 색상 불일치를 방지하세요.',
        '정확하게 예산을 책정하세요: 프라이머와 도구를 포함한 실제 비용을 파악하세요.',
        '추가 자재를 위해 작업을 중단하지 않고 한 번에 작업을 계획하세요.',
      ],
    },
  ],
  ui: {
    sectionTitle: '표면 및 페인트',
    labelMetric: '미터법',
    labelImperial: '야드파운드법',
    labelArea: '칠할 총 면적',
    labelAreaFt: '칠할 총 면적',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: '페인트 도포율',
    labelYieldFt: '페인트 도포율',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: '페인트 종류 선택',
    btnPlasticMatTitle: '플라스틱 매트',
    btnPlasticMatSub: '매트 · 물 5%',
    btnPlasticSatinTitle: '플라스틱 새틴',
    btnPlasticSatinSub: '새틴 · 물 5%',
    btnEnamelTitle: '에나멜',
    btnEnamelSub: '에나멜 · 용제 10%',
    labelCoats: '도포 횟수',
    unitCoats: '회',
    labelPrice: '리터당 가격',
    labelPriceFt: '갤런당 가격',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: '희석율',
    unitDilution: '%',
    resultBadge: '페인트 계산',
    labelPaint: '페인트 리터',
    labelPaintGal: '페인트 갤런',
    labelCost: '총 비용',
    labelWater: '희석액',
    labelWaterGal: '희석액',
    labelTotalVolume: '총 혼합량',
    labelTotalVolumeGal: '총 혼합량',
    labelCurrency: '통화',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '₩',
  },
};
