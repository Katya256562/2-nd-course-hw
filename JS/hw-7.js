// Задание 1
// Преобразовать строку 'js' в верхний регистр.

let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);

// Задание 2
// Создать функцию, которая принимает массив строк и строку.
// Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки.
// Регистр символов не влияет на результат.

function filterByPrefix(stringsArray, prefix) {
    return stringsArray.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

const strings = ['apple', 'banana', 'apricot', 'grape', 'avocado'];
const prefix = 'ap';
const result = filterByPrefix(strings, prefix);

console.log(result);

// Задание 3
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

let number = 32.58884;

let roundedDown = Math.floor(number);
let roundedUp = Math.ceil(number);
let roundedNearest = Math.round(number);

console.log('Округление до меньшего целого:', roundedDown);
console.log('Округление до большего целого:', roundedUp);
console.log('Округление до ближайшего целого:', roundedNearest);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);

const maxValue = Math.max(...numbers);

console.log('Минимальное значение:', minValue);
console.log('Максимальное значение:', maxValue);

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function generateRandomNumber() {

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    console.log(randomNumber);
}

generateRandomNumber();

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
// Длина массива должна быть в два раза меньше переданного числа.

function generateRandomArray(size) {

    if (!Number.isInteger(size) || size <= 0) {
        throw new Error("Введите положительное целое число.");
    }

    const length = Math.floor(size / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (size + 1));
        randomArray.push(randomNumber);
    }

    return randomArray;
}

const result = generateRandomArray(10);
console.log(result);

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRandomInRange(min, max) {

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error("Оба значения должны быть целыми числами.");
    }

    if (min > max) {
        throw new Error("Минимальное значение должно быть меньше или равно максимальному.");
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const result = getRandomInRange(5, 15);
console.log(result);

// Задание 8
// Вывести в консоль текущую дату.

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${day}.${month}.${year}`;

console.log(formattedDate);

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);

const day = String(futureDate.getDate()).padStart(2, '0');
const month = String(futureDate.getMonth() + 1).padStart(2, '0');
const year = futureDate.getFullYear();

const formattedFutureDate = `${day}.${month}.${year}`;
console.log(formattedFutureDate);

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function formatDate(date) {

    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const weekdays = [
        "воскресенье", "понедельник", "вторник", 
        "среда", "четверг", "пятница", "суббота"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const dateString = `Дата: ${day} ${month} ${year} — это ${weekday}.`;
    const timeString = `Время: ${hours}:${minutes}:${seconds}`;

    return `${dateString}\n${timeString}`;
}

const currentDate = new Date();
console.log(formatDate(currentDate));