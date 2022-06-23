const array = [1, 2, 3, 4, 5, 7, 8, 9, 4, 2, 5, 6, 7, 9, 0, 123]

let counter = 0

function lineSearch(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		counter += 1
		if (arr[i] === item) {
			return i
		}
	}
	return null
}

console.log(lineSearch(array, 123)) // линейный поиск
console.log(counter)
