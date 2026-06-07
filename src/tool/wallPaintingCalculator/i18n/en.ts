import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wall-painting-calculator';
const title = 'Wall Painting and Dilution Optimizer';
const description =
  'Calculate exactly how many litres or gallons of paint you need for your walls. Adjust for coats, surface type, dilution and get the real cost before buying.';

const faqData = [
  {
    question: 'How do I calculate the exact amount of paint?',
    answer:
      'Multiply the wall surface area by the number of coats, then divide by the paint yield in square metres or square feet per litre or gallon. Subtract doors and windows from the total area first.',
  },
  {
    question: 'How much paint does a standard room need?',
    answer:
      'A 12 square metre room with 2.5 metre ceilings has about 30 square metres of wall surface. With two coats and a yield of 12 square metres per litre, you need approximately 5 litres of paint.',
  },
  {
    question: 'Should I dilute the paint before applying it?',
    answer:
      'Water based plastic paints are usually ready to use or need 5 to 10 percent water on the first coat. Enameled or oil paints often require a specific solvent indicated on the tin.',
  },
  {
    question: 'How many coats are really necessary?',
    answer:
      'New or highly absorbent surfaces need a primer plus two finish coats. Repainting an already painted wall in a similar colour usually needs only one or two coats.',
  },
  {
    question: 'Do I subtract doors and windows?',
    answer:
      'Yes. Measure each opening and subtract it from the total wall area. As a quick rule, doors are about 2 square metres and windows about 1.5 square metres each.',
  },
  {
    question: 'Does the type of surface change the yield?',
    answer:
      'Yes. Smooth prepared walls yield up to 14 square metres per litre. Rough concrete, textured plaster or absorbent brick can drop the yield to 6 or 8 square metres per litre.',
  },
];

const howToData = [
  {
    name: 'Measure your walls',
    text: 'Measure the width and height of each wall. Multiply them to get the area of each wall, then add all walls together.',
  },
  {
    name: 'Subtract openings',
    text: 'Measure doors and windows and subtract their area from the total to get the real surface to paint.',
  },
  {
    name: 'Choose your paint type',
    text: 'Select the paint type in the calculator. Plastic matte, plastic satin and enamel have different yields and dilution recommendations.',
  },
  {
    name: 'Set coats and price',
    text: 'Indicate how many coats you plan to apply and the price per litre or gallon. The calculator will return the exact amount and total cost.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Paint Calculator: Buy Exactly What You Need',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Painting a room without calculating first usually ends in <strong>half empty tins</strong> or emergency trips to the store. The reason is simple: paint yield varies with surface porosity, colour change and the number of coats. A smooth previously painted wall can yield up to 14 square metres per litre, while a rough plaster wall can absorb the same amount and only cover 6 square metres per litre.',
    },
    {
      type: 'stats',
      items: [
        { value: 'High', label: 'Standard Coverage', icon: 'mdi:format-paint' },
        { value: '2 coats', label: 'Recommended', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Typical Dilution', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'How Paint Yield Really Works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Manufacturers state a theoretical yield on the tin. That number assumes a perfectly smooth, non absorbent, white surface applied by a professional roller under ideal conditions. In the real world, <strong>porous walls, dark colours, and DIY application</strong> reduce that yield by 20 to 40 percent. Our calculator lets you choose realistic profiles so you do not run short.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Plastic Matte Paint',
          description: 'The most common choice for interiors. High coverage, easy to touch up, and washable in most qualities.',
          icon: 'mdi:palette',
          points: ['Standard interior coverage', 'Dilution: 5 to 10 percent water', 'Best for: Living rooms and bedrooms'],
        },
        {
          title: 'Plastic Satin Paint',
          description: 'Slightly glossy finish with greater resistance to humidity and stains. Harder to touch up seamlessly.',
          icon: 'mdi:brightness-6',
          points: ['Slightly higher coverage', 'Dilution: 5 percent water', 'Best for: Kitchens and bathrooms'],
        },
        {
          title: 'Enamel Paint',
          description: 'Hard and durable finish for woodwork, radiators and high traffic areas. Requires solvent or specific thinner.',
          icon: 'mdi:spray',
          points: ['Durable hard finish', 'Dilution: 10 to 15 percent solvent', 'Best for: Doors, frames, furniture'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Practical Surface Measurement',
      icon: 'mdi:ruler-square',
      badge: 'Tip',
      html: '<p style="margin:0">Measure wall width times wall height for each wall. For a quick total, add all widths and multiply by the room height. Then subtract approximately 2 square metres for each standard door and 1.5 square metres for each window.</p>',
    },
    {
      type: 'title',
      text: 'Dilution and Application Rules',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'First coats on new or repaired surfaces always need a light dilution so the paint penetrates and anchors. Finish coats should be applied undiluted or with the minimum indicated by the manufacturer. <strong>Over diluting breaks the pigment</strong> and leaves transparent patches that need an extra coat.',
    },
    {
      type: 'summary',
      title: 'Why Calculate Before You Buy',
      items: [
        'Avoid leftover paint that dries in the tin and ends up as waste.',
        'Prevent colour mismatch between batches bought at different times.',
        'Budget accurately: know the real cost including primer and tools.',
        'Plan the work in one go without interrupting for extra materials.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Surface and Paint',
    labelMetric: 'Metric',
    labelImperial: 'Imperial',
    labelArea: 'Total surface to paint',
    labelAreaFt: 'Total surface to paint',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Paint yield',
    labelYieldFt: 'Paint yield',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Select paint type',
    btnPlasticMatTitle: 'Plastic Matte',
    btnPlasticMatSub: 'Matte · Water 5%',
    btnPlasticSatinTitle: 'Plastic Satin',
    btnPlasticSatinSub: 'Satin · Water 5%',
    btnEnamelTitle: 'Enamel',
    btnEnamelSub: 'Enamel · Solvent 10%',
    labelCoats: 'Number of coats',
    unitCoats: 'coats',
    labelPrice: 'Price per litre',
    labelPriceFt: 'Price per gallon',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Dilution percentage',
    unitDilution: '%',
    resultBadge: 'Paint calculation',
    labelPaint: 'Litres of paint',
    labelPaintGal: 'Gallons of paint',
    labelCost: 'Total cost',
    labelWater: 'Dilution liquid',
    labelWaterGal: 'Dilution liquid',
    labelTotalVolume: 'Total mixture',
    labelTotalVolumeGal: 'Total mixture',
    labelCurrency: 'Currency',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '$',
  },
};
