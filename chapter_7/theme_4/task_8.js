let age = Number(prompt())

if (isNaN(age)) {
    console.log('Ошибка: Введите ваш возраст')
} else {
    if (age >= 18 && age <= 65) {
        console.log('Доступ разрешен')
    } else {
        console.log('Доступ запрещен')
    }
}