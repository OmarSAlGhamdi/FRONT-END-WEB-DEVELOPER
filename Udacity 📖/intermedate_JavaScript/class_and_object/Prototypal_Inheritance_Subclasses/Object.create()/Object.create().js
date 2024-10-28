console.log(
  "⬇️  ---------------------✅ First Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(`${this.name} walks!`);
};

function Cat(name) {
  Animal.call(this, name);
  this.lives = 9;
}
// This line will link 🔗 the (Cat prototype) with (Animal prototype)
Cat.prototype = Object.create(Animal.prototype);

// This line will reset ⟲  the constructor of the 
// cat to be indacte only to Cat not Animal
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log("Meow!");
  console.log(`${this.name} Meow!`);

};

const bambi = new Cat("Bambi");


bambi.meow();

bambi.walk();

console.log(bambi.name);

console.log(`Bambi lives is: ${bambi.lives}`);

const bailey = new Cat ("Bailey");

bailey.meow();
console.log(`Bailey lives is: ${bailey.lives}`);



/* ⬆️ ----------------------- 1 First Example On Udacity 1 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ First Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
    `
);

console.log(
  "⬇️  ---------------------✅ Second Example Start ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
/* ⬇️ ----------------------- 2 Second Example On Udacity 2 ----------------------- ⬇️ */

const mammal = {
  vertebrate: true,
  earBones: 3,
};

const rabbit = Object.create(mammal);

console.log(rabbit);

console.log(rabbit.__proto__ === mammal);

console.log(rabbit.vertebrate);

console.log(rabbit.earBones);

/* ⬆️ ----------------------- 2 Second Example On Udacity 2 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ Second Example Finish ❌--------------------- ⬆️"
);
console.log(
  `
      `
);
