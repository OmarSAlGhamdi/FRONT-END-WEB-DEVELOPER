var moan = function mooan(num){
    var cry = "";

    for (let x = 0; x < num; x++) {
        cry += "boohoo" + "\n";
    }

    cry += "!";
    return cry;
}

console.log(moan(3));

