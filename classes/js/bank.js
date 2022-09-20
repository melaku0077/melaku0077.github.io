/*Melaku G.Denbel
WAP Assignement*/

"use strict";
class Bank {
    static nextNumber;

    constructor(){
        this.accounts = [];
    }

    addAccount(number){
        this.accounts.push()
    }
 
    addAccount(number) {
        this.accounts.push(new Account(number));
        return this.accounts.length;
    }

    addCheckingAccount(overDraftLimit,number) {
        this.accounts.push(new CheckingAccount(overDraftLimit, number));
        return this.accounts.length;
    }

  
    addSavingsAccount(interest, number) {
        this.accounts.push(new SavingsAccount(interest, number));
        return this.accounts.length;
    }

    closeAccount(number) {
        let accountIndex = this.accounts.findIndex((acc) => acc.getNumber() == number);
        if (accountIndex !== undefined) {
            this.accounts[accountIndex] = null;
        }
    }

    accountReport() {
        return this.accounts.filter(acc => acc instanceof Account).map(acc => acc.toString()).join("\n");
    }

    endOfMonth() {
        console.log(this.accounts.map(acc => acc.endOfMonth()));
    }
}