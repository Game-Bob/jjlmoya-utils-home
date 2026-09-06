export interface WallpaperInput {
  roomWidthCm: number;
  wallHeightCm: number;
  rollWidthCm: number;
  rollLengthCm: number;
  patternRepeatCm: number;
  wasteAllowancePercent: number;
}

export type WallpaperUnitSystem = 'metric' | 'imperial';
export type WallpaperMeasurement = 'surface' | 'rollLength';

const CENTIMETRES_PER_INCH = 2.54;
const CENTIMETRES_PER_FOOT = 30.48;

export function toCentimetres(value: number, unitSystem: WallpaperUnitSystem, measurement: WallpaperMeasurement): number {
  if (unitSystem === 'metric') return value;
  return value * (measurement === 'rollLength' ? CENTIMETRES_PER_FOOT : CENTIMETRES_PER_INCH);
}

export function fromCentimetres(value: number, unitSystem: WallpaperUnitSystem, measurement: WallpaperMeasurement): number {
  if (unitSystem === 'metric') return value;
  return value / (measurement === 'rollLength' ? CENTIMETRES_PER_FOOT : CENTIMETRES_PER_INCH);
}

export interface WallpaperResult {
  dropsNeeded: number;
  cutLengthCm: number;
  dropsPerRoll: number;
  usableRollLengthCm: number;
  rollsNeeded: number;
  purchasedLengthCm: number;
  leftoverLengthCm: number;
  wasteAllowancePercent: number;
}

export function getCutLengthCm(wallHeightCm: number, patternRepeatCm: number): number {
  if (patternRepeatCm <= 0) return wallHeightCm;
  return Math.ceil(wallHeightCm / patternRepeatCm) * patternRepeatCm;
}

function hasValidInput(input: WallpaperInput): boolean {
  const finiteMeasurements = [
    input.roomWidthCm,
    input.wallHeightCm,
    input.rollWidthCm,
    input.rollLengthCm,
    input.patternRepeatCm,
    input.wasteAllowancePercent,
  ].every((value) => Number.isFinite(value));
  const positiveMeasurements = [
    input.roomWidthCm,
    input.wallHeightCm,
    input.rollWidthCm,
    input.rollLengthCm,
  ].every((value) => value > 0);
  return finiteMeasurements
    && positiveMeasurements
    && input.patternRepeatCm >= 0
    && input.wasteAllowancePercent >= 0
    && input.wasteAllowancePercent < 100;
}

export function calculateWallpaperRolls(input: WallpaperInput): WallpaperResult | null {
  if (!hasValidInput(input)) return null;

  const cutLengthCm = getCutLengthCm(input.wallHeightCm, input.patternRepeatCm);
  const usableRollLengthCm = input.rollLengthCm * (1 - input.wasteAllowancePercent / 100);
  const dropsPerRoll = Math.floor(usableRollLengthCm / cutLengthCm);
  if (dropsPerRoll < 1) return null;

  const dropsNeeded = Math.ceil(input.roomWidthCm / input.rollWidthCm);
  const rollsNeeded = Math.ceil(dropsNeeded / dropsPerRoll);
  const purchasedLengthCm = rollsNeeded * input.rollLengthCm;
  const leftoverLengthCm = purchasedLengthCm - dropsNeeded * cutLengthCm;

  return {
    dropsNeeded,
    cutLengthCm,
    dropsPerRoll,
    usableRollLengthCm,
    rollsNeeded,
    purchasedLengthCm,
    leftoverLengthCm,
    wasteAllowancePercent: input.wasteAllowancePercent,
  };
}

export function formatMetres(centimetres: number): string {
  return `${(centimetres / 100).toFixed(2)} m`;
}

export function formatLength(centimetres: number, unitSystem: WallpaperUnitSystem): string {
  return unitSystem === 'imperial'
    ? `${fromCentimetres(centimetres, unitSystem, 'rollLength').toFixed(2)} ft`
    : formatMetres(centimetres);
}
