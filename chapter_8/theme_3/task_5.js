const capitals = [
    "Токио", "Афины", "Нью-Дели", "Сеул", "Джакарта", "Багдад", "Астана", "Москва", "Анкара"
];

let array = capitals.filter(capital => capital.startsWith('А'));
console.log(array);