/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/


let dateNow = new Date();


console.log(dateNow);


console.log(Date.now() / 1000 / 60 / 60 / 24  / 365);

let seconds = new Date() / 1000;
console.log(`seconds ${seconds}`); 

//1000 millsecond = 1 second


let minutes = seconds / 60; // Number of Minutes
console.log(`Minutes ${minutes}`); //


let hours = minutes / 60; // number of Hours
console.log(`Hours ${hours}`);


let days = hours / 24; // Number of Days
console.log(`Days ${days}`); 

let years = days / 365; // Number of Years
console.log(`Years${years}`);





