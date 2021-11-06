

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
varPenalty = 0;