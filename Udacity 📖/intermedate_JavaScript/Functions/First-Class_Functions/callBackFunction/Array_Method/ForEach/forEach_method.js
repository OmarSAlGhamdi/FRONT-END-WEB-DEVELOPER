/*  ⬇︎ Syntax of the array with forEach loop(){} ⬇︎
array.forEach(function callback(currentValue, index, array) {
    // function code here
}); 
*/

/* -------------------------------------------------- */

// First Example of the forEach method : 
/* [1, 5, , 2, 4, 6, 3].forEach(function logIfOdd(n) {
  if (n % 2 != 0) {
    console.log(n);
  }
}); */


/* -------------------------------------------------- */

// forEach()  تجربتي لدرس 

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


/* -------------------------------------------------- */

// Example of Array Method from Udacity :
// Udacity مثال على استخدام أسلوب المصفوفة من 
const favortiFlavor = ["cookie dough", "salted caramel", "toffee"];
// (flavor) ستكون مخزن للقيم الجديدة في المصفوفة
favortiFlavor.forEach(function (flavor) {
  console.log("I enjoy " + flavor + "ice cream");
});

/* -------------------------------------------------- */

//  : تجربتي في تطبيق الدرس 
// في أخذ البيانات من مصفوفة وطباعتها مع تغيير القيم في كل مرة

const favoriteJuice = ["Apple", "Mango", "Orange"];

favoriteJuice.forEach(function (juice){
  console.log("I love " + juice + " Juice");
  
});



/* -------------------------------------------------- */

// First way of Array method ✔:
// ✔ أول اسلوب لاستخدام الطريقة المصفوفة
/* [1, 2, 3, 4].forEach(function(num) {
    console.log(num);
  }); */


  /* -------------------------------------------------- */

// Second way of Array method ❌ becase(There is no argument in the method):
// ثاني اسلوب لإستخدام الطريقة  في المصفوفة ❌ (لانه لايوجد قيمة موجوده في المُعامل المُمرر في الطريقة)
/*   [1, 2, 3, 4].forEach(function() {
    console.log(num);
  }); */



  /* -------------------------------------------------- */

// Third way of Array method ✔ :
// ✔ ثالث اسلوب لاستخدام الطريقة  في المصفوفة
/*  function logNum (num) {
    console.log(num);
  }
  
  [1, 2, 3, 4].forEach(logNum); */



  /* -------------------------------------------------- */

// Fourth way of Array method ❌ because (no callback function is passed in):
//(لايوجد إستدعاء لاحق) ❌ رابع أسلوب لإستخدام الطريقة  في المصفوفة
/*   [1, 2, 3, 4].forEach(console.log); */
