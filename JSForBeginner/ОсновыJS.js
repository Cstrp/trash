//1 Переменные
// var variable = 'значение';
// let variable = 'значение';
// const constVariable = 'значение';
// данная тема была пройдена ранее

//2 мутирование
// const name = 'Valery';
// const age = 25;
// console.log('name: ' + name + ' age: ' + age); // age стало строкой
// console.log(`Привет, меня зовут ${name} и это моя первая программа!`);

//3 операторы
// const years = 2022;
// const birth = 1996;
//
// const a = 10;
// const b = 7;
// const c = 332;
// += -= *= /=
// console.log(+years)
// console.log(a + b)
// console.log(a * b)
// console.log(a / b)
// console.log(a - b)

//4 Типы данных
// const isMarried = false
// const name = 'Val'
// const age = 25
// let x
// let y = null
// console.log(typeof y, 'null')
// console.log(typeof x)
// console.log(typeof isMarried)
// console.log(typeof name)
// console.log(typeof age)
// пять примитивов

// 5 приоритет операций
// const fullAge = 25
// const birth = 1996
// const currentYear = 2022
// > больше
// < меньше
// >= больше либо равно
// <= меньше либо равно
// const isFullAge = currentYear - birth >= fullAge
//
// console.log(isFullAge)

// 6 условные операторы
// const status = 'pending'
// === тройное равно
// == двойное равно
// if (status === 'ready') {
//     console.log('status: Done!')
// } else if (status === 'pending') {
//     console.log('status: in process...')
// } else {
//     console.log('status: fallied')
// }
// const numOne = 42
// const numTwo = '42'
// == сравнение по значению (преобразование типов данных происходит автоматически)
// === строгое сравнение, где учитываются типы данных
// console.log(numOne == numTwo)
// const isReady = false
// if (isReady) {
//     console.log('Ok')
// } else {
//     console.log('Ne ok')
// }
// const isReady = true
// isReady ? console.log('ok') : console.log('Ne ok')

// 7 логические операторы
// && - и
// || - или
// ! - не

// 8 функии
// function calcAge(year) {
//     return 2022 - year
// }
// console.log(calcAge(1997))
// console.log(calcAge(2222))
// console.log(calcAge(221))
// console.log(calcAge(1990))
// console.log(calcAge(11))
// function info(name, years) {
//     const age = calcAge(years)
//     if (age > 0) {
//         console.log('name: ' + name + ' age: ' + age)
//     } else {
//         console.log('Are u crazy')
//     }
//
// }
// info('Lox', 1996)

// 9 Массивы
// const arr = ['LamBoOOoO', 'BMW', 'Jepa']
// console.log(arr)

// 10 циклы
// const cars = ['A', 'B', 'C']
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }
// for (let car in cars) {
//     console.log(cars[car])
// }
// console.log(cars)

// 11 объекты
// const person = {
//     name: 'Vla',
//     lastName: 'Let',
//     age: 25,
//     isMarried: false,
//     lang: ['ru', 'eng', 'de'],
//     greet: function () {
//         console.log('Hi')
//     }
// }
// console.log(person)
