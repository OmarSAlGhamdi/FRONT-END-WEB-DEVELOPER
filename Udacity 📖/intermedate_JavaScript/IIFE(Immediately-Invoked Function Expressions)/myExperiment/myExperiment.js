/* 
Type an Encapsulation :
1- IIFE
2-
*/

const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count+= 2;
      console.log(count);
    },
    decremnt: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      return count;
    },
  };
})();

counter.increment();
counter.increment();
counter.decremnt();
console.log(counter.getCount());

