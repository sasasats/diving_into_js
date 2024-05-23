let num11 = Number(prompt())
let num12 = Number(prompt())
let num21 = Number(prompt())
let num22 = Number(prompt())

function calculateAverage(num1, num2) {
    return (num1 + num2) / 2
}

function compareAverages(num1, num2) {
    if (num1 > num2) {
        console.log('Среднее значение первого набора больше\n')
    } else if (num2 > num1) {
        console.log('Среднее значение второго набора больше')
    } else {
        console.log('Средние значения наборов равны')
    }
}

compareAverages(calculateAverage(num11, num12), calculateAverage(num21, num22))