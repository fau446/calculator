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
    
    if ((value === '/' || value === '*' || value === '-' || value === '+') && (operator === '')) {
        firstOperand = displayValue;
        displayValue = '';
        operator = value;
        console.log(`First Operand: ${firstOperand}`);
        console.log(`Operator: ${operator}`);
    } else if ((value === '=') || ((value === '/' || value === '*' || value === '-' || value === '+') && (operator !== ''))) {
        secondOperand = displayValue;
        console.log(`Second Operand: ${secondOperand}`);
        displayValue = operate(firstOperand, secondOperand, operator).toString();
        display.textContent = displayValue;
        if (value === '='){
            firstOperand = '';
            secondOperand = '';
            operator = '';
            console.log(`display: ${displayValue}`);
        } else {
            firstOperand = displayValue;
            operator = value;
            display.textContent += operator;
            console.log(`other operator: ${operator}`)
            console.log(`first Operand: ${firstOperand}`);
            console.log(`display value else: ${displayValue}`);
            displayValue = '';
        }
    } else {
        displayValue = displayValue.concat(value);
    }
    
    //console.log(displayValue);
    //console.log(operand);
})
)