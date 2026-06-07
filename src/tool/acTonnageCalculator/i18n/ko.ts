import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ac-tonnage-calculator';
const title = '에어컨 용량 및 냉방 능력 계산기';
const description =
  ' BTU, 프리고리아, 톤 단위로 방에 필요한 정확한 에어컨 크기를 계산하세요. 방 크기, 천장 높이, 인원, 열원을 입력하세요.';

const faqData = [
  { question: '평방미터당 몇 BTU가 필요한가요?', answer: '온대 기후에서 2.5m 천장의 경우 표준 기준은 평방미터당 600BTU입니다. 천장 높이, 햇빛, 인원에 따라 증가합니다.' },
  { question: '프리고리아란 무엇인가요?', answer: '프리고리아는 스페인과 라틴 아메리카에서 사용되는 오래된 냉방 단위입니다. 1프리고리아는 약 3.968BTU/시간에 해당합니다.' },
  { question: 'BTU를 톤으로 변환하는 방법은?', answer: '1냉동톤은 12,000BTU/시간에 해당합니다. 총 BTU를 12,000으로 나누세요.' },
  { question: '천장 높이가 영향을 미치나요?', answer: '네. 2.7m를 초과하는 1미터마다 냉방 필요량이 약 8% 증가합니다.' },
];

const howToData = [
  { name: '방 측정하기', text: '길이와 너비를 미터로 측정하고 곱하여 면적을 구하세요.' },
  { name: '인원과 기기 세기', text: '정기적으로 사용하는 인원과 컴퓨터, TV 등의 열원을 추가하세요.' },
  { name: '햇빛 노출 선택', text: '직사광선의 양에 따라 약함, 중간, 강함을 선택하세요.' },
  { name: '권장 사항 확인', text: '계산기는 모든 시장에서 구매할 수 있도록 BTU, 프리고리아, 톤을 표시합니다.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '어떤 크기의 에어컨이 필요한가요?', level: 2 },
    { type: 'paragraph', html: '올바른 크기는 면적, 천장 높이, 인원, 햇빛에 따라 달라집니다. 이 계산기를 사용하여 정확한 BTU, 프리고리아, 톤을 확인하세요.' },
    { type: 'table', headers: ['면적', '권장 BTU', '톤수', '일반적 용도'], rows: [['10 m² (작은 침실)', '6,000 - 7,000 BTU', '0.5 - 0.75 t', '객실'], ['15 m² (침실)', '9,000 - 10,000 BTU', '0.75 - 1 t', '안방'], ['20 m² (거실)', '12,000 - 14,000 BTU', '1 - 1.25 t', '작은 거실'], ['30 m² (오픈 플랜)', '18,000 - 21,000 BTU', '1.5 - 1.75 t', '스튜디오'], ['40 m² (넓은 거실)', '24,000 - 28,000 BTU', '2 - 2.5 t', '넓은 거실 + 식당']] },
    { type: 'title', text: '잘못된 크기가 비용을 낭비하는 이유', level: 2 },
    { type: 'paragraph', html: '너무 작은 에어컨은 계속 작동하며 설정 온도에 도달하지 못하고 압축기를 조기에 마모시킵니다. 너무 큰 에어컨은 짧은 찬 공기를 간헐적으로 내보내 방을 차갑고 습하게 만듭니다.' },
    { type: 'stats', items: [{ value: '600', label: 'm²당 기본 BTU', icon: 'mdi:thermometer' }, { value: '12000', label: '톤당 BTU', icon: 'mdi:snowflake' }, { value: '3.968', label: '프리고리아당 BTU', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: '방 면적', labelRoomSizeFt: '면적', labelCeilingHeight: '천장 높이', labelCeilingHeightFt: '높이',
    labelPeople: '인원', labelHeatSources: '열원', labelSunExposure: '햇빛 노출', labelRoomType: '방 유형',
    labelCalculate: '계산', labelResult: '결과', labelBtus: 'BTU/h', labelFrigorias: '프리고리아', labelTons: '톤',
    labelRequired: '필요', labelRecommended: '권장', labelUnitBtu: 'BTU/h', labelUnitFrigorias: '프리고리아', labelUnitTons: '톤',
    labelMetric: '미터법', labelImperial: '야드파운드법', labelRoomCozy: '쾌적', labelRoomWarm: '따뜻함', labelRoomHot: '더움',
    bdBaseCooling: '기본 냉방', bdCeilingHeight: '천장 높이', bdPeople: '인원', bdHeatSources: '열원', bdSunRoom: '햇빛 및 방 유형',
    sunLight: '약함', sunMedium: '중간', sunHeavy: '강함',
    roomBedroom: '침실', roomLiving: '거실', roomKitchen: '주방', roomOffice: '사무실', roomServer: '서버실',
    errorRequired: '모든 필드를 입력하세요',
  },
};
