var room = "dinning room";
var suspect = "Mr. parkes";
var weapon = "";
var solved = false;


/* var room = "gallery room";
var suspect = "Ms. Van Cleve";

var room = "billard room";
var suspect = "Mrs. Sparr";

var room = "ballroom";
var suspect = "Mr. Kalehoff";

*/

if (room === "dinning room") {
    weapon = "knife";

    if (suspect === "Mr. parkes") {
        solved = true;
    }
}

else if (room === "gallery room") {
    weapon = "trophy";

    if (suspect === "Ms. Van Cleve") {
        solved = true;
    }
}

else if (room === "billard room") {
    weapon = "pool stick";

    if (suspect ==="Mrs. Sparr") {
        solved = true;
    }
}

else if (room === "ballroom") {
    weapon = "poison";

    if (suspect === "Mr. Kalehoff") {
        solved=true;
    }
} 

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

