let playerChoices = JSON.parse(localStorage.getItem('playerChoices')) || {
    magicType: null,
    backgroundColor: localStorage.getItem('backgroundColor') || 'purple'
};

function handleChoice(event, key, value) {
    event.preventDefault();
    playerChoices[key] = value;
    localStorage.setItem('playerChoices', JSON.stringify(playerChoices));
    setTimeout(() => window.location.href = event.target.href, 200);
}

function changeBackground(color) {
    document.body.style.background = color;
    localStorage.setItem('backgroundColor', color);
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.background = playerChoices.backgroundColor;
});
