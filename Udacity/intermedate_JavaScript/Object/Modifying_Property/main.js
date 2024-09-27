// ⬇︎ First Experiment ⬇︎ :

let human = {
  name: "Omar",
  age: 30,
  meow: function () {
    console.log("Meow");
  },
  /* ⬇︎ We can call them by this ⬇︎ :
human.greet(enter anyName you want); */
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};

// We call the function directly => without ❌ console.log();
human.greet("Ahmed 😘 from first Object");

// ⬆︎ First Experiment ⬆︎ :


// -------------------------------------------- //


// ⬇︎ Example From (Udacity) ⬇︎
const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
      console.log('Meow!');
    },
    greet: function (name) {
      console.log(`Hello ${name}`);
    }
  };

console.log('------------------');


console.log(`The old cat name is : ${cat.name}`);
console.log(`The old cat age is : ${cat.age}`);




// Let's change things a little bit : 

cat.age += 1;

cat.age;
// 3


cat.name = 'Bambi';

cat.name;
// 'Bambi'


console.log(`The new cat name is :${cat.name}`);
console.log(`The new cat age is : ${cat.age}`);


// ⬆︎ Example From (Udacity) ⬆︎