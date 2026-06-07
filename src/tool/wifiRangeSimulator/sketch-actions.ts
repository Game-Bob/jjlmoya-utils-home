import type { PlacedDevice } from './logic';
import type { State, Snapshot, History } from './sketch-state';
import { saveState, renderDeviceSelection } from './sketch-state';
import { renderObjects, renderWalls, renderRouter, renderDevices, spawnParticle } from './sketch-render';
import { updateDashboard } from './sketch-render-dash';
import { getUI } from './i18n-utils';
export { saveState };

export function addToHistory(h: History, s: State) {
  if (h.pos < h.stack.length - 1) {
    h.stack = h.stack.slice(0, h.pos + 1);
  }
  const snap: Snapshot = {
    router: { ...s.router },
    devices: s.devices.map((d) => ({ ...d })),
    walls: s.walls.map((w) => ({ ...w, a: { ...w.a }, b: { ...w.b } })),
    objects: s.objects.map((o) => ({ ...o })),
    nextId: s.nextId,
    zoom: s.zoom,
    panX: s.panX,
    panY: s.panY,
  };
  h.stack.push(snap);
  if (h.stack.length > 50) h.stack.shift();
  h.pos = h.stack.length - 1;
}

export function applySnapshot(s: State, snap: Snapshot) {
  s.router = { ...snap.router };
  s.devices = snap.devices.map((d) => ({ ...d }));
  s.walls = snap.walls.map((w) => ({ ...w, a: { ...w.a }, b: { ...w.b } }));
  s.objects = snap.objects.map((o) => ({ ...o }));
  s.nextId = snap.nextId;
  s.zoom = typeof snap.zoom === 'number' ? snap.zoom : 1;
  s.panX = typeof snap.panX === 'number' ? snap.panX : 0;
  s.panY = typeof snap.panY === 'number' ? snap.panY : 0;
}

export function renderZoom(s: State) {
  const world = document.getElementById('sketch-world');
  if (world) {
    world.style.transform = `translate(${s.panX}px, ${s.panY}px) scale(${s.zoom})`;
  }
  const track = document.getElementById('sketch-scale-track');
  if (track) {
    const segPx = Math.max(6, 10 * s.zoom);
    track.style.width = (segPx * 5) + 'px';
    track.querySelectorAll('.sketch-scale-segment').forEach((el) => {
      (el as HTMLElement).style.width = segPx + 'px';
    });
  }
}

export function getNextDeviceId(s: State): number {
  const used = new Set(s.devices.map((d) => d.id));
  let n = 1;
  while (used.has(`dev-${n}`)) n++;
  return n;
}

export function addDevice(s: State, h: History) {
  const ui = getUI();
  if (s.devices.length >= 4) {
    spawnParticle(400, 250, ui.labelMaxDevices);
    return;
  }
  const id = getNextDeviceId(s);
  s.nextId = id + 1;
  const dev: PlacedDevice = {
    id: `dev-${id}`,
    x: 680,
    y: 160 + (s.devices.length * 80),
    name: `${ui.labelDevicePrefix} ${s.devices.length + 1}`,
  };
  s.devices.push(dev);
  saveState(s);
  addToHistory(h, s);
  renderDevices(s.devices, s.router, s.walls, s.objects);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
  renderDeviceSelection(s);
}

function doUndo(s: State, h: History) {
  if (h.pos <= 0) return;
  h.pos--;
  applySnapshot(s, h.stack[h.pos]);
  renderWalls(s.walls);
  renderObjects(s.objects);
  renderRouter(s.router);
  renderDevices(s.devices, s.router, s.walls, s.objects);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
  renderDeviceSelection(s);
  renderZoom(s);
  saveState(s);
}

function doClear(s: State, h: History) {
  const ui = getUI();
  s.walls = [];
  s.objects = [];
  s.devices = [{ id: 'dev-1', x: 680, y: 250, name: `${ui.labelDevicePrefix} 1` }];
  s.nextId = 2;
  s.selectedDeviceId = null;
  saveState(s);
  addToHistory(h, s);
  renderWalls(s.walls);
  renderObjects(s.objects);
  renderDevices(s.devices, s.router, s.walls, s.objects);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
  renderDeviceSelection(s);
}

function doClearWalls(s: State, h: History) {
  s.walls = [];
  saveState(s);
  addToHistory(h, s);
  renderWalls(s.walls);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
}

function doClearObjects(s: State, h: History) {
  s.objects = [];
  saveState(s);
  addToHistory(h, s);
  renderObjects(s.objects);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
}

function setTool(s: State, tool: string) {
  s.tool = tool;
  document.querySelectorAll('[data-tool]').forEach((b) => b.classList.remove('active'));
  const active = document.querySelector(`[data-tool="${tool}"]`);
  if (active) active.classList.add('active');
  const wrap = document.getElementById('sketch-canvas-wrap');
  if (wrap) wrap.style.cursor = tool === 'select' ? 'default' : 'crosshair';
}

const toolMap: Record<string, (s: State, h: History) => void> = {
  zoomIn: (s) => {
    s.zoom = Math.min(3, Math.round((s.zoom + 0.25) * 100) / 100);
    renderZoom(s);
    saveState(s);
  },
  zoomOut: (s) => {
    s.zoom = Math.max(0.5, Math.round((s.zoom - 0.25) * 100) / 100);
    renderZoom(s);
    saveState(s);
  },
  undo: doUndo,
  addDevice,
  clearWalls: doClearWalls,
  clearObjects: doClearObjects,
  clear: doClear,
};

export function initToolButtons(s: State, h: History) {
  document.querySelectorAll('[data-tool]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tool = (btn as HTMLElement).dataset.tool;
      if (!tool) return;
      if (toolMap[tool]) {
        toolMap[tool](s, h);
      } else {
        setTool(s, tool);
      }
    });
  });
}
