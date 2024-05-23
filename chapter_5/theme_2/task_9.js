let num1 = Number(prompt())
let num2 = Number(prompt())
let num3 = Number(prompt())
let num4 = Number(prompt())

function compareAndPrintMax(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        console.log(num1)
    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
        console.log(num2)
    } if (num3 > num1 && num3 > num2 && num3 > num4) {
        console.log(num3)
    } if (num4 > num1 && num4 > num2 && num4 > num3) {
        console.log(num4)
    }
}

compareAndPrintMax(num1, num2, num3, num4)