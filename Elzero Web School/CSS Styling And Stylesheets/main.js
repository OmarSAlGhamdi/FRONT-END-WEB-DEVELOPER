/* 
DOM [CSS] :
- style 
- cssText
- removeProperty(PropertyName) [inline, styleSheet]
- setProperty(PropertyName, Value, Priority)
*/

let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: blue; opacity: 0.9"; //Edit many styles at the same line
