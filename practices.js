"use strick";
// // // // // // // // // // let base = Number(prompt("give me a number"));
// // // // // // // // // // let power = Number(prompt("give me a stepen"));
// // // // // // // // // // const result = base ** power;
// // // // // // // // // // console.log('Result:', result);

// // // // // // // // // // let min = Number(prompt('Gime me max number'));
// // // // // // // // // // let max = Number(prompt('Gime me min number'));
// // // // // // // // // // const result = Math.round(Math.random() * (max - min) + min);
// // // // // // // // // // console.log('Random number:', result);

// // // // // // // // // // const colors = ['pink' ,'blue', 'tomato', 'green' , 'blue'];
// // // // // // // // // // const max = colors.length - 1;
// // // // // // // // // // const min = 0;
// // // // // // // // // // const index = Math.round(Math.random() * (max - min) + min);
// // // // // // // // // // const color = colors[index];

// // // // // // // // // // document.body.style.backgroundColor = color;

// // // // // // // // // // function formatMessage(message, maxLength) {
// // // // // // // // // //     let result;
// // // // // // // // // //     let messageSlice = message.slice(0, maxLength);
// // // // // // // // // //     // Change code below this line
// // // // // // // // // //   if (Number.maxLength <= 20){
// // // // // // // // // //     result = String.messageSlice + '...';
// // // // // // // // // //   }else{
// // // // // // // // // //     result = messageSlice;
// // // // // // // // // //   }
// // // // // // // // // //     /// Change code above this line
// // // // // // // // // //     return result;
// // // // // // // // // //   }

// // // // // // // // // // function checkForSpam(message) {
// // // // // // // // // //   let result;
// // // // // // // // // //   // Change code below this line

// // // // // // // // // //   // Change code above this line
// // // // // // // // // //   return result = message.toLowerCase.icludes("sale") || message.toLowerCase.includes("spam");
// // // // // // // // // // }

// // // // // // // // // // const apartment = {
// // // // // // // // // //   descr: "Spacious apartment in the city center",
// // // // // // // // // //   rating: 4,
// // // // // // // // // //   price: 2153,
// // // // // // // // // // };
// // // // // // // // // // const keys = [];
// // // // // // // // // // const values = [];
// // // // // // // // // // // Change code below this line
// // // // // // // // // // // for (key of Object.keys(apartment)) {
// // // // // // // // // // //   keys.push(key);
// // // // // // // // // // // }

// // // // // // // // // // // for (value of Object.values(apartment)) {
// // // // // // // // // // //   values.push(value);
// // // // // // // // // // // }
// // // // // // // // // // // for (const key in apartment) {
// // // // // // // // // // //   if (apartment.hasOwnProperty(key)) {
// // // // // // // // // // //     keys.push(key);
// // // // // // // // // // //   }
// // // // // // // // // // //   for (const value in apartment) {
// // // // // // // // // // //     if (apartment.hasOwnProperty(value)) {
// // // // // // // // // // //       values.push(value);
// // // // // // // // // // //     }
// // // // // // // // // // //   }
// // // // // // // // // // // }
// // // // // // // // // // for (const key in apartment) {
// // // // // // // // // //   keys.push(key);
// // // // // // // // // //   values.push(apartment[key]);
// // // // // // // // // // }
// // // // // // // // // // // for (const value in apartment) {
// // // // // // // // // // //   values.push(value);
// // // // // // // // // // // }

// // // // // // // // // // console.log(keys, values);

// // // // // // // // // function countProps(object) {
// // // // // // // // //   //   let propCount = 0;
// // // // // // // // //   //   // Change code below this line
// // // // // // // // //   //   const keys = Object.keys(object);

// // // // // // // // //   //   for (const key of keys) {
// // // // // // // // //   //     if (object.hasOwnProperty(key)) {
// // // // // // // // //   //       propCount += 1;
// // // // // // // // //   //     }
// // // // // // // // //   //   }
// // // // // // // // //   let propCount = 0;
// // // // // // // // //   const keys = Object.keys(object);
// // // // // // // // //   for (const key of keys) {
// // // // // // // // //     if (object.hasOwnProperty(key)) {
// // // // // // // // //       propCount += 1;
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   //   // Change code above this line
// // // // // // // // //   return propCount;
// // // // // // // // // }

// // // // // // // // // console.log(countProps({}));
// // // // // // // // // console.log(countProps({ name: "Mango", age: 2 }));
// // // // // // // // // console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// // // // // // // // // // const apartment = {
// // // // // // // // // //   descr: "Spacious apartment in the city center",
// // // // // // // // // //   rating: 4,
// // // // // // // // // //   price: 2153,
// // // // // // // // // // };
// // // // // // // // // // const values = [];
// // // // // // // // // // // Change code below this line
// // // // // // // // // // const keys = Object.keys(apartment);
// // // // // // // // // // for (const value of Object.values(apartment)) {
// // // // // // // // // //   values.push(value);
// // // // // // // // // // }
// // // // // // // // // // console.log(values);

// // // // // // // // // const colors = [
// // // // // // // // //   { hex: "#f44336", rgb: "244,67,54" },
// // // // // // // // //   { hex: "#2196f3", rgb: "33,150,243" },
// // // // // // // // //   { hex: "#4caf50", rgb: "76,175,80" },
// // // // // // // // //   { hex: "#ffeb3b", rgb: "255,235,59" },
// // // // // // // // // ];

// // // // // // // // // const hexColors = [];
// // // // // // // // // const rgbColors = [];
// // // // // // // // // // Change code below this line
// // // // // // // // // for (const color of colors) {
// // // // // // // // //   hexColors.push(color.hex);
// // // // // // // // //   rgbColors.push(color.rgb);
// // // // // // // // // }
// // // // // // // // // console.log(hexColors);
// // // // // // // // // console.log(rgbColors);

// // // // // // // // // const products = [
// // // // // // // // //   { name: "Radar", price: 1300, quantity: 4 },
// // // // // // // // //   { name: "Scanner", price: 2700, quantity: 3 },
// // // // // // // // //   { name: "Droid", price: 400, quantity: 7 },
// // // // // // // // //   { name: "Grip", price: 1200, quantity: 9 },
// // // // // // // // // ];

// // // // // // // // // function getProductPrice(productName) {
// // // // // // // // //   for (const product of products) {
// // // // // // // // //     if (product.name === productName) {
// // // // // // // // //       return product.price;
// // // // // // // // //     }
// // // // // // // // //   }
// // // // // // // // //   return null;
// // // // // // // // // }
// // // // // // // // // console.log(getProductPrice("Radar"));
// // // // // // // // // console.log(getProductPrice("Grip"));
// // // // // // // // // console.log(getProductPrice("Scanner"));
// // // // // // // // // console.log(getProductPrice("Droid"));
// // // // // // // // // console.log(getProductPrice("Engine"));

// // // // // // // // // const products = [
// // // // // // // // //   { name: "Radar", price: 1300, quantity: 4 },
// // // // // // // // //   { name: "Scanner", price: 2700, quantity: 3 },
// // // // // // // // //   { name: "Droid", price: 400, quantity: 7 },
// // // // // // // // //   { name: "Grip", price: 1200, quantity: 9 },
// // // // // // // // // ];

// // // // // // // // // function getAllPropValues(propName) {
// // // // // // // // //   // достать значенія из массива
// // // // // // // // //   // сделать проверку равно лі ключ имени запрашіваемому імени
// // // // // // // // //   // запушіть в массив значеніе, еслі есть такое імя
// // // // // // // // //   // const keys = Object.values(products);
// // // // // // // // //   let x = [];
// // // // // // // // //   for (const product of products) {
// // // // // // // // //     // if (product.hasOwnProperty(propName)) {
// // // // // // // // //     x.push(product[propName]);
// // // // // // // // //     // }
// // // // // // // // //   }
// // // // // // // // //   return x;
// // // // // // // // // }

// // // // // // // // // console.log(getAllPropValues("name"));
// // // // // // // // // console.log(getAllPropValues("quantity"));
// // // // // // // // // console.log(getAllPropValues("price"));
// // // // // // // // // console.log(getAllPropValues("category"));

// // // // // // // // const products = [
// // // // // // // //   { name: "Radar", price: 1300, quantity: 4 },
// // // // // // // //   { name: "Scanner", price: 2700, quantity: 3 },
// // // // // // // //   { name: "Droid", price: 400, quantity: 7 },
// // // // // // // //   { name: "Grip", price: 1200, quantity: 9 },
// // // // // // // // ];
// // // // // // // // // сделать тотал прайс
// // // // // // // // // перебрать массів обьектов
// // // // // // // // // сделать проверку
// // // // // // // // // посчітать тотал прайс
// // // // // // // // // вернуть тотал прайс
// // // // // // // // function calculateTotalPrice(productName) {
// // // // // // // //   // Пиши код ниже этой строки
// // // // // // // //   let totalPrice = 0;
// // // // // // // //   for (const product of products) {
// // // // // // // //     const { name, price, quantity } = product;
// // // // // // // //     if (name === productName) {
// // // // // // // //       totalPrice += price * quantity;
// // // // // // // //     }
// // // // // // // //   }
// // // // // // // //   return totalPrice;

// // // // // // // //   // Пиши код выше этой строки
// // // // // // // // }
// // // // // // // // // console.log(calculateTotalPrice("Blaster"));
// // // // // // // // console.log(calculateTotalPrice("Radar"));

// // // // // // // const colors = [
// // // // // // //   { hex: "#f44336", rgb: "244,67,54" },
// // // // // // //   { hex: "#2196f3", rgb: "33,150,243" },
// // // // // // //   { hex: "#4caf50", rgb: "76,175,80" },
// // // // // // //   { hex: "#ffeb3b", rgb: "255,235,59" },
// // // // // // // ];

// // // // // // // const hexColors = [];
// // // // // // // const rgbColors = [];
// // // // // // // // Change code below this line

// // // // // // // for (const color of colors) {
// // // // // // //   const { hex, rgb } = color;
// // // // // // //   console.log(hex, rgb);
// // // // // // //   hexColors.push(hex);
// // // // // // //   rgbColors.push(rgb);
// // // // // // // }

// // // // // // // function multiply(firstNumber, secondNumber, ...otherArgs) {
// // // // // // //   console.log(firstNumber); // Значение первого аргумента
// // // // // // //   console.log(secondNumber); // Значение второго аргумента
// // // // // // //   console.log(otherArgs); // Массив остальных аргументов
// // // // // // // }

// // // // // // // multiply(1, 2);
// // // // // // // multiply(1, 2, 3);
// // // // // // // multiply(1, 2, 3, 4);

// // // // // // // Change code below this line
// // // // // // function findMatches(numbers, ...args) {
// // // // // //   const matches = []; // Don't change this line
// // // // // //   for (const number of numbers) {
// // // // // //     if (args.includes(number)) {
// // // // // //       matches.push(number);
// // // // // //     }
// // // // // //   }
// // // // // //   // Change code above this line
// // // // // //   return matches;
// // // // // // }

// // // // // // console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// // // // // // // console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// // // // // const atTheOldToad = {
// // // // //   potions: [
// // // // //     { name: "Speed potion", price: 460 },
// // // // //     { name: "Dragon breath", price: 780 },
// // // // //     { name: "Stone skin", price: 520 },
// // // // //   ],
// // // // //   // Change code below this line
// // // // //   getPotions() {
// // // // //     return this.potions;
// // // // //   },
// // // // //   addPotion(newPotion) {
// // // // //     const { potions } = this;
// // // // //     for (const potion of potions) {
// // // // //       if (potion.name === newPotion.name) {
// // // // //         return `Error! Potion ${newPotion.name} is already in your inventory!`;
// // // // //       }
// // // // //     }
// // // // //     potions.push(newPotion);

// // // // //     return potions;
// // // // //   },
// // // // //   removePotion(potionName) {
// // // // //     const { potions } = this;
// // // // //     for (let i = 0; i < potions.length; i += 1) {
// // // // //       // console.log(potions[i]);
// // // // //       const { name } = potions[i];
// // // // //       if (potionName === name) {
// // // // //         potions.splice(i, 1);
// // // // //         return potions;
// // // // //       }
// // // // //     }
// // // // //     return `Potion ${potionName} is not in inventory!`;
// // // // //   },
// // // // //   updatePotionName(oldName, newName) {
// // // // //     const { potions } = this;
// // // // //     for (const potion of potions) {
// // // // //       if (oldName === potion.name) {
// // // // //         potion.name = newName;
// // // // //       }
// // // // //     }
// // // // //     return potions;
// // // // //   },
// // // // //   // Change code above this line
// // // // // };
// // // // // // console.table(atTheOldToad.potions);
// // // // // // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// // // // // console.log(
// // // // //   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// // // // // );

// // // // // // for (let i = 0; i < potions.length; i += 1) {
// // // // // //   const { name } = potions[i];
// // // // // //   if (oldName === name) {
// // // // // //     for (const potion of potions) {
// // // // // //       potion.name = newName;
// // // // // //     }
// // // // // //     return potions;
// // // // // //   }
// // // // // // }

// // // // const products = [
// // // //   { name: "Radar", price: 1300, quantity: 4 },
// // // //   { name: "Scanner", price: 2700, quantity: 3 },
// // // //   { name: "Droid", price: 400, quantity: 7 },
// // // //   { name: "Grip", price: 1200, quantity: 9 },
// // // // ];

// // // // getProductPrice = (productName) => {
// // // //   for (const product of products) {
// // // //     const { name, price } = product;
// // // //     console.log(name);
// // // //     let productPrice = name === productName ? price : null;
// // // //   }
// // // //   return;
// // // // };
// // // // console.log(getProductPrice("Scanner"));

// // // makePizza = () => "Your pizza is being prepared, please wait.";
// // // // Change code below this line

// // // const result = makePizza();
// // // const pointer = result;
// // // console.log(pointer);

// // //
// // //
// // //
// // //
// // //
// // //
// // //

// // // const pizzaPalace = {
// // //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
// // //   order(pizzaName, makePizza, onOrderError) {
// // //     const { pizzas } = this;
// // //     pizzas.forEach((pizza) => {
// // //       return pizza === pizzaName ? makePizza(pizza) : onOrderError(pizzaName);
// // //     });
// // //   },
// // // };
// // // // Change code above this line

// // // // Callback for onSuccess
// // // function makePizza(pizzaName) {
// // //   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// // // }

// // // // Callback for onError
// // // function onOrderError(error) {
// // //   return `There is no pizza with a name ${error} in the assortment.`;
// // // }

// // // // Method calls with callbacks
// // // console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// // // pizzaPalace.order("Four meats", makePizza, onOrderError);
// // // console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// // // console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// // // Change code below this line
// // const changeEven = (numbers, value) => {
// //   // Change code below this line

// //   const newNumber = numbers.map((number) =>
// //     number % 2 === 0 ? (number += value) : number
// //   );
// //   return newNumber;
// //   // Change code above this line
// // };

// // // function changeEven(numbers, value) {
// // //   // Change code below this line

// // //   const newNumbers = [];
// // //   // numbers.forEach((number) => {
// // //   //   if (number % 2 === 0) {
// // //   //     newNumbers.push((number += value));
// // //   //   }
// // //   //   if (number % 2 !== 0) {
// // //   //     newNumbers.push(number);
// // //   //   }
// // //   // });
// // //   numbers.forEach((number) =>
// // //     number % 2 === 0
// // //       ? newNumbers.push((number += value))
// // //       : newNumbers.push(number)
// // //   );
// // //   return newNumbers;
// // // Change code above this line
// // // }

// // console.log(changeEven([17, 24, 68, 31, 42], 100));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books;

// console.log(topRatedBooks);

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.indexOf(friendName) !== -1);
// };

// // console.log(getUsersWithFriend(users, "Briana Decker"));

// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((name, index, arrName) => arrName.indexOf(name) === index);
// console.log(getFriends(users));

// const getActiveUsers = (users) =>
//   users.filter((user) => user.isActive === true);

// console.log(getActiveUsers(users));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// const getTotalFriendCount = (users) =>
//   users.reduce((acc, user) => (acc += user.friends.length), 0);

// console.log(getTotalFriendCount(users));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author));

// console.log(names);
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((name, index, arr) => arr.indexOf(name) === index)
//     .sort((a, b) => a.localeCompare(b));
// console.log(getSortedFriends(users));
// const getTotalBalanceByGender = (users, gender) =>
//   users.reduce(
//     (acc, user) => (user.gender === gender ? acc + user.balance : acc),
//     0
//   );
// const getTotalBalanceByGender = (users, gender) =>
//   users.gender !== gender
//     ? users.reduce((acc, user) => acc + user.balance, 0)
//     : "Введен не правильньій гендер";

// console.log(getTotalBalanceByGender(users, "female"));

// console.log(2.4 % 1);

// console.log([] == []);
// const objC = { z: 2 };
// const objB = { y: 1, __proto__: objC };
// const objA = { x: 0, __proto__: objB };

// console.log(objA);

/*
 * !ФУНКЦИЯ КОНСТРУКТОР
 */

// const Car = function ({ model = 'model', color = 'color', price = 'price', brand = 'brand' } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.color = color;
//   this.price = price;
// };
// Car.prototype.updatePrice = function (newPrice) {
//   this.price = newPrice;
// };
// const BMW = {
//   brand: "BMW",
//   model: "240i",
//   color: "green",
//   price: 60000,
// };
// const AUDI = {
//   brand: "AUDI",
//   model: "A6C8",
//   color: "blue",
//   price: 120000,
// };
// const PORSCHE = {
//   brand: "PORSCHE",
//   model: "Panamera",
//   color: "black",
//   price: 240000,
// };
// const FORD = {
//   year: 2022,
// };
// const bmw = new Car(BMW);
// bmw.updatePrice(10);
// console.log(bmw);
// const audi = new Car(AUDI);
// console.log(audi);
// const porsche = new Car(PORSCHE);
// console.log(porsche);
// const ford = new Car(FORD);
// console.log(ford);

/*
 * !ФУНКЦИЯ КОНСТРУКТОР
 */

/*
 * !КЛАСС
 */

// class Car {
//   constructor({
//     brand = "brand",
//     model = "model",
//     price = "price",
//     color = "color",
//   } = {}) {
//     this.brand = brand;
//     this._price = price;
//     this._model = model;
//     this._color = color;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }
//   get price() {
//     return this._price;
//   }
//   set model(newModel) {
//     this._model = newModel;
//   }
//   get model() {
//     return this._model;
//   }
//   set color(newColor) {
//     this._color = newColor;
//   }
//   get color() {
//     return this._color;
//   }
// }

// const BMW = {
//   brand: "BMW",
//   model: "240i",
//   color: "green",
//   price: 60000,
// };
// const AUDI = {
//   brand: "AUDI",
//   model: "A6C8",
//   color: "blue",
//   price: 120000,
// };
// const PORSCHE = {
//   brand: "PORSCHE",
//   model: "Panamera",
//   color: "black",
//   price: 240000,
// };
// const FORD = {};
// const bmw = new Car(BMW);
// console.log(bmw);
// const audi = new Car(AUDI);
// console.log(audi);
// const porsche = new Car(PORSCHE);
// console.log(porsche);
// const ford = new Car(FORD);
// console.log(ford);
// console.log(bmw.model);
/*
 * !КЛАСС
 */

// const luckynums = 11223232435556454;
// const numbers = [...String(luckynums)]
//   .map((num) => Number(num))
//   .reduce((acc, num, i, arr) => (arr.includes(i) ? (acc += 1) : acc), 0);

// console.log("numbers", numbers);

// class Storage {
//   constructor(params) {
//     this.items = params;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     const i = this.items.indexOf(item);
//     i > -1 ? this.items.splice(i, 1) : this.items;
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// // storage.addItem("Droid");
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems());

// class Car {
//   // Change code below this line

//   constructor({ brand, model, price }) {
//     this.model = model;
//     this.price = price;
//     this.#brand = brand;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// class Car {
//   // Change code below this line
//   static MAX_PRICE = "50000";
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     Car.MAX_PRICE > newPrice ? (this.#price = newPrice) : this.#price;
//   }

//   // Change code above this line
// }
// // console.log(Car.MAX_PRICE);

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price <= Car.#MAX_PRICE) {
//       return "Success! Price is within acceptable limits";
//     }
//     return "Error! Price exceeds the maximum";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price));

// console.log(Car.checkPrice(18000));

// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   const x = fib(n - 2);
//   const y = fib(n - 1);
//   return x + y;
// }

// console.log(fib(100));

// const oldFib = (n) => {
//   if (n <= 1) {
//     return n;
//   } else {
//     return oldFib(n - 1) + oldFib(n - 2);
//   }
// };

// const memoize = (f) => {
//   const cache = {};
//   return (arg) => cache[arg] || (cache[arg] = f(arg));
// };

// const fib = memoize(oldFib);
// const fib = (n) => {
//   const a = (1 + 5 ** 0.5) / 2;
//   return Math.round(a ** n / 5 ** 0.5);
// };
// console.log(fib(9999));

// console.log(2 ** 0);

const arr = [1, 1, 1, 3, 2, 4, 5, 4, 2, 4, 5, 6, 7, 7, 5, 9];
// const arr2 = [];
// arr.reduce((acc, num, i, arr) => {
//   return acc === num ? arr2.push(num) : [];
// });

const uniq = [];

const arr2 = arr.reduce((acc, num, i, arr) => {
  if (arr.indexOf(num) === i) {
    uniq.push(num);
  }
}, 0);
console.log("sss", uniq);
