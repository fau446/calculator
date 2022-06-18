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

const display = document.querySelector('#display');
let displayValue = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    let value = e.target.innerText;
    if (value == 'AC') {
        reset();
    } else if ((value === '/' || value === '*' || value === '-' || value === '+') && (operator === '')) {
        firstOperand = displayValue;
        displayValue = '';
        operator = value;
        display.textContent += value;
        //console.log(`First Operand: ${firstOperand}`);
        //console.log(`Operator: ${operator}`);
    } else if ((value === '=') || ((value === '/' || value === '*' || value === '-' || value === '+') && (operator !== ''))) {
        secondOperand = displayValue;
        //console.log(`Second Operand: ${secondOperand}`);
        displayValue = operate(firstOperand, secondOperand, operator).toString();
        display.textContent = displayValue;
        if (value === '='){
            firstOperand = '';
            secondOperand = '';
            operator = '';
            //console.log(`display: ${displayValue}`);
        } else {
            firstOperand = displayValue;
            operator = value;
            display.textContent += operator;
            //console.log(`other operator: ${operator}`)
            //console.log(`first Operand: ${firstOperand}`);
            //console.log(`display value else: ${displayValue}`);
            displayValue = '';
        }
    } else if (value === '.') { //limits operands to 1 decimal each
        if (operator === '') { //checks first operand
            console.log("Operator is blank");
            if (displayValue.includes('.') !== true) {
                display.textContent += value;
                displayValue = displayValue.concat(value);
            }
        } else if (operator !== '') { //checks second operand
            console.log("Operator is not blank");
            if (displayValue.includes('.') !== true) {
                display.textContent += value;
                displayValue = displayValue.concat(value);
            }
            console.log(`Display value = ${displayValue}`)
        }
    } else {
        display.textContent += value;
        displayValue = displayValue.concat(value);
    }

})
)

// for limiting each operand for one decimal max, check
// if operator is blank or not.
// if operator is blank, check if decimal exists in first operand.
// else check if decimal exists in second operand.