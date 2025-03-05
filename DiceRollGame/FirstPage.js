
//get player name display id 
const player1NameInput = document.getElementById("player1Name");
const player2NameInput = document.getElementById("player2Name");

//get all the buttons
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetGame");
const rollDiceButton = document.getElementById("rollDice");
const saveScoreButton = document.getElementById("saveScore");


const player1Current = document.getElementById("player1Current");
const player2Current = document.getElementById("player2Current");
const player1Saved = document.getElementById("player1Saved");
const player2Saved = document.getElementById("player2Saved");

const player1Dice = document.querySelector("#First_player .img1");
const player2Dice = document.querySelector("#Second_player .img1");

const player1Heading = document.querySelector("#First_player h1");
const player2Heading = document.querySelector("#Second_player h1");

let currentPlayer = 1;
let currentScores = [0, 0];
let savedScores = [0, 0];

    function switchPlayer() {
        currentScores[currentPlayer - 1] = 0;
        updateScores();
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }

    function updateScores() {
        player1Current.textContent = currentScores[0];
        player2Current.textContent = currentScores[1];
        player1Saved.textContent = savedScores[0];
        player2Saved.textContent = savedScores[1];
    }

    function rollDice() {
        if (rollDiceButton.disabled) return;

        const diceImg = currentPlayer === 1 ? player1Dice : player2Dice;
        diceImg.src = "diceroll.gif"; // Show rolling animation

        setTimeout(() => {
            const diceValue = Math.floor(Math.random() * 6) + 1;
            diceImg.src = `dice${diceValue}.png`; // Display rolled dice

            if (diceValue === 1) {
                switchPlayer();
            } else {
                currentScores[currentPlayer - 1] += diceValue;
            }
            updateScores();
        }, 1000); // Delay to show GIF
    }

    function saveScore() {
        if (saveScoreButton.disabled) {
            alert("Please enter both player names.");
            return;
        }

        savedScores[currentPlayer - 1] += currentScores[currentPlayer - 1];
        currentScores[currentPlayer - 1] = 0;
        updateScores();

        if (savedScores[currentPlayer - 1] >= 100) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
        } else {
            switchPlayer();
        }
    }

    function resetGame() {
        currentScores = [0, 0];
        savedScores = [0, 0];
        currentPlayer = 1;
        updateScores();
        player1Dice.src = "dice6.png";
        player2Dice.src = "dice6.png";

        player1NameInput.value = "";
        player2NameInput.value = "";
        player1Heading.textContent = "Player 1";
        player2Heading.textContent = "Player 2";


        rollDiceButton.disabled = true;
        saveScoreButton.disabled = true;
    }

    startButton.addEventListener("click", () => {
        const player1Name = player1NameInput.value.trim();
        const player2Name = player2NameInput.value.trim();

        if (player1Name && player2Name) {
            player1Heading.textContent = player1Name;
            player2Heading.textContent = player2Name;

            rollDiceButton.disabled = false;
            saveScoreButton.disabled = false;

            currentScores = [0, 0];
        savedScores = [0, 0];
        currentPlayer = 1;
        updateScores();
        player1Dice.src = "dice6.png";
        player2Dice.src = "dice6.png";

        } else {
            alert("Please enter both player names.");
        }
    });

    resetButton.addEventListener("click", resetGame);
    rollDiceButton.addEventListener("click", rollDice);
    saveScoreButton.addEventListener("click", saveScore);

    rollDiceButton.disabled = true;
    saveScoreButton.disabled = true;
