/* 
DOM [CSS] :
- style 
- cssText
- removeProperty(PropertyName) [inline, styleSheet]
- setProperty(PropertyName, Value, Priority)
*/

let element = document.getElementById("my-div");

element.style.color = "blue";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: black; opacity: 0.9"; //Edit many styles at the same line

// RemoveProperty() :
// VariableName(here is ➡️➡️ element).style.removeProperty("firstOne" , "SecondOne");

// SetProperty() :
// VariableName(here is -> element).style.setProperty("The Value Name", "its Value", important(option));

element.style.removeProperty("'color' , 'font-weight'");
element.style.setProperty("font-size", "50px", "important");

// If we want to edit the style.css file we can do this :⬇Down⬇
// Doucment.styleSheet[0].rule[0].style.removeProperty("The name of the property");
document.styleSheets[0].cssRules[0].style.removeProperty("line-height");

// Doucment.styleSheet[0].rule[0].style.setProperty("The name of the property" , "its value");
document.styleSheets[0].cssRules[0].style.setProperty("background-color", "blue" ,"important");
