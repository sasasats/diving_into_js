let month = Number(prompt());
let temperature = Number(prompt());

let season
let description = ''
if (month === 12 || month === 1 || month === 2) {
    season = 'Зима'
    if (temperature <= -25) {
        description = ' (холодная зима)'
    }
} else if (month >= 3 && month <= 5) {
    season = 'Весна'
    if (temperature < 15) {
        description = ' (прохладная весна)'
    }
} else if (month >= 6 && month <= 8) {
    season = 'Лето'
    if (temperature >= 30) {
        description = ' (жаркое лето)'
    }
} else if (month >= 9 && month <= 11) {
    season = 'Осень'
    if (temperature < 0) {
        description = ' (прохладная осень)'
    }
}

console.log(season + description)