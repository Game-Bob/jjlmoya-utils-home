import type { State, Snapshot } from './sketch-state';
import {
  defaultState,
  loadState,
  ptToSvg,
  renderDeviceSelection,
  removePreviewWall,
} from './sketch-state';
import { renderWalls, renderObjects, renderRouter, renderDevices, hitObject, hitWall } from './sketch-render';
import { updateDashboard } from './sketch-render-dash';
import { initToolButtons, addToHistory, applySnapshot, renderZoom, saveState } from './sketch-actions';
import { handleMouseDown, handleMouseMove, handleMouseUp } from './sketch-events';

function initRender(s: State) {
  renderWalls(s.walls);
  renderObjects(s.objects);
  renderRouter(s.router);
  renderDevices(s.devices, s.router, s.walls, s.objects);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
  renderDeviceSelection(s);
  renderZoom(s);
}

function removeObj(s: State, h: { stack: Snapshot[]; pos: number }, p: Point) {
  const objIdx = s.objects.findIndex((o) => hitObject(o, p));
  if (objIdx < 0) return false;
  s.objects.splice(objIdx, 1);
  saveState(s);
  addToHistory(h, s);
  renderObjects(s.objects);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
  return true;
}

function removeWall(s: State, h: { stack: Snapshot[]; pos: number }, p: Point) {
  const wallIdx = s.walls.findIndex((w) => hitWall(w, p));
  if (wallIdx < 0) return false;
  s.walls.splice(wallIdx, 1);
  saveState(s);
  addToHistory(h, s);
  renderWalls(s.walls);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
  return true;
}

function bindCanvas(s: State, svg: SVGSVGElement, h: { stack: Snapshot[]; pos: number }, wrap: HTMLElement) {
  wrap.addEventListener('mousedown', (e) => {
    handleMouseDown(s, svg, e);
  });
  wrap.addEventListener('mousemove', (e) => {
    handleMouseMove(s, svg, e);
  });
  wrap.addEventListener('mouseup', (e) => {
    handleMouseUp(s, svg, h, e);
  });
  wrap.addEventListener('mouseleave', () => {
    if (s.dragging || s.drawing) {
      removePreviewWall();
      s.dragging = null;
      s.drawing = false;
      saveState(s);
    }
  });
  wrap.addEventListener('dblclick', (e) => {
    const p = ptToSvg(svg, e.clientX, e.clientY, s.zoom);
    if (removeObj(s, h, p)) return;
    removeWall(s, h, p);
  });
}

function bindKeyboard(s: State, h: { stack: Snapshot[]; pos: number }) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (h.pos <= 0) return;
      h.pos--;
      applySnapshot(s, h.stack[h.pos]);
      initRender(s);
      saveState(s);
    }
  });
}

export function initSketch() {
  const wrap = document.getElementById('sketch-canvas-wrap');
  if (!wrap) return;
  const svg = wrap.querySelector('svg') as SVGSVGElement;
  if (!svg) return;

  const state: State = loadState() || defaultState();
  const history = { stack: [] as Snapshot[], pos: -1 };
  addToHistory(history, state);

  initToolButtons(state, history);
  initRender(state);
  bindCanvas(state, svg, history, wrap);
  bindKeyboard(state, history);
}

export type { State };
