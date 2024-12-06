console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */
let car = {
  on: true,
  mode: "Black and white",
  remainingSheets: 168,
  print: function () {
    console.log("The printer is printing!");
    this.carCalling(); // when the method like (carCalling()) is
    //on lower level you have to use this
    // to make the bigger scope know it's there
  },

  carCalling: function () {
    console.log("Hello from carCalling");
  },
};

car.print();
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
// Another example (cat)
let cat = {
  age: 2,
  name: "Bailey",
  mewo: function () {
    console.log("Meow");
  },

  greet: function (person) {
    console.log("Hello" + person + "!");
  },
};
/* ⬆️ ---------- 2 Second Example On Udacity 2 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 2 Second Example Start 2 ❌------------- ⬆️" +
    `


    `
);
