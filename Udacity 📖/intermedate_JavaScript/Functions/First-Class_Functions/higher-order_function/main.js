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
// We can call the return function by storing him in a variable like this :
    // let innerFunction = alertThenReturn();
    //Last things we will call him like this :
    //  innerFunction();
    return function () {
      alert('Message 2!');
    };
  }

  console.log(alertThenReturn());