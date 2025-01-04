const numSign = [...document.querySelectorAll(".numbers, .sign")];
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");
const inputCase = document.querySelector("#input");

let result = "";
let freeze = false;

clearButton.addEventListener("click", clearResults);
equalButton.addEventListener("click", calculateResults);

function clearResults() {
  freeze = false;
  result = "";
  inputCase.value = "0";
}

numSign.forEach((numSign) => {
  numSign.addEventListener("click", takeyourNumber);
});

function takeyourNumber(event) {
  if (freeze) {
    event.preventDefault();
    return;
  }

  const value = event.target.value;

  if (inputCase.value === "0" && value === "0") {
    return;
  }

  if (result.length === 0) {
    inputCase.value = "";
  }

  const operators = ["/", "*", "+", "-"];

  if (
    operators.includes(result[result.length - 1]) &&
    operators.includes(value)
  ) {
    inputCase.value = inputCase.value.slice(0, -1) + value; // Replace last character
    result = inputCase.value; // Update result
    return;
  }

  result += value;
  inputCase.value += value; // Correctly append value to inputCase
}

function calculateResults() {
  try {
    const evaluatedResult = eval(result); // Be cautious with eval
    inputCase.value = evaluatedResult;
    freeze = true; // Freeze after calculation
  } catch (e) {
    inputCase.value = "ERROR";
    setTimeout(() => {
      if (confirm("It is wrong kis7ablek 7na sahlin a mikhi ")) {
        clearResults();
      }
    }, 0);
  }
}
