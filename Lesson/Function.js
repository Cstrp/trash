// ! FUNCTION

// let a = 5;
// let b = 10;
let c;

c = a + b;
console.log(c); //? одинаковые блоки кода

a = 10;
b = 20;

c = a + b;
console.log(c);

let a = 5;
let b = 15;

function sum (a, b) {
  //? a, b = парамерты
  //функция сложения
  const c = a + b; //? тело функции
  console.log(c);
}

sum(a, b);

a = 124124;
b = 124124;
sum(a, b);

function myFun (a, b) {
  // ? имя функции myFun camelCase //a,b - параметры
  let c;
  a = a + 1; //?тело функции от начала до конца фигурной скобки
  c = a + b;
  return c; // ?ретёрн ключевое слово возврата результата функции(и она окончена)
} //?переменные а и б не используются вне функции

function myFn (a, b) {
  let c; //?объявляется переменная с, которая в последующем принимает в себя а и б и выводить сумму
  c = a + b;
  return c;
}

console.log(myFn(5, 10)); //?5,10 это аргументы, также данная запись вызывает функцию

function myFn (a, b) {
  let c;
  a = a++; //? делает +1 к а и присваивает его в переменную a
  c = a + b; //? все это является инструкцией для функции
  return c;
}

console.log(myFn(5, 10));

// ?передача значения по ссылке

const personOne = {
  name: "Valery",
  age: 25, //?изначальное значение
};
function increasePersonAge (person) {
  person.age++; // ?увеличение значения на 1
  return person;
}
increasePersonAge(personOne); //?передача объекта по ссылке (не рекомендуется мутировать внешние объекты внутри функций)
console.log(personOne.age);

function increasePersonAge (person) {
  const updPerson = Object.assign({}, person);
  updPerson.age++;
  return updPerson;
}

const updPerson = increasePersonAge(personOne); //? передача объекта по ссылке, который был скопирован (он мутировал)
console.log(updPerson.age);
console.log(personOne.age); //? не изменился оригинальный объект

//* CallBack	Function

function anotherFunc () {
  // ....
}

function fnWithCallback (callback) {
  // ...
  fnWithCallback(); //? вызов другой функции внутри функции (code not work)
}

fnWithCallback(anotherFunc);

function printMyName () {
  console.log("Valery");
}

console.log("Start");

setTimeout(printMyName, 2000); //? setTimeout встроеная функция
