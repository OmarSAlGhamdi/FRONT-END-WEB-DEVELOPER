const counter = (
    function() {
      let count = 0; // Private variable
  
      return {
        increment: function() {
          count++;
          console.log(count);
        },
        decrement: function() {
          count--;
          console.log(count);
        },
        getCount: function() {
          return count;
        }
      };
    }
  )(); // () <= This will call the function immediately 🚀
  
  counter.increment(); // Output: 1
  counter.increment(); // Output: 2
  counter.decrement(); // Output: 1
  console.log(counter.getCount()); // Output: 1