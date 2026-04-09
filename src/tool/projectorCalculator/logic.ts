export interface ProjectionResult {
  widthCm: number;
  heightCm: number;
  distanceCm: number;
}

export function calculateProjection(
  diagonalInches: number,
  aspectRatio: number,
  throwRatio: number
): ProjectionResult {
  const angle = Math.atan(1 / aspectRatio);
  const widthCm = diagonalInches * Math.cos(angle) * 2.54;
  const heightCm = diagonalInches * Math.sin(angle) * 2.54;
  const distanceCm = widthCm * throwRatio;
  return { widthCm, heightCm, distanceCm };
}

export function cmToM(cm: number): string {
  return (cm / 100).toFixed(2);
}
