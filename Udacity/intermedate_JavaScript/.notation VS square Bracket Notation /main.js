let bicycle = {
  color: "blue",
  type: "mountain bike",
  wheels: {
    diameter: 18,
    width: 8,
  },
};


// ⬇︎ with .notation ⬇︎
/* console.log('.notation bracket notation is ' + bicycle.color);
console.log(`.notation bracket notation is ${bicycle.wheels.width}`);
console.log(`.notation bracket notation is ${bicycle.wheels.diameter}`); */


// ⬇︎ with square bracket notation ⬇︎

/* console.log('square bracket notation is '+ bicycle['color']);
console.log('square bracket notation is '+ bicycle['wheels']['width']); */



// Recall the square bracket variable :
const myVariable = 'color';

// square bracket is better at this situation ⬇︎
console.log(bicycle[myVariable]);
console.log(bicycle['color']);

// Not .notation bracket ❌
console.log(bicycle.myVariable);
