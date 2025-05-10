// Збереження виборів гравця
let playerChoices = {
    magicType: null,
    darkPath: false,
    backgroundColor: localStorage.getItem('backgroundColor') || 'purple'
};

// Функція для збереження вибору
function saveChoice(key, value) {
    playerChoices[key] = value;
    localStorage.setItem('playerChoices', JSON.stringify(playerChoices));
}

// Збереження кольору фону
function changeBackground(color) {
    document.body.style.background = color;
    localStorage.setItem('backgroundColor', color);
}

// Застосування фону при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
    playerChoices = JSON.parse(localStorage.getItem('playerChoices')) || playerChoices;
    document.body.style.background = playerChoices.backgroundColor;
});

