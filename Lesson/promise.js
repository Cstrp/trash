// ! Промисы

//? создание промиса
// const myPromise = new Promise((resolve, reject) => {
/* выполнение асинхронных действий (это callback фукнция, где нужно выбрать одного из двух)
    внутри этой функции можно вызвать resolve - исполнен или reject - передается ошибка */
// });

//? получение результата промиса
// myPromise
//   .then((value) => {
// выполнение кода при успешном выполнении промиса
// value это значение, переданное в вызове функции resolve внутри промиса
//   })
//   .catch((error) => {
// выполнение кода при отклонения выполнения промиса
// error это ошибка, переданная в вызове функции reject внутри промиса
//   });

// fetch('https://jsonplaceholder.typicode.com/todos/1') //? возвращает промис
//   .then((response) => response.json()) //? преобразование промиса в json
//   .then((json) => console.log(json)) //? вывод в консоль
//   .catch((error) => console.log(error)); //? обработка ошибки

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// const getData = (url) => //? делаем на 1-н промис меньше
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then((responce) => responce.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error)),
//   );

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

//* async await

//todo ассинхронная функцкия

//note ASYNC

// async function asyncFn () {
//? всегда возвращает промис
// }

// const asyncFn = async() => {
//? всегда возвращает промис
// }

// const asyncFn = async () => {
//   return 'Privet Andrey!';
// };

// asyncFn().then((value) => console.log(value)); //? вернет строку

// const asyncFn = async () => {
//   throw new Error('ERRRRROOOOOR');
// };

// asyncFn().then((value) => console.log(value)).catch((error) => console.log(error.message));

//note AWAIT

// const asyncFn = async () => {
//   await Promise;
// };

// asyncFn();

// console.log(asyncFn());

// const timerPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));

// const asyncFn = async () => {
//   console.log('TImer srarts'); //? выведет мнгновенно
//   await timerPromise(); //? пока не выолнится функция (await ключевое слово), следующая часть кода не выполнится
//   console.log('Timer ended');
// };

// asyncFn();

// const asyncFn = async () => {
//   console.log('Start');
//   const startTime = performance.now();
//   await timerPromise();
//   const endTime = performance.now();
//   console.log('End', endTime - startTime);
// };

// asyncFn();

// Math.trunc(asyncFn());

//note переход с промисов на asyncv\await

const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const url = 'https://jsonplaceholder.typicode.com/todos';
// const data = await getData(url) //? нет обработки ошибок

try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}