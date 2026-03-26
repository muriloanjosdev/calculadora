let screen = document.getElementById("screen");
let currentInput = "";
let currentOperator = "";

function appendNumber(value){
    currentInput = currentInput + value;
    screen.textContent = currentInput;
}

function appendOperator(operator){
    if(currentInput === "" && operator !== ".") return;
    currentInput = currentInput + operator;
    screen.textContent = currentInput; 
}

function calculate(){
    try {
        let result = eval(currentInput);
        if (!Number.isInteger(result)) {
            result = result.toFixed(3);
        }
        currentInput = result;
        screen.textContent = currentInput;
    } catch {
        screen.textContent = "Error";
        currentInput = "";
    }
}

function clearScreen() {
    currentInput = "";
    screen.textContent = currentInput;
}