const quizData = [
    { question: "1) What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter" },
	{ question: "2) What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "Rome"], answer: "Paris" },
    { question: "3) Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "4) What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "5) Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
    { question: "6) What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], answer: "Tokyo" },
    { question: "7) Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "8) What is the chemical symbol for Gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
    { question: "9) How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "10) What is the smallest country in the world?", options: ["Monaco", "Vatican City", "Malta", "Liechtenstein"], answer: "Vatican City" },
    { question: "11) Which is the largest desert?", options: ["Sahara", "Arctic", "Antarctica", "Gobi"], answer: "Antarctica" }
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
