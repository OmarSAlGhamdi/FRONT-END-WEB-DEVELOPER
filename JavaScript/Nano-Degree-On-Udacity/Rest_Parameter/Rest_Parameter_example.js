function sum (...nums){
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

// sum(1, 2);
// sum(10, 36, 7, 84, 90, 110);
// sum(-23, 3000, 575000);


console.log(sum(1, 2));
console.log(sum(10, 36, 7, 84, 90, 110));
console.log(sum(-23, 3000, 575000));

//can you 