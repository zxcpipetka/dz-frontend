let textField1 = "Hello";
let textField2 = "World";

if (textField1 !== "" && textField2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

let num1 = 7;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

let text = "Я вивчаю JavaScript!";
if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}
let number = 15;
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

let name = "Ivan";
let email = "ivan@example.com";
let password = "secret1";

let isNameValid = name.length >= 3;
let atIndex = email.indexOf("@");
let dotIndex = email.indexOf(".", atIndex);
let isEmailValid = atIndex > 0 && dotIndex > atIndex + 1;
let isPasswordValid = password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}