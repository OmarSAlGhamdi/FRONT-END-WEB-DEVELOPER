const developer = {
  name: "andrew",
  sayHello: function () {
    console.log(`Hi there`);
  },
};

// Two Ways to Call the Methods :

developer.sayHello();    // .Dot notation calling
developer['sayHello'](); // [''] Square bracket calling