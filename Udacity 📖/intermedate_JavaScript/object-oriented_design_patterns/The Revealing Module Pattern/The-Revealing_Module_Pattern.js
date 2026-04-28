console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */
let person = (function () {
  let privateAge = 0;
  let privateName = "Andrew";

  function privateAgeOneYear() {
    privateAge += 1;
    console.log(`One year has passed! Current age is ${privateAge}`);
  }

  function displayName() {
    console.log(`Name: ${privateName}`);
  }

  function ageOneYear() {
    privateAgeOneYear();
  }
  return {
    name: displayName,
    age: ageOneYear,
  };
})();

// console.log();

// This will works becasue it's stored on return block ✅
person.age();
person.age();

// This will works becasue it's stored on return block ✅
person.name();

// This will not works becasue it's on the private block ❌
person.displayName();

// This will not works becasue it's on the private block ❌
person.ageOneYear();
/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `


    `
);
