import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "household-water-usage-calculator",
  title: "家庭用水量计算器",
  description:
    "根据日常习惯估算家庭用水量，找出耗水最多的活动，并将当前习惯与现实可行的低用水情景进行比较。",
  language: "zh",
  ui: {
    presetLabel: "从一种模式开始",
    presetEveryday: "日常",
    presetWaterAware: "节水意识",
    presetLowFlow: "低流量",
    controlsLabel: "家庭用水输入",
    optionalInputsTitle: "电器与漏水",
    peopleLabel: "使用住宅的人数",
    peopleUnit: "人",
    showerTitle: "淋浴",
    showersPerWeekLabel: "每人淋浴次数",
    showerMinutesLabel: "每次分钟数",
    showerFlowLabel: "流量",
    toiletTitle: "马桶",
    flushesPerDayLabel: "每人冲水次数",
    flushVolumeLabel: "每次冲水量",
    tapTitle: "水龙头",
    tapMinutesLabel: "每人开启时间",
    tapFlowLabel: "流量",
    washingLoadsLabel: "洗衣机次数",
    washingVolumeLabel: "每次洗衣用水量",
    dishwasherLoadsLabel: "洗碗机次数",
    dishwasherVolumeLabel: "每次用水量",
    leakLabel: "可避免漏水估算",
    litresPerDay: "每日估算升数",
    litresPerMonth: "每月升数",
    litresPerYear: "每年升数",
    perPerson: "每人每日升数",
    reference: "参考值",
    aboveReference: "高于参考值",
    belowReference: "低于参考值",
    nearReference: "接近参考值",
    referenceDescription:
      "INE最新发布的系列显示，西班牙家庭平均每人每天使用128升水。请将它作为背景信息，而不是达标线。",
    savingTitle: "可减少的空间",
    savingDescription:
      "这是当前习惯与低用水假设之间的总差额。确定长期改变之前，请一次测试一个变化。",
    currentScenario: "当前模式",
    efficientScenario: "低用水情景",
    monthlySaving: "每月可能节省的升数",
    categoryShowers: "淋浴",
    categoryToilets: "马桶",
    categoryTaps: "水龙头",
    categoryWashing: "洗衣",
    categoryDishwasher: "洗碗机",
    categoryLeaks: "漏水",
    breakdownTitle: "每月用水分布",
    usageShare: "占总量",
  },
  faq: [
    {
      question: "这款家庭用水计算器估算什么？",
      answer:
        "它根据淋浴、冲水、水龙头、洗衣、洗碗机和漏水输入，估算每日、每月和每年的用水量。它还会根据适度的习惯和设备变化显示低用水情景。",
    },
    {
      question: "结果和我的水费账单一样吗？",
      answer:
        "不一样。这是根据习惯生成的规划估算。账单还可能包括户外用水、共用设施、抄表时间、住宅外漏水以及设备的实际流量。",
    },
    {
      question: "哪个输入通常最影响结果？",
      answer:
        "长时间且高流量的淋浴通常影响很大，但人数、马桶冲水量、水龙头开启时间以及洗衣和洗碗频率也很重要。分布会按你的输入排序。",
    },
    {
      question: "什么是低用水情景？",
      answer:
        "它采用透明的目标，例如五分钟淋浴、较低流量、高效冲水、缩短水龙头使用、满载运行以及没有可避免的漏水。这是比较工具，不保证特定设备的节水效果。",
    },
    {
      question: "为什么显示参考值？",
      answer:
        "这是INE供水和卫生系列中最新的西班牙家庭平均值，按每人每天表示。它不是目标或诊断，因为当地条件和未测量的用水量会不同。",
    },
  ],
  howTo: [
    {
      name: "输入人数",
      text: "先输入经常使用住宅的人数。计算器也会显示每人用量，方便比较不同规模的家庭。",
    },
    {
      name: "描述主要习惯",
      text: "输入淋浴频率、时长和流量，然后添加冲水、水龙头、洗衣和洗碗机数据。有测量值或设备标签时请优先使用。",
    },
    {
      name: "查看每日估算",
      text: "大数字是家庭每日估算用水量。月度和年度数值使用相同习惯，修改输入时会立即更新。",
    },
    {
      name: "找到最大影响项",
      text: "查看每月升数和占比。每项活动旁边的节省量表示接近低用水假设后可能减少的用水。",
    },
    {
      name: "测试现实模式",
      text: "尝试节水意识或低流量，然后回到自己的数值，只改变一个习惯。这样可以判断先检查什么。",
    },
  ],
  seo: {
    introTitle: "从水费账单看到背后的习惯",
    introOne:
      "水费账单告诉你有多少水经过水表，却很少说明变化由哪个习惯造成。这款计算器把人数、淋浴、冲水、水龙头、洗衣、洗碗机和可避免漏水等重复行为转成透明估算，让你能检查每个假设。",
    introTwo:
      "INE最新系列显示，2024年西班牙家庭平均每人每天用水128升。这是有用的背景，而不是普遍目标。户外用水、气候、共用水表或隐藏漏水都可能造成合理差异。",
    averageLabel: "西班牙家庭每人每日平均用水",
    groupsLabel: "分布中的习惯组",
    daysLabel: "月度估算使用的天数",
    readTitle: "如何阅读估算",
    readText:
      "先看每月最长的柱状条，而不是最醒目的数字。长时间淋浴可能比低频小活动更值得改变，小漏水则可能每天持续。计算器会根据你的输入排列类别。",
    currentTitle: "当前模式",
    currentText: "将频率、时长、流量和每次用水量换算为每日和每月升数。",
    currentPoints: ["显示家庭人数", "展示每项活动的贡献", "编辑输入时即时更新"],
    lowerTitle: "低用水情景",
    lowerText: "用较短淋浴、较低流量和满载运行等适度、透明的目标进行比较。",
    lowerPoints: ["不保证确定节省", "不估算账单金额", "行动前可以先测试变化"],
    chooseTitle: "选择一个变化",
    chooseText:
      "有用的情景应该具体到可以尝试。把淋浴缩短一分钟，测量估算的流量，或修理并检查后移除漏水数值。如果变化很小，再看下一个类别。",
    actions: [
      "用容器和计时器测量水龙头或淋浴流量。",
      "将设备标签与输入的每次用水量比较。",
      "运行一个预设，了解变化方向。",
      "改变一个习惯，并设定可持续的家庭目标。",
    ],
    limitsTitle: "这项估算无法告诉你的事",
    limitsText:
      "它不能复现水表、识别管道故障、包含所有户外用水，也不能保证设备达到标签流量。请将结果作为决策辅助。如果与水表不一致，先调查遗漏的用水或漏水，不要盲目提高习惯数值。",
    flowTitle: "为什么流量和频率要一起看",
    flowText:
      "同一设备的总用水量会随运行时间和频率变化。淋浴估算会相乘人数、每周次数、分钟数和每分钟升数。洗衣和洗碗机则使用每周次数和每次用水量。这有助于判断应改变习惯、维护设备还是重新测量。",
  },
});

export { content };
