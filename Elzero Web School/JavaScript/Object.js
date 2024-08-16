/*

Object : 
--  Dig deeper 
--   Dot Notation Vs Bracket Notation 
--  Dynamic Property Name 

*/

let myVar = "country" ; 

let user =  {
    theName : "Osama",
    theAge: 30,
    "country of" : "Eygpt",
    100: "Number",
};

// Dot Notation : 
console.log(user.theName);
console.log(user.theAge);

// Bracket Notation : 
//  We use Bracket Notation if the name of the identifer has two parts like : country of and numbers 
console.log(user["theName"]);
console.log(user["country of"]);
console.log(user["100"]);



// Dynamic Property Name :  Get the name of the user2 country  from variable myVar 
let user2 = {
    name : "Ahmed",
    country : "KSA",
};

console.log(user2[myVar]);
// console.log(user2[myVar]);

