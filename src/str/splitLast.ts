
export function splitLast(str: string, at: string, off = 1): 
[string, string] 
{
  return [
    str.slice(0, str.lastIndexOf(at) + off),
    str.slice(str.lastIndexOf(at) + off, str.length)
  ];
}