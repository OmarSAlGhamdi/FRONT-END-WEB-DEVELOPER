// Callback Functions
// -- call a function from another function :

function callFunction(returnName,  callback) {
    return (
      "The name is " + returnName() + " his age is "  + callback() + " years old."
    );
  }
  
  function returnName() {
    return "Omar";
  }
  
  function returnAge() {
    return 29;
  }
  
  console.log(callFunction(returnName, returnAge));
  