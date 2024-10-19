/*  ⬇️ ----------------------- First Example On Udacity ----------------------- ⬇️ : */

const family = {
  position: "Bandar is the first position",
  describe: function () {
    console.log(`${this.position} in the family`);
  },
};

family.describe();

const family2 = {
  position: "Ali is the Second Position",
};

family.describe.apply(family2);

/* ⬆️ ----------------------- First Example On Udacity ----------------------- ⬆️ */



/* ⬇️ -----------------------  : تجربتي في تطبيق الدرس  ----------------------- ⬇️ */




/* ⬆️ -----------------------  : تجربتي في تطبيق الدرس  ----------------------- ⬆️ */

