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
const answer = document.getElementById(".answer");
const question = document.getElementById("question");
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

