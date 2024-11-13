/*  ⬇️ ----------------------- First Example On Udacity ----------------------- ⬇️ : */

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  },
};

// Anynomous Clouser: is Anyonmous Function like this function ⬇️

function invokeTwice(cb) {
  cb();
  cb();
}

const myGrow = dog.growOneYear.bind(dog);

invokeTwice(myGrow);

console.log(dog.age);

/* ⬆️ ----------------------- First Example On Udacity ----------------------- ⬆️ */





// ⬇️ -----------------------  : تجربتي في تطبيق الدرس  ----------------------- ⬇️





// ⬆️ -----------------------  : تجربتي في تطبيق الدرس  ----------------------- ⬆️



