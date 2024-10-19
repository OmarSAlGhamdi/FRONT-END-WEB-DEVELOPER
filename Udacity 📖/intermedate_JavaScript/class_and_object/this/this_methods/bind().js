const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  },
};

function invokeTwice(cb) {
  cb();
  cb();
}

const myGrow = dog.growOneYear.bind(dog);

invokeTwice(myGrow);

console.log(dog.age);
