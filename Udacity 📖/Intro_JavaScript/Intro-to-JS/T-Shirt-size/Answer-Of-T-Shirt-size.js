var shirtWidth = 28; // size S (small)
var shirtLength = 34; // size M (medium)
var shirtSleeve = 10.12.5; // size M (medium)


if ((shirtWidth > 17 && shirtWidth < 20) && (shirtLength > 27 && shirtLength < 29) &&  (shirtSleeve > 8.12 && shirtSleeve < 8.38)) {
    console.log("S");
}

else if ((shirtWidth > 19 && shirtWidth < 22) && (shirtLength > 28 && shirtLength < 30) && (shirtSleeve > 8.37 && shirtSleeve < 8.63)) {
    console.log("M");
}

else if ((shirtWidth > 21 && shirtWidth < 24 ) && (shirtLength > 29 && shirtLength < 31) && (shirtSleeve > 8.62 && shirtSleeve < 8.88)) {
    console.log("L");
}  

else if ((shirtWidth > 23 && shirtWidth < 26) && (shirtLength > 30 && shirtLength < 33) && (shirtSleeve > 8.87 && shirtSleeve < 9.63)) {
    console.log("XL");
}

else if ((shirtWidth > 25 && shirtWidth < 28) && (shirtLength > 32 && shirtLength < 34) && (shirtSleeve > 9.62 && shirtSleeve < 10.13)) { 
    console.log("2XL");
}
else if ((shirtWidth > 27 && shirtWidth < 29) && (shirtLength > 33 && shirtLength < 35) && (shirtSleeve > 10.12 && shirtSleeve < 10.15)) { 
    console.log("3XL");
}

else { 
    console.log("N/A");
}