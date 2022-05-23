let inputAge = document.getElementById("age");
let inputHeight = document.getElementById("height");
let inputWeight = document.getElementById("weight");
const submit = document.getElementById("submit");
let bmi = document.getElementById("bmi");
let bmiResult = 0;

submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(inputHeight.value);
    console.log(inputWeight.value);
    calculateBmi();
    window.location.href = "result.html";
});

function calculateBmi() {
    bmiResult = (inputWeight.value / Math.pow(inputHeight.value, 2)) * 10000;
    bmiResult = bmiResult.toFixed(2);
    bmi.textContent = bmiResult;
    localStorage.setItem("bmi", bmiResult);
}
/* console.log(input); debug */
/* let checkValue = () => {
    firstInpur.checkValue;
} */
/* Weisser Konsolen Output = String Lila = Zahlen */