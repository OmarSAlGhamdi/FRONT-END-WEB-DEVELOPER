console.log(
  "⬇️  ---------------------✅ First Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال

/*  ⬇️ ----------------------- 1 First Example On Udacity GPT 1 ----------------------- ⬇️ : */

/* ⬆️ ----------------------- 1 First Example On Udacity GPT 1 ----------------------- ⬆️ */
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

/* ⬆️ ----------------------- 2 Second Example On Udacity 2 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ Second Example Finish ❌--------------------- ⬆️"
);

console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity GPT 1 ---------- ⬇️ */

// * The Dog function is a constructor.

function Dog(name) {
  this.name = name; // This property is unique to each instance
}

// Adding a method to the prototype
Dog.prototype.bark = function () {
  /* The (bark method) is added to the Dog.prototype,
     which means all instances of Dog can access this method. */

  console.log(`${this.name} says woof!`);
};

// Creating a new instance of Dog
const myDogy = new Dog("Buddy");

/* When myDog is created, it has its own name property, 
but it can also use the bark method defined on the Dog.prototype. */

// Accessing the property and method
console.log(myDogy.name); // Outputs: Buddy
myDogy.bark(); // Outputs: Buddy says woof!

/* ⬆️ ---------- 1 First Example On Udacity GPT 1 ---------- ⬆️ */
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

function Dog(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}

Dog.prototype.bark = function () {
  console.log(
    `His name is ${this.name}, his age is ${this.age},his weight is ${this.weight}.`
  );
};

const myDog = new Dog("Haskey", 20, 100);

myDog.bark();

/* ⬆️ ---------- 2 Second Example On Udacity 2 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 2 Second Example Start 2 ❌------------- ⬆️" +
    `


    `
);
