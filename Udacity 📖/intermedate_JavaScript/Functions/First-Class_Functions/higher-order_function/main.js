// function alertThenReturn() {
//   alert("Message 1!");

//   return function () {
//     alert("Message 2!");
//   };
// }

// alertThenReturn();

function alertThenReturn() {
    alert('Message 1!');
//   اذا اردنا استدعاء الوظيفة الثانية(وظيفة الاسترجاع) نخزنها في متغير ونستدعيها
// We can call the return function by storing it in a variable like this :
    // let/var/const VariableName = functionName(); 
    // let innerFunction = alertThenReturn();
    //Last things we will call him like this :
    //  innerFunction();
    return function () {
      alert('Message 2!');
    };
  }

  console.log(alertThenReturn());