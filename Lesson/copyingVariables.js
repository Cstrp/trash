//! копирование переменных

const a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

const person = {
  // мутация объекта
  name: "Valery",
  age: 25,
};

const person2 = person; //?копирование ссылки 'copy by reference'
person.age = 22;
person.isAdult = true; //?это

person2.age = 22; //? и это , одно и тоже
person2.isAdult = true;

const person3 = Object.assign({}, person); //? копирование объекта без внесения изменений в него
person3.age = 25; // все это с учетом того, что в объекте нет вложенности

const person4 = { ...person }; // разделение объекта на свойства, ссылки сохраняются
person4.name = "Alice"; //опять же без вложенности

const person5 = JSON.parse(JSON.stringify(person)); //? копирование без мутаций, без сохрания ссылок на вложенные объекты
person5.name = "Олег";

console.log(person.age);
console.log(person2.age);
console.log(person3.age);
console.log(person.name);
console.log(person4.name);
console.log(person5.name);
