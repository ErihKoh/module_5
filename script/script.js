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
