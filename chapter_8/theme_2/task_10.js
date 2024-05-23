let response = prompt().split(', ')
let array = []
for (let elem of response) {
    if(isNaN(Number(elem))) {
        array.push(elem)
    } else {
        array.push(Number(elem))
    }
}
console.log(array)