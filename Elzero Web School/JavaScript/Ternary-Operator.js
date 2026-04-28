let theName = "Mona";
let theGendedr = "female";
let theAge = 60;

if (theGendedr === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// let result = theGendedr === "Male" ? "Mr" : "Mrs";

// document.write(result);

// Template literal

// condition  ? if true : if false

// console.log(`Hello ${theGendedr === "male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? document.write(20)
  : theAge > 20 && theAge < 60
  ? document.write("20 to 60")
  : theAge > 60
  ? document.write("Larger than 60")
  : document.write("Unknown");
