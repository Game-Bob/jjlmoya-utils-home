import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tile-layout-calculator';
const title = 'Tile Layout and Waste Calculator';
const description =
  'Plan your room flooring with precision. Calculate exact tile quantities, boxes needed, total cost, and visualize the layout in real time with an interactive grid preview.';

const faqData = [
  {
    question: 'How do I calculate how many tiles I need for a room?',
    answer:
      'Measure the room width and length, choose your tile size, and enter the grout joint width. The calculator divides the room dimensions by the tile plus grout size to give the exact number of tiles required per row and column.',
  },
  {
    question: 'What waste percentage should I add when buying tiles?',
    answer:
      'For standard rectangular rooms, add 10% waste. For rooms with many corners, diagonal layouts, or complex cuts, increase to 15%. This covers breakages and cutting mistakes.',
  },
  {
    question: 'Does grout thickness really change the number of tiles?',
    answer:
      'Yes. Wider grout joints reduce the effective coverage of each tile, slightly increasing the total number needed. The calculator factors this into every row and column automatically.',
  },
  {
    question: 'Should I buy extra boxes beyond the waste percentage?',
    answer:
      'It is wise to purchase one extra box if available. Tile dye lots can vary between production runs, and having matching spares makes future repairs seamless.',
  },
  {
    question: 'How do I tile a room with an irregular shape?',
    answer:
      'Break the room into smaller rectangles. Calculate each section separately and sum the totals. Always round up partial boxes to ensure full coverage.',
  },
  {
    question: 'What is the difference between ceramic and porcelain tile waste?',
    answer:
      'Porcelain is denser and harder to cut, which can increase cutting waste by 2% to 3% compared to standard ceramic. Both materials should follow the same measuring process.',
  },
  {
    question: 'Can I return unused tile boxes?',
    answer:
      'Most retailers accept unopened boxes within 30 days. Always keep the receipt and do not open surplus boxes until the installation is fully complete.',
  },
];

const howToData = [
  {
    name: 'Measure the room',
    text: 'Record the width and length of the floor area in your preferred unit system.',
  },
  {
    name: 'Select tile and grout',
    text: 'Choose your tile dimensions and the desired grout joint width.',
  },
  {
    name: 'Calculate and visualize',
    text: 'Enter the values into the calculator, adjust the waste margin, and review the live layout preview.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Complete Guide to Floor Tile Planning and Waste Control',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A successful tiling project starts long before the first adhesive is spread. Precise measurement, intelligent layout planning, and accurate waste estimation determine whether your renovation stays on budget and on schedule. <strong>Our interactive tile layout calculator</strong> transforms raw dimensions into a visual floor plan, showing exactly how many tiles fit per row, how many boxes to buy, and where your money goes.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Standard Waste', icon: 'mdi:alert-circle' },
        { value: '30+ yr', label: 'Tile Lifespan', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Average Install', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Large Format Tiles',
          description: 'Tiles larger than 60 cm create a seamless, modern look but require perfectly flat substrates and generate higher cutting waste in small rooms.',
          icon: 'mdi:arrow-expand',
          points: ['Fewer grout lines', 'Premium visual effect', 'Higher cutting waste in tight spaces'],
        },
        {
          title: 'Small Mosaic Tiles',
          description: 'Ideal for bathrooms and intricate patterns. They adapt to irregular shapes but demand more grout and labor time.',
          icon: 'mdi:apps',
          points: ['Flexible around obstacles', 'More grout required', 'Longer installation time'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Why Layout Visualization Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seeing your tile grid before purchase prevents costly surprises. A live preview reveals whether your chosen tile size leaves awkward narrow strips at the edges or creates a balanced, symmetrical floor. By adjusting grout width and tile orientation inside the calculator, you can optimize the layout for aesthetics and efficiency before placing an order.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Reference Coverage Table',
      icon: 'mdi:table',
      badge: 'Reference',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 tiles per m²</li><li><strong>45 x 45 cm</strong> → 5 tiles per m²</li><li><strong>60 x 60 cm</strong> → 3 tiles per m²</li><li><strong>60 x 120 cm</strong> → 1.5 tiles per m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Pro Tips to Minimize Waste',
      items: [
        'Order 10% extra for straight layouts and 15% for diagonal or herringbone patterns.',
        'Keep all tile boxes from the same production batch to ensure color consistency.',
        'Measure diagonally across the room to check for squareness before planning rows.',
        'Use large format tiles only in rooms wider than the tile length to avoid excessive cuts.',
        'Always round box quantities up; it is cheaper than a second delivery charge.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Room Configuration',
    labelRoomWidth: 'Room width',
    labelRoomLength: 'Room length',
    labelTileWidth: 'Tile width',
    labelTileLength: 'Tile length',
    labelGrout: 'Grout joint',
    labelWaste: 'Waste margin',
    labelTilesPerBox: 'Tiles per box',
    labelPrice: 'Price per box',
    labelPattern: 'Tile pattern',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'pcs',
    unitPrice: '/box',
    resultBadge: 'Live layout preview',
    labelArea: 'Floor area',
    labelTiles: 'Total tiles',
    labelBoxes: 'Boxes needed',
    labelCost: 'Total cost',
    labelWasteCount: 'Waste tiles',
    labelCuts: 'Partial cuts',
    currency: 'USD',
    btnMetric: 'Metric',
    btnImperial: 'Imperial',
    btnPatternStraight: 'Straight',
    btnPatternBrick: 'Running bond',
    btnPatternDiagonal: 'Diagonal',
    badgeOptimal: 'Optimal layout',
    badgeWarning: 'High waste alert',
    visualTitle: 'Layout preview',
  },
};
