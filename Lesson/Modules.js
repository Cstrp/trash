//! Модули

const isNotMyName = () => {
  console.log("Мой имя Алексей");
};

export default isNotMyName; //? экспорт модуль

import printMyName from "./путь"; //? импорт модуль
printMyName(); //? вызов модуль

//todo несколько экспортов

const one = 1;
const two = "two";

export { one, two }; //? экспорт модуль переменных

import {
  //? имена переменных должны совпадать
  one, //? что бы переименовать переменную нужно использовать "as" новое имя переменной
  two,
} from "./путь"; //? импорт модуль переменных? и их можно юзать
