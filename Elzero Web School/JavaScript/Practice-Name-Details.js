// Reuqirment :
/* 
1- Array names of all students
2- Array of all details that are require for them like:
weight - height - color
*/

let Names = ["Ahmed", "Ali", "Mishari", "Fahad"];
let details = ["Weight", "Height", "Color"];
let counter = 3;

document.write(`<h1> Students Of al-sharqiah</h1>`);

for (let i = 0; i < counter; i++) {
  document.write(`<div>`);
  document.write(`<h3> ${i + 1} - ${Names[i]}: </h3>`);
  for (let j = 0; j < details.length; j++) {
    document.write(`<p> ${details[j]}: </p>`);
    
  }
  document.write(`</div>`);
}


