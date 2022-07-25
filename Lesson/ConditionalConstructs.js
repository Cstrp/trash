//! Условные конструкции
//todo if (условие) { блок кода, выполняемый однократно, если условие true }
//todo задача if привести значение к true

//* инструкция if

let vals = 10;

if (vals > 5) {
  vals += 20; //? выолняется блок кода, т.к. условие if true
}

console.log(vals); //? 30 результат

const person = {
  name: "Valery",
  age: 25,
};
if (!person.name) {
  console.log("Нет имени"); //? !undefined === true
}

//* инструкция if else
//todo if(условие) {выполняемый блок кода, если условие true} else {выполняемый блок кода, если условие false} выполнится либо одно либо другое

let val = 10;

if (val < 5) {
  val += 20;
}
else {
  val -= 20;
}
console.log(val); //? -10 результат

//* инструкция if else if
//todo if(условие 1) {блок кода, выполняемый однократно, если условие 1 true}
//todo else if (условие 2) {блок кода, выполняемый однократно, если условие 2 true} else {блок кода, выполняемый однократно, если оба условия false}

const ages = 25; //? пример

if (ages > 18) {
  console.log("Is adult");
}
else if (ages >= 12) {
  console.log("Is teenager");
}
else {
  console.log("Is child");
}

//* предпочтительный формат if
//todo if (условие1) {выполняемый блок кода, если условие1 true}
//todo if (условие2) {выполняемый блок кода, если условие2 true} if (условие3) {выполняемый блок кода, если условие3 true}

const age = 25;

if (age >= 18) {
  console.log("Is adult");
}

if (age >= 12 && age < 18) {
  console.log("Is teenager");
}

if (age < 12) {
  console.log("Is child");
}

//* if в функциях

const sumPositiveNum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    // ? проверка типа переменных
    return "Введите число";
  }
  if (a <= 0 || b <= 0) {
    // ? проверка на положительность
    return "Введите положительное число";
  }
  return a + b;
};

console.log(sumPositiveNum("Valery", true)); //? первый блок кода
console.log(sumPositiveNum(-5, 5)); //? второй блок кода
console.log(sumPositiveNum(5, 5)); //? 10 результат

//* инструкция switch (альтернатива if else)
//todo switch (выражение) {case A: действия если Выражение === А break (ключевое слово - если выражение равно, мы выходим из инструкции)
//todo case B: действия если Выражение === B break (без брейка, продолжится анализ кейсов)
//todo default: действия если Выражение не соответствует ни одному из А и Б - т.е. по умолчанию }}

const month = 12;

switch (month) {
  case 12:
    console.log("December");
    break;
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
  default:
    console.log("Нет такого месяца");
}
//* Тернарный опертор (три операнда)
//todo

// const value = 11;

// value
//   ? console.log("True") //? вернет true
//   : console.log("False");

// const value1 = 11;
// const value2 = 25;

// value1 && value2
//   ? myFunction1(value1, value2) //? не рабочий пример, т.к. функции не объявлены
//   : myFunction2();

let value = 11;

console.log(value >= 0 ? value : -value); //? вернет 11

// let value = -5;
const res = value >= 0 ? value : -value; //? присваивание результата переменной
console.log(res); //? вернет 5\11
