const developer = {
  name: "andrew",
  sayHello: function () {
    console.log("Hi there!");
  },
  favoritLanguange: function (language) {
    console.log(`My favorit programming language is ${language}`);
  },
};


developer.favoritLanguange('JavaScript');    // .Dot notation calling
developer['favoritLanguange']('JavaScript'); // [''] Square bracket calling
