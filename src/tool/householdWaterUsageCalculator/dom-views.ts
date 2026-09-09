import type { HouseholdWaterUsageUI } from "./ui";
import type { UsageCategoryKey, WaterUsageResult } from "./logic";
import type { UsageEvaluation } from "./evaluator";

const categoryLabels: Record<UsageCategoryKey, keyof HouseholdWaterUsageUI> = {
  showers: "categoryShowers",
  toilets: "categoryToilets",
  taps: "categoryTaps",
  washing: "categoryWashing",
  dishwasher: "categoryDishwasher",
  leaks: "categoryLeaks",
};

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(
    Math.max(0, value),
  );
}

function formatLitres(value: number): string {
  return `${formatNumber(value)} L`;
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ] ?? character,
  );
}

function categoryLabel(
  key: UsageCategoryKey,
  ui: HouseholdWaterUsageUI,
): string {
  return ui[categoryLabels[key]] ?? "";
}

function renderCategoryRows(
  result: WaterUsageResult,
  ui: HouseholdWaterUsageUI,
): string {
  return result.categories
    .filter((category) => category.litresPerDay > 0)
    .sort((left, right) => right.litresPerDay - left.litresPerDay)
    .map(
      (category) =>
        `<div class="n-breakdown-row"><div class="n-breakdown-label"><span>${escapeHtml(categoryLabel(category.key, ui))}</span><strong>${formatLitres(category.monthlyLitres)}</strong></div><div class="n-breakdown-track"><span class="n-breakdown-fill" style="width:${Math.max(2, category.share * 100)}%"></span></div><div class="n-breakdown-meta"><span>${formatNumber(category.share * 100)}% ${escapeHtml(ui.usageShare)}</span><span>${formatLitres(category.savingsLitresPerMonth)} ${escapeHtml(ui.monthlySaving)}</span></div></div>`,
    )
    .join("");
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
}

function evaluationLabel(
  evaluation: UsageEvaluation,
  ui: HouseholdWaterUsageUI,
): string {
  if (evaluation.band === "above") return ui.aboveReference;
  if (evaluation.band === "below") return ui.belowReference;
  return ui.nearReference;
}

function renderEvaluation(
  root: HTMLElement,
  evaluation: UsageEvaluation,
  ui: HouseholdWaterUsageUI,
): void {
  const label = evaluationLabel(evaluation, ui);
  const detail = ui.referenceDescription;
  const badge = root.querySelector<HTMLElement>(
    '[data-output="reference-badge"]',
  );
  if (badge) {
    badge.textContent = label;
    badge.dataset.band = evaluation.band;
  }
  setText(root, '[data-output="reference-detail"]', detail);
}

function renderMainMetrics(root: HTMLElement, result: WaterUsageResult): void {
  setText(root, '[data-output="daily"]', formatLitres(result.totalDailyLitres));
  setText(root, '[data-output="monthly"]', formatLitres(result.monthlyLitres));
  setText(root, '[data-output="annual"]', formatLitres(result.annualLitres));
  setText(
    root,
    '[data-output="per-person"]',
    `${formatNumber(result.perPersonDailyLitres)} L`,
  );
  setText(
    root,
    '[data-output="saving"]',
    formatLitres(result.monthlySavingsLitres),
  );
  setText(
    root,
    '[data-output="efficient"]',
    formatLitres(result.efficientMonthlyLitres),
  );
}

function renderLabels(root: HTMLElement, ui: HouseholdWaterUsageUI): void {
  setText(root, '[data-output="current-label"]', ui.currentScenario);
  setText(root, '[data-output="efficient-label"]', ui.efficientScenario);
  setText(root, '[data-output="daily-label"]', ui.litresPerDay);
  setText(root, '[data-output="monthly-label"]', ui.litresPerMonth);
  setText(root, '[data-output="annual-label"]', ui.litresPerYear);
  setText(root, '[data-output="per-person-label"]', ui.perPerson);
  setText(root, '[data-output="saving-label"]', ui.monthlySaving);
  setText(root, '[data-output="breakdown-title"]', ui.breakdownTitle);
  setText(root, '[data-output="saving-title"]', ui.savingTitle);
  setText(root, '[data-output="saving-description"]', ui.savingDescription);
}

function renderPanels(
  root: HTMLElement,
  result: WaterUsageResult,
  ui: HouseholdWaterUsageUI,
): void {
  const breakdown = root.querySelector<HTMLElement>(
    '[data-output="breakdown"]',
  );
  if (breakdown) breakdown.innerHTML = renderCategoryRows(result, ui);
}

export function renderResults(
  root: HTMLElement,
  result: WaterUsageResult,
  evaluation: UsageEvaluation,
  ui: HouseholdWaterUsageUI,
): void {
  renderMainMetrics(root, result);
  renderLabels(root, ui);
  renderPanels(root, result, ui);
  renderEvaluation(root, evaluation, ui);
}
