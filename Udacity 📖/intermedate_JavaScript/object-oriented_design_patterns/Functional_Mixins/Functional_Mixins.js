console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

// (Constructor Functions) using new operator ⬇️ :

function City(name, population) {
  this.name = name;
  this.population = population;

  this.identify = function () {
    console.log(
      `${this.name}'s population is ${this.population.toLocaleString()}`
    );
    // .toLocaleString() method will print the number with comma
  };
}

// we will instantiate with new new operator :

const sanFrancisco = new City("sanFrancisco", 870000);

// console.log();
sanFrancisco.identify();

const Riyadh = new City("Riyad", 500000);
Riyadh.identify();

const MountainView = new City("Mountain View", 78000);
MountainView.identify();

/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `


    `
);

console.log(
  "⬇️  -------------✅ 2 Second Example Start 2 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 2 Second Example On Udacity 2 ---------- ⬇️ */
/* Factory Function Syntax: 

function exampleName(parameter){
  the body of the Factory function 
} return {
the body of the return
} */

// Factory Functions ⬇️ :  deafult value ⬇️
function Basketball(color, numDots = 35000) {
  return {
    color: color,
    numDots: numDots,
  };
}
// 1 example of instance of Factory Function :
// Basketball is the mother function :
const orangeBasketball = Basketball("ornage", 10000);
console.log(orangeBasketball);

// 2 example of instance of Factory Function :
const myBB = Basketball("blue and green", 5000);
console.log(myBB);

const yourBB = Basketball("purple", 4000);
console.log(yourBB);

const bouncy = Basketball("neon pink", 6000);
console.log(bouncy);
/* ⬆️ ---------- 2 Second Example On Udacity 2 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 2 Second Example Start 2 ❌------------- ⬆️" +
    `


    `
);

console.log(
  "⬇️  -------------✅ 3 Third Example Finish 3 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 3 Third Example On Udacity 3 ---------- ⬇️ */

function Radio(mode) {
  let on = false;

  return {
    mode: mode,
    turnOn: function () {
      on = true;
    },
    // this will check the status of the on variable
    isOn: function () {
      return on;
    },
    // this will change the status of the on to false
    turnOff: function () {
      on = false;
    },
  };
}

let fmRadio = Radio("fm");

fmRadio.isOn();

console.log(fmRadio);

fmRadio.turnOn();
console.log(fmRadio);

/* ⬆️ ---------- 3 Third Example On Udacity 3 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 3 Third Example Finish 3 ❌------------- ⬆️" +
    `


    `
);

console.log(
  "⬇️  -------------✅ 4 Fourth Example Finish 4 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 4 Fourth Example On Udacity 4 ---------- ⬇️ */
// Functional Mixins :
/* 
A functional mixin is a composable factory function that 
receives a _mixin_as an argument, copies properties and methods from 
that mixin, and returns a new object. Check out the following example
*/

function CoffeeMaker(object) {
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    },
  });
}

const mixedCoffeeMaker = CoffeeMaker({ style: "percolator" });

console.log(mixedCoffeeMaker);
/* ⬆️ ---------- 4 Fourth Example On Udacity 4 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 4 Fourth Example Finish 4 ❌------------- ⬆️" +
    `


    `
);

console.log(
  "⬇️  -------------✅ 5 Fifth Example Finish 5 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 5 Fifth Example On Udacity 5 ---------- ⬇️ */
// First Fucntion :
function IceCreamFactory(obj) {
  let isCold = true;

  return Object.assign({}, obj, {
    melt: function () {
      isCold = false;
    },
    isCold: function () {
      return isCold;
    },
  });
}

// Second Fucntion :
function coneFactory(obj) {
  let isDry = true;

  return Object.assign({}, obj, {
    soggy: function () {
      isDry = false;
    },
    isDry: function () {
      return isDry;
    },
  });
}

let iceCreamCone = IceCreamFactory(coneFactory({}));

console.log(iceCreamCone);
/* ⬆️ ---------- 5 Fifth Example On Udacity 5 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 5 Fifth Example Finish 5 ❌------------- ⬆️" +
    `


    `
);
