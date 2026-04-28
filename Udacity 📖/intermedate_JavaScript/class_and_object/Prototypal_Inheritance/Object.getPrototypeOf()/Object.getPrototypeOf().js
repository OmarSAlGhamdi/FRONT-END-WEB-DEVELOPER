console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

/*  Object.getPrototypeOf() : 
isPrototypeOf() works well, but keep in mind that in order to use it,
 you must have that prototype object at hand in the first place! 
 What if you're not sure what a certain object's prototype is? Object.getPrototypeOf() 
 can help with just that!
*/

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

console.log(`The result of (isPrototypeOf) method is: ${result}`);

const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);

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

/* ⬆️ ---------- 4 Fourth Example On Udacity 4 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 4 Fourth Example Finish 4 ❌------------- ⬆️" +
    `


    `
);
