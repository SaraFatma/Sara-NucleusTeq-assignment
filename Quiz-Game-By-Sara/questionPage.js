
// Get all id elements
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("answer-options");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const nextButton = document.getElementById("nextButton");
const correctAnswerEl = document.getElementById("correct-answer");

// Define variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;

// As the page loads we need to fetch questions
document.addEventListener("DOMContentLoaded", () => {
    fetchQuestions();

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            localStorage.setItem("score", score);
            window.location.href = "endPage.html";
        }
    });
});

// Fetch question

async function fetchQuestions() {
    const category = localStorage.getItem("category") || "9";
    const difficulty = localStorage.getItem("difficulty") || "easy";

    // Set number of questions based on difficulty
    let questionCount = 10; // Default for easy
    if (difficulty === "medium") questionCount = 15;
    if (difficulty === "hard") questionCount = 20;

    const apiUrl = `https://opentdb.com/api.php?amount=${questionCount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error("No questions found. Try a different category or difficulty.");
        }

        // If the fetched questions are fewer than requested
        if (data.results.length < questionCount) {
           // console.warn(`Only ${data.results.length} questions available.`);
            console.warn("Insufficiant Questions Availabe in databases");
        }

        questions = data.results;
        startQuiz();
    } catch (error) {
        console.error("Error fetching questions:", error);
        questionEl.textContent = "Error loading questions. Please try again!..Sometimes this could be due to insufficiant Questions available , try easy level.";
    }
}

// start quiz
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreEl.textContent = "Score: 0";
    showQuestion();
}

function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(button, currentQuestion.correct_answer));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function resetState() {
    clearTimeout(timer);
    optionsContainer.innerHTML = "";
    correctAnswerEl.classList.add("hidden");
    nextButton.disabled = true;
}

function startTimer() {
    let timeLeft = 15;
    timerEl.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            revealAnswer();
            setTimeout(nextQuestion, 1000);
        }
    }, 1000);
}

function selectAnswer(selectedButton, correctAnswer) {
    const buttons = optionsContainer.querySelectorAll(".option");
    buttons.forEach(button => button.disabled = true);

    if (selectedButton.textContent === correctAnswer) {
        selectedButton.classList.add("correct");
        score++;
        scoreEl.textContent = `Score: ${score}`;
        correctAnswerEl.textContent = "Great!! Correct Answer!";
    } else {
        selectedButton.classList.add("wrong");
        correctAnswerEl.textContent = `Oops!! Wrong... Correct answer is: ${correctAnswer}`;
    }
    correctAnswerEl.classList.remove("hidden");
    nextButton.disabled = false;
}

function revealAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    correctAnswerEl.textContent = `Correct answer: ${currentQuestion.correct_answer}`;
    correctAnswerEl.classList.remove("hidden");

    const buttons = optionsContainer.querySelectorAll(".option");
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.correct_answer) {
            button.classList.add("correct");
        }
    });

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "endPage.html";
    }
}