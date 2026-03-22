// Fibonacci sphere distribution — evenly spaces points on a sphere
export function getNodePosition(index: number, radius = 4): [number, number, number] {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / Math.max(index + 1, 1)) * 2; // -1 to 1
  const radiusAtY = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index;

  return [
    Math.cos(theta) * radiusAtY * radius,
    y * radius,
    Math.sin(theta) * radiusAtY * radius,
  ];
}
