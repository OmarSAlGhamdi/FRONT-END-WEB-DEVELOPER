/* Example 1 */

function sayMessage(firstName, lastName) {
  let message = "Hello";
  //   Nested Function
  function concatMsg() {
    return `${message} ${firstName} ${lastName}`;
  }
  return concatMsg();
}

document.write(sayMessage("Omar","AlGhamdi"));
