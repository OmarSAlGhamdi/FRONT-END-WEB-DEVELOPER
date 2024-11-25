console.log(
  "⬇️  ---------------------✅ First Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
/* ⬇️ ----------------------- 1 First Example On Udacity 1 ----------------------- ⬇️ */

// ⬇️ ---------- First Example Video On Udacity : ---------- ⬇️

function SoftwareDeveloper() {
  this.favoritLangauge = "JavaScript";
}

let developer = new SoftwareDeveloper();

developer();

// ⬆️ ---------- First Example Video On Udacity ---------- ⬆️

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

/* ⬇️ ---------- Second Example Video On Udacity : ---------- ⬇️  */

function Hero(name, role) {
  // 1- We use (this.name) and (this.role) to make instance for each new object
  // 2- In this.name = name;  ⬅️ (name on the right)
  //   A- ⬆️(this.name)⬆️ is the Refers to the property of
  //       the object that is being created by the constructor.
  //   B- (name) => (on the right):Refers to the parameter passed into the function.

  this.name = name;

  this.role = role;

  this.introduce = function () {
    //this refer to this object that i want to call
    console.log(`My name is ${this.name} and my role is ${this.role}.`);
  };
}

let tylor = new Hero("Tylor", "Mother");

let riley = new Hero("Riley", "coach");

let omar = new Hero("Omar", "CEO");

// ✅ This can call directly because of the (console.log) method inside the introduce function:
tylor.introduce();
omar.introduce();

// ❌ This can't call directly because it didn't have (console.log) inside it:
console.log(omar.name);
console.log(omar.role);

/* ⬆️ ---------- Second Example Video On Udacity  ----------  ⬆️ */

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

// ⬇️ ----------  : تجربتي في تطبيق الدرس  ---------- ⬇️

function family(name, age, education) {
  this.name = name;
  this.age = age;
  this.education = education;

  this.ShowInformation = function () {
    console.log(
      `My name is ${this.name}. My age is ${this.age}. My education is ${this.education}.`
    );
  };
}

let Ahmed = new family("Ahmed", "30", "Bachelor");
let Bndr = new family("Bndr", "50", "Master");
let Meshari = new family("Meshari", "20", "Phd");

console.log(`Ahmed name is ${Ahmed.name}`);
console.log(`Bndr age is ${Bndr.age}`);
console.log(`Meshari education is ${Ahmed.education}`);
Ahmed.ShowInformation();
Bndr.ShowInformation();
Meshari.ShowInformation();

// ⬆️ ----------   تجربتي في تطبيق الدرس   ---------- ⬆️

/* ⬆️ ----------------------- 3 Third Example On Udacity 3 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ Third Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
  
    `
);

console.log(
  "⬇️  ---------------------✅ Fourth Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
/* ⬇️ ----------------------- 4 Fourth Example On Udacity 4 ----------------------- ⬇️ */

// ⬇️ ----------  Check if an object was created : ---------- ⬇️

function Developer(name) {
  this.name = name;
}

const dev = new Developer("Veronika");

/* ⬇️ Check if the value of the dev is object ⬇️ */
console.log(typeof dev); // the result is true ✅

/* ⬇️ (=)Check if the dev is instance of Developer or not ⬇️ */
console.log(dev instanceof Developer);
// ⬆️ We don't type parenthese() for the developer above because we only reference to it ⬆️

// ⬆️ ----------  Check if an object was created ---------- ⬆️

/* ⬆️ ----------------------- 4 Fourth Example On Udacity 4 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ Fourth Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
  
    `
);
