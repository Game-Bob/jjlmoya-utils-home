import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-softener';
const title = '家庭用軟水器と塩消費量最適化ツール';
const description =
  '水の硬度レベルを分析し、軟水器の最適設定と年間塩消費量を計算します。水あかの影響予測、塩の補充スケジュール、家電の寿命予測をすべてこのインタラクティブツールで確認できます。';

const faqData = [
  {
    question: '水の硬度とは何ですか？',
    answer:
      '水の硬度とは、水道水に溶けているカルシウムとマグネシウムのミネラル濃度のことです。グレイン毎ガロンやフランス硬度で測定されます。硬水は配管に水あかを堆積させ、加熱効率を低下させ、家電の寿命を短くします。',
  },
  {
    question: '軟水器はどのように機能しますか？',
    answer:
      '軟水器はイオン交換樹脂ビーズを使用して、カルシウムイオンとマグネシウムイオンをナトリウムイオンと交換します。樹脂が飽和すると、システムはタンクに塩水を流すことで再生し、ビーズを復活させて硬いミネラルを排水します。',
  },
  {
    question: '軟水器は1年にどのくらい塩を使用しますか？',
    answer:
      '中程度の硬水にある4人家族の世帯では、通常年間80から120キログラムの塩を使用します。非常に硬水であるか、より大きな世帯では200キログラムを超えることもあります。現代の高効率軟水器は、古いモデルより約30パーセント塩を少なく使用します。',
  },
  {
    question: '塩タンクはどのくらいの頻度で補充すべきですか？',
    answer:
      'ほとんどの塩水タンクは4週間から8週間ごとに補充が必要です。毎月塩の残量を確認してください。タンクが3分の1以下になったら、新しい25キログラム袋を追加してください。塩が完全になくなると、樹脂は再硬化して効果を失うので、絶対に空にしないでください。',
  },
  {
    question: '硬水は本当に家電を損傷しますか？',
    answer:
      'はい。加熱要素に付着した水あかは、より重い負荷をかけるため、電気代が高騰し、早期故障を引き起こします。非常に硬水地域の給湯器は、想定寿命の最大45パーセントを失うことがあります。洗濯機と食器洗い機も、詰まったバルブやスケール付着したドラムの影響を受けます。',
  },
  {
    question: '軟水は飲めますか？',
    answer:
      '軟水は大多数の人が飲んでも安全です。ナトリウムの増加はわずかで、おおよそ1日1枚のパンに相当します。ただし、厳格な低ナトリウム食を取っている人は、飲料水として軟水化されていない別の蛇口を使用するか、カリウムベースの軟水器塩を選ぶことを好むかもしれません。',
  },
];

const howToData = [
  {
    name: '水の硬度を入力してください',
    text: '水質検査レポートや試験紙から硬度値を入力してください。単位セレクターからグレイン毎ガロンかフランス硬度を選択してください。',
  },
  {
    name: '世帯人数を設定',
    text: '自宅に住む人数を選択してください。住人が多いほど、水の消費量が増え、塩の減りも早くなります。',
  },
  {
    name: '軟水器の容量を選択',
    text: '軟水器の樹脂タンクのグレイン容量を入力してください。これは通常、制御バルブまたは取扱説明書に記載されています。一般的な値は24,000または32,000グレインです。',
  },
  {
    name: '硬度カテゴリーを確認',
    text: 'インタラクティブな硬度スケールを読んで、水が軟水か、中程度に硬いか、または極めて硬いかを理解してください。',
  },
  {
    name: '塩の予測を確認',
    text: '塩袋スタックシミュレーターを見て、1年間に何袋の25キログラム袋が必要か、次の補充はいつかを確認してください。',
  },
  {
    name: '家電への影響を確認',
    text: '洗濯機、給湯器、コーヒーメーカーの基準寿命を、現在の未処理の硬水での推定寿命と比較してください。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: '見えない硬水のコスト',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '硬水は家庭で最も高価な隠れた問題の一つです。蛇口を開けるたびに、溶けたミネラルが配管や家電を流れます。何ヶ月も何年もかけて、これらのミネラルは水あかに結晶化し、加熱要素を詰まらせ、流量を減らし、ゴムシールを破壊する白い硬い殻となります。その結果、電気代が高騰し、家電の寿命が短くなり、頻繁な保守対応が必要になります。軟水器はこの損傷の根源を除去します。',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: '平均年間塩使用量', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: '洗濯機の基準寿命', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'GPG毎年あたりの水あかmm', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '水あかがこれほど破壊的な理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '水あかはヤカンの見た目の汚れだけではありません。給湯器の内部では、加熱要素に断熱層を形成します。水あか1ミリメートルごとに、熱伝達効率は最大10パーセント低下します。つまり、3ミリメートルの被膜は、給湯の電気代をほぼ30パーセント増加させる可能性があります。洗濯機では、水あかが洗浄剤の活性化を阻害するため、より多くの洗剤を使っても結果が悪くなります。コーヒーメーカーでは、サーモスタットを損傷し、苦味のある不均一な抽出を生み出します。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '未処理の硬水',
          description: 'ミネラルが配管システム全体と接続されたすべての家電に自由に堆積します。',
          icon: 'mdi:alert',
          points: ['ヒーターとボイラーの急速な水あか堆積', '洗剤と石鹸の消費増加', '家電寿命が30から45パーセント短縮', '水あかの断熱効果による電気代の高騰'],
        },
        {
          title: '軟水',
          description: 'カルシウムとマグネシウムが、蛇口や家電に到達する前に取り入れ口の地点で除去されます。',
          icon: 'mdi:check-circle',
          points: ['加熱要素への水あか堆積ゼロ', '通常の洗剤量でより良い結果', '家電が設計上の完全な寿命に到達', '給湯の消費電力低減'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '簡易硬水チェック',
      icon: 'mdi:clipboard-check',
      badge: '対処',
      html: '<p style="margin:0">透明なボトルに水道水を入れ、液体石鹸を数滴加えてください。激しく振ってください。水が白濁したままで泡がほとんど出ない場合、水は硬水です。透明で安定した厚い泡が出る場合は軟水です。正確な測定には全硬度試験紙を使用するか、水道局に検査結果を依請してください。</p>',
    },
    {
      type: 'title',
      text: '塩の供給量を正しく設定する',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '塩を使い果たすことは、軟水器を破壊する最速の方法です。塩水タンクが空になると、樹脂層は数日で再硬化し、システムは家を保護するのをやめます。この計算機を使って、1年間に正確に何袋の25キログラム袋が必要かを予測してください。結果が10袋を超える場合は、より大容量の樹脂タンクへのアップグレードや、再生サイクルあたりの塩使用量を減らす高効率バルブの導入を検討してください。',
    },
    {
      type: 'summary',
      title: '硬水から自宅を守る方法',
      items: [
        'この計算機を使って、正確な水の硬度カテゴリーと塩の必要量を確認してください。',
        '主給水の取り入れ口に適正サイズの軟水器を設置してください。',
        '塩水タンクが3分の1を下回る前に補充してください。',
        '樹脂の最高性能を得るため、高純度の蒸発塩ペレットを使用してください。',
        '3年から5年ごとにバルブと樹脂層をメンテナンスしてください。',
        '水あかの蓄積を示す急激な増加を示す可能性がある家電の電気代を監視してください。',
      ],
    },
  ],
  ui: {
    labelHardness: '水の硬度',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: '世帯人数',
    unitPeople: '人',
    labelSoftenerCapacity: '軟水器容量',
    unitGrains: 'grains',
    hardnessSoft: '軟水',
    hardnessSlightly: 'やや硬水',
    hardnessModerate: '中程度の硬水',
    hardnessHard: '硬水',
    hardnessVery: '非常に硬水',
    hardnessExtreme: '極めて硬水',
    scaleTitle: '水あかの堆積速度',
    scaleUnitMetric: 'mm/年',
    scaleUnitImperial: 'in/年',
    saltTitle: '年間塩消費予測',
    saltAnnual: '年間塩消費量',
    saltBags: '年間の袋数',
    saltDaysPerBag: '1袋あたりの日数',
    saltWeeksPerBag: '1袋あたりの週数',
    applianceTitle: '家電の寿命',
    applianceWasher: '洗濯機',
    applianceHeater: '給湯器',
    applianceCoffee: 'コーヒーメーカー',
    applianceBaseline: '軟水使用時',
    applianceWithHardness: '硬水使用時',
    applianceSaved: '年',
    badgeSaved: '延長',
    labelUnitSystem: '単位',
    btnMetric: 'メートル法',
    btnImperial: 'ヤードポンド法',
  },
};
