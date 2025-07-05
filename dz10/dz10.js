const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Завдання 1: Лічильник подій
function countItems(array, condition) {
    let count = 0;
    for (const element of array) {
        if (condition(element)) {
            count++;
        }
    }
    return count;
}

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

// Завдання 2: Калькулятор з операціями
const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return 'Помилка: ділення на нуль';
    }
    return a / b;
};

// Тестування
console.log(calculate(10, 5, add));      // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide));   // 2
console.log(calculate(10, 0, divide));   // Помилка

// Завдання 3: Генератор повідомлень
function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i++) {
        messageCreator(i);
    }
}

// Тестування
repeatMessage(3, i => console.log(`Повідомлення #${i + 1}`));
repeatMessage(2, i => console.log(`Hello, це ітерація ${i}`));

// Завдання 4: Кінотеатр
function processMovies(movies, action) {
    for (let i = 0; i < movies.length; i++) {
        action(movies[i], i);
    }
}

// Тестування
const movies = [
    { title: 'Інтерстеллар', year: 2014, rating: 8.6 },
    { title: 'Матриця', year: 1999, rating: 8.7 },
    { title: 'Початок', year: 2010, rating: 8.8 }
];

const printTitle = (movie, index) => {
    console.log(`${index + 1}. ${movie.title}`);
};

const printOldMovies = (movie, index) => {
    if (movie.year < 2010) {
        console.log(`Старий фільм: ${movie.title} (${movie.year})`);
    }
};

const printHighRated = (movie, index) => {
    if (movie.rating > 8.7) {
        console.log(`Топ рейтинг: ${movie.title} (${movie.rating})`);
    }
};

processMovies(movies, printTitle);
processMovies(movies, printOldMovies);
processMovies(movies, printHighRated);