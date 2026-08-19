// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

// let day = "";

let checkHours = () => {
  let day = "";
  let hours = new Date().getHours();
  if (hours >= 12 && hours < 18) {
    day = "Good Afternoon";
  } else {
    day = "Good Morning";
  }
  return day;
};

console.log(checkHours() + " from the first solution");

// Second Solution from Me:

let checkhours2 = () => {
  //   let day = "";
  let hours = new Date().getHours();
  if (hours >= 12 && hours < 18) {
    return "Good Afternoon";
  } else {
    return "Good Morning";
  }
};

console.log(checkhours2() + " from the second solution");

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and
//       returns an array of items counting down from that number to
//       zero.
// -----------------------------------------------------------------

let countdown = (num) => {
    let arr = [];
    for (let i = num; i >= 0; i--) {
        arr.push(i);
    }
    return arr;
};

console.log(countdown(5));