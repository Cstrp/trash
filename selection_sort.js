const array = [2, 3, 5, 8, 1, 4, 6, 8, 6, 4, 12, 5, 7, -1, -5, 32, 124, 55, 12]

function selectedSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minimalIndex = i
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minimalIndex]) {
				minimalIndex = j
			}
		}
		let tempr = array[i]
		array[i] = array[minimalIndex]
		array[minimalIndex] = tempr
	}
	return array
}

console.log(selectedSort(array))
console.log(couter)
