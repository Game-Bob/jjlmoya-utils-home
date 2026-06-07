export interface WallPaintingInput {
  area: number;
  yieldM2PerLitre: number;
  coats: number;
  pricePerLitre: number;
  dilutionPercent: number;
}

export interface WallPaintingResult {
  paintLitres: number;
  waterLitres: number;
  totalCost: number;
  totalVolume: number;
}

export function calculateWallPainting(input: WallPaintingInput): WallPaintingResult {
  const { area, yieldM2PerLitre, coats, pricePerLitre, dilutionPercent } = input;
  const paintLitres = yieldM2PerLitre > 0 ? (area * coats) / yieldM2PerLitre : 0;
  const waterLitres = paintLitres * (dilutionPercent / 100);
  const totalVolume = paintLitres + waterLitres;
  const totalCost = paintLitres * pricePerLitre;
  return { paintLitres, waterLitres, totalCost, totalVolume };
}

export function fmt2(n: number): string {
  return n.toFixed(2);
}
