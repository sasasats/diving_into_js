let length = Number(prompt())
let value = Number(prompt())
if (length <= 3.8 && value <= 1.2) {
    console.log('Класс A')
} else if (length <= 4 && value <= 1.6) {
    console.log('Класс B')
} else if (length <= 4.5 && (value >= 1.6 && value <= 2)) {
    console.log('Класс C')
} else {
    console.log('Выберите автомобиль другого класса')
}