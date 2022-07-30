// Slice: Slice procedure in array is same as the Slice procedure of String. It doesnot mute the original array.Just make a copy of original array
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);

console.log(arr.slice(2));
console.log(arr.slice(2, 4));

// The Arry.Slice Method returns a new array
console.log(arr.slice(-1));
console.log(arr.slice(-2));

// Copay of Array
// console.log(arr.slice());

// Splice Method: It does actually changes the original array. SO it mutates the array

// console.log(arr.splice(2));
// console.log(arr);

// We are usually interested in to just delete one or more elements form an array using splice
// console.log(arr.splice(-1)); // Delete the last element of the array
// console.log(arr);

console.log(arr.splice(1, 2)); // Here the first parameter means where deleting is started and the second parameter indicated that how many numbers should be deleted

// Reverse
// Reverse method muted the original Array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//Concat

// Concat doesn't muted the original Array
const letters = arr.concat(arr2);
console.log(letters);

// Join:
console.log(letters.join());
*/
// Looping Arrays: Using For Each

// ForOF
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
for (const item of movements) {
  if (item > 0) {
    console.log(`You Deposedt ${item}`);
  } else {
    console.log(`You Withdraw ${item}`);
  }
}
*/
// ForEach

/*
console.log('-------ForEach-------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You Deposedt ${movement}`);
  } else {
    console.log(`You Withdraw ${movement}`);
  }
});
*/

for (const [i, item] of movements.entries()) {
  if (item > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${item}.`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw${item}.`);
  }
}

// Doing the same thing by using For Each Loop

// In ForEach ,the first parameter is always the current element ,second parameter is the index of current element and the third parameter is always the entire arrays which we looping over.

console.log('-------ForEach--------');

movements.forEach(function (item, i, arr) {
  if (item > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${item}.`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw${item}.`);
  }
});

// note that: when we use For-Of and When we use the For-Each loop?
// The main thing is You can't break the ForEach loop. So,more clearly break and continue statement are not working in ForEach loop.

// For each on Maps and Sets

// In Map:
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`Key ${key}:${value}`);
});

//In set

console.log('----Set Form Here-----');
const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR', 'USD']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`Key ${key}:${value}`);
});

// In case of set we don't have any index and that the reason the second argument of funcion in case of set show the exact value through the argument key
