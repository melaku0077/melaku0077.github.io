/*Melaku G.Denbel
WAP Assignement*/

class SavingsAccount extends Account{

    constructor(interest,number){
        super(number);
        this.interest = interest;
    }

    setInterest(interest){
        this.interest = interest;
        
    }

    getInterest(){
        return this.interest; 
    }

    addInterest(){
        this.deposit(this.getBalance()*this.getInterest()/100);
        return this.getBalance();

    }

    toString(){
        return `Savings Account ${this.getNumber()} : balance: ${this.getBalance()} interest: ${this.getInterest()}`;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this.getInterest()}`;
    
    }
}
