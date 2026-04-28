/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myNumber = 10;

/* let check = nums.some(function (e) {
  console.log("test");
  return e > 5;
}); */

let check = nums.some(function (e) {
  // console.log(this);
  return e > this;
}, myNumber);

// let check2 = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(`The result of the checkValue 20 is ${checkValues(nums, 20)}`);
console.log(`The result of the checkValue 5 is ${checkValues(nums, 5)}`);

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

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  console.log(this.min);
  console.log(this.max);
  
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);


/* ⬆️ ---------- 2 Second Example On Udacity 2 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 2 Second Example Start 2 ❌------------- ⬆️" +
    `


    `
);
