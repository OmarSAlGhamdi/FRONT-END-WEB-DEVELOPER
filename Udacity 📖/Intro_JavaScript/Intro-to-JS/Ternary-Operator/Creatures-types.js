var eatPlants = false;
var eatAnimals = false;



var category = (eatPlants && eatAnimals) ? "omnivores" : (!eatPlants && eatAnimals) ? "carnivores" : (eatPlants && !eatAnimals) ? "herbivores" : "undefined";


console.log("The type of the animal is : " + category);



// herbivores
// carnivores
// omnivores

