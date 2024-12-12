/* 
    Scope  
Global And Local Scope 
*/

// Var is a global scope (can access from outside the scope) 
// let is a local scope (not access from outside the scope)
// const is a local scope (not access from outside the scope)
var a = 1;
let b = 2;


function showText() {
/* 
The function will look first inisde itself 
if she find them (A & B variable) good if it's not she will 
look for them outside the function  
*/
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
  
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);


showText();
