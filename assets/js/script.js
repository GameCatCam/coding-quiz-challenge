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
var quizText = document.querySelector(".quiz-main")
var scoreInput = document.querySelector(".score-input")

var areyouWinning = false
var timerTime = 30
var winCount = 0
var score = 0

var qandA = [
    {q: "Who are you?", a: "Me"},
    {q: "Guess what?", a: "Chicken Butt"},
    {q: "Who's Joe?", a: "Joe Mama"},
    {q: "Pick the Answer", a: "Answer"}
]

var answerSlots = [
    document.querySelector(".answer-one"),
    document.querySelector(".answer-two"),
    document.querySelector(".answer-three"),
    document.querySelector(".answer-four")
]

var fakeAnswers = [
    "wrong answer",
    "not this one",
    "pick something else",
    "maybe the above one",
    "try another answer",
    "good luck",
    "where am I?",
    "placeholder text",
]

var shuffledqandA = qandA.sort(() => Math.random() - 0.5);
var shuffledSlots = answerSlots.sort(() => Math.random() - 0.5);
var shuffledAnswers = fakeAnswers.sort(() => Math.random() - 0.5)

// This function resets the page to base after the game has run it's course
function gameReset() {
    console.log(shuffledqandA)
    console.log(qandA)

    timerTime = 30
    winCount = 0
    listText.style.display = ""
    inputField.style.display = "block"
    leaderBoard.style.display = "none"
    quizContent.style.display = "none"
    checkResults.style.display = "none"
    timerFull.style.display = "none"
    startButton.style.display = ""
    document.body.children[1].children[0].children[0].children[0].textContent = "Quiz Challenge #42"
    document.body.children[1].children[0].children[0].children[1].textContent = "We understand the last couple have been pretty rough, but we promise no casualties will become of anyone who partakes in this exam... Hopefully."
    checkResults.disabled = false
    shuffledqandA = qandA.sort(() => Math.random() - 0.5);

    scoreInput.textContent = "Your score was " + score + "!"
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

//when submit is click on the input page, it sends you to the leaderboard
submitButton.addEventListener("click", function(event) {
    inputField.style.display = "none"
    leaderBoard.style.display = "block"
    quizContent.style.display = "none"
    checkResults.style.display = "none"
    timerFull.style.display = "none"
})

//clicking the start button causes the timer to start
startButton.addEventListener("click", function(event) {
    var timerGo = setInterval(function() {
        timerTime--;
        timerText.textContent = timerTime;
      
        //Checks win condition
        if (timerTime >= 0) {
            if (winCount === 4 && timerTime > 0) {
                score = timerTime * winCount
                clearInterval(timerGo);
                gameReset()
            }
        }
        //Time's up resolution
        if(timerTime <= 0) {
            clearInterval(timerGo);
            gameReset()
        }
    }, 1000);

    playGame()
})

//This function replaces the old questions and answers with the next ones in the sequence
function playGame() {
    if (winCount === 4) {
        console.log(winCount)
        console.log(timerTime)
        return;
    }

    startButton.style.display = "none"
    listText.style.display = "block"

    shuffledSlots = answerSlots.sort(() => Math.random() - 0.5);
    shuffledAnswers = fakeAnswers.sort(() => Math.random() - 0.5)

    for (j = 0; j < shuffledSlots.length; j++) {
        shuffledSlots[j].textContent = "Filler"
    }

    quizText.children[0].textContent = shuffledqandA[0].q
    quizText.children[1].textContent = ""
    shuffledSlots[0].textContent = shuffledqandA[0].a

    for (i = 0; i < answerSlots.length; i++) {
        if (shuffledSlots[i].textContent === "Filler") {
            shuffledSlots[i].textContent = shuffledAnswers[i]
        }
    }
}

//This event progresses the game when the correct options are clicked and provides a penalty for wrong answers
listText.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
       if (quizText.children[0].textContent === "Who are you?") {
            if (event.target.textContent === "Me") {
                console.log(shuffledqandA)
                console.log(qandA)

                winCount += 1
                shuffledqandA.shift()
                playGame()
            } else {
                timerTime -= 5
            }
        } else if (quizText.children[0].textContent === "Guess what?") {
            if (event.target.textContent === "Chicken Butt") {
                console.log(shuffledqandA)
                console.log(qandA)

                winCount += 1
                shuffledqandA.shift()
                playGame()
            } else {
                timerTime -= 5
            }
        } else if (quizText.children[0].textContent === "Who's Joe?") {
            if (event.target.textContent === "Joe Mama") {
                console.log(shuffledqandA)
                console.log(qandA)

                winCount += 1
                shuffledqandA.shift()
                playGame()
            } else {
                timerTime -= 5
            }
        } else if (quizText.children[0].textContent === "Pick the Answer") {
            if (event.target.textContent === "Answer") {
                console.log(shuffledqandA)
                console.log(qandA)

                winCount += 1
                shuffledqandA.shift()
                playGame()
            } else {
                timerTime -= 5
            }
        }
    }
})