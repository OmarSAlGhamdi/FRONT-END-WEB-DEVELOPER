
console.log(
  "⬇️  ---------------------✅ 1 First Example Start 1 ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
/* ⬇️ ----------------------- 1 First Example On Udacity 1 ----------------------- ⬇️ */

/* 1 First Way to use call() 1 */
const mockingBird = {
  title: "To kill a mockingBird",
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  },
};

mockingBird.describe();

const pride = {
  title: "Pride and Prejuidce",
};

mockingBird.describe.call(pride);
/* ---------- 1 First Way to use call() 1 ---------- */

/* ---------- 2 Second Way to use call() 2 ---------- */
const andrew = {
  name: "Andrew",
};

function introduce(language) {
  console.log(
    `I'm ${this.name} and my favorite programming language is ${language}.`
  );
}

introduce.call(andrew, "JavaScript");
/* ---------- 2 Second Way to use call() 2 ---------- */

/* ⬆️ ----------------------- 1 First Example On Udacity 1 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ 1 First Example Finish 1 ❌--------------------- ⬆️"
);
console.log(
  `

`
);




console.log(
  "⬇️  ---------------------✅ 🛠️💡 My Experiment Example Start 💡🛠️ ✅--------------------- ⬇️"
);
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
/* ⬇️ ----------------------- 🛠️💡 My Experiment Example 💡🛠️ ----------------------- ⬇️ */
// ⬇️ -----------------------  : تجربتي في تطبيق الدرس  ----------------------- ⬇️

const family = {
  position: "Bandar is the first Position",
  described: function () {
    console.log(`${this.position} in the family`);
  },
};

family.described();

const family2 = {
  position: "Mohammad is the second Position",
};

family.described.call(family2); // لازم نكتب اسم الاوبجكت الجديد

// ⬆️ -----------------------   تجربتي في تطبيق الدرس   ----------------------- ⬆️

/* ⬆️ ----------------------- 🛠️💡 My Experiment Example 💡🛠️ ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log(
  "⬆️  ---------------------❌ 🛠️💡 My Experiment Example Finish 💡🛠️ ❌--------------------- ⬆️"
);
console.log(
  `
  
    `
);

