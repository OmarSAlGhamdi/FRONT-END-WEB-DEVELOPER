const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {

    if (digit % 3 === 0) {
        continue;
    }
    console.log(digit);
}