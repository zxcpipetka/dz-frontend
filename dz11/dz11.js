const bankAccount = {
    ownerName: "Ivan Ivanov",
    accountNumber: "UA1234567890",
    balance: 1000,
    deposit() {
        if (confirm("Бажаєте поповнити рахунок?")) {
            const amount = parseFloat(prompt("Введіть суму для поповнення:"));
            if (!isNaN(amount) && amount > 0) {
                this.balance += amount;
                alert(`Рахунок поповнено. Залишок: ${this.balance} грн.`);
            } else {
                alert("Некоректна сума.");
            }
        }
    },
    withdraw() {
        if (confirm("Бажаєте зняти готівку?")) {
            const amount = parseFloat(prompt("Введіть суму для зняття:"));
            if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                alert(`Готівку знято. Залишок: ${this.balance} грн.`);
            } else {
                alert("Некоректна сума або недостатньо коштів.");
            }
        }
    }
};

// bankAccount.deposit();
// bankAccount.withdraw();

const weather = {
    temperature: 0,
    humidity: 60,
    windSpeed: 10,
    isBelowZero() {
        return this.temperature < 0;
    }
};

weather.temperature = parseFloat(prompt("Введіть температуру повітря:"));
if (weather.isBelowZero()) {
    alert("температура нижче 0 градусів Цельсія");
} else {
    alert("температура вище або рівна 0 градусів Цельсія");
}

const user = {
    name: "Oleh",
    email: "oleh@example.com",
    password: "12345",
    login() {
        const inputEmail = prompt("Введіть email:");
        const inputPassword = prompt("Введіть пароль:");
        if (inputEmail === this.email && inputPassword === this.password) {
            alert("Вхід успішний!");
        } else {
            alert("Невірний email або пароль.");
        }
    }
};

// user.login();

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighRated() {
        return this.rating > 8;
    }
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Високий рейтинг:", movie.isHighRated());