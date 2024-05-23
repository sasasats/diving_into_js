income = Number(prompt())
expenses = Number(prompt())

let budget = {
    income,
    expenses,
    calculateProfit() {
        let profit = this.income - this.expenses
        if (profit > 0) {
            console.log(`Ваша прибыль составляет ${profit} рублей`)
        } else if (profit < 0) {
            console.log(`Вы ушли в минус на ${-profit} рублей`)
        } else {
            console.log('Вы отработали в ноль')
        }
    }
}

budget.calculateProfit()

