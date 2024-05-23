let side1 = Number(prompt())
let side2 = Number(prompt())
let side3 = Number(prompt())

function checkTriangleExistence(side1, side2, side3) {
    if (side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
        console.log('Треугольник не существует')
    } else {
        console.log('Треугольник существует')
    }
}

checkTriangleExistence(side1, side2, side3)