console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

/* 
Scope : is the Range of variable or function
--  Scope types : 
    1- Global Scope
    2- Function Scope
    3- Paraent Scope
    4- Lcoal Scope 
*/

//1- Global Scope :

const a = "a";

//2- Function Scope or Paraent Scope :

function parent() {
  const b = "b";

  //4- Lcoal Scope :

  function child() {
    const c = "c";
  }
}

// Example from Udacity :

const myName = "Omar";

function introductMyself() {
  const you = "student";

  function introduce() {
    console.log(`Hello, ${you}, I am ${myName}!`);
  }
  return introduce();
}

introductMyself();

/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `


    `
);
