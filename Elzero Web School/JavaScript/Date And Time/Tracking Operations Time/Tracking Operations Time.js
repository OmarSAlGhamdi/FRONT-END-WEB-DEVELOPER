/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start time :
let start = new Date();


// Operation :

for (let i = 0; i < 100000; i++) {
    //   document.write(`<div>${i}<\div>`);
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(i));
    document.body.appendChild(div)
}


// End time :
let end = new Date();


// Operation Duration :
let duration = end - start;

console.log(duration);
