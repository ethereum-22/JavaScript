//AScynchronous JavaScript AJAX,API

// Synchronous Code simply means the code executed line by line. Each line of code always waits for previous line to finish execution.Now this can create problems when one line of code takes long time to run. Alert() is a perfect example long running operations block code execution.Most of the time synchronous code is fine and make the perfect scence but when it take long time to executes and the rest of the program wil not execute that would be just terrible.

// Asynchronous Code is
// 1. Asynchronous code is executed after a task that runs in the background finishes.
// 2. Asynchronous code is non-blocking
// 3. Execution doesn't wait for an asynchronous task to finish it's work

// Callback Function Alone don't make the code asynchronous

// In summary Asynchronous programming is all about coordinating the behaviour of our program over a certain period of time.And this is essential to understand. And asynchronous literally means not occuring at the same time.

// AJAX: Asynchronous JavaScript And XML: Allows to communicate with remote we servers in an asynchronous way.With AJAX Calls,we can request data from we servers dynamically.

// API:Application Programming Interface: Piece of Software that can be used by another piece of software in order to allow applications to talk to each other.

// There are many types of API, such as DOM API,GEOLocation API,Own Class API,Online API

// Online API: An Online API Application running on the server,that receives request for data,and sends data back as a response.

// XML HTTP Request

// Callback Hell
// In here we create a sequence of AJAX call so that the second one runs only after the first one has finished

'use strict';

/*
//AScynchronous JavaScript AJAX,API

// Synchronous Code simply means the code executed line by line. Each line of code always waits for previous line to finish execution.Now this can create problems when one line of code takes long time to run. Alert() is a perfect example long running operations block code execution.Most of the time synchronous code is fine and make the perfect scence but when it take long time to executes and the rest of the program wil not execute that would be just terrible.

// Asynchronous Code is
// 1. Asynchronous code is executed after a task that runs in the background finishes.
// 2. Asynchronous code is non-blocking
// 3. Execution doesn't wait for an asynchronous task to finish it's work

// Callback Function Alone don't make the code asynchronous

// In summary Asynchronous programming is all about coordinating the behaviour of our program over a certain period of time.And this is essential to understand. And asynchronous literally means not occuring at the same time.

// AJAX: Asynchronous JavaScript And XML: Allows to communicate with remote we servers in an asynchronous way.With AJAX Calls,we can request data from we servers dynamically.

// API:Application Programming Interface: Piece of Software that can be used by another piece of software in order to allow applications to talk to each other.

// There are many types of API, such as DOM API,GEOLocation API,Own Class API,Online API

// Online API: An Online API Application running on the server,that receives request for data,and sends data back as a response.


///////////////////////////////////////

// Old School way doing AJAX to JavaScript

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountry = country => {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // First argument is the type of request and the second argument is the url
  request.send(); // The send request is go to the URL

  // The AJAX call we just send off here is being done in the background where the rest of the course keeps running. And this is the asynchronous non-blcoking behaviour

  /// Register a call back  on th request object for the load event

  //console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    //console.log(data);

    // console.log(Object.entries(data.currencies));
    const language = Object.entries(data.languages);
    console.log(language[0][1]);
    const currency = Object.entries(data.currencies);
    //console.log(currency);
    //console.log(currency[0][1].name);

    // for (const property in data.currencies) {
    //   console.log(`${property}: ${object[property]}`);
    // }
    // let cur = data.entries.keys();
    // console.log(cur);
    // // let lan=

    const html = `<article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
            <p class="country__row"><span>💰</span>${currency[0][1].name}</p>
        </div>
    </article>`;

    // Insert the HTML into Our Page.

    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;
  });
};

// We get the file in JSON.And we have to convert it to JavaScript Code
// JSON is the big string of text

getCountry('brasil');
getCountry('germany');
getCountry('france');
getCountry('russia');
getCountry('bangladesh');


*/

// Callback Hell

/*

// When we have lot of nested callback in order to execute asynchronous task in sequence and in fact this happens for all asynchronous task which are handled by callback and not just AJAX calls

// in here we creates a sequence of AJAX call so that the second one runs only after the first one has finished. We do now after the first AJAX call is completed we get the border and get the neighbouring country.And in this case, the second AJAX call only depends on the first AJAX call because the data of neighbouring country is the result of first call. Without the first call we even't know which data is fetch in second call. and for that we need to implement a sequence of AJAX call

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  // // console.log(Object.entries(data.currencies));
  // const language = Object.entries(data.languages);
  // console.log(data);
  // const currency = Object.entries(data.currencies);
  const neighbour = Object.entries(data);
  const neigProp = neighbour[0][1];
  //console.log(neigProp);
  const upCurn = Object.entries(neigProp.currencies);
  const upLang = Object.entries(neigProp.languages);
  //console.log(upLang[0][1]);

  //console.log(upCurn[0][1].name);

  const html = `<article class="country ${className}">
      <img class="country__img" src="${neigProp.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${neigProp.name.common}</h3>
          <h4 class="country__region">${neigProp.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +neigProp.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${upLang[0][1]}</p>
          <p class="country__row"><span>💰</span>${upCurn[0][1].name}</p>
      </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

// AJAX Call country -1
const getCountryAndNeighbour = country => {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const language = Object.entries(data.languages);
    //console.log(data);
    const currency = Object.entries(data.currencies);

    const html = `<article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
            <p class="country__row"><span>💰</span>${currency[0][1].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;

    // render country-1

    // Get neighbour Country(2 )
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX Call-2
    const request2 = new XMLHttpRequest();

    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      //console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('peru');

*/

// Here is an example of
/*
setTimeout(() => {
  console.log('1 Second Passed');
  setTimeout(() => {
    console.log('2 Second Passed');
    setTimeout(() => {
      console.log('3 Second Passed');
      setTimeout(() => {
        console.log('4 Second Passed');
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

*/

// Promises and Fetch API

// Consuming Promises

// const request = new XMLHttpRequest();

// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// What is Promise and What can we do with it?
// Promise is an object that is use as a placeholder for the future result of an asynchronous operation
// We also say that Promise is a container for an asynchronously delivered value and more beriefly Promise is a container for future value
// Example of future value is: Response from AJAX Call

// More brief Example: A promise is just like a lottery ticket.when i buy a lottery ticket essentially i buy the promise that i will receive some amount of money in the future if i guess the correct outcome.
// Lottery draw happens asynchronously.

// And for lottery ticket,

// i did get the correct outcome then i will receive my money. because i have my lottery ticket which is promise by bought.

// What is the big advantage of using promises?
// There are two big advantage.
// 1. By using promises we need to no longer rely on events and callback functions to handle asynchronous results.Events and callback functions can sometime cause unpredictable results and this is a big win already.But even better with promises we can chain promises for a sequence of asynchronous operations instead of nesting like we did the last lecture.And with this we can finally skip callback hell which was our initial goal all a long.And promises are on a ES6 feature.

// Since promises work with asynchronous operation,they are time sensitive.So they change overtime and so promises can be in different states.And this is we have called the lifecycle of promises.

// Consume Promises
// We will consume the promise that was return by the fetch function.

// Implemented get  country data and this one using promise

/*

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  // console.log(Object.entries(data.currencies));
  const language = Object.entries(data.languages);
  //console.log(data);
  const currency = Object.entries(data.currencies);
 
  // const neighbour = Object.entries(data);
  // const neigProp = neighbour[0][1];
  // //console.log(neigProp);
  // const upCurn = Object.entries(neigProp.currencies);
  // const upLang = Object.entries(neigProp.languages);

 
  //console.log(upLang[0][1]);

  //console.log(upCurn[0][1].name);

  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
          <p class="country__row"><span>💰</span>${currency[0][1].name}</p>
      </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // the fetch function immediately return a promise.And in beginning the promise is still pending.Because the Asynchronous task of getting the data still running in the background. And a certain point the promise ofcourse be setteled either in a fulfil or either in a rejected state.

  //But for now lets assume success and assume that the promise will be fullfiled  and that we have a value available to workwith.And to handle with the fullfil state we can use then method that is avilable on all promises.And into then method we need to pass a callback function that we want to be executed as soon as the promise is actually fullfiled. So as soon as the result is available.

  .then(function(response)) is the method to fullfil the 

  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
    response
  ) {
    console.log(response);

    // We need to call json method on response.JSON is a method that is available on all responses of the fetch method

    return response.json().then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
    // json method is here is a method that is available on all the response object that is coming form the fetch function.So all of the reserved values.And the above response is a reserved value.And that it therefore is a response method attached to it.

    // and the problem here is the json method is also a asynchronous function.And that means it also returns a new promise.

    // and as the response is also a response.json()  method it returns promises so we also need to handle it.
  });
};

getCountryData('portugal');

*/

// Chain Promises

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  // console.log(Object.entries(data.currencies));
  const language = Object.entries(data.languages);
  //console.log(data);
  const currency = Object.entries(data.currencies);

  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${language[0][1]}</p>
          <p class="country__row"><span>💰</span>${currency[0][1].name}</p>
      </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

const neighbourCountry = function (data, className) {
  const neighbour = Object.entries(data);
  const neigProp = neighbour[0][1];
  //console.log(neigProp);
  const upCurn = Object.entries(neigProp.currencies);
  const upLang = Object.entries(neigProp.languages);

  const html = `<article class="country ${className}">
      <img class="country__img" src="${neigProp.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${neigProp.name.common}</h3>
          <h4 class="country__region">${neigProp.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +neigProp.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${upLang[0][1]}</p>
          <p class="country__row"><span>💰</span>${upCurn[0][1].name}</p>
      </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
  return neigProp;
};

const getCountryData = function (country) {
  // the fetch function immediately return a promise.And in beginning the promise is still pending.Because the Asynchronous task of getting the data still running in the background. And a certain point the promise ofcourse be setteled either in a fulfil or either in a rejected state.

  //But for now lets assume success and assume that the promise will be fullfiled  and that we have a value available to workwith.And to handle with the fullfil state we can use then method that is avilable on all promises.And into then method we need to pass a callback function that we want to be executed as soon as the promise is actually fullfiled. So as soon as the result is available.

  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
    response
  ) {
    //console.log(response);

    // We need to call json method on response.JSON is a method that is available on all responses of the fetch method

    return response
      .json()
      .then(function (data) {
        console.log(data[0]);
        renderCountry(data[0]);
        // const neighbourC = neighbourCountry(data, 'neighbour');
        // console.log(neighbourC);
        const neighbourCoun = data[0].borders[0];

        if (!neighbourCoun) return;
        // Country-2
        fetch(`https://restcountries.com/v3.1/alpha/${neighbourCoun}`);
      })
      .then(response => response.json())
      .then(data => renderCountry(data[0], neighbour));
  });
};

getCountryData('bangladesh');
