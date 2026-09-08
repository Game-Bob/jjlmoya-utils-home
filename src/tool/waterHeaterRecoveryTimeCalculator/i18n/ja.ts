import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-heater-recovery-time-calculator';
const title = '給湯器の回復時間計算機';
const description = '容量・有効出力・効率から、給湯器が現在の水温から目標温度まで戻る時間を見積もります。';
const faq = [
  { question: 'ここでいう回復時間とは何ですか？', answer: '入力した水量が現在の温度から目標温度まで上がるための推定時間です。水の熱容量、有効な加熱出力、推定効率を使って計算します。' },
  { question: 'どのような式を使っていますか？', answer: '必要な熱量を、リットル数・温度上昇・1リットル1℃あたり1.16ワット時の積として見積もります。そのエネルギーを、加熱出力と効率の積で割ります。' },
  { question: '実際の給湯器の時間を正確に予測できますか？', answer: 'いいえ。これは計画用の透明な目安です。待機損失、サーモスタットの動作、成層、混合、配管損失、出力制限によって実際の時間は長くなる場合があります。' },
  { question: '効率には何を入力すればよいですか？', answer: '資料に有効効率や回復効率が記載されていれば、その値を使ってください。分からない場合は控えめな値を入力し、説明書や実測した回復時間と比較してください。' },
];
const howTo = [
  { name: '貯湯量を入力する', text: '温める水量を見積もるため、タンク容量をリットルで入力します。' },
  { name: '現在温度と目標温度を設定する', text: '回復開始時の温度と、タンクが到達する温度を入力します。' },
  { name: '有効出力と効率を入力する', text: 'ヒーターの出力をキロワットで、実際に水へ届くエネルギーの割合をパーセントで入力します。' },
  { name: '回復時間を確認する', text: '推定時間と完了時刻を計画に使い、給湯器の資料とも比較してください。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: '貯湯量', volumeHint: 'タンク容量', temperatureUnitLabel: '温度単位', celsiusOption: '摂氏 (°C)', fahrenheitOption: '華氏 (°F)', currentTempLabel: '現在の水温', targetTempLabel: '目標温度', powerLabel: '給湯器の有効出力', efficiencyLabel: '推定効率', startTimeLabel: '回復開始時刻', compareTitle: '別の設定と比較', comparePowerLabel: '別の有効出力', compareEfficiencyLabel: '別の効率', compareOptional: '任意：比較する場合は両方の項目を入力', calculateNote: 'これは計画用の目安です。時間を頼りにする前に、給湯器の説明書を確認してください。', tankCurrent: '現在', tankTarget: '目標', resultTitle: '回復時間', recoveryTimeLabel: '推定回復時間', energyLabel: '必要な熱量', effectivePowerLabel: '有効出力', readyAtLabel: '使用可能予定時刻', temperatureRiseLabel: '温度上昇', comparisonTitle: '別の設定', comparisonFaster: '速い', comparisonSlower: '遅い', noHeatingNeeded: 'すでに目標温度です', invalidInputs: '見積もりを見るには、容量・出力・効率に正の値を入力してください。', insufficientPower: '正の有効出力が必要です。', limitsTitle: 'この見積もりに含まれないもの', limitsText: 'タンクの断熱、待機損失、サーモスタットの周期、成層、混合、配管損失、実際の出力曲線はモデルに含まれません。', hoursUnit: '時間', minutesUnit: '分', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'お湯が再び使える時刻を見積もる', level: 2 },
    { type: 'paragraph', html: 'シャワーや入浴、大量の給湯の後は、タンクの大きさだけでは足りません。水に戻す必要があるエネルギーと、給湯器がそれを届ける速度を知る必要があります。この計算機は、次の使用を計画できる回復時間に変換します。' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1.16', label: '必要な熱量（Wh）', icon: 'mdi:water-boiler' }, { value: 'kW × 効率', label: '有効な加熱出力', icon: 'mdi:flash-outline' }, { value: '熱量 ÷ 出力', label: '回復時間', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: '回復時間の見積もり方法', level: 2 },
    { type: 'paragraph', html: '水の熱容量を使って計算します。1リットルの水を1℃上げるには約1.16ワット時が必要です。容量と温度上昇をこの係数に掛け、効率を反映した有効出力で割ります。' },
    { type: 'comparative', items: [{ title: '計画に役立つ', description: '開始時刻とタンクの状態を入力して、完了予定時刻を確認できます。別の出力と効率を追加すれば、設定を比較できます。', icon: 'mdi:calendar-clock', points: ['次の回復サイクルを試す', '定格出力だけでなく有効出力を比較する', '温度上昇を見える状態にする'] }, { title: 'サービス保証ではない', description: '熱損失、サーモスタットの周期、タンク内の混合、出力を維持できないことにより、実際の機器は遅くなる場合があります。説明書や実測値と比較してください。', icon: 'mdi:thermometer-alert', points: ['待機損失はモデル化されません', 'メーカーのデータは取得しません', '安全や設置に関する助言ではありません'] }], columns: 2 },
    { type: 'title', text: '回復時間を大きく変える入力', level: 2 },
    { type: 'paragraph', html: '温度上昇が大きいほど必要なエネルギーは直接増えます。同じ上昇幅なら、タンクが大きいほど必要なエネルギーも比例して増えます。有効出力と効率は逆に働き、その積が2倍になると理想的な回復時間はおよそ半分になります。' },
    { type: 'title', text: '過度な精度を約束せずに結果を使う', level: 2 },
    { type: 'paragraph', html: 'このツールは条件の計画や比較向けであり、給湯器の認証や設備設計を行うものではありません。技術資料や実際の試験には追加の損失や測定条件があるため、実測したサイクルは理想的な見積もりと異なる場合があります。' },
  ],
};
