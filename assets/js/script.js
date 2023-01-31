//structuring the questions to be included in the quiz
const questions = [
   {
    question: "What is JavaScript?",
    a: "A scripting language used to make a website interactive", 
    b: "A web hosting site", 
    c: "The name of the robot on Futurama", 
    d: "None of the above",
    correctAnswer: "a",
   },
   {
    question: "What do you call a JavaScript variable encased in quotation marks?",
    a: "A number", 
    b: "A statement", 
    c: "A string", 
    d: "A quote",
    correctAnswer: "c",
   }, 
   {
    question: "Which of the following is true about let and const?",
    a: "Let and const are globally scoped.", 
    b: "Let can be reassigned while const cannot.", 
    c: "Both of the above", 
    d: "None of the above", 
    correctAnswer: "b",
   }, 
   {
    question: "What is an array?",
    a: "A square bracketed list of values separated by commas", 
    b: "A single variable that is used to store different elements", 
    c: "Both of the above", 
    d: "None of the above",
    correctAnswer: "c",
   },
   {
    question: "Which function is used to add an element to the end of an array and return the length of the array?", 
    a: "join()", 
    b: "pop()", 
    c: "push()", 
    d: "add()",
    correctAnswer: "c",
   },
   {
    question: "Which of the following is false about null?", 
    a: "It is an object that can be assigned to a variable as a representation of no value.", 
    b: "When used in arithmetic operations, null will be converted to zero behind the scenes.", 
    c: "When used in conditional logic, null will return as false.", 
    d: "Null is not considered a primitive value in JavaScript.",
    correctAnswer: "d",
   }
];

// variables to manuever the quiz questions via the homepage
const quiz = document.getElementById("quiz");
const answerEl = document.getElementById(".answer");
const questionEl = document.getElementById("question");
const textA = document.getElementById("textA");
const textB = document.getElementById("textB");
const textC = document.getElementById("textC");
const textD = document.getElementById("textD");
const submitButton = document.getElementById("submit");
const timer = document.getElementById("timer");
const score = document.getElementById("score");

let currentQuiz = 0;
let currentScore = 0;
let timeLeft = 60;

// var startBtn = document.getElementById("start-button")
// var infoBox = document.getElementById("info-box")
// var questionBox = document.getElementById("questionBox")
// var questionIndex = 0

//function to initiate the quiz
function startQuiz() {
    quiz.style.display = "block";
    document.getElementById("homepage").classList.toggle("hidden");
    countdown();
    loadQuiz();
}

//function to load questions
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    textA.innerText = currentQuizData.a;
    textB.innerText = currentQuizData.b;
    textC.innerText = currentQuizData.c;
    textD.innerText = currentQuizData.d;

    deselectAnswers();
    console.log("test");
}

//function to deselect answers after each question
function deselectAnswers() {
    answerEl.forEach((answerEl) => (answerEl.checked = false));
}

//function to check selected answers
function getSelected() {
    let answerEl;
    answerEl.forEach((answerEls) => {
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    });

    return answer;
}

//function for push capability of submit button
function submitAnswer() {
    let answerEl = document.getElementsByName("answer");
    let answer;
    console.log(answerEl);

    for (let i = 0; i < answerEl.length; i++) {
        if (answerEl[i].checked) {
            answer = answerEl[i].getAttribute("id");
        }
    }

    if (answer === quizData[currentQuiz].correct) {
        scoreIncrease();
    } else {
        scoreDecrease();
    }
    currentQuiz++;
    loadQuiz();
    console.log(currentScore);
}

//timer function
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            endQuiz();
        } else {
            timer.textContent = timeLeft;
        }
    }, 1000);
}

//score increase for correctly answered question

startBtn.addEventListener("click", function(){
    infoBox.style.display = "none"
    questionBox.style.display = "block"
    questionBox.textContent = questions[0].question
});

function time() {
    timeRemaining = timeRemaining -1;
    timerEl.textContent = timeRemaining;
    if (timeRemaining <=0) {
        clearInterval(timerID); 
        timerEl.textContent = 0;
        return;
    }
} 

