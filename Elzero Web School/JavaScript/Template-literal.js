



console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = 0;


console.log(`The Price is ${price || 200}`);
console.log(`The Price is ${price ?? 200}`);