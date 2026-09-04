import { describe, expect, it } from 'vitest';
import { calculateAcTonnage } from '../tool/acTonnageCalculator/logic';
import { calculateCycleCost } from '../tool/applianceCostCalculator/logic';
import { calculateErgonomics } from '../tool/deskErgonomics/logic';
import { calculateDewPoint, getMoldRisk } from '../tool/dewPointCalculator/logic';
import { calculateHumidity } from '../tool/humidityCalculator/logic';
import { calculateLedSaving } from '../tool/ledSavingCalculator/logic';
import { calculateLighting } from '../tool/lightingCalculator/logic';
import { calculateProjection } from '../tool/projectorCalculator/logic';
import { url, vcard, wifi } from '../tool/qrGenerator/logic';
import { calculateTilt, toRad } from '../tool/solarCalculator/logic';
import { calculateTariffs } from '../tool/tariffComparator/logic';
import { calculateTileLayout } from '../tool/tileLayoutCalculator/logic';
import { calculateVampireDraw } from '../tool/vampireDrawSimulator/logic';
import { calculateWallPainting } from '../tool/wallPaintingCalculator/logic';
import {
  calculateApplianceLifespan,
  calculateSalt,
  calculateScale,
  getHardnessCategory,
  toGpg,
} from '../tool/waterSoftener/logic';
import {
  buildSegments,
  calculateSignalFromSketch,
  computeStreamingVerdict,
  getVerdictColor,
} from '../tool/wifiRangeSimulator/logic';

describe('calculator logic reference cases', () => {
  it('keeps physical calculators finite and monotonic for their baseline inputs', () => {
    const ac = calculateAcTonnage({ area: 20, ceilingHeight: 2.5, people: 2, heatSources: 0, sunExposure: 'light', roomType: 'bedroom' });
    expect(ac.btu).toBeGreaterThan(0);
    expect(calculateErgonomics(175, 'male', 'sit').deskHeight).toBeGreaterThan(0);
    expect(calculateDewPoint(20, 50)).toBeGreaterThan(0);
    expect(getMoldRisk(20, calculateDewPoint(20, 50))).toBeDefined();
    expect(calculateHumidity({ roomM2: 25, tempC: 22, currentRH: 70, targetRH: 50, capacityLPerDay: 12 }).litersToExtract).toBeGreaterThan(0);
    expect(calculateLedSaving({ numBulbs: 4, oldWatts: 60, ledWatts: 9, hoursPerDay: 4, pricePerKwh: 0.2 }).annualKwh).toBeGreaterThan(0);
    expect(calculateLighting({ roomWidthM: 4, roomLengthM: 5, roomHeightM: 2.7, roomType: 'living', bulbType: 'led', bulbWatt: 9, fixtures: 6, luxMultiplier: 1 }).targetLux).toBeGreaterThan(0);
    expect(calculateProjection(100, 16 / 9, 1.5).widthCm).toBeGreaterThan(0);
    expect(calculateCycleCost({ applianceId: 'washer', cycle: 'normal', electricityPrice: 0.2, waterPrice: 0.003, detergentEnabled: true, hour: 12, cyclesPerWeek: 3 }).totalCost).toBeGreaterThan(0);
  });

  it('covers structured outputs and boundary-safe conversion helpers', () => {
    expect(wifi('Home', 'secret', 'WPA', false)).toContain('WIFI:');
    expect(url('https://example.com')).toBe('https://example.com');
    expect(vcard({ name: 'Ada', surname: 'Lovelace', phone: '1', email: 'a@example.com', org: 'Lab' })).toContain('BEGIN:VCARD');
    expect(toRad(180)).toBeCloseTo(Math.PI);
    expect(calculateTilt(40).optimal).toBeGreaterThan(0);
    const tariffs = calculateTariffs({ consumptionKwh: 2700, powerKw: 3.45, solarReduction: false, shiftPercent: 20 });
    expect(tariffs.monthlyData).toHaveLength(12);
    const tiles = calculateTileLayout({ roomWidthM: 4, roomLengthM: 5, tileWidthM: 0.3, tileLengthM: 0.3, groutM: 0.003, wastePercent: 10, tilesPerBox: 8, pricePerBox: 25 });
    expect(tiles.totalTiles).toBeGreaterThanOrEqual(tiles.exactTiles);
    expect(calculateVampireDraw([{ name: 'TV', watts: 12, hoursPerDay: 24 }], 0.2).annualKwh).toBeGreaterThan(0);
    expect(calculateWallPainting({ area: 20, yieldM2PerLitre: 10, coats: 2, pricePerLitre: 8, dilutionPercent: 5 }).paintLitres).toBe(4);
    expect(toGpg(10, 'fH')).toBeCloseTo(5.84);
    expect(getHardnessCategory(0).key).toBe('soft');
    expect(calculateScale(10).rateMmPerYear).toBeGreaterThan(0);
    expect(calculateSalt({ hardnessValue: 12, hardnessUnit: 'gpg', occupants: 3, softenerGrains: 32000 }).annualSaltKg).toBeGreaterThan(0);
    expect(calculateApplianceLifespan(20).washer!.saved).toBeGreaterThan(0);
  });

  it('covers wifi geometry, verdict thresholds and invalid QR input', () => {
    const wall = { a: { x: 100, y: 0 }, b: { x: 100, y: 300 }, material: 'concrete', attenuation: 15 };
    const segments = buildSegments([wall], []);
    expect(segments).toHaveLength(1);
    const result = calculateSignalFromSketch({ x: 0, y: 100 }, { x: 200, y: 100 }, [wall], []);
    expect(result.strengthPercent).toBeLessThan(100);
    expect(getVerdictColor(result.verdict)).toMatch(/^#/);
    expect(computeStreamingVerdict(100).basicBrowsing).toBeTruthy();
    expect(wifi('', 'secret', 'WPA', false)).toBe('');
  });
});
