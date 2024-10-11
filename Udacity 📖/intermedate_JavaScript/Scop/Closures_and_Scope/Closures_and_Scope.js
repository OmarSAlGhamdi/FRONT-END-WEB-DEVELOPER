/* const number = 3;

function myFunction() {
  const otherNumber = 1;

  function logger() {
    console.log(otherNumber);
  }
  return logger;
}

const result = myFunction();
result(); */




// Example from Udacity GPT:

function outerFunction() {
  const outerVariable = 'I am from the outer function!';

  function innerFunction() {
    console.log(outerVariable); // Accessing the outerVariable from the outer function
  }

  return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction(); // outerFunction is called, creating a lexical environment
closureFunction(); // Calling the returned function
