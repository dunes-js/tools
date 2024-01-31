

export * from "./array/index.js"
export * from "./bool/index.js"
export * from "./str/index.js"
export * from "./obj/index.js"
export * from "./regexp/index.js"
export * from "./unicode/index.js"
export * from "./random/index.js"
export * from "./fix/index.js"

export * from "./extra.js"

export type obj = {
  [key: PropertyKey]: unknown
}

export type none = undefined | null | false

export type constructor = {
  new (...args: any[]): any
}

export type prototype<T, P extends any[] = any[]> = {
  new (...args: P): T
  prototype: T
}

export type prim = (
  | string
  | number
  | boolean
  | bigint
)

export type Prom<T> = T | Promise<T>;

export type DeepRequired<T> = Required<{
    [K in keyof T]: (
      T[K] extends Required<T[K]> 
      ? T[K] 
      : DeepRequired<T[K]>
    )
}>

export type DeepPartial<T> = Partial<{
    [K in keyof T]: (
      T[K] extends Partial<T[K]> 
      ? T[K] 
      : DeepPartial<T[K]>
    )
}>