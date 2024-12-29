/*
  Class
  - Inheritance
*/

// Parent Class
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class from Parent Class(User)
class Admin extends User {
  constructor(id, username, permission) {
    super(id, username);
    this.p = permission;
  }
}

// Derived From both Classes (User and Admin)
class Superman extends Admin {
  constructor(id, username, permission, ability) {
    super(id, username, permission);
    this.a = ability;
  }
}

let userOne = new User(100, "Elzero");
let adminUser = new Admin(110, "Mahomoud", 1);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.sayHello());
console.log('#######');

console.log(adminUser.i);
console.log(adminUser.u);
console.log(adminUser.p);
console.log(adminUser.sayHello());

