import type { Point, Segment, PlacedObject, PlacedDevice, SignalResult } from './logic';
import { calculateSignalFromSketch, getVerdictColor, computeStreamingVerdict } from './logic';
import { renderRouter, renderRays } from './sketch-render';
import { getUI } from './i18n-utils';

const CIRCUMFERENCE = 2 * Math.PI * 70;

function setText(id: string, val: string) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function setAttr(id: string, attr: string, val: string) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

function setStyle(id: string, prop: string, val: string) {
  const el = document.getElementById(id);
  if (el) (el as HTMLElement).style.setProperty(prop, val);
}

function updateRing(percent: number, color: string) {
  const offset = CIRCUMFERENCE - (CIRCUMFERENCE * percent) / 100;
  setAttr('sketch-ring-fill', 'stroke-dashoffset', String(offset));
  setAttr('sketch-ring-fill', 'stroke', color);
  setStyle('sketch-ring-pct', 'color', color);
  setText('sketch-ring-pct', `${percent}%`);
}

function getStatusCol(status: string, pct: number): string {
  if (pct >= 60) return '#22c55e';
  if (pct >= 30) return '#f59e0b';
  return '#ef4444';
}

function updateStreaming(result: ReturnType<typeof calculateSignalFromSketch>) {
  const keys = ['4kStreaming', 'onlineGaming', 'videoCalls', 'basicBrowsing'];
  const thresholds: Record<string, number> = { '4kStreaming': result.strengthPercent, onlineGaming: result.strengthPercent, videoCalls: result.strengthPercent, basicBrowsing: result.strengthPercent };
  keys.forEach((k) => {
    const el = document.getElementById(`sketch-badge-${k}`);
    if (!el) return;
    el.textContent = result.streamingVerdict[k];
    const col = getStatusCol(result.streamingVerdict[k], thresholds[k]);
    (el as HTMLElement).style.color = col;
    (el as HTMLElement).style.background = col + '14';
  });
}

function buildMiniBar(percent: number, color: string): string {
  const w = Math.max(4, Math.round((percent / 100) * 60));
  return `<svg width="64" height="6" style="flex-shrink:0"><rect width="64" height="6" rx="3" fill="var(--bg-muted)"/><rect width="${w}" height="6" rx="3" fill="${color}"/></svg>`;
}

function buildDeviceCard(dev: PlacedDevice, result: ReturnType<typeof calculateSignalFromSketch>): string {
  const color = getVerdictColor(result.verdict);
  const ui = getUI();
  return `
    <div class="sketch-device-card">
      <div class="sketch-device-header">
        <span class="sketch-device-dot" style="background:${color}"></span>
        <span class="sketch-device-name">${dev.name}</span>
        <span class="sketch-device-pct" style="color:${color}">${result.strengthPercent}%</span>
      </div>
      <div class="sketch-device-bar-row">
        ${buildMiniBar(result.strengthPercent, color)}
        <span class="sketch-device-range">${result.effectiveRange}${ui.labelMeters}</span>
      </div>
    </div>
  `;
}

function renderDevicePanel(devices: PlacedDevice[], router: Point, walls: Segment[], objects: PlacedObject[]) {
  const panel = document.getElementById('sketch-device-panel');
  if (!panel) return;
  const ui = getUI();
  panel.innerHTML = `<div class="sketch-device-section-title">${ui.labelPerDevice}</div>`;
  devices.forEach((dev) => {
    const result = calculateSignalFromSketch(router, dev, walls, objects);
    const div = document.createElement('div');
    div.innerHTML = buildDeviceCard(dev, result);
    panel.appendChild(div.firstElementChild as HTMLElement);
  });
}

function buildTips(walls: Segment[], objects: PlacedObject[], result: ReturnType<typeof calculateSignalFromSketch>): string[] {
  const ui = getUI();
  const tips: string[] = [];
  const concreteCount = walls.filter((w) => w.material === 'concrete').length;
  const metalCount = walls.filter((w) => w.material === 'metalDoor').length;
  const total = walls.length + objects.length;

  if (concreteCount > 0 || metalCount > 0) {
    tips.push(ui.tipMoveRouter);
  }
  if (total >= 3) {
    tips.push(ui.tipReduceObstacles);
  }
  if (result.verdict === 'dead' || result.verdict === 'poor') {
    tips.push(ui.tipElevateRouter);
  }
  if (objects.some((o) => o.material === 'aquarium')) {
    tips.push(ui.tipFishTank);
  }
  if (objects.some((o) => o.material === 'microwave')) {
    tips.push(ui.tipMicrowave);
  }
  return tips;
}

function renderTips(tips: string[]) {
  const area = document.getElementById('sketch-tip-area');
  if (!area) return;
  area.innerHTML = '';
  tips.forEach((text) => {
    const card = document.createElement('div');
    card.className = 'sketch-tip-card';
    card.innerHTML = `<div class="sketch-tip-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div><div class="sketch-tip-text">${text}</div>`;
    area.appendChild(card);
  });
}

function averageResults(results: ReturnType<typeof calculateSignalFromSketch>[]): SignalResult {
  const ui = getUI();
  const avgPct = Math.round(results.reduce((s, r) => s + r.strengthPercent, 0) / results.length);
  const avgRange = Math.round(results.reduce((s, r) => s + r.effectiveRange, 0) / results.length);
  let verdict: SignalResult['verdict'];
  if (avgPct >= 80) verdict = 'perfect';
  else if (avgPct >= 60) verdict = 'good';
  else if (avgPct >= 40) verdict = 'fair';
  else if (avgPct >= 20) verdict = 'poor';
  else verdict = 'dead';
  return {
    strengthPercent: avgPct,
    effectiveRange: avgRange,
    verdict,
    streamingVerdict: computeStreamingVerdict(avgPct, ui),
    rayCount: 1,
  };
}

export function updateDashboard(
  router: Point,
  devices: PlacedDevice[],
  walls: Segment[],
  objects: PlacedObject[]
) {
  if (devices.length === 0) return;

  const ui = getUI();
  const allResults = devices.map((dev) => calculateSignalFromSketch(router, dev, walls, objects));
  const avgResult = averageResults(allResults);
  const color = getVerdictColor(avgResult.verdict);

  updateRing(avgResult.strengthPercent, color);
  setText('sketch-range-val', `${avgResult.effectiveRange} ${ui.labelMeters}`);
  updateStreaming(avgResult);
  renderTips(buildTips(walls, objects, avgResult));
  renderDevicePanel(devices, router, walls, objects);
  renderRays(router, devices, walls, objects);
  renderRouter(router, color);

  const ring = document.getElementById('sketch-ring');
  if (ring) {
    ring.classList.remove('sketch-peak-anim', 'sketch-danger-anim');
    void ring.offsetWidth;
    if (avgResult.verdict === 'perfect') ring.classList.add('sketch-peak-anim');
    if (avgResult.verdict === 'dead') ring.classList.add('sketch-danger-anim');
  }
}
