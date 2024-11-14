// Exmple of accessing the property outside the object :
let car2 = {
  model: "LS",
  maker: "toyota",
  year: 2024,
  start: function () {
    console.log("The car has start");
  },
};

// Example of accessing the property of the object inside the same object :

let car = {
  model: "ES",
  maker: "Lexus",
  year: 2013,
  descrip: function () {
    console.log(
      `This is ${this.maker}  its model is ${this.model}  and it's ${this.year}`
    );
  },
};


car.descrip();
