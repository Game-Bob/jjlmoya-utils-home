import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'desk-ergonomics';
const title = 'デスクエルゴノミクスとワークスペースレイアウト調整';
const description =
  '身長を入力するだけで、椅子、デスク、モニターの最適な高さを即座に確認。在宅勤務での背中や首の痛みを解消します。';

const faqData = [
  {
    question: 'デスクの高さはなぜ重要ですか？',
    answer:
      'デスクが高すぎると肩が上がり、首や背中上部に緊張が生じます。低すぎると前かがみになり、腰椎の椎間板を圧迫します。適切な高さは前腕を床と平行に保ち、肘を90度に保ちます。',
  },
  {
    question: 'モニターの高さはどれくらいにすべきですか？',
    answer:
      'モニターの上端は目の高さと同じかやや低く、画面を10度から20度後ろに傾けます。これにより首を中立位置に保ち、目の疲れを軽減します。少し下を見るのは人間の視覚の自然な休息角度です。',
  },
  {
    question: '画面からどれくらい離れて座るべきですか？',
    answer:
      '理想的な距離は腕の長さほど、おおよそ50から70センチメートルです。この距離では目の焦点調節の負担が少なく、頭を動かさずに画面全体を見ることができます。大きな画面の場合は、比例して距離を増やしてください。',
  },
  {
    question: 'スタンディングデスクの方が良いですか？',
    answer:
      'スタンディングデスクは長時間の座り作業を減らし、心血管疾患や代謝疾患のリスクを下げます。しかし、一日中立ち続けると静脈や足の問題を引き起こすことがあります。最良の方法は交互に行うことです。30分座り、15分から30分立ち、定期的に体を動かしてください。',
  },
  {
    question: '足は床につくべきですか？',
    answer:
      'はい。足は床に平らにつき、膝を90度に保つべきです。椅子が高すぎる場合はフットレストを使用してください。足がぶら下がると太ももの裏側に圧力がかかり、血流を妨げてしびれを引き起こします。',
  },
  {
    question: '椅子の最適な高さはどれくらいですか？',
    answer:
      '座面は膝が約90度に曲がり、足が床に平らにつく高さにすべきです。腰は膝と同じ高さかやや高く保ちます。これにより体重が坐骨に均等に分布し、腰への圧力を軽減します。',
  },
];

const howToData = [
  {
    name: '身長を測定する',
    text: '裸足で壁に立ち、頭の先端に印をつけます。床から印までの距離をセンチメートルで測定します。',
  },
  {
    name: 'ワークスペースモードを選択する',
    text: '座り作業用デスクかスタンディングデスクのどちらの推奨値が必要かを選択します。それぞれのモードでは異なる身体の比率を使用します。',
  },
  {
    name: 'まず椅子を調整する',
    text: '足が床に平らにつき、膝が90度になるように椅子を設定します。腰は膝と同じ高さかやや高く保ちます。',
  },
  {
    name: 'デスク天板を調整する',
    text: 'タイピング時に前腕が床と平行になるようデスクを上下します。肘は90度に保ちます。',
  },
  {
    name: 'モニターを配置する',
    text: 'モニターを腕の長さほど離して配置します。画面上端は目の高さと同じかやや低く、10度から20度後ろに傾けます。',
  },
  {
    name: 'アバターで確認する',
    text: '画面上のアバターを使用して、すべての角度が緑色になっているか確認します。赤い関節がある場合は、該当する家具を調整します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: '悪いデスク環境の隠されたコスト',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くの人は一日に8時間以上デスクで過ごしますが、椅子、デスク、モニターが自分の体型に合っているか測定する人はほとんどいません。わずか数センチメートルの不一致でも、首、肩、腰に慢性緊張を生じさせます。数ヶ月から数年経つと、この緊張は痛みとなり、痛みは障害へと変わります。幸いなことに、最適なエルゴノミクスは、身長という一つの測定値から正確に計算できます。',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: '平均デスク時間', icon: 'mdi:desk' },
        { value: '90°', label: '最適な肘角度', icon: 'mdi:angle-acute' },
        { value: '60cm', label: '最適な画面距離', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'なぜワンサイズはすべてに合わないのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '標準的なデスクは高さ73センチメートル、標準的な椅子は高さ45センチメートルです。これらの寸法は数十年前に平均的な男性オフィスワーカー向けに設計されました。身長が175センチメートル未満または185センチメートルを超える場合、これらのデフォルト値は姿勢に悪影響を与えています。女性、青少年、胴が平均より長いまたは短い人は、既製の家具にとりわけ不適切にサービスされています。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '不良な環境',
          description: '時間とともに緊張を生じさせる一般的な家具のデフォルト設定。',
          icon: 'mdi:alert',
          points: ['モニターが高すぎるまたは低すぎる', 'デスクが肩を上げさせる', '足が床に届かない', '椅子に腰部支持がない'],
        },
        {
          title: '最適な環境',
          description: '身体の比率に基づいたパーソナライズされた測定値。',
          icon: 'mdi:check-circle',
          points: ['モニターが目の高さ', '肘が90度', '足が床に平らにつく', '腰が完全にサポートされる'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'クイック姿勢チェックリスト',
      icon: 'mdi:clipboard-check',
      badge: 'アクション',
      html: '<p style="margin:0">背中を椅子に預けて座ります。膝の裏側と座面の端の間に小さな隙間があることを確認します。タイピング時に手首がまっすぐであることを確認します。モニターの上端は目の高さを超えないようにします。30分ごとに2分間の歩行休憩を取ります。</p>',
    },
    {
      type: 'title',
      text: '座ることと立つことの科学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '人間の身体は何時間も同じ姿勢を保つように設計されていません。座っている時、腰椎の椎間板への圧力は立っている時に比べて40パーセント増加します。立ったまま静止していると、血液が足に滞留し、心臓はそれを戻すためにより努力しなければなりません。最も健康的な作業リズムは、30分から60分ごとに座ると立つを交互に行い、短い歩行を組み合わせることです。このツールは両方のモードを計算するので、昇降デスクを正しく設定できます。',
    },
    {
      type: 'summary',
      title: 'エルゴノミックなワークスペースの構築方法',
      items: [
        '裸足の身長をセンチメートルで測定します。',
        'このシミュレーターを使用して、椅子、デスク、モニターの正確な高さを取得します。',
        'まず椅子を調整し、次にデスク、最後にモニターを調整します。',
        'スタンディングデスクを使用する場合は、座り作業時のデスク高さよら30センチメートル高く設定します。',
        'モニターを腕の長さほど離して配置し、10度から20度後ろに傾けます。',
        '30分ごとに2分間の歩行またはストレッチ休憩を取ります。',
      ],
    },
  ],
  ui: {
    labelMode: 'ワークスペースモード',
    modeSit: '座り作業',
    modeStand: '立ち作業',
    labelHeight: 'あなたの身長',
    unitCm: 'cm',
    labelGender: '体格',
    genderMale: '男性',
    genderFemale: '女性',
    labelChair: '椅子',
    labelDesk: 'デスク',
    labelMonitor: 'モニター',
    labelDistance: '距離',
    labelAngle: '角度',
    labelGood: '良好',
    labelAdjust: '調整',
    badgeChair: '座面',
    badgeDesk: '天板',
    badgeMonitor: '画面',
    tipScreenLow: 'モニターを上げてください',
    tipScreenHigh: 'モニターを下げてください',
    tipDeskLow: 'デスクを上げてください',
    tipDeskHigh: 'デスクを下げてください',
    tipChairLow: '椅子を上げてください',
    tipChairHigh: '椅子を下げてください',
    tipDistance: '画面を腕の長さに移動してください',
  },
};
