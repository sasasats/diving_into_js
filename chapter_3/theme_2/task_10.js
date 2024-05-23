let a = Number(prompt())
let b = Number(prompt())
let c = Number(prompt())
if (a === b && b === c) {
    console.log('Равносторонний')
} else if (a === b || a === c || b === c){
    console.log('Равнобедренный')
} else {
    console.log('Разносторонний')
}