// Start button and question timer
// Successive questions
// Wrong answer penalty
// Game over condition
// Scoreboard functionality

var checkResults = document.querySelector(".high-scores")
var inputField = document.querySelector(".input-field")
var leaderBoard = document.querySelector(".score-board")
var returnButton = document.querySelector(".return")
var quizContent = document.querySelector(".quiz-content")
var startButton = document.querySelector(".start-button")
var submitButton = document.querySelector(".submit")
var timerFull = document.querySelector(".timer-full")
var timerText = document.querySelector(".timer")
var timerTime = 30

//by clicking the Check Leaderboard button, causes the pages main content to be replaced
checkResults.addEventListener("click", function(event) {
    leaderBoard.style.display = "block"
    quizContent.style.display = "none"
    checkResults.style.display = "none"
    timerFull.style.display = "none"
})

//clicking the Go Back button, causes the page's main content to return
returnButton.addEventListener("click", function(event) {
    leaderBoard.style.display = "none"
    quizContent.style.display = "block"
    checkResults.style.display = "block"
    timerFull.style.display = "inline-flex"
})

//clicking the start button causes the timer to start
startButton.addEventListener("click", function(event) {
    var timerGo = setInterval(function() {
        timerTime--;
        timerText.textContent = timerTime;
        startButton.style.display = "none"
      
        if(timerTime === 0) {
            clearInterval(timerGo);
            inputField.style.display = "block"
            leaderBoard.style.display = "none"
            quizContent.style.display = "none"
            checkResults.style.display = "none"
            timerFull.style.display = "none"
            timerTime = 30
            startButton.style.display = ""
        }
    }, 100);
})

//when submit is click on the imput page, it sends you to the leaderboard
submitButton.addEventListener("click", function(event) {
    inputField.style.display = "none"
    leaderBoard.style.display = "block"
    quizContent.style.display = "none"
    checkResults.style.display = "none"
    timerFull.style.display = "none"
})