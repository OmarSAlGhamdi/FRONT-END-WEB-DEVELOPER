// 1. Find all the words with more than 7 characters
const words = ["tardis", "grok", "frak", "blaster", "klingon", "shepherd"];

// expected output: Array ['shepherd']

const newwords = words.filter((counter) => {
  return counter.length > 7;
});

console.log(newwords);
// ----------------------------------------------------------
// 2. Find all even values
const numbers = [12, 13, 14, 15, 16, 17];

// expected output: Array [12, 14, 16]

const evenNumbers = numbers.filter((num) => {

   return (num % 2 === 0);

}); 
// ----------------------------------------------------------
// REAL LIFE EXAMPLES
console.log(evenNumbers);
// We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
  {
    name: "Greedo",
    universe: "Star Wars",
    status: "active",
  },
  {
    name: "Boba Fett",
    universe: "Star Wars",
    status: "inactive",
  },
  {
    name: "Asajj Ventress",
    universe: "Star Wars",
    status: "unknown",
  },
  {
    name: "Zam Wesell",
    universe: "Star Wars",
    status: "inactive",
  },
  {
    name: "Jango Fett",
    universe: "Star Wars",
    status: "active",
  },
];

const activeHunters = hunters.filter(hunter => {
    return hunter.status === "active";
});

console.log(activeHunters);

// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]
