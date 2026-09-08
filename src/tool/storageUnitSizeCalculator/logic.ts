export interface StorageInputs {
  boxes: {
    small: number;
    medium: number;
    large: number;
  };
  furniture: {
    sofa: number;
    bed: number;
    wardrobe: number;
    desk: number;
    chair: number;
  };
  accessPercent: number;
}

export interface StorageZone {
  kind: 'boxes' | 'furniture' | 'lane';
  areaM2: number;
  volumeM3: number;
}

export interface StoragePlan {
  itemCount: number;
  packedVolumeM3: number;
  occupiedFloorM2: number;
  accessFloorM2: number;
  targetFloorM2: number;
  minimumSizeM2: number;
  comfortableSizeM2: number;
  zones: StorageZone[];
}

const BOXES = {
  small: { volumeM3: 0.03, footprintM2: 0.08, stackLayers: 4 },
  medium: { volumeM3: 0.06, footprintM2: 0.14, stackLayers: 3 },
  large: { volumeM3: 0.1, footprintM2: 0.2, stackLayers: 2 },
} as const;

const FURNITURE = {
  sofa: { volumeM3: 1.78, footprintM2: 1.98 },
  bed: { volumeM3: 1.28, footprintM2: 3.2 },
  wardrobe: { volumeM3: 1.44, footprintM2: 0.72 },
  desk: { volumeM3: 0.73, footprintM2: 0.98 },
  chair: { volumeM3: 0.36, footprintM2: 0.36 },
} as const;

const STANDARD_SIZES = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20];
const STORAGE_HEIGHT_M = 2.3;

const nonNegative = (value: number): number => Math.max(0, Math.round(Number.isFinite(value) ? value : 0));

const boundedPercent = (value: number): number => Math.min(60, Math.max(10, Number.isFinite(value) ? value : 25));

const nextSize = (target: number, floorAfter = 0): number => {
  const found = STANDARD_SIZES.find((size) => size >= target && size > floorAfter);
  return found ?? Math.ceil(Math.max(target, floorAfter + 1));
};

export const sanitizeInputs = (inputs: StorageInputs): StorageInputs => ({
  boxes: {
    small: nonNegative(inputs.boxes.small),
    medium: nonNegative(inputs.boxes.medium),
    large: nonNegative(inputs.boxes.large),
  },
  furniture: {
    sofa: nonNegative(inputs.furniture.sofa),
    bed: nonNegative(inputs.furniture.bed),
    wardrobe: nonNegative(inputs.furniture.wardrobe),
    desk: nonNegative(inputs.furniture.desk),
    chair: nonNegative(inputs.furniture.chair),
  },
  accessPercent: boundedPercent(inputs.accessPercent),
});

const boxTotals = (boxes: StorageInputs['boxes']): { volumeM3: number; floorM2: number; count: number } => {
  const entries = Object.entries(boxes) as Array<[keyof typeof BOXES, number]>;
  return entries.reduce(
    (totals, [kind, count]) => {
      const box = BOXES[kind];
      const safeCount = nonNegative(count);
      return {
        volumeM3: totals.volumeM3 + safeCount * box.volumeM3,
        floorM2: totals.floorM2 + (safeCount * box.footprintM2) / box.stackLayers,
        count: totals.count + safeCount,
      };
    },
    { volumeM3: 0, floorM2: 0, count: 0 },
  );
};

const furnitureTotals = (furniture: StorageInputs['furniture']): { volumeM3: number; floorM2: number; count: number } => {
  const entries = Object.entries(furniture) as Array<[keyof typeof FURNITURE, number]>;
  return entries.reduce(
    (totals, [kind, count]) => {
      const item = FURNITURE[kind];
      const safeCount = nonNegative(count);
      return {
        volumeM3: totals.volumeM3 + safeCount * item.volumeM3,
        floorM2: totals.floorM2 + safeCount * item.footprintM2,
        count: totals.count + safeCount,
      };
    },
    { volumeM3: 0, floorM2: 0, count: 0 },
  );
};

export const calculateStoragePlan = (rawInputs: StorageInputs): StoragePlan => {
  const inputs = sanitizeInputs(rawInputs);
  const boxes = boxTotals(inputs.boxes);
  const furniture = furnitureTotals(inputs.furniture);
  const packedVolumeM3 = boxes.volumeM3 + furniture.volumeM3;
  const occupiedFloorM2 = boxes.floorM2 + furniture.floorM2;
  const accessFloorM2 = occupiedFloorM2 * (inputs.accessPercent / 100);
  const volumeFloorM2 = packedVolumeM3 / STORAGE_HEIGHT_M;
  const targetFloorM2 = Math.max(occupiedFloorM2 + accessFloorM2, volumeFloorM2);
  const minimumSizeM2 = nextSize(targetFloorM2);
  const comfortableTarget = targetFloorM2 * 1.2;
  const comfortableSizeM2 = nextSize(comfortableTarget, minimumSizeM2);

  return {
    itemCount: boxes.count + furniture.count,
    packedVolumeM3,
    occupiedFloorM2,
    accessFloorM2,
    targetFloorM2,
    minimumSizeM2: packedVolumeM3 === 0 ? 0 : minimumSizeM2,
    comfortableSizeM2: packedVolumeM3 === 0 ? 0 : comfortableSizeM2,
    zones: [
      { kind: 'boxes', areaM2: boxes.floorM2, volumeM3: boxes.volumeM3 },
      { kind: 'furniture', areaM2: furniture.floorM2, volumeM3: furniture.volumeM3 },
      { kind: 'lane', areaM2: accessFloorM2, volumeM3: 0 },
    ],
  };
};
