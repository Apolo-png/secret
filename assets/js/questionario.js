const questions = [
  {
    question: "Quando foi a primeira vez que nós conversamos?",
    answers: [
      {
        text: "Trabalho de DD sobre jogos",
        correct: false,
      },
      { text: "Aula da emilia de FI", correct: true },
      { text: "Pela Gio falando com você perto de mim", correct: false },
      { text: "Quando eu fiquei voltando de onibus pra minha vó", correct: false },
    ],
    tip: "No meio de março do ano passado, não tinha placa de video suficiente pra todos na aula da Emilia então ela formou grupinhos pra gente analisar e fazer o site sobre placa mãe dps <br><br> (A primeira vez que conversamos no whatsapp tambem foi sobre esse trabalho)",
  },
  {
    question: "Oque nós fizemos na nossa primeira call?",
    answers: [
      { text: "Trabalho de PW2 artista musical", correct: false },
      { text: "Trabalho de DD sobre jogos", correct: false },
      { text: "Trabalho de arte gótica", correct: true },
      { text: "Trabalho de matemática do Sergio", correct: false },
    ],
    tip: "Você tava falando com o Miguel enquanto a gente ia pro intervalo e eu pedi pra entrar na call pro trabalho da Marines no dia seguinte",
  },
  {
    question: "Oque nós fizemos depois do trabalho na nossa primeira call?",
    answers: [
      { text: "Questionario de BDSM", correct: true },
      { text: "Tier list de sabor de camisinha", correct: false },
      { text: "Vimos o Putz Raluca", correct: false },
      { text: "Ouvimos BONDA", correct: false },
    ],
    tip: "O Miguel não ficou nada feliz qnd eu te mandei o link do questionario de BDSM",
  },
  {
    question: "Quando eu percebi que gostava de você?",
    answers: [
      { text: "Quando você me deu um beijo antes de ir pro terminal", correct: false },
      { text: "Em uma call de fofocas e assuntos da vida", correct: true },
      { text: "Quando ficamos até 2 da manhã em call conversando", correct: false },
      { text: "Quando jogamos juntos pela primeira vez", correct: false },
    ],
    tip: "Em um sabado antes da gente falar que se gostava, passamos o dia conversando sobre a sala e problemas da vida, e foi muito bom <3",
  },
  {
    question: "Qual apelido eu te chamava antes de nós começarmos a namorar?",
    answers: [
      { text: "Princesa", correct: false },
      { text: "Gostosa", correct: false },
      { text: "Vovii", correct: false },
      { text: "Gatinha", correct: true },
    ],
    tip: "Gatinha >:3",
  },
  {
    question: "Qual o primeiro jogo que nós jogamos",
    answers: [
      { text: "Stardew Valley", correct: true },
      { text: "Kingdom Two Crowns", correct: false },
      { text: "Cult of the Lamb (transmtindo tela)", correct: false },
      { text: "Terraria", correct: false },
    ],
    tip: "Nós começamos a jogar Stardew Valley antes mesmo de namorar, dia 20/05/23",
  },
  {
    question: "Qual foi nossa primeira metadinha?",
    answers: [
      {
        text: 'A: <img src="https://media.discordapp.net/attachments/546030590764253195/1276157741139886080/image.png?ex=66c88203&is=66c73083&hm=7a870ad48974ecc0c2b328bedb851a63dbc4944f5e3858198a3dbfc6405d4691&=&format=webp&quality=lossless" alt=""/>',
        correct: false,
      },
      {
        text: 'B: <img src="https://media.discordapp.net/attachments/546030590764253195/1276157740233920596/image.png?ex=66c88203&is=66c73083&hm=4df664dc5652b77c86fb243b52fbcb587d2141c2b55d54fe103da58659c99515&=&format=webp&quality=lossless" alt=""/>',
        correct: false,
      },
      {
        text: 'C: <img src="https://media.discordapp.net/attachments/546030590764253195/1276157740737101910/image.png?ex=66c88203&is=66c73083&hm=d864e8ca27b7ac895daa5ab2d8ad3ab29678809c54e4df0bd3eb9c84fe6a67e7&=&format=webp&quality=lossless" alt=""/>',
        correct: false,
      },
      {
        text: 'D: <img src="https://media.discordapp.net/attachments/546030590764253195/1276157739823005757/image.png?ex=66c88203&is=66c73083&hm=608f1eac978216a919d673e8cabcae2450a3fdca2594a8545210af57a4ceb365&=&format=webp&quality=lossless" alt="" data-correct="true"/>',
        correct: true,
      },
    ],
    tip: 'Ordem: D, A, B, nós nunca usamos a C <img src="https://media.discordapp.net/attachments/546030590764253195/1276155650740715562/image.png?ex=66c88010&is=66c72e90&hm=1d7d4529ee196ff4e71c10ab750f8dddea8177a9539137b003d91f56bdee5360&=&format=webp&quality=lossless" alt=""/>',
  },
  {
    question: "Qual dia da semana a gente começou a ficar?",
    answers: [
      { text: "Segunda-Feira", correct: false },
      { text: "Terça-Feira", correct: false },
      { text: "Quarta-Feira", correct: false },
      { text: "Quinta-Feira", correct: true },
      { text: "Sexta-Feira", correct: false },
    ],
    tip: "Era uma quinta feira quando ficamos na escola até tarde e eu perguntei para você",
  },
  {
    question: "Oque eu mais gosto em você?",
    answers: [
      { text: "Seu corpo", correct: true },
      { text: "Seu cabelo", correct: true },
      { text: "Como voce me trata", correct: true },
      { text: "Seu estilo", correct: true },
      { text: "Seus gostos", correct: true },
      { text: "Sua personalidade", correct: true },
      { text: "Aquilo >:3", correct: true },
    ],
    tip: '<br> <img src="https://media.discordapp.net/attachments/1103458590951493674/1114745966831095828/SPOILER_heart-locket.gif?ex=66c7f715&is=66c6a595&hm=de517667395308e6bef046646e90d793bc65caa1aa8fde933fe43fb6327e70a2&=" alt=""/>',
  },
  {
    question: "Você me ama?",
    answers: [
      { text: "Sim", correct: true },
      { text: "Sim <3", correct: true },
      { text: "Sim :3", correct: true },
      { text: "Sim :>", correct: true },
      { text: "Sim 😏", correct: true },
      { text: "Sim 😽", correct: true },
      { text: "Sim 😳", correct: true },
      { text: "Não :( 😢😢😫😫😭😭(adeus)", correct: false },
    ],
    tip: ";3",
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
  const isCorrect = selectedBtn.dataset.correct == "true";
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
  console.log(score);
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
  if (score >= 4 && score < 7) {
    questionElement.innerHTML = `Poderia ter sido melhor ${score}/${questions.length} <br> <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba3dfc8-7931-492c-9e2c-8a3bd7d06505/dffwdml-70f21027-52a5-4981-b549-99d503024963.jpg/v1/fill/w_1280,h_854,q_75,strp/big_boobs_in_a_box_by_thestrongfish_dffwdml-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvYWJhM2RmYzgtNzkzMS00OTJjLTllMmMtOGEzYmQ3ZDA2NTA1XC9kZmZ3ZG1sLTcwZjIxMDI3LTUyYTUtNDk4MS1iNTQ5LTk5ZDUwMzAyNDk2My5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.93G187MJ1IVsQNgtDH5TxG1164V-ngdrsVyOsuA_tyc" alt=""/>`;
    playMusic("awn");
  } else if (score >= 7) {
    questionElement.innerHTML = `Você realmente me ama ${score}/${questions.length}! <br> <img src="https://preview.redd.it/onbljrvsixb81.png?width=640&crop=smart&auto=webp&s=d0a3eda41bd6236a8eb2305024a9fea006f94ad5" alt=""/>`;
    playMusic("yay");
  } else {
    questionElement.innerHTML = `Tá de castigo princesa ${score}/${questions.length}. <br> <img src="https://media.tenor.com/NgxjSWAnWnAAAAAM/annoyed-cat-cat-meme.gif" alt=""/>`;
    playMusic("bua");
  }
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
