let num11 = Number(prompt())
let num12 = Number(prompt())
let num21 = Number(prompt())
let num22 = Number(prompt())

function findMax(num1, num2) {
    return (num1 >= num2) ? num1 : num2
}

function compareMax(num1, num2) {
    if (num1 > num2) {
        console.log('Максимальное число первого набора больше')
    } else if (num2 > num1) {
        console.log('Максимальное число второго набора больше')
    } else {
        console.log('Максимальные числа наборов равны')
    }
}

compareMax(findMax(num11, num12), findMax(num21, num22))