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

/*
// Map method will return a new array .. The original array doesn't muted.
const euroToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUsd);

// Perform the same thing using For-Of loop

const movementUsdFor = [];
for (const move of movements) {
  movementUsdFor.push(move * euroToUsd);
}

console.log(movementUsdFor);

// Perform array function to do the same thing

const movementUSDarrow = movements.map(mov => {
  return mov * euroToUsd;
});

console.log(movementUSDarrow);
*/

// As like as for each method the map method has access the exact three parameters

// the first argument of map method is the current element ,the second one is index and the third  one is the whole array
/*
const movementsDescription = movements.map((mov, i, arr) => {
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

//Compute Movements

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

/*
const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};


calcPrintBalance(account1.movements);
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
*/
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
clacDisplaySummary(account1.movements);
createUsername(accounts);
*/
//console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

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

// Array of Witdhrawal
const widthdrawl = movements.filter(mov => mov < 0);
console.log(widthdrawl);

*/

/*
Reduce Method

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

// Doing the exact same thing using for of loop:
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Maximum value of movement arra
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);
*/

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
// The Find Method
// Find method also accept a call back functiona and
// It is return only the first elemnt for which the condition satisfied
const firstWidthdrawl = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWidthdrawl);

// Find method is a bit similar like Filter Method but there are two fundamental differences.
// Filter returns all the elements that match the condition
// Where the file method only return the first one
// The Filter method returns a new array while Find only return the element itself and not an array

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
// Event Handler

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

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
  }
});
