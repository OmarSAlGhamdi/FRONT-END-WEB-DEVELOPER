/*  ⬇️ ----------------------- First Example On Udacity GPT ----------------------- ⬇️ : */

function Dog(name) {
    this.name = name; // This property is unique to each instance
  }
  
  // Adding a method to the prototype
  Dog.prototype.bark = function() {
    console.log(`${this.name} says woof!`);
  };
  
  // Creating a new instance of Dog
  const myDog = new Dog('Buddy');
  
  // Accessing the property and method
  console.log(myDog.name); // Outputs: Buddy
  myDog.bark(); // Outputs: Buddy says woof!

  /* ⬆️ ----------------------- First Example On Udacity GPT ----------------------- ⬆️ */
