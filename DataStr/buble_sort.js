const array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 123, -124, 0, -12, 101, -9]
let counter = 0

function bubleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j + 1] < array[j]) {
				let tempr = array[j]
				array[j] = array[j + 1]
				array[j + 1] = tempr
			}
			counter += 1
		}
	}
	return array
}

console.log(bubleSort(array))
console.log(counter)
