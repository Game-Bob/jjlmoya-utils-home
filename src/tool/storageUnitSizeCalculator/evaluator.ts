import type { StoragePlan } from './logic';

export type StoragePlanStatus = 'empty' | 'ready' | 'tight';

export interface StorageEvaluation {
  status: StoragePlanStatus;
  minimumUtilization: number;
}

export const evaluateStoragePlan = (plan: StoragePlan): StorageEvaluation => {
  if (plan.itemCount === 0) return { status: 'empty', minimumUtilization: 0 };
  const minimumUtilization = Math.round((plan.targetFloorM2 / plan.minimumSizeM2) * 100);
  const status = minimumUtilization > 85 ? 'tight' : 'ready';
  return { status, minimumUtilization };
};
