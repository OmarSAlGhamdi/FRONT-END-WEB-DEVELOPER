/*
  Async & Await With Try, Catch, Finally
*/

// Await With Try, Catch, Finally :
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am The Good Promise");
    // reject(Error("I am The Bad Promise"));
  }, 3000);
});

/* async function readData() {
  console.log("Before Promise");
  try {
    console.log(await myPromise);
  } catch (resone) {
    console.log(`Reason : ${resone}`);
  } finally {
    console.log("After Promise");
  }
}


readData();  */

// fetch :

async function fetchData() {
  console.log("Before fetch");
  try {
    let myData = await fetch(
      "https://api.github.com/users/OmarSAlGhamdi/repos"
    );
    console.log( await myData.json());
  } catch (resone) {
    console.log(`Reason : ${resone}`);
  } finally {
    console.log("After fetch");
  }
}

fetchData();
