/* ⬇️ ----------------------- 1 First Example On Udacity 1 ----------------------- ⬇️ : */
console.log("⬇️  ---------------------✅ First Example Start ✅--------------------- ⬇️");
console.log(``); // عشان يكون في مسافة قبل كلمة المثال

/*  Object.getPrototypeOf() : 
isPrototypeOf() works well, but keep in mind that in order to use it,
 you must have that prototype object at hand in the first place! 
 What if you're not sure what a certain object's prototype is? Object.getPrototypeOf() 
 can help with just that!
*/


const rodent = {
    favoriteFood: "cheese",
    hasTail: true,
  };
  
  function Mouse() {
    this.favoriteFood = "cheese";
    //this refers to the new object(ralph)
  }
  
  Mouse.prototype = rodent;
  
  const ralph = new Mouse();
  
  // const result = rodent.isPrototypeOf(ralph);
  const result = rodent.isPrototypeOf(ralph);
  
  console.log(`The result of (isPrototypeOf) method is: ${result}`);



const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);



console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log("⬆️  ---------------------❌ First Example Finish ❌--------------------- ⬆️");
console.log(
`
`
);