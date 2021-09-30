let startedButton = document.querySelector("#start-button");
let quizSection = document.querySelector("#quiz-section");
let quizForm = document.querySelector("#quiz-form");
let submitButton = document.querySelector("#submit-button");
let outputText = document.querySelector("#output-text");

// array of correct answers
const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
];



submitButton.addEventListener("click", submitQuizButtonHandler);


function getStartedButtonHandler() {

    quizSection.style.display = "block";
    submitButton.style.display = "block";
}


function submitQuizButtonHandler() {

    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            console.log("correct answer");
            console.log(value);
            score++;
        } else {
            console.log(value);
            console.log("incorrect");
            console.log("correct answer", correctAnswers[index]);
        }

        console.log("Current Score", score);
        index++;
    }

    console.log("Final Score", score);

    if (score !== 0) {
        showMessage(`Your score is : ${score} / ${correctAnswers.length}`);
    } else {
        showMessage(`Your score is : ${score} / ${correctAnswers.length}`);
    }

}


function showMessage(msg) {
    outputText.style.display = "block";
    outputText.innerText = msg;
}