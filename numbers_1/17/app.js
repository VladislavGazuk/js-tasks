// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если же результат – число с плавающей точкой, то округлить то целых)

let a = +prompt('Введите значение');
let b = Math.sqrt(a);

if (b % 1 === 0) {
    console.log(b);
} else {
    console.log(Math.round(b));
}