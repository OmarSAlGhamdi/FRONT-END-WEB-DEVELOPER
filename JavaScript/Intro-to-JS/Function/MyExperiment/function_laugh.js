var teeth = "";
function smile(num) {
    for(var x = 0; x < num; x++){
        teeth += "teeth_white ";
        
    }

    teeth += "!";
    return teeth;
}

console.log(smile(2));