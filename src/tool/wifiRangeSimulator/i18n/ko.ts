import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wifi-range-simulator';
const title = 'WiFi 범위 및 장애물 시뮬레이터';
const description =
  '집 평면도를 그리고 벽, 문, 가구, 가전제품을 배치한 다음 라우터와 기기를 드래그하여 최적의 신호 경로를 찾아보세요. 실시간 적용 범위 손실, 스트리밍 평가 및 배치 팁을 확인하여 새 하드웨어를 구매하지 않고도 사각지대를 해결할 수 있습니다.';

const faqData = [
  {
    question: '특정 방에서 Wi-Fi 신호가 약해지는 이유는 무엇인가요?',
    answer:
      'Wi-Fi는 물리적 재질에 의해 흡수, 반사 또는 차단되는 전파를 사용합니다. 벽돌, 콘크리트, 금속이 가장 큰 영향을 미치며 각각 신호 강도를 크게 저하시킵니다. 물과 유리도 신호의 일부를 반사하거나 흡수할 수 있습니다.',
  },
  {
    question: '콘크리트나 석재 벽이 Wi-Fi에 얼마나 영향을 미치나요?',
    answer:
      '표준 콘크리트 벽은 2.4GHz 신호를 10~20데시벨 감쇠시킬 수 있습니다. 70~80센티미터 두께의 석재 벽은 22데시벨 이상에 도달할 수 있습니다. 이는 두께와 밀도에 따라 약 50~90%의 범위 손실로 이어집니다. 5GHz에서는 밀도가 높은 재질이 더 높은 주파수를 더 빨리 흡수하기 때문에 손실이 더 큽니다.',
  },
  {
    question: '최상의 커버리지를 얻으려면 라우터를 어디에 두어야 하나요?',
    answer:
      '중앙, 높은 곳, 개방된 곳입니다. 집 중앙, 두꺼운 벽과 금속 물체에서 최소 1미터 이상 떨어진 곳에 라우터를 두고, 수평 확산을 위해 가슴 높이로 올리세요. 모서리, 옷장, 가구 뒤의 낮은 위치는 피하세요.',
  },
  {
    question: '유리문이 Wi-Fi를 차단할 수 있나요?',
    answer:
      '투명 유리는 영향이 미미하지만, 금속 필름이 있는 코팅 유리나 이중창은 신호를 반사할 수 있습니다. 시뮬레이터는 표준 유리를 약 2~3데시벨 손실이 있는 가벼운 장애물로 취급합니다.',
  },
];

const howToData = [
  {
    name: '신호 경로 식별',
    text: '라우터와 관심 있는 기기 사이에 직선을 상상해보세요. 이 선을 가로지르는 모든 물체가 중요합니다.',
  },
  {
    name: '각 장애물 추가',
    text: '시뮬레이터의 재질 버튼을 클릭하여 경로를 가로지르는 모든 벽, 문, 가전제품 또는 가구를 추가하세요.',
  },
  {
    name: '평가 결과 읽기',
    text: '객체를 추가하거나 제거할 때 신호 링, 웨이브 애니메이션, 스트리밍 대시보드가 즉시 업데이트되는 것을 확인하세요.',
  },
  {
    name: '상황별 팁 적용',
    text: '정확한 장애물 조합에 따라 나타나는 배치 카드를 따라 새 하드웨어를 구매하지 않고도 커버리지를 개선하세요.',
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

export const content: ToolLocaleContent<WifiRangeSimulatorUI> = {
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
      text: '옆방에서 Wi-Fi가 죽는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '라우터는 모든 방향으로 전파를 방출합니다. 이 전파는 공기를 쉽게 통과하지만, 만나는 모든 물리적 물체에 영향을 받습니다. 일부 재질은 대부분의 신호를 통과시킵니다. 다른 재질은 완전히 흡수해버립니다. 집 안의 어떤 물체가 조용히 연결을 방해하는지 이해하는 것이 새 하드웨어에 한 푼도 쓰지 않고 사각지대를 해결하는 첫걸음입니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: '석고보드 손실', icon: 'mdi:wall' },
        { value: '22 dB', label: '두꺼운 석재 벽', icon: 'mdi:wall' },
        { value: '18 dB', label: '금속문 손실', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '집 안 각 물체의 실제 비용',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모든 장애물이 동일하지는 않습니다. 석고보드 한 장은 신호의 몇 퍼센트를 깎아낼 수 있지만, 콘크리트 기둥이나 금속문은 유효 범위를 절반으로 줄일 수 있습니다. 라우터를 TV 뒤, 냉장고 옆, 또는 금속 선반 아래 바닥에 놓을 때 실제로 어떤 일이 일어나는지 알아보세요.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '가벼운 장애물',
          description: '이러한 물체는 신호 손실이 최소이며 일반적으로 신호 경로 근처에 있어도 안전합니다. 창문 하나나 유리문 하나는 걱정할 필요가 없습니다.',
          icon: 'mdi:window-open-variant',
          points: [
            '유리문: 2~3 dB 손실',
            '표준 창문: 2 dB 손실',
            '석고보드 칸막이: 3 dB 손실',
            '목재 내부문: 4 dB 손실',
          ],
        },
        {
          title: '중간 장애물',
          description: '이러한 물체는 커버리지에 눈에 띄는 영향을 미칩니다. 한두 개는 괜찮지만, 동일한 신호 경로에 세 개 이상이 쌓이면 버퍼링과 지연이 발생하기 시작합니다.',
          icon: 'mdi:wardrobe',
          points: [
            '목재 옷장: 5 dB 손실',
            '큰 거울: 6 dB 손실',
            '세탁기: 6 dB 손실',
            '전자레인지: 5 dB 손실',
          ],
        },
        {
          title: '무거운 장애물',
          description: '이것들은 홈 네트워크의 조용한 킬러입니다. 콘크리트 벽 하나나 금속문 하나가 강한 신호를 약한 신호로 바꿀 수 있으며, 여러 개가 쌓이면 확실한 사각지대가 생성됩니다.',
          icon: 'mdi:wall',
          points: [
            '벽돌 벽: 8 dB 손실',
            '바닥 또는 천장: 10 dB 손실',
            '냉장고: 10 dB 손실',
            '수족관: 12 dB 손실',
          ],
        },
        {
          title: '극한 장애물',
          description: '이러한 재질은 거의 모든 무선 에너지를 흡수하거나 반사합니다. 신호 경로가 이 중 하나를 가로지르면 라우터나 기기를 옮겨야 합니다. 우회 방법은 없습니다.',
          icon: 'mdi:shield',
          points: [
            '두꺼운 석재 벽(70~80cm): 22 dB 손실',
            '콘크리트 벽: 15 dB 손실',
            '금속 캐비닛: 12 dB 손실',
            '금속문 또는 게이트: 18 dB 손실',
            '엘리베이터 샤프트: 20+ dB 손실',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '서로 다른 주파수가 벽을 통과하는 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '최신 라우터는 대부분 2.4GHz와 5GHz의 두 대역에서 송신합니다. 낮은 주파수는 더 멀리 도달하고 벽을 더 쉽게 통과하지만 느리고 혼잡합니다. 높은 주파수는 매우 빠르지만 경로상의 모든 장애물에 흡수됩니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2.4GHz 침투',
          description: '낮은 주파수는 더 멀리 도달하고 벽을 더 잘 통과합니다. 장거리에 이상적이지만 이웃 네트워크로 혼잡합니다.',
          icon: 'mdi:signal',
          points: [
            '벽돌과 콘크리트를 더 잘 통과',
            '이웃 라우터의 간섭이 더 많음',
            '최고 속도는 느리며, 실제 약 150Mbps',
            '스마트홈 기기 및 IoT에 더 적합',
          ],
        },
        {
          title: '5GHz 침투',
          description: '높은 주파수는 더 빠른 속도를 제공하지만 건축 자재에 훨씬 빨리 흡수됩니다. 개방된 공간과 가까운 기기에 가장 적합합니다.',
          icon: 'mdi:signal-5g',
          points: [
            '콘크리트와 금속 통과에 취약',
            '간섭이 적고 채널이 깨끗함',
            '같은 방에서 기가비트 속도 가능',
            '커버리지는 나쁘지만 도달하는 곳에서는 품질 우수',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '숨겨진 킬러: 당신이 의심하지 못한 물체들',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '대부분의 사람들은 벽을 탓하지만, 최악의 Wi-Fi 킬러 중 일부는 일상적인 물건들입니다. 수족관은 대부분 물로 구성되어 있으며, 물은 2.4GHz 전파를 거의 완벽하게 흡수합니다. 큰 거울에는 신호를 기기에서 멀리 반사시키는 얇은 금속 뒷면이 있습니다. 전자레인지는 2.4GHz로 방사선을 방출하며, 이는 라우터와 정확히 동일한 주파수로, 음식을 데울 때마다 간섭을 일으킵니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '수족관 함정',
      icon: 'mdi:fish',
      badge: '예상치 못한 차단기',
      html: '<p>큰 수족관은 Wi-Fi 신호를 최대 12데시벨까지 감쇠시킬 수 있습니다. 이는 두꺼운 콘크리트 벽과 동일합니다. 라우터가 수족관 한쪽에 있고 책상이 반대쪽에 있다면, 물이 뒤에 있는 벽보다 더 큰 피해를 주고 있는 것입니다.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '거울 효과',
      icon: 'mdi:mirror',
      badge: '반사 위험',
      html: '<p>큰 거울은 빛을 반사하도록 설계된 얇은 금속층이 뒷면에 있습니다. 이 동일한 금속층이 전파도 반사합니다. 라우터를 향한 거울은 필요한 위치에서 신호를 멀리 반사시키거나 데이터 패킷을 혼란스럽게 하는 다중 경로 간섭을 일으킬 수 있습니다.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '전자레인지 간섭',
      icon: 'mdi:microwave',
      badge: '활성 방해기',
      html: '<p>전자레인지는 2.45GHz에서 작동하며 2.4GHz Wi-Fi 대역과 직접 겹칩니다. 작동 중일 때 전자레인지는 반경 3~5미터 내의 2.4GHz 신호를 없앨 수 있습니다. 라우터가 2.4GHz만 지원하고 주방이 가까운 경우, 듀얼밴드 라우터로 전환하고 중요한 작업에는 5GHz를 사용하세요.</p>',
    },
    {
      type: 'title',
      text: '방별 라우터 배치 위치',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이상적인 라우터 위치는 가장 편리한 곳이 아닙니다. 실제로 인터넷을 사용하는 방으로 가장 깨끗한 시야를 제공하는 곳입니다. 각 방에 대해 어떻게 생각해야 하는지 알려드립니다.',
    },
    {
      type: 'table',
      headers: ['방', '위험 수준', '어려운 이유', '해결책'],
      rows: [
        ['주방', '높음', '냉장고, 전자레인지, 금속 캐비닛, 수도관', '라우터를 주방 밖에 두고, 절대 안에 두지 마세요.'],
        ['욕실', '높음', '거울, 수도관, 금속 메쉬 타일', '욕실 벽 반대편에 라우터를 두지 마세요.'],
        ['침실', '중간', '옷장, 두꺼운 벽, 금속 침대 프레임', '라우터를 높이 두고, 가구 위 경로를 확보하세요.'],
        ['거실', '낮음', '보통 개방적, TV와 콘솔에 주의', '라우터를 TV 뒤에 숨기지 말고 보이게 두세요.'],
        ['차고', '극한', '금속문, 콘크리트, 자동차', '실내용 라우터가 차고까지 닿을 것으로 기대하지 마세요.'],
        ['정원/테라스', '높음', '외벽, 유리, 거리', '야외 액세스 포인트 또는 메시 노드를 사용하세요.'],
      ],
    },
    {
      type: 'title',
      text: '1미터 규칙과 기타 배치 팁',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '작은 움직임이 큰 차이를 만듭니다. 집 배선을 다시 할 필요가 없습니다. 전파가 어떻게 움직이는지 이해하고 깨끗한 경로를 제공하기만 하면 됩니다.',
    },
    {
      type: 'tip',
      title: '1미터 규칙',
      html: '<p>라우터를 콘크리트나 금속 장벽에서 단 1미터만 떨어뜨려도 손실된 신호 강도의 최대 40%를 회복할 수 있습니다.</p>',
    },
    {
      type: 'tip',
      title: '높이 올려 커버리지 확보',
      html: '<p>라우터를 선반 위 가슴 높이에 올리세요. 신호는 안테나에서 수평으로 방사됩니다. 바닥에 놓으면 커버리지의 절반을 땅에 낭비하게 됩니다.</p>',
    },
    {
      type: 'tip',
      title: '보이는 곳에 두세요',
      html: '<p>라우터를 캐비닛, 옷장 안이나 TV 뒤에 절대 숨기지 마세요. 밀폐된 공간은 패러데이 케이지처럼 작용하여 신호가 방에 도달하기 전에 가둬버립니다.</p>',
    },
    {
      type: 'tip',
      title: '안테나 방향',
      html: '<p>라우터에 외부 안테나가 있는 경우 하나는 수직으로, 하나는 수평으로 배치하세요. 이렇게 하면 다양한 높이의 기기에 더 나은 커버리지를 제공합니다.</p>',
    },
    {
      type: 'tip',
      title: '간섭 피하기',
      html: '<p>라우터를 전자레인지, 무선전화기, 베이비 모니터에서 최소 1.5미터 이상 떨어뜨리세요. 이러한 기기는 2.4GHz 스펙트럼을 공유하며 활성 간섭을 일으킵니다.</p>',
    },
    {
      type: 'tip',
      title: '중간층 이점',
      html: '<p>다층 주택에 거주하는 경우 라우터를 중간층에 두세요. 신호는 콘크리트 바닥을 통해 위아래로 제대로 퍼지지 않습니다.</p>',
    },
    {
      type: 'title',
      text: '스트리밍 평가: 신호의 실제 의미',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '백분율은 추상적입니다. 여러분이 정말로 관심있는 것은 Netflix를 시청하거나, 게임에서 승리하거나, 화면이 멈추지 않고 영상 통화를 마칠 수 있는지입니다. 각 신호 수준이 실제 세계에서 무엇을 의미하는지 알려드립니다.',
    },
    {
      type: 'table',
      headers: ['신호', '4K 스트리밍', '온라인 게임', '영상 통화', '웹 서핑'],
      rows: [
        ['80%~100%', '완벽, 즉시 로딩', '낮은 지연, 경쟁 플레이', '선명함, 끊김 없음', '즉시, 지연 없음'],
        ['60%~79%', '좋음, 가끔 버퍼링', '플레이 가능, 경미한 지연', '안정적, 드물게 깨짐', '빠름, 문제 없음'],
        ['40%~59%', '몇 분마다 버퍼링', '지연 경고, 러버밴딩', '깨짐, 일부 끊김', '사용 가능, 느린 로딩'],
        ['20%~39%', '불가능, 계속 멈춤', '연결 끊김, 플레이 불가', '잦은 끊김, 사용 불가', '매우 느림, 타임아웃'],
        ['0%~19%', '시작 안 됨', '연결 불가', '연결 없음', '사용 불가'],
      ],
    },
    {
      type: 'title',
      text: '아무것도 사기 전에 빠른 해결책',
      level: 3,
    },
    {
      type: 'summary',
      title: '무료 최적화 체크리스트',
      items: [
        '라우터를 집 모서리가 아닌 중앙으로 옮기세요.',
        '선반이나 높은 가구 위 가슴 높이로 올리세요.',
        '캐비닛, 옷장, TV 뒤에서 꺼내세요.',
        '가능하면 안테나 하나는 수직, 하나는 수평으로 향하게 하세요.',
        '가까운 기기에는 5GHz, 먼 기기에는 2.4GHz를 사용하세요.',
        '스캐너 앱을 사용하여 덜 혼잡한 Wi-Fi 채널로 변경하세요.',
        '라우터 펌웨어를 업데이트하여 알려진 신호 버그를 수정하세요.',
        '메모리 누수를 방지하기 위해 한 달에 한 번 라우터를 재부팅하세요.',
      ],
    },
    {
      type: 'title',
      text: '하드웨어를 업그레이드해야 할 때',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '때로는 환경이 이깁니다. 모든 배치 팁을 시도했지만 여전히 사각지대가 있다면, 물리 법칙과 싸우는 대신 네트워크를 확장할 때입니다.',
    },
    {
      type: 'proscons',
      title: 'WiFi 확장기 vs 메시 시스템',
      items: [
        { pro: '확장기는 저렴하고 설치가 쉽습니다.', con: '확장기는 두 번째 네트워크 이름을 만들고 속도가 절반이 됩니다.' },
        { pro: '확장기는 단일 사각지대에 효과적입니다.', con: '확장기는 증폭할 강한 기존 신호가 필요합니다.' },
        { pro: '메시 시스템은 하나의 원활한 네트워크를 만듭니다.', con: '메시 시스템은 초기 비용이 더 비쌉니다.' },
        { pro: '메시는 여러 층과 대형 주택을 처리합니다.', con: '메시는 모뎀 근처에 메인 노드가 필요합니다.' },
      ],
    },
    {
      type: 'tip',
      title: '메시를 사용해야 할 때',
      html: '<p>120제곱미터 이상이거나 두꺼운 콘크리트 벽이 있는 주택의 경우, 최소 2개의 노드가 있는 메시 시스템이 아무리 비싼 단일 라우터보다 성능이 뛰어납니다.</p>',
    },
    {
      type: 'title',
      text: '데시벨을 알기 쉽게 이해하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '데시벨은 로그 단위이므로 일반 숫자처럼 작동하지 않습니다. 3dB의 손실마다 신호 전력이 절반으로 줄어듭니다. 6dB 손실은 원래 전력의 4분의 1만 남는다는 의미입니다. 10dB 손실은 10분의 1만 생존한다는 의미입니다. 그렇기 때문에 15dB의 콘크리트 벽이 파괴적인 것입니다. 신호를 약화시킬 뿐만 아니라 완전히 소멸시킵니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '감쇠', definition: '신호가 재질을 통과할 때 강도가 점차 손실되는 것. 숫자가 높을수록 더 많은 신호가 손실됩니다.' },
        { term: 'dBm', definition: 'Wi-Fi 신호 강도를 측정하는 데 사용되는 전력 단위. 0dBm은 1밀리와트입니다. 음수 값이 정상이며, -30은 우수, -80은 간신히 사용 가능을 의미합니다.' },
        { term: '사각지대', definition: 'Wi-Fi 신호가 너무 약해 안정적인 연결을 설정하거나 유지할 수 없는 영역.' },
        { term: '메시 네트워크', definition: '여러 라우터 노드가 함께 작동하여 넓은 영역을 하나의 원활한 Wi-Fi 네트워크로 커버하는 시스템.' },
        { term: '다중 경로 간섭', definition: '전파가 벽과 물체에 반사되어 동일한 신호의 지연된 여러 복사본이 생성되어 수신기를 혼란스럽게 하는 현상.' },
        { term: 'SSID', definition: 'Wi-Fi 네트워크의 이름. 확장기는 종종 두 번째 SSID를 만들고, 메시 시스템은 모든 노드에서 하나의 이름을 유지합니다.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '라우터 배치의 황금률',
      icon: 'mdi:map-marker-radius',
      badge: '핵심 팁',
      html: '<p>라우터가 현재 모서리, 캐비닛 안 또는 바닥에 있다면, 신호가 방을 떠나기도 전에 잠재적 범위의 50~70%를 낭비하고 있는 것입니다. 가장 빠른 업그레이드는 개방되고 중앙에 있으며 높은 곳으로 옮기는 것입니다. 이 한 가지 변경으로 새 장비를 구매하는 것보다 더 많은 문제를 해결하는 경우가 많습니다.</p>',
    },
    {
      type: 'summary',
      title: 'WiFi 사각지대를 방지하는 방법',
      items: [
        '라우터를 중앙, 높은 곳, 개방된 곳에 배치하세요.',
        '라우터와 기기 사이의 벽 수를 최소화하세요.',
        '라우터 위치로 주방, 욕실, 차고를 피하세요.',
        '같은 방에서는 5GHz, 먼 거리에서는 2.4GHz를 사용하세요.',
        '큰 주택이나 두꺼운 외벽에는 메시를 고려하세요.',
        '월 1회 재부팅하고 펌웨어를 업데이트하여 최고 성능을 유지하세요.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Wi-Fi를 차단하는 집 안 물체들',
    labelAddObstacle: '클릭하여 신호 경로에 추가',
    labelRemove: '제거',
    labelSignalStrength: '신호',
    labelEffectiveRange: '유효 범위',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: '스트리밍 평가',
    verdictPerfect: '완벽',
    verdictGood: '좋음',
    verdictFair: '보통',
    verdictPoor: '나쁨',
    verdictDead: '사각지대',
    tipTitle: '배치 팁',
    label4kStreaming: '4K 스트리밍',
    labelOnlineGaming: '온라인 게임',
    labelVideoCalls: '영상 통화',
    labelBasicBrowsing: '기본 웹서핑',
    statusPerfect: '완벽',
    statusGood: '좋음',
    statusFair: '보통',
    statusPoor: '나쁨',
    statusImpossible: '불가능',
    statusLowLatency: '낮은 지연',
    statusLagWarning: '지연 경고',
    statusDisconnect: '연결 끊김',
    statusStable: '안정적',
    statusPixelated: '깨짐',
    statusDropped: '끊김',
    statusPass: '통과',
    statusUnusable: '사용 불가',
    tipMoveRouter: '라우터를 그 견고한 장벽에서 단 1미터만 옮겨도 신호가 최대 40% 향상될 수 있습니다.',
    tipElevateRouter: '라우터를 가슴 높이로 올리세요. 신호는 수평으로 퍼지며, 바닥은 생각보다 더 많이 흡수합니다.',
    tipReduceObstacles: '벽이 하나 추가될 때마다 신호가 절반으로 줄어듭니다. 라우터와 기기 사이의 장애물 수를 줄이도록 하세요.',

    tipFishTank: '수족관은 콘크리트 벽처럼 Wi-Fi를 차단합니다. 라우터나 기기를 그곳에서 먼리 옮기세요.',
    tipMicrowave: '전자레인지는 작동 중 2.4GHz 대역을 방해합니다. 5GHz를 사용하거나 라우터를 주방에서 더 먼리 옮기세요.',
    labelMove: '이동',
    labelWalls: '벽',
    labelDrywall: '석고보드',
    labelBrick: '벽돌',
    labelConcrete: '콘크리트',
    labelStone: '돌',
    labelObjects: '물체',
    labelWood: '나무',
    labelMetal: '금속',
    labelWindow: '창문',
    labelFridge: '냉장고',
    labelFish: '물고기',
    labelMicro: '전자레인지',
    labelMirror: '거울',
    labelFurn: '가구',
    labelActions: '작업',
    labelUndo: '실행 취소',
    labelAddDevice: '+ 기기',
    labelClearWalls: '벽 지우기',
    labelClearObjects: '물체 지우기',
    labelClearAll: '모두 지우기',
    labelZoomIn: '확대',
    labelZoomOut: '축소',
    labelRouter: '라우터',
    labelAverageSignal: '평균 신호',
    labelScaleMeters: '5m',
    hintText: '라우터나 기기를 드래그하여 이동하세요. 벽이나 물체를 더블클릭하여 삭제하세요. Ctrl+Z로 실행 취소합니다.',
    labelMaxDevices: '최대 4개 기기',
    labelDevicePrefix: '기기',
    labelPerDevice: '기기당',
    labelDb: 'dB',
  },
};
