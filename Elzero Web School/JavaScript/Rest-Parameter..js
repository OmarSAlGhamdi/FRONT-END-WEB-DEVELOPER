/* 
Function Advanced Practice :
- Parameter
- Default 
- Rest 
- Loop
- Condition
*/

function ShowInfo(user = "Unknown", age = "Unknown", rate = 0, ...skills) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${user} 😘</h2>`);
  document.write(`<p>Age: ${age} </p>`);
  document.write(`<p>Hour Rate: ${rate}</p>`);
  document.write(`<p>Skills : ${skills} </p>`);
  document.write(`</div>`);
}

ShowInfo("Omar", 30, 100, "HTML" , "CSS");
