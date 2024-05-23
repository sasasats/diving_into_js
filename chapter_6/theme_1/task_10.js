let place = prompt()
let startDate = prompt()
let duration = prompt()

let trip = {
    place,
    startDate,
    duration
}
console.log(`${trip.startDate} вы отправляетесь в ${trip.place} на ${trip.duration} дней`)