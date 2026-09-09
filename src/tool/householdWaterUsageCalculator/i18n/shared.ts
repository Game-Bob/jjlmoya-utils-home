import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { ToolLocaleContent } from "../../../types";
import type { HouseholdWaterUsageUI } from "../ui";
import { bibliography } from "../bibliography";

export interface HouseholdWaterUsageSeoCopy {
  introTitle: string;
  introOne: string;
  introTwo: string;
  averageLabel: string;
  groupsLabel: string;
  daysLabel: string;
  readTitle: string;
  readText: string;
  currentTitle: string;
  currentText: string;
  currentPoints: [string, string, string];
  lowerTitle: string;
  lowerText: string;
  lowerPoints: [string, string, string];
  chooseTitle: string;
  chooseText: string;
  actions: [string, string, string, string];
  limitsTitle: string;
  limitsText: string;
  flowTitle: string;
  flowText: string;
}

export interface HouseholdWaterUsageCopy {
  slug: string;
  title: string;
  description: string;
  language: string;
  ui: HouseholdWaterUsageUI;
  faq: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
  howTo: [
    { name: string; text: string },
    { name: string; text: string },
    { name: string; text: string },
    { name: string; text: string },
    { name: string; text: string },
  ];
  seo: HouseholdWaterUsageSeoCopy;
}

export function createHouseholdWaterUsageContent(
  copy: HouseholdWaterUsageCopy,
): ToolLocaleContent<HouseholdWaterUsageUI> {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  };

  const appSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    inLanguage: copy.language,
  };

  const seo: ToolLocaleContent<HouseholdWaterUsageUI>["seo"] = [
    { type: "title", text: copy.seo.introTitle, level: 2 },
    { type: "paragraph", html: copy.seo.introOne },
    { type: "paragraph", html: copy.seo.introTwo },
    {
      type: "stats",
      items: [
        {
          value: "128 L",
          label: copy.seo.averageLabel,
          icon: "mdi:water-outline",
        },
        {
          value: "6",
          label: copy.seo.groupsLabel,
          icon: "mdi:chart-donut",
        },
        {
          value: "30.4",
          label: copy.seo.daysLabel,
          icon: "mdi:calendar-month",
        },
      ],
      columns: 3,
    },
    { type: "title", text: copy.seo.readTitle, level: 3 },
    { type: "paragraph", html: copy.seo.readText },
    {
      type: "comparative",
      items: [
        {
          title: copy.seo.currentTitle,
          description: copy.seo.currentText,
          icon: "mdi:home-outline",
          highlight: true,
          points: copy.seo.currentPoints,
        },
        {
          title: copy.seo.lowerTitle,
          description: copy.seo.lowerText,
          icon: "mdi:water-check",
          points: copy.seo.lowerPoints,
        },
      ],
      columns: 2,
    },
    { type: "title", text: copy.seo.chooseTitle, level: 3 },
    { type: "paragraph", html: copy.seo.chooseText },
    { type: "list", items: copy.seo.actions, icon: "mdi:water-check" },
    {
      type: "tip",
      title: copy.seo.limitsTitle,
      html: copy.seo.limitsText,
    },
    { type: "title", text: copy.seo.flowTitle, level: 3 },
    { type: "paragraph", html: copy.seo.flowText },
  ];

  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    ui: copy.ui,
    faq: copy.faq,
    bibliography,
    howTo: copy.howTo,
    schemas: [faqSchema, howToSchema, appSchema],
    seo,
  };
}
