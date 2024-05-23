let num = Number(prompt())
let result = 1
let iterator = 1
while (iterator < num) {
    result *= iterator + 1
    iterator++
}
console.log(`Факториал числа ${num} равен ${result}`)