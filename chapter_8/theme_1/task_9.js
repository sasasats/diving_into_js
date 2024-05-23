const numElements = Number(prompt("Введите количество элементов в массиве:"));
const userArray = [];

for (let i = 0; i < numElements; i++) {
    userArray.unshift(prompt())
}

console.log(userArray);