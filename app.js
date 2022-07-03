const buttons = document.querySelectorAll("button");
const curValDisplay = document.getElementById("cur-val-header");
const prevValDisplay = document.querySelector(".prev-total");

let curVal = 0;
let curValStr = "";
let prevValue = 0;
let pendingOperation = "";

function updateDisplay() {
  curValDisplay.textContent = curVal;
  prevValDisplay.textContent = prevValue;
}

// Arthematic Functions
function add() {
  prevValue += curVal;
}

function subtract() {
  if (prevValue === 0) prevValue = curVal;
  else prevValue -= curVal;
}

function multiply() {
  if (prevValue === 0) prevValue = curVal;
  else prevValue *= curVal;
}

function divide() {
  if (prevValue === 0) prevValue = curVal;
  else prevValue /= curVal;
}

function remainder() {
  if (prevValue === 0) prevValue = curVal;
  else prevValue %= curVal;
}

function reset() {
  curVal = 0;
  curValStr = "";
  prevValue = 0;
  pendingOperation = "";
  updateDisplay();
}

//   Calculator Main Function
function evaluate(value, type) {
  if (type === "number") {
    curValStr += value;
    curVal = +curValStr;
    if (value === ".") {
      curVal = 0.0;
    }
    curVal = +curValStr;
  } else if (type === "eval") {
    if (pendingOperation === "") prevValue = curVal;
    else if (pendingOperation === "+") add();
    else if (pendingOperation === "-") subtract();
    else if (pendingOperation === "X") multiply();
    else if (pendingOperation === "/") divide();
    else if (pendingOperation === "%") remainder();
    console.log(value);
    if (value !== "=") {
      console.log("here");
      curVal = 0;
      curValStr = "";
      pendingOperation = value;
    } else {
      pendingOperation = "";
      curVal = prevValue;
      curValStr = prevValue.toString();
    }
  } else if (type === "clear") reset();
  updateDisplay();
}

// Listening to button events
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const method = e.target.className;
    console.log(prevValue);
    if (method === "number") {
      evaluate(e.target.textContent, "number");
    } else if (method === "eval") {
      evaluate(e.target.textContent, "eval");
    } else if (method === "reset") {
      evaluate(0, "clear");
    }
  });
});

// Footer year dynamic
const yearDisplay = document.getElementById("year");
const dt = new Date();
const curYear = dt.getFullYear();
yearDisplay.textContent = curYear;
