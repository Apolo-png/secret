const questions = [
  {
    question: "Quando foi a primeira vez que nós conversamos?",
    answers: [
      {
        text: "a",
        correct: false,
      },
      { text: "Aula da emilia de SE quando nao tinha placa de video suficiente", correct: true },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
    tip: "Te amoo",
  },
  {
    question: "Oque nós fizemos na nossa primeira call?",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
      { text: "d", correct: false },
    ],
    tip: "Te amoo 2",
  },
  {
    question: "Quando eu percebi que gostava de você?",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: true },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
    tip: "Te amoo 3",
  },
  {
    question: "Qual hobby eu gostaria que nos aprendessemos juntos?",
    answers: [
      { text: "a", correct: true },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
    tip: "Te amoo 4",
  },
  {
    question: "Oque eu mais gosto que você fale?",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: true },
    ],
    tip: "Te amoo 5",
  },
  {
    question: "Oque eu mais gosto que você fale?",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: true },
    ],
    tip: "Te amoo 5",
  },
];

const questionElement = document.getElementById("pergunta");
const answerButton = document.getElementById("respostas");
const tip = document.getElementById("explicacao");
const nextButton = document.getElementById("btn-prox");

let currentQuestionIndex = 0;
let score = 0;

Audio.prototype.stop = function () {
  this.pause();
  this.currentTime = 0;
};

function playMusic(songid) {
  let sound = document.getElementById(songid);
  sound.stop();
  sound.play();
}

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
  tip.innerHTML = "<strong>Resposta: </strong>" + currentQuestion.tip;
}

function resetState() {
  nextButton.style.display = "none";
  tip.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("certo");

    addCursor("cursorcerto", 750);
    playMusic("correct");
    score++;
  } else {
    addCursor("cursorerrado", 750);
    playMusic("explosion");
    selectedBtn.classList.add("errado");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("certo");
    }
    button.disabled = true;
  });
  tip.style.display = "block";
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Pontuação: ${score}/${questions.length}!`;
  nextButton.innerHTML = "Tentar de novo";
  nextButton.style.display = "block";
  document.getElementById("a").pause();
  sound.currentTime = 0;
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

function creatorCursor(x, y, classe) {
  const cursor = document.createElement("div");
  cursor.className = "cursor " + classe;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  return cursor;
}

function removeCursorFromDom(cursor, timing) {
  const timeout = setTimeout(() => {
    cursor.remove();
    clearTimeout(timeout);
  }, timing);
}

function addCursor(classe, timing) {
  const cursor = creatorCursor(event.pageX, event.pageY, classe);
  document.body.append(cursor);
  removeCursorFromDom(cursor, timing);
}

window.addEventListener("click", (event) => {
  addCursor("teste");
});
