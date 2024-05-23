let response = prompt().split(', ')
let indexes = prompt().split(', ')
let result = []
for (let index = 0; index < indexes.length; index++) {
    result.push(response[Number(indexes[index])])
}
console.log(result.join(' '))