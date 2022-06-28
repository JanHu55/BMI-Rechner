let weightClass = document.getElementById("weightClass");
const femaleTabel = document.getElementById("femaleTabel");
const maleTabel = document.getElementById("maleTabel");
const tableBody = document.getElementById("list");
let result = "default";

getFromServer('http://127.0.0.1:3000/bmi');
updateView();

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
         weightClass.textContent = result;
}
function checkGender(gender){
    if (gender == "Männlich"){
        femaleTabel.classList.add("hide");
        maleTabel.classList.remove("hide");
       console.log("male");
   }else{
       femaleTabel.classList.remove("hide");
       maleTabel.classList.add("hide");
       console.log("weiblich");
   }
}

async function getFromServer(url) {
    const response = await fetch(url);
    const content = await response.json();
    console.log(content);
    return content;
}
async function updateView() {
    const storageString = await getFromServer('http://127.0.0.1:3000/bmi');
    const currentTableEntries = storageString;
    console.log(currentTableEntries);
    if (!currentTableEntries) {
        return;
    }
    bmi.textContent = "BMI: " + currentTableEntries[0].bmi;
    classifieWeight(currentTableEntries[0].bmi);
    checkGender(currentTableEntries[0].gender);

    // interiere die Tabellenelemente und erstelle für jedes Element einen Tabelleneintrag
    for (const element of currentTableEntries) {
        createNewEventEntry(element);
    }
}
function createNewEventEntry(object) {
    // Element für Tabellenreihe anlegen
    const tableEntry = document.createElement("tr");
    // Addressierung durch eine entsprechende Klasse
    tableEntry.classList.add("table-entry");
    let date= object.date;
    let firstname= object.fistName;
    let lastname= object.lastName;
    let age= object.age;
    let gender= object.gender;
    let bmi= object.bmi;
    
    // Auslesen der Input-Werte
    
    // lege die einzelnen Tabellenzellen an
    const cells = [
        createTableCell(formatDate(date), "data-date"),
        createTableCell(firstname, "data-firstname"),
        createTableCell(lastname, "data-lastname"),
        createTableCell(age, "data-age"),
        createTableCell(gender, "data-gender"),
        createTableCell(bmi, "data-bmi"),
    ];

    // füge die einzelnen Tabellenzellen der Tabellenreihe hinzu
    for (const cell of cells) {
        tableEntry.appendChild(cell);
    }

    // pflege die gesamte Tabellenreihe in die Tabellenstruktur ein
    tableBody.appendChild(tableEntry);
}
function createTableCell(value, name) {
    const tablecell = document.createElement("td");
    tablecell.setAttribute(name, value);
    tablecell.textContent = value;
    return tablecell;
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

