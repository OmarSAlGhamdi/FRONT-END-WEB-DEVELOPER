/*
  Promise
  - All
  - All Settled
  - Race
*/


// : الشرح 

/* 
1- Promise.all() : Will stop🛑 to show anything on the console if there is Rejected Promise ❌ or 
pirnt everything if All Promises are Resolved✅.
2- Promise.allSettled() : Will put all results in an [array] even if there is Rejected Promise ❌.
3- Promise.race() : Will bring the First result🥇 that come to him weather if it's 
Resolved✅ or Rejected❌.
 */
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am The First Promise");
  }, 1000);
});

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am The Second Promise");
  }, 3000);
});

const myThirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am The Third Promise");
  }, 2000);
});


// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected : ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected : ${rejectedValue}`)
// );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected : ${rejectedValue}`)
);
