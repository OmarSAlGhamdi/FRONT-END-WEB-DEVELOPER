console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */
let target = {};

let source = { number: 7 };

Object.assign(target, source);

console.log(target);
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
let target2 = { letter: "a", number: 11 };

let source2 = { number: 7 };

Object.assign(target, source);

console.log(target);
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
const duck2 = {
  hasBill: true,
  feet: "orange",
};

const beaver2 = {
  hasTail: true,
};

const otter2 = {
  hasFur: true,
  feet: "webbed",
};

let newduck = {
  //💡🛠️ My Experiment 🛠️💡
  "The duck has tail": duck2.hasBill,
};

/* In the Collison between 2 values ❌ that has the same name: 
The object that comes eariler in order will print on and overwrite result value.
for example in the platypus example the feet value will be (orange) because
 duck comes before otter in precedence on playtpus object
 */

const platypus = Object.assign(duck2, beaver2, otter2);

console.log(platypus);
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
const duck = {
  hasBill: true,
};

const beaver = {
  hasTail: true,
};

const otter = {
  hasFur: true,
  feet: "webbed",
};

/* 
1- If we type like this in:
  Object.assign(duck, beaver, otter)
 The (duck object) will be modified and it will take all the contents of 
 The other Objects (beaver , otter) and store it inside the duck object. 
2- While if we type like this: 
  Object.assign({}, duck , beaver, otter) this will create a new object
   and make the duck object unchange.

*/

const playtpus = Object.assign({}, duck2, beaver2, otter2);

console.log(playtpus);
/* ⬆️ ---------- 4 Fourth Example On Udacity 4 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 4 Fourth Example Finish 4 ❌------------- ⬆️" +
    `


    `
);
