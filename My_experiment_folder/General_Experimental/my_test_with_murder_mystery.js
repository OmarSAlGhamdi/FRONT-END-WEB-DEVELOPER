var room = "billard room";
var suspect = "Mrs.Sparr";

var weapon = "";
var solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison"; solved = true;
} else if (room === "gallery" && suspect === "Ms.Van Cleve") {
    weapon = "trophy;"; solved = true;
} else if (room === "billard room" && suspect === "Mrs.Sparr") {
    weapon = "pool stick"; solved = true;
} else  if (room === "dinning room" && suspect === "Mr. Parkes"){
    weapon = "knife"; solved = true;
}

console.log(suspect + " did it in the " + room + " with the " + weapon + "!");