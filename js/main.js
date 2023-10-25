// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}




function traverseSurveyData() {
 let YesCounter = 0;
 let NoCounter = 0;
 let MaybeCounter = 0;

for (let i = 0; i <surveyData.length;i++){
  if (surveyData[i] === `Yes`){
  YesCounter++;
  }else if (surveyData[i] === `No`){
NoCounter++;
  }else{
    MaybeCounter++;
  } 
}
// Menu Option Functions
outputEl.innerHTML = 
`Survey Data Yes ${YesCounter} Survey Data No ${NoCounter} 
Survey Data ${MaybeCounter}`;
  console.log(surveyData);

}

function traverseAgeData() {
let AgesUnder18 = 0;
let AgesBetween1835 = 0;
let AgesBetween3565 = 0;
let AgesAbove65 = 0;
for(let i = 0; i < ageData.length; i++){
if (ageData[i] < 18){
  AgesUnder18++;
}else if (ageData[i] <=35){
  AgesBetween1835++;
} else if (ageData[i] <=65){
  AgesBetween3565++;
}else{
  AgesAbove65++;
}
  outputEl.innerHTML = `Under 18: (${AgesUnder18}) , Ages 18 - 35:(${AgesBetween1835}), Ages 35 - 65: (${AgesBetween3565}), Ages Above 65: (${AgesAbove65})`;
  console.log(ageData);
}
}

function traverseNumberData() {
let even = 0;
let odd = 0;
for(let i = 0; i < numberData.length; i++)
if (numberData[i] % 2 === 0){
  even++;
}else{
  odd++
}
  outputEl.innerHTML = `# of even number ${even}, # of odd number ${odd}`;
  console.log(numberData);
}
