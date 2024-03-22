/* 
Function Arrow Challenges
*/

// [1] One statment In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May change]

// [1] One statment In Function :⬇︎ (DONE) - Regular Function
let people = function (...person) {
  return `String [${person.join("],[")}]`;
};
console.log(people("Ahmed", "Omar", "Ali", "Ibrahim"));

// [2] Convert To Arrow Function (solution) :⬇︎ (DONE) - Arrow Function
// Person.join() is the method to concatenate the string to array
let names2 = (...person) => `String [${person.join("],[")}] => Done!`;
console.log(names2("Osama", "Mohammed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim], => Done !

/* ============================================= */
// 
// [1] replace ??? in return statment To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Argument To Get The Output

// [1] replace ??? in return statment To Get The Output:  ⬇︎(DONE)
let myNumbers1 = [20, 50, 10, 60];

let calc1 = (one, two, ...nums) => {
  return one + two + nums[0];
};

console.log(calc1(10, myNumbers1[0], myNumbers1[1])); //80

// [2] Create The Same Function With Regular Syntax : ⬇︎(DONE)
let myNumbers2 = [20, 50, 10, 60];

let calc2 = function (one, two, ...nums) {
  return one + two + nums[0];
};

console.log(calc2(10, myNumbers2[0], myNumbers2[1])); //80

// [3] Use Array Inside The Argument To Get The Output : ⬇︎(DONE)
let myNumbers3 = [20, 50, 10, 60];

let calc3 = function (one, two, ...nums) {
  return one + two + nums[0];
};

console.log(calc3(10, myNumbers3[0], myNumbers3[1])); //80
