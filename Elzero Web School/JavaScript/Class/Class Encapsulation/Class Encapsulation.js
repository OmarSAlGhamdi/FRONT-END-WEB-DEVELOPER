/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");
console.log(userOne.u);
// console.log(userOne.e * 0.3);
console.log(userOne.getSalary());

console.log(
  "⬇️  -----------✅ 🛠️💡🧪 1 First Experiment Example Start 🧪💡🛠️ ✅----------- ⬇️" +
    `
  `
);
/* ⬇️ ---------- 🛠️💡🧪 1 First Experiment Example 🧪💡🛠️ ---------- ⬇️ */

// Experiment on inhertance and Encapsulation :

// First Class :
class Student {
  #S;
  constructor(id, name, Salary , Class) {
    this.i = id;
    this.n = name;
    this.#S = Salary;
    this.C = Class;
  }
  getNewSalary() {
    return this.#S * 0.3;
  }
}

// Derived Class :
class secondClass extends Student {
  constructor(id, name, getNewSalary, marks , Class) {
    super(id, name, getNewSalary, Class);
    this.m = marks;
  }
}

// New object :
let twoSeven = new Student(100, "Ahmed", 5000 , "2/7");
let twoSix = new secondClass(110, "SecondIntermidateClass", 10000, 95 , "2/6");

// log it :
//2/7 : 
console.log(`Student id is :${twoSeven.i}`);
console.log(`Student name is :${twoSeven.n}`);
console.log(`The salary is : ${twoSeven.getNewSalary()}`);

console.log(`The student class is : ${twoSeven.C}`);


console.log("#####");
// 2/6 : 
console.log(twoSix.i);
console.log(twoSix.n);
console.log(`The Salary is : ${twoSix.getNewSalary()}`);
console.log(twoSix.m);
console.log(`The studnets makrs is :${twoSix.m}`);
console.log(`The studnet class is :${twoSix.C}`);


/* ⬆️ ---------- 🛠️💡🧪 1 First Experiment Example 🧪💡🛠️ ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -----------❌ 🛠️💡🧪 1 First Experiment Example Finish 🧪💡🛠️ ❌----------- ⬆️" +
    `


    `
);
