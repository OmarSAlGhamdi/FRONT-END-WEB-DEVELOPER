console.log(
  `
  ` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */
const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  },
};

// Anynomous Clouser: is Anyonmous Function like this function ⬇️

function invokeTwice(cb) {
  cb();
  cb();
}

const myGrow = dog.growOneYear.bind(dog);

invokeTwice(myGrow);

console.log(dog.age);
/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
  ` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `
  
  
  `
);

// ⬇️ -----------------------  : تجربتي في تطبيق الدرس  ----------------------- ⬇️
// ⬆️ -----------------------  : تجربتي في تطبيق الدرس  ----------------------- ⬆️
