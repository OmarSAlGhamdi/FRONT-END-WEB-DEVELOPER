/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }

  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);
console.log(User.prototype);

User.prototype.SayWelcom = function () {
  return `Weclome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";
