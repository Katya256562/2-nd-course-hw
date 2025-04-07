// Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

// Инструкция:

// В HTML создайте заголовок <h1> с текстом и кнопку.
// Используйте метод querySelector для получения ссылок на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы скрывать и показывать заголовок при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова.

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Скрытие и показ текста</title>
    <style>
        #myTitle {
            transition: opacity 0.5s;
        }
    </style>
</head>
<body>

    <h1 id="myTitle">Привет, это заголовок!</h1>
    <button id="toggleButton">Скрыть</button>

    <script>
        const title = document.querySelector('#myTitle');
        const button = document.querySelector('#toggleButton');

        button.addEventListener('click', () => {
            if (title.style.display === 'none') {
                title.style.display = 'block';
                button.textContent = 'Скрыть';
            } else {
                title.style.display = 'none';
                button.textContent = 'Показать';
            }
        });
    </script>

</body>
</html>

// Задание 2. Изменение стиля элемента
// Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.

// Инструкция:

// В HTML создайте абзац <p> и кнопку.
// Используйте метод querySelector для получения ссылки на абзац и кнопку.
// Используйте событие click и метод addEventListener, чтобы изменить стиль элемента, например его цвет.
// Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Изменение стиля элемента</title>
    <style>
        #myParagraph {
            font-size: 20px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <p id="myParagraph">Это текст абзаца, который будет изменен.</p>
    <button id="changeColorButton">Изменить цвет</button>

    <script>
        const paragraph = document.querySelector('#myParagraph');
        const button = document.querySelector('#changeColorButton');

        button.addEventListener('click', () => {
            paragraph.style.color = 'blue';
        });
    </script>

</body>
</html>

// Задание 3. Динамическое изменение текста
// Задача: создайте кнопку, которая меняет текст в заголовке <h1>.

// Инструкция:

// В HTML создайте заголовок <h1> с текстом и кнопку.
// Используйте метод querySelector для получения ссылки на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы изменить текст заголовка при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!».

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Динамическое изменение текста</title>
</head>
<body>

    <h1 id="myHeader">Исходный текст заголовка</h1>
    <button id="changeTextButton">Изменить текст</button>

    <script>
        const header = document.querySelector('#myHeader');
        const button = document.querySelector('#changeTextButton');

        button.addEventListener('click', () => {
            header.textContent = 'Привет, мир!';
        });
    </script>
</body>
</html>

// Задание 4. Поиск и изменение элементов по классу
// Задача: найдите все элементы с классом description и измените их текст на «Измененный текст».

// Инструкция:

// В HTML создайте несколько элементов с классом description.
// Используйте метод querySelectorAll для поиска всех элементов с этим классом.
// Переберите найденные элементы и измените их текстовое содержимое с помощью свойства textContent.
// Как должно работать: после выполнения скрипта все элементы с классом description изменяют свой текст на «Измененный текст».

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Изменение элементов по классу</title>
</head>
<body>

    <div class="description">Первый текст описания.</div>
    <div class="description">Второй текст описания.</div>
    <div class="description">Третий текст описания.</div>
    <div class="description">Четвертый текст описания.</div>

    <button id="changeTextButton">Изменить текст</button>

    <script>
        const elements = document.querySelectorAll('.description');
        const button = document.querySelector('#changeTextButton');

        button.addEventListener('click', () => {
            elements.forEach(element => {
                element.textContent = 'Измененный текст';
            });
        });
    </script>

</body>
</html>

// Задание 5. Работа с querySelectorAll
// Задача: создайте несколько элементов <p> с разными классами. Используйте querySelectorAll, чтобы найти все элементы с классом
// description и изменить их текст.

// Инструкция:

// В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
// Используйте querySelectorAll для поиска всех элементов с классом description.
// Переберите найденные элементы и измените их текстовое содержимое.
// Как должно работать: после выполнения скрипта все элементы с классом description изменяют свой текст на «Новый текст».

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Работа с querySelectorAll</title>
</head>
<body>

    <p class="description">Первый текст описания.</p>
    <p class="text">Этот текст не изменится.</p>
    <p class="description">Второй текст описания.</p>
    <p class="another-class">Текст с другим классом.</p>
    <p class="description">Третий текст описания.</p>

    <button id="changeTextButton">Изменить текст</button>

    <script>

        const elements = document.querySelectorAll('.description');
        const button = document.querySelector('#changeTextButton');

        button.addEventListener('click', () => {
            elements.forEach(element => {
                element.textContent = 'Новый текст';
            });
        });
    </script>

</body>
</html>

// Задание 6. Добавление нового элемента в DOM
// Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.

// Инструкция:

// В HTML создайте кнопку.
// Используйте метод createElement для создания нового элемента.
// Используйте appendChild для добавления нового элемента в конец документа при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац».

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добавление нового элемента в DOM</title>
</head>
<body>

    <button id="addElementButton">Добавить элемент</button>

    <script>
        // Находим кнопку
        const button = document.getElementById('addElementButton');
        
        // Добавляем обработчик события click на кнопку
        button.addEventListener('click', () => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'Новый абзац';
            document.body.appendChild(newParagraph);
        });
    </script>

</body>
</html>

// Задание 7. Удаление элемента
// Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.

// Инструкция:

// В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
// Используйте метод querySelector для поиска первого элемента с классом description.
// Используйте метод remove для удаления этого элемента при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом description со страницы.

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Удаление элемента</title>
</head>
<body>

    <p class="description">Первый текст описания.</p>
    <p class="text">Этот текст не изменится.</p>
    <p class="description">Второй текст описания.</p>
    <p class="description">Третий текст описания.</p>

    <button id="removeElementButton">Удалить элемент</button>

    <script>
        const button = document.getElementById('removeElementButton');

        button.addEventListener('click', () => {
            const firstDescription = document.querySelector('.description');

            if (firstDescription) {
                firstDescription.remove();
            }
        });
    </script>

</body>
</html>