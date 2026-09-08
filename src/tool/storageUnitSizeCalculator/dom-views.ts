import { evaluateStoragePlan } from './evaluator';
import type { StoragePlan, StorageZone } from './logic';
import type { StorageUnitSizeCalculatorUI } from './ui';

const number = (value: number, digits = 1): string => value.toLocaleString('en-US', { maximumFractionDigits: digits });

const areaLabel = (value: number): string => `${number(value)} m²`;

const zoneWidth = (area: number, total: number): number => (total > 0 ? Math.max(11, Math.min(70, (area / total) * 100)) : 0);

const statusCopy = (status: ReturnType<typeof evaluateStoragePlan>['status'], ui: StorageUnitSizeCalculatorUI['result']): { label: string; message: string } => {
  if (status === 'empty') return { label: ui.emptyStatus, message: ui.emptyMessage };
  if (status === 'tight') return { label: ui.tightStatus, message: ui.tightMessage };
  return { label: ui.readyStatus, message: ui.readyMessage };
};

const renderPlanHeader = (ui: StorageUnitSizeCalculatorUI, status: ReturnType<typeof evaluateStoragePlan>['status']): string => {
  const copy = statusCopy(status, ui.result);
  return `
    <div class="storage-tool-result-head">
      <div>
        <p class="storage-tool-eyebrow">${ui.result.title}</p>
        <p class="storage-tool-status -${status}" data-status>${copy.label}</p>
      </div>
      <p class="storage-tool-status-message" data-status-message>${copy.message}</p>
    </div>`;
};

const renderPlanScene = (plan: StoragePlan, ui: StorageUnitSizeCalculatorUI): string => {
  const totalZoneArea = plan.occupiedFloorM2 + plan.accessFloorM2;
  const boxes = zoneFor(plan, 'boxes');
  const furniture = zoneFor(plan, 'furniture');
  const lane = zoneFor(plan, 'lane');
  const accessible = plan.itemCount > 0;
  const emptyPlan = accessible ? '' : `<p class="storage-tool-empty-plan">${ui.result.emptyPlan}</p>`;
  return `
    <div class="storage-tool-plan-wrap">
      <div class="storage-tool-unit" role="img" aria-label="${ui.result.floorPlanLabel}">
        <div class="storage-tool-unit-top"><span>0</span><span>${areaLabel(plan.minimumSizeM2)}</span></div>
        <div class="storage-tool-floor-plan${accessible ? '' : ' storage-tool-floor-plan-empty'}">
          ${renderZone({ kind: 'boxes', area: boxes.areaM2, volume: boxes.volumeM3, total: totalZoneArea, label: ui.result.boxesZone })}
          ${renderZone({ kind: 'furniture', area: furniture.areaM2, volume: furniture.volumeM3, total: totalZoneArea, label: ui.result.furnitureZone })}
          ${renderLane(lane.areaM2, totalZoneArea, ui.result.laneZone)}
          ${emptyPlan}
        </div>
        <div class="storage-tool-unit-door"><span>${ui.result.packedLabel}</span><strong>${number(plan.packedVolumeM3, 2)} m³</strong></div>
      </div>
      <div class="storage-tool-plan-note"><span>${ui.result.areaLabel}</span><strong>${areaLabel(plan.targetFloorM2)}</strong><small>${ui.result.access} ${areaLabel(plan.accessFloorM2)}</small></div>
    </div>`;
};

const zoneFor = (plan: StoragePlan, kind: StoragePlan['zones'][number]['kind']): StorageZone => plan.zones.find((zone) => zone.kind === kind) ?? { kind, areaM2: 0, volumeM3: 0 };

const renderZone = (zone: { kind: 'boxes' | 'furniture'; area: number; volume: number; total: number; label: string }): string => `<div class="storage-tool-zone storage-tool-zone-${zone.kind}" style="--zone-size:${zoneWidth(zone.area, zone.total)}%"><span>${zone.label}</span><strong>${number(zone.volume, 2)} m³</strong></div>`;

const renderLane = (area: number, total: number, label: string): string => `<div class="storage-tool-zone storage-tool-zone-lane" style="--zone-size:${zoneWidth(area, total)}%"><span>${label}</span><strong>${areaLabel(area)}</strong></div>`;

const renderPlanMetrics = (plan: StoragePlan, ui: StorageUnitSizeCalculatorUI): string => `
    <div class="storage-tool-metrics">
      <div><span>${ui.result.minimum}</span><strong data-minimum>${areaLabel(plan.minimumSizeM2)}</strong><small>${ui.result.volumeLabel} ${number(plan.packedVolumeM3, 2)} m³</small></div>
      <div><span>${ui.result.comfortable}</span><strong data-comfortable>${areaLabel(plan.comfortableSizeM2)}</strong><small>${ui.result.access} ${areaLabel(plan.accessFloorM2)}</small></div>
    </div>`;

export const renderPlan = (plan: StoragePlan, ui: StorageUnitSizeCalculatorUI): string => {
  const evaluation = evaluateStoragePlan(plan);
  return renderPlanHeader(ui, evaluation.status) + renderPlanScene(plan, ui) + renderPlanMetrics(plan, ui);
};
