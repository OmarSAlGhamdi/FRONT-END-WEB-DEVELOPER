var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut){

    donut += " Hole";
    return donut;

    
});

console.log(improvedDonuts);


// If we want to see the new changes we call the new variable that inculde 
// the method of add new item like improvedDonuts