// Задание 1
// Дан массив:
// [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
// 10. После вывода значения 10  в консоль цикл должен прекратить свою работу.

const array1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array1.length; i++) {

    console.log(array1[i]);
    
    if (array1[i] === 10) {
        break;
    }
}

// Задание 2
// Дан массив:
// [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.

const array2 = [1, 5, 4, 10, 0, 3];

const index = array2.indexOf(4);

if (index !== -1) {
    console.log(`Индекс значения 4 в массиве: ${index}`);
} else {
    console.log("Значение 4 не найдено в массиве.");
}

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const array3 = [1, 3, 5, 10, 20];

const result = array3.join(' ');

console.log(result);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида:
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const rows = 3; // количество строк
const cols = 3; // количество столбцов

const multiArray = [];

for (let i = 0; i < rows; i++) {
    
    const row = [];
    
    for (let j = 0; j < cols; j++) {
        row.push(1);
    }
    
    multiArray.push(row);
}

console.log(multiArray);

// Задание 5
// Дан массив:
// [1, 1, 1].
// Добавьте в конец массива значения 2, 2, 2.

const array5 = [1, 1, 1];

array5.push(2, 2, 2);

console.log(array5);

// Задание 6
// Дан массив:
// [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива.
// Затем выведите массив.

const array6 = [9, 8, 7, 'a', 6, 5];

const filteredArray = array6.filter(item => item !== 'a');

const sortedArray = filteredArray.sort((a, b) => a - b);

console.log(sortedArray);

// Задание 7
// Дан массив:
// [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt.
// Если значение, которое ввел пользователь, есть в массиве, выведите в
// alert  «Угадал», в противном случае — «Не угадал».

const array7 = [9, 8, 7, 6, 5];

const userGuess = prompt("Угадайте число из массива: [9, 8, 7, 6, 5]");

const guessedNumber = Number(userGuess);

if (array7.includes(guessedNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// Задание 8
// Дана строка: 'abcdef'.
// Выведите в консоль 'fedcba'.
// Для этого задания вам пригодится метод reverse().
// Он располагает элементы массива в порядке, обратном исходному.

const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const nestedArray = [[1, 2, 3], [4, 5, 6]];

const flatArray = nestedArray.flat();

console.log(flatArray);

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10).
// Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса:
// i + 1. Обратите внимание, что у последнего элемента нет следующего.

const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < randomNumbers.length - 1; i++) {
    const sum = randomNumbers[i] + randomNumbers[i + 1];
    console.log(`Сумма элементов ${randomNumbers[i]} и ${randomNumbers[i + 1]}: ${sum}`);
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function getSquares(numbers) {
    return numbers.map(num => num * num);
}

const inputArray11 = [1, 2, 3, 4, 5];
const squaresArray = getSquares(inputArray11);

console.log(squaresArray);

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

function getWordLengths(words) {
    return words.map(word => word.length);
}

const inputArray12 = ["apple", "banana", "cherry", "date"];
const lengthsArray = getWordLengths(inputArray12);

console.log(lengthsArray);

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const inputArray13 = [1, -2, 3, -4, 5, -6];
const negativeArray = getNegativeNumbers(inputArray13);

console.log(negativeArray);

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random()
//  в диапазоне от 0 до 10. В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

function generateRandomArray(size) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray.push(Math.floor(Math.random() * 11));
    }
    return randomArray;
}

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

const inputArray14 = generateRandomArray(10);
const evenArray = getEvenNumbers(inputArray14);

console.log("Исходный массив:", inputArray14);
console.log("Массив четных значений:", evenArray);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random()
//  в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

function generateRandomArray(size) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray.push(Math.floor(Math.random() * 10) + 1);
    }
    return randomArray;
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

const inputArray = generateRandomArray(6);
const average = calculateAverage(inputArray);

console.log("Исходный массив:", inputArray);
console.log("Среднее арифметическое:", average);