/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// 1 First way : (Other Syntax)
/* function getData() {
  return new Promise((res, rej) => {
    let users = ["Osama"];
    if (users.length > 0) {
      res("Users Found");
    } else {
      rej("Users Not Found");
    }
  });
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log(rejectedValue)
); */

// 2 Second Way : (Other Syntax)
/* function getData() {
  let users = ["Osama"];
  if (users.length > 0) {
    return Promise.resolve("Users Found");
  } else {
    return Promise.reject("Users Not Found");
  }
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log(rejectedValue)
); */

// 3 Third Way to make promise in a short way : (Recomended✅)
async function getData() {
  let users = ["Osama"];
  if (users.length > 0) {
    return "Users Fuound";
  } else {
    throw new Error("No Users Found"); //We have to type () with Error constructor
  }
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);
//   .then();
