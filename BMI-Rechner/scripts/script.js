let inputAge = document.getElementById("age");
let inputHeight = document.getElementById("height");
let inputWeight = document.getElementById("weight");
const prename = document.getElementById("prename");
const surname = document.getElementById("surname");
let male = document.getElementById("male");
const submit = document.getElementById("submit");
let bmiResult = 0;
let gender = "unset";

submit.addEventListener("click", async (event) => {
    event.preventDefault();
    console.log(inputHeight.value);
    console.log(inputWeight.value);
    console.log("test");
    calculateBmi();
    checkGender();

    const bmi = {
      fistName: prename.value,
      lastName: surname.value,
      age: age.value,
      gender: gender.value,
      bmi: bmiResult,
      date: new Date
    };
    console.log(JSON.stringify(bmi));
    await sendJSONStringWithPOST(
        'http://127.0.0.1:3000/bmi',
        JSON.stringify(bmi)
      );
    window.location.href = "result.html";
});


function calculateBmi() {
    bmiResult = (inputWeight.value / Math.pow(inputHeight.value, 2)) * 10000;
    bmiResult = bmiResult.toFixed(2);
}
function checkGender(){
    if (male.checked){
        gender = male;
   }else{
       gender = female;
   }
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