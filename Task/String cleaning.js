//?  Your boss decided to save money by purchasing some cut-rate optical
//?   character recognition software for scanning in the text of old novels to
//?   your database. At first it seems to capture words okay, but you quickly
//?   notice that it throws in a lot of numbers at random places in the text.

//! Examples (input -> output)
//! '! !'                 -> '! !'
//! '123456789'           -> ''
//! 'This looks5 grea8t!' -> 'This looks great!'
//?   Your harried co-workers are looking to you for a solution to take this
//?   garbled text and remove all of the numbers. Your program will take in a
//?   string and clean out all numeric characters, and return a string with
//?   spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//?  Ваш босс решил сэкономить деньги, купив по сниженной цене оптическую
//? программное обеспечение для распознавания символов для сканирования текста старых романов в
//? вашей базы данных. Сначала кажется, что программа распознает слова нормально, но вы быстро //?
//? замечаете, что она вбрасывает множество цифр в случайных местах текста.

//?  Ваши измученные коллеги ищут у вас решение, как взять этот
//? беспорядочный текст и удалить все цифры. Ваша программа примет
//? строку, очистит все числовые символы и вернет строку с
//? интервалом и специальными символами ~#$%^&!@*():;"'.,? нетронутой.

function stringClean(s) {
  //todo ПРАВИЛЬНОЕ РЕШНИЕ
  return s.replace(/[^a-zA-Z~#$%^&!@*():;"'.,?s +]/g, '');
}

// function stringClean (s) {  //todo НЕПРАВИЛЬНОЕ РЕШНИЕ
//   return s.replace(/([^a-zа-яё\s!])/gi, " ");
// }

// console.log(stringClean("This looks5 grea8t!"));

// function stringClean2 (s) { //todo НЕПРАВИЛЬНОЕ РЕШНИЕ
//   return s.replace(/[^a-zA-Z~#$%^&!@*():;"'.,?s+]/g, "");
// }
// console.log(stringClean2("This looks5 grea8t!"));

// (/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

// function replacer (match, p1, p2, p3, offset, string) {
// p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры
//   return [ p1, p2, p3 ].join(" - ");
// }
// var newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString); //? пример из документации
