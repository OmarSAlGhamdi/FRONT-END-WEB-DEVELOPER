/* ⬇️ ----------------------- 1 First Example On Udacity 1 ----------------------- ⬇️ : */
console.log(
  "⬇️  ---------------------✅ 1 Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال

/*  The  - constructor -  Property

* Each time an object is created, 
a special property is assigned to it under the hood: constructor.
Accessing an object's constructor property returns a reference to 
the constructor function that created that object in the first place! Here's a simple Longboard 
constructor function. We'll also go ahead and make a new object, then save it to a board variable:
*/

function Longboard() {
  this.material = "bamboo";
}

const board = new Longboard();

console.log(board.constructor);

//The broswer result is :
/* ƒ Longboard() {
    this.material = "bamboo";
  } */



console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ 1 Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
`
);





/* ⬇️ ----------------------- 2 Second Example On Udacity 2 ----------------------- ⬇️ : */
console.log(
  "⬇️  ---------------------✅ 2 Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال

const rodent = {
  favoriteFood: "cheese",
  hasTail: true,
};


console.log(rodent.constructor);

//The broswer result is :
//ƒ Object() { [native code] }


console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ 2 Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
    `
);
