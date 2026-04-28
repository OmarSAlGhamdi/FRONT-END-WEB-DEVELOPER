/* 
BOM [Broswer Object Model]
-   alert(message) => Need No Respond Only Ok Available
-   confirm(Message) => Need Response And Return A Boolean
-   prompt(Message, Default Message) => Collect Data
*/

// ⬇︎ alert(message)⬇︎

alert("تنبيه من جافا سكربت");

// ⬆︎ alert(message)⬆︎

// ⬇︎ confirm(Message)⬇︎

// ⬆︎ confirm(Message)⬆︎

// ⬇︎ prompt(Message, Default Message)⬇︎

// let userInput;

// do {
//     userInput = prompt("Please Enter something");

// } while (!userInput || userInput.trim() === "");

// console.log("You enter :", userInput);

// -------------------------------------------

// let userInput = prompt("Please enter something:", "Your placeholder text here");

// if (userInput === "Your placeholder text here" || !userInput.trim()) {
//     alert("You didn't provide a valid input.");
// } else {
//     console.log("You entered:", userInput);
// }

/* let userInput;

do {
  userInput = prompt("Please enter something:", "Your placeholder text here");
// Ternary Operator : 
// var = condition (check) ? code excude if it's ture : code excude if it's false           
  const trimmedInput = userInput ? userInput.trim() : "";

  if (
    !userInput || // The condition check if the user close the window or it's null
    trimmedInput === "" || // The condition check if the (ternary operator) not empty ""
    trimmedInput === "Your placeholder text here" ||// This condition check if the (ternary operator) not the same as the placeholder
    trimmedInput.length < 5 // This check if the user typing is less than 5 letters
  ) {
    alert(
      "input must be at least 5 letters long and cannot be empty or the placeholder text."
    );
  }
} while (
  !userInput ||
  userInput.trim() === "" ||
  userInput.trim() === "Your placeholder text here" ||
  userInput.length < 5
);

console.log(`You enter ${userInput}`); */

// do {
//   userInput = prompt(
//     "Please enter something : ",
//     "Your placeholder text is here"
//   );
// } while (
//   !userInput ||
//   userInput.trim() === "" ||
//   userInput === "Your placeholder text is here" ||
//   userInput.trim() === "Your placeholder text is here"
// );
// alert("You didn't provide a valid input.");
// console.log(`You enter :${userInput}`);

/* ⬇︎ Best scenario on Prompt for each situation ⬇︎
-->   We will check if the attempt of the entering data is
      no more than 3 times && with the valid information
 */

let userInput;
let trimmedInput;
let attempts = 0;
let maxAttempts = 3;
let isValidInput = false;

do {
  userInput = prompt("من فضلك اكتب ما تريد:", "النص هنا ");
  attempts++;

// This will check if the (userInput) has value or not before we trimm it
// to prevent The code to broke
  trimmedInput = userInput ? userInput.trim() : "";

  if (!userInput) {
    alert(`لقد نسيت كتابة أي شي `);
  } else if (trimmedInput === "") {
    alert(`لا يمكنك وضع مسافات`);
  } else if (trimmedInput === `النص هنا`) {
    alert(`لا تستطيع كتابة النص المدخل سابقا`);
  } else if (trimmedInput.length < 5) {
    alert(`يجب ان تكون الاحرف لا تقل عن 5  أحرف`);
  } else {
    isValidInput = true;
  }

  if (
      isValidInput
    /* trimmedInput &&
    trimmedInput !== "Your place holder text" &&
    trimmedInput.length >= 5 */
  ) {
    break;
  }
} while (
    attempts < maxAttempts
  /* !userInput ||
    trimmedInput === ""||
    trimmedInput === "Your placeholder text here" ||
    trimmedInput.length < 5
 */
);

if (isValidInput) {
  console.log(`You enter: ${trimmedInput}`);
} else {
  alert(`تجاوزت عدد المحاولات المسموحة. حاول مرة أخرى.`);
  console.log(`Maximum attempts reached. Please try again later.`);
}

// ⬆︎ Best scenario on Prompt ⬆︎

// ⬆︎ prompt(Message, Default Message)⬆︎
