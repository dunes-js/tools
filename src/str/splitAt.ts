export function splitAt(i: number, xs: string): [
  string, 
  string
]
{
  return [xs.slice(0, i), xs.slice(i)];
}