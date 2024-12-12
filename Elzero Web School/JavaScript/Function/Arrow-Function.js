/* 
Function 
-   Arrow Function
--  Regular vs Arrow [Parm + No Parm]
--  Multiple Lines
*/

// Regular Function :
function print() {
  return 10;
}
console.log(print());

// Anynomous Function :
//💡 The function desn't have a name
let print2 = function () {
  return 20;
};
console.log(print2());


// Arrow Function :
/* 
💡 If we have only one statment inside the function 
we can delete these () {} return  like this :
let print = () =>
 return 100;

 
💡 OR like this :
💡 We use _ instead of () ⬇︎
 let print = _ =>
 return 100;
*/
let print3 = () => 100;
console.log(print3());

// Change the Regular Function To ➡️ Arrow Function:
let print4 = function (num) {
  return num;
};

console.log(print4(`This is from Print4 (1000)`));

// ----------- New The Arrow Function -----------

let print5 = num1 => num1;

console.log(print5(500));





// another example of how to change the regular function to arrow function
// Regular Function
let print6 = function () {
  return 20;
};
console.log(print6());

// ⬇︎ To Arrow Function ⬇︎

let print7 = (num2 , num3) =>
num2 + num3;

console.log(print7(100,50));