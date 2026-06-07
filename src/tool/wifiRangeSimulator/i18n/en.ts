import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wifi-range-simulator';
const title = 'WiFi Range and Obstacle Simulator';
const description =
  'Sketch your home layout, place walls, doors, furniture and appliances, then drag your router and device to find the best signal path. See live coverage loss, streaming verdicts and placement tips to fix dead zones without buying new hardware.';

const faqData = [
  {
    question: 'Why does my Wi-Fi signal drop in certain rooms?',
    answer:
      'Wi-Fi uses radio waves that are absorbed, reflected, or blocked by physical materials. Solid brick, concrete, and metal are the worst offenders, each reducing signal strength significantly. Water and glass can also reflect or absorb parts of the signal.',
  },
  {
    question:     'How much does a concrete or stone wall affect Wi-Fi?',
    answer:
      'A standard concrete wall can attenuate a 2.4 GHz signal by 10 to 20 decibels. Thick stone walls of 70 to 80 centimetres can reach 22 decibels or more. This translates to roughly 50 to 90 percent range loss depending on thickness and density. At 5 GHz the loss is even greater because higher frequencies are absorbed faster by dense materials.',
  },
  {
    question: 'Where should I place my router for best coverage?',
    answer:
      'Central, elevated, and open. Place the router in the middle of your home, at least one meter away from thick walls and metal objects, and raise it to chest height for horizontal dispersion. Avoid corners, closets, and low positions behind furniture.',
  },
  {
    question: 'Can glass doors block Wi-Fi?',
    answer:
      'Clear glass has minimal impact, but coated or double glazed windows with metal films can reflect signals. The simulator treats standard glass as a light obstacle with roughly 2 to 3 decibels of loss.',
  },
];

const howToData = [
  {
    name: 'Identify the signal path',
    text: 'Imagine a straight line between your router and the device you care about. Every object that crosses this line matters.',
  },
  {
    name: 'Add each obstacle',
    text: 'Click the material buttons in the simulator to add every wall, door, appliance or piece of furniture that crosses the path.',
  },
  {
    name: 'Read the verdict',
    text: 'Watch the signal ring, wave animation, and streaming dashboard update instantly as you add or remove objects.',
  },
  {
    name: 'Apply the contextual tip',
    text: 'Follow the placement cards that appear based on your exact obstacle combination to improve coverage without buying new hardware.',
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
      text: 'Why Your Wi-Fi Dies in the Next Room',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Your router broadcasts radio waves in all directions. Those waves travel through air easily, but every physical object they meet takes a toll. Some materials let most of the signal pass. Others devour it completely. Understanding which objects in your home are silently killing your connection is the first step to fixing dead zones without spending a single euro on new hardware.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Drywall Loss', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Thick Stone Wall', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Metal Door Loss', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'The Real Cost of Every Object in Your Home',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Not all obstacles are equal. A single drywall panel might shave off a few percent of your signal, but a concrete pillar or a metal door can cut your effective range in half. Here is what you are really up against when you place your router behind the TV, next to the fridge, or on the floor under a metal shelf.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Light Obstacles',
          description: 'These objects cause minimal signal loss and are usually safe to have near the signal path. You should not worry about a single window or glass door.',
          icon: 'mdi:window-open-variant',
          points: [
            'Glass door: 2 to 3 dB loss',
            'Standard window: 2 dB loss',
            'Drywall partition: 3 dB loss',
            'Wooden interior door: 4 dB loss',
          ],
        },
        {
          title: 'Moderate Obstacles',
          description: 'These objects create a noticeable dent in your coverage. One or two are fine, but stacking three or more in the same signal path will start to cause buffering and lag.',
          icon: 'mdi:wardrobe',
          points: [
            'Wooden wardrobe or closet: 5 dB loss',
            'Large mirror: 6 dB loss',
            'Washing machine: 6 dB loss',
            'Microwave oven: 5 dB loss',
          ],
        },
        {
          title: 'Heavy Obstacles',
          description: 'These are the silent killers of home networks. A single concrete wall or metal door can turn a strong signal into a weak one, and stacking them creates guaranteed dead zones.',
          icon: 'mdi:wall',
          points: [
            'Solid brick wall: 8 dB loss',
            'Floor or ceiling: 10 dB loss',
            'Refrigerator: 10 dB loss',
            'Fish tank: 12 dB loss',
          ],
        },
        {
          title: 'Extreme Obstacles',
          description: 'These materials absorb or reflect almost all radio energy. If your signal path crosses one of these, you need to move the router or the device. There is no workaround.',
          icon: 'mdi:shield',
          points: [
            'Thick stone wall (70-80 cm): 22 dB loss',
            'Concrete wall: 15 dB loss',
            'Metal cabinet: 12 dB loss',
            'Metal door or gate: 18 dB loss',
            'Elevator shaft: 20+ dB loss',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'How Different Frequencies Behave Through Walls',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Most modern routers broadcast on two bands: 2.4 GHz and 5 GHz. The lower frequency travels farther and sneaks through walls more easily, but it is slower and crowded. The higher frequency is blazing fast but gets absorbed by every obstacle in its path.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2.4 GHz Penetration',
          description: 'Lower frequencies travel farther and penetrate walls better. Ideal for long range but crowded with neighbouring networks.',
          icon: 'mdi:signal',
          points: [
            'Better through solid brick and concrete',
            'More interference from neighbour routers',
            'Slower top speeds, around 150 Mbps real world',
            'Better for smart home devices and IoT',
          ],
        },
        {
          title: '5 GHz Penetration',
          description: 'Higher frequencies offer faster speeds but are absorbed much faster by building materials. Best for open spaces and nearby devices.',
          icon: 'mdi:signal-5g',
          points: [
            'Poor through concrete and metal',
            'Less interference, cleaner channels',
            'Gigabit capable speeds in the same room',
            'Worse coverage, better quality where it reaches',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Hidden Killers: Objects You Never Suspected',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Most people blame walls, but some of the worst Wi-Fi killers are everyday objects. A fish tank is mostly water, and water absorbs 2.4 GHz radio waves almost perfectly. A large mirror has a thin metal backing that reflects signal away from your device. A microwave oven leaks radiation at 2.4 GHz, the exact same frequency as your router, causing interference every time you warm up soup.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The Fish Tank Trap',
          icon: 'mdi:fish',
      badge: 'Surprise Blocker',
      html: '<p>A large aquarium can attenuate your Wi-Fi signal by up to 12 decibels. That is the same as a thick concrete wall. If your router is on one side of the tank and your desk is on the other, the water is doing more damage than the wall behind it.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The Mirror Effect',
          icon: 'mdi:mirror',
      badge: 'Reflection Hazard',
      html: '<p>Large mirrors have a thin layer of metal backing designed to reflect light. That same metal layer also reflects radio waves. A mirror facing your router can bounce signal away from where you need it, or create confusing multi-path interference that garbles data packets.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The Microwave Interference',
      icon: 'mdi:microwave',
      badge: 'Active Jammer',
      html: '<p>Microwave ovens operate at 2.45 GHz, overlapping directly with the 2.4 GHz Wi-Fi band. When running, a microwave can wipe out the 2.4 GHz signal within a 3 to 5 meter radius. If your router only supports 2.4 GHz and your kitchen is nearby, switch to a dual band router and use 5 GHz for critical tasks.</p>',
    },
    {
      type: 'title',
      text: 'Room by Room: Where to Place Your Router',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The ideal router location is not the most convenient one. It is the one that gives the clearest line of sight to the rooms where you actually use the internet. Here is how to think about each room.',
    },
    {
      type: 'table',
      headers: ['Room', 'Risk Level', 'Why It Is Hard', 'Fix'],
      rows: [
        ['Kitchen', 'High', 'Fridge, microwave, metal cabinets, water pipes', 'Place router outside the kitchen, never inside.'],
        ['Bathroom', 'High', 'Mirrors, water pipes, tiles with metal mesh', 'Avoid placing router on the other side of a bathroom wall.'],
        ['Bedroom', 'Medium', 'Wardrobes, thick walls, metal bed frames', 'Elevate router, clear path above furniture.'],
        ['Living Room', 'Low', 'Usually open, but watch TVs and consoles', 'Keep router visible, not hidden behind the TV.'],
        ['Garage', 'Extreme', 'Metal doors, concrete, cars', 'Do not expect indoor router to reach the garage.'],
        ['Garden / Terrace', 'High', 'Exterior walls, glass, distance', 'Use an outdoor access point or mesh node.'],
      ],
    },
    {
      type: 'title',
      text: 'The One Meter Rule and Other Placement Hacks',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Small moves create big differences. You do not need to rewire your house. You just need to understand how radio waves move and give them a clear path.',
    },
    {
      type: 'tip',
      title: 'The One Meter Rule',
      html: '<p>Moving your router just one meter away from a concrete or metal barrier can recover up to 40 percent of lost signal strength.</p>',
    },
    {
      type: 'tip',
      title: 'Elevate for Coverage',
      html: '<p>Elevate the router to chest height on a shelf. Signals radiate horizontally from the antenna. Placing it on the floor wastes half your coverage into the ground.</p>',
    },
    {
      type: 'tip',
      title: 'Keep It Visible',
      html: '<p>Never hide the router inside a cabinet, closet, or behind the TV. The enclosure acts like a Faraday cage, trapping the signal before it reaches your room.</p>',
    },
    {
      type: 'tip',
      title: 'Antenna Positioning',
      html: '<p>If your router has external antennas, position one vertically and one horizontally. This gives better coverage for devices at different heights.</p>',
    },
    {
      type: 'tip',
      title: 'Avoid Interference',
      html: '<p>Keep the router at least 1.5 meters away from microwave ovens, cordless phones, and baby monitors. These devices share the 2.4 GHz spectrum and cause active interference.</p>',
    },
    {
      type: 'tip',
      title: 'Middle Floor Advantage',
      html: '<p>If you live in a multi-storey home, place the router on the middle floor. Signals spread up and down poorly through concrete floors.</p>',
    },
    {
      type: 'title',
      text: 'Streaming Verdicts: What Your Signal Actually Means',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Percentages are abstract. What you really care about is whether you can watch Netflix, win a match, or finish a video call without freezing. Here is what each signal level means in the real world.',
    },
    {
      type: 'table',
      headers: ['Signal', '4K Streaming', 'Online Gaming', 'Video Calls', 'Browsing'],
      rows: [
        ['80% to 100%', 'Perfect, instant load', 'Low latency, competitive play', 'Crystal clear, no drops', 'Instant, no delay'],
        ['60% to 79%', 'Good, occasional buffer', 'Playable, minor lag spikes', 'Stable, rare pixelation', 'Fast, no issues'],
        ['40% to 59%', 'Buffering every few minutes', 'Lag warnings, rubber banding', 'Pixelated, some drops', 'Usable, slower loads'],
        ['20% to 39%', 'Impossible, constant freeze', 'Disconnects, unplayable', 'Frequent drops, unusable', 'Very slow, timeouts'],
        ['0% to 19%', 'Will not start', 'Cannot connect', 'No connection', 'Unusable'],
      ],
    },
    {
      type: 'title',
      text: 'Quick Fixes Before You Buy Anything',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Zero Cost Optimisation Checklist',
      items: [
        'Move the router to the centre of your home, not the corner.',
        'Raise it to chest height on a shelf or tall furniture.',
        'Pull it out of cabinets, closets, and behind the TV.',
        'Angle one antenna vertical and one horizontal if possible.',
        'Switch to 5 GHz for nearby devices and 2.4 GHz for distant ones.',
        'Change your Wi-Fi channel to a less crowded one using a scanner app.',
        'Update router firmware to fix known signal bugs.',
        'Reboot the router once a month to clear memory leaks.',
      ],
    },
    {
      type: 'title',
      text: 'When to Upgrade Your Hardware',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sometimes the environment wins. If you have tried every placement trick and still suffer dead zones, it is time to extend the network instead of fighting physics.',
    },
    {
      type: 'proscons',
      title: 'WiFi Extender vs Mesh System',
      items: [
        { pro: 'Extenders are cheap and easy to install.', con: 'Extenders create a second network name and half the speed.' },
        { pro: 'Extenders work for a single dead zone.', con: 'Extenders need a strong existing signal to boost.' },
        { pro: 'Mesh systems create one seamless network.', con: 'Mesh systems are more expensive upfront.' },
        { pro: 'Mesh handles multiple floors and large homes.', con: 'Mesh requires a main node near the modem.' },
      ],
    },
    {
      type: 'tip',
      title: 'When to Use Mesh',
      html: '<p>For homes over 120 square metres or with thick concrete walls, a mesh system with at least two nodes will outperform any single router, no matter how expensive.</p>',
    },
    {
      type: 'title',
      text: 'Understanding Decibels in Plain English',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Decibels are logarithmic, which means they do not behave like normal numbers. Every 3 dB of loss cuts your signal power in half. A 6 dB loss means one quarter of the original power remains. A 10 dB loss means only one tenth survives. That is why a concrete wall at 15 dB is devastating. It does not just weaken the signal. It obliterates it.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Attenuation', definition: 'The gradual loss of signal strength as it passes through a material. Higher numbers mean more signal is lost.' },
        { term: 'dBm', definition: 'A unit of power used to measure Wi-Fi signal strength. Zero dBm is one milliwatt. Negative values are normal, with minus 30 being excellent and minus 80 being barely usable.' },
        { term: 'Dead Zone', definition: 'An area where the Wi-Fi signal is too weak to establish or maintain a reliable connection.' },
        { term: 'Mesh Network', definition: 'A system of multiple router nodes that work together to blanket a large area with a single seamless Wi-Fi network.' },
        { term: 'Multi-Path Interference', definition: 'When radio waves bounce off walls and objects, creating multiple delayed copies of the same signal that confuse the receiver.' },
        { term: 'SSID', definition: 'The name of your Wi-Fi network. Extenders often create a second SSID, while mesh systems keep one name across all nodes.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The Golden Rule of Router Placement',
      icon: 'mdi:map-marker-radius',
      badge: 'Key Tip',
      html: '<p>If your router is currently in a corner, inside a cabinet, or on the floor, you are throwing away 50 to 70 percent of its potential range before the signal even leaves the room. The fastest upgrade you can make is moving it to an open, central, elevated location. That single change often fixes more problems than buying new equipment.</p>',
    },
    {
      type: 'summary',
      title: 'How to Prevent WiFi Dead Zones',
      items: [
        'Place the router centrally, elevated, and in the open.',
        'Minimise the number of walls between router and device.',
        'Avoid kitchens, bathrooms, and garages as router locations.',
        'Use 5 GHz for speed in the same room, 2.4 GHz for distance.',
        'Consider mesh for large homes or thick exterior walls.',
        'Reboot monthly and update firmware to maintain peak performance.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Home Objects That Block Wi-Fi',
    labelAddObstacle: 'Click to add to the signal path',
    labelRemove: 'Remove',
    labelSignalStrength: 'Signal',
    labelEffectiveRange: 'Effective Range',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Streaming Verdict',
    verdictPerfect: 'Perfect',
    verdictGood: 'Good',
    verdictFair: 'Fair',
    verdictPoor: 'Poor',
    verdictDead: 'Dead Zone',
    tipTitle: 'Placement Tip',
    label4kStreaming: '4K Streaming',
    labelOnlineGaming: 'Online Gaming',
    labelVideoCalls: 'Video Calls',
    labelBasicBrowsing: 'Basic Browsing',
    statusPerfect: 'Perfect',
    statusGood: 'Good',
    statusFair: 'Fair',
    statusPoor: 'Poor',
    statusImpossible: 'Impossible',
    statusLowLatency: 'Low Latency',
    statusLagWarning: 'Lag Warning',
    statusDisconnect: 'Disconnect',
    statusStable: 'Stable',
    statusPixelated: 'Pixelated',
    statusDropped: 'Dropped',
    statusPass: 'Pass',
    statusUnusable: 'Unusable',
    tipMoveRouter: 'Moving your router just 1 meter away from that solid barrier could boost signal by up to 40%.',
    tipElevateRouter: 'Elevate the router to chest height. Signals spread horizontally, and the floor absorbs more than you think.',
    tipReduceObstacles: 'Each additional wall halves the signal. Try to reduce the number of obstacles between router and device.',
  },
};
