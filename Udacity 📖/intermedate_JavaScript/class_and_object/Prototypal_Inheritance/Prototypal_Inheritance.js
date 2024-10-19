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

function Dog(name, age, weight) {
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

myDog.bark();

/* ⬆️ ----------------------- Second Example On Udacity ----------------------- ⬆️ */
