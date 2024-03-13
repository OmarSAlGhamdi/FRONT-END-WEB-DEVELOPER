/*
Function : 
-    Anonmous Function 
-   Calling Named Function vs Anonmous Function
-   Argument To other Function 
-   Task Without Name
-   SetTimeout
*/

document.write(`<h1 style = 'color : red; font-size: 30px;'> Hello Sir </h1>`)

let fontSize = "76px";
let color = "red";
// The function calc name : ⬇︎
function calc(num1, num2) {
  /*
  -  We have to put the parameters (num1, num2) inside ${} as seperate variable
  -  We should put single qotation mark '' or double qotation mark "" before and after the HTML Attributes like font-size and its value like this:
      'color : ${color}'
  */
  return `<p style = 'color : ${color}; font-size : ${fontSize}; font-weight: 800; text-align:center;' ;> ${
    num1 + num2
  }  </p>`;
}

document.write(calc(10, 20));
