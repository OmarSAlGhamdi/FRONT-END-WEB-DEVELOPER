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