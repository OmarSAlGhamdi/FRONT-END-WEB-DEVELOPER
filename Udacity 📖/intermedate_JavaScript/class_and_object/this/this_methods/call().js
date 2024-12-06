console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */
/* ⬇️ ---------- 1 First Way to use call() method 1 ----------  ⬇️*/
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
/* ⬆️ ----------  1️⃣ First Way to use call() method 1️⃣  ---------- ⬆️ */

/* ⬇️ ----------  2️⃣ Second Way to use call() method 2️⃣  ---------- ⬇️ */
const andrew = {
  name: "Andrew",
};

function introduce(language) {
  console.log(
    `I'm ${this.name} and my favorite programming language is ${language}.`
  );
}

introduce.call(andrew, "JavaScript");
/* ---------- 2️⃣ Second Way to use call() method 2️⃣ ---------- */
/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `


    `
);

console.log(
  "⬇️  --------------✅ 🛠️💡 My Experiment Example Start 💡🛠️ ✅-------------- ⬇️" +
    `
  `
);
/* ⬇️ ---------- 🛠️💡 My Experiment Example 💡🛠️ ---------- ⬇️ */
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
/* ⬆️ ---------- 🛠️💡 My Experiment Example 💡🛠️ ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  --------------❌ 🛠️💡 My Experiment Example Finish 💡🛠️ ❌-------------- ⬆️" +
    `


    `
);
