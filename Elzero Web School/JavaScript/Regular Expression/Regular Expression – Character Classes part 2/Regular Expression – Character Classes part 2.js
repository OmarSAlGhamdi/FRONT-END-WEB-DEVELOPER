/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/


let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));

console.log(re.test(names));
console.log(re.test("Osama")); //false
console.log(/\bspam|spam\b/.test("Osama")); //false
console.log(/\bspam|spam\b/.test("1spam")); //true
console.log(/\bspam|spam\b/.test("spam1")); //true

/* my experince : */ 
console.log(re.test("Osama")+' because osama is not equal to spam');


