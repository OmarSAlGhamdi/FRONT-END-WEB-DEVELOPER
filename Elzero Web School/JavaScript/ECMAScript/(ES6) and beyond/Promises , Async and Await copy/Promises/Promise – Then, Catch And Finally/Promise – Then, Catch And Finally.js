/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise = new Promise((resolvedFunction, rejectedFunction) => {
  let employees = [
    /* "Osama", "Ahmed", "Sayed", "Mahmoud" */
  ];
  if (employees.length === 4) {
    resolvedFunction(employees);
  } else {
    rejectedFunction(Error("Number of Empolyees is not 4"));
  }
});

myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The choosen Employee is ${resolveValue}`);
  })
  .catch(
    (RejectedReson) => console.log(RejectedReson)
    //   🧪 {console.log(`(You have to fix the error) ${RejectedReson}`);} 🧪
  )
  .finally(console.log(`The Operation Is Done`));
