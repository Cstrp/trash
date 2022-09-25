const {NotImplementedError} = require('../extensions/index.js')

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let newArr = String(n).split('')
  let result = 0
  while (newArr.length > 1) {
    for (let i = 0; i < newArr.length; i++) {
      result += Number(newArr[i])
    }
    newArr = String(result).split('')
    result = 0
  }
  return Number(newArr[0])
}

module.exports = {
  getSumOfDigits,
}
