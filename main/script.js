let screen = document.getElementById("screen");
let currentInput = "";
let currentOperator = "";

function appendNumber(value) {
    if (currentInput.toString().length >= 16) return;
    currentInput = currentInput + value;
    screen.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === "" && operator !== ".") return;
    if (currentInput.toString().length >= 16) return;

    const lastChar = currentInput.toString().slice(-1);
    if (["+", "-", "*", "/", "%", "."].includes(lastChar)) {
        currentInput = currentInput.toString().slice(0, -1);
    }

    currentInput = currentInput + operator;
    screen.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
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

function clearEntry() {
    currentInput = currentInput.toString().slice(0, -1);
    screen.textContent = currentInput;
}

