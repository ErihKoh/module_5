// // ?task 1
// // Write code under this line
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account("Mangozedog", "mango@dog.woof");
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account("Poly", "poly@mail.com");
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

// task 2
// Write code under this line
// const User = function (name = "", age = 0, followers = 0) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers;
// };

// User.prototype.getInfo = function () {
//   return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
// };
// console.log(typeof User);
// // 'function'

// const mango = new User("Mango", 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// // 'function'

// const poly = new User("Poly", 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

// task 3

// Write code under this line
// const Storage = function (items = []) {
//   this.items = items;
// };
// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (item) {
//   return this.items.push(item);
// };

// Storage.prototype.removeItem = function (item) {
//   if (this.items.includes(item)) {
//     let index = this.items.indexOf(item);
//     return this.items.splice(index, 1);
//   }
// };

// console.log(typeof Storage);
// 'function'

// const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

// const storage = new Storage(goods);

// console.log(storage.getItems());
//["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

// storage.addItem("Дроид");
// console.log(storage.getItems());
//["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид"];

// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
//["Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид"];

// ?task 4

// Write code under this line

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     const arr = this._value.split();
//     arr.push(str);
//     return (this._value = arr.join(""));
//   }
//   prepend(str) {
//     const arr = this._value.split();
//     arr.unshift(str);
//     return (this._value = arr.join(""));
//   }
//   pad(str) {
//     this.append(str);
//     this.prepend(str);
//   }
// }
// console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// Only change code below this line
// class Thermostat {
//   constructor(fahrenheit) {
//     this.fahrenheit = fahrenheit;
//   }

//   get temperature() {
//     return (5 / 9) * (this.fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     this.fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }

// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// task 5

// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn},
//     distance: ${car.distance}, price: ${car.price}`;
//   }
//   constructor({
//     maxSpeed = 0,
//     speed = 0,
//     isOn = false,
//     distance = 0,
//     price = 0,
//   } = {}) {
//     (this.maxSpeed = maxSpeed),
//       (this.speed = speed),
//       (this.isOn = isOn),
//       (this.distance = distance),
//       (this.price = price);
//   }
//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     return (this._price = newPrice);
//   }
//   turnOn() {
//     return (this.isOn = true);
//   }
//   turnOff() {
//     return (this.isOn = false), (this.speed = 0);
//   }
//   accelerate(value) {
//     return this.speed + value <= this.maxSpeed
//       ? (this.speed = this.speed + value)
//       : (this.speed = this.maxSpeed);
//   }
//   decelerate(value) {
//     return this.speed - value >= 0
//       ? (this.speed = this.speed - value)
//       : (this.speed = 0);
//   }
//   drive(hours) {
//     return this.isOn
//       ? (this.distance = this.speed * hours + this.distance)
//       : this.distance;
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
