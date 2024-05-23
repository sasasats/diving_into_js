let bankAccount = {
    balance: 500,

    deposit: function(amount) {
    this.balance += amount
    },

    withdraw: function(amount) {
    this.balance -= amount
    },
};

const amount = Number(prompt());
const choice = prompt()

if (choice === "внести") {
    bankAccount.deposit(amount)
    console.log(bankAccount.balance)
} else if (choice === "снять") {
    if (bankAccount.balance < amount) {
        console.log('Недостаточно средств на счете')
    } else {
        bankAccount.withdraw(amount)
        console.log(bankAccount.balance)
    }
}