let time = Number(prompt())
if (time >= 0 && time <= 11) {
    console.log('Доброе утро')
} else if (time >= 12 && time <= 17) {
    console.log('Добрый день')
} else if (time >= 18 && time <= 23) {
    console.log('Добрый вечер')
}