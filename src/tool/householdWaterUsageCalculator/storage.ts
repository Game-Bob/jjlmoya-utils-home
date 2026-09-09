import type { WaterUsageInput } from "./logic";

const STORAGE_KEY = "jjlmoya:household-water-usage:v1";

export function loadWaterUsage(): Partial<WaterUsageInput> | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value))
      return null;
    return value as Partial<WaterUsageInput>;
  } catch {
    return null;
  }
}

export function saveWaterUsage(input: WaterUsageInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
