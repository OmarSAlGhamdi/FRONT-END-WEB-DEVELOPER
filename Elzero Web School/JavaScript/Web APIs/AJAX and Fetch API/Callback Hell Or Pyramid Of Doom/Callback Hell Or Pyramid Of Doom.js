/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
  e.target.style.fontSize = "150px";
  e.target.innerHTML = "أنت بطلي وحبيبي وعيوني"; //🔥
}

let p = document.querySelector(".test");
// p.style.innerHTML = "New";
p.addEventListener("click", makeItRed);
