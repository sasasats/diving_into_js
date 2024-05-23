let sentence = prompt()
for (let i = 0; i < sentence.length; i++) {
    if (i % 2 !== 0) {
        console.log(sentence[i].toUpperCase())
    }
}