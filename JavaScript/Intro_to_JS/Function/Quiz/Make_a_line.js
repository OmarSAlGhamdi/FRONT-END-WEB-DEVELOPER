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

function makeLine(number_of_asterisks) {

    var line = "";
    for (var x = 1; x <= number_of_asterisks; x++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(number_of_lines_of_asterisks) {
    var triangle = "";
    // var lineNumberLoop = "";

    for (var j = 1; j <= number_of_lines_of_asterisks; j++) {
        triangle += makeLine(j);
    }
    return triangle;
}

console.log(buildTriangle(10));