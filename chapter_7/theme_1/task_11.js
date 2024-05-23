const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(itemName, itemPrice, quantity) {
    return `Вы выбрали "${itemName}" по цене ${itemPrice} рублей за штуку.
Количество: ${quantity} шт.
Итого: ${itemPrice * quantity} рублей.`
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);