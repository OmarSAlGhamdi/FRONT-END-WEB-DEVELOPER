/*  ⬇️ ----------------------- First Example On Udacity GPT ----------------------- ⬇️ : */
// * The Dog function is a constructor.

/* function Dog(name) {
  this.name = name; // This property is unique to each instance
} */

// Adding a method to the prototype
/* Dog.prototype.bark = function () {
 */ /* The (bark method) is added to the Dog.prototype,
     which means all instances of Dog can access this method. */

/*   console.log(`${this.name} says woof!`);
}; */

// Creating a new instance of Dog
/* const myDog = new Dog("Buddy"); */

/* When myDog is created, it has its own name property, 
but it can also use the bark method defined on the Dog.prototype. */

/* 
// Accessing the property and method
console.log(myDog.name); // Outputs: Buddy
myDog.bark(); // Outputs: Buddy says woof!

 */
/* ⬆️ ----------------------- First Example On Udacity GPT ----------------------- ⬆️ */

/* ⬇️ ----------------------- Second Example On Udacity ----------------------- ⬇️ */

/* function Dog(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}

Dog.prototype.bark = function () {
  console.log(
    `His name is ${this.name}, his age is ${this.age},His weight is ${this.weight}.`
  );
};

const myDog = new Dog("Haskey", 20, 100);

myDog.bark(); */

/* ⬆️ ----------------------- Second Example On Udacity ----------------------- ⬆️ */

/* ⬇️ ----------------------- Third Example On Udacity ----------------------- ⬇️ : */

/* function Hamster() {
  this.hasFur = true;
  this.size = "big";
}

let waffle = new Hamster(); // New object from the Hamster Object
let pancake = new Hamster();
waffle.age = 2; // 💡 My Experiment 💡
pancake.eat = "huge";

Hamster.prototype.eat = function () {
  console.log("chomp chomp chomp");
};

Hamster.prototype = {
  isHungery: false,
  color: "brown",
};

// The Result :
console.log(waffle.hasFur);
console.log(waffle.age); // 💡 My Experiment 💡
console.log(waffle.color);
console.log(waffle.size);
// console.log(waffle.eat);
waffle.eat();
// pancake.eat();
pancake.eat; */

/* ⬆️ ----------------------- Third Example On Udacity ----------------------- ⬆️ */

/* ⬇️ ----------------------- Fourth Example On Udacity ----------------------- ⬇️ : */

function Phone() {
  this.operatingSystem = "Android";
  this.screen = "bigScreen";
}

Phone.prototype.screenSize = 6;

// Create New Object From Phone Function :

const myPhone = new Phone(); // Create myphone which is new object from Phone function
// const own = myPhone.hasOwnProperty("operatingSystem");// took it from Phone function
const own = myPhone.hasOwnProperty("operatingSystem");// took it from Phone function
const inheritedfromPhoneprototype = myPhone.hasOwnProperty("screenSize"); // took it from the prototype
const screen = myPhone.hasOwnProperty('screen');

console.log(`The condition of own is ${own}`);
console.log(`The condition of inherited is ${inheritedfromPhoneprototype}`);
console.log(`The condition of screenSize is ${screen}`);


/* ⬆️ ----------------------- Fourth Example On Udacity ----------------------- ⬆️ */
