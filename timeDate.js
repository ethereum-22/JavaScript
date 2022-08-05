'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = true) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const now = new Date();
    const day = `${date.getDate()}`.padStart(2, 0); // for showing 02/8/2022
    const month = `${date.getMonth() + 1}`.padStart(2, 0); // for showing 02/08/2022
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  formatCur(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////

// Logout Timer

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    // In Each Call print the remaining time in UI
    // When 0 seconds, stop timer and logout User
    // Decrease 1 Second

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Login to Started';
      containerApp.style.opacity = 0;
    }
    time = time - 1;
  };
  // Set Time to Five Minutes
  let time = 10;
  tick();
  // Call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
/*
// Experimenting with the API
const now = new Date();
const option = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

// From User Browsers
const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(local, option).format(now);
*/

// According to Intl Date and Time Format
// 8/12/22 mon/day/year as per US format

//abelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Experimenting with the API
    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };

    // From User Browsers
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now); // According to Intl Date and Time Format

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add Transfer Date
    currentAccount.movements.push(new Date().toISOString());
    receiverAcc.movements.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan date:
      currentAccount.movements.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      // Reset Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);
//Conversion(Number-String)
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
// The sting must be strat with number and otherwise it was not working
console.log(Number.parseInt('b34', 10)); // Here we are using the base 10 numbers
// It's return NaN. Because the string is not started with Number

// The parse in Function accepted a second argument called redix
// redix is the base of Numeral  System that we are using

console.log(parseFloat('2.5rem'));

// If value is not a Number(NaN)
console.log(Number.isNaN('t')); // We can check something is number or not
console.log(Number.isNaN('20')); // returns false because it is not a Number

// If value is Number
console.log(Number.isFinite(34));
console.log(Number.isNaN(23 / 0));

// If value is integer

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));

console.log(Number.isInteger(23.7));

// Math and Rounding
// Square Root

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// Getting maximum form a couple of value
console.log(Math.max(23, 5, 6, 2, 36, 7, 65));

// For min
console.log(Math.min(23, 5, 6, 2, 36, 7, 65));

// Pi value
console.log(Math.PI);

// Generating Random Number or Random Value
console.log(Math.random());

const randomInt = (max, min) => Math.floor(Math.random() * (max - min) + 1);

// Rounding integers

// This is goning to be the nearest integers
console.log(Math.round(23.3));
console.log(Math.round(23.8));

// We have also Math.ceil and Math.floor method
// The floor and Trunc Method are woeking same in the case of positive numbers and in case of negative numbers it don't worked same. We recommended use to floor

// Rounding in decimals
console.log((2.7).toFixed(0)); // to fixed is return always string and the parameter indicates how many digit after decimal
console.log(+(2.7435).toFixed(7)); // use + at beginning to convert the string as number

// Remainder Operator
// Remainder Operator simply returns the remainder of a division

console.log(5 % 2);

// Check whethear a number is even or Odd:
const isEven = num => num % 2 === 0;
console.log(isEven(22));
console.log(isEven(33));

console.log(isEven(35));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0,2,4,6
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }

    // 0,3,6,9
    if (i % 3 === 0) {
      row.style.backgroundColor = 'yellow';
    }
  });
});

// All About BigInt
// BigInt is a special type of integer that was introduced in ES 2020
// We know that numbers are represent internally 64 bits that means there are exactly 64 zero and ones to represent any given  number and now form this 64 bit only 53 is actually used to stored the digits. The rest of the digit is represent the decimal point and the sign the highest number is (2**53-1) in JavaScript because the number starts at zero.. And this is the biggest number the JavaScript can safely represent

console.log(2 ** 53 - 1); // Here 2 is form the base of binary digit
console.log(Number.MAX_SAFE_INTEGER); //it returns the exactly same number
// The overall discussion remainds us that is the highest safe number in javascript and the number that is bigger than it the javascript don't give the actual correct value

// In ES6 a new primitive is added that is called BigInt and it can be stored numbers large as can as we want

console.log(973397523457924837426723709547n); // if we added n at the last of the number it indicates the number as BigInt

// We can also create BigInt by using BigInt function

console.log(BigInt(973397523457924837426723709547)); // This is used probably in case of Small Number

// Operations with BigInt
console.log(10000n + 10000n);

// BigINt with regular number not works

const huge = 34596253952277027894n;
const num = 6783478923;

// console.log(huge + num); // That returns Error

console.log(huge * BigInt(num)); // now it is going to work

console.log(35n > 12); //true

console.log(20n === 20); //False

// Logical Operator is one exception and the other exception is when do string concatination

console.log(huge + ' Is really very big');
// all if Built-In Function including Math are not working in this case

// Divison
console.log(15n / 3n);
console.log(11n / 3n); // cuts the decimal part form the answer

// Date And Times

// First we actually creates a date
// there are four ways to create date in JavaScript
/*
// const now = new Date();
// console.log(now);

// Parse form Date String

console.log(new Date('Jul 31 2022 15:53:55'));

console.log(new Date('July 23,2022'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2022, 7, 1, 15, 23, 5)); // The serial of month is zero based
console.log(new Date(2022, 5, 31)); // Here June has 30 days and that the reason it shows the starting of next months
console.log(new Date(2022, 5, 35)); // it returns july 5

console.log(new Date(0));

// Conversion of Day to Milliseconds

console.log(new Date(3 * 24 * 60 * 60 * 1000));

*/
// Working with dates
/*
const future = new Date(2022, 7, 1, 15, 23); // without seconds
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // it is zero based
console.log(future.getFullYear());
console.log(future.getDate());
console.log(future.getDay()); // Day of the week  //0--sun,1--mon,2--tues,3---wed,4---thurs,5---Fri,6----sat
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // it returns form januray ,1970 to now in milliseconds
console.log(new Date(1659345780000));

console.log(Date.now());
*/
// Operations with date

const future = new Date(2022, 7, 1, 15, 23);

// anyone form below
console.log(Number(future));
console.log(+future);

// Create a function that takes two days and return the number of days that pass between this two days

const daysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = daysPassed(
  new Date(2021, 7, 1, 15, 23),
  new Date(2022, 7, 1, 15, 23)
);

console.log(days1); // The result is in Miliseconds

// Internationalizing Number

const nums = 3884764.23;
const options = {
  style: 'unit', // unit,percent and currency these are the three different style
  unit: 'mile-per-hour', // go documentation MDN for more property
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(nums));

console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(nums));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(nums));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(nums)
);

// Timers:Set Timeout
/*
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is Your Pizza with ${ing1} & ${ing2}`),
  3000,
  ...ingredients
); // This function is basically keep counting the time in background
console.log('Waiting...');

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}
*/

// Set Interval
/*
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
