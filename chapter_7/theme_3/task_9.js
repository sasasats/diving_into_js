let sentence = prompt()
if (sentence.length < 2) {
    console.log('Введенная строка слишком короткая')
} else {
    console.log(sentence.slice(-2))
}