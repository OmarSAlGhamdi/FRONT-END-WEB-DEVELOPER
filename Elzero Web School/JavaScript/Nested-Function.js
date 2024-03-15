/* Example 1 */

/* function sayMessage(firstName, lastName) {
  let message = "Hello";
  //   Nested Function
  function concatMsg() {
    return `${message} ${firstName} ${lastName}`;
  }
  concatMsg();
  return message;
}

document.write(sayMessage("Omar", "AlGhamdi")); */

/* Example 2 */

/* function sayMessage(firstName, lastName) {
  let message = "Hello";
  //   Nested Function
  function concatMsg() {
    return `${message} ${firstName} ${lastName}`;
  }
  return concatMsg();
}

document.write(sayMessage("Omar", "AlGhamdi")); */

            /* Example 3 */

function sayMessage(firstName, lastName) {
  let message = "Hello";
  //   Nested Function
  function concatMsg() {

    function getFullName() {

      return `${firstName} ${lastName}`;
    }
    //!when you call a function don't forgot to call them 
    // with their parentheses ()
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

document.write(sayMessage("Omar", "AlGhamdi"));
