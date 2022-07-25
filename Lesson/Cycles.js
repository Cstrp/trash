// ! ЦИКЛЫ

//* без циклов

// let i = 0;
// console.log(i); //? повторяющиеся действия (выражение-инструкция)
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;

// const myArray = [ true, 'abs', 10 ]; //? перебор элементов массива
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// const myObject = { //? перебор свойств объекта
//   name: 'Valery',
//   age: 25,
//   isMarried: false,
// };
// console.log(myObject.name);
// console.log(myObject.age);
// console.log(myObject.isMarried);

//* цикл for (можно использовать для массивов, но не рекомендуется)
//todo для массивов forEach, map, filter

// for (let i = 0; i < 5; i++) {
//? цикл выполняется до тех пор, пока значение не достигнет 4 (выход из цикла)
//? сначала присваивается значение переменной, потом идет сравнение, и +1*5
//   console.log(i); //? первый пример через цикл for (выводится пять чисел от 0 до 4)
// }

// const myArray = [ 1, 2, 3, 4, 5 ]; //? перебор элементов массива через цикл for
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]); //? выводит все элементы массива
// }

// const myArray = [ 'One', 'Two', 'Three' ]; //? forEach функция высшего порядка, и тупо удобнее для массива
// myArray.forEach((element, index) => { //? можно получить все элементы массива, и их индексы
//   console.log(element, index);
// });

// * цикл while (блок кода при условии false не выполнится)

// let i = 0; //? первый пример через цикл while
// while (i < 5) {
//   console.log(i); //? конечный цикл
//   i++;
// }

// let i = 0;

// while (i < 5) {
//   console.log(i); //? бесконечный цикл (крашит слабые компы)
// }

//* Цикл do while

// let i = 0;

do { //? первый пример через цикл do while
  console.log(i);
  i++;
} while (i < 5);

let i = 10; //? блок кода выполнится единожды, т.к. 5 небольше 10
do {
  console.log(i);
  i++;
} while (i < 5); //? условие ложно

//* цикл for in
//todo блок инструкций выполняется для каждого свойства объекта

// const myObject = {
//   name: 'Valery',
//   age: 25,
//   married: false,
// };

// for (const key in myObject) {
//   console.log(key, myObject[key]); //? выводит все свойства объекта
// }

//todo forEach для объектов

const myObject = {
  name: 'Valery',
  age: 25,
  isMarried: false,
};

Object.keys(myObject).forEach((key) => {
// ? Object.keys возвращает массив ключей объекта
  console.log(key, myObject[key]);
});

Object.values(myObject).forEach((key) => {
// ? метод объекта values - получение всех "(значений)" свойтсв объекта в виде массива
  console.log(key, myObject[key]);
});

/* 
name Valery - результат выполнения keys 1-3
age 25
isMarried false
Valery undefined - результат выполнения values 3-6
25 undefined
false undefined 
*/

//todo for in для массивов (не рекомендуется!)

// const myArray = [ true, 10, 'Valery', null ];
// for (const key in myArray) {
//   console.log(key, myArray[key]); //? выводит индекс - значение
// }

//* цикл for of

const myString = 'Valery';

for (const letter of myString) {
  console.log(letter); //? выводит каждый символ строки
}

//todo for of для массивов (не рекомендуется)

// const myArray = [ true, 10, 'Valery', null ];

// for (const element of myArray) {
//   console.log(element); //? выводит каждый элемент массива
// }

//todo опять forEach

// const myArray = [ true, 10, 'Valery', null ];

// myArray.forEach((element) => {
//   console.log(element);
// });

//todo for of не для объектов!

// const myObject = {
//   name: 'Valery',
//   age: 25,
//   isMaried: false,
// };

// for (const prop of myObject) {
//   console.log(prop); //? TypeError: myObject is not iterable
// }
