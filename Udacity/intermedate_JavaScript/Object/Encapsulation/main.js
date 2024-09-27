let fruit = "orange";

let myFruit = { name: fruit };// now name === orange;

function changeFruit(fruitObject) {
  fruitObject.name = "apple"; // We chnage the value of the name property to apple
}

changeFruit(myFruit); //Here we pass myFruit to changeFruit

// console.log(myFruit.name);

// myFruit.name;

changeFruit(myFruit.name);