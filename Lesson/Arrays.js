// ! МАССИВЫ

const myArray = [ 1, 2, 3, 4, 5 ]; // todo формат записи массива
console.log(myArray);

const myArray2 = new Array(1, 2, 3, 4, 5); //? тоже самое но только с ключевыми словами и через круглую скобку
console.log(myArray2);

// todo структура массивов

[ 1, 2, 3, 4, 5 ]; //? отсчет с нуля
0;
1, 1;
2, 2;
3, 3;
4, 4;
5, length;
5;

// const myArra3 = [ 1, true, 'Hello', null, undefined ];
// console.log(myArra3.length); //? длина массива

// console.log((myArray === myArray2) === myArra3); //? они не равны, но при необходимости для полученияtrue можно копировать

const myObj = {
  //? объект
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

// const myArray = [ 1, 2, 3, 4, 5 ]; //? массив

console.log(myArray);
console.log(myObj);
console.log(myArray === myObj);

// note чтение значений массива

const myArra = [ 1, true, "3", 4, 5 ]; //? порядок элементов массива ВАЖЕН ! свойтств НЕТ
console.log(myArra[0]); //? первый элемент массива
console.log(myArra[1]); //? второй элемент массива
console.log((myArra.length = 10)); //? длина массива (не рекомендуется использовать, и 5 значений пустых)
console.log(myArra[myArra.length - 1]); //? последний элемент массива
console.log(myArra[myArra.length - 2]); //? предпоследний элемент массива

// note длинна массива и добавление элементов

// const myArray = [ 1, true, '3', 4, 5 ];
// console.log(myArray); //? массив
// console.log(myArray.length); //? длина массива

// myArray[2] = 'Hello'; //? добавление элемента в массив (3, заменена)
// console.log(myArray);

// myArray[5] = undefined; //? добавление элемента в массив (6, добавлен) в конце массива
// console.log(myArray); //? this не удобно

// ! МЕТОДЫ МАССИВОВ

// todo push;
//? добавление элемента в конец массива

// const myArray = [ 1, true, '3', 4, 5 ];
// console.log(myArray);
// console.log(myArray.length);

// myArray.push(6);
// console.log(myArray);

// myArray.push(false);
// console.log(myArray);

//todo pop
//? удаление элемента из конца массива

// const myArray = [ 1, true, '3', 4, 5 ];
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// const removeEl = myArray.pop(); //? переменной присвоено значение удаленного элемента, т.е. 4 полученной из массива
// console.log(myArray);
// console.log(removeEl); //? всего удалено два элемента

// todo unshift
//? добавление элемента в начало массива (изспользуется редко)

// const myArray = [ 1, true, '3', 4, 5 ];
// console.log(myArray);

// myArray.unshift(false);
// console.log(myArray);

//todo shift
//? удаляет первый элемент массива

// const myArray = [ 1, true, '3', 4, 5 ];
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// const removeEl = myArray.shift(); //? по аналогии с pop можно присвоить удаленное значение
// console.log(myArray);
// console.log(removeEl);

// todo forEach (популярный метод)
// ? перебор массива

// const myArray = [ 1, true, '3', 4, 5 ];
// console.log(myArray);

// const result = myArray.forEach((el) => console.log(el * 2)); //? имеет аргумент являющийся функцией
// console.log(myArray); //? для каждого элемента массива выполняется функция
//? оригинальный массив не изменился
//? undefined не случится, т.к. callback функция находится в скобах

//todo map (также популярный метод)
//?создает новый массив с результатом вызова указанной функции для каждого элемента массива

// const myArray = [ 1, true, '3', 4, 5 ];
// console.log(myArray);
//? данный метод ожидает callback функцию, которая будет выполняться для каждого элемента массива
// const newArray = myArray.map((el) => el * 3);
// const newArray2 = myArray.map(function (el) {
//   return el * 3;
// });
// const newArray3 = myArray.map((el) => {
//   el * 3;
// });

// console.log(newArray); //? возвращает новый массив
// console.log(newArray2);
// console.log(newArray3); //? возвращает новый c undefined т.к. неявный возврат (без return)
// console.log(myArray); //? оригинальный массив не изменился

//! деструктуризация

const user = {
  //? деструктуризация объекта
  name: "John",
  age: 30,
  city: "New York",
  gender: false,
};

const { name, age, city } = user; //? объявление новых пременных и присваивание значений на основе значений свойств объекта
const { gender } = user; //? деструктуризация произошла.
//? указанный пример можно делать в одной строке
console.log(name);
console.log(age);
console.log(gender);
console.log(city);

const fruits = [ "Apple", "Banana", "Orange", "Pineapple", "Pear" ]; //? деструктуризация массива
const [ fruitOne, fruitTwo, fruitThree, fruitFour, fruitFive ] = fruits;
//? объявление новых переменных и присваивание значений на основе элементов массива

console.log(fruitOne);
console.log(fruitTwo);
console.log(fruitThree);
console.log(fruitFour);
console.log(fruitFive);

// const user = {
//   name: 'Valery',
//   age: 25,
//   city: 'Moscow',
//   gender: false,
// };

// const info = ({ name, age, city, gender }) => {
//? деструктуризация в функции
//   if (!age) {
//     return `Bye User ${name}`; //? можно выполнить деструктуризацию в самой функции
//   }
//   return `Hi User ${name}, you are ${age} years old and live in ${city} and ${gender}`;
// };

// console.log(info(user));
