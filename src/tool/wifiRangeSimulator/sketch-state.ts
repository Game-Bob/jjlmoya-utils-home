import type { Point, Segment, PlacedDevice, PlacedObject } from './logic';

export interface State {
  tool: string;
  drawing: boolean;
  drawStart: Point;
  router: Point;
  devices: PlacedDevice[];
  selectedDeviceId: string | null;
  walls: Segment[];
  objects: PlacedObject[];
  dragging: string | null;
  dragOffset: Point;
  nextId: number;
  zoom: number;
  panX: number;
  panY: number;
}

export interface Snapshot {
  router: Point;
  devices: PlacedDevice[];
  walls: Segment[];
  objects: PlacedObject[];
  nextId: number;
  zoom: number;
  panX: number;
  panY: number;
}

export interface History {
  stack: Snapshot[];
  pos: number;
}

export function defaultState(): State {
  return {
    tool: 'select',
    drawing: false,
    drawStart: { x: 0, y: 0 },
    router: { x: 150, y: 250 },
    devices: [{ id: 'dev-1', x: 400, y: 250, name: 'Device 1' }],
    selectedDeviceId: null,
    walls: [],
    objects: [],
    dragging: null,
    dragOffset: { x: 0, y: 0 },
    nextId: 2,
    zoom: 1.5,
    panX: 0,
    panY: 0,
  };
}

export function saveState(s: State): void {
  const payload: Snapshot = {
    router: { ...s.router },
    devices: s.devices.map((d) => ({ ...d })),
    walls: s.walls.map((w) => ({ ...w, a: { ...w.a }, b: { ...w.b } })),
    objects: s.objects.map((o) => ({ ...o })),
    nextId: s.nextId,
    zoom: s.zoom,
    panX: s.panX,
    panY: s.panY,
  };
  localStorage.setItem('wifi-sketch-v1', JSON.stringify(payload));
}

function dedupeDevices(devices: PlacedDevice[]): PlacedDevice[] {
  const seen = new Set<string>();
  let next = 1;
  return devices.map((d) => {
    if (!seen.has(d.id)) {
      seen.add(d.id);
      return d;
    }
    while (seen.has(`dev-${next}`)) next++;
    const newId = `dev-${next}`;
    seen.add(newId);
    return { ...d, id: newId };
  });
}

export function loadState(): State | null {
  const raw = localStorage.getItem('wifi-sketch-v1');
  if (!raw) return null;
  try {
    const snap = JSON.parse(raw) as Snapshot;
    const devices = dedupeDevices(snap.devices);
    return {
      tool: 'select',
      drawing: false,
      drawStart: { x: 0, y: 0 },
      router: snap.router,
      devices,
      selectedDeviceId: null,
      walls: snap.walls,
      objects: snap.objects,
      dragging: null,
      dragOffset: { x: 0, y: 0 },
      nextId: snap.nextId,
      zoom: typeof snap.zoom === 'number' ? snap.zoom : 1,
      panX: typeof snap.panX === 'number' ? snap.panX : 0,
      panY: typeof snap.panY === 'number' ? snap.panY : 0,
    };
  } catch {
    return null;
  }
}

export function ptToSvg(svg: SVGSVGElement, clientX: number, clientY: number, zoom: number): Point {
  const rect = svg.getBoundingClientRect();
  return {
    x: (clientX - rect.left) / zoom,
    y: (clientY - rect.top) / zoom,
  };
}

export function isWallTool(tool: string): boolean {
  return ['drywall', 'brick', 'concrete', 'stoneWall'].includes(tool);
}

export function dist(a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function hitRouter(s: State, p: Point): boolean {
  return dist(p, s.router) < 22;
}

export function nearestDevice(devices: PlacedDevice[], p: Point): PlacedDevice | null {
  let nearest: PlacedDevice | null = null;
  let nearestDist = Infinity;
  for (const dev of devices) {
    const d = dist(p, dev);
    if (d < nearestDist) {
      nearestDist = d;
      nearest = dev;
    }
  }
  if (nearestDist > 50) return null;
  return nearest;
}

export function renderDeviceSelection(s: State) {
  document.querySelectorAll('.sketch-device-selected').forEach((el) => {
    el.remove();
  });
  if (!s.selectedDeviceId) return;
  const dev = s.devices.find((d) => d.id === s.selectedDeviceId);
  if (!dev) return;
  const layer = document.getElementById('sketch-objs-layer');
  if (!layer) return;
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', String(dev.x));
  circle.setAttribute('cy', String(dev.y));
  circle.setAttribute('r', '30');
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', '#0ea5e9');
  circle.setAttribute('stroke-width', '3');
  circle.setAttribute('stroke-dasharray', '4 2');
  circle.setAttribute('opacity', '0.8');
  circle.setAttribute('class', 'sketch-device-selected');
  circle.setAttribute('pointer-events', 'none');
  layer.appendChild(circle);
}

export function removePreviewWall() {
  const preview = document.getElementById('sketch-draw-line');
  if (preview) preview.setAttribute('opacity', '0');
}

export function updatePreviewWall(start: Point, end: Point, material: string) {
  const preview = document.getElementById('sketch-draw-line');
  if (!preview) return;
  preview.setAttribute('x1', String(start.x));
  preview.setAttribute('y1', String(start.y));
  preview.setAttribute('x2', String(end.x));
  preview.setAttribute('y2', String(end.y));
  preview.setAttribute('stroke', material);
  preview.setAttribute('opacity', '0.6');
}
