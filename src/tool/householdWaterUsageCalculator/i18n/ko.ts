import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "household-water-usage-calculator",
  title: "가정용 물 사용량 계산기",
  description:
    "매일의 습관으로 가정의 물 사용량을 추정하고, 어떤 활동이 가장 많은 물을 쓰는지 확인한 뒤 현실적인 절약 시나리오와 비교합니다.",
  language: "ko",
  ui: {
    presetLabel: "패턴으로 시작하기",
    presetEveryday: "일상",
    presetWaterAware: "절수 중심",
    presetLowFlow: "저유량",
    controlsLabel: "가정용 물 입력",
    optionalInputsTitle: "가전과 누수",
    peopleLabel: "집을 사용하는 사람 수",
    peopleUnit: "명",
    showerTitle: "샤워",
    showersPerWeekLabel: "1인당 샤워 횟수",
    showerMinutesLabel: "한 번의 시간",
    showerFlowLabel: "유량",
    toiletTitle: "변기",
    flushesPerDayLabel: "1인당 물 내림 횟수",
    flushVolumeLabel: "한 번의 물 사용량",
    tapTitle: "수도꼭지",
    tapMinutesLabel: "1인당 사용 시간",
    tapFlowLabel: "유량",
    washingLoadsLabel: "세탁기 사용 횟수",
    washingVolumeLabel: "세탁 한 번의 리터",
    dishwasherLoadsLabel: "식기세척기 사용 횟수",
    dishwasherVolumeLabel: "한 주기의 리터",
    leakLabel: "예방 가능한 누수 추정",
    litresPerDay: "하루 추정 리터",
    litresPerMonth: "월간 리터",
    litresPerYear: "연간 리터",
    perPerson: "1인 1일 리터",
    reference: "참고값",
    aboveReference: "참고값보다 많음",
    belowReference: "참고값보다 적음",
    nearReference: "참고값에 가까움",
    referenceDescription:
      "INE의 최신 자료에서 스페인 가정의 평균은 1인 1일 128리터입니다. 합격선이 아니라 상황을 이해하기 위한 참고값으로 사용하세요.",
    savingTitle: "줄일 수 있는 여지",
    savingDescription:
      "현재 습관과 절약 시나리오의 가정 사이의 합산 차이입니다. 실제로 결정하기 전에 한 번에 하나의 변화를 시험하세요.",
    currentScenario: "현재 패턴",
    efficientScenario: "절약 시나리오",
    monthlySaving: "월간 잠재 절약 리터",
    categoryShowers: "샤워",
    categoryToilets: "변기",
    categoryTaps: "수도꼭지",
    categoryWashing: "세탁",
    categoryDishwasher: "식기세척기",
    categoryLeaks: "누수",
    breakdownTitle: "한 달 사용량의 구성",
    usageShare: "전체 중",
  },
  faq: [
    {
      question: "이 가정용 물 계산기는 무엇을 추정하나요?",
      answer:
        "샤워, 변기, 수도꼭지, 세탁, 식기세척기와 누수 입력을 바탕으로 하루, 한 달, 1년의 리터를 추정합니다. 적절한 습관과 기기 변화를 적용한 절약 시나리오도 보여 줍니다.",
    },
    {
      question: "결과가 수도 요금과 같은가요?",
      answer:
        "아닙니다. 입력한 습관으로 만든 계획용 추정치입니다. 실제 요금에는 야외 사용, 공동 설비, 검침 시점, 집 밖의 누수와 설비의 실제 유량도 포함될 수 있습니다.",
    },
    {
      question: "어떤 입력이 결과를 가장 많이 바꾸나요?",
      answer:
        "길고 유량이 큰 샤워가 큰 비중을 차지하는 경우가 많지만 사람 수, 변기 물량, 수도꼭지 사용 시간, 세탁과 식기세척기 횟수도 중요합니다. 구성은 사용자의 입력을 기준으로 정렬됩니다.",
    },
    {
      question: "절약 시나리오란 무엇인가요?",
      answer:
        "5분 샤워, 낮은 유량, 효율적인 물 내림, 짧은 수도꼭지 사용, 가득 찬 세탁과 예방 가능한 누수 없음 같은 투명한 목표를 적용합니다. 특정 기기의 절약을 보장하지는 않습니다.",
    },
    {
      question: "참고값을 표시하는 이유는 무엇인가요?",
      answer:
        "INE의 물 공급 및 위생 자료에 있는 최신 스페인 가정 평균을 1인 1일 기준으로 보여 줍니다. 지역 조건과 측정하지 않은 사용량이 다르므로 목표나 진단이 아닙니다.",
    },
  ],
  howTo: [
    {
      name: "사람 수 입력하기",
      text: "집을 정기적으로 사용하는 사람 수부터 입력합니다. 1인 기준 결과도 보여 주므로 규모가 다른 가정을 비교할 수 있습니다.",
    },
    {
      name: "주요 습관 설명하기",
      text: "샤워 횟수, 시간, 유량을 입력하고 변기, 수도꼭지, 세탁, 식기세척기를 추가합니다. 측정값이나 기기 표시가 있다면 사용하세요.",
    },
    {
      name: "하루 추정값 읽기",
      text: "큰 숫자는 가정의 하루 추정 리터입니다. 월간과 연간 값은 같은 습관을 사용하며 입력을 바꾸는 즉시 갱신됩니다.",
    },
    {
      name: "가장 큰 항목 찾기",
      text: "월간 리터와 비율 구성을 확인합니다. 각 활동 옆의 절약량은 절약 시나리오에 가까워졌을 때의 가능한 차이입니다.",
    },
    {
      name: "현실적인 패턴 시험하기",
      text: "절수 중심 또는 저유량을 실행한 뒤 자신의 값으로 돌아와 한 가지 습관만 바꿔 보세요. 먼저 조사할 항목을 찾는 데 도움이 됩니다.",
    },
  ],
  seo: {
    introTitle: "수도 요금에서 그 뒤의 습관까지",
    introOne:
      "수도 요금은 계량기를 통과한 양을 알려 주지만 어떤 습관이 변화를 만들었는지는 거의 알려 주지 않습니다. 이 계산기는 사람 수, 샤워, 변기, 수도꼭지, 세탁, 식기세척기와 예방 가능한 누수를 반복되는 생활 습관으로 보고 투명한 추정치를 만듭니다.",
    introTwo:
      "INE의 최신 자료는 2024년 스페인 가정의 평균을 1인 1일 128리터로 제시합니다. 이는 보편적인 목표가 아닙니다. 야외 사용, 기후, 공동 계량기 또는 숨은 누수가 차이를 설명할 수 있습니다.",
    averageLabel: "스페인 가정의 1인 1일 평균",
    groupsLabel: "구성에 표시되는 습관 그룹",
    daysLabel: "월간 추정에 사용하는 일수",
    readTitle: "추정값 읽는 방법",
    readText:
      "가장 눈에 띄는 숫자보다 월간 막대가 긴 항목부터 보세요. 긴 샤워는 드문 작은 활동보다 큰 변화 지점일 수 있고, 작은 누수도 매일 계속되면 커집니다. 계산기는 입력값에 따라 항목을 정렬합니다.",
    currentTitle: "현재 패턴",
    currentText:
      "입력한 빈도, 시간, 유량과 한 번의 리터를 하루 및 월간 리터로 변환합니다.",
    currentPoints: [
      "가정 규모를 계속 보여 줌",
      "활동별 기여도를 표시함",
      "입력 중 결과를 갱신함",
    ],
    lowerTitle: "절약 시나리오",
    lowerText:
      "짧은 샤워, 낮은 유량, 가득 찬 세탁처럼 온건하고 투명한 목표와 비교합니다.",
    lowerPoints: [
      "확정된 절약을 약속하지 않음",
      "요금 금액을 계산하지 않음",
      "행동 전에 변화를 시험하게 함",
    ],
    chooseTitle: "한 가지 변화 고르기",
    chooseText:
      "실행할 수 있을 만큼 구체적인 시나리오를 선택하세요. 샤워를 1분 줄이거나 유량을 측정하고, 수리 후 누수 입력을 제거해 보세요. 변화가 작으면 다음 항목을 확인합니다.",
    actions: [
      "용기와 타이머로 수도꼭지나 샤워 유량을 측정하세요.",
      "기기 표시와 입력한 한 번의 리터를 비교하세요.",
      "프리셋을 실행해 변화의 방향을 확인하세요.",
      "한 가지 습관을 바꾸고 현실적인 가정 목표를 정하세요.",
    ],
    limitsTitle: "이 추정으로 알 수 없는 것",
    limitsText:
      "계량기를 재현하거나 배관 고장을 찾거나 모든 야외 사용을 포함할 수 없습니다. 설비 표시값도 보장하지 않습니다. 계량기와 다르면 습관 수치를 무작정 높이지 말고 누락된 사용이나 누수를 먼저 확인하세요.",
    flowTitle: "유량과 빈도를 함께 보는 이유",
    flowText:
      "같은 설비도 작동 시간과 횟수에 따라 전혀 다른 총량을 만듭니다. 샤워는 사람 수, 주당 횟수, 분, 분당 리터를 곱합니다. 세탁과 식기세척기는 주당 횟수와 한 번의 리터를 사용합니다. 습관, 설비 관리, 측정 중 무엇을 바꿀지 결정하기 쉬워집니다.",
  },
});

export { content };
