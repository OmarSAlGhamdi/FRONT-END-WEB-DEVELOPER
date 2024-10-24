/* ⬇️ ----------------------- 3 Third Example On Udacity 3 ----------------------- ⬇️ : */
console.log("⬇️  ---------------------✅ First Example Start ✅--------------------- ⬇️");
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
function Hamster() {
  this.hasFur = true;
  this.size = "big";
}

let waffle = new Hamster(); // New object from the Hamster Object
let pancake = new Hamster();
waffle.age = 2; // 💡 My Experiment 💡
pancake.eat = "huge";

// :البروتوتايب الاول ما يقدر يوصل له الا الكائنات القديمة مثل
// pancake و waffle
Hamster.prototype.eat = function () {
  console.log("chomp chomp chomp");
};

//new prototype object: new object can access to it only like : muffin
// ⬇️ الاوبجيكت الاخير مثل مافن هو اللي يقدر يدخل على البروتايب الاخير
Hamster.prototype = {
  isHungery: false,
  color: "brown",
  sleep: function () {
    console.log("Sleep Sleep Sleep😴");
  },
};

const muffin = new Hamster();

// console.log(muffin.eat());
// الاوبجت الجديده زي مافن يقدر يوصل للفنكشن الاساسية هامستر مباشرة
// The result of muffin ✅❌ :
console.log(`muffin.hasFur is: ${muffin.hasFur} ✅`);
console.log(`muffin sleepNight is: ✅`);
muffin.sleep();
console.log(`muffin color is: ${muffin.color} ✅`);

// The Result of waffle : ✅❌
console.log(`waffle hasFur is ${waffle.hasFur} ✅`);
console.log(`waffle age is: ${waffle.age}`); // 💡 My Experiment 💡
console.log(`waffle color is: ${waffle.color} ❌`);
console.log(`waffle size is: ${waffle.size} ✅`);
// console.log(waffle.eat);
console.log("waffle eat function is: ✅");
// waffle.eat(); // Has its own calling method

console.log("waffle eat function ❌ :");
waffle.eat();

// The Result of pancake : ✅❌
// pancake.eat();
// pancake.eat;

/* ⬆️ ----------------------- 3 Third Example On Udacity 3 ----------------------- ⬆️ */

/* ⬆️ ----------------------- 1 First Example On Udacity GPT 1 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log("⬆️  ---------------------❌ First Example Finish ❌--------------------- ⬆️");
console.log(
`
`
);