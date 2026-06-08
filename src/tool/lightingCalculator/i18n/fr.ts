import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-eclairage';
const title = 'Home Lighting and Lumens Calculator';
const description =
  'Calculate exactly how many lumens and light bulbs you need for any room. Select your room type, dimensions, and bulb type to get a professional lighting plan with real-time lux estimates.';

const faqData = [
  {
    question: 'How many lumens do I need for a living room?',
    answer:
      'For a typical living room, aim for around 150 lux on the floor. Multiply the room area in square meters by 150 to get the required lumens. For a 20 square meter room, you need approximately 3,000 lumens.',
  },
  {
    question: 'What is the difference between lux and lumens?',
    answer:
      'Lumens measure the total light output from a bulb. Lux measures the light that actually reaches a surface. A room with high ceilings or dark walls needs more lumens to achieve the same lux level because light is lost to distance and absorption.',
  },
  {
    question: 'Do LED bulbs really save energy?',
    answer:
      'Yes. LED bulbs produce about 100 lumens per watt, while incandescent bulbs produce only about 15. A 10W LED bulb gives the same light as a 60W incandescent bulb, using one-sixth of the electricity.',
  },
  {
    question: 'How does room color affect lighting needs?',
    answer:
      'Dark walls and ceilings absorb light. In a room with dark surfaces, you may need 50% more lumens than the standard recommendation. The calculator lets you adjust for low, medium, or high reflectance.',
  },
  {
    question: 'What is a good lux level for reading?',
    answer:
      'For comfortable reading, you need 300 to 500 lux on the page. General ambient lighting usually provides 150 to 200 lux, so add a task lamp near your reading spot for the extra brightness.',
  },
  {
    question: 'Can I dim LED bulbs?',
    answer:
      'Only if they are marked as dimmable. Standard LEDs may flicker or have a shortened lifespan when connected to a dimmer. Always check the packaging for the dimmable symbol before installing.',
  },
];

const howToData = [
  {
    name: 'Choose your room type',
    text: 'Select the room function. Kitchens and offices need brighter light than bedrooms or hallways.',
  },
  {
    name: 'Enter dimensions',
    text: 'Input the room width, length, and ceiling height. The calculator uses these to determine the room index and light utilization factor.',
  },
  {
    name: 'Select bulb type and count',
    text: 'Choose your preferred bulb technology and how many fixtures you have. The calculator will tell you if you need more bulbs.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Complete Guide to Home Lighting Design and Lumens Planning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Proper lighting transforms a house into a home. Beyond aesthetics, the right amount of light affects mood, productivity, and even eye health. <strong>Our home lighting calculator</strong> helps you determine exactly how many lumens you need for any room, taking into account room size, ceiling height, surface colors, and bulb type.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Recommended Lux Range', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED Efficiency', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Maintenance Factor', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Warm Ambient Lighting',
          description: 'Ideal for living rooms and bedrooms. Creates a cozy atmosphere and reduces eye strain in the evening.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Warm color temperature (2700K)', 'Multiple dimmable sources'],
        },
        {
          title: 'Bright Task Lighting',
          description: 'Essential for kitchens, offices, and bathrooms. Provides clear visibility for detailed work.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Cool white (4000K)', 'Focused on work surfaces'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Why Room Dimensions Matter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Light spreads and weakens with distance. A bulb that is bright enough for a 2.5 meter ceiling may be too dim for a 4 meter ceiling. The calculator accounts for this by using the room index formula, which considers both floor area and mounting height to estimate how much light actually reaches your work plane.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Reference Lux Table',
      icon: 'mdi:table',
      badge: 'Reference',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Living room</strong> → 150 lux</li><li><strong>Kitchen</strong> → 300 lux</li><li><strong>Bedroom</strong> → 100 lux</li><li><strong>Bathroom</strong> → 200 lux</li><li><strong>Office</strong> → 500 lux</li><li><strong>Hallway</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Pro Tips for Better Lighting',
      items: [
        'Layer three types of light: ambient, task, and accent.',
        'Use dimmers to adjust brightness for different times of day.',
        'Choose LED bulbs for long life and low energy consumption.',
        'Place task lights on the opposite side of your dominant hand to avoid shadows.',
        'Consider smart bulbs for automated scheduling and color temperature changes.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Room Configuration',
    labelRoomType: 'Room type',
    labelRoomWidth: 'Room width',
    labelRoomLength: 'Room length',
    labelHeight: 'Ceiling height',
    labelWorkPlane: 'Work plane height',
    labelReflectance: 'Surface reflectance',
    labelBulbType: 'Bulb type',
    labelBulbWatt: 'Bulb wattage',
    labelFixtures: 'Number of fixtures',
    labelDimmer: 'Dimmer level',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitPercent: '%',
    unitBulbs: 'pcs',
    unitWatt: 'W',
    unitLumens: 'lm',
    unitLux: 'lux',
    resultBadge: 'Lighting status',
    labelTargetLux: 'Target lux',
    labelRequiredLumens: 'Required lumens',
    labelCurrentLumens: 'Current lumens',
    labelCurrentLux: 'Current lux',
    labelBulbsNeeded: 'Bulbs needed',
    labelStatus: 'Status',
    statusOptimal: 'Optimal',
    statusInsufficient: 'Insufficient',
    statusExcess: 'Excess',
    btnLiving: 'Living',
    btnKitchen: 'Kitchen',
    btnBedroom: 'Bedroom',
    btnBathroom: 'Bathroom',
    btnOffice: 'Office',
    btnHallway: 'Hallway',
    btnReflectLow: 'Dark',
    btnReflectMedium: 'Medium',
    btnReflectHigh: 'Light',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halogen',
    btnBulbIncandescent: 'Incandescent',
    tipAmbient: 'Ambient lighting provides overall illumination.',
    tipTask: 'Add task lighting for work areas.',
    tipAccent: 'Use accent lights to highlight features.',
    visualTitle: 'Room preview',
  },
};


