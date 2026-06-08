import type { LightingResult } from './logic';

interface PlanConfig {
  widthM: number;
  lengthM: number;
  optimalBulbs: number;
  luxRatio: number;
  ambiance: number;
  status: 'optimal' | 'insufficient' | 'excess';
}

interface DialConfig {
  value: number;
  target: number;
  max: number;
  label: string;
}

function addRect(svg: SVGSVGElement, cfg: { x: number; y: number; w: number; h: number; fill: string; stroke: string; strokeWidth: number }) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', String(cfg.x));
  rect.setAttribute('y', String(cfg.y));
  rect.setAttribute('width', String(cfg.w));
  rect.setAttribute('height', String(cfg.h));
  rect.setAttribute('rx', '16');
  rect.setAttribute('fill', cfg.fill);
  rect.setAttribute('stroke', cfg.stroke);
  rect.setAttribute('stroke-width', String(cfg.strokeWidth));
  svg.appendChild(rect);
}

function addGlow(svg: SVGSVGElement, cfg: { cx: number; cy: number; color: string; opacity: number; luxRatio: number; ambiance: number }) {
  const radius = (6 + cfg.luxRatio * 18) * cfg.ambiance;
  const gradientId = `glow-${cfg.cx}-${cfg.cy}`.replace(/\./g, '_');
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const radial = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
  radial.setAttribute('id', gradientId);
  radial.setAttribute('cx', '50%');
  radial.setAttribute('cy', '50%');
  radial.setAttribute('r', '50%');
  const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', cfg.color);
  stop1.setAttribute('stop-opacity', String(cfg.opacity * 0.6));
  const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', cfg.color);
  stop2.setAttribute('stop-opacity', '0');
  radial.appendChild(stop1);
  radial.appendChild(stop2);
  defs.appendChild(radial);
  svg.appendChild(defs);
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', String(cfg.cx));
  circle.setAttribute('cy', String(cfg.cy));
  circle.setAttribute('r', String(radius));
  circle.setAttribute('fill', `url(#${gradientId})`);
  circle.setAttribute('pointer-events', 'none');
  svg.appendChild(circle);
}

function addFixture(svg: SVGSVGElement, cfg: { cx: number; cy: number; color: string; opacity: number }) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', String(cfg.cx));
  circle.setAttribute('cy', String(cfg.cy));
  circle.setAttribute('r', '3');
  circle.setAttribute('fill', cfg.color);
  circle.setAttribute('opacity', String(cfg.opacity));
  svg.appendChild(circle);
}

function addOverlay(svg: SVGSVGElement, cfg: { x: number; y: number; w: number; h: number; opacity: number }) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', String(cfg.x));
  rect.setAttribute('y', String(cfg.y));
  rect.setAttribute('width', String(cfg.w));
  rect.setAttribute('height', String(cfg.h));
  rect.setAttribute('rx', '8');
  rect.setAttribute('fill', `rgba(0,0,0,${cfg.opacity})`);
  rect.setAttribute('pointer-events', 'none');
  svg.appendChild(rect);
}

function getAmbianceColor(ambiance: number): string {
  if (ambiance < 0.9) return '#f59e0b';
  if (ambiance > 1.1) return '#fff';
  return '#facc15';
}

function getPositions(count: number, w: number, h: number): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  const pad = 20;
  const effW = w - pad * 2;
  const effH = h - pad * 2;
  if (count <= 1) {
    positions.push({ x: w / 2, y: h / 2 });
    return positions;
  }
  const cols = Math.ceil(Math.sqrt(count * (effW / effH)));
  let rows = Math.ceil(count / cols);
  if (rows * cols < count) rows += 1;
  const cellW = effW / cols;
  const cellH = effH / rows;
  for (let i = 0; i < count; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const x = pad + cellW * c + cellW / 2;
    const y = pad + cellH * r + cellH / 2;
    positions.push({ x, y });
  }
  return positions;
}

function drawFixtures(svg: SVGSVGElement, cfg: PlanConfig, origin: { cx: number; cy: number; rx: number; ry: number }) {
  const w = origin.rx * 2;
  const h = origin.ry * 2;
  const opacity = 0.6 + cfg.luxRatio * 0.4;
  const haloColor = getAmbianceColor(cfg.ambiance);
  const positions = getPositions(cfg.optimalBulbs, w, h);
  positions.forEach((p) => {
    const bx = origin.cx - origin.rx + p.x;
    const by = origin.cy - origin.ry + p.y;
    addGlow(svg, { cx: bx, cy: by, color: haloColor, opacity, luxRatio: cfg.luxRatio, ambiance: cfg.ambiance });
    addFixture(svg, { cx: bx, cy: by, color: '#fff', opacity });
  });
}

export function drawPlan(svg: SVGSVGElement, cfg: PlanConfig) {
  svg.innerHTML = '';
  const maxDim = Math.max(cfg.widthM, cfg.lengthM);
  const scale = 280 / maxDim;
  const w = cfg.widthM * scale;
  const h = cfg.lengthM * scale;
  const cx = 150;
  const cy = 100;
  const rx = w / 2;
  const ry = h / 2;
  addRect(svg, { x: 0, y: 0, w: 300, h: 200, fill: '#ffffff', stroke: '#ffffff', strokeWidth: 0 });
  const opacity = Math.min(0.85, Math.max(0, 1 - cfg.luxRatio));
  addOverlay(svg, { x: cx - rx, y: cy - ry, w, h, opacity });
  drawFixtures(svg, cfg, { cx, cy, rx, ry });
}

function addDialArc(svg: SVGSVGElement, cfg: { radius: number; color: string; dash: string; offset: number }) {
  const cx = 60;
  const cy = 55;
  const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  arc.setAttribute('d', `M ${cx - cfg.radius} ${cy} A ${cfg.radius} ${cfg.radius} 0 0 1 ${cx + cfg.radius} ${cy}`);
  arc.setAttribute('fill', 'none');
  arc.setAttribute('stroke', cfg.color);
  arc.setAttribute('stroke-width', '8');
  arc.setAttribute('stroke-linecap', 'round');
  arc.setAttribute('stroke-dasharray', cfg.dash);
  if (cfg.offset !== 0) arc.setAttribute('stroke-dashoffset', String(cfg.offset));
  svg.appendChild(arc);
}

function addDialText(svg: SVGSVGElement, cfg: { x: number; y: number; text: string; size: string; color: string; weight: string }) {
  const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  t.setAttribute('x', String(cfg.x));
  t.setAttribute('y', String(cfg.y));
  t.setAttribute('text-anchor', 'middle');
  t.setAttribute('fill', cfg.color);
  t.setAttribute('font-size', cfg.size);
  t.setAttribute('font-weight', cfg.weight);
  t.textContent = cfg.text;
  svg.appendChild(t);
}

function getDialColor(value: number, target: number): string {
  const minOk = target * 0.9;
  const maxOk = target * 1.3;
  if (value >= minOk && value <= maxOk) return '#22c55e';
  if (value < minOk) return '#f59e0b';
  return '#ef4444';
}

export function drawDial(svg: SVGSVGElement, cfg: DialConfig) {
  svg.innerHTML = '';
  const radius = 45;
  const arcLen = Math.PI * radius;
  const minOk = cfg.target * 0.9;
  const maxOk = cfg.target * 1.3;
  const minOkLen = (minOk / cfg.max) * arcLen;
  const maxOkLen = (maxOk / cfg.max) * arcLen;
  const valueLen = (cfg.value / cfg.max) * arcLen;
  addDialArc(svg, { radius, color: 'var(--border-color)', dash: `${minOkLen} ${arcLen - minOkLen}`, offset: 0 });
  addDialArc(svg, { radius, color: 'rgba(34, 197, 94, 0.2)', dash: `${maxOkLen - minOkLen} ${arcLen - (maxOkLen - minOkLen)}`, offset: -minOkLen });
  addDialArc(svg, { radius, color: 'var(--border-color)', dash: `${arcLen - maxOkLen} ${maxOkLen}`, offset: -maxOkLen });
  addDialArc(svg, { radius, color: getDialColor(cfg.value, cfg.target), dash: `${valueLen} ${arcLen - valueLen}`, offset: 0 });
  addDialText(svg, { x: 60, y: 53, text: String(Math.round(cfg.value)), size: '12', color: 'var(--text-main)', weight: '700' });
  addDialText(svg, { x: 60, y: 65, text: cfg.label, size: '7', color: 'var(--text-muted)', weight: '500' });
}

export function drawBulbs(container: HTMLElement, optimal: number) {
  container.innerHTML = '';
  const maxVisible = Math.min(optimal, 20);
  const activeColor = '#facc15';
  for (let i = 0; i < maxVisible; i++) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.style.filter = 'drop-shadow(0 0 3px rgba(250, 204, 21, 0.5))';
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z');
    path.setAttribute('fill', activeColor);
    path.setAttribute('stroke', activeColor);
    path.setAttribute('stroke-width', '1');
    svg.appendChild(path);
    container.appendChild(svg);
  }
  if (optimal > maxVisible) {
    const span = document.createElement('span');
    span.style.cssText = 'font-size:0.75rem;color:var(--text-muted);align-self:center;';
    span.textContent = `+${optimal - maxVisible}`;
    container.appendChild(span);
  }
}

interface PDFData {
  roomType: string;
  width: number;
  length: number;
  height: number;
  r: LightingResult;
  unitSys: string;
  unitLabel: string;
}

export function generatePDF(data: PDFData) {
  import('jspdf').then(({ jsPDF }) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Lighting Plan', 14, 20);
    doc.setFontSize(12);
    doc.text(`Room: ${data.roomType}`, 14, 35);
    doc.text(`Dimensions: ${data.width}${data.unitLabel} × ${data.length}${data.unitLabel} × ${data.height}${data.unitLabel}`, 14, 45);
    doc.text(`Area: ${Math.round(data.r.roomArea)} m²`, 14, 55);
    doc.text(`Target lux: ${data.r.targetLux}`, 14, 65);
    doc.text(`Current lux: ${data.r.currentLux}`, 14, 75);
    doc.text(`Required lumens: ${data.r.requiredLumens}`, 14, 85);
    doc.text(`Recommended: ${data.r.suggestedProducts}`, 14, 95);
    doc.text(`Status: ${data.r.status}`, 14, 105);
    doc.save('lighting-plan.pdf');
  });
}
