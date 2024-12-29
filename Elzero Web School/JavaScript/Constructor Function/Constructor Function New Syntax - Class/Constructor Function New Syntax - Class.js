/*
  Constructor Function
  - New Syntax
*/

class User {
  constructor(id, username, salary) {
    this.idObject = id;
    this.usernameObject = username;
    this.salaryObject = salary + 1000;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.idObject);
console.log(userOne.usernameObject);
console.log(userOne.salaryObject);

console.log(userOne instanceof User);
console.log(userOne.constructor === User);
console.log(userOne.idObject === User.id);
