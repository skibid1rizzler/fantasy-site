let playerChoices = JSON.parse(localStorage.getItem('playerChoices')) || {
    magicType: null,
    darkPath: false,
    backgroundColor: localStorage.getItem('backgroundColor') || 'purple'
};

function handleChoice(event, key, value) {
    event.preventDefault(); // Запобігає негайному переходу
    playerChoices[key] = value;
    localStorage.setItem('playerChoices', JSON.stringify(playerChoices));
    setTimeout(() => window.location.href = event.target.href, 200); // Затримка для збереження
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.background = playerChoices.backgroundColor;
});
