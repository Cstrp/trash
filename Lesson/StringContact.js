// ! Конкатенация строк

// const hello = 'Hello';
// const world = 'World';

// const greeting = hello + ' ' + world;

// console.log(greeting); //? Hello World

// note шаблонные строки

const hello = 'Hello';
const world = 'World';

const greeting = `${hello} ${world}`;

console.log(greeting); //? Hello World

const name = 'Valery'; //? пример  EXAMPLE
const age = 30;
const job = 'Frontend';
const city = 'Mogilev';
console.log(`Привет, меня зовут ${name}, мне ${age} лет, и я учусь ${job}, проживаю в ${city}`);
