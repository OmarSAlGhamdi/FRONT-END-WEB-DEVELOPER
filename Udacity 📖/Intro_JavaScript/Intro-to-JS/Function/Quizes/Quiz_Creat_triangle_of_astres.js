function makeLine(lengthone) {
    var line = "";
    for (var j = 1; j <= lengthone; j++) {
        line += "* "
    }
    return line + "\n";
}


function buildTriangle(lengthtwo) {
    var triangle = "";
    var lineNumber = "";

    for (triangle = 1; triangle <= lengthtwo; triangle++) {
        lineNumber += makeLine(triangle);
    }

    return lineNumber;
}

console.log(buildTriangle(5));