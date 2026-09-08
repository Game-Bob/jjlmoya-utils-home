import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'ko',
  slug: 'storage-unit-size-calculator',
  title: '창고 보관 공간 크기 계산기',
  description: '상자, 가구, 물건을 꺼내기 위한 통로를 바탕으로 필요한 보관 공간의 크기를 추정합니다.',
  labels: {
    inventory: '내 물품 목록', boxes: '상자', furniture: '부피가 큰 물품', smallBoxes: '작은 상자', mediumBoxes: '중간 상자', largeBoxes: '큰 상자', sofa: '소파', bed: '침대', wardrobe: '옷장', desk: '책상', chair: '의자', accessLane: '이동 공간', accessHint: '이동 공간을 넓히면 면적은 늘지만 필요한 물건을 쉽게 꺼낼 수 있습니다.', quickScenarios: '시작 물품 목록 불러오기', reset: '초기화',
  },
  presetLabels: ['원룸 이사', '침실 1개', '소규모 사무실'],
  accessLabels: ['좁게', '균형 있게', '자주 꺼내기'],
  result: {
    title: '적재 보드', minimum: '최소 크기', comfortable: '여유 있는 크기', emptyStatus: '물품을 추가하세요', readyStatus: '균형 잡힌 계획', tightStatus: '최소 크기가 빠듯함', emptyMessage: '물품을 추가하면 보관 구역이 보드에 표시됩니다.', readyMessage: '최소 크기에도 선택한 이동 공간이 남습니다.', tightMessage: '최소 크기가 거의 찼습니다. 여유 있는 크기가 사용하기 쉽습니다.', unit: 'm²', access: '이동 공간', boxesZone: '상자', furnitureZone: '대형 물품', laneZone: '통로', floorPlanLabel: '상자, 대형 물품, 통로를 비율로 표시한 보관 공간 계획도', packedLabel: '적재', areaLabel: '계획 면적', volumeLabel: '부피', emptyPlan: '상자나 가구를 추가하면 계획도가 표시됩니다',
  },
  seo: [
    { type: 'title', level: 2, text: '가지고 있는 물건으로 보관 공간 크기 고르기' },
    { type: 'paragraph', html: '보관 공간 크기 계산기는 실제 물품 목록에서 시작할 때 가장 유용합니다. 상자와 부피가 큰 가구를 입력하고, 촘촘하게 쌓을지 뒤쪽 물건까지 꺼낼 여유를 둘지 선택하세요.' },
    { type: 'title', level: 2, text: '이 계산이 보여 주는 것' },
    { type: 'list', items: ['상자와 가구를 적재한 부피', '상자를 종류별로 쌓은 뒤 차지하는 바닥 면적', '꺼내는 빈도에 따른 이동 공간', '일반적인 면적으로 반올림한 최소 크기와 여유 크기'] },
    { type: 'title', level: 2, text: '최소 크기와 여유 크기 읽는 법' },
    { type: 'paragraph', html: '최소 크기는 예상 계획 면적을 담을 수 있는 첫 번째 표준 크기입니다. 이는 용량 확인이며 모든 가구가 어떤 공간에도 들어간다는 보장은 아닙니다. 여유 크기는 자주 여는 공간이 상자 벽처럼 되지 않도록 완충 면적을 더합니다.' },
    { type: 'title', level: 2, text: '계약 전에 확인할 사항' },
    { type: 'paragraph', html: '결과를 후보를 좁히는 데 사용한 뒤 내부 치수, 문 너비, 천장 높이, 기둥, 계단, 상하차 공간을 비교하세요. 입방미터가 커 보여도 실제로 쓸 수 없는 높이라면 보관력은 낮습니다.' },
    { type: 'list', items: ['상자는 대략적인 외부 크기로 세기', '분해할 예정이어도 소파와 옷장을 포함하기', '계절 용품, 재고, 업무 장비를 꺼낸다면 자주 꺼내기를 선택하기', '사용 가능한 바닥 면적과 문 크기를 업체에 확인하기'] },
    { type: 'tip', title: '계획의 한계', html: '대표 치수와 쌓기 가정을 사용한 투명한 추정치입니다. 실제 공간, 하중 제한, 가격, 특수한 가구가 문을 통과하는지는 확인하지 않습니다.' },
  ],
  faq: [
    { question: '최소 크기와 여유 크기 중 무엇을 선택해야 하나요?', answer: '촘촘하게 포장하고 거의 꺼내지 않는다면 최소 크기를 선택할 수 있습니다. 자주 꺼내거나 물건이 늘거나 가구를 쌓기 어렵다면 여유 크기가 좋습니다.' },
    { question: '왜 제곱미터를 사용하나요?', answer: '보관 업체는 바닥 면적을 자주 표시하며, 바닥 면적은 물건을 놓고 꺼낼 수 있는지 판단하기 쉽습니다. 입방미터도 함께 보여 부피 기준 광고와 비교할 수 있습니다.' },
    { question: '차고나 컨테이너에도 사용할 수 있나요?', answer: '계획의 시작점으로 사용할 수 있습니다. 실제 내부 치수, 문 개방 폭, 천장, 환기, 무게와 적재 제한은 반드시 확인하세요.' },
    { question: '가구의 실제 크기까지 알고 있나요?', answer: '아닙니다. 대표적인 바닥 면적과 부피를 사용합니다. 특이하거나 깨지기 쉽거나 깊은 물건은 직접 재고 여유를 남겨 주세요.' },
  ],
  howTo: [
    { name: '시작 물품 목록 불러오기', text: '이사나 정리 상황에 가까운 시나리오를 고르고 수량을 수정합니다.' },
    { name: '상자와 큰 물품 세기', text: '작은 상자, 중간 상자, 큰 상자를 입력하고 소파, 침대, 옷장, 책상, 의자를 추가합니다.' },
    { name: '이동 공간 설정하기', text: '물건을 꺼낼 빈도에 따라 좁게, 균형 있게, 자주 꺼내기 중 하나를 선택합니다.' },
    { name: '두 권장 크기 비교하기', text: '최소 크기는 용량 하한으로, 여유 크기는 정기적으로 이용하기 쉬운 선택으로 비교합니다.' },
  ],
};

export const content = buildLocalizedContent(copy);
