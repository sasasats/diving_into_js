const S = Number(prompt())
const h = Number(prompt())
const figure = prompt()

let calculateCylinderVolume = (S, h) => S * h
let calculateConeVolume = (S, h) => (1/3) * S * h

if (figure === 'цилиндр') {
    console.log(`Объем цилиндра: ${calculateCylinderVolume(S, h)}`)
} else if (figure === 'конус') {
    console.log(`Объем конуса: ${calculateConeVolume(S, h)}`)
}