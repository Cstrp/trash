const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let counter = 0

function binSearch(arr, item) {
	let start = 0
	let finish = arr.length
	let middle
	let found = false
	let position = -1
	while (found === false && start <= finish) {
		counter += 1
		middle = Math.floor((start + finish) / 2)
		if (arr[middle] === item) {
			found = true
			position = middle
			return position
		}
		if (item < arr[middle]) {
			finish = middle - 1
		} else {
			start = middle + 1
		}
	}
}

console.log(binSearch(array, 122))
console.log(counter)
