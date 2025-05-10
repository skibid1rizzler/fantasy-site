// Об'єкт для збереження виборів гравця
let playerChoices = {
    magicType: null,
    darkPath: false,
    backgroundColor: localStorage.getItem('backgroundColor') || '#4a3d8f'
};

// Функція для збереження вибору
function saveChoice(key, value) {
    playerChoices[key] = value;
    localStorage.setItem('playerChoices', JSON.stringify(playerChoices));
}

// Функція для зміни фону
function changeBackground(color) {
    playerChoices.backgroundColor = color;
    document.body.style.background = color;
    localStorage.setItem('backgroundColor', color);
}

// Застосування збереженого фону при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
    playerChoices = JSON.parse(localStorage.getItem('playerChoices')) || playerChoices;
    document.body.style.background = playerChoices.backgroundColor;
});
