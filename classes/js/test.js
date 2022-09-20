/*Melaku G.Denbel
WAP Assignement*/

describe('Mocha / Chai Test Report', () => {
    describe('Savings Account Report', () => {
        let saving1 = new SavingsAccount(15,"1")
        describe('getInterest', () => {
            it('return savings account interest', () => {
                assert.equal(saving1.getInterest(), 15);
            })
        });
        describe('setInterest', () => {
           it('assign savings account interest', () => {
               saving1.setInterest(12);
               assert.equal(saving1.getInterest(),12);
           })
       });
       describe('addInterest', () => {
           it('add interest and return current balance', () => {
               saving1.deposit(100);
                assert.equal(saving1.addInterest(), 112);
           })
       });
       describe("endOfMonth", ()=> {
        it("Show details of savings account", ()=> {
            assert.equal(
              saving1.endOfMonth(),
              "Interest added SavingsAccount 1: balance: 125.44 interest: 12"
            );
        });
    });

       describe('toString', () => {
           it('Show savings account details',() => {
               assert.equal(saving1.toString(),`Savings Account ${saving1.getNumber()} : balance: ${saving1.getBalance()} interest: ${saving1.getInterest()}`)
           })
       });
    });
    describe('Checking Account', () => {
        let checking1 = new CheckingAccount(500,"3");
        describe('getOverDraftLimit', () => {
            it('should get overdraft limit ',() => {
                assert.equal(checking1.getOverDraftLimit(),500);
            })
        });
        describe('setOverDraftLimit', () => {
            it('should set overdraft limit ',() => {
                checking1.setOverDraftLimit(600);
                assert.equal(checking1.getOverDraftLimit(), 600);
            })
        });
        describe("withdraw", () => {
            describe("When the amount exceeds the current balance", () => {
                it("Throws Error with Withdraw amount has to be greater than zero", () => {
                    assert.throws(() => { checking1.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the amount is valid", () => {
                it("Decrease the account balance by given amount", () => {
                    checking1.deposit(50);
                    checking1.withdraw(100);
                    assert.equal(checking1.getBalance(), -50);
                });
            });
        });

        describe("endOfMonth", () => {
            describe("When the balance is less than 0", () => {
                it("Shows warning details of checking account", () => {
                    checking1.deposit(120);
                    checking1.withdraw(300);
                    assert.equal(checking1.endOfMonth(), 'Warning, low balance CheckingAccount 3: balance: -230 overdraft limit: 600');
                });
            });

            describe("When the current balance is greater than 0", () => {
                it("Shows details of checking account", () => {
                    checking1.deposit(500);
                    assert.equal(checking1.endOfMonth(), '');
                });
            })


        });
        describe('toString', () => {
            it('Shows checking account details',() => {
                assert.equal(checking1.toString(),`Checking Account: ${checking1.getNumber()}: balance: ${checking1.getBalance()} overdraft limit: ${checking1.getOverDraftLimit()}}`)
            })
        });

    });


    describe("Bank", () => {
        beforeEach(() => {
            bank = new Bank();
        });

        describe("addAccount", () => {
            it("adds an account, and returns number of accounts", () => {
                bank.addAccount(10);
                assert.equal(bank.addAccount(101), 2);
            });
        });

        describe("addCheckingAccount", () => {
            it("adds a checking account, and returns number of accounts", () => {
                assert.equal(bank.addCheckingAccount(1100, 123), 1);
            });
        });

        describe("addSavingsAccount", () => {
            it("adds a savings account, and returns number of accounts", () => {
                assert.equal(bank.addSavingsAccount(3, 3003), 1);
            });
        });

        describe("accountReport", () => {
            it("Shows details of each existing account", () => {
                bank.addCheckingAccount(1100, 123);
                bank.addAccount(101);
                bank.addSavingsAccount(3, 3003);
                assert.equal(bank.accountReport(), "Checking Account: 123: balance: 0 overdraft limit: 1100}\nAccount 101: balance 0\nSavings Account 3003 : balance: 0 interest: 3");
            });
        });
    });



});