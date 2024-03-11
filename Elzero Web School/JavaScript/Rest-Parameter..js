/* 
Function Advanced Practice :
- Parameter
- Default 
- Rest 
- Loop
- Condition
*/

var fontSize = "30px";
function ShowInfo(
  user = "Unknown",
  age = "Unknown",
  rate = 0,
  show = "Yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h1>Welcome, ${user} 😘</h1>`);
  document.write(`<p style = 'font-size : ${fontSize}';>Age: ${age} </p>`);
  document.write(
    `<p style = 'font-size : ${fontSize}';> Hour Rate: $${rate}</p>`
  );
  /* As you can see he I convert the comparing value to lowercase 
  while it's already on lowercase to make the if condition check all 
  possiblities like "yes" , "YES" , "Yes" at the same time (WELL Done Omar honey🤴🏻 :) ). 
  */
  if (show.toLowerCase() === "yes") {
    if (skills.length > 0) {
      document.write(
        `<P style = 'font-size : ${fontSize}';> show skills 👀 :</p>`
      );
      //⬇︎We put the '' before and after the style of the paragraph (<p>) or headings(h1 - h6)⬇︎
      //⬇︎We use ; at the end of each style like font-size: 10px ; color: red ;⬇︎
      document.write(
        `<p style = 'font-size: 30px; color: #11ff33';> ${skills.join(
          " | "
        )} </p>`
      );
    } else {
      document.write(
        `<p style = 'font-size : ${fontSize}'>Skills : No Skills 🤷‍♂️</p>`
      );
    }
  } else if (show.toLowerCase() === "hidden") {
    document.write(
      `<P style = 'font-size : ${fontSize}';'> The person hidden the skills 🚫</p>`
    );
  } else if (show.toLowerCase() === "no") {
    document.write(
      `<P style = 'font-size : ${fontSize}';'> 🚫 Don't show Skills 🚫</p>`
    );
  }
  //   document.write(
  //     `<p style = 'font-size : ${fontSize}';> Skills : ${skills} </p>`
  //   );
  document.write(`</div>`);
}

ShowInfo("Omar", 30, 20, "yes", "HTML", "CSS", "JavaScript");
