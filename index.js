const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")

$startGameButton.addEventListener("click", startGame)

let currentQuestionIndex = 0

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }
}


const questions = [
    {
        question: "Qual o objetivo do xadrez?",
        answers: [
            { text: "Comer o Rei do adversário", correct: false },
            { text: "Comer todas as peças do adversário", correct: false },
            { text: "Dar Xeque-Mate", correct: true },
            { text: "Chegar com o peão do outro lado do tabuleiro", correct: false },
        ]
    },
    {
        question: "Qual o objetivo do xadrez?",
        answers: [
            { text: "Comer o Rei do adversário", correct: false },
            { text: "Comer todas as peças do adversário", correct: false },
            { text: "Dar Xeque-Mate", correct: true },
            { text: "Chegar com o peão do outro lado do tabuleiro", correct: false },
        ]
    }
]