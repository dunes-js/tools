import { gcd } from "./gcd.js";


export function decimalToRatio(decimal: number) {
  // Multiply by a power of 10 to make it an integer
  let numerator = decimal * 1000;
  let denominator = 1000;

  const commonDivisor = gcd(numerator, denominator);

  // Simplify the fraction
  numerator /= commonDivisor;
  denominator /= commonDivisor;

  return { numerator, denominator };
}
