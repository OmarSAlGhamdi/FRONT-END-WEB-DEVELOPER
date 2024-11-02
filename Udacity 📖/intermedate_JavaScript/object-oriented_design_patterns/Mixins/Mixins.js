console.log(
  "⬇️  ---------------------✅ First Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال

/* let target = {};

let source = { number: 7 };

Object.assign(target, source);

console.log(target); */

/* ⬆️ ----------------------- 1 First Example On Udacity 1 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ First Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
  
    `
);

console.log(
  "⬇️  ---------------------✅ Second Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
/* ⬇️ ----------------------- 2 Second Example On Udacity 2 ----------------------- ⬇️ */

let target = { letter: "a", number: 11 };

let source = { number: 7 };

Object.assign(target, source);

console.log(target);

/* ⬆️ ----------------------- 2 Second Example On Udacity 2 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ Second Example Finish ❌--------------------- ⬆️"
);
console.log(
  `

      `
);

console.log(
  "⬇️  ---------------------✅ Third Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
/* ⬇️ ----------------------- 3 Third Example On Udacity 3 ----------------------- ⬇️ */

const duck = {
  hasBill: true,
  feet: "orange",
};

const beaver = {
  hasTail: true,
};

const otter = {
  hasFur: true,
  feet: "webbed",
};

/* let newduck = {
    'The duck has tail': duck.hasBill, 
}; */

/* In the Collison between 2 values ❌ that has the same name: 
The object that comes eariler in order will print on and overwrite result value.
for example in the platypus example the feet value will be (orange) because
 duck comes before otter in precedence on playtpus object
 */
const platypus = Object.assign(duck, beaver, otter);

console.log(platypus);

/* ⬆️ ----------------------- 3 Third Example On Udacity 3 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ Third Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
      `
);
