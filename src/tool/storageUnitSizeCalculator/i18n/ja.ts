import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'ja',
  slug: 'storage-unit-size-calculator',
  title: 'トランクルームサイズ計算機',
  description: '箱、家具、取り出し用の通路をもとに、必要な収納スペースのサイズを見積もります。',
  labels: {
    inventory: '持ち物リスト', boxes: '箱', furniture: '大型家具', smallBoxes: '小さい箱', mediumBoxes: '中くらいの箱', largeBoxes: '大きい箱', sofa: 'ソファ', bed: 'ベッド', wardrobe: 'クローゼット', desk: '机', chair: '椅子', accessLane: '通路スペース', accessHint: '通路を広くすると面積は増えますが、必要な物を取り出しやすくなります。', quickScenarios: '初期リストを読み込む', reset: 'リセット',
  },
  presetLabels: ['ワンルームの引っ越し', '1ベッドルーム', '小規模オフィス'],
  accessLabels: ['最小限', '標準', '頻繁に出し入れ'],
  result: {
    title: '収納プラン', minimum: '最小サイズ', comfortable: 'ゆとりのあるサイズ', emptyStatus: '荷物を追加してください', readyStatus: 'バランスのよいプラン', tightStatus: '最小サイズはぎりぎり', emptyMessage: '荷物を追加すると収納ゾーンが描画されます。', readyMessage: '選択した通路を確保できる最小サイズです。', tightMessage: '最小サイズはほぼ満杯です。ゆとりのあるサイズなら使いやすくなります。', unit: 'm²', access: '通路', boxesZone: '箱', furnitureZone: '大型家具', laneZone: '通路', floorPlanLabel: '箱、大型家具、通路を比例表示した収納スペースの平面図', packedLabel: '収納量', areaLabel: '計画面積', volumeLabel: '体積', emptyPlan: '箱や家具を追加すると平面図が表示されます',
  },
  seo: [
    { type: 'title', level: 2, text: '持ち物から収納スペースのサイズを選ぶ' },
    { type: 'paragraph', html: '収納スペースのサイズ計算は、実際の持ち物から始めると役立ちます。箱や大型家具の数を入力し、荷物を詰め込むのか、奥の物まで取り出せる余白を残すのかを選びましょう。' },
    { type: 'title', level: 2, text: 'この見積もりで分かること' },
    { type: 'list', items: ['箱と家具を収納したときの体積', '箱を種類ごとに積んだあとの床面積', '取り出す頻度に応じた通路スペース', '一般的な面積に丸めた最小サイズと推奨サイズ'] },
    { type: 'title', level: 2, text: '最小サイズとゆとりサイズの読み方' },
    { type: 'paragraph', html: '最小サイズは、計画面積を収められる最初の標準サイズです。これは容量の目安であり、どんな形の家具でも入る保証ではありません。ゆとりサイズは、頻繁に開ける収納が箱の壁にならないよう余白を加えています。' },
    { type: 'title', level: 2, text: '契約前に確認すること' },
    { type: 'paragraph', html: '結果を候補選びに使い、その後で室内寸法、扉の幅、天井高、柱、階段、搬入口を確認してください。立方メートル表示でも、高さを使えなければ実際の収納力は小さくなります。' },
    { type: 'list', items: ['箱は外寸のおおよその大きさで数える。', '分解する予定でもソファやクローゼットを含める。', '季節用品や仕事道具を出し入れするなら「頻繁に出し入れ」を選ぶ。', '有効床面積と扉の寸法を事業者に確認する。'] },
    { type: 'tip', title: '計画上の注意', html: '代表的な寸法と積み重ねの前提に基づく目安です。実際の部屋、耐荷重、料金、特殊な家具が扉を通るかどうかは確認できません。' },
  ],
  faq: [
    { question: '最小サイズとゆとりサイズのどちらを選ぶべきですか？', answer: '荷物を詰め込み、ほとんど取り出さないなら最小サイズを選べます。出し入れがある、荷物が増える、家具を積みにくい場合はゆとりサイズが適しています。' },
    { question: 'なぜ平方メートルを使うのですか？', answer: '収納サービスは床面積で表示されることが多く、荷物を置いて取り出せるかを判断しやすいからです。体積も表示するので、立方メートルの広告とも比較できます。' },
    { question: 'ガレージやコンテナにも使えますか？', answer: '計画の出発点として使えます。ただし、実際の内寸、扉の開口、天井、換気、重量や積載の制限を確認してください。' },
    { question: '家具の本当のサイズまで分かりますか？', answer: '分かりません。代表的な床面積と体積を使っています。特殊な形、壊れやすい物、奥行きの深い家具は実測して余白を取ってください。' },
  ],
  howTo: [
    { name: '初期リストを読み込む', text: '引っ越しや片付けに近いシナリオを選び、個数を編集します。' },
    { name: '箱と大型家具を数える', text: '小・中・大の箱を入力し、ソファ、ベッド、クローゼット、机、椅子を追加します。' },
    { name: '通路を設定する', text: '取り出す頻度に合わせて、最小限、標準、頻繁に出し入れから選びます。' },
    { name: '2つの推奨サイズを比べる', text: '最小サイズを容量の下限、ゆとりサイズを普段使いやすい候補として比較します。' },
  ],
};

export const content = buildLocalizedContent(copy);
