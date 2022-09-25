const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit (n) {
  let result = 0;
  let numDigit = [];
  while (n) {
    numDigit.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let i = 0; i < numDigit.length; i++) {
    let res = 0;
    for (let a = numDigit.length - 1; a >= 0; a--) {
      if (a !== i) {
        res = res * 10 + numDigit[a];
      }
    }
    result = Math.max(res, result);
  }
  return result;
}


module.exports = {
  deleteDigit,
};
