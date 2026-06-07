import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wifi-range-simulator';
const title = 'WiFi範囲障害物シミュレーター';
const description =
  '家の間取りをスケッチし、壁、ドア、家具、家電を配置してからルーターと端末をドラッグし、最適な信号経路を見つけましょう。カバレッジの損失、ストリーミングの判定、設置のヒントをライブで確認。新しいハードウェアを購入せずにデッドゾーンを解消できます。';

const faqData = [
  {
    question: '特定の部屋でWi-Fi信号が弱くなるのはなぜですか？',
    answer:
      'Wi-Fiは電波を使用しており、物理的な素材によって吸収、反射、または遮断されます。レンガ、コンクリート、金属が最も影響が大きく、それぞれ信号強度を大幅に低下させます。水やガラスも信号の一部を反射または吸収する可能性があります。',
  },
  {
    question: 'コンクリートや石の壁はWi-Fiにどの程度影響しますか？',
    answer:
      '標準的なコンクリート壁は2.4GHzの信号を10〜20デシベル減衰させます。70〜80センチの厚い石壁では22デシベル以上に達することもあります。これは厚さと密度に応じて、おおよそ50〜90％の範囲損失に相当します。5GHzではさらに損失が大きく、高周波は密度の高い素材に早く吸収されるためです。',
  },
  {
    question: '最高のカバレッジを得るにはルーターをどこに置くべきですか？',
    answer:
      '中央、高さ、そして開けた場所です。家の中央、厚い壁や金属物から少なくとも1メートル離し、胸の高さに設置して水平方向に広げましょう。隅、クローゼット、家具の後ろの低い位置は避けてください。',
  },
  {
    question: 'ガラスのドアはWi-Fiを遮断できますか？',
    answer:
      '透明なガラスの影響は最小限ですが、金属膜付きのコーティングガラスや複層ガラスは信号を反射する可能性があります。シミュレーターでは標準的なガラスを約2〜3デシベルの損失がある軽い障害物として扱います。',
  },
];

const howToData = [
  {
    name: '信号経路を特定する',
    text: 'ルーターと目的の端末の間に直線を想像してください。この線を横切るすべての物体が重要です。',
  },
  {
    name: '障害物を追加する',
    text: 'シミュレーターの素材ボタンをクリックして、経路を横切る壁、ドア、家電、家具をすべて追加します。',
  },
  {
    name: '判定を読む',
    text: 'オブジェクトを追加または削除すると、信号リング、ウェーブアニメーション、ストリーミングダッシュボードが即座に更新されるのを確認できます。',
  },
  {
    name: '状況に応じたヒントを適用する',
    text: '障害物の組み合わせに応じて表示される配置カードに従い、新しいハードウェアを購入せずにカバレッジを改善しましょう。',
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
      text: '隣の部屋でWi-Fiが使えなくなる理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ルーターは全方向に電波を放射しています。これらの電波は空気中を容易に伝わりますが、物理的な物体にぶつかるたびに影響を受けます。一部の素材は信号のほとんどを通します。他の素材は完全に吸収してしまいます。家の中でどの物体が静かに接続を妨害しているかを理解することが、新しいハードウェアに1円も費やさずにデッドゾーンを修正する第一歩です。',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: '石膏ボード損失', icon: 'mdi:wall' },
        { value: '22 dB', label: '厚い石壁', icon: 'mdi:wall' },
        { value: '18 dB', label: '金属ドア損失', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '家中の物体ごとの本当のコスト',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'すべての障害物が同じというわけではありません。石膏ボード1枚なら信号の数パーセントが削られる程度ですが、コンクリートの柱や金属製のドアは実効範囲を半分に減らす可能性があります。ルーターをテレビの後ろ、冷蔵庫の横、金属製の棚の下の床に置いたときに、実際に何が起こっているのかをご紹介します。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '軽い障害物',
          description: 'これらの物体は信号損失が最小限で、通常は信号経路の近くにあっても安全です。窓1枚やガラスドアを気にする必要はありません。',
          icon: 'mdi:window-open-variant',
          points: [
            'ガラスドア: 2〜3 dBの損失',
            '標準的な窓: 2 dBの損失',
            '石膏ボード仕切り: 3 dBの損失',
            '木製室内ドア: 4 dBの損失',
          ],
        },
        {
          title: '中程度の障害物',
          description: 'これらの物体はカバレッジに顕著な影響を及ぼします。1〜2つなら問題ありませんが、同じ信号経路に3つ以上重なるとバッファリングやラグが発生し始めます。',
          icon: 'mdi:wardrobe',
          points: [
            '木製ワードローブ: 5 dBの損失',
            '大きな鏡: 6 dBの損失',
            '洗濯機: 6 dBの損失',
            '電子レンジ: 5 dBの損失',
          ],
        },
        {
          title: '重い障害物',
          description: 'これらはホームネットワークのサイレントキラーです。コンクリート壁1枚や金属ドア1枚で強い信号が弱くなり、重なると確実にデッドゾーンが発生します。',
          icon: 'mdi:wall',
          points: [
            'レンガの壁: 8 dBの損失',
            '床または天井: 10 dBの損失',
            '冷蔵庫: 10 dBの損失',
            '水槽: 12 dBの損失',
          ],
        },
        {
          title: '極度の障害物',
          description: 'これらの素材はほぼすべての電波エネルギーを吸収または反射します。信号経路がこれらのいずれかを横切る場合、ルーターか端末を移動する必要があります。回避策はありません。',
          icon: 'mdi:shield',
          points: [
            '厚い石壁（70〜80 cm）: 22 dBの損失',
            'コンクリート壁: 15 dBの損失',
            '金属製キャビネット: 12 dBの損失',
            '金属製ドアまたはゲート: 18 dBの損失',
            'エレベーターシャフト: 20+ dBの損失',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '異なる周波数が壁を通り抜ける仕組み',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最近のルーターのほとんどは2.4GHzと5GHzの2つの帯域で送信します。低い周波数はより遠くまで届き、壁を通り抜けやすいですが、速度が遅く混雑しています。高い周波数は非常に高速ですが、経路上のあらゆる障害物に吸収されます。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2.4GHzの透過性',
          description: '低い周波数はより遠くまで届き、壁の透過性に優れます。長距離には理想的ですが、近隣のネットワークで混雑しています。',
          icon: 'mdi:signal',
          points: [
            'レンガやコンクリートをより良く透過',
            '隣のルーターからの干渉が多い',
            '最高速度は遅く、実質約150Mbps',
            'スマートホーム機器やIoTに最適',
          ],
        },
        {
          title: '5GHzの透過性',
          description: '高い周波数はより高速ですが、建築材料に吸収されやすくなります。開放的な空間や近くの端末に最適です。',
          icon: 'mdi:signal-5g',
          points: [
            'コンクリートや金属の透過性が低い',
            '干渉が少なく、チャンネルがクリーン',
            '同じ部屋内ではギガビット対応の速度',
            'カバレッジは劣るが、届く場所では高品質',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: '隠れたキラー：あなたが疑ったことのない物体',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '多くの人は壁を責めますが、最悪のWi-Fiキラーのいくつかは日常的な物体です。水槽はほとんどが水で構成されており、水は2.4GHzの電波をほぼ完全に吸収します。大きな鏡には信号を端末から遠ざける薄い金属の裏地があります。電子レンジは2.4GHzで放射を発しており、ルーターとまったく同じ周波数のため、スープを温めるたびに干渉を引き起こします。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '水槽の落とし穴',
      icon: 'mdi:fish',
      badge: '意外なブロッカー',
      html: '<p>大きな水槽はWi-Fi信号を最大12デシベル減衰させます。これは厚いコンクリート壁と同じです。ルーターが水槽の一方の側にあり、デスクが反対側にある場合、水は後ろの壁よりも大きなダメージを与えています。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '鏡の効果',
      icon: 'mdi:mirror',
      badge: '反射の危険',
      html: '<p>大きな鏡には光を反射するように設計された薄い金属層が裏側にあります。この同じ金属層が電波も反射します。ルーターに向いた鏡は、必要な場所から信号を遠ざけたり、データパケットを混乱させるマルチパス干渉を引き起こす可能性があります。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '電子レンジの干渉',
      icon: 'mdi:microwave',
      badge: 'アクティブジャマー',
      html: '<p>電子レンジは2.45GHzで動作し、2.4GHzのWi-Fi帯域と直接重なります。動作中、電子レンジは半径3〜5メートル以内の2.4GHz信号を消失させる可能性があります。ルーターが2.4GHzのみ対応でキッチンが近くにある場合は、デュアルバンドルーターに切り替え、重要なタスクには5GHzを使用してください。</p>',
    },
    {
      type: 'title',
      text: '部屋ごとのルーター設置場所',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '理想的なルーターの場所は最も便利な場所ではありません。実際にインターネットを使用する部屋に最もクリアな見通し線を提供する場所です。各部屋についての考え方をご紹介します。',
    },
    {
      type: 'table',
      headers: ['部屋', 'リスクレベル', '難しい理由', '解決策'],
      rows: [
        ['キッチン', '高', '冷蔵庫、電子レンジ、金属キャビネット、水道管', 'ルーターはキッチンの外に置き、中には決して置かない。'],
        ['浴室', '高', '鏡、水道管、金属メッシュ入りタイル', '浴室の壁の反対側にルーターを置かない。'],
        ['寝室', '中', 'ワードローブ、厚い壁、金属製ベッドフレーム', 'ルーターを高くし、家具の上の経路を確保する。'],
        ['リビングルーム', '低', '通常は開放的だが、テレビやゲーム機に注意', 'ルーターをテレビの後ろに隠さず、見える場所に置く。'],
        ['ガレージ', '極度', '金属ドア、コンクリート、車', '屋内ルーターがガレージまで届くことは期待しない。'],
        ['庭／テラス', '高', '外壁、ガラス、距離', '屋外用アクセスポイントまたはメッシュノードを使用する。'],
      ],
    },
    {
      type: 'title',
      text: '1メートルルールとその他の設置のコツ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '小さな移動が大きな違いを生みます。家の配線をやり直す必要はありません。電波の動きを理解し、クリアな経路を与えるだけで十分です。',
    },
    {
      type: 'tip',
      title: '1メートルルール',
      html: '<p>ルーターをコンクリートや金属のバリアからたった1メートル離すだけで、失われた信号強度の最大40％を回復できます。</p>',
    },
    {
      type: 'tip',
      title: '高さでカバレッジ向上',
      html: '<p>ルーターを棚の上など胸の高さに設置しましょう。信号はアンテナから水平方向に放射されます。床に置くとカバレッジの半分を地面に無駄にします。</p>',
    },
    {
      type: 'tip',
      title: '見える場所に置く',
      html: '<p>ルーターをキャビネットやクローゼットの中、テレビの後ろに隠さないでください。密閉空間はファラデーケージのように機能し、信号が部屋に届く前に閉じ込めてしまいます。</p>',
    },
    {
      type: 'tip',
      title: 'アンテナの向き',
      html: '<p>ルーターに外部アンテナがある場合は、1本を垂直に、もう1本を水平に配置します。これにより、異なる高さの端末に対するカバレッジが向上します。</p>',
    },
    {
      type: 'tip',
      title: '干渉を避ける',
      html: '<p>ルーターを電子レンジ、コードレス電話、ベビーモニターから少なくとも1.5メートル離してください。これらの機器は2.4GHz帯を共有しており、アクティブな干渉を引き起こします。</p>',
    },
    {
      type: 'tip',
      title: '中間階の利点',
      html: '<p>複数階建ての家にお住まいの場合は、ルーターを中間階に設置してください。信号はコンクリート床を通って上下にうまく伝わりません。</p>',
    },
    {
      type: 'title',
      text: 'ストリーミング判定：信号の本当の意味',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'パーセンテージは抽象的です。本当に知りたいのは、Netflixを見たり、試合に勝ったり、ビデオ通話をフリーズせずに終えられるかどうかです。各信号レベルが実際の世界で何を意味するかをご紹介します。',
    },
    {
      type: 'table',
      headers: ['信号', '4Kストリーミング', 'オンラインゲーム', 'ビデオ通話', 'ブラウジング'],
      rows: [
        ['80%〜100%', '完璧、即時読み込み', '低遅延、競技プレイ可能', '鮮明、途切れなし', '即時、遅延なし'],
        ['60%〜79%', '良好、たまにバッファリング', 'プレイ可能、軽度のラグ', '安定、まれに画質低下', '高速、問題なし'],
        ['40%〜59%', '数分ごとにバッファリング', 'ラグ警告、ラバーバンディング', '画質低下、一部途切れ', '使用可能、読み込みが遅い'],
        ['20%〜39%', '不可能、常にフリーズ', '切断、プレイ不可能', '頻繁な切断、使用不能', '非常に遅い、タイムアウト'],
        ['0%〜19%', '起動しない', '接続できない', '接続なし', '使用不能'],
      ],
    },
    {
      type: 'title',
      text: '何かを買う前の簡単な修正',
      level: 3,
    },
    {
      type: 'summary',
      title: '無料最適化チェックリスト',
      items: [
        'ルーターを家の隅ではなく中央に移動する。',
        '棚や背の高い家具の上など、胸の高さに上げる。',
        'キャビネットやクローゼットの中、テレビの後ろから出す。',
        '可能であれば、アンテナ1本を垂直に、1本を水平に向ける。',
        '近くの端末には5GHz、遠くの端末には2.4GHzを使用する。',
        'スキャナーアプリで混雑していないWi-Fiチャンネルに変更する。',
        'ルーターのファームウェアを更新して既知の信号バグを修正する。',
        '月に1度ルーターを再起動してメモリリークを解消する。',
      ],
    },
    {
      type: 'title',
      text: 'ハードウェアをアップグレードすべきタイミング',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '時には環境が勝ります。設置のコツをすべて試してもデッドゾーンに悩まされているなら、物理法則と戦うのではなく、ネットワークを拡張する時です。',
    },
    {
      type: 'proscons',
      title: 'WiFi中継器 vs メッシュシステム',
      items: [
        { pro: '中継器は安価で簡単に設置できます。', con: '中継器は2つ目のネットワーク名を作成し、速度が半分になります。' },
        { pro: '中継器は1つのデッドゾーンに効果的です。', con: '中継器は増幅するために強い既存信号が必要です。' },
        { pro: 'メッシュシステムは1つのシームレスなネットワークを構築します。', con: 'メッシュシステムは初期費用が高くなります。' },
        { pro: 'メッシュは複数階や広い家に対応します。', con: 'メッシュはモデムの近くにメインノードが必要です。' },
      ],
    },
    {
      type: 'tip',
      title: 'メッシュを使うべき時',
      html: '<p>120平方メートル以上の家や厚いコンクリート壁がある場合、少なくとも2つのノードを持つメッシュシステムは、どんなに高価な単一ルーターよりも優れたパフォーマンスを発揮します。</p>',
    },
    {
      type: 'title',
      text: 'デシベルをわかりやすく理解する',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'デシベルは対数であり、通常の数値とは異なる動作をします。3dBの損失ごとに信号電力が半分になります。6dBの損失では元の電力の4分の1しか残りません。10dBの損失では10分の1だけが生き残ります。だからこそ15dBのコンクリート壁は壊滅的なのです。信号を弱めるだけでなく、完全に消滅させるのです。',
    },
    {
      type: 'glossary',
      items: [
        { term: '減衰', definition: '信号が素材を通過する際に強度が徐々に失われること。数値が高いほど、より多くの信号が失われます。' },
        { term: 'dBm', definition: 'Wi-Fi信号強度の測定に使用される電力単位。0dBmは1ミリワットです。マイナスの値が通常で、-30が優秀、-80がかろうじて使用可能です。' },
        { term: 'デッドゾーン', definition: 'Wi-Fi信号が弱すぎて信頼性のある接続を確立または維持できないエリア。' },
        { term: 'メッシュネットワーク', definition: '複数のルーターノードが連携して広いエリアを1つのシームレスなWi-Fiネットワークでカバーするシステム。' },
        { term: 'マルチパス干渉', definition: '電波が壁や物体に反射し、同じ信号の遅延した複数のコピーが生成されて受信機を混乱させる現象。' },
        { term: 'SSID', definition: 'Wi-Fiネットワークの名前。中継器はしばしば2つ目のSSIDを作成し、メッシュシステムは全ノードで1つの名前を維持します。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'ルーター設置の黄金律',
      icon: 'mdi:map-marker-radius',
      badge: '重要ポイント',
      html: '<p>ルーターが現在隅、キャビネット内、または床にある場合、信号が部屋を出る前に潜在的な範囲の50〜70％を無駄にしています。できる最速のアップグレードは、開放的で中央の高い位置に移動することです。この変更だけでも、新しい機器を購入するよりも多くの問題を解決することがよくあります。</p>',
    },
    {
      type: 'summary',
      title: 'WiFiデッドゾーンを防ぐ方法',
      items: [
        'ルーターを中央、高さ、開放的な場所に設置する。',
        'ルーターと端末の間の壁の数を最小限にする。',
        'ルーターの設置場所としてキッチン、浴室、ガレージを避ける。',
        '同じ部屋での速度には5GHz、距離には2.4GHzを使用する。',
        '広い家や厚い外壁にはメッシュを検討する。',
        '月1回の再起動とファームウェアの更新でピークパフォーマンスを維持する。',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Wi-Fiを遮断する家の中の物体',
    labelAddObstacle: 'クリックして信号経路に追加',
    labelRemove: '削除',
    labelSignalStrength: '信号',
    labelEffectiveRange: '実効範囲',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'ストリーミング判定',
    verdictPerfect: '完璧',
    verdictGood: '良好',
    verdictFair: '普通',
    verdictPoor: '不良',
    verdictDead: 'デッドゾーン',
    tipTitle: '設置のヒント',
    label4kStreaming: '4Kストリーミング',
    labelOnlineGaming: 'オンラインゲーム',
    labelVideoCalls: 'ビデオ通話',
    labelBasicBrowsing: '通常ブラウジング',
    statusPerfect: '完璧',
    statusGood: '良好',
    statusFair: '普通',
    statusPoor: '不良',
    statusImpossible: '不可能',
    statusLowLatency: '低遅延',
    statusLagWarning: 'ラグ警告',
    statusDisconnect: '切断',
    statusStable: '安定',
    statusPixelated: '画質低下',
    statusDropped: '切断',
    statusPass: '合格',
    statusUnusable: '使用不能',
    tipMoveRouter: 'ルーターをその固いバリアからわずか1メートル離すだけで、信号が最大40%向上する可能性があります。',
    tipElevateRouter: 'ルーターを胸の高さに上げましょう。信号は水平方向に広がり、床は思った以上に吸収します。',
    tipReduceObstacles: '壁が増えるごとに信号が半分になります。ルーターと端末の間の障害物の数を減らすようにしましょう。',

    tipFishTank: '水槽はコンクリートの壁のようにWi-Fiを遮断します。ルーターまたは端末をそこから離してください。',
    tipMicrowave: '電子レンジは動作中に2.4GHz帯を妨害します。5GHzを使用するか、ルーターをキッチンから遠ざけてください。',
    labelMove: '移動',
    labelWalls: '壁',
    labelDrywall: '石膏ボード',
    labelBrick: 'レンガ',
    labelConcrete: 'コンクリート',
    labelStone: '石',
    labelObjects: '物体',
    labelWood: '木材',
    labelMetal: '金属',
    labelWindow: '窓',
    labelFridge: '冷蔵庫',
    labelFish: '魚',
    labelMicro: '電子レンジ',
    labelMirror: '鏡',
    labelFurn: '家具',
    labelActions: '操作',
    labelUndo: '元に戻す',
    labelAddDevice: '+ 端末',
    labelClearWalls: '壁をクリア',
    labelClearObjects: '物体をクリア',
    labelClearAll: 'すべてクリア',
    labelZoomIn: '拡大',
    labelZoomOut: '縮小',
    labelRouter: 'ルーター',
    labelAverageSignal: '平均信号',
    labelScaleMeters: '5m',
    hintText: 'ルーターや端末をドラッグして移動します。壁や物体をダブルクリックして削除します。Ctrl+Zで元に戻します。',
    labelMaxDevices: '最大4台の端末',
    labelDevicePrefix: '端末',
    labelPerDevice: '端末あたり',
    labelDb: 'dB',
  },
};
