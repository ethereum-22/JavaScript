'use strict';
/*
// Constructor Functions and New Operator

const Person = function (firstName, birthYear) {
  // Instances Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // Never create a function inside constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log(jonas instanceof Person);
// What are exactly happens when we call a function with new operator?

// 1. New {} basically empty object is created
// 2. function is called,this={}
// 3. {} linked to prototpyes
// 4. function Autometically returns {}

const matilda = new Person('Matilda', 2001);
const jack = new Person('Jack', 1999);

console.log(matilda, jack);

console.log(Person.prototype);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // Return True

console.log(Person.prototype.isPrototypeOf(jonas)); // Return True
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects the name is maybe somehow in this way

// Where this __proto__ of jonas object is come form ?
// And it is the step number 3 which is created this property and sets its value to the prototype property of the function that is being called and that exactly what is written here

// Again it sets the prototype property of object set the prototype property of constructor function and this is how javascript knows internally that the jons object is connected with person.prototype

jonas.calcAge();

// We can also set properties on Prototype

Person.prototype.spicies = 'Homo Sapiens';
console.log(jonas.spicies);
console.log(matilda.spicies);

// The property which is not directly in the object it is not the property of it's own.Own properties are only the once that are declared directly on the object itself. And in case of Prototype inheritance it is not the own property of an object or instances.

// This is a method to check if the property is own or not:

console.log(jonas.hasOwnProperty('firstName')); // returns  ture because firstName is the own property of Jonas
console.log(jonas.hasOwnProperty('spicies'));

// Prototypal Inheritance on Built in objects such as Arrays

console.log(jonas.__proto__);

// Object.prototype
console.log(jonas.__proto__.__proto__); // this is inherited from Object.prototype and showed here

// Object
console.log(jonas.__proto__.__proto__.__proto__); // it returns null because it locates the top  of the scope chain

console.dir(Person.prototype.constructor); // Return Person Constructor

// Any function is also an object and so that it also have prototype

// Array
const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
// Each array does ofcourse not contain all of these methods but instead  each array will inherite this method form its prototype

console.log(arr.__proto__ === Array.prototype);

// Object.prototype
console.log(arr.__proto__.__proto__);
// Create an Array Prototype:

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());


*/

/*

// Class Expression

const PersonCl = class {};

class Person {
  // Constructor
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method:
  // Method will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new Person('Jessica', 1999);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === Person.prototype);

// Person.prototype.greet = function () {
//   console.log(`Hey!! ${this.firstName}`);
// };

jessica.greet();

// Somthing About Class:
// 1.Classes are not hoisted,function declaration are hoisted which means we can use before they are declared in the code.But in case of classes that doesn't work

// 2. Like functions ,Classes are first class citizes means we can pass them function and also return them form function and that is mention erlier because the classes are just a special kind of function bechnd the scenes

// 3. Classes are executed in strict mode.


*/
/*


// Getters And Setters
// Geters and Setters are basically functions that get and set a value. But on the outside they still look like regular property

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // Write as a property

account.latest = 40; // It is just a property
console.log(account.movements);

// And this is the way of working getters and setters in case of object

// And classes also have the getters and setters method and this is worked as exact same way

// Adding getters and setters property in our class

class Person {
  // Constructor
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Method:
  // Method will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`Name ${name} is not a full Name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new Person('Jessica Davies', 1999);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === Person.prototype);

console.log(jessica.age);

const walter = new Person('Walter', 1968);
console.log('Walter');
// Setters and Getters are actually very useful for data validation

// Whan a setter is trying to set a property that is already exists and then we add a underscore to convention. And it is also a convention and not javascript feature.SO it really just a different variable name to avoid that naming conflict


*/

// Static Methods:
// Array.from(); // it converts any array to a real array
// Array.from(document.querySelector('h1'));
// Array.from(document.querySelectorAll('h1')); // This form method here is really a method that is attached to a array constructor. So we couldn't use from method on a array and the below line is not gonna work.And because it is not a function

//[1, 2, 3].from(); // This is not worked

// class Person {
//   // Constructor
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Method:
//   // Method will be added to .prototype property and these type of methods is also called instance method

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`Name ${name} is not a full Name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

/*

  // Create a static method
  static hey() {
    console.log('Hey ,There');
  }
}

const jessica = new Person('Jessica Davies', 1999);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === Person.prototype);

console.log(jessica.age);

// const walter = new Person('Walter', 1968);
// console.log('Walter');

Person.hey = function () {
  console.log('Hey There');
};
Person.hey();
// We can't write jonas.hey() and the reason is it is not inherited and for that it is not in the prototype of Person

// Static methods are not available on instances and they are useful to impelement some kind of helper function about a class or about a constructor function

*/

// Object.Create()

// We can use object.create() to manually set a prototype of an object to any other object that  we want
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // this will return a brand new object that is link to the prototype that we passed in here. Steven here right now an empty object and it will be linked with the personProto Object which will be it's prototype

console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);
sarah.calcAge();
*/

// Inheritence between classes: Constructor Function

/*

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototype

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} and I studied in ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge(); // inheritance from Person Consturctor Function

console.log(mike.__proto__); // Prototype of Student Constructor Function
console.log(mike.__proto__.__proto__); // Prototype of Person or Parent of Student Constructor

console.log(mike instanceof Student);
console.log(mike instanceof Person);

// Both returns Ture Because Student Constructor inherite Person


*/

// Inheritence Between Classes

/*

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  getAge() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`Name ${name} is not a full Name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey There!!!');
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Super is the constructor function of Parent Class and inside super pass the arguments of Parent Class
    this.course = course;
  }
  introduce() {
    console.log(`My Name is ${this.fullName} and I studied in ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2037 - this.birthYear} years old`);
  } /// This calcAge() method appears in the prototype chain first and for that reason it override the function of it's parent class
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();



*/
// Inheritance between classes: using object.create

/*

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I studied in ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2012, 'Computer Science');
jay.introduce();
jay.calcAge();


*/

// Example

/*

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    this.approveLoan(val);
    {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);

*/

// Encapsulation:Protected Properties and Methods

// Encapsulation Means make some property and methods private inside the class so they are not accessable from outside the class

// There are two important reason why we need encapsulation and data privacy

// 1. It is to prevent code outside of a class to accedently manipulate data inside the class
// 2. When expose only a small interface so a small API consisting only of a few public methods then we can change all the other internal methods with more confidence because in this case we can be sure that external code does not relay on this private method and so therefore our code will not break when we do internal changes

/*


class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected Propery: start with underscore(_) and it is not truly private
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public Interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    this._approveLoan(val);
    {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1.pin);
console.log(acc1);

console.log(acc1.getMovements());


*/

/*



// Encapsulation: Private Class Fields And Methods

// Four Important things is here.

// Public Fileds
// Private Fields
// Public Methods
// Private Methods

// Basically Fields is a property that will be on all instances. Thats why we also called it public instances fields

class Account {
  // 1) Pubilic Fields(Instances)

  locale = navigator.language; // Declare same as a variable but without starats with let,const or var

  // 2) Private Fields:
  #movements = []; // use # to make the class private
  // We can't declare private fields inside constructor
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  // Public Methods: All of methods are always public methods

  deposit(val) {
    this.#movements.push(val);
    return this
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    this.#approveLoan(val);
    {
      this.deposit(val);
      console.log('Loan Approved');
    }
    return this;
  }

  // Private Methods:

  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);

console.log(acc1.pin);
console.log(acc1);

console.log(acc1.getMovements());
//console.log(acc1.#movements);


*/

//  Chaining Methods:
acc1.deposit(400).deposit(300).widthdraw(100).requestLoan(100).widthdraw(500);
