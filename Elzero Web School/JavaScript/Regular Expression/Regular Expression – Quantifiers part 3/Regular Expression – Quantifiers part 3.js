/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/


let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// (test method) is boolean method wich give me true or false : 
console.log(/ing$/ig.test(myString)); //true because (myString) end with ing letters in (Programming)
console.log(/^we/ig.test(myString)); //true because (myString) is start with (We) letters
console.log(/lz$/ig.test(names)); //true because (names) are end with lz letters in (5GamalZ) 
console.log(/^\d/ig.test(names)); // true because (names) is start with number (1)


//(match method) will give me the result I want if the conidition is match with the items : 

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));
