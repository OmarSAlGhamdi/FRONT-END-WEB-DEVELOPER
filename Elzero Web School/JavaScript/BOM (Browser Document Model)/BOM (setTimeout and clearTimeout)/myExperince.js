/* 
This is my Experince about :
-   setTimeout(Function, Timeout, Additional Params)
-   ClearTimeout(Identifier)
*/

// ⬇︎ Make the Stop button work but not Go button ⬇︎⬆︎
// setTimeout(Function, Timeout, Additional Params)
/* function sayMyName(name, age) {
  const outputDiv = document.querySelector("#output");
  const message = `Hello ${name} welcome back. Your age is: ${age}`;
  console.log(message);
  //   document.write();

  outputDiv.textContent = message;
}

let handler = setTimeout(sayMyName, 2000, "Omar", 30);

// ClearTimeout(Identifier)

let btn = document.querySelector("#stop");

btn.onclick = function () {
  clearTimeout(handler);
}; */

// ⬆︎ Make the Stop button work but not Go button ⬆︎

// make the buttons works if I click on (Stop / Go)

let timeoutId; // Variable to store the timeId  ID

function sayMyName(name, age) {
  const outputDiv = document.querySelector("#output");
  const message = `Hello ${name} , welcome back. Your age is: ${age}`;
  console.log(message);
  outputDiv.textContent = message;
}

function startTimeout() {
  clearTimeout(timeoutId);
  //   timeoutId = setTimeout(() => sayMyName("Omar", 30), 5000);
  timeoutId = setTimeout(function () {
    sayMyName("Omar", 30);
  }, 5000);
  document.querySelector("#output").textContent = "Timeout Started";
  console.log("You Press Start Button");

  //   document.querySelector("message").textContent = "Go button clicked";
}

function stopTimeout() {
  clearTimeout(timeoutId);
  document.querySelector("#output").textContent = "Timeout cleared";
  console.log("You Press Stop Button");

  //   document.querySelector("message").textContent = "Stop button clicked";
}

// Initial call to start the timeout
startTimeout();

// Event listeners for the buttons
document.querySelector("#stop").addEventListener("click", stopTimeout);
document.querySelector("#go").addEventListener("click", startTimeout);
