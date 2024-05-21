const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    } )
}

function resetState() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
    const answerClicked = event.target
    
    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if(button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }
        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++

}

function finishGame() {
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect / totalQuestion)
    
    let message = ""
    switch (true) {
        case (performance>=90):
            message = "Excelente! :)"
            break
        case (performance>=70):
            message = "Muito bom! :)"
            break
        case (performance>=50):
            message = "Bom"
            break
        default:
            message = "Pode melhorar :("   
    }

    $questionsContainer.innerHTML =
    `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestion} questões!
            <span> Resultado: ${message} </span>
        </p>
        <button onClick=window.location.reload() class="button">
            Refazer teste
        </button>

    `


    

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
        question: "Quem é considerada a melhor jogadora de xadrez de todos os tempos?",
        answers: [
            { text: "Hou Yifan", correct: false },
            { text: "Nona Gaprindashvili", correct: false },
            { text: "Judit Polgar", correct: true },
            { text: "Maia Chiburdanidze", correct: false },
        ]
    },
    {
        question: "Qual peça se movimenta apenas em 'L' no xadrez?",
        answers: [
            { text: "Bispo", correct: false },
            { text: "Torre", correct: false },
            { text: "Cavalo", correct: true },
            { text: "Rainha", correct: false },
        ]
    },
    {
        question: "Quantas casas pode se mover a torre em uma linha reta?",
        answers: [
            { text: "Uma casa", correct: false },
            { text: "Duas casas", correct: false },
            { text: "Três casas", correct: false },
            { text: "Quantas casas estiverem livres", correct: true },
        ]
    },
    {
        question: "O que significa o termo 'en passant' no xadrez?",
        answers: [
            { text: "Capturar o peão adversário que avançou duas casas", correct: true },
            { text: "Trocar o peão por outra peça", correct: false },
            { text: "Trocar uma peça por outra", correct: false },
            { text: "Mover o rei e a torre ao mesmo tempo", correct: false },
        ]
    }
];
