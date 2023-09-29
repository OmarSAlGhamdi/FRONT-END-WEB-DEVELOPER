let numbers = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10, 11, 12, 13];

numbers.forEach(function(number1, index){
    if (number1 % 3 === 0) {
        console.log("The number" + number1 + " is devisble on 3");
        index += 10;
    }

    else 

    console.log("The number" + number1 + " is not deviasble on 3");
})

console.log(numbers);