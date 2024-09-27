const parrot = {
  group: "bird",
  feathers: true,
  chirp: function () {
    console.log("Chirp Chirp");
  },
};

const pigen = {
  group: "bird",
  feathers: true,
  chirp: function () {
    console.log("Chirp Chirp");
  },
};

let parrotCopy = parrot;

console.log(parrot === parrotCopy);

