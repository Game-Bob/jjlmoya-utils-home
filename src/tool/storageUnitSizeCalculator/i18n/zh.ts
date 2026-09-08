import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'zh',
  slug: 'storage-unit-size-calculator',
  title: '储物空间大小计算器',
  description: '根据箱子、家具和取物通道，估算你需要的储物空间大小。',
  labels: {
    inventory: '你的物品清单', boxes: '箱子', furniture: '大件物品', smallBoxes: '小箱子', mediumBoxes: '中箱子', largeBoxes: '大箱子', sofa: '沙发', bed: '床', wardrobe: '衣柜', desk: '书桌', chair: '椅子', accessLane: '取物通道', accessHint: '更宽的通道会占用面积，但能让需要的物品更容易拿到。', quickScenarios: '载入起始清单', reset: '重置',
  },
  presetLabels: ['单间搬家', '一居室', '小型办公室'],
  accessLabels: ['紧凑', '平衡', '经常取物'],
  result: {
    title: '装载平面', minimum: '最小空间', comfortable: '舒适空间', emptyStatus: '添加物品', readyStatus: '平衡方案', tightStatus: '最小空间较紧', emptyMessage: '添加物品后，平面会绘制储物区域。', readyMessage: '最小空间仍能容纳所选的取物通道。', tightMessage: '最小空间几乎已满，舒适空间会更方便使用。', unit: 'm²', access: '通道', boxesZone: '箱子', furnitureZone: '大件物品', laneZone: '通道', floorPlanLabel: '按比例显示箱子、大件物品和取物通道的储物空间平面图', packedLabel: '装载', areaLabel: '规划面积', volumeLabel: '体积', emptyPlan: '添加箱子或家具后绘制平面图',
  },
  seo: [
    { type: 'title', level: 2, text: '根据已有物品选择储物空间' },
    { type: 'paragraph', html: '储物空间大小计算器应从真实的物品清单开始。输入箱子和大件家具的数量，然后决定是紧密堆放，还是保留能够拿到后排物品的空间。' },
    { type: 'title', level: 2, text: '这项估算测量什么' },
    { type: 'list', items: ['箱子和家具装载后的体积', '按类型堆叠箱子后占用的地面面积', '根据取物频率计算的通道空间', '四舍五入到常见面积的最小和舒适尺寸'] },
    { type: 'title', level: 2, text: '如何理解最小和舒适尺寸' },
    { type: 'paragraph', html: '最小空间是能够容纳规划面积的第一个标准尺寸，它只检查容量，并不保证任何形状的家具都能放入。舒适空间增加了缓冲区，避免经常打开的储物空间变成一堵箱子墙。' },
    { type: 'title', level: 2, text: '预订前要检查什么' },
    { type: 'paragraph', html: '把结果当作筛选条件，然后比较供应商的内部尺寸、门宽、层高、柱子、楼梯和装卸通道。按立方米宣传的空间如果高度无法利用，实际容量可能并不大。' },
    { type: 'list', items: ['按箱子的近似外部尺寸计数。', '即使计划拆卸，也要加入沙发和衣柜。', '季节用品、库存或工作设备需要经常取用时，选择经常取物。', '向供应商确认可用地面面积，并在搬运大件前测量门口。'] },
    { type: 'tip', title: '规划限制', html: '这是基于代表性尺寸和堆叠假设的透明估算。它不会检查实际空间、承重、租金，也不能保证不规则家具能通过门口。' },
  ],
  faq: [
    { question: '应该选择最小空间还是舒适空间？', answer: '如果物品会紧密包装且很少取用，可以选择最小空间。如果需要取物、物品可能增加，或大件家具难以堆叠，舒适空间更合适。' },
    { question: '为什么使用平方米？', answer: '供应商通常公布地面面积，而地面面积更能说明物品是否容易摆放和取出。工具也显示立方米，方便比较按体积报价的空间。' },
    { question: '可以用于车库或集装箱吗？', answer: '可以作为规划起点，但要检查实际内部尺寸、门口、层高、通风，以及具体空间的承重和堆叠限制。' },
    { question: '计算器知道家具的真实尺寸吗？', answer: '不知道。它使用代表性的占地面积和体积。对于特殊、易碎或很深的物品，请自行测量并预留余量。' },
  ],
  howTo: [
    { name: '载入起始清单', text: '选择接近搬家或清理情况的场景，然后修改数量。' },
    { name: '清点箱子和大件物品', text: '输入小、中、大箱子的数量，再加入沙发、床、衣柜、书桌和椅子。' },
    { name: '设置取物通道', text: '根据需要取物的频率，在紧凑、平衡和经常取物之间选择。' },
    { name: '比较两种建议', text: '把最小空间看作容量下限，把舒适空间看作日常取物更方便的方案。' },
  ],
};

export const content = buildLocalizedContent(copy);
