console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

const iceCreamTotals = {
  Veronica: 600,
  Andrew: 711,
  Jessica: 818,
  David: 9001,
  Richard: 10000000,
};

// console.log(Object.keys(iceCreamTotals)); // Print the name of the property
// console.log(Object.values(iceCreamTotals)); // Print the value of the property
// console.log(iceCreamTotals); // Print the whole object

const result = [];

for (const name in iceCreamTotals) {
  result.push(name);
}

console.log(result);

/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `


    `
);
