
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
test.forEach(function(item, index){
    if (item % 3 === 0) {
        
        console.log("The Number " + item + " is devisable on 3 " + test[index]);
        test[index] += 100;
    }

    else {
        console.log("Element " + item + " is not divisable by 3");
    }
    
});

console.log(test);




