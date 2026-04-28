function isPrime(integer) {
    for (var x = 2; x < integer; x++) {
        if (integer % x === 0) {
            console.log(integer + " is devisble by " + x);
            // console.log("Nope");
            return false;
        }

    }
    // console.log("yup");
    return true;
    
}
console.log(isPrime(4));