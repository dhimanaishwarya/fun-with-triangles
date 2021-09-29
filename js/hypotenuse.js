let triangleSides = document.querySelectorAll("input");
let submitButton = document.querySelector("#submit-button");
let outputText = document.querySelector("#output-text");

submitButton.addEventListener("click", submitButtonHandler);


function submitButtonHandler() {

    let side1 = Number(triangleSides[0].value);
    let side2 = Number(triangleSides[1].value);

    //input validations 
    if ((triangleSides[0].value !== "") && (triangleSides[1].value !== "")) {

        if (side1 > 0 && side2 > 0) {

            outputText.style.display = "none";
            let hypotenuseLength = calculateHypotenuseLength(side1, side2);
            outputText.style.display = "block";
            outputText.innerText = `The length of hypotenuse is: ${hypotenuseLength} cm`;
        } else if (side1 < 0 || side2 < 0) {
            showMessage("Please enter positive value in both fields.");
        } else if (side1 === 0 || side2 === 0) {
            showMessage("Please enter values greater than zero");
        }
    } else if ((triangleSides[0].value === "") && (triangleSides[1].value === "")) {
        showMessage("Enter length of both triangleSides given above. None should be empty.");
    } else if ((triangleSides[0].value === "") || (triangleSides[1].value === "")) {
        showMessage("One out of two lengths is missing. Please enter both the values.");
    }

}


function calculateHypotenuseLength(side1, side2) {

    let hypotenuseLength = Math.sqrt(side1 ** 2 + side2 ** 2);
    return hypotenuseLength.toFixed(2);

}


function showMessage(msg) {

    outputText.style.display = "block";
    outputText.style.color = "red";
    outputText.innerText = msg;

}