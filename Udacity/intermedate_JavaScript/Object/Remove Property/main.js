/* let car = {
  on: true,
  mode: "Black and white",
  remainingSheets: 168,
  print: function () {
    console.log("The printer is printing!");
    this.carCalling(); // when the method like (carCalling()) is 
                       //on lower level you have to use this
                      // to make the bigger scope know it's there
  },

  carCalling: function () {
    console.log("Hello from carCalling");
  },
};

car.print();
 */

// Another example (cat)
let cat = {
  age: 2,
  name: "Bailey",
  mewo: function () {
    console.log("Meow");
  },

  greet: function (person) {
    console.log("Hello" + person + "!");
  },
};
