function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}

const display = document.querySelector('#display');
let displayValue = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    let value = e.target.innerText;
    display.textContent += value;
    
    if (value === '/' || value === '*' || value === '-' || value === '+') {
        firstOperand = displayValue;
        displayValue = '';
        operator = value;
        console.log(`First Operand: ${firstOperand}`);
        console.log(`Operator: ${operator}`);
    } else if (value === '=') {
        secondOperand = displayValue;
        console.log(`Second Operand: ${secondOperand}`);
        displayValue = operate(firstOperand, secondOperand, operator).toString();
        display.textContent = displayValue;
        firstOperand = '';
        secondOperand = '';
        operator = '';
        console.log(`display: ${displayValue}`);
    } else {
        displayValue = displayValue.concat(value);
    }
    
    //console.log(displayValue);
    //console.log(operand);
})
)