import type { StorageInputs } from './logic';

export interface StorageUnitSizeCalculatorUI {
  defaults: StorageInputs;
  labels: {
    inventory: string;
    boxes: string;
    furniture: string;
    smallBoxes: string;
    mediumBoxes: string;
    largeBoxes: string;
    sofa: string;
    bed: string;
    wardrobe: string;
    desk: string;
    chair: string;
    accessLane: string;
    accessHint: string;
    quickScenarios: string;
    reset: string;
  };
  presets: Array<{ id: string; label: string; inputs: StorageInputs }>;
  accessOptions: Array<{ value: number; label: string }>;
  result: {
    title: string;
    minimum: string;
    comfortable: string;
    emptyStatus: string;
    readyStatus: string;
    tightStatus: string;
    emptyMessage: string;
    readyMessage: string;
    tightMessage: string;
    unit: string;
    access: string;
    boxesZone: string;
    furnitureZone: string;
    laneZone: string;
    floorPlanLabel: string;
    packedLabel: string;
    areaLabel: string;
    volumeLabel: string;
    emptyPlan: string;
  };
}
