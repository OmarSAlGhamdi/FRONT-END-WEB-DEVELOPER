/*
  Modules
  - Import And Export

  // Expoert File
*/

/*
1 First Way to expert something: 
type (export) before everything you want to export like this:
expoert let a = 10;
*/
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

/* 2 Second way to export somthing: 
type export in one line like this :  */

export { a, arr, saySomething };
