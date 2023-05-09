/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */

// var sound = "";
// function laugh(num) {
//     for (var x = 0; x < num; x++){
//         sound += "ha";
//     }
//     sound  += "!";
//     return sound;
// }

// console.log(laugh(1));


// var laughh = '';
// var charr = 'ha';
// laughtimes = 3;
// for (var i = 1 ; i < laughtimes;i++){
// laughh += charr
// }
// laughh += "!";
// console.log(laughh);


// function laaa(times){
// laugh="";
// for(var i=0; i < times;i++){
// laugh+="ho";

// }
// laugh+="!"

// return laugh;
// }
// console.log(laaa(5));




function smile(num){
    var laugh = "";

    for (let index = 0; index < num; index++) {;
        laugh += "ha";
    }
    laugh += "!";
    return laugh;
}

console.log(smile(3));