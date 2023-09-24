/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// This is my solution on Udacity


// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

    if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison"; solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy"; solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick"; solved = true;
} else if (room === "dining room" && suspect === "Ms. Van Cleve") {
    weapon = "knife"; solved = true;
} else { 
    weapon = "knife"; solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}