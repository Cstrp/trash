// ! функциональные выражения

function myFn(a, b) {
  //? объявленная функция
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

// function (a, b) { //? функциональное выражение, не имеет имени (т.е. анонимное)
//   let c; //? автономно использовать нельзя
//   a = a + 1;
//   c = a + b;
//   return c;
// }

// const myFunction = function (a, b) { //? присваивание функционального выражения переменной
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// };

myFunction(5, 5); //? 10

setTimeout(function() {
  //? callback функция, без имени (анонимное фунциональное выражение)
  console.log("Выполнение функции после задержки");
}, 1000);

// ! стрелочные функции (стрелочная функция - выражение) всегда анонимные

(a, b) => {
  //? имени нет, а также отсутствует ключевое слово function
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

// note как дать имя стрелочной функции

const myFunction = (a, b) => {
  //? имя присвоено благодаря ещё одному оператору присвоения
  let c;
  a = a + 1;
  c = a + b;
  return c;
};
myFunction(5, 5); //? 10

setTimeout(() => {
  console.log("Выполнение функции после задержки");
}, 1000);

// ? сокращения в стрелочных функциях

(a) => {
  //note рекомендуется добавлять скобки
  //? тело функции
};

(a, b) => a + b; //note круглые скобки можно опустить, т.к. тело функции состоит из одного выражения (неявный возврат результата выражения)

// ! значение параметров функий по умолчанию

function multByFactor(value, multiplier = 1) {
  //? знак = присвоил второму параметру значение по умолчанию
  return value * multiplier;
}
multByFactor(10, 2); //? 20
multByFactor(10); //? 10

const multByFactor = function(value, multiplier = 1) {
  //? анонимная функция!!!
  return value * multiplier;
};
console.log(multByFactor(23.5, 1.2)); //? 20

const multByFactor = (value, multiplier = 1) => {
  //? стрелочная функция
  return value * multiplier;
};

multByFactor(15, 20); //? 300
multByFactor(15); //? 15

const newPost = (post, addedAt = Date()) => ({
  ...post, //? разделение на свойства, и формирование нового
  addedAt, //? соращенное свойство
}); //? возврат объекта неявно (не функции!, и это благодаря круглым скобкам)

function newPost(post, addedAt = Date()) {
  return {
    ...post,
    addedAt,
  }; //? явный возврат объекта
}

const firstPost = {
  id: 1,
  author: "Valery",
};

console.log(newPost(firstPost)); //? { id: 1, author: 'Valery', addedAt: 2020-03-12T12:00:00.000Z }

// ! Обработка ошибок

// const fnWithErorr = () => {
//     throw new Error('Ошибка');
// };

fnWithErorr(); //? вызов функции вызывает ошибку

console.log("Continue..."); //? код не выполнился

try {
  // ? выполнение блока кода
} catch (error) {
  // ? этот блок выполняется в случае возникновения ошибки в блоке try
}

const fnWithErorr = () => {
  throw new Error("Ошибка");
};
try {
  fnWithErorr();
} catch (error) {
  console.log(error.message); //? ошибка отловлена и выведена в консоль, выполнение кода продолжается
}

console.log("Continue..."); //? код выполнился

!Инструкции;

let a; //? объявление переменной

const b = 5 + 5; //? объявление и присваивание

if (a > b) {
  console.log("a is large");
}
for (let i = 0; i++; i < 5) {
  //? циклы
  console.log(i); //? инструкции заканчиваются на точку с запятой
}

// note выражение-инструкция (примеры)

// 'abc';
// a = a + 3; // присваивание
// c = a + b;
// d = 'Good ' + 'Morning'; // конкатенация
// myFunction(a, b); // вызов функции

console.log("Hello World"); // вывод в консоль

function myFn(a) {
  //? небольшой пример выражений-инструкции
  console.log(a);
}

// const b = true;
// let c = 15;

myFn(b);
myFn((c = c + 1));
myFn(2 + 5);
// myFn(c = c + 1;) //? error
// myFn (let d) //? error
