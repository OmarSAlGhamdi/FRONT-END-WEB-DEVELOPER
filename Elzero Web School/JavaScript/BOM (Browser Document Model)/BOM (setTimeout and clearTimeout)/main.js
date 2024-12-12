/* 
BOM [Broswer Object Model]
-   setTimeout(Function, Timeout, Additional Params)
-   ClearTimeout(Identifier)
*/

// setTimeout(Function, Timeout, Additional Params)
/* function sayMsg(user , age) {
  console.log(`Iam Message for ${user} his age is: ${age}`);
}

setTimeout(sayMsg, 3000, `Omar` , 30); */

// ClearTimeout(Identifier)
function sayMsg() {
  console.log(`Iam Message`);
};

let counter = setTimeout(sayMsg, 3000);

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};
