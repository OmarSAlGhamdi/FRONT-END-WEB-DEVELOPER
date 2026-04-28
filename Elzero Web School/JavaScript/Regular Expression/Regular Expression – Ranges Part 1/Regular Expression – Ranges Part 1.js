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

let tld = "Com Net Org Info Code Io";
let tldRg = /(info|org|io)/gi;

console.log(tld.match(tldRg));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));


let notNums = "12345678910";
let NotNumsRe = /[^0-2]/g;
console.log(notNums.match(NotNumsRe));


let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let Practice = "Os1 Os10s Os2 Os8 Os8Os";
let PracticeRe = /Os[5-9]Os/g;
console.log(Practice.match(PracticeRe));
