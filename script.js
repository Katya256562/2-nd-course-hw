function scrollToGames() {
    const gamesSection = document.getElementById('for__games-section');
    gamesSection.scrollIntoView({ behavior: 'smooth' });
}

function startGuessTheNumber() {
    alert("Игра 'Угадай число' началась!");
    function guessTheNumber() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let userGuess = 0;
        let attempts = 0;

        alert("Угадайте число от 1 до 100!");

        while (true) {
            userGuess = prompt("Введите ваше предположение:");

            if (userGuess === null) {
                alert("Игра окончена.");
                break;
            }

            userGuess = parseInt(userGuess, 10);
            attempts++;

            if (isNaN(userGuess)) {
                alert("Пожалуйста, введите действительное число.");
                continue;
            }

            if (userGuess < randomNumber) {
                alert("Слишком мало! Попробуйте еще раз.");
            } else if (userGuess > randomNumber) {
                alert("Слишком много! Попробуйте еще раз.");
            } else {
                alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
                break; // Добавлено для выхода из цикла после успешного угадывания
            }
        }
    }

    guessTheNumber();
}

function simpleArithmetic() {
    alert("Игра 'Простая арифметика' началась!");
    function generateRandomTask() {
        const operations = ['+', '-', '*', '/'];
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let task;
        let correctAnswer;

        switch (operation) {
            case '+':
                task = `${num1} + ${num2}`;
                correctAnswer = num1 + num2;
                break;
            case '-':
                task = `${num1} - ${num2}`;
                correctAnswer = num1 - num2;
                break;
            case '*':
                task = `${num1} * ${num2}`;
                correctAnswer = num1 * num2;
                break;
            case '/':
                task = `${num1 * num2} / ${num2}`;
                correctAnswer = num1;
                break;
        }

        return { task, correctAnswer };
    }

    function startGame() {
        const { task, correctAnswer } = generateRandomTask();
        const userAnswer = prompt(`Решите задачу: ${task}`);

        if (parseFloat(userAnswer) === correctAnswer) {
            alert("Верно! Хорошая работа.");
        } else {
            alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }
    }

    startGame();
}

function reverseText() {
    const userInput = prompt("Введите текст для переворота:");
    if (userInput) {
        const reversed = userInput.split('').reverse().join('');
        alert("Перевернутый текст: " + reversed);
    }
}

function quiz() {
    alert("Игра 'Викторина' началась!");
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let rightScore = 0;

    function startQuiz() {
        for (let i = 0; i < quiz.length; i++) {
            const q = quiz[i];
            let optionsString = q.options.join('\n');
            let userAnswer = prompt(`${q.question}\n${optionsString}\nВведите номер вашего ответа:`);

            if (parseInt(userAnswer) === q.correctAnswer) {
                rightScore++;
            }
        }

        alert(`Вы ответили правильно на ${rightScore} из ${quiz.length} вопросов.`);
    }

    startQuiz();
}

function rockPaperScissors() {
    alert("Игра 'Камень, ножницы, бумага' началась!");
    
        const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
        const choices = ["камень", "ножницы", "бумага"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
        if (userChoice === computerChoice) {
            alert(`Ничья! Вы оба выбрали ${userChoice}.`);
        } else if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            alert(`Вы выиграли! ${userChoice} бьет ${computerChoice}.`);
        } else {
            alert(`Вы проиграли! ${computerChoice} бьет ${userChoice}.`);
        }
    
    playGame();
}

function randomizerColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.body.style.backgroundImage = 'none';
    alert("Фон страницы изменен на случайный цвет: " + randomColor);
    document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
}

