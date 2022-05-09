let inputAge = document.getElementById("age");
let male = document.getElementById("male");
let female = document.getElementById("female");
let inputHeigt = document.getElementById("height");
let inputWeight = document.getElementById("weight");
const submit = document.getElementById("submit");
let bmi = document.getElementById("bmi");
let weightClass = document.getElementById("weightClass");
const femaleTabel = document.getElementById("femaleTabel");
const maleTabel = document.getElementById("maleTabel");


submit.addEventListener("click", () => {
    bmiCalculation(bmi, inputWeight, inputHeigt);
    classifieWeight(bmi);
    console.log("funktioniert");
});
/* console.log(input); debug */

function bmiCalculation() {
    bmi = inputWeight / Math.pow(inputWeight, 2);
    console.log(bmi);
}

/*function checkGender() {
     if (male.checked){
         femaleTabel.classList.add("hide");
         maleTabel.classList.remove("hide");
        console.log("male");
    }else{
        femaleTabel.classList.remove("hide");
        maleTabel.classList.add("hide");
        console.log("weiblich");
    }
} */
function classifieWeight(bmi) {
    if (bmi < 18.5) {
        result = "Untergewicht";
         } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Normalgewicht";
         } else if (25 <= bmi && bmi <= 29.9) {
        result = "Übergewicht";
         } else if (30 <= bmi && bmi <= 34.9) {
        result = "Adipositas";
         } else if (35 <= bmi) {
        result = "Adipositas II";
         }
}

/* let checkValue = () => {
    firstInpur.checkValue;
} */
/* Weisser Konsolen Output = String Lila = Zahlen */