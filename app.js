// player1 and player2 objects
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

// update scores
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}



// Player One Button
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

// Player Two Button
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

// Playing To select
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset();
})


// Reset Button
resetButton.addEventListener('click', reset)

// Reset function
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}