export function Rating(rate: number) {
  const color =
    rate >= 3 ? "text-green-500 font-bold" : "text-red-500 font-bold";
  return color;
}
