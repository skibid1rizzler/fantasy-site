let playerChoices = JSON.parse(localStorage.getItem('playerChoices')) || {};

function handleChoice(event, key, value) {
    event.preventDefault();
    playerChoices[key] = value;
    localStorage.setItem('playerChoices', JSON.stringify(playerChoices));
    setTimeout(() => window.location.href = event.target.href, 200);
}
