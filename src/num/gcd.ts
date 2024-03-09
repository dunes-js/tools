// Find the greatest common divisor to simplify the fraction
export function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}
