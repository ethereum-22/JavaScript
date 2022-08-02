'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// Array Method

/*

// SLICE

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // start form the index 2 and until the rest of  the element
console.log(arr.slice(2, 4)); // start form the index 2 and untill the 4. and here 4 is not included

console.log(arr.slice(1, -2));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // the negative index indicates that the last index of the array.. and increasing the value of negative index it will go to last to first

//  we Can also use the slice method to create a shallow copy of our current array
console.log(arr.slice());

// We can also do the same work by using spread operator
console.log([...arr]);

// SPLICE
// The splice method is worked as the same as the slice method but the main differnece is it changed the original array that means it mutates the original array

console.log(arr.splice(2));
console.log(arr); // Splice deleted the element form 2 to last and the other elements are  in the arr
arr.splice(1, 2); // it means starts form one and deleted two consecutive element form the array

// REVERSE
// Thre reverse method also mutes the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT Method
// this one is used to concate two arrays and doesn't mute the original array

const letters = arr.concat(arr2);
console.log(letters);

// We also do this by using spread operator

const letter = [...arr, ...arr2];
console.log(letter);

// JOIN METHOD:
//
console.log(letters.join('-'));


*/

// For Each Loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// By using For-of Loop:
/*

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You Deposedt ${movement}`);
  } else {
    console.log(`You Withdraw ${Math.abs(movement)}`);
  }
}
*/

// For-Each Loop:

/*
console.log('-------ForEach-------');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You Deposedt ${movement}`);
  } else {
    console.log(`You Withdraw ${Math.abs(movement)}`);
  }
});
*/

// For-Of with the counter variable and Index

// Here the first value is index and the second value is the current looping value

/*
for (const [i, item] of movements.entries()) {
  if (item > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${item}.`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw${item}.`);
  }
}

*/

// In ForEach ,the first parameter is always the current element ,second parameter is the index of current element and the third parameter is always the entire arrays which we looping over.

/*
console.log('-------ForEach--------');

movements.forEach(function (item, i, arr) {
  if (item > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${item}.`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw${item}.`);
  }
});

*/

// note that: when we use For-Of and When we use the For-Each loop?
// The main thing is You can't break the ForEach loop. So,more clearly break and continue statement are not working in ForEach loop.

// For-Each on Map and Sets

// Map
// For each on Maps and Sets

// In Map:

/*
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`Key ${key}:${value}`);
});

*/

// For-Each on Sets

/*

console.log('----Set Form Here-----');
const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR', 'USD']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`Key ${key}:${value}`);
});

// In case of set we don't have any index and that the reason the second argument of funcion in case of set show the exact value through the argument key

*/

// Creating DOM Elements

// //Compute Movements

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

      <div class="movements__value">${mov}€</div>

    </div>

    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);


*/

// The Map Method

// Map method will return a new array .. The original array doesn't muted.

/*


const euroToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUsd);


*/

// Suppose take the value of movement in Euro and Convert it to USD

// // Perform the same thing using For-Of loop

/*

const movementUsdFor = [];
for (const move of movements) {
  movementUsdFor.push(move * euroToUsd);
}

console.log(movementUsdFor);

*/

// Perform arraw function to do the same thing

/*
const movementUSDarrow = movements.map(mov => {
  return mov * euroToUsd;
});

console.log(movementUSDarrow);
*/

// // As like as for each method the map method has access the exact three parameters
// // the first argument of map method is the current element ,the second one is index and the third  one is the whole array
// The Map method Returns A new Element

/*

 
const movementsDescription = movements.map((mov, i, arr) => {

  // More simplified of the given comment codeline

  return `Movement ${i + 1}: You ${
    mov > 0 ? 'Deposited' : 'Withdrew'

  } Withdraw${Math.abs(mov)}.`;


  // if (mov > 0) {
  //   return `Movement ${i + 1}: You Deposited ${mov}.`;
  // } else {
  //   return `Movement ${i + 1}: You Withdraw${Math.abs(mov)}.`;
  // }
});

console.log(movementsDescription);

// there is a big big difference between these two methods(ForEach and Map)..in for each we get the the element and one by one and print them manually.But in cases of map method we get an array which is more useful to do different work


*/

// Computing Usernames

// to create an username we get the threee first letter in lowercase of each word and combined them and this is the method we compute our user name in this case

/*


const createUsername = accs => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

 createUsername(accounts);
 console.log(accounts);

*/

// Filter Method

/*

// Create an array of deposits

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

// Same thing using for of Loop

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}

console.log(depositsFor);

// Array of Witdhrawal, Find the negative value and put them the widthdrawl array

const widthdrawl = movements.filter(mov => mov < 0);
console.log(widthdrawl);



*/

// Reduce Method

// We essentially use reduce method to boil down all the elements in an array to one single value

// Result of the reduce method is the global balance of the account
// The first parameter of reduce method is accumulator that means sum of the value. and it's like a snowball that we keep accumulating and return when the fucntion executes

// in every iteration of loop we return the update accumulating value that the procudure is the current one is summed with the accumulator

/*

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration no ${i}: ${acc}`);
  return acc + cur;
}, 0); // here the zero is the initial value of the accumulator in the first loop iteration

console.log(balance);

// Doing also the same thing here usign arrow function

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration no ${i}: ${acc}`);
  return acc + cur;
}, 0); // here the zero is the initial value of the accumulator in the first loop iteration

console.log(balance);

// Doing the exact same thing using for of loop:

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);




const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

calcPrintBalance(account1.movements);



// Maximum value of movement array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);


*/

// The Chaining Method:

// The chaining Method:(chaining of map,filter and reduce)

/*
const euroToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

*/

/*
const clacDisplaySummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${income}€`;

  const outcome = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumOut.textContent = `${outcome}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => int >= 1)

    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

clacDisplaySummary(account1.movements);


// Filter Method

/*

// Create an array of deposits
const deposits = movements.filter(function (mov) {
  return mov > 0;
});


// console.log(movements);
// console.log(deposits);
*/

// Same thing using for of Loop
/*

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}

console.log(depositsFor);

*/

// Array of Witdhrawal

/*

const widthdrawl = movements.filter(mov => mov < 0);
console.log(widthdrawl);

*/

/*

// Reduce Method

We essentially use reduce method to boil down all the elements in an array to one single value

Result of the reduce method is the global balance of the account
The first parameter of reduce method is accumulator that means sum of the value. and it's like a snowball that we keep accumulating and return when the fucntion executes

in every iteration of loop we return the update accumulating value that the procudure is the current one is summed with the accumulator

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration no ${i}: ${acc}`);
  return acc + cur;
}, 0); // here the zero is the initial value of the accumulator in the first loop iteration

console.log(balance);

Doing also the same thing here usign arrow function

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration no ${i}: ${acc}`);
  return acc + cur;
}, 0); // here the zero is the initial value of the accumulator in the first loop iteration

console.log(balance);

*/

// The FIND Method

/*


 The Find Method
 Find method also accept a call back functiona and
It is return only the first elemnt for which the condition satisfied
const firstWidthdrawl = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWidthdrawl);

 Find method is a bit similar like Filter Method but there are two fundamental differences.
Filter returns all the elements that match the condition
Where the file method only return the first one
 The Filter method returns a new array while Find only return the element itself and not an array



*/

// console.log(accounts);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// /////////////////////////////////////////////////

// Implementing Login

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

      <div class="movements__value">${mov}€</div>

    </div>

    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

const clacDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${income}€`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumOut.textContent = `${outcome}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)

    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = accs => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);
//console.log(accounts);

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance
  calcPrintBalance(acc.movements);
  // Display Summary
  clacDisplaySummary(acc.movements);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent Form from Submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message

    labelWelcome.textContent = `Welcome Back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear The Input Fields
    inputLoginUsername.value = inputLoginPin.value = ''; // it was working because the assignment operator works form right to left
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer Money Form One User to Another User

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // Find the username in which want to transfer
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = currentAccount.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing The Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Find Index Method
// Find Index Method Works almost The same way as find method and it returns the index of found elemnt

// In our application we perform close account that means basically delete an account form the accounts array

// Close Account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //console.log(index);\
    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

// SOME and EVERY Methods of Array

// We can use includes method to test if a certain element is present or not in the array
// Checks only for Equality
console.log(movements);
console.log(movements.includes(-130));

//Specify A condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// the includes and some method works are similarly same and the includes method returns true if an element is included in an array or not. And on the other hand the some method returns ture or false under a condition and that is the difference between this two

// Every Method:
// Evey only returns the true if all of the element in the array satisfy the condition that we pass in or if every elements passes the test in our callback function only than the every methods return the true

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// Flat and Flat Map Method

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// Get all elements in one array
// flat method goes only one level Deep and for that the below is distracted only one level
const arrDeep = [
  [
    [1, [2, 3]],
    [[4, 5], 6],
    [7, 8],
  ],
];

console.log(arrDeep.flat(3)); /// Goes to Three Level Deep

// Calculate the overall transiton of the Bankist Algorithm

/*const accountMovements = accounts.map(mov => mov.movements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const overallMovements = allMovements.reduce((mov, acc) => mov + acc, 0);
console.log(overallMovements);*/

// With Optional Chainiing

const overallBalance = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((mov, acc) => mov + acc, 0);

console.log(overallBalance);

// Flat map is the combined of flat and map method to one Flat-map method

const overallBalance2 = accounts
  .flatMap(mov => mov.movements)
  .reduce((mov, acc) => mov + acc, 0);

console.log(overallBalance2);

// And flat map get one level deep and we don't change it

// Sorting Method

// Strings
const owner = ['Jonas', 'Zack', 'Martha', 'Adam'];

console.log(owner.sort());

// The sort method is mute the original Array

// Number
console.log(movements);
console.log(movements.sort());

// This is not the result what we wanted. The sorting method convert this number into string and then performs sorting

// We can fix this by passing call back or compare function in this function

// return <0 A,B (Keep Order);
// return >0 B,A (Switch Order);

// Sorting in Ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

movements.sort((a, b) => {
  a - b;
});
console.log(movements);

// Sorting in Descending order
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (b < a) return -1;
// });

movements.sort((a, b) => {
  b - a;
});
console.log(movements);

let sorted = false;
btnSort.addEventListener('click', function (e) {
  preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted != sorted;
});

// How to programatically create and fills arrays
// Empty arrays and fill method

const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x); // create 7 empty elements and it simply contains nothing

console.log(x.map(() => 5));

x.fill(6); // pass a value and then it fill with it the entire value
console.log(x);

// Fill is a little bit similar to slice method

x.fill(1, 3); // fill with 1 form the index 3 and untill the end of the array
arr1.fill(3, 2, 4); // fill with value 3 from index 2 to index 4
console.log(arr1);

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (curr, i) => i + 1); // This callback is the same as map method
//const z = Array.from({ length: 7 }, (_, i) => i + 1); we use underscore when not use the first argument
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movement__value'),
    Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movement__value')];
});
