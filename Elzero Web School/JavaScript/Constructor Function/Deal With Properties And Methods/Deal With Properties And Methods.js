/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.idObj = id;
    this.usernameObj = username || "Unknown";
    this.salaryObj = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.usernameObj} Your Salary Is ${this.salaryObj}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.usernameObj} Your Salary Is ${this.salaryObj}`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 6000);

console.log(userOne.usernameObj);
console.log(userOne.salaryObj);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log(userTwo.usernameObj);
console.log(userTwo.salaryObj);
console.log(userTwo.msg); // Native code
console.log(userTwo.writeMsg); // Native code
