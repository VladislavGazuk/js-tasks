// Пользователь вводит одно число. Необходимо вывести обратное ему (число является обратным при 1/x). Если при этом введённое с клавиатуры число – ноль, то вывести «Обратного числа не существует». Добавить проверку на ввод только чисел

let a = prompt('Введите значение');

if (!isNaN(a)) {
    console.log(1 / a);
    if (a === 0) {
        console.log('Обратного числа не существует');
    } else {
        console.log(1 / a);
    }
} else {
    console.log('Некорректный ввод');
}