// Пользователь вводит строку. Необходимо сделать проверку, что это не число и вывести длину строки

let a = prompt('Введите текст');

if (isNaN(a)) {
    console.log(a.length);
} else {
    console.log('Некорректный ввод');
}