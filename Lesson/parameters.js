// ! объявление пемеренных и доступ к ним

const objectA = {
  a: 10,
  b: false,
};

const copyOfA = objectA;

copyOfA.a = 20;
copyOfA.c = "hello";
copyOfA.d = {
  e: " world",
};
copyOfA.r = `${copyOfA.c + copyOfA.d.e}`;
console.log(objectA);

function a () {
  console.log("Hello World");
}

a();

a = 10;

a(); //? error - a is not a function

const a = () => {
  console.log("Hello World");
};

a();

a = 10; //?TypeError: Assignment to constant variable.

a();

const mySity = {
  //объект
  city: "Mogilev", //* свойства объекта
  popular: true,
  country: "Belarus",
  info: {
    isPopular: true,
    country: "Belarus", //* чтобы дойти досюда нужно использовать две точки!
  },
};

mySity.city = "Minsk";
mySity.president = "Vladimir Putin";
mySity["people"] = "200 million";
let countryProperty = "country"; //?добавление свойства объекта
countryProperty = "state";
mySity[countryProperty] = "USA"; //?скобочная запись
delete mySity.popular;

console.log(mySity);
console.log(mySity.president); //? получить доступ к полю sity
console.log(mySity.info.isPopular);

const name = "Valery";
const postsQty = 23;

const userProfile = {
  name, //?сокращенная запись, рекомендуется ставить в начале
  postsQty,
  hasSignature: true,
};
console.log(userProfile);

const myCity = {
  city: "Mogilev",
  ciryGreeting: function () {
    //?метод функции
    console.log("Greetings!!");
  },
};
myCity.ciryGreeting();

const post = {
  title: "My first post",
  body: "This is my first post",
};
console.log(JSON.stringify(post));

const post2 = JSON.stringify(post); //? JSON - JavaScript Object Notation - объект в формате JSON отличие в скобках
console.log(JSON.parse(post2)); //? JSON - JavaScript Object Notation - javascript формат
