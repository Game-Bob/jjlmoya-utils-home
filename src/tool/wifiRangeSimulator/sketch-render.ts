import type { Point, Segment, PlacedObject, PlacedDevice } from './logic';
import { calculateSignalFromSketch, getVerdictColor, MATERIALS } from './logic';
import { buildDeviceSVG } from './sketch-render-device';

export function renderWalls(walls: Segment[]) {
  const layer = document.getElementById('sketch-walls-layer');
  if (!layer) return;
  layer.innerHTML = '';
  walls.forEach((wall) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', String(wall.a.x));
    line.setAttribute('y1', String(wall.a.y));
    line.setAttribute('x2', String(wall.b.x));
    line.setAttribute('y2', String(wall.b.y));
    line.setAttribute('stroke', MATERIALS[wall.material].color);
    line.setAttribute('stroke-width', '6');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('class', 'sketch-wall-line');
    layer.appendChild(line);
  });
}

function buildObjRect(g: SVGGElement, obj: PlacedObject) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', String(-obj.width / 2));
  rect.setAttribute('y', String(-obj.height / 2));
  rect.setAttribute('width', String(obj.width));
  rect.setAttribute('height', String(obj.height));
  rect.setAttribute('rx', '4');
  rect.setAttribute('fill', MATERIALS[obj.material].color);
  rect.setAttribute('stroke', 'rgba(0,0,0,0.15)');
  rect.setAttribute('stroke-width', '1');
  g.appendChild(rect);
}

function buildObjLabel(g: SVGGElement, obj: PlacedObject) {
  const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  txt.setAttribute('y', '4');
  txt.setAttribute('text-anchor', 'middle');
  txt.setAttribute('fill', '#fff');
  txt.setAttribute('font-size', '7');
  txt.setAttribute('font-weight', '700');
  txt.setAttribute('style', 'text-shadow:0 1px 2px rgba(0,0,0,0.4);pointer-events:none');
  txt.textContent = `${obj.attenuation}dB`;
  g.appendChild(txt);
}

export function renderObjects(objects: PlacedObject[]) {
  const layer = document.getElementById('sketch-objs-layer');
  if (!layer) return;
  const existing = layer.querySelectorAll('[data-obj-id]');
  existing.forEach((el) => el.remove());
  objects.forEach((obj) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${obj.x}, ${obj.y})`);
    g.setAttribute('class', 'sketch-obj-group');
    g.dataset.objId = obj.id;
    buildObjRect(g, obj);
    buildObjLabel(g, obj);
    layer.appendChild(g);
  });
}

export function renderRouter(router: Point, color?: string) {
  const g = document.getElementById('sketch-router-group');
  if (g) g.setAttribute('transform', `translate(${router.x}, ${router.y})`);
  if (color) {
    const glow = document.getElementById('sketch-router-glow');
    if (glow) glow.setAttribute('stroke', color);
  }
}

export function renderDevices(devices: PlacedDevice[], router: Point, walls: Segment[], objects: PlacedObject[]) {
  const layer = document.getElementById('sketch-objs-layer');
  if (!layer) return;
  const existing = layer.querySelectorAll('[data-device-id]');
  existing.forEach((el) => el.remove());

  devices.forEach((dev) => {
    const result = calculateSignalFromSketch(router, dev, walls, objects);
    const color = getVerdictColor(result.verdict);
    const svgEl = buildDeviceSVG(dev, color);
    layer.appendChild(svgEl);
  });
}

export function renderRays(router: Point, devices: PlacedDevice[], walls: Segment[], objects: PlacedObject[]) {
  const layer = document.getElementById('sketch-rays-layer');
  if (!layer) return;
  layer.innerHTML = '';

  devices.forEach((dev) => {
    const result = calculateSignalFromSketch(router, dev, walls, objects);
    const color = getVerdictColor(result.verdict);
    const dx = dev.x - router.x;
    const dy = dev.y - router.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    const spread = 0.06;

    [ -1, 0, 1 ].forEach((offset) => {
      const a = angle + offset * spread;
      const ex = router.x + Math.cos(a) * len;
      const ey = router.y + Math.sin(a) * len;
      const d = `M ${router.x} ${router.y} L ${ex} ${ey}`;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', color);
      path.setAttribute('stroke-width', '1.5');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('opacity', String(0.25 + Math.abs(offset) * 0.15));
      layer.appendChild(path);
    });
  });
}

export function spawnParticle(x: number, y: number, text: string) {
  const wrap = document.getElementById('sketch-canvas-wrap');
  if (!wrap) return;
  const p = document.createElement('span');
  p.className = 'sketch-particle';
  p.textContent = text;
  const rect = wrap.getBoundingClientRect();
  p.style.left = `${x - rect.left}px`;
  p.style.top = `${y - rect.top}px`;
  wrap.appendChild(p);
  setTimeout(() => p.remove(), 900);
}

export function hitObject(obj: PlacedObject, p: Point): boolean {
  const hw = obj.width / 2;
  const hh = obj.height / 2;
  return p.x >= obj.x - hw && p.x <= obj.x + hw && p.y >= obj.y - hh && p.y <= obj.y + hh;
}

export function hitWall(wall: Segment, p: Point): boolean {
  const d = dist(wall.a, wall.b);
  const d1 = dist(p, wall.a);
  const d2 = dist(p, wall.b);
  return Math.abs(d - (d1 + d2)) < 8;
}

export function hitDevice(dev: PlacedDevice, p: Point): boolean {
  return dist(p, dev) < 35;
}

function dist(a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}
