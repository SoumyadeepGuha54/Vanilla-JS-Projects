const qna = [
  {
    question:
      "What is the time complexity of accessing an element in an array by index?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(1)", correct: true },
      { text: "O(n log n)", correct: false },
    ],
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question: "Which data structure follows LIFO?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Array", correct: false },
      { text: "Linked List", correct: false },
    ],
  },
  {
    question: "Which traversal gives sorted order in a BST?",
    answers: [
      { text: "Preorder", correct: false },
      { text: "Postorder", correct: false },
      { text: "Inorder", correct: true },
      { text: "Level order", correct: false },
    ],
  },
  {
    question: "Which sorting algorithm is stable?",
    answers: [
      { text: "Quick Sort", correct: false },
      { text: "Heap Sort", correct: false },
      { text: "Merge Sort", correct: true },
      { text: "Selection Sort", correct: false },
    ],
  },
];

questionElement = document.getElementById("question");
answerElements = document.getElementById("answers");
nextButton = document.getElementById("next");

let currentIndex = 0;
let score = 0;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQnA = qna[currentIndex];
  let questionNumber = currentIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQnA.question;

  currentQnA.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerElements.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerElements.firstChild) {
    answerElements.removeChild(answerElements.firstChild);
  }
}

function selectAnswer() {}

startQuiz();
