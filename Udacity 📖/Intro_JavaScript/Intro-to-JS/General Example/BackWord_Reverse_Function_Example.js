//reverseString -The name of the function
// reverseMe - the parameter 
function reverseString(reverseMe) {
    var reversed = "";
    for(var i =reverseMe.length - 1; i >= 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;
}

console.log(reverseString("Julia"));