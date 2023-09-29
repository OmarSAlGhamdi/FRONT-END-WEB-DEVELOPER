function movies(messageFunction,name){
    messageFunction(name);
}

movies(function displayFavoirte(movieName){


console.log("My favorite is " + movieName);
 }, "Finding Nemo");