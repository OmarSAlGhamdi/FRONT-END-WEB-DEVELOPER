/* 
Higher order Functions : 
---> is a function that accept s functions as parameters and/or returns a function.

-   Map
--- method creates a new array.
--- populated with the results of calling a provided function on every element
--- in the calling array.

Syntax map (callBackFunction(Element, Index, Array) { }, thisArg)
-- Element => The current element being processed in the array.
-- Index => The index of the current element being processed in the array.
-- Array => The current Array.

Notes 
-   Map Return A New Array

Examples :
-- Anonymous Function
-- Names Function

*/

/* let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray); */

// Same idea with Map :

/* let addSelf = myNums.map(function (element, index, array) {
  // console.log(`Current Element =>  ${element}`);
  // console.log(`Current index =>  ${index}`);
  // console.log(`Current array =>  ${array}`);
  // console.log(`Current this =>  ${this}`);
  return element + element;
}, 10);

console.log(addSelf); */

/*  let myNums2 = [5, 10, 15, 20, 25, 30];
// HomeWork By MySelf :
// change the regular function into => arrow function ⬇

let addSelf2 = myNums2.map((element2) => element2 + 10);

console.log(addSelf2); 


//  Create function that will addition the number to itself


/* function addition(element) {
  return element + element;
}

let add = myNums2.map(addition);

console.log(add); */

/* 
Map Examples :
-   Swap Cases
-   Inverted Numbers
-   ignored Boolean Value
 */

let swappingCases = "elZERo";
let innvertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBooleans = "Elz123er4o";

// First Solution with Regular Function  ⬇
// split() convert the String to Array
let sw = swappingCases
  .split("")
  .map(function (element) {
    // We use Ternary Operator ➡ Condtion ? True : False;

    return element === element.toUpperCase()
      ? element.toLowerCase()
      : element.toUpperCase();

    //   return element.toLowerCase();
    // return element.toUpperCase();
  })
  .join("");

console.log(sw);

// Convert them to ➡ Arrow Function :

let sw2 = swappingCases
  // We use Ternary Operator ➡ Condtion ? True : False;
  .split("")
  .map(
    /* function */ (element) =>
      element === element.toUpperCase() //This is the condition
        ? element.toLowerCase() // This is the true result
        : element.toUpperCase() // This is the false result
  )
  .join("");

console.log(sw2);

/* 
 My personal Experiment To change the random letters to Capital litter or small letter : ⬇
Using Regular Function : ⬇
*/

let sw3 = swappingCases
  .split("")
  .map(function (element) {
    return element.toLowerCase();
  })
  .join("");

console.log(sw3);

/* 
My personal Experiment To change the random letters to Capital litter or small letter : ⬇
Using Arrow Function : ⬇
*/

let sw4 = swappingCases
  .split("")
  .map((element) => element.toUpperCase())
  .join("");

console.log(sw4);
