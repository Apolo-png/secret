const questions = [
  {
    question: "Quando foi a primeira vez que nós conversamos?",
    answers: [
      { text: "Aula da emilia de SE quando nao tinha placa de video suficiente", correct: true },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
  },
  {
    question: "Quando foi a primeira vez que nós conversamos?",
    answers: [
      { text: "Aula da emilia de SE quando nao tinha placa de video suficiente", correct: true },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
  },
  {
    question: "Quando foi a primeira vez que nós conversamos?",
    answers: [
      { text: "Aula da emilia de SE quando nao tinha placa de video suficiente", correct: true },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
  },
  {
    question: "Quando foi a primeira vez que nós conversamos?",
    answers: [
      { text: "Aula da emilia de SE quando nao tinha placa de video suficiente", correct: true },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
  },
];

const questionElement = document.getElementById("pergunta");
const answerButton = document.getElementById("respostas");
const nextButton = document.getElementById("btn-prox");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima Pergunta :3";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn-resposta");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("certo");
    score++;
  } else {
    selectedBtn.classList.add("errado");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("certo");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Pontuação: ${score}/${questions.length}!`;
  nextButton.innerHTML = "Tentar de novo";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
