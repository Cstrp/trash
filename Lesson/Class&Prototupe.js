//! Классы и прототипы

// class Comment {
//   //? коструктор и апвоут - методы
//   constructor (text) {
//     this.text = text; //? this указывает на экземпляр класса
//     this.voteQty = 0;
//   }
//   upvote () {
//     this.voteQty += 1;
//   }
//   downvote () {
//     this.voteQty -= 1;
//   }
// }
// const comment = new Comment('Комментарий'); //? создание экземпляра класса? с собственными свойствавми
// console.log(comment);

// comment.upvote(); //? наследует все методы объекта
//? comment > Coment > Object - цепочка прототипов

//* проверка принадлежности 'instanceof' "hasOwnProperty" (унаследовано от объетка)

// comment instanceof Comment; //? true
// comment instanceof Object; //? true

// comment.upvote(); //? вызов метода? (методы можно вызывать многократно)
// comment.upvote(); // ? увеличение значения переменной
// console.log(comment.upvote);

// comment.downvote(); //? уменьшение значения переменной
// console.log(comment.upvote);

//* создание нескольких экземпляров класса

// const comment1 = new Comment('Комментарий 1');
// const comment2 = new Comment('Комментарий 2');
// const comment3 = new Comment('Комментарий 3');

// comment1.upvote();
// comment1.upvote();
// comment1.upvote();

// comment2.upvote();
// comment2.downvote();
// comment2.downvote();
// comment2.downvote();

// comment3.upvote();

// console.log(comment1.text);
// console.log(comment2.voteQty);
// console.log(comment3);

//* статические медтоды

// class Comment {
//   constructor (text) {
//     this.text = text;
//     this.voteQty = 0;
//   }
//   upvote () {
//     this.voteQty += 1;
//   }
//   downvote () {
//     this.voteQty -= 1;
//   }
//   static mergeComments (first, second) {
//     return `${first} ${second}`; //? конкатенация текста
//   }
// }

// Comment.mergeComments('first comment', 'second comment'); //? метод доступен как свойство класса и `(не наследуется)` экземплярами класса

// const myComment = new Comment.mergeComments('Мой комментарий', 'Мой комментарий2'); //? рабоать не будет
// console.log(myComment);

// const myComment = new Comment('Мой комментарий');
// console.log(myComment);

//* расширение других классов

// class NumbersArray extends Array { //? Array родительский коструктор вызовется автоматически
//   sum () { //? коструктор не нужен при расширении, т.к. он унаследован от родителя (добавление метода sum)
//     return this.reduce((el, acc) => acc += el, 0); //? reduce - метод массива доступен
//   }
// }

// const myArray = new NumbersArray(11, 45, 12);

// console.log(myArray.sum()); //? 17
// console.log(myArray);
// myArray.sum(); //? 17

// console.log(myArray.sum());
