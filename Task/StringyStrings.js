// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

// напишите мне функцию stringy, которая принимает размер и возвращает строку из чередующихся «1» и «0».
// строка должна начинаться с 1.
// строка размером 6 должна возвращать: '101010'.
// с размером 4 должно возвращаться: '1010'.
// с размером 12 должен вернуть: «101010101010».
// Размер всегда будет положительным и будет использовать только целые числа.

/**
 * @param {number} size
 */
function stringy(size) {
  let result = '';
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}
