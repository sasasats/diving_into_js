let sentence = prompt()
let result = ''

for (let i = 1; i <= sentence.length; i++) {
    result += sentence[sentence.length - i].toLowerCase()
}
console.log(result)