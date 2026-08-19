// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your code
// First Solution:
const reveresed = start.map((num) => 11 - num);
// Second Solution:
const reveresed2 = start.map((num) => {
  return 11 - num;
});
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// First Output:
console.log(reveresed);
// Second Output:
console.log(reveresed2);
// (reveresed);
// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [
  ["Mal", "Captain"],
  ["Wash", "Pilot"],
  ["Zoey", "1st Mate"],
  ["Jayne", "Public Relations"],
];

// your code

// First Solution:
const names = shipMates.map(([name, job]) => `${job}: ${name}`);

// First Output:
// console.log(`${shipMates.join(" , ")}`);
// console.log(`${names.join(" , ")}`);
// console.log(names);
// Second Output:
// console.log(`This is the second Output: ${names2.join(" , ")}`);

console.log(names);

// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"];

// ⚠️ TODO: ⚠️ check this line :
// your code
const newTeam = awayTeam.map((name, index) => {
  return `${name}: ${index % 2 === 0 ? "even" : "odd"}`;
});

// console.log(newTeam);
console.log(newTeam);

// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = [
  "Manedlorian",
  "Enterprise",
  "Firefly",
  "Battlestar Galactica",
];

// your code

const showIndex = sci_fi_shows.map((item, index) => {
  return [item, index];
});
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

console.log(showIndex);
// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4];
const result = [];
// your code

numbers.forEach(() => {
  result.push([...numbers]);
});
// expected output: Array 
// [
// [1, 2, 3, 4], 
// [1, 2, 3, 4], 
// [1, 2, 3, 4], 
// [1, 2, 3, 4]
// ]
//The result :
console.log(result);

// Having trouble with creating a 2D array?
// Take a closer look at the last two arguments of map, one of them might be able to help
