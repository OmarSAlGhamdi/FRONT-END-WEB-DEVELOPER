// 1. Take this disjointed sentence and turn it into a single string
const text = [
  "The ships",
  "hung in the sky,",
  "much the way",
  "that bricks don`t",
];

// Your Code Here
const sentence = text.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
});

console.log(sentence);
// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
  {
    team: "A",
    score: 20,
  },
  {
    team: "B",
    score: 17,
  },
  {
    team: "C",
    score: 23,
  },
  {
    team: "D",
    score: 13,
  },
];

// Your Code Here
const winningTeam = scores.reduce((accumulator, currentValue) => {
  if (accumulator.score > currentValue.score) {
    return accumulator;
  } else {
    return currentValue;
  }
});
// expected output: "C"
console.log(
  `The team is ${winningTeam.team} and the score is ${winningTeam.score} `,
);

console.log(winningTeam);
// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
  {
    name: "Serenity",
    speed: "4.2G",
  },
  {
    name: "Cylon Raider",
    speed: "7.5G",
  },
  {
    name: "Swordfish II",
    speed: "50G",
  },
  {
    name: "Tie Fighters",
    speed: "4100G",
  },
];

// Your Code Here

// First Solution : 
const fastestShip = ships.reduce((accumulator, currentValue) => {
  if (parseFloat(accumulator.speed) > parseFloat(currentValue.speed)) {
    return accumulator;
  } else {
    return currentValue;
  }
});

console.log(fastestShip.name);
console.log(`The fastest Ship is (${fastestShip.name}) and its speed is (${fastestShip.speed})`);

// Second Solution : 
const fastestShip2 = ships.reduce((previous, current) => {
    const speed = parseInt (current.speed.slice(0, -1));
    const previousSpeed = parseInt (previous.speed.slice(0, -1))
    if(speed > previousSpeed) {
        return current;
    } else {
        return previous;
    }

});

console.log(fastestShip2.name);
// Expected output: Tie Fighters
