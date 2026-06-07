import type { PlacedDevice } from './logic';

function setAttrs(el: Element, attrs: Record<string, string>) {
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function makeGlow(color: string) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  setAttrs(el, { cx: '0', cy: '0', r: '24', fill: 'none', stroke: color, 'stroke-width': '2', opacity: '0.3' });
  return el;
}

function makeRect() {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  setAttrs(el, { x: '-14', y: '-14', width: '28', height: '28', rx: '6', fill: 'var(--bg-surface)', stroke: 'var(--border-color)', 'stroke-width': '1' });
  return el;
}

function makeIcon() {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  setAttrs(el, { x: '-8', y: '-8', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--text-main)', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
  el.innerHTML = '<rect x="2" y="4" width="20" height="14" rx="2"/><line x1="8" y1="22" x2="16" y2="22"/><line x1="12" y1="18" x2="12" y2="22"/>';
  return el;
}

function makeLabel(name: string) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  setAttrs(el, { x: '0', y: '26', 'text-anchor': 'middle', fill: 'var(--text-muted)', 'font-size': '8', 'font-weight': '700' });
  el.textContent = name;
  return el;
}

export function buildDeviceSVG(dev: PlacedDevice, color: string) {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  setAttrs(g, { id: `sketch-device-${dev.id}`, transform: `translate(${dev.x}, ${dev.y})`, style: 'cursor:grab' });
  g.dataset.deviceId = dev.id;
  g.appendChild(makeGlow(color));
  g.appendChild(makeRect());
  g.appendChild(makeIcon());
  g.appendChild(makeLabel(dev.name));
  return g;
}
