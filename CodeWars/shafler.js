function nameShuffler(str) {
  let newStr = str.split(' ');
  if (newStr.length < 2) {
    return str;
  }
  return (
    [newStr[1], newStr[0]]
      // @ts-ignore
      .concat(newStr.splice(('', newStr.length)))
      .join(' ')
  );
} //сложное решение, где ничего не понятно

// function nameShuffler(str){
//     return str.split(' ').reverse().join(" ");
// } //упрощенное решение

// Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию.

console.log(nameShuffler('w Nosareu'));
