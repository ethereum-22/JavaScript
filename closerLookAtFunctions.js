'use strict';

// Default Parameters

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = numPassengers * 220
// ) {
//   // ES5
//   // Setting Default in Previous
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 2300;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2); // Can't Skip any argument and move the next one

// // we can used a method to skip any argument and move the next one
// createBooking('LH123', undefined, 199);

// Pass Argument in Function
// let flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passportNo: 3542865286683,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   //   if (passenger.passportNo === 3542865286683) {
//   //     alert('Passport is OK!!');
//   //   } else {
//   //     alert('Wrong Passport');
//   //   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Function Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join('  ');
// };

// // Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);

//   console.log(`Transformed By: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hello');
// };
// // document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// // Function Returning Function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeting = greet('Hey');
// greeting('Jonas.');
// greeting('Mehedi.');
// greet('Hello')('Jonas');

// // By Arrow Function
// const greets = greeting => name => console.log(`${greeting} ${name}`);
// greets('HI')('MEHEDY');

// The Call and Apply Methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  //book:function()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(234, 'Mehedi Hassan');
lufthansa.book(333, 'Samir Biswas');
console.log(lufthansa.booking[0]);
console.log(lufthansa.booking[1]);

const euroWings = {
  airline: 'Euro Wings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
console.log(euroWings);

book.call(lufthansa, 856, 'Hasan Mesbah'); // Use book mehtod of lufthansa in Eurownings Passenger Details
book.call(euroWings, 245, 'Sarah Willams');

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  booking: [],
};
book.call(swiss, 355, 'Mary Copper'); // Use book mehtod of lufthansa in Swiss Airlines Passenger Details

// Apply Method
// In apply method we pass an array as argument instead of passing single argument
const flightData = [536, 'George Copper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // optional of Apply method and apply method is not much use in Modern JavaScript

// Bind Method or Bind Keyword
// Bind return a new function

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(23, 'Fedrico Valvarde');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Toni Kroos');
bookEW23('Luca Modric ');

// Partial application means that a part of the argument of original function are already applied.. And here the function bookEW23 is the same in here.

// Bind with object together with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// Partial application means we can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
*/
// Immediately invoked function Expressions
/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// Immediately Invoked function Expression
(function () {
  console.log('This Will never runs agian');
})();

// For Arrow Function;
(() => console.log('This Will also never run agains'))();
*/

// Closures of Function

// we called the function secure booking because we can't manipulated or accessed outside of this function
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};
const Booker = secureBooking();
