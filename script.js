

var questions = [
    {
        title: "What is the process of finding errors and fixing them within a program",
        choices: ["Compliling", "Executing", "Debugging", "Scanning"],
        answer: "Debugging"
    },

    {
        title: "What does CSS stand for?",
        choices: ["Cascading Swing Sheets", "Colorful Style Sheets", "Creating Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        title: "What does DOM stand for?",
        choices: ["Document Object Model", "Document Object Mode", "Document Objective Model", "Direct Object Model"],
        answer: "Document Object Model"
    },

    {
        title: "What is the opposite of Global Scope?",
        choices: ["Location", "Local", "Locate", "Locational"],
        answer: "Local"
    },

    {
        title: "Which propoerty is not apart of the CSS Box Model?", 
        choices: ["Padding", "Width", "Border", "Space"], 
        answer: "Space"
    }

];

var score = 0;
var questionIndex = 0;

var timeNow = document.querySelector("#timeNow");
var timer = document.querySelector("startTime");
var forQuestions = document.querySelector("forQuestions");
var custome = document.querySelector("custom");

var secondsLeft = 50;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul")


timer.addEventListener("click", function(){

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timeNow.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                timeNow.textContent = "Time has Expired";
            }
        }, 1000);       
    }
    render(questionIndex);
});



function render(questionIndex) {
    forQuestions.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        forQuestions.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        forQuestions.appendChild(listItem);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}


function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].answer) {
            score++
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;

        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }
    }

    questionIndex++;

    if (questionIndex >= questions.lenght) {
        allDone();

    } else {
        render(questionIndex);
    }
    forQuestions.appendChild(createDiv);
}


