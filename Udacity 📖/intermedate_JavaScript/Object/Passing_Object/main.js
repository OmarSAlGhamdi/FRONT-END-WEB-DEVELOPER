// ⬇︎ Example From (Udacity) ⬇︎ :

// ⬆︎ Example From (Udacity) ⬆︎ :

// -------------------------------------------- //

// -------------------------------------------- //

// ⬇︎ Second Experiment 🧪 ⬇︎ :
let oldName = {
  name: "Ahmed",
};

function changeToNewName(toNewName) {
  toNewName.name = "Bndr";
}

changeToNewName(oldName);

console.log(oldName.name);

// ⬆︎ Second Experiment 🧪 ⬆︎ :

// -------------------------------------------- //

// ⬇︎ Third Experiment 🧪 ⬇︎ :
// Make a copy of an object and change their values :

const iceCreamOriginal = {
  Andrew: 3,
  Richarad: 15,
};

let iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richarad = 99;

/* This ⬇︎ will not ❌ work because : You have to put them inside console.log(); */
// iceCreamCopy.Richarad;

console.log(iceCreamOriginal.Richarad);
console.log(iceCreamCopy.Richarad);

// ⬆︎ Third Experiment 🧪 ⬆︎ :

console.log(
  `
` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
  `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

let originalObject = {
  favoritColor: "red",
};

function setToBlue(object) {
  object.favoritColor = "blue";
}
// call the function and pass the variable inside her ⬇︎
setToBlue(originalObject);

console.log(originalObject.favoritColor);

/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `


    `
);

console.log(
  "⬇️  --------------✅ 🛠️💡🧪 1 First Experiment Example Start 🧪💡🛠️ ✅-------------- ⬇️" +
    `
  `
);
/* ⬇️ ---------- 🛠️💡🧪 1 First Experiment Example 🧪💡🛠️ ---------- ⬇️ */

// ⬇︎ My Experiment with passing_object ⬇︎ :

// In variable We can put comma , after the property value
// but in function we can't do that

// ⬇︎ First Experiment 🧪 ⬇︎ :

let orginalcar = {
  color: "red",
};

function setColorToWhite(newColor) {
  newColor.color = "white";
}

setColorToWhite(orginalcar);

console.log(orginalcar.color);

// ⬆︎  First Experiment 🧪 ⬆︎

/* ⬆️ ---------- 🛠️💡🧪 1 First Experiment Example 🧪💡🛠️ ---------- ⬆️ */
console.log(
  `
` +
    "⬆️  --------------❌ 🛠️💡🧪 1 First Experiment Example Finish 🧪💡🛠️ ❌-------------- ⬆️" +
    `


    `
);
