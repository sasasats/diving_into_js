let name = prompt()
let author = prompt()
let year = Number(prompt())

let book = {
    name,
    author,
    year,
}

console.log(`Название книги: ${book.name}`)
console.log(`Автор книги: ${book.author}`)
console.log(`Год издания книги: ${year}`)