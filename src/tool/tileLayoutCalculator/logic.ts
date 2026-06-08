export interface TileLayoutInput {
  roomWidthM: number;
  roomLengthM: number;
  tileWidthM: number;
  tileLengthM: number;
  groutM: number;
  wastePercent: number;
  tilesPerBox: number;
  pricePerBox: number;
}

export interface TileLayoutResult {
  roomWidthM: number;
  roomLengthM: number;
  tileWidthM: number;
  tileLengthM: number;
  groutM: number;
  roomArea: number;
  cols: number;
  rows: number;
  exactTiles: number;
  wasteTiles: number;
  totalTiles: number;
  boxes: number;
  totalCost: number;
}

export function calculateTileLayout(i: TileLayoutInput): TileLayoutResult {
  const cols = Math.ceil(i.roomWidthM / (i.tileWidthM + i.groutM));
  const rows = Math.ceil(i.roomLengthM / (i.tileLengthM + i.groutM));
  const exactTiles = cols * rows;
  const wasteTiles = Math.ceil(exactTiles * i.wastePercent / 100);
  const totalTiles = exactTiles + wasteTiles;
  const boxes = Math.ceil(totalTiles / i.tilesPerBox);
  const totalCost = boxes * i.pricePerBox;
  return {
    roomWidthM: i.roomWidthM,
    roomLengthM: i.roomLengthM,
    tileWidthM: i.tileWidthM,
    tileLengthM: i.tileLengthM,
    groutM: i.groutM,
    roomArea: i.roomWidthM * i.roomLengthM,
    cols,
    rows,
    exactTiles,
    wasteTiles,
    totalTiles,
    boxes,
    totalCost,
  };
}

export function fmt0(n: number): string { return String(Math.round(n)); }
export function fmt1(n: number): string { return n.toFixed(1); }
export function fmt2(n: number): string { return n.toFixed(2); }
