// Переменые
// let
// const
// var - старая версия
// let name = 'John'
//
// let admin = name
//
// console.log(admin)
// let aroundTheWorld = 'Hello World!'
// console.log(aroundTheWorld)
// let privetDurachek = prompt('Are u crazy?', '')
// alert(privetDurachek)

// function namePrinter(login) {
// if (login === 'User') {
//     result = 'Hi'
// } else if (login === 'Admin') {
//     result = 'Hello'
// } else if (login === '') {
//     result = 'X'
// } else {
//     result = ''
// }
//     return (login === 'User') ? 'Hi' : (login === 'Admin') ? 'Hello' : (login === '') ? 'X' : ''
// }
//
// console.log(namePrinter('User'))
// console.log(namePrinter('Admin'))
// console.log(namePrinter(''))

//
// let result = a + b;
// if (result < 4) {
//     return ''
// }

// function bred() {
//     let name = prompt('Who are u???', '')
//     if (name === 'Boss') {
//         let password = prompt('passwordSyka', '')
//         if (password === 'BossOfTheGym') {
//             alert('DangeonMaster')
//         } else if (password === '' || password === null) {
//             alert('U?Fuck U!')
//         } else {
//             alert('Bandage!')
//         }
//     } else if (name === '' || name === null) {
//         alert('????')
//     } else {
//         alert('Fuck u! Asshole!!!')
//     }
// }
// bred()

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     } проверка на четные числа
// }

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// let number
// do {
//   number = prompt('100? Or No?', '')
// } while (number <= 100 && number)

// let n = 10
// next:for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) continue next
//   }
//   console.log(i)
// }

// const number = +prompt('Write number 0 or 3', '')
// switch (number) {
//   case 0:
//     console.log('U zero!')
//     break
//   case 1:
//     console.log('????')
//     break
//   case 2:
//   case 3:
//     console.log('Ebanylsya????')
//     break
//
// }

// Функции, начинающиеся с…
//
// "get…" – возвращают значение,
//   "calc…" – что-то вычисляют,
//   "create…" – что-то создают,
//   "check…" – что-то проверяют и возвращают логическое значение, и т.д.

function hello () {
  console.log('Dolbaeb???')
}
hello()
