let orgninalObject = {
  favoritColor: "red",
};

function setToBlue(object) {
  object.favoritColor = "blue";
}

setToBlue(orgninalObject);

console.log(orgninalObject.favoritColor);

// my Experiment with passing object :

// in variable we can put , after the value of property
//but in function we can't do that
let orginalcar = {
  color: "red",
};

function setColorToWhite(newColor) {
  newColor.color = "white";
}

setColorToWhite(orginalcar);

console.log(orginalcar.color);

//Another example 
let oldName = {
  name: "Ahmed",
};

function changeToNewName(toNewName) {
  toNewName.name = "Bndr";
}

changeToNewName(oldName);

console.log(oldName.name);
