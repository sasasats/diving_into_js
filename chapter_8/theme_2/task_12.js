let response = prompt().split(', ')
let indexes = prompt().split(', ')

for (let index = 0; index < indexes.length; index++) {
    console.log(response[Number(indexes[index])])
}