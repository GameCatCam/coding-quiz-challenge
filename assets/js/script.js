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
var listText = document.querySelector(".quiz-answers")

var areyouWinning = false
var timerTime = 30

var qandA = [
    {q: "Who are you?", a: "Me"},
    {q: "Guess what?", a: "Chicken Butt"},
    {q: "Who's Joe?", a: "Joe Mama"}
]

// This function resets the page to base after the game has run it's course
function gameReset() {
    listText.style.display = ""
    inputField.style.display = "block"
    leaderBoard.style.display = "none"
    quizContent.style.display = "none"
    checkResults.style.display = "none"
    timerFull.style.display = "none"
    timerTime = 30
    startButton.style.display = ""
    document.body.children[1].children[0].children[0].children[0].textContent = "Quiz Challenge #42"
    document.body.children[1].children[0].children[0].children[1].textContent = "We understand the last couple have been pretty rough, but we promise no casualties will become of anyone who partakes in this exam... Hopefully."
    checkResults.disabled = false
}

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
      
        //Checks win condition
        if (timerTime >= 0) {
            if (areyouWinning && timerTime > 0) {
                clearInterval(timerGo);
                //placeholder winning function
                gameReset()
            }
        }
        //Time's up resolution
        if(timerTime === 0) {
            clearInterval(timerGo);
            gameReset()
        }
    }, 1000);

    var i = qandA[Math.floor(Math.random() * qandA.length)]

    listText.style.display = "block"
    startButton.style.display = "none"
    checkResults.disabled = true
    document.body.children[1].children[0].children[0].children[0].textContent = i.q
    document.body.children[1].children[0].children[0].children[1].textContent = ""
    listText.children[0].children[0].textContent = i.a
})

//when submit is click on the imput page, it sends you to the leaderboard
submitButton.addEventListener("click", function(event) {
    inputField.style.display = "none"
    leaderBoard.style.display = "block"
    quizContent.style.display = "none"
    checkResults.style.display = "none"
    timerFull.style.display = "none"
})