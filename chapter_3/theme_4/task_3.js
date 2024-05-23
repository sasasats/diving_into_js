let price = Number(prompt());
let status = prompt();
if (price > 1000) {
    if (status === 'VIP') {
        console.log(price - (price / 100 * 10))
    } else {
        console.log(price - (price / 100 * 5))
    }
} else {
    console.log(price)
}