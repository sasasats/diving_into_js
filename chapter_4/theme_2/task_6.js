let sum = Number(prompt())
let months = Number(prompt())
for (let i = 1; i <= months; i++) {
    console.log(`Месяц ${i}: ${sum}`)
    sum *= 2
}