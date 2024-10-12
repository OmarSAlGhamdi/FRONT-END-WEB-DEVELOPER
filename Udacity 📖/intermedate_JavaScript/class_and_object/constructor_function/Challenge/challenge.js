/*

Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/

function Sandwich(bread, meat, vegetables) {
  this.bread = bread;
  this.meat = meat;
  this.vegetables = vegetables;
}

let mySandwich = new Sandwich(
  "wheat",
  ["Turkey", "Ham"],
  ["Tomato", "Lettuce"]
);


console.log(mySandwich.bread);
console.log(mySandwich.meat);
console.log(mySandwich.vegetables);
