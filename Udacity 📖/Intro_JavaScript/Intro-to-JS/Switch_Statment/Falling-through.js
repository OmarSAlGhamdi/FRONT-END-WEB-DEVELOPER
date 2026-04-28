var tier = "nsfw deck";
var output = "You'll recive ";

switch (tier) {
    case "deck of legend":
        output += "a custom card, ";
    case "collector's deck":
        output += "a signed version of the expoding kittens deck, ";
    case "nsfw deck":
        output += "one copy of NSFW(not safe for work) exploding kittens card game and "; 
        
    default: 
    output += "one copy of the exploding kittens card game. ";

}

console.log(output);