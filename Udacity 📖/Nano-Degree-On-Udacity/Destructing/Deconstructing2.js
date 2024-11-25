let numbers = [1, 25, 10, 20 , 30];
// The index should be written their before calling them on console.log() or 
// You'll face a bug because you'll call unidentfied/unknown items !!
let [ a = 10, b =20 , c = 30] = numbers; //⬅︎ we mention the variable name at the end 
                                         // if we use this way


// You can call any items you want only if it's mentioned before ⬆︎
console.log(a , b, c);