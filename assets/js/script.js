var questions = [
    {
    question: "1. What is JavaScript",
    answerA: "a) A scripting language used to make a website interactive",
    answerB: "b) A web hosting site",
    answerC: "c) The name of the robot on Futurama",
    answerD: "d) None of the above",
    correctAnswer: "a) A scripting language to make a website interactive"
  },
  {
    question: "2. What do you call a JavaScript variable encased in quotation marks?",
    answerA: "a) A number",
    answerB: "b) A statement",
    answerC: "c) A string",
    answerD: "d) A quote",
    correctAnswer: "c) A string"
  }, 
  {
    question: "3. Which of the following is true about let and const?",
    answerA: "a) Let and const are globally scoped.",
    answerB: "b) Let can be reassigned while const cannot.",
    answerC: "c) Both of the above",
    answerD: "d) None of the above", 
    correctAnswer: "b) Let can be reassigned while const cannot."
  }, 
  {
    question: "4. What is an array?",
    answerA: "a) A square bracketed list of values separated by commas",
    answerB: "b) A single variable that is used to store different elements",
    answerC: "c) Both of the above",
    answerD: "d) None of the above",
    correctAnswer: "c) Both of the above"
  },
  {
    question: "5. Which function is used to add an element to the end of an array and return the length of the array?", 
    answerA: "a) join()",
    answerB: "b) pop()",
    answerC: "c) push()",
    answerD: "d) add()",
    correctAnswer: "c) push()"
},
{
    question: "6. Which of the following is false about null?", 
    answerA: "a) It is an object that can be assigned to a variable as a representation of no value.",
    answerB: "b) When used in arithmetic operations, null will be converted to zero behind the scenes.",
    answerC: "c) When used in conditional logic, null will return as false.",
    answerD: "d) Null is not considered a primitive value in JavaScript.",
    correctAnswer: "d) Nulls is not considered a primitive value in JavaScript."
}
]

var startBtn = document.getElementById("start-button")
var infoBox = document.getElementById("info-box")
var questionBox = document.getElementById("questionBox")

startBtn.addEventListener("click", function(){
    infoBox.style.display = "none"
    questionBox.style.display = "block"
    questionBox.textContent = questions[0].question
})