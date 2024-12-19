/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let notAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let notAtozCapital = /[^A-Z]/g;
let aAndbAndC = /[abc]/g;
let notaAndbAndC = /[^abc]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecial = /[^a-zA-Z]/g;
let Special = /[^a-zA-Z0-9]/g;
let SpecialwithoutUpArrow = /[^a-z^A-Z0-9]/g;
console.log(myString.match(atozSmall));
console.log(myString.match(notAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(notAtozCapital));
console.log(myString.match(aAndbAndC));
console.log(myString.match(notaAndbAndC));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecial));
console.log(myString.match(Special));
console.log(myString.match(SpecialwithoutUpArrow));

