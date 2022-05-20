# Тестовое задание от NewGen Vision

Запуск кода выполняется в среде **node.js**
В качестве дополнения написаны **unitTest** на **jest**
Используемые зависимости перечислены в **package.json**
Перед началом тестирования установите зависимости через

    npm i

## Возможные скрипты:

> Для запуска функции сортировки

    npm run sorting

> Для запуска функции фильтрации

    npm run filtering

> Для запуска тестов

    npm run test

## Техническое задание

### Условие задачи:

На сайте UniPage есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.
Например:

    от 100 до 200 рублей;
    от 500 рублей;
    до 400 рублей.

Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.

#### Требование:

Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене? Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.

**Входные данные:**
_Список курсов:_

    let courses = [
        { name: "Courses in England", prices: [0, 100] },
        { name: "Courses in Germany", prices: [500, null] },
        { name: "Courses in Italy", prices: [100, 200] },
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];

_Варианты цен (фильтры), которые ищет пользователь:_

    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];

Вывод:

**Подходящие курсы для каждого варианта фильтра**

**_Дополнительно, вы также можете реализовать алгоритм сортировки курсов по цене._**
