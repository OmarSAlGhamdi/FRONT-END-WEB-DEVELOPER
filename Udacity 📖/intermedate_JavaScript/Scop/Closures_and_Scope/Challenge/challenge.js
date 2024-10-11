/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/

function expandArray() {
  let myArray = [1, 1, 1];

  return function () {
    myArray.push(1);
    console.log(myArray); // ❌ we can't put it after the return because
                          //anything after them will not be excuted ❌
    return myArray;
  };
}

let expandArrayNew = expandArray();
expandArrayNew();