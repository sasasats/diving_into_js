let sentence = prompt()
let symbol = prompt()

let count = 0

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === symbol) {
        count++
    }
}
console.log(`Символ "${symbol}" встречается ${count} раз(-а)`)