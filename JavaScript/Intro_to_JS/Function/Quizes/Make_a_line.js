// function makeline(lengthLines) {
//     var line = "";

//     for (var x = 1; x <= lengthLines; x++) {
//         line += "* ";
//     }

//     return line  + "\n";
// }

// function buildTriangle(lineNumbers){
//     var triangle = "";
//     var lineNumberLoop = "";

//     for(lineNumberLoop = 1; lineNumberLoop <= lineNumbers; lineNumberLoop++){
//         triangle += makeline(lineNumberLoop);
//     }

//     return triangle;
// }

// console.log(buildTriangle(10));






// function makeline(lineLength){
//     var line = "";
//     for(var x = 1; x <= lineLength; x++){
//         line += "* ";
//     }

//     return line + "\n";
// }

// function buildTriangle(lineNumbers) {
//     var triangle = "";
//     var lineNumberLoop = "";

//     for(lineNumberLoop = 1; lineNumberLoop <= lineNumbers; lineNumberLoop++){
//         triangle += makeline(lineNumberLoop);
//     }

//     return triangle;
// }

// console.log(buildTriangle(3));


// var lineLength = "";

// function makeLine(lineLength) {

//     var line = "";
//     for (var x = 1; x <= lineLength; x++) {
//         line += "* ";
//     }

//     return line + "\n";
// }

// function buildTriangle(lineHeight) {
//     var triangle = "";
//     var lineNumberLoop = "";

//     for (lineNumberLoop = 1; lineNumberLoop <= lineHeight; lineNumberLoop++) {
//         triangle += makeLine(lineNumberLoop);
//     }
//     return triangle;
// }

// console.log(buildTriangle(10));


// function makeline(asterisks_in_line) {

//     var line = "";
//     for (var x = 1; x <= asterisks_in_line; x++) {
//         line += "* ";
//     }

//     return line + "\n";

// }

// function buildTriangle(lines_of_asterisks){
//     var triangle = "";
//     for(var j = 1; j <= lines_of_asterisks; j++){
//         triangle += makeline(j);
//     }

//     return triangle;
// }

// console.log(buildTriangle(5));


/*

function creatLine(hash_in_each_line) {
    var line = "";
    for (var x = 1; x <= hash_in_each_line; x++) {
        line += "# ";
    }
    return line + "\n";
}

function buildTriangle(number_of_lines_of_hash){
    var triangle = "";
    for(var j = 1; j <= number_of_lines_of_hash; j++){
        triangle += creatLine(j);
    }

    return triangle;
}

console.log(buildTriangle(5));

*/




/*


This is my entire coding block :)

*/ 

// Create triangle with Stars 

function makeLine(stars_in_line){

    var line = "";

    for(var x = 0; x <= stars_in_line; x++){
        line += "* ";
    }

    return line + "\n";
}

function createTriangle(lines_of_stars){
    var traingle = "";

    for(var j = 0; j <= lines_of_stars; j++){

        traingle += makeLine(j);
    }

    return traingle;
}

console.log(createTriangle(5));