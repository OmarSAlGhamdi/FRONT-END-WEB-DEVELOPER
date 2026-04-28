var bills = [10, 20 , 30 , 40];

// #First Method
// var total = bills.map(function(element){

//     element *= 1.15;
//     return Number(element.toFixed(2));
// });


// #Second Method

var total = bills.map(function(element){

    element *= 1.15;
    // we Can type this way but we can't perform any further mathmatical operation
    element.toFixed; 
    // This is the best way if you want to perfom another mathmatical operation
    element = element.toFixed(2);
    return Number(element);
});


console.log(total);