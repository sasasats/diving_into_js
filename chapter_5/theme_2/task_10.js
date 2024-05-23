let num1 = Number(prompt())
let num2 = Number(prompt())
let operation = prompt()

function calculate(num1, num2, operation) {
    if (operation === '+') {
        console.log(num1 + num2)
    } else if (operation === '-') {
        console.log(num1 - num2)
    } else if (operation === '*') {
        console.log(num1 * num2)
    } else if (operation === '/') {
        console.log(num1 / num2)
    } else {
        console.log('Неверный оператор')
    }
}
calculate(num1, num2, operation)