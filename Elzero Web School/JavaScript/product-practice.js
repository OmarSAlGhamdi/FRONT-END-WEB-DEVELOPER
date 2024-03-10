/* 
Product Practice
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3> ${[i + 1]}- ${products[i]} : </h3>`);
  for(let j = 0; j < colors.length; j++){
    document.write(`<p> ${j}- ${colors[j]} </p>`);
  }
  document.write(`<p> ${colors.join(" | ")}</p>`)
  document.write(`</div>`);
}

// debug the code under this line
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.wrtie(`<h3> ${products[i]}</h3>`); //[${i}]
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p> ${colors[j]} </p>`);
//     document.write(`</div>`);
//   }
// }
