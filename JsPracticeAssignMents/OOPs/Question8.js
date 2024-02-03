class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }


    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }
};

var account = new BankAccount(1000);
account.withdraw(500);
console.log(account.balance);