//Array Destructing:A basically way of unpacking values from an array or object into separates value
/*
'use strict';
//ES6 object enhanced
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 12,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0,
    close: 24,
  },
};

*/

/*
const resturant = {
  name: 'Classico Italianio',
  location: 'Via Angelo Tavanti 23,Firenze,Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object litearls for object,method1
  // hours,
  // ES6 object literals for writing method2
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 object inhanced method3
  //   const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
  // const hours = {
  //   [weekdays[3]]: {
  //     open: 12,
  //     close: 12,
  //   },
  //   [weekdays[5]]: {
  //     open: 11,
  //     close: 23,
  //   },
  //   [weekdays[2]]: {
  //     open: 0,
  //     close: 24,
  //   },
  // };

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order Received!! ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]} will delivered to ${address} at ${time}.`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3} `
    );
  },

  orderPizza: function (mianIngredient, ...other) {
    console.log(mianIngredient);
    console.log(other);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

*/

// resturant.orderDelivery({
//   time: '22:30',
//   address: 'Via Del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });


/*
// Object Destructing
// to destruct object we use carly braces because we created object with carly braces
// For destructing we use to the exact property name which we use in object.In object basically order of property doesn't matter and for that we don't need to skip a variable in similar to destruct array;

const { name, openingHours, location } = resturant;
console.log(name);
console.log(openingHours);
console.log(location);

Use other name and handle this situation when destructing object
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;

console.log(resturantName);
console.log(hours);
console.log(tags);

const { menu = [], starterMenu: item = [] } = resturant;

console.log(menu, item);
Default variables in Object destructing

const { menu, starterMenu: item = [] } = resturant;
console.log(menu, item); // the result of menu is undefined because it is not the property of resturant object


*/

/*

// Mutating Variables

let m = 999,
  n = 234;
const obj = { m: 23, n: 7, c: 14 };
({ m, n } = obj);
console.log(m, n);

Nested Object
const { fri } = resturant.openingHours;
console.log(fri);

const {
  fri: { open, close },
} = resturant.openingHours;

console.log(fri);
console.log(open);
console.log(close);

*/

/*

// Destructing an array;

//Traditional Method:
let arr = [1, 2, 3, 5, 6];
let a, b, c;
a = arr[0];
b = arr[1];
c = arr[2];

// Destructing Method
let [p, q, r] = arr;
console.log(p, q, r);

const [first, second] = resturant.categories;

//to skip any value and print the next

let [main, , secondary] = resturant.categories;
console.log(main, secondary);


*/
/*


// Swapping main and secondary
// Traditional Way

let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//By Using Destructing Method
[secondary, main] = [main, secondary];

const [starter, maini] = resturant.order(2, 0);
console.log(resturant.order(2, 0));
console.log(starter, maini);

//Nested destructing
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//We can set default value when we are extracting
const [x, y, z = 0] = [8, 9];
console.log(x, y, z);

*/

/*

// Spread Operators

// Traditional Method

const newArray = [7, 8, 9];
const badNewArray = [1, 2, newArray[0], newArray[1], newArray[2]];
console.log(badNewArray);

// By using spread Operator

const newArr = [1, 2, ...newArray];
console.log(newArr);
console.log(...newArr);

const newMenu = [...resturant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...resturant.mainMenu];
console.log(mainMenuCopy);

// Join two arrrays or more together

const menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

// Spread Operator in String

const str = 'Jonas';
const letter = [...str];
console.log(...str);
console.log(letter);

// Real World Example
const ingredients = [
  prompt("Let's make Pasta! Ingredient 1?"),
  prompt("Let's make Pasta! Ingredient 2?"),
  prompt("Let's make Pasta! Ingredient 3?"),
];
console.log(ingredients);

resturant.orderPasta(...ingredients);


*/


// Objects
/*
const newResturant = { foundedIn: 1997, ...resturant, founder: 'Guiseppe' };
console.log(newResturant);

const resturantCopy = { ...resturant };
resturantCopy.name = 'Md Mehedi Hassan House';
console.log(resturantCopy);

// Destructing

// Spread because of right side of=

const arr = [1, 2, ...[3, 4]];

// Rest because of left side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];

console.log(pizza);
console.log(rissoto);
console.log(otherFood); /// Rest syntax collect all the value after last variable

and we could not do this
const [pizza,rissoto,...otherFood,bread]=[...resturant.starterMenu,...resturant.mainMenu]

REST element must be the last element

Objects

const { sat, ...weekDays } = resturant.openingHours;
console.log(sat, weekDays);

*/


/*

// Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
};

add(3, 4);
add(2, 3, 2, 5, 6, 7);
add(3, 4, 5, 2, 1, 7, 8, 40);

const x = [23, 5, 7];
add(...x);


// REST syntax is taking multiple numbers or multiple values and pack them all into an array

// Using REST parameter in resturant object different casses

// resturant.orderPizza('Mashroom', 'Onion', 'Olives', 'Spinach');

/// Short Circuiting AND and OR Operator

// Logical operator can use any data type,return any data type,they do shor circuiting or short circuit evaluation

// In case of OR operator short circuiting means that if the first value is a truthy value it willl immediately return the first value

// console.log('---------OR--------');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas'); // empty string is a false value and that the reason it returns the second one 'Jonas'
// console.log(true || 0); // true is a truthy value and that is the reason it returns the first one
// console.log(undefined || null); // undefined is a falsy value

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello here is the first truthy value and that the reason it returns Hello

// According to the working principle of OR operator if the first value is truty value then it don't saw the rest of the operation and it will short cirtcuit and return the first result

// const guest1 = resturant.numGuest ? resturant.numGuest : 10;
// console.log(guest1);

// console.log('---------AND--------');

// AND operator short circuit when the first value is falsy and immediately returns the 0;

// AND operator returns the truty and evaluations continous and then simply the last value is returned

// AND operator is only ture if all the operands are ture and if the first operands is false then it means the entire result of AND operations already be false anyway and there is no need to look any other operands
// console.log(0 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (resturant.orderPizza) {
//   resturant.orderPizza('mushroom', 'spnich');
// }

//Nulish Coalesching Operator

// NUllish : null and undefined(NOT 0 or '');
// const guestCorrect = resturant.numGuests ?? 10;
// console.log(guestCorrect);

// Looping over Arrays: for-of loop
// const menu = [...resturant.starterMenu, ...resturant.mainMenu];

// for (let item of menu) {
//   console.log(item);
// }

// // IN case of getting index
// for (let item of menu.entries()) {
//   console.log(item);
// }

// for (let [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//Enhaanced object literals

// Optional Chaining

//  if a certain property doesn't exists then undefined is return immediately and that will that avoid that kind of error that we saw in erlier

// if (resturant.openingHours.mon) {
//   console.log(resturant.openingHours.mon.open);
// }

// if (resturant.openingHours.fri) {
//   console.log(resturant.openingHours.fri.open);
// }

// if (resturant.openingHours && resturant.openingHours.mon) {
//   console.log(resturant.openingHours.mon.open);
// }

// With optional Chaining

// console.log(resturant.openingHours.mon?.open);

// the working method of the above line is ,when only the resturant.openingHours.mon is exists then open can be performed and if not then immmediately undefined is occured and exists is the nullish concept that we heared in before

// The optional Chainging operator is (?.)
// console.log(resturant.openingHours?.mon?.open);

// Optional Chaing: Real World Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (let day of days) {
//   console.log(day);
//   const open = resturant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day} we open at ${open}`);
// }

Optional Chaining in Methods
// We can check a method exists before calls it
console.log(resturant.order?.(0, 1) ?? 'Method Does not exists.');

A mehtod which is not in resturant object
console.log(resturant.orderRissoto?.(0, 1) ?? 'Method Does not exists.');

Optional chaining works in Arrays

const user = [
  {
    name: 'Jonas',
    email: 'jonas@gmail.com',
  },
];

console.log(user[0]?.name ?? 'User array empty');

const user = [];
console.log(user[0]?.name ?? 'User array Empty');

Without optional chaining we do the same thing in that way
if (user.length > 0) {
  console.log(user[0].name);
} else {
  console.log('User Array Empty');
}

/ Loooking object ,object_keys and values

/ Property Name:
let properties = Object.keys(resturant.openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;
for (const day of properties) {
  openStr += day;
}
console.log(openStr);

Property values
const values = Object.values(resturant.openingHours);
console.log(values);

Loop over object ,we use entries method and it returns index nummber and the element itself

Entire Object
const entries = Object.entries(resturant.openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

Sets
Set is a collection of unique values and holds mixed data types
// 
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);
console.log(orderSet);
console.log(new Set('Jonas'));

// size of a set
console.log(orderSet.size);

// Check a certain element is in set
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Spinach'));

// Add new element in a set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

// Delete elements form set
orderSet.delete('Risotto');
console.log(orderSet);
Delete all of the element of the set
orderSet.clear();
console.log(orderSet);

// Sets are iterable
for (let order of orderSet) {
  console.log(order);
}

// Example:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);*/

// // /// Map in JS
/*
const rest = new Map();
rest.set('name', 'Classiano Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Milano,Italy')); // Map methtod returns new set
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are true');

// Read data form map we used to get method(pass in the name of the key)
const time = 21;
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

how to check a map contains certain key
console.log(rest.has('categories'));

Delete element form map
console.log(rest.delete(2));

Size of map
console.log(rest.size);

remove all the elements form the map
rest.clear();
console.log(rest);
console.log(rest.size);

// Use array and object as a map keys
const arr = [1, 2];
rest.set(arr, 'Test');
// console.log(rest.get(arr));

// Map Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
// console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(resturant.openingHours));
// console.log(hoursMap);

Iteration
console.log(question.get('question'));
for (let [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const prompt = require('prompt-sync')();
const answer = Number(prompt('Your Answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert Map to Array

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// Working with strings
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// Length of String
console.log(airline.length);
console.log('B737'.length);

// Methods of String
console.log(airline.indexOf('T'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4)); // This is the begin parameter of the string that means strign was stract from here
console.log(airline.slice(4, 7)); // The last parameter of the slice method is not included ;
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Negative indexing is start extracting form end

// JavaScript Convert that string primitive to a string object with the same content.And then it's on that object where methods are called.And this process is called as boxing because it basiclly takes our string and put it into a box which is the object

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalaization on a passenger name
const passenger = 'jOnAS'; //It should looks like this 'Jonas'
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing Email
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// A method of String is trimmed which removes the whitespace before and after of a string

const lowerEmail = email.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// // Another Way

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail ? 'Equal' : 'Not Equal');

// String Replace
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All Passengers come to boarding door 23.Boarding door 23!!';
console.log(announcement);
console.log(announcement.replace('door', 'gate'));

// Replace all the occurances

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plan = 'Airbus A320neo';
console.log(plan.includes('A320'));
console.log(plan.includes('Boeing'));
console.log(plan.startsWith('A'));
console.log(plan.startsWith('Air'));

if (plan.startsWith('Airbus') && plan.endsWith('neo')) {
  console.log('Part of the new Airbus Family');
}

// Split Method

console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Mehedi Hassan'.split(' ');
console.log(firstName, lastName);

// Join Method,work as opposite of Split
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];
//   for (const n of names) {
//     nameUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(nameUpper.join(' '));
// };

// Another way of doing this
const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtamnn');

// // Padding a String

// Padding a string means to a number of charactes to the string until the string has a certain desire length
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(695826529357));
console.log(maskCreditCard('3289258975390326'));
console.log(maskCreditCard('37894220994894268'));

// Repeat Method
const message2 = 'Bad Weather..... All Depertues Delayed....';
console.log(message2.repeat(6));
