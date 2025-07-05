let drink = "Чай";
switch (drink) {
    case "Кава":
        console.log("Ви обрали каву.");
        break;
    case "Чай":
        console.log("Ви обрали чай.");
        break;
    case "Сік":
        console.log("Ви обрали сік.");
        break;
    default:
        console.log("Виберіть напій зі списку.");
}

let day = "субота";
switch (day.toLowerCase()) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п’ятниця":
        console.log("Це робочий день.");
        break;
    case "субота":
    case "неділя":
        console.log("Це вихідний.");
        break;
    default:
        console.log("Введіть коректний день тижня.");
}

let month = 4;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Введіть коректний номер місяця.");
}

let color = "жовтий";
switch (color.toLowerCase()) {
    case "червоний":
        console.log("стоп");
        break;
    case "зелений":
        console.log("йти");
        break;
    case "жовтий":
        console.log("чекати");
        break;
    default:
        console.log("Невідомий колір.");
}

let num1 = 10;
let num2 = 0;
let operator = "/";
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(`Результат: ${result}`);
        break;
    case "-":
        result = num1 - num2;
        console.log(`Результат: ${result}`);
        break;
    case "*":
        result = num1 * num2;
        console.log(`Результат: ${result}`);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Помилка: ділення на нуль!");
        } else {
            result = num1 / num2;
            console.log(`Результат: ${result}`);
        }
        break;
    default:
        console.log("Невідомий оператор.");
}
