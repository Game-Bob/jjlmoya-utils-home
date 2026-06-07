import type { Point } from './logic';
import { MATERIALS } from './logic';
import type { State, History } from './sketch-state';
import {
  ptToSvg,
  isWallTool,
  hitRouter,
  nearestDevice,
  renderDeviceSelection,
  removePreviewWall,
  updatePreviewWall,
} from './sketch-state';
import { renderObjects, renderWalls, renderRouter, renderDevices } from './sketch-render';
import { updateDashboard } from './sketch-render-dash';
import { addToHistory, saveState, renderZoom } from './sketch-actions';
import { spawnParticle } from './sketch-render';

function startSelect(s: State, p: Point, e: MouseEvent) {
  if (hitRouter(s, p)) {
    s.dragging = 'router';
    s.selectedDeviceId = null;
    renderDeviceSelection(s);
    s.dragOffset = { x: p.x - s.router.x, y: p.y - s.router.y };
    return;
  }
  const dev = nearestDevice(s.devices, p);
  if (dev) {
    s.selectedDeviceId = dev.id;
    s.dragging = `device:${dev.id}`;
    s.dragOffset = { x: p.x - dev.x, y: p.y - dev.y };
    renderDeviceSelection(s);
    return;
  }
  s.selectedDeviceId = null;
  renderDeviceSelection(s);
  s.dragging = 'pan';
  s.dragOffset = { x: e.clientX, y: e.clientY };
}

function placeObject(s: State, p: Point) {
  const m = MATERIALS[s.tool];
  if (!m) return;
  const id = `obj-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  s.objects.push({
    id,
    x: p.x,
    y: p.y,
    material: s.tool,
    attenuation: m.attenuation,
    width: 32,
    height: 32,
  });
  saveState(s);
  renderObjects(s.objects);
  updateDashboard(s.router, s.devices, s.walls, s.objects);
  spawnParticle(p.x, p.y, `+${s.tool}`);
}

export function handleMouseDown(s: State, svg: SVGSVGElement, e: MouseEvent) {
  const p = ptToSvg(svg, e.clientX, e.clientY, s.zoom);
  if (s.tool === 'select') {
    startSelect(s, p, e);
    return;
  }
  if (isWallTool(s.tool)) {
    s.drawing = true;
    s.drawStart = p;
    return;
  }
  placeObject(s, p);
}

export function handleMouseMove(s: State, svg: SVGSVGElement, e: MouseEvent) {
  if (!s.dragging && !s.drawing) return;
  if (s.dragging === 'pan') {
    const dx = e.clientX - s.dragOffset.x;
    const dy = e.clientY - s.dragOffset.y;
    s.panX += dx;
    s.panY += dy;
    s.dragOffset = { x: e.clientX, y: e.clientY };
    renderZoom(s);
    return;
  }
  const p = ptToSvg(svg, e.clientX, e.clientY, s.zoom);
  updateDrag(s, p);
}

export function handleMouseUp(s: State, svg: SVGSVGElement, h: History, e: MouseEvent) {
  if (s.drawing && isWallTool(s.tool)) {
    const p = ptToSvg(svg, e.clientX, e.clientY, s.zoom);
    const dx = p.x - s.drawStart.x;
    const dy = p.y - s.drawStart.y;
    if (Math.sqrt(dx * dx + dy * dy) > 5) {
      const m = MATERIALS[s.tool];
      s.walls.push({
        a: { ...s.drawStart },
        b: { ...p },
        material: s.tool,
        attenuation: m.attenuation,
      });
      saveState(s);
      addToHistory(h, s);
      renderWalls(s.walls);
      updateDashboard(s.router, s.devices, s.walls, s.objects);
    }
    removePreviewWall();
  }
  if (s.dragging) {
    s.dragging = null;
    saveState(s);
    addToHistory(h, s);
  }
  s.drawing = false;
}

export function updateDrag(s: State, p: Point) {
  if (s.dragging === 'router') {
    s.router.x = p.x - s.dragOffset.x;
    s.router.y = p.y - s.dragOffset.y;
    renderRouter(s.router);
    updateDashboard(s.router, s.devices, s.walls, s.objects);
    return;
  }
  if (s.dragging?.startsWith('device:')) {
    const id = s.dragging.slice(7);
    const dev = s.devices.find((d) => d.id === id);
    if (!dev) return;
    dev.x = p.x - s.dragOffset.x;
    dev.y = p.y - s.dragOffset.y;
    renderDevices(s.devices, s.router, s.walls, s.objects);
    updateDashboard(s.router, s.devices, s.walls, s.objects);
    renderDeviceSelection(s);
    return;
  }
  if (s.drawing && isWallTool(s.tool)) {
    updatePreviewWall(s.drawStart, p, MATERIALS[s.tool].color);
  }
}
