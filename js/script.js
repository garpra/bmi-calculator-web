const WEIGHT_INPUT = document.getElementById("weight-input");
const HEIGHT_INPUT = document.getElementById("height-input");
const CALCULATE_BTN = document.getElementById("calculate-btn");
const RESET_BTN = document.getElementById("reset-btn");
const RESULT_TEXT = document.querySelector("#result-area h3");
const CATEGORY_TEXT = document.querySelector("#result-area p");

RESET_BTN.addEventListener("click", (e) => {
  WEIGHT_INPUT.value = "";
  HEIGHT_INPUT.value = "";
  RESULT_TEXT.textContent = 18.5;
  CATEGORY_TEXT.textContent = "Normal";
});

CALCULATE_BTN.addEventListener("click", (e) => {
  let weight = WEIGHT_INPUT.value;
  let height = HEIGHT_INPUT.value / 100;
  let calculate = (weight / (height * height)).toFixed(2);
  let category = "";

  if (calculate < 18.5) {
    category = "Underweight";
  } else if (calculate > 18.5 && calculate < 24.9) {
    category = "Normal";
  } else if (calculate > 25.0 && calculate < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesitas";
  }

  RESULT_TEXT.textContent = calculate;
  CATEGORY_TEXT.textContent = category;
});
