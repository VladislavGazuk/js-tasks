// Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива

const a = [1, 2, 3, 4];
let b = 1;

for (let i = 0; i < a.length; i++) {
    b *= a[i];
}

console.log(b);