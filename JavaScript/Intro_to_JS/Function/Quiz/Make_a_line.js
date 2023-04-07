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

function makeLine(lineLength) {

    var line = "";
    for (var x = 1; x <= lineLength; x++) {
        line += "* ";
    }

    return line + "\n";
}

function buildTriangle(lineHeight) {
    var triangle = "";
    var lineNumberLoop = "";

    for (lineNumberLoop = 1; lineNumberLoop <= lineHeight; lineNumberLoop++) {
        triangle += makeLine(lineNumberLoop);
    }
    return triangle;
}

console.log(buildTriangle(10));