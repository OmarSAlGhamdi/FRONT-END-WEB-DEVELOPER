/*
  Class
  - Static Properties And Methods
*/

class User {
  //  Static Property
  static count = 0;
  constructor(id, username, salary) {
    this.idobj = id;
    this.usernameObj = username;
    this.salaryObj = salary;
    User.count++;
  }
  // static method
  static sayHello() {
    return `Hello From Class`;
  }

  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

console.log(userOne.usernameObj);
console.log(userTwo.usernameObj);
console.log(userOne.count);
console.log(User.count);
// console.log(userOne.sayHello());
console.log(User.sayHello());
console.log(User.countMembers());

