function getStrokeColor(el: HTMLElement | null): string {
  return el ? getComputedStyle(el).stroke : '#0ea5e9';
}

function getLabels(): Record<string, string> {
  const el = document.getElementById('ac-labels');
  if (!el) return {};
  try {
    return JSON.parse(el.dataset.labels ?? '{}');
  } catch {
    return {};
  }
}

export function updateTheme(btu: number) {
  const card = document.getElementById('ac-card');
  if (!card) return;
  card.classList.remove('ac-theme-low', 'ac-theme-med', 'ac-theme-high');
  if (btu < 18000) card.classList.add('ac-theme-low');
  else if (btu < 36000) card.classList.add('ac-theme-med');
  else card.classList.add('ac-theme-high');
}

function roomLabel(btu: number): string {
  const labels = getLabels();
  if (btu < 18000) return labels.labelRoomCozy ?? '';
  if (btu < 36000) return labels.labelRoomWarm ?? '';
  return labels.labelRoomHot ?? '';
}

export function spawnRipple() {
  const wrap = document.querySelector('.ac-ring-wrap');
  if (!wrap) return;
  const el = document.getElementById('ac-ring-fill');
  const color = getStrokeColor(el as HTMLElement | null);
  const ripple = document.createElement('div');
  ripple.className = 'ac-ripple';
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.transform = 'translate(-50%, -50%)';
  ripple.style.border = `2px solid ${color}`;
  wrap.appendChild(ripple);
  setTimeout(() => ripple.remove(), 800);
}

export function updateMiniRoom(btu: number) {
  const svg = document.querySelector('.ac-mini-room svg');
  if (!svg) return;
  const txt = svg.querySelector('text');
  if (txt) txt.textContent = roomLabel(btu);
}

export function pulseGlow() {
  const glow = document.getElementById('ac-ring-glow');
  if (!glow) return;
  glow.classList.add('active');
  setTimeout(() => glow.classList.remove('active'), 2000);
}

function makeParticle(): HTMLElement {
  const p = document.createElement('div');
  p.className = 'ac-particle';
  p.style.left = `${Math.random() * 100}%`;
  p.style.animationDuration = `${2 + Math.random() * 3}s`;
  p.style.animationDelay = `${Math.random() * 2}s`;
  return p;
}

export function spawnParticles() {
  const container = document.getElementById('ac-particles');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    container.appendChild(makeParticle());
  }
}

export function buildBdRow(key: string, val: number, total: number): string {
  const labels = getLabels();
  const labelKey = `bd${key.charAt(0).toUpperCase()}${key.slice(1)}`;
  const label = labels[labelKey] ?? key;
  const pct = total > 0 ? Math.min(100, (val / total) * 100) : 0;
  return `<div class="ac-bd-row"><span class="ac-bd-label">${label}</span><div class="ac-bd-bar-wrap"><div class="ac-bd-bar" style="width:${pct}%"></div></div><span class="ac-bd-val">${val.toLocaleString()}</span></div>`;
}
