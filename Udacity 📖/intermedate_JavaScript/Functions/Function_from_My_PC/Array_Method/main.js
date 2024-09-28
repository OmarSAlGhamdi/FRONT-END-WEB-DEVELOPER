/* 
array.forEach(function callback(currentValue, index, array) {
    // function code here
}); 
*/

/* [1, 5, , 2, 4, 6, 3].forEach(function logIfOdd(n) {
  if (n % 2 != 0) {
    console.log(n);
  }
}); */

//My experiment :

/*[100, 523, 945, 284]  forEach(*/

/* function logIt(m) {
  if (m % 2 != 0) {
    console.log("The number is odd : " + m);
  } else if (m % 2 === 0) {
    console.log("The number is  even : " + m);
  }
}

// )

logIt(9); */

// New debugged code :

/* function logit(m){
    if (m % 2 != 0) {
        console.log()
    }
} */

// Example of Array Method from Udacity :

const favortiFlavor = ["cookie dough", "salted caramel", "toffee"];
// (flavor) ستكون مخزن للقيم الجديدة في المصفوفة
favortiFlavor.forEach(function (flavor) {
  console.log("I enjoy " + flavor + "ice cream");
});

//  : تجربتي في تطبيق الدرس 
// في أخذ البيانات من مصفوفة وطباعتها مع تغيير القيم في كل مرة

const favoriteJuice = ["Apple", "Mango", "Orange"];

favoriteJuice.forEach(function (juice){
  console.log("I love " + juice + " Juice");
  
});

// First way of Array method ✔:
/* [1, 2, 3, 4].forEach(function(num) {
    console.log(num);
  }); */

// Second way of Array method ❌ becase(There is no argument in the method):
/*   [1, 2, 3, 4].forEach(function() {
    console.log(num);
  }); */

// Third way of Array method ✔ :
/*  function logNum (num) {
    console.log(num);
  }
  
  [1, 2, 3, 4].forEach(logNum); */

// Fourth way of Array method ❌ because (no callback function is passed in):

/*   [1, 2, 3, 4].forEach(console.log); */
