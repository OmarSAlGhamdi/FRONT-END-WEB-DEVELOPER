class User {
  constructor(id, username, salary) {
    this.idObj = id;
    this.usernameObj = username;
    this.salaryObj = salary;
  }
  updateName(newName) {
    this.usernameObj = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.idObj);
console.log(`The (userOne) old name is: ${userOne.usernameObj}`);
userOne.updateName("Osama");
console.log(`The (userone) new name is : ${userOne.usernameObj}`);
console.log(userOne.salaryObj);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(strOne instanceof String);
console.log(strTwo instanceof String);


console.log(strOne.constructor ===String);
console.log(strTwo.constructor ===String);
