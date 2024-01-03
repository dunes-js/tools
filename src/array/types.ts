
export type Many<T> = T | T[]

export type ArrayFn<T> = {
  (array: T[]): void
}


export type Tuple<T, N extends number >= (
  N extends N 
  ? (
    number extends N 
    ? T[] 
    : TupOf<T, N, []> 
  )
  : never
)

export type LooseTuple<T, N extends number >= (
  N extends N 
  ? (
    number extends N 
    ? (T | undefined)[]
    : TupOf<(T | undefined), N, []> 
  )
  : never
)

export type TupOf<T, N extends number, R extends unknown[] >= (
  R['length'] extends N 
  ? R 
  : TupOf<T, N, [T, ...R]>
)


export type TupleFromInterface<T, K extends Array<keyof T>> = { [I in keyof K]: Lookup<T, K[I]> }

export type FixedTuple<T extends [any, any, any]> = (
    | [T[0], T[1], T[2]]
    | [T[0], T[2], T[1]]
    | [T[1], T[0], T[2]]
    | [T[1], T[2], T[0]]
    | [T[2], T[0], T[1]]
    | [T[2], T[1], T[0]]
)

export type MixedTuple<T extends any[]> = Tuple<T[number], T["length"]>

export type short<t, n extends 1|2|3|4> = (
  n extends 1? t
  : n extends 2? t | Tuple<t, 2>
    : n extends 3? t | Tuple<t, 2> | Tuple<t, 3>
      : Tuple<t, 1> | t | Tuple<t, 3> | Tuple<t, 4>
)

export type Lookup<T, K> = K extends keyof T ? T[K] : never;