const numElements = Number(prompt("Введите количество элементов в массиве:"));
const userArray = [];
const lengths = [];

for (let i = 0; i < numElements; i++) {
    userArray.push(prompt());
}

for (const word of userArray) {
    lengths.push(word.length);
}

console.log(lengths);