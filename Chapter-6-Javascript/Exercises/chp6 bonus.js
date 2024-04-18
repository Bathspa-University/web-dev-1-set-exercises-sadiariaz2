// Get DOM elements
const colorDisplay = document.getElementById('colorDisplay');
const message = document.getElementById('message');
const optionsContainer = document.getElementById('options');
const scoreValue = document.getElementById('scoreValue');
const resetButton = document.getElementById('resetButton');

let score = 0;
let lives = 3;

// Function to generate random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to generate random options
function generateOptions() {
    const correctColor = generateRandomColor();
    colorDisplay.textContent = correctColor;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create options
    const options = [correctColor];
    while (options.length < 4) {
        const color = generateRandomColor();
        if (!options.includes(color)) {
            options.push(color);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Display options
    options.forEach(color => {
        const option = document.createElement('div');
        option.classList.add('option');
        option.style.backgroundColor = color;
        option.addEventListener('click', () => checkAnswer(color, correctColor));
        optionsContainer.appendChild(option);
    });
}

// Function to check user's answer
function checkAnswer(chosenColor, correctColor) {
    if (chosenColor === correctColor) {
        score++;
        message.textContent = 'Correct!';
    } else {
        lives--;
        if (lives === 0) {
            endGame();
            return;
        }
        message.textContent = 'Try again!';
    }
    scoreValue.textContent = score;
    generateOptions();
}

// Function to end the game
function endGame() {
    message.textContent = 'Game Over!';
    optionsContainer.innerHTML = '<button id="playAgainButton">Play Again</button>';
    const playAgainButton = document.getElementById('playAgainButton');
    playAgainButton.addEventListener('click', resetGame);
}

// Function to reset the game
function resetGame() {
    score = 0;
    lives = 3;
    scoreValue.textContent = score;
    message.textContent = '';
    generateOptions();
}

// Event listener for reset button
resetButton.addEventListener('click', resetGame);

// Initial game setup
resetGame();
