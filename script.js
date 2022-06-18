function add(a, b) {
    return ((a * 10) + (b * 10)) / 10;
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

function reset() {
    displayValue = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    display.textContent = '';
}

function checkDecimal(value) {
    if (operator === '') { //checks first operand
        console.log("Operator is blank");
        if (displayValue.includes('.') !== true) {
            display.textContent += value;
            displayValue = displayValue.concat(value);
        }
    } else if (operator !== '') { //checks second operand
        if (displayValue.includes('.') !== true) {
            display.textContent += value;
            displayValue = displayValue.concat(value);
        }
    }
}

function calculator(e) {
    let value = e;
    if (value === 'c') {
        reset();
    } else if ((value === '/' || value === '*' || value === '-' || value === '+') && (operator === '')) {
        firstOperand = displayValue;
        displayValue = '';
        operator = value;
        display.textContent += value;
    } else if ((value === '=') || ((value === '/' || value === '*' || value === '-' || value === '+') && (operator !== ''))) {
        secondOperand = displayValue;
        displayValue = operate(firstOperand, secondOperand, operator).toString();
        display.textContent = displayValue;
        if (value === '='){
            firstOperand = '';
            secondOperand = '';
            operator = '';
        } else {
            firstOperand = displayValue;
            operator = value;
            display.textContent += operator;
            displayValue = '';
        }
    } else if (value === '.') {
        checkDecimal(value);
    } else if (value === '<-') {
        
    } else {
        display.textContent += value;
        displayValue = displayValue.concat(value);
    }

}

const display = document.querySelector('#display');
let displayValue = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';
let keybinds = '0123456789./*-+=c';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    calculator(e.target.innerText);
}));
window.addEventListener('keydown', function(e) {
    let value = e.key;
    if (value === 'Enter') {
        value = '=';
    } else if (value === 'Delete') {
        value = 'c';
    }
    if (keybinds.includes(value)) {
        calculator(value);
    }
});