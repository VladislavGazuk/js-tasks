// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный прямоугольник размерами n×10 несколькими способами. 2 -> **********
// **********

const n = prompt('Введите число');

if (!isNaN(n)) {
    console.log(`${'*'.repeat(n * 10 / 2)}\n${'*'.repeat(n * 10 / 2)}`);
} else {
    console.log('Ошибка ввода');
}