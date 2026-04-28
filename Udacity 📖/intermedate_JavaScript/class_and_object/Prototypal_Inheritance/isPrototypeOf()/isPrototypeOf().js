/* isPrototypeOf()

Objects also have access to the isPrototypeOf() method, 
which checks whether or not an object exists in another object's prototype chain.
Using this method, you can confirm if a particular object serves
as the prototype of another object. Check out the following rodent object:
*/

console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

const rodent = {
  favoriteFood: "cheese",
  hasTail: true,
};

function Mouse() {
  this.favoriteFood = "cheese";
  //this refers to the new object(ralph)
}

Mouse.prototype = rodent;

const ralph = new Mouse();

// const result = rodent.isPrototypeOf(ralph);
const result = rodent.isPrototypeOf(ralph);

console.log(result);

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

const oldfamily = {
  big_family: true,
  house: "large",
};

function newFamily() {
  this.house = "large";
}

newFamily.prototype = oldfamily;

const Omar = new newFamily();

const output = oldfamily.isPrototypeOf(Omar);

console.log(output);

/* ⬆️ ---------- 2 Second Example On Udacity 2 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 2 Second Example Start 2 ❌------------- ⬆️" +
    `


    `
);

