

/*
Loop For Advanced Example
*/

let products = ["keyBoard", "Mouse" , "Pen", "Pad" , "Monitor" , "iphone"];

let i = 0;

for (; ;){
    console.log(products[i]);
    i+= 2; // you can skip some products like this example by adding 2 to the increament
          // it will skip the second, fourth and fifth product. 

// another way of compare the i to the length of the products array using if condtion

if (i === products.length) {
    break;
}
}