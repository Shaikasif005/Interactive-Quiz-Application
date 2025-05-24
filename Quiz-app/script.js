const questions = [
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "Which planet has the largest number of moons?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "Which planet is famous for its prominent rings?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "Which planet is called Earth’s twin because of its similar size?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Uranus", correct: false }
    ]
  },
  {
    question: "Which is the largest planet in the solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "Which planet has the fastest orbit around the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Which planet is tilted on its side, giving it extreme seasons?",
    answers: [
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which planet is farthest from the Sun?",
    answers: [
      { text: "Neptune", correct: true },
      { text: "Uranus", correct: false },
      { text: "Pluto", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which planet has the Great Red Spot, a giant storm?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: false },
      { text: "Neptune", correct: false }
    ]
  }
];


const questionBox = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  resultBox.classList.add("hide");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionBox.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionBox.parentElement.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreText.innerText = `${score} / ${questions.length}`;
}

startQuiz();
