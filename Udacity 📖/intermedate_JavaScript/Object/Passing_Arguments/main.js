function changeToEight(n) {
  n = 8; // whenever n was, it is now 8 ... but only in this function Scope!
}

let n = 7; //We pass the global variable n and assign it to 7

changeToEight(n);

console.log(n); // The result will be 7

