/*
  Constructor Function
*/

function User(id, username, salary) {
  this.idObject = id;
  this.usernameObject = username;
  this.salaryObject = salary + 1000;
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);


console.log(userOne);
console.log(userOne.idObject);
console.log(userOne.usernameObject);
console.log(`The salary is ${userOne.salaryObject}`);

console.log(userTwo.idObject);
console.log(userTwo.usernameObject);
console.log(`The salary is ${userTwo.salaryObject}`);

console.log(userTwo.salaryObject);

console.log(userThree.idObject);
console.log(userThree.usernameObject);
console.log(`The salary is ${userThree.salaryObject}`);

console.log(userThree.salaryObject);


/* const userOne = {
  id: 100,
  username: "Elzero",
  salary: 5000,
};
const userTwo = {
  id: 100,
  username: "Hassan",
  salary: 6000,
};
const userThree = {
  id: 100,
  username: "Sayed",
  salary: 7000,
}; */
