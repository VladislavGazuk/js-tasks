// Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом числе цифр, а также положительное оно или отрицательное. Например, "Число " + num + " однозначное положительное". (length)

let a = prompt('Введите значение');

if (!isNaN(a)) {
    console.log((+a > 0) ? 'Положительное' : 'Отрицательное');
    console.log(a.length);
} else {
    console.log('Некорректный ввод');
}