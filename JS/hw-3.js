// Задание 1
// Создайте программу проверки правильности введенного пароля по следующему алгоритму:
// Создайте переменную «пароль» и присвойте ей произвольный текст-пароль.
// (let password = 'пароль';)
// Создайте вторую переменную и с помощью prompt()
// спросить у пользователя «Введите пароль».
// Добавьте проверку: если пользователь вводит верный пароль, вывести на экран «Пароль введен верно».
// Добавьте проверку: если пользователь вводит неверный пароль, вывести на экран "Пароль введен неправильно".

let password = prompt('Введите пароль');
let right = 'БоБрДоБр';
if (password === right) {prompt('Пароль введен верно')}
else {prompt('Пароль введен неправильно')}

// Задание 2
// Создайте переменную с и запишите в нее любое число.
// Если с больше 0 и меньше 10, то выведите в консоль «Верно», иначе выведите «Неверно».
// Проверьте работу скрипта при значении переменной c, равной 0, 10, −3, 2.
// Для решения задачи используйте логический оператор // &&(логическое И).

let c = prompt('Введите число') ;
if (0<c && c<10) {prompt('Верно')}
else {prompt('Неверно')}

// Задание 3
// Создайте две переменные — d и e, запишите в них любые числа.
// Если одна из переменных больше 100, выведите в консоль «Верно», иначе выведите «Неверно».
// Для решения задачи используйте логический оператор || (логическое ИЛИ).

let d = 394;
let e = 28;
if (d>100 || e>100) {prompt('Верно')}
else {prompt('Неверно')}

// Задание 4
// Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23'.
// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
// alert(a + b);

let a = '2';
let b = '3';
alert(Number(a) + Number(b));


// Задание 5
// Напишите программу, которая определяет по номеру месяца в году, к какому сезону этот месяц принадлежит.
// Например, 1-й месяц (он же январь) принадлежит к сезону «зима».
// Для написания программы используйте оператор switch.
// Для обозначения номера месяца используйте переменную monthNumber, которая равна 12.
// Пропишите условие, при котором программа не будет выполняться (номер месяца больше 13).

let monthNumber = parseInt(prompt('Введите номер месяца'));
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Номер месяца должен быть от 1 до 12.');
} else {
    let season;
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
    }
    console.log('Плотва вас не поняла');
}