var balance = -1;
var checkBalance = false;
var isActive = true;


if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (isActive === true && balance === 0) {
        console.log("Your account is empty");
    } if (isActive === true && balance < 0) {
        console.log("Your account is negative. Plase contact bank");
    } else if (isActive === false) {
        console.log("Your account is no longer active");
    }

} else {
    console.log("Thank you. Have a nice day");
}