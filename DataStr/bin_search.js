const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let counter = 0

// function binSearch(arr, item) {
// 	let start = 0
// 	let finish = arr.length
// 	let middle
// 	let found = false
// 	let position = -1
// 	while (found === false && start <= finish) {
// 		counter += 1
// 		middle = Math.floor((start + finish) / 2)
// 		if (arr[middle] === item) {
// 			found = true
// 			position = middle
// 			return position
// 		}
// 		if (item < arr[middle]) {
// 			finish = middle - 1
// 		} else {
// 			start = middle + 1
// 		}
// 	}
// }

function recBinSearch(array, item, start, end) {
	let middle = Math.floor((start + end) / 2)
	if (item === array[middle]) {
		return middle
	}
	if (item < array[middle]) {
		return recBinSearch(array, item, 0, middle - 1)
	} else {
		return recBinSearch(array, item, middle + 1, end)
	}
}

// console.log(binSearch(array, 122))
console.log(recBinSearch(array, 12, 0, array.length))
console.log(counter)
