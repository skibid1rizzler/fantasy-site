// Об'єкт для збереження виборів гравця
let playerChoices = {
    magicType: null,
    darkPath: false
};

// Функція для збереження вибору
function saveChoice(key, value) {
    playerChoices[key] = value;
    localStorage.setItem('playerChoices', JSON.stringify(playerChoices));
}

// Функція для отримання вибору
function getChoice(key) {
    const savedChoices = JSON.parse(localStorage.getItem('playerChoices')) || {};
    return savedChoices[key];
}

// Виклик функції при завантаженні сторінки, щоб зберігати прогрес
document.addEventListener("DOMContentLoaded", function () {
    playerChoices = JSON.parse(localStorage.getItem('playerChoices')) || {};
});
