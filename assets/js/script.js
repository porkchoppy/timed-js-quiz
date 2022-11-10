//structuring the questions to be included in the quiz
var questions = [
   {
    question: "What is JavaScript?",
    answers: ["A scripting language used to make a website interactive", "A web hosting site", "The name of the robot on Futurama", "None of the above"],
    correctAnswer: 0
   },
   {
    question: "What do you call a JavaScript variable encased in quotation marks?",
    answers: ["A number", "A statement", "A string", "A quote"],
    correctAnswer: 2
   }, 
   {
    question: "Which of the following is true about let and const?",
    answers: ["Let and const are globally scoped.", "Let can be reassigned while const cannot.", "Both of the above", "None of the above"], 
    correctAnswer: 1
   }, 
   {
    question: "What is an array?",
    answers: ["A square bracketed list of values separated by commas", "A single variable that is used to store different elements", "Both of the above", "None of the above"],
    correctAnswer: 2
   },
   {
    question: "Which function is used to add an element to the end of an array and return the length of the array?", 
    answers: ["join()", "pop()", "push()", "add()"],
    correctAnswer: 2
   },
   {
    question: "Which of the following is false about null?", 
    answers: ["It is an object that can be assigned to a variable as a representation of no value.", "When used in arithmetic operations, null will be converted to zero behind the scenes.", "When used in conditional logic, null will return as false.", "Null is not considered a primitive value in JavaScript."],
    correctAnswer: 3
   }
];

var startBtn = document.getElementById("start-button")
var infoBox = document.getElementById("info-box")
var questionBox = document.getElementById("questionBox")
var questionIndex = 0

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

