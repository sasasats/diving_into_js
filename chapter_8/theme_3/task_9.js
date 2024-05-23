const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];
let cityName = prompt()

if (cities.includes(cityName)) {
    console.log(`Города, начинающиеся с буквы "${cityName[0]}": ${cities.filter(city => city.startsWith(cityName[0])).join(', ')}`)
} else {
    console.log('Такого города нет в списке')
}