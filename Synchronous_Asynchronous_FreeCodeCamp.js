// Made a ice-cream usign callback hell
/*
let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'sticks'],
  toppings: ['choclate', 'peanuts'],
};

let order = (fruitname, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruitname]} was selected`);

    callProduction();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log('Production has started');
    setTimeout(() => {
      console.log('The Fruit has been chopped');
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log('The Machine has started');
          setTimeout(() => {
            console.log(`the ice-cream was placed on ${stocks.holder[0]} `);

            setTimeout(() => {
              console.log(
                `${stocks.toppings[0]} is the flavour of the ice-cream`
              );

              setTimeout(() => {
                console.log('Ice-Cream Was served');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);

*/

/*

// Promises

// Need to understand
// 1.Relation between time and Work.
// 2.Promise Chaining
// 3. Error handling
// 4. The .finally handler

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'sticks'],
  toppings: ['choclate', 'peanuts'],
};

let isShopOpen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Our shop is closed'));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => console.log('Production has started'));
  })

  .then(() => {
    return order(2000, () => console.log('The fruit was chopped'));
  })

  .then(() => {
    return order(
      1000,
      () => `${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`
    );
  })

  .then(() => {
    return order(1000, () => console.log('Start the machine'));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`Ice-Cream was placed on ${stocks.holder[0]}`)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected`));
  })

  .then(() => {
    return order(2000, () => console.log('Ice-Cream Was served'));
  })
  // Catch will only work when the promise is rejected
  .catch(() => {
    console.log('Customer Left!!!');
  })

  .finally(() => {
    console.log('Day Ended!. Shop is Closed');
  });

  */

/*

// Difference Between promises and Async Await

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'sticks'],
  toppings: ['choclate', 'peanuts'],
};

let isShopOpen = true;

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// order()
//   .then()
//   .then()
//   .then()
//   .catch()

//   .finally();

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exist", error);
  } finally {
    console.log('Runs the code anyway');
  }
}

*/

/*


// Await Example

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'sticks'],
  toppings: ['choclate', 'peanuts'],
};

let isShopOpen = true;
let toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Which toppings would you love'));
    }, 3000);
  });
};

async function kitchen() {
  console.log(' A ');
  console.log(' B ');
  console.log(' C ');

  await toppingsChoice();
  console.log(' D ');
  console.log(' E ');
  console.log(' F ');
}

kitchen();
console.log('Doing the dishes');
console.log('Cleaning the tables');
console.log('Taking Other Orders');


*/

// Final Example

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'sticks'],
  toppings: ['choclate', 'peanuts'],
};

let isShopOpen = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('The shop is Closed'));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} Was selected`);

    await time(0000);
    console.log('The production has Started');

    await time(2000);
    console.log('Cut the fruits ');

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log('Start the machine ');

    await time(2000);
    console.log(`Ice-cream placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} was selected as toppings`);

    await time(1000);
    console.log('Serve the ice-cream');
  } catch (error) {
    console.log('Customer Left', error);
  } finally {
    console.log('Day Ended,Shop is Closed');
  }
}

kitchen();
