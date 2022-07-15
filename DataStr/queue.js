// FIFO First in First out

function queueTime(customersm, n) {
	if (!customersm.length) {
		return 0
	}
	const queue = [...customersm]
	const tills = Array(Math.min(n, customersm.length)).fill(0)
	console.log(tills)
	while (queue.length) {
		const customer = queue.shift()
		const tillsMin = tills.indexOf(Math.min(...tills))
		tills[tillsMin] += customer
	}
	return Math.max(...tills)
}

console.log(queueTime([], 1), 0)
console.log(queueTime([1, 2, 3, 4], 1), 10)
console.log(queueTime([2, 2, 3, 4, 5, 5], 2), 9)
console.log(queueTime([1, 2, 3, 4, 5], 100), 5)
