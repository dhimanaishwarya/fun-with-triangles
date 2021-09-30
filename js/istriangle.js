let angles = document.querySelectorAll("input");
let submitButton = document.querySelector("#submit-button");
let outputText = document.querySelector("#output-text");

submitButton.addEventListener("click", submitButtonHandler);


function submitButtonHandler() {

    let angle1 = Number(angles[0].value);
    let angle2 = Number(angles[1].value);
    let angle3 = Number(angles[2].value);

    if ((angles[0].value !== "") && (angles[1].value !== "") && (angles[2].value !== "")) {

        if ((angle1 > 0) && (angle2 > 0) && (angle3 > 0)) {
            outputText.style.display = "none";
            isTriangle(angle1, angle2, angle3);
        } else if ((angle1 < 0) || (angle2 < 0) || (angle3 < 0)) {
            showOutputText("Please enter positive value in all fields.");
        } else if ((angle1 === 0) || (angle2 === 0) || (angle3 === 0)) {
            showOutputText("You have entered Zero.Please enter positive value in all fields.");
        }

    } else if ((angles[0].value === "") || (angles[1].value === "") || (angles[2].value === "")) {
        showOutputText("Please enter all the values.");
    }
}


function isTriangle(angle1, angle2, angle3) {

    if (calculateSumOfAngles(angle1, angle2, angle3)) {

        console.log("triangle.");
        showOutputText("These angles form a triangle.😀");


    } else {

        console.log("no triangle.");
        showOutputText("These angles do not form a triangle. ");


    }

}


function calculateSumOfAngles(angle1, angle2, angle3) {

    let sumOfAngles = angle1 + angle2 + angle3;

    return sumOfAngles === 180;

}


function showOutputText(msg) {

    outputText.style.display = "block";
    outputText.innerText = msg;

}