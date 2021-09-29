let triangleLengths = document.querySelectorAll("input");
let submitButton = document.querySelector("#submit-button");
let outputText = document.querySelector("#output-text");

submitButton.addEventListener("click", submitButtonHandler);


function submitButtonHandler() {

    let base = Number(triangleLengths[0].value);
    let height = Number(triangleLengths[1].value);

    //input validations 
    if ((triangleLengths[0].value !== "") && (triangleLengths[1].value !== "")) {


        if (base > 0 && height > 0) {
            let area = calculateArea(base, height);
            outputText.style.display = "none";;
            outputText.innerText = `The area of the triangle is ${area} cm² `;

        } else if (base < 0 || height < 0) {
            showMessage("Please enter positive values in both fields.");
        } else if (base === 0 || height === 0) {
            showMessage("Please enter values greater than zero in fields.");
        }

    } else if ((triangleLengths[0].value === "") && (triangleLengths[1].value === "")) {
        showMessage("Please enter values in both fields.");
    } else if ((triangleLengths[0].value === "") || (triangleLengths[1].value === "")) {
        showMessage("Please enter values in both fields.");
    }
}

function calculateArea(base, height) {
    let area = (base * height) / 2;
    return area.toFixed(2);
}

function showMessage(msg) {

    outputText.style.display = "block";
    outputText.innerText = msg;
    outputText.style.color = "red";

}