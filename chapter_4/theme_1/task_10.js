let num = Number(prompt())
let iterator = 0
while(num < 1000) {
    num *= 2
    iterator++
}
console.log(`Итоговое число: ${num}`)
console.log(`Количество итераций: ${iterator}`)