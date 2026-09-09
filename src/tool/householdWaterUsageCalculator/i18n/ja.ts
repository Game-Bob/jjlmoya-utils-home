import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "household-water-usage-calculator",
  title: "家庭の水使用量計算機",
  description:
    "毎日の習慣から家庭の水使用量を見積もり、どの活動が多くの水を使うかを確認し、現在の生活と現実的な節水シナリオを比較します。",
  language: "ja",
  ui: {
    presetLabel: "パターンから始める",
    presetEveryday: "日常的",
    presetWaterAware: "節水重視",
    presetLowFlow: "低流量",
    controlsLabel: "家庭の水使用量入力",
    optionalInputsTitle: "家電と漏水",
    peopleLabel: "住居を使う人数",
    peopleUnit: "人",
    showerTitle: "シャワー",
    showersPerWeekLabel: "1人あたりのシャワー回数",
    showerMinutesLabel: "1回の時間",
    showerFlowLabel: "流量",
    toiletTitle: "トイレ",
    flushesPerDayLabel: "1人あたりの洗浄回数",
    flushVolumeLabel: "1回の洗浄量",
    tapTitle: "蛇口",
    tapMinutesLabel: "1人あたりの使用時間",
    tapFlowLabel: "流量",
    washingLoadsLabel: "洗濯の回数",
    washingVolumeLabel: "1回の洗濯量",
    dishwasherLoadsLabel: "食洗機の回数",
    dishwasherVolumeLabel: "1回の使用量",
    leakLabel: "防げる漏水の推定",
    litresPerDay: "1日の推定リットル",
    litresPerMonth: "1か月のリットル",
    litresPerYear: "1年のリットル",
    perPerson: "1人1日あたりのリットル",
    reference: "参考値",
    aboveReference: "参考値より多い",
    belowReference: "参考値より少ない",
    nearReference: "参考値に近い",
    referenceDescription:
      "INEの最新公表系列では、スペインの家庭の平均は1人1日128リットルです。合否の基準ではなく、状況を理解するための参考値として使ってください。",
    savingTitle: "減らせる余地",
    savingDescription:
      "現在の習慣と節水シナリオの仮定との差です。実際に変える前に、一度に1つの変更を試してください。",
    currentScenario: "現在のパターン",
    efficientScenario: "節水シナリオ",
    monthlySaving: "1か月に節約できる可能性のあるリットル",
    categoryShowers: "シャワー",
    categoryToilets: "トイレ",
    categoryTaps: "蛇口",
    categoryWashing: "洗濯",
    categoryDishwasher: "食洗機",
    categoryLeaks: "漏水",
    breakdownTitle: "1か月の内訳",
    usageShare: "全体の割合",
  },
  faq: [
    {
      question: "この家庭用水計算機は何を見積もりますか？",
      answer:
        "シャワー、トイレ、蛇口、洗濯、食洗機、漏水の入力から、1日、1か月、1年の使用量を見積もります。無理のない習慣や設備の変更を想定した節水シナリオも表示します。",
    },
    {
      question: "計算結果は水道料金と同じですか？",
      answer:
        "いいえ。入力した習慣から作る計画用の推定値です。実際の料金には屋外使用、共有設備、検針時期、家の外の漏水、設備の実流量なども含まれます。",
    },
    {
      question: "結果を最も変えやすい入力は何ですか？",
      answer:
        "長くて流量の多いシャワーが大きくなることが多いですが、人数、トイレの水量、蛇口の使用時間、洗濯や食洗機の回数にも左右されます。内訳は入力値に合わせて並びます。",
    },
    {
      question: "節水シナリオとは何ですか？",
      answer:
        "5分のシャワー、低い流量、効率的な洗浄、短い蛇口使用、満載運転、不要な漏水ゼロなど、内容が分かる目標を使います。特定の機器の節約を保証するものではありません。",
    },
    {
      question: "なぜ参考値が表示されるのですか？",
      answer:
        "INEの水供給・衛生系列にあるスペインの最新の家庭平均を、1人1日あたりで示しています。地域条件や測っていない使用量が違うため、目標や診断ではありません。",
    },
  ],
  howTo: [
    {
      name: "人数を入力する",
      text: "普段その家を使う人数を入力します。人数あたりの値も表示されるので、規模の違う家庭を比べられます。",
    },
    {
      name: "主な習慣を入力する",
      text: "シャワーの回数、時間、流量を入力し、トイレ、蛇口、洗濯、食洗機を追加します。測定値や機器の表示があれば使ってください。",
    },
    {
      name: "1日の推定値を見る",
      text: "大きな数字は家庭の1日推定量です。月と年の値も同じ習慣から計算され、入力中に更新されます。",
    },
    {
      name: "大きな項目を探す",
      text: "月のリットルと割合の内訳を見ます。各活動の節約量は、節水シナリオに近づけた場合の差の目安です。",
    },
    {
      name: "現実的なパターンを試す",
      text: "節水重視または低流量を試し、自分の値に戻って1つだけ変更します。最初に調べるべき項目が分かります。",
    },
  ],
  seo: {
    introTitle: "水道料金から、その背後の習慣へ",
    introOne:
      "水道料金はメーターを通った量を示しますが、何が変化の原因だったかまでは分かりません。この計算機は、人数、シャワー、洗浄、蛇口、洗濯、食洗機、防げる漏水という繰り返しの行動を、確認しやすい推定値にします。入力を見ながら仮定を調整できます。",
    introTwo:
      "INEの最新系列では、2024年のスペインの家庭は1人1日平均128リットルです。これは普遍的な目標ではありません。屋外使用、気候、共有メーター、隠れた漏水によって差が生じます。",
    averageLabel: "スペイン家庭の1人1日平均",
    groupsLabel: "内訳に表示する習慣グループ",
    daysLabel: "月の推定に使う日数",
    readTitle: "推定値の読み方",
    readText:
      "最も目立つ数字ではなく、月の棒が長い項目から見ます。長いシャワーは、少量でも頻度の低い活動より大きな変更点になることがあります。小さな漏水も毎日続けば増えます。",
    currentTitle: "現在のパターン",
    currentText:
      "頻度、時間、流量、1回あたりの量を、1日と1か月のリットルに変換します。",
    currentPoints: [
      "家庭の人数を表示する",
      "活動ごとの寄与を示す",
      "入力中に更新する",
    ],
    lowerTitle: "節水シナリオ",
    lowerText:
      "短いシャワー、低い流量、満載運転など、控えめで分かりやすい目標と比較します。",
    lowerPoints: [
      "節約を保証しない",
      "料金額を推定しない",
      "行動前に変更を試せる",
    ],
    chooseTitle: "1つの変更を選ぶ",
    chooseText:
      "試せるほど具体的なシナリオにします。シャワーを1分短くする、流量を測る、修理後に漏水の入力を消すなどを試してください。変化が小さければ次の項目を見ます。",
    actions: [
      "容器とタイマーで蛇口やシャワーの流量を測る。",
      "機器の表示と入力した1回あたりのリットルを比べる。",
      "プリセットを実行して変化の方向を確認する。",
      "習慣を1つ変え、続けられる家庭の目標を決める。",
    ],
    limitsTitle: "この推定で分からないこと",
    limitsText:
      "メーターを再現したり、配管故障を特定したり、すべての屋外使用を含めたりはできません。設備の表示値も保証しません。メーターと合わない場合は、習慣の数値をむやみに増やす前に、未入力の使用や漏水を調べてください。",
    flowTitle: "流量と頻度を一緒に見る理由",
    flowText:
      "同じ設備でも、動作時間と回数によって合計は変わります。シャワーは人数、週の回数、分数、1分あたりのリットルを掛けます。洗濯と食洗機は週の回数と1回の量を使います。習慣、設備、測定のどこを変えるか判断しやすくなります。",
  },
});

export { content };
