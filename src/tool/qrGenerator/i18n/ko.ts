import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'qr';
const title = '오프라인 QR 코드 생성기';
const description =
  'WiFi, URL, 연락처용 QR 코드를 웹 브라우저에서 100% 안전하게 생성하세요. 데이터가 기기 외부로 유출되지 않습니다.';

const faqData = [
  {
    question: 'QR 코드에 유효 기간이 있나요?',
    answer:
      '아니요. 여기서 생성되는 코드는 정적(static)입니다. 코드가 이미지 내에 직접 포함되어 있어 외부 링크에 의존하지 않으며 영구적으로 작동합니다.',
  },
  {
    question: '입력한 데이터가 저장되나요?',
    answer:
      '절대 저장되지 않습니다. 모든 과정은 브라우저(클라이언트) 내에서 이루어지며, 서버로 데이터를 전송하지 않아 100% 개인정보가 보호됩니다.',
  },
  {
    question: 'iPhone이나 Android에서 사용할 수 있나요?',
    answer:
      '네. 대부분의 최신 스마트폰 카메라는 QR 코드를 기본적으로 인식하며, 해당 액션(WiFi 연결, 링크 열기 등)을 바로 제안합니다.',
  },
  {
    question: '인터넷 없이도 사용할 수 있나요?',
    answer:
      '네. 일단 페이지가 로드되면, 인터넷 연결을 끊어도 생성기는 문제없이 작동합니다.',
  },
];

const howToData = [
  {
    name: 'QR 타입 선택',
    text: 'WiFi 네트워크, URL 링크, 또는 연락처(vCard) 중 원하는 타입을 선택합니다.',
  },
  {
    name: '정보 입력',
    text: '네트워크 이름, 비밀번호, 웹 주소 등 필요한 정보를 입력합니다.',
  },
  {
    name: '생성 및 확인',
    text: 'QR 코드가 즉시 생성됩니다. 화면을 직접 스캔하여 제대로 작동하는지 확인하세요.',
  },
  {
    name: '다운로드',
    text: '인쇄하거나 디지털로 공유하기 위해 QR 코드를 이미지 파일로 저장합니다.',
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

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    { name: 'node-qrcode 라이브러리', url: 'https://github.com/soldair/node-qrcode' },
    { name: 'vCard 표준 규격 (RFC 6350)', url: 'https://www.rfc-editor.org/rfc/rfc6350' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '개인정보 보호 최우선: 로컬에서 생성',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구는 기기 내에서 직접 QR 코드를 생성합니다. <strong>WiFi 비밀번호</strong>나 <strong>개인 정보</strong>가 외부로 유출될 걱정이 없습니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: '보안 완벽', icon: 'mdi:shield-lock' },
        { value: '오프라인', label: '서버 무관', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: '이미지 저장', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: '사용 팁',
      items: [
        '모든 데이터는 브라우저 안에서만 처리됩니다.',
        'WiFi 이름(SSID)과 비밀번호는 대소문자를 구분합니다.',
        '정적 QR은 비밀번호가 바뀌면 새로 생성해야 합니다.',
        '인쇄하기 전에 항상 화면을 직접 스캔하여 테스트하세요.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: '연락처',
    labelSsid: '네트워크 이름(SSID)',
    labelPassword: '비밀번호',
    labelEncryption: '보안 방식',
    labelHidden: '숨겨진 네트워크',
    labelUrl: '웹사이트 주소(URL)',
    labelName: '이름',
    labelSurname: '성',
    labelPhone: '전화번호',
    labelEmail: '이메일',
    labelOrg: '조직/회사명',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: '없음',
    downloadBtn: 'PNG 저장',
    privacyMsg: '브라우저 내에서 100% 생성. 데이터는 안전합니다.',
    placeholderSsid: '우리집WiFi_5G',
    placeholderUrl: 'https://example.com',
    placeholderPassword: '••••••••',
  },
};
