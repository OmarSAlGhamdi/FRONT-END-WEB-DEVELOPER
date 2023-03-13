var car = true;
var GasCars = false;
var ElectricCars = true;

if (car) {
    if (GasCars) {
        console.log("Mercedes");
    }
    
     if (ElectricCars) {
        console.log("Tesla");
    }
     if (!GasCars && !ElectricCars) {
        console.log("Not a car");

    } 
     if(!GasCars){
        console.log("Not a gas car");
    } 
     if (!ElectricCars) {
        console.log("Not an Electric car");
    }
    }
