const catalogue = {
    magazine: 5,
}
let resp = Number(prompt())
if (resp >= 10 && resp <= 50) {
    catalogue.magazine = resp
    console.log(catalogue.magazine)
} else {
    console.log('Введите число в диапазоне от 10 до 50 включительно')
}