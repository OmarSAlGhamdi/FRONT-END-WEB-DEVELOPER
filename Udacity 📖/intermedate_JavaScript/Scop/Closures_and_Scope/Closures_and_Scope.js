console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */
const number = 3;

function myFunction() {
  const otherNumber = 1;

  function logger() {
    console.log(otherNumber);
  }
  return logger;
}

const result = myFunction();
result();
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
// Example from Udacity GPT:

function outerFunction() {
  const outerVariable = "I am from the outer function!";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outerVariable from the outer function
  }

  return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction(); // outerFunction is called, creating a lexical environment
closureFunction(); // Calling the returned function
/* ⬆️ ---------- 2 Second Example On Udacity 2 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 2 Second Example Start 2 ❌------------- ⬆️" +
    `


    `
);
