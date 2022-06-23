const array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 123, -124, 0, -12, 101, -9]

function quiqSort(array) {
	if (array.length <= 1) {
		return array
	}
	let pivotIndex = Math.floor(array.length / 2)
	let pivot = array[pivotIndex]
	let less = []
	let greater = []
	for (let i = 0; i < array.length; i++) {
		if (i === pivotIndex) {
			continue
		}
		if (array[i] < pivot) {
			less.push(array[i])
		} else {
			greater.push(array[i])
		}
	}

	return [...quiqSort(less), pivot, ...quiqSort(greater)]
}

console.log(quiqSort(array))
