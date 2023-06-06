
/* Programming Quiz: Bank Accounts 1 (7-3) */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingAccount.balance += amount;
        }
    },
    withdrwa: function removeMoney(amount){
        var verifyBalance = savingAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingAccount.balance -= amount;
        }
        
        // printAccountSummary: function (){
        //     return "Welcome!\n Your balance is currently $" + savingAccount.balance + " and your interest rate is " + savingAccount.interestRatePercent + "%."
        // }


        printAccountSummary: function() {
            return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
        }
    }
};

    console.log(savingAccount.printAccountSummary());