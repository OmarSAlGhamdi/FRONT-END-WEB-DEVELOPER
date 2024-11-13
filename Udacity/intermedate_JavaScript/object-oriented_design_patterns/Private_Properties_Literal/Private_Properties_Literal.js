let person = (function () {
  let name = "Veronica";

  return {
    getName: function () {
      return name;
    },

    setName: function (myName) {
      name = myName;
    },
  };
})();
