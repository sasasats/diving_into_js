let num1 = Number(prompt())
let num2 = Number(prompt())

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} больше, чем ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num2} больше, чем ${num1}`)
    } else {
        console.log(`${num1} равно ${num2}`)
    }
}
compare(num1, num2)