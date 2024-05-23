let Y = Number(prompt());
const calculator = {
    base: Y - 2,
    power(Y) {
        console.log(this.base ** Y)
    }
};
calculator.power(Y);