let weightClass = document.getElementById("weightClass");
const prename = document.getElementById("prename");
const surname = document.getElementById("surname");
let male = document.getElementById("male");
let female = document.getElementById("female");
const tableBody = document.getElementById("list")
const femaleTabel = document.getElementById("femaleTabel");
const maleTabel = document.getElementById("maleTabel");
const bmi = localStorage.getItem("bmi");
let result = "default";

classifieWeight();
checkGender();

function classifieWeight() {
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
         weightClass.textContent = result;
}
function checkGender(){
    if (male.checked){
        femaleTabel.classList.add("hide");
        maleTabel.classList.remove("hide");
       console.log("male");
   }else{
       femaleTabel.classList.remove("hide");
       maleTabel.classList.add("hide");
       console.log("weiblich");
   }
}
function createCell(){
    const tablecell = document.createElement("td");
    
}
