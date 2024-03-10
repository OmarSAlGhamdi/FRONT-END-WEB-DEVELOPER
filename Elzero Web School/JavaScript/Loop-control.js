/*

Loop control : 
- Break 
- Continue
- Label 

*/

let products = ["KeyBoard ", "Mouse", "Pen", "Pad", "Monitor" , "iphone"];

let colors = ["Red", "Green", "Black"]; 
let i = 0;
// This will loop over the array till the end of their items
 for (; i < products.length; i++) {
   // if (products[i] === "Monitor") {
   //   break;
   // }
   // if (typeof products[i] === "string") {
   //   continue;
   // }
   console.log(products[i]);
 }

//   This line will ignore the (number) values inside the products array[]
/* if (typeof products[i] === "number") {
    continue;
  }
  //   This line will ignore the (boolean) values inside the products array[]
  if (typeof products[i] === "boolean") {
    continue;
  }
  console.log(products[i]);
} */

// Label :

/* mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
} */

// Apply what you understand :

/* let students = ["Ahmed", "Khaled", "Ali", "Khalifa"];

let features = ["Age", "Color", "Size", "Tall"];

studentLoop: for (let i = 0; i < students.length; i++) {
  console.log(students[i]); */

  // if (studnets[i] === "Ali") {
  //   break;  // This will break the loop
  // }
  // nestedLoop: for (let j = 0; j < features.length; j++) {
    /*
    You have to put the conidition(if) before you print the array
     to apply your terms on the array
     */
  /*   if (features[j] === "Size") {  //This block line will skip the size item on features array[]
      continue ;
    }
    console.log(`- ${features[j]} : `);
  }
} */
