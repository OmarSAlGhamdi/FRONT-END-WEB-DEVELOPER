var prize = "";
var winner = 3;

switch (winner) {
    case 1:
        prize += "a trip for two to the bahamas and ";
    case 2:
        prize += " a four piece furniture set."
        break;
    case 3:
        prize += " a smartwatch and ";
    default:
        prize += "tickets to the circus.";

}

console.log("You've won " + prize);