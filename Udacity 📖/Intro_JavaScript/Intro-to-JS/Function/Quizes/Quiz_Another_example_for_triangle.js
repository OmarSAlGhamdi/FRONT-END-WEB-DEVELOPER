function buildTriangle (num) {
    var triangle = "";
    for(var i = 0; i <= num; i++){
        triangle+= makeLine(i);
    }
    return triangle;
}

function makeLine(length){
    var line = "";
    for(var j = 1; j <= length; j++){
        line += "* ";
    }

    return line + "\n";
}

console.log(buildTriangle(10));

