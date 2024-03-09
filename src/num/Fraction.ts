
type Fraction = {
  numerator: number
  denominator: number
}

export function Fraction(decimal: number)
: Fraction
{
  const epsilon = 1.0E-6;

  let numerator = 1;
  let denominator = 1;
  let error = Math.abs(decimal - numerator / denominator);

  while (error > epsilon) 
  {
    if (decimal > numerator / denominator) {
      numerator++;
    } else {
      denominator++;
    }
    error = Math.abs(decimal - numerator / denominator);
  }

  return {numerator, denominator };
}
