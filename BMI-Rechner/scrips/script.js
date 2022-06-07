let inputAge = document.getElementById("age");
let inputHeight = document.getElementById("height");
let inputWeight = document.getElementById("weight");
const prename = document.getElementById("prename");
localStorage.setItem("prename", prename);
const surname = document.getElementById("surname");
localStorage.setItem("surname", surname);
let male = document.getElementById("male");
const submit = document.getElementById("submit");
let bmiResult = 0;
let gender = "unset";

submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(inputHeight.value);
    console.log(inputWeight.value);
    calculateBmi();
    checkGender();
    sendJSONStringWithPOST(
        'http://127.0.0.1:3000/bmi',
        JSON.stringify({ bmi: bmiResult})
      );
    //window.location.href = "result.html";
});

function calculateBmi() {
    bmiResult = (inputWeight.value / Math.pow(inputHeight.value, 2)) * 10000;
    bmiResult = bmiResult.toFixed(2);
    localStorage.setItem("bmi", bmiResult);
}
function checkGender(){
    if (male.checked){
        gender = true;
   }else{
       gender = false;
   }
   localStorage.setItem("gender", gender);
}
async function sendJSONStringWithPOST(url, jsonString) {
    const response = await fetch(url, {
      method: 'post',
      body: jsonString
    });
    const text = await response.text();
    console.log(text);
  }

/* let checkValue = () => {
    firstInpur.checkValue;
} */
/* Weisser Konsolen Output = String Lila = Zahlen */