// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

// Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!

function removeEveryOther(arr) {
  // ? решение

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // проходим по массиву
    if (i % 2 === 0) {
      // если элемент нечетный
      result.push(arr[i]); // добавляем его в новый массив
    }
  }
  return result; // возвращаем новый массив
}

console.log(
  removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove'])
); // [ 'Keep', 'Keep', 'Keep' ]
