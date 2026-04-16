import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'led-saving-calculator';
const title = 'LED節電・節約計算機';
const description =
  '従来の電球をLEDに交換することで節約できる金額と電気量を計算。年間・月間の正確な節約額とCO2削減量を確認できます。';

const faqData = [
  {
    question: 'LED電球に替えるとどれくらい節約になりますか？',
    answer:
      'LED電球は白熱電球と比較して、消費電力を80%〜90%削減できます。例えば、60Wから9Wに交換すると、明るさを維持したまま電気代を大幅に抑えることが可能です。',
  },
  {
    question: 'LEDへの交換コストはどれくらいで元が取れますか？',
    answer:
      'LED電球の価格低下と高い節電効果により、通常の利用環境であれば、約4ヶ月以内で初期投資を回収できる場合がほとんどです。点灯時間が長い場所ほど回収は早くなります。',
  },
  {
    question: '規定より高いワット数のLED電球を付けても大丈夫ですか？',
    answer:
      'LEDは発熱が非常に少ないため、従来の電球では熱の問題で制限されていた器具でも、口金の電気性能の範囲内であれば、より明るい（ルーメン数の高い）電球を使用できることがあります。',
  },
  {
    question: '寿命はパッケージに書いてある通り本当に長いのですか？',
    answer:
      '高品質なLEDの寿命は15,000〜50,000時間です。1日4時間の使用なら、15年以上交換不要で使い続けることができます。',
  },
  {
    question: '調光器付きの照明でLEDは使えますか？',
    answer:
      '「調光器対応」と明記されている電球のみ使用可能です。非対応のLEDを古い調光器で使うと、ちらつきや異音の原因となります。',
  },
  {
    question: '照明器具ごと買い替える必要がありますか？',
    answer:
      '99%の場合、その必要はありません。口金のサイズ（E27、E26、E17、GU10など）が合うLED電球に交換するだけで済みます。',
  },
];

const howToData = [
  {
    name: '電球の数を数える',
    text: '家の中にある白熱電球やハロゲン電球の数と、それぞれのワット数を確認します。',
  },
  {
    name: '相当するLEDを選ぶ',
    text: '計算機で現在の電球タイプを選択すると、対応するLED電球の値が自動的に設定されます。',
  },
  {
    name: '使用時間を設定する',
    text: '1日あたりの平均的な点灯時間を入力します。',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: '省エネポータルサイト — 資源エネルギー庁',
      url: 'https://www.enecho.meti.go.jp/category/saving_and_new/saving/',
    },
    {
      name: 'LED照明ナビ — 日本照明工業会',
      url: 'https://www.jlma.or.jp/led-navi/index.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'LED節電ガイド：電気代を賢く節約する方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '家庭の照明を<strong>LED（発光ダイオード）</strong>へ切り替えることは、最も確実に、かつ短期間で投資を回収できる節約術の一つです。60Wの白熱電球と同じ明るさを維持しながら、LEDならわずか9W程度の消費電力で済み、<strong>約85%の節電</strong>が可能です。',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: '消費電力削減', icon: 'mdi:lightning-bolt' },
        { value: '25,000h', label: 'LEDの寿命', icon: 'mdi:clock-outline' },
        { value: '4ヶ月以内', label: 'コスト回収', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '従来の白熱電球',
          description: 'フィラメントを発熱させる20世紀の技術。エネルギーの95%を熱として捨てています。',
          icon: 'mdi:lightbulb-outline',
          points: ['エネルギーの95%が熱として損失', '寿命：約1,000時間', '維持費が非常に高い'],
        },
        {
          title: '最新のLEDテクノロジー',
          description: '家庭に最適な現在の標準。点けた瞬間に最大輝度になり、発熱も最小限です。',
          icon: 'mdi:led-outline',
          points: ['85–90%の直接的な節電', '寿命：25,000〜50,000時間', '低発熱で安全'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '節約の物理学的背景',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '白熱電球は電気のわずか5%しか光に変えられません。対してLEDは半導体を使って電気を直接光に変換するため、劇的に効率が高いのです。<strong>ワット数ではなくルーメン（lm）</strong>に注目しましょう。古い60W電球が放つ約800lmの明るさを、最新のLEDならわずか8〜9Wで実現できます。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '電球の明るさ目安表',
      icon: 'mdi:table',
      badge: 'クイック参照',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W相当</strong> → LED 5–6W (450 lm)</li><li><strong>60W相当</strong> → LED 8–10W (800 lm)</li><li><strong>100W相当</strong> → LED 13–15W (1500 lm)</li><li><strong>50W相当（ハロゲン）</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'お金以外のLED導入メリット',
      items: [
        '長寿命：1日4時間の利用なら15年以上交換不要。',
        '即点灯：点けた瞬間から100%の明るさ。',
        '低発熱：夏場のエアコンの負荷をわずかに軽減。',
        'エコ：水銀などの有害物質を含まず、環境に優しい。',
        '互換性：既存の多くのソケットにそのまま取り付け可能。',
      ],
    },
  ],
  ui: {
    sectionTitle: '家庭の設定',
    labelBulbs: '交換する電球の数',
    unitBulbs: '個',
    labelType: '現在の電球タイプ',
    labelHours: '1日の平均使用時間',
    labelPrice: '電気料金単価',
    unitPrice: '円/kWh',
    resultBadge: '節約シミュレーション',
    labelAnnual: '年間の節約額',
    labelMonthly: '1ヶ月あたり',
    labelEfficiency: '節電率',
    labelCo2: 'CO₂排出削減量',
    unitLess: '% 削減',
    currencySign: '¥',
    btnInc60Title: '白熱電球',
    btnInc60Sub: '一般電球 (60W)',
    btnInc40Title: '白熱電球',
    btnInc40Sub: '小型電球 (40W)',
    btnInc100Title: '白熱電球',
    btnInc100Sub: '大型電球 (100W)',
    btnHalo50Title: 'ハロゲン',
    btnHalo50Sub: 'スポット (50W)',
    usageNever: 'ほぼ使わない',
    usageLow: 'あまり使わない',
    usageNormal: '標準的',
    usageModerate: '多めに使用',
    usageHeavy: '頻繁に使用',
    usagePro: '業務用レベル',
    usageVeryHeavy: '非常に多い',
    usageAlways: '常時稼働',
  },
};
