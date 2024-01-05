


export function addZeros(
	num: number | string, 
	length: number, 
	char = "0"
) {
	num = String(num)
	while(num.length < length) {
		num = char+num
	}
	return num
}