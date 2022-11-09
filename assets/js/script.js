var questions = [
    {
    question: "1. What is JavaScript?",
    answers: ["A scripting language used to make a website interactive", "A web hosting site", "The name of the robot on Futurama", "None of the above"],
    correctAnswer: 0
  },
  {
    question: "2. What do you call a JavaScript variable encased in quotation marks?",
    answers: ["A number", "A statement", "A string", "A quote"],
    correctAnswer: 2
  }, 
  {
    question: "3. Which of the following is true about let and const?",
    answers: ["Let and const are globally scoped.", "Let can be reassigned while const cannot.", "Both of the above", "None of the above"], 
    correctAnswer: 1
  }, 
  {
    question: "4. What is an array?",
    answers: ["A square bracketed list of values separated by commas", "A single variable that is used to store different elements", "Both of the above", "None of the above"],
    correctAnswer: 2
  },
  {
    question: "5. Which function is used to add an element to the end of an array and return the length of the array?", 
    answers: ["join()", "pop()", "push()", "add()"],
    correctAnswer: 2
},
{
    question: "6. Which of the following is false about null?", 
    answers: ["a) It is an object that can be assigned to a variable as a representation of no value.", "b) When used in arithmetic operations, null will be converted to zero behind the scenes.", "c) When used in conditional logic, null will return as false.", "d) Null is not considered a primitive value in JavaScript."],
    correctAnswer: 3
}
]

var startBtn = document.getElementById("start-button")
var infoBox = document.getElementById("info-box")
var questionBox = document.getElementById("questionBox")
var questionIndex = 0

startBtn.addEventListener("click", function(){
    infoBox.style.display = "none"
    questionBox.style.display = "block"
    questionBox.textContent = questions[0].question
})
