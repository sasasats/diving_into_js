let state = Number(prompt())
if (state >= 1 && state <= 3) {
    console.log('Плохое')
} else if (state >= 4 && state <= 7) {
    console.log('Нормальное')
} else if (state >= 8 && state <= 10) {
    console.log('Хорошее')
} else {
    console.log('Число вне диапазона')
}