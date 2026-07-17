import { calculateAcTonnage } from './logic';
import { updateTheme, updateMiniRoom, spawnRipple } from './client-animations';

const MAX_BTU = 60000;
const CIRC = 2 * Math.PI * 85;
const COLORS = ['#22c55e', '#84cc16', '#f59e0b', '#f97316', '#ef4444'];
const M2_TO_FT2 = 10.7639;
const M_TO_FT = 3.28084;
const LS_KEY_UNIT = 'utils-home-unit-system';
const LS_KEY_POWER = 'ac-tonnage-power-unit';
const LS_KEY_STATE = 'ac-tonnage-state';

let unitSystem: 'metric' | 'imperial' = 'metric';
let powerUnit: 'btu' | 'frigorias' | 'tons' = 'btu';
const SYS = () => unitSystem;

function el(id: string) { return document.getElementById(id); }

function setTxt(id: string, val: string) { const e = el(id); if (e) e.textContent = val; }

function setAttr(id: string, attr: string, val: string) { const e = el(id); if (e) e.setAttribute(attr, val); }

function getNum(id: string): number { const e = el(id) as HTMLInputElement | null; return e ? parseFloat(e.value) || 0 : 0; }

function getStr(id: string): string { return (el(id) as HTMLSelectElement | null)?.value ?? ''; }

function colorFor(btu: number): string { return COLORS[Math.min(4, Math.floor(Math.min(1, btu / MAX_BTU) * 5))]; }

function unitLabel() { return SYS() === 'imperial' ? 'ft' : 'm'; }

function areaLabel() { return SYS() === 'imperial' ? 'ft²' : 'm²'; }

function toMetric(v: number, f: number) { return SYS() === 'imperial' ? v / f : v; }

function updateLabels() {
  setTxt('ac-area-num', `${getNum('ac-area')} ${areaLabel()}`);
  setTxt('ac-height-num', `${getNum('ac-height')} ${unitLabel()}`);
}

function readInputs() {
  return { area: toMetric(getNum('ac-area'), M2_TO_FT2), height: toMetric(getNum('ac-height'), M_TO_FT), people: getNum('ac-people'), heat: getNum('ac-heat'), sun: getStr('ac-sun'), room: getStr('ac-room') };
}

function saveState() {
  const inp = readInputs();
  localStorage.setItem(LS_KEY_STATE, JSON.stringify({ area: inp.area, height: inp.height, people: inp.people, heat: inp.heat, sun: inp.sun, room: inp.room, unit: unitSystem, power: powerUnit }));
}

function loadState() {
  try { return JSON.parse(localStorage.getItem(LS_KEY_STATE) || 'null'); } catch { return null; }
}

function getLabels(): Record<string, string> {
  const e = el('ac-labels');
  try { return JSON.parse(e?.dataset?.labels ?? '{}'); } catch { return {}; }
}

function updateRingDisplay(res: ReturnType<typeof calculateAcTonnage>, labels: Record<string, string>) {
  if (powerUnit === 'frigorias') { setTxt('ac-ring-btu', res.frigorias.toLocaleString()); setTxt('ac-ring-unit', labels.labelUnitFrigorias ?? 'Frigorías'); }
  else if (powerUnit === 'tons') { setTxt('ac-ring-btu', String(res.tons)); setTxt('ac-ring-unit', labels.labelUnitTons ?? 'Tons'); }
  else { setTxt('ac-ring-btu', res.btu.toLocaleString()); setTxt('ac-ring-unit', labels.labelUnitBtu ?? 'BTU/h'); }
}

function renderBreakdown(res: ReturnType<typeof calculateAcTonnage>) {
  const bd = el('ac-breakdown');
  if (!bd) return;
  const labels = getLabels();
  bd.innerHTML = res.breakdown.map((b) => {
    const labelKey = `bd${b.key.charAt(0).toUpperCase()}${b.key.slice(1)}`;
    const pct = res.btu > 0 ? Math.min(100, (b.value / res.btu) * 100) : 0;
    return `<div class="ac-bd-row"><span class="ac-bd-label">${labels[labelKey] ?? b.key}</span><div class="ac-bd-bar-wrap"><div class="ac-bd-bar" style="width:${pct}%"></div></div><span class="ac-bd-val">${b.value.toLocaleString()}</span></div>`;
  }).join('');
}

function renderResult(res: ReturnType<typeof calculateAcTonnage>, people: number, heat: number) {
  const color = colorFor(res.btu);
  const offset = CIRC - (CIRC * Math.min(res.btu, MAX_BTU)) / MAX_BTU;
  updateLabels();
  setTxt('ac-people-num', String(people));
  setTxt('ac-heat-num', String(heat));
  setTxt('ac-frig', res.frigorias.toLocaleString());
  setTxt('ac-tons', String(res.tons));
  setAttr('ac-ring-fill', 'stroke-dashoffset', String(offset));
  setAttr('ac-ring-fill', 'stroke', color);
  updateRingDisplay(res, getLabels());
  renderBreakdown(res);
  updateTheme(res.btu);
  updateMiniRoom(res.btu);
  spawnRipple();
  const card = el('ac-card');
  if (card) { card.classList.remove('ac-peak'); requestAnimationFrame(() => { card!.classList.add('ac-peak'); }); }
}

function update() {
  const inp = readInputs();
  if (inp.area <= 0 || inp.height <= 0) return;
  renderResult(calculateAcTonnage({ area: inp.area, ceilingHeight: inp.height, people: inp.people, heatSources: inp.heat, sunExposure: inp.sun as 'light' | 'medium' | 'heavy', roomType: inp.room as 'bedroom' | 'living' | 'kitchen' | 'office' | 'server' }), inp.people, inp.heat);
  saveState();
}

function setSlider(id: string, cfg: { min: number; max: number; step: number; val: number }) {
  const e = el(id) as HTMLInputElement | null;
  if (!e) return;
  e.min = String(cfg.min); e.max = String(cfg.max); e.step = String(cfg.step);
  e.value = String(Math.max(cfg.min, Math.min(cfg.max, cfg.val)));
}

function setSelect(id: string, val: string) { const e = el(id) as HTMLSelectElement | null; if (e) e.value = val; }

function toggleBtns(sel: string, attr: string, val: string) {
  document.querySelectorAll(sel).forEach((b) => b.classList.toggle('active', (b as HTMLElement).dataset[attr] === val));
}

function applyUnitSystem(sys: 'metric' | 'imperial') {
  unitSystem = sys;
  localStorage.setItem(LS_KEY_UNIT, sys);
  toggleBtns('.ac-unit-toggle button', 'unit', sys);
  const area = getNum('ac-area'), height = getNum('ac-height');
  if (sys === 'imperial') { setSlider('ac-area', { min: 50, max: 1300, step: 10, val: Math.round(area * M2_TO_FT2) }); setSlider('ac-height', { min: 6, max: 20, step: 0.5, val: Math.round(height * M_TO_FT * 2) / 2 }); }
  else { setSlider('ac-area', { min: 5, max: 120, step: 1, val: Math.round(area / M2_TO_FT2) }); setSlider('ac-height', { min: 2, max: 6, step: 0.1, val: Math.round((height / M_TO_FT) * 10) / 10 }); }
  update();
}

function applyPowerUnit(unit: 'btu' | 'frigorias' | 'tons') {
  powerUnit = unit;
  localStorage.setItem(LS_KEY_POWER, unit);
  toggleBtns('.ac-power-toggle button', 'power', unit);
}

function restoreSavedState() {
  const saved = loadState();
  if (!saved) return;
  unitSystem = saved.unit ?? 'metric';
  localStorage.setItem(LS_KEY_UNIT, unitSystem);
  powerUnit = saved.power ?? 'btu';
  localStorage.setItem(LS_KEY_POWER, powerUnit);
  if (unitSystem === 'imperial') { setSlider('ac-area', { min: 50, max: 1300, step: 10, val: Math.round(saved.area * M2_TO_FT2) }); setSlider('ac-height', { min: 6, max: 20, step: 0.5, val: Math.round(saved.height * M_TO_FT * 2) / 2 }); }
  else { setSlider('ac-area', { min: 5, max: 120, step: 1, val: saved.area }); setSlider('ac-height', { min: 2, max: 6, step: 0.1, val: saved.height }); }
  setSlider('ac-people', { min: 0, max: 20, step: 1, val: saved.people });
  setSlider('ac-heat', { min: 0, max: 20, step: 1, val: saved.heat });
  setSelect('ac-sun', saved.sun);
  setSelect('ac-room', saved.room);
  toggleBtns('.ac-unit-toggle button', 'unit', unitSystem);
  toggleBtns('.ac-power-toggle button', 'power', powerUnit);
}

function attachStep(btn: HTMLElement) {
  const target = btn.dataset.target;
  const delta = parseFloat(btn.dataset.delta ?? '0');
  if (!target) return;
  const slider = el(target) as HTMLInputElement | null;
  if (!slider) return;
  btn.addEventListener('click', () => {
    const min = parseFloat(slider.min), max = parseFloat(slider.max), step = parseFloat(slider.step) || 1;
    slider.value = String(Math.max(min, Math.min(max, Math.round((parseFloat(slider.value) + delta) / step) * step)));
    slider.dispatchEvent(new Event('input'));
  });
}

function init() {
  restoreSavedState();
  document.querySelectorAll('.ac-unit-toggle button').forEach((btn) => btn.addEventListener('click', () => { const s = (btn as HTMLElement).dataset.unit as 'metric' | 'imperial'; if (s) applyUnitSystem(s); }));
  document.querySelectorAll('.ac-power-toggle button').forEach((btn) => btn.addEventListener('click', () => { const u = (btn as HTMLElement).dataset.power as 'btu' | 'frigorias' | 'tons'; if (u) { applyPowerUnit(u); update(); } }));
  ['ac-area', 'ac-height', 'ac-people', 'ac-heat'].forEach((id) => { const e = el(id); if (e) e.addEventListener('input', update); });
  ['ac-sun', 'ac-room'].forEach((id) => { const e = el(id); if (e) e.addEventListener('change', update); });
  document.querySelectorAll('.ac-step').forEach((btn) => attachStep(btn as HTMLElement));
  update();
}

document.addEventListener('astro:page-load', init);
init();
