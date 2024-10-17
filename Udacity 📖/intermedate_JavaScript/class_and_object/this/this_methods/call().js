/*  ⬇️ ----------------------- First Example On Udacity ----------------------- ⬇️ : */

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
/* ⬆️ ----------------------- First Example On Udacity ----------------------- ⬆️ */



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
