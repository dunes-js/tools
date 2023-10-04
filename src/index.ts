declare global {
	type obj = {
		[key: PropertyKey]: unknown
	}

	type none = undefined | null | false

	type constructor = {
		new (...args: any[]): any
	}

	type prototype<T, P extends any[] = any[]> = {
		new (...args: P): T
		prototype: T
	}

	type prim = (
		| string
		| number
		| boolean
		| bigint
	)

	type Prom<T> = T | Promise<T>;

	type Many<T> = T | T[]

}

export {
	
	extract,
	insert,
	swap,
	Arr,

} from "./array"
export {

	isConstructor,
	isNone,

} from "./bool"