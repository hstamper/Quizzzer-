

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
var timer = document.querySelector("#startTime");
var forQuestions = document.querySelector("#forQuestions");
var custome = document.querySelector("#custom");

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

            if (questionIndex >= questions.lenght) {
                allDone();
            }
           
        }, 1000);       
    }
    render(questionIndex);
});



function render(questionIndex) {
    forQuestions.innerHTML = "";
    ulCreate.innerHTML = "";

    
        var userQuestion = questions[questionIndex].title;
        console.log(userQuestion);
        var userChoices = questions[questionIndex].choices;
        forQuestions.textContent = userQuestion;
    

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        forQuestions.appendChild(ulCreate);
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

    if (questionIndex == questions.length) {
        allDone();

    } else {
        render(questionIndex);
        
    }
    forQuestions.appendChild(createDiv);
}

function allDone() {
    forQuestions.innerHTML = "";
    

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    forQuestions.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    forQuestions.appendChild(createP);

    if (secondsLeft >=0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;
        timeNow.innerHTML = "";

        forQuestions.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials:  ";

    forQuestions.appendChild(createLabel);


    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    forQuestions.appendChild(createInput);


    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "Submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "Submit";

    forQuestions.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;
        if (initials === null) {
            console.log("Nothing Entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            window.location.replace("highscores.html")
        }
    });

}

