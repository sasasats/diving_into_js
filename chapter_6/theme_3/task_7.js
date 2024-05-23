const balance = Number(prompt())
let bankAccount = {
    balance,
    checkBalance() {
        console.log(`Ваш текущий баланс: ${this.balance} долларов`)
    }
};
bankAccount.checkBalance();