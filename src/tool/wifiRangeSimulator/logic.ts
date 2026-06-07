export interface Point {
  x: number;
  y: number;
}

export interface Segment {
  a: Point;
  b: Point;
  material: string;
  attenuation: number;
}

export interface PlacedObject {
  id: string;
  x: number;
  y: number;
  material: string;
  attenuation: number;
  width: number;
  height: number;
}

export interface PlacedDevice {
  id: string;
  x: number;
  y: number;
  name: string;
}

export interface SignalResult {
  strengthPercent: number;
  effectiveRange: number;
  verdict: 'perfect' | 'good' | 'fair' | 'poor' | 'dead';
  streamingVerdict: Record<string, string>;
  rayCount: number;
}

export const MATERIALS: Record<string, { attenuation: number; color: string }> = {
  drywall: { attenuation: 3, color: '#e7e5e4' },
  brick: { attenuation: 8, color: '#a16207' },
  concrete: { attenuation: 15, color: '#57534e' },
  stoneWall: { attenuation: 22, color: '#44403c' },
  woodDoor: { attenuation: 4, color: '#92400e' },
  metalDoor: { attenuation: 18, color: '#334155' },
  window: { attenuation: 2, color: '#bfdbfe' },
  fridge: { attenuation: 10, color: '#94a3b8' },
  aquarium: { attenuation: 12, color: '#0ea5e9' },
  microwave: { attenuation: 5, color: '#475569' },
  mirror: { attenuation: 6, color: '#c0c0c0' },
  furniture: { attenuation: 5, color: '#78350f' },
};

function dist(a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function sub(a: Point, b: Point): Point {
  return { x: a.x - b.x, y: a.y - b.y };
}

function normalize(v: Point): Point {
  const len = Math.sqrt(v.x * v.x + v.y * v.y);
  if (len < 1e-9) return { x: 0, y: 0 };
  return { x: v.x / len, y: v.y / len };
}

function intersectRayWithSegment(origin: Point, dir: Point, seg: Segment): { point: Point; d: number } | null {
  const segDir = sub(seg.b, seg.a);
  const rxs = dir.x * segDir.y - dir.y * segDir.x;
  if (Math.abs(rxs) < 1e-9) return null;
  const qp = sub(seg.a, origin);
  const t = (qp.x * segDir.y - qp.y * segDir.x) / rxs;
  const u = (qp.x * dir.y - qp.y * dir.x) / rxs;
  if (t > 0 && u >= 0 && u <= 1) {
    return { point: { x: origin.x + t * dir.x, y: origin.y + t * dir.y }, d: t };
  }
  return null;
}

function getObjectSegments(obj: PlacedObject): Segment[] {
  const hw = obj.width / 2;
  const hh = obj.height / 2;
  const tl = { x: obj.x - hw, y: obj.y - hh };
  const tr = { x: obj.x + hw, y: obj.y - hh };
  const br = { x: obj.x + hw, y: obj.y + hh };
  const bl = { x: obj.x - hw, y: obj.y + hh };
  return [
    { a: tl, b: tr, material: obj.material, attenuation: obj.attenuation },
    { a: tr, b: br, material: obj.material, attenuation: obj.attenuation },
    { a: br, b: bl, material: obj.material, attenuation: obj.attenuation },
    { a: bl, b: tl, material: obj.material, attenuation: obj.attenuation },
  ];
}

function findAllHits(origin: Point, dir: Point, segments: Segment[], maxDist: number) {
  const hits: { point: Point; seg: Segment; d: number }[] = [];
  for (const seg of segments) {
    const hit = intersectRayWithSegment(origin, dir, seg);
    if (hit && hit.d > 1 && hit.d < maxDist) {
      hits.push({ point: hit.point, seg, d: hit.d });
    }
  }
  hits.sort((a, b) => a.d - b.d);
  return hits;
}

function castDirectRay(router: Point, device: Point, segments: Segment[]): number {
  const directDist = dist(router, device);
  const dir = normalize(sub(device, router));
  const hits = findAllHits(router, dir, segments, directDist);
  return hits.reduce((sum, h) => sum + h.seg.attenuation, 0);
}

export function buildSegments(walls: Segment[], objects: PlacedObject[]): Segment[] {
  const segs: Segment[] = [...walls];
  for (const obj of objects) {
    segs.push(...getObjectSegments(obj));
  }
  return segs;
}

function computeVerdict(percent: number): SignalResult['verdict'] {
  if (percent >= 80) return 'perfect';
  if (percent >= 60) return 'good';
  if (percent >= 40) return 'fair';
  if (percent >= 20) return 'poor';
  return 'dead';
}

function streamStatus(pct: number, thresholds: number[], labels: string[]): string {
  for (let i = 0; i < thresholds.length; i++) {
    if (pct >= thresholds[i]) return labels[i];
  }
  return labels[labels.length - 1];
}

function streaming4K(pct: number, labels: string[]): string {
  return streamStatus(pct, [70, 40], labels);
}

function streamingGaming(pct: number, labels: string[]): string {
  return streamStatus(pct, [60, 30], labels);
}

function streamingCalls(pct: number, labels: string[]): string {
  return streamStatus(pct, [50, 25], labels);
}

function streamingBrowsing(pct: number, labels: string[]): string {
  return streamStatus(pct, [20], labels);
}

const DEFAULT_STATUS_LABELS = {
  statusPerfect: 'Perfect',
  statusGood: 'Good',
  statusFair: 'Fair',
  statusPoor: 'Poor',
  statusImpossible: 'Impossible',
  statusLowLatency: 'Low Latency',
  statusLagWarning: 'Lag Warning',
  statusDisconnect: 'Disconnect',
  statusStable: 'Stable',
  statusPixelated: 'Pixelated',
  statusDropped: 'Dropped',
  statusPass: 'Pass',
  statusUnusable: 'Unusable',
};

export function computeStreamingVerdict(pct: number, labels?: typeof DEFAULT_STATUS_LABELS): Record<string, string> {
  const l = labels || DEFAULT_STATUS_LABELS;
  return {
    '4kStreaming': streaming4K(pct, [l.statusPerfect, l.statusGood, l.statusImpossible]),
    onlineGaming: streamingGaming(pct, [l.statusLowLatency, l.statusLagWarning, l.statusDisconnect]),
    videoCalls: streamingCalls(pct, [l.statusStable, l.statusPixelated, l.statusDropped]),
    basicBrowsing: streamingBrowsing(pct, [l.statusPass, l.statusUnusable]),
  };
}

export function calculateSignalFromSketch(
  router: Point,
  device: Point,
  walls: Segment[],
  objects: PlacedObject[]
): SignalResult {
  const segments = buildSegments(walls, objects);
  const directDist = dist(router, device);

  const distanceLoss = Math.min(70, directDist / 8);
  const obstacleLoss = castDirectRay(router, device, segments);
  const totalLoss = Math.min(100, distanceLoss + obstacleLoss);
  const strengthPercent = Math.max(0, Math.round(100 - totalLoss));

  const effectiveRange = Math.max(0, Math.round(directDist / 10));
  const verdict = computeVerdict(strengthPercent);

  return {
    strengthPercent,
    effectiveRange,
    verdict,
    streamingVerdict: computeStreamingVerdict(strengthPercent),
    rayCount: 1,
  };
}

export function getVerdictColor(verdict: SignalResult['verdict']): string {
  switch (verdict) {
    case 'perfect':
      return '#22c55e';
    case 'good':
      return '#84cc16';
    case 'fair':
      return '#f59e0b';
    case 'poor':
      return '#f97316';
    case 'dead':
      return '#ef4444';
  }
}
