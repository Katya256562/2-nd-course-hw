//задание 1//
let a = 10;
alert(a);
a = 20;
alert(a);

//задание 2//
let question = 'Когда вышел первый Iphone?';
alert(question);
let fistIphone = '9 января 2007 года';
let phrase = `Первый Iphone вышел ${firstIphone}`;
alert(phrase)

//задание 3//
let author = 'Brendan Eich';
let phrase = 'Создатель языка JavaScript - ${author}';
alert(phrase);

//задание 4//
let a = 10;
let b = 2;
let sum = a + b;
let def = a - b;
let prod = a * b;
let quo = a / b;
let phrase = 'Сумма ${sum}, разность ${def}, произведение ${prod}, частное ${quo}';
alert(phrase);

//задание 5//
let a = 2;
let result = a ** 5;
alert(result);

//задание 6//
let a = 9;
let b = 2;
let result = a % b;
alert(result);

//задание 7//
let num = 1;
num1 = num + 5;
num = num1 - 3;
num1 = num * 7;
num = num1 / 3;
num1 = num + 1;
num = num1 - 1;
alert(num);

//задание 8//
let age = prompt("Сколько вам лет?");
alert('Количество полных лет '+ age);

//задание 9//
let user = {
    name: "Иван",
    age: 30,
    isAdmin: false};
console.log(user);

//задание 10//
let uname = prompt("Как вас зовут?");
alert('Привет,' + uname);

//Доп задание//
let nam = prompt("Загадайте любое число");
nam1 = nam * 2;
alert('Ваше число удвоено - ${nam1}');
nam2 = nam1 + 10;
alert('К результату прибавили 10 - ${nam2}');
nam3 = nam2 / 2;
alert('Разделили на 2 - ${nam3}');
nam4 = nam3 - nam;
alert('Вычли ваше загаданное число и получили - 5');