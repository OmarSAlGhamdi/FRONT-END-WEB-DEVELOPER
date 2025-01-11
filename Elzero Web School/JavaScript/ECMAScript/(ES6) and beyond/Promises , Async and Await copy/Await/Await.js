/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("I am The Good Promise");
    // reject(Error("I am The Bad Promise"));
    reject(Error("I am The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  console.log(await myPromise.catch((err) => err)); //.catch((err) => err)
  console.log("After Promise");
}

readData();
